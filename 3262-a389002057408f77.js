"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3262],{

/***/ 73262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  yf: () => (/* binding */ datadogLogs)
});

// UNUSED EXPORTS: HandlerType, Logger, StatusType

;// ./node_modules/@datadog/browser-core/esm/tools/display.js
/* eslint-disable local-rules/disallow-side-effects */
/**
 * Keep references on console methods to avoid triggering patched behaviors
 *
 * NB: in some setup, console could already be patched by another SDK.
 * In this case, some display messages can be sent by the other SDK
 * but we should be safe from infinite loop nonetheless.
 */
const ConsoleApiName = {
    log: 'log',
    debug: 'debug',
    info: 'info',
    warn: 'warn',
    error: 'error',
};
/**
 * When building JS bundles, some users might use a plugin[1] or configuration[2] to remove
 * "console.*" references. This causes some issue as we expect `console.*` to be defined.
 * As a workaround, let's use a variable alias, so those expressions won't be taken into account by
 * simple static analysis.
 *
 * [1]: https://babeljs.io/docs/babel-plugin-transform-remove-console/
 * [2]: https://github.com/terser/terser#compress-options (look for drop_console)
 */
const globalConsole = console;
const originalConsoleMethods = {};
Object.keys(ConsoleApiName).forEach((name) => {
    originalConsoleMethods[name] = globalConsole[name];
});
const PREFIX = 'Datadog Browser SDK:';
const display = {
    debug: originalConsoleMethods.debug.bind(globalConsole, PREFIX),
    log: originalConsoleMethods.log.bind(globalConsole, PREFIX),
    info: originalConsoleMethods.info.bind(globalConsole, PREFIX),
    warn: originalConsoleMethods.warn.bind(globalConsole, PREFIX),
    error: originalConsoleMethods.error.bind(globalConsole, PREFIX),
};
const DOCS_ORIGIN = 'https://docs.datadoghq.com';
const DOCS_TROUBLESHOOTING = `${DOCS_ORIGIN}/real_user_monitoring/browser/troubleshooting`;
const MORE_DETAILS = 'More details:';
//# sourceMappingURL=display.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/catchUserErrors.js

function catchUserErrors(fn, errorMsg) {
    return (...args) => {
        try {
            return fn(...args);
        }
        catch (err) {
            display.error(errorMsg, err);
        }
    };
}
//# sourceMappingURL=catchUserErrors.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/monitor.js

let onMonitorErrorCollected;
let debugMode = false;
function startMonitorErrorCollection(newOnMonitorErrorCollected) {
    onMonitorErrorCollected = newOnMonitorErrorCollected;
}
function setDebugMode(newDebugMode) {
    debugMode = newDebugMode;
}
function resetMonitor() {
    onMonitorErrorCollected = undefined;
    debugMode = false;
}
function monitored(_, __, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const decorated = onMonitorErrorCollected ? monitor(originalMethod) : originalMethod;
        return decorated.apply(this, args);
    };
}
function monitor(fn) {
    return function () {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return callMonitored(fn, this, arguments);
    }; // consider output type has input type
}
function callMonitored(fn, context, args) {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return fn.apply(context, args);
    }
    catch (e) {
        monitorError(e);
    }
}
function monitorError(e) {
    displayIfDebugEnabled(e);
    if (onMonitorErrorCollected) {
        try {
            onMonitorErrorCollected(e);
        }
        catch (e) {
            displayIfDebugEnabled(e);
        }
    }
}
function displayIfDebugEnabled(...args) {
    if (debugMode) {
        display.error('[MONITOR]', ...args);
    }
}
//# sourceMappingURL=monitor.js.map
;// ./node_modules/@datadog/browser-core/esm/boot/init.js



function makePublicApi(stub) {
    const publicApi = {
        version: "6.18.1",
        // This API method is intentionally not monitored, since the only thing executed is the
        // user-provided 'callback'.  All SDK usages executed in the callback should be monitored, and
        // we don't want to interfere with the user uncaught exceptions.
        onReady(callback) {
            callback();
        },
        ...stub,
    };
    // Add a "hidden" property to set debug mode. We define it that way to hide it
    // as much as possible but of course it's not a real protection.
    Object.defineProperty(publicApi, '_setDebug', {
        get() {
            return setDebugMode;
        },
        enumerable: false,
    });
    return publicApi;
}
function defineGlobal(global, name, api) {
    const existingGlobalVariable = global[name];
    if (existingGlobalVariable && !existingGlobalVariable.q && existingGlobalVariable.version) {
        display.warn('SDK is loaded more than once. This is unsupported and might have unexpected behavior.');
    }
    global[name] = api;
    if (existingGlobalVariable && existingGlobalVariable.q) {
        existingGlobalVariable.q.forEach((fn) => catchUserErrors(fn, 'onReady callback threw an error:')());
    }
}
//# sourceMappingURL=init.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/getGlobalObject.js
/**
 * inspired by https://mathiasbynens.be/notes/globalthis
 */
function getGlobalObject() {
    if (typeof globalThis === 'object') {
        return globalThis;
    }
    Object.defineProperty(Object.prototype, '_dd_temp_', {
        get() {
            return this;
        },
        configurable: true,
    });
    // @ts-ignore _dd_temp is defined using defineProperty
    let globalObject = _dd_temp_;
    // @ts-ignore _dd_temp is defined using defineProperty
    delete Object.prototype._dd_temp_;
    if (typeof globalObject !== 'object') {
        // on safari _dd_temp_ is available on window but not globally
        // fallback on other browser globals check
        if (typeof self === 'object') {
            globalObject = self;
        }
        else if (typeof window === 'object') {
            globalObject = window;
        }
        else {
            globalObject = {};
        }
    }
    return globalObject;
}
//# sourceMappingURL=getGlobalObject.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/queueMicrotask.js

function queueMicrotask(callback) {
    const nativeImplementation = window.queueMicrotask;
    if (typeof nativeImplementation === 'function') {
        nativeImplementation(monitor(callback));
    }
    else {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises -- the callback is monitored, so it'll never throw
        Promise.resolve().then(monitor(callback));
    }
}
//# sourceMappingURL=queueMicrotask.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/observable.js

// eslint-disable-next-line no-restricted-syntax
class Observable {
    constructor(onFirstSubscribe) {
        this.onFirstSubscribe = onFirstSubscribe;
        this.observers = [];
    }
    subscribe(observer) {
        this.addObserver(observer);
        return {
            unsubscribe: () => this.removeObserver(observer),
        };
    }
    notify(data) {
        this.observers.forEach((observer) => observer(data));
    }
    addObserver(observer) {
        this.observers.push(observer);
        if (this.observers.length === 1 && this.onFirstSubscribe) {
            this.onLastUnsubscribe = this.onFirstSubscribe(this) || undefined;
        }
    }
    removeObserver(observer) {
        this.observers = this.observers.filter((other) => observer !== other);
        if (!this.observers.length && this.onLastUnsubscribe) {
            this.onLastUnsubscribe();
        }
    }
}
function mergeObservables(...observables) {
    return new Observable((globalObservable) => {
        const subscriptions = observables.map((observable) => observable.subscribe((data) => globalObservable.notify(data)));
        return () => subscriptions.forEach((subscription) => subscription.unsubscribe());
    });
}
// eslint-disable-next-line no-restricted-syntax
class BufferedObservable extends Observable {
    constructor(maxBufferSize) {
        super();
        this.maxBufferSize = maxBufferSize;
        this.buffer = [];
    }
    notify(data) {
        this.buffer.push(data);
        if (this.buffer.length > this.maxBufferSize) {
            this.buffer.shift();
        }
        super.notify(data);
    }
    subscribe(observer) {
        let closed = false;
        const subscription = {
            unsubscribe: () => {
                closed = true;
                this.removeObserver(observer);
            },
        };
        queueMicrotask(() => {
            for (const data of this.buffer) {
                if (closed) {
                    return;
                }
                observer(data);
            }
            if (!closed) {
                this.addObserver(observer);
            }
        });
        return subscription;
    }
    /**
     * Drop buffered data and don't buffer future data. This is to avoid leaking memory when it's not
     * needed anymore. This can be seen as a performance optimization, and things will work probably
     * even if this method isn't called, but still useful to clarify our intent and lowering our
     * memory impact.
     */
    unbuffer() {
        queueMicrotask(() => {
            this.maxBufferSize = this.buffer.length = 0;
        });
    }
}
//# sourceMappingURL=observable.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/trackingConsent.js

const TrackingConsent = {
    GRANTED: 'granted',
    NOT_GRANTED: 'not-granted',
};
function createTrackingConsentState(currentConsent) {
    const observable = new Observable();
    return {
        tryToInit(trackingConsent) {
            if (!currentConsent) {
                currentConsent = trackingConsent;
            }
        },
        update(trackingConsent) {
            currentConsent = trackingConsent;
            observable.notify();
        },
        isGranted() {
            return currentConsent === TrackingConsent.GRANTED;
        },
        observable,
    };
}
//# sourceMappingURL=trackingConsent.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/getZoneJsOriginalValue.js

/**
 * Gets the original value for a DOM API that was potentially patched by Zone.js.
 *
 * Zone.js[1] is a library that patches a bunch of JS and DOM APIs. It usually stores the original
 * value of the patched functions/constructors/methods in a hidden property prefixed by
 * __zone_symbol__.
 *
 * In multiple occasions, we observed that Zone.js is the culprit of important issues leading to
 * browser resource exhaustion (memory leak, high CPU usage). This method is used as a workaround to
 * use the original DOM API instead of the one patched by Zone.js.
 *
 * [1]: https://github.com/angular/angular/tree/main/packages/zone.js
 */
function getZoneJsOriginalValue(target, name) {
    const browserWindow = getGlobalObject();
    let original;
    if (browserWindow.Zone && typeof browserWindow.Zone.__symbol__ === 'function') {
        original = target[browserWindow.Zone.__symbol__(name)];
    }
    if (!original) {
        original = target[name];
    }
    return original;
}
//# sourceMappingURL=getZoneJsOriginalValue.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/timer.js



function timer_setTimeout(callback, delay) {
    return getZoneJsOriginalValue(getGlobalObject(), 'setTimeout')(monitor(callback), delay);
}
function timer_clearTimeout(timeoutId) {
    getZoneJsOriginalValue(getGlobalObject(), 'clearTimeout')(timeoutId);
}
function timer_setInterval(callback, delay) {
    return getZoneJsOriginalValue(getGlobalObject(), 'setInterval')(monitor(callback), delay);
}
function timer_clearInterval(timeoutId) {
    getZoneJsOriginalValue(getGlobalObject(), 'clearInterval')(timeoutId);
}
//# sourceMappingURL=timer.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/utils/functionUtils.js

// use lodash API
function throttle(fn, wait, options) {
    const needLeadingExecution = options && options.leading !== undefined ? options.leading : true;
    const needTrailingExecution = options && options.trailing !== undefined ? options.trailing : true;
    let inWaitPeriod = false;
    let pendingExecutionWithParameters;
    let pendingTimeoutId;
    return {
        throttled: (...parameters) => {
            if (inWaitPeriod) {
                pendingExecutionWithParameters = parameters;
                return;
            }
            if (needLeadingExecution) {
                fn(...parameters);
            }
            else {
                pendingExecutionWithParameters = parameters;
            }
            inWaitPeriod = true;
            pendingTimeoutId = timer_setTimeout(() => {
                if (needTrailingExecution && pendingExecutionWithParameters) {
                    fn(...pendingExecutionWithParameters);
                }
                inWaitPeriod = false;
                pendingExecutionWithParameters = undefined;
            }, wait);
        },
        cancel: () => {
            timer_clearTimeout(pendingTimeoutId);
            inWaitPeriod = false;
            pendingExecutionWithParameters = undefined;
        },
    };
}
// eslint-disable-next-line @typescript-eslint/no-empty-function
function functionUtils_noop() { }
//# sourceMappingURL=functionUtils.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/stackTrace/computeStackTrace.js
/**
 * Cross-browser stack trace computation.
 *
 * Reference implementation: https://github.com/csnover/TraceKit/blob/04530298073c3823de72deb0b97e7b38ca7bcb59/tracekit.js
 */
const UNKNOWN_FUNCTION = '?';
function computeStackTrace(ex) {
    var _a, _b;
    const stack = [];
    let stackProperty = tryToGetString(ex, 'stack');
    const exString = String(ex);
    if (stackProperty && stackProperty.startsWith(exString)) {
        stackProperty = stackProperty.slice(exString.length);
    }
    if (stackProperty) {
        stackProperty.split('\n').forEach((line) => {
            const stackFrame = parseChromeLine(line) || parseChromeAnonymousLine(line) || parseWinLine(line) || parseGeckoLine(line);
            if (stackFrame) {
                if (!stackFrame.func && stackFrame.line) {
                    stackFrame.func = UNKNOWN_FUNCTION;
                }
                stack.push(stackFrame);
            }
        });
    }
    if (stack.length > 0 && isWronglyReportingCustomErrors() && ex instanceof Error) {
        // if we are wrongly reporting custom errors
        const constructors = [];
        // go through each inherited constructor
        let currentPrototype = ex;
        while ((currentPrototype = Object.getPrototypeOf(currentPrototype)) &&
            isNonNativeClassPrototype(currentPrototype)) {
            const constructorName = ((_a = currentPrototype.constructor) === null || _a === void 0 ? void 0 : _a.name) || UNKNOWN_FUNCTION;
            constructors.push(constructorName);
        }
        // traverse the stacktrace in reverse order because the stacktrace starts with the last inherited constructor
        // we check constructor names to ensure we remove the correct frame (and there isn't a weird unsupported environment behavior)
        for (let i = constructors.length - 1; i >= 0 && ((_b = stack[0]) === null || _b === void 0 ? void 0 : _b.func) === constructors[i]; i--) {
            // if the first stack frame is the custom error constructor
            // null stack frames may represent frames that failed to be parsed because the error class did not have a constructor
            stack.shift(); // remove it
        }
    }
    return {
        message: tryToGetString(ex, 'message'),
        name: tryToGetString(ex, 'name'),
        stack,
    };
}
const fileUrl = '((?:file|https?|blob|chrome-extension|electron|native|eval|webpack|snippet|<anonymous>|\\w+\\.|\\/).*?)';
const filePosition = '(?::(\\d+))';
const CHROME_LINE_RE = new RegExp(`^\\s*at (.*?) ?\\(${fileUrl}${filePosition}?${filePosition}?\\)?\\s*$`, 'i');
const CHROME_EVAL_RE = new RegExp(`\\((\\S*)${filePosition}${filePosition}\\)`);
function parseChromeLine(line) {
    const parts = CHROME_LINE_RE.exec(line);
    if (!parts) {
        return;
    }
    const isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
    const isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
    const submatch = CHROME_EVAL_RE.exec(parts[2]);
    if (isEval && submatch) {
        // throw out eval line/column and use top-most line/column number
        parts[2] = submatch[1]; // url
        parts[3] = submatch[2]; // line
        parts[4] = submatch[3]; // column
    }
    return {
        args: isNative ? [parts[2]] : [],
        column: parts[4] ? +parts[4] : undefined,
        func: parts[1] || UNKNOWN_FUNCTION,
        line: parts[3] ? +parts[3] : undefined,
        url: !isNative ? parts[2] : undefined,
    };
}
const CHROME_ANONYMOUS_FUNCTION_RE = new RegExp(`^\\s*at ?${fileUrl}${filePosition}?${filePosition}??\\s*$`, 'i');
function parseChromeAnonymousLine(line) {
    const parts = CHROME_ANONYMOUS_FUNCTION_RE.exec(line);
    if (!parts) {
        return;
    }
    return {
        args: [],
        column: parts[3] ? +parts[3] : undefined,
        func: UNKNOWN_FUNCTION,
        line: parts[2] ? +parts[2] : undefined,
        url: parts[1],
    };
}
const WINJS_LINE_RE = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function parseWinLine(line) {
    const parts = WINJS_LINE_RE.exec(line);
    if (!parts) {
        return;
    }
    return {
        args: [],
        column: parts[4] ? +parts[4] : undefined,
        func: parts[1] || UNKNOWN_FUNCTION,
        line: +parts[3],
        url: parts[2],
    };
}
const GECKO_LINE_RE = /^\s*(.*?)(?:\((.*?)\))?(?:(?:(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle|\[wasm code\])(?::(\d+))?(?::(\d+))?)|@)\s*$/i;
const GECKO_EVAL_RE = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function parseGeckoLine(line) {
    const parts = GECKO_LINE_RE.exec(line);
    if (!parts) {
        return;
    }
    const isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
    const submatch = GECKO_EVAL_RE.exec(parts[3]);
    if (isEval && submatch) {
        // throw out eval line/column and use top-most line number
        parts[3] = submatch[1];
        parts[4] = submatch[2];
        parts[5] = undefined; // no column when eval
    }
    return {
        args: parts[2] ? parts[2].split(',') : [],
        column: parts[5] ? +parts[5] : undefined,
        func: parts[1] || UNKNOWN_FUNCTION,
        line: parts[4] ? +parts[4] : undefined,
        url: parts[3],
    };
}
function tryToGetString(candidate, property) {
    if (typeof candidate !== 'object' || !candidate || !(property in candidate)) {
        return undefined;
    }
    const value = candidate[property];
    return typeof value === 'string' ? value : undefined;
}
function computeStackTraceFromOnErrorMessage(messageObj, url, line, column) {
    if (url === undefined) {
        return;
    }
    const { name, message } = tryToParseMessage(messageObj);
    return {
        name,
        message,
        stack: [{ url, column, line }],
    };
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types
const ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?([\s\S]*)$/;
function tryToParseMessage(messageObj) {
    let name;
    let message;
    if ({}.toString.call(messageObj) === '[object String]') {
        ;
        [, name, message] = ERROR_TYPES_RE.exec(messageObj);
    }
    return { name, message };
}
// Custom error stacktrace fix
// Some browsers (safari/firefox) add the error constructor as a frame in the stacktrace
// In order to normalize the stacktrace, we need to remove it
function isNonNativeClassPrototype(prototype) {
    return String(prototype.constructor).startsWith('class ');
}
let isWronglyReportingCustomErrorsCache;
function isWronglyReportingCustomErrors() {
    if (isWronglyReportingCustomErrorsCache !== undefined) {
        return isWronglyReportingCustomErrorsCache;
    }
    /* eslint-disable no-restricted-syntax */
    class DatadogTestCustomError extends Error {
        constructor() {
            super();
            this.name = 'Error'; // set name to Error so that no browser would default to the constructor name
        }
    }
    const [customError, nativeError] = [DatadogTestCustomError, Error].map((errConstructor) => new errConstructor()); // so that both errors should exactly have the same stacktrace
    isWronglyReportingCustomErrorsCache =
        // If customError is not a class, it means that this was built with ES5 as target, converting the class to a normal object.
        // Thus, error constructors will be reported on all browsers, which is the expected behavior.
        isNonNativeClassPrototype(Object.getPrototypeOf(customError)) &&
            // If the browser is correctly reporting the stacktrace, the normal error stacktrace should be the same as the custom error stacktrace
            nativeError.stack !== customError.stack;
    return isWronglyReportingCustomErrorsCache;
}
//# sourceMappingURL=computeStackTrace.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/stackTrace/handlingStack.js


/**
 * Creates a stacktrace without SDK internal frames.
 * Constraints:
 * - Has to be called at the utmost position of the call stack.
 * - No monitored function should encapsulate it, that is why we need to use callMonitored inside it.
 */
function createHandlingStack(type) {
    /**
     * Skip the two internal frames:
     * - SDK API (console.error, ...)
     * - this function
     * in order to keep only the user calls
     */
    const internalFramesToSkip = 2;
    const error = new Error(type);
    error.name = 'HandlingStack';
    let formattedStack;
    callMonitored(() => {
        const stackTrace = computeStackTrace(error);
        stackTrace.stack = stackTrace.stack.slice(internalFramesToSkip);
        formattedStack = toStackTraceString(stackTrace);
    });
    return formattedStack;
}
function toStackTraceString(stack) {
    let result = formatErrorMessage(stack);
    stack.stack.forEach((frame) => {
        const func = frame.func === '?' ? '<anonymous>' : frame.func;
        const args = frame.args && frame.args.length > 0 ? `(${frame.args.join(', ')})` : '';
        const line = frame.line ? `:${frame.line}` : '';
        const column = frame.line && frame.column ? `:${frame.column}` : '';
        result += `\n  at ${func}${args} @ ${frame.url}${line}${column}`;
    });
    return result;
}
function formatErrorMessage(stack) {
    return `${stack.name || 'Error'}: ${stack.message}`;
}
//# sourceMappingURL=handlingStack.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/instrumentMethod.js




/**
 * Instruments a method on a object, calling the given callback before the original method is
 * invoked. The callback receives an object with information about the method call.
 *
 * This function makes sure that we are "good citizens" regarding third party instrumentations: when
 * removing the instrumentation, the original method is usually restored, but if a third party
 * instrumentation was set after ours, we keep it in place and just replace our instrumentation with
 * a noop.
 *
 * Note: it is generally better to instrument methods that are "owned" by the object instead of ones
 * that are inherited from the prototype chain. Example:
 * * do:    `instrumentMethod(Array.prototype, 'push', ...)`
 * * don't: `instrumentMethod([], 'push', ...)`
 *
 * This method is also used to set event handler properties (ex: window.onerror = ...), as it has
 * the same requirements as instrumenting a method:
 * * if the event handler is already set by a third party, we need to call it and not just blindly
 * override it.
 * * if the event handler is set by a third party after us, we need to keep it in place when
 * removing ours.
 *
 * @example
 *
 *  instrumentMethod(window, 'fetch', ({ target, parameters, onPostCall }) => {
 *    console.log('Before calling fetch on', target, 'with parameters', parameters)
 *
 *    onPostCall((result) => {
 *      console.log('After fetch calling on', target, 'with parameters', parameters, 'and result', result)
 *    })
 *  })
 */
function instrumentMethod(targetPrototype, method, onPreCall, { computeHandlingStack } = {}) {
    let original = targetPrototype[method];
    if (typeof original !== 'function') {
        if (method in targetPrototype && method.startsWith('on')) {
            original = functionUtils_noop;
        }
        else {
            return { stop: functionUtils_noop };
        }
    }
    let stopped = false;
    const instrumentation = function () {
        if (stopped) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
            return original.apply(this, arguments);
        }
        const parameters = Array.from(arguments);
        let postCallCallback;
        callMonitored(onPreCall, null, [
            {
                target: this,
                parameters,
                onPostCall: (callback) => {
                    postCallCallback = callback;
                },
                handlingStack: computeHandlingStack ? createHandlingStack('instrumented method') : undefined,
            },
        ]);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const result = original.apply(this, parameters);
        if (postCallCallback) {
            callMonitored(postCallCallback, null, [result]);
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return result;
    };
    targetPrototype[method] = instrumentation;
    return {
        stop: () => {
            stopped = true;
            // If the instrumentation has been removed by a third party, keep the last one
            if (targetPrototype[method] === instrumentation) {
                targetPrototype[method] = original;
            }
        },
    };
}
function instrumentSetter(targetPrototype, property, after) {
    const originalDescriptor = Object.getOwnPropertyDescriptor(targetPrototype, property);
    if (!originalDescriptor || !originalDescriptor.set || !originalDescriptor.configurable) {
        return { stop: noop };
    }
    const stoppedInstrumentation = noop;
    let instrumentation = (target, value) => {
        // put hooked setter into event loop to avoid of set latency
        setTimeout(() => {
            if (instrumentation !== stoppedInstrumentation) {
                after(target, value);
            }
        }, 0);
    };
    const instrumentationWrapper = function (value) {
        originalDescriptor.set.call(this, value);
        instrumentation(this, value);
    };
    Object.defineProperty(targetPrototype, property, {
        set: instrumentationWrapper,
    });
    return {
        stop: () => {
            var _a;
            if (((_a = Object.getOwnPropertyDescriptor(targetPrototype, property)) === null || _a === void 0 ? void 0 : _a.set) === instrumentationWrapper) {
                Object.defineProperty(targetPrototype, property, originalDescriptor);
            }
            instrumentation = stoppedInstrumentation;
        },
    };
}
//# sourceMappingURL=instrumentMethod.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/utils/timeUtils.js

const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;
const ONE_HOUR = 60 * ONE_MINUTE;
const ONE_DAY = 24 * ONE_HOUR;
const ONE_YEAR = 365 * ONE_DAY;
function relativeToClocks(relative) {
    return { relative, timeStamp: getCorrectedTimeStamp(relative) };
}
function timeStampToClocks(timeStamp) {
    return { relative: getRelativeTime(timeStamp), timeStamp };
}
function getCorrectedTimeStamp(relativeTime) {
    const correctedOrigin = (dateNow() - performance.now());
    // apply correction only for positive drift
    if (correctedOrigin > getNavigationStart()) {
        return Math.round(addDuration(correctedOrigin, relativeTime));
    }
    return getTimeStamp(relativeTime);
}
function currentDrift() {
    return Math.round(dateNow() - addDuration(getNavigationStart(), performance.now()));
}
function toServerDuration(duration) {
    if (!isNumber(duration)) {
        return duration;
    }
    return round(duration * 1e6, 0);
}
function dateNow() {
    // Do not use `Date.now` because sometimes websites are wrongly "polyfilling" it. For example, we
    // had some users using a very old version of `datejs`, which patched `Date.now` to return a Date
    // instance instead of a timestamp[1]. Those users are unlikely to fix this, so let's handle this
    // case ourselves.
    // [1]: https://github.com/datejs/Datejs/blob/97f5c7c58c5bc5accdab8aa7602b6ac56462d778/src/core-debug.js#L14-L16
    return new Date().getTime();
}
function timeStampNow() {
    return dateNow();
}
function relativeNow() {
    return performance.now();
}
function clocksNow() {
    return { relative: relativeNow(), timeStamp: timeStampNow() };
}
function clocksOrigin() {
    return { relative: 0, timeStamp: getNavigationStart() };
}
function elapsed(start, end) {
    return (end - start);
}
function addDuration(a, b) {
    return a + b;
}
// Get the time since the navigation was started.
function getRelativeTime(timestamp) {
    return (timestamp - getNavigationStart());
}
function getTimeStamp(relativeTime) {
    return Math.round(addDuration(getNavigationStart(), relativeTime));
}
function looksLikeRelativeTime(time) {
    return time < ONE_YEAR;
}
/**
 * Navigation start slightly change on some rare cases
 */
let navigationStart;
/**
 * Notes: this does not use `performance.timeOrigin` because:
 * - It doesn't seem to reflect the actual time on which the navigation has started: it may be much farther in the past,
 * at least in Firefox 71. (see: https://bugzilla.mozilla.org/show_bug.cgi?id=1429926)
 * - It is not supported in Safari <15
 */
function getNavigationStart() {
    if (navigationStart === undefined) {
        navigationStart = performance.timing.navigationStart;
    }
    return navigationStart;
}
//# sourceMappingURL=timeUtils.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/utils/byteUtils.js
const ONE_KIBI_BYTE = 1024;
const ONE_MEBI_BYTE = 1024 * ONE_KIBI_BYTE;
// eslint-disable-next-line no-control-regex
const HAS_MULTI_BYTES_CHARACTERS = /[^\u0000-\u007F]/;
function computeBytesCount(candidate) {
    // Accurate bytes count computations can degrade performances when there is a lot of events to process
    if (!HAS_MULTI_BYTES_CHARACTERS.test(candidate)) {
        return candidate.length;
    }
    if (window.TextEncoder !== undefined) {
        return new TextEncoder().encode(candidate).length;
    }
    return new Blob([candidate]).size;
}
function concatBuffers(buffers) {
    const length = buffers.reduce((total, buffer) => total + buffer.length, 0);
    const result = new Uint8Array(length);
    let offset = 0;
    for (const buffer of buffers) {
        result.set(buffer, offset);
        offset += buffer.length;
    }
    return result;
}
//# sourceMappingURL=byteUtils.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/serialisation/jsonStringify.js

/**
 * Custom implementation of JSON.stringify that ignores some toJSON methods. We need to do that
 * because some sites badly override toJSON on certain objects. Removing all toJSON methods from
 * nested values would be too costly, so we just detach them from the root value, and native classes
 * used to build JSON values (Array and Object).
 *
 * Note: this still assumes that JSON.stringify is correct.
 */
function jsonStringify(value, replacer, space) {
    if (typeof value !== 'object' || value === null) {
        return JSON.stringify(value);
    }
    // Note: The order matter here. We need to detach toJSON methods on parent classes before their
    // subclasses.
    const restoreObjectPrototypeToJson = detachToJsonMethod(Object.prototype);
    const restoreArrayPrototypeToJson = detachToJsonMethod(Array.prototype);
    const restoreValuePrototypeToJson = detachToJsonMethod(Object.getPrototypeOf(value));
    const restoreValueToJson = detachToJsonMethod(value);
    try {
        return JSON.stringify(value, replacer, space);
    }
    catch (_a) {
        return '<error: unable to serialize object>';
    }
    finally {
        restoreObjectPrototypeToJson();
        restoreArrayPrototypeToJson();
        restoreValuePrototypeToJson();
        restoreValueToJson();
    }
}
function detachToJsonMethod(value) {
    const object = value;
    const objectToJson = object.toJSON;
    if (objectToJson) {
        delete object.toJSON;
        return () => {
            object.toJSON = objectToJson;
        };
    }
    return functionUtils_noop;
}
//# sourceMappingURL=jsonStringify.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/serialisation/sanitize.js



// The maximum size of a single event is 256KiB. By default, we ensure that user-provided data
// going through sanitize fits inside our events, while leaving room for other contexts, metadata, ...
const SANITIZE_DEFAULT_MAX_CHARACTER_COUNT = 220 * ONE_KIBI_BYTE;
// Symbol for the root element of the JSONPath used for visited objects
const JSON_PATH_ROOT_ELEMENT = '$';
// When serializing (using JSON.stringify) a key of an object, { key: 42 } gets wrapped in quotes as "key".
// With the separator (:), we need to add 3 characters to the count.
const KEY_DECORATION_LENGTH = 3;
function sanitize(source, maxCharacterCount = SANITIZE_DEFAULT_MAX_CHARACTER_COUNT) {
    // Unbind any toJSON function we may have on [] or {} prototypes
    const restoreObjectPrototypeToJson = detachToJsonMethod(Object.prototype);
    const restoreArrayPrototypeToJson = detachToJsonMethod(Array.prototype);
    // Initial call to sanitizeProcessor - will populate containerQueue if source is an Array or a plain Object
    const containerQueue = [];
    const visitedObjectsWithPath = new WeakMap();
    const sanitizedData = sanitizeProcessor(source, JSON_PATH_ROOT_ELEMENT, undefined, containerQueue, visitedObjectsWithPath);
    const serializedSanitizedData = JSON.stringify(sanitizedData);
    let accumulatedCharacterCount = serializedSanitizedData ? serializedSanitizedData.length : 0;
    if (accumulatedCharacterCount > maxCharacterCount) {
        warnOverCharacterLimit(maxCharacterCount, 'discarded', source);
        return undefined;
    }
    while (containerQueue.length > 0 && accumulatedCharacterCount < maxCharacterCount) {
        const containerToProcess = containerQueue.shift();
        let separatorLength = 0; // 0 for the first element, 1 for subsequent elements
        // Arrays and Objects have to be handled distinctly to ensure
        // we do not pick up non-numerical properties from Arrays
        if (Array.isArray(containerToProcess.source)) {
            for (let key = 0; key < containerToProcess.source.length; key++) {
                const targetData = sanitizeProcessor(containerToProcess.source[key], containerToProcess.path, key, containerQueue, visitedObjectsWithPath);
                if (targetData !== undefined) {
                    accumulatedCharacterCount += JSON.stringify(targetData).length;
                }
                else {
                    // When an element of an Array (targetData) is undefined, it is serialized as null:
                    // JSON.stringify([undefined]) => '[null]' - This accounts for 4 characters
                    accumulatedCharacterCount += 4;
                }
                accumulatedCharacterCount += separatorLength;
                separatorLength = 1;
                if (accumulatedCharacterCount > maxCharacterCount) {
                    warnOverCharacterLimit(maxCharacterCount, 'truncated', source);
                    break;
                }
                ;
                containerToProcess.target[key] = targetData;
            }
        }
        else {
            for (const key in containerToProcess.source) {
                if (Object.prototype.hasOwnProperty.call(containerToProcess.source, key)) {
                    const targetData = sanitizeProcessor(containerToProcess.source[key], containerToProcess.path, key, containerQueue, visitedObjectsWithPath);
                    // When a property of an object has an undefined value, it will be dropped during serialization:
                    // JSON.stringify({a:undefined}) => '{}'
                    if (targetData !== undefined) {
                        accumulatedCharacterCount +=
                            JSON.stringify(targetData).length + separatorLength + key.length + KEY_DECORATION_LENGTH;
                        separatorLength = 1;
                    }
                    if (accumulatedCharacterCount > maxCharacterCount) {
                        warnOverCharacterLimit(maxCharacterCount, 'truncated', source);
                        break;
                    }
                    ;
                    containerToProcess.target[key] = targetData;
                }
            }
        }
    }
    // Rebind detached toJSON functions
    restoreObjectPrototypeToJson();
    restoreArrayPrototypeToJson();
    return sanitizedData;
}
/**
 * Internal function to factorize the process common to the
 * initial call to sanitize, and iterations for Arrays and Objects
 *
 */
function sanitizeProcessor(source, parentPath, key, queue, visitedObjectsWithPath) {
    // Start by handling toJSON, as we want to sanitize its output
    const sourceToSanitize = tryToApplyToJSON(source);
    if (!sourceToSanitize || typeof sourceToSanitize !== 'object') {
        return sanitizePrimitivesAndFunctions(sourceToSanitize);
    }
    const sanitizedSource = sanitizeObjects(sourceToSanitize);
    if (sanitizedSource !== '[Object]' && sanitizedSource !== '[Array]' && sanitizedSource !== '[Error]') {
        return sanitizedSource;
    }
    // Handle potential cyclic references
    // We need to use source as sourceToSanitize could be a reference to a new object
    // At this stage, we know the source is an object type
    const sourceAsObject = source;
    if (visitedObjectsWithPath.has(sourceAsObject)) {
        return `[Reference seen at ${visitedObjectsWithPath.get(sourceAsObject)}]`;
    }
    // Add processed source to queue
    const currentPath = key !== undefined ? `${parentPath}.${key}` : parentPath;
    const target = Array.isArray(sourceToSanitize) ? [] : {};
    visitedObjectsWithPath.set(sourceAsObject, currentPath);
    queue.push({ source: sourceToSanitize, target, path: currentPath });
    return target;
}
/**
 * Handles sanitization of simple, non-object types
 *
 */
function sanitizePrimitivesAndFunctions(value) {
    // BigInt cannot be serialized by JSON.stringify(), convert it to a string representation
    if (typeof value === 'bigint') {
        return `[BigInt] ${value.toString()}`;
    }
    // Functions cannot be serialized by JSON.stringify(). Moreover, if a faulty toJSON is present, it needs to be converted
    // so it won't prevent stringify from serializing later
    if (typeof value === 'function') {
        return `[Function] ${value.name || 'unknown'}`;
    }
    // JSON.stringify() does not serialize symbols.
    if (typeof value === 'symbol') {
        return `[Symbol] ${value.description || value.toString()}`;
    }
    return value;
}
/**
 * Handles sanitization of object types
 *
 * LIMITATIONS
 * - If a class defines a toStringTag Symbol, it will fall in the catch-all method and prevent enumeration of properties.
 * To avoid this, a toJSON method can be defined.
 */
function sanitizeObjects(value) {
    try {
        if (value instanceof Event) {
            return sanitizeEvent(value);
        }
        if (value instanceof RegExp) {
            return `[RegExp] ${value.toString()}`;
        }
        // Handle all remaining object types in a generic way
        const result = Object.prototype.toString.call(value);
        const match = result.match(/\[object (.*)\]/);
        if (match && match[1]) {
            return `[${match[1]}]`;
        }
    }
    catch (_a) {
        // If the previous serialization attempts failed, and we cannot convert using
        // Object.prototype.toString, declare the value unserializable
    }
    return '[Unserializable]';
}
function sanitizeEvent(event) {
    return {
        type: event.type,
        isTrusted: event.isTrusted,
        currentTarget: event.currentTarget ? sanitizeObjects(event.currentTarget) : null,
        target: event.target ? sanitizeObjects(event.target) : null,
    };
}
/**
 * Checks if a toJSON function exists and tries to execute it
 *
 */
function tryToApplyToJSON(value) {
    const object = value;
    if (object && typeof object.toJSON === 'function') {
        try {
            return object.toJSON();
        }
        catch (_a) {
            // If toJSON fails, we continue by trying to serialize the value manually
        }
    }
    return value;
}
/**
 * Helper function to display the warning when the accumulated character count is over the limit
 */
function warnOverCharacterLimit(maxCharacterCount, changeType, source) {
    display.warn(`The data provided has been ${changeType} as it is over the limit of ${maxCharacterCount} characters:`, source);
}
//# sourceMappingURL=sanitize.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/error/error.js




const NO_ERROR_STACK_PRESENT_MESSAGE = 'No stack, consider using an instance of Error';
function computeRawError({ stackTrace, originalError, handlingStack, componentStack, startClocks, nonErrorPrefix, useFallbackStack = true, source, handling, }) {
    const isErrorInstance = isError(originalError);
    if (!stackTrace && isErrorInstance) {
        stackTrace = computeStackTrace(originalError);
    }
    return {
        startClocks,
        source,
        handling,
        handlingStack,
        componentStack,
        originalError,
        type: stackTrace ? stackTrace.name : undefined,
        message: computeMessage(stackTrace, isErrorInstance, nonErrorPrefix, originalError),
        stack: stackTrace ? toStackTraceString(stackTrace) : useFallbackStack ? NO_ERROR_STACK_PRESENT_MESSAGE : undefined,
        causes: isErrorInstance ? flattenErrorCauses(originalError, source) : undefined,
        fingerprint: tryToGetFingerprint(originalError),
        context: tryToGetErrorContext(originalError),
    };
}
function computeMessage(stackTrace, isErrorInstance, nonErrorPrefix, originalError) {
    // Favor stackTrace message only if tracekit has really been able to extract something meaningful (message + name)
    // TODO rework tracekit integration to avoid scattering error building logic
    return (stackTrace === null || stackTrace === void 0 ? void 0 : stackTrace.message) && (stackTrace === null || stackTrace === void 0 ? void 0 : stackTrace.name)
        ? stackTrace.message
        : !isErrorInstance
            ? `${nonErrorPrefix} ${jsonStringify(sanitize(originalError))}`
            : 'Empty message';
}
function tryToGetFingerprint(originalError) {
    return isError(originalError) && 'dd_fingerprint' in originalError ? String(originalError.dd_fingerprint) : undefined;
}
function tryToGetErrorContext(originalError) {
    if (originalError !== null && typeof originalError === 'object' && 'dd_context' in originalError) {
        return originalError.dd_context;
    }
}
function getFileFromStackTraceString(stack) {
    var _a;
    return (_a = /@ (.+)/.exec(stack)) === null || _a === void 0 ? void 0 : _a[1];
}
function isError(error) {
    return error instanceof Error || Object.prototype.toString.call(error) === '[object Error]';
}
function flattenErrorCauses(error, parentSource) {
    let currentError = error;
    const causes = [];
    while (isError(currentError === null || currentError === void 0 ? void 0 : currentError.cause) && causes.length < 10) {
        const stackTrace = computeStackTrace(currentError.cause);
        causes.push({
            message: currentError.cause.message,
            source: parentSource,
            type: stackTrace === null || stackTrace === void 0 ? void 0 : stackTrace.name,
            stack: stackTrace && toStackTraceString(stackTrace),
        });
        currentError = currentError.cause;
    }
    return causes.length ? causes : undefined;
}
//# sourceMappingURL=error.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/error/error.types.js
const ErrorSource = {
    AGENT: 'agent',
    CONSOLE: 'console',
    CUSTOM: 'custom',
    LOGGER: 'logger',
    NETWORK: 'network',
    SOURCE: 'source',
    REPORT: 'report',
};
//# sourceMappingURL=error.types.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/error/trackRuntimeError.js







function trackRuntimeError() {
    return new Observable((observer) => {
        const handleRuntimeError = (originalError, stackTrace) => {
            const rawError = computeRawError({
                stackTrace,
                originalError,
                startClocks: clocksNow(),
                nonErrorPrefix: "Uncaught" /* NonErrorPrefix.UNCAUGHT */,
                source: ErrorSource.SOURCE,
                handling: "unhandled" /* ErrorHandling.UNHANDLED */,
            });
            observer.notify(rawError);
        };
        const { stop: stopInstrumentingOnError } = instrumentOnError(handleRuntimeError);
        const { stop: stopInstrumentingOnUnhandledRejection } = instrumentUnhandledRejection(handleRuntimeError);
        return () => {
            stopInstrumentingOnError();
            stopInstrumentingOnUnhandledRejection();
        };
    });
}
function instrumentOnError(callback) {
    return instrumentMethod(getGlobalObject(), 'onerror', ({ parameters: [messageObj, url, line, column, errorObj] }) => {
        let stackTrace;
        if (!isError(errorObj)) {
            stackTrace = computeStackTraceFromOnErrorMessage(messageObj, url, line, column);
        }
        callback(errorObj !== null && errorObj !== void 0 ? errorObj : messageObj, stackTrace);
    });
}
function instrumentUnhandledRejection(callback) {
    return instrumentMethod(getGlobalObject(), 'onunhandledrejection', ({ parameters: [e] }) => {
        callback(e.reason || 'Empty reason');
    });
}
//# sourceMappingURL=trackRuntimeError.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/bufferedData.js


const BUFFER_LIMIT = 500;
function startBufferingData(trackRuntimeErrorImpl = trackRuntimeError) {
    const observable = new BufferedObservable(BUFFER_LIMIT);
    const runtimeErrorSubscription = trackRuntimeErrorImpl().subscribe((error) => {
        observable.notify({
            type: 0 /* BufferedDataType.RUNTIME_ERROR */,
            error,
        });
    });
    return {
        observable,
        stop: () => {
            runtimeErrorSubscription.unsubscribe();
        },
    };
}
//# sourceMappingURL=bufferedData.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/utils/objectUtils.js
function shallowClone(object) {
    return { ...object };
}
function objectHasValue(object, value) {
    return Object.keys(object).some((key) => object[key] === value);
}
function isEmptyObject(object) {
    return Object.keys(object).length === 0;
}
function mapValues(object, fn) {
    const newObject = {};
    for (const key of Object.keys(object)) {
        newObject[key] = fn(object[key]);
    }
    return newObject;
}
//# sourceMappingURL=objectUtils.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/experimentalFeatures.js
/**
 * LIMITATION:
 * For NPM setup, this feature flag singleton is shared between RUM and Logs product.
 * This means that an experimental flag set on the RUM product will be set on the Logs product.
 * So keep in mind that in certain configurations, your experimental feature flag may affect other products.
 *
 * FORMAT:
 * All feature flags should be snake_cased
 */
// We want to use a real enum (i.e. not a const enum) here, to be able to check whether an arbitrary
// string is an expected feature flag

// eslint-disable-next-line no-restricted-syntax
var ExperimentalFeature;
(function (ExperimentalFeature) {
    ExperimentalFeature["TRACK_INTAKE_REQUESTS"] = "track_intake_requests";
    ExperimentalFeature["WRITABLE_RESOURCE_GRAPHQL"] = "writable_resource_graphql";
    ExperimentalFeature["EARLY_REQUEST_COLLECTION"] = "early_request_collection";
    ExperimentalFeature["WATCH_COOKIE_WITHOUT_LOCK"] = "watch_cookie_without_lock";
    ExperimentalFeature["USE_TREE_WALKER_FOR_ACTION_NAME"] = "use_tree_walker_for_action_name";
})(ExperimentalFeature || (ExperimentalFeature = {}));
const enabledExperimentalFeatures = new Set();
function initFeatureFlags(enableExperimentalFeatures) {
    if (Array.isArray(enableExperimentalFeatures)) {
        addExperimentalFeatures(enableExperimentalFeatures.filter((flag) => objectHasValue(ExperimentalFeature, flag)));
    }
}
function addExperimentalFeatures(enabledFeatures) {
    enabledFeatures.forEach((flag) => {
        enabledExperimentalFeatures.add(flag);
    });
}
function isExperimentalFeatureEnabled(featureName) {
    return enabledExperimentalFeatures.has(featureName);
}
function resetExperimentalFeatures() {
    enabledExperimentalFeatures.clear();
}
function getExperimentalFeatures() {
    return enabledExperimentalFeatures;
}
//# sourceMappingURL=experimentalFeatures.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/intakeSites.js
const INTAKE_SITE_STAGING = 'datad0g.com';
const INTAKE_SITE_FED_STAGING = 'dd0g-gov.com';
const INTAKE_SITE_US1 = 'datadoghq.com';
const INTAKE_SITE_EU1 = 'datadoghq.eu';
const INTAKE_SITE_US1_FED = 'ddog-gov.com';
const PCI_INTAKE_HOST_US1 = 'pci.browser-intake-datadoghq.com';
const INTAKE_URL_PARAMETERS = ['ddsource', 'dd-api-key', 'dd-request-id'];
//# sourceMappingURL=intakeSites.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/sendToExtension.js
function sendToExtension(type, payload) {
    const callback = window.__ddBrowserSdkExtensionCallback;
    if (callback) {
        callback({ type, payload });
    }
}
//# sourceMappingURL=sendToExtension.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/utils/numberUtils.js
/**
 * Return true if the draw is successful
 *
 * @param threshold - Threshold between 0 and 100
 */
function performDraw(threshold) {
    return threshold !== 0 && Math.random() * 100 <= threshold;
}
function numberUtils_round(num, decimals) {
    return +num.toFixed(decimals);
}
function isPercentage(value) {
    return numberUtils_isNumber(value) && value >= 0 && value <= 100;
}
function numberUtils_isNumber(value) {
    return typeof value === 'number';
}
//# sourceMappingURL=numberUtils.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/utils/typeUtils.js
/**
 * Similar to `typeof`, but distinguish plain objects from `null` and arrays
 */
function typeUtils_getType(value) {
    if (value === null) {
        return 'null';
    }
    if (Array.isArray(value)) {
        return 'array';
    }
    return typeof value;
}
//# sourceMappingURL=typeUtils.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/mergeInto.js

/**
 * Iterate over source and affect its sub values into destination, recursively.
 * If the source and destination can't be merged, return source.
 */
function mergeInto(destination, source, circularReferenceChecker = createCircularReferenceChecker()) {
    // ignore the source if it is undefined
    if (source === undefined) {
        return destination;
    }
    if (typeof source !== 'object' || source === null) {
        // primitive values - just return source
        return source;
    }
    else if (source instanceof Date) {
        return new Date(source.getTime());
    }
    else if (source instanceof RegExp) {
        const flags = source.flags ||
            // old browsers compatibility
            [
                source.global ? 'g' : '',
                source.ignoreCase ? 'i' : '',
                source.multiline ? 'm' : '',
                source.sticky ? 'y' : '',
                source.unicode ? 'u' : '',
            ].join('');
        return new RegExp(source.source, flags);
    }
    if (circularReferenceChecker.hasAlreadyBeenSeen(source)) {
        // remove circular references
        return undefined;
    }
    else if (Array.isArray(source)) {
        const merged = Array.isArray(destination) ? destination : [];
        for (let i = 0; i < source.length; ++i) {
            merged[i] = mergeInto(merged[i], source[i], circularReferenceChecker);
        }
        return merged;
    }
    const merged = typeUtils_getType(destination) === 'object' ? destination : {};
    for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            merged[key] = mergeInto(merged[key], source[key], circularReferenceChecker);
        }
    }
    return merged;
}
/**
 * A simplistic implementation of a deep clone algorithm.
 * Caveats:
 * - It doesn't maintain prototype chains - don't use with instances of custom classes.
 * - It doesn't handle Map and Set
 */
function deepClone(value) {
    return mergeInto(undefined, value);
}
function combine(...sources) {
    let destination;
    for (const source of sources) {
        // Ignore any undefined or null sources.
        if (source === undefined || source === null) {
            continue;
        }
        destination = mergeInto(destination, source);
    }
    return destination;
}
function createCircularReferenceChecker() {
    if (typeof WeakSet !== 'undefined') {
        const set = new WeakSet();
        return {
            hasAlreadyBeenSeen(value) {
                const has = set.has(value);
                if (!has) {
                    set.add(value);
                }
                return has;
            },
        };
    }
    const array = [];
    return {
        hasAlreadyBeenSeen(value) {
            const has = array.indexOf(value) >= 0;
            if (!has) {
                array.push(value);
            }
            return has;
        },
    };
}
//# sourceMappingURL=mergeInto.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/connectivity/connectivity.js
function getConnectivity() {
    var _a;
    const navigator = window.navigator;
    return {
        status: navigator.onLine ? 'connected' : 'not_connected',
        interfaces: navigator.connection && navigator.connection.type ? [navigator.connection.type] : undefined,
        effective_type: (_a = navigator.connection) === null || _a === void 0 ? void 0 : _a.effectiveType,
    };
}
//# sourceMappingURL=connectivity.js.map
;// ./node_modules/@datadog/browser-core/esm/transport/eventBridge.js

function getEventBridge() {
    const eventBridgeGlobal = getEventBridgeGlobal();
    if (!eventBridgeGlobal) {
        return;
    }
    return {
        getCapabilities() {
            var _a;
            return JSON.parse(((_a = eventBridgeGlobal.getCapabilities) === null || _a === void 0 ? void 0 : _a.call(eventBridgeGlobal)) || '[]');
        },
        getPrivacyLevel() {
            var _a;
            return (_a = eventBridgeGlobal.getPrivacyLevel) === null || _a === void 0 ? void 0 : _a.call(eventBridgeGlobal);
        },
        getAllowedWebViewHosts() {
            return JSON.parse(eventBridgeGlobal.getAllowedWebViewHosts());
        },
        send(eventType, event, viewId) {
            const view = viewId ? { id: viewId } : undefined;
            eventBridgeGlobal.send(JSON.stringify({ eventType, event, view }));
        },
    };
}
function bridgeSupports(capability) {
    const bridge = getEventBridge();
    return !!bridge && bridge.getCapabilities().includes(capability);
}
function canUseEventBridge(currentHost) {
    var _a;
    if (currentHost === void 0) { currentHost = (_a = getGlobalObject().location) === null || _a === void 0 ? void 0 : _a.hostname; }
    const bridge = getEventBridge();
    return (!!bridge &&
        bridge
            .getAllowedWebViewHosts()
            .some((allowedHost) => currentHost === allowedHost || currentHost.endsWith(`.${allowedHost}`)));
}
function getEventBridgeGlobal() {
    return getGlobalObject().DatadogEventBridge;
}
//# sourceMappingURL=eventBridge.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/utils/polyfills.js
function findLast(array, predicate) {
    for (let i = array.length - 1; i >= 0; i -= 1) {
        const item = array[i];
        if (predicate(item, i, array)) {
            return item;
        }
    }
    return undefined;
}
// Keep the following wrapper functions as it can be mangled and will result in smaller bundle size that using
// the native Object.values and Object.entries directly
function objectValues(object) {
    return Object.values(object);
}
function objectEntries(object) {
    return Object.entries(object);
}
//# sourceMappingURL=polyfills.js.map
;// ./node_modules/@datadog/browser-core/esm/browser/addEventListener.js


/**
 * Add an event listener to an event target object (Window, Element, mock object...).  This provides
 * a few conveniences compared to using `element.addEventListener` directly:
 *
 * * supports IE11 by: using an option object only if needed and emulating the `once` option
 *
 * * wraps the listener with a `monitor` function
 *
 * * returns a `stop` function to remove the listener
 */
function addEventListener(configuration, eventTarget, eventName, listener, options) {
    return addEventListeners(configuration, eventTarget, [eventName], listener, options);
}
/**
 * Add event listeners to an event target object (Window, Element, mock object...).  This provides
 * a few conveniences compared to using `element.addEventListener` directly:
 *
 * * supports IE11 by: using an option object only if needed and emulating the `once` option
 *
 * * wraps the listener with a `monitor` function
 *
 * * returns a `stop` function to remove the listener
 *
 * * with `once: true`, the listener will be called at most once, even if different events are listened
 */
function addEventListeners(configuration, eventTarget, eventNames, listener, { once, capture, passive } = {}) {
    const listenerWithMonitor = monitor((event) => {
        if (!event.isTrusted && !event.__ddIsTrusted && !configuration.allowUntrustedEvents) {
            return;
        }
        if (once) {
            stop();
        }
        listener(event);
    });
    const options = passive ? { capture, passive } : capture;
    // Use the window.EventTarget.prototype when possible to avoid wrong overrides (e.g: https://github.com/salesforce/lwc/issues/1824)
    const listenerTarget = window.EventTarget && eventTarget instanceof EventTarget ? window.EventTarget.prototype : eventTarget;
    const add = getZoneJsOriginalValue(listenerTarget, 'addEventListener');
    eventNames.forEach((eventName) => add.call(eventTarget, eventName, listenerWithMonitor, options));
    function stop() {
        const remove = getZoneJsOriginalValue(listenerTarget, 'removeEventListener');
        eventNames.forEach((eventName) => remove.call(eventTarget, eventName, listenerWithMonitor, options));
    }
    return {
        stop,
    };
}
//# sourceMappingURL=addEventListener.js.map
;// ./node_modules/@datadog/browser-core/esm/browser/pageMayExitObservable.js



const PageExitReason = {
    HIDDEN: 'visibility_hidden',
    UNLOADING: 'before_unload',
    PAGEHIDE: 'page_hide',
    FROZEN: 'page_frozen',
};
function createPageMayExitObservable(configuration) {
    return new Observable((observable) => {
        const { stop: stopListeners } = addEventListeners(configuration, window, ["visibilitychange" /* DOM_EVENT.VISIBILITY_CHANGE */, "freeze" /* DOM_EVENT.FREEZE */], (event) => {
            if (event.type === "visibilitychange" /* DOM_EVENT.VISIBILITY_CHANGE */ && document.visibilityState === 'hidden') {
                /**
                 * Only event that guarantee to fire on mobile devices when the page transitions to background state
                 * (e.g. when user switches to a different application, goes to homescreen, etc), or is being unloaded.
                 */
                observable.notify({ reason: PageExitReason.HIDDEN });
            }
            else if (event.type === "freeze" /* DOM_EVENT.FREEZE */) {
                /**
                 * After transitioning in background a tab can be freezed to preserve resources. (cf: https://developer.chrome.com/blog/page-lifecycle-api)
                 * Allow to collect events happening between hidden and frozen state.
                 */
                observable.notify({ reason: PageExitReason.FROZEN });
            }
        }, { capture: true });
        const stopBeforeUnloadListener = addEventListener(configuration, window, "beforeunload" /* DOM_EVENT.BEFORE_UNLOAD */, () => {
            observable.notify({ reason: PageExitReason.UNLOADING });
        }).stop;
        return () => {
            stopListeners();
            stopBeforeUnloadListener();
        };
    });
}
function isPageExitReason(reason) {
    return objectValues(PageExitReason).includes(reason);
}
//# sourceMappingURL=pageMayExitObservable.js.map
;// ./node_modules/@datadog/browser-core/esm/transport/batch.js





function createBatch({ encoder, request, flushController, messageBytesLimit, }) {
    let upsertBuffer = {};
    const flushSubscription = flushController.flushObservable.subscribe((event) => flush(event));
    function push(serializedMessage, estimatedMessageBytesCount, key) {
        flushController.notifyBeforeAddMessage(estimatedMessageBytesCount);
        if (key !== undefined) {
            upsertBuffer[key] = serializedMessage;
            flushController.notifyAfterAddMessage();
        }
        else {
            encoder.write(encoder.isEmpty ? serializedMessage : `\n${serializedMessage}`, (realMessageBytesCount) => {
                flushController.notifyAfterAddMessage(realMessageBytesCount - estimatedMessageBytesCount);
            });
        }
    }
    function hasMessageFor(key) {
        return key !== undefined && upsertBuffer[key] !== undefined;
    }
    function remove(key) {
        const removedMessage = upsertBuffer[key];
        delete upsertBuffer[key];
        const messageBytesCount = encoder.estimateEncodedBytesCount(removedMessage);
        flushController.notifyAfterRemoveMessage(messageBytesCount);
    }
    function addOrUpdate(message, key) {
        const serializedMessage = jsonStringify(message);
        const estimatedMessageBytesCount = encoder.estimateEncodedBytesCount(serializedMessage);
        if (estimatedMessageBytesCount >= messageBytesLimit) {
            display.warn(`Discarded a message whose size was bigger than the maximum allowed size ${messageBytesLimit}KB. ${MORE_DETAILS} ${DOCS_TROUBLESHOOTING}/#technical-limitations`);
            return;
        }
        if (hasMessageFor(key)) {
            remove(key);
        }
        push(serializedMessage, estimatedMessageBytesCount, key);
    }
    function flush(event) {
        const upsertMessages = objectValues(upsertBuffer).join('\n');
        upsertBuffer = {};
        const pageMightExit = isPageExitReason(event.reason);
        const send = pageMightExit ? request.sendOnExit : request.send;
        if (pageMightExit &&
            // Note: checking that the encoder is async is not strictly needed, but it's an optimization:
            // if the encoder is async we need to send two requests in some cases (one for encoded data
            // and the other for non-encoded data). But if it's not async, we don't have to worry about
            // it and always send a single request.
            encoder.isAsync) {
            const encoderResult = encoder.finishSync();
            // Send encoded messages
            if (encoderResult.outputBytesCount) {
                send(formatPayloadFromEncoder(encoderResult));
            }
            // Send messages that are not yet encoded at this point
            const pendingMessages = [encoderResult.pendingData, upsertMessages].filter(Boolean).join('\n');
            if (pendingMessages) {
                send({
                    data: pendingMessages,
                    bytesCount: computeBytesCount(pendingMessages),
                });
            }
        }
        else {
            if (upsertMessages) {
                encoder.write(encoder.isEmpty ? upsertMessages : `\n${upsertMessages}`);
            }
            encoder.finish((encoderResult) => {
                send(formatPayloadFromEncoder(encoderResult));
            });
        }
    }
    return {
        flushController,
        add: addOrUpdate,
        upsert: addOrUpdate,
        stop: flushSubscription.unsubscribe,
    };
}
function formatPayloadFromEncoder(encoderResult) {
    let data;
    if (typeof encoderResult.output === 'string') {
        data = encoderResult.output;
    }
    else {
        data = new Blob([encoderResult.output], {
            // This will set the 'Content-Type: text/plain' header. Reasoning:
            // * The intake rejects the request if there is no content type.
            // * The browser will issue CORS preflight requests if we set it to 'application/json', which
            // could induce higher intake load (and maybe has other impacts).
            // * Also it's not quite JSON, since we are concatenating multiple JSON objects separated by
            // new lines.
            type: 'text/plain',
        });
    }
    return {
        data,
        bytesCount: encoderResult.outputBytesCount,
        encoding: encoderResult.encoding,
    };
}
//# sourceMappingURL=batch.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/utils/responseUtils.js
function isServerError(status) {
    return status >= 500;
}
function tryToClone(response) {
    try {
        return response.clone();
    }
    catch (_a) {
        // clone can throw if the response has already been used by another instrumentation or is disturbed
        return;
    }
}
//# sourceMappingURL=responseUtils.js.map
;// ./node_modules/@datadog/browser-core/esm/transport/sendWithRetryStrategy.js





const MAX_ONGOING_BYTES_COUNT = 80 * ONE_KIBI_BYTE;
const MAX_ONGOING_REQUESTS = 32;
const MAX_QUEUE_BYTES_COUNT = 3 * ONE_MEBI_BYTE;
const MAX_BACKOFF_TIME = ONE_MINUTE;
const INITIAL_BACKOFF_TIME = ONE_SECOND;
function sendWithRetryStrategy(payload, state, sendStrategy, trackType, reportError, requestObservable) {
    if (state.transportStatus === 0 /* TransportStatus.UP */ &&
        state.queuedPayloads.size() === 0 &&
        state.bandwidthMonitor.canHandle(payload)) {
        send(payload, state, sendStrategy, requestObservable, {
            onSuccess: () => retryQueuedPayloads(0 /* RetryReason.AFTER_SUCCESS */, state, sendStrategy, trackType, reportError, requestObservable),
            onFailure: () => {
                if (!state.queuedPayloads.enqueue(payload)) {
                    requestObservable.notify({ type: 'queue-full', bandwidth: state.bandwidthMonitor.stats(), payload });
                }
                scheduleRetry(state, sendStrategy, trackType, reportError, requestObservable);
            },
        });
    }
    else {
        if (!state.queuedPayloads.enqueue(payload)) {
            requestObservable.notify({ type: 'queue-full', bandwidth: state.bandwidthMonitor.stats(), payload });
        }
    }
}
function scheduleRetry(state, sendStrategy, trackType, reportError, requestObservable) {
    if (state.transportStatus !== 2 /* TransportStatus.DOWN */) {
        return;
    }
    timer_setTimeout(() => {
        const payload = state.queuedPayloads.first();
        send(payload, state, sendStrategy, requestObservable, {
            onSuccess: () => {
                state.queuedPayloads.dequeue();
                state.currentBackoffTime = INITIAL_BACKOFF_TIME;
                retryQueuedPayloads(1 /* RetryReason.AFTER_RESUME */, state, sendStrategy, trackType, reportError, requestObservable);
            },
            onFailure: () => {
                state.currentBackoffTime = Math.min(MAX_BACKOFF_TIME, state.currentBackoffTime * 2);
                scheduleRetry(state, sendStrategy, trackType, reportError, requestObservable);
            },
        });
    }, state.currentBackoffTime);
}
function send(payload, state, sendStrategy, requestObservable, { onSuccess, onFailure }) {
    state.bandwidthMonitor.add(payload);
    sendStrategy(payload, (response) => {
        state.bandwidthMonitor.remove(payload);
        if (!shouldRetryRequest(response)) {
            state.transportStatus = 0 /* TransportStatus.UP */;
            requestObservable.notify({ type: 'success', bandwidth: state.bandwidthMonitor.stats(), payload });
            onSuccess();
        }
        else {
            // do not consider transport down if another ongoing request could succeed
            state.transportStatus =
                state.bandwidthMonitor.ongoingRequestCount > 0 ? 1 /* TransportStatus.FAILURE_DETECTED */ : 2 /* TransportStatus.DOWN */;
            payload.retry = {
                count: payload.retry ? payload.retry.count + 1 : 1,
                lastFailureStatus: response.status,
            };
            requestObservable.notify({ type: 'failure', bandwidth: state.bandwidthMonitor.stats(), payload });
            onFailure();
        }
    });
}
function retryQueuedPayloads(reason, state, sendStrategy, trackType, reportError, requestObservable) {
    if (reason === 0 /* RetryReason.AFTER_SUCCESS */ && state.queuedPayloads.isFull() && !state.queueFullReported) {
        reportError({
            message: `Reached max ${trackType} events size queued for upload: ${MAX_QUEUE_BYTES_COUNT / ONE_MEBI_BYTE}MiB`,
            source: ErrorSource.AGENT,
            startClocks: clocksNow(),
        });
        state.queueFullReported = true;
    }
    const previousQueue = state.queuedPayloads;
    state.queuedPayloads = newPayloadQueue();
    while (previousQueue.size() > 0) {
        sendWithRetryStrategy(previousQueue.dequeue(), state, sendStrategy, trackType, reportError, requestObservable);
    }
}
function shouldRetryRequest(response) {
    return (response.type !== 'opaque' &&
        ((response.status === 0 && !navigator.onLine) ||
            response.status === 408 ||
            response.status === 429 ||
            isServerError(response.status)));
}
function newRetryState() {
    return {
        transportStatus: 0 /* TransportStatus.UP */,
        currentBackoffTime: INITIAL_BACKOFF_TIME,
        bandwidthMonitor: newBandwidthMonitor(),
        queuedPayloads: newPayloadQueue(),
        queueFullReported: false,
    };
}
function newPayloadQueue() {
    const queue = [];
    return {
        bytesCount: 0,
        enqueue(payload) {
            if (this.isFull()) {
                return false;
            }
            queue.push(payload);
            this.bytesCount += payload.bytesCount;
            return true;
        },
        first() {
            return queue[0];
        },
        dequeue() {
            const payload = queue.shift();
            if (payload) {
                this.bytesCount -= payload.bytesCount;
            }
            return payload;
        },
        size() {
            return queue.length;
        },
        isFull() {
            return this.bytesCount >= MAX_QUEUE_BYTES_COUNT;
        },
    };
}
function newBandwidthMonitor() {
    return {
        ongoingRequestCount: 0,
        ongoingByteCount: 0,
        canHandle(payload) {
            return (this.ongoingRequestCount === 0 ||
                (this.ongoingByteCount + payload.bytesCount <= MAX_ONGOING_BYTES_COUNT &&
                    this.ongoingRequestCount < MAX_ONGOING_REQUESTS));
        },
        add(payload) {
            this.ongoingRequestCount += 1;
            this.ongoingByteCount += payload.bytesCount;
        },
        remove(payload) {
            this.ongoingRequestCount -= 1;
            this.ongoingByteCount -= payload.bytesCount;
        },
        stats() {
            return {
                ongoingByteCount: this.ongoingByteCount,
                ongoingRequestCount: this.ongoingRequestCount,
            };
        },
    };
}
//# sourceMappingURL=sendWithRetryStrategy.js.map
;// ./node_modules/@datadog/browser-core/esm/transport/httpRequest.js



function createHttpRequest(endpointBuilders, bytesLimit, reportError) {
    const observable = new Observable();
    const retryState = newRetryState();
    return {
        observable,
        send: (payload) => {
            for (const endpointBuilder of endpointBuilders) {
                sendWithRetryStrategy(payload, retryState, (payload, onResponse) => fetchKeepAliveStrategy(endpointBuilder, bytesLimit, payload, onResponse), endpointBuilder.trackType, reportError, observable);
            }
        },
        /**
         * Since fetch keepalive behaves like regular fetch on Firefox,
         * keep using sendBeaconStrategy on exit
         */
        sendOnExit: (payload) => {
            for (const endpointBuilder of endpointBuilders) {
                sendBeaconStrategy(endpointBuilder, bytesLimit, payload);
            }
        },
    };
}
function sendBeaconStrategy(endpointBuilder, bytesLimit, payload) {
    const canUseBeacon = !!navigator.sendBeacon && payload.bytesCount < bytesLimit;
    if (canUseBeacon) {
        try {
            const beaconUrl = endpointBuilder.build('beacon', payload);
            const isQueued = navigator.sendBeacon(beaconUrl, payload.data);
            if (isQueued) {
                return;
            }
        }
        catch (e) {
            reportBeaconError(e);
        }
    }
    fetchStrategy(endpointBuilder, payload);
}
let hasReportedBeaconError = false;
function reportBeaconError(e) {
    if (!hasReportedBeaconError) {
        hasReportedBeaconError = true;
        monitorError(e);
    }
}
function fetchKeepAliveStrategy(endpointBuilder, bytesLimit, payload, onResponse) {
    const canUseKeepAlive = isKeepAliveSupported() && payload.bytesCount < bytesLimit;
    if (canUseKeepAlive) {
        const fetchUrl = endpointBuilder.build('fetch-keepalive', payload);
        fetch(fetchUrl, { method: 'POST', body: payload.data, keepalive: true, mode: 'cors' })
            .then(monitor((response) => onResponse === null || onResponse === void 0 ? void 0 : onResponse({ status: response.status, type: response.type })))
            .catch(monitor(() => fetchStrategy(endpointBuilder, payload, onResponse)));
    }
    else {
        fetchStrategy(endpointBuilder, payload, onResponse);
    }
}
function fetchStrategy(endpointBuilder, payload, onResponse) {
    const fetchUrl = endpointBuilder.build('fetch', payload);
    fetch(fetchUrl, { method: 'POST', body: payload.data, mode: 'cors' })
        .then(monitor((response) => onResponse === null || onResponse === void 0 ? void 0 : onResponse({ status: response.status, type: response.type })))
        .catch(monitor(() => onResponse === null || onResponse === void 0 ? void 0 : onResponse({ status: 0 })));
}
function isKeepAliveSupported() {
    // Request can throw, cf https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#errors
    try {
        return window.Request && 'keepalive' in new Request('http://a');
    }
    catch (_a) {
        return false;
    }
}
//# sourceMappingURL=httpRequest.js.map
;// ./node_modules/@datadog/browser-core/esm/transport/flushController.js


/**
 * Returns a "flush controller", responsible of notifying when flushing a pool of pending data needs
 * to happen. The implementation is designed to support both synchronous and asynchronous usages,
 * but relies on invariants described in each method documentation to keep a coherent state.
 */
function createFlushController({ messagesLimit, bytesLimit, durationLimit, pageMayExitObservable, sessionExpireObservable, }) {
    const pageMayExitSubscription = pageMayExitObservable.subscribe((event) => flush(event.reason));
    const sessionExpireSubscription = sessionExpireObservable.subscribe(() => flush('session_expire'));
    const flushObservable = new Observable(() => () => {
        pageMayExitSubscription.unsubscribe();
        sessionExpireSubscription.unsubscribe();
    });
    let currentBytesCount = 0;
    let currentMessagesCount = 0;
    function flush(flushReason) {
        if (currentMessagesCount === 0) {
            return;
        }
        const messagesCount = currentMessagesCount;
        const bytesCount = currentBytesCount;
        currentMessagesCount = 0;
        currentBytesCount = 0;
        cancelDurationLimitTimeout();
        flushObservable.notify({
            reason: flushReason,
            messagesCount,
            bytesCount,
        });
    }
    let durationLimitTimeoutId;
    function scheduleDurationLimitTimeout() {
        if (durationLimitTimeoutId === undefined) {
            durationLimitTimeoutId = timer_setTimeout(() => {
                flush('duration_limit');
            }, durationLimit);
        }
    }
    function cancelDurationLimitTimeout() {
        timer_clearTimeout(durationLimitTimeoutId);
        durationLimitTimeoutId = undefined;
    }
    return {
        flushObservable,
        get messagesCount() {
            return currentMessagesCount;
        },
        /**
         * Notifies that a message will be added to a pool of pending messages waiting to be flushed.
         *
         * This function needs to be called synchronously, right before adding the message, so no flush
         * event can happen after `notifyBeforeAddMessage` and before adding the message.
         *
         * @param estimatedMessageBytesCount - an estimation of the message bytes count once it is
         * actually added.
         */
        notifyBeforeAddMessage(estimatedMessageBytesCount) {
            if (currentBytesCount + estimatedMessageBytesCount >= bytesLimit) {
                flush('bytes_limit');
            }
            // Consider the message to be added now rather than in `notifyAfterAddMessage`, because if no
            // message was added yet and `notifyAfterAddMessage` is called asynchronously, we still want
            // to notify when a flush is needed (for example on page exit).
            currentMessagesCount += 1;
            currentBytesCount += estimatedMessageBytesCount;
            scheduleDurationLimitTimeout();
        },
        /**
         * Notifies that a message *was* added to a pool of pending messages waiting to be flushed.
         *
         * This function can be called asynchronously after the message was added, but in this case it
         * should not be called if a flush event occurred in between.
         *
         * @param messageBytesCountDiff - the difference between the estimated message bytes count and
         * its actual bytes count once added to the pool.
         */
        notifyAfterAddMessage(messageBytesCountDiff = 0) {
            currentBytesCount += messageBytesCountDiff;
            if (currentMessagesCount >= messagesLimit) {
                flush('messages_limit');
            }
            else if (currentBytesCount >= bytesLimit) {
                flush('bytes_limit');
            }
        },
        /**
         * Notifies that a message was removed from a pool of pending messages waiting to be flushed.
         *
         * This function needs to be called synchronously, right after removing the message, so no flush
         * event can happen after removing the message and before `notifyAfterRemoveMessage`.
         *
         * @param messageBytesCount - the message bytes count that was added to the pool. Should
         * correspond to the sum of bytes counts passed to `notifyBeforeAddMessage` and
         * `notifyAfterAddMessage`.
         */
        notifyAfterRemoveMessage(messageBytesCount) {
            currentBytesCount -= messageBytesCount;
            currentMessagesCount -= 1;
            if (currentMessagesCount === 0) {
                cancelDurationLimitTimeout();
            }
        },
    };
}
//# sourceMappingURL=flushController.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/abstractHooks.js

// Discards the event from being sent
const DISCARDED = 'DISCARDED';
// Skips from the assembly of the event
const SKIPPED = 'SKIPPED';
function abstractHooks() {
    const callbacks = {};
    return {
        register(hookName, callback) {
            if (!callbacks[hookName]) {
                callbacks[hookName] = [];
            }
            callbacks[hookName].push(callback);
            return {
                unregister: () => {
                    callbacks[hookName] = callbacks[hookName].filter((cb) => cb !== callback);
                },
            };
        },
        triggerHook(hookName, param) {
            const hookCallbacks = callbacks[hookName] || [];
            const results = [];
            for (const callback of hookCallbacks) {
                const result = callback(param);
                if (result === DISCARDED) {
                    return DISCARDED;
                }
                if (result === SKIPPED) {
                    continue;
                }
                results.push(result);
            }
            return combine(...results);
        },
    };
}
//# sourceMappingURL=abstractHooks.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/telemetry/rawTelemetryEvent.types.js
const rawTelemetryEvent_types_TelemetryType = {
    LOG: 'log',
    CONFIGURATION: 'configuration',
    USAGE: 'usage',
};
//# sourceMappingURL=rawTelemetryEvent.types.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/telemetry/telemetry.js

















const ALLOWED_FRAME_URLS = [
    'https://www.datadoghq-browser-agent.com',
    'https://www.datad0g-browser-agent.com',
    'https://d3uc069fcn7uxw.cloudfront.net',
    'https://d20xtzwzcl0ceb.cloudfront.net',
    'http://localhost',
    '<anonymous>',
];
const TELEMETRY_EXCLUDED_SITES = [INTAKE_SITE_US1_FED];
let telemetryObservable;
function getTelemetryObservable() {
    if (!telemetryObservable) {
        telemetryObservable = new BufferedObservable(100);
    }
    return telemetryObservable;
}
function startTelemetry(telemetryService, configuration, hooks, reportError, pageMayExitObservable, createEncoder) {
    const observable = new Observable();
    const { stop } = startTelemetryTransport(configuration, reportError, pageMayExitObservable, createEncoder, observable);
    const { enabled } = startTelemetryCollection(telemetryService, configuration, hooks, observable);
    return {
        stop,
        enabled,
    };
}
function startTelemetryCollection(telemetryService, configuration, hooks, observable) {
    const alreadySentEventsByKind = {};
    const telemetryEnabled = !TELEMETRY_EXCLUDED_SITES.includes(configuration.site) && performDraw(configuration.telemetrySampleRate);
    const telemetryEnabledPerType = {
        [rawTelemetryEvent_types_TelemetryType.LOG]: telemetryEnabled,
        [rawTelemetryEvent_types_TelemetryType.CONFIGURATION]: telemetryEnabled && performDraw(configuration.telemetryConfigurationSampleRate),
        [rawTelemetryEvent_types_TelemetryType.USAGE]: telemetryEnabled && performDraw(configuration.telemetryUsageSampleRate),
    };
    const runtimeEnvInfo = getRuntimeEnvInfo();
    const telemetryObservable = getTelemetryObservable();
    telemetryObservable.subscribe(({ rawEvent, kind }) => {
        if (!telemetryEnabledPerType[rawEvent.type]) {
            return;
        }
        let alreadySentEvents = alreadySentEventsByKind[kind];
        if (!alreadySentEvents) {
            alreadySentEvents = alreadySentEventsByKind[kind] = new Set();
        }
        if (alreadySentEvents.size >= configuration.maxTelemetryEventsPerPage) {
            return;
        }
        const stringifiedEvent = jsonStringify(rawEvent);
        if (alreadySentEvents.has(stringifiedEvent)) {
            return;
        }
        const defaultTelemetryEventAttributes = hooks.triggerHook(1 /* HookNames.AssembleTelemetry */, {
            startTime: clocksNow().relative,
        });
        if (defaultTelemetryEventAttributes === DISCARDED) {
            return;
        }
        const event = toTelemetryEvent(defaultTelemetryEventAttributes, telemetryService, rawEvent, runtimeEnvInfo);
        observable.notify(event);
        sendToExtension('telemetry', event);
        alreadySentEvents.add(stringifiedEvent);
    });
    telemetryObservable.unbuffer();
    startMonitorErrorCollection(addTelemetryError);
    return {
        enabled: telemetryEnabled,
    };
    function toTelemetryEvent(defaultTelemetryEventAttributes, telemetryService, rawEvent, runtimeEnvInfo) {
        const clockNow = clocksNow();
        const event = {
            type: 'telemetry',
            date: clockNow.timeStamp,
            service: telemetryService,
            version: "6.18.1",
            source: 'browser',
            _dd: {
                format_version: 2,
            },
            telemetry: combine(rawEvent, {
                runtime_env: runtimeEnvInfo,
                connectivity: getConnectivity(),
                sdk_setup: "npm",
            }),
            experimental_features: Array.from(getExperimentalFeatures()),
        };
        return combine(event, defaultTelemetryEventAttributes);
    }
}
function startTelemetryTransport(configuration, reportError, pageMayExitObservable, createEncoder, telemetryObservable) {
    const cleanupTasks = [];
    if (canUseEventBridge()) {
        const bridge = getEventBridge();
        const telemetrySubscription = telemetryObservable.subscribe((event) => bridge.send('internal_telemetry', event));
        cleanupTasks.push(telemetrySubscription.unsubscribe);
    }
    else {
        const endpoints = [configuration.rumEndpointBuilder];
        if (configuration.replica && isTelemetryReplicationAllowed(configuration)) {
            endpoints.push(configuration.replica.rumEndpointBuilder);
        }
        const telemetryBatch = createBatch({
            encoder: createEncoder(4 /* DeflateEncoderStreamId.TELEMETRY */),
            request: createHttpRequest(endpoints, configuration.batchBytesLimit, reportError),
            flushController: createFlushController({
                messagesLimit: configuration.batchMessagesLimit,
                bytesLimit: configuration.batchBytesLimit,
                durationLimit: configuration.flushTimeout,
                pageMayExitObservable,
                // We don't use an actual session expire observable here, to make telemetry collection
                // independent of the session. This allows to start and send telemetry events earlier.
                sessionExpireObservable: new Observable(),
            }),
            messageBytesLimit: configuration.messageBytesLimit,
        });
        cleanupTasks.push(telemetryBatch.stop);
        const telemetrySubscription = telemetryObservable.subscribe(telemetryBatch.add);
        cleanupTasks.push(telemetrySubscription.unsubscribe);
    }
    return {
        stop: () => cleanupTasks.forEach((task) => task()),
    };
}
function getRuntimeEnvInfo() {
    return {
        is_local_file: window.location.protocol === 'file:',
        is_worker: 'WorkerGlobalScope' in self,
    };
}
function resetTelemetry() {
    telemetryObservable = undefined;
}
/**
 * Avoid mixing telemetry events from different data centers
 * but keep replicating staging events for reliability
 */
function isTelemetryReplicationAllowed(configuration) {
    return configuration.site === INTAKE_SITE_STAGING;
}
function addTelemetryDebug(message, context) {
    displayIfDebugEnabled(ConsoleApiName.debug, message, context);
    getTelemetryObservable().notify({
        rawEvent: {
            type: rawTelemetryEvent_types_TelemetryType.LOG,
            message,
            status: "debug" /* StatusType.debug */,
            ...context,
        },
        kind: "debug" /* StatusType.debug */,
    });
}
function addTelemetryError(e, context) {
    getTelemetryObservable().notify({
        rawEvent: {
            type: rawTelemetryEvent_types_TelemetryType.LOG,
            status: "error" /* StatusType.error */,
            ...formatError(e),
            ...context,
        },
        kind: "error" /* StatusType.error */,
    });
}
function addTelemetryConfiguration(configuration) {
    getTelemetryObservable().notify({
        rawEvent: {
            type: rawTelemetryEvent_types_TelemetryType.CONFIGURATION,
            configuration,
        },
        kind: rawTelemetryEvent_types_TelemetryType.CONFIGURATION,
    });
}
function addTelemetryMetrics(kind, context) {
    getTelemetryObservable().notify({
        rawEvent: {
            type: TelemetryType.LOG,
            message: kind,
            status: "debug" /* StatusType.debug */,
            ...context,
        },
        kind,
    });
}
function addTelemetryUsage(usage) {
    getTelemetryObservable().notify({
        rawEvent: {
            type: rawTelemetryEvent_types_TelemetryType.USAGE,
            usage,
        },
        kind: rawTelemetryEvent_types_TelemetryType.USAGE,
    });
}
function formatError(e) {
    if (isError(e)) {
        const stackTrace = computeStackTrace(e);
        return {
            error: {
                kind: stackTrace.name,
                stack: toStackTraceString(scrubCustomerFrames(stackTrace)),
            },
            message: stackTrace.message,
        };
    }
    return {
        error: {
            stack: NO_ERROR_STACK_PRESENT_MESSAGE,
        },
        message: `${"Uncaught" /* NonErrorPrefix.UNCAUGHT */} ${jsonStringify(e)}`,
    };
}
function scrubCustomerFrames(stackTrace) {
    stackTrace.stack = stackTrace.stack.filter((frame) => !frame.url || ALLOWED_FRAME_URLS.some((allowedFrameUrl) => frame.url.startsWith(allowedFrameUrl)));
    return stackTrace;
}
//# sourceMappingURL=telemetry.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/context/defineContextMethod.js


function defineContextMethod(getStrategy, contextName, methodName, usage) {
    return monitor((...args) => {
        if (usage) {
            addTelemetryUsage({ feature: usage });
        }
        return getStrategy()[contextName][methodName](...args);
    });
}
function bufferContextCalls(preStartContextManager, name, bufferApiCalls) {
    preStartContextManager.changeObservable.subscribe(() => {
        const context = preStartContextManager.getContext();
        bufferApiCalls.add((startResult) => startResult[name].setContext(context));
    });
}
//# sourceMappingURL=defineContextMethod.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/context/contextConstants.js
// Use a const instead of const enum to avoid inlining the enum values in the bundle and save bytes
const CustomerContextKey = {
    userContext: 'userContext',
    globalContext: 'globalContext',
    accountContext: 'accountContext',
};
// Use a const instead of const enum to avoid inlining the enum values in the bundle and save bytes
const ContextManagerMethod = {
    getContext: 'getContext',
    setContext: 'setContext',
    setContextProperty: 'setContextProperty',
    removeContextProperty: 'removeContextProperty',
    clearContext: 'clearContext',
};
//# sourceMappingURL=contextConstants.js.map
;// ./node_modules/@datadog/browser-core/esm/boot/displayAlreadyInitializedError.js

function displayAlreadyInitializedError(sdkName, initConfiguration) {
    if (!initConfiguration.silentMultipleInit) {
        display.error(`${sdkName} is already initialized.`);
    }
}
//# sourceMappingURL=displayAlreadyInitializedError.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/context/contextUtils.js


/**
 * Simple check to ensure an object is a valid context
 */
function checkContext(maybeContext) {
    const isValid = typeUtils_getType(maybeContext) === 'object';
    if (!isValid) {
        display.error('Unsupported context:', maybeContext);
    }
    return isValid;
}
//# sourceMappingURL=contextUtils.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/context/contextManager.js





function ensureProperties(context, propertiesConfig, name) {
    const newContext = { ...context };
    for (const [key, { required, type }] of Object.entries(propertiesConfig)) {
        /**
         * Ensure specified properties are strings as defined here:
         * https://docs.datadoghq.com/logs/log_configuration/attributes_naming_convention/#user-related-attributes
         */
        if (type === 'string' && !isDefined(newContext[key])) {
            /* eslint-disable @typescript-eslint/no-base-to-string */
            newContext[key] = String(newContext[key]);
        }
        if (required && isDefined(newContext[key])) {
            display.warn(`The property ${key} of ${name} is required; context will not be sent to the intake.`);
        }
    }
    return newContext;
}
function isDefined(value) {
    return value === undefined || value === null || value === '';
}
function createContextManager(name = '', { propertiesConfig = {}, } = {}) {
    let context = {};
    const changeObservable = new Observable();
    const contextManager = {
        getContext: () => deepClone(context),
        setContext: (newContext) => {
            if (checkContext(newContext)) {
                context = sanitize(ensureProperties(newContext, propertiesConfig, name));
            }
            else {
                contextManager.clearContext();
            }
            changeObservable.notify();
        },
        setContextProperty: (key, property) => {
            context = sanitize(ensureProperties({ ...context, [key]: property }, propertiesConfig, name));
            changeObservable.notify();
        },
        removeContextProperty: (key) => {
            delete context[key];
            ensureProperties(context, propertiesConfig, name);
            changeObservable.notify();
        },
        clearContext: () => {
            context = {};
            changeObservable.notify();
        },
        changeObservable,
    };
    return contextManager;
}
//# sourceMappingURL=contextManager.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/configuration/tags.js

const TAG_SIZE_LIMIT = 200;
function buildTags(configuration) {
    const { env, service, version, datacenter } = configuration;
    const tags = [buildTag('sdk_version', "6.18.1")];
    if (env) {
        tags.push(buildTag('env', env));
    }
    if (service) {
        tags.push(buildTag('service', service));
    }
    if (version) {
        tags.push(buildTag('version', version));
    }
    if (datacenter) {
        tags.push(buildTag('datacenter', datacenter));
    }
    return tags;
}
function buildTag(key, rawValue) {
    // See https://docs.datadoghq.com/getting_started/tagging/#defining-tags for tags syntax. Note
    // that the backend may not follow the exact same rules, so we only want to display an informal
    // warning.
    const tag = rawValue ? `${key}:${rawValue}` : key;
    if (tag.length > TAG_SIZE_LIMIT || hasForbiddenCharacters(tag)) {
        display.warn(`Tag ${tag} doesn't meet tag requirements and will be sanitized. ${MORE_DETAILS} ${DOCS_ORIGIN}/getting_started/tagging/#defining-tags`);
    }
    // Let the backend do most of the sanitization, but still make sure multiple tags can't be crafted
    // by forging a value containing commas.
    return sanitizeTag(tag);
}
function sanitizeTag(tag) {
    return tag.replace(/,/g, '_');
}
function hasForbiddenCharacters(rawValue) {
    // Unicode property escapes is not supported in all browsers, so we use a try/catch.
    // Todo: Remove the try/catch when dropping support for Chrome 63 and Firefox 67
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape#browser_compatibility
    if (!supportUnicodePropertyEscapes()) {
        return false;
    }
    // We use the Unicode property escapes to match any character that is a letter including other languages like Chinese, Japanese, etc.
    // p{Ll} matches a lowercase letter.
    // p{Lo} matches a letter that is neither uppercase nor lowercase (ex: Japanese characters).
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape#unicode_property_escapes_vs._character_classes
    return new RegExp('[^\\p{Ll}\\p{Lo}0-9_:./-]', 'u').test(rawValue);
}
function supportUnicodePropertyEscapes() {
    try {
        new RegExp('[\\p{Ll}]', 'u');
        return true;
    }
    catch (_a) {
        return false;
    }
}
//# sourceMappingURL=tags.js.map
;// ./node_modules/@datadog/browser-logs/esm/domain/logger/isAuthorized.js
function isAuthorized(status, handlerType, logger) {
    const loggerHandler = logger.getHandler();
    const sanitizedHandlerType = Array.isArray(loggerHandler) ? loggerHandler : [loggerHandler];
    return STATUS_PRIORITIES[status] >= STATUS_PRIORITIES[logger.getLevel()] && sanitizedHandlerType.includes(handlerType);
}
const StatusType = {
    ok: 'ok',
    debug: 'debug',
    info: 'info',
    notice: 'notice',
    warn: 'warn',
    error: 'error',
    critical: 'critical',
    alert: 'alert',
    emerg: 'emerg',
};
const STATUS_PRIORITIES = {
    [StatusType.ok]: 0,
    [StatusType.debug]: 1,
    [StatusType.info]: 2,
    [StatusType.notice]: 4,
    [StatusType.warn]: 5,
    [StatusType.error]: 6,
    [StatusType.critical]: 7,
    [StatusType.alert]: 8,
    [StatusType.emerg]: 9,
};
//# sourceMappingURL=isAuthorized.js.map
;// ./node_modules/@datadog/browser-logs/esm/domain/createErrorFieldFromRawError.js
function createErrorFieldFromRawError(rawError, { 
/**
 * Set this to `true` to include the error message in the error field. In most cases, the error
 * message is already included in the log message, so we don't need to include it again.
 */
includeMessage = false, } = {}) {
    return {
        stack: rawError.stack,
        kind: rawError.type,
        message: includeMessage ? rawError.message : undefined,
        causes: rawError.causes,
        fingerprint: rawError.fingerprint,
        handling: rawError.handling,
    };
}
//# sourceMappingURL=createErrorFieldFromRawError.js.map
;// ./node_modules/@datadog/browser-logs/esm/domain/logger.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const HandlerType = {
    console: 'console',
    http: 'http',
    silent: 'silent',
};
const STATUSES = Object.keys(StatusType);
// note: it is safe to merge declarations as long as the methods are actually defined on the prototype
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging, no-restricted-syntax
class Logger {
    constructor(handleLogStrategy, name, handlerType = HandlerType.http, level = StatusType.debug, loggerContext = {}) {
        this.handleLogStrategy = handleLogStrategy;
        this.handlerType = handlerType;
        this.level = level;
        this.contextManager = createContextManager('logger');
        this.tags = [];
        this.contextManager.setContext(loggerContext);
        if (name) {
            this.contextManager.setContextProperty('logger', { name });
        }
    }
    logImplementation(message, messageContext, status = StatusType.info, error, handlingStack) {
        const sanitizedMessageContext = sanitize(messageContext);
        let context;
        if (error !== undefined && error !== null) {
            const rawError = computeRawError({
                originalError: error,
                nonErrorPrefix: "Provided" /* NonErrorPrefix.PROVIDED */,
                source: ErrorSource.LOGGER,
                handling: "handled" /* ErrorHandling.HANDLED */,
                startClocks: clocksNow(),
            });
            context = combine({
                error: createErrorFieldFromRawError(rawError, { includeMessage: true }),
            }, rawError.context, sanitizedMessageContext);
        }
        else {
            context = sanitizedMessageContext;
        }
        this.handleLogStrategy({
            message: sanitize(message),
            context,
            status,
        }, this, handlingStack);
    }
    log(message, messageContext, status = StatusType.info, error) {
        let handlingStack;
        if (isAuthorized(status, HandlerType.http, this)) {
            handlingStack = createHandlingStack('log');
        }
        this.logImplementation(message, messageContext, status, error, handlingStack);
    }
    setContext(context) {
        this.contextManager.setContext(context);
    }
    getContext() {
        return this.contextManager.getContext();
    }
    setContextProperty(key, value) {
        this.contextManager.setContextProperty(key, value);
    }
    removeContextProperty(key) {
        this.contextManager.removeContextProperty(key);
    }
    clearContext() {
        this.contextManager.clearContext();
    }
    addTag(key, value) {
        this.tags.push(buildTag(key, value));
    }
    removeTagsWithKey(key) {
        const sanitizedKey = sanitizeTag(key);
        this.tags = this.tags.filter((tag) => tag !== sanitizedKey && !tag.startsWith(`${sanitizedKey}:`));
    }
    getTags() {
        return this.tags.slice();
    }
    setHandler(handler) {
        this.handlerType = handler;
    }
    getHandler() {
        return this.handlerType;
    }
    setLevel(level) {
        this.level = level;
    }
    getLevel() {
        return this.level;
    }
}
__decorate([
    monitored
], Logger.prototype, "logImplementation", null);
/* eslint-disable local-rules/disallow-side-effects */
Logger.prototype.ok = createLoggerMethod(StatusType.ok);
Logger.prototype.debug = createLoggerMethod(StatusType.debug);
Logger.prototype.info = createLoggerMethod(StatusType.info);
Logger.prototype.notice = createLoggerMethod(StatusType.notice);
Logger.prototype.warn = createLoggerMethod(StatusType.warn);
Logger.prototype.error = createLoggerMethod(StatusType.error);
Logger.prototype.critical = createLoggerMethod(StatusType.critical);
Logger.prototype.alert = createLoggerMethod(StatusType.alert);
Logger.prototype.emerg = createLoggerMethod(StatusType.emerg);
function createLoggerMethod(status) {
    return function (message, messageContext, error) {
        let handlingStack;
        if (isAuthorized(status, HandlerType.http, this)) {
            handlingStack = createHandlingStack('log');
        }
        this.logImplementation(message, messageContext, status, error, handlingStack);
    };
}
//# sourceMappingURL=logger.js.map
;// ./node_modules/@datadog/browser-logs/esm/domain/contexts/commonContext.js
function buildCommonContext() {
    return {
        view: {
            referrer: document.referrer,
            url: window.location.href,
        },
    };
}
//# sourceMappingURL=commonContext.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/utils/arrayUtils.js
function removeDuplicates(array) {
    const set = new Set();
    array.forEach((item) => set.add(item));
    return Array.from(set);
}
function removeItem(array, item) {
    const index = array.indexOf(item);
    if (index >= 0) {
        array.splice(index, 1);
    }
}
//# sourceMappingURL=arrayUtils.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/boundedBuffer.js

const boundedBuffer_BUFFER_LIMIT = 500;
/**
 * createBoundedBuffer creates a BoundedBuffer.
 *
 * @deprecated Use `BufferedObservable` instead.
 */
function createBoundedBuffer() {
    const buffer = [];
    const add = (callback) => {
        const length = buffer.push(callback);
        if (length > boundedBuffer_BUFFER_LIMIT) {
            buffer.splice(0, 1);
        }
    };
    const remove = (callback) => {
        removeItem(buffer, callback);
    };
    const drain = (arg) => {
        buffer.forEach((callback) => callback(arg));
        buffer.length = 0;
    };
    return {
        add,
        remove,
        drain,
    };
}
//# sourceMappingURL=boundedBuffer.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/context/storeContextManager.js



const CONTEXT_STORE_KEY_PREFIX = '_dd_c';
const storageListeners = [];
function storeContextManager(configuration, contextManager, productKey, customerDataType) {
    const storageKey = buildStorageKey(productKey, customerDataType);
    storageListeners.push(addEventListener(configuration, window, "storage" /* DOM_EVENT.STORAGE */, ({ key }) => {
        if (storageKey === key) {
            synchronizeWithStorage();
        }
    }));
    contextManager.changeObservable.subscribe(dumpToStorage);
    const contextFromStorage = combine(getFromStorage(), contextManager.getContext());
    if (!isEmptyObject(contextFromStorage)) {
        contextManager.setContext(contextFromStorage);
    }
    function synchronizeWithStorage() {
        contextManager.setContext(getFromStorage());
    }
    function dumpToStorage() {
        localStorage.setItem(storageKey, JSON.stringify(contextManager.getContext()));
    }
    function getFromStorage() {
        const rawContext = localStorage.getItem(storageKey);
        return rawContext ? JSON.parse(rawContext) : {};
    }
}
function buildStorageKey(productKey, customerDataType) {
    return `${CONTEXT_STORE_KEY_PREFIX}_${productKey}_${customerDataType}`;
}
function removeStorageListeners() {
    storageListeners.map((listener) => listener.stop());
}
//# sourceMappingURL=storeContextManager.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/contexts/globalContext.js


function startGlobalContext(hooks, configuration, productKey, useContextNamespace) {
    const globalContextManager = buildGlobalContextManager();
    if (configuration.storeContextsAcrossPages) {
        storeContextManager(configuration, globalContextManager, productKey, 2 /* CustomerDataType.GlobalContext */);
    }
    hooks.register(0 /* HookNames.Assemble */, () => {
        const context = globalContextManager.getContext();
        return useContextNamespace ? { context } : context;
    });
    return globalContextManager;
}
function buildGlobalContextManager() {
    return createContextManager('global context');
}
//# sourceMappingURL=globalContext.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/contexts/accountContext.js




function startAccountContext(hooks, configuration, productKey) {
    const accountContextManager = buildAccountContextManager();
    if (configuration.storeContextsAcrossPages) {
        storeContextManager(configuration, accountContextManager, productKey, 4 /* CustomerDataType.Account */);
    }
    hooks.register(0 /* HookNames.Assemble */, () => {
        const account = accountContextManager.getContext();
        if (isEmptyObject(account) || !account.id) {
            return SKIPPED;
        }
        return {
            account,
        };
    });
    return accountContextManager;
}
function buildAccountContextManager() {
    return createContextManager('account', {
        propertiesConfig: {
            id: { type: 'string', required: true },
            name: { type: 'string' },
        },
    });
}
//# sourceMappingURL=accountContext.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/contexts/userContext.js




function startUserContext(hooks, configuration, sessionManager, productKey) {
    const userContextManager = buildUserContextManager();
    if (configuration.storeContextsAcrossPages) {
        storeContextManager(configuration, userContextManager, productKey, 1 /* CustomerDataType.User */);
    }
    hooks.register(0 /* HookNames.Assemble */, ({ eventType, startTime }) => {
        const user = userContextManager.getContext();
        const session = sessionManager.findTrackedSession(startTime);
        if (session && session.anonymousId && !user.anonymous_id && !!configuration.trackAnonymousUser) {
            user.anonymous_id = session.anonymousId;
        }
        if (isEmptyObject(user)) {
            return SKIPPED;
        }
        return {
            type: eventType,
            usr: user,
        };
    });
    hooks.register(1 /* HookNames.AssembleTelemetry */, ({ startTime }) => {
        var _a;
        return ({
            anonymous_id: (_a = sessionManager.findTrackedSession(startTime)) === null || _a === void 0 ? void 0 : _a.anonymousId,
        });
    });
    return userContextManager;
}
function buildUserContextManager() {
    return createContextManager('user', {
        propertiesConfig: {
            id: { type: 'string' },
            name: { type: 'string' },
            email: { type: 'string' },
        },
    });
}
//# sourceMappingURL=userContext.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/utils/urlPolyfill.js

function normalizeUrl(url) {
    return buildUrl(url, location.href).href;
}
function isValidUrl(url) {
    try {
        return !!buildUrl(url);
    }
    catch (_a) {
        return false;
    }
}
function getPathName(url) {
    const pathname = buildUrl(url).pathname;
    return pathname[0] === '/' ? pathname : `/${pathname}`;
}
function buildUrl(url, base) {
    const { URL } = getPristineWindow();
    try {
        return base !== undefined ? new URL(url, base) : new URL(url);
    }
    catch (error) {
        throw new Error(`Failed to construct URL: ${String(error)} ${jsonStringify({ url, base })}`);
    }
}
/**
 * Get native URL constructor from a clean iframe
 * This avoids polyfill issues by getting the native implementation from a fresh iframe context
 * Falls back to the original URL constructor if iframe approach fails
 */
let getPristineGlobalObjectCache;
function getPristineWindow() {
    if (!getPristineGlobalObjectCache) {
        let iframe;
        let pristineWindow;
        try {
            iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            pristineWindow = iframe.contentWindow;
        }
        catch (_a) {
            pristineWindow = window;
        }
        getPristineGlobalObjectCache = {
            URL: pristineWindow.URL,
        };
        iframe === null || iframe === void 0 ? void 0 : iframe.remove();
    }
    return getPristineGlobalObjectCache;
}
//# sourceMappingURL=urlPolyfill.js.map
;// ./node_modules/@datadog/browser-core/esm/browser/fetchObservable.js





let fetchObservable;
function initFetchObservable() {
    if (!fetchObservable) {
        fetchObservable = createFetchObservable();
    }
    return fetchObservable;
}
function resetFetchObservable() {
    fetchObservable = undefined;
}
function createFetchObservable() {
    return new Observable((observable) => {
        if (!window.fetch) {
            return;
        }
        const { stop } = instrumentMethod(window, 'fetch', (call) => beforeSend(call, observable), {
            computeHandlingStack: true,
        });
        return stop;
    });
}
function beforeSend({ parameters, onPostCall, handlingStack }, observable) {
    const [input, init] = parameters;
    let methodFromParams = init && init.method;
    if (methodFromParams === undefined && input instanceof Request) {
        methodFromParams = input.method;
    }
    const method = methodFromParams !== undefined ? String(methodFromParams).toUpperCase() : 'GET';
    const url = input instanceof Request ? input.url : normalizeUrl(String(input));
    const startClocks = clocksNow();
    const context = {
        state: 'start',
        init,
        input,
        method,
        startClocks,
        url,
        handlingStack,
    };
    observable.notify(context);
    // Those properties can be changed by observable subscribers
    parameters[0] = context.input;
    parameters[1] = context.init;
    onPostCall((responsePromise) => afterSend(observable, responsePromise, context));
}
function afterSend(observable, responsePromise, startContext) {
    const context = startContext;
    function reportFetch(partialContext) {
        context.state = 'resolve';
        Object.assign(context, partialContext);
        observable.notify(context);
    }
    responsePromise.then(monitor((response) => {
        reportFetch({
            response,
            responseType: response.type,
            status: response.status,
            isAborted: false,
        });
    }), monitor((error) => {
        var _a, _b;
        reportFetch({
            status: 0,
            isAborted: ((_b = (_a = context.init) === null || _a === void 0 ? void 0 : _a.signal) === null || _b === void 0 ? void 0 : _b.aborted) || (error instanceof DOMException && error.code === DOMException.ABORT_ERR),
            error,
        });
    }));
}
//# sourceMappingURL=fetchObservable.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/utils/stringUtils.js
/**
 * UUID v4
 * from https://gist.github.com/jed/982883
 */
function generateUUID(placeholder) {
    return placeholder
        ? // eslint-disable-next-line  no-bitwise
            (parseInt(placeholder, 10) ^ ((Math.random() * 16) >> (parseInt(placeholder, 10) / 4))).toString(16)
        : `${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`.replace(/[018]/g, generateUUID);
}
const COMMA_SEPARATED_KEY_VALUE = /([\w-]+)\s*=\s*([^;]+)/g;
function findCommaSeparatedValue(rawString, name) {
    COMMA_SEPARATED_KEY_VALUE.lastIndex = 0;
    while (true) {
        const match = COMMA_SEPARATED_KEY_VALUE.exec(rawString);
        if (match) {
            if (match[1] === name) {
                return match[2];
            }
        }
        else {
            break;
        }
    }
}
function findCommaSeparatedValues(rawString) {
    const result = new Map();
    COMMA_SEPARATED_KEY_VALUE.lastIndex = 0;
    while (true) {
        const match = COMMA_SEPARATED_KEY_VALUE.exec(rawString);
        if (match) {
            result.set(match[1], match[2]);
        }
        else {
            break;
        }
    }
    return result;
}
function safeTruncate(candidate, length, suffix = '') {
    const lastChar = candidate.charCodeAt(length - 1);
    const isLastCharSurrogatePair = lastChar >= 0xd800 && lastChar <= 0xdbff;
    const correctedLength = isLastCharSurrogatePair ? length + 1 : length;
    if (candidate.length <= correctedLength) {
        return candidate;
    }
    return `${candidate.slice(0, correctedLength)}${suffix}`;
}
//# sourceMappingURL=stringUtils.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/utils/browserDetection.js
function isChromium() {
    return detectBrowserCached() === 0 /* Browser.CHROMIUM */;
}
function isSafari() {
    return detectBrowserCached() === 1 /* Browser.SAFARI */;
}
let browserCache;
function detectBrowserCached() {
    return browserCache !== null && browserCache !== void 0 ? browserCache : (browserCache = detectBrowser());
}
// Exported only for tests
function detectBrowser(browserWindow = window) {
    var _a;
    const userAgent = browserWindow.navigator.userAgent;
    if (browserWindow.chrome || /HeadlessChrome/.test(userAgent)) {
        return 0 /* Browser.CHROMIUM */;
    }
    if (
    // navigator.vendor is deprecated, but it is the most resilient way we found to detect
    // "Apple maintained browsers" (AKA Safari). If one day it gets removed, we still have the
    // useragent test as a semi-working fallback.
    ((_a = browserWindow.navigator.vendor) === null || _a === void 0 ? void 0 : _a.indexOf('Apple')) === 0 ||
        (/safari/i.test(userAgent) && !/chrome|android/i.test(userAgent))) {
        return 1 /* Browser.SAFARI */;
    }
    return 2 /* Browser.OTHER */;
}
//# sourceMappingURL=browserDetection.js.map
;// ./node_modules/@datadog/browser-core/esm/browser/cookie.js



function setCookie(name, value, expireDelay = 0, options) {
    const date = new Date();
    date.setTime(date.getTime() + expireDelay);
    const expires = `expires=${date.toUTCString()}`;
    const sameSite = options && options.crossSite ? 'none' : 'strict';
    const domain = options && options.domain ? `;domain=${options.domain}` : '';
    const secure = options && options.secure ? ';secure' : '';
    const partitioned = options && options.partitioned ? ';partitioned' : '';
    document.cookie = `${name}=${value};${expires};path=/;samesite=${sameSite}${domain}${secure}${partitioned}`;
}
function getCookie(name) {
    return findCommaSeparatedValue(document.cookie, name);
}
let initCookieParsed;
/**
 * Returns a cached value of the cookie. Use this during SDK initialization (and whenever possible)
 * to avoid accessing document.cookie multiple times.
 */
function getInitCookie(name) {
    if (!initCookieParsed) {
        initCookieParsed = findCommaSeparatedValues(document.cookie);
    }
    return initCookieParsed.get(name);
}
function resetInitCookies() {
    initCookieParsed = undefined;
}
function deleteCookie(name, options) {
    setCookie(name, '', 0, options);
}
function areCookiesAuthorized(options) {
    if (document.cookie === undefined || document.cookie === null) {
        return false;
    }
    try {
        // Use a unique cookie name to avoid issues when the SDK is initialized multiple times during
        // the test cookie lifetime
        const testCookieName = `dd_cookie_test_${generateUUID()}`;
        const testCookieValue = 'test';
        setCookie(testCookieName, testCookieValue, ONE_MINUTE, options);
        const isCookieCorrectlySet = getCookie(testCookieName) === testCookieValue;
        deleteCookie(testCookieName, options);
        return isCookieCorrectlySet;
    }
    catch (error) {
        display.error(error);
        return false;
    }
}
/**
 * No API to retrieve it, number of levels for subdomain and suffix are unknown
 * strategy: find the minimal domain on which cookies are allowed to be set
 * https://web.dev/same-site-same-origin/#site
 */
let getCurrentSiteCache;
function getCurrentSite() {
    if (getCurrentSiteCache === undefined) {
        // Use a unique cookie name to avoid issues when the SDK is initialized multiple times during
        // the test cookie lifetime
        const testCookieName = `dd_site_test_${generateUUID()}`;
        const testCookieValue = 'test';
        const domainLevels = window.location.hostname.split('.');
        let candidateDomain = domainLevels.pop();
        while (domainLevels.length && !getCookie(testCookieName)) {
            candidateDomain = `${domainLevels.pop()}.${candidateDomain}`;
            setCookie(testCookieName, testCookieValue, ONE_SECOND, { domain: candidateDomain });
        }
        deleteCookie(testCookieName, { domain: candidateDomain });
        getCurrentSiteCache = candidateDomain;
    }
    return getCurrentSiteCache;
}
//# sourceMappingURL=cookie.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/session/storeStrategies/sessionStoreStrategy.js
const SESSION_STORE_KEY = '_dd_s';
//# sourceMappingURL=sessionStoreStrategy.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/session/sessionConstants.js

const SESSION_TIME_OUT_DELAY = 4 * ONE_HOUR;
const SESSION_EXPIRATION_DELAY = 15 * ONE_MINUTE;
const SESSION_COOKIE_EXPIRATION_DELAY = ONE_YEAR;
const SESSION_NOT_TRACKED = '0';
/**
 * @internal
 */
const SessionPersistence = {
    COOKIE: 'cookie',
    LOCAL_STORAGE: 'local-storage',
};
//# sourceMappingURL=sessionConstants.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/session/sessionStateValidation.js
const SESSION_ENTRY_REGEXP = /^([a-zA-Z]+)=([a-z0-9-]+)$/;
const SESSION_ENTRY_SEPARATOR = '&';
function isValidSessionString(sessionString) {
    return (!!sessionString &&
        (sessionString.indexOf(SESSION_ENTRY_SEPARATOR) !== -1 || SESSION_ENTRY_REGEXP.test(sessionString)));
}
//# sourceMappingURL=sessionStateValidation.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/session/sessionState.js






const EXPIRED = '1';
function getExpiredSessionState(previousSessionState, configuration) {
    const expiredSessionState = {
        isExpired: EXPIRED,
    };
    if (configuration.trackAnonymousUser) {
        if (previousSessionState === null || previousSessionState === void 0 ? void 0 : previousSessionState.anonymousId) {
            expiredSessionState.anonymousId = previousSessionState === null || previousSessionState === void 0 ? void 0 : previousSessionState.anonymousId;
        }
        else {
            expiredSessionState.anonymousId = generateUUID();
        }
    }
    return expiredSessionState;
}
function isSessionInNotStartedState(session) {
    return isEmptyObject(session);
}
function isSessionStarted(session) {
    return !isSessionInNotStartedState(session);
}
function isSessionInExpiredState(session) {
    return session.isExpired !== undefined || !isActiveSession(session);
}
// An active session is a session in either `Tracked` or `NotTracked` state
function isActiveSession(sessionState) {
    // created and expire can be undefined for versions which was not storing them
    // these checks could be removed when older versions will not be available/live anymore
    return ((sessionState.created === undefined || dateNow() - Number(sessionState.created) < SESSION_TIME_OUT_DELAY) &&
        (sessionState.expire === undefined || dateNow() < Number(sessionState.expire)));
}
function expandSessionState(session) {
    session.expire = String(dateNow() + SESSION_EXPIRATION_DELAY);
}
function toSessionString(session) {
    return (objectEntries(session)
        // we use `aid` as a key for anonymousId
        .map(([key, value]) => (key === 'anonymousId' ? `aid=${value}` : `${key}=${value}`))
        .join(SESSION_ENTRY_SEPARATOR));
}
function toSessionState(sessionString) {
    const session = {};
    if (isValidSessionString(sessionString)) {
        sessionString.split(SESSION_ENTRY_SEPARATOR).forEach((entry) => {
            const matches = SESSION_ENTRY_REGEXP.exec(entry);
            if (matches !== null) {
                const [, key, value] = matches;
                if (key === 'aid') {
                    // we use `aid` as a key for anonymousId
                    session.anonymousId = value;
                }
                else {
                    session[key] = value;
                }
            }
        });
    }
    return session;
}
//# sourceMappingURL=sessionState.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/session/oldCookiesMigration.js



const OLD_SESSION_COOKIE_NAME = '_dd';
const OLD_RUM_COOKIE_NAME = '_dd_r';
const OLD_LOGS_COOKIE_NAME = '_dd_l';
// duplicate values to avoid dependency issues
const RUM_SESSION_KEY = 'rum';
const LOGS_SESSION_KEY = 'logs';
/**
 * This migration should remain in the codebase as long as older versions are available/live
 * to allow older sdk versions to be upgraded to newer versions without compatibility issues.
 */
function tryOldCookiesMigration(cookieStoreStrategy) {
    const sessionString = getInitCookie(SESSION_STORE_KEY);
    if (!sessionString) {
        const oldSessionId = getInitCookie(OLD_SESSION_COOKIE_NAME);
        const oldRumType = getInitCookie(OLD_RUM_COOKIE_NAME);
        const oldLogsType = getInitCookie(OLD_LOGS_COOKIE_NAME);
        const session = {};
        if (oldSessionId) {
            session.id = oldSessionId;
        }
        if (oldLogsType && /^[01]$/.test(oldLogsType)) {
            session[LOGS_SESSION_KEY] = oldLogsType;
        }
        if (oldRumType && /^[012]$/.test(oldRumType)) {
            session[RUM_SESSION_KEY] = oldRumType;
        }
        if (isSessionStarted(session)) {
            expandSessionState(session);
            cookieStoreStrategy.persistSession(session);
        }
    }
}
//# sourceMappingURL=oldCookiesMigration.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/session/storeStrategies/sessionInCookie.js






function selectCookieStrategy(initConfiguration) {
    const cookieOptions = buildCookieOptions(initConfiguration);
    return areCookiesAuthorized(cookieOptions) ? { type: SessionPersistence.COOKIE, cookieOptions } : undefined;
}
function initCookieStrategy(configuration, cookieOptions) {
    const cookieStore = {
        /**
         * Lock strategy allows mitigating issues due to concurrent access to cookie.
         * This issue concerns only chromium browsers and enabling this on firefox increases cookie write failures.
         */
        isLockEnabled: isChromium(),
        persistSession: (sessionState) => storeSessionCookie(cookieOptions, configuration, sessionState, SESSION_EXPIRATION_DELAY),
        retrieveSession: retrieveSessionCookie,
        expireSession: (sessionState) => storeSessionCookie(cookieOptions, configuration, getExpiredSessionState(sessionState, configuration), SESSION_TIME_OUT_DELAY),
    };
    tryOldCookiesMigration(cookieStore);
    return cookieStore;
}
function storeSessionCookie(options, configuration, sessionState, defaultTimeout) {
    setCookie(SESSION_STORE_KEY, toSessionString(sessionState), configuration.trackAnonymousUser ? SESSION_COOKIE_EXPIRATION_DELAY : defaultTimeout, options);
}
function retrieveSessionCookie() {
    const sessionString = getCookie(SESSION_STORE_KEY);
    const sessionState = toSessionState(sessionString);
    return sessionState;
}
function buildCookieOptions(initConfiguration) {
    const cookieOptions = {};
    cookieOptions.secure =
        !!initConfiguration.useSecureSessionCookie || !!initConfiguration.usePartitionedCrossSiteSessionCookie;
    cookieOptions.crossSite = !!initConfiguration.usePartitionedCrossSiteSessionCookie;
    cookieOptions.partitioned = !!initConfiguration.usePartitionedCrossSiteSessionCookie;
    if (initConfiguration.trackSessionAcrossSubdomains) {
        cookieOptions.domain = getCurrentSite();
    }
    return cookieOptions;
}
//# sourceMappingURL=sessionInCookie.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/session/storeStrategies/sessionInLocalStorage.js




const LOCAL_STORAGE_TEST_KEY = '_dd_test_';
function selectLocalStorageStrategy() {
    try {
        const id = generateUUID();
        const testKey = `${LOCAL_STORAGE_TEST_KEY}${id}`;
        localStorage.setItem(testKey, id);
        const retrievedId = localStorage.getItem(testKey);
        localStorage.removeItem(testKey);
        return id === retrievedId ? { type: SessionPersistence.LOCAL_STORAGE } : undefined;
    }
    catch (_a) {
        return undefined;
    }
}
function initLocalStorageStrategy(configuration) {
    return {
        isLockEnabled: false,
        persistSession: persistInLocalStorage,
        retrieveSession: retrieveSessionFromLocalStorage,
        expireSession: (sessionState) => expireSessionFromLocalStorage(sessionState, configuration),
    };
}
function persistInLocalStorage(sessionState) {
    localStorage.setItem(SESSION_STORE_KEY, toSessionString(sessionState));
}
function retrieveSessionFromLocalStorage() {
    const sessionString = localStorage.getItem(SESSION_STORE_KEY);
    return toSessionState(sessionString);
}
function expireSessionFromLocalStorage(previousSessionState, configuration) {
    persistInLocalStorage(getExpiredSessionState(previousSessionState, configuration));
}
//# sourceMappingURL=sessionInLocalStorage.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/session/sessionStoreOperations.js





const LOCK_RETRY_DELAY = 10;
const LOCK_MAX_TRIES = 100;
// Locks should be hold for a few milliseconds top, just the time it takes to read and write a
// cookie. Using one second should be enough in most situations.
const LOCK_EXPIRATION_DELAY = ONE_SECOND;
const LOCK_SEPARATOR = '--';
const bufferedOperations = [];
let ongoingOperations;
function processSessionStoreOperations(operations, sessionStoreStrategy, numberOfRetries = 0) {
    var _a;
    const { isLockEnabled, persistSession, expireSession } = sessionStoreStrategy;
    const persistWithLock = (session) => persistSession({ ...session, lock: currentLock });
    const retrieveStore = () => {
        const { lock, ...session } = sessionStoreStrategy.retrieveSession();
        return {
            session,
            lock: lock && !isLockExpired(lock) ? lock : undefined,
        };
    };
    if (!ongoingOperations) {
        ongoingOperations = operations;
    }
    if (operations !== ongoingOperations) {
        bufferedOperations.push(operations);
        return;
    }
    if (isLockEnabled && numberOfRetries >= LOCK_MAX_TRIES) {
        addTelemetryDebug('Aborted session operation after max lock retries', {
            currentStore: retrieveStore(),
        });
        next(sessionStoreStrategy);
        return;
    }
    let currentLock;
    let currentStore = retrieveStore();
    if (isLockEnabled) {
        // if someone has lock, retry later
        if (currentStore.lock) {
            retryLater(operations, sessionStoreStrategy, numberOfRetries);
            return;
        }
        // acquire lock
        currentLock = createLock();
        persistWithLock(currentStore.session);
        // if lock is not acquired, retry later
        currentStore = retrieveStore();
        if (currentStore.lock !== currentLock) {
            retryLater(operations, sessionStoreStrategy, numberOfRetries);
            return;
        }
    }
    let processedSession = operations.process(currentStore.session);
    if (isLockEnabled) {
        // if lock corrupted after process, retry later
        currentStore = retrieveStore();
        if (currentStore.lock !== currentLock) {
            retryLater(operations, sessionStoreStrategy, numberOfRetries);
            return;
        }
    }
    if (processedSession) {
        if (isSessionInExpiredState(processedSession)) {
            expireSession(processedSession);
        }
        else {
            expandSessionState(processedSession);
            if (isLockEnabled) {
                persistWithLock(processedSession);
            }
            else {
                persistSession(processedSession);
            }
        }
    }
    if (isLockEnabled) {
        // correctly handle lock around expiration would require to handle this case properly at several levels
        // since we don't have evidence of lock issues around expiration, let's just not do the corruption check for it
        if (!(processedSession && isSessionInExpiredState(processedSession))) {
            // if lock corrupted after persist, retry later
            currentStore = retrieveStore();
            if (currentStore.lock !== currentLock) {
                retryLater(operations, sessionStoreStrategy, numberOfRetries);
                return;
            }
            persistSession(currentStore.session);
            processedSession = currentStore.session;
        }
    }
    // call after even if session is not persisted in order to perform operations on
    // up-to-date session state value => the value could have been modified by another tab
    (_a = operations.after) === null || _a === void 0 ? void 0 : _a.call(operations, processedSession || currentStore.session);
    next(sessionStoreStrategy);
}
function retryLater(operations, sessionStore, currentNumberOfRetries) {
    timer_setTimeout(() => {
        processSessionStoreOperations(operations, sessionStore, currentNumberOfRetries + 1);
    }, LOCK_RETRY_DELAY);
}
function next(sessionStore) {
    ongoingOperations = undefined;
    const nextOperations = bufferedOperations.shift();
    if (nextOperations) {
        processSessionStoreOperations(nextOperations, sessionStore);
    }
}
function createLock() {
    return generateUUID() + LOCK_SEPARATOR + timeStampNow();
}
function isLockExpired(lock) {
    const [, timeStamp] = lock.split(LOCK_SEPARATOR);
    return !timeStamp || elapsed(Number(timeStamp), timeStampNow()) > LOCK_EXPIRATION_DELAY;
}
//# sourceMappingURL=sessionStoreOperations.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/session/sessionStore.js











/**
 * Every second, the storage will be polled to check for any change that can occur
 * to the session state in another browser tab, or another window.
 * This value has been determined from our previous cookie-only implementation.
 */
const STORAGE_POLL_DELAY = ONE_SECOND;
/**
 * Selects the correct session store strategy type based on the configuration and storage
 * availability.
 */
function selectSessionStoreStrategyType(initConfiguration) {
    switch (initConfiguration.sessionPersistence) {
        case SessionPersistence.COOKIE:
            return selectCookieStrategy(initConfiguration);
        case SessionPersistence.LOCAL_STORAGE:
            return selectLocalStorageStrategy();
        case undefined: {
            let sessionStoreStrategyType = selectCookieStrategy(initConfiguration);
            if (!sessionStoreStrategyType && initConfiguration.allowFallbackToLocalStorage) {
                sessionStoreStrategyType = selectLocalStorageStrategy();
            }
            return sessionStoreStrategyType;
        }
        default:
            display.error(`Invalid session persistence '${String(initConfiguration.sessionPersistence)}'`);
    }
}
function getSessionStoreStrategy(sessionStoreStrategyType, configuration) {
    return sessionStoreStrategyType.type === SessionPersistence.COOKIE
        ? initCookieStrategy(configuration, sessionStoreStrategyType.cookieOptions)
        : initLocalStorageStrategy(configuration);
}
/**
 * Different session concepts:
 * - tracked, the session has an id and is updated along the user navigation
 * - not tracked, the session does not have an id but it is updated along the user navigation
 * - inactive, no session in store or session expired, waiting for a renew session
 */
function startSessionStore(sessionStoreStrategyType, configuration, productKey, computeTrackingType, sessionStoreStrategy = getSessionStoreStrategy(sessionStoreStrategyType, configuration)) {
    const renewObservable = new Observable();
    const expireObservable = new Observable();
    const sessionStateUpdateObservable = new Observable();
    const watchSessionTimeoutId = timer_setInterval(watchSession, STORAGE_POLL_DELAY);
    let sessionCache;
    startSession();
    const { throttled: throttledExpandOrRenewSession, cancel: cancelExpandOrRenewSession } = throttle(() => {
        processSessionStoreOperations({
            process: (sessionState) => {
                if (isSessionInNotStartedState(sessionState)) {
                    return;
                }
                const synchronizedSession = synchronizeSession(sessionState);
                expandOrRenewSessionState(synchronizedSession);
                return synchronizedSession;
            },
            after: (sessionState) => {
                if (isSessionStarted(sessionState) && !hasSessionInCache()) {
                    renewSessionInCache(sessionState);
                }
                sessionCache = sessionState;
            },
        }, sessionStoreStrategy);
    }, STORAGE_POLL_DELAY);
    function expandSession() {
        processSessionStoreOperations({
            process: (sessionState) => (hasSessionInCache() ? synchronizeSession(sessionState) : undefined),
        }, sessionStoreStrategy);
    }
    /**
     * allows two behaviors:
     * - if the session is active, synchronize the session cache without updating the session store
     * - if the session is not active, clear the session store and expire the session cache
     */
    function watchSession() {
        const sessionState = sessionStoreStrategy.retrieveSession();
        if (isSessionInExpiredState(sessionState)) {
            processSessionStoreOperations({
                process: (sessionState) => isSessionInExpiredState(sessionState) ? getExpiredSessionState(sessionState, configuration) : undefined,
                after: synchronizeSession,
            }, sessionStoreStrategy);
        }
        else {
            synchronizeSession(sessionState);
        }
    }
    function synchronizeSession(sessionState) {
        if (isSessionInExpiredState(sessionState)) {
            sessionState = getExpiredSessionState(sessionState, configuration);
        }
        if (hasSessionInCache()) {
            if (isSessionInCacheOutdated(sessionState)) {
                expireSessionInCache();
            }
            else {
                sessionStateUpdateObservable.notify({ previousState: sessionCache, newState: sessionState });
                sessionCache = sessionState;
            }
        }
        return sessionState;
    }
    function startSession() {
        processSessionStoreOperations({
            process: (sessionState) => {
                if (isSessionInNotStartedState(sessionState)) {
                    return getExpiredSessionState(sessionState, configuration);
                }
            },
            after: (sessionState) => {
                sessionCache = sessionState;
            },
        }, sessionStoreStrategy);
    }
    function expandOrRenewSessionState(sessionState) {
        if (isSessionInNotStartedState(sessionState)) {
            return false;
        }
        const trackingType = computeTrackingType(sessionState[productKey]);
        sessionState[productKey] = trackingType;
        delete sessionState.isExpired;
        if (trackingType !== SESSION_NOT_TRACKED && !sessionState.id) {
            sessionState.id = generateUUID();
            sessionState.created = String(dateNow());
        }
    }
    function hasSessionInCache() {
        return (sessionCache === null || sessionCache === void 0 ? void 0 : sessionCache[productKey]) !== undefined;
    }
    function isSessionInCacheOutdated(sessionState) {
        return sessionCache.id !== sessionState.id || sessionCache[productKey] !== sessionState[productKey];
    }
    function expireSessionInCache() {
        sessionCache = getExpiredSessionState(sessionCache, configuration);
        expireObservable.notify();
    }
    function renewSessionInCache(sessionState) {
        sessionCache = sessionState;
        renewObservable.notify();
    }
    function updateSessionState(partialSessionState) {
        processSessionStoreOperations({
            process: (sessionState) => ({ ...sessionState, ...partialSessionState }),
            after: synchronizeSession,
        }, sessionStoreStrategy);
    }
    return {
        expandOrRenewSession: throttledExpandOrRenewSession,
        expandSession,
        getSession: () => sessionCache,
        renewObservable,
        expireObservable,
        sessionStateUpdateObservable,
        restartSession: startSession,
        expire: () => {
            cancelExpandOrRenewSession();
            sessionStoreStrategy.expireSession(sessionCache);
            synchronizeSession(getExpiredSessionState(sessionCache, configuration));
        },
        stop: () => {
            timer_clearInterval(watchSessionTimeoutId);
        },
        updateSessionState,
    };
}
//# sourceMappingURL=sessionStore.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/matchOption.js


function isMatchOption(item) {
    const itemType = getType(item);
    return itemType === 'string' || itemType === 'function' || item instanceof RegExp;
}
/**
 * Returns true if value can be matched by at least one of the provided MatchOptions.
 * When comparing strings, setting useStartsWith to true will compare the value with the start of
 * the option, instead of requiring an exact match.
 */
function matchList(list, value, useStartsWith = false) {
    return list.some((item) => {
        try {
            if (typeof item === 'function') {
                return item(value);
            }
            else if (item instanceof RegExp) {
                return item.test(value);
            }
            else if (typeof item === 'string') {
                return useStartsWith ? value.startsWith(item) : item === value;
            }
        }
        catch (e) {
            display.error(e);
        }
        return false;
    });
}
//# sourceMappingURL=matchOption.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/extension/extensionUtils.js
const EXTENSION_PREFIXES = ['chrome-extension://', 'moz-extension://'];
function containsExtensionUrl(str) {
    return EXTENSION_PREFIXES.some((prefix) => str.includes(prefix));
}
/**
 * Utility function to detect if the SDK is being initialized in an unsupported browser extension environment.
 *
 * @param windowLocation - The current window location to check
 * @param stack - The error stack to check for extension URLs
 * @returns true if running in an unsupported browser extension environment
 */
function isUnsupportedExtensionEnvironment(windowLocation, stack = '') {
    // If we're on a regular web page but the error stack shows extension URLs,
    // then an extension is injecting RUM.
    return !containsExtensionUrl(windowLocation) && containsExtensionUrl(stack);
}
function extractExtensionUrlFromStack(stack = '') {
    for (const prefix of EXTENSION_PREFIXES) {
        const match = stack.match(new RegExp(`${prefix}[^/]+`));
        if (match) {
            return match[0];
        }
    }
}
//# sourceMappingURL=extensionUtils.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/allowedTrackingOrigins.js




const WARN_DOES_NOT_HAVE_ALLOWED_TRACKING_ORIGIN = 'Running the Browser SDK in a Web extension content script is discouraged and will be forbidden in a future major release unless the `allowedTrackingOrigins` option is provided.';
const ERROR_NOT_ALLOWED_TRACKING_ORIGIN = 'SDK initialized on a non-allowed domain.';
function isAllowedTrackingOrigins(configuration, windowOrigin = typeof location !== 'undefined' ? location.origin : '', errorStack = new Error().stack) {
    const allowedTrackingOrigins = configuration.allowedTrackingOrigins;
    if (!allowedTrackingOrigins) {
        if (isUnsupportedExtensionEnvironment(windowOrigin, errorStack)) {
            display.warn(WARN_DOES_NOT_HAVE_ALLOWED_TRACKING_ORIGIN);
            const extensionUrl = extractExtensionUrlFromStack(errorStack);
            addTelemetryDebug(WARN_DOES_NOT_HAVE_ALLOWED_TRACKING_ORIGIN, {
                extensionUrl: extensionUrl || 'unknown',
            });
            // TODO(next major): make `allowedTrackingOrigins` required in unsupported extension environments
        }
        return true;
    }
    const isAllowed = matchList(allowedTrackingOrigins, windowOrigin);
    if (!isAllowed) {
        display.error(ERROR_NOT_ALLOWED_TRACKING_ORIGIN);
    }
    return isAllowed;
}
//# sourceMappingURL=allowedTrackingOrigins.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/configuration/endpointBuilder.js




function createEndpointBuilder(initConfiguration, trackType, extraParameters) {
    const buildUrlWithParameters = createEndpointUrlWithParametersBuilder(initConfiguration, trackType);
    return {
        build(api, payload) {
            const parameters = buildEndpointParameters(initConfiguration, trackType, api, payload, extraParameters);
            return buildUrlWithParameters(parameters);
        },
        trackType,
    };
}
/**
 * Create a function used to build a full endpoint url from provided parameters. The goal of this
 * function is to pre-compute some parts of the URL to avoid re-computing everything on every
 * request, as only parameters are changing.
 */
function createEndpointUrlWithParametersBuilder(initConfiguration, trackType) {
    const path = `/api/v2/${trackType}`;
    const proxy = initConfiguration.proxy;
    if (typeof proxy === 'string') {
        const normalizedProxyUrl = normalizeUrl(proxy);
        return (parameters) => `${normalizedProxyUrl}?ddforward=${encodeURIComponent(`${path}?${parameters}`)}`;
    }
    if (typeof proxy === 'function') {
        return (parameters) => proxy({ path, parameters });
    }
    const host = buildEndpointHost(trackType, initConfiguration);
    return (parameters) => `https://${host}${path}?${parameters}`;
}
function buildEndpointHost(trackType, initConfiguration) {
    const { site = INTAKE_SITE_US1, internalAnalyticsSubdomain } = initConfiguration;
    if (trackType === 'logs' && initConfiguration.usePciIntake && site === INTAKE_SITE_US1) {
        return PCI_INTAKE_HOST_US1;
    }
    if (internalAnalyticsSubdomain && site === INTAKE_SITE_US1) {
        return `${internalAnalyticsSubdomain}.${INTAKE_SITE_US1}`;
    }
    if (site === INTAKE_SITE_FED_STAGING) {
        return `http-intake.logs.${site}`;
    }
    const domainParts = site.split('.');
    const extension = domainParts.pop();
    return `browser-intake-${domainParts.join('-')}.${extension}`;
}
/**
 * Build parameters to be used for an intake request. Parameters should be re-built for each
 * request, as they change randomly.
 */
function buildEndpointParameters({ clientToken, internalAnalyticsSubdomain }, trackType, api, { retry, encoding }, extraParameters = []) {
    const parameters = [
        'ddsource=browser',
        `dd-api-key=${clientToken}`,
        `dd-evp-origin-version=${encodeURIComponent("6.18.1")}`,
        'dd-evp-origin=browser',
        `dd-request-id=${generateUUID()}`,
    ].concat(extraParameters);
    if (encoding) {
        parameters.push(`dd-evp-encoding=${encoding}`);
    }
    if (trackType === 'rum') {
        parameters.push(`batch_time=${timeStampNow()}`, `_dd.api=${api}`);
        if (retry) {
            parameters.push(`_dd.retry_count=${retry.count}`, `_dd.retry_after=${retry.lastFailureStatus}`);
        }
    }
    if (internalAnalyticsSubdomain) {
        parameters.reverse();
    }
    return parameters.join('&');
}
//# sourceMappingURL=endpointBuilder.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/configuration/transportConfiguration.js


function computeTransportConfiguration(initConfiguration) {
    const site = initConfiguration.site || INTAKE_SITE_US1;
    const endpointBuilders = computeEndpointBuilders(initConfiguration);
    const replicaConfiguration = computeReplicaConfiguration(initConfiguration);
    return {
        replica: replicaConfiguration,
        site,
        ...endpointBuilders,
    };
}
function computeEndpointBuilders(initConfiguration) {
    return {
        logsEndpointBuilder: createEndpointBuilder(initConfiguration, 'logs'),
        rumEndpointBuilder: createEndpointBuilder(initConfiguration, 'rum'),
        profilingEndpointBuilder: createEndpointBuilder(initConfiguration, 'profile'),
        sessionReplayEndpointBuilder: createEndpointBuilder(initConfiguration, 'replay'),
        exposuresEndpointBuilder: createEndpointBuilder(initConfiguration, 'exposures'),
    };
}
function computeReplicaConfiguration(initConfiguration) {
    if (!initConfiguration.replica) {
        return;
    }
    const replicaConfiguration = {
        ...initConfiguration,
        site: INTAKE_SITE_US1,
        clientToken: initConfiguration.replica.clientToken,
    };
    return {
        logsEndpointBuilder: createEndpointBuilder(replicaConfiguration, 'logs'),
        rumEndpointBuilder: createEndpointBuilder(replicaConfiguration, 'rum', [
            `application.id=${initConfiguration.replica.applicationId}`,
        ]),
    };
}
function isIntakeUrl(url) {
    // check if tags is present in the query string
    return INTAKE_URL_PARAMETERS.every((param) => url.includes(param));
}
//# sourceMappingURL=transportConfiguration.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/configuration/configuration.js










/**
 * Default privacy level for the browser SDK.
 *
 * [Replay Privacy Options](https://docs.datadoghq.com/real_user_monitoring/session_replay/browser/privacy_options) for further information.
 */
const DefaultPrivacyLevel = {
    ALLOW: 'allow',
    MASK: 'mask',
    MASK_USER_INPUT: 'mask-user-input',
};
/**
 * Trace context injection option.
 *
 * See [Connect RUM and Traces](https://docs.datadoghq.com/real_user_monitoring/platform/connect_rum_and_traces/?tab=browserrum) for further information.
 */
const TraceContextInjection = {
    ALL: 'all',
    SAMPLED: 'sampled',
};
function isString(tag, tagName) {
    if (tag !== undefined && tag !== null && typeof tag !== 'string') {
        display.error(`${tagName} must be defined as a string`);
        return false;
    }
    return true;
}
function isDatadogSite(site) {
    if (site && typeof site === 'string' && !/(datadog|ddog|datad0g|dd0g)/.test(site)) {
        display.error(`Site should be a valid Datadog site. ${MORE_DETAILS} ${DOCS_ORIGIN}/getting_started/site/.`);
        return false;
    }
    return true;
}
function isSampleRate(sampleRate, name) {
    if (sampleRate !== undefined && !isPercentage(sampleRate)) {
        display.error(`${name} Sample Rate should be a number between 0 and 100`);
        return false;
    }
    return true;
}
function validateAndBuildConfiguration(initConfiguration) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if (!initConfiguration || !initConfiguration.clientToken) {
        display.error('Client Token is not configured, we will not send any data.');
        return;
    }
    if (initConfiguration.allowedTrackingOrigins !== undefined &&
        !Array.isArray(initConfiguration.allowedTrackingOrigins)) {
        display.error('Allowed Tracking Origins must be an array');
        return;
    }
    if (!isDatadogSite(initConfiguration.site) ||
        !isSampleRate(initConfiguration.sessionSampleRate, 'Session') ||
        !isSampleRate(initConfiguration.telemetrySampleRate, 'Telemetry') ||
        !isSampleRate(initConfiguration.telemetryConfigurationSampleRate, 'Telemetry Configuration') ||
        !isSampleRate(initConfiguration.telemetryUsageSampleRate, 'Telemetry Usage') ||
        !isString(initConfiguration.version, 'Version') ||
        !isString(initConfiguration.env, 'Env') ||
        !isString(initConfiguration.service, 'Service') ||
        !isAllowedTrackingOrigins(initConfiguration)) {
        return;
    }
    if (initConfiguration.trackingConsent !== undefined &&
        !objectHasValue(TrackingConsent, initConfiguration.trackingConsent)) {
        display.error('Tracking Consent should be either "granted" or "not-granted"');
        return;
    }
    return {
        beforeSend: initConfiguration.beforeSend && catchUserErrors(initConfiguration.beforeSend, 'beforeSend threw an error:'),
        sessionStoreStrategyType: selectSessionStoreStrategyType(initConfiguration),
        sessionSampleRate: (_a = initConfiguration.sessionSampleRate) !== null && _a !== void 0 ? _a : 100,
        telemetrySampleRate: (_b = initConfiguration.telemetrySampleRate) !== null && _b !== void 0 ? _b : 20,
        telemetryConfigurationSampleRate: (_c = initConfiguration.telemetryConfigurationSampleRate) !== null && _c !== void 0 ? _c : 5,
        telemetryUsageSampleRate: (_d = initConfiguration.telemetryUsageSampleRate) !== null && _d !== void 0 ? _d : 5,
        service: (_e = initConfiguration.service) !== null && _e !== void 0 ? _e : undefined,
        env: (_f = initConfiguration.env) !== null && _f !== void 0 ? _f : undefined,
        version: (_g = initConfiguration.version) !== null && _g !== void 0 ? _g : undefined,
        datacenter: (_h = initConfiguration.datacenter) !== null && _h !== void 0 ? _h : undefined,
        silentMultipleInit: !!initConfiguration.silentMultipleInit,
        allowUntrustedEvents: !!initConfiguration.allowUntrustedEvents,
        trackingConsent: (_j = initConfiguration.trackingConsent) !== null && _j !== void 0 ? _j : TrackingConsent.GRANTED,
        trackAnonymousUser: (_k = initConfiguration.trackAnonymousUser) !== null && _k !== void 0 ? _k : true,
        storeContextsAcrossPages: !!initConfiguration.storeContextsAcrossPages,
        /**
         * beacon payload max queue size implementation is 64kb
         * ensure that we leave room for logs, rum and potential other users
         */
        batchBytesLimit: 16 * ONE_KIBI_BYTE,
        eventRateLimiterThreshold: 3000,
        maxTelemetryEventsPerPage: 15,
        /**
         * flush automatically, aim to be lower than ALB connection timeout
         * to maximize connection reuse.
         */
        flushTimeout: (30 * ONE_SECOND),
        /**
         * Logs intake limit
         */
        batchMessagesLimit: 50,
        messageBytesLimit: 256 * ONE_KIBI_BYTE,
        ...computeTransportConfiguration(initConfiguration),
    };
}
function serializeConfiguration(initConfiguration) {
    return {
        session_sample_rate: initConfiguration.sessionSampleRate,
        telemetry_sample_rate: initConfiguration.telemetrySampleRate,
        telemetry_configuration_sample_rate: initConfiguration.telemetryConfigurationSampleRate,
        telemetry_usage_sample_rate: initConfiguration.telemetryUsageSampleRate,
        use_before_send: !!initConfiguration.beforeSend,
        use_partitioned_cross_site_session_cookie: initConfiguration.usePartitionedCrossSiteSessionCookie,
        use_secure_session_cookie: initConfiguration.useSecureSessionCookie,
        use_proxy: !!initConfiguration.proxy,
        silent_multiple_init: initConfiguration.silentMultipleInit,
        track_session_across_subdomains: initConfiguration.trackSessionAcrossSubdomains,
        track_anonymous_user: initConfiguration.trackAnonymousUser,
        session_persistence: initConfiguration.sessionPersistence,
        allow_fallback_to_local_storage: !!initConfiguration.allowFallbackToLocalStorage,
        store_contexts_across_pages: !!initConfiguration.storeContextsAcrossPages,
        allow_untrusted_events: !!initConfiguration.allowUntrustedEvents,
        tracking_consent: initConfiguration.trackingConsent,
        use_allowed_tracking_origins: Array.isArray(initConfiguration.allowedTrackingOrigins),
    };
}
//# sourceMappingURL=configuration.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/report/reportObservable.js







const RawReportType = {
    intervention: 'intervention',
    deprecation: 'deprecation',
    cspViolation: 'csp_violation',
};
function initReportObservable(configuration, apis) {
    const observables = [];
    if (apis.includes(RawReportType.cspViolation)) {
        observables.push(createCspViolationReportObservable(configuration));
    }
    const reportTypes = apis.filter((api) => api !== RawReportType.cspViolation);
    if (reportTypes.length) {
        observables.push(createReportObservable(reportTypes));
    }
    return mergeObservables(...observables);
}
function createReportObservable(reportTypes) {
    return new Observable((observable) => {
        if (!window.ReportingObserver) {
            return;
        }
        const handleReports = monitor((reports, _) => reports.forEach((report) => observable.notify(buildRawReportErrorFromReport(report))));
        const observer = new window.ReportingObserver(handleReports, {
            types: reportTypes,
            buffered: true,
        });
        observer.observe();
        return () => {
            observer.disconnect();
        };
    });
}
function createCspViolationReportObservable(configuration) {
    return new Observable((observable) => {
        const { stop } = addEventListener(configuration, document, "securitypolicyviolation" /* DOM_EVENT.SECURITY_POLICY_VIOLATION */, (event) => {
            observable.notify(buildRawReportErrorFromCspViolation(event));
        });
        return stop;
    });
}
function buildRawReportErrorFromReport(report) {
    const { type, body } = report;
    return buildRawReportError({
        type: body.id,
        message: `${type}: ${body.message}`,
        originalError: report,
        stack: buildStack(body.id, body.message, body.sourceFile, body.lineNumber, body.columnNumber),
    });
}
function buildRawReportErrorFromCspViolation(event) {
    const message = `'${event.blockedURI}' blocked by '${event.effectiveDirective}' directive`;
    return buildRawReportError({
        type: event.effectiveDirective,
        message: `${RawReportType.cspViolation}: ${message}`,
        originalError: event,
        csp: {
            disposition: event.disposition,
        },
        stack: buildStack(event.effectiveDirective, event.originalPolicy
            ? `${message} of the policy "${safeTruncate(event.originalPolicy, 100, '...')}"`
            : 'no policy', event.sourceFile, event.lineNumber, event.columnNumber),
    });
}
function buildRawReportError(partial) {
    return {
        startClocks: clocksNow(),
        source: ErrorSource.REPORT,
        handling: "unhandled" /* ErrorHandling.UNHANDLED */,
        ...partial,
    };
}
function buildStack(name, message, sourceFile, lineNumber, columnNumber) {
    return sourceFile
        ? toStackTraceString({
            name,
            message,
            stack: [
                {
                    func: '?',
                    url: sourceFile,
                    line: lineNumber !== null && lineNumber !== void 0 ? lineNumber : undefined,
                    column: columnNumber !== null && columnNumber !== void 0 ? columnNumber : undefined,
                },
            ],
        })
        : undefined;
}
//# sourceMappingURL=reportObservable.js.map
;// ./node_modules/@datadog/browser-logs/esm/domain/configuration.js

/**
 * arbitrary value, byte precision not needed
 */
const DEFAULT_REQUEST_ERROR_RESPONSE_LENGTH_LIMIT = 32 * ONE_KIBI_BYTE;
function validateAndBuildLogsConfiguration(initConfiguration) {
    if (initConfiguration.usePciIntake === true && initConfiguration.site && initConfiguration.site !== 'datadoghq.com') {
        display.warn('PCI compliance for Logs is only available for Datadog organizations in the US1 site. Default intake will be used.');
    }
    const baseConfiguration = validateAndBuildConfiguration(initConfiguration);
    const forwardConsoleLogs = validateAndBuildForwardOption(initConfiguration.forwardConsoleLogs, objectValues(ConsoleApiName), 'Forward Console Logs');
    const forwardReports = validateAndBuildForwardOption(initConfiguration.forwardReports, objectValues(RawReportType), 'Forward Reports');
    if (!baseConfiguration || !forwardConsoleLogs || !forwardReports) {
        return;
    }
    if (initConfiguration.forwardErrorsToLogs && !forwardConsoleLogs.includes(ConsoleApiName.error)) {
        forwardConsoleLogs.push(ConsoleApiName.error);
    }
    return {
        forwardErrorsToLogs: initConfiguration.forwardErrorsToLogs !== false,
        forwardConsoleLogs,
        forwardReports,
        requestErrorResponseLengthLimit: DEFAULT_REQUEST_ERROR_RESPONSE_LENGTH_LIMIT,
        ...baseConfiguration,
    };
}
function validateAndBuildForwardOption(option, allowedValues, label) {
    if (option === undefined) {
        return [];
    }
    if (!(option === 'all' || (Array.isArray(option) && option.every((api) => allowedValues.includes(api))))) {
        display.error(`${label} should be "all" or an array with allowed values "${allowedValues.join('", "')}"`);
        return;
    }
    return option === 'all' ? allowedValues : removeDuplicates(option);
}
function serializeLogsConfiguration(configuration) {
    const baseSerializedInitConfiguration = serializeConfiguration(configuration);
    return {
        forward_errors_to_logs: configuration.forwardErrorsToLogs,
        forward_console_logs: configuration.forwardConsoleLogs,
        forward_reports: configuration.forwardReports,
        use_pci_intake: configuration.usePciIntake,
        ...baseSerializedInitConfiguration,
    };
}
//# sourceMappingURL=configuration.js.map
;// ./node_modules/@datadog/browser-logs/esm/boot/preStartLogs.js


function createPreStartStrategy(getCommonContext, trackingConsentState, doStartLogs) {
    const bufferApiCalls = createBoundedBuffer();
    // TODO next major: remove the globalContext, accountContextManager, userContext from preStartStrategy and use an empty context instead
    const globalContext = buildGlobalContextManager();
    bufferContextCalls(globalContext, CustomerContextKey.globalContext, bufferApiCalls);
    const accountContext = buildAccountContextManager();
    bufferContextCalls(accountContext, CustomerContextKey.accountContext, bufferApiCalls);
    const userContext = buildUserContextManager();
    bufferContextCalls(userContext, CustomerContextKey.userContext, bufferApiCalls);
    let cachedInitConfiguration;
    let cachedConfiguration;
    const trackingConsentStateSubscription = trackingConsentState.observable.subscribe(tryStartLogs);
    function tryStartLogs() {
        if (!cachedConfiguration || !cachedInitConfiguration || !trackingConsentState.isGranted()) {
            return;
        }
        trackingConsentStateSubscription.unsubscribe();
        const startLogsResult = doStartLogs(cachedInitConfiguration, cachedConfiguration);
        bufferApiCalls.drain(startLogsResult);
    }
    return {
        init(initConfiguration) {
            if (!initConfiguration) {
                display.error('Missing configuration');
                return;
            }
            // Set the experimental feature flags as early as possible, so we can use them in most places
            initFeatureFlags(initConfiguration.enableExperimentalFeatures);
            if (canUseEventBridge()) {
                initConfiguration = overrideInitConfigurationForBridge(initConfiguration);
            }
            // Expose the initial configuration regardless of initialization success.
            cachedInitConfiguration = initConfiguration;
            addTelemetryConfiguration(serializeLogsConfiguration(initConfiguration));
            if (cachedConfiguration) {
                displayAlreadyInitializedError('DD_LOGS', initConfiguration);
                return;
            }
            const configuration = validateAndBuildLogsConfiguration(initConfiguration);
            if (!configuration) {
                return;
            }
            cachedConfiguration = configuration;
            // Instrumuent fetch to track network requests
            // This is needed in case the consent is not granted and some cutsomer
            // library (Apollo Client) is storing uninstrumented fetch to be used later
            // The subscrption is needed so that the instrumentation process is completed
            initFetchObservable().subscribe(functionUtils_noop);
            trackingConsentState.tryToInit(configuration.trackingConsent);
            tryStartLogs();
        },
        get initConfiguration() {
            return cachedInitConfiguration;
        },
        globalContext,
        accountContext,
        userContext,
        getInternalContext: functionUtils_noop,
        handleLog(message, statusType, handlingStack, context = getCommonContext(), date = timeStampNow()) {
            bufferApiCalls.add((startLogsResult) => startLogsResult.handleLog(message, statusType, handlingStack, context, date));
        },
    };
}
function overrideInitConfigurationForBridge(initConfiguration) {
    return { ...initConfiguration, clientToken: 'empty' };
}
//# sourceMappingURL=preStartLogs.js.map
;// ./node_modules/@datadog/browser-logs/esm/boot/logsPublicApi.js




function makeLogsPublicApi(startLogsImpl) {
    const trackingConsentState = createTrackingConsentState();
    const bufferedDataObservable = startBufferingData().observable;
    let strategy = createPreStartStrategy(buildCommonContext, trackingConsentState, (initConfiguration, configuration) => {
        const startLogsResult = startLogsImpl(configuration, buildCommonContext, trackingConsentState, bufferedDataObservable);
        strategy = createPostStartStrategy(initConfiguration, startLogsResult);
        return startLogsResult;
    });
    const getStrategy = () => strategy;
    const customLoggers = {};
    const mainLogger = new Logger((...params) => strategy.handleLog(...params));
    return makePublicApi({
        logger: mainLogger,
        init: monitor((initConfiguration) => strategy.init(initConfiguration)),
        setTrackingConsent: monitor((trackingConsent) => {
            trackingConsentState.update(trackingConsent);
            addTelemetryUsage({ feature: 'set-tracking-consent', tracking_consent: trackingConsent });
        }),
        getGlobalContext: defineContextMethod(getStrategy, CustomerContextKey.globalContext, ContextManagerMethod.getContext),
        setGlobalContext: defineContextMethod(getStrategy, CustomerContextKey.globalContext, ContextManagerMethod.setContext),
        setGlobalContextProperty: defineContextMethod(getStrategy, CustomerContextKey.globalContext, ContextManagerMethod.setContextProperty),
        removeGlobalContextProperty: defineContextMethod(getStrategy, CustomerContextKey.globalContext, ContextManagerMethod.removeContextProperty),
        clearGlobalContext: defineContextMethod(getStrategy, CustomerContextKey.globalContext, ContextManagerMethod.clearContext),
        createLogger: monitor((name, conf = {}) => {
            customLoggers[name] = new Logger((...params) => strategy.handleLog(...params), sanitize(name), conf.handler, conf.level, sanitize(conf.context));
            return customLoggers[name];
        }),
        getLogger: monitor((name) => customLoggers[name]),
        getInitConfiguration: monitor(() => deepClone(strategy.initConfiguration)),
        getInternalContext: monitor((startTime) => strategy.getInternalContext(startTime)),
        setUser: defineContextMethod(getStrategy, CustomerContextKey.userContext, ContextManagerMethod.setContext),
        getUser: defineContextMethod(getStrategy, CustomerContextKey.userContext, ContextManagerMethod.getContext),
        setUserProperty: defineContextMethod(getStrategy, CustomerContextKey.userContext, ContextManagerMethod.setContextProperty),
        removeUserProperty: defineContextMethod(getStrategy, CustomerContextKey.userContext, ContextManagerMethod.removeContextProperty),
        clearUser: defineContextMethod(getStrategy, CustomerContextKey.userContext, ContextManagerMethod.clearContext),
        setAccount: defineContextMethod(getStrategy, CustomerContextKey.accountContext, ContextManagerMethod.setContext),
        getAccount: defineContextMethod(getStrategy, CustomerContextKey.accountContext, ContextManagerMethod.getContext),
        setAccountProperty: defineContextMethod(getStrategy, CustomerContextKey.accountContext, ContextManagerMethod.setContextProperty),
        removeAccountProperty: defineContextMethod(getStrategy, CustomerContextKey.accountContext, ContextManagerMethod.removeContextProperty),
        clearAccount: defineContextMethod(getStrategy, CustomerContextKey.accountContext, ContextManagerMethod.clearContext),
    });
}
function createPostStartStrategy(initConfiguration, startLogsResult) {
    return {
        init: (initConfiguration) => {
            displayAlreadyInitializedError('DD_LOGS', initConfiguration);
        },
        initConfiguration,
        ...startLogsResult,
    };
}
//# sourceMappingURL=logsPublicApi.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/encoder.js

function createIdentityEncoder() {
    let output = '';
    let outputBytesCount = 0;
    return {
        isAsync: false,
        get isEmpty() {
            return !output;
        },
        write(data, callback) {
            const additionalEncodedBytesCount = computeBytesCount(data);
            outputBytesCount += additionalEncodedBytesCount;
            output += data;
            if (callback) {
                callback(additionalEncodedBytesCount);
            }
        },
        finish(callback) {
            callback(this.finishSync());
        },
        finishSync() {
            const result = {
                output,
                outputBytesCount,
                rawBytesCount: outputBytesCount,
                pendingData: '',
            };
            output = '';
            outputBytesCount = 0;
            return result;
        },
        estimateEncodedBytesCount(data) {
            return data.length;
        },
    };
}
//# sourceMappingURL=encoder.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/synthetics/syntheticsWorkerValues.js

const SYNTHETICS_TEST_ID_COOKIE_NAME = 'datadog-synthetics-public-id';
const SYNTHETICS_RESULT_ID_COOKIE_NAME = 'datadog-synthetics-result-id';
const SYNTHETICS_INJECTS_RUM_COOKIE_NAME = 'datadog-synthetics-injects-rum';
function willSyntheticsInjectRum() {
    return Boolean(window._DATADOG_SYNTHETICS_INJECTS_RUM || getInitCookie(SYNTHETICS_INJECTS_RUM_COOKIE_NAME));
}
function getSyntheticsTestId() {
    const value = window._DATADOG_SYNTHETICS_PUBLIC_ID || getInitCookie(SYNTHETICS_TEST_ID_COOKIE_NAME);
    return typeof value === 'string' ? value : undefined;
}
function getSyntheticsResultId() {
    const value = window._DATADOG_SYNTHETICS_RESULT_ID || getInitCookie(SYNTHETICS_RESULT_ID_COOKIE_NAME);
    return typeof value === 'string' ? value : undefined;
}
function isSyntheticsTest() {
    return Boolean(getSyntheticsTestId() && getSyntheticsResultId());
}
//# sourceMappingURL=syntheticsWorkerValues.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/valueHistory.js



const END_OF_TIMES = Infinity;
const CLEAR_OLD_VALUES_INTERVAL = ONE_MINUTE;
let cleanupHistoriesInterval = null;
const cleanupTasks = new Set();
function cleanupHistories() {
    cleanupTasks.forEach((task) => task());
}
function createValueHistory({ expireDelay, maxEntries, }) {
    let entries = [];
    if (!cleanupHistoriesInterval) {
        cleanupHistoriesInterval = timer_setInterval(() => cleanupHistories(), CLEAR_OLD_VALUES_INTERVAL);
    }
    const clearExpiredValues = () => {
        const oldTimeThreshold = relativeNow() - expireDelay;
        while (entries.length > 0 && entries[entries.length - 1].endTime < oldTimeThreshold) {
            entries.pop();
        }
    };
    cleanupTasks.add(clearExpiredValues);
    /**
     * Add a value to the history associated with a start time. Returns a reference to this newly
     * added entry that can be removed or closed.
     */
    function add(value, startTime) {
        const entry = {
            value,
            startTime,
            endTime: END_OF_TIMES,
            remove: () => {
                removeItem(entries, entry);
            },
            close: (endTime) => {
                entry.endTime = endTime;
            },
        };
        if (maxEntries && entries.length >= maxEntries) {
            entries.pop();
        }
        entries.unshift(entry);
        return entry;
    }
    /**
     * Return the latest value that was active during `startTime`, or the currently active value
     * if no `startTime` is provided. This method assumes that entries are not overlapping.
     *
     * If `option.returnInactive` is true, returns the value at `startTime` (active or not).
     */
    function find(startTime = END_OF_TIMES, options = { returnInactive: false }) {
        for (const entry of entries) {
            if (entry.startTime <= startTime) {
                if (options.returnInactive || startTime <= entry.endTime) {
                    return entry.value;
                }
                break;
            }
        }
    }
    /**
     * Helper function to close the currently active value, if any. This method assumes that entries
     * are not overlapping.
     */
    function closeActive(endTime) {
        const latestEntry = entries[0];
        if (latestEntry && latestEntry.endTime === END_OF_TIMES) {
            latestEntry.close(endTime);
        }
    }
    /**
     * Return all values with an active period overlapping with the duration,
     * or all values that were active during `startTime` if no duration is provided,
     * or all currently active values if no `startTime` is provided.
     */
    function findAll(startTime = END_OF_TIMES, duration = 0) {
        const endTime = addDuration(startTime, duration);
        return entries
            .filter((entry) => entry.startTime <= endTime && startTime <= entry.endTime)
            .map((entry) => entry.value);
    }
    /**
     * Remove all entries from this collection.
     */
    function reset() {
        entries = [];
    }
    /**
     * Stop internal garbage collection of past entries.
     */
    function stop() {
        cleanupTasks.delete(clearExpiredValues);
        if (cleanupTasks.size === 0 && cleanupHistoriesInterval) {
            timer_clearInterval(cleanupHistoriesInterval);
            cleanupHistoriesInterval = null;
        }
    }
    return { add, find, closeActive, findAll, reset, stop };
}
//# sourceMappingURL=valueHistory.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/session/sessionManager.js











const VISIBILITY_CHECK_DELAY = ONE_MINUTE;
const SESSION_CONTEXT_TIMEOUT_DELAY = SESSION_TIME_OUT_DELAY;
let stopCallbacks = [];
function startSessionManager(configuration, productKey, computeTrackingType, trackingConsentState) {
    const renewObservable = new Observable();
    const expireObservable = new Observable();
    // TODO - Improve configuration type and remove assertion
    const sessionStore = startSessionStore(configuration.sessionStoreStrategyType, configuration, productKey, computeTrackingType);
    stopCallbacks.push(() => sessionStore.stop());
    const sessionContextHistory = createValueHistory({
        expireDelay: SESSION_CONTEXT_TIMEOUT_DELAY,
    });
    stopCallbacks.push(() => sessionContextHistory.stop());
    sessionStore.renewObservable.subscribe(() => {
        sessionContextHistory.add(buildSessionContext(), relativeNow());
        renewObservable.notify();
    });
    sessionStore.expireObservable.subscribe(() => {
        expireObservable.notify();
        sessionContextHistory.closeActive(relativeNow());
    });
    // We expand/renew session unconditionally as tracking consent is always granted when the session
    // manager is started.
    sessionStore.expandOrRenewSession();
    sessionContextHistory.add(buildSessionContext(), clocksOrigin().relative);
    trackingConsentState.observable.subscribe(() => {
        if (trackingConsentState.isGranted()) {
            sessionStore.expandOrRenewSession();
        }
        else {
            sessionStore.expire();
        }
    });
    trackActivity(configuration, () => {
        if (trackingConsentState.isGranted()) {
            sessionStore.expandOrRenewSession();
        }
    });
    trackVisibility(configuration, () => sessionStore.expandSession());
    trackResume(configuration, () => sessionStore.restartSession());
    function buildSessionContext() {
        const session = sessionStore.getSession();
        if (!session) {
            reportUnexpectedSessionState().catch(() => void 0); // Ignore errors
            return {
                id: 'invalid',
                trackingType: SESSION_NOT_TRACKED,
                isReplayForced: false,
                anonymousId: undefined,
            };
        }
        return {
            id: session.id,
            trackingType: session[productKey],
            isReplayForced: !!session.forcedReplay,
            anonymousId: session.anonymousId,
        };
    }
    return {
        findSession: (startTime, options) => sessionContextHistory.find(startTime, options),
        renewObservable,
        expireObservable,
        sessionStateUpdateObservable: sessionStore.sessionStateUpdateObservable,
        expire: sessionStore.expire,
        updateSessionState: sessionStore.updateSessionState,
    };
}
function stopSessionManager() {
    stopCallbacks.forEach((e) => e());
    stopCallbacks = [];
}
function trackActivity(configuration, expandOrRenewSession) {
    const { stop } = addEventListeners(configuration, window, ["click" /* DOM_EVENT.CLICK */, "touchstart" /* DOM_EVENT.TOUCH_START */, "keydown" /* DOM_EVENT.KEY_DOWN */, "scroll" /* DOM_EVENT.SCROLL */], expandOrRenewSession, { capture: true, passive: true });
    stopCallbacks.push(stop);
}
function trackVisibility(configuration, expandSession) {
    const expandSessionWhenVisible = () => {
        if (document.visibilityState === 'visible') {
            expandSession();
        }
    };
    const { stop } = addEventListener(configuration, document, "visibilitychange" /* DOM_EVENT.VISIBILITY_CHANGE */, expandSessionWhenVisible);
    stopCallbacks.push(stop);
    const visibilityCheckInterval = timer_setInterval(expandSessionWhenVisible, VISIBILITY_CHECK_DELAY);
    stopCallbacks.push(() => {
        timer_clearInterval(visibilityCheckInterval);
    });
}
function trackResume(configuration, cb) {
    const { stop } = addEventListener(configuration, window, "resume" /* DOM_EVENT.RESUME */, cb, { capture: true });
    stopCallbacks.push(stop);
}
async function reportUnexpectedSessionState() {
    const rawSession = retrieveSessionCookie();
    let sessionCookies = [];
    if ('cookieStore' in window) {
        sessionCookies = await window.cookieStore.getAll('_dd_s');
    }
    else {
        sessionCookies = document.cookie.split(/\s*;\s*/).filter((cookie) => cookie.startsWith('_dd_s'));
    }
    addTelemetryDebug('Unexpected session state', {
        session: rawSession,
        isSyntheticsTest: isSyntheticsTest(),
        createdTimestamp: rawSession === null || rawSession === void 0 ? void 0 : rawSession.created,
        expireTimestamp: rawSession === null || rawSession === void 0 ? void 0 : rawSession.expire,
        cookie: {
            count: sessionCookies.length,
            domain: getCurrentSite(),
            ...sessionCookies,
        },
        currentDomain: `${window.location.protocol}//${window.location.hostname}`,
    });
}
//# sourceMappingURL=sessionManager.js.map
;// ./node_modules/@datadog/browser-logs/esm/domain/logsSessionManager.js

const logsSessionManager_LOGS_SESSION_KEY = 'logs';
function startLogsSessionManager(configuration, trackingConsentState) {
    const sessionManager = startSessionManager(configuration, logsSessionManager_LOGS_SESSION_KEY, (rawTrackingType) => computeTrackingType(configuration, rawTrackingType), trackingConsentState);
    return {
        findTrackedSession: (startTime, options = { returnInactive: false }) => {
            const session = sessionManager.findSession(startTime, options);
            return session && session.trackingType === "1" /* LoggerTrackingType.TRACKED */
                ? {
                    id: session.id,
                    anonymousId: session.anonymousId,
                }
                : undefined;
        },
        expireObservable: sessionManager.expireObservable,
    };
}
function startLogsSessionManagerStub(configuration) {
    const isTracked = computeTrackingType(configuration) === "1" /* LoggerTrackingType.TRACKED */;
    const session = isTracked ? {} : undefined;
    return {
        findTrackedSession: () => session,
        expireObservable: new Observable(),
    };
}
function computeTrackingType(configuration, rawTrackingType) {
    if (hasValidLoggerSession(rawTrackingType)) {
        return rawTrackingType;
    }
    if (!performDraw(configuration.sessionSampleRate)) {
        return "0" /* LoggerTrackingType.NOT_TRACKED */;
    }
    return "1" /* LoggerTrackingType.TRACKED */;
}
function hasValidLoggerSession(trackingType) {
    return trackingType === "0" /* LoggerTrackingType.NOT_TRACKED */ || trackingType === "1" /* LoggerTrackingType.TRACKED */;
}
//# sourceMappingURL=logsSessionManager.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/eventRateLimiter/createEventRateLimiter.js



function createEventRateLimiter(eventType, limit, onLimitReached) {
    let eventCount = 0;
    let allowNextEvent = false;
    return {
        isLimitReached() {
            if (eventCount === 0) {
                timer_setTimeout(() => {
                    eventCount = 0;
                }, ONE_MINUTE);
            }
            eventCount += 1;
            if (eventCount <= limit || allowNextEvent) {
                allowNextEvent = false;
                return false;
            }
            if (eventCount === limit + 1) {
                allowNextEvent = true;
                try {
                    onLimitReached({
                        message: `Reached max number of ${eventType}s by minute: ${limit}`,
                        source: ErrorSource.AGENT,
                        startClocks: clocksNow(),
                    });
                }
                finally {
                    allowNextEvent = false;
                }
            }
            return true;
        },
    };
}
//# sourceMappingURL=createEventRateLimiter.js.map
;// ./node_modules/@datadog/browser-logs/esm/domain/assembly.js


function startLogsAssembly(configuration, lifeCycle, hooks, getCommonContext, reportError) {
    const statusWithCustom = STATUSES.concat(['custom']);
    const logRateLimiters = {};
    statusWithCustom.forEach((status) => {
        logRateLimiters[status] = createEventRateLimiter(status, configuration.eventRateLimiterThreshold, reportError);
    });
    lifeCycle.subscribe(0 /* LifeCycleEventType.RAW_LOG_COLLECTED */, ({ rawLogsEvent, messageContext = undefined, savedCommonContext = undefined, domainContext, ddtags = [] }) => {
        var _a, _b;
        const startTime = getRelativeTime(rawLogsEvent.date);
        const commonContext = savedCommonContext || getCommonContext();
        const defaultLogsEventAttributes = hooks.triggerHook(0 /* HookNames.Assemble */, {
            startTime,
        });
        if (defaultLogsEventAttributes === DISCARDED) {
            return;
        }
        const defaultDdtags = buildTags(configuration);
        const log = combine({
            view: commonContext.view,
        }, defaultLogsEventAttributes, rawLogsEvent, messageContext, {
            ddtags: defaultDdtags.concat(ddtags).join(','),
        });
        if (((_a = configuration.beforeSend) === null || _a === void 0 ? void 0 : _a.call(configuration, log, domainContext)) === false ||
            (log.origin !== ErrorSource.AGENT &&
                ((_b = logRateLimiters[log.status]) !== null && _b !== void 0 ? _b : logRateLimiters['custom']).isLimitReached())) {
            return;
        }
        lifeCycle.notify(1 /* LifeCycleEventType.LOG_COLLECTED */, log);
    });
}
//# sourceMappingURL=assembly.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/console/consoleObservable.js










let consoleObservablesByApi = {};
function initConsoleObservable(apis) {
    const consoleObservables = apis.map((api) => {
        if (!consoleObservablesByApi[api]) {
            consoleObservablesByApi[api] = createConsoleObservable(api); // we are sure that the observable created for this api will yield the expected ConsoleLog type
        }
        return consoleObservablesByApi[api];
    });
    return mergeObservables(...consoleObservables);
}
function resetConsoleObservable() {
    consoleObservablesByApi = {};
}
function createConsoleObservable(api) {
    return new Observable((observable) => {
        const originalConsoleApi = globalConsole[api];
        globalConsole[api] = (...params) => {
            originalConsoleApi.apply(console, params);
            const handlingStack = createHandlingStack('console error');
            callMonitored(() => {
                observable.notify(buildConsoleLog(params, api, handlingStack));
            });
        };
        return () => {
            globalConsole[api] = originalConsoleApi;
        };
    });
}
function buildConsoleLog(params, api, handlingStack) {
    const message = params.map((param) => formatConsoleParameters(param)).join(' ');
    if (api === ConsoleApiName.error) {
        const firstErrorParam = params.find(isError);
        const rawError = computeRawError({
            originalError: firstErrorParam,
            handlingStack,
            startClocks: clocksNow(),
            source: ErrorSource.CONSOLE,
            handling: "handled" /* ErrorHandling.HANDLED */,
            nonErrorPrefix: "Provided" /* NonErrorPrefix.PROVIDED */,
            // if no good stack is computed from the error, let's not use the fallback stack message
            // advising the user to use an instance of Error, as console.error is commonly used without an
            // Error instance.
            useFallbackStack: false,
        });
        // Use the full log message as the error message instead of just the error instance message.
        rawError.message = message;
        return {
            api,
            message,
            handlingStack,
            error: rawError,
        };
    }
    return {
        api,
        message,
        error: undefined,
        handlingStack,
    };
}
function formatConsoleParameters(param) {
    if (typeof param === 'string') {
        return sanitize(param);
    }
    if (isError(param)) {
        return formatErrorMessage(computeStackTrace(param));
    }
    return jsonStringify(sanitize(param), undefined, 2);
}
//# sourceMappingURL=consoleObservable.js.map
;// ./node_modules/@datadog/browser-logs/esm/domain/console/consoleCollection.js



const LogStatusForApi = {
    [ConsoleApiName.log]: StatusType.info,
    [ConsoleApiName.debug]: StatusType.debug,
    [ConsoleApiName.info]: StatusType.info,
    [ConsoleApiName.warn]: StatusType.warn,
    [ConsoleApiName.error]: StatusType.error,
};
function startConsoleCollection(configuration, lifeCycle) {
    const consoleSubscription = initConsoleObservable(configuration.forwardConsoleLogs).subscribe((log) => {
        var _a;
        const collectedData = {
            rawLogsEvent: {
                date: timeStampNow(),
                message: log.message,
                origin: ErrorSource.CONSOLE,
                error: log.error && createErrorFieldFromRawError(log.error),
                status: LogStatusForApi[log.api],
            },
            messageContext: (_a = log.error) === null || _a === void 0 ? void 0 : _a.context,
            domainContext: {
                handlingStack: log.handlingStack,
            },
        };
        lifeCycle.notify(0 /* LifeCycleEventType.RAW_LOG_COLLECTED */, collectedData);
    });
    return {
        stop: () => {
            consoleSubscription.unsubscribe();
        },
    };
}
//# sourceMappingURL=consoleCollection.js.map
;// ./node_modules/@datadog/browser-logs/esm/domain/report/reportCollection.js



function startReportCollection(configuration, lifeCycle) {
    const reportSubscription = initReportObservable(configuration, configuration.forwardReports).subscribe((rawError) => {
        let message = rawError.message;
        let error;
        const status = rawError.originalError.type === 'deprecation' ? StatusType.warn : StatusType.error;
        if (status === StatusType.error) {
            error = createErrorFieldFromRawError(rawError);
        }
        else if (rawError.stack) {
            message += ` Found in ${getFileFromStackTraceString(rawError.stack)}`;
        }
        lifeCycle.notify(0 /* LifeCycleEventType.RAW_LOG_COLLECTED */, {
            rawLogsEvent: {
                date: timeStampNow(),
                message,
                origin: ErrorSource.REPORT,
                error,
                status,
            },
        });
    });
    return {
        stop: () => {
            reportSubscription.unsubscribe();
        },
    };
}
//# sourceMappingURL=reportCollection.js.map
;// ./node_modules/@datadog/browser-core/esm/browser/xhrObservable.js






let xhrObservable;
const xhrContexts = new WeakMap();
function initXhrObservable(configuration) {
    if (!xhrObservable) {
        xhrObservable = createXhrObservable(configuration);
    }
    return xhrObservable;
}
function createXhrObservable(configuration) {
    return new Observable((observable) => {
        const { stop: stopInstrumentingStart } = instrumentMethod(XMLHttpRequest.prototype, 'open', openXhr);
        const { stop: stopInstrumentingSend } = instrumentMethod(XMLHttpRequest.prototype, 'send', (call) => {
            sendXhr(call, configuration, observable);
        }, { computeHandlingStack: true });
        const { stop: stopInstrumentingAbort } = instrumentMethod(XMLHttpRequest.prototype, 'abort', abortXhr);
        return () => {
            stopInstrumentingStart();
            stopInstrumentingSend();
            stopInstrumentingAbort();
        };
    });
}
function openXhr({ target: xhr, parameters: [method, url] }) {
    xhrContexts.set(xhr, {
        state: 'open',
        method: String(method).toUpperCase(),
        url: normalizeUrl(String(url)),
    });
}
function sendXhr({ target: xhr, handlingStack }, configuration, observable) {
    const context = xhrContexts.get(xhr);
    if (!context) {
        return;
    }
    const startContext = context;
    startContext.state = 'start';
    startContext.startClocks = clocksNow();
    startContext.isAborted = false;
    startContext.xhr = xhr;
    startContext.handlingStack = handlingStack;
    let hasBeenReported = false;
    const { stop: stopInstrumentingOnReadyStateChange } = instrumentMethod(xhr, 'onreadystatechange', () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // Try to report the XHR as soon as possible, because the XHR may be mutated by the
            // application during a future event. For example, Angular is calling .abort() on
            // completed requests during an onreadystatechange event, so the status becomes '0'
            // before the request is collected.
            onEnd();
        }
    });
    const onEnd = () => {
        unsubscribeLoadEndListener();
        stopInstrumentingOnReadyStateChange();
        if (hasBeenReported) {
            return;
        }
        hasBeenReported = true;
        const completeContext = context;
        completeContext.state = 'complete';
        completeContext.duration = elapsed(startContext.startClocks.timeStamp, timeStampNow());
        completeContext.status = xhr.status;
        observable.notify(shallowClone(completeContext));
    };
    const { stop: unsubscribeLoadEndListener } = addEventListener(configuration, xhr, 'loadend', onEnd);
    observable.notify(startContext);
}
function abortXhr({ target: xhr }) {
    const context = xhrContexts.get(xhr);
    if (context) {
        context.isAborted = true;
    }
}
//# sourceMappingURL=xhrObservable.js.map
;// ./node_modules/@datadog/browser-core/esm/domain/resourceUtils.js
const ResourceType = {
    DOCUMENT: 'document',
    XHR: 'xhr',
    BEACON: 'beacon',
    FETCH: 'fetch',
    CSS: 'css',
    JS: 'js',
    IMAGE: 'image',
    FONT: 'font',
    MEDIA: 'media',
    OTHER: 'other',
};
const RequestType = {
    FETCH: ResourceType.FETCH,
    XHR: ResourceType.XHR,
};
//# sourceMappingURL=resourceUtils.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/readBytesFromStream.js


/**
 * Read bytes from a ReadableStream until at least `limit` bytes have been read (or until the end of
 * the stream). The callback is invoked with the at most `limit` bytes, and indicates that the limit
 * has been exceeded if more bytes were available.
 */
function readBytesFromStream(stream, callback, options) {
    const reader = stream.getReader();
    const chunks = [];
    let readBytesCount = 0;
    readMore();
    function readMore() {
        reader.read().then(monitor((result) => {
            if (result.done) {
                onDone();
                return;
            }
            if (options.collectStreamBody) {
                chunks.push(result.value);
            }
            readBytesCount += result.value.length;
            if (readBytesCount > options.bytesLimit) {
                onDone();
            }
            else {
                readMore();
            }
        }), monitor((error) => callback(error)));
    }
    function onDone() {
        reader.cancel().catch(
        // we don't care if cancel fails, but we still need to catch the error to avoid reporting it
        // as an unhandled rejection
        functionUtils_noop);
        let bytes;
        let limitExceeded;
        if (options.collectStreamBody) {
            let completeBuffer;
            if (chunks.length === 1) {
                // optimization: if the response is small enough to fit in a single buffer (provided by the browser), just
                // use it directly.
                completeBuffer = chunks[0];
            }
            else {
                // else, we need to copy buffers into a larger buffer to concatenate them.
                completeBuffer = new Uint8Array(readBytesCount);
                let offset = 0;
                chunks.forEach((chunk) => {
                    completeBuffer.set(chunk, offset);
                    offset += chunk.length;
                });
            }
            bytes = completeBuffer.slice(0, options.bytesLimit);
            limitExceeded = completeBuffer.length > options.bytesLimit;
        }
        callback(undefined, bytes, limitExceeded);
    }
}
//# sourceMappingURL=readBytesFromStream.js.map
;// ./node_modules/@datadog/browser-logs/esm/domain/networkError/networkErrorCollection.js


function startNetworkErrorCollection(configuration, lifeCycle) {
    if (!configuration.forwardErrorsToLogs) {
        return { stop: functionUtils_noop };
    }
    const xhrSubscription = initXhrObservable(configuration).subscribe((context) => {
        if (context.state === 'complete') {
            handleResponse(RequestType.XHR, context);
        }
    });
    const fetchSubscription = initFetchObservable().subscribe((context) => {
        if (context.state === 'resolve') {
            handleResponse(RequestType.FETCH, context);
        }
    });
    function handleResponse(type, request) {
        if (!isIntakeUrl(request.url) && (isRejected(request) || isServerError(request.status))) {
            if ('xhr' in request) {
                computeXhrResponseData(request.xhr, configuration, onResponseDataAvailable);
            }
            else if (request.response) {
                computeFetchResponseText(request.response, configuration, onResponseDataAvailable);
            }
            else if (request.error) {
                computeFetchErrorText(request.error, configuration, onResponseDataAvailable);
            }
        }
        function onResponseDataAvailable(responseData) {
            const domainContext = {
                isAborted: request.isAborted,
                handlingStack: request.handlingStack,
            };
            lifeCycle.notify(0 /* LifeCycleEventType.RAW_LOG_COLLECTED */, {
                rawLogsEvent: {
                    message: `${format(type)} error ${request.method} ${request.url}`,
                    date: request.startClocks.timeStamp,
                    error: {
                        stack: responseData || 'Failed to load',
                        // We don't know if the error was handled or not, so we set it to undefined
                        handling: undefined,
                    },
                    http: {
                        method: request.method, // Cast resource method because of case mismatch cf issue RUMF-1152
                        status_code: request.status,
                        url: request.url,
                    },
                    status: StatusType.error,
                    origin: ErrorSource.NETWORK,
                },
                domainContext,
            });
        }
    }
    return {
        stop: () => {
            xhrSubscription.unsubscribe();
            fetchSubscription.unsubscribe();
        },
    };
}
// TODO: ideally, computeXhrResponseData should always call the callback with a string instead of
// `unknown`. But to keep backward compatibility, in the case of XHR with a `responseType` different
// than "text", the response data should be whatever `xhr.response` is. This is a bit confusing as
// Logs event 'stack' is expected to be a string. This should be changed in a future major version
// as it could be a breaking change.
function computeXhrResponseData(xhr, configuration, callback) {
    if (typeof xhr.response === 'string') {
        callback(truncateResponseText(xhr.response, configuration));
    }
    else {
        callback(xhr.response);
    }
}
function computeFetchErrorText(error, configuration, callback) {
    callback(truncateResponseText(toStackTraceString(computeStackTrace(error)), configuration));
}
function computeFetchResponseText(response, configuration, callback) {
    const clonedResponse = tryToClone(response);
    if (!clonedResponse || !clonedResponse.body) {
        // if the clone failed or if the body is null, let's not try to read it.
        callback();
    }
    else if (!window.TextDecoder) {
        // If the browser doesn't support TextDecoder, let's read the whole response then truncate it.
        //
        // This should only be the case on early versions of Edge (before they migrated to Chromium).
        // Even if it could be possible to implement a workaround for the missing TextDecoder API (using
        // a Blob and FileReader), we found another issue preventing us from reading only the first
        // bytes from the response: contrary to other browsers, when reading from the cloned response,
        // if the original response gets canceled, the cloned response is also canceled and we can't
        // know about it.  In the following illustration, the promise returned by `reader.read()` may
        // never be fulfilled:
        //
        // fetch('/').then((response) => {
        //   const reader = response.clone().body.getReader()
        //   readMore()
        //   function readMore() {
        //     reader.read().then(
        //       (result) => {
        //         if (result.done) {
        //           console.log('done')
        //         } else {
        //           readMore()
        //         }
        //       },
        //       () => console.log('error')
        //     )
        //   }
        //   response.body.getReader().cancel()
        // })
        clonedResponse.text().then(monitor((text) => callback(truncateResponseText(text, configuration))), monitor((error) => callback(`Unable to retrieve response: ${error}`)));
    }
    else {
        truncateResponseStream(clonedResponse.body, configuration.requestErrorResponseLengthLimit, (error, responseText) => {
            if (error) {
                callback(`Unable to retrieve response: ${error}`);
            }
            else {
                callback(responseText);
            }
        });
    }
}
function isRejected(request) {
    return request.status === 0 && request.responseType !== 'opaque';
}
function truncateResponseText(responseText, configuration) {
    if (responseText.length > configuration.requestErrorResponseLengthLimit) {
        return `${responseText.substring(0, configuration.requestErrorResponseLengthLimit)}...`;
    }
    return responseText;
}
function format(type) {
    if (RequestType.XHR === type) {
        return 'XHR';
    }
    return 'Fetch';
}
function truncateResponseStream(stream, bytesLimit, callback) {
    readBytesFromStream(stream, (error, bytes, limitExceeded) => {
        if (error) {
            callback(error);
        }
        else {
            let responseText = new TextDecoder().decode(bytes);
            if (limitExceeded) {
                responseText += '...';
            }
            callback(undefined, responseText);
        }
    }, {
        bytesLimit,
        collectStreamBody: true,
    });
}
//# sourceMappingURL=networkErrorCollection.js.map
;// ./node_modules/@datadog/browser-logs/esm/domain/runtimeError/runtimeErrorCollection.js



function startRuntimeErrorCollection(configuration, lifeCycle, bufferedDataObservable) {
    if (!configuration.forwardErrorsToLogs) {
        return { stop: functionUtils_noop };
    }
    const rawErrorSubscription = bufferedDataObservable.subscribe((bufferedData) => {
        if (bufferedData.type === 0 /* BufferedDataType.RUNTIME_ERROR */) {
            const error = bufferedData.error;
            lifeCycle.notify(0 /* LifeCycleEventType.RAW_LOG_COLLECTED */, {
                rawLogsEvent: {
                    message: error.message,
                    date: error.startClocks.timeStamp,
                    error: createErrorFieldFromRawError(error),
                    origin: ErrorSource.SOURCE,
                    status: StatusType.error,
                },
                messageContext: error.context,
            });
        }
    });
    return {
        stop: () => {
            rawErrorSubscription.unsubscribe();
        },
    };
}
//# sourceMappingURL=runtimeErrorCollection.js.map
;// ./node_modules/@datadog/browser-core/esm/tools/abstractLifeCycle.js
// eslint-disable-next-line no-restricted-syntax
class AbstractLifeCycle {
    constructor() {
        this.callbacks = {};
    }
    notify(eventType, data) {
        const eventCallbacks = this.callbacks[eventType];
        if (eventCallbacks) {
            eventCallbacks.forEach((callback) => callback(data));
        }
    }
    subscribe(eventType, callback) {
        if (!this.callbacks[eventType]) {
            this.callbacks[eventType] = [];
        }
        this.callbacks[eventType].push(callback);
        return {
            unsubscribe: () => {
                this.callbacks[eventType] = this.callbacks[eventType].filter((other) => callback !== other);
            },
        };
    }
}
//# sourceMappingURL=abstractLifeCycle.js.map
;// ./node_modules/@datadog/browser-logs/esm/domain/lifeCycle.js

const LifeCycle = (AbstractLifeCycle);
//# sourceMappingURL=lifeCycle.js.map
;// ./node_modules/@datadog/browser-logs/esm/domain/logger/loggerCollection.js



function startLoggerCollection(lifeCycle) {
    function handleLog(logsMessage, logger, handlingStack, savedCommonContext, savedDate) {
        const messageContext = combine(logger.getContext(), logsMessage.context);
        if (isAuthorized(logsMessage.status, HandlerType.console, logger)) {
            displayInConsole(logsMessage, messageContext);
        }
        if (isAuthorized(logsMessage.status, HandlerType.http, logger)) {
            const rawLogEventData = {
                rawLogsEvent: {
                    date: savedDate || timeStampNow(),
                    message: logsMessage.message,
                    status: logsMessage.status,
                    origin: ErrorSource.LOGGER,
                },
                messageContext,
                savedCommonContext,
                ddtags: logger.getTags(),
            };
            if (handlingStack) {
                rawLogEventData.domainContext = { handlingStack };
            }
            lifeCycle.notify(0 /* LifeCycleEventType.RAW_LOG_COLLECTED */, rawLogEventData);
        }
    }
    return {
        handleLog,
    };
}
const loggerToConsoleApiName = {
    [StatusType.ok]: ConsoleApiName.debug,
    [StatusType.debug]: ConsoleApiName.debug,
    [StatusType.info]: ConsoleApiName.info,
    [StatusType.notice]: ConsoleApiName.info,
    [StatusType.warn]: ConsoleApiName.warn,
    [StatusType.error]: ConsoleApiName.error,
    [StatusType.critical]: ConsoleApiName.error,
    [StatusType.alert]: ConsoleApiName.error,
    [StatusType.emerg]: ConsoleApiName.error,
};
function displayInConsole({ status, message }, messageContext) {
    originalConsoleMethods[loggerToConsoleApiName[status]].call(globalConsole, message, messageContext);
}
//# sourceMappingURL=loggerCollection.js.map
;// ./node_modules/@datadog/browser-logs/esm/transport/startLogsBatch.js

function startLogsBatch(configuration, lifeCycle, reportError, pageMayExitObservable, session) {
    const endpoints = [configuration.logsEndpointBuilder];
    if (configuration.replica) {
        endpoints.push(configuration.replica.logsEndpointBuilder);
    }
    const batch = createBatch({
        encoder: createIdentityEncoder(),
        request: createHttpRequest(endpoints, configuration.batchBytesLimit, reportError),
        flushController: createFlushController({
            messagesLimit: configuration.batchMessagesLimit,
            bytesLimit: configuration.batchBytesLimit,
            durationLimit: configuration.flushTimeout,
            pageMayExitObservable,
            sessionExpireObservable: session.expireObservable,
        }),
        messageBytesLimit: configuration.messageBytesLimit,
    });
    lifeCycle.subscribe(1 /* LifeCycleEventType.LOG_COLLECTED */, (serverLogsEvent) => {
        batch.add(serverLogsEvent);
    });
    return batch;
}
//# sourceMappingURL=startLogsBatch.js.map
;// ./node_modules/@datadog/browser-logs/esm/transport/startLogsBridge.js

function startLogsBridge(lifeCycle) {
    const bridge = getEventBridge();
    lifeCycle.subscribe(1 /* LifeCycleEventType.LOG_COLLECTED */, (serverLogsEvent) => {
        bridge.send('log', serverLogsEvent);
    });
}
//# sourceMappingURL=startLogsBridge.js.map
;// ./node_modules/@datadog/browser-logs/esm/domain/contexts/internalContext.js
function startInternalContext(sessionManager) {
    return {
        get: (startTime) => {
            const trackedSession = sessionManager.findTrackedSession(startTime);
            if (trackedSession) {
                return {
                    session_id: trackedSession.id,
                };
            }
        },
    };
}
//# sourceMappingURL=internalContext.js.map
;// ./node_modules/@datadog/browser-logs/esm/domain/reportError.js


function startReportError(lifeCycle) {
    return (error) => {
        lifeCycle.notify(0 /* LifeCycleEventType.RAW_LOG_COLLECTED */, {
            rawLogsEvent: {
                message: error.message,
                date: error.startClocks.timeStamp,
                origin: ErrorSource.AGENT,
                status: StatusType.error,
            },
        });
        addTelemetryDebug('Error reported to customer', { 'error.message': error.message });
    };
}
//# sourceMappingURL=reportError.js.map
;// ./node_modules/@datadog/browser-logs/esm/domain/hooks.js

const createHooks = (abstractHooks);
//# sourceMappingURL=hooks.js.map
;// ./node_modules/@datadog/browser-logs/esm/domain/contexts/rumInternalContext.js

function startRUMInternalContext(hooks) {
    const browserWindow = window;
    let logsSentBeforeRumInjectionTelemetryAdded = false;
    hooks.register(0 /* HookNames.Assemble */, ({ startTime }) => {
        const internalContext = getRUMInternalContext(startTime);
        if (!internalContext) {
            return SKIPPED;
        }
        return internalContext;
    });
    hooks.register(1 /* HookNames.AssembleTelemetry */, ({ startTime }) => {
        var _a, _b;
        const internalContext = getRUMInternalContext(startTime);
        if (!internalContext) {
            return SKIPPED;
        }
        return {
            application: { id: internalContext.application_id },
            view: { id: (_a = internalContext.view) === null || _a === void 0 ? void 0 : _a.id },
            action: { id: (_b = internalContext.user_action) === null || _b === void 0 ? void 0 : _b.id },
        };
    });
    function getRUMInternalContext(startTime) {
        const willSyntheticsInjectRumResult = willSyntheticsInjectRum();
        const rumSource = willSyntheticsInjectRumResult ? browserWindow.DD_RUM_SYNTHETICS : browserWindow.DD_RUM;
        const rumContext = getInternalContextFromRumGlobal(startTime, rumSource);
        if (rumContext) {
            return rumContext;
        }
        if (willSyntheticsInjectRumResult && !logsSentBeforeRumInjectionTelemetryAdded) {
            logsSentBeforeRumInjectionTelemetryAdded = true;
            addTelemetryDebug('Logs sent before RUM is injected by the synthetics worker', {
                testId: getSyntheticsTestId(),
                resultId: getSyntheticsResultId(),
            });
        }
    }
    function getInternalContextFromRumGlobal(startTime, rumGlobal) {
        if (rumGlobal && rumGlobal.getInternalContext) {
            return rumGlobal.getInternalContext(startTime);
        }
    }
    return {
        stop: () => {
            logsSentBeforeRumInjectionTelemetryAdded = false;
        },
    };
}
//# sourceMappingURL=rumInternalContext.js.map
;// ./node_modules/@datadog/browser-logs/esm/domain/contexts/sessionContext.js

function startSessionContext(hooks, configuration, sessionManager) {
    hooks.register(0 /* HookNames.Assemble */, ({ startTime }) => {
        const session = sessionManager.findTrackedSession(startTime);
        const isSessionTracked = sessionManager.findTrackedSession(startTime, { returnInactive: true });
        if (!isSessionTracked) {
            return DISCARDED;
        }
        return {
            service: configuration.service,
            session_id: session ? session.id : undefined,
            session: session ? { id: session.id } : undefined,
        };
    });
    hooks.register(1 /* HookNames.AssembleTelemetry */, ({ startTime }) => {
        const session = sessionManager.findTrackedSession(startTime);
        if (!session || !session.id) {
            return SKIPPED;
        }
        return {
            session: { id: session.id },
        };
    });
}
//# sourceMappingURL=sessionContext.js.map
;// ./node_modules/@datadog/browser-logs/esm/domain/contexts/trackingConsentContext.js

function startTrackingConsentContext(hooks, trackingConsentState) {
    function isConsented() {
        const wasConsented = trackingConsentState.isGranted();
        if (!wasConsented) {
            return DISCARDED;
        }
        return SKIPPED;
    }
    hooks.register(0 /* HookNames.Assemble */, isConsented);
    hooks.register(1 /* HookNames.AssembleTelemetry */, isConsented);
}
//# sourceMappingURL=trackingConsentContext.js.map
;// ./node_modules/@datadog/browser-logs/esm/boot/startLogs.js

















const LOGS_STORAGE_KEY = 'logs';
function startLogs(configuration, getCommonContext, 
// `startLogs` and its subcomponents assume tracking consent is granted initially and starts
// collecting logs unconditionally. As such, `startLogs` should be called with a
// `trackingConsentState` set to "granted".
trackingConsentState, bufferedDataObservable) {
    const lifeCycle = new LifeCycle();
    const hooks = createHooks();
    const cleanupTasks = [];
    lifeCycle.subscribe(1 /* LifeCycleEventType.LOG_COLLECTED */, (log) => sendToExtension('logs', log));
    const reportError = startReportError(lifeCycle);
    const pageMayExitObservable = createPageMayExitObservable(configuration);
    const telemetry = startTelemetry("browser-logs-sdk" /* TelemetryService.LOGS */, configuration, hooks, reportError, pageMayExitObservable, createIdentityEncoder);
    cleanupTasks.push(telemetry.stop);
    const session = configuration.sessionStoreStrategyType && !canUseEventBridge() && !willSyntheticsInjectRum()
        ? startLogsSessionManager(configuration, trackingConsentState)
        : startLogsSessionManagerStub(configuration);
    startTrackingConsentContext(hooks, trackingConsentState);
    // Start user and account context first to allow overrides from global context
    startSessionContext(hooks, configuration, session);
    const accountContext = startAccountContext(hooks, configuration, LOGS_STORAGE_KEY);
    const userContext = startUserContext(hooks, configuration, session, LOGS_STORAGE_KEY);
    const globalContext = startGlobalContext(hooks, configuration, LOGS_STORAGE_KEY, false);
    const { stop } = startRUMInternalContext(hooks);
    startNetworkErrorCollection(configuration, lifeCycle);
    startRuntimeErrorCollection(configuration, lifeCycle, bufferedDataObservable);
    bufferedDataObservable.unbuffer();
    startConsoleCollection(configuration, lifeCycle);
    startReportCollection(configuration, lifeCycle);
    const { handleLog } = startLoggerCollection(lifeCycle);
    startLogsAssembly(configuration, lifeCycle, hooks, getCommonContext, reportError);
    if (!canUseEventBridge()) {
        const { stop: stopLogsBatch } = startLogsBatch(configuration, lifeCycle, reportError, pageMayExitObservable, session);
        cleanupTasks.push(() => stopLogsBatch());
    }
    else {
        startLogsBridge(lifeCycle);
    }
    const internalContext = startInternalContext(session);
    return {
        handleLog,
        getInternalContext: internalContext.get,
        accountContext,
        globalContext,
        userContext,
        stop: () => {
            cleanupTasks.forEach((task) => task());
            stop();
        },
    };
}
//# sourceMappingURL=startLogs.js.map
;// ./node_modules/@datadog/browser-logs/esm/entries/main.js
/**
 *
 * Datadog Browser Logs SDK for collecting and forwarding browser logs to Datadog.
 * Provides comprehensive logging capabilities with automatic error tracking and custom log collection.
 *
 * @packageDocumentation
 * @see [Browser Log Collection](https://docs.datadoghq.com/logs/log_collection/javascript/)
 */





/**
 * The global Logs instance. Use this to call Logs methods.
 *
 * @see [Browser Log Collection](https://docs.datadoghq.com/logs/log_collection/javascript/)
 */
const datadogLogs = makeLogsPublicApi(startLogs);
defineGlobal(getGlobalObject(), 'DD_LOGS', datadogLogs);
//# sourceMappingURL=main.js.map

/***/ })

}]);
//# sourceMappingURL=3262-a389002057408f77.js.map