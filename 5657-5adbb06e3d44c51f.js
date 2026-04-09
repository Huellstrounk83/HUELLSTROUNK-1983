"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5657],{

/***/ 12977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ BALANCE_FIELD_TO_MODE_MAP),
/* harmony export */   n: () => (/* binding */ PaymentTabs)
/* harmony export */ });
var PaymentTabs = /*#__PURE__*/ function(PaymentTabs) {
    PaymentTabs["INDIVIDUAL"] = "individual";
    PaymentTabs["BUSINESS"] = "business";
    return PaymentTabs;
}({});
const BALANCE_FIELD_TO_MODE_MAP = {
    standard_queries_available: 'standard',
    complex_queries_available: 'complex',
    fast_queries_available: 'fast'
};


/***/ }),

/***/ 19482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  oV: () => (/* reexport */ general/* capitalizeEachFirstLetter */.oV),
  FC: () => (/* reexport */ cleanUserMessageContent),
  d7: () => (/* reexport */ convertTierName),
  y: () => (/* reexport */ defineIsTeamsTier),
  WN: () => (/* reexport */ downloadBlob),
  PE: () => (/* reexport */ downloadFile),
  jC: () => (/* reexport */ payments/* getCorrespondingPlanKind */.jC),
  R: () => (/* reexport */ getDeepCoderCommandByMode),
  eC: () => (/* reexport */ getDefaultModeSetByTier),
  sl: () => (/* reexport */ payments/* getDiscountedPriceLabel */.sl),
  v9: () => (/* reexport */ general/* getErrorStatus */.v9),
  Wf: () => (/* reexport */ getFileInfoFromUrl),
  i4: () => (/* reexport */ payments/* getFinalPriceLabel */.i4),
  QP: () => (/* reexport */ getHtmlContentForCopyToClipboard),
  IM: () => (/* reexport */ getInitials),
  tE: () => (/* reexport */ getLatestSubmitValue),
  So: () => (/* reexport */ general/* getNumberWithoutDigits */.So),
  Ph: () => (/* reexport */ payments/* getOriginalPriceLabel */.Ph),
  Y5: () => (/* reexport */ getPlainTextContentForCopyToClipboard),
  Pw: () => (/* reexport */ payments/* getPriceFromNanos */.Pw),
  bF: () => (/* reexport */ getSkillCommandTitle),
  i2: () => (/* reexport */ getTaskBalanceTitle),
  pX: () => (/* reexport */ payments/* getTotalRecurringPriceLabel */.pX),
  di: () => (/* reexport */ hideMdExtension),
  bb: () => (/* reexport */ payments/* isAppleOrAmpSource */.bb),
  fP: () => (/* reexport */ isChatCommand),
  V8: () => (/* reexport */ isDeepCoderCommand),
  lN: () => (/* reexport */ isDeepResearchCommand),
  iU: () => (/* reexport */ isImageGeneratorCommand),
  IZ: () => (/* reexport */ loadFilesData),
  jN: () => (/* reexport */ normalizeNewlines),
  xr: () => (/* reexport */ payments/* roundAmount */.xr),
  Nh: () => (/* reexport */ safeRepairJson),
  iy: () => (/* reexport */ analytics/* sendGTMEvent */.R),
  Hf: () => (/* reexport */ analytics/* sendPaymentGTMEvent */.Hf),
  pv: () => (/* reexport */ payments/* shouldShowReferralByQueryBalance */.pv),
  iD: () => (/* reexport */ sortThreads),
  xZ: () => (/* reexport */ stripLeadingCommands),
  tA: () => (/* reexport */ stripePromise)
});

// UNUSED EXPORTS: addUserIdToGTMDataLayer, calculateSubmenuHeight, calculateSubmenuPosition, debounce, formatFileSize, getCreditBalanceTitle, getDefaultExecutionMode, getExtension, getFileNameFromUrl, getIsImageExtension, getPriceWithCurrency, getQueryModeChangedToZero, getSubmenuElement, initializeGTM

// EXTERNAL MODULE: ./node_modules/jsonrepair/lib/esm/regular/jsonrepair.js + 2 modules
var jsonrepair = __webpack_require__(99611);
// EXTERNAL MODULE: ./node_modules/marked/lib/marked.esm.js
var marked_esm = __webpack_require__(64558);
;// ./src/utils/formatting.ts


const normalizeNewlines = (input)=>{
    return input.replace(/\\n/g, '\n');
};
const safeRepairJson = (input)=>{
    try {
        const repaired = (0,jsonrepair/* jsonrepair */.m)(input);
        return repaired;
    } catch (error) {
        return input;
    }
};
const getHtmlContentForCopyToClipboard = (content)=>{
    return "<!DOCTYPE html>\n      <html>\n        <head>\n          <style>\n            table {\n              border-collapse: collapse;\n              width: 100%;\n            }\n            th, td {\n              border: 1px solid #ccc;\n              padding: 8px;\n              text-align: left;\n            }\n          </style>\n        </head>\n        <body>".concat(content, "</body>\n      </html>");
};
const getPlainTextContentForCopyToClipboard = (markdown)=>{
    const tokens = (0,marked_esm/* lexer */.lu)(markdown);
    let result = '';
    const renderTokens = function(tokens) {
        let indent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
        for (const token of tokens){
            switch(token.type){
                case 'heading':
                    {
                        const t = token;
                        result += "\n".concat(t.depth === 1 ? '' : indent).concat(t.text, "\n");
                        break;
                    }
                case 'paragraph':
                    {
                        const t = token;
                        result += "\n".concat(indent).concat(t.text, "\n");
                        break;
                    }
                case 'list':
                    {
                        const t = token;
                        const listContent = t.items.map((item, i)=>{
                            const prefix = t.ordered ? "".concat(i + 1, ".") : '•';
                            return "".concat(indent).concat(prefix, " ").concat(item.text, "\n");
                        }).join('');
                        result += listContent;
                        break;
                    }
                case 'table':
                    {
                        const t = token;
                        const extractText = (cell)=>{
                            if (typeof cell === 'string') {
                                return cell;
                            }
                            if (typeof cell === 'object' && cell && 'text' in cell) {
                                return String(cell.text);
                            }
                            return String(cell);
                        };
                        const header = t.header.map(extractText).join('\t');
                        const rows = t.rows.map((row)=>row.map(extractText).join('\t'));
                        result += "\n".concat(header, "\n").concat(rows.join('\n'), "\n");
                        break;
                    }
                case 'code':
                    {
                        const t = token;
                        result += "\n".concat(t.text, "\n");
                        break;
                    }
                case 'hr':
                    result += '\n⸻\n';
                    break;
                case 'blockquote':
                    {
                        const t = token;
                        result += "\n> ".concat(t.text, "\n");
                        break;
                    }
                case 'space':
                    result += '\n';
                    break;
                default:
                    {
                        if ('text' in token && typeof token.text === 'string') {
                            result += "\n".concat(token.text, "\n");
                        }
                    }
            }
        }
    };
    renderTokens(tokens);
    return result.trim();
};
/**
 * Removes the `.md` file extension from the end of the given string, if present.
 *
 * @param input - The input string that may end with a `.md` extension.
 * @returns The input string without the `.md` extension, or the original string if no `.md` extension is found.
 */ const hideMdExtension = (input)=>{
    return input === null || input === void 0 ? void 0 : input.replace(/\.md$/i, '');
};
/**
 * Normalizes newline characters in a string by replacing all occurrences of '\\n' with a single space.
 *
 * @param input - The input string containing escaped newlines.
 * @returns The string with normalized newlines.
 */ const cleanUserMessageContent = (input)=>{
    return input === null || input === void 0 ? void 0 : input.replace(/\[Uploaded File: [^\]]+\]/g, '').replace(/\s+/g, ' ').trim();
};

;// ./src/utils/profile.ts
const getInitials = (name)=>{
    return (name || '').split(' ').map((part)=>part.charAt(0)).join('').toUpperCase().substring(0, 2);
};

;// ./src/utils/fileUtils.ts
const getFileNameFromUrl = (url)=>{
    const pathname = url.split('?')[0];
    const filename = pathname.split('/').pop();
    return decodeURIComponent(filename || 'unknown');
};
const getFileInfoFromUrl = async (url)=>{
    try {
        const res = await fetch(url);
        return {
            size: parseInt(res.headers.get('content-length') || '0', 10),
            name: getFileNameFromUrl(url),
            type: res.headers.get('content-type'),
            path: url,
            blob: await res.blob()
        };
    } catch (e) {
        return {
            size: 0,
            name: getFileNameFromUrl(url),
            type: 'text/plain',
            path: url,
            blob: null
        };
    }
};
const downloadFile = async (url, fileName)=>{
    var _window_ReactNativeWebView, _window;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Download failed: ".concat(res.status));
    const href = URL.createObjectURL(await res.blob());
    const a = document.createElement('a');
    a.href = href;
    const download = fileName !== null && fileName !== void 0 ? fileName : decodeURIComponent(new URL(url, location.href).pathname.split('/').pop() || 'file');
    a.download = download;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(href), 1000);
    if ((_window = window) === null || _window === void 0 ? void 0 : (_window_ReactNativeWebView = _window.ReactNativeWebView) === null || _window_ReactNativeWebView === void 0 ? void 0 : _window_ReactNativeWebView.postMessage) {
        window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'download',
            url,
            download
        }));
    }
};
const blobToDataURL = (blob)=>{
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onloadend = ()=>resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
};
const downloadBlob = (blob, fileName)=>{
    var _window_ReactNativeWebView, _window;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const download = fileName || 'file';
    a.download = download;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    if ((_window = window) === null || _window === void 0 ? void 0 : (_window_ReactNativeWebView = _window.ReactNativeWebView) === null || _window_ReactNativeWebView === void 0 ? void 0 : _window_ReactNativeWebView.postMessage) {
        blobToDataURL(blob).then((dataURL)=>{
            window.ReactNativeWebView.postMessage(JSON.stringify({
                type: 'download',
                url: dataURL,
                download
            }));
        });
        return false;
    }
    return true;
};

// EXTERNAL MODULE: ./src/utils/submenu-utils.ts
var submenu_utils = __webpack_require__(95071);
// EXTERNAL MODULE: ./src/types/index.ts + 2 modules
var types = __webpack_require__(37893);
;// ./src/utils/chatInput.ts

const COMMANDS = [
    ...Object.values(types/* DeepResearchCommands */.YR),
    ...Object.values(types/* DeepCoderCommands */._V),
    ...Object.values(types/* ImageGeneratorCommand */.ac),
    ...Object.values(types/* ChatCommand */.cz)
].sort((a, b)=>b.length - a.length);
const stripLeadingCommands = (input)=>{
    let text = input;
    let last;
    let removed = false;
    while(true){
        let hit;
        for (const cmd of COMMANDS){
            if (text.startsWith(cmd)) {
                hit = cmd;
                break;
            }
        }
        if (!hit) break;
        last = hit;
        removed = true;
        text = text.slice(hit.length).trimStart();
    }
    return [
        last,
        removed ? text : input
    ];
};
const getSkillCommandTitle = (command)=>{
    if (!command) {
        return 'General Agent';
    }
    if (Object.values(types/* DeepResearchCommands */.YR).includes(command)) {
        return 'Deep Research';
    }
    if (Object.values(types/* DeepCoderCommands */._V).includes(command)) {
        return 'Deep Coder';
    }
    if (Object.values(types/* ImageGeneratorCommand */.ac).includes(command)) {
        return 'Image Agent';
    }
    if (Object.values(types/* ChatCommand */.cz).includes(command)) {
        return 'Chat Agent';
    }
    return 'General Agent';
};
const getLatestSubmitValue = (threadId, fieldKey)=>{
    if (!threadId) return;
    const latestSubmitData = sessionStorage.getItem('latestSubmit');
    if (!latestSubmitData) return null;
    try {
        const data = JSON.parse(latestSubmitData);
        if (data.threadId !== threadId) return null;
        return data[fieldKey];
    } catch (e) {
        return null;
    }
};

// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./src/lib/api.ts
var api = __webpack_require__(90960);
// EXTERNAL MODULE: ./node_modules/@datadog/browser-logs/esm/entries/main.js + 109 modules
var main = __webpack_require__(73262);
;// ./src/utils/fileManager.ts



const getExtension = (file)=>{
    var _file_name_split_pop;
    if (!file) {
        return null;
    }
    return ".".concat((_file_name_split_pop = file.name.split('.').pop()) === null || _file_name_split_pop === void 0 ? void 0 : _file_name_split_pop.toLowerCase());
};
const getIsImageExtension = (extension)=>{
    const imageExtensions = [
        '.png',
        '.jpg',
        '.jpeg',
        '.gif',
        '.webp',
        '.svg',
        '.bmp',
        '.ico'
    ];
    return imageExtensions.includes(extension);
};
const loadFilesData = async (filesData, threadId, openFromSharePage)=>{
    const res = await Promise.all(filesData.map(async (file)=>{
        const isFolder = file.is_dir;
        const extension = isFolder ? 'folder' : getExtension(file);
        const isImageExtension = getIsImageExtension(extension);
        let imageUrl = '';
        if (isImageExtension) {
            try {
                const blob = await (0,api/* getSandboxFileContent */.nn)(threadId, file.path, openFromSharePage);
                if (blob instanceof Blob) {
                    imageUrl = URL.createObjectURL(blob);
                }
            } catch (e) {
                main/* datadogLogs */.yf.logger.warn('Error generating image preview:', e);
            }
        }
        return {
            ...file,
            id: file.path,
            filterPath: file.path,
            dateModified: file.mod_time,
            type: isFolder ? 'folder' : extension,
            parentId: constants/* MAIN_FOLDER_ID */.RbR,
            isFile: true,
            hasChild: false,
            imageUrl
        };
    }));
    return [
        constants/* MAIN_FOLDER */.rXV
    ].concat(res);
};

// EXTERNAL MODULE: ./src/gen/sn-api/models/index.ts + 31 modules
var models = __webpack_require__(61330);
;// ./src/utils/threadUtils.ts


const sortThreads = (threadsList)=>{
    return [
        ...threadsList
    ].sort((a, b)=>{
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
};
const getDefaultExecutionMode = (param)=>{
    let { currentCommand, userTier } = param;
    if (currentCommand === ChatCommand.CHAT || currentCommand === ImageGeneratorCommand.GENERATOR) {
        return AgentExecutionMode.non_applicable;
    }
    if (userTier === AccountSubscriptionTier.free || userTier === AccountSubscriptionTier.starter) {
        return AgentExecutionMode.fast;
    }
    if (isDeepResearchCommand(currentCommand) || isDeepCoderCommand(currentCommand)) {
        return AgentExecutionMode.fast;
    }
    return AgentExecutionMode.complex;
};
const getDefaultModeSetByTier = (userTier)=>{
    if (userTier === models/* AccountSubscriptionTier */.J0.free || userTier === models/* AccountSubscriptionTier */.J0.starter) {
        return {
            general: models/* AgentExecutionMode */.Ff.standard,
            deepCoder: models/* AgentExecutionMode */.Ff.fast,
            deepResearch: models/* AgentExecutionMode */.Ff.fast
        };
    }
    return {
        general: models/* AgentExecutionMode */.Ff.complex,
        deepCoder: models/* AgentExecutionMode */.Ff.fast,
        deepResearch: models/* AgentExecutionMode */.Ff.fast
    };
};
const getDeepCoderCommandByMode = (mode)=>{
    switch(mode){
        case models/* AgentExecutionMode */.Ff.complex:
            return types/* DeepCoderCommands */._V.COMPLEX_CODER;
        case models/* AgentExecutionMode */.Ff.standard:
            return types/* DeepCoderCommands */._V.STANDARD_CODER;
        case models/* AgentExecutionMode */.Ff.fast:
        default:
            return types/* DeepCoderCommands */._V.FAST_CODER;
    }
};
const isDeepCoderCommand = (cmd)=>{
    if (!cmd) {
        return false;
    }
    return Object.values(types/* DeepCoderCommands */._V).includes(cmd);
};
const isDeepResearchCommand = (cmd)=>{
    if (!cmd) {
        return false;
    }
    return Object.values(types/* DeepResearchCommands */.YR).includes(cmd);
};
const isChatCommand = (cmd)=>{
    if (!cmd) {
        return false;
    }
    return Object.values(types/* ChatCommand */.cz).includes(cmd);
};
const isImageGeneratorCommand = (cmd)=>{
    if (!cmd) {
        return false;
    }
    return Object.values(types/* ImageGeneratorCommand */.ac).includes(cmd);
};

// EXTERNAL MODULE: ./src/utils/general.ts
var general = __webpack_require__(42270);
// EXTERNAL MODULE: ./src/utils/payments.ts
var payments = __webpack_require__(86533);
;// ./src/utils/account.ts

const getTaskBalanceTitle = (value)=>{
    return value === -1 ? 'Unlimited' : value;
};
const getCreditBalanceTitle = (value)=>{
    return value !== undefined ? "Using credits (".concat(getPriceWithCurrency(value), ")") : 'Using credits';
};

// EXTERNAL MODULE: ./src/utils/analytics.ts
var analytics = __webpack_require__(50814);
// EXTERNAL MODULE: ./node_modules/@stripe/stripe-js/lib/index.mjs + 1 modules
var lib = __webpack_require__(94511);
// EXTERNAL MODULE: ./src/lib/envs.ts
var envs = __webpack_require__(68276);
// EXTERNAL MODULE: ./src/lib/config.ts
var config = __webpack_require__(46830);
;// ./src/utils/stripe.ts



// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = !config/* isEnterpriseEnv */.n7 ? (0,lib/* loadStripe */.c)(envs/* NEXT_PUBLIC_STRIPE_KEY */.iq) : Promise.resolve(null);

// EXTERNAL MODULE: ./src/gen/tasks-api/models/index.ts + 77 modules
var tasks_api_models = __webpack_require__(55360);
;// ./src/utils/user.ts


const defineIsTeamsTier = (tier_id)=>{
    return tier_id === tasks_api_models/* UserTier */.Kx.business_superninja_pro || tier_id === tasks_api_models/* UserTier */.Kx.business_superninja_ultra || tier_id === tasks_api_models/* UserTier */.Kx.business_superninja_max;
};
const convertTierName = (name)=>{
    const newValue = constants/* TIER_TITLE_MAP */.nV3[name];
    if (!!newValue) {
        return newValue;
    } else {
        if (name === 'pro' || name === 'standard' || name === 'ultra') {
            return "".concat(constants/* PROJECT_NAME */.cbb, " ").concat(name);
        }
        return name.startsWith('teams_') ? 'Business' : name.replace('business_superninja_', 'business_').replace('_', ' ');
    }
};

;// ./src/utils/index.ts















/***/ }),

/***/ 26549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A1: () => (/* binding */ CONCURRENCY_LIMIT_MESSAGE),
/* harmony export */   du: () => (/* binding */ PUBLIC_URL_WITH_DEFAULT),
/* harmony export */   vG: () => (/* binding */ SUPER_NINJA_RETURN_URL_COOKIE_NAME)
/* harmony export */ });
/* harmony import */ var _lib_envs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68276);

const PUBLIC_URL_WITH_DEFAULT = (_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_URL */ ._T || '').includes('local') ? 'https://super.betamyninja.ai' : _lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_URL */ ._T;
const SUPER_NINJA_RETURN_URL_COOKIE_NAME = '_superNinjaReturnUrl';
const CONCURRENCY_LIMIT_MESSAGE = 'Concurrency limit exceeded. Please try again later.';


/***/ }),

/***/ 37893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  oF: () => (/* reexport */ general/* AppBuilderCommand */.oF),
  ZD: () => (/* reexport */ payments/* BALANCE_FIELD_TO_MODE_MAP */.Z),
  Ey: () => (/* reexport */ BillingError),
  cz: () => (/* reexport */ general/* ChatCommand */.cz),
  Yu: () => (/* reexport */ ConcurrencyError),
  _V: () => (/* reexport */ general/* DeepCoderCommands */._V),
  YR: () => (/* reexport */ general/* DeepResearchCommands */.YR),
  q_: () => (/* reexport */ ExistingAgentRunError),
  BX: () => (/* reexport */ analytics/* GTMEvent */.B),
  ac: () => (/* reexport */ general/* ImageGeneratorCommand */.ac),
  cK: () => (/* reexport */ general/* KeyCodes */.cK),
  Uw: () => (/* reexport */ general/* LeftPanelSections */.Uw),
  nX: () => (/* reexport */ payments/* PaymentTabs */.n),
  Qf: () => (/* reexport */ SeatRole),
  G1: () => (/* reexport */ SeatStatus),
  Gh: () => (/* reexport */ general/* SelectAgentType */.Gh),
  $x: () => (/* reexport */ general/* VideoCommand */.$x)
});

// UNUSED EXPORTS: ChatMode, TeamStatus

// EXTERNAL MODULE: ./src/types/general.ts
var general = __webpack_require__(46810);
;// ./src/types/api.ts
// Custom error for billing issues
class BillingError extends Error {
    constructor(status, detail, message){
        super(message || detail.message || "Billing Error: ".concat(status));
        this.name = 'BillingError';
        this.status = status;
        this.detail = detail;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, BillingError.prototype);
    }
}
class ConcurrencyError extends Error {
    constructor(status, detail, message){
        super(message || detail.message || "Concurrency Error: ".concat(status));
        this.name = 'ConcurrencyError';
        this.status = status;
        this.detail = detail;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ConcurrencyError.prototype);
    }
}
class ExistingAgentRunError extends Error {
    constructor(status, detail, message){
        super(message || detail.message || "ExistingAgentRun Error: ".concat(status));
        this.name = 'ExistingAgentRunError';
        this.status = status;
        this.detail = detail;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ExistingAgentRunError.prototype);
    }
}

;// ./src/types/team.ts
var SeatStatus = /*#__PURE__*/ function(SeatStatus) {
    SeatStatus["ASSIGNED"] = "assigned";
    SeatStatus["UNASSIGNED"] = "unassigned";
    SeatStatus["INVITE_PENDING"] = "invite_pending";
    SeatStatus["PENDING_RELEASE"] = "pending_release";
    SeatStatus["CANCELLED"] = "cancelled";
    return SeatStatus;
}({});
var SeatRole = /*#__PURE__*/ function(SeatRole) {
    SeatRole["OWNER"] = "owner";
    SeatRole["ADMIN"] = "admin";
    SeatRole["MEMBER"] = "member";
    SeatRole["UNASSIGNED"] = "unassigned";
    return SeatRole;
}({});
var TeamStatus = /*#__PURE__*/ function(TeamStatus) {
    TeamStatus["ACTIVE"] = "active";
    TeamStatus["CANCELLED"] = "cancelled";
    TeamStatus["SUSPENDED"] = "suspended";
    return TeamStatus;
}({});

// EXTERNAL MODULE: ./src/types/payments.ts
var payments = __webpack_require__(12977);
// EXTERNAL MODULE: ./src/types/analytics.ts
var analytics = __webpack_require__(47290);
;// ./src/types/index.ts











/***/ }),

/***/ 42270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   So: () => (/* binding */ getNumberWithoutDigits),
/* harmony export */   oV: () => (/* binding */ capitalizeEachFirstLetter),
/* harmony export */   v7: () => (/* binding */ formatFileSize),
/* harmony export */   v9: () => (/* binding */ getErrorStatus)
/* harmony export */ });
function capitalizeEachFirstLetter(str) {
    if (!str) {
        return '';
    }
    return str.split(' ').map((word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
const getNumberWithoutDigits = (amount)=>{
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};
const formatFileSize = (sizeInBytes)=>{
    const units = [
        {
            name: 'bytes',
            threshold: 1
        },
        {
            name: 'KB',
            threshold: 1024
        },
        {
            name: 'MB',
            threshold: 1024 ** 2
        },
        {
            name: 'GB',
            threshold: 1024 ** 3
        },
        {
            name: 'TB',
            threshold: 1024 ** 4
        }
    ];
    const appropriateUnit = units.find((unit)=>sizeInBytes >= unit.threshold);
    const index = units.indexOf(appropriateUnit);
    if (sizeInBytes === 0) return '0 bytes';
    const size = sizeInBytes / (index > 0 ? 1024 ** index : 1);
    const formattedSize = size.toFixed(size >= 10 ? 0 : 1);
    return "".concat(formattedSize, " ").concat(appropriateUnit === null || appropriateUnit === void 0 ? void 0 : appropriateUnit.name);
};
const getErrorStatus = (error)=>{
    if (!(typeof error === 'object' && error != null && 'status' in error)) {
        return;
    }
    return error.status;
};


/***/ }),

/***/ 46810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $x: () => (/* binding */ VideoCommand),
/* harmony export */   Gh: () => (/* binding */ SelectAgentType),
/* harmony export */   Uw: () => (/* binding */ LeftPanelSections),
/* harmony export */   YR: () => (/* binding */ DeepResearchCommands),
/* harmony export */   _V: () => (/* binding */ DeepCoderCommands),
/* harmony export */   ac: () => (/* binding */ ImageGeneratorCommand),
/* harmony export */   cK: () => (/* binding */ KeyCodes),
/* harmony export */   cz: () => (/* binding */ ChatCommand),
/* harmony export */   oF: () => (/* binding */ AppBuilderCommand)
/* harmony export */ });
/* unused harmony export ChatMode */
var KeyCodes = /*#__PURE__*/ function(KeyCodes) {
    KeyCodes["SPACE"] = " ";
    KeyCodes["ENTER"] = "Enter";
    KeyCodes["DELETE"] = "Delete";
    KeyCodes["BACKSPACE"] = "Backspace";
    KeyCodes["BACKSPACESHIFT"] = "BackspaceShift";
    KeyCodes["ESCAPE"] = "Escape";
    KeyCodes["AT"] = "@";
    KeyCodes["HASH"] = "#";
    KeyCodes["SLASH"] = "/";
    KeyCodes["ARROW_DOWN"] = "ArrowDown";
    KeyCodes["ARROW_UP"] = "ArrowUp";
    return KeyCodes;
}({});
var LeftPanelSections = /*#__PURE__*/ function(LeftPanelSections) {
    LeftPanelSections["THREAD_LIST"] = "threadList";
    LeftPanelSections["USER_MENU"] = "userMenu";
    LeftPanelSections["SCHEDULED_TASKS"] = "scheduledTasks";
    return LeftPanelSections;
}({});
var DeepResearchCommands = /*#__PURE__*/ function(DeepResearchCommands) {
    DeepResearchCommands["FAST_RESEARCH"] = "/fast-deep-research";
    return DeepResearchCommands;
}({});
var DeepCoderCommands = /*#__PURE__*/ function(DeepCoderCommands) {
    DeepCoderCommands["STANDARD_CODER"] = "/deep-coder";
    DeepCoderCommands["COMPLEX_CODER"] = "/complex-deep-coder";
    DeepCoderCommands["FAST_CODER"] = "/fast-deep-coder";
    return DeepCoderCommands;
}({});
var ImageGeneratorCommand = /*#__PURE__*/ function(ImageGeneratorCommand) {
    ImageGeneratorCommand["GENERATOR"] = "/image";
    return ImageGeneratorCommand;
}({});
var ChatCommand = /*#__PURE__*/ function(ChatCommand) {
    ChatCommand["CHAT"] = "/chat";
    return ChatCommand;
}({});
var AppBuilderCommand = /*#__PURE__*/ function(AppBuilderCommand) {
    AppBuilderCommand["AGENTIC_APP_BUILDER"] = "/agentic-app-builder";
    return AppBuilderCommand;
}({});
var VideoCommand = /*#__PURE__*/ function(VideoCommand) {
    VideoCommand["VIDEO"] = "/video";
    return VideoCommand;
}({});
var ChatMode = /*#__PURE__*/ function(ChatMode) {
    ChatMode["IMAGE"] = "IMAGE";
    ChatMode["CHAT"] = "CHAT";
    ChatMode["FAST_DEEP"] = "FAST_DEEP";
    ChatMode["DEFAULT"] = "DEFAULT";
    return ChatMode;
}({});
const SelectAgentType = {
    TEXT: 'text',
    IMAGE: 'image'
};


/***/ }),

/***/ 46830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $W: () => (/* binding */ config),
/* harmony export */   NL: () => (/* binding */ isLocalEnv),
/* harmony export */   R6: () => (/* binding */ isProductionEnv),
/* harmony export */   VS: () => (/* binding */ isGammaEnv),
/* harmony export */   Ys: () => (/* binding */ shouldAllowModelSelection),
/* harmony export */   kU: () => (/* binding */ isBetaEnv),
/* harmony export */   n7: () => (/* binding */ isEnterpriseEnv)
/* harmony export */ });
/* unused harmony export EnvMode */
/* harmony import */ var _lib_envs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68276);
// Environment mode types

var EnvMode = /*#__PURE__*/ function(EnvMode) {
    EnvMode["LOCAL"] = "local";
    EnvMode["BETA"] = "beta";
    EnvMode["GAMMA"] = "gamma";
    EnvMode["ENTERPRISE"] = "enterprise";
    EnvMode["PROD"] = "prod";
    return EnvMode;
}({});
// Production tier IDs
const PROD_TIERS = {
    FREE: {
        priceId: 'price_1RILb4G6l1KZGqIrK4QLrx9i',
        name: 'Free'
    },
    TIER_2_20: {
        priceId: 'price_1RILb4G6l1KZGqIrhomjgDnO',
        name: '2h/$20'
    },
    TIER_6_50: {
        priceId: 'price_1RILb4G6l1KZGqIr5q0sybWn',
        name: '6h/$50'
    },
    TIER_12_100: {
        priceId: 'price_1RILb4G6l1KZGqIr5Y20ZLHm',
        name: '12h/$100'
    },
    TIER_25_200: {
        priceId: 'price_1RILb4G6l1KZGqIrGAD8rNjb',
        name: '25h/$200'
    },
    TIER_50_400: {
        priceId: 'price_1RILb4G6l1KZGqIruNBUMTF1',
        name: '50h/$400'
    },
    TIER_125_800: {
        priceId: 'price_1RILb3G6l1KZGqIrbJA766tN',
        name: '125h/$800'
    },
    TIER_200_1000: {
        priceId: 'price_1RILb3G6l1KZGqIrmauYPOiN',
        name: '200h/$1000'
    }
};
// Staging tier IDs
const STAGING_TIERS = {
    FREE: {
        priceId: 'price_1RIGvuG6l1KZGqIrw14abxeL',
        name: 'Free'
    },
    TIER_2_20: {
        priceId: 'price_1RIGvuG6l1KZGqIrCRu0E4Gi',
        name: '2h/$20'
    },
    TIER_6_50: {
        priceId: 'price_1RIGvuG6l1KZGqIrvjlz5p5V',
        name: '6h/$50'
    },
    TIER_12_100: {
        priceId: 'price_1RIGvuG6l1KZGqIrT6UfgblC',
        name: '12h/$100'
    },
    TIER_25_200: {
        priceId: 'price_1RIGvuG6l1KZGqIrOVLKlOMj',
        name: '25h/$200'
    },
    TIER_50_400: {
        priceId: 'price_1RIKNgG6l1KZGqIrvsat5PW7',
        name: '50h/$400'
    },
    TIER_125_800: {
        priceId: 'price_1RIKNrG6l1KZGqIrjKT0yGvI',
        name: '125h/$800'
    },
    TIER_200_1000: {
        priceId: 'price_1RIKQ2G6l1KZGqIrum9n8SI7',
        name: '200h/$1000'
    }
};
// Determine the environment mode from environment variables
const getEnvironmentMode = ()=>{
    // Get the environment mode from the environment variable, if set
    const envMode = _lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_ENV_MODE */ .Am;
    // First check if the environment variable is explicitly set
    if (envMode) {
        if (envMode === "local") {
            return "local";
        } else if (envMode === "beta") {
            return "beta";
        } else if (envMode === "gamma") {
            return "gamma";
        } else if (envMode === "enterprise") {
            return "enterprise";
        } else if (envMode === "prod") {
            return "prod";
        }
    }
    // If no valid environment mode is set, fall back to defaults based on NODE_ENV
    if (false) {} else {
        return "prod";
    }
};
// Get the environment mode once to ensure consistency
const currentEnvMode = getEnvironmentMode();
// Create the config object
const config = {
    ENV_MODE: currentEnvMode,
    IS_LOCAL: currentEnvMode === "local",
    IS_BETA: currentEnvMode === "beta",
    IS_GAMMA: currentEnvMode === "gamma",
    IS_ENTERPRISE: currentEnvMode === "enterprise",
    IS_PRODUCTION: currentEnvMode === "prod",
    SUBSCRIPTION_TIERS: currentEnvMode !== "prod" ? STAGING_TIERS : PROD_TIERS
};
const isLocalEnv = config.IS_LOCAL;
const isBetaEnv = config.IS_BETA || isLocalEnv;
const isGammaEnv = config.IS_GAMMA;
const isEnterpriseEnv = config.IS_ENTERPRISE;
const isProductionEnv = config.IS_PRODUCTION;
const shouldAllowModelSelection = !isProductionEnv;


/***/ }),

/***/ 47290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ GTMEvent)
/* harmony export */ });
// We should keep the documentation up to date: https://www.notion.so/ninjatech-ai/GTM-Events-184d734aee5680e9b508e140655d50bc
var GTMEvent = /*#__PURE__*/ function(GTMEvent) {
    GTMEvent["INITIALIZATION_FROM_PORTAL"] = "Initialization from portal";
    // This event is triggered by any paid subscription (Pro, Ultra etc). We decided to keep the "Pro" in the name to preserve the analytics statistics from the time when we had only one Pro plan.
    GTMEvent["SUCCESSFUL_NEW_PRO_SUBSCRIPTION"] = "Successful new pro subscription";
    GTMEvent["GET_STANDARD_ANNUAL_CLICK"] = "Get Standard Annual Checkout Click";
    GTMEvent["GET_STANDARD_MONTHLY_CLICK"] = "Get Standard Monthly Checkout Click";
    GTMEvent["GET_PRO_ANNUAL_CLICK"] = "Get Pro Annual Checkout Click";
    GTMEvent["GET_PRO_MONTHLY_CLICK"] = "Get Pro Monthly Checkout Click";
    GTMEvent["GET_ULTRA_ANNUAL_CLICK"] = "Get Ultra Annual Checkout Click";
    GTMEvent["GET_ULTRA_MONTHLY_CLICK"] = "Get Ultra Monthly Checkout Click";
    GTMEvent["GET_MAX_ANNUAL_CLICK"] = "Get Max Annual Checkout Click";
    GTMEvent["GET_MAX_MONTHLY_CLICK"] = "Get Max Monthly Checkout Click";
    GTMEvent["GET_BUSINESS_ANNUAL_CLICK"] = "Get Business Annual Checkout Click";
    GTMEvent["GET_BUSINESS_MONTHLY_CLICK"] = "Get Business Monthly Checkout Click";
    return GTMEvent;
}({});


/***/ }),

/***/ 50814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hf: () => (/* binding */ sendPaymentGTMEvent),
/* harmony export */   R: () => (/* binding */ sendGTMEvent),
/* harmony export */   Vz: () => (/* binding */ initializeGTM),
/* harmony export */   sZ: () => (/* binding */ addUserIdToGTMDataLayer)
/* harmony export */ });
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45199);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47615);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46830);
/* harmony import */ var _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55360);
/* harmony import */ var _types_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47290);





const GOOGLE_TAG_MANAGER_ID = 'GTM-KL69Z8N8';
const DEFAULT_EVENTS = {}; // We will add new events here
const initializeGTM = ()=>{
    if (!_lib_config__WEBPACK_IMPORTED_MODULE_2__/* .isProductionEnv */ .R6) {
        return;
    }
    const tagManagerArgs = {
        gtmId: GOOGLE_TAG_MANAGER_ID || ''
    };
    react_gtm_module__WEBPACK_IMPORTED_MODULE_0___default().initialize(tagManagerArgs);
};
const getTierGTMTitle = (tier)=>{
    switch(tier){
        case _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_3__/* .UserTier */ .Kx.paid:
        case _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_3__/* .UserTier */ .Kx.pro:
            return 'PRO';
        case _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_3__/* .UserTier */ .Kx.ultra:
            return 'Ultra';
        default:
            return (tier === null || tier === void 0 ? void 0 : tier.toLocaleUpperCase()) || '';
    }
};
const addUserIdToGTMDataLayer = (param)=>{
    let { user_id, tier_id, user_email, user_first_name, user_last_name } = param;
    if (!_lib_config__WEBPACK_IMPORTED_MODULE_2__/* .isProductionEnv */ .R6) {
        return;
    }
    const tagManagerArgs = {
        dataLayer: {
            site: _constants__WEBPACK_IMPORTED_MODULE_1__/* .PROJECT_NAME */ .cbb,
            user_id,
            tier_id: getTierGTMTitle(tier_id),
            user_email,
            user_first_name,
            user_last_name,
            event: _types_analytics__WEBPACK_IMPORTED_MODULE_4__/* .GTMEvent */ .B.INITIALIZATION_FROM_PORTAL
        }
    };
    react_gtm_module__WEBPACK_IMPORTED_MODULE_0___default().dataLayer(tagManagerArgs);
};
const sendGTMEvent = function(event) {
    let variables = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!_lib_config__WEBPACK_IMPORTED_MODULE_2__/* .isProductionEnv */ .R6) {
        return;
    }
    const tagManagerArgs = {
        dataLayer: {
            event,
            ...Object.fromEntries(Object.keys(DEFAULT_EVENTS).map((key)=>{
                var _variables_key;
                return [
                    key,
                    (_variables_key = variables[key]) !== null && _variables_key !== void 0 ? _variables_key : ''
                ];
            }))
        }
    };
    react_gtm_module__WEBPACK_IMPORTED_MODULE_0___default().dataLayer(tagManagerArgs);
};
const sendPaymentGTMEvent = (param)=>{
    let { transaction_id, subscription_plan, subscription_period, number_of_seats, value, currency } = param;
    const variables = {
        transaction_id: transaction_id || undefined,
        subscription_plan,
        subscription_period,
        number_of_seats,
        value,
        currency
    };
    sendGTMEvent(_types_analytics__WEBPACK_IMPORTED_MODULE_4__/* .GTMEvent */ .B.SUCCESSFUL_NEW_PRO_SUBSCRIPTION, variables);
    if (_lib_config__WEBPACK_IMPORTED_MODULE_2__/* .isProductionEnv */ .R6 && transaction_id) {
        react_gtm_module__WEBPACK_IMPORTED_MODULE_0___default().dataLayer({
            dataLayer: {
                event: 'purchase',
                transaction_id,
                value,
                currency
            }
        });
    }
};


/***/ }),

/***/ 51277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ AgentExecutionMode)
/* harmony export */ });
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const AgentExecutionMode = {
    standard: 'standard',
    complex: 'complex',
    fast: 'fast',
    non_applicable: 'non_applicable'
};


/***/ }),

/***/ 61330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J0: () => (/* reexport */ AccountSubscriptionTier),
  Ff: () => (/* reexport */ agentExecutionMode/* AgentExecutionMode */.F),
  Eo: () => (/* reexport */ AgentType),
  YW: () => (/* reexport */ ScheduleStatus),
  eZ: () => (/* reexport */ SupportPylonTicketFormCategory)
});

// UNUSED EXPORTS: ActionStatus, AgentRunStatus, AgentUpdateStatus, AiGenerationStatus, CalendarActionType, CodeSource, CommonInputTypes, DBAccountEntitlementSource, EntitlementType, GitHubAccountType, ImageVariant, LlmMessageType, LlmToolResultContentStatus, MeetingInputTypes, MessageOperationType, MessageType, Order, ProjectStatus, PylonFieldType, ResearchAi, SandboxBackupStatus, SandboxProvider, SupportTicketCategory, TargetType, TaskSkill, ThreadStatus, UserIntegrationType

;// ./src/gen/sn-api/models/accountSubscriptionTier.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const AccountSubscriptionTier = {
    free: 'free',
    starter: 'starter',
    standard: 'standard',
    pro: 'pro',
    ultra: 'ultra',
    max: 'max',
    business_pro: 'business_pro',
    business_ultra: 'business_ultra',
    business_max: 'business_max',
    internal_unlimited: 'internal_unlimited'
};

;// ./src/gen/sn-api/models/actionStatus.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const ActionStatus = {
    NOT_STARTED: 'NOT_STARTED',
    IN_PROGRESS: 'IN_PROGRESS',
    COMPLETED: 'COMPLETED',
    FAILED: 'FAILED'
};

// EXTERNAL MODULE: ./src/gen/sn-api/models/agentExecutionMode.ts
var agentExecutionMode = __webpack_require__(51277);
;// ./src/gen/sn-api/models/agentRunStatus.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const AgentRunStatus = {
    running: 'running',
    stopped: 'stopped',
    failed: 'failed',
    completed: 'completed',
    suspended: 'suspended',
    error: 'error',
    'error-notification': 'error-notification'
};

;// ./src/gen/sn-api/models/agentType.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const AgentType = {
    DEFAULT: 'DEFAULT',
    DEFAULT_SONNET_45: 'DEFAULT_SONNET_45',
    DEEP_RESEARCHER: 'DEEP_RESEARCHER',
    DEEP_CODER: 'DEEP_CODER',
    DUAL_MODEL: 'DUAL_MODEL',
    GLM_TESTER: 'GLM_TESTER',
    IMAGE_GENERATOR: 'IMAGE_GENERATOR',
    CHAT: 'CHAT',
    VS_CODE_LAUNCHER: 'VS_CODE_LAUNCHER'
};

;// ./src/gen/sn-api/models/agentUpdateStatus.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const AgentUpdateStatus = {
    success: 'success',
    failure: 'failure',
    archived: 'archived',
    blocked: 'blocked',
    done: 'done',
    failed: 'failed',
    in_progress: 'in_progress',
    undo_in_progress: 'undo_in_progress',
    halting: 'halting',
    stopping: 'stopping',
    stopped: 'stopped'
};

;// ./src/gen/sn-api/models/aiGenerationStatus.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const AiGenerationStatus = {
    success: 'success',
    failure: 'failure',
    content_policy_violation: 'content_policy_violation'
};

;// ./src/gen/sn-api/models/calendarActionType.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const CalendarActionType = {
    created: 'created',
    updated: 'updated',
    deleted: 'deleted'
};

;// ./src/gen/sn-api/models/codeSource.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const CodeSource = {
    NINJA_CODER_1: 'NINJA_CODER_1',
    CHAT_GPT_4: 'CHAT_GPT_4',
    ANTHROPIC_CLAUDE_2: 'ANTHROPIC_CLAUDE_2',
    GOOGLE_PALM_2_TEXT_BISON_001: 'GOOGLE_PALM_2_TEXT_BISON_001',
    GOOGLE_GEMINI_PRO: 'GOOGLE_GEMINI_PRO',
    OPEN_AI: 'OPEN_AI',
    ANTHROPIC: 'ANTHROPIC',
    GOOGLE: 'GOOGLE'
};

;// ./src/gen/sn-api/models/commonInputTypes.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const CommonInputTypes = {
    text: 'text',
    email: 'email',
    single_select: 'single_select',
    boolean: 'boolean'
};

;// ./src/gen/sn-api/models/dBAccountEntitlementSource.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const DBAccountEntitlementSource = {
    subscription: 'subscription',
    add_on: 'add_on'
};

;// ./src/gen/sn-api/models/entitlementType.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const EntitlementType = {
    provisioned: 'provisioned',
    credit: 'credit',
    on_demand: 'on_demand'
};

;// ./src/gen/sn-api/models/gitHubAccountType.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const GitHubAccountType = {
    User: 'User',
    Organization: 'Organization',
    Bot: 'Bot'
};

;// ./src/gen/sn-api/models/imageVariant.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const ImageVariant = {
    original: 'original',
    watermarked: 'watermarked'
};

;// ./src/gen/sn-api/models/llmMessageType.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const LlmMessageType = {
    user: 'user',
    assistant: 'assistant',
    tool: 'tool',
    summary: 'summary',
    fake_turn: 'fake_turn'
};

;// ./src/gen/sn-api/models/llmToolResultContentStatus.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const LlmToolResultContentStatus = {
    success: 'success',
    fail: 'fail'
};

;// ./src/gen/sn-api/models/meetingInputTypes.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const MeetingInputTypes = {
    location_and_conference: 'location_and_conference',
    datetime_range_list: 'datetime_range_list',
    rrule: 'rrule',
    attendees: 'attendees',
    duration: 'duration'
};

;// ./src/gen/sn-api/models/messageOperationType.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const MessageOperationType = {
    CREATE: 'CREATE',
    APPEND: 'APPEND',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    REPLACE: 'REPLACE'
};

;// ./src/gen/sn-api/models/messageType.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const MessageType = {
    system: 'system',
    status: 'status',
    assistant: 'assistant',
    user: 'user',
    tool: 'tool',
    fake_turn: 'fake_turn',
    summary: 'summary'
};

;// ./src/gen/sn-api/models/order.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const Order = {
    asc: 'asc',
    desc: 'desc'
};

;// ./src/gen/sn-api/models/projectStatus.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const ProjectStatus = {
    running: 'running',
    completed: 'completed'
};

;// ./src/gen/sn-api/models/pylonFieldType.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const PylonFieldType = {
    default_field: 'default_field',
    custom_field: 'custom_field'
};

;// ./src/gen/sn-api/models/researchAi.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const ResearchAi = {
    CHAT_GPT_4: 'CHAT_GPT_4',
    ANTHROPIC_CLAUDE_2: 'ANTHROPIC_CLAUDE_2',
    GOOGLE_PALM_2_TEXT_BISON_001: 'GOOGLE_PALM_2_TEXT_BISON_001',
    GOOGLE_GEMINI_PRO: 'GOOGLE_GEMINI_PRO',
    OPEN_AI: 'OPEN_AI',
    ANTHROPIC: 'ANTHROPIC',
    GOOGLE: 'GOOGLE'
};

;// ./src/gen/sn-api/models/sandboxBackupStatus.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const SandboxBackupStatus = {
    ok: 'ok',
    failed: 'failed',
    na: 'na'
};

;// ./src/gen/sn-api/models/sandboxProvider.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const SandboxProvider = {
    daytona: 'daytona',
    e2b: 'e2b',
    swerex: 'swerex',
    'swerex-local': 'swerex-local',
    'ninja-docker': 'ninja-docker',
    'ninja-firecracker': 'ninja-firecracker',
    'ninja-firecracker-secondary': 'ninja-firecracker-secondary'
};

;// ./src/gen/sn-api/models/scheduleStatus.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const ScheduleStatus = {
    ACTIVE: 'ACTIVE',
    PAUSED: 'PAUSED'
};

;// ./src/gen/sn-api/models/supportPylonTicketFormCategory.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const SupportPylonTicketFormCategory = {
    'account-billing': 'account-billing',
    'report-a-bug-or-techinal-issue': 'report-a-bug-or-techinal-issue',
    'product-questions-feedback': 'product-questions-feedback',
    'feature-request': 'feature-request',
    'enterprise-support': 'enterprise-support'
};

;// ./src/gen/sn-api/models/supportTicketCategory.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const SupportTicketCategory = {
    customer_question: 'customer_question',
    sales: 'sales',
    bug_or_technical_issue: 'bug_or_technical_issue',
    product_questions_and_feedback: 'product_questions_and_feedback',
    billing_and_subscription: 'billing_and_subscription',
    technical_support: 'technical_support',
    other: 'other'
};

;// ./src/gen/sn-api/models/targetType.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const TargetType = {
    THREAD: 'THREAD'
};

;// ./src/gen/sn-api/models/taskSkill.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const TaskSkill = {
    chitchat: 'chitchat',
    fun: 'fun',
    outreach: 'outreach',
    phishing: 'phishing',
    research: 'research',
    deep_research: 'deep_research',
    coding: 'coding',
    reservation: 'reservation',
    scheduling: 'scheduling',
    status: 'status',
    summarize: 'summarize',
    image: 'image',
    audio: 'audio',
    video: 'video',
    document_qa: 'document_qa',
    super_ninja: 'super_ninja',
    undefined: 'undefined'
};

;// ./src/gen/sn-api/models/threadStatus.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const ThreadStatus = {
    running: 'running',
    completed: 'completed',
    stopped: 'stopped',
    failed: 'failed',
    suspended: 'suspended',
    error: 'error',
    'error-notification': 'error-notification',
    abandoned: 'abandoned'
};

;// ./src/gen/sn-api/models/userIntegrationType.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const UserIntegrationType = {
    github_installation: 'github_installation',
    github: 'github'
};

;// ./src/gen/sn-api/models/index.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ 















































































































































































































































































































































































































































































































/***/ }),

/***/ 64269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $3: () => (/* binding */ colorWithOpacity),
/* harmony export */   Eb: () => (/* binding */ handlePaymentErrors),
/* harmony export */   Hz: () => (/* binding */ getRGBA),
/* harmony export */   KS: () => (/* binding */ handleContinueInProjectNewThreadWithSidebar),
/* harmony export */   RF: () => (/* binding */ handleRateLimitErrors),
/* harmony export */   SS: () => (/* binding */ handleExistingAgentRun),
/* harmony export */   cn: () => (/* binding */ cn),
/* harmony export */   eM: () => (/* binding */ copyTextToClipboard),
/* harmony export */   g_: () => (/* binding */ getDiverUrl),
/* harmony export */   r8: () => (/* binding */ handleContinueInNewThreadWithSidebar)
/* harmony export */ });
/* unused harmony exports focusInput, focusRing, hasErrorInput, isIOS */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2821);
/* harmony import */ var color_bits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5774);
/* harmony import */ var color_bits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(color_bits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75889);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18720);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64558);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19482);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26549);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46830);
/* harmony import */ var _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73262);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37893);










function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_7__/* .twMerge */ .QP)((0,clsx__WEBPACK_IMPORTED_MODULE_8__/* .clsx */ .$)(inputs));
}
// Helper function to convert any CSS color to rgba
const getRGBA = function(cssColor) {
    let fallback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'rgba(180, 180, 180)';
    if (false) {}
    if (!cssColor) return fallback;
    try {
        // Handle CSS variables
        if (typeof cssColor === 'string' && cssColor.startsWith('var(')) {
            const element = document.createElement('div');
            element.style.color = cssColor;
            document.body.appendChild(element);
            const computedColor = window.getComputedStyle(element).color;
            document.body.removeChild(element);
            return color_bits__WEBPACK_IMPORTED_MODULE_9__.formatRGBA(color_bits__WEBPACK_IMPORTED_MODULE_9__.parse(computedColor));
        }
        return color_bits__WEBPACK_IMPORTED_MODULE_9__.formatRGBA(color_bits__WEBPACK_IMPORTED_MODULE_9__.parse(cssColor));
    } catch (e) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_5__/* .datadogLogs */ .yf.logger.error('Color parsing failed:', {}, e);
        return fallback;
    }
};
// Helper function to add opacity to an RGB color string
const colorWithOpacity = (color, opacity)=>{
    if (!color.startsWith('rgb')) return color;
    return color_bits__WEBPACK_IMPORTED_MODULE_9__.formatRGBA(color_bits__WEBPACK_IMPORTED_MODULE_9__.alpha(color_bits__WEBPACK_IMPORTED_MODULE_9__.parse(color), opacity));
};
// Tremor Raw focusInput [v0.0.1]
const focusInput = (/* unused pure expression or super */ null && ([
    // base
    'focus:ring-2',
    // ring color
    'focus:ring-blue-200 focus:dark:ring-blue-700/30',
    // border color
    'focus:border-blue-500 focus:dark:border-blue-700'
]));
// Tremor Raw focusRing [v0.0.1]
const focusRing = (/* unused pure expression or super */ null && ([
    // base
    'outline outline-offset-2 outline-0 focus-visible:outline-2',
    // outline color
    'outline-blue-500 dark:outline-blue-500'
]));
// Tremor Raw hasErrorInput [v0.0.1]
const hasErrorInput = (/* unused pure expression or super */ null && ([
    // base
    'ring-2',
    // border color
    'border-red-500 dark:border-red-700',
    // ring color
    'ring-red-200 dark:ring-red-700/30'
]));
const copyTextToClipboard = async (text, shouldConvertBeforeCopy)=>{
    if (shouldConvertBeforeCopy) {
        const htmlBody = await marked__WEBPACK_IMPORTED_MODULE_1__/* .marked */ .xI.parse(text);
        const styledHtml = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHtmlContentForCopyToClipboard */ .QP)(htmlBody);
        const plainText = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getPlainTextContentForCopyToClipboard */ .Y5)(text);
        await navigator.clipboard.write([
            new ClipboardItem({
                'text/plain': new Blob([
                    plainText
                ], {
                    type: 'text/plain'
                }),
                'text/html': new Blob([
                    styledHtml
                ], {
                    type: 'text/html'
                })
            })
        ]);
    } else {
        navigator.clipboard.writeText(text);
    }
    sonner__WEBPACK_IMPORTED_MODULE_0__/* .toast */ .oR.success('Copied to clipboard');
};
const continueInNewThread = (router, threadId)=>{
    const query = "Continue on ".concat(_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .PUBLIC_URL_WITH_DEFAULT */ .du, "/agents/").concat(threadId);
    router.push("/dashboard?query=".concat(encodeURIComponent(query)));
};
const continueInProjectNewThread = (router, threadId, projectId)=>{
    const query = "Continue on ".concat(_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .PUBLIC_URL_WITH_DEFAULT */ .du, "/agents/").concat(threadId);
    router.push("/projects/".concat(projectId, "?query=").concat(encodeURIComponent(query)));
};
function handleContinueInNewThreadWithSidebar(router, threadId, isMobile, setIsLeftSidePanelOpen) {
    continueInNewThread(router, threadId);
    if (isMobile && setIsLeftSidePanelOpen) {
        setIsLeftSidePanelOpen(false);
    }
}
function handleContinueInProjectNewThreadWithSidebar(router, threadId, projectId, isMobile, setIsLeftSidePanelOpen) {
    continueInProjectNewThread(router, threadId, projectId);
    if (isMobile && setIsLeftSidePanelOpen) {
        setIsLeftSidePanelOpen(false);
    }
}
const getDiverUrl = (threadId, type)=>{
    return "https://diver.".concat(_config__WEBPACK_IMPORTED_MODULE_4__/* .isBetaEnv */ .kU ? 'beta' : _config__WEBPACK_IMPORTED_MODULE_4__/* .isGammaEnv */ .VS ? 'gamma' : 'prod', ".myninja.ai/").concat(type, "/").concat(threadId);
};
/**
 * Detects if the current device is running iOS
 * This includes iPhone, iPad, and iPod devices, as well as Macs with touch capabilities
 * @returns true if the device is running iOS
 */ const isIOS = ()=>{
    if (false) {}
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
};
const handlePaymentErrors = async (response)=>{
    let errorData;
    try {
        errorData = await response.json();
    } catch (parseError) {
        // Handle cases where parsing fails or the structure isn't as expected
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_5__/* .datadogLogs */ .yf.logger.error('[API] Could not parse 402 error response body:', {
            parseError
        });
        throw new _types__WEBPACK_IMPORTED_MODULE_6__/* .BillingError */ .Ey(response.status, {
            message: 'Payment Required'
        }, "Error starting agent: ".concat(response.statusText, " (402)"));
    }
    // Ensure detail exists and has a message property
    const detail = (errorData === null || errorData === void 0 ? void 0 : errorData.detail) || {
        message: 'Payment Required'
    };
    if (typeof detail.message !== 'string') {
        detail.message = 'Payment Required'; // Default message if missing
    }
    if (detail.message === _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .CONCURRENCY_LIMIT_MESSAGE */ .A1) throw new _types__WEBPACK_IMPORTED_MODULE_6__/* .ConcurrencyError */ .Yu(response.status, detail);
    throw new _types__WEBPACK_IMPORTED_MODULE_6__/* .BillingError */ .Ey(response.status, detail);
};
const handleRateLimitErrors = async (response)=>{
    let errorData;
    try {
        errorData = await response.json();
    } catch (parseError) {
        // Handle cases where parsing fails or the structure isn't as expected
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_5__/* .datadogLogs */ .yf.logger.error('[API] Could not parse 429 error response body:', {
            parseError
        });
        throw new _types__WEBPACK_IMPORTED_MODULE_6__/* .BillingError */ .Ey(response.status, {
            message: 'Rate Limit Exceeded',
            message_to_user: 'You have reached your rate limit. Please try again later.'
        }, "Error starting agent: ".concat(response.statusText, " (429)"));
    }
    // Ensure detail exists and has a message property
    const detail = (errorData === null || errorData === void 0 ? void 0 : errorData.detail) || {
        message: 'Rate Limit Exceeded'
    };
    if ((detail === null || detail === void 0 ? void 0 : detail.code) === 'IMAGE_RATE_LIMIT_EXCEEDED') {
        detail.message = 'Image rate limit exceeded';
        detail.message_to_user = 'You have reached your image generation limit. Please try again later.';
    } else if ((detail === null || detail === void 0 ? void 0 : detail.code) === 'CHAT_RATE_LIMIT_EXCEEDED') {
        detail.message = 'Chat rate limit exceeded';
        detail.message_to_user = 'You have reached your chat generation limit. Please try again later.';
    } else {
        detail.message = 'Rate limit exceeded';
        detail.message_to_user = 'You have reached your rate limit. Please try again later.';
    }
    throw new _types__WEBPACK_IMPORTED_MODULE_6__/* .BillingError */ .Ey(response.status, detail);
};
const handleExistingAgentRun = async (response)=>{
    let errorData;
    const defaultErrorMessage = 'Active agent run detected';
    try {
        errorData = await response.json();
    } catch (parseError) {
        // Handle cases where parsing fails or the structure isn't as expected
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_5__/* .datadogLogs */ .yf.logger.error('[API] Could not parse 409 error response body:', {
            parseError
        });
        throw new _types__WEBPACK_IMPORTED_MODULE_6__/* .ExistingAgentRunError */ .q_(response.status, {
            message: defaultErrorMessage
        }, "Error starting agent: ".concat(response.statusText, " (409)"));
    }
    // Ensure detail exists and has a message property
    const detail = (errorData === null || errorData === void 0 ? void 0 : errorData.detail) || {
        message: defaultErrorMessage
    };
    if (typeof detail.message !== 'string') {
        detail.message = defaultErrorMessage; // Default message if missing
    }
    throw new _types__WEBPACK_IMPORTED_MODULE_6__/* .ExistingAgentRunError */ .q_(response.status, detail);
};


/***/ }),

/***/ 86533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bo: () => (/* binding */ getQueryModeChangedToZero),
/* harmony export */   Ph: () => (/* binding */ getOriginalPriceLabel),
/* harmony export */   Pw: () => (/* binding */ getPriceFromNanos),
/* harmony export */   bb: () => (/* binding */ isAppleOrAmpSource),
/* harmony export */   i4: () => (/* binding */ getFinalPriceLabel),
/* harmony export */   jC: () => (/* binding */ getCorrespondingPlanKind),
/* harmony export */   pX: () => (/* binding */ getTotalRecurringPriceLabel),
/* harmony export */   pv: () => (/* binding */ shouldShowReferralByQueryBalance),
/* harmony export */   sl: () => (/* binding */ getDiscountedPriceLabel),
/* harmony export */   xr: () => (/* binding */ roundAmount)
/* harmony export */ });
/* unused harmony export getPriceWithCurrency */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47615);
/* harmony import */ var _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58926);


const getCorrespondingPlanKind = (param)=>{
    let { currentPlan, planFamily, targetInterval, isNew } = param;
    var _kindsMap_otherInterval;
    if (planFamily === _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_1__/* .PlanFamily */ .mX.undefined) {
        return currentPlan;
    }
    const kindsMap = isNew ? _constants__WEBPACK_IMPORTED_MODULE_0__/* .NEW_PLAN_SELECTION_KINDS_MAP */ .rTk[planFamily] : _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLAN_SELECTION_KINDS_MAP */ .wQ6[planFamily];
    if (!kindsMap || targetInterval !== _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_1__/* .CanonicalInterval */ .AT.monthly && targetInterval !== _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_1__/* .CanonicalInterval */ .AT.annually) {
        return currentPlan;
    }
    const otherInterval = targetInterval === _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_1__/* .CanonicalInterval */ .AT.monthly ? _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_1__/* .CanonicalInterval */ .AT.annually : _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_1__/* .CanonicalInterval */ .AT.monthly;
    const currentIndex = (_kindsMap_otherInterval = kindsMap[otherInterval]) === null || _kindsMap_otherInterval === void 0 ? void 0 : _kindsMap_otherInterval.findIndex((plan)=>plan === currentPlan);
    const fallbackIndex = currentIndex !== -1 ? currentIndex : 0;
    var _kindsMap_targetInterval_fallbackIndex;
    return (_kindsMap_targetInterval_fallbackIndex = kindsMap[targetInterval][fallbackIndex]) !== null && _kindsMap_targetInterval_fallbackIndex !== void 0 ? _kindsMap_targetInterval_fallbackIndex : currentPlan;
};
const isAppleOrAmpSource = (source)=>{
    return source === 'apple' || source === 'amp' || source === 'google_play_store';
};
const roundAmount = (value)=>{
    if (value !== 0 && !value) {
        return value;
    }
    return Math.round(value / 100);
};
const getOriginalPriceLabel = (param)=>{
    let { displayedPlan } = param;
    if (!displayedPlan) {
        return '-';
    }
    const price = displayedPlan.plan_group === 'teams' ? displayedPlan.per_seat.original_price : displayedPlan.original_price;
    const isMonthlyPeriod = displayedPlan.period === _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_1__/* .CanonicalInterval */ .AT.monthly;
    if (!price) {
        return '-';
    }
    return roundAmount(isMonthlyPeriod ? price : price / 12) || '-';
};
const getDiscountedPriceLabel = (param)=>{
    let { displayedPlan } = param;
    if (!displayedPlan) {
        return '-';
    }
    const price = displayedPlan.plan_group === 'teams' ? displayedPlan.per_seat.total_recurring_amount : displayedPlan.total_recurring_amount;
    const isMonthlyPeriod = displayedPlan.period === _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_1__/* .CanonicalInterval */ .AT.monthly;
    if (!price) {
        return '-';
    }
    return roundAmount(isMonthlyPeriod ? price : price / 12) || '-';
};
const getTotalRecurringPriceLabel = (param)=>{
    let { displayedPlan } = param;
    if (!displayedPlan) {
        return '-';
    }
    const price = displayedPlan.plan_group === 'teams' ? displayedPlan.per_seat.total_recurring_amount : displayedPlan.total_recurring_amount;
    const isMonthlyPeriod = displayedPlan.period === _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_1__/* .CanonicalInterval */ .AT.monthly;
    if (!price) {
        return '-';
    }
    return roundAmount(isMonthlyPeriod ? price : price / 12) || '-';
};
const getFinalPriceLabel = (param)=>{
    let { displayedPlan } = param;
    if (!displayedPlan) {
        return '-';
    }
    return getTotalRecurringPriceLabel({
        displayedPlan
    });
};
const shouldShowReferralByQueryBalance = (param)=>{
    let { userTier, queryBalance } = param;
    const tierRules = _constants__WEBPACK_IMPORTED_MODULE_0__/* .POSITIVE_ACTION_RULES */ .zN2[userTier];
    if (!tierRules) {
        return false;
    }
    const { total_queries_available, fast_queries_available } = queryBalance;
    const value = tierRules.metric === 'total' ? total_queries_available : fast_queries_available;
    return tierRules.values.includes(value);
};
const getPriceWithCurrency = (amount, currency)=>{
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency || 'USD',
        maximumFractionDigits: 3
    }).format(amount < 0.001 && amount !== 0 ? 0.001 : amount);
};
const getPriceFromNanos = (amount)=>{
    return (amount || 0) / 1e9;
};
const getQueryModeChangedToZero = (param)=>{
    let { oldBalance, newBalance } = param;
    if (!oldBalance) {
        return null;
    }
    const fields = [
        'standard_queries_available',
        'complex_queries_available',
        'fast_queries_available'
    ];
    for (const field of fields){
        const oldValue = oldBalance[field];
        const newValue = newBalance[field];
        if (oldValue !== newValue && newValue === 0) {
            return field;
        }
    }
    return null;
};


/***/ }),

/***/ 87214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ getUserFromAmplifySession),
/* harmony export */   o: () => (/* binding */ getSignInUrl)
/* harmony export */ });
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42917);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46830);
/* harmony import */ var _lib_envs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68276);
/* harmony import */ var _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73262);
/* __next_internal_client_entry_do_not_use__ getUserFromAmplifySession,getSignInUrl auto */ 



const getUserFromAmplifySession = async ()=>{
    try {
        var _currentSession_tokens_accessToken, _currentSession_tokens, _currentSession_tokens_accessToken_payload, _currentSession_tokens_accessToken1, _currentSession_tokens1, _currentSession_tokens_idToken, _currentSession_tokens2, _currentSession_tokens_idToken1, _currentSession_tokens3;
        const currentSession = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_3__/* .fetchAuthSession */ .$)();
        return {
            ninja_user_id: (currentSession === null || currentSession === void 0 ? void 0 : (_currentSession_tokens = currentSession.tokens) === null || _currentSession_tokens === void 0 ? void 0 : (_currentSession_tokens_accessToken = _currentSession_tokens.accessToken) === null || _currentSession_tokens_accessToken === void 0 ? void 0 : _currentSession_tokens_accessToken.payload['custom:ninja_user_id']) || '',
            id: (currentSession === null || currentSession === void 0 ? void 0 : (_currentSession_tokens1 = currentSession.tokens) === null || _currentSession_tokens1 === void 0 ? void 0 : (_currentSession_tokens_accessToken1 = _currentSession_tokens1.accessToken) === null || _currentSession_tokens_accessToken1 === void 0 ? void 0 : (_currentSession_tokens_accessToken_payload = _currentSession_tokens_accessToken1.payload) === null || _currentSession_tokens_accessToken_payload === void 0 ? void 0 : _currentSession_tokens_accessToken_payload.sub) || '',
            name: (currentSession === null || currentSession === void 0 ? void 0 : (_currentSession_tokens2 = currentSession.tokens) === null || _currentSession_tokens2 === void 0 ? void 0 : (_currentSession_tokens_idToken = _currentSession_tokens2.idToken) === null || _currentSession_tokens_idToken === void 0 ? void 0 : _currentSession_tokens_idToken.payload['given_name']) || 'User',
            email: (currentSession === null || currentSession === void 0 ? void 0 : (_currentSession_tokens3 = currentSession.tokens) === null || _currentSession_tokens3 === void 0 ? void 0 : (_currentSession_tokens_idToken1 = _currentSession_tokens3.idToken) === null || _currentSession_tokens_idToken1 === void 0 ? void 0 : _currentSession_tokens_idToken1.payload['email']) || '',
            avatar: ''
        };
    } catch (error) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_2__/* .datadogLogs */ .yf.logger.error('Error fetching user from Amplify session:', {}, error);
        return null;
    }
};
const getSignInUrl = function() {
    let sendToSignUp = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    // temporary fix for sign up flow
    if ( true && window.location.href.includes('utm_') || sendToSignUp) {
        return "".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_PUBLIC_MY_NINJA_URL */ .QG, "/sign-up");
    }
    return _lib_config__WEBPACK_IMPORTED_MODULE_0__/* .isLocalEnv */ .NL ? "".concat(window.location.origin, "/login") : "".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_PUBLIC_MY_NINJA_URL */ .QG, "/logout");
};


/***/ }),

/***/ 88108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Br: () => (/* binding */ containsTemporarySandboxUrl),
/* harmony export */   WU: () => (/* binding */ extractTemporarySandboxPortFromUrl),
/* harmony export */   aZ: () => (/* binding */ TEMP_WEBSITE_DEPLOYMENT_PORTS),
/* harmony export */   c4: () => (/* binding */ TEMPORARY_SANDBOX_SERVICE_URL_REGEX),
/* harmony export */   cL: () => (/* binding */ VS_CODE_BUTTON_LINK_REGEX),
/* harmony export */   nu: () => (/* binding */ getSandboxProxyUrl),
/* harmony export */   tj: () => (/* binding */ extractVsCodeUrlFromVsCodeLink),
/* harmony export */   vq: () => (/* binding */ extractPortFromExposePortToolRawXml)
/* harmony export */ });
/* unused harmony export EXPOSE_PORT_TOOL_REGEX */
/* harmony import */ var _lib_envs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68276);

const EXPOSE_PORT_TOOL_REGEX = /<expose-port>\s*(\d+)\s*<\/expose-port>/;
// Temporary sandbox service URL regex to match:
// Daytona URLs, current and deprecated: hxxxx.daytona.work, proxy.daytona.work, proxy.daytona.works
// Sandbox-service URLs, e.g. https://xxxx.sandbox-service.public.xxxx.myninja.ai
const TEMPORARY_SANDBOX_SERVICE_URL_REGEX = /https:\/\/(\d{1,4})-[A-Za-z0-9-]+\.(?:[A-Za-z0-9-]+\.daytona\.works?|sandbox-service\.public\.[A-Za-z.]+\.myninja\.ai)/g;
const VS_CODE_BUTTON_LINK_REGEX = /\[Open Ninja AI Code Studio\]\(([^)]+)\)/;
const getSandboxProxyUrl = (threadId, service, portNumber)=>{
    // I don't like web-preview as a public facing name, so I replace it with 'site' which is more user-friendly
    service = service == 'web-preview' ? 'site' : service;
    return portNumber ? "https://".concat(portNumber, "-").concat(threadId, ".app.").concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_SANDBOX_PROXY_HOST */ ._J) : "https://".concat(threadId, ".").concat(service, ".").concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_SANDBOX_PROXY_HOST */ ._J);
};
const containsTemporarySandboxUrl = (content)=>{
    return (content || '').includes('.daytona.work') || (content || '').includes('.sandbox-service.public');
};
const extractTemporarySandboxPortFromUrl = (content)=>{
    const match = TEMPORARY_SANDBOX_SERVICE_URL_REGEX.exec(content);
    if (match) {
        return match[1];
    }
};
const extractPortFromExposePortToolRawXml = (toolRawXml)=>{
    const match = EXPOSE_PORT_TOOL_REGEX.exec(toolRawXml);
    if (match) {
        return match[1];
    }
};
const extractVsCodeUrlFromVsCodeLink = (content)=>{
    const match = VS_CODE_BUTTON_LINK_REGEX.exec(content);
    if (match) {
        return match[1];
    }
};
const TEMP_WEBSITE_DEPLOYMENT_PORTS = [
    '8080',
    '8000'
];


/***/ }),

/***/ 90960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ih: () => (/* binding */ startAgent),
/* harmony export */   MA: () => (/* binding */ streamAgent),
/* harmony export */   Pw: () => (/* binding */ deleteAllSandboxFiles),
/* harmony export */   VL: () => (/* binding */ getMessages),
/* harmony export */   XY: () => (/* binding */ listSandboxFiles),
/* harmony export */   _L: () => (/* binding */ getAgentStatus),
/* harmony export */   ab: () => (/* binding */ getSandboxServiceUrl),
/* harmony export */   eD: () => (/* binding */ stopAgent),
/* harmony export */   ez: () => (/* binding */ getAllMessages),
/* harmony export */   fu: () => (/* binding */ initiateAgent),
/* harmony export */   kA: () => (/* binding */ getMessageById),
/* harmony export */   kg: () => (/* binding */ createUser),
/* harmony export */   l3: () => (/* binding */ updateAccountGTM),
/* harmony export */   le: () => (/* binding */ getHealth),
/* harmony export */   m9: () => (/* binding */ getAgentRuns),
/* harmony export */   nn: () => (/* binding */ getSandboxFileContent),
/* harmony export */   rX: () => (/* binding */ updateSandboxFile),
/* harmony export */   sU: () => (/* binding */ getAccount),
/* harmony export */   st: () => (/* binding */ createAgentRunFeedback),
/* harmony export */   tO: () => (/* binding */ getPagableMessages),
/* harmony export */   vK: () => (/* binding */ getWindowMessages),
/* harmony export */   w$: () => (/* binding */ renameSandboxFile),
/* harmony export */   xP: () => (/* binding */ deleteAgentRunFeedback),
/* harmony export */   ys: () => (/* binding */ ensureSandboxActive),
/* harmony export */   zO: () => (/* binding */ deleteSandboxFile)
/* harmony export */ });
/* unused harmony exports getScheduledTasks, undoAgentRun, createSandboxFile, createCheckoutSession, createPortalSession, getSubscription, getAccountEntitlements */
/* harmony import */ var _lib_envs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68276);
/* harmony import */ var _lib_utils_sandbox_proxy_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88108);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42917);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37893);
/* harmony import */ var _lib_utils_amplify_client_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87214);
/* harmony import */ var _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73262);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64269);








// Set to keep track of agent runs that are known to be non-running
// Map to keep track of active EventSource streams
const activeStreams = new Map();
// Map to track retry state for each agent run
const retryState = new Map();
const getHealth = async ()=>{
    try {
        const response = await fetch("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_BASE_URL */ .bg, "/health"), {
            method: 'GET'
        });
        if (!response.ok) throw new Error('Error connection');
    } catch (e) {
        throw new Error('Error connection');
    }
};
// TODO: Remove the export from this function and use it in getThread
const ensureSandboxActive = async (threadId)=>{
    try {
        var _session_tokens;
        const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
        // For public projects, we don't need authentication
        const headers = {
            'Content-Type': 'application/json'
        };
        if (session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken) {
            headers['Authorization'] = "Bearer ".concat(session.tokens.accessToken.toString());
        }
        ;
        const response = await fetch("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/threads/").concat(threadId, "/sandbox/ensure-active"), {
            method: 'POST',
            headers
        });
        if (!response.ok) {
            const errorText = await response.text().catch(()=>'No error details available');
            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.warn("Failed to ensure sandbox is active: ".concat(response.status, " ").concat(response.statusText), {
                errorText
            });
        } else {
            ;
        }
    } catch (sandboxError) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error('Failed to ensure sandbox is active:', {}, sandboxError);
    }
};
/**
 * @deprecated
 */ // The original get messages with no pagination support
const getMessages = async (param)=>{
    let { threadId, fromOpenEndpoint = false } = param;
    var _session_tokens;
    const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
    const headers = {
        'Content-Type': 'application/json'
    };
    if (session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken) {
        headers['Authorization'] = "Bearer ".concat(session.tokens.accessToken.toString());
    }
    const response = await fetch("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg).concat(fromOpenEndpoint ? '/open' : '', "/threads/").concat(threadId, "/messages"), {
        method: 'GET',
        headers: headers,
        cache: 'no-store'
    });
    const data = await response.json();
    const messages = (data.messages || []).map((msg)=>({
            message_id: msg.message_id,
            thread_id: msg.thread_id,
            agent_run_id: msg.agent_run_id,
            type: msg.type,
            is_llm_message: msg.is_llm_message,
            content: msg.content,
            metadata: msg.metadata,
            created_at: msg.created_at,
            updated_at: msg.updated_at
        }));
    // Check if we got a 402 response (Payment Required)
    if (response.status === 402) {
        return {
            messages,
            showPaywall: true
        };
    }
    if (!response.ok) {
        throw new Error("Error fetching messages: ".concat(response.statusText, " (").concat(response.status, ")"));
    }
    return {
        messages,
        showPaywall: false
    };
};
// Pagination support for messages
const getAllMessages = async (param)=>{
    let { threadId, isSharePage = false, toolOnly = false, userOnly = false } = param;
    var _session_tokens;
    const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
    const headers = {
        'Content-Type': 'application/json'
    };
    if (session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken) {
        headers['Authorization'] = "Bearer ".concat(session.tokens.accessToken.toString());
    }
    const url = new URL("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/threads/").concat(threadId, "/pagination/all-messages"));
    url.searchParams.set('is_share_page', isSharePage.toString());
    url.searchParams.set('order', 'asc');
    url.searchParams.set('page_size', '1000');
    if (toolOnly) {
        url.searchParams.set('filter_types', 'tool');
    }
    if (userOnly) {
        url.searchParams.set('filter_types', 'user');
    }
    const response = await fetch(url.toString(), {
        method: 'GET',
        headers: headers,
        cache: 'no-store'
    });
    const data = await response.json();
    const messages = data || [];
    // Check if we got a 402 response (Payment Required)
    if (response.status === 402) {
        return {
            messages,
            showPaywall: true
        };
    }
    if (!response.ok) {
        throw new Error("Error fetching messages: ".concat(response.statusText, " (").concat(response.status, ")"));
    }
    return {
        messages,
        showPaywall: false
    };
};
const getPagableMessages = async (param)=>{
    let { threadId, token } = param;
    var _session_tokens;
    ;
    const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
    const headers = {
        'Content-Type': 'application/json'
    };
    if (session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken) {
        headers['Authorization'] = "Bearer ".concat(session.tokens.accessToken.toString());
    }
    const url = new URL("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/threads/").concat(threadId, "/pagination/messages"));
    if (token) url.searchParams.set('pagination_token', token.toString());
    const response = await fetch(url.toString(), {
        method: 'GET',
        headers: headers,
        cache: 'no-store'
    });
    const data = await response.json();
    const messages = data.messages || [];
    // Check if we got a 402 response (Payment Required)
    if (response.status === 402) {
        return {
            messages,
            showPaywall: true,
            nextToken: null,
            prevToken: null
        };
    }
    if (!response.ok) {
        throw new Error("Error fetching messages: ".concat(response.statusText, " (").concat(response.status, ")"));
    }
    var _data_pagination_token;
    return {
        messages,
        showPaywall: false,
        nextToken: data.pagination_token,
        prevToken: token ? (_data_pagination_token = data.pagination_token) !== null && _data_pagination_token !== void 0 ? _data_pagination_token : null : null
    };
};
const getWindowMessages = async (param)=>{
    let { threadId, messageId, isTopMessageSelected = false } = param;
    var _session_tokens;
    const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
    const headers = {
        'Content-Type': 'application/json'
    };
    const token = session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken;
    if (token) {
        headers['Authorization'] = "Bearer ".concat(token.toString());
    }
    const url = new URL("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/threads/").concat(threadId, "/pagination/window-messages/").concat(messageId));
    url.searchParams.set('is_top_user_message', "".concat(isTopMessageSelected));
    const response = await fetch(url.toString(), {
        method: 'GET',
        headers: headers,
        cache: 'no-store'
    });
    const data = await response.json();
    const messages = data.messages || [];
    if (!response.ok) {
        throw new Error("Error fetching messages: ".concat(response.statusText, " (").concat(response.status, ")"));
    }
    return {
        messages,
        showPaywall: false,
        nextToken: data.pagination_token,
        prevToken: data.reverse_pagination_token
    };
};
const getScheduledTasks = async (param)=>{
    let { accountId } = param;
    var _session_tokens;
    const session = await fetchAuthSession();
    const headers = {
        'Content-Type': 'application/json'
    };
    const token = session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken;
    if (token) {
        headers['Authorization'] = "Bearer ".concat(token.toString());
    }
    const url = new URL("".concat(NEXT_PUBLIC_BACKEND_URL, "/accounts/").concat(accountId, "/schedules"));
    const response = await fetch(url.toString(), {
        method: 'GET',
        headers: headers,
        cache: 'no-store'
    });
    const data = await response.json();
    const schedules = data.schedules || [];
    if (!response.ok) {
        throw new Error("Error fetching messages: ".concat(response.statusText, " (").concat(response.status, ")"));
    }
    return {
        schedules
    };
};
const getMessageById = async (param)=>{
    let { threadId, messageId } = param;
    var _session_tokens;
    const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
    const headers = {
        'Content-Type': 'application/json'
    };
    if (session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken) {
        headers['Authorization'] = "Bearer ".concat(session.tokens.accessToken.toString());
    }
    const response = await fetch("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/threads/").concat(threadId, "/pagination/messages/").concat(messageId), {
        method: 'GET',
        headers: headers,
        cache: 'no-store'
    });
    const message = await response.json();
    if (!response.ok) {
        throw new Error("Error fetching messages: ".concat(response.statusText, " (").concat(response.status, ")"));
    }
    return {
        message
    };
};
// Agent APIs
const startAgent = async (threadId, userMessage, options)=>{
    try {
        var _session_tokens;
        const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
        if (!(session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken)) {
            throw new Error('No access token available');
        }
        // Check if backend URL is configured
        if (!_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg) {
            throw new Error('Backend URL is not configured. Set NEXT_PUBLIC_BACKEND_URL in your environment.');
        }
        ;
        const response = await fetch("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/thread/").concat(threadId, "/agent/start"), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
            },
            // Add cache: 'no-store' to prevent caching
            cache: 'no-store',
            // Add the body, stringifying the options or an empty object
            body: JSON.stringify({
                prompt: userMessage,
                ...options
            })
        });
        if (!response.ok) {
            // Check for 402 Payment Required first
            if (response.status === 402) {
                await (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .handlePaymentErrors */ .Eb)(response);
            }
            if (response.status === 429) {
                await (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .handleRateLimitErrors */ .RF)(response);
            }
            if (response.status === 409) {
                await (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .handleExistingAgentRun */ .SS)(response);
            }
            // Handle other errors
            const errorText = await response.text().catch(()=>'No error details available');
            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error("[API] Error starting agent: ".concat(response.status, " ").concat(response.statusText), {
                errorText
            });
            throw new Error("Error starting agent: ".concat(response.statusText, " (").concat(response.status, ")"));
        }
        return response.json();
    } catch (error) {
        // Rethrow BillingError instances directly
        if (error instanceof _types__WEBPACK_IMPORTED_MODULE_2__/* .BillingError */ .Ey) {
            throw error;
        }
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error('[API] Failed to start agent:', {}, error);
        // Provide clearer error message for network errors
        if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
            throw new Error('Cannot connect to backend server. Please check your internet connection.');
        }
        // Rethrow other caught errors
        throw error;
    }
};
const stopAgent = async (agentRunId)=>{
    var _session_tokens;
    const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
    if (!(session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken)) {
        throw new Error('No access token available');
    }
    const response = await fetch("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/agent-run/").concat(agentRunId, "/stop"), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
        },
        // Add cache: 'no-store' to prevent caching
        cache: 'no-store'
    });
    if (!response.ok) {
        throw new Error("Error stopping agent: ".concat(response.statusText));
    }
};
const getAgentStatus = async (agentRunId)=>{
    ;
    try {
        var _session_tokens;
        const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
        if (!(session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken)) {
            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error('[API] No access token available for getAgentStatus');
            throw new Error('No access token available');
        }
        const url = "".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/agent-run/").concat(agentRunId);
        ;
        const response = await fetch(url, {
            headers: {
                Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
            },
            // Add cache: 'no-store' to prevent caching
            cache: 'no-store'
        });
        if (!response.ok) {
            const errorText = await response.text().catch(()=>'No error details available');
            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error("[API] Error getting agent status: ".concat(response.status, " ").concat(response.statusText), {
                errorText
            });
            throw new Error("Error getting agent status: ".concat(response.statusText, " (").concat(response.status, ")"));
        }
        const data = await response.json();
        ;
        return data;
    } catch (error) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error('[API] Failed to get agent status:', {}, error);
        throw error;
    }
};
const getAgentRuns = async (threadId)=>{
    try {
        var _session_tokens;
        const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
        if (!(session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken)) {
            throw new Error('No access token available');
        }
        const response = await fetch("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/thread/").concat(threadId, "/agent-runs"), {
            headers: {
                Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
            },
            // Add cache: 'no-store' to prevent caching
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error("Error getting agent runs: ".concat(response.statusText));
        }
        const data = await response.json();
        return data.agent_runs || [];
    } catch (error) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error('Failed to get agent runs:', {}, error);
        throw error;
    }
};
const undoAgentRun = async (threadId, agentRunId)=>{
    try {
        var _session_tokens;
        const session = await fetchAuthSession();
        if (!(session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken)) {
            throw new Error('No access token available');
        }
        const response = await fetch("".concat(NEXT_PUBLIC_BACKEND_URL, "/thread/").concat(threadId, "/undo_run/").concat(agentRunId), {
            method: 'POST',
            headers: {
                Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
            },
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error("Error undoing agent run: ".concat(response.statusText));
        }
    } catch (error) {
        datadogLogs.logger.error('Failed to undo agent run:', {}, error);
        throw error;
    }
};
const streamAgent = (agentRunId, callbacks, afterMessageId)=>{
    ;
    // Check if there's already an active stream for this agent run
    const existingStream = activeStreams.get(agentRunId);
    if (existingStream) {
        ;
        existingStream.close();
        activeStreams.delete(agentRunId);
    }
    // Initialize retry state for this agent run
    if (!retryState.has(agentRunId)) {
        retryState.set(agentRunId, {
            retryCount: 0,
            maxRetries: 5,
            baseDelay: 1000,
            lastRetryTime: 0,
            isRetrying: false
        });
    }
    // Set up a new stream
    try {
        const setupStream = async ()=>{
            var _session_tokens;
            const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
            if (!(session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken)) {
                _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error('[STREAM] No auth token available');
                callbacks.onError(new Error('Authentication required'));
                callbacks.onClose();
                return;
            }
            const url = new URL("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/agent-run/").concat(agentRunId, "/stream"));
            url.searchParams.append('token', session.tokens.accessToken.toString());
            if (afterMessageId) {
                url.searchParams.append('after_message_id', afterMessageId);
            }
            ;
            const eventSource = new EventSource(url.toString());
            // Store the EventSource in the active streams map
            activeStreams.set(agentRunId, eventSource);
            eventSource.onopen = ()=>{
                ;
                // Reset retry state on successful connection
                const state = retryState.get(agentRunId);
                if (state) {
                    state.retryCount = 0;
                    state.isRetrying = false;
                }
            };
            eventSource.onmessage = (event)=>{
                try {
                    const rawData = event.data;
                    if (rawData.includes('"type":"ping"')) return;
                    ;
                    // Skip empty messages
                    if (!rawData || rawData.trim() === '') {
                        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.debug('[STREAM] Received empty message, skipping');
                        return;
                    }
                    // Check for "Agent run not found" error
                    if (rawData.includes('Agent run') && rawData.includes('not found in active runs')) {
                        ;
                        // Notify about the error
                        callbacks.onError('Agent run not found in active runs');
                        // Clean up
                        eventSource.close();
                        activeStreams.delete(agentRunId);
                        callbacks.onClose();
                        return;
                    }
                    // Check error notification message (displayed in the chat as agent response)
                    if (rawData.includes('"type": "status"') && rawData.includes('"status": "error-notification"')) {
                        ;
                        // Notify about the error message
                        callbacks.onMessage(rawData);
                        eventSource.close();
                        activeStreams.delete(agentRunId);
                        callbacks.onClose();
                        return;
                    }
                    // Check for completion messages
                    if (rawData.includes('"type":"status"') && rawData.includes('"status":"completed"')) {
                        ;
                        // Check for specific completion messages that indicate we should stop checking
                        if (rawData.includes('Run data not available for streaming') || rawData.includes('Stream ended with status: completed')) {
                            ;
                        }
                        // Notify about the message
                        callbacks.onMessage(rawData);
                        // Clean up
                        eventSource.close();
                        activeStreams.delete(agentRunId);
                        callbacks.onClose();
                        return;
                    }
                    // Check for thread run end message
                    if (rawData.includes('"type":"status"') && rawData.includes('"status_type":"thread_run_end"')) {
                        ;
                        // Notify about the message
                        callbacks.onMessage(rawData);
                        // Clean up
                        eventSource.close();
                        activeStreams.delete(agentRunId);
                        callbacks.onClose();
                        return;
                    }
                    // For all other messages, just pass them through
                    callbacks.onMessage(rawData);
                } catch (error) {
                    _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error('[STREAM] Error handling message:', {}, error);
                    callbacks.onError(error instanceof Error ? error : String(error));
                }
            };
            eventSource.onerror = (event)=>{
                ;
                // Check if the agent is still running
                getAgentStatus(agentRunId).then((status)=>{
                    if (status.status !== 'running') {
                        ;
                        eventSource.close();
                        activeStreams.delete(agentRunId);
                        callbacks.onClose();
                    } else {
                        ;
                        // Attempt to retry the stream
                        const state = retryState.get(agentRunId);
                        if (state && !state.isRetrying) {
                            state.isRetrying = true;
                            if (state.retryCount < state.maxRetries) {
                                const delay = state.baseDelay * Math.pow(2, state.retryCount);
                                const now = Date.now();
                                // Ensure we don't retry too frequently
                                if (now - state.lastRetryTime >= delay) {
                                    state.retryCount++;
                                    state.lastRetryTime = now;
                                    ;
                                    setTimeout(()=>{
                                        // Close current stream
                                        eventSource.close();
                                        activeStreams.delete(agentRunId);
                                        // Retry by calling setupStream again
                                        setupStream();
                                    }, delay);
                                } else {
                                    // Reset retry flag if we can't retry yet
                                    state.isRetrying = false;
                                    ;
                                }
                            } else {
                                ;
                                callbacks.onError("Stream failed after ".concat(state.maxRetries, " retry attempts"));
                                callbacks.onClose();
                            }
                        }
                    }
                }).catch((err)=>{
                    _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error('[STREAM] Error checking agent status after stream error:', {}, err);
                    // Check if this is a "not found" error
                    const errMsg = err instanceof Error ? err.message : String(err);
                    const isNotFoundErr = errMsg.includes('not found') || errMsg.includes('404') || errMsg.includes('does not exist');
                    if (isNotFoundErr) {
                        ;
                        eventSource.close();
                        activeStreams.delete(agentRunId);
                        callbacks.onClose();
                    } else {
                        // For other errors, attempt retry if agent might still be running
                        const state = retryState.get(agentRunId);
                        if (state && !state.isRetrying && state.retryCount < state.maxRetries) {
                            state.isRetrying = true;
                            state.retryCount++;
                            state.lastRetryTime = Date.now();
                            const delay = state.baseDelay * Math.pow(2, state.retryCount);
                            ;
                            setTimeout(()=>{
                                eventSource.close();
                                activeStreams.delete(agentRunId);
                                setupStream();
                            }, delay);
                        } else {
                            // For other errors, notify but don't close the stream
                            callbacks.onError(errMsg);
                        }
                    }
                });
            };
        };
        // Start the stream setup
        setupStream();
        // Return a cleanup function
        return ()=>{
            ;
            const stream = activeStreams.get(agentRunId);
            if (stream) {
                ;
                stream.close();
                activeStreams.delete(agentRunId);
            }
            // Clean up retry state
            retryState.delete(agentRunId);
        };
    } catch (error) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error("[STREAM] Error setting up stream for ".concat(agentRunId, ":"), {}, error);
        callbacks.onError(error instanceof Error ? error : String(error));
        callbacks.onClose();
        return ()=>{};
    }
};
// Sandbox API Functions
const createSandboxFile = async (threadId, filePath, content)=>{
    try {
        var _session_tokens;
        const session = await fetchAuthSession();
        // Use FormData to handle both text and binary content more reliably
        const formData = new FormData();
        formData.append('path', filePath);
        // Create a Blob from the content string and append as a file
        const blob = new Blob([
            content
        ], {
            type: 'application/octet-stream'
        });
        formData.append('file', blob, filePath.split('/').pop() || 'file');
        const headers = {};
        if (session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken) {
            headers['Authorization'] = "Bearer ".concat(session.tokens.accessToken.toString());
        }
        const response = await fetch("".concat(NEXT_PUBLIC_BACKEND_URL, "/threads/").concat(threadId, "/sandbox/files"), {
            method: 'POST',
            headers,
            body: formData
        });
        if (!response.ok) {
            const errorText = await response.text().catch(()=>'No error details available');
            datadogLogs.logger.error("Error creating sandbox file: ".concat(response.status, " ").concat(response.statusText), {
                errorText
            });
            throw new Error("Error creating sandbox file: ".concat(response.statusText, " (").concat(response.status, ")"));
        }
        return response.json();
    } catch (error) {
        datadogLogs.logger.error('Failed to create sandbox file:', {}, error);
        throw error;
    }
};
const updateSandboxFile = async (threadId, filePath, content)=>{
    var _session_tokens_accessToken, _session_tokens;
    const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
    const formData = new FormData();
    formData.append('path', filePath);
    let fileBlob;
    if (content instanceof Blob) {
        fileBlob = content;
    } else if (typeof content === 'string' && content.startsWith('data:')) {
        fileBlob = await (await fetch(content)).blob();
    } else {
        fileBlob = new Blob([
            content
        ], {
            type: 'text/plain'
        });
    }
    const filename = filePath.split('/').pop() || 'file';
    formData.append('file', fileBlob, filename);
    const headers = {};
    const token = session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : (_session_tokens_accessToken = _session_tokens.accessToken) === null || _session_tokens_accessToken === void 0 ? void 0 : _session_tokens_accessToken.toString();
    if (token) headers['Authorization'] = "Bearer ".concat(token);
    const response = await fetch("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/threads/").concat(threadId, "/sandbox/files"), {
        method: 'PUT',
        headers,
        body: formData
    });
    if (!response.ok) {
        const errorText = await response.text().catch(()=>'No error details available');
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error("Error updating sandbox file: ".concat(response.status, " ").concat(response.statusText), {
            errorText
        });
        throw new Error("Error updating sandbox file: ".concat(response.statusText, " (").concat(response.status, ")"));
    }
    return true;
};
const listSandboxFiles = async (threadId, path, fromOpenEndpoint, opts)=>{
    try {
        var _session_tokens;
        const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
        let url = new URL("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/threads/").concat(threadId, "/sandbox/files"));
        if (fromOpenEndpoint) {
            url = new URL("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/open/threads/").concat(threadId, "/sandbox/files"));
        }
        url.searchParams.append('path', path);
        const headers = {};
        if (session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken) {
            headers['Authorization'] = "Bearer ".concat(session.tokens.accessToken.toString());
        }
        const response = await fetch(url.toString(), {
            headers,
            signal: opts === null || opts === void 0 ? void 0 : opts.signal
        });
        if (!response.ok) {
            const errorText = await response.text().catch(()=>'No error details available');
            // Handle 402 Payment Required specifically
            if (response.status === 402) {
                throw new _types__WEBPACK_IMPORTED_MODULE_2__/* .BillingError */ .Ey(402, {
                    message: 'Payment required to access sandbox files',
                    details: {
                        errorText
                    }
                });
            }
            throw new Error("Error listing sandbox files: ".concat(response.statusText, " (").concat(response.status, ")"));
        }
        const data = await response.json();
        return data.files || [];
    } catch (error) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error('Failed to list sandbox files:', {}, error);
        throw error;
    }
};
const deleteSandboxFile = async (threadId, filePath)=>{
    const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
    const url = "".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/threads/").concat(threadId, "/sandbox/files");
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            Authorization: "Bearer ".concat(session.tokens.accessToken.toString()),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            path: filePath
        })
    });
    if (!response.ok) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error("Error deleting sandbox file: ".concat(response.status, " ").concat(response.statusText), {});
        throw new Error("Error deleting sandbox file: ".concat(response.statusText, " (").concat(response.status, ")"));
    }
    return true;
};
const renameSandboxFile = async (threadId, filePath, name)=>{
    const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
    const url = "".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/threads/").concat(threadId, "/sandbox/files/rename");
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            Authorization: "Bearer ".concat(session.tokens.accessToken.toString()),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            path: filePath,
            new_name: name
        })
    });
    if (!response.ok) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error("Error renaming sandbox file: ".concat(response.status, " ").concat(response.statusText), {});
        throw new Error("Error renaming sandbox file: ".concat(response.statusText, " (").concat(response.status, ")"));
    }
    return true;
};
const deleteAllSandboxFiles = async (threadId)=>{
    const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
    const headers = {};
    headers['Authorization'] = "Bearer ".concat(session.tokens.accessToken.toString());
    const url = new URL("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/threads/").concat(threadId, "/sandbox/files-all"));
    const response = await fetch(url.toString(), {
        method: 'DELETE',
        headers
    });
    if (!response.ok) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error('Error deleting all files', {});
        throw new Error('Error deleting all files');
    }
    return true;
};
const getSandboxFileContent = async (threadId, path, fromOpenEndpoint)=>{
    let response;
    try {
        var _session_tokens;
        const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
        let url = new URL("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/threads/").concat(threadId, "/sandbox/files/content"));
        if (fromOpenEndpoint) {
            url = new URL("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/open/threads/").concat(threadId, "/sandbox/files/content"));
        }
        const headers = {
            'Content-Type': 'application/json'
        };
        if (session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken) {
            headers['Authorization'] = "Bearer ".concat(session.tokens.accessToken.toString());
        }
        response = await fetch(url.toString(), {
            method: 'POST',
            headers,
            body: JSON.stringify({
                path
            })
        });
    } catch (error) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error('Unexpected error while getting sandbox file content:', {
            fromOpenEndpoint,
            threadId,
            filePath: path
        }, error);
        throw error;
    }
    if (response.ok) {
        // Check if it's a text file or binary file based on content-type
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('text') || (contentType === null || contentType === void 0 ? void 0 : contentType.includes('application/json'))) {
            return await response.text();
        } else {
            return await response.blob();
        }
    } else {
        const errorText = await response.text().catch(()=>'No error details available');
        // Handle 402 Payment Required specifically
        if (response.status === 402) {
            throw new _types__WEBPACK_IMPORTED_MODULE_2__/* .BillingError */ .Ey(402, {
                message: 'Payment required to access sandbox file content',
                details: {
                    errorText
                }
            });
        }
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error("Error getting sandbox file content: ".concat(response.status, " ").concat(response.statusText), {
            errorText,
            fromOpenEndpoint,
            threadId,
            filePath: path
        });
        throw new Error("Error getting sandbox file content: ".concat(response.statusText, " (").concat(response.status, ")"));
    }
};
const initiateAgent = async (formData)=>{
    try {
        var _session_tokens;
        const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
        // Ensure we have an access token
        if (!(session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken)) {
            throw new Error('No access token available');
        }
        // Check if backend URL is configured
        if (!_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg) {
            throw new Error('Backend URL is not configured. Set NEXT_PUBLIC_BACKEND_URL in your environment.');
        }
        ;
        const response = await fetch("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/agent/initiate"), {
            method: 'POST',
            headers: {
                // Note: Don't set Content-Type for FormData
                Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
            },
            body: formData,
            // Add cache: 'no-store' to prevent caching
            cache: 'no-store'
        });
        if (!response.ok) {
            // 402 is reserved for billing errors or rate limits
            if (response.status === 402) {
                await (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .handlePaymentErrors */ .Eb)(response);
            }
            if (response.status === 429) {
                await (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .handleRateLimitErrors */ .RF)(response);
            }
            // Handle other errors
            const errorText = await response.text().catch(()=>'No error details available');
            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error("[API] Error initiating agent: ".concat(response.status, " ").concat(response.statusText), {
                errorText
            });
            throw new Error("Error initiating agent: ".concat(response.statusText, " (").concat(response.status, ")"));
        }
        return response.json();
    } catch (error) {
        if (error instanceof _types__WEBPACK_IMPORTED_MODULE_2__/* .BillingError */ .Ey) {
            throw error;
        }
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error('[API] Failed to initiate agent:', {}, error);
        // Provide clearer error message for network errors
        if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
            throw new Error('Cannot connect to backend server. Please check your internet connection.');
        }
        throw error;
    }
};
// Billing API Functions
const createCheckoutSession = async (request)=>{
    try {
        var _session_tokens;
        const session = await fetchAuthSession();
        if (!(session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken)) {
            throw new Error('No access token available');
        }
        const response = await fetch("".concat(NEXT_PUBLIC_BACKEND_URL, "/billing/create-checkout-session"), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
            },
            body: JSON.stringify(request)
        });
        if (!response.ok) {
            const errorText = await response.text().catch(()=>'No error details available');
            datadogLogs.logger.error("Error creating checkout session: ".concat(response.status, " ").concat(response.statusText), {
                errorText
            });
            throw new Error("Error creating checkout session: ".concat(response.statusText, " (").concat(response.status, ")"));
        }
        const data = await response.json();
        ;
        // Handle all possible statuses
        switch(data.status){
            case 'upgraded':
            case 'updated':
            case 'downgrade_scheduled':
            case 'scheduled':
            case 'no_change':
                return data;
            case 'new':
            case 'checkout_created':
                if (!data.url) {
                    throw new Error('No checkout URL provided');
                }
                return data;
            default:
                datadogLogs.logger.warn('Unexpected status from createCheckoutSession:', data.status);
                return data;
        }
    } catch (error) {
        datadogLogs.logger.error('Failed to create checkout session:', {}, error);
        throw error;
    }
};
const createPortalSession = async (request)=>{
    try {
        var _session_tokens;
        const session = await fetchAuthSession();
        if (!(session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken)) {
            throw new Error('No access token available');
        }
        const response = await fetch("".concat(NEXT_PUBLIC_BACKEND_URL, "/billing/create-portal-session"), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
            },
            body: JSON.stringify(request)
        });
        if (!response.ok) {
            const errorText = await response.text().catch(()=>'No error details available');
            datadogLogs.logger.error("Error creating portal session: ".concat(response.status, " ").concat(response.statusText), {
                errorText
            });
            throw new Error("Error creating portal session: ".concat(response.statusText, " (").concat(response.status, ")"));
        }
        return response.json();
    } catch (error) {
        datadogLogs.logger.error('Failed to create portal session:', {}, error);
        throw error;
    }
};
const getSubscription = async ()=>{
    try {
        var _session_tokens;
        const session = await fetchAuthSession();
        if (!(session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken)) {
            throw new Error('No access token available');
        }
        const response = await fetch("".concat(NEXT_PUBLIC_BACKEND_URL, "/billing/subscription"), {
            headers: {
                Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
            }
        });
        if (!response.ok) {
            const errorText = await response.text().catch(()=>'No error details available');
            datadogLogs.logger.error("Error getting subscription: ".concat(response.status, " ").concat(response.statusText), {
                errorText
            });
            throw new Error("Error getting subscription: ".concat(response.statusText, " (").concat(response.status, ")"));
        }
        return response.json();
    } catch (error) {
        datadogLogs.logger.error('Failed to get subscription:', {}, error);
        throw error;
    }
};
const getAccount = async ()=>{
    try {
        var _session_tokens;
        const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
        if (!(session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken)) {
            throw new Error('No access token available');
        }
        const response = await fetch("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/accounts"), {
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
            }
        });
        if (!response.ok) {
            throw new Error("Error getting account: ".concat(response.statusText, " (").concat(response.status, ")"));
        }
        return response.json();
    } catch (error) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error('Failed to get account:', {}, error);
        throw error;
    }
};
const updateAccountGTM = async (gtmInfo)=>{
    try {
        var _session_tokens;
        const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
        if (!(session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken)) {
            throw new Error('No access token available');
        }
        const user = await (0,_lib_utils_amplify_client_utils__WEBPACK_IMPORTED_MODULE_3__/* .getUserFromAmplifySession */ .K)();
        if (!(user === null || user === void 0 ? void 0 : user.ninja_user_id)) {
            throw new Error('No user ID available');
        }
        const targetAccountId = user.ninja_user_id;
        const response = await fetch("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/accounts/").concat(targetAccountId, "/gtm_information"), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
            },
            body: JSON.stringify(gtmInfo)
        });
        if (!response.ok) {
            const errorText = await response.text().catch(()=>'No error details available');
            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error("Error updating account gtm: ".concat(response.status, " ").concat(response.statusText), {
                errorText
            });
            throw new Error("Error updating account gtm: ".concat(response.statusText, " (").concat(response.status, ")"));
        }
    } catch (error) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error('Failed to update account GTM:', {}, error);
        throw error;
    }
};
/**
 * @deprecated
 */ const getAccountEntitlements = async (accountId)=>{
    try {
        var _session_tokens;
        const session = await fetchAuthSession();
        if (!(session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken)) {
            throw new Error('No access token available');
        }
        let targetAccountId = accountId;
        if (!targetAccountId) {
            const user = await getUserFromAmplifySession();
            if (!(user === null || user === void 0 ? void 0 : user.ninja_user_id)) {
                throw new Error('No user ID available');
            }
            targetAccountId = user.ninja_user_id;
        }
        const response = await fetch("".concat(NEXT_PUBLIC_BACKEND_URL, "/accounts/").concat(targetAccountId, "/entitlements"), {
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
            }
        });
        if (!response.ok) {
            throw new Error("Error getting account entitlements: ".concat(response.statusText, " (").concat(response.status, ")"));
        }
        return response.json();
    } catch (error) {
        datadogLogs.logger.error('Failed to get account entitlements:', {}, error);
        throw error;
    }
};
const createAgentRunFeedback = async (param)=>{
    let { agent_run_id, rating } = param;
    try {
        var _session_tokens;
        const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
        if (!(session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken)) {
            throw new Error('No access token available');
        }
        const body = {
            data: {
                feedback_type: 'super_ninja_agent_run',
                rating,
                agent_run_id
            }
        };
        const response = await fetch("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/agent-run/").concat(agent_run_id, "/feedback"), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            const errorText = await response.text().catch(()=>'No error details available');
            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error("Failed to create feedback: ".concat(response.status, " ").concat(response.statusText), {
                errorText
            });
            throw new Error("Failed to create feedback: ".concat(response.statusText, " (").concat(response.status, ")"));
        }
        return response.json();
    } catch (error) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error('Failed to create feedback:', {}, error);
        throw error;
    }
};
const deleteAgentRunFeedback = async (agent_run_id)=>{
    try {
        var _session_tokens;
        const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
        if (!(session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken)) {
            throw new Error('No access token available');
        }
        const response = await fetch("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/agent-run/").concat(agent_run_id, "/feedback"), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
            }
        });
        if (!response.ok) {
            const errorText = await response.text().catch(()=>'No error details available');
            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error("Failed to delete feedback: ".concat(response.status, " ").concat(response.statusText), {
                errorText
            });
            throw new Error("Failed to delete feedback: ".concat(response.statusText, " (").concat(response.status, ")"));
        }
        return;
    } catch (error) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error('Failed to delete feedback:', {}, error);
        throw error;
    }
};
// Cache for sandbox service URLs
const sandboxServiceUrlCache = new Map();
const getSandboxServiceUrl = async (param)=>{
    let { thread, threadId, service } = param;
    const targetThreadId = thread ? thread === null || thread === void 0 ? void 0 : thread.thread_id : threadId;
    const isProxyEnabled = true;
    const cacheKey = "".concat(targetThreadId, ":").concat(service);
    if (sandboxServiceUrlCache.has(cacheKey)) {
        return sandboxServiceUrlCache.get(cacheKey);
    }
    try {
        if (isProxyEnabled) {
            const result = {
                url: (0,_lib_utils_sandbox_proxy_utils__WEBPACK_IMPORTED_MODULE_1__/* .getSandboxProxyUrl */ .nu)(targetThreadId, service)
            };
            sandboxServiceUrlCache.set(cacheKey, result);
            return result;
        }
        const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
        const response = await fetch("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/threads/").concat(threadId, "/sandbox/services/").concat(service), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
            }
        });
        if (!response.ok) {
            throw new Error("API error: ".concat(response.statusText, " (").concat(response.status, ")"));
        }
        const result = await response.json();
        sandboxServiceUrlCache.set(cacheKey, result);
        return result;
    } catch (error) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error('Failed to get sandbox service url:', {}, error);
        throw error;
    }
};
const createUser = async (userData)=>{
    try {
        const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .fetchAuthSession */ .$)();
        const response = await fetch("".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_BACKEND_URL */ .xg, "/accounts"), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
            },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            throw new Error("API error: ".concat(response.statusText, " (").concat(response.status, ")"));
        }
        return response.json();
    } catch (error) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error('Failed to create user:', {}, error);
        throw error;
    }
};


/***/ }),

/***/ 95071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _e: () => (/* binding */ getSubmenuElement),
/* harmony export */   sg: () => (/* binding */ debounce),
/* harmony export */   tZ: () => (/* binding */ calculateSubmenuPosition),
/* harmony export */   tt: () => (/* binding */ calculateSubmenuHeight)
/* harmony export */ });
/* harmony import */ var _constants_submenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7251);

const getSubmenuElement = (repoName, styles)=>{
    try {
        const repoContainer = document.querySelector('[data-repo="'.concat(repoName, '"]'));
        return repoContainer === null || repoContainer === void 0 ? void 0 : repoContainer.querySelector(".".concat(styles.branchSubmenu));
    } catch (error) {
        // Don't log error
        return null;
    }
};
const calculateSubmenuPosition = (submenuRect)=>{
    const viewportWidth = window.innerWidth;
    return submenuRect.right > viewportWidth ? 'left' : 'right';
};
const calculateSubmenuHeight = (submenuRect)=>{
    const viewportHeight = window.innerHeight;
    const maxHeight = viewportHeight - submenuRect.top - _constants_submenu__WEBPACK_IMPORTED_MODULE_0__/* .SUBMENU_CONSTANTS */ .I.BUFFER_PX;
    return maxHeight > 0 ? maxHeight : _constants_submenu__WEBPACK_IMPORTED_MODULE_0__/* .SUBMENU_CONSTANTS */ .I.MIN_HEIGHT_PX;
};
const debounce = (func, delay)=>{
    let timeoutId;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>func(...args), delay);
    };
};


/***/ })

}]);
//# sourceMappingURL=5657-5adbb06e3d44c51f.js.map