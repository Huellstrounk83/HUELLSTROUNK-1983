(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8039],{

/***/ 4297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  p: () => (/* reexport */ TooltipForButton)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-tooltip/dist/index.mjs
var dist = __webpack_require__(47520);
// EXTERNAL MODULE: ./src/components/ui/TooltipForButton/TooltipForButton.module.scss
var TooltipForButton_module = __webpack_require__(94438);
var TooltipForButton_module_default = /*#__PURE__*/__webpack_require__.n(TooltipForButton_module);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(85203);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// ./src/components/ui/TooltipForButton/TooltipForButton.tsx
/* __next_internal_client_entry_do_not_use__ TooltipForButton auto */ 




const TooltipForButton = (param)=>{
    let { tooltipContent, tooltipPosition, tooltipAlign = 'center', className, children } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Provider */.Kq, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* Root */.bL, {
            delayDuration: 0,
            disableHoverableContent: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Trigger */.l9, {
                    asChild: true,
                    children: children
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Portal */.ZL, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* Content */.UC, {
                        side: tooltipPosition,
                        align: tooltipAlign,
                        sideOffset: 6,
                        className: classnames_default()((TooltipForButton_module_default()).tooltipContent, className),
                        children: [
                            tooltipContent,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Arrow */.i3, {
                                className: (TooltipForButton_module_default()).tooltipArrow
                            })
                        ]
                    })
                })
            ]
        })
    });
};

;// ./src/components/ui/TooltipForButton/index.ts



/***/ }),

/***/ 17045:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "errorOnce", ({
    enumerable: true,
    get: function() {
        return errorOnce;
    }
}));
let errorOnce = (_)=>{};
if (false) {} //# sourceMappingURL=error-once.js.map


/***/ }),

/***/ 33078:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map


/***/ }),

/***/ 45275:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"error_root__9d1hX","nj-animate-horizontal-appearance-ltr-enter":"error_nj-animate-horizontal-appearance-ltr-enter__NxmMI","nj-animate-horizontal-appearance-ltr-enter-active":"error_nj-animate-horizontal-appearance-ltr-enter-active__RF_FF","nj-animate-horizontal-appearance-ltr-exit":"error_nj-animate-horizontal-appearance-ltr-exit__cRDuu","nj-animate-horizontal-appearance-ltr-exit-active":"error_nj-animate-horizontal-appearance-ltr-exit-active__ef8fl","nj-animate-left-panel-width-reduce-enter":"error_nj-animate-left-panel-width-reduce-enter__0RbAK","nj-animate-left-panel-width-reduce-enter-active":"error_nj-animate-left-panel-width-reduce-enter-active__uCSCf","nj-animate-left-panel-width-reduce-exit":"error_nj-animate-left-panel-width-reduce-exit__NVed8","nj-animate-left-panel-width-reduce-exit-active":"error_nj-animate-left-panel-width-reduce-exit-active__AlGGB","nj-animate-vertical-appearance-appear":"error_nj-animate-vertical-appearance-appear__ZOH7l","nj-animate-vertical-appearance-appear-active":"error_nj-animate-vertical-appearance-appear-active__hJc_c","nj-animate-vertical-appearance-enter":"error_nj-animate-vertical-appearance-enter__327Tf","nj-animate-vertical-appearance-enter-active":"error_nj-animate-vertical-appearance-enter-active__FEWoR","nj-animate-vertical-appearance-exit":"error_nj-animate-vertical-appearance-exit__X3Lv2","nj-animate-vertical-appearance-exit-active":"error_nj-animate-vertical-appearance-exit-active__2t_1D","infinite-spinner":"error_infinite-spinner__NH7cT","fadeIn":"error_fadeIn__wqTge","blinking":"error_blinking__FZ7Bu","movingRight":"error_movingRight__AoJhU"};

/***/ }),

/***/ 47670:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __webpack_require__(88604);
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(33078));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if (false) {}
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map


/***/ }),

/***/ 50960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _components_ui_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62717);
/* harmony import */ var _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73262);
/* harmony import */ var _error_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45275);
/* harmony import */ var _error_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_error_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Error(param) {
    let { error, reset } = param;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (error) {
            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_3__/* .datadogLogs */ .yf.logger.error(error.message, {
                error_type: 'page_error'
            }, error);
        }
    }, [
        error
    ]);
    const handleReset = ()=>{
        reset();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_error_module_scss__WEBPACK_IMPORTED_MODULE_4___default().root),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                children: "Something went wrong!"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$, {
                onClick: handleReset,
                children: "Try again"
            })
        ]
    });
}


/***/ }),

/***/ 51447:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 50960));


/***/ }),

/***/ 52619:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __webpack_require__(88604);
const _jsxruntime = __webpack_require__(95155);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(12115));
const _formaturl = __webpack_require__(47670);
const _approutercontextsharedruntime = __webpack_require__(46752);
const _usemergedref = __webpack_require__(83011);
const _utils = __webpack_require__(62296);
const _addbasepath = __webpack_require__(96058);
const _warnonce = __webpack_require__(94781);
const _links = __webpack_require__(63499);
const _islocalurl = __webpack_require__(58607);
const _approuterinstance = __webpack_require__(11807);
const _erroronce = __webpack_require__(17045);
const _segmentcache = __webpack_require__(66048);
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
        // ignore click for browser’s default behavior
        return;
    }
    if (!(0, _islocalurl.isLocalURL)(href)) {
        if (replace) {
            // browser default behavior does not replace the history state
            // so we need to do it manually
            e.preventDefault();
            location.replace(href);
        }
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    if (onNavigate) {
        let isDefaultPrevented = false;
        onNavigate({
            preventDefault: ()=>{
                isDefaultPrevented = true;
            }
        });
        if (isDefaultPrevented) {
            return;
        }
    }
    _react.default.startTransition(()=>{
        (0, _approuterinstance.dispatchNavigateAction)(as || href, replace ? 'replace' : 'push', scroll != null ? scroll : true, linkInstanceRef.current);
    });
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _segmentcache.FetchStrategy.PPR;
    if (false) {}
    if (false) {}
    const { href, as } = _react.default.useMemo(()=>{
        const resolvedHref = formatStringOrUrl(hrefProp);
        return {
            href: resolvedHref,
            as: asProp ? formatStringOrUrl(asProp) : resolvedHref
        };
    }, [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) {}
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback((element)=>{
        if (router !== null) {
            linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
        }
        return ()=>{
            if (linkInstanceRef.current) {
                (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                linkInstanceRef.current = null;
            }
            (0, _links.unmountPrefetchableInstance)(element);
        };
    }, [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled || "production" === 'development') {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        },
        onTouchStart:  false ? 0 : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if (false) {}
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if (false) {} else {
        return prefetchProp === null || prefetchProp === 'auto' ? _segmentcache.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _segmentcache.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 58607:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isLocalURL", ({
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
}));
const _utils = __webpack_require__(62296);
const _hasbasepath = __webpack_require__(92929);
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map


/***/ }),

/***/ 62296:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ':' + port : '');
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
}
async function loadGetInitialProps(App, ctx) {
    if (false) { var _App_prototype; }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if (false) {}
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 62717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52619);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85203);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94582);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_TooltipForButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4297);
/* __next_internal_client_entry_do_not_use__ Button auto */ 






const Button = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((param, ref)=>{
    let { as = 'button', href, size = 'medium', shape = 'regular', color = 'primary', className, fullWidth = false, fullWidthWithLeftAlign = false, tooltipContent, tooltipPosition, tooltipAlign, tooltipClassName, children, ...props } = param;
    const colorWithBorder = color === 'primary-outline' || color === 'secondary-outline' || color === 'tertiary-outline' || color === 'tertiary-secondary-outline';
    const commonClassNames = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().root), {
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().primary)]: color === 'primary',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().primaryOutline)]: color === 'primary-outline',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().secondary)]: color === 'secondary',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().secondaryOutline)]: color === 'secondary-outline',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().transparent)]: color === 'transparent',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link)]: color === 'link',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tertiary)]: color === 'tertiary',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tertiaryOutline)]: color === 'tertiary-outline',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tertiarySecondaryOutline)]: color === 'tertiary-secondary-outline',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().highlight)]: color === 'highlight',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().error)]: color === 'error',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().fullWidth)]: fullWidth,
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().fullWidthWithLeftAlign)]: fullWidthWithLeftAlign,
        // next classes are combinations of main properties. To make all buttons with the same sizes and available to rewrite in a simple way
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().roundSmall)]: shape === 'round' && size === 'small',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().regularSmall)]: shape === 'regular' && size === 'small',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().roundMedium)]: shape === 'round' && size === 'medium',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().regularMedium)]: shape === 'regular' && size === 'medium',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().roundSmallWithBorder)]: colorWithBorder && shape === 'round' && size === 'small',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().regularSmallWithBorder)]: colorWithBorder && shape === 'regular' && size === 'small',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().roundMediumWithBorder)]: colorWithBorder && shape === 'round' && size === 'medium',
        [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().regularMediumWithBorder)]: colorWithBorder && shape === 'regular' && size === 'medium'
    }, className);
    const element = (()=>{
        if (as === 'link' && href) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: href,
                className: commonClassNames,
                ref: ref,
                ...props,
                children: children
            });
        }
        if (as === 'a' && href) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                href: href,
                className: commonClassNames,
                ref: ref,
                ...props,
                children: children
            });
        }
        const buttonProps = props;
        var _buttonProps_type;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
            ref: ref,
            className: commonClassNames,
            ...buttonProps,
            type: (_buttonProps_type = buttonProps.type) !== null && _buttonProps_type !== void 0 ? _buttonProps_type : 'button',
            children: children
        });
    })();
    if (!tooltipContent) {
        return element;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_TooltipForButton__WEBPACK_IMPORTED_MODULE_5__/* .TooltipForButton */ .p, {
        tooltipContent: tooltipContent,
        tooltipPosition: tooltipPosition,
        tooltipAlign: tooltipAlign,
        className: tooltipClassName,
        children: element
    });
});
Button.displayName = 'Button';


/***/ }),

/***/ 94438:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"tooltipContent":"TooltipForButton_tooltipContent__zycPm","nj-animate-horizontal-appearance-ltr-enter":"TooltipForButton_nj-animate-horizontal-appearance-ltr-enter__rEPLO","nj-animate-horizontal-appearance-ltr-enter-active":"TooltipForButton_nj-animate-horizontal-appearance-ltr-enter-active__Zkey5","nj-animate-horizontal-appearance-ltr-exit":"TooltipForButton_nj-animate-horizontal-appearance-ltr-exit__U4dlj","nj-animate-horizontal-appearance-ltr-exit-active":"TooltipForButton_nj-animate-horizontal-appearance-ltr-exit-active__uj4l9","nj-animate-left-panel-width-reduce-enter":"TooltipForButton_nj-animate-left-panel-width-reduce-enter__tbU12","nj-animate-left-panel-width-reduce-enter-active":"TooltipForButton_nj-animate-left-panel-width-reduce-enter-active__xwgMO","nj-animate-left-panel-width-reduce-exit":"TooltipForButton_nj-animate-left-panel-width-reduce-exit__g6Ves","nj-animate-left-panel-width-reduce-exit-active":"TooltipForButton_nj-animate-left-panel-width-reduce-exit-active__DxVxt","nj-animate-vertical-appearance-appear":"TooltipForButton_nj-animate-vertical-appearance-appear__f9149","nj-animate-vertical-appearance-appear-active":"TooltipForButton_nj-animate-vertical-appearance-appear-active__02v1A","nj-animate-vertical-appearance-enter":"TooltipForButton_nj-animate-vertical-appearance-enter__yhcmz","nj-animate-vertical-appearance-enter-active":"TooltipForButton_nj-animate-vertical-appearance-enter-active__6zMY1","nj-animate-vertical-appearance-exit":"TooltipForButton_nj-animate-vertical-appearance-exit__jjJVr","nj-animate-vertical-appearance-exit-active":"TooltipForButton_nj-animate-vertical-appearance-exit-active__vNwuc","tooltipArrow":"TooltipForButton_tooltipArrow__yUVLM","infinite-spinner":"TooltipForButton_infinite-spinner__K7Tto","fadeIn":"TooltipForButton_fadeIn__jSQ7U","blinking":"TooltipForButton_blinking__udfyN","movingRight":"TooltipForButton_movingRight__ePQ24"};

/***/ }),

/***/ 94582:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"Button_root__GbzzH","nj-animate-horizontal-appearance-ltr-enter":"Button_nj-animate-horizontal-appearance-ltr-enter__k4_1z","nj-animate-horizontal-appearance-ltr-enter-active":"Button_nj-animate-horizontal-appearance-ltr-enter-active__NQSTm","nj-animate-horizontal-appearance-ltr-exit":"Button_nj-animate-horizontal-appearance-ltr-exit__VdlbF","nj-animate-horizontal-appearance-ltr-exit-active":"Button_nj-animate-horizontal-appearance-ltr-exit-active__a9mbG","nj-animate-left-panel-width-reduce-enter":"Button_nj-animate-left-panel-width-reduce-enter__lCuZJ","nj-animate-left-panel-width-reduce-enter-active":"Button_nj-animate-left-panel-width-reduce-enter-active__QRBYN","nj-animate-left-panel-width-reduce-exit":"Button_nj-animate-left-panel-width-reduce-exit__sUmnB","nj-animate-left-panel-width-reduce-exit-active":"Button_nj-animate-left-panel-width-reduce-exit-active__1hSHQ","nj-animate-vertical-appearance-appear":"Button_nj-animate-vertical-appearance-appear__NHuAv","nj-animate-vertical-appearance-appear-active":"Button_nj-animate-vertical-appearance-appear-active__7gzAi","nj-animate-vertical-appearance-enter":"Button_nj-animate-vertical-appearance-enter__iixTI","nj-animate-vertical-appearance-enter-active":"Button_nj-animate-vertical-appearance-enter-active__dB6V5","nj-animate-vertical-appearance-exit":"Button_nj-animate-vertical-appearance-exit__BKbzW","nj-animate-vertical-appearance-exit-active":"Button_nj-animate-vertical-appearance-exit-active__6xFwm","roundSmall":"Button_roundSmall__Od2zS","roundMedium":"Button_roundMedium__dXNSN","regularSmall":"Button_regularSmall__deOE4","regularMedium":"Button_regularMedium__yeDDR","roundSmallWithBorder":"Button_roundSmallWithBorder___Q51w","regularSmallWithBorder":"Button_regularSmallWithBorder__5dzEh","roundMediumWithBorder":"Button_roundMediumWithBorder__pYqHR","regularMediumWithBorder":"Button_regularMediumWithBorder__iTnq_","primary":"Button_primary__swzAa","primaryOutline":"Button_primaryOutline__SPQdj","secondary":"Button_secondary__pFIlL","secondaryOutline":"Button_secondaryOutline__5jPZ9","highlight":"Button_highlight__vLSnB","tertiary":"Button_tertiary__3PK3l","tertiaryOutline":"Button_tertiaryOutline__gImeh","tertiarySecondaryOutline":"Button_tertiarySecondaryOutline__yv6Ir","transparent":"Button_transparent__BDNtP","error":"Button_error__irxwf","link":"Button_link__bm5JO","fullWidth":"Button_fullWidth__EcevO","fullWidthWithLeftAlign":"Button_fullWidthWithLeftAlign__LNqy6","infinite-spinner":"Button_infinite-spinner__UNOrs","fadeIn":"Button_fadeIn__uTLUV","blinking":"Button_blinking__mZFIH","movingRight":"Button_movingRight__9Mij_"};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [7751,2740,2640,3262,8441,1255,7358], () => (__webpack_exec__(51447)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=error-acaa87401634be67.js.map