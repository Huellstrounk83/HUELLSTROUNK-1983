(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3337],{

/***/ 1797:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"ratingButton":"FeedbackRating_ratingButton__h7wZp","modalContainer":"FeedbackRating_modalContainer__a7jrB","root":"FeedbackRating_root__el7g0","content":"FeedbackRating_content__sj2EH","ratingWrapper":"FeedbackRating_ratingWrapper__SKBKM","modalTitle":"FeedbackRating_modalTitle__dfhqh","title":"FeedbackRating_title__HvLUa","iconTitle":"FeedbackRating_iconTitle__62bb5","nj-animate-horizontal-appearance-ltr-enter":"FeedbackRating_nj-animate-horizontal-appearance-ltr-enter__090Ei","nj-animate-horizontal-appearance-ltr-enter-active":"FeedbackRating_nj-animate-horizontal-appearance-ltr-enter-active__qj6CA","nj-animate-horizontal-appearance-ltr-exit":"FeedbackRating_nj-animate-horizontal-appearance-ltr-exit___PXqY","nj-animate-horizontal-appearance-ltr-exit-active":"FeedbackRating_nj-animate-horizontal-appearance-ltr-exit-active__9Xw19","nj-animate-left-panel-width-reduce-enter":"FeedbackRating_nj-animate-left-panel-width-reduce-enter__LgI1r","nj-animate-left-panel-width-reduce-enter-active":"FeedbackRating_nj-animate-left-panel-width-reduce-enter-active__8PhpX","nj-animate-left-panel-width-reduce-exit":"FeedbackRating_nj-animate-left-panel-width-reduce-exit__rVE8Z","nj-animate-left-panel-width-reduce-exit-active":"FeedbackRating_nj-animate-left-panel-width-reduce-exit-active__NnfB7","nj-animate-vertical-appearance-appear":"FeedbackRating_nj-animate-vertical-appearance-appear__tA6Bt","nj-animate-vertical-appearance-appear-active":"FeedbackRating_nj-animate-vertical-appearance-appear-active__9CLYP","nj-animate-vertical-appearance-enter":"FeedbackRating_nj-animate-vertical-appearance-enter__f_MZu","nj-animate-vertical-appearance-enter-active":"FeedbackRating_nj-animate-vertical-appearance-enter-active__V1aTw","nj-animate-vertical-appearance-exit":"FeedbackRating_nj-animate-vertical-appearance-exit__RQ_xF","nj-animate-vertical-appearance-exit-active":"FeedbackRating_nj-animate-vertical-appearance-exit-active__Wnn88","moreButton":"FeedbackRating_moreButton__Hpfzo","selected":"FeedbackRating_selected__F0iSN","submitButton":"FeedbackRating_submitButton__Sad8s","infinite-spinner":"FeedbackRating_infinite-spinner__qMn5h","fadeIn":"FeedbackRating_fadeIn__Uhj_8","blinking":"FeedbackRating_blinking__cvorF","movingRight":"FeedbackRating_movingRight__Dwh_s"};

/***/ }),

/***/ 2802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ij: () => (/* reexport */ useSidePanelActions),
  gd: () => (/* reexport */ useSidePanelState)
});

// UNUSED EXPORTS: useTypewriterContent

// EXTERNAL MODULE: ./src/store/slices/sidePanelSlice.ts
var sidePanelSlice = __webpack_require__(59677);
// EXTERNAL MODULE: ./src/store/config.ts + 1 modules
var config = __webpack_require__(33057);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
;// ./src/hooks/sidePanel/useSidePanelActions.ts
/* __next_internal_client_entry_do_not_use__ useSidePanelActions auto */ 


const useSidePanelActions = ()=>{
    const dispatch = (0,config/* useAppDispatch */.jL)();
    const openPanel = (0,react.useCallback)((panelType)=>{
        dispatch((0,sidePanelSlice/* setActivePanelType */.$p)(panelType));
    }, [
        dispatch
    ]);
    const closePanelAction = (0,react.useCallback)(()=>{
        dispatch((0,sidePanelSlice/* closePanel */.Zv)());
    }, [
        dispatch
    ]);
    const toggleComputerPanelOpened = (0,react.useCallback)((value)=>{
        if (value) {
            dispatch((0,sidePanelSlice/* setActivePanelType */.$p)('tool-call'));
        } else {
            dispatch((0,sidePanelSlice/* closePanel */.Zv)());
        }
    }, [
        dispatch
    ]);
    const toggleFileDirectoryPanelOpened = (0,react.useCallback)((value)=>{
        if (value) {
            dispatch((0,sidePanelSlice/* setActivePanelType */.$p)('file-directory'));
        } else {
            dispatch((0,sidePanelSlice/* closePanel */.Zv)());
        }
    }, [
        dispatch
    ]);
    return (0,react.useMemo)(()=>({
            openPanel,
            closePanel: closePanelAction,
            toggleComputerPanelOpened,
            toggleFileDirectoryPanelOpened
        }), [
        openPanel,
        closePanelAction,
        toggleComputerPanelOpened,
        toggleFileDirectoryPanelOpened
    ]);
};

// EXTERNAL MODULE: ./src/store/index.ts + 2 modules
var store = __webpack_require__(82678);
;// ./src/hooks/sidePanel/useSidePanelState.ts
/* __next_internal_client_entry_do_not_use__ useSidePanelState auto */ 


const useSidePanelState = ()=>{
    const { activePanelType } = (0,config/* useAppSelector */.GV)(store/* sidePanelState */.jx);
    return (0,react.useMemo)(()=>({
            activePanelType,
            isComputerPanelOpen: activePanelType === 'tool-call',
            isFileDirectoryPanelOpen: activePanelType === 'file-directory',
            isAnyPanelOpen: activePanelType === 'tool-call' || activePanelType === 'file-directory'
        }), [
        activePanelType
    ]);
};

;// ./src/hooks/sidePanel/useTypewriterContent.tsx
/* __next_internal_client_entry_do_not_use__ useTypewriterContent auto */ 
const useTypewriterContent = function(content) {
    let baseSpeed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 15;
    const [displayedContent, setDisplayedContent] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [speed, setSpeed] = useState(baseSpeed);
    const prevContentLengthRef = useRef(0);
    const lastUpdateRef = useRef(Date.now());
    useEffect(()=>{
        if (!content) {
            return;
        }
        // Detect if content increased
        const currentLength = content.length;
        const prevLength = prevContentLengthRef.current;
        if (currentLength > prevLength) {
            const behindBy = currentLength - currentIndex;
            // Speed up based on how far behind we are
            if (behindBy > 1000) {
                setSpeed(1);
            } else if (behindBy > 500) {
                setSpeed(3);
            } else if (behindBy > 200) {
                setSpeed(5);
            } else if (behindBy > 100) {
                setSpeed(8);
            } else {
                setSpeed(baseSpeed);
            }
            lastUpdateRef.current = Date.now();
        } else {
            // No new content for a while, slow down to base speed
            const timeSinceUpdate = Date.now() - lastUpdateRef.current;
            if (timeSinceUpdate > 500 && speed !== baseSpeed) {
                setSpeed(baseSpeed);
            }
        }
        prevContentLengthRef.current = currentLength;
    }, [
        content,
        baseSpeed,
        currentIndex,
        speed
    ]);
    useEffect(()=>{
        if (!content || currentIndex >= content.length) {
            return;
        }
        const step = 50 / speed;
        const timer = setInterval(()=>{
            setCurrentIndex((prev)=>{
                if (prev < content.length) {
                    setDisplayedContent(content.slice(0, prev + step));
                    return prev + step;
                } else {
                    clearInterval(timer);
                    return prev;
                }
            });
        }, speed);
        return ()=>clearInterval(timer);
    }, [
        content,
        speed,
        currentIndex
    ]);
    return {
        displayedContent
    };
};

;// ./src/hooks/sidePanel/index.ts





/***/ }),

/***/ 4677:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"FileOperationToolView_root__RhHms","loader":"FileOperationToolView_loader__JaDaz","nj-animate-horizontal-appearance-ltr-enter":"FileOperationToolView_nj-animate-horizontal-appearance-ltr-enter__Rdq8t","nj-animate-horizontal-appearance-ltr-enter-active":"FileOperationToolView_nj-animate-horizontal-appearance-ltr-enter-active__14e43","nj-animate-horizontal-appearance-ltr-exit":"FileOperationToolView_nj-animate-horizontal-appearance-ltr-exit__6_zPW","nj-animate-horizontal-appearance-ltr-exit-active":"FileOperationToolView_nj-animate-horizontal-appearance-ltr-exit-active__Uxr3l","nj-animate-left-panel-width-reduce-enter":"FileOperationToolView_nj-animate-left-panel-width-reduce-enter__BmOcY","nj-animate-left-panel-width-reduce-enter-active":"FileOperationToolView_nj-animate-left-panel-width-reduce-enter-active__EpGjL","nj-animate-left-panel-width-reduce-exit":"FileOperationToolView_nj-animate-left-panel-width-reduce-exit__6bmbG","nj-animate-left-panel-width-reduce-exit-active":"FileOperationToolView_nj-animate-left-panel-width-reduce-exit-active__REC_L","nj-animate-vertical-appearance-appear":"FileOperationToolView_nj-animate-vertical-appearance-appear__TzvY9","nj-animate-vertical-appearance-appear-active":"FileOperationToolView_nj-animate-vertical-appearance-appear-active__7dxlG","nj-animate-vertical-appearance-enter":"FileOperationToolView_nj-animate-vertical-appearance-enter__e9QPr","nj-animate-vertical-appearance-enter-active":"FileOperationToolView_nj-animate-vertical-appearance-enter-active__lwaSE","nj-animate-vertical-appearance-exit":"FileOperationToolView_nj-animate-vertical-appearance-exit__23N_5","nj-animate-vertical-appearance-exit-active":"FileOperationToolView_nj-animate-vertical-appearance-exit-active__JFQNN","isHidden":"FileOperationToolView_isHidden__lxb3N","infinite-spinner":"FileOperationToolView_infinite-spinner__lNS3F","fadeIn":"FileOperationToolView_fadeIn__5MZVm","blinking":"FileOperationToolView_blinking__4FXyG","movingRight":"FileOperationToolView_movingRight__nT_3T"};

/***/ }),

/***/ 6817:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"segmentedControl":"ViewSwitcher_segmentedControl__c9JBi","segment":"ViewSwitcher_segment__IJxAY","active":"ViewSwitcher_active__YOHh5","leftSegment":"ViewSwitcher_leftSegment__b0G2G","rightSegment":"ViewSwitcher_rightSegment__dih46"};

/***/ }),

/***/ 6925:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"streamingBadge":"ToolCallHeaderActions_streamingBadge__RxKKa","nj-animate-horizontal-appearance-ltr-enter":"ToolCallHeaderActions_nj-animate-horizontal-appearance-ltr-enter__k5Vx9","nj-animate-horizontal-appearance-ltr-enter-active":"ToolCallHeaderActions_nj-animate-horizontal-appearance-ltr-enter-active__EgSh6","nj-animate-horizontal-appearance-ltr-exit":"ToolCallHeaderActions_nj-animate-horizontal-appearance-ltr-exit__5gkLH","nj-animate-horizontal-appearance-ltr-exit-active":"ToolCallHeaderActions_nj-animate-horizontal-appearance-ltr-exit-active__7yy1Z","nj-animate-left-panel-width-reduce-enter":"ToolCallHeaderActions_nj-animate-left-panel-width-reduce-enter__weuGF","nj-animate-left-panel-width-reduce-enter-active":"ToolCallHeaderActions_nj-animate-left-panel-width-reduce-enter-active__ldOZW","nj-animate-left-panel-width-reduce-exit":"ToolCallHeaderActions_nj-animate-left-panel-width-reduce-exit__jiwMq","nj-animate-left-panel-width-reduce-exit-active":"ToolCallHeaderActions_nj-animate-left-panel-width-reduce-exit-active__zIp6i","nj-animate-vertical-appearance-appear":"ToolCallHeaderActions_nj-animate-vertical-appearance-appear__gl76q","nj-animate-vertical-appearance-appear-active":"ToolCallHeaderActions_nj-animate-vertical-appearance-appear-active__OuPEZ","nj-animate-vertical-appearance-enter":"ToolCallHeaderActions_nj-animate-vertical-appearance-enter__0uHCs","nj-animate-vertical-appearance-enter-active":"ToolCallHeaderActions_nj-animate-vertical-appearance-enter-active__aAGe8","nj-animate-vertical-appearance-exit":"ToolCallHeaderActions_nj-animate-vertical-appearance-exit__dPDPh","nj-animate-vertical-appearance-exit-active":"ToolCallHeaderActions_nj-animate-vertical-appearance-exit-active__gMNlL","infinite-spinner":"ToolCallHeaderActions_infinite-spinner___qA40","fadeIn":"ToolCallHeaderActions_fadeIn__FWIaG","blinking":"ToolCallHeaderActions_blinking__2eZIA","movingRight":"ToolCallHeaderActions_movingRight__4s_9g"};

/***/ }),

/***/ 7075:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"container":"EmailNotificationsDropdown_container___le1D","dropdownContent":"EmailNotificationsDropdown_dropdownContent__yy81Q","nj-animate-horizontal-appearance-ltr-enter":"EmailNotificationsDropdown_nj-animate-horizontal-appearance-ltr-enter__Ee4tV","nj-animate-horizontal-appearance-ltr-enter-active":"EmailNotificationsDropdown_nj-animate-horizontal-appearance-ltr-enter-active__bx2XE","nj-animate-horizontal-appearance-ltr-exit":"EmailNotificationsDropdown_nj-animate-horizontal-appearance-ltr-exit__b6rZl","nj-animate-horizontal-appearance-ltr-exit-active":"EmailNotificationsDropdown_nj-animate-horizontal-appearance-ltr-exit-active__8mY_v","nj-animate-left-panel-width-reduce-enter":"EmailNotificationsDropdown_nj-animate-left-panel-width-reduce-enter__7Fnuk","nj-animate-left-panel-width-reduce-enter-active":"EmailNotificationsDropdown_nj-animate-left-panel-width-reduce-enter-active__3_bJZ","nj-animate-left-panel-width-reduce-exit":"EmailNotificationsDropdown_nj-animate-left-panel-width-reduce-exit__W5x8l","nj-animate-left-panel-width-reduce-exit-active":"EmailNotificationsDropdown_nj-animate-left-panel-width-reduce-exit-active__3_tDX","nj-animate-vertical-appearance-appear":"EmailNotificationsDropdown_nj-animate-vertical-appearance-appear__HK_9a","nj-animate-vertical-appearance-appear-active":"EmailNotificationsDropdown_nj-animate-vertical-appearance-appear-active__LQY0p","nj-animate-vertical-appearance-enter":"EmailNotificationsDropdown_nj-animate-vertical-appearance-enter__NZC6t","nj-animate-vertical-appearance-enter-active":"EmailNotificationsDropdown_nj-animate-vertical-appearance-enter-active__c7E4C","nj-animate-vertical-appearance-exit":"EmailNotificationsDropdown_nj-animate-vertical-appearance-exit__Bsn_g","nj-animate-vertical-appearance-exit-active":"EmailNotificationsDropdown_nj-animate-vertical-appearance-exit-active__qAGCG","flexBetween":"EmailNotificationsDropdown_flexBetween__x1n4c","button":"EmailNotificationsDropdown_button__O94DN","buttonIcon":"EmailNotificationsDropdown_buttonIcon__62KF2","buttonText":"EmailNotificationsDropdown_buttonText__BNDR5","buttonOpen":"EmailNotificationsDropdown_buttonOpen__d1C73","caretDownIcon":"EmailNotificationsDropdown_caretDownIcon__JrcRn","radioLabel":"EmailNotificationsDropdown_radioLabel__q_I28","dropdownSubtitle":"EmailNotificationsDropdown_dropdownSubtitle__5DsyO","infinite-spinner":"EmailNotificationsDropdown_infinite-spinner__ct6ew","fadeIn":"EmailNotificationsDropdown_fadeIn__MNH96","blinking":"EmailNotificationsDropdown_blinking__RM1LJ","movingRight":"EmailNotificationsDropdown_movingRight__tljub"};

/***/ }),

/***/ 7811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ Markdown)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(64269);
// EXTERNAL MODULE: ./node_modules/marked/lib/marked.esm.js
var marked_esm = __webpack_require__(64558);
// EXTERNAL MODULE: ./node_modules/rehype-raw/lib/index.js + 45 modules
var lib = __webpack_require__(30736);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/react-markdown/lib/index.js + 89 modules
var react_markdown_lib = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/remark-gfm/lib/index.js + 55 modules
var remark_gfm_lib = __webpack_require__(97866);
// EXTERNAL MODULE: ./src/components/ui/code-block.tsx
var code_block = __webpack_require__(13993);
// EXTERNAL MODULE: ./src/components/ui/markdown.module.scss
var markdown_module = __webpack_require__(40682);
var markdown_module_default = /*#__PURE__*/__webpack_require__.n(markdown_module);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/DownloadSimple.es.js + 1 modules
var DownloadSimple_es = __webpack_require__(45319);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./src/utils/index.ts + 9 modules
var src_utils = __webpack_require__(19482);
// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button = __webpack_require__(62717);
// EXTERNAL MODULE: ./src/hooks/selectedExternalFile/index.ts + 2 modules
var selectedExternalFile = __webpack_require__(35194);
// EXTERNAL MODULE: ./src/components/ui/ButtonTryOnDesktop/index.tsx + 1 modules
var ButtonTryOnDesktop = __webpack_require__(29345);
// EXTERNAL MODULE: ./src/hooks/use-rnwebview-download-enabled.ts
var use_rnwebview_download_enabled = __webpack_require__(71825);
// EXTERNAL MODULE: ./src/hooks/sidePanel/index.ts + 3 modules
var sidePanel = __webpack_require__(2802);
// EXTERNAL MODULE: ./node_modules/rehype-sanitize/lib/index.js + 2 modules
var rehype_sanitize_lib = __webpack_require__(75770);
;// ./src/hooks/use-long-press-link-webview.ts
/* __next_internal_client_entry_do_not_use__ useLongPressLink auto */ 
const LONG_PRESS = 600;
const MOVE_THRESHOLD = 10;
function useLongPressLink(ref) {
    (0,react.useEffect)(()=>{
        if (!ref.current) return;
        let timer = null;
        let startX = 0;
        let startY = 0;
        const sendToReactNative = (payload)=>{
            var _window_ReactNativeWebView;
            const msg = JSON.stringify(payload);
            if ((_window_ReactNativeWebView = window.ReactNativeWebView) === null || _window_ReactNativeWebView === void 0 ? void 0 : _window_ReactNativeWebView.postMessage) {
                window.ReactNativeWebView.postMessage(msg);
            }
        };
        const onTouchStart = (e)=>{
            if (!ref.current) return;
            if (!ref.current.contains(e.target)) return;
            const touch = e.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
            timer = window.setTimeout(()=>{
                var _ref_current;
                if (!((_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.href)) return;
                sendToReactNative({
                    type: 'longpress-link',
                    href: ref.current.href,
                    clientX: startX,
                    clientY: startY
                });
            }, LONG_PRESS);
        };
        const onTouchMove = (e)=>{
            if (!timer) return;
            const touch = e.touches[0];
            const dx = Math.abs(touch.clientX - startX);
            const dy = Math.abs(touch.clientY - startY);
            if (dx > MOVE_THRESHOLD || dy > MOVE_THRESHOLD) {
                clearTimeout(timer);
                timer = null;
            }
        };
        const onTouchEnd = ()=>{
            if (timer) clearTimeout(timer);
            timer = null;
        };
        document.addEventListener('touchstart', onTouchStart, {
            passive: true
        });
        document.addEventListener('touchmove', onTouchMove, {
            passive: true
        });
        document.addEventListener('touchend', onTouchEnd);
        return ()=>{
            document.removeEventListener('touchstart', onTouchStart);
            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', onTouchEnd);
        };
    }, [
        ref
    ]);
}

;// ./src/components/ui/markdown.tsx



















function parseMarkdownIntoBlocks(markdown) {
    const tokens = marked_esm/* marked */.xI.lexer(markdown);
    return tokens.map((token)=>token.raw);
}
function extractLanguage(className) {
    if (!className) return 'plaintext';
    const match = className.match(/language-(\w+)/);
    return match ? match[1] : 'plaintext';
}
const INITIAL_COMPONENTS = {
    code: function CodeComponent(param) {
        let { className, children, ...props } = param;
        var _props_node_position, _props_node, _props_node_position1, _props_node1, _props_node_position2, _props_node2, _props_node3;
        const isInline = !((_props_node = props.node) === null || _props_node === void 0 ? void 0 : (_props_node_position = _props_node.position) === null || _props_node_position === void 0 ? void 0 : _props_node_position.start.line) || ((_props_node1 = props.node) === null || _props_node1 === void 0 ? void 0 : (_props_node_position1 = _props_node1.position) === null || _props_node_position1 === void 0 ? void 0 : _props_node_position1.start.line) === ((_props_node2 = props.node) === null || _props_node2 === void 0 ? void 0 : (_props_node_position2 = _props_node2.position) === null || _props_node_position2 === void 0 ? void 0 : _props_node_position2.end.line);
        if (typeof children === 'undefined') {
            return null;
        }
        if (isInline) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: (0,utils.cn)('bg-primary-foreground dark:bg-zinc-800 dark:border dark:border-zinc-700 rounded-sm px-1 font-mono text-sm', className),
                ...props,
                children: children
            });
        }
        const language = extractLanguage(className);
        var _props_node_value;
        const codeString = (_props_node_value = (_props_node3 = props.node) === null || _props_node3 === void 0 ? void 0 : _props_node3.value) !== null && _props_node_value !== void 0 ? _props_node_value : Array.isArray(children) ? children.join('') : String(children);
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(code_block/* CodeBlock */.NG, {
            className: "rounded-md overflow-hidden my-4 position-relative ".concat((markdown_module_default()).codeBlock),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (markdown_module_default()).codeBlockCopyButton,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(code_block/* CodeCopyButton */.vB, {
                        code: codeString
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(code_block/* CodeBlockCode */.sd, {
                    code: codeString,
                    language: language,
                    className: "text-sm overflow-x-auto"
                })
            ]
        });
    },
    pre: function PreComponent(param) {
        let { children } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: children
        });
    },
    ul: function UnorderedList(param) {
        let { children, ...props } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
            className: "list-disc pl-5 my-2 break-words",
            style: {
                color: 'inherit'
            },
            ...props,
            children: children
        });
    },
    ol: function OrderedList(param) {
        let { children, ...props } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("ol", {
            className: "list-decimal pl-5 my-2 break-words",
            style: {
                color: 'inherit'
            },
            ...props,
            children: children
        });
    },
    li: function ListItem(param) {
        let { children, ...props } = param;
        return(// The className hides the checkmark icon inline, TODO: refactor to use prop
        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
            className: "my-1 [&>div>svg]:hidden text-inherit",
            style: {
                color: 'inherit'
            },
            ...props,
            children: children
        }));
    },
    h1: function H1(param) {
        let { children, ...props } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
            className: "text-2xl font-bold my-3",
            style: {
                color: 'inherit'
            },
            ...props,
            children: children
        });
    },
    h2: function H2(param) {
        let { children, ...props } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
            className: "text-xl font-bold my-2",
            style: {
                color: 'inherit'
            },
            ...props,
            children: children
        });
    },
    h3: function H3(param) {
        let { children, ...props } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
            className: "text-lg font-bold !my-0 !p-0",
            style: {
                color: 'inherit'
            },
            ...props,
            children: children
        });
    },
    p: function P(param) {
        let { children, ...props } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
            className: "!p-0",
            style: {
                color: 'inherit'
            },
            ...props,
            children: children
        });
    },
    blockquote: function Blockquote(param) {
        let { children, ...props } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("blockquote", {
            className: "border-l-4 border-muted pl-4 italic my-2 dark:text-zinc-400 dark:border-zinc-600",
            ...props,
            children: children
        });
    },
    a: function Anchor(param) {
        let { children, href, ...props } = param;
        var _window_ReactNativeWebView;
        const ref = (0,react.useRef)(null);
        const text = typeof children === 'string' ? children : href !== null && href !== void 0 ? href : '';
        const parts = text.split(/([\/:\.])/g).flatMap((chunk, i)=>/[\/:\.]/.test(chunk) ? [
                chunk,
                /*#__PURE__*/ (0,jsx_runtime.jsx)("wbr", {}, i)
            ] : [
                chunk
            ]);
        useLongPressLink(ref);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
            href: href,
            ref: ref,
            className: (0,utils.cn)('hover:underline text-blue-400 break-words whitespace-normal', !!((_window_ReactNativeWebView = window.ReactNativeWebView) === null || _window_ReactNativeWebView === void 0 ? void 0 : _window_ReactNativeWebView.postMessage) && 'select-none'),
            target: "_blank",
            rel: "noopener noreferrer",
            ...props,
            children: parts
        });
    },
    table: function Table(param) {
        let { children, ...props } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (markdown_module_default()).tableContainer,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("table", {
                ...props,
                children: children
            })
        });
    },
    th: function TableHeader(param) {
        let { children, ...props } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
            className: "border border-slate-300 dark:border-zinc-700 px-3 py-2 text-left font-semibold bg-slate-100 dark:bg-zinc-800",
            ...props,
            children: children
        });
    },
    td: function TableCell(param) {
        let { children, ...props } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
            className: "border border-slate-300 dark:border-zinc-700 px-3 py-2",
            ...props,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (markdown_module_default()).cellContent,
                children: children
            })
        });
    },
    img: function Image(param) {
        let { src, alt, ...props } = param;
        const { toggleComputerPanelOpened, toggleFileDirectoryPanelOpened } = (0,sidePanel/* useSidePanelActions */.ij)();
        const { setSelectedExternalFilepath } = (0,selectedExternalFile/* useSelectedFileActions */.g)();
        const isRNWebViewDownloadEnabled = (0,use_rnwebview_download_enabled/* useRNWebViewDownloadEnabled */.Q)();
        if (!src) {
            return null;
        }
        const handleClick = ()=>{
            toggleComputerPanelOpened(false);
            toggleFileDirectoryPanelOpened(true);
            const filenameImage = src.split('/').at(-1);
            const pathImage = "/generated_images/generated_image_".concat(filenameImage);
            setSelectedExternalFilepath(pathImage);
        };
        const isNinjaGenerated = src !== constants/* MODERATION_PLACEHOLDER */.Zr6 && src.includes(constants/* GENERATED_ASSETS_DOMAIN */.dpN);
        const downloadButton = /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
            type: "button",
            shape: "round",
            color: "transparent",
            onClick: ()=>(0,src_utils/* downloadFile */.PE)(src),
            "aria-label": "Download image",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DownloadSimple_es/* DownloadSimpleIcon */.e, {
                size: constants/* SVG_SIZE_M */.ng3,
                "aria-hidden": "true"
            })
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
            className: "inline-flex items-start gap-2 my-2 max-w-1/2 align-top",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: src,
                    alt: alt,
                    className: (0,utils.cn)('h-auto max-w-full rounded-md', {
                        'cursor-pointer': isNinjaGenerated
                    }),
                    referrerPolicy: "no-referrer",
                    loading: "lazy",
                    decoding: "async",
                    onClick: handleClick
                }),
                isNinjaGenerated && (!isRNWebViewDownloadEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonTryOnDesktop/* ButtonTryOnDesktop */.Vg, {
                    asChild: true,
                    children: downloadButton
                }) : downloadButton)
            ]
        });
    }
};
const MemoizedMarkdownBlock = /*#__PURE__*/ (0,react.memo)(function MarkdownBlock(param) {
    let { content, components = INITIAL_COMPONENTS } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react_markdown_lib/* Markdown */.oz, {
        remarkPlugins: [
            remark_gfm_lib/* default */.A
        ],
        rehypePlugins: [
            lib/* default */.A,
            rehype_sanitize_lib/* default */.A
        ],
        components: components,
        children: content
    });
}, function propsAreEqual(prevProps, nextProps) {
    return prevProps.content === nextProps.content;
});
MemoizedMarkdownBlock.displayName = 'MemoizedMarkdownBlock';
function MarkdownComponent(param) {
    let { children, id, className } = param;
    const generatedId = (0,react.useId)();
    const blockId = id !== null && id !== void 0 ? id : generatedId;
    const blocks = (0,react.useMemo)(()=>parseMarkdownIntoBlocks(children), [
        children
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,utils.cn)('markdown', 'min-w-0 h-full py-0 pr-0 relative flex w-full flex-1 flex-col', 'prose-code:before:hidden prose-code:after:hidden', className, (markdown_module_default()).markdown),
        children: blocks.map((block, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MemoizedMarkdownBlock, {
                content: block,
                components: INITIAL_COMPONENTS
            }, "".concat(blockId, "-block-").concat(index)))
    });
}
const Markdown = /*#__PURE__*/ (0,react.memo)(MarkdownComponent);
Markdown.displayName = 'Markdown';



/***/ }),

/***/ 8035:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"container":"FileIconLabel_container__i02kC","nj-animate-horizontal-appearance-ltr-enter":"FileIconLabel_nj-animate-horizontal-appearance-ltr-enter__mh9i3","nj-animate-horizontal-appearance-ltr-enter-active":"FileIconLabel_nj-animate-horizontal-appearance-ltr-enter-active__iYndo","nj-animate-horizontal-appearance-ltr-exit":"FileIconLabel_nj-animate-horizontal-appearance-ltr-exit__bOTPu","nj-animate-horizontal-appearance-ltr-exit-active":"FileIconLabel_nj-animate-horizontal-appearance-ltr-exit-active__HzHxg","nj-animate-left-panel-width-reduce-enter":"FileIconLabel_nj-animate-left-panel-width-reduce-enter__dXbcV","nj-animate-left-panel-width-reduce-enter-active":"FileIconLabel_nj-animate-left-panel-width-reduce-enter-active__NynlK","nj-animate-left-panel-width-reduce-exit":"FileIconLabel_nj-animate-left-panel-width-reduce-exit__myXRU","nj-animate-left-panel-width-reduce-exit-active":"FileIconLabel_nj-animate-left-panel-width-reduce-exit-active__kgu4m","nj-animate-vertical-appearance-appear":"FileIconLabel_nj-animate-vertical-appearance-appear__3u_aH","nj-animate-vertical-appearance-appear-active":"FileIconLabel_nj-animate-vertical-appearance-appear-active__ZmVey","nj-animate-vertical-appearance-enter":"FileIconLabel_nj-animate-vertical-appearance-enter__dO8JH","nj-animate-vertical-appearance-enter-active":"FileIconLabel_nj-animate-vertical-appearance-enter-active__7hPBY","nj-animate-vertical-appearance-exit":"FileIconLabel_nj-animate-vertical-appearance-exit__VFKvB","nj-animate-vertical-appearance-exit-active":"FileIconLabel_nj-animate-vertical-appearance-exit-active__y5iex","fileName":"FileIconLabel_fileName__2_vcO","infinite-spinner":"FileIconLabel_infinite-spinner__fX72U","fadeIn":"FileIconLabel_fadeIn__9cQOW","blinking":"FileIconLabel_blinking__cq9Tn","movingRight":"FileIconLabel_movingRight__yDLxI"};

/***/ }),

/***/ 8078:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"SitePreview_root__Efw6M","titleContainer":"SitePreview_titleContainer__vq__H","headerLeft":"SitePreview_headerLeft__T2iId","headerRight":"SitePreview_headerRight__C4bqy","loader":"SitePreview_loader__Baj2B","header":"SitePreview_header__1nhrJ","title":"SitePreview_title__eIGuQ","subtitle":"SitePreview_subtitle__mP4_S","nj-animate-horizontal-appearance-ltr-enter":"SitePreview_nj-animate-horizontal-appearance-ltr-enter__9N0hK","nj-animate-horizontal-appearance-ltr-enter-active":"SitePreview_nj-animate-horizontal-appearance-ltr-enter-active__5KEsV","nj-animate-horizontal-appearance-ltr-exit":"SitePreview_nj-animate-horizontal-appearance-ltr-exit__agUbK","nj-animate-horizontal-appearance-ltr-exit-active":"SitePreview_nj-animate-horizontal-appearance-ltr-exit-active__YzHzr","nj-animate-left-panel-width-reduce-enter":"SitePreview_nj-animate-left-panel-width-reduce-enter__52sNl","nj-animate-left-panel-width-reduce-enter-active":"SitePreview_nj-animate-left-panel-width-reduce-enter-active__RC0ec","nj-animate-left-panel-width-reduce-exit":"SitePreview_nj-animate-left-panel-width-reduce-exit__kERHo","nj-animate-left-panel-width-reduce-exit-active":"SitePreview_nj-animate-left-panel-width-reduce-exit-active__n0K3C","nj-animate-vertical-appearance-appear":"SitePreview_nj-animate-vertical-appearance-appear___7UZG","nj-animate-vertical-appearance-appear-active":"SitePreview_nj-animate-vertical-appearance-appear-active__tcsX_","nj-animate-vertical-appearance-enter":"SitePreview_nj-animate-vertical-appearance-enter__XnXpN","nj-animate-vertical-appearance-enter-active":"SitePreview_nj-animate-vertical-appearance-enter-active__tDQt1","nj-animate-vertical-appearance-exit":"SitePreview_nj-animate-vertical-appearance-exit__NwZYm","nj-animate-vertical-appearance-exit-active":"SitePreview_nj-animate-vertical-appearance-exit-active__1r1S2","icon":"SitePreview_icon__2S77i","previewContainer":"SitePreview_previewContainer__uNDs2","iframe":"SitePreview_iframe__19Jn_","isHidden":"SitePreview_isHidden__Flgzx","infinite-spinner":"SitePreview_infinite-spinner__X7aCu","fadeIn":"SitePreview_fadeIn__1Ok3W","blinking":"SitePreview_blinking__A2s0j","movingRight":"SitePreview_movingRight__ha7B5"};

/***/ }),

/***/ 13993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NG: () => (/* binding */ CodeBlock),
/* harmony export */   sd: () => (/* binding */ CodeBlockCode),
/* harmony export */   vB: () => (/* binding */ CodeCopyButton)
/* harmony export */ });
/* unused harmony export CodeBlockGroup */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64269);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12115);
/* harmony import */ var shiki__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88453);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5379);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47615);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62717);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1627);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18720);
/* __next_internal_client_entry_do_not_use__ CodeBlockGroup,CodeBlockCode,CodeBlock,CodeCopyButton auto */ 








function CodeBlock(param) {
    let { children, className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(className),
        ...props,
        children: children
    });
}
function CodeBlockCode(param) {
    let { code, language = 'tsx', theme: propTheme, className, isStreaming = false, ...props } = param;
    const { resolvedTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__/* .useTheme */ .D)();
    const [highlightedHtml, setHighlightedHtml] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const bottomRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    // Use github-dark when in dark mode, github-light when in light mode
    const theme = propTheme || (resolvedTheme === 'dark' ? 'github-dark' : 'github-light');
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        async function highlight() {
            try {
                const cleanCode = code.replace(/^\s*\n/, '') // delete first empty line because shiki package adds a new line in the beginning
                .replace(/\n\s*$/, '');
                const html = await (0,shiki__WEBPACK_IMPORTED_MODULE_7__/* .codeToHtml */ .Yz)(cleanCode, {
                    lang: language,
                    theme
                });
                const cleanedHtml = language === 'json' ? html.replace(/(<pre[^>]*?)style="[^"]*background-color:[^;"]*;?/, '$1') : html.replace(/background-color:\s*[^;"]*;?/gi, '');
                setHighlightedHtml(cleanedHtml);
            } catch (error) {
                ;
                // Fallback to plaintext or just display without highlighting
                setHighlightedHtml("<pre><code>".concat(code, "</code></pre>"));
            }
        }
        highlight();
    }, [
        code,
        language,
        theme
    ]);
    const classNames = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)('', className);
    // SSR fallback: render plain code if not hydrated yet
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            highlightedHtml ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)('bg-transparent', className),
                dangerouslySetInnerHTML: {
                    __html: highlightedHtml
                },
                ...props
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classNames,
                ...props,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                        children: code
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                ref: bottomRef
            })
        ]
    });
}
function CodeBlockGroup(param) {
    let { children, className, ...props } = param;
    return /*#__PURE__*/ _jsx("div", {
        className: cn('', className),
        ...props,
        children: children
    });
}
function CodeCopyButton(param) {
    let { code } = param;
    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(code);
        sonner__WEBPACK_IMPORTED_MODULE_6__/* .toast */ .oR.success('Copied to clipboard');
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .$, {
        color: "transparent",
        shape: "round",
        onClick: handleCopyClick,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_8__/* .CopySimpleIcon */ .t, {
            size: _constants__WEBPACK_IMPORTED_MODULE_4__/* .SVG_SIZE_M */ .ng3,
            "aria-hidden": "true"
        })
    });
}



/***/ }),

/***/ 14665:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"attachmentWrapper":"MessageComponent_attachmentWrapper__KzMuX","undoContainer":"MessageComponent_undoContainer__beAGX","undoButton":"MessageComponent_undoButton__W3GwG","attachment":"MessageComponent_attachment__Sc_z1","attachmentTitle":"MessageComponent_attachmentTitle__nGJ3e","nj-animate-horizontal-appearance-ltr-enter":"MessageComponent_nj-animate-horizontal-appearance-ltr-enter__s4S0h","nj-animate-horizontal-appearance-ltr-enter-active":"MessageComponent_nj-animate-horizontal-appearance-ltr-enter-active__kscKi","nj-animate-horizontal-appearance-ltr-exit":"MessageComponent_nj-animate-horizontal-appearance-ltr-exit__Cd7iz","nj-animate-horizontal-appearance-ltr-exit-active":"MessageComponent_nj-animate-horizontal-appearance-ltr-exit-active__LThIg","nj-animate-left-panel-width-reduce-enter":"MessageComponent_nj-animate-left-panel-width-reduce-enter__H_COF","nj-animate-left-panel-width-reduce-enter-active":"MessageComponent_nj-animate-left-panel-width-reduce-enter-active__FFHxh","nj-animate-left-panel-width-reduce-exit":"MessageComponent_nj-animate-left-panel-width-reduce-exit__6_g2Q","nj-animate-left-panel-width-reduce-exit-active":"MessageComponent_nj-animate-left-panel-width-reduce-exit-active__PNw8K","nj-animate-vertical-appearance-appear":"MessageComponent_nj-animate-vertical-appearance-appear__jJabo","nj-animate-vertical-appearance-appear-active":"MessageComponent_nj-animate-vertical-appearance-appear-active__xbQcx","nj-animate-vertical-appearance-enter":"MessageComponent_nj-animate-vertical-appearance-enter__OdQl9","nj-animate-vertical-appearance-enter-active":"MessageComponent_nj-animate-vertical-appearance-enter-active__cKVzG","nj-animate-vertical-appearance-exit":"MessageComponent_nj-animate-vertical-appearance-exit__r14wB","nj-animate-vertical-appearance-exit-active":"MessageComponent_nj-animate-vertical-appearance-exit-active__yUb4E","attachmentContainer":"MessageComponent_attachmentContainer__JDg3C","gridWrapper":"MessageComponent_gridWrapper__8q_Qv","shouldBeDisplayedInTwoColumns":"MessageComponent_shouldBeDisplayedInTwoColumns__sF0C4","fileTaskBtn":"MessageComponent_fileTaskBtn__jVUxc","fileIconWrapper":"MessageComponent_fileIconWrapper__5BYSt","iconWrapper":"MessageComponent_iconWrapper__mp4PG","attachmentTitleWrapper":"MessageComponent_attachmentTitleWrapper__qRzxW","attachmentCaption":"MessageComponent_attachmentCaption__vJluj","checkIcon":"MessageComponent_checkIcon__6HIEK","streamingIndicator":"MessageComponent_streamingIndicator__X4Ua4","active":"MessageComponent_active__a1cgr","hidden":"MessageComponent_hidden__jopnp","light":"MessageComponent_light__2R2D7","dark":"MessageComponent_dark__cJWVj","streamingContent":"MessageComponent_streamingContent__uqp6c","withStreamingIndicator":"MessageComponent_withStreamingIndicator__QVW0w","chat-markdown":"MessageComponent_chat-markdown__2vqJH","streaming":"MessageComponent_streaming__wPDV_","infinite-spinner":"MessageComponent_infinite-spinner__SiBk0","fadeIn":"MessageComponent_fadeIn__O7Tqu","blinking":"MessageComponent_blinking__fWfaL","movingRight":"MessageComponent_movingRight__rABeH"};

/***/ }),

/***/ 16601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bs: () => (/* binding */ getToolTitle),
/* harmony export */   DS: () => (/* binding */ extractBrowserOperation),
/* harmony export */   Ey: () => (/* binding */ formatTimestamp),
/* harmony export */   FK: () => (/* binding */ extractFileContent),
/* harmony export */   Fl: () => (/* binding */ extractExitCode),
/* harmony export */   J1: () => (/* binding */ extractBrowserUrl),
/* harmony export */   SK: () => (/* binding */ extractSearchResults),
/* harmony export */   TG: () => (/* binding */ cleanUrl),
/* harmony export */   _C: () => (/* binding */ extractWebpageContent),
/* harmony export */   fz: () => (/* binding */ extractStepContent),
/* harmony export */   m$: () => (/* binding */ extractCrawlUrl),
/* harmony export */   pn: () => (/* binding */ extractFilePath),
/* harmony export */   tL: () => (/* binding */ extractYouTubeData),
/* harmony export */   wh: () => (/* binding */ unescapeString),
/* harmony export */   wi: () => (/* binding */ extractSearchQuery),
/* harmony export */   yq: () => (/* binding */ extractStrReplaceContent),
/* harmony export */   zy: () => (/* binding */ isImageContent)
/* harmony export */ });
/* unused harmony exports extractCommand, extractCommandOutput, getFileType, extractUrlsAndTitles, sanitizeJsonString, extractWebpageContentDeprecated, getToolComponent */
/* harmony import */ var _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73262);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49595);


// Helper function to format timestamp
function formatTimestamp(isoString) {
    if (!isoString) return '';
    try {
        const date = new Date(isoString);
        return isNaN(date.getTime()) ? 'Invalid date' : date.toLocaleString();
    } catch (e) {
        return 'Invalid date';
    }
}
// Get standardized tool title
function getToolTitle(toolName) {
    // Normalize tool name
    const normalizedName = toolName.toLowerCase();
    // Map of tool names to their display titles
    const toolTitles = {
        'execute-command': 'Execute Command',
        'str-replace': 'String Replace',
        'create-file': 'Create File',
        'full-file-rewrite': 'Rewrite File',
        'delete-file': 'Delete File',
        'web-search': 'Web Search',
        'crawl-webpage': 'Web Crawl',
        'scrape-webpage': 'Web Scrape',
        'browser-navigate': 'Browser Navigate',
        'browser-click': 'Browser Click',
        'browser-extract': 'Browser Extract',
        'browser-fill': 'Browser Fill',
        'browser-wait': 'Browser Wait',
        'transcribe-youtube': 'YouTube Transcribe'
    };
    // Return the mapped title or a formatted version of the name
    if (toolTitles[normalizedName]) {
        return toolTitles[normalizedName];
    }
    // For browser tools not explicitly mapped
    if (normalizedName.startsWith('browser-')) {
        const operation = normalizedName.replace('browser-', '').replace(/-/g, ' ');
        return 'Browser ' + operation.charAt(0).toUpperCase() + operation.slice(1);
    }
    // Format any other tool name
    return toolName.split('-').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
// Helper to extract command from execute-command content
function extractCommand(content) {
    if (!content) return null;
    const commandMatch = content.match(/<execute-command>([\s\S]*?)<\/execute-command>/);
    return commandMatch ? commandMatch[1].trim() : null;
}
// Helper to extract command output from tool result content
function extractCommandOutput(content) {
    if (!content) return null;
    try {
        // First try to parse the JSON content
        const parsedContent = safeJsonParse(content, null);
        if ((parsedContent === null || parsedContent === void 0 ? void 0 : parsedContent.content) && typeof (parsedContent === null || parsedContent === void 0 ? void 0 : parsedContent.content) === 'string') {
            // Look for a tool_result tag
            const toolResultMatch = parsedContent.content.match(/<tool_result>\s*<execute-command>([\s\S]*?)<\/execute-command>\s*<\/tool_result>/);
            if (toolResultMatch) {
                return toolResultMatch[1].trim();
            }
            // Look for output field in a ToolResult pattern
            const outputMatch = parsedContent.content.match(/ToolResult\(.*?output='([\s\S]*?)'.*?\)/);
            if (outputMatch) {
                return outputMatch[1];
            }
            // Return the content itself as a fallback
            return parsedContent.content;
        }
    } catch (e) {
        // If JSON parsing fails, try regex directly
        const toolResultMatch = content.match(/<tool_result>\s*<execute-command>([\s\S]*?)<\/execute-command>\s*<\/tool_result>/);
        if (toolResultMatch) {
            return toolResultMatch[1].trim();
        }
        const outputMatch = content.match(/ToolResult\(.*?output='([\s\S]*?)'.*?\)/);
        if (outputMatch) {
            return outputMatch[1];
        }
    }
    return content;
}
// Helper to extract the exit code from tool result
function extractExitCode(content) {
    if (!content) return null;
    try {
        const exitCodeMatch = content.match(/exit_code=(\d+)/);
        if (exitCodeMatch && exitCodeMatch[1]) {
            return parseInt(exitCodeMatch[1], 10);
        }
        return 0; // Assume success if no exit code found but command completed
    } catch (e) {
        return null;
    }
}
// Helper to extract file path from commands
function extractFilePath(content) {
    if (!content) return null;
    // Try to parse JSON content first
    try {
        const parsedContent = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .safeJsonParse */ .jD)(content, null);
        if ((parsedContent === null || parsedContent === void 0 ? void 0 : parsedContent.content) && typeof (parsedContent === null || parsedContent === void 0 ? void 0 : parsedContent.content) === 'string') {
            content = parsedContent.content;
        }
    } catch (e) {
    // Continue with original content if parsing fails
    }
    // Look for file_path in different formats
    const filePathMatch = content.match(/file_path=["']([\s\S]*?)["']/i) || content.match(/target_file=["']([\s\S]*?)["']/i) || content.match(/path=["']([\s\S]*?)["']/i);
    if (filePathMatch) {
        const path = filePathMatch[1].trim();
        // Handle newlines and return first line if multiple lines
        return cleanFilePath(path);
    }
    // Look for file_path in XML-like tags
    const xmlFilePathMatch = content.match(/<str-replace\s+file_path=["']([\s\S]*?)["']/i) || content.match(/<delete[^>]*file_path=["']([\s\S]*?)["']/i) || content.match(/<delete-file[^>]*>([^<]+)<\/delete-file>/i);
    if (xmlFilePathMatch) {
        return cleanFilePath(xmlFilePathMatch[1]);
    }
    // Look for file paths in delete operations in particular
    if (content.toLowerCase().includes('delete') || content.includes('delete-file')) {
        // Look for patterns like "Deleting file: path/to/file.txt"
        const deletePathMatch = content.match(/(?:delete|remove|deleting)\s+(?:file|the file)?:?\s+["']?([\w\-./\\]+\.\w+)["']?/i);
        if (deletePathMatch) return cleanFilePath(deletePathMatch[1]);
        // Look for isolated file paths with extensions
        const fileMatch = content.match(/["']?([\w\-./\\]+\.\w+)["']?/);
        if (fileMatch) return cleanFilePath(fileMatch[1]);
    }
    return null;
}
// Helper to clean and process a file path string, handling escaped chars
function cleanFilePath(path) {
    if (!path) return path;
    // Handle escaped newlines and other escaped characters
    return path.replace(/\\n/g, '\n') // Replace \n with actual newlines
    .replace(/\\t/g, '\t') // Replace \t with actual tabs
    .replace(/\\r/g, '') // Remove \r
    .replace(/\\\\/g, '\\') // Replace \\ with \
    .replace(/\\"/g, '"') // Replace \" with "
    .replace(/\\'/g, "'") // Replace \' with '
    .split('\n')[0] // Take only the first line if multiline
    .trim(); // Trim whitespace
}
// Helper to extract str-replace old and new strings
function extractStrReplaceContent(content) {
    if (!content) return {
        oldStr: null,
        newStr: null
    };
    const oldMatch = content.match(/<old_str>([\s\S]*?)<\/old_str>/);
    const newMatch = content.match(/<new_str>([\s\S]*?)<\/new_str>/);
    return {
        oldStr: oldMatch ? oldMatch[1] : null,
        newStr: newMatch ? newMatch[1] : null
    };
}
// Helper to extract though content
function extractStepContent(content) {
    if (!content) return null;
    const tagName = 'step';
    const contentMatch = content.match(new RegExp("<".concat(tagName, "[^>]*>([\\s\\S]*?)<\\/").concat(tagName, ">"), 'i'));
    if (contentMatch && contentMatch[1]) {
        return processStepContent(contentMatch[1]);
    }
    return null;
}
// Helper to process and clean step content
function processStepContent(content) {
    if (!content) return content;
    return processFileContent(content).replace(/\nThought:/, '\n**Thought:**\n\n').replace(/\nCode:/, '\n\n**Code:**\n\n');
}
// Helper to extract file content from create-file or file-rewrite
function extractFileContent(content, toolType) {
    if (!content) return null;
    const tagName = toolType === 'create-file' ? 'create-file' : 'full-file-rewrite';
    const contentMatch = content.match(new RegExp("<".concat(tagName, "[^>]*>([\\s\\S]*?)<\\/").concat(tagName, ">"), 'i'));
    if (contentMatch && contentMatch[1]) {
        return processFileContent(contentMatch[1]);
    }
    return null;
}
// Helper to process and clean file content
function processFileContent(content) {
    if (!content) return content;
    // Handle escaped characters
    return content.replace(/\\n/g, '\n') // Replace \n with actual newlines
    .replace(/\\t/g, '\t') // Replace \t with actual tabs
    .replace(/\\r/g, '') // Remove \r
    .replace(/\\\\/g, '\\') // Replace \\ with \
    .replace(/\\"/g, '"') // Replace \" with "
    .replace(/\\'/g, "'"); // Replace \' with '
}
// Helper to determine file type (for syntax highlighting)
function getFileType(filePath) {
    var _filePath_split_pop;
    const extension = ((_filePath_split_pop = filePath.split('.').pop()) === null || _filePath_split_pop === void 0 ? void 0 : _filePath_split_pop.toLowerCase()) || '';
    switch(extension){
        case 'js':
            return 'JavaScript';
        case 'ts':
            return 'TypeScript';
        case 'jsx':
        case 'tsx':
            return 'React';
        case 'py':
            return 'Python';
        case 'html':
            return 'HTML';
        case 'css':
            return 'CSS';
        case 'json':
            return 'JSON';
        case 'md':
            return 'Markdown';
        default:
            return extension.toUpperCase() || 'Text';
    }
}
// Helper to extract URL from browser navigate operations
function extractBrowserUrl(content) {
    if (!content) return null;
    const urlMatch = content.match(/url=["'](https?:\/\/[^"']+)["']/);
    return urlMatch ? urlMatch[1] : null;
}
// Helper to extract browser operation type
function extractBrowserOperation(toolName) {
    if (!toolName) return 'Browser Operation';
    const operation = toolName.replace('browser-', '').replace(/-/g, ' ');
    return operation.charAt(0).toUpperCase() + operation.slice(1);
}
// Helper to extract search query
function extractSearchQuery(content) {
    if (!content) return null;
    let contentToSearch = content; // Start with the original content
    // 3. Try parsing as JSON first, as the relevant content might be nested
    try {
        const parsedOuter = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .safeJsonParse */ .jD)(content, null);
        if (typeof (parsedOuter === null || parsedOuter === void 0 ? void 0 : parsedOuter.content) === 'string') {
            // If the outer content is JSON and has a 'content' string field,
            // use that inner content for searching the query.
            contentToSearch = parsedOuter.content;
            // Also check common JSON structures within the outer parsed object itself
            if (typeof parsedOuter.query === 'string') {
                return parsedOuter.query;
            }
            if (typeof parsedOuter.arguments === 'object' && parsedOuter.arguments !== null && typeof parsedOuter.arguments.query === 'string') {
                return parsedOuter.arguments.query;
            }
            if (Array.isArray(parsedOuter.tool_calls) && parsedOuter.tool_calls.length > 0) {
                const toolCall = parsedOuter.tool_calls[0];
                if (typeof toolCall.arguments === 'object' && toolCall.arguments !== null && typeof toolCall.arguments.query === 'string') {
                    return toolCall.arguments.query;
                }
                if (typeof toolCall.arguments === 'string') {
                    try {
                        const argsParsed = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .safeJsonParse */ .jD)(toolCall.arguments, null);
                        if (typeof (argsParsed === null || argsParsed === void 0 ? void 0 : argsParsed.query) === 'string') {
                            return argsParsed.query;
                        }
                    } catch (e) {}
                }
            }
        }
    } catch (e) {
    // If parsing fails, continue with the original content string
    }
    // Now search within contentToSearch (either original or nested content)
    // 1. Try regex for attribute within <web-search ...> tag
    const xmlQueryMatch = contentToSearch.match(/<web-search[^>]*query=[\"']([^\"']*)["'][^>]*>/i);
    if (xmlQueryMatch && xmlQueryMatch[1]) {
        return xmlQueryMatch[1].trim();
    }
    // 2. Try simple attribute regex (fallback, less specific)
    const simpleAttrMatch = contentToSearch.match(/query=[\"']([\s\S]*?)["']/i);
    if (simpleAttrMatch && simpleAttrMatch[1]) {
        return simpleAttrMatch[1].split(/[\"']/)[0].trim();
    }
    // 4. If nothing found after checking original/nested content and JSON structure, return null
    return null;
}
// Helper to extract URLs and titles with regex
function extractUrlsAndTitles(content) {
    const results = [];
    // First try to handle the case where content contains fragments of JSON objects
    // This pattern matches both complete and partial result objects
    const jsonFragmentPattern = /"?title"?\s*:\s*"([^"]+)"[^}]*"?url"?\s*:\s*"?(https?:\/\/[^",\s]+)"?|https?:\/\/[^",\s]+[",\s]*"?title"?\s*:\s*"([^"]+)"/g;
    let fragmentMatch;
    while((fragmentMatch = jsonFragmentPattern.exec(content)) !== null){
        // Extract title and URL from the matched groups
        // Groups can match in different orders depending on the fragment format
        const title = fragmentMatch[1] || fragmentMatch[3] || '';
        let url = fragmentMatch[2] || '';
        // If no URL was found in the JSON fragment pattern but we have a title,
        // try to find a URL on its own line above the title
        if (!url && title) {
            // Look backwards from the match position
            const beforeText = content.substring(0, fragmentMatch.index);
            const urlMatch = beforeText.match(/https?:\/\/[^\s",]+\s*$/);
            if (urlMatch && urlMatch[0]) {
                url = urlMatch[0].trim();
            }
        }
        if (url && title && !results.some((r)=>r.url === url)) {
            results.push({
                title,
                url
            });
        }
    }
    // If we didn't find any results with the JSON fragment approach, fall back to standard URL extraction
    if (results.length === 0) {
        // Regex to find URLs, attempting to exclude common trailing unwanted characters/tags
        const urlRegex = /https?:\/\/[^\s"<]+/g;
        let match;
        while((match = urlRegex.exec(content)) !== null){
            let url = match[0];
            // --- Start: New Truncation Logic ---
            // Find the first occurrence of potential garbage separators like /n or \n after the protocol.
            const protocolEndIndex = url.indexOf('://');
            const searchStartIndex = protocolEndIndex !== -1 ? protocolEndIndex + 3 : 0;
            const newlineIndexN = url.indexOf('/n', searchStartIndex);
            const newlineIndexSlashN = url.indexOf('\\n', searchStartIndex);
            let firstNewlineIndex = -1;
            if (newlineIndexN !== -1 && newlineIndexSlashN !== -1) {
                firstNewlineIndex = Math.min(newlineIndexN, newlineIndexSlashN);
            } else if (newlineIndexN !== -1) {
                firstNewlineIndex = newlineIndexN;
            } else if (newlineIndexSlashN !== -1) {
                firstNewlineIndex = newlineIndexSlashN;
            }
            // If a newline indicator is found, truncate the URL there.
            if (firstNewlineIndex !== -1) {
                url = url.substring(0, firstNewlineIndex);
            }
            // --- End: New Truncation Logic ---
            // Basic cleaning: remove common tags or artifacts if they are directly appended
            url = url.replace(/<\/?url>$/, '').replace(/<\/?content>$/, '').replace(/%3C$/, ''); // Remove trailing %3C (less than sign)
            // Aggressive trailing character removal (common issues)
            // Apply this *after* potential truncation
            while(/[);.,\/]$/.test(url)){
                url = url.slice(0, -1);
            }
            // Decode URI components to handle % sequences, but catch errors
            try {
                // Decode multiple times? Sometimes needed for double encoding
                url = decodeURIComponent(decodeURIComponent(url));
            } catch (e) {
                try {
                    // Try decoding once if double decoding failed
                    url = decodeURIComponent(url);
                } catch (e2) {
                    _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_0__/* .datadogLogs */ .yf.logger.warn('Failed to decode URL component:', {
                        url
                    }, e2);
                }
            }
            // Final cleaning for specific problematic sequences like ellipsis or remaining tags
            url = url.replace(/\u2026$/, ''); // Remove trailing ellipsis (…)
            url = url.replace(/<\/?url>$/, '').replace(/<\/?content>$/, ''); // Re-apply tag removal after decode
            // Try to find a title near this URL
            const urlIndex = match.index;
            const surroundingText = content.substring(Math.max(0, urlIndex - 100), urlIndex + url.length + 200);
            // Look for title patterns more robustly
            const titleMatch = surroundingText.match(/title"?\s*:\s*"([^"]+)"/i) || surroundingText.match(/Title[:\s]+([^\n<]+)/i) || surroundingText.match(/\"(.*?)\"[\s\n]*?https?:\/\//);
            let title = cleanUrl(url); // Default to cleaned URL hostname/path
            if (titleMatch && titleMatch[1].trim()) {
                title = titleMatch[1].trim();
            }
            // Avoid adding duplicates if the cleaning resulted in the same URL
            if (url && !results.some((r)=>r.url === url)) {
                results.push({
                    title: title,
                    url: url
                });
            }
        }
    }
    return results;
}
// Helper to clean URL for display
function cleanUrl(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.hostname.replace('www.', '') + (urlObj.pathname !== '/' ? urlObj.pathname : '');
    } catch (e) {
        return url;
    }
}
// Helper to extract URL for webpage crawling/scraping
function extractCrawlUrl(content) {
    if (!content) return null;
    try {
        // Try to parse content as JSON first (for the new format)
        const parsedContent = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .safeJsonParse */ .jD)(content, null);
        if (parsedContent === null || parsedContent === void 0 ? void 0 : parsedContent.content) {
            // Look for URL in the content string
            const urlMatch = parsedContent.content.match(/<(?:crawl|scrape)-webpage\s+url=["'](https?:\/\/[^"']+)["']/i);
            if (urlMatch) return urlMatch[1];
        }
    } catch (e) {
    // Fall back to direct regex search if JSON parsing fails
    }
    // Direct regex search in the content string
    const urlMatch = content.match(/<(?:crawl|scrape)-webpage\s+url=["'](https?:\/\/[^"']+)["']/i) || content.match(/url=["'](https?:\/\/[^"']+)["']/i);
    return urlMatch ? urlMatch[1] : null;
}
function tryDeepParse(value) {
    let maxDepth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
    let last = value;
    for(let i = 0; i < maxDepth; i++){
        try {
            last = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .safeJsonParse */ .jD)(last, null);
        } catch (e) {
            break;
        }
    }
    return last;
}
const unescapeString = (str)=>{
    return str.replace(/\\+n/g, '\n').replace(/\\+r/g, '\r').replace(/\\+t/g, '\t').replace(/\\u([0-9a-fA-F]{4})/g, (_, hex)=>String.fromCharCode(parseInt(hex, 16))).replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\{2,}/g, '\\').replace(/\\(?![nrtu"\'\\/bf])/g, '').trim();
};
const extractWebpageContent = (rawMessage)=>{
    if (!rawMessage) {
        return {
            title: 'Webpage Content',
            text: ''
        };
    }
    let body = rawMessage;
    try {
        const outer = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .safeJsonParse */ .jD)(rawMessage, null);
        if (typeof (outer === null || outer === void 0 ? void 0 : outer.content) === 'string') {
            body = outer.content;
        }
    } catch (err) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_0__/* .datadogLogs */ .yf.logger.warn('extractWebpageContent: rawMessage is not valid JSON:', {}, err);
    }
    const scrape = body.match(/<tool_result>\s*<(?:crawl|scrape)-webpage>([\s\S]*?)<\/(?:crawl|scrape)-webpage>/);
    if (!scrape) {
        return {
            title: 'Webpage Content',
            text: ''
        };
    }
    const inside = scrape[1];
    const single = /output='([\s\S]*?)'\s*\)/;
    const dbl = /output="([\s\S]*?)"\s*\)/;
    const outMatch = inside.match(single) || inside.match(dbl);
    if (!outMatch) {
        return {
            title: 'Webpage Content',
            text: ''
        };
    }
    const rawOutput = outMatch[1];
    const parsed = tryDeepParse(rawOutput);
    if (parsed && typeof parsed === 'object') {
        const obj = Array.isArray(parsed) ? parsed[0] : parsed;
        return {
            title: obj.Title || obj.title || '',
            text: obj.Text || obj.text || obj.content || ''
        };
    }
    const clean = unescapeString(rawOutput);
    return {
        title: 'Webpage Content',
        text: clean
    };
};
const sanitizeJsonString = (raw)=>raw.replace(/"(?:[^"\\]|\\.)*"/g, (str)=>str.replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t'));
/**
 * @deprecated
 */ function extractWebpageContentDeprecated(content) {
    if (!content) return null;
    try {
        // Try to parse the JSON content
        const parsedContent = safeJsonParse(content, null);
        // Handle case where content is in parsedContent.content field
        if ((parsedContent === null || parsedContent === void 0 ? void 0 : parsedContent.content) && typeof (parsedContent === null || parsedContent === void 0 ? void 0 : parsedContent.content) === 'string') {
            // Look for tool_result tag
            const toolResultMatch = parsedContent.content.match(/<tool_result>\s*<(?:crawl|scrape)-webpage>([\s\S]*?)<\/(?:crawl|scrape)-webpage>\s*<\/tool_result>/);
            if (toolResultMatch) {
                try {
                    // Try to parse the content inside the tags
                    const rawData = toolResultMatch[1];
                    // Look for ToolResult pattern in the raw data
                    const toolResultOutputMatch = rawData.match(/ToolResult\(.*?output='([\s\S]*?)'.*?\)/);
                    if (toolResultOutputMatch) {
                        try {
                            // If ToolResult pattern found, try to parse its output which may be a stringified JSON
                            const outputJson = safeJsonParse(toolResultOutputMatch[1].replace(/\\\\n/g, '\\n').replace(/\\\\u/g, '\\u'), null);
                            // Handle array format (first item)
                            if (Array.isArray(outputJson) && outputJson.length > 0) {
                                const item = outputJson[0];
                                return {
                                    title: item.Title || item.title || '',
                                    text: item.Text || item.text || item.content || ''
                                };
                            }
                            // Handle direct object format
                            return {
                                title: (outputJson === null || outputJson === void 0 ? void 0 : outputJson.Title) || (outputJson === null || outputJson === void 0 ? void 0 : outputJson.title) || '',
                                text: (outputJson === null || outputJson === void 0 ? void 0 : outputJson.Text) || (outputJson === null || outputJson === void 0 ? void 0 : outputJson.text) || (outputJson === null || outputJson === void 0 ? void 0 : outputJson.content) || ''
                            };
                        } catch (e) {
                            // If parsing fails, use the raw output
                            return {
                                title: 'Webpage Content',
                                text: toolResultOutputMatch[1]
                            };
                        }
                    }
                    // Try to parse as direct JSON if no ToolResult pattern
                    const crawlData = safeJsonParse(rawData, null);
                    // Handle array format
                    if (Array.isArray(crawlData) && crawlData.length > 0) {
                        const item = crawlData[0];
                        return {
                            title: item.Title || item.title || '',
                            text: item.Text || item.text || item.content || ''
                        };
                    }
                    // Handle direct object format
                    return {
                        title: crawlData.Title || crawlData.title || '',
                        text: crawlData.Text || crawlData.text || crawlData.content || ''
                    };
                } catch (e) {
                    // Fallback to basic text extraction
                    return {
                        title: 'Webpage Content',
                        text: toolResultMatch[1]
                    };
                }
            }
            // Handle ToolResult pattern in the content directly
            const toolResultOutputMatch = parsedContent.content.match(/ToolResult\(.*?output='([\s\S]*?)'.*?\)/);
            if (toolResultOutputMatch) {
                try {
                    // Parse the output which might be a stringified JSON
                    const outputJson = safeJsonParse(toolResultOutputMatch[1].replace(/\\\\n/g, '\\n').replace(/\\\\u/g, '\\u'), null);
                    // Handle array format
                    if (Array.isArray(outputJson) && outputJson.length > 0) {
                        const item = outputJson[0];
                        return {
                            title: item.Title || item.title || '',
                            text: item.Text || item.text || item.content || ''
                        };
                    }
                    // Handle direct object format
                    return {
                        title: (outputJson === null || outputJson === void 0 ? void 0 : outputJson.Title) || (outputJson === null || outputJson === void 0 ? void 0 : outputJson.title) || '',
                        text: (outputJson === null || outputJson === void 0 ? void 0 : outputJson.Text) || (outputJson === null || outputJson === void 0 ? void 0 : outputJson.text) || (outputJson === null || outputJson === void 0 ? void 0 : outputJson.content) || ''
                    };
                } catch (e) {
                    // If parsing fails, use the raw output
                    return {
                        title: 'Webpage Content',
                        text: toolResultOutputMatch[1]
                    };
                }
            }
        }
        // Direct handling of <crawl-webpage> or <scrape-webpage> format outside of content field
        const webpageMatch = content.match(/<(?:crawl|scrape)-webpage>([\s\S]*?)<\/(?:crawl|scrape)-webpage>/);
        if (webpageMatch) {
            const rawData = webpageMatch[1];
            // Look for ToolResult pattern
            const toolResultOutputMatch = rawData.match(/ToolResult\(.*?output='([\s\S]*?)'.*?\)/);
            if (toolResultOutputMatch) {
                try {
                    // Parse the output which might be a stringified JSON
                    const outputString = toolResultOutputMatch[1].replace(/\\\\n/g, '\\n').replace(/\\\\u/g, '\\u');
                    const outputJson = safeJsonParse(outputString, null);
                    // Handle array format
                    if (Array.isArray(outputJson) && outputJson.length > 0) {
                        const item = outputJson[0];
                        return {
                            title: item.Title || item.title || (item.URL ? new URL(item.URL).hostname : ''),
                            text: item.Text || item.text || item.content || ''
                        };
                    }
                    // Handle direct object format
                    return {
                        title: (outputJson === null || outputJson === void 0 ? void 0 : outputJson.Title) || (outputJson === null || outputJson === void 0 ? void 0 : outputJson.title) || '',
                        text: (outputJson === null || outputJson === void 0 ? void 0 : outputJson.Text) || (outputJson === null || outputJson === void 0 ? void 0 : outputJson.text) || (outputJson === null || outputJson === void 0 ? void 0 : outputJson.content) || ''
                    };
                } catch (e) {
                    // If parsing fails, use the raw output
                    return {
                        title: 'Webpage Content',
                        text: toolResultOutputMatch[1]
                    };
                }
            }
        }
        // Direct content extraction from parsed JSON if it's an array
        if (Array.isArray(parsedContent) && parsedContent.length > 0) {
            const item = parsedContent[0];
            return {
                title: item.Title || item.title || '',
                text: item.Text || item.text || item.content || ''
            };
        }
        // Direct content extraction from parsed JSON as object
        if (typeof parsedContent === 'object') {
            return {
                title: parsedContent.Title || parsedContent.title || 'Webpage Content',
                text: parsedContent.Text || parsedContent.text || parsedContent.content || JSON.stringify(parsedContent)
            };
        }
    } catch (e) {
        // Last resort, try to match the ToolResult pattern directly in the raw content
        const toolResultMatch = content.match(/ToolResult\(.*?output='([\s\S]*?)'.*?\)/);
        if (toolResultMatch) {
            try {
                // Try to parse the output which might be a stringified JSON
                const outputJson = safeJsonParse(toolResultMatch[1].replace(/\\\\n/g, '\\n').replace(/\\\\u/g, '\\u'), null);
                // Handle array format
                if (Array.isArray(outputJson) && outputJson.length > 0) {
                    const item = outputJson[0];
                    return {
                        title: item.Title || item.title || '',
                        text: item.Text || item.text || item.content || ''
                    };
                }
                // Handle direct object format
                return {
                    title: (outputJson === null || outputJson === void 0 ? void 0 : outputJson.Title) || (outputJson === null || outputJson === void 0 ? void 0 : outputJson.title) || '',
                    text: (outputJson === null || outputJson === void 0 ? void 0 : outputJson.Text) || (outputJson === null || outputJson === void 0 ? void 0 : outputJson.text) || (outputJson === null || outputJson === void 0 ? void 0 : outputJson.content) || ''
                };
            } catch (e) {
                // If parsing fails, use the raw output
                return {
                    title: 'Webpage Content',
                    text: toolResultMatch[1]
                };
            }
        }
        // If all else fails, return the content as-is
        if (content) {
            return {
                title: 'Webpage Content',
                text: content
            };
        }
    }
    return null;
}
// Helper to extract search results from tool response
function extractSearchResults(content) {
    if (!content) return [];
    // First try the standard JSON extraction methods
    try {
        // Try to parse JSON content first
        const parsedContent = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .safeJsonParse */ .jD)(content, null);
        if ((parsedContent === null || parsedContent === void 0 ? void 0 : parsedContent.content) && typeof (parsedContent === null || parsedContent === void 0 ? void 0 : parsedContent.content) === 'string') {
            // Look for ToolResult pattern
            const outputMatch = parsedContent.content.match(/ToolResult\(.*?output='([\s\S]*?)'\)/);
            const unescapedJsonOutput = (outputMatch === null || outputMatch === void 0 ? void 0 : outputMatch[1]) ? unescapeString((outputMatch === null || outputMatch === void 0 ? void 0 : outputMatch[1]) || '') : null;
            if (unescapedJsonOutput) {
                try {
                    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .safeJsonParse */ .jD)(unescapedJsonOutput, []);
                } catch (e) {
                    return extractUrlsAndTitles(unescapedJsonOutput);
                }
            }
            // Look for a tool_result tag
            const toolResultMatch = parsedContent.content.match(/<tool_result>\s*<web-search>([\s\S]*?)<\/web-search>\s*<\/tool_result>/);
            if (toolResultMatch) {
                // Try to parse the results array
                try {
                    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .safeJsonParse */ .jD)(toolResultMatch[1], []);
                } catch (e) {
                    // Fallback to regex extraction of URLs and titles
                    return extractUrlsAndTitles(toolResultMatch[1]);
                }
            }
            // Try to find JSON array in the content
            const jsonArrayMatch = parsedContent.content.match(/\[\s*{[\s\S]*}\s*\]/);
            if (jsonArrayMatch) {
                try {
                    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .safeJsonParse */ .jD)(jsonArrayMatch[0], []);
                } catch (e) {
                    return extractUrlsAndTitles(parsedContent.content);
                }
            }
            // If none of the above worked, try the whole content
            return extractUrlsAndTitles(parsedContent.content);
        }
    } catch (e) {
        // If JSON parsing fails, extract directly from the content
        return extractUrlsAndTitles(content);
    }
    // Last resort fallback
    return extractUrlsAndTitles(content);
}
function extractYouTubeData(content) {
    if (!content) return null;
    try {
        // First try to parse the outer JSON structure
        const parsedContent = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .cachedSafeJsonParse */ .$W)(content, null);
        if ((parsedContent === null || parsedContent === void 0 ? void 0 : parsedContent.content) && typeof parsedContent.content === 'string') {
            // Look for tool_result containing transcribe-youtube
            const toolResultMatch = parsedContent.content.match(/ToolResult\(.*?output='([\s\S]*?)'\)/);
            if (toolResultMatch) {
                // Parse the ToolResult content
                const outputJson = toolResultMatch[1];
                const m = outputJson.match(/"URL"\s*:\s*"([^"]+)"[\s\S]*"Transcript"\s*:\s*"([\s\S]*)"/);
                const outputData = {
                    URL: m[1],
                    Transcript: m[2].replace(/\\\\n/g, '\n') // Replace \\n with actual newlines
                    .replace(/\\t/g, '\t') // Replace \t with actual tabs
                    .replace(/\\r/g, '') // Remove \r
                    .replace(/\\\\/g, '\\') // Replace \\ with \
                    .replace(/\\"/g, '"') // Replace \" with "
                    .replace(/\\'/g, "'")
                };
                if (outputData.URL && outputData.Transcript) {
                    return {
                        URL: outputData.URL,
                        Transcript: outputData.Transcript
                    };
                }
            }
        }
    } catch (error) {
        // If parsing fails, use the raw output
        return {
            URL: '',
            Transcript: content
        };
    }
    return null;
}
// Function to determine which tool component to render based on the tool name
function getToolComponent(toolName) {
    if (!toolName) return 'GenericToolView';
    const normalizedName = toolName.toLowerCase();
    // Map specific tool names to their respective components
    switch(normalizedName){
        // Browser tools
        case 'browser-navigate':
        case 'browser-click':
        case 'browser-extract':
        case 'browser-fill':
        case 'browser-wait':
        case 'browser-screenshot':
            return 'BrowserToolView';
        // Command execution
        case 'execute-command':
            return 'CommandToolView';
        // File operations
        case 'create-file':
        case 'delete-file':
        case 'full-file-rewrite':
        case 'read-file':
            return 'FileOperationToolView';
        // String operations
        case 'str-replace':
            return 'StrReplaceToolView';
        // Web operations
        case 'web-search':
            return 'WebSearchToolView';
        case 'crawl-webpage':
            return 'WebCrawlToolView';
        case 'scrape-webpage':
            return 'WebScrapeToolView';
        // Data provider operations
        case 'execute-data-provider-call':
        case 'get-data-provider-endpoints':
            return 'DataProviderToolView';
        // Default
        default:
            return 'GenericToolView';
    }
}
const isImageContent = (contentNode)=>{
    var _contentNode_image_url;
    return contentNode.type === 'image_url' && typeof ((_contentNode_image_url = contentNode.image_url) === null || _contentNode_image_url === void 0 ? void 0 : _contentNode_image_url.url) === 'string';
};


/***/ }),

/***/ 17110:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"content":"DeployedWebLink_content__au7Bd","root":"DeployedWebLink_root__3lFSs","title":"DeployedWebLink_title__yXZZD","caption":"DeployedWebLink_caption__zuQ8j","nj-animate-horizontal-appearance-ltr-enter":"DeployedWebLink_nj-animate-horizontal-appearance-ltr-enter__439wI","nj-animate-horizontal-appearance-ltr-enter-active":"DeployedWebLink_nj-animate-horizontal-appearance-ltr-enter-active__yAhEE","nj-animate-horizontal-appearance-ltr-exit":"DeployedWebLink_nj-animate-horizontal-appearance-ltr-exit__ZEEPD","nj-animate-horizontal-appearance-ltr-exit-active":"DeployedWebLink_nj-animate-horizontal-appearance-ltr-exit-active__9gA1c","nj-animate-left-panel-width-reduce-enter":"DeployedWebLink_nj-animate-left-panel-width-reduce-enter__ykFOz","nj-animate-left-panel-width-reduce-enter-active":"DeployedWebLink_nj-animate-left-panel-width-reduce-enter-active__MQZuK","nj-animate-left-panel-width-reduce-exit":"DeployedWebLink_nj-animate-left-panel-width-reduce-exit__aDrnr","nj-animate-left-panel-width-reduce-exit-active":"DeployedWebLink_nj-animate-left-panel-width-reduce-exit-active__XewCY","nj-animate-vertical-appearance-appear":"DeployedWebLink_nj-animate-vertical-appearance-appear__43LhZ","nj-animate-vertical-appearance-appear-active":"DeployedWebLink_nj-animate-vertical-appearance-appear-active__APFkK","nj-animate-vertical-appearance-enter":"DeployedWebLink_nj-animate-vertical-appearance-enter__zFpJj","nj-animate-vertical-appearance-enter-active":"DeployedWebLink_nj-animate-vertical-appearance-enter-active__YHT3p","nj-animate-vertical-appearance-exit":"DeployedWebLink_nj-animate-vertical-appearance-exit__cRTRD","nj-animate-vertical-appearance-exit-active":"DeployedWebLink_nj-animate-vertical-appearance-exit-active__NZEse","icon":"DeployedWebLink_icon__n5TbQ","infinite-spinner":"DeployedWebLink_infinite-spinner__RQOXT","fadeIn":"DeployedWebLink_fadeIn__zt8ar","blinking":"DeployedWebLink_blinking__FIXPI","movingRight":"DeployedWebLink_movingRight__H3oiw"};

/***/ }),

/***/ 19852:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"scrollContainer":"ComputerProcessing_scrollContainer__7ZUvX","scrollContent":"ComputerProcessing_scrollContent__ayZO9","container":"ComputerProcessing_container__s_cgN","featureItem":"ComputerProcessing_featureItem___6YNT","loadingText":"ComputerProcessing_loadingText__W3BdZ","nj-animate-horizontal-appearance-ltr-enter":"ComputerProcessing_nj-animate-horizontal-appearance-ltr-enter__RWLPi","nj-animate-horizontal-appearance-ltr-enter-active":"ComputerProcessing_nj-animate-horizontal-appearance-ltr-enter-active__QBtaL","nj-animate-horizontal-appearance-ltr-exit":"ComputerProcessing_nj-animate-horizontal-appearance-ltr-exit__Atq25","nj-animate-horizontal-appearance-ltr-exit-active":"ComputerProcessing_nj-animate-horizontal-appearance-ltr-exit-active__jx0OI","nj-animate-left-panel-width-reduce-enter":"ComputerProcessing_nj-animate-left-panel-width-reduce-enter__EiWY9","nj-animate-left-panel-width-reduce-enter-active":"ComputerProcessing_nj-animate-left-panel-width-reduce-enter-active__CCcy_","nj-animate-left-panel-width-reduce-exit":"ComputerProcessing_nj-animate-left-panel-width-reduce-exit__Kr4EH","nj-animate-left-panel-width-reduce-exit-active":"ComputerProcessing_nj-animate-left-panel-width-reduce-exit-active__2kgw0","nj-animate-vertical-appearance-appear":"ComputerProcessing_nj-animate-vertical-appearance-appear___P4x3","nj-animate-vertical-appearance-appear-active":"ComputerProcessing_nj-animate-vertical-appearance-appear-active__COn8M","nj-animate-vertical-appearance-enter":"ComputerProcessing_nj-animate-vertical-appearance-enter__vmDlm","nj-animate-vertical-appearance-enter-active":"ComputerProcessing_nj-animate-vertical-appearance-enter-active__Clp0y","nj-animate-vertical-appearance-exit":"ComputerProcessing_nj-animate-vertical-appearance-exit__0bmch","nj-animate-vertical-appearance-exit-active":"ComputerProcessing_nj-animate-vertical-appearance-exit-active__Iu5tB","scroll-loop":"ComputerProcessing_scroll-loop__oecOc","infinite-spinner":"ComputerProcessing_infinite-spinner__0Hp39","fadeIn":"ComputerProcessing_fadeIn__upEbV","blinking":"ComputerProcessing_blinking__am_z6","movingRight":"ComputerProcessing_movingRight__zknY3"};

/***/ }),

/***/ 20421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* reexport */ UserMessageDebugComponent)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
;// ./src/components/thread/ThreadDebug/components/UserMessageDebugComponent/UserMessageDebugComponent.tsx

function UserMessageDebugComponent(param) {
    let { message } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "text-xs font-normal text-muted-foreground text-right",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                children: "ID:"
            }),
            " ",
            message.message_id,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                children: "Created At:"
            }),
            " ",
            message.created_at,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                children: "Updated At:"
            }),
            " ",
            message.updated_at
        ]
    });
}

;// ./src/components/thread/ThreadDebug/components/UserMessageDebugComponent/index.ts



/***/ }),

/***/ 23435:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"status":"ToolViewFooterStatus_status__yYIAp","container":"ToolViewFooterStatus_container__viFv2","nj-animate-horizontal-appearance-ltr-enter":"ToolViewFooterStatus_nj-animate-horizontal-appearance-ltr-enter__DxSp8","nj-animate-horizontal-appearance-ltr-enter-active":"ToolViewFooterStatus_nj-animate-horizontal-appearance-ltr-enter-active__sU0Yx","nj-animate-horizontal-appearance-ltr-exit":"ToolViewFooterStatus_nj-animate-horizontal-appearance-ltr-exit__Bk6PN","nj-animate-horizontal-appearance-ltr-exit-active":"ToolViewFooterStatus_nj-animate-horizontal-appearance-ltr-exit-active__D1dpQ","nj-animate-left-panel-width-reduce-enter":"ToolViewFooterStatus_nj-animate-left-panel-width-reduce-enter__SHKZB","nj-animate-left-panel-width-reduce-enter-active":"ToolViewFooterStatus_nj-animate-left-panel-width-reduce-enter-active__Ld1GT","nj-animate-left-panel-width-reduce-exit":"ToolViewFooterStatus_nj-animate-left-panel-width-reduce-exit__C5LKT","nj-animate-left-panel-width-reduce-exit-active":"ToolViewFooterStatus_nj-animate-left-panel-width-reduce-exit-active__LNDzJ","nj-animate-vertical-appearance-appear":"ToolViewFooterStatus_nj-animate-vertical-appearance-appear__GDT_S","nj-animate-vertical-appearance-appear-active":"ToolViewFooterStatus_nj-animate-vertical-appearance-appear-active__fokom","nj-animate-vertical-appearance-enter":"ToolViewFooterStatus_nj-animate-vertical-appearance-enter__Pj2wU","nj-animate-vertical-appearance-enter-active":"ToolViewFooterStatus_nj-animate-vertical-appearance-enter-active__a3i3Q","nj-animate-vertical-appearance-exit":"ToolViewFooterStatus_nj-animate-vertical-appearance-exit__4_fXe","nj-animate-vertical-appearance-exit-active":"ToolViewFooterStatus_nj-animate-vertical-appearance-exit-active__lTPFp","root":"ToolViewFooterStatus_root__Ka3wt","successIcon":"ToolViewFooterStatus_successIcon__GXm3R","errorIcon":"ToolViewFooterStatus_errorIcon___fi6u","loadingIcon":"ToolViewFooterStatus_loadingIcon__QLOHR","infinite-spinner":"ToolViewFooterStatus_infinite-spinner___ulND","fadeIn":"ToolViewFooterStatus_fadeIn__1mMN_","blinking":"ToolViewFooterStatus_blinking__YbpGl","movingRight":"ToolViewFooterStatus_movingRight__Za_MC"};

/***/ }),

/***/ 25928:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"FeedbackDetails_root__wyofr"};

/***/ }),

/***/ 26077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* reexport */ UserMessage)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/components/thread/UserMessage/UserMessage.module.scss
var UserMessage_module = __webpack_require__(32626);
var UserMessage_module_default = /*#__PURE__*/__webpack_require__.n(UserMessage_module);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(85203);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// ./src/components/thread/UserMessage/UserMessage.tsx
/* __next_internal_client_entry_do_not_use__ UserMessage auto */ 



const UserMessage = (param)=>{
    let { cleanContent, children, id, className } = param;
    const [showGradient, setShowGradient] = (0,react.useState)(false);
    const containerRef = (0,react.useRef)(null);
    const messageRef = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        if (!id || !messageRef.current) return;
        // Check if there's a task URL parameter that matches this message's id
        const urlParams = new URLSearchParams(window.location.search);
        const taskId = urlParams.get('task');
        if (taskId === id) {
            // Scroll to this message with a slight delay to ensure it's rendered
            setTimeout(()=>{
                var _messageRef_current;
                (_messageRef_current = messageRef.current) === null || _messageRef_current === void 0 ? void 0 : _messageRef_current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }, [
        id
    ]);
    (0,react.useEffect)(()=>{
        const container = containerRef.current;
        if (container) {
            setShowGradient(container.scrollHeight > 200);
        }
    }, [
        containerRef
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: messageRef,
        id: id,
        className: classnames_default()((UserMessage_module_default()).root, {
            [(UserMessage_module_default()).withGradient]: showGradient
        }, className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            ref: containerRef,
            className: (UserMessage_module_default()).container,
            children: [
                cleanContent && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    className: "[&>div>svg]:hidden",
                    children: cleanContent
                }),
                children
            ]
        })
    });
};

;// ./src/components/thread/UserMessage/index.ts



/***/ }),

/***/ 28420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ FileRendererToolbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38554);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22882);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36748);
/* harmony import */ var _components_ui_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62717);
/* harmony import */ var _FileRendererToolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83323);
/* harmony import */ var _FileRendererToolbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FileRendererToolbar_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47615);
/* harmony import */ var _FileIconLabel_FileIconLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48440);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64269);
/* __next_internal_client_entry_do_not_use__ FileRendererToolbar auto */ 







const FileRendererToolbar = (param)=>{
    let { fileName, showCopyButton, showSaveButton, showDownloadButton, handleCopyClick, handleSave, handleDownload, hasBorderBottom } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)((_FileRendererToolbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().toolbar), {
            [(_FileRendererToolbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hasBorderBottom)]: hasBorderBottom
        }),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_FileRendererToolbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().inner),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FileIconLabel_FileIconLabel__WEBPACK_IMPORTED_MODULE_5__/* .FileIconLabel */ .y, {
                    fileName: fileName
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_FileRendererToolbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().modeGroup),
                    children: [
                        showCopyButton && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$, {
                            color: "transparent",
                            shape: "round",
                            tooltipPosition: "top",
                            tooltipContent: "Copy text",
                            onClick: ()=>handleCopyClick(),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_7__/* .CopyIcon */ .T, {
                                size: _constants__WEBPACK_IMPORTED_MODULE_4__/* .SVG_SIZE_M */ .ng3
                            })
                        }),
                        showDownloadButton && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$, {
                            color: "transparent",
                            size: "small",
                            shape: "round",
                            tooltipPosition: "top",
                            tooltipContent: "Download",
                            onClick: ()=>handleDownload(),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_8__/* .DownloadIcon */ .s, {
                                size: _constants__WEBPACK_IMPORTED_MODULE_4__/* .SVG_SIZE_M */ .ng3
                            })
                        }),
                        showSaveButton && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$, {
                            color: "transparent",
                            size: "small",
                            shape: "round",
                            tooltipPosition: "top",
                            tooltipContent: "Save",
                            onClick: ()=>handleSave(),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_9__/* .FloppyDiskIcon */ .N, {
                                size: _constants__WEBPACK_IMPORTED_MODULE_4__/* .SVG_SIZE_M */ .ng3
                            })
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 28710:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"checkIcon":"MarkdownParagraphWithIcon_checkIcon__8LUF_"};

/***/ }),

/***/ 28773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  YB: () => (/* binding */ FileRenderer),
  KT: () => (/* binding */ getFileTypeFromExtension)
});

// UNUSED EXPORTS: getLanguageFromExtension

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/hooks/index.ts + 39 modules
var hooks = __webpack_require__(71203);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(64269);
// EXTERNAL MODULE: ./src/components/file-renderers/markdown-renderer.tsx
var markdown_renderer = __webpack_require__(65340);
// EXTERNAL MODULE: ./src/components/file-renderers/code-renderer.tsx
var code_renderer = __webpack_require__(96984);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-react-pdfviewer/src/pdfviewer/pdfviewer.component.js
var pdfviewer_component = __webpack_require__(48760);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-react-base/index.js + 6 modules
var ej2_react_base = __webpack_require__(38576);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-pdfviewer/src/pdfviewer/toolbar/toolbar.js + 1 modules
var toolbar = __webpack_require__(85008);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-pdfviewer/src/pdfviewer/magnification/magnification.js
var magnification = __webpack_require__(35716);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-pdfviewer/src/pdfviewer/navigation/page-navigation.js
var page_navigation = __webpack_require__(81840);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-pdfviewer/src/pdfviewer/annotation/annotation.js
var annotation = __webpack_require__(34412);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-pdfviewer/src/pdfviewer/annotation/link-annotation.js
var link_annotation = __webpack_require__(94789);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-pdfviewer/src/pdfviewer/bookmark-view/bookmark-view.js
var bookmark_view = __webpack_require__(90400);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-pdfviewer/src/pdfviewer/thumbnail-view/thumbnail-view.js
var thumbnail_view = __webpack_require__(1046);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-pdfviewer/src/pdfviewer/print/print.js
var print = __webpack_require__(27420);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-pdfviewer/src/pdfviewer/text-selection/text-selection.js
var text_selection = __webpack_require__(35962);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-pdfviewer/src/pdfviewer/text-search/text-search.js
var text_search = __webpack_require__(25832);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-pdfviewer/src/pdfviewer/form-fields/form-fields.js
var form_fields = __webpack_require__(46304);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-pdfviewer/src/pdfviewer/form-designer/form-designer.js
var form_designer = __webpack_require__(84996);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-pdfviewer/src/pdfviewer/organize-pdf/organize-pdf.js
var organize_pdf = __webpack_require__(49238);
// EXTERNAL MODULE: ./src/components/file-renderers/FileRendererToolbar/index.tsx
var FileRendererToolbar = __webpack_require__(28420);
// EXTERNAL MODULE: ./src/components/file-renderers/SyncfusionPdfRenderer/SyncfusionPdfRenderer.module.scss
var SyncfusionPdfRenderer_module = __webpack_require__(68291);
var SyncfusionPdfRenderer_module_default = /*#__PURE__*/__webpack_require__.n(SyncfusionPdfRenderer_module);
// EXTERNAL MODULE: ./node_modules/@datadog/browser-logs/esm/entries/main.js + 109 modules
var main = __webpack_require__(73262);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/SpinnerGap.es.js + 1 modules
var SpinnerGap_es = __webpack_require__(91679);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.mjs
var dist = __webpack_require__(5379);
;// ./src/components/file-renderers/SyncfusionPdfRenderer/SyncfusionPdfRenderer.tsx
/* __next_internal_client_entry_do_not_use__ SyncfusionPdfRenderer auto */ 










const resourceUrl = 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib';
function SyncfusionPdfRenderer(param) {
    let { binaryUrl, fileName, handleDownload } = param;
    // Workaround: This prop is called fileName but its actually filePath. Some other files have same issue
    const filePdfName = fileName === null || fileName === void 0 ? void 0 : fileName.split('/').pop();
    const ref = (0,react.useRef)(null);
    const { resolvedTheme } = (0,dist/* useTheme */.D)();
    const isDark = resolvedTheme === 'dark';
    const { isLoading } = (0,hooks/* useSyncfusionTheme */.IH)(isDark, ref);
    (0,react.useEffect)(()=>{
        if (!binaryUrl) return;
        const controller = new AbortController();
        let cancelled = false;
        const fetchPdf = async ()=>{
            try {
                var _ref_current;
                const resp = await fetch(binaryUrl, {
                    signal: controller.signal
                });
                if (!resp.ok) throw new Error("Fetch PDF failed: ".concat(resp.status));
                const buf = await resp.arrayBuffer();
                if (cancelled) return;
                (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.load(new Uint8Array(buf), fileName);
            } catch (error) {
                main/* datadogLogs */.yf.logger.error('Error loading PDF', {}, error);
            }
        };
        fetchPdf();
        return ()=>{
            var _ref_current;
            cancelled = true;
            controller.abort();
            (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.destroy();
        };
    }, [
        binaryUrl
    ]);
    (0,react.useEffect)(()=>{
        const applyResponsiveSize = ()=>{
            var _viewer_updateViewerContainer;
            const viewer = ref.current;
            if (!viewer) return;
            viewer === null || viewer === void 0 ? void 0 : (_viewer_updateViewerContainer = viewer.updateViewerContainer) === null || _viewer_updateViewerContainer === void 0 ? void 0 : _viewer_updateViewerContainer.call(viewer);
        };
        const el = document.getElementById('pdfViewer');
        const ro = new ResizeObserver(()=>applyResponsiveSize());
        if (el) {
            var _el_parentElement;
            ro.observe((_el_parentElement = el.parentElement) !== null && _el_parentElement !== void 0 ? _el_parentElement : el);
        }
        return ()=>{
            window.removeEventListener('resize', applyResponsiveSize);
            ro.disconnect();
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (SyncfusionPdfRenderer_module_default()).root,
        children: [
            isLoading && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (SyncfusionPdfRenderer_module_default()).loader,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SpinnerGap_es/* SpinnerGapIcon */.r, {
                    size: constants/* SVG_SIZE_XXL */.iWV,
                    className: "animate-spin"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FileRendererToolbar/* FileRendererToolbar */.N, {
                fileName: filePdfName,
                showDownloadButton: true,
                handleDownload: handleDownload
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(pdfviewer_component/* PdfViewerComponent */.c, {
                id: "pdfViewer",
                ref: ref,
                className: (0,utils.cn)((SyncfusionPdfRenderer_module_default()).pdfViewer, {
                    [(SyncfusionPdfRenderer_module_default()).isHidden]: isLoading
                }),
                resourceUrl: resourceUrl,
                enableToolbar: true,
                enableNavigationToolbar: false,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ej2_react_base/* Inject */.y_, {
                    services: [
                        toolbar/* Toolbar */.M,
                        magnification/* Magnification */.u,
                        page_navigation/* Navigation */.V,
                        annotation/* Annotation */.YH,
                        link_annotation/* LinkAnnotation */.U,
                        bookmark_view/* BookmarkView */.S,
                        thumbnail_view/* ThumbnailView */.y,
                        print/* Print */.a,
                        text_selection/* TextSelection */.U,
                        text_search/* TextSearch */.i,
                        form_fields/* FormFields */.C,
                        form_designer/* FormDesigner */.g,
                        organize_pdf/* PageOrganizer */.Zn
                    ]
                })
            }, binaryUrl)
        ]
    });
}

;// ./src/components/file-renderers/SyncfusionPdfRenderer/index.ts


// EXTERNAL MODULE: ./node_modules/pdfjs-dist/build/pdf.mjs
var pdf = __webpack_require__(98045);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/Document.js + 3 modules
var Document = __webpack_require__(84825);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/Page.js + 11 modules
var Page = __webpack_require__(78482);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/Page/AnnotationLayer.css
var AnnotationLayer = __webpack_require__(95057);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/Page/TextLayer.css
var TextLayer = __webpack_require__(67883);
;// ./src/components/file-renderers/pdf-renderer.tsx
/* __next_internal_client_entry_do_not_use__ PdfRenderer auto */ 




// Import styles for annotations and text layer


// Configure PDF.js worker
pdf/* GlobalWorkerOptions */.EA.workerSrc = /* asset import */ new __webpack_require__.U(__webpack_require__(15373)).toString();
function PdfRenderer(param) {
    let { url, className, fileName, showToolbar, handleDownload } = param;
    const [numPages, setNumPages] = (0,react.useState)(null);
    const [pageNumber, setPageNumber] = (0,react.useState)(1);
    const [scale, setScale] = (0,react.useState)(1.0);
    const filePdfName = fileName === null || fileName === void 0 ? void 0 : fileName.split('/').pop();
    function onDocumentLoadSuccess(param) {
        let { numPages } = param;
        setNumPages(numPages);
    }
    function changePage(offset) {
        setPageNumber((prevPageNumber)=>{
            const newPageNumber = prevPageNumber + offset;
            return newPageNumber >= 1 && newPageNumber <= (numPages || 1) ? newPageNumber : prevPageNumber;
        });
    }
    function previousPage() {
        changePage(-1);
    }
    function nextPage() {
        changePage(1);
    }
    function zoomIn() {
        setScale((prevScale)=>Math.min(prevScale + 0.2, 3.0));
    }
    function zoomOut() {
        setScale((prevScale)=>Math.max(prevScale - 0.2, 0.5));
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            showToolbar && /*#__PURE__*/ (0,jsx_runtime.jsx)(FileRendererToolbar/* FileRendererToolbar */.N, {
                fileName: filePdfName,
                showDownloadButton: true,
                handleDownload: handleDownload
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (0,utils.cn)('flex flex-col w-full h-full', className),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex-1 overflow-auto rounded-md",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Document/* default */.A, {
                            file: url,
                            onLoadSuccess: onDocumentLoadSuccess,
                            className: "flex flex-col items-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Page/* default */.A, {
                                pageNumber: pageNumber,
                                scale: scale,
                                renderTextLayer: true,
                                renderAnnotationLayer: true
                            })
                        })
                    }),
                    numPages && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-between p-2 bg-background border-t",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        onClick: zoomOut,
                                        className: "px-2 py-1 bg-muted rounded hover:bg-muted/80",
                                        disabled: scale <= 0.5,
                                        children: "-"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            Math.round(scale * 100),
                                            "%"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        onClick: zoomIn,
                                        className: "px-2 py-1 bg-muted rounded hover:bg-muted/80",
                                        disabled: scale >= 3.0,
                                        children: "+"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        onClick: previousPage,
                                        className: "px-2 py-1 bg-muted rounded hover:bg-muted/80",
                                        disabled: pageNumber <= 1,
                                        children: "Previous"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            "Page ",
                                            pageNumber,
                                            " of ",
                                            numPages
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        onClick: nextPage,
                                        className: "px-2 py-1 bg-muted rounded hover:bg-muted/80",
                                        disabled: pageNumber >= numPages,
                                        children: "Next"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(3998);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/zoom-out.js
var zoom_out = __webpack_require__(71629);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/zoom-in.js
var zoom_in = __webpack_require__(34904);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/rotate-cw.js
var rotate_cw = __webpack_require__(93141);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.js
var info = __webpack_require__(23327);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/maximize-2.js
var maximize_2 = __webpack_require__(37354);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/minimize-2.js
var minimize_2 = __webpack_require__(97624);
;// ./src/components/file-renderers/image-renderer.tsx
/* eslint-disable @next/next/no-img-element */ /* __next_internal_client_entry_do_not_use__ ImageRenderer auto */ 




function ImageRenderer(param) {
    let { url, className } = param;
    const [zoom, setZoom] = (0,react.useState)(1);
    const [rotation, setRotation] = (0,react.useState)(0);
    const [isPanning, setIsPanning] = (0,react.useState)(false);
    const [position, setPosition] = (0,react.useState)({
        x: 0,
        y: 0
    });
    const [startPanPosition, setStartPanPosition] = (0,react.useState)({
        x: 0,
        y: 0
    });
    const [isFitToScreen, setIsFitToScreen] = (0,react.useState)(true);
    const [imgLoaded, setImgLoaded] = (0,react.useState)(false);
    const [imgError, setImgError] = (0,react.useState)(false);
    const [imgInfo, setImgInfo] = (0,react.useState)(null);
    const containerRef = (0,react.useRef)(null);
    const imageRef = (0,react.useRef)(null);
    // Check if the url is an SVG
    const isSvg = (url === null || url === void 0 ? void 0 : url.toLowerCase().endsWith('.svg')) || (url === null || url === void 0 ? void 0 : url.includes('image/svg'));
    // Reset position when zoom changes
    (0,react.useEffect)(()=>{
        if (isFitToScreen) {
            setPosition({
                x: 0,
                y: 0
            });
        }
    }, [
        zoom,
        isFitToScreen
    ]);
    // Handle image load success
    const handleImageLoad = ()=>{
        setImgLoaded(true);
        setImgError(false);
        if (imageRef.current) {
            var _url_split_pop;
            setImgInfo({
                width: imageRef.current.naturalWidth,
                height: imageRef.current.naturalHeight,
                type: isSvg ? 'SVG' : ((_url_split_pop = url.split('.').pop()) === null || _url_split_pop === void 0 ? void 0 : _url_split_pop.toUpperCase()) || 'Image'
            });
        }
    };
    // Handle image load error
    const handleImageError = ()=>{
        setImgLoaded(false);
        setImgError(true);
    };
    // Functions for zooming
    const handleZoomIn = ()=>{
        setZoom((prev)=>Math.min(prev + 0.25, 3));
        setIsFitToScreen(false);
    };
    const handleZoomOut = ()=>{
        const newZoom = Math.max(zoom - 0.25, 0.5);
        setZoom(newZoom);
        if (newZoom === 0.5) {
            setIsFitToScreen(true);
        }
    };
    // Function for rotation
    const handleRotate = ()=>{
        setRotation((prev)=>(prev + 90) % 360);
    };
    // Toggle fit to screen
    const toggleFitToScreen = ()=>{
        if (isFitToScreen) {
            setZoom(1);
            setIsFitToScreen(false);
        } else {
            setZoom(0.5);
            setPosition({
                x: 0,
                y: 0
            });
            setIsFitToScreen(true);
        }
    };
    // Pan handlers
    const handleMouseDown = (e)=>{
        if (zoom > 0.5) {
            setIsPanning(true);
            setStartPanPosition({
                x: e.clientX - position.x,
                y: e.clientY - position.y
            });
        }
    };
    const handleMouseMove = (e)=>{
        if (isPanning && zoom > 0.5) {
            setPosition({
                x: e.clientX - startPanPosition.x,
                y: e.clientY - startPanPosition.y
            });
        }
    };
    const handleMouseUp = ()=>{
        setIsPanning(false);
    };
    const handleMouseLeave = ()=>{
        setIsPanning(false);
    };
    // Calculate transform styles
    const imageTransform = "scale(".concat(zoom, ") rotate(").concat(rotation, "deg)");
    const translateTransform = "translate(".concat(position.x, "px, ").concat(position.y, "px)");
    // Show image info
    const [showInfo, setShowInfo] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,utils.cn)('flex flex-col w-full h-full', className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between py-2 px-4 bg-muted/30 border-b mb-2 rounded-t-md",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                variant: "ghost",
                                size: "sm",
                                className: "h-8 w-8 p-0",
                                onClick: handleZoomOut,
                                title: "Zoom out",
                                disabled: imgError,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(zoom_out/* default */.A, {
                                    className: "h-4 w-4"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: "text-xs font-medium",
                                children: [
                                    Math.round(zoom * 100),
                                    "%"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                variant: "ghost",
                                size: "sm",
                                className: "h-8 w-8 p-0",
                                onClick: handleZoomIn,
                                title: "Zoom in",
                                disabled: imgError,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(zoom_in/* default */.A, {
                                    className: "h-4 w-4"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                variant: "ghost",
                                size: "sm",
                                className: "h-8 w-8 p-0",
                                onClick: handleRotate,
                                title: "Rotate",
                                disabled: imgError,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(rotate_cw/* default */.A, {
                                    className: "h-4 w-4"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                variant: "ghost",
                                size: "sm",
                                className: "h-8 w-8 p-0",
                                onClick: ()=>setShowInfo(!showInfo),
                                title: "Image information",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(info/* default */.A, {
                                    className: "h-4 w-4"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                variant: "ghost",
                                size: "sm",
                                className: "h-8 w-8 p-0",
                                onClick: toggleFitToScreen,
                                title: isFitToScreen ? 'Actual size' : 'Fit to screen',
                                disabled: imgError,
                                children: isFitToScreen ? /*#__PURE__*/ (0,jsx_runtime.jsx)(maximize_2/* default */.A, {
                                    className: "h-4 w-4"
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(minimize_2/* default */.A, {
                                    className: "h-4 w-4"
                                })
                            })
                        ]
                    })
                ]
            }),
            showInfo && imgInfo && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "absolute top-16 right-4 z-50 bg-background/80 backdrop-blur-sm p-3 rounded-md shadow-md border border-border text-xs",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                children: "Type:"
                            }),
                            " ",
                            imgInfo.type
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                children: "Dimensions:"
                            }),
                            " ",
                            imgInfo.width,
                            " \xd7 ",
                            imgInfo.height
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                ref: containerRef,
                className: "flex-1 overflow-hidden relative bg-grid-pattern rounded-b-md",
                onMouseDown: handleMouseDown,
                onMouseMove: handleMouseMove,
                onMouseUp: handleMouseUp,
                onMouseLeave: handleMouseLeave,
                style: {
                    cursor: isPanning ? 'grabbing' : zoom > 0.5 ? 'grab' : 'default',
                    backgroundColor: '#f5f5f5',
                    backgroundImage: 'linear-gradient(45deg, #e0e0e0 25%, transparent 25%), linear-gradient(-45deg, #e0e0e0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e0e0e0 75%), linear-gradient(-45deg, transparent 75%, #e0e0e0 75%)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                },
                children: imgError ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-col items-center justify-center h-full p-6 text-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-destructive font-medium mb-2",
                            children: "Failed to load image"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-sm text-muted-foreground",
                            children: "The image could not be displayed"
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "absolute inset-0 flex items-center justify-center",
                    style: {
                        transform: isFitToScreen ? 'none' : translateTransform,
                        transition: isPanning ? 'none' : 'transform 0.1s ease'
                    },
                    children: isSvg ? // Special handling for SVG - embed it as an object for better rendering
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("object", {
                        data: url,
                        type: "image/svg+xml",
                        className: "max-w-full max-h-full",
                        style: {
                            transform: imageTransform,
                            transition: 'transform 0.2s ease',
                            width: '100%',
                            height: '100%'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            ref: imageRef,
                            src: url,
                            alt: "SVG preview",
                            className: "max-w-full max-h-full object-contain",
                            style: {
                                transform: imageTransform,
                                transition: 'transform 0.2s ease'
                            },
                            draggable: false,
                            onLoad: handleImageLoad,
                            onError: handleImageError
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        ref: imageRef,
                        src: url,
                        alt: "Image preview",
                        className: "max-w-full max-h-full object-contain",
                        style: {
                            transform: imageTransform,
                            transition: 'transform 0.2s ease'
                        },
                        draggable: false,
                        onLoad: handleImageLoad,
                        onError: handleImageError
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/download.js
var download = __webpack_require__(39867);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/file.js
var file = __webpack_require__(92001);
// EXTERNAL MODULE: ./src/components/ui/ButtonTryOnDesktop/index.tsx + 1 modules
var ButtonTryOnDesktop = __webpack_require__(29345);
// EXTERNAL MODULE: ./src/hooks/use-rnwebview-download-enabled.ts
var use_rnwebview_download_enabled = __webpack_require__(71825);
// EXTERNAL MODULE: ./src/utils/index.ts + 9 modules
var src_utils = __webpack_require__(19482);
;// ./src/components/file-renderers/binary-renderer.tsx
/* __next_internal_client_entry_do_not_use__ BinaryRenderer auto */ 







function BinaryRenderer(param) {
    let { url, fileName, className } = param;
    var _fileName_split_pop;
    const fileExtension = ((_fileName_split_pop = fileName.split('.').pop()) === null || _fileName_split_pop === void 0 ? void 0 : _fileName_split_pop.toLowerCase()) || '';
    const isRNWebViewDownloadEnabled = (0,use_rnwebview_download_enabled/* useRNWebViewDownloadEnabled */.Q)();
    // Handle download
    const handleDownload = ()=>{
        (0,src_utils/* downloadFile */.PE)(url, fileName);
    };
    const downloadButton = /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.$, {
        variant: "default",
        className: "min-w-[150px]",
        onClick: handleDownload,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(download/* default */.A, {
                className: "h-4 w-4 mr-2"
            }),
            "Download"
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,utils.cn)('flex flex-col items-center justify-center p-10', className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col items-center text-center max-w-md",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "relative mb-6",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(file/* default */.A, {
                            className: "h-24 w-24 text-muted-foreground/50"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "absolute bottom-1 right-1 bg-background rounded-sm px-1.5 py-0.5 text-xs font-medium text-muted-foreground border",
                            children: fileExtension.toUpperCase()
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                    className: "text-lg font-semibold mb-2",
                    children: fileName
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "text-sm text-muted-foreground mb-6",
                    children: "This binary file cannot be previewed in the browser"
                }),
                !isRNWebViewDownloadEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonTryOnDesktop/* ButtonTryOnDesktop */.Vg, {
                    asChild: true,
                    children: downloadButton
                }) : downloadButton
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/xlsx/xlsx.mjs
var xlsx = __webpack_require__(4246);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-dashed.js
var circle_dashed = __webpack_require__(36835);
// EXTERNAL MODULE: ./src/components/file-renderers/ExcelRenderer/ExcelRenderer.module.scss
var ExcelRenderer_module = __webpack_require__(84831);
var ExcelRenderer_module_default = /*#__PURE__*/__webpack_require__.n(ExcelRenderer_module);
// EXTERNAL MODULE: ./src/components/ui/ExcelSpreadsheet/ExcelSpreadsheet.module.scss
var ExcelSpreadsheet_module = __webpack_require__(63360);
var ExcelSpreadsheet_module_default = /*#__PURE__*/__webpack_require__.n(ExcelSpreadsheet_module);
;// ./src/components/ui/ExcelSpreadsheet/ExcelSpreadsheet.tsx
/* __next_internal_client_entry_do_not_use__ ExcelSpreadsheet auto */ 


const cellKey = (row, col)=>{
    return "".concat(row, ":").concat(col);
};
// 0 -> A, 1 -> B, …, 25 -> Z, 26 -> AA, …
const columnLabel = (index)=>{
    let n = index + 1;
    let s = '';
    while(n > 0){
        const mod = (n - 1) % 26;
        s = String.fromCharCode(65 + mod) + s;
        n = Math.floor((n - 1) / 26);
    }
    return s;
};
const ExcelSpreadsheet = (param)=>{
    let { data, merges } = param;
    const rowCount = data.length;
    const colCount = data.reduce((max, row)=>Math.max(max, row.length), 0);
    // map each grid cell to its “owner” (top-left of a merge block or itself)
    const ownerCellMap = (0,react.useMemo)(()=>{
        const base = Array.from({
            length: rowCount
        }, (_, r)=>Array.from({
                length: colCount
            }, (_, c)=>({
                    r,
                    c
                })));
        merges.forEach((m)=>{
            for(let r = m.r1; r <= m.r2; r += 1){
                for(let c = m.c1; c <= m.c2; c += 1){
                    base[r][c] = {
                        r: m.r1,
                        c: m.c1
                    };
                }
            }
        });
        return base;
    }, [
        rowCount,
        colCount,
        merges
    ]);
    // set of cells we actually render (only owners are visible)
    const visibleOwnerKeys = (0,react.useMemo)(()=>{
        const s = new Set();
        for(let r = 0; r < rowCount; r += 1){
            for(let c = 0; c < colCount; c += 1){
                var _ownerCellMap_r;
                const owner = (_ownerCellMap_r = ownerCellMap[r]) === null || _ownerCellMap_r === void 0 ? void 0 : _ownerCellMap_r[c];
                if (owner && owner.r === r && owner.c === c) {
                    s.add(cellKey(r, c));
                }
            }
        }
        return s;
    }, [
        ownerCellMap,
        rowCount,
        colCount
    ]);
    // owner -> {rowSpan, colSpan}
    const spanByOwner = (0,react.useMemo)(()=>{
        const map = new Map();
        merges.forEach((m)=>{
            map.set(cellKey(m.r1, m.c1), {
                rs: m.r2 - m.r1 + 1,
                cs: m.c2 - m.c1 + 1
            });
        });
        return map;
    }, [
        merges
    ]);
    // fast lookup: which owners are merged (span > 1)
    const mergedOwnerKeys = (0,react.useMemo)(()=>{
        const s = new Set();
        merges.forEach((m)=>s.add(cellKey(m.r1, m.c1)));
        return s;
    }, [
        merges
    ]);
    const [isDragging, setIsDragging] = (0,react.useState)(false);
    const [anchorCell, setAnchorCell] = (0,react.useState)(null);
    const [focusCell, setFocusCell] = (0,react.useState)(null);
    const containerRef = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        const handleMouseUp = ()=>setIsDragging(false);
        window.addEventListener('mouseup', handleMouseUp);
        return ()=>window.removeEventListener('mouseup', handleMouseUp);
    }, []);
    const normalizeToOwner = (r, c)=>{
        var _ownerCellMap_r;
        var _ownerCellMap_r_c;
        return (_ownerCellMap_r_c = (_ownerCellMap_r = ownerCellMap[r]) === null || _ownerCellMap_r === void 0 ? void 0 : _ownerCellMap_r[c]) !== null && _ownerCellMap_r_c !== void 0 ? _ownerCellMap_r_c : {
            r,
            c
        };
    };
    const handleCellMouseDown = (r, c)=>{
        const owner = normalizeToOwner(r, c);
        setAnchorCell(owner);
        setFocusCell(owner);
        setIsDragging(true);
    };
    const handleRowHeaderMouseDown = (r)=>{
        setAnchorCell({
            r,
            c: 0
        });
        setFocusCell({
            r,
            c: colCount - 1
        });
        setIsDragging(true);
    };
    const handleColHeaderMouseDown = (c)=>{
        setAnchorCell({
            r: 0,
            c
        });
        setFocusCell({
            r: rowCount - 1,
            c
        });
        setIsDragging(true);
    };
    // track mouse on the container for robust selection while moving fast
    const handleContainerMouseMove = (e)=>{
        if (!isDragging || !anchorCell) {
            return;
        }
        const el = e.target.closest('[data-r][data-c]');
        if (!el) {
            return;
        }
        const r = Number(el.getAttribute('data-r'));
        const c = Number(el.getAttribute('data-c'));
        if (Number.isNaN(r) || Number.isNaN(c)) {
            return;
        }
        setFocusCell(normalizeToOwner(r, c));
    };
    const selectionRect = (0,react.useMemo)(()=>{
        if (!anchorCell || !focusCell) {
            return null;
        }
        const r1 = Math.min(anchorCell.r, focusCell.r);
        const r2 = Math.max(anchorCell.r, focusCell.r);
        const c1 = Math.min(anchorCell.c, focusCell.c);
        const c2 = Math.max(anchorCell.c, focusCell.c);
        return {
            r1,
            r2,
            c1,
            c2
        };
    }, [
        anchorCell,
        focusCell
    ]);
    const isRowSelected = (r)=>!!selectionRect && r >= selectionRect.r1 && r <= selectionRect.r2;
    const isColSelected = (c)=>!!selectionRect && c >= selectionRect.c1 && c <= selectionRect.c2;
    const isCellSelected = (r, c)=>!!selectionRect && r >= selectionRect.r1 && r <= selectionRect.r2 && c >= selectionRect.c1 && c <= selectionRect.c2;
    // copy selection to clipboard as TSV on Cmd/Ctrl+C
    (0,react.useEffect)(()=>{
        const handleKeyDown = (e)=>{
            if (!selectionRect) {
                return;
            }
            const isMeta = navigator.platform.includes('Mac') ? e.metaKey : e.ctrlKey;
            if (!isMeta || e.key.toLowerCase() !== 'c') {
                return;
            }
            e.preventDefault();
            const lines = [];
            for(let r = selectionRect.r1; r <= selectionRect.r2; r += 1){
                const row = [];
                for(let c = selectionRect.c1; c <= selectionRect.c2; c += 1){
                    var _data_r;
                    var _data_r_c;
                    row.push((_data_r_c = (_data_r = data[r]) === null || _data_r === void 0 ? void 0 : _data_r[c]) !== null && _data_r_c !== void 0 ? _data_r_c : '');
                }
                lines.push(row.join('\t'));
            }
            void navigator.clipboard.writeText(lines.join('\n'));
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        selectionRect,
        data
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        ref: containerRef,
        className: (ExcelSpreadsheet_module_default()).root,
        style: {
            ['--excel-cols']: colCount
        },
        onMouseMove: handleContainerMouseMove,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (ExcelSpreadsheet_module_default()).cornerCell,
                style: {
                    gridRow: '1 / span 1',
                    gridColumn: '1 / span 1'
                }
            }),
            Array.from({
                length: colCount
            }).map((_, c)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "".concat((ExcelSpreadsheet_module_default()).headerCell, " ").concat(isColSelected(c) ? (ExcelSpreadsheet_module_default()).headerSelected : ''),
                    style: {
                        gridRow: '1 / span 1',
                        gridColumn: "".concat(c + 2, " / span 1")
                    },
                    onMouseDown: ()=>handleColHeaderMouseDown(c),
                    children: columnLabel(c)
                }, "col-header-".concat(c))),
            Array.from({
                length: rowCount
            }).map((_, r)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "".concat((ExcelSpreadsheet_module_default()).rowHeaderCell, " ").concat(isRowSelected(r) ? (ExcelSpreadsheet_module_default()).headerSelected : ''),
                            style: {
                                gridRow: "".concat(r + 2, " / span 1"),
                                gridColumn: '1 / span 1'
                            },
                            onMouseDown: ()=>handleRowHeaderMouseDown(r),
                            children: r + 1
                        }),
                        Array.from({
                            length: colCount
                        }).map((__, c)=>{
                            var _data_r, _data_r1;
                            if (!visibleOwnerKeys.has(cellKey(r, c))) return null;
                            const span = spanByOwner.get(cellKey(r, c)) || {
                                rs: 1,
                                cs: 1
                            };
                            const selected = isCellSelected(r, c);
                            const isMergedOwner = mergedOwnerKeys.has(cellKey(r, c)) && (span.rs > 1 || span.cs > 1);
                            var _data_r_c, _data_r_c1;
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: [
                                    (ExcelSpreadsheet_module_default()).cell,
                                    selected ? (ExcelSpreadsheet_module_default()).cellSelected : '',
                                    isMergedOwner ? (ExcelSpreadsheet_module_default()).center : ''
                                ].join(' '),
                                style: {
                                    gridRow: "".concat(r + 2, " / span ").concat(span.rs),
                                    gridColumn: "".concat(c + 2, " / span ").concat(span.cs)
                                },
                                "data-r": r,
                                "data-c": c,
                                onMouseDown: ()=>handleCellMouseDown(r, c),
                                title: (_data_r_c = (_data_r = data[r]) === null || _data_r === void 0 ? void 0 : _data_r[c]) !== null && _data_r_c !== void 0 ? _data_r_c : '',
                                children: (_data_r_c1 = (_data_r1 = data[r]) === null || _data_r1 === void 0 ? void 0 : _data_r1[c]) !== null && _data_r_c1 !== void 0 ? _data_r_c1 : ''
                            }, "cell-".concat(r, "-").concat(c));
                        })
                    ]
                }, "row-".concat(r)))
        ]
    });
};

;// ./src/components/ui/ExcelSpreadsheet/index.ts


;// ./src/components/file-renderers/ExcelRenderer/ExcelRenderer.tsx
/* __next_internal_client_entry_do_not_use__ ExcelRenderer auto */ 






const ExcelRenderer = (param)=>{
    let { url, readOnly = true } = param;
    const [data, setData] = (0,react.useState)(null);
    const [merges, setMerges] = (0,react.useState)(null);
    const [loading, setLoading] = (0,react.useState)(true);
    /// Docs: https://docs.sheetjs.com/docs/api/utilities/range#decoding-ranges
    // decode_range -> returns the coordinates of the start and end cells for the data range in an Excel sheet
    // s: startCell (top-left corner)
    // e: endCell (bottom-right corner)
    // r: row index (0-based)
    // c: column index (0-based)
    (0,react.useEffect)(()=>{
        let cancelled = false;
        const loadExcel = async ()=>{
            try {
                // Fetch the Excel file from the provided URL
                const res = await fetch(url);
                const blob = await res.blob();
                const buf = await blob.arrayBuffer();
                // Read the file using SheetJS
                const wb = (0,xlsx/* read */.LF)(buf, {
                    type: 'array'
                });
                const sheet = wb.Sheets[wb.SheetNames[0]];
                const ref = sheet['!ref'];
                if (!ref) {
                    throw new Error('No sheet data');
                }
                // Decode the range into start and end coordinates
                const { s: { r: startRowIndex, c: startColIndex }, e: { r: endRowIndex, c: endColIndex } } = xlsx/* utils */.Wp.decode_range(ref);
                // Convert each cell into a 2D array of strings
                const rows = Array.from({
                    length: endRowIndex - startRowIndex + 1
                }, (_, rowOffset)=>{
                    const rowIndex = startRowIndex + rowOffset;
                    return Array.from({
                        length: endColIndex - startColIndex + 1
                    }, (_, colOffset)=>{
                        const colIndex = startColIndex + colOffset;
                        const addr = xlsx/* utils */.Wp.encode_cell({
                            r: rowIndex,
                            c: colIndex
                        }); // cell address, e.g., "B2"
                        const cell = sheet[addr];
                        const v = cell === null || cell === void 0 ? void 0 : cell.v;
                        return v == null ? '' : String(v); // return empty string if cell is null/undefined
                    });
                });
                // Normalize merged cell definitions (if any)
                const mergesNorm = (sheet['!merges'] || []).map((m)=>({
                        r1: m.s.r,
                        c1: m.s.c,
                        r2: m.e.r,
                        c2: m.e.c
                    }));
                if (!cancelled) {
                    setData(rows);
                    setMerges(mergesNorm);
                }
            } catch (e) {
                main/* datadogLogs */.yf.logger.error('[ExcelRenderer] parse error:', {}, e);
                if (!cancelled) {
                    setData(null);
                    setMerges(null);
                }
            } finally{
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };
        loadExcel();
        return ()=>{
            cancelled = true;
        };
    }, [
        url
    ]);
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (ExcelRenderer_module_default()).loader,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_dashed/* default */.A, {
                className: (ExcelRenderer_module_default()).spinner
            })
        });
    }
    if (!data) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (ExcelRenderer_module_default()).error,
            children: "Failed to load Excel file"
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (ExcelRenderer_module_default()).root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExcelSpreadsheet, {
            data: data,
            merges: merges || [],
            readOnly: readOnly
        })
    });
};

;// ./src/components/file-renderers/ExcelRenderer/index.ts


// EXTERNAL MODULE: ./src/components/file-renderers/HTMLRenderer/index.ts + 3 modules
var HTMLRenderer = __webpack_require__(96960);
// EXTERNAL MODULE: ./src/components/file-renderers/SyncfusionExcelRenderer/index.ts + 2 modules
var SyncfusionExcelRenderer = __webpack_require__(87736);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-react-richtexteditor/src/rich-text-editor/richtexteditor.component.js + 19 modules
var richtexteditor_component = __webpack_require__(3689);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-richtexteditor/src/rich-text-editor/actions/html-editor.js + 22 modules
var html_editor = __webpack_require__(32112);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-richtexteditor/src/rich-text-editor/actions/toolbar.js + 1 modules
var actions_toolbar = __webpack_require__(85805);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-richtexteditor/src/rich-text-editor/renderer/link-module.js + 1 modules
var link_module = __webpack_require__(76201);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-richtexteditor/src/rich-text-editor/actions/quick-toolbar.js + 2 modules
var quick_toolbar = __webpack_require__(64943);
// EXTERNAL MODULE: ./node_modules/marked/lib/marked.esm.js
var marked_esm = __webpack_require__(64558);
// EXTERNAL MODULE: ./node_modules/turndown/lib/turndown.browser.es.js
var turndown_browser_es = __webpack_require__(27001);
// EXTERNAL MODULE: ./node_modules/turndown-plugin-gfm/lib/turndown-plugin-gfm.es.js
var turndown_plugin_gfm_es = __webpack_require__(60387);
// EXTERNAL MODULE: ./src/components/file-renderers/SyncfusionMarkdownRenderer/SyncfusionMarkdownRenderer.module.scss
var SyncfusionMarkdownRenderer_module = __webpack_require__(95059);
var SyncfusionMarkdownRenderer_module_default = /*#__PURE__*/__webpack_require__.n(SyncfusionMarkdownRenderer_module);
;// ./src/components/file-renderers/SyncfusionMarkdownRenderer/constants.ts
const FLOPPY_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n<path d="M17.1336 5.62501L14.375 2.86641C14.2593 2.74983 14.1217 2.65741 13.97 2.59451C13.8183 2.5316 13.6556 2.49948 13.4914 2.50001H3.75C3.41848 2.50001 3.10054 2.6317 2.86612 2.86612C2.6317 3.10054 2.5 3.41849 2.5 3.75001V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V6.5086C17.5005 6.34439 17.4684 6.18171 17.4055 6.03002C17.3426 5.87833 17.2502 5.74066 17.1336 5.62501ZM13.125 16.25H6.875V11.875H13.125V16.25ZM16.25 16.25H14.375V11.875C14.375 11.5435 14.2433 11.2255 14.0089 10.9911C13.7745 10.7567 13.4565 10.625 13.125 10.625H6.875C6.54348 10.625 6.22554 10.7567 5.99112 10.9911C5.7567 11.2255 5.625 11.5435 5.625 11.875V16.25H3.75V3.75001H13.4914L16.25 6.5086V16.25ZM12.5 5.62501C12.5 5.79077 12.4342 5.94974 12.3169 6.06695C12.1997 6.18416 12.0408 6.25001 11.875 6.25001H7.5C7.33424 6.25001 7.17527 6.18416 7.05806 6.06695C6.94085 5.94974 6.875 5.79077 6.875 5.62501C6.875 5.45925 6.94085 5.30027 7.05806 5.18306C7.17527 5.06585 7.33424 5.00001 7.5 5.00001H11.875C12.0408 5.00001 12.1997 5.06585 12.3169 5.18306C12.4342 5.30027 12.5 5.45925 12.5 5.62501Z" fill="currentColor" />\n</svg>';
const toolbarItems = [
    'Undo',
    'Redo',
    '|',
    'Bold',
    'Italic',
    'Underline',
    'CreateLink',
    '|',
    'UnorderedList',
    'OrderedList',
    '|'
];

;// ./src/components/file-renderers/SyncfusionMarkdownRenderer/SyncfusionMarkdownRenderer.tsx
/* __next_internal_client_entry_do_not_use__ SyncfusionMarkdownRenderer auto */ 













marked_esm/* marked */.xI.setOptions({
    gfm: true,
    breaks: false
});
const td = new turndown_browser_es/* default */.A({
    headingStyle: 'atx',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced'
});
td.use(turndown_plugin_gfm_es/* gfm */.Te);
const SyncfusionMarkdownRenderer = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { value, fileName, onSave, onCopy, onDownload } = param;
    const fileMdName = fileName === null || fileName === void 0 ? void 0 : fileName.split('/').pop();
    const rteRef = (0,react.useRef)(null);
    const [isReady, setIsReady] = (0,react.useState)(false);
    const { resolvedTheme } = (0,dist/* useTheme */.D)();
    const isDark = resolvedTheme === 'dark';
    const { isLoading } = (0,hooks/* useSyncfusionTheme */.IH)(isDark, rteRef);
    const disposers = (0,react.useRef)([]);
    const linkHandlerRef = (0,react.useRef)(null);
    const boundPanelRef = (0,react.useRef)(null);
    const getEditorHtml = (0,react.useCallback)(()=>{
        var _rte_contentModule_getEditPanel, _rte_contentModule;
        const rte = rteRef.current;
        const panel = rte === null || rte === void 0 ? void 0 : (_rte_contentModule = rte.contentModule) === null || _rte_contentModule === void 0 ? void 0 : (_rte_contentModule_getEditPanel = _rte_contentModule.getEditPanel) === null || _rte_contentModule_getEditPanel === void 0 ? void 0 : _rte_contentModule_getEditPanel.call(_rte_contentModule);
        var _panel_innerHTML, _ref;
        return (_ref = (_panel_innerHTML = panel === null || panel === void 0 ? void 0 : panel.innerHTML) !== null && _panel_innerHTML !== void 0 ? _panel_innerHTML : rte === null || rte === void 0 ? void 0 : rte.value) !== null && _ref !== void 0 ? _ref : '';
    }, [
        rteRef
    ]);
    (0,react.useImperativeHandle)(ref, ()=>({
            getHtml: ()=>getEditorHtml(),
            getMarkdown: ()=>{
                const text = getEditorHtml();
                return td.turndown(text);
            }
        }), [
        getEditorHtml
    ]);
    // Keep synced with the latest value of the editor
    (0,react.useEffect)(()=>{
        var _rte_contentModule_getEditPanel, _rte_contentModule;
        const rte = rteRef.current;
        if (!rte) return;
        const html = value ? String(marked_esm/* marked */.xI.parse(value)) : '';
        const panel = (_rte_contentModule = rte.contentModule) === null || _rte_contentModule === void 0 ? void 0 : (_rte_contentModule_getEditPanel = _rte_contentModule.getEditPanel) === null || _rte_contentModule_getEditPanel === void 0 ? void 0 : _rte_contentModule_getEditPanel.call(_rte_contentModule);
        var _panel_innerHTML, _ref;
        const current = (_ref = (_panel_innerHTML = panel === null || panel === void 0 ? void 0 : panel.innerHTML) !== null && _panel_innerHTML !== void 0 ? _panel_innerHTML : rte.value) !== null && _ref !== void 0 ? _ref : '';
        if (current !== html) {
            var _rte_dataBind;
            rte.value = html;
            (_rte_dataBind = rte.dataBind) === null || _rte_dataBind === void 0 ? void 0 : _rte_dataBind.call(rte);
        }
    }, [
        value
    ]);
    (0,react.useEffect)(()=>{
        var _rteRef_current_toolbarModule_enableToolbarItem, _rteRef_current_toolbarModule, _rteRef_current;
        if (!isReady || isLoading) return;
        (_rteRef_current = rteRef.current) === null || _rteRef_current === void 0 ? void 0 : (_rteRef_current_toolbarModule = _rteRef_current.toolbarModule) === null || _rteRef_current_toolbarModule === void 0 ? void 0 : (_rteRef_current_toolbarModule_enableToolbarItem = _rteRef_current_toolbarModule.enableToolbarItem) === null || _rteRef_current_toolbarModule_enableToolbarItem === void 0 ? void 0 : _rteRef_current_toolbarModule_enableToolbarItem.call(_rteRef_current_toolbarModule, [
            'CreateLink'
        ], true);
    }, [
        isReady,
        isLoading
    ]);
    // Enable clickable links
    (0,react.useEffect)(()=>{
        var _rte_contentModule_getEditPanel, _rte_contentModule;
        const rte = rteRef.current;
        if (!rte || isLoading || !isReady) return;
        const panel = (_rte_contentModule = rte.contentModule) === null || _rte_contentModule === void 0 ? void 0 : (_rte_contentModule_getEditPanel = _rte_contentModule.getEditPanel) === null || _rte_contentModule_getEditPanel === void 0 ? void 0 : _rte_contentModule_getEditPanel.call(_rte_contentModule);
        if (!panel) return;
        if (boundPanelRef.current && boundPanelRef.current !== panel && linkHandlerRef.current) {
            boundPanelRef.current.removeEventListener('click', linkHandlerRef.current, true);
            boundPanelRef.current = null;
        }
        if (!linkHandlerRef.current) {
            linkHandlerRef.current = (e)=>{
                var _e_stopImmediatePropagation;
                const target = e.target;
                const anchor = target === null || target === void 0 ? void 0 : target.closest('a[href]');
                if (!anchor) return;
                const sel = window.getSelection();
                if (sel && sel.type === 'Range' && sel.toString()) return;
                const href = anchor.getAttribute('href') || '';
                if (!href || href === '#') return;
                e.preventDefault();
                e.stopPropagation();
                (_e_stopImmediatePropagation = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation === void 0 ? void 0 : _e_stopImmediatePropagation.call(e);
                window.open(anchor.href, '_blank', 'noopener,noreferrer');
            };
        }
        panel.addEventListener('click', linkHandlerRef.current, true);
        boundPanelRef.current = panel;
        return ()=>{
            if (panel && linkHandlerRef.current) {
                panel.removeEventListener('click', linkHandlerRef.current, true);
                if (boundPanelRef.current === panel) boundPanelRef.current = null;
            }
        };
    }, [
        isReady,
        isLoading,
        isDark
    ]);
    const onCreated = ()=>{
        var _rte_focusIn;
        const rte = rteRef.current;
        if (!rte) return;
        (_rte_focusIn = rte.focusIn) === null || _rte_focusIn === void 0 ? void 0 : _rte_focusIn.call(rte);
        setIsReady(true);
    };
    (0,react.useEffect)(()=>()=>{
            for (const disposer of disposers.current)disposer();
            disposers.current = [];
            if (boundPanelRef.current && linkHandlerRef.current) {
                boundPanelRef.current.removeEventListener('click', linkHandlerRef.current, true);
                boundPanelRef.current = null;
            }
        }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (SyncfusionMarkdownRenderer_module_default()).root,
        children: [
            (isLoading || !isReady) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (SyncfusionMarkdownRenderer_module_default()).loader,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SpinnerGap_es/* SpinnerGapIcon */.r, {
                    size: constants/* SVG_SIZE_XXL */.iWV,
                    className: "animate-spin"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "shrink-0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileRendererToolbar/* FileRendererToolbar */.N, {
                    fileName: fileMdName,
                    showCopyButton: true,
                    showSaveButton: true,
                    showDownloadButton: true,
                    handleSave: onSave,
                    handleCopyClick: onCopy,
                    handleDownload: onDownload
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex-1 basis-auto min-h-0 overflow-hidden",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(richtexteditor_component/* RichTextEditorComponent */.q, {
                    ref: rteRef,
                    className: (0,utils.cn)((SyncfusionMarkdownRenderer_module_default()).editor, {
                        [(SyncfusionMarkdownRenderer_module_default()).isHidden]: isLoading || !isReady
                    }),
                    editorMode: "HTML",
                    created: onCreated,
                    height: "100%",
                    toolbarSettings: {
                        items: toolbarItems
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ej2_react_base/* Inject */.y_, {
                        services: [
                            html_editor/* HtmlEditor */.D,
                            actions_toolbar/* Toolbar */.M,
                            link_module/* Link */.N,
                            quick_toolbar/* QuickToolbar */.v
                        ]
                    })
                })
            })
        ]
    });
});
SyncfusionMarkdownRenderer.displayName = 'SyncfusionMarkdownRenderer';

;// ./src/components/file-renderers/SyncfusionMarkdownRenderer/index.ts



// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-react-documenteditor/src/document-editor-container/documenteditorcontainer.component.js + 10 modules
var documenteditorcontainer_component = __webpack_require__(70558);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-documenteditor/src/document-editor-container/tool-bar/tool-bar.js
var tool_bar = __webpack_require__(26125);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-documenteditor/src/document-editor-container/ribbon/ribbon.js + 71 modules
var ribbon = __webpack_require__(92768);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/singleton/apis/fetchAuthSession.mjs
var fetchAuthSession = __webpack_require__(42917);
// EXTERNAL MODULE: ./src/lib/envs.ts
var envs = __webpack_require__(68276);
// EXTERNAL MODULE: ./src/components/file-renderers/SyncfusionWordRenderer/SyncfusionWordRenderer.module.scss
var SyncfusionWordRenderer_module = __webpack_require__(43077);
var SyncfusionWordRenderer_module_default = /*#__PURE__*/__webpack_require__.n(SyncfusionWordRenderer_module);
// EXTERNAL MODULE: ./node_modules/sonner/dist/index.mjs
var sonner_dist = __webpack_require__(18720);
;// ./src/components/file-renderers/SyncfusionWordRenderer/SyncfusionWordRenderer.tsx















documenteditorcontainer_component/* DocumentEditorContainerComponent */.B.Inject(tool_bar/* Toolbar */.M, ribbon/* Ribbon */.f);
const SyncfusionWordRenderer = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { binaryUrl, selectedFilePath, handleSave, handleDownload } = param;
    const docRef = (0,react.useRef)(null);
    const fileName = selectedFilePath === null || selectedFilePath === void 0 ? void 0 : selectedFilePath.split('/').pop();
    const [token, setToken] = (0,react.useState)(null);
    const [editorReady, setEditorReady] = (0,react.useState)(false);
    (0,react.useImperativeHandle)(ref, ()=>({
            getValue: async ()=>{
                const blob = await docRef.current.documentEditor.saveAsBlob('Docx');
                return blob;
            }
        }), []);
    const { resolvedTheme } = (0,dist/* useTheme */.D)();
    const isDark = resolvedTheme === 'dark';
    const { isLoading } = (0,hooks/* useSyncfusionTheme */.IH)(isDark, docRef);
    // Limitation Word Component: The component needs manual resizing to adapt different screens
    (0,react.useEffect)(()=>{
        const applyResponsiveSize = ()=>{
            var // container resize
            _c_resize, // editor resize
            _c_documentEditor_resize, _c_documentEditor, // optional: fit the page to the available width
            _c_documentEditor_fitPage, _c_documentEditor1;
            const c = docRef.current;
            c === null || c === void 0 ? void 0 : (_c_resize = c.resize) === null || _c_resize === void 0 ? void 0 : _c_resize.call(c);
            c === null || c === void 0 ? void 0 : (_c_documentEditor = c.documentEditor) === null || _c_documentEditor === void 0 ? void 0 : (_c_documentEditor_resize = _c_documentEditor.resize) === null || _c_documentEditor_resize === void 0 ? void 0 : _c_documentEditor_resize.call(_c_documentEditor);
            c === null || c === void 0 ? void 0 : (_c_documentEditor1 = c.documentEditor) === null || _c_documentEditor1 === void 0 ? void 0 : (_c_documentEditor_fitPage = _c_documentEditor1.fitPage) === null || _c_documentEditor_fitPage === void 0 ? void 0 : _c_documentEditor_fitPage.call(_c_documentEditor1, 'PageWidth');
        };
        applyResponsiveSize();
        const cancelled = false;
        window.addEventListener('resize', applyResponsiveSize);
        const el = document.getElementById('container');
        const ro = new ResizeObserver(()=>applyResponsiveSize());
        if (el) {
            var _el_parentElement;
            ro.observe((_el_parentElement = el.parentElement) !== null && _el_parentElement !== void 0 ? _el_parentElement : el);
        }
        return ()=>{
            window.removeEventListener('resize', applyResponsiveSize);
            ro.disconnect();
        };
    }, []);
    (0,react.useEffect)(()=>{
        let cancelled = false;
        (async ()=>{
            try {
                var _session_tokens_accessToken, _session_tokens;
                const session = await (0,fetchAuthSession/* fetchAuthSession */.$)();
                var _session_tokens_accessToken_toString;
                const authToken = (_session_tokens_accessToken_toString = session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : (_session_tokens_accessToken = _session_tokens.accessToken) === null || _session_tokens_accessToken === void 0 ? void 0 : _session_tokens_accessToken.toString()) !== null && _session_tokens_accessToken_toString !== void 0 ? _session_tokens_accessToken_toString : null;
                if (!cancelled) {
                    setToken(authToken);
                }
            } catch (error) {
                sonner_dist/* toast */.oR.error('Failed to open document.');
                main/* datadogLogs */.yf.logger.error('Failed to fetch auth session', {}, error);
            }
        })();
        return ()=>{
            cancelled = true;
        };
    }, []);
    const headers = token ? [
        {
            Authorization: "Bearer ".concat(token)
        }
    ] : [];
    const loadDocument = (0,react.useCallback)(async ()=>{
        var _docRef_current;
        if (!binaryUrl || !token) return;
        const editor = (_docRef_current = docRef.current) === null || _docRef_current === void 0 ? void 0 : _docRef_current.documentEditor;
        if (!editor) return;
        try {
            const response = await fetch(binaryUrl, {
                headers: {
                    Authorization: "Bearer ".concat(token)
                }
            });
            if (!response.ok) throw new Error("Failed to fetch document: ".concat(response.status));
            const blob = await response.blob();
            const reader = new FileReader();
            reader.onload = ()=>{
                const base64 = reader.result.split(',')[1];
                editor.open(base64);
            };
            reader.readAsDataURL(blob);
        } catch (error) {
            sonner_dist/* toast */.oR.error('Failed to open document.');
            main/* datadogLogs */.yf.logger.error('Failed to open document.', {}, error);
        }
    }, [
        binaryUrl,
        token
    ]);
    const onCreated = ()=>{
        var _container_container;
        setEditorReady(true);
        const container = docRef.current;
        const ribbon = (container === null || container === void 0 ? void 0 : container.ribbon) || (container === null || container === void 0 ? void 0 : (_container_container = container.container) === null || _container_container === void 0 ? void 0 : _container_container.ribbon);
        if (ribbon === null || ribbon === void 0 ? void 0 : ribbon.fileMenu) {
            var _ribbon_refreshLayout;
            ribbon.fileMenu.visible = false;
            (_ribbon_refreshLayout = ribbon.refreshLayout) === null || _ribbon_refreshLayout === void 0 ? void 0 : _ribbon_refreshLayout.call(ribbon);
        }
        container === null || container === void 0 ? void 0 : container.refresh();
    };
    (0,react.useEffect)(()=>{
        if (editorReady) {
            loadDocument();
        }
    }, [
        editorReady,
        loadDocument
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (SyncfusionWordRenderer_module_default()).root,
        children: [
            isLoading && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (SyncfusionWordRenderer_module_default()).loader,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SpinnerGap_es/* SpinnerGapIcon */.r, {
                    size: constants/* SVG_SIZE_XXL */.iWV,
                    className: "animate-spin"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FileRendererToolbar/* FileRendererToolbar */.N, {
                fileName: fileName,
                showSaveButton: true,
                showDownloadButton: true,
                handleSave: handleSave,
                handleDownload: handleDownload
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(documenteditorcontainer_component/* DocumentEditorContainerComponent */.B, {
                id: "container",
                ref: docRef,
                className: (0,utils.cn)((SyncfusionWordRenderer_module_default()).editor, {
                    [(SyncfusionWordRenderer_module_default()).isHidden]: isLoading
                }),
                height: "100%",
                width: "100%",
                created: onCreated,
                ribbonLayout: "Classic",
                toolbarMode: "Ribbon",
                enableToolbar: true,
                serviceUrl: envs/* NEXT_PUBLIC_DOCEDITOR_URL */.SX,
                headers: headers
            })
        ]
    });
});
SyncfusionWordRenderer.displayName = 'SyncfusionWordRenderer';

;// ./src/components/file-renderers/SyncfusionWordRenderer/index.ts


// EXTERNAL MODULE: ./src/components/file-renderers/SyncfusionImageRenderer/index.ts + 3 modules
var SyncfusionImageRenderer = __webpack_require__(61882);
// EXTERNAL MODULE: ./src/lib/api.ts
var api = __webpack_require__(90960);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader.js
var loader = __webpack_require__(42348);
// EXTERNAL MODULE: ./node_modules/posthog-js/react/dist/esm/index.js
var esm = __webpack_require__(26302);
// EXTERNAL MODULE: ./node_modules/react-swipeable/es/index.js
var es = __webpack_require__(96438);
;// ./src/components/file-renderers/index.tsx
/* __next_internal_client_entry_do_not_use__ getFileTypeFromExtension,getLanguageFromExtension,FileRenderer auto */ 




















const excelExtensions = [
    'xlsx',
    'xls'
];
// Helper function to determine file type from extension
function getFileTypeFromExtension(fileName, isMobile) {
    var _fileName_split_pop;
    const extension = ((_fileName_split_pop = fileName.split('.').pop()) === null || _fileName_split_pop === void 0 ? void 0 : _fileName_split_pop.toLowerCase()) || '';
    const wordExtensions = [
        'docx'
    ];
    const markdownExtensions = [
        'md',
        'markdown'
    ];
    const codeExtensions = [
        'js',
        'jsx',
        'ts',
        'tsx',
        'html',
        'css',
        'json',
        'py',
        'python',
        'java',
        'c',
        'cpp',
        'h',
        'cs',
        'go',
        'rs',
        'php',
        'rb',
        'sh',
        'bash',
        'xml',
        'yml',
        'yaml',
        'toml',
        'sql',
        'graphql',
        'swift',
        'kotlin',
        'dart',
        'r',
        'lua',
        'scala',
        'perl',
        'haskell',
        'rust'
    ];
    const imageExtensions = [
        'png',
        'jpg',
        'jpeg',
        'gif',
        'webp',
        'svg',
        'bmp',
        'ico'
    ];
    const pdfExtensions = [
        'pdf'
    ];
    const textExtensions = [
        'txt',
        'csv',
        'log',
        'env',
        'ini'
    ];
    if (markdownExtensions.includes(extension)) {
        return 'markdown';
    } else if (codeExtensions.includes(extension)) {
        return 'code';
    } else if (imageExtensions.includes(extension)) {
        return 'image';
    } else if (pdfExtensions.includes(extension)) {
        return 'pdf';
    } else if (textExtensions.includes(extension)) {
        return 'text';
    } else if (excelExtensions.includes(extension)) {
        return 'excel';
    } else if (wordExtensions.includes(extension) && !isMobile) {
        return 'word';
    } else {
        return 'binary';
    }
}
// Helper function to get language from file extension for code highlighting
function getLanguageFromExtension(fileName) {
    var _fileName_split_pop;
    const extension = ((_fileName_split_pop = fileName.split('.').pop()) === null || _fileName_split_pop === void 0 ? void 0 : _fileName_split_pop.toLowerCase()) || '';
    const extensionToLanguage = {
        js: 'js',
        jsx: 'jsx',
        ts: 'ts',
        tsx: 'tsx',
        html: 'html',
        css: 'css',
        json: 'json',
        py: 'python',
        python: 'python',
        java: 'java',
        c: 'c',
        cpp: 'cpp',
        h: 'c',
        cs: 'csharp',
        go: 'go',
        rs: 'rust',
        php: 'php',
        rb: 'ruby',
        sh: 'shell',
        bash: 'shell',
        xml: 'xml',
        yml: 'yaml',
        yaml: 'yaml',
        sql: 'sql'
    };
    return extensionToLanguage[extension] || '';
}
function FileRenderer(param) {
    let { content, binaryUrl, fileName, className, thread, markdownRef, handleDownload, handleSave, handleCopyClick, isOpenedAtFileViewerModal, synfusionMarkdownRef, onCopyMarkdown, onSaveMarkdown, syncfusionImageRef, syncfusionExcelRef, updateExcelFile, htmlNewRendererRef, syncfusionWordRef, onSaveImage, onSaveHTML, handleDeployClick, isLoadingUpdateHTML, isGeneratingImageCopy, showToolbar = true, handleNextFile, handlePrevFile } = param;
    const isMobile = (0,hooks/* useIsMobile */.al)();
    const fileType = getFileTypeFromExtension(fileName, isMobile);
    const language = getLanguageFromExtension(fileName);
    const isHtmlFile = fileName.toLowerCase().endsWith('.html');
    const [htmlPreviewUrl, setHtmlPreviewUrl] = (0,react.useState)(null);
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    const isCsvFile = fileName.toLowerCase().endsWith('.csv');
    const shouldUseSyncfusionCsv = isCsvFile && !isMobile && !!content;
    const isSwipeableFeatureEnabled = (0,esm/* useFeatureFlagEnabled */.Tp)('swipeableFileViewer');
    const isSwipeableEnabled = isMobile && isSwipeableFeatureEnabled && isOpenedAtFileViewerModal;
    const handlers = (0,es/* useSwipeable */.uh)({
        onSwipedLeft: ()=>{
            if (isSwipeableEnabled) handleNextFile === null || handleNextFile === void 0 ? void 0 : handleNextFile();
        },
        onSwipedRight: ()=>{
            if (isSwipeableEnabled) handlePrevFile === null || handlePrevFile === void 0 ? void 0 : handlePrevFile();
        },
        delta: 50,
        rotationAngle: 0,
        swipeDuration: 300,
        preventScrollOnSwipe: true,
        trackTouch: isSwipeableEnabled,
        trackMouse: false
    });
    const csvBinaryUrl = (0,react.useMemo)(()=>{
        if (!shouldUseSyncfusionCsv) return null;
        return URL.createObjectURL(new Blob([
            content !== null && content !== void 0 ? content : ''
        ], {
            type: 'text/csv'
        }));
    }, [
        shouldUseSyncfusionCsv,
        content
    ]);
    (0,react.useEffect)(()=>{
        return ()=>{
            if (csvBinaryUrl) URL.revokeObjectURL(csvBinaryUrl);
        };
    }, [
        csvBinaryUrl
    ]);
    const fetchHtmlPreviewUrl = async (thread, fileName)=>{
        try {
            setIsLoading(true);
            const data = await (0,api/* getSandboxServiceUrl */.ab)({
                thread: thread,
                service: 'web-preview'
            });
            const url = new URL(data === null || data === void 0 ? void 0 : data.url);
            const previewUrl = url.origin + url.pathname + fileName.replace('/workspace/', '') + url.search;
            setHtmlPreviewUrl(previewUrl !== null && previewUrl !== void 0 ? previewUrl : null);
        } catch (e) {
            setHtmlPreviewUrl(null);
        } finally{
            setIsLoading(false);
        }
    };
    (0,react.useEffect)(()=>{
        if (!isHtmlFile || !(thread === null || thread === void 0 ? void 0 : thread.thread_id)) {
            return;
        }
        fetchHtmlPreviewUrl(thread, fileName);
    }, [
        thread,
        isHtmlFile,
        fileName
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,utils.cn)('w-full h-full', className),
        ...handlers,
        children: fileType === 'word' && !isMobile ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SyncfusionWordRenderer, {
            ref: syncfusionWordRef,
            binaryUrl: binaryUrl || '',
            selectedFilePath: fileName,
            handleDownload: handleDownload,
            handleSave: ()=>handleSave('word')
        }) : fileType === 'binary' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(BinaryRenderer, {
            url: binaryUrl || '',
            fileName: fileName
        }) : fileType === 'image' && binaryUrl ? isOpenedAtFileViewerModal ? isGeneratingImageCopy ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "w-full h-full flex items-center justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(loader/* default */.A, {
                className: "h-6 w-6 animate-spin text-primary"
            })
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(SyncfusionImageRenderer/* SyncfusionImageRenderer */.oD, {
            ref: syncfusionImageRef,
            binaryUrl: binaryUrl,
            onSaveImage: onSaveImage,
            fileName: fileName,
            handleDownload: handleDownload,
            showToolbar: true
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageRenderer, {
            url: binaryUrl
        }) : fileType === 'pdf' && binaryUrl ? !isMobile ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SyncfusionPdfRenderer, {
            binaryUrl: binaryUrl,
            fileName: fileName,
            handleDownload: handleDownload
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(PdfRenderer, {
            url: binaryUrl,
            showToolbar: true,
            fileName: fileName,
            handleDownload: handleDownload
        }) : fileType === 'markdown' ? isOpenedAtFileViewerModal ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SyncfusionMarkdownRenderer, {
            fileName: fileName,
            value: content || '',
            ref: synfusionMarkdownRef,
            onCopy: onCopyMarkdown,
            onSave: onSaveMarkdown,
            onDownload: handleDownload
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(markdown_renderer/* MarkdownRendererWithScroll */.yX, {
            content: content || '',
            ref: markdownRef
        }) : isHtmlFile ? isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "w-full h-full flex items-center justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(loader/* default */.A, {
                className: "h-6 w-6 animate-spin text-primary"
            })
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(HTMLRenderer/* NewHTMLDesignRenderer */.X, {
            fileName: fileName,
            ref: htmlNewRendererRef,
            content: content || '',
            previewUrl: htmlPreviewUrl,
            className: "w-full h-full",
            onSaveHTML: onSaveHTML,
            handleCopyClick: handleCopyClick,
            handleDeployClick: handleDeployClick,
            isLoading: isLoadingUpdateHTML
        }) : shouldUseSyncfusionCsv && csvBinaryUrl ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SyncfusionExcelRenderer/* SyncfusionExcelRenderer */.a, {
            ref: syncfusionExcelRef,
            binaryUrl: csvBinaryUrl,
            fileName: fileName,
            showToolbar: true,
            isCsvFile: true,
            handleDownload: handleDownload,
            updateExcelFile: updateExcelFile,
            handleCopyClick: handleCopyClick
        }) : fileType === 'code' || fileType === 'text' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(code_renderer/* CodeRendererWithScroll */.O, {
            fileName: fileName,
            content: content || '',
            language: language,
            showToolbar: true,
            handleCopyClick: handleCopyClick,
            handleDownload: handleDownload,
            className: "w-full h-full"
        }) : fileType === 'excel' && binaryUrl ? !isMobile ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SyncfusionExcelRenderer/* SyncfusionExcelRenderer */.a, {
            ref: syncfusionExcelRef,
            binaryUrl: binaryUrl,
            fileName: fileName,
            showToolbar: showToolbar,
            updateExcelFile: updateExcelFile,
            handleDownload: handleDownload
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ExcelRenderer, {
            url: binaryUrl
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "w-full h-full p-4",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
                className: "text-sm font-mono whitespace-pre-wrap break-words leading-relaxed bg-muted/30 p-4 rounded-lg overflow-auto max-h-full",
                children: content || ''
            })
        })
    });
}


/***/ }),

/***/ 29582:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"nj-animate-horizontal-appearance-ltr-enter":"LaunchVsCodeButton_nj-animate-horizontal-appearance-ltr-enter__Osm5p","nj-animate-horizontal-appearance-ltr-enter-active":"LaunchVsCodeButton_nj-animate-horizontal-appearance-ltr-enter-active__4IQPY","nj-animate-horizontal-appearance-ltr-exit":"LaunchVsCodeButton_nj-animate-horizontal-appearance-ltr-exit__gBlsc","nj-animate-horizontal-appearance-ltr-exit-active":"LaunchVsCodeButton_nj-animate-horizontal-appearance-ltr-exit-active__XcZF1","nj-animate-left-panel-width-reduce-enter":"LaunchVsCodeButton_nj-animate-left-panel-width-reduce-enter__9sGyL","nj-animate-left-panel-width-reduce-enter-active":"LaunchVsCodeButton_nj-animate-left-panel-width-reduce-enter-active___fmu1","nj-animate-left-panel-width-reduce-exit":"LaunchVsCodeButton_nj-animate-left-panel-width-reduce-exit__cF7k0","nj-animate-left-panel-width-reduce-exit-active":"LaunchVsCodeButton_nj-animate-left-panel-width-reduce-exit-active__J_Srw","nj-animate-vertical-appearance-appear":"LaunchVsCodeButton_nj-animate-vertical-appearance-appear__FV1ap","nj-animate-vertical-appearance-appear-active":"LaunchVsCodeButton_nj-animate-vertical-appearance-appear-active__l4GWi","nj-animate-vertical-appearance-enter":"LaunchVsCodeButton_nj-animate-vertical-appearance-enter__OKJ9v","nj-animate-vertical-appearance-enter-active":"LaunchVsCodeButton_nj-animate-vertical-appearance-enter-active__5X9na","nj-animate-vertical-appearance-exit":"LaunchVsCodeButton_nj-animate-vertical-appearance-exit__aWzK8","nj-animate-vertical-appearance-exit-active":"LaunchVsCodeButton_nj-animate-vertical-appearance-exit-active__enCqk","root":"LaunchVsCodeButton_root__ym43q","infinite-spinner":"LaunchVsCodeButton_infinite-spinner__uSMbk","fadeIn":"LaunchVsCodeButton_fadeIn__7FEve","blinking":"LaunchVsCodeButton_blinking__WOOmM","movingRight":"LaunchVsCodeButton_movingRight__BRA7Y"};

/***/ }),

/***/ 32383:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 32626:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"container":"UserMessage_container__6VLKo","root":"UserMessage_root__khq51","nj-animate-horizontal-appearance-ltr-enter":"UserMessage_nj-animate-horizontal-appearance-ltr-enter__twEwM","nj-animate-horizontal-appearance-ltr-enter-active":"UserMessage_nj-animate-horizontal-appearance-ltr-enter-active__YIMn7","nj-animate-horizontal-appearance-ltr-exit":"UserMessage_nj-animate-horizontal-appearance-ltr-exit__3wzwS","nj-animate-horizontal-appearance-ltr-exit-active":"UserMessage_nj-animate-horizontal-appearance-ltr-exit-active__YsPOH","nj-animate-left-panel-width-reduce-enter":"UserMessage_nj-animate-left-panel-width-reduce-enter__mi8ak","nj-animate-left-panel-width-reduce-enter-active":"UserMessage_nj-animate-left-panel-width-reduce-enter-active__YAueM","nj-animate-left-panel-width-reduce-exit":"UserMessage_nj-animate-left-panel-width-reduce-exit__20n7u","nj-animate-left-panel-width-reduce-exit-active":"UserMessage_nj-animate-left-panel-width-reduce-exit-active__wRGcv","nj-animate-vertical-appearance-appear":"UserMessage_nj-animate-vertical-appearance-appear__rs9TN","nj-animate-vertical-appearance-appear-active":"UserMessage_nj-animate-vertical-appearance-appear-active__XbDJ0","nj-animate-vertical-appearance-enter":"UserMessage_nj-animate-vertical-appearance-enter__NZvWJ","nj-animate-vertical-appearance-enter-active":"UserMessage_nj-animate-vertical-appearance-enter-active__MvQMT","nj-animate-vertical-appearance-exit":"UserMessage_nj-animate-vertical-appearance-exit__6CSqP","nj-animate-vertical-appearance-exit-active":"UserMessage_nj-animate-vertical-appearance-exit-active__f9TiB","withGradient":"UserMessage_withGradient__Gpkuk","infinite-spinner":"UserMessage_infinite-spinner__As4OJ","fadeIn":"UserMessage_fadeIn__uXsKr","blinking":"UserMessage_blinking__Rjdk0","movingRight":"UserMessage_movingRight__O6OES"};

/***/ }),

/***/ 32782:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"PaywallFileViewer_root__euEyJ","content":"PaywallFileViewer_content__gS2LW","icon":"PaywallFileViewer_icon__QgcCp","title":"PaywallFileViewer_title__qBENW","message":"PaywallFileViewer_message__rKtR3","nj-animate-horizontal-appearance-ltr-enter":"PaywallFileViewer_nj-animate-horizontal-appearance-ltr-enter__3K5AR","nj-animate-horizontal-appearance-ltr-enter-active":"PaywallFileViewer_nj-animate-horizontal-appearance-ltr-enter-active__tdDXx","nj-animate-horizontal-appearance-ltr-exit":"PaywallFileViewer_nj-animate-horizontal-appearance-ltr-exit__OlCSq","nj-animate-horizontal-appearance-ltr-exit-active":"PaywallFileViewer_nj-animate-horizontal-appearance-ltr-exit-active__XOrMu","nj-animate-left-panel-width-reduce-enter":"PaywallFileViewer_nj-animate-left-panel-width-reduce-enter__xv7VN","nj-animate-left-panel-width-reduce-enter-active":"PaywallFileViewer_nj-animate-left-panel-width-reduce-enter-active__U5yXW","nj-animate-left-panel-width-reduce-exit":"PaywallFileViewer_nj-animate-left-panel-width-reduce-exit__BafxA","nj-animate-left-panel-width-reduce-exit-active":"PaywallFileViewer_nj-animate-left-panel-width-reduce-exit-active__0CuTF","nj-animate-vertical-appearance-appear":"PaywallFileViewer_nj-animate-vertical-appearance-appear__FTMVH","nj-animate-vertical-appearance-appear-active":"PaywallFileViewer_nj-animate-vertical-appearance-appear-active__PNsa0","nj-animate-vertical-appearance-enter":"PaywallFileViewer_nj-animate-vertical-appearance-enter__Zvs0i","nj-animate-vertical-appearance-enter-active":"PaywallFileViewer_nj-animate-vertical-appearance-enter-active__rNcpF","nj-animate-vertical-appearance-exit":"PaywallFileViewer_nj-animate-vertical-appearance-exit__wfljh","nj-animate-vertical-appearance-exit-active":"PaywallFileViewer_nj-animate-vertical-appearance-exit-active__c0oTy","infinite-spinner":"PaywallFileViewer_infinite-spinner__Pr8o0","fadeIn":"PaywallFileViewer_fadeIn__JyzVf","blinking":"PaywallFileViewer_blinking__qIVY9","movingRight":"PaywallFileViewer_movingRight__66_qo"};

/***/ }),

/***/ 33728:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"AddScheduleTaskModal_root__InMnt","title":"AddScheduleTaskModal_title__40Zu4","content":"AddScheduleTaskModal_content__kFQza","taskSection":"AddScheduleTaskModal_taskSection__V_Gc9","taskSubSection":"AddScheduleTaskModal_taskSubSection__uVEbN","header":"AddScheduleTaskModal_header__VJ4Gs","inputContainer":"AddScheduleTaskModal_inputContainer__VbDwb","closeButton":"AddScheduleTaskModal_closeButton__a52C_","inputBox":"AddScheduleTaskModal_inputBox__2Q_uo","footer":"AddScheduleTaskModal_footer__Mm83u","taskLabel":"AddScheduleTaskModal_taskLabel__rB62w","taskLabelDescription":"AddScheduleTaskModal_taskLabelDescription__Vt9eB","nj-animate-horizontal-appearance-ltr-enter":"AddScheduleTaskModal_nj-animate-horizontal-appearance-ltr-enter__5D5eR","nj-animate-horizontal-appearance-ltr-enter-active":"AddScheduleTaskModal_nj-animate-horizontal-appearance-ltr-enter-active___kka7","nj-animate-horizontal-appearance-ltr-exit":"AddScheduleTaskModal_nj-animate-horizontal-appearance-ltr-exit__9a6kr","nj-animate-horizontal-appearance-ltr-exit-active":"AddScheduleTaskModal_nj-animate-horizontal-appearance-ltr-exit-active__iEw4J","nj-animate-left-panel-width-reduce-enter":"AddScheduleTaskModal_nj-animate-left-panel-width-reduce-enter__y2sem","nj-animate-left-panel-width-reduce-enter-active":"AddScheduleTaskModal_nj-animate-left-panel-width-reduce-enter-active__5pBt_","nj-animate-left-panel-width-reduce-exit":"AddScheduleTaskModal_nj-animate-left-panel-width-reduce-exit__aBaf0","nj-animate-left-panel-width-reduce-exit-active":"AddScheduleTaskModal_nj-animate-left-panel-width-reduce-exit-active__N_JE4","nj-animate-vertical-appearance-appear":"AddScheduleTaskModal_nj-animate-vertical-appearance-appear__UL6w0","nj-animate-vertical-appearance-appear-active":"AddScheduleTaskModal_nj-animate-vertical-appearance-appear-active__NBD4d","nj-animate-vertical-appearance-enter":"AddScheduleTaskModal_nj-animate-vertical-appearance-enter__NA4_x","nj-animate-vertical-appearance-enter-active":"AddScheduleTaskModal_nj-animate-vertical-appearance-enter-active__Rw7dN","nj-animate-vertical-appearance-exit":"AddScheduleTaskModal_nj-animate-vertical-appearance-exit__WUORc","nj-animate-vertical-appearance-exit-active":"AddScheduleTaskModal_nj-animate-vertical-appearance-exit-active__0jQ9A","threadInfo":"AddScheduleTaskModal_threadInfo__3B70Q","infinite-spinner":"AddScheduleTaskModal_infinite-spinner__V_LBg","fadeIn":"AddScheduleTaskModal_fadeIn__jnGaX","blinking":"AddScheduleTaskModal_blinking__OGiRW","movingRight":"AddScheduleTaskModal_movingRight__qrnF4"};

/***/ }),

/***/ 35194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* reexport */ useSelectedExternalFileState),
  g: () => (/* reexport */ useSelectedFileActions)
});

// EXTERNAL MODULE: ./src/store/index.ts + 2 modules
var store = __webpack_require__(82678);
// EXTERNAL MODULE: ./src/store/config.ts + 1 modules
var config = __webpack_require__(33057);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
;// ./src/hooks/selectedExternalFile/useSelectedExternalFileState.ts
/* __next_internal_client_entry_do_not_use__ useSelectedExternalFileState auto */ 


const useSelectedExternalFileState = ()=>{
    const { selectedExternalFile } = (0,config/* useAppSelector */.GV)(store/* selectedExternalFileState */.OB);
    return (0,react.useMemo)(()=>({
            selectedExternalFile: selectedExternalFile
        }), [
        selectedExternalFile
    ]);
};

;// ./src/hooks/selectedExternalFile/useSelectedExternalFileActions.ts
/* __next_internal_client_entry_do_not_use__ useSelectedFileActions auto */ 


const useSelectedFileActions = ()=>{
    const dispatch = (0,config/* useAppDispatch */.jL)();
    const setSelectedExternalFilepath = (0,react.useCallback)((value)=>{
        dispatch((0,store/* setSelectedExternalFile */.zM)(value));
    }, [
        dispatch
    ]);
    return (0,react.useMemo)(()=>({
            setSelectedExternalFilepath
        }), [
        setSelectedExternalFilepath
    ]);
};

;// ./src/hooks/selectedExternalFile/index.ts




/***/ }),

/***/ 39839:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"HTMLDesignRenderer_root__J4sxG","loader":"HTMLDesignRenderer_loader__Pah2B","nj-animate-horizontal-appearance-ltr-enter":"HTMLDesignRenderer_nj-animate-horizontal-appearance-ltr-enter___mL8P","nj-animate-horizontal-appearance-ltr-enter-active":"HTMLDesignRenderer_nj-animate-horizontal-appearance-ltr-enter-active__0TWRY","nj-animate-horizontal-appearance-ltr-exit":"HTMLDesignRenderer_nj-animate-horizontal-appearance-ltr-exit__qAH4I","nj-animate-horizontal-appearance-ltr-exit-active":"HTMLDesignRenderer_nj-animate-horizontal-appearance-ltr-exit-active__exv5J","nj-animate-left-panel-width-reduce-enter":"HTMLDesignRenderer_nj-animate-left-panel-width-reduce-enter__GdE9V","nj-animate-left-panel-width-reduce-enter-active":"HTMLDesignRenderer_nj-animate-left-panel-width-reduce-enter-active__zIvDi","nj-animate-left-panel-width-reduce-exit":"HTMLDesignRenderer_nj-animate-left-panel-width-reduce-exit__bikBf","nj-animate-left-panel-width-reduce-exit-active":"HTMLDesignRenderer_nj-animate-left-panel-width-reduce-exit-active__9BoVe","nj-animate-vertical-appearance-appear":"HTMLDesignRenderer_nj-animate-vertical-appearance-appear__iDSUQ","nj-animate-vertical-appearance-appear-active":"HTMLDesignRenderer_nj-animate-vertical-appearance-appear-active__Hk5XL","nj-animate-vertical-appearance-enter":"HTMLDesignRenderer_nj-animate-vertical-appearance-enter__4QDbo","nj-animate-vertical-appearance-enter-active":"HTMLDesignRenderer_nj-animate-vertical-appearance-enter-active__j9_2R","nj-animate-vertical-appearance-exit":"HTMLDesignRenderer_nj-animate-vertical-appearance-exit__JV9If","nj-animate-vertical-appearance-exit-active":"HTMLDesignRenderer_nj-animate-vertical-appearance-exit-active__BSf4r","content":"HTMLDesignRenderer_content__UB05C","toolbar":"HTMLDesignRenderer_toolbar__cpSa0","canvas":"HTMLDesignRenderer_canvas__GLmRG","fill":"HTMLDesignRenderer_fill__GLXtb","iframe":"HTMLDesignRenderer_iframe__XoLpH","isHidden":"HTMLDesignRenderer_isHidden__yIVD4","spinner":"HTMLDesignRenderer_spinner__yxwCo","infinite-spinner":"HTMLDesignRenderer_infinite-spinner__TrOrN","fadeIn":"HTMLDesignRenderer_fadeIn__et66w","blinking":"HTMLDesignRenderer_blinking__AdPEP","movingRight":"HTMLDesignRenderer_movingRight__lXE3E"};

/***/ }),

/***/ 39873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* binding */ HtmlRendererToolbar)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(64269);
// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button = __webpack_require__(62717);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/CloudArrowUp.es.js
var CloudArrowUp_es = __webpack_require__(15540);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/Copy.es.js
var Copy_es = __webpack_require__(88445);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/ArrowSquareOut.es.js
var ArrowSquareOut_es = __webpack_require__(97591);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(85203);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Eye.es.js + 1 modules
var Eye_es = __webpack_require__(57264);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Code.es.js
var Code_es = __webpack_require__(45434);
// EXTERNAL MODULE: ./src/components/file-renderers/HTMLRenderer/ViewModeToggle/ViewModeToggle.module.scss
var ViewModeToggle_module = __webpack_require__(67464);
var ViewModeToggle_module_default = /*#__PURE__*/__webpack_require__.n(ViewModeToggle_module);
;// ./src/components/file-renderers/HTMLRenderer/ViewModeToggle/ViewModeToggle.tsx







const ViewModeToggle = (param)=>{
    let { value, onChange, isStreaming = false, className } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classnames_default()((ViewModeToggle_module_default()).root, className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                color: value === 'preview' ? 'tertiary' : 'transparent',
                shape: "round",
                onClick: ()=>onChange('preview'),
                disabled: isStreaming,
                className: (ViewModeToggle_module_default()).segment,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Eye_es/* EyeIcon */.b, {
                    size: constants/* SVG_SIZE_M */.ng3
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                color: value === 'code' ? 'tertiary' : 'transparent',
                shape: "round",
                onClick: ()=>onChange('code'),
                className: (ViewModeToggle_module_default()).segment,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Code_es/* CodeIcon */.l, {
                    size: constants/* SVG_SIZE_M */.ng3
                })
            })
        ]
    });
};

;// ./src/components/file-renderers/HTMLRenderer/ViewModeToggle/index.ts


// EXTERNAL MODULE: ./src/components/file-renderers/FileIconLabel/FileIconLabel.tsx
var FileIconLabel = __webpack_require__(48440);
;// ./src/components/file-renderers/FileIconLabel/index.tsx


;// ./src/components/file-renderers/HTMLRenderer/HTMLToolbar.tsx
/* __next_internal_client_entry_do_not_use__ HtmlRendererToolbar auto */ 







function HtmlRendererToolbar(param) {
    let { viewMode, fileName, htmlPreviewUrl, onChangeMode, isStreaming, handleCopyClick, showDeployBtn, handleDeployClick, showOpenNewTabBtn, className } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,utils.cn)('flex items-center py-1 px-6 text-zinc-900 dark:text-zinc-100 justify-between border-b border-zinc-200 dark:border-zinc-800', className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex items-center justify-between w-full",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(FileIconLabel/* FileIconLabel */.y, {
                    fileName: fileName
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ViewModeToggle, {
                    value: viewMode,
                    isStreaming: isStreaming,
                    onChange: onChangeMode
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center space-x-1",
                    children: [
                        showDeployBtn && /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                            color: "transparent",
                            size: "small",
                            onClick: handleDeployClick,
                            className: "h-8 gap-1",
                            tooltipPosition: "top",
                            tooltipContent: "Deploy",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CloudArrowUp_es/* CloudArrowUpIcon */.L, {
                                size: constants/* SVG_SIZE_M */.ng3
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                            color: "transparent",
                            shape: "round",
                            tooltipPosition: "top",
                            tooltipContent: "Copy text",
                            onClick: ()=>handleCopyClick(),
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Copy_es/* CopyIcon */.T, {
                                size: constants/* SVG_SIZE_M */.ng3
                            })
                        }),
                        showOpenNewTabBtn && /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            href: htmlPreviewUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "p-2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowSquareOut_es/* ArrowSquareOutIcon */.k, {
                                size: constants/* SVG_SIZE_M */.ng3
                            })
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 40682:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"markdown":"markdown_markdown__tujwj","tableContainer":"markdown_tableContainer__HGOD2","cellContent":"markdown_cellContent__YRs4e","codeBlock":"markdown_codeBlock__PGsUf","codeBlockCopyButton":"markdown_codeBlockCopyButton__wSCRa"};

/***/ }),

/***/ 40707:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"loader":"SyncfusionImageRenderer_loader__nviQs","nj-animate-horizontal-appearance-ltr-enter":"SyncfusionImageRenderer_nj-animate-horizontal-appearance-ltr-enter__IVYFu","nj-animate-horizontal-appearance-ltr-enter-active":"SyncfusionImageRenderer_nj-animate-horizontal-appearance-ltr-enter-active__LqCCs","nj-animate-horizontal-appearance-ltr-exit":"SyncfusionImageRenderer_nj-animate-horizontal-appearance-ltr-exit__VrcJy","nj-animate-horizontal-appearance-ltr-exit-active":"SyncfusionImageRenderer_nj-animate-horizontal-appearance-ltr-exit-active__Er46o","nj-animate-left-panel-width-reduce-enter":"SyncfusionImageRenderer_nj-animate-left-panel-width-reduce-enter__Qu4hJ","nj-animate-left-panel-width-reduce-enter-active":"SyncfusionImageRenderer_nj-animate-left-panel-width-reduce-enter-active__4oEk4","nj-animate-left-panel-width-reduce-exit":"SyncfusionImageRenderer_nj-animate-left-panel-width-reduce-exit__CiZkS","nj-animate-left-panel-width-reduce-exit-active":"SyncfusionImageRenderer_nj-animate-left-panel-width-reduce-exit-active__q3mLR","nj-animate-vertical-appearance-appear":"SyncfusionImageRenderer_nj-animate-vertical-appearance-appear__e0fH3","nj-animate-vertical-appearance-appear-active":"SyncfusionImageRenderer_nj-animate-vertical-appearance-appear-active__dPMA4","nj-animate-vertical-appearance-enter":"SyncfusionImageRenderer_nj-animate-vertical-appearance-enter__zK84I","nj-animate-vertical-appearance-enter-active":"SyncfusionImageRenderer_nj-animate-vertical-appearance-enter-active__9a0X2","nj-animate-vertical-appearance-exit":"SyncfusionImageRenderer_nj-animate-vertical-appearance-exit__6zNi1","nj-animate-vertical-appearance-exit-active":"SyncfusionImageRenderer_nj-animate-vertical-appearance-exit-active__WOGJ8","root":"SyncfusionImageRenderer_root__vv2Q4","imageEditor":"SyncfusionImageRenderer_imageEditor__rRKHv","hidden":"SyncfusionImageRenderer_hidden__Oddgr","infinite-spinner":"SyncfusionImageRenderer_infinite-spinner__fCb9y","fadeIn":"SyncfusionImageRenderer_fadeIn___xdzT","blinking":"SyncfusionImageRenderer_blinking__5_T2C","movingRight":"SyncfusionImageRenderer_movingRight__9OPyR"};

/***/ }),

/***/ 42385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useAgentStream)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90960);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18720);
/* harmony import */ var _components_thread_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49595);
/* harmony import */ var _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73262);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37893);







// Helper function to map API messages to UnifiedMessages
const mapApiMessagesToUnified = (messagesData, currentThreadId)=>{
    return (messagesData || []).filter((msg)=>msg.type !== 'status').map((msg)=>({
            message_id: msg.message_id || null,
            thread_id: msg.thread_id || currentThreadId,
            agent_run_id: msg.agent_run_id || null,
            type: msg.type || 'system',
            is_llm_message: Boolean(msg.is_llm_message),
            content: msg.content || '',
            metadata: msg.metadata || '{}',
            created_at: msg.created_at || new Date().toISOString(),
            updated_at: msg.updated_at || new Date().toISOString()
        }));
};
function useAgentStream(callbacks, threadId, setMessages) {
    let newVersion = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, currentCommand = arguments.length > 4 ? arguments[4] : void 0;
    const [agentRunId, setAgentRunId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('idle');
    const [textContent, setTextContent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [toolCall, setToolCall] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const streamCleanupRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const isMountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
    const currentRunIdRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // Ref to track the run ID being processed
    const threadIdRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(threadId); // Ref to hold the current threadId
    const setMessagesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(setMessages); // Ref to hold the setMessages function
    // Update refs if threadId or setMessages changes
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        threadIdRef.current = threadId;
    }, [
        threadId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setMessagesRef.current = setMessages;
    }, [
        setMessages
    ]);
    // Helper function to map backend status to frontend status string
    const mapAgentStatus = (backendStatus)=>{
        switch(backendStatus){
            case 'completed':
                return 'completed';
            case 'stopped':
                return 'stopped';
            case 'failed':
                return 'failed';
            case 'error-notification':
                return 'error-notification';
            default:
                return 'error';
        }
    };
    // Internal function to update status and notify consumer
    const updateStatus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newStatus)=>{
        if (isMountedRef.current) {
            var _callbacks_onStatusChange;
            setStatus(newStatus);
            (_callbacks_onStatusChange = callbacks.onStatusChange) === null || _callbacks_onStatusChange === void 0 ? void 0 : _callbacks_onStatusChange.call(callbacks, newStatus);
            if (newStatus === 'error' && error) {
                var _callbacks_onError;
                (_callbacks_onError = callbacks.onError) === null || _callbacks_onError === void 0 ? void 0 : _callbacks_onError.call(callbacks, error);
            }
            if ([
                'completed',
                'stopped',
                'failed',
                'error',
                'agent_not_running'
            ].includes(newStatus)) {
                var _callbacks_onClose;
                (_callbacks_onClose = callbacks.onClose) === null || _callbacks_onClose === void 0 ? void 0 : _callbacks_onClose.call(callbacks, newStatus);
            }
        }
    }, [
        callbacks,
        error
    ]); // Include error dependency
    // Function to handle finalization of a stream (completion, stop, error)
    const finalizeStream = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(finalStatus) {
        let runId = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : agentRunId, shouldRefetchMessages = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        if (!isMountedRef.current) return;
        if (finalStatus === 'error-notification') {
            updateStatus(finalStatus);
            return;
        }
        const currentThreadId = threadIdRef.current; // Get current threadId from ref
        const currentSetMessages = setMessagesRef.current; // Get current setMessages from ref
        ;
        if (streamCleanupRef.current) {
            streamCleanupRef.current();
            streamCleanupRef.current = null;
        }
        // Reset streaming-specific state
        setTextContent('');
        setToolCall(null);
        // Update status and clear run ID
        updateStatus(finalStatus);
        setAgentRunId(null);
        currentRunIdRef.current = null;
        // Try to skip the message refetch in new version because:
        // 1. We assume the stream is stable enough
        // 2. Get all messages could be really slow if the chat content is very long
        if (!newVersion) {
            // --- Reliable Message Refetch on Finalization ---
            // Only refetch if the stream ended with a terminal status indicating the run is likely over
            const terminalStatuses = [
                'completed',
                'stopped',
                'failed',
                'error',
                'agent_not_running'
            ];
            if (currentThreadId && terminalStatuses.includes(finalStatus) && shouldRefetchMessages) {
                ;
                (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .getMessages */ .VL)({
                    threadId: currentThreadId
                }).then((result)=>{
                    if (isMountedRef.current && result.messages) {
                        ;
                        const unifiedMessages = mapApiMessagesToUnified(result.messages, currentThreadId);
                        currentSetMessages(unifiedMessages); // Use the ref'd setMessages
                    } else if (!isMountedRef.current) {
                        ;
                    }
                }).catch((err)=>{
                    _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error("[useAgentStream] Error refetching messages for thread ".concat(currentThreadId, " after finalization:"), err);
                    // Optionally notify the user via toast or callback
                    sonner__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .oR.error("Failed to refresh messages: ".concat(err.message));
                });
            } else {
                ;
            }
        }
        // If the run was stopped or completed, try to get final status to update nonRunning set (keep this)
        if (runId && (finalStatus === 'completed' || finalStatus === 'stopped' || finalStatus === 'agent_not_running')) {
            (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .getAgentStatus */ ._L)(runId).catch((err)=>{
                ;
            });
        }
    }, [
        agentRunId,
        newVersion,
        updateStatus
    ]);
    // --- Stream Callback Handlers ---
    const handleStreamMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((rawData)=>{
        if (!isMountedRef.current) return;
        window.lastStreamMessage = Date.now(); // Keep track of last message time
        let processedData = rawData;
        if (processedData.startsWith('data: ')) {
            processedData = processedData.substring(6).trim();
        }
        if (!processedData) return;
        // --- Early exit for non-JSON completion messages ---
        if (processedData === '{"type": "status", "status": "completed", "message": "Agent run completed successfully"}') {
            ;
            finalizeStream('completed', currentRunIdRef.current);
            return;
        }
        if (processedData.includes('Run data not available for streaming') || processedData.includes('Stream ended with status: completed')) {
            ;
            finalizeStream('completed', currentRunIdRef.current);
            return;
        }
        // --- Process JSON messages ---
        const message = (0,_components_thread_utils__WEBPACK_IMPORTED_MODULE_3__/* .safeJsonParse */ .jD)(processedData, null);
        if (!message) {
            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.warn('[useAgentStream] Failed to parse streamed message:', {
                processedData: processedData
            });
            return;
        }
        if ((message === null || message === void 0 ? void 0 : message.status) === 'error-notification') {
            callbacks.onErrorNotification(message.content);
            return;
        }
        const parsedContent = (0,_components_thread_utils__WEBPACK_IMPORTED_MODULE_3__/* .safeJsonParse */ .jD)(message.content, {});
        const parsedMetadata = (0,_components_thread_utils__WEBPACK_IMPORTED_MODULE_3__/* .safeJsonParse */ .jD)(message.metadata, {});
        // Update status to streaming if we receive a valid message
        if (status !== 'streaming') updateStatus('streaming');
        switch(message.type){
            case 'assistant':
                if (parsedMetadata.stream_status === 'chunk' && parsedContent.content) {
                    var _callbacks_onAssistantChunk;
                    if (typeof parsedContent.content === 'string') {
                        setTextContent((prev)=>(prev + parsedContent.content).replace(/<function_calls>/g, ''));
                    }
                    (_callbacks_onAssistantChunk = callbacks.onAssistantChunk) === null || _callbacks_onAssistantChunk === void 0 ? void 0 : _callbacks_onAssistantChunk.call(callbacks, {
                        content: parsedContent.content
                    });
                } else if (parsedMetadata.stream_status === 'complete') {
                    setTextContent('');
                    setToolCall(null);
                    if (message.message_id) callbacks.onMessage(message);
                } else if (!parsedMetadata.stream_status) {
                    var // Handle non-chunked assistant messages if needed
                    _callbacks_onAssistantStart;
                    (_callbacks_onAssistantStart = callbacks.onAssistantStart) === null || _callbacks_onAssistantStart === void 0 ? void 0 : _callbacks_onAssistantStart.call(callbacks);
                    if (message.message_id) if (currentCommand === _types__WEBPACK_IMPORTED_MODULE_5__/* .ChatCommand */ .cz.CHAT) {
                        callbacks.onMessage(message, ()=>finalizeStream('completed', currentRunIdRef.current));
                    } else {
                        callbacks.onMessage(message);
                    }
                }
                break;
            case 'tool':
                setToolCall(null); // Clear any streaming tool call
                if (message.message_id) callbacks.onMessage(message);
                break;
            case 'status':
                switch(parsedContent.status_type){
                    case 'tool_started':
                        setToolCall({
                            role: 'assistant',
                            status_type: 'tool_started',
                            name: parsedContent.function_name,
                            arguments: parsedContent.arguments,
                            xml_tag_name: parsedContent.xml_tag_name,
                            tool_index: parsedContent.tool_index
                        });
                        break;
                    case 'tool_completed':
                    case 'tool_failed':
                    case 'tool_error':
                        if ((toolCall === null || toolCall === void 0 ? void 0 : toolCall.tool_index) === parsedContent.tool_index) {
                            setToolCall(null);
                        }
                        break;
                    case 'thread_run_end':
                        ;
                        break;
                    case 'finish':
                        ;
                        break;
                    case 'error':
                        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error("[useAgentStream] Received error status message for message: ".concat(parsedContent.message.message_id));
                        if (parsedContent.message.includes('peer closed connection without sending complete message body ')) {
                            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.warn('Ignoring this error for now');
                            break;
                        }
                        setError(parsedContent.message || 'Agent run failed');
                        finalizeStream('error', currentRunIdRef.current);
                        break;
                    // Ignore thread_run_start, assistant_response_start etc. for now
                    default:
                        break;
                }
                break;
            case 'user':
            case 'system':
                // Handle other message types if necessary, e.g., if backend sends historical context
                if (message.message_id) callbacks.onMessage(message);
                break;
            default:
                _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.warn('[useAgentStream] Unhandled message type:', {
                    message_type: message.type
                });
        }
    }, [
        status,
        toolCall,
        callbacks,
        finalizeStream,
        updateStatus
    ]);
    const handleStreamError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (err)=>{
        if (!isMountedRef.current) return;
        // Extract error message
        let errorMessage = 'Unknown streaming error';
        if (typeof err === 'string') {
            errorMessage = err;
        } else if (err instanceof Error) {
            errorMessage = err.message;
        } else if (err instanceof Event && err.type === 'error') {
            // Standard EventSource errors don't have much detail, might need status check
            errorMessage = 'Stream connection error';
        }
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error("[useAgentStream] Streaming error: ".concat(errorMessage));
        setError(errorMessage);
        const runId = currentRunIdRef.current;
        if (!runId) {
            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.warn('[useAgentStream] Stream error occurred but no agentRunId is active.');
            finalizeStream('error'); // Finalize with generic error if no runId
            return;
        }
        // Check the correct connection of Front-End and Back-End
        try {
            await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .getHealth */ .le)();
        } catch (e) {
            sonner__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .oR.error('Connection lost — retrying…');
            return;
        }
        // Check agent status immediately after an error
        (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .getAgentStatus */ ._L)(runId).then((agentStatus)=>{
            if (!isMountedRef.current) return; // Check mount status again after async call
            if (agentStatus.status === 'running') {
                _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.warn("[useAgentStream] Stream error for ".concat(runId, ", but agent is still running. Retry mechanism will handle reconnection."));
                updateStatus('retrying');
            } else {
                // Map backend terminal status to hook terminal status
                const finalStatus = mapAgentStatus(agentStatus.status);
                ;
                finalizeStream(finalStatus, runId);
            }
        }).catch((statusError)=>{
            if (!isMountedRef.current) return;
            const statusErrorMessage = statusError instanceof Error ? statusError.message : String(statusError);
            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error("[useAgentStream] Error checking agent status for ".concat(runId, " after stream error: ").concat(statusErrorMessage));
            const isNotFoundError = statusErrorMessage.includes('not found') || statusErrorMessage.includes('404') || statusErrorMessage.includes('does not exist');
            if (isNotFoundError) {
                ;
                // Revert to agent_not_running for this specific case
                finalizeStream('agent_not_running', runId);
            } else {
                // For other status check errors, finalize with the original stream error
                finalizeStream('error', runId);
            }
        });
    }, [
        finalizeStream,
        updateStatus
    ]);
    const handleStreamClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        if (!isMountedRef.current) return;
        ;
        const runId = currentRunIdRef.current;
        if (!runId) {
            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.warn('[useAgentStream] Stream closed but no active agentRunId.');
            // If status was streaming, something went wrong, finalize as error
            if (status === 'streaming' || status === 'connecting') {
                finalizeStream('error');
            } else if (status !== 'idle' && status !== 'completed' && status !== 'stopped' && status !== 'agent_not_running') {
                // If in some other state, just go back to idle if no runId
                finalizeStream('idle');
            }
            return;
        }
        // Immediately check the agent status when the stream closes unexpectedly
        // This covers cases where the agent finished but the final message wasn't received,
        // or if the agent errored out on the backend.
        (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .getAgentStatus */ ._L)(runId).then((agentStatus)=>{
            if (!isMountedRef.current) return; // Check mount status again
            ;
            if (agentStatus.status === 'running') {
                _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.warn("[useAgentStream] Stream closed for ".concat(runId, ", but agent is still running. Retry mechanism will handle reconnection."));
                updateStatus('retrying');
            } else {
                // Map backend terminal status to hook terminal status
                const finalStatus = mapAgentStatus(agentStatus.status);
                ;
                finalizeStream(finalStatus, runId);
            }
        }).catch((err)=>{
            if (!isMountedRef.current) return;
            const errorMessage = err instanceof Error ? err.message : String(err);
            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error("[useAgentStream] Error checking agent status for ".concat(runId, " after stream close: ").concat(errorMessage));
            const isNotFoundError = errorMessage.includes('not found') || errorMessage.includes('404') || errorMessage.includes('does not exist');
            if (isNotFoundError) {
                ;
                // Revert to agent_not_running for this specific case
                finalizeStream('agent_not_running', runId);
            } else {
                // For other errors checking status, finalize with generic error
                finalizeStream('error', runId);
            }
        });
    }, [
        status,
        finalizeStream,
        updateStatus
    ]); // Include status
    // --- Effect to manage the stream lifecycle ---
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        isMountedRef.current = true;
        // Cleanup function for when the component unmounts or agentRunId changes
        return ()=>{
            isMountedRef.current = false;
            ;
            if (streamCleanupRef.current) {
                streamCleanupRef.current();
                streamCleanupRef.current = null;
            }
            // Reset state on unmount if needed, though finalizeStream should handle most cases
            setStatus('idle');
            setTextContent('');
            setToolCall(null);
            setError(null);
            setAgentRunId(null);
            currentRunIdRef.current = null;
        };
    }, []); // Empty dependency array for mount/unmount effect
    // --- Public Functions ---
    const startStreaming = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (runId, afterMessageId)=>{
        if (!isMountedRef.current) return;
        ;
        // Clean up any previous stream
        if (streamCleanupRef.current) {
            ;
            streamCleanupRef.current();
            streamCleanupRef.current = null;
        }
        // Reset state before starting
        setTextContent('');
        setToolCall(null);
        setError(null);
        updateStatus('connecting');
        setAgentRunId(runId);
        currentRunIdRef.current = runId; // Set the ref immediately
        try {
            ;
            const cleanup = afterMessageId ? (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .streamAgent */ .MA)(runId, {
                onMessage: handleStreamMessage,
                onError: handleStreamError,
                onClose: handleStreamClose
            }, afterMessageId) : (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .streamAgent */ .MA)(runId, {
                onMessage: handleStreamMessage,
                onError: handleStreamError,
                onClose: handleStreamClose
            });
            streamCleanupRef.current = cleanup;
        // Status will be updated to 'streaming' by the first message received in handleStreamMessage
        } catch (err) {
            if (!isMountedRef.current) return; // Check mount status after async call
            const errorMessage = err instanceof Error ? err.message : String(err);
            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error("[useAgentStream] Error initiating stream for ".concat(runId, ": ").concat(errorMessage));
            setError(errorMessage);
            const isNotFoundError = errorMessage.includes('not found') || errorMessage.includes('404') || errorMessage.includes('does not exist');
            finalizeStream(isNotFoundError ? 'agent_not_running' : 'error', runId);
        }
    }, [
        updateStatus,
        finalizeStream,
        handleStreamMessage,
        handleStreamError,
        handleStreamClose
    ]); // Add dependencies
    const stopStreaming = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        if (!isMountedRef.current || !agentRunId) return;
        try {
            sonner__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .oR.success('Agent is stopping. One moment please.');
            await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .stopAgent */ .eD)(agentRunId);
        } catch (err) {
            // Don't revert status here, as the user intended to stop. Just log error.
            const errorMessage = err instanceof Error ? err.message : String(err);
            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_4__/* .datadogLogs */ .yf.logger.error("[useAgentStream] Error sending stop request for ".concat(agentRunId, ": ").concat(errorMessage));
            sonner__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .oR.error("Failed to stop agent: ".concat(errorMessage));
            finalizeStream('stopped', agentRunId);
        }
    }, [
        agentRunId,
        finalizeStream
    ]);
    return {
        status,
        textContent,
        toolCall,
        error,
        agentRunId,
        startStreaming,
        stopStreaming
    };
}


/***/ }),

/***/ 43077:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"SyncfusionWordRenderer_root__mkdaz","loader":"SyncfusionWordRenderer_loader__0chiZ","nj-animate-horizontal-appearance-ltr-enter":"SyncfusionWordRenderer_nj-animate-horizontal-appearance-ltr-enter__SzSUr","nj-animate-horizontal-appearance-ltr-enter-active":"SyncfusionWordRenderer_nj-animate-horizontal-appearance-ltr-enter-active__yAn1S","nj-animate-horizontal-appearance-ltr-exit":"SyncfusionWordRenderer_nj-animate-horizontal-appearance-ltr-exit__UFGBB","nj-animate-horizontal-appearance-ltr-exit-active":"SyncfusionWordRenderer_nj-animate-horizontal-appearance-ltr-exit-active__PuqOm","nj-animate-left-panel-width-reduce-enter":"SyncfusionWordRenderer_nj-animate-left-panel-width-reduce-enter__nhMTi","nj-animate-left-panel-width-reduce-enter-active":"SyncfusionWordRenderer_nj-animate-left-panel-width-reduce-enter-active__6w2Ow","nj-animate-left-panel-width-reduce-exit":"SyncfusionWordRenderer_nj-animate-left-panel-width-reduce-exit__kU1mV","nj-animate-left-panel-width-reduce-exit-active":"SyncfusionWordRenderer_nj-animate-left-panel-width-reduce-exit-active__EEjY_","nj-animate-vertical-appearance-appear":"SyncfusionWordRenderer_nj-animate-vertical-appearance-appear__O9xsn","nj-animate-vertical-appearance-appear-active":"SyncfusionWordRenderer_nj-animate-vertical-appearance-appear-active__yitkW","nj-animate-vertical-appearance-enter":"SyncfusionWordRenderer_nj-animate-vertical-appearance-enter__dJWx8","nj-animate-vertical-appearance-enter-active":"SyncfusionWordRenderer_nj-animate-vertical-appearance-enter-active__hwFxR","nj-animate-vertical-appearance-exit":"SyncfusionWordRenderer_nj-animate-vertical-appearance-exit__haRx5","nj-animate-vertical-appearance-exit-active":"SyncfusionWordRenderer_nj-animate-vertical-appearance-exit-active__QQRhI","editor":"SyncfusionWordRenderer_editor__NGWJK","isHidden":"SyncfusionWordRenderer_isHidden__vN1qm","infinite-spinner":"SyncfusionWordRenderer_infinite-spinner__EFoJU","fadeIn":"SyncfusionWordRenderer_fadeIn__h7CNP","blinking":"SyncfusionWordRenderer_blinking__ciZd_","movingRight":"SyncfusionWordRenderer_movingRight___9EQG"};

/***/ }),

/***/ 46678:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"panel":"SidePanel_panel__rQu4T","content":"SidePanel_content__FLBML","panelMainContent":"SidePanel_panelMainContent__uPq0N","nj-animate-horizontal-appearance-ltr-enter":"SidePanel_nj-animate-horizontal-appearance-ltr-enter__FjUqy","nj-animate-horizontal-appearance-ltr-enter-active":"SidePanel_nj-animate-horizontal-appearance-ltr-enter-active__lEV2A","nj-animate-horizontal-appearance-ltr-exit":"SidePanel_nj-animate-horizontal-appearance-ltr-exit__1ZVvt","nj-animate-horizontal-appearance-ltr-exit-active":"SidePanel_nj-animate-horizontal-appearance-ltr-exit-active__8x8fC","nj-animate-left-panel-width-reduce-enter":"SidePanel_nj-animate-left-panel-width-reduce-enter__830Q1","nj-animate-left-panel-width-reduce-enter-active":"SidePanel_nj-animate-left-panel-width-reduce-enter-active__DK4K_","nj-animate-left-panel-width-reduce-exit":"SidePanel_nj-animate-left-panel-width-reduce-exit___Npc6","nj-animate-left-panel-width-reduce-exit-active":"SidePanel_nj-animate-left-panel-width-reduce-exit-active__JfSKM","nj-animate-vertical-appearance-appear":"SidePanel_nj-animate-vertical-appearance-appear__XXhU2","nj-animate-vertical-appearance-appear-active":"SidePanel_nj-animate-vertical-appearance-appear-active__9QU9y","nj-animate-vertical-appearance-enter":"SidePanel_nj-animate-vertical-appearance-enter__BayhQ","nj-animate-vertical-appearance-enter-active":"SidePanel_nj-animate-vertical-appearance-enter-active__66LrH","nj-animate-vertical-appearance-exit":"SidePanel_nj-animate-vertical-appearance-exit__pOmdP","nj-animate-vertical-appearance-exit-active":"SidePanel_nj-animate-vertical-appearance-exit-active__KEZkh","container":"SidePanel_container__i9PpJ","dragging":"SidePanel_dragging__ku0KZ","innerContainer":"SidePanel_innerContainer__QnMUl","panelTransition":"SidePanel_panelTransition__tVlSI","panelMaximized":"SidePanel_panelMaximized__atsaR","panelResponsive":"SidePanel_panelResponsive__kfqLN","panelClosed":"SidePanel_panelClosed__lMop_","infinite-spinner":"SidePanel_infinite-spinner__sHJZh","fadeIn":"SidePanel_fadeIn__Kkn82","blinking":"SidePanel_blinking__2P45g","movingRight":"SidePanel_movingRight__B506D"};

/***/ }),

/***/ 47500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Vx: () => (/* binding */ MessageComponent),
  v5: () => (/* binding */ renderAttachments),
  bJ: () => (/* binding */ renderMarkdownContent)
});

// UNUSED EXPORTS: AllFilesBtn

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./src/lib/utils/threadUtils.ts + 1 modules
var threadUtils = __webpack_require__(99699);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/MicrosoftExcelLogo.es.js
var MicrosoftExcelLogo_es = __webpack_require__(86017);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/FileCsv.es.js + 1 modules
var FileCsv_es = __webpack_require__(40643);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/FilePpt.es.js + 1 modules
var FilePpt_es = __webpack_require__(37972);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/FileText.es.js + 1 modules
var FileText_es = __webpack_require__(45878);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/FileMd.es.js + 1 modules
var FileMd_es = __webpack_require__(87096);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/FilePdf.es.js
var FilePdf_es = __webpack_require__(99875);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/FileDoc.es.js + 1 modules
var FileDoc_es = __webpack_require__(43421);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/FileHtml.es.js + 1 modules
var FileHtml_es = __webpack_require__(93000);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/FileCss.es.js + 1 modules
var FileCss_es = __webpack_require__(55790);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/FileCode.es.js + 1 modules
var FileCode_es = __webpack_require__(59320);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/File.es.js + 1 modules
var File_es = __webpack_require__(51296);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
;// ./src/components/ui/FileExtensionIcon/FileExtensionIcon.tsx




const FileExtensionIcon = (param)=>{
    let { extension } = param;
    const IconComponent = (0,react.useMemo)(()=>{
        switch(extension){
            case 'xls':
            case 'xlsx':
            case 'xlsm':
            case 'xlsb':
            case 'xlt':
            case 'xltx':
            case 'xltm':
                return MicrosoftExcelLogo_es/* MicrosoftExcelLogoIcon */.M;
            case 'csv':
                return FileCsv_es/* FileCsvIcon */.a;
            case 'ppt':
            case 'pptx':
            case 'pps':
            case 'ppsx':
            case 'pot':
            case 'potx':
                return FilePpt_es/* FilePptIcon */.Q;
            case 'txt':
                return FileText_es/* FileTextIcon */.d;
            case 'md':
            case 'markdown':
                return FileMd_es/* FileMdIcon */.X;
            case 'pdf':
                return FilePdf_es/* FilePdfIcon */.y;
            case 'doc':
            case 'docx':
            case 'dot':
            case 'dotx':
            case 'rtf':
            case 'odt':
                return FileDoc_es/* FileDocIcon */.w;
            case 'html':
                return FileHtml_es/* FileHtmlIcon */.N;
            case 'css':
            case 'scss':
            case 'sass':
            case 'less':
                return FileCss_es/* FileCssIcon */.h;
            case 'js':
            case 'jsx':
            case 'ts':
            case 'tsx':
            case 'json':
            case 'xml':
            case 'yml':
            case 'yaml':
            case 'sql':
            case 'sh':
            case 'bat':
            case 'c':
            case 'cpp':
            case 'h':
            case 'hpp':
            case 'java':
            case 'kt':
            case 'swift':
            case 'php':
            case 'rb':
            case 'py':
            case 'go':
            case 'rs':
            case 'pl':
            case 'lua':
            case 'r':
            case 'm':
            case 'asm':
            case 'vue':
            case 'svelte':
            case 'toml':
            case 'ini':
            case 'cfg':
                return FileCode_es/* FileCodeIcon */.b;
            default:
                return File_es/* FileIcon */.o;
        }
    }, [
        extension
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(IconComponent, {
        size: constants/* SVG_SIZE_L */.uUe
    });
};

;// ./src/components/ui/FileExtensionIcon/index.ts


// EXTERNAL MODULE: ./node_modules/@datadog/browser-logs/esm/entries/main.js + 109 modules
var main = __webpack_require__(73262);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/GlobeSimple.es.js + 1 modules
var GlobeSimple_es = __webpack_require__(2625);
// EXTERNAL MODULE: ./src/lib/api.ts
var api = __webpack_require__(90960);
// EXTERNAL MODULE: ./src/components/thread/utils.ts
var utils = __webpack_require__(49595);
// EXTERNAL MODULE: ./src/lib/utils/sandbox-proxy-utils.ts
var sandbox_proxy_utils = __webpack_require__(88108);
// EXTERNAL MODULE: ./src/components/thread/DeployedWebLink/DeployedWebLink.module.scss
var DeployedWebLink_module = __webpack_require__(17110);
var DeployedWebLink_module_default = /*#__PURE__*/__webpack_require__.n(DeployedWebLink_module);
;// ./src/components/thread/DeployedWebLink/DeployedWebLink.tsx
/* __next_internal_client_entry_do_not_use__ DeployedWebLink auto */ 








const DeployedWebLink = (param)=>{
    let { href, asyncUrlConfig } = param;
    const [fetchedUrl, setFetchedUrl] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        if (!asyncUrlConfig) return;
        const { threadId, assistantMessageId, assistantToToolMsgIdMap } = asyncUrlConfig;
        const fetchToolMessage = async ()=>{
            if (!assistantMessageId || !assistantToToolMsgIdMap) return;
            const mapValue = assistantToToolMsgIdMap.get(assistantMessageId);
            if (!mapValue) return;
            // Handle both map value formats
            const toolMsgId = typeof mapValue === 'string' ? mapValue : mapValue.toolId;
            try {
                const { message } = await (0,api/* getMessageById */.kA)({
                    threadId,
                    messageId: toolMsgId
                });
                const toolOutput = (0,utils/* parseToolResultOutput */.qH)(message.content);
                // If shortcode exists, use the url from tool output
                if ((toolOutput === null || toolOutput === void 0 ? void 0 : toolOutput.shortcode) && (toolOutput === null || toolOutput === void 0 ? void 0 : toolOutput.url)) {
                    setFetchedUrl(toolOutput.url);
                }
            } catch (err) {
                main/* datadogLogs */.yf.logger.error('Failed to fetch tool message', {
                    threadId,
                    assistantMessageId
                }, err);
            }
        };
        fetchToolMessage();
    }, [
        asyncUrlConfig
    ]);
    let displayUrl;
    if (href) {
        // Use fixed url if given
        displayUrl = href;
    } else if (fetchedUrl) {
        // Otherwise use url from expose-port tool message (short url)
        displayUrl = fetchedUrl;
    } else if (asyncUrlConfig) {
        // Otherwise generate url with given { threadId, port }
        const { threadId, fallbackPort } = asyncUrlConfig;
        displayUrl = sandbox_proxy_utils/* TEMP_WEBSITE_DEPLOYMENT_PORTS */.aZ.includes(fallbackPort) ? (0,sandbox_proxy_utils/* getSandboxProxyUrl */.nu)(threadId, 'site') : (0,sandbox_proxy_utils/* getSandboxProxyUrl */.nu)(threadId, 'app', fallbackPort);
    } else {
        displayUrl = '#';
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
        href: displayUrl,
        target: "_blank",
        rel: "noreferrer",
        className: (DeployedWebLink_module_default()).root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: (DeployedWebLink_module_default()).icon,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GlobeSimple_es/* GlobeSimpleIcon */.n, {
                    weight: "fill",
                    size: constants/* SVG_SIZE_M */.ng3
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: (DeployedWebLink_module_default()).content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: (DeployedWebLink_module_default()).title,
                        children: "ninjatech-ai"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: (DeployedWebLink_module_default()).caption,
                        children: displayUrl
                    })
                ]
            })
        ]
    });
};

;// ./src/components/thread/DeployedWebLink/index.ts


// EXTERNAL MODULE: ./src/components/ui/markdown.tsx + 1 modules
var markdown = __webpack_require__(7811);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/FolderSimple.es.js + 1 modules
var FolderSimple_es = __webpack_require__(72551);
// EXTERNAL MODULE: ./src/components/thread/ToolButton/index.ts + 1 modules
var ToolButton = __webpack_require__(52976);
// EXTERNAL MODULE: ./src/components/thread/Message/MessageComponent.module.scss
var MessageComponent_module = __webpack_require__(14665);
var MessageComponent_module_default = /*#__PURE__*/__webpack_require__.n(MessageComponent_module);
// EXTERNAL MODULE: ./src/lib/utils.ts
var lib_utils = __webpack_require__(64269);
// EXTERNAL MODULE: ./src/types/index.ts + 2 modules
var types = __webpack_require__(37893);
// EXTERNAL MODULE: ./src/components/thread/UserMessage/index.ts + 1 modules
var UserMessage = __webpack_require__(26077);
// EXTERNAL MODULE: ./src/assets/icons/ninjaStarIcon.tsx
var ninjaStarIcon = __webpack_require__(84832);
// EXTERNAL MODULE: ./src/components/thread/Feedback/index.tsx + 4 modules
var Feedback = __webpack_require__(73805);
// EXTERNAL MODULE: ./src/components/thread/ThreadDebug/components/UserMessageDebugComponent/index.ts + 1 modules
var UserMessageDebugComponent = __webpack_require__(20421);
// EXTERNAL MODULE: ./src/components/thread/ThreadDebug/components/AssistantMessageDebugComponent/index.ts + 1 modules
var AssistantMessageDebugComponent = __webpack_require__(96603);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/CheckCircle.es.js
var CheckCircle_es = __webpack_require__(80399);
// EXTERNAL MODULE: ./src/components/thread/MarkdownParagraphWithIcon/MarkdownParagraphWithIcon.module.scss
var MarkdownParagraphWithIcon_module = __webpack_require__(28710);
var MarkdownParagraphWithIcon_module_default = /*#__PURE__*/__webpack_require__.n(MarkdownParagraphWithIcon_module);
;// ./src/components/thread/MarkdownParagraphWithIcon/MarkdownParagraphWithIcon.tsx





const MarkdownParagraphWithIcon = (param)=>{
    let { paragraph, shouldHideCheckMarks } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-row items-start gap-2",
            children: [
                !shouldHideCheckMarks && /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircle_es/* CheckCircleIcon */.C, {
                    size: constants/* SVG_SIZE_M */.ng3,
                    className: (MarkdownParagraphWithIcon_module_default()).checkIcon,
                    weight: "fill"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(markdown/* Markdown */.o, {
                    className: "text-sm prose prose-sm dark:prose-invert chat-markdown max-w-none inline-block mr-1 break-words",
                    children: paragraph
                })
            ]
        })
    });
};

;// ./src/components/thread/MarkdownParagraphWithIcon/index.ts


// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.mjs
var dist = __webpack_require__(5379);
// EXTERNAL MODULE: ./src/gen/sn-api/models/index.ts + 31 modules
var models = __webpack_require__(61330);
// EXTERNAL MODULE: ./src/components/thread/Message/constants.ts
var Message_constants = __webpack_require__(87039);
// EXTERNAL MODULE: ./src/hooks/sidePanel/index.ts + 3 modules
var sidePanel = __webpack_require__(2802);
// EXTERNAL MODULE: ./src/hooks/selectedExternalFile/index.ts + 2 modules
var selectedExternalFile = __webpack_require__(35194);
// EXTERNAL MODULE: ./node_modules/posthog-js/react/dist/esm/index.js
var esm = __webpack_require__(26302);
// EXTERNAL MODULE: ./src/components/ui/Button/index.tsx
var Button = __webpack_require__(3595);
// EXTERNAL MODULE: ./src/assets/icons/vscodeIcon.tsx
var vscodeIcon = __webpack_require__(73028);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/ArrowSquareOut.es.js
var ArrowSquareOut_es = __webpack_require__(31271);
// EXTERNAL MODULE: ./src/components/thread/LaunchVsCodeButton/LaunchVsCodeButton.module.scss
var LaunchVsCodeButton_module = __webpack_require__(29582);
var LaunchVsCodeButton_module_default = /*#__PURE__*/__webpack_require__.n(LaunchVsCodeButton_module);
;// ./src/components/thread/LaunchVsCodeButton/LaunchVsCodeButton.tsx






const LaunchVsCodeButton = (vsCodeLink)=>{
    const handleClick = ()=>{
        window.open(vsCodeLink, '_blank', 'noopener,noreferrer');
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
        color: "highlight",
        onClick: handleClick,
        className: (LaunchVsCodeButton_module_default()).root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(vscodeIcon/* VSCodeIcon */.W, {
                className: "h-5 w-5",
                variant: "secondary"
            }),
            "Open Ninja AI Code Studio",
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowSquareOut_es/* ArrowSquareOutIcon */.k, {
                size: constants/* SVG_SIZE_M */.ng3
            })
        ]
    });
};

;// ./src/components/thread/LaunchVsCodeButton/index.ts


// EXTERNAL MODULE: ./src/hooks/use-in-react-native-webview.ts
var use_in_react_native_webview = __webpack_require__(75664);
// EXTERNAL MODULE: ./src/components/ui/ButtonTryOnDesktop/index.tsx + 1 modules
var ButtonTryOnDesktop = __webpack_require__(29345);
// EXTERNAL MODULE: ./src/components/thread/chat-input/components/EmailNotificationsDropdown/index.ts + 4 modules
var EmailNotificationsDropdown = __webpack_require__(64194);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/LockSimple.es.js + 1 modules
var LockSimple_es = __webpack_require__(3851);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Eye.es.js + 1 modules
var Eye_es = __webpack_require__(57264);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/RocketLaunch.es.js
var RocketLaunch_es = __webpack_require__(52684);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(85203);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/lib/utils/deploy-utils.ts
var deploy_utils = __webpack_require__(68981);
// EXTERNAL MODULE: ./src/components/thread/SitePreview/SitePreview.module.scss
var SitePreview_module = __webpack_require__(8078);
var SitePreview_module_default = /*#__PURE__*/__webpack_require__.n(SitePreview_module);
// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button_Button = __webpack_require__(62717);
// EXTERNAL MODULE: ./src/components/ui/SpinnerSimple/index.tsx
var SpinnerSimple = __webpack_require__(2726);
;// ./src/components/thread/SitePreview/SitePreview.tsx









const SitePreview = (param)=>{
    let { url, isPreview, pageTitle, onSubmitMessage } = param;
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    const iframeRef = (0,react.useRef)(null);
    const iframeUrl = (0,react.useMemo)(()=>{
        try {
            const urlObj = new URL(url);
            urlObj.searchParams.set('hideControls', 'true');
            return urlObj.toString();
        } catch (e) {
            return url;
        }
    }, [
        url
    ]);
    const handlePublishClick = ()=>{
        if (onSubmitMessage) {
            (0,deploy_utils/* deployWebsiteUsingAgent */.Y)(onSubmitMessage);
        }
    };
    const displayTitle = pageTitle || (isPreview ? 'Private website' : 'Public website');
    const showSubtitle = !!pageTitle;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (SitePreview_module_default()).root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (SitePreview_module_default()).header,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (SitePreview_module_default()).headerLeft,
                        children: [
                            isPreview ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LockSimple_es/* LockSimpleIcon */.h, {
                                size: constants/* SVG_SIZE_M */.ng3,
                                className: (SitePreview_module_default()).icon
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(GlobeSimple_es/* GlobeSimpleIcon */.n, {
                                size: constants/* SVG_SIZE_M */.ng3,
                                className: (SitePreview_module_default()).icon,
                                weight: "fill"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (SitePreview_module_default()).titleContainer,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (SitePreview_module_default()).title,
                                        children: displayTitle
                                    }),
                                    showSubtitle && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (SitePreview_module_default()).subtitle,
                                        children: isPreview ? 'Private website' : 'Public website'
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (SitePreview_module_default()).headerRight,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button_Button/* Button */.$, {
                                as: "a",
                                color: "link",
                                size: "small",
                                href: url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Eye_es/* EyeIcon */.b, {
                                        size: constants/* SVG_SIZE_M */.ng3
                                    }),
                                    "View"
                                ]
                            }),
                            isPreview && onSubmitMessage && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button_Button/* Button */.$, {
                                color: "link",
                                size: "small",
                                onClick: handlePublishClick,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(RocketLaunch_es/* RocketLaunchIcon */.P, {
                                        size: constants/* SVG_SIZE_M */.ng3
                                    }),
                                    "Publish"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (SitePreview_module_default()).previewContainer,
                children: [
                    isLoading && /*#__PURE__*/ (0,jsx_runtime.jsx)(SpinnerSimple/* SpinnerSimple */.c, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
                        ref: iframeRef,
                        src: iframeUrl,
                        title: isPreview ? 'Site Preview' : 'Production Site',
                        onLoad: ()=>setIsLoading(false),
                        className: classnames_default()((SitePreview_module_default()).iframe, {
                            [(SitePreview_module_default()).isHidden]: isLoading
                        }),
                        sandbox: "allow-same-origin allow-scripts"
                    })
                ]
            })
        ]
    });
};

;// ./src/components/thread/SitePreview/index.ts


// EXTERNAL MODULE: ./src/lib/utils/url.ts
var url = __webpack_require__(84319);
;// ./src/components/thread/Message/MessageComponent.tsx
































// -----------------------------------------------------------------------------
//  Performance helpers (memoised regex & JSON parsing + efficient tool detection)
// -----------------------------------------------------------------------------
// Pre-compiled, global RegExp instances.  These are expensive to create, so we
// define them once at module scope instead of inside frequently-called helpers.
const XML_TAG_REGEX = new RegExp("<(".concat(Message_constants/* WHITELISTED_XML_TAGS */.N, ")(?:\\s+[^>]*)?>(?:[\\s\\S]*?)<\\/\\1>|<(").concat(Message_constants/* WHITELISTED_XML_TAGS */.N, ")(?:\\s+[^>]*)?\\/>"), 'g');
const ATTACHMENT_REGEX = /\[Uploaded File: (.*?)\]/g;
const AllFilesBtn = ()=>{
    const { setSelectedExternalFilepath } = (0,selectedExternalFile/* useSelectedFileActions */.g)();
    const { toggleFileDirectoryPanelOpened } = (0,sidePanel/* useSidePanelActions */.ij)();
    const handleAllFilesClick = ()=>{
        toggleFileDirectoryPanelOpened(true);
        setSelectedExternalFilepath('/workspace');
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        onClick: handleAllFilesClick,
        className: (MessageComponent_module_default()).attachment,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (MessageComponent_module_default()).attachmentWrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (MessageComponent_module_default()).fileIconWrapper,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FolderSimple_es/* FolderSimpleIcon */.q, {
                        size: constants/* SVG_SIZE_M */.ng3
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (MessageComponent_module_default()).attachmentTitleWrapper,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (MessageComponent_module_default()).attachmentTitle,
                        children: "All Files"
                    })
                })
            ]
        })
    }, 'files-in-task-btn');
};
// Render Markdown content while preserving XML tags that should be displayed as tool calls
function renderMarkdownContent(contentInput, handleToolClick, messageId, fileViewerHandler, getToolContent, isSidePanelOpen, agentType, threadId, isSandboxProxyEnabled, sandboxProvider, isInReactNativeWebView, hasFilesInWorkspace, shouldHideCheckMarks, assistantToToolMsgIdMap, onSubmitMessage, htmlTitle, isSitePreviewEnabled) {
    // Normalize incoming content to a string for markdown rendering
    let content = (0,utils/* normalizeContentToMarkdownString */.Yx)(contentInput);
    // Re-use the precompiled regex.  Reset lastIndex because it is global with the /g flag.
    const xmlRegex = XML_TAG_REGEX;
    xmlRegex.lastIndex = 0;
    let lastIndex = 0;
    const contentParts = [];
    let match;
    // Hack to replace temporary sandbox URLs with permanent proxy URLs when
    // llm decides to repeat a link in a message
    if (isSandboxProxyEnabled && (0,sandbox_proxy_utils/* containsTemporarySandboxUrl */.Br)(content)) {
        const port = (0,sandbox_proxy_utils/* extractTemporarySandboxPortFromUrl */.WU)(content);
        const sandboxUrl = sandbox_proxy_utils/* TEMP_WEBSITE_DEPLOYMENT_PORTS */.aZ.includes(port) ? (0,sandbox_proxy_utils/* getSandboxProxyUrl */.nu)(threadId, 'site') : (0,sandbox_proxy_utils/* getSandboxProxyUrl */.nu)(threadId, 'app', port);
        content = content.replace(sandbox_proxy_utils/* TEMPORARY_SANDBOX_SERVICE_URL_REGEX */.c4, sandboxUrl);
    }
    // If no XML tags found, just return the full content as markdown
    if (!content.match(xmlRegex)) {
        // Check if this is a message to launch VS Code directly from the message
        const vsCodeLink = (0,sandbox_proxy_utils/* extractVsCodeUrlFromVsCodeLink */.tj)(content);
        if (vsCodeLink) {
            content = content.replace(sandbox_proxy_utils/* VS_CODE_BUTTON_LINK_REGEX */.cL, '');
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(markdown/* Markdown */.o, {
                    className: "text-sm prose prose-sm dark:prose-invert chat-markdown max-w-none break-words",
                    children: content
                }),
                vsCodeLink && (isInReactNativeWebView ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonTryOnDesktop/* ButtonTryOnDesktop */.Vg, {
                    asChild: true,
                    children: LaunchVsCodeButton(vsCodeLink)
                }) : LaunchVsCodeButton(vsCodeLink))
            ]
        });
    }
    while((match = xmlRegex.exec(content)) !== null){
        // Add text before the tag as markdown
        if (match.index > lastIndex) {
            const textBeforeTag = content.substring(lastIndex, match.index);
            if (textBeforeTag.trim() !== '') {
                contentParts.push(/*#__PURE__*/ (0,jsx_runtime.jsx)(MarkdownParagraphWithIcon, {
                    paragraph: textBeforeTag,
                    shouldHideCheckMarks: shouldHideCheckMarks,
                    onSubmitMessage: onSubmitMessage,
                    htmlTitle: htmlTitle
                }, "md-".concat(lastIndex, "-").concat(messageId)));
            }
            const detectedUrl = isSitePreviewEnabled && (0,url/* detectSiteUrls */.ht)(textBeforeTag);
            if (detectedUrl) {
                contentParts.push(/*#__PURE__*/ (0,jsx_runtime.jsx)(SitePreview, {
                    url: detectedUrl.url,
                    isPreview: detectedUrl.isPreview,
                    pageTitle: htmlTitle,
                    onSubmitMessage: onSubmitMessage
                }, "site-preview-".concat(lastIndex, "-").concat(messageId)));
            }
        }
        const rawXml = match[0];
        const toolName = match[1] || match[2];
        const paramDisplay = (0,utils/* extractPrimaryParam */.D5)(toolName, rawXml);
        const toolCallKey = "tool-".concat(match.index);
        if (toolName === 'ask') {
            // Extract attachments from the XML attributes
            const attachmentsMatch = rawXml.match(/attachments=["']([^"']*)["']/i);
            const attachments = attachmentsMatch ? attachmentsMatch[1].split(',').map((a)=>a.trim()) : [];
            // Extract content from the ask tag
            const contentMatch = rawXml.match(/<ask[^>]*>([\s\S]*?)<\/ask>/i);
            const askContent = contentMatch ? contentMatch[1] : '';
            const detectedUrl = isSitePreviewEnabled && (0,url/* detectSiteUrls */.ht)(askContent);
            // Render <ask> tag content with attachment UI (using the helper)
            contentParts.push(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(markdown/* Markdown */.o, {
                        className: "text-sm prose prose-sm dark:prose-invert chat-markdown max-w-none break-words [&>:first-child]:mt-0 prose-headings:mt-3",
                        children: askContent
                    }),
                    detectedUrl && /*#__PURE__*/ (0,jsx_runtime.jsx)(SitePreview, {
                        url: detectedUrl === null || detectedUrl === void 0 ? void 0 : detectedUrl.url,
                        isPreview: detectedUrl.isPreview,
                        pageTitle: htmlTitle,
                        onSubmitMessage: onSubmitMessage
                    }, "site-preview-".concat(lastIndex, "-").concat(messageId)),
                    renderAttachments({
                        attachments,
                        isSidePanelOpen,
                        fileViewerHandler,
                        hasFilesInWorkspace
                    })
                ]
            }, "ask-".concat(match.index)));
        } else {
            let completeContent = '';
            if (toolName === 'complete' && rawXml) {
                const contentMatch = rawXml.match(/<complete[^>]*>([\s\S]*?)<\/complete>/i);
                if (contentMatch) {
                    completeContent = contentMatch[1].trim();
                }
            }
            contentParts.push(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "pl-7 py-1",
                children: [
                    completeContent && /*#__PURE__*/ (0,jsx_runtime.jsx)(markdown/* Markdown */.o, {
                        className: (0,lib_utils.cn)('text-sm prose prose-sm dark:prose-invert chat-markdown max-w-none [&>:first-child]:mt-0 prose-headings:mt-3'),
                        children: completeContent
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolButton/* ToolButton */.T, {
                        toolName: toolName,
                        paramDisplay: paramDisplay,
                        onClick: ()=>handleToolClick(messageId, toolName)
                    }, toolCallKey),
                    toolName === 'complete' && hasFilesInWorkspace && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (MessageComponent_module_default()).fileTaskBtn,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AllFilesBtn, {})
                    })
                ]
            }, toolCallKey));
            if (toolName === 'deploy') {
                const currentToolMessage = getToolContent(messageId, toolName);
                if (!currentToolMessage) {
                    return;
                }
                const href = (0,threadUtils/* extractWebsiteUrl */.YN)(currentToolMessage.content);
                if (href) {
                    contentParts.push(/*#__PURE__*/ (0,jsx_runtime.jsx)(DeployedWebLink, {
                        href: href
                    }, "".concat(toolCallKey, "-deploy")));
                }
            }
            if (toolName === 'expose-port' && isSandboxProxyEnabled) {
                const port = (0,sandbox_proxy_utils/* extractPortFromExposePortToolRawXml */.vq)(rawXml);
                contentParts.push(/*#__PURE__*/ (0,jsx_runtime.jsx)(DeployedWebLink, {
                    asyncUrlConfig: {
                        threadId,
                        assistantMessageId: messageId,
                        assistantToToolMsgIdMap,
                        fallbackPort: port
                    }
                }, "".concat(toolCallKey, "-expose-port")));
            }
        }
        lastIndex = xmlRegex.lastIndex;
    }
    // Add text after the last tag
    if (lastIndex < content.length) {
        contentParts.push(/*#__PURE__*/ (0,jsx_runtime.jsx)(markdown/* Markdown */.o, {
            className: "text-sm prose prose-sm dark:prose-invert chat-markdown max-w-none break-words",
            children: content.substring(lastIndex)
        }, "md-".concat(lastIndex)));
    }
    return contentParts;
}
// Helper function to render attachments (now deduplicated)
function renderAttachments(param) {
    let { attachments, isSidePanelOpen, fileViewerHandler, hasFilesInWorkspace } = param;
    if (!attachments || attachments.length === 0) return hasFilesInWorkspace ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (MessageComponent_module_default()).fileTaskBtn,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AllFilesBtn, {})
    }) : null;
    // Deduplicate attachments using Set for simplicity
    const uniqueAttachments = [
        ...new Set(attachments)
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (MessageComponent_module_default()).attachmentContainer,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (0,lib_utils.cn)((MessageComponent_module_default()).gridWrapper, {
                [(MessageComponent_module_default()).shouldBeDisplayedInTwoColumns]: !isSidePanelOpen
            }),
            children: [
                uniqueAttachments.map((attachment, idx)=>{
                    var _attachment_split_pop;
                    const extension = (_attachment_split_pop = attachment.split('.').pop()) === null || _attachment_split_pop === void 0 ? void 0 : _attachment_split_pop.toLowerCase();
                    const filename = attachment.split('/').pop() || 'file';
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        onClick: ()=>fileViewerHandler === null || fileViewerHandler === void 0 ? void 0 : fileViewerHandler(attachment),
                        className: (MessageComponent_module_default()).attachment,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (MessageComponent_module_default()).attachmentWrapper,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: (MessageComponent_module_default()).fileIconWrapper,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileExtensionIcon, {
                                        extension: extension
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: (MessageComponent_module_default()).attachmentTitleWrapper,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: (MessageComponent_module_default()).attachmentTitle,
                                        children: filename
                                    })
                                })
                            ]
                        })
                    }, "attachment-".concat(idx));
                }),
                hasFilesInWorkspace && /*#__PURE__*/ (0,jsx_runtime.jsx)(AllFilesBtn, {})
            ]
        })
    });
}
const MessageComponent = (param)=>{
    let { group, groupIndex, totalGroups, isLastGroup, showUndoAIActions = false, groupAgentRun, streamHookStatus, streamingText, streamingDetectedTag, streamingToolCall, agentStatus, showPaywall, isComputerPanelOpen, isFileDirectoryPanelOpen, latestMessageRef, handleToolClick, handleOpenFileViewer, getToolContent, groupType, isDebugMode, isTemporaryAssistantMessage, sandboxProvider, currentCommand, agentType, sharePage, hasFilesInWorkspace, assistantToToolMsgIdMap, onSubmitMessage, htmlTitle: htmlTitleProp } = param;
    const { resolvedTheme } = (0,dist/* useTheme */.D)();
    const isDarkMode = resolvedTheme === 'dark';
    const isInReactNativeWebView = (0,use_in_react_native_webview/* useInReactNativeWebView */.M)(true);
    // Use htmlTitle from props (extracted at page level from all messages) or fallback to group-level extraction
    const htmlTitle = (0,react.useMemo)(()=>htmlTitleProp !== null && htmlTitleProp !== void 0 ? htmlTitleProp : (0,utils/* extractHtmlTitleFromMessages */.J7)(group.messages), [
        htmlTitleProp,
        group.messages
    ]);
    const isSitePreviewEnabled = (0,esm/* useFeatureFlagEnabled */.Tp)('sitePreview');
    const shouldShowEmailDropdown = (groupAgentRun === null || groupAgentRun === void 0 ? void 0 : groupAgentRun.agent_type) && [
        models/* AgentType */.Eo.DEEP_RESEARCHER,
        models/* AgentType */.Eo.DEEP_CODER,
        models/* AgentType */.Eo.DEFAULT,
        models/* AgentType */.Eo.DUAL_MODEL
    ].includes(groupAgentRun.agent_type);
    if (group.type === 'user') {
        const message = group.messages[0];
        const messageContent = (()=>{
            try {
                const parsed = (0,utils/* cachedSafeJsonParse */.$W)(message.content, {
                    content: message.content
                });
                return parsed.content || message.content;
            } catch (e) {
                return message.content;
            }
        })();
        const attachmentsMatch = messageContent.match(ATTACHMENT_REGEX);
        const attachments = attachmentsMatch ? attachmentsMatch.map((match)=>{
            const pathMatch = match.match(/\[Uploaded File: (.*?)\]/);
            return pathMatch ? pathMatch[1] : null;
        }).filter(Boolean) : [];
        const cleanContent = messageContent.replace(/\[Uploaded File: .*?\]/g, '').trim();
        const attachmentsComponent = renderAttachments({
            attachments,
            isSidePanelOpen: isComputerPanelOpen || isFileDirectoryPanelOpen,
            fileViewerHandler: handleOpenFileViewer
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                isDebugMode && /*#__PURE__*/ (0,jsx_runtime.jsx)(UserMessageDebugComponent/* UserMessageDebugComponent */.t, {
                    message: message
                }, "debug-".concat(group.key)),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(UserMessage/* UserMessage */.R, {
                    cleanContent: cleanContent,
                    id: message.agent_run_id,
                    children: attachmentsComponent
                })
            ]
        });
    }
    if (group.type === 'assistant_group') {
        var _group_messages_;
        return(// If the last historical message is not a complete message (agent is still running), should show no space in between
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            ref: isLastGroup ? latestMessageRef : null,
            className: "".concat(groupType != 'new' && isTemporaryAssistantMessage && groupIndex === totalGroups - 1 ? 'mb-0' : ''),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-col items-start gap-2 min-w-0 relative",
                    children: [
                        groupType != 'new' || !isTemporaryAssistantMessage ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center gap-2 text-zinc-800 dark:text-zinc-200",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ninjaStarIcon/* NinjaStarIcon */.g, {
                                    size: constants/* SVG_SIZE_L */.uUe
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "!text-sm !font-medium !leading-5 text-[#798286]",
                                    children: constants/* PROJECT_NAME */.cbb
                                })
                            ]
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-1 w-full pl-1",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (0,lib_utils.cn)('w-full rounded-lg bg-muted/5 pb-4 pb-3 text-sm', (MessageComponent_module_default()).streamingContent, {
                                    [(MessageComponent_module_default()).withStreamingIndicator]: groupType === 'new' && isLastGroup && (streamHookStatus === 'streaming' || streamHookStatus === 'connecting')
                                }),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-2",
                                        children: [
                                            (()=>{
                                                const elements = [];
                                                group.messages.forEach((message, msgIndex)=>{
                                                    if (message.type === 'assistant') {
                                                        const parsedContent = (0,utils/* cachedSafeJsonParse */.$W)(message.content, {});
                                                        const msgKey = message.message_id || "submsg-assistant-".concat(msgIndex);
                                                        if (!parsedContent.content) return;
                                                        const renderedContent = renderMarkdownContent(parsedContent.content, handleToolClick, message.message_id, handleOpenFileViewer, getToolContent, isComputerPanelOpen || isFileDirectoryPanelOpen, agentType, message.thread_id, true, sandboxProvider, isInReactNativeWebView, hasFilesInWorkspace, undefined, assistantToToolMsgIdMap, onSubmitMessage, htmlTitle, isSitePreviewEnabled);
                                                        elements.push(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                isDebugMode && /*#__PURE__*/ (0,jsx_runtime.jsx)(AssistantMessageDebugComponent/* AssistantMessageDebugComponent */.O, {
                                                                    message: message,
                                                                    msgIndex: msgIndex
                                                                }, "debug-".concat(msgKey)),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: msgIndex > 0 ? 'mt-2' : '',
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        className: "max-w-[90%] w-full prose prose-sm dark:prose-invert chat-markdown max-w-none [&>:first-child]:mt-0 prose-headings:mt-3",
                                                                        children: renderedContent
                                                                    })
                                                                }, msgKey)
                                                            ]
                                                        }, "elem-".concat(msgKey)));
                                                    }
                                                });
                                                return elements;
                                            })(),
                                            groupType === 'new' && isLastGroup && (streamHookStatus === 'streaming' || streamHookStatus === 'connecting') && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "mt-2",
                                                children: (()=>{
                                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                        children: [
                                                            streamingText && /*#__PURE__*/ (0,jsx_runtime.jsx)(markdown/* Markdown */.o, {
                                                                className: (0,lib_utils.cn)('text-sm prose prose-sm dark:prose-invert chat-markdown max-w-none [&>:first-child]:mt-0 prose-headings:mt-3', {
                                                                    streaming: streamHookStatus === 'streaming'
                                                                }),
                                                                children: streamingText
                                                            }),
                                                            streamingDetectedTag && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "mt-2 mb-1",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolButton/* ToolButton */.T, {
                                                                    paramDisplay: streamingDetectedTag,
                                                                    onClick: ()=>handleToolClick(null, streamingDetectedTag, true),
                                                                    inProgress: true
                                                                })
                                                            }),
                                                            streamingToolCall && !streamingDetectedTag && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "mt-2 mb-1",
                                                                children: (()=>{
                                                                    const toolName = streamingToolCall.name || streamingToolCall.xml_tag_name || 'Tool';
                                                                    const paramDisplay = (0,utils/* extractPrimaryParam */.D5)(toolName, streamingToolCall.arguments || '');
                                                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolButton/* ToolButton */.T, {
                                                                        paramDisplay: paramDisplay,
                                                                        toolName: toolName,
                                                                        inProgress: true
                                                                    });
                                                                })()
                                                            })
                                                        ]
                                                    });
                                                })()
                                            })
                                        ]
                                    }),
                                    groupType === 'new' && isLastGroup && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: (0,lib_utils.cn)((MessageComponent_module_default()).streamingIndicator, isDarkMode ? (MessageComponent_module_default()).dark : (MessageComponent_module_default()).light, {
                                            [(MessageComponent_module_default()).active]: (streamHookStatus === 'streaming' || streamHookStatus === 'connecting') && streamingText && currentCommand == types/* ChatCommand */.cz.CHAT,
                                            [(MessageComponent_module_default()).hidden]: streamHookStatus !== 'streaming' && streamHookStatus !== 'connecting' || currentCommand !== types/* ChatCommand */.cz.CHAT
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                !sharePage && !showPaywall && (groupAgentRun === null || groupAgentRun === void 0 ? void 0 : groupAgentRun.id) && (groupType === 'new' ? groupIndex < totalGroups - 1 || agentStatus !== 'running' && agentStatus !== 'connecting' : !isTemporaryAssistantMessage || groupIndex !== totalGroups - 1) && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(EmailNotificationsDropdown/* EmailNotificationsDropdown */.s, {
                            threadId: (_group_messages_ = group.messages[0]) === null || _group_messages_ === void 0 ? void 0 : _group_messages_.thread_id,
                            agentRunId: group.agentRunId,
                            agentType: agentType,
                            agentStatus: agentStatus,
                            sandboxProvider: sandboxProvider,
                            showUndoAIActions: showUndoAIActions,
                            shouldShowEmailDropdown: shouldShowEmailDropdown
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Feedback/* FeedbackRating */.P, {
                            groupAgentRun: groupAgentRun
                        })
                    ]
                })
            ]
        }));
    }
    return null;
};


/***/ }),

/***/ 48440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ FileIconLabel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40643);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93000);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99875);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45878);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79325);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14362);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78064);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20870);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55790);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61955);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14742);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86017);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33598);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(59320);
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51296);
/* harmony import */ var _FileIconLabel_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8035);
/* harmony import */ var _FileIconLabel_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FileIconLabel_module_scss__WEBPACK_IMPORTED_MODULE_1__);



const EXCEL_EXTS = new Set([
    'xls',
    'xlsx',
    'xlsm'
]);
const WORD_EXTS = new Set([
    'doc',
    'docx'
]);
const CODE_EXTS = new Set([
    'js',
    'jsx',
    'ts',
    'tsx',
    'py',
    'css',
    'scss',
    'sql'
]);
const iconMap = {
    csv: _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__/* .FileCsvIcon */ .a,
    html: _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_3__/* .FileHtmlIcon */ .N,
    htm: _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_3__/* .FileHtmlIcon */ .N,
    pdf: _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_4__/* .FilePdfIcon */ .y,
    md: _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_5__/* .FileTextIcon */ .d,
    markdown: _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_5__/* .FileTextIcon */ .d,
    txt: _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_5__/* .FileTextIcon */ .d,
    js: _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_6__/* .FileJsIcon */ .N,
    jsx: _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_7__/* .FileJsxIcon */ .b,
    ts: _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_8__/* .FileTsIcon */ .p,
    tsx: _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_9__/* .FileTsxIcon */ .p,
    css: _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_10__/* .FileCssIcon */ .h,
    scss: _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_10__/* .FileCssIcon */ .h,
    py: _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_11__/* .FilePyIcon */ .N,
    sql: _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_12__/* .FileSqlIcon */ .E
};
const FileIconLabel = (param)=>{
    let { fileName } = param;
    var _fileName_split_pop;
    var _fileName_split_pop_toLowerCase;
    const extension = (_fileName_split_pop_toLowerCase = (_fileName_split_pop = fileName.split('.').pop()) === null || _fileName_split_pop === void 0 ? void 0 : _fileName_split_pop.toLowerCase()) !== null && _fileName_split_pop_toLowerCase !== void 0 ? _fileName_split_pop_toLowerCase : '';
    const isExcel = EXCEL_EXTS.has(extension);
    const isWord = WORD_EXTS.has(extension);
    const isCode = CODE_EXTS.has(extension);
    let Icon = iconMap[extension];
    if (!Icon && isExcel) Icon = _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_13__/* .MicrosoftExcelLogoIcon */ .M;
    if (!Icon && isWord) Icon = _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_14__/* .MicrosoftWordLogoIcon */ .h;
    if (!Icon && isCode) Icon = _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_15__/* .FileCodeIcon */ .b;
    if (!Icon) Icon = _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_16__/* .FileIcon */ .o;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_FileIconLabel_module_scss__WEBPACK_IMPORTED_MODULE_1___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon, {
                size: 16
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: (_FileIconLabel_module_scss__WEBPACK_IMPORTED_MODULE_1___default().fileName),
                children: fileName
            })
        ]
    });
};


/***/ }),

/***/ 49491:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"leftSection":"PanelHeader_leftSection__12qka","titleWrapper":"PanelHeader_titleWrapper__tgck3","rightSection":"PanelHeader_rightSection__fqgOs","header":"PanelHeader_header___0P8l","title":"PanelHeader_title__b3XKA","nj-animate-horizontal-appearance-ltr-enter":"PanelHeader_nj-animate-horizontal-appearance-ltr-enter__Gh59B","nj-animate-horizontal-appearance-ltr-enter-active":"PanelHeader_nj-animate-horizontal-appearance-ltr-enter-active__1EMvl","nj-animate-horizontal-appearance-ltr-exit":"PanelHeader_nj-animate-horizontal-appearance-ltr-exit__sat7M","nj-animate-horizontal-appearance-ltr-exit-active":"PanelHeader_nj-animate-horizontal-appearance-ltr-exit-active__IPtrv","nj-animate-left-panel-width-reduce-enter":"PanelHeader_nj-animate-left-panel-width-reduce-enter__AsD9O","nj-animate-left-panel-width-reduce-enter-active":"PanelHeader_nj-animate-left-panel-width-reduce-enter-active__qQj1p","nj-animate-left-panel-width-reduce-exit":"PanelHeader_nj-animate-left-panel-width-reduce-exit__eZHaZ","nj-animate-left-panel-width-reduce-exit-active":"PanelHeader_nj-animate-left-panel-width-reduce-exit-active__Xb9hj","nj-animate-vertical-appearance-appear":"PanelHeader_nj-animate-vertical-appearance-appear__VarCS","nj-animate-vertical-appearance-appear-active":"PanelHeader_nj-animate-vertical-appearance-appear-active__rhfNw","nj-animate-vertical-appearance-enter":"PanelHeader_nj-animate-vertical-appearance-enter__gbXcP","nj-animate-vertical-appearance-enter-active":"PanelHeader_nj-animate-vertical-appearance-enter-active__X_Fhb","nj-animate-vertical-appearance-exit":"PanelHeader_nj-animate-vertical-appearance-exit__Z8X_X","nj-animate-vertical-appearance-exit-active":"PanelHeader_nj-animate-vertical-appearance-exit-active__ws3k3","container":"PanelHeader_container__4MQyT","maximizeButton":"PanelHeader_maximizeButton__Kh4rB","closeButton":"PanelHeader_closeButton__IpPjN","infinite-spinner":"PanelHeader_infinite-spinner__VpBRz","fadeIn":"PanelHeader_fadeIn__EI0__","blinking":"PanelHeader_blinking__nu5P0","movingRight":"PanelHeader_movingRight__7v_BA"};

/***/ }),

/***/ 52067:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"content":"UndoAIActionConfirmationModal_content__P2cXy","rollbackSection":"UndoAIActionConfirmationModal_rollbackSection__rEYDX","rollbackItem":"UndoAIActionConfirmationModal_rollbackItem__obNPP","errorSection":"UndoAIActionConfirmationModal_errorSection__NzEfH","actions":"UndoAIActionConfirmationModal_actions__xZOTt","title":"UndoAIActionConfirmationModal_title__SOLRh","sectionTitle":"UndoAIActionConfirmationModal_sectionTitle__aL_B6","rollbackHeader":"UndoAIActionConfirmationModal_rollbackHeader__6aMUl","rollbackDescription":"UndoAIActionConfirmationModal_rollbackDescription__Yb4ZZ","errorMessage":"UndoAIActionConfirmationModal_errorMessage__ByIom","nj-animate-horizontal-appearance-ltr-enter":"UndoAIActionConfirmationModal_nj-animate-horizontal-appearance-ltr-enter__ma2uT","nj-animate-horizontal-appearance-ltr-enter-active":"UndoAIActionConfirmationModal_nj-animate-horizontal-appearance-ltr-enter-active__vq3za","nj-animate-horizontal-appearance-ltr-exit":"UndoAIActionConfirmationModal_nj-animate-horizontal-appearance-ltr-exit__6vOxM","nj-animate-horizontal-appearance-ltr-exit-active":"UndoAIActionConfirmationModal_nj-animate-horizontal-appearance-ltr-exit-active__DfUDn","nj-animate-left-panel-width-reduce-enter":"UndoAIActionConfirmationModal_nj-animate-left-panel-width-reduce-enter__1iE3Y","nj-animate-left-panel-width-reduce-enter-active":"UndoAIActionConfirmationModal_nj-animate-left-panel-width-reduce-enter-active__xR5eB","nj-animate-left-panel-width-reduce-exit":"UndoAIActionConfirmationModal_nj-animate-left-panel-width-reduce-exit__Cc0_H","nj-animate-left-panel-width-reduce-exit-active":"UndoAIActionConfirmationModal_nj-animate-left-panel-width-reduce-exit-active__teF_q","nj-animate-vertical-appearance-appear":"UndoAIActionConfirmationModal_nj-animate-vertical-appearance-appear__KZHft","nj-animate-vertical-appearance-appear-active":"UndoAIActionConfirmationModal_nj-animate-vertical-appearance-appear-active__vm8lM","nj-animate-vertical-appearance-enter":"UndoAIActionConfirmationModal_nj-animate-vertical-appearance-enter__fIVbU","nj-animate-vertical-appearance-enter-active":"UndoAIActionConfirmationModal_nj-animate-vertical-appearance-enter-active__D2POv","nj-animate-vertical-appearance-exit":"UndoAIActionConfirmationModal_nj-animate-vertical-appearance-exit__5T7y6","nj-animate-vertical-appearance-exit-active":"UndoAIActionConfirmationModal_nj-animate-vertical-appearance-exit-active__ebVtx","root":"UndoAIActionConfirmationModal_root__BJmO0","infinite-spinner":"UndoAIActionConfirmationModal_infinite-spinner__pCkvi","fadeIn":"UndoAIActionConfirmationModal_fadeIn__6WwJy","blinking":"UndoAIActionConfirmationModal_blinking__AObGt","movingRight":"UndoAIActionConfirmationModal_movingRight__tjgvT"};

/***/ }),

/***/ 52976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* reexport */ ToolButton)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button = __webpack_require__(62717);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./src/lib/utils/threadUtils.ts + 1 modules
var threadUtils = __webpack_require__(99699);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/ArrowClockwise.es.js + 1 modules
var ArrowClockwise_es = __webpack_require__(92613);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/components/thread/ToolButton/ToolButton.module.scss
var ToolButton_module = __webpack_require__(67324);
var ToolButton_module_default = /*#__PURE__*/__webpack_require__.n(ToolButton_module);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(85203);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/utils/index.ts + 9 modules
var utils = __webpack_require__(19482);
;// ./src/components/thread/ToolButton/ToolButton.tsx
/* __next_internal_client_entry_do_not_use__ ToolButton auto */ 








const ToolButton = (param)=>{
    let { toolName, paramDisplay, inProgress, onClick } = param;
    const IconComponent = (0,react.useMemo)(()=>inProgress ? ArrowClockwise_es/* ArrowClockwiseIcon */.B : (0,threadUtils/* getToolIcon */.S8)(toolName || ''), [
        inProgress,
        toolName
    ]);
    const toolCreateTodo = toolName === 'create-file' && paramDisplay === 'todo.md' ? 'Create plan' : '';
    const toolDisplayName = (0,threadUtils/* getToolDisplayName */._R)(toolName);
    const paramDisplayName = (0,utils/* hideMdExtension */.di)(inProgress ? (0,threadUtils/* getToolDisplayName */._R)(paramDisplay) : paramDisplay);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
        "data-testid": "".concat(toolName).concat(paramDisplayName ? "-".concat(paramDisplayName) : '', "-tool-button"),
        size: "small",
        color: inProgress ? 'tertiary' : 'secondary',
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconComponent, {
                className: classnames_default()({
                    [(ToolButton_module_default()).iconSpin]: inProgress
                }),
                size: constants/* SVG_SIZE_S */.lgH
            }),
            toolCreateTodo ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: (ToolButton_module_default()).title,
                children: toolCreateTodo
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    toolDisplayName && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: (ToolButton_module_default()).title,
                        children: toolDisplayName
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: (ToolButton_module_default()).caption,
                        children: paramDisplayName
                    })
                ]
            })
        ]
    });
};

;// ./src/components/thread/ToolButton/index.ts



/***/ }),

/***/ 59685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ FileDirectoryPanel)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(3998);
// EXTERNAL MODULE: ./src/hooks/use-mobile.ts
var use_mobile = __webpack_require__(75409);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/house.js
var house = __webpack_require__(65993);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(27937);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader.js
var loader = __webpack_require__(42348);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var triangle_alert = __webpack_require__(52056);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/folder.js
var folder = __webpack_require__(59847);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(64269);
// EXTERNAL MODULE: ./src/components/file-renderers/index.tsx + 14 modules
var file_renderers = __webpack_require__(28773);
// EXTERNAL MODULE: ./src/lib/api.ts
var api = __webpack_require__(90960);
// EXTERNAL MODULE: ./src/hooks/selectedExternalFile/index.ts + 2 modules
var selectedExternalFile = __webpack_require__(35194);
// EXTERNAL MODULE: ./node_modules/sonner/dist/index.mjs
var dist = __webpack_require__(18720);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/CreditCard.es.js
var CreditCard_es = __webpack_require__(16552);
// EXTERNAL MODULE: ./src/constants/sizes.ts
var sizes = __webpack_require__(52012);
// EXTERNAL MODULE: ./src/components/payment/ManageSubscriptionButton/index.ts + 1 modules
var ManageSubscriptionButton = __webpack_require__(26930);
// EXTERNAL MODULE: ./src/components/payment/PaywallFileViewer/PaywallFileViewer.module.scss
var PaywallFileViewer_module = __webpack_require__(32782);
var PaywallFileViewer_module_default = /*#__PURE__*/__webpack_require__.n(PaywallFileViewer_module);
;// ./src/components/payment/PaywallFileViewer/PaywallFileViewer.tsx





const PaywallFileViewer = (param)=>{
    let { message } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (PaywallFileViewer_module_default()).root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (PaywallFileViewer_module_default()).icon,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CreditCard_es/* CreditCardIcon */.B, {
                    size: sizes/* SVG_SIZE_L */.uU
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (PaywallFileViewer_module_default()).content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                        className: (PaywallFileViewer_module_default()).title,
                        children: "Upgrade Required"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: (PaywallFileViewer_module_default()).message,
                        children: message
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ManageSubscriptionButton/* ManageSubscriptionButton */.D, {})
        ]
    });
};

;// ./src/components/payment/PaywallFileViewer/index.ts


// EXTERNAL MODULE: ./src/lib/utils/deploy-utils.ts
var deploy_utils = __webpack_require__(68981);
// EXTERNAL MODULE: ./src/store/services/index.ts + 9 modules
var services = __webpack_require__(57403);
// EXTERNAL MODULE: ./src/types/index.ts + 2 modules
var types = __webpack_require__(37893);
// EXTERNAL MODULE: ./node_modules/@datadog/browser-logs/esm/entries/main.js + 109 modules
var main = __webpack_require__(73262);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-react-filemanager/src/file-manager/filemanager.component.js + 5 modules
var filemanager_component = __webpack_require__(88420);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-react-base/index.js + 6 modules
var ej2_react_base = __webpack_require__(38576);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-filemanager/src/file-manager/layout/navigation-pane.js
var navigation_pane = __webpack_require__(20270);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-filemanager/src/file-manager/layout/details-view.js + 44 modules
var details_view = __webpack_require__(52814);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-filemanager/src/file-manager/layout/large-icons-view.js
var large_icons_view = __webpack_require__(38869);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-filemanager/src/file-manager/actions/toolbar.js
var toolbar = __webpack_require__(20859);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.mjs
var next_themes_dist = __webpack_require__(5379);
// EXTERNAL MODULE: ./src/components/FileManager/FileManager.module.scss
var FileManager_module = __webpack_require__(70117);
var FileManager_module_default = /*#__PURE__*/__webpack_require__.n(FileManager_module);
// EXTERNAL MODULE: ./src/hooks/index.ts + 39 modules
var hooks = __webpack_require__(71203);
;// ./src/components/FileManager/FileManager.tsx







const FileManager = (param)=>{
    let { files, openFile, view } = param;
    const fileManagerRef = (0,react.useRef)(null);
    const { resolvedTheme } = (0,next_themes_dist/* useTheme */.D)();
    const isDark = resolvedTheme === 'dark';
    const { isLoading } = (0,hooks/* useSyncfusionTheme */.IH)(isDark, fileManagerRef);
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "h-full w-full flex items-center justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(loader/* default */.A, {
                className: "h-6 w-6 animate-spin text-primary"
            })
        });
    }
    if (!(files === null || files === void 0 ? void 0 : files.length)) return null;
    const resultData = Array.from(files);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "".concat((FileManager_module_default()).fileManagerPanel, "  fm-scope"),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(filemanager_component/* FileManagerComponent */.h, {
            allowDragAndDrop: false,
            allowMultiSelection: false,
            ref: fileManagerRef,
            id: "flatdata",
            className: (FileManager_module_default()).fileManagerOverride,
            showItemCheckBoxes: false,
            fileOpen: openFile,
            view: view,
            fileSystemData: resultData,
            toolbarSettings: {
                visible: false
            },
            contextMenuSettings: {
                visible: false
            },
            height: '100%',
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ej2_react_base/* Inject */.y_, {
                services: [
                    navigation_pane/* NavigationPane */.n,
                    details_view/* DetailsView */.g,
                    large_icons_view/* LargeIconsView */.B,
                    toolbar/* Toolbar */.M
                ]
            })
        }, isDark ? 'dark' : 'light')
    });
};

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/list.js
var list = __webpack_require__(80003);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/layout-grid.js
var layout_grid = __webpack_require__(91456);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(2821);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./src/components/FileManager/ViewSwitcher/ViewSwitcher.module.scss
var ViewSwitcher_module = __webpack_require__(6817);
var ViewSwitcher_module_default = /*#__PURE__*/__webpack_require__.n(ViewSwitcher_module);
;// ./src/components/FileManager/ViewSwitcher/ViewSwitcher.tsx
// Temporary file: The view mode change should ideally be uncontrolled.
// This will be removed once I receive a response from the Syncfusion team.
/* __next_internal_client_entry_do_not_use__ ViewSwitcher auto */ 




const ViewSwitcher = (param)=>{
    let { currentView, onChange } = param;
    const isDetails = currentView === 'Details';
    const isLargeIcons = currentView === 'LargeIcons';
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (ViewSwitcher_module_default()).segmentedControl,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                onClick: ()=>onChange('Details'),
                className: (0,clsx/* default */.A)((ViewSwitcher_module_default()).segment, (ViewSwitcher_module_default()).leftSegment, isDetails && (ViewSwitcher_module_default()).active),
                "aria-label": "Details view",
                "aria-pressed": isDetails,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(list/* default */.A, {
                    size: constants/* SVG_SIZE_S */.lgH
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                onClick: ()=>onChange('LargeIcons'),
                className: (0,clsx/* default */.A)((ViewSwitcher_module_default()).segment, (ViewSwitcher_module_default()).rightSegment, isLargeIcons && (ViewSwitcher_module_default()).active),
                "aria-label": "Large icons view",
                "aria-pressed": isLargeIcons,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(layout_grid/* default */.A, {
                    size: constants/* SVG_SIZE_S */.lgH
                })
            })
        ]
    });
};

;// ./src/components/FileManager/ViewSwitcher/index.ts


;// ./src/components/FileManager/index.ts




// EXTERNAL MODULE: ./src/utils/index.ts + 9 modules
var src_utils = __webpack_require__(19482);
// EXTERNAL MODULE: ./src/components/file-renderers/SyncfusionImageRenderer/index.ts + 3 modules
var SyncfusionImageRenderer = __webpack_require__(61882);
;// ./src/components/thread/FileDirectoryPanel/utils.ts
const upsertModifiedTag = (text)=>{
    const now = Date.now();
    const re = /_modified_\s*[^\r\n]*/i;
    return re.test(text) ? text.replace(re, "_modified_".concat(now)) : text ? "".concat(text, "_modified_").concat(now) : "_modified_".concat(now);
};

// EXTERNAL MODULE: ./src/components/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(6259);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/download.js
var download = __webpack_require__(39867);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/file-text.js
var file_text = __webpack_require__(89715);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/copy.js
var copy = __webpack_require__(75426);
// EXTERNAL MODULE: ./src/components/ui/tooltip.tsx
var tooltip = __webpack_require__(46767);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/FloppyDisk.es.js + 1 modules
var FloppyDisk_es = __webpack_require__(36748);
// EXTERNAL MODULE: ./src/components/ui/ButtonTryOnDesktop/index.tsx + 1 modules
var ButtonTryOnDesktop = __webpack_require__(29345);
// EXTERNAL MODULE: ./src/hooks/use-in-react-native-webview.ts
var use_in_react_native_webview = __webpack_require__(75664);
// EXTERNAL MODULE: ./src/hooks/use-rnwebview-download-enabled.ts
var use_rnwebview_download_enabled = __webpack_require__(71825);
// EXTERNAL MODULE: ./node_modules/react-device-detect/dist/lib.js
var lib = __webpack_require__(92253);
// EXTERNAL MODULE: ./node_modules/posthog-js/react/dist/esm/index.js
var esm = __webpack_require__(26302);
;// ./src/components/thread/FileDirectoryPanel/components/FileDirectoryToolbar.tsx
/* __next_internal_client_entry_do_not_use__ FileDirectoryToolbar auto */ 













const FileDirectoryToolbar = (param)=>{
    let { selectedFilePath, isDownloadAllEnabled, isUpdating, waitingForVscode, isLoadingContent, isDownloading, isExportingPdf, isUploading, isFilesDownloading, isZipFilesScheduling, isPollingZip, openFromSharePage = false, showPaymentRedirect = false, textContentForRenderer, canDeploy, currentFilesCount, handleSave, handleOpenInVsCode, handleCopy, handleDeployClick, handleDownload, handleExportPdf, downloadAll, isMarkdownFile, isHtmlFile, isWordFile, isExcelFile, isCsvFile } = param;
    const isInReactNativeWebView = (0,use_in_react_native_webview/* useInReactNativeWebView */.M)(false);
    const isRNWebViewDownloadEnabled = (0,use_rnwebview_download_enabled/* useRNWebViewDownloadEnabled */.Q)();
    const isAvailableOnlyInReactNative = isInReactNativeWebView && isRNWebViewDownloadEnabled;
    const isNewColumnWorkspaceEnabled = (0,esm/* useFeatureFlagEnabled */.Tp)('newColumnWorkspace');
    const showSaveButton = !!selectedFilePath && isAvailableOnlyInReactNative && !isWordFile(selectedFilePath) && !(!lib/* isMobile */.Fr && isExcelFile(selectedFilePath)) && !(!lib/* isMobile */.Fr && isCsvFile(selectedFilePath)) && !isHtmlFile(selectedFilePath) && (!isMarkdownFile(selectedFilePath) || (0,file_renderers/* getFileTypeFromExtension */.KT)(selectedFilePath) === 'image');
    const canShowExportPdf = !!selectedFilePath && isMarkdownFile(selectedFilePath);
    const showDownloadButton = isAvailableOnlyInReactNative && !isWordFile(selectedFilePath) && !isExcelFile(selectedFilePath) && !isCsvFile(selectedFilePath);
    const canShowDownloadAll = !selectedFilePath && !openFromSharePage && !showPaymentRedirect && isDownloadAllEnabled && currentFilesCount > 0;
    const downloadButton = /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
        variant: "outline",
        size: "sm",
        onClick: handleDownload,
        disabled: isDownloading || isLoadingContent,
        className: "h-8 gap-1",
        children: isDownloading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(loader/* default */.A, {
            className: "h-4 w-4 animate-spin"
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(download/* default */.A, {
            className: "h-4 w-4"
        })
    });
    const pdfButton = /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
        variant: "outline",
        size: "sm",
        disabled: isExportingPdf || isLoadingContent,
        className: "h-8 gap-1",
        children: isExportingPdf ? /*#__PURE__*/ (0,jsx_runtime.jsx)(loader/* default */.A, {
            className: "h-4 w-4 animate-spin"
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(file_text/* default */.A, {
            className: "h-4 w-4"
        })
    });
    const downloadAllButton = /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
        variant: "outline",
        size: "sm",
        onClick: downloadAll,
        disabled: isUploading || isFilesDownloading || isZipFilesScheduling || isPollingZip,
        className: "h-8 gap-1",
        children: isFilesDownloading || isZipFilesScheduling || isPollingZip ? /*#__PURE__*/ (0,jsx_runtime.jsx)(loader/* default */.A, {
            className: "h-4 w-4 animate-spin"
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(download/* default */.A, {
            className: "h-4 w-4"
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "px-4 py-2 flex items-center gap-2",
        children: [
            showSaveButton && /*#__PURE__*/ (0,jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                        asChild: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                            variant: "outline",
                            size: "sm",
                            onClick: handleSave,
                            className: "h-8 gap-1",
                            disabled: isUpdating,
                            children: isUpdating ? /*#__PURE__*/ (0,jsx_runtime.jsx)(loader/* default */.A, {
                                className: "h-4 w-4 animate-spin"
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(FloppyDisk_es/* FloppyDisk */.g, {
                                className: "h-4 w-4"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                        children: "Save"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-2 flex-shrink-0 ml-auto",
                children: [
                    selectedFilePath && /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                        children: [
                            !!textContentForRenderer && !isMarkdownFile(selectedFilePath) && !(isCsvFile(selectedFilePath) && !lib/* isMobile */.Fr) && isAvailableOnlyInReactNative && /*#__PURE__*/ (0,jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: handleCopy,
                                            disabled: isLoadingContent,
                                            className: "h-8 gap-1",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(copy/* default */.A, {
                                                className: "h-4 w-4"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                                        children: "Copy"
                                    })
                                ]
                            }),
                            !isRNWebViewDownloadEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonTryOnDesktop/* ButtonTryOnDesktop */.Vg, {
                                asChild: true,
                                children: downloadButton
                            }) : showDownloadButton && /*#__PURE__*/ (0,jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                                        asChild: true,
                                        children: downloadButton
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                                        children: "Download"
                                    })
                                ]
                            }),
                            canShowExportPdf && (isInReactNativeWebView ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonTryOnDesktop/* ButtonTryOnDesktop */.Vg, {
                                asChild: true,
                                children: pdfButton
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipProvider */.Bc, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                                                        asChild: true,
                                                        children: pdfButton
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                                                    children: "Export as PDF"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuContent */.SQ, {
                                        align: "end",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */._2, {
                                                onClick: ()=>handleExportPdf('portrait'),
                                                className: "flex items-center gap-2 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "rotate-90",
                                                        children: "⬌"
                                                    }),
                                                    " Portrait"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */._2, {
                                                onClick: ()=>handleExportPdf('landscape'),
                                                className: "flex items-center gap-2 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "⬌"
                                                    }),
                                                    " Landscape"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }))
                        ]
                    }),
                    canShowDownloadAll && (!isRNWebViewDownloadEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonTryOnDesktop/* ButtonTryOnDesktop */.Vg, {
                        asChild: true,
                        children: downloadAllButton
                    }) : !(isNewColumnWorkspaceEnabled && !lib/* isMobile */.Fr) && /*#__PURE__*/ (0,jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                                asChild: true,
                                children: downloadAllButton
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                                children: "Download All"
                            })
                        ]
                    }))
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/components/thread/SidePanel/index.ts + 6 modules
var SidePanel = __webpack_require__(90534);
// EXTERNAL MODULE: ./src/hooks/sidePanel/index.ts + 3 modules
var sidePanel = __webpack_require__(2802);
;// ./src/utils/pdfExportTemplate.ts
const generatePdfHtml = async (param)=>{
    let { pdfName, orientation, markdownContent } = param;
    try {
        // Fetch the HTML template
        const response = await fetch('/templates/pdf-export-template.html');
        if (!response.ok) {
            throw new Error("Failed to load PDF template: ".concat(response.status, " ").concat(response.statusText));
        }
        let htmlTemplate = await response.text();
        const pageSize = orientation === 'landscape' ? 'A4 landscape' : 'A4';
        htmlTemplate = htmlTemplate.replace('{{PDF_NAME}}', pdfName).replace('{{PAGE_SIZE}}', pageSize).replace('{{MARKDOWN_CONTENT}}', markdownContent);
        return htmlTemplate;
    } catch (error) {
        throw new Error("PDF generation failed: ".concat(error instanceof Error ? error.message : ''));
    }
};

// EXTERNAL MODULE: ./src/components/ui/alert-dialog.tsx
var alert_dialog = __webpack_require__(98053);
;// ./src/components/FileManager/Dialog/DeleteDialog.tsx
/* __next_internal_client_entry_do_not_use__ DeleteDialog auto */ 


function DeleteDialog(param) {
    let { isOpen, onClose, onConfirm, fileName, deleteAll = false } = param;
    const title = deleteAll ? 'Delete all Items?' : 'Delete Item?';
    const actionText = deleteAll ? 'Delete all' : 'Delete';
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* AlertDialog */.Lt, {
        open: isOpen,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(alert_dialog/* AlertDialogContent */.EO, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(alert_dialog/* AlertDialogHeader */.wd, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* AlertDialogTitle */.r7, {
                            children: title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* AlertDialogDescription */.$v, {
                            children: deleteAll ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    "Are you sure you want to delete all items? ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                    "This action cannot be undone."
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    "Are you sure you want to delete this item",
                                    ' ',
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "font-semibold",
                                        children: [
                                            '"',
                                            fileName,
                                            '"'
                                        ]
                                    }),
                                    "? ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                    "This action cannot be undone."
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(alert_dialog/* AlertDialogFooter */.ck, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* AlertDialogCancel */.Zr, {
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* AlertDialogAction */.Rx, {
                            onClick: (e)=>{
                                e.preventDefault();
                                onConfirm();
                            },
                            className: "bg-destructive text-white hover:bg-destructive/90",
                            children: actionText
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/components/ui/InputSimple/index.tsx + 1 modules
var InputSimple = __webpack_require__(44974);
// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button = __webpack_require__(62717);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var react_visually_hidden_dist = __webpack_require__(861);
// EXTERNAL MODULE: ./src/components/FileManager/Dialog/RenameDialog.module.scss
var RenameDialog_module = __webpack_require__(73891);
var RenameDialog_module_default = /*#__PURE__*/__webpack_require__.n(RenameDialog_module);
;// ./src/components/FileManager/Dialog/RenameDialog.tsx
/* __next_internal_client_entry_do_not_use__ RenameDialog auto */ 






const RenameDialog = (param)=>{
    let { isOpen, initialName, onSubmit, onClose } = param;
    const [name, setName] = (0,react.useState)(initialName);
    const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
    // Reset when dialog opens
    (0,react.useEffect)(()=>{
        if (isOpen) {
            setName(initialName);
            setIsSubmitting(false);
        }
    }, [
        isOpen,
        initialName
    ]);
    const handleClose = ()=>{
        if (isSubmitting) return; // avoid closing mid-submit
        onClose();
    };
    const handleSubmit = async ()=>{
        const trimmed = name.trim();
        if (!trimmed) return;
        setIsSubmitting(true);
        try {
            await onSubmit(trimmed);
            onClose();
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* AlertDialog */.Lt, {
        open: isOpen,
        onOpenChange: (open)=>{
            // AlertDialog tries to close itself; respect that by calling onClose
            if (!open) handleClose();
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(alert_dialog/* AlertDialogContent */.EO, {
            className: (RenameDialog_module_default()).root,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* AlertDialogHeader */.wd, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* AlertDialogTitle */.r7, {
                        className: (RenameDialog_module_default()).title,
                        children: "Rename item"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (RenameDialog_module_default()).inputWrapper,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_visually_hidden_dist/* VisuallyHidden */.s6, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                htmlFor: "rename-input",
                                children: "New name"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(InputSimple/* InputSimple */.$, {
                            type: "text",
                            placeholder: "Item name",
                            value: name,
                            onChange: (e)=>setName(e.target.value),
                            className: (RenameDialog_module_default()).inputValue,
                            maxLength: 50
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(alert_dialog/* AlertDialogFooter */.ck, {
                    className: (RenameDialog_module_default()).footer,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* AlertDialogCancel */.Zr, {
                            asChild: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                                color: "secondary-outline",
                                onClick: handleClose,
                                disabled: isSubmitting,
                                children: "Cancel"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* AlertDialogAction */.Rx, {
                            asChild: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                                color: "highlight",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    handleSubmit();
                                },
                                disabled: isSubmitting || !name.trim(),
                                children: "Submit"
                            })
                        })
                    ]
                })
            ]
        })
    });
};

;// ./src/components/FileManager/Dialog/index.ts



;// ./src/components/FileManager/utils.ts
const getBaseName = (file)=>{
    if (!(file === null || file === void 0 ? void 0 : file.name)) return '';
    if (file.type === 'folder') return file.name;
    const dot = file.name.lastIndexOf('.');
    return dot > 0 ? file.name.slice(0, dot) : file.name;
};
const getOriginalExtension = (file)=>{
    if (!(file === null || file === void 0 ? void 0 : file.name) || file.type === 'folder') return '';
    const dot = file.name.lastIndexOf('.');
    return dot > 0 ? file.name.slice(dot) : '';
};

// EXTERNAL MODULE: ./src/components/ui/sidebar.tsx + 1 modules
var sidebar = __webpack_require__(40327);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs + 1 modules
var react_dropdown_menu_dist = __webpack_require__(47971);
// EXTERNAL MODULE: ./src/components/ui/popover.tsx
var popover = __webpack_require__(26333);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/DotsThreeVertical.es.js + 1 modules
var DotsThreeVertical_es = __webpack_require__(95321);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Download.es.js + 1 modules
var Download_es = __webpack_require__(22882);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/NotePencil.es.js
var NotePencil_es = __webpack_require__(51378);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Trash.es.js + 1 modules
var Trash_es = __webpack_require__(59417);
;// ./src/components/FileManager/Components/ActionsMenu.tsx







function ActionsMenu(param) {
    let { file, onOpen, onDownload, onRename, onDelete } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenu */.rI, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(popover/* Popover */.AM, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_dropdown_menu_dist/* DropdownMenuTrigger */.ty, {
                    asChild: true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(popover/* PopoverAnchor */.dT, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(sidebar/* SidebarMenuAction */.e7, {
                            "aria-label": "Row actions",
                            onClick: (event)=>{
                                event.stopPropagation();
                                onOpen();
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DotsThreeVertical_es/* DotsThreeVerticalIcon */.m, {
                                size: constants/* SVG_SIZE_L */.uUe
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuContent */.SQ, {
                    className: "w-56 rounded-lg",
                    align: "end",
                    sideOffset: 8,
                    onClick: (event)=>event.stopPropagation(),
                    children: [
                        (file === null || file === void 0 ? void 0 : file.type) !== 'folder' && /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */._2, {
                            onClick: ()=>onDownload(file),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Download_es/* DownloadIcon */.s, {
                                    size: constants/* SVG_SIZE_M */.ng3
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: "Download"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */._2, {
                            onClick: ()=>onRename(file),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(NotePencil_es/* NotePencilIcon */.Z, {
                                    size: constants/* SVG_SIZE_M */.ng3
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: "Rename"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */._2, {
                            onClick: ()=>onDelete(file),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Trash_es/* TrashIcon */.u, {
                                    size: constants/* SVG_SIZE_M */.ng3
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: "Delete"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

;// ./src/components/FileManager/Components/HeaderActionsMenu.tsx







const HeaderActionsMenu = (param)=>{
    let { onDownloadAll, onDeleteAll, showDeleteAllButton } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenu */.rI, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(popover/* Popover */.AM, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_dropdown_menu_dist/* DropdownMenuTrigger */.ty, {
                    asChild: true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(popover/* PopoverAnchor */.dT, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(sidebar/* SidebarMenuAction */.e7, {
                            "aria-label": "Global actions",
                            onClick: (event)=>event.stopPropagation(),
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DotsThreeVertical_es/* DotsThreeVerticalIcon */.m, {
                                size: constants/* SVG_SIZE_M */.ng3
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuContent */.SQ, {
                    className: "w-56 rounded-lg",
                    align: "end",
                    sideOffset: 8,
                    onClick: (event)=>event.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */._2, {
                            onClick: onDownloadAll,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Download_es/* DownloadIcon */.s, {
                                    size: constants/* SVG_SIZE_M */.ng3
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: "Download all"
                                })
                            ]
                        }),
                        showDeleteAllButton && /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */._2, {
                            onClick: onDeleteAll,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Trash_es/* TrashIcon */.u, {
                                    size: constants/* SVG_SIZE_M */.ng3
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: "Delete all"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

;// ./src/components/FileManager/Components/index.ts



;// ./src/components/FileManager/FileManagerNewColumn.tsx











const FileManagerNewColumn = (param)=>{
    let { files, openFile, view, onDeleteFile, onRenameFile, onDownloadAll, onDownloadFile, onDeleteAll, showDeleteAllButton } = param;
    const [selectedFile, setSelectedFile] = (0,react.useState)(null);
    const [showDeleteFileDialog, setShowDeleteFileDialog] = (0,react.useState)(false);
    const [showRenameFileDialog, setShowRenameFileDialog] = (0,react.useState)(false);
    const [showDeleteAllFilesDialog, setShowDeleteAllFilesDialog] = (0,react.useState)(false);
    const fileManagerRef = (0,react.useRef)(null);
    const { resolvedTheme } = (0,next_themes_dist/* useTheme */.D)();
    const isDark = resolvedTheme === 'dark';
    const isMobile = (0,hooks/* useIsMobile */.al)();
    const deviceKey = "".concat(isMobile ? 'mobile' : 'desktop', "-").concat(isDark ? 'dark' : 'light');
    const handleRowActionsOpen = (0,react.useCallback)((file)=>{
        setSelectedFile(file);
    }, []);
    const handleDownloadFile = (0,react.useCallback)((file)=>{
        if (!(file === null || file === void 0 ? void 0 : file.filterPath)) return;
        onDownloadFile(file.filterPath);
    }, [
        onDownloadFile
    ]);
    const handleRenameFile = (0,react.useCallback)((file)=>{
        setSelectedFile(file);
        setShowRenameFileDialog(true);
    }, []);
    const handleDeleteFile = (0,react.useCallback)((file)=>{
        setSelectedFile(file);
        setShowDeleteFileDialog(true);
    }, []);
    const detailsColumns = (0,react.useMemo)(()=>[
            {
                field: 'name',
                headerText: 'Name',
                minWidth: 180,
                width: '40%'
            },
            {
                field: 'dateModified',
                headerText: 'Modified',
                width: '35%',
                type: 'date',
                format: 'MMM dd, y, hh:mm a'
            },
            {
                field: 'size',
                headerText: 'Size',
                width: '15%',
                customAttributes: {
                    class: 'e-fe-size'
                },
                template: ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "e-fe-size"
                    })
            },
            {
                headerText: '',
                width: 70,
                allowResizing: false,
                customAttributes: {
                    class: (FileManager_module_default()).actionsColumn
                },
                headerTemplate: ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (FileManager_module_default()).rowActions,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HeaderActionsMenu, {
                            onDownloadAll: onDownloadAll,
                            onDeleteAll: ()=>setShowDeleteAllFilesDialog(true),
                            showDeleteAllButton: showDeleteAllButton
                        })
                    }),
                template: (file)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (FileManager_module_default()).rowActions,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionsMenu, {
                            file: file,
                            onOpen: ()=>handleRowActionsOpen(file),
                            onDownload: (file)=>handleDownloadFile(file),
                            onRename: (file)=>handleRenameFile(file),
                            onDelete: (file)=>handleDeleteFile(file)
                        })
                    })
            }
        ], []);
    const { isLoading } = (0,hooks/* useSyncfusionTheme */.IH)(isDark, fileManagerRef);
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "h-full w-full flex items-center justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(loader/* default */.A, {
                className: "h-6 w-6 animate-spin text-primary"
            })
        });
    }
    if (!(files === null || files === void 0 ? void 0 : files.length)) return null;
    const resultData = Array.from(files);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            showDeleteAllFilesDialog && /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteDialog, {
                isOpen: showDeleteAllFilesDialog,
                onClose: ()=>setShowDeleteAllFilesDialog(false),
                onConfirm: ()=>{
                    setShowDeleteFileDialog(false);
                    onDeleteAll();
                },
                deleteAll: true
            }),
            showRenameFileDialog && /*#__PURE__*/ (0,jsx_runtime.jsx)(RenameDialog, {
                isOpen: showRenameFileDialog,
                onClose: ()=>setShowRenameFileDialog(false),
                initialName: getBaseName(selectedFile),
                onSubmit: (name)=>{
                    setShowRenameFileDialog(false);
                    const extension = getOriginalExtension(selectedFile);
                    const finalName = (selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.type) === 'folder' ? name : "".concat(name).concat(extension);
                    onRenameFile(selectedFile.filterPath, finalName);
                }
            }),
            showDeleteFileDialog && /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteDialog, {
                isOpen: showDeleteFileDialog,
                onClose: ()=>setShowDeleteFileDialog(false),
                onConfirm: ()=>{
                    setShowDeleteFileDialog(false);
                    onDeleteFile(selectedFile.filterPath);
                },
                fileName: selectedFile.name
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "".concat((FileManager_module_default()).fileManagerPanel, "  fm-scope"),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(filemanager_component/* FileManagerComponent */.h, {
                    allowDragAndDrop: false,
                    allowMultiSelection: false,
                    ref: fileManagerRef,
                    id: "flatdata",
                    className: (FileManager_module_default()).fileManagerOverride,
                    showItemCheckBoxes: false,
                    fileOpen: openFile,
                    view: view,
                    fileSystemData: resultData,
                    ...!isMobile && {
                        detailsViewSettings: {
                            columns: detailsColumns
                        }
                    },
                    toolbarSettings: {
                        visible: false
                    },
                    contextMenuSettings: {
                        visible: false
                    },
                    height: '100%',
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ej2_react_base/* Inject */.y_, {
                        services: [
                            navigation_pane/* NavigationPane */.n,
                            details_view/* DetailsView */.g,
                            large_icons_view/* LargeIconsView */.B,
                            toolbar/* Toolbar */.M
                        ]
                    })
                })
            }, deviceKey)
        ]
    });
};

;// ./src/components/thread/FileDirectoryPanel/index.tsx
/* __next_internal_client_entry_do_not_use__ FileDirectoryPanel auto */ 

























const FileDirectoryPanel = (param)=>{
    let { isOpen, thread, initialFilePath, openFromSharePage = false, onClose, title, isShare, onSubmitMessage, isMaximized, onToggleMaximize } = param;
    const isMobile = (0,use_mobile/* useIsMobile */.a)();
    const { toggleFileDirectoryPanelOpened } = (0,sidePanel/* useSidePanelActions */.ij)();
    // ---------- helpers (no hooks) ----------
    const ROOT = '/workspace';
    function normalizePath(path) {
        if (typeof path !== 'string' || !path) return ROOT;
        const p = String(path).replace(/\\/g, '/');
        return p.startsWith(ROOT) ? p.replace(/\/+$/, '') : "".concat(ROOT, "/").concat(p.replace(/^\//, '')).replace(/\/+$/, '');
    }
    const splitPath = (raw)=>{
        const full = normalizePath(raw);
        const i = full.lastIndexOf('/');
        const dir = i > 0 ? full.slice(0, i) : ROOT;
        const name = i >= 0 ? full.slice(i + 1) : '';
        return {
            full,
            dir,
            name
        };
    };
    const [currentPath, setCurrentPath] = (0,react.useState)(normalizePath(ROOT));
    const [files, setFiles] = (0,react.useState)([]);
    const [view, setView] = (0,react.useState)('Details');
    const [isLoadingFiles, setIsLoadingFiles] = (0,react.useState)(false);
    const [selectedFilePath, setSelectedFilePath] = (0,react.useState)(null);
    const [rawContent, setRawContent] = (0,react.useState)(null);
    const [textContentForRenderer, setTextContentForRenderer] = (0,react.useState)(null);
    const [blobUrlForRenderer, setBlobUrlForRenderer] = (0,react.useState)(null);
    const [isDownloading, setIsDownloading] = (0,react.useState)(false);
    const [isExportingPdf, setIsExportingPdf] = (0,react.useState)(false);
    const [isUploading, setIsUploading] = (0,react.useState)(false);
    const [isLoadingContent, setIsLoadingContent] = (0,react.useState)(false);
    const [contentError, setContentError] = (0,react.useState)(null);
    const [showPaymentRedirect, setShowPaymentRedirect] = (0,react.useState)(false);
    const [htmlPreviewUrl, setHtmlPreviewUrl] = (0,react.useState)(null);
    const [isSavingWordFile, setIsSavingWordFile] = (0,react.useState)(false);
    const [isSavingExcelFile, setIsSavingExcelFile] = (0,react.useState)(false);
    const [isUpdating, setIsUpdating] = (0,react.useState)(false);
    const [isGeneratingImageCopy, setIsGeneratingImageCopy] = (0,react.useState)(false);
    const [waitingForVscode, setWaitingForVscode] = (0,react.useState)(false);
    const { setSelectedExternalFilepath } = (0,selectedExternalFile/* useSelectedFileActions */.g)();
    const showDeleteAllButton = currentPath === ROOT;
    // tiny token to reload same path
    const [reloadToken, setReloadToken] = (0,react.useState)(0);
    const isNewColumnWorkspaceEnabled = (0,esm/* useFeatureFlagEnabled */.Tp)('newColumnWorkspace');
    // ---------- refs ----------
    const dirControllerRef = (0,react.useRef)(null);
    const loadingFileRef = (0,react.useRef)(null);
    const autoOpenRequestRef = (0,react.useRef)(null);
    const syncfusionWordRef = (0,react.useRef)(null);
    const syncfusionExcelRef = (0,react.useRef)(null);
    const syncfusionMarkdownRef = (0,react.useRef)(null);
    const syncfusionImageRef = (0,react.useRef)(null);
    const panelRef = (0,react.useRef)(null);
    const htmlNewRendererRef = (0,react.useRef)(null);
    // keep latest openFile without effect dependency churn
    const openFileRef = (0,react.useRef)(()=>{});
    // reset when panel closes
    (0,react.useEffect)(()=>{
        if (!isOpen) {
            setCurrentPath(ROOT);
            autoOpenRequestRef.current = null;
            setIsLoadingContent(false);
            clearSelectedFile();
        }
    }, [
        isOpen
    ]);
    const currentFilesCount = (0,react.useMemo)(()=>(files !== null && files !== void 0 ? files : []).filter((f)=>(f === null || f === void 0 ? void 0 : f.name) !== 'Files').length, [
        files
    ]);
    const subtitle = isLoadingFiles || currentFilesCount === 0 ? '' : "".concat(currentFilesCount, " file").concat(currentFilesCount === 1 ? '' : 's');
    // ---------- external hooks ----------
    const [_, { isLoading: isFilesDownloading }] = (0,services/* useDownloadFilesMutation */.kT)();
    const [scheduleZipFiles, { isLoading: isZipFilesScheduling }] = (0,services/* useScheduleZipFilesMutation */._4)();
    const [getZipFileWithoutRetry, { data: _zipFileResponseWithoutRetry, error: _zipFileErrorWithoutRetry }] = (0,services/* useGetZipFileMutation */.Qi)();
    // --- derived ---
    const typeFromExtension = (0,react.useMemo)(()=>{
        if (!selectedFilePath) return null;
        return (0,file_renderers/* getFileTypeFromExtension */.KT)(selectedFilePath);
    }, [
        selectedFilePath
    ]);
    const isMarkdownFile = (0,react.useCallback)((filePath)=>filePath ? filePath.toLowerCase().endsWith('.md') : false, []);
    const isHtmlFile = (0,react.useCallback)((filePath)=>filePath ? filePath.toLowerCase().endsWith('.html') : false, []);
    const isExcelFile = (0,react.useCallback)((filePath)=>{
        if (!filePath) return false;
        return filePath.toLowerCase().endsWith('.xlsx') || filePath.toLowerCase().endsWith('.xls');
    }, []);
    const isCsvFile = (0,react.useCallback)((filePath)=>{
        if (!filePath) return false;
        return filePath.toLowerCase().endsWith('.csv');
    }, []);
    const isWordFile = (0,react.useCallback)((filePath)=>filePath ? filePath.toLowerCase().endsWith('.docx') : false, []);
    const downloadAll = (0,react.useCallback)(async ()=>{
        try {
            const res = await scheduleZipFiles({
                threadId: thread.thread_id,
                path: currentPath
            }).unwrap();
            const { session_id, zip_file_name } = res;
            setZipFileParams({
                threadId: thread.thread_id,
                session_id,
                zip_file_name
            });
            setIsPollingZip(true);
            dist/* toast */.oR.success('Zipping the files in the background');
        } catch (e) {
            dist/* toast */.oR.error('Failed to zip files in the background');
        }
    }, [
        currentPath,
        thread.thread_id,
        scheduleZipFiles
    ]);
    // ---------- actions ----------
    const handleCopy = (0,react.useCallback)(()=>{
        var _syncfusionMarkdownRef_current;
        const fileType = (0,file_renderers/* getFileTypeFromExtension */.KT)((selectedFilePath === null || selectedFilePath === void 0 ? void 0 : selectedFilePath.split('/').pop()) || '');
        const shouldConvertBeforeCopy = fileType === 'text';
        const textContent = fileType === 'markdown' ? (_syncfusionMarkdownRef_current = syncfusionMarkdownRef.current) === null || _syncfusionMarkdownRef_current === void 0 ? void 0 : _syncfusionMarkdownRef_current.getMarkdown() : isHtmlFile(selectedFilePath) ? htmlNewRendererRef.current.getContent() : textContentForRenderer;
        (0,utils/* copyTextToClipboard */.eM)(textContent, shouldConvertBeforeCopy);
    }, [
        textContentForRenderer,
        selectedFilePath
    ]);
    const handleDeployClick = ()=>{
        toggleFileDirectoryPanelOpened(false);
        (0,deploy_utils/* deployWebsiteUsingAgent */.Y)(onSubmitMessage);
    };
    const getData = async (fileType)=>{
        if (fileType === 'word') {
            return await syncfusionWordRef.current.getValue();
        }
        return null;
    };
    const handleSaveFile = async (fileType)=>{
        const data = await getData(fileType);
        try {
            setIsSavingWordFile(true);
            dist/* toast */.oR.info('Saving…');
            const ok = await (0,api/* updateSandboxFile */.rX)(thread.thread_id, selectedFilePath, data);
            if (!ok) throw new Error('Upload failed');
            dist/* toast */.oR.success('Document saved successfully');
        } catch (error) {
            main/* datadogLogs */.yf.logger.error('Failed to save the document', {}, error);
            dist/* toast */.oR.error('Failed to save the document');
        } finally{
            setIsSavingWordFile(false);
        }
    };
    const clearSelectedFile = (0,react.useCallback)(async ()=>{
        setSelectedFilePath(null);
        setRawContent(null);
        setTextContentForRenderer(null);
        setBlobUrlForRenderer(null);
        setContentError(null);
        setIsLoadingContent(false);
        setShowPaymentRedirect(false);
        setSelectedExternalFilepath(null);
        loadingFileRef.current = null;
    }, []);
    const navigateHome = (0,react.useCallback)(()=>{
        ;
        clearSelectedFile();
        setCurrentPath(ROOT);
    }, [
        clearSelectedFile
    ]);
    const navigateToFolder = (0,react.useCallback)((folder)=>{
        if (!folder.is_dir) return;
        const normalized = normalizePath(folder.path);
        clearSelectedFile();
        if (normalized === currentPath) {
            setReloadToken((t)=>t + 1);
        } else {
            setCurrentPath(normalized);
        }
    }, [
        clearSelectedFile,
        currentPath
    ]);
    const navigateToBreadcrumb = (0,react.useCallback)((path)=>{
        const normalizedPath = normalizePath(path);
        clearSelectedFile();
        if (normalizedPath === currentPath) {
            setReloadToken((t)=>t + 1);
        } else {
            setCurrentPath(normalizedPath);
        }
    }, [
        clearSelectedFile,
        currentPath
    ]);
    const onClosePanel = (0,react.useCallback)(()=>{
        var _dirControllerRef_current;
        (_dirControllerRef_current = dirControllerRef.current) === null || _dirControllerRef_current === void 0 ? void 0 : _dirControllerRef_current.abort();
        clearSelectedFile();
        setCurrentPath(ROOT);
        setFiles([]);
        setView('Details');
        setReloadToken(0);
        setHtmlPreviewUrl(null);
        setContentError(null);
        onClose();
    }, [
        clearSelectedFile,
        onClose
    ]);
    const openFile = (0,react.useCallback)(async (file)=>{
        if (file.is_dir) {
            navigateToFolder(file);
            return;
        }
        if (selectedFilePath === file.path && rawContent) return;
        clearSelectedFile();
        setIsLoadingContent(true);
        setSelectedFilePath(file.path);
        loadingFileRef.current = file.path;
        try {
            const content = await (0,api/* getSandboxFileContent */.nn)(thread.thread_id, file.path, openFromSharePage);
            if (loadingFileRef.current !== file.path) {
                setIsLoadingContent(false);
                return;
            }
            setRawContent(content);
            if (typeof content === 'string') {
                setTextContentForRenderer(content);
                setBlobUrlForRenderer(null);
            } else if (content instanceof Blob) {
                setTextContentForRenderer(null);
            // blob URL handled below in effect
            } else {
                main/* datadogLogs */.yf.logger.warn('[FileDirectoryPanel] Unexpected content type.');
                setContentError('Received unexpected content type.');
            }
            setIsLoadingContent(false);
        } catch (error) {
            ;
            if (loadingFileRef.current === file.path) {
                if (error instanceof types/* BillingError */.Ey) {
                    setShowPaymentRedirect(true);
                } else {
                    setContentError("Failed to load file: ".concat(error instanceof Error ? error.message : String(error)));
                    setRawContent(null);
                }
                setIsLoadingContent(false);
            }
        } finally{
            if (loadingFileRef.current === file.path) loadingFileRef.current = null;
        }
    }, [
        selectedFilePath,
        rawContent,
        thread.thread_id,
        navigateToFolder,
        clearSelectedFile,
        openFromSharePage
    ]);
    const handleExportPdf = (0,react.useCallback)(async function() {
        let orientation = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'portrait';
        if (!selectedFilePath || isExportingPdf || !isMarkdownFile(selectedFilePath)) return;
        setIsExportingPdf(true);
        let syncfusionMarkdownContent;
        if (isMarkdownFile(selectedFilePath)) {
            syncfusionMarkdownContent = syncfusionMarkdownRef.current.getHtml();
        }
        try {
            // Use the ref to access the markdown content directly
            if (!syncfusionMarkdownRef.current) {
                throw new Error('Markdown content not found');
            }
            // Create a standalone document for printing
            const printWindow = window.open('', '_blank');
            if (!printWindow) {
                throw new Error('Unable to open print window. Please check if popup blocker is enabled.');
            }
            // Generate HTML content
            const fileName = selectedFilePath.split('/').pop() || 'document';
            const pdfName = fileName.replace(/\.md$/, '');
            // Extract content
            const markdownContent = syncfusionMarkdownContent;
            // Generate a full HTML document with controlled styles
            const htmlContent = await generatePdfHtml({
                pdfName,
                orientation,
                markdownContent
            });
            // Write the HTML content to the new window
            printWindow.document.open();
            printWindow.document.write(htmlContent);
            printWindow.document.close();
            dist/* toast */.oR.success('PDF export initiated. Check your print dialog.');
        } catch (error) {
            main/* datadogLogs */.yf.logger.error('PDF export failed:', {}, error);
            dist/* toast */.oR.error("Failed to export PDF: ".concat(error instanceof Error ? error.message : String(error)));
        } finally{
            setIsExportingPdf(false);
        }
    }, [
        selectedFilePath,
        isExportingPdf,
        isMarkdownFile
    ]);
    const getBreadcrumbSegments = (0,react.useCallback)((path)=>{
        // Ensure we're working with a normalized path
        const normalizedPath = normalizePath(path);
        // Remove /workspace prefix and split by /
        const cleanPath = normalizedPath.replace(/^\/workspace\/?/, '');
        if (!cleanPath) return [];
        const parts = cleanPath.split('/').filter(Boolean);
        let acc = ROOT;
        return parts.map((part, index)=>{
            acc = "".concat(acc, "/").concat(part);
            return {
                name: part,
                path: acc,
                isLast: index === parts.length - 1
            };
        });
    }, []);
    (0,react.useEffect)(()=>{
        openFileRef.current = openFile;
    }, [
        openFile
    ]);
    const handleOpenInVsCode = (0,react.useCallback)(async ()=>{
        try {
            setWaitingForVscode(true);
            const res = await (0,api/* getSandboxServiceUrl */.ab)({
                thread: thread,
                service: 'vscode'
            });
            window.open(res.url, '_blank', 'noopener,noreferrer');
        } catch (error) {
            dist/* toast */.oR.error('Failed to open VS Code. Please try again later.');
        } finally{
            setWaitingForVscode(false);
        }
    }, [
        thread
    ]);
    react.useEffect(()=>{
        const el = panelRef.current;
        if (!el) return;
        let rafId = null;
        let ticking = false;
        const nudge = ()=>{
            ticking = false;
            window.dispatchEvent(new Event('resize'));
        };
        const ro = new ResizeObserver(()=>{
            if (ticking) return;
            ticking = true;
            rafId = requestAnimationFrame(nudge);
        });
        ro.observe(el);
        return ()=>{
            ro.disconnect();
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [
        panelRef,
        isMaximized
    ]);
    const updateExcelFile = async (data)=>{
        const isCsv = isCsvFile(selectedFilePath);
        const newSelectedFilePath = isCsv ? "".concat(selectedFilePath.slice(0, selectedFilePath.lastIndexOf('.')), ".xlsx") : selectedFilePath;
        try {
            const ok = await (0,api/* updateSandboxFile */.rX)(thread.thread_id, newSelectedFilePath, data);
            if (!ok) throw new Error('Upload failed');
            if (isCsv) {
                const { dir } = splitPath(newSelectedFilePath);
                const loadedFiles = await (0,api/* listSandboxFiles */.XY)(thread.thread_id, dir);
                const target = loadedFiles.find((file)=>file.path === newSelectedFilePath && !file.is_dir);
                if (target) {
                    openFileRef.current(target);
                }
            }
            dist/* toast */.oR.success('Excel File saved successfully');
        } catch (error) {
            main/* datadogLogs */.yf.logger.error('Failed to save Excel File', {}, error);
            dist/* toast */.oR.error('Failed to save Excel File');
        } finally{
            setIsSavingExcelFile(false);
        }
    };
    const saveImage = (0,react.useCallback)(async ()=>{
        if (!syncfusionImageRef.current || !selectedFilePath) return;
        try {
            setIsGeneratingImageCopy(true);
            dist/* toast */.oR.info('Saving…');
            const rawExt = (selectedFilePath.split('.').pop() || '').toLowerCase();
            const nameWithoutExt = selectedFilePath.split('.').slice(0, -1).join('.');
            const pathWithoutExt = upsertModifiedTag(nameWithoutExt);
            var _EXT_TO_FMT_rawExt;
            const requestFmt = (_EXT_TO_FMT_rawExt = SyncfusionImageRenderer/* EXT_TO_FMT */.ID[rawExt]) !== null && _EXT_TO_FMT_rawExt !== void 0 ? _EXT_TO_FMT_rawExt : SyncfusionImageRenderer/* DEFAULT_FMT */.og;
            var _FMT_QUALITY_requestFmt;
            const quality = (_FMT_QUALITY_requestFmt = SyncfusionImageRenderer/* FMT_QUALITY */.Y4[requestFmt]) !== null && _FMT_QUALITY_requestFmt !== void 0 ? _FMT_QUALITY_requestFmt : 1;
            const blob = await syncfusionImageRef.current.exportBlob(requestFmt, quality);
            const mime = blob.type || 'image/png';
            var _MIME_TO_EXT_mime;
            const finalExt = (_MIME_TO_EXT_mime = SyncfusionImageRenderer/* MIME_TO_EXT */.jY[mime]) !== null && _MIME_TO_EXT_mime !== void 0 ? _MIME_TO_EXT_mime : 'png';
            const uploadPath = (0,SyncfusionImageRenderer/* withExt */.OC)("".concat(pathWithoutExt), finalExt);
            const ok = await (0,api/* updateSandboxFile */.rX)(thread.thread_id, uploadPath, blob);
            if (!ok) throw new Error('Upload failed');
            const { dir } = splitPath(uploadPath);
            const loadedFiles = await (0,api/* listSandboxFiles */.XY)(thread.thread_id, dir);
            const target = loadedFiles.find((file)=>file.path === uploadPath && !file.is_dir);
            if (target) {
                openFileRef.current(target);
            }
            dist/* toast */.oR.success('New image copy saved successfully');
        } catch (e) {
            main/* datadogLogs */.yf.logger.error('Failed to generate an image copy', {}, e);
            dist/* toast */.oR.error('Failed to generate an image copy');
        } finally{
            setIsGeneratingImageCopy(false);
        }
    }, [
        selectedFilePath,
        thread.thread_id
    ]);
    const handleSave = (0,react.useCallback)(async ()=>{
        if (!selectedFilePath) return;
        if (typeFromExtension === 'image') return saveImage();
        try {
            var _syncfusionMarkdownRef_current;
            setIsUpdating(true);
            dist/* toast */.oR.info('Saving…');
            const content = isMarkdownFile(selectedFilePath) ? await ((_syncfusionMarkdownRef_current = syncfusionMarkdownRef.current) === null || _syncfusionMarkdownRef_current === void 0 ? void 0 : _syncfusionMarkdownRef_current.getMarkdown()) : textContentForRenderer !== null && textContentForRenderer !== void 0 ? textContentForRenderer : '';
            await (0,api/* updateSandboxFile */.rX)(thread.thread_id, selectedFilePath, content !== null && content !== void 0 ? content : '');
            dist/* toast */.oR.success('File updated');
        } catch (e) {
            main/* datadogLogs */.yf.logger.error('Failed to save file', {}, e);
            dist/* toast */.oR.error('Failed to save file');
        } finally{
            setIsUpdating(false);
        }
    }, [
        selectedFilePath,
        typeFromExtension,
        saveImage,
        isMarkdownFile,
        textContentForRenderer,
        thread.thread_id
    ]);
    const [zipFileParams, setZipFileParams] = (0,react.useState)(null);
    const [isPollingZip, setIsPollingZip] = (0,react.useState)(false);
    const handleDownload = (0,react.useCallback)(async ()=>{
        if (!selectedFilePath || isDownloading) return;
        setIsDownloading(true);
        const isImageBySyncfusion = typeFromExtension === 'image';
        const shouldBypassRawForNewHtml = isHtmlFile(selectedFilePath);
        const shouldBypassRawForWord = isWordFile(selectedFilePath) && !isMobile;
        const shouldBypassRawForExcel = isExcelFile(selectedFilePath) && !isMobile;
        const shouldBypassRawForCsv = isCsvFile(selectedFilePath) && !isMobile;
        try {
            if (rawContent && !isImageBySyncfusion && !shouldBypassRawForNewHtml && !shouldBypassRawForWord && !shouldBypassRawForExcel && !shouldBypassRawForCsv) {
                var _syncfusionMarkdownRef_current;
                const content = isMarkdownFile(selectedFilePath) ? await ((_syncfusionMarkdownRef_current = syncfusionMarkdownRef.current) === null || _syncfusionMarkdownRef_current === void 0 ? void 0 : _syncfusionMarkdownRef_current.getMarkdown()) : rawContent;
                const blob = content instanceof Blob ? content : new Blob([
                    String(content)
                ], {
                    type: 'text/plain'
                });
                const download = selectedFilePath.split('/').pop() || 'file';
                if ((0,src_utils/* downloadBlob */.WN)(blob, download)) {
                    dist/* toast */.oR.success('File downloaded');
                }
            } else {
                dist/* toast */.oR.info('Downloading…');
                const content = await (0,api/* getSandboxFileContent */.nn)(thread.thread_id, selectedFilePath, openFromSharePage);
                const blob = content instanceof Blob ? content : new Blob([
                    String(content)
                ]);
                const download = selectedFilePath.split('/').pop() || 'file';
                if ((0,src_utils/* downloadBlob */.WN)(blob, download)) {
                    dist/* toast */.oR.success('File downloaded');
                }
            }
        } catch (error) {
            main/* datadogLogs */.yf.logger.error('Download failed:', {}, error);
            dist/* toast */.oR.error('Failed to download file');
        } finally{
            setIsDownloading(false);
        }
    }, [
        selectedFilePath,
        isDownloading,
        rawContent,
        openFromSharePage,
        thread.thread_id,
        typeFromExtension,
        isMarkdownFile
    ]);
    const handleDeleteFile = (0,react.useCallback)(async (path)=>{
        try {
            dist/* toast */.oR.info('Deleting Item…');
            const ok = await (0,api/* deleteSandboxFile */.zO)(thread.thread_id, path);
            if (!ok) throw new Error('Error Delete Sandbox File');
            setReloadToken((v)=>v + 1);
            dist/* toast */.oR.success('Item deleted successfully');
        } catch (error) {
            main/* datadogLogs */.yf.logger.error('Failed to delete item', {}, error);
            dist/* toast */.oR.error('Failed to delete item');
        }
    }, [
        thread.thread_id,
        selectedFilePath
    ]);
    const handleRenameFile = (0,react.useCallback)(async (path, name)=>{
        try {
            dist/* toast */.oR.info('Renaming item…');
            const ok = await (0,api/* renameSandboxFile */.w$)(thread.thread_id, path, name);
            if (!ok) throw new Error('Error Rename Sandbox File');
            setReloadToken((v)=>v + 1);
            dist/* toast */.oR.success('Item renamed successfully');
        } catch (error) {
            main/* datadogLogs */.yf.logger.error('Failed to save Excel File', {}, error);
            dist/* toast */.oR.error('Failed to rename item');
        }
    }, [
        thread.thread_id
    ]);
    const handleDownloadFile = async (filePath)=>{
        if (!filePath || isDownloading) return;
        setIsDownloading(true);
        try {
            dist/* toast */.oR.info('Downloading…');
            const content = await (0,api/* getSandboxFileContent */.nn)(thread.thread_id, filePath, openFromSharePage);
            const blob = content instanceof Blob ? content : new Blob([
                String(content)
            ]);
            const download = filePath.split('/').pop() || 'file';
            if ((0,src_utils/* downloadBlob */.WN)(blob, download)) {
                dist/* toast */.oR.success('File downloaded');
            }
        } catch (error) {
            main/* datadogLogs */.yf.logger.error('Download failed:', {}, error);
            dist/* toast */.oR.error('Failed to download file');
        } finally{
            setIsDownloading(false);
        }
    };
    const handleDeleteAll = async ()=>{
        try {
            dist/* toast */.oR.info('Deleting all items...');
            const ok = await (0,api/* deleteAllSandboxFiles */.Pw)(thread.thread_id);
            if (!ok) throw new Error('Error Delete All Sandbox Files');
            setReloadToken((v)=>v + 1);
            dist/* toast */.oR.success('Items deleted successfully');
        } catch (error) {
            main/* datadogLogs */.yf.logger.error('Failed to delete all items', {}, error);
            dist/* toast */.oR.error('Failed to delete all items');
        }
    };
    // ---------- effects ----------
    // Blob URL lifecycle
    (0,react.useEffect)(()=>{
        let objectUrl = null;
        if (rawContent instanceof Blob) {
            const fileType = selectedFilePath ? (0,file_renderers/* getFileTypeFromExtension */.KT)(selectedFilePath) : 'binary';
            const shouldBeText = [
                'text',
                'code',
                'markdown'
            ].includes(fileType);
            if (shouldBeText) {
                rawContent.text().then((text)=>{
                    if (loadingFileRef.current === null && selectedFilePath && rawContent instanceof Blob) {
                        setTextContentForRenderer(text);
                        setBlobUrlForRenderer(null);
                    }
                }).catch((err)=>{
                    main/* datadogLogs */.yf.logger.warn('[FileDirectoryPanel] Blob->text failed; fallback URL', {}, err);
                    if (loadingFileRef.current === null && selectedFilePath && rawContent instanceof Blob) {
                        objectUrl = URL.createObjectURL(rawContent);
                        setBlobUrlForRenderer(objectUrl);
                        setTextContentForRenderer(null);
                    }
                });
            } else {
                objectUrl = URL.createObjectURL(rawContent);
                setBlobUrlForRenderer(objectUrl);
                setTextContentForRenderer(null);
            }
        } else {
            setBlobUrlForRenderer(null);
        }
        return ()=>{
            if (objectUrl) URL.revokeObjectURL(objectUrl);
        };
    }, [
        rawContent,
        selectedFilePath
    ]);
    // Zip polling
    (0,react.useEffect)(()=>{
        if (!isPollingZip || !zipFileParams) return;
        const MAX_RETRIES = 10;
        const pullZipFile = async function() {
            let retryCount = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            if (retryCount >= MAX_RETRIES) {
                setIsPollingZip(false);
                setZipFileParams(null);
                dist/* toast */.oR.error('Failed to download files. Please try again.');
                return;
            }
            try {
                await getZipFileWithoutRetry(zipFileParams).unwrap();
                setIsPollingZip(false);
                setZipFileParams(null);
                dist/* toast */.oR.success('Files downloaded successfully!');
            } catch (e) {
                await new Promise((r)=>setTimeout(r, 5000));
                pullZipFile(retryCount + 1);
            }
        };
        pullZipFile(0);
    }, [
        isPollingZip,
        zipFileParams,
        getZipFileWithoutRetry
    ]);
    (0,react.useEffect)(()=>{
        if (!isOpen) return;
        if (initialFilePath === '/workspace') {
            navigateHome();
            return;
        }
        const val = (initialFilePath !== null && initialFilePath !== void 0 ? initialFilePath : '').trim();
        if (!val) return;
        setIsLoadingContent(true);
        const intent = splitPath(val);
        autoOpenRequestRef.current = intent;
        if (currentPath !== intent.dir) {
            setCurrentPath(intent.dir);
        } else {
            setReloadToken((t)=>t + 1);
        }
    }, [
        isOpen,
        initialFilePath,
        navigateHome
    ]);
    // Directory loader + initial open from fresh data
    (0,react.useEffect)(()=>{
        var _dirControllerRef_current;
        if (!isOpen || !thread.thread_id) return;
        const controller = new AbortController();
        (_dirControllerRef_current = dirControllerRef.current) === null || _dirControllerRef_current === void 0 ? void 0 : _dirControllerRef_current.abort();
        dirControllerRef.current = controller;
        const { signal } = controller;
        const pathForThisRequest = currentPath;
        const loadData = async ()=>{
            setIsLoadingFiles(true);
            try {
                const filesData = await (0,api/* listSandboxFiles */.XY)(thread.thread_id, pathForThisRequest, openFromSharePage, {
                    signal
                });
                const rawLoaded = await (0,src_utils/* loadFilesData */.IZ)(filesData, thread.thread_id, openFromSharePage);
                const loaded = rawLoaded.map((f)=>({
                        ...f,
                        path: f.path || "".concat(ROOT, "/").concat(f.name)
                    }));
                const autoOpenRequest = autoOpenRequestRef.current;
                if (autoOpenRequest && autoOpenRequest.dir === pathForThisRequest && !signal.aborted) {
                    const target = loaded.find((file)=>file.name === autoOpenRequest.name && file.path === autoOpenRequest.full && !file.is_dir);
                    if (target) {
                        autoOpenRequestRef.current = null; // finished auto-open
                        setSelectedExternalFilepath(null);
                        openFileRef.current(target);
                    }
                }
                setFiles(loaded);
            } catch (error) {
                if (error instanceof types/* BillingError */.Ey) {
                    setShowPaymentRedirect(true);
                    setFiles([]);
                } else if (signal.aborted || (error === null || error === void 0 ? void 0 : error.name) === 'AbortError' || (error === null || error === void 0 ? void 0 : error.code) === 20) {
                    main/* datadogLogs */.yf.logger.warn('Request aborted: replaced by a newer in-flight request.');
                } else {
                    dist/* toast */.oR.error('Failed to load files');
                    setFiles([]);
                }
            } finally{
                if (!signal.aborted) setIsLoadingFiles(false);
            }
        };
        loadData();
        return ()=>controller.abort();
    }, [
        isOpen,
        thread.thread_id,
        currentPath,
        reloadToken,
        openFromSharePage
    ]);
    // ---------- render ----------
    const handleSaveHTML = async (content)=>{
        try {
            setIsUpdating(true);
            dist/* toast */.oR.info('Saving File');
            await (0,api/* updateSandboxFile */.rX)(thread.thread_id, selectedFilePath, content !== null && content !== void 0 ? content : '');
            dist/* toast */.oR.success('File updated');
        } catch (e) {
            main/* datadogLogs */.yf.logger.error('Failed to save file', {}, e);
            dist/* toast */.oR.error('Failed to save file');
        } finally{
            setIsUpdating(false);
        }
    };
    const handleNextFile = ()=>{
        const currentIndex = files.findIndex((f)=>f.path === selectedFilePath);
        if (currentIndex === -1) return;
        const nextFile = files.find((f, idx)=>idx > currentIndex && !f.is_dir);
        if (nextFile) {
            var _openFileRef_current;
            (_openFileRef_current = openFileRef.current) === null || _openFileRef_current === void 0 ? void 0 : _openFileRef_current.call(openFileRef, nextFile);
        }
    };
    const handlePrevFile = ()=>{
        const currentIndex = files.findIndex((f)=>f.path === selectedFilePath);
        if (currentIndex === -1) return;
        const prevFile = [
            ...files
        ].reverse().find((f, idx)=>files.length - 1 - idx < currentIndex && !f.is_dir);
        if (prevFile) {
            var _openFileRef_current;
            (_openFileRef_current = openFileRef.current) === null || _openFileRef_current === void 0 ? void 0 : _openFileRef_current.call(openFileRef, prevFile);
        }
    };
    if (!isOpen) return null;
    const fileDirectoryView = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "px-4 py-2 flex items-center gap-2 border-b",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                            variant: "ghost",
                            size: "icon",
                            onClick: navigateHome,
                            className: "h-8 w-8",
                            title: "Go to home directory",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(house/* default */.A, {
                                className: "h-4 w-4"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center overflow-x-auto flex-1 min-w-0 min-h-0 scrollbar-hide whitespace-nowrap",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "h-7 px-2 text-sm font-medium min-w-fit flex-shrink-0",
                                    onClick: navigateHome,
                                    children: "home"
                                }),
                                currentPath !== ROOT && /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                    children: getBreadcrumbSegments(currentPath).map((segment)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_right/* default */.A, {
                                                    className: "h-4 w-4 mx-1 text-muted-foreground opacity-50 flex-shrink-0"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                                    variant: "ghost",
                                                    size: "sm",
                                                    className: "h-7 px-2 text-sm font-medium truncate max-w-[200px]",
                                                    onClick: ()=>navigateToBreadcrumb(segment.path),
                                                    children: segment.name
                                                })
                                            ]
                                        }, segment.path))
                                }),
                                selectedFilePath && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_right/* default */.A, {
                                            className: "h-4 w-4 mx-1 text-muted-foreground opacity-50 flex-shrink-0"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "flex items-center gap-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-sm font-medium truncate",
                                                children: selectedFilePath.split('/').pop()
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex items-center gap-2 flex-shrink-0",
                            children: !selectedFilePath && !openFromSharePage && !showPaymentRedirect && /*#__PURE__*/ (0,jsx_runtime.jsx)(ViewSwitcher, {
                                currentView: view,
                                onChange: (v)=>setView(v)
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex-1 min-h-0 overflow-auto scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700 scrollbar-track-transparent",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex-1 min-h-0 overflow-hidden h-full",
                        children: selectedFilePath ? // ----- File Viewer -----
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "h-full w-full overflow-auto",
                            children: showPaymentRedirect ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "h-full w-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PaywallFileViewer, {
                                    message: "You've reached your daily query limit. Upgrade to access this file."
                                })
                            }) : isLoadingContent ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "h-full w-full flex flex-col items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(loader/* default */.A, {
                                        className: "h-8 w-8 animate-spin text-primary mb-3"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Loading file..."
                                    })
                                ]
                            }) : contentError ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "h-full w-full flex items-center justify-center p-4",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "max-w-md p-6 text-center border rounded-lg bg-muted/10",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(triangle_alert/* default */.A, {
                                            className: "h-10 w-10 text-orange-500 mx-auto mb-4"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                            className: "text-lg font-medium mb-2",
                                            children: "Error Loading File"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-sm text-muted-foreground mb-4",
                                            children: contentError
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex justify-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                                    onClick: ()=>{
                                                        setContentError(null);
                                                        setIsLoadingContent(true);
                                                        if (selectedFilePath) {
                                                            openFile({
                                                                path: selectedFilePath,
                                                                name: selectedFilePath.split('/').pop() || '',
                                                                is_dir: false,
                                                                size: 0,
                                                                mod_time: new Date().toISOString()
                                                            });
                                                        }
                                                    },
                                                    children: "Retry"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                                    onClick: clearSelectedFile,
                                                    children: "Back to Files"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "h-full w-full relative",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(file_renderers/* FileRenderer */.YB, {
                                    content: textContentForRenderer,
                                    binaryUrl: blobUrlForRenderer,
                                    fileName: selectedFilePath,
                                    handleDownload: handleDownload,
                                    handleSave: (fileType)=>handleSaveFile(fileType),
                                    className: "h-full w-full",
                                    thread: thread,
                                    isOpenedAtFileViewerModal: true,
                                    updateExcelFile: updateExcelFile,
                                    synfusionMarkdownRef: syncfusionMarkdownRef,
                                    onCopyMarkdown: handleCopy,
                                    onSaveMarkdown: handleSave,
                                    handleCopyClick: handleCopy,
                                    htmlNewRendererRef: htmlNewRendererRef,
                                    syncfusionExcelRef: syncfusionExcelRef,
                                    syncfusionImageRef: syncfusionImageRef,
                                    onSaveImage: handleSave,
                                    syncfusionWordRef: syncfusionWordRef,
                                    isGeneratingImageCopy: isGeneratingImageCopy,
                                    onSaveHTML: (paragraph)=>handleSaveHTML(paragraph),
                                    handleDeployClick: handleDeployClick,
                                    isLoadingUpdateHTML: isUpdating,
                                    handleNextFile: handleNextFile,
                                    handlePrevFile: handlePrevFile
                                }, selectedFilePath)
                            })
                        }) : // ----- File Explorer -----
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "h-full w-full",
                            children: showPaymentRedirect ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "h-full w-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PaywallFileViewer, {
                                    message: "You've reached your daily query limit. Upgrade to access workspace files."
                                })
                            }) : isLoadingFiles ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "h-full w-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(loader/* default */.A, {
                                    className: "h-6 w-6 animate-spin text-primary"
                                })
                            }) : files.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "h-full w-full flex flex-col items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(folder/* default */.A, {
                                        className: "h-12 w-12 mb-2 text-muted-foreground opacity-30"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Directory is empty"
                                    })
                                ]
                            }) : isNewColumnWorkspaceEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FileManagerNewColumn, {
                                files: files,
                                openFile: (f)=>openFile(f.fileDetails),
                                view: view,
                                onDeleteFile: (path)=>handleDeleteFile(path),
                                onDownloadAll: downloadAll,
                                onRenameFile: (path, name)=>handleRenameFile(path, name),
                                onDownloadFile: (filePath)=>handleDownloadFile(filePath),
                                onDeleteAll: handleDeleteAll,
                                showDeleteAllButton: showDeleteAllButton
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(FileManager, {
                                files: files,
                                openFile: (f)=>openFile(f.fileDetails),
                                view: view
                            })
                        })
                    })
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SidePanel/* SidePanel */.w, {
        onClose: onClose,
        title: title,
        subtitle: subtitle,
        isMaximized: isMaximized,
        onToggleMaximize: onToggleMaximize,
        headerActions: !isShare && /*#__PURE__*/ (0,jsx_runtime.jsx)(FileDirectoryToolbar, {
            selectedFilePath: selectedFilePath,
            isDownloadAllEnabled: true,
            isUpdating: isUpdating,
            waitingForVscode: waitingForVscode,
            isLoadingContent: isLoadingContent,
            isDownloading: isDownloading,
            isExportingPdf: isExportingPdf,
            isUploading: isUploading,
            isFilesDownloading: isFilesDownloading,
            isZipFilesScheduling: isZipFilesScheduling,
            isPollingZip: isPollingZip,
            openFromSharePage: openFromSharePage,
            showPaymentRedirect: showPaymentRedirect,
            textContentForRenderer: textContentForRenderer,
            currentFilesCount: currentFilesCount,
            canDeploy: Boolean(onSubmitMessage),
            handleSave: handleSave,
            handleOpenInVsCode: handleOpenInVsCode,
            handleCopy: handleCopy,
            handleDeployClick: handleDeployClick,
            handleDownload: handleDownload,
            handleExportPdf: handleExportPdf,
            downloadAll: downloadAll,
            isMarkdownFile: isMarkdownFile,
            isHtmlFile: isHtmlFile,
            isWordFile: isWordFile,
            isExcelFile: isExcelFile,
            isCsvFile: isCsvFile
        }),
        children: fileDirectoryView()
    });
};


/***/ }),

/***/ 61882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  og: () => (/* reexport */ DEFAULT_FMT),
  ID: () => (/* reexport */ EXT_TO_FMT),
  Y4: () => (/* reexport */ FMT_QUALITY),
  jY: () => (/* reexport */ MIME_TO_EXT),
  oD: () => (/* reexport */ SyncfusionImageRenderer),
  OC: () => (/* reexport */ withExt)
});

// UNUSED EXPORTS: FMT_TO_MIME, TOOLBAR_ITEMS, TYPE_ALIAS, blobToBase64, getExtension

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-react-image-editor/src/image-editor/imageeditor.component.js
var imageeditor_component = __webpack_require__(94882);
// EXTERNAL MODULE: ./src/components/file-renderers/SyncfusionImageRenderer/SyncfusionImageRenderer.module.scss
var SyncfusionImageRenderer_module = __webpack_require__(40707);
var SyncfusionImageRenderer_module_default = /*#__PURE__*/__webpack_require__.n(SyncfusionImageRenderer_module);
;// ./src/components/file-renderers/SyncfusionImageRenderer/constants.ts
const EXT_TO_FMT = {
    png: 'png',
    jpg: 'jpeg',
    jpeg: 'jpeg',
    webp: 'webp',
    svg: 'svg',
    gif: 'png',
    bmp: 'png',
    ico: 'png'
};
const FMT_QUALITY = {
    png: 1,
    jpeg: 0.92,
    webp: 0.92,
    svg: 1
};
const MIME_TO_EXT = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/webp': 'webp',
    'image/svg+xml': 'svg',
    'image/gif': 'gif',
    'image/bmp': 'bmp',
    'image/x-icon': 'ico',
    'image/vnd.microsoft.icon': 'ico'
};
const DEFAULT_FMT = 'png';
const TYPE_ALIAS = {
    jpg: 'jpeg'
};
const FMT_TO_MIME = {
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    gif: 'image/gif',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    bmp: 'image/bmp',
    ico: 'image/x-icon'
};
const TOOLBAR_ITEMS = [
    'Undo',
    'Redo',
    'Crop',
    'Annotate',
    'Transform',
    'Finetune',
    'Filters',
    'ZoomIn',
    'ZoomOut',
    'Reset'
];

// EXTERNAL MODULE: ./node_modules/@datadog/browser-logs/esm/entries/main.js + 109 modules
var main = __webpack_require__(73262);
;// ./src/components/file-renderers/SyncfusionImageRenderer/utils.ts


const withExt = (path, ext)=>/\.[^.\/\\]+$/i.test(path) ? path.replace(/\.[^.\/\\]+$/i, ".".concat(ext)) : "".concat(path, ".").concat(ext);
const VALID_EXTS = new Set([
    'png',
    'jpg',
    'jpeg',
    'gif',
    'webp',
    'svg',
    'bmp',
    'ico'
]);
const isTypeImage = (ext)=>VALID_EXTS.has(ext);
const getExtension = (fileName)=>{
    var _fileName_split_pop;
    const extension = (_fileName_split_pop = fileName.split('.').pop()) === null || _fileName_split_pop === void 0 ? void 0 : _fileName_split_pop.toLowerCase();
    return isTypeImage(extension) ? extension : DEFAULT_FMT;
};
const blobToBase64 = async (binaryUrl, fmt)=>{
    try {
        const response = await fetch(binaryUrl);
        if (!response.ok) {
            throw new Error("Fetch failed content from ".concat(binaryUrl));
        }
        var _FMT_TO_MIME_fmt;
        const targetMime = (_FMT_TO_MIME_fmt = FMT_TO_MIME[fmt]) !== null && _FMT_TO_MIME_fmt !== void 0 ? _FMT_TO_MIME_fmt : FMT_TO_MIME[DEFAULT_FMT];
        let blob = await response.blob();
        if (!blob.type || blob.type !== targetMime) {
            blob = new Blob([
                blob
            ], {
                type: targetMime
            });
        }
        const dataBase64 = await new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onload = ()=>resolve(reader.result);
            reader.onerror = ()=>{
                reject(new Error('FileReader failed to convert to base64'));
            };
            reader.readAsDataURL(blob);
        });
        return dataBase64;
    } catch (error) {
        main/* datadogLogs */.yf.logger.error('Failed to encode into Base 64', {}, error);
        throw error;
    }
};

// EXTERNAL MODULE: ./src/components/file-renderers/FileRendererToolbar/index.tsx
var FileRendererToolbar = __webpack_require__(28420);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.mjs
var dist = __webpack_require__(5379);
// EXTERNAL MODULE: ./src/hooks/index.ts + 39 modules
var hooks = __webpack_require__(71203);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/SpinnerGap.es.js + 1 modules
var SpinnerGap_es = __webpack_require__(91679);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
;// ./src/components/file-renderers/SyncfusionImageRenderer/SyncfusionImageRenderer.tsx
/* __next_internal_client_entry_do_not_use__ SyncfusionImageRenderer auto */ 










const SyncfusionImageRenderer = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { binaryUrl, fileName, showToolbar = false, onSaveImage, handleDownload } = param;
    // Workaround: This prop is called fileName but its actually filePath. Some other files have same issue
    const fileImageName = fileName === null || fileName === void 0 ? void 0 : fileName.split('/').pop();
    const [isImageLoading, setIsImageLoading] = (0,react.useState)(true);
    const editorRef = (0,react.useRef)(null);
    (0,react.useImperativeHandle)(ref, ()=>({
            exportBlob: async function() {
                let type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'png', quality = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
                var _editor_getImageData;
                const editor = editorRef.current;
                if (!editor) throw new Error('Editor not ready');
                const imageData = (_editor_getImageData = editor.getImageData) === null || _editor_getImageData === void 0 ? void 0 : _editor_getImageData.call(editor);
                if (!imageData) throw new Error('Failed to get image pixels');
                const canvas = document.createElement('canvas');
                canvas.width = imageData.width;
                canvas.height = imageData.height;
                const ctx = canvas.getContext('2d');
                if (!ctx) throw new Error('Canvas 2D context unavailable');
                ctx.putImageData(imageData, 0, 0);
                const fmtType = EXT_TO_FMT[type];
                const mime = FMT_TO_MIME[fmtType];
                return await new Promise((resolve, reject)=>{
                    canvas.toBlob((b)=>b ? resolve(b) : reject(new Error('toBlob() returned null')), mime, fmtType === 'jpeg' ? Math.max(0, Math.min(1, Number(quality))) : undefined);
                });
            }
        }));
    const handleCreated = async ()=>{
        if (binaryUrl && editorRef.current) {
            var _editorRef_current_reset, _editorRef_current;
            (_editorRef_current_reset = (_editorRef_current = editorRef.current).reset) === null || _editorRef_current_reset === void 0 ? void 0 : _editorRef_current_reset.call(_editorRef_current);
            const extension = getExtension(fileName);
            const base64 = await blobToBase64(binaryUrl, extension);
            editorRef.current.open(base64);
        }
    };
    const handleFileOpened = ()=>{
        setIsImageLoading(false);
    };
    const { resolvedTheme } = (0,dist/* useTheme */.D)();
    const isDark = resolvedTheme === 'dark';
    const { isLoading } = (0,hooks/* useSyncfusionTheme */.IH)(isDark, editorRef);
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (SyncfusionImageRenderer_module_default()).loader,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SpinnerGap_es/* SpinnerGapIcon */.r, {
                size: constants/* SVG_SIZE_XXL */.iWV,
                className: "animate-spin"
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "".concat((SyncfusionImageRenderer_module_default()).root, " ").concat(isImageLoading ? (SyncfusionImageRenderer_module_default()).hidden : ''),
            children: [
                showToolbar && /*#__PURE__*/ (0,jsx_runtime.jsx)(FileRendererToolbar/* FileRendererToolbar */.N, {
                    fileName: fileImageName,
                    showSaveButton: true,
                    showDownloadButton: true,
                    handleSave: onSaveImage,
                    handleDownload: handleDownload
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(imageeditor_component/* ImageEditorComponent */.a, {
                    ref: editorRef,
                    created: handleCreated,
                    fileOpened: handleFileOpened,
                    className: (SyncfusionImageRenderer_module_default()).imageEditor,
                    toolbar: TOOLBAR_ITEMS
                }, isDark ? 'dark' : 'light'),
                isImageLoading && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SpinnerGap_es/* SpinnerGapIcon */.r, {
                        size: constants/* SVG_SIZE_XXL */.iWV,
                        className: "animate-spin"
                    })
                })
            ]
        }, binaryUrl !== null && binaryUrl !== void 0 ? binaryUrl : 'empty')
    });
});
SyncfusionImageRenderer.displayName = 'SyncfusionImageRenderer';

;// ./src/components/file-renderers/SyncfusionImageRenderer/index.ts






/***/ }),

/***/ 63360:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"center":"ExcelSpreadsheet_center__I3eex","nj-animate-horizontal-appearance-ltr-enter":"ExcelSpreadsheet_nj-animate-horizontal-appearance-ltr-enter__Yx_S6","nj-animate-horizontal-appearance-ltr-enter-active":"ExcelSpreadsheet_nj-animate-horizontal-appearance-ltr-enter-active__ZfEnz","nj-animate-horizontal-appearance-ltr-exit":"ExcelSpreadsheet_nj-animate-horizontal-appearance-ltr-exit__oGCV7","nj-animate-horizontal-appearance-ltr-exit-active":"ExcelSpreadsheet_nj-animate-horizontal-appearance-ltr-exit-active__yQFrz","nj-animate-left-panel-width-reduce-enter":"ExcelSpreadsheet_nj-animate-left-panel-width-reduce-enter___JoNm","nj-animate-left-panel-width-reduce-enter-active":"ExcelSpreadsheet_nj-animate-left-panel-width-reduce-enter-active__oeQ2u","nj-animate-left-panel-width-reduce-exit":"ExcelSpreadsheet_nj-animate-left-panel-width-reduce-exit__9oNQ_","nj-animate-left-panel-width-reduce-exit-active":"ExcelSpreadsheet_nj-animate-left-panel-width-reduce-exit-active__ZHYS_","nj-animate-vertical-appearance-appear":"ExcelSpreadsheet_nj-animate-vertical-appearance-appear__VkaQw","nj-animate-vertical-appearance-appear-active":"ExcelSpreadsheet_nj-animate-vertical-appearance-appear-active__EwjyA","nj-animate-vertical-appearance-enter":"ExcelSpreadsheet_nj-animate-vertical-appearance-enter__KDi47","nj-animate-vertical-appearance-enter-active":"ExcelSpreadsheet_nj-animate-vertical-appearance-enter-active__QgEkN","nj-animate-vertical-appearance-exit":"ExcelSpreadsheet_nj-animate-vertical-appearance-exit__KDaMM","nj-animate-vertical-appearance-exit-active":"ExcelSpreadsheet_nj-animate-vertical-appearance-exit-active__3wKid","root":"ExcelSpreadsheet_root__4wkLP","cornerCell":"ExcelSpreadsheet_cornerCell__MzhK2","headerCell":"ExcelSpreadsheet_headerCell__kEO1i","rowHeaderCell":"ExcelSpreadsheet_rowHeaderCell__5pGwc","headerSelected":"ExcelSpreadsheet_headerSelected__d2l86","cell":"ExcelSpreadsheet_cell__aj6h2","cellSelected":"ExcelSpreadsheet_cellSelected__3WytJ","infinite-spinner":"ExcelSpreadsheet_infinite-spinner__oeUAu","fadeIn":"ExcelSpreadsheet_fadeIn__cOQz4","blinking":"ExcelSpreadsheet_blinking__Z3ujx","movingRight":"ExcelSpreadsheet_movingRight__5IGeR"};

/***/ }),

/***/ 64194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* reexport */ EmailNotificationsDropdown)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Bell.es.js + 1 modules
var Bell_es = __webpack_require__(58594);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/CaretDown.es.js
var CaretDown_es = __webpack_require__(83626);
// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button = __webpack_require__(62717);
// EXTERNAL MODULE: ./src/components/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(6259);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./src/hooks/userHooks/useUserSettings.ts
var useUserSettings = __webpack_require__(5072);
// EXTERNAL MODULE: ./src/constants/settings.ts
var settings = __webpack_require__(29715);
// EXTERNAL MODULE: ./node_modules/sonner/dist/index.mjs
var dist = __webpack_require__(18720);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(64269);
// EXTERNAL MODULE: ./src/components/thread/chat-input/components/EmailNotificationsDropdown/EmailNotificationsDropdown.module.scss
var EmailNotificationsDropdown_module = __webpack_require__(7075);
var EmailNotificationsDropdown_module_default = /*#__PURE__*/__webpack_require__.n(EmailNotificationsDropdown_module);
// EXTERNAL MODULE: ./src/hooks/index.ts + 39 modules
var hooks = __webpack_require__(71203);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/ClockCounterClockwise.es.js + 1 modules
var ClockCounterClockwise_es = __webpack_require__(79911);
// EXTERNAL MODULE: ./src/components/thread/UndoAIActions/UndoAIAction.module.scss
var UndoAIAction_module = __webpack_require__(90861);
var UndoAIAction_module_default = /*#__PURE__*/__webpack_require__.n(UndoAIAction_module);
// EXTERNAL MODULE: ./src/gen/sn-api/models/index.ts + 31 modules
var models = __webpack_require__(61330);
// EXTERNAL MODULE: ./src/hooks/use-mobile.ts
var use_mobile = __webpack_require__(75409);
// EXTERNAL MODULE: ./src/components/ui/dialog.tsx
var dialog = __webpack_require__(51834);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Spinner.es.js + 1 modules
var Spinner_es = __webpack_require__(97849);
// EXTERNAL MODULE: ./src/store/services/index.ts + 9 modules
var services = __webpack_require__(57403);
// EXTERNAL MODULE: ./src/components/thread/UndoAIActions/UndoAIActionConfirmationModal.module.scss
var UndoAIActionConfirmationModal_module = __webpack_require__(52067);
var UndoAIActionConfirmationModal_module_default = /*#__PURE__*/__webpack_require__.n(UndoAIActionConfirmationModal_module);
;// ./src/components/thread/UndoAIActions/UndoAIActionConfirmationModal.tsx
/* __next_internal_client_entry_do_not_use__ UndoAIActionConfirmationModal auto */ 







const UndoAIActionConfirmationModal = (param)=>{
    let { isOpen, onClose, threadId, agentRunId } = param;
    const [undoAgentRun, { isLoading }] = (0,services/* useUndoAgentRunMutation */.PA)();
    const [isSuccess, setSuccess] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)(null);
    const handleConfirm = async ()=>{
        if (!agentRunId) return;
        setError(null);
        try {
            await undoAgentRun({
                threadId,
                agentRunId
            }).unwrap();
            dist/* toast */.oR.success('Rollback completed successfully');
            setSuccess(true);
            // Wait a moment to show success state, then reload
            setTimeout(()=>{
                window.location.reload();
            }, 500);
        } catch (err) {
            setError('Sorry, we were unable to rollback. Please try again with a more recent message.');
        }
    };
    const handleClose = ()=>{
        if (isLoading) return;
        // Wait a moment to update the status on close
        setTimeout(()=>{
            setError(null);
        }, 500);
        onClose();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.lG, {
        open: isOpen,
        onOpenChange: handleClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogContent */.Cf, {
            className: (UndoAIActionConfirmationModal_module_default()).root,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogHeader */.c7, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogTitle */.L3, {
                        className: (UndoAIActionConfirmationModal_module_default()).title,
                        children: "Rollback confirmation"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (UndoAIActionConfirmationModal_module_default()).content,
                    children: error ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (UndoAIActionConfirmationModal_module_default()).errorSection,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogDescription */.rr, {
                            className: (UndoAIActionConfirmationModal_module_default()).errorMessage,
                            children: error
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (UndoAIActionConfirmationModal_module_default()).rollbackSection,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: (UndoAIActionConfirmationModal_module_default()).sectionTitle,
                                children: "What will be rolled back"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (UndoAIActionConfirmationModal_module_default()).rollbackItem,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: (UndoAIActionConfirmationModal_module_default()).rollbackHeader,
                                        children: "Files"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: (UndoAIActionConfirmationModal_module_default()).rollbackDescription,
                                        children: "All files in your computer will be restored to the state they were in at this time."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (UndoAIActionConfirmationModal_module_default()).rollbackItem,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: (UndoAIActionConfirmationModal_module_default()).rollbackHeader,
                                        children: "Agent memory"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: (UndoAIActionConfirmationModal_module_default()).rollbackDescription,
                                        children: "Ninja's memory will reset to what it knew about your project at this time."
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (UndoAIActionConfirmationModal_module_default()).actions,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                            color: "transparent",
                            onClick: handleClose,
                            disabled: isLoading || isSuccess,
                            children: error ? 'Close' : 'Cancel'
                        }),
                        !error && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
                            color: "primary",
                            onClick: handleConfirm,
                            disabled: isLoading || isSuccess,
                            children: [
                                isLoading && /*#__PURE__*/ (0,jsx_runtime.jsx)(Spinner_es/* SpinnerIcon */.N, {
                                    size: 20,
                                    className: "animate-spin"
                                }),
                                "Confirm rollback"
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

;// ./src/components/thread/UndoAIActions/UndoAIActions.tsx
/* __next_internal_client_entry_do_not_use__ messageSupportsUndo,UndoAIActions auto */ 








const messageSupportsUndo = (agentType)=>{
    return agentType === models/* AgentType */.Eo.DEFAULT || agentType === models/* AgentType */.Eo.DEFAULT_SONNET_45 || agentType === models/* AgentType */.Eo.DUAL_MODEL || agentType === models/* AgentType */.Eo.DEEP_CODER;
};
const UndoAIActions = (param)=>{
    let { threadId, agentRunId, isThreadIdle = false } = param;
    const [showConfirmModal, setShowConfirmModal] = (0,react.useState)(false);
    const isMobile = (0,use_mobile/* useIsMobile */.a)();
    const handleRollbackClick = ()=>{
        setShowConfirmModal(true);
    };
    const handleCloseModal = ()=>{
        setShowConfirmModal(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
                tooltipContent: "Rollback task and VM workspace to this point",
                color: "transparent",
                size: "small",
                onClick: handleRollbackClick,
                className: (UndoAIAction_module_default()).button,
                disabled: !isThreadIdle,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ClockCounterClockwise_es/* ClockCounterClockwiseIcon */.K, {
                        size: constants/* SVG_SIZE_M */.ng3
                    }),
                    !isMobile && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: "Rollback"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(UndoAIActionConfirmationModal, {
                isOpen: showConfirmModal,
                onClose: handleCloseModal,
                threadId: threadId,
                agentRunId: agentRunId
            })
        ]
    });
};

;// ./src/components/thread/UndoAIActions/index.ts


// EXTERNAL MODULE: ./node_modules/posthog-js/react/dist/esm/index.js
var esm = __webpack_require__(26302);
// EXTERNAL MODULE: ./src/hooks/threadHooks/useThread.ts
var useThread = __webpack_require__(99151);
// EXTERNAL MODULE: ./src/components/thread/AddScheduleTaskModal/index.ts + 1 modules
var AddScheduleTaskModal = __webpack_require__(83989);
// EXTERNAL MODULE: ./src/components/scheduled-tasks/EditScheduleTaskModal/index.ts + 1 modules
var EditScheduleTaskModal = __webpack_require__(50866);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/CalendarDots.es.js
var CalendarDots_es = __webpack_require__(34363);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/CalendarPlus.es.js + 1 modules
var CalendarPlus_es = __webpack_require__(73749);
;// ./src/components/thread/chat-input/components/EmailNotificationsDropdown/EmailNotificationsDropdown.tsx



















const EmailNotificationsDropdown = (param)=>{
    let { disabled = false, threadId, agentRunId, agentType, agentStatus, sandboxProvider, showUndoAIActions = false, shouldShowEmailDropdown = false } = param;
    const [open, setOpen] = (0,react.useState)(false);
    const { setting: emailNotificationSetting, updateSettings, isPending } = (0,useUserSettings/* useUserSettings */.Q)(settings/* NotificationsSettingKeys */.$B.TASK_EMAIL);
    const isScheduledTaskEnabled = (0,esm/* useFeatureFlagEnabled */.Tp)('scheduled-task');
    const [showChangeScheduleTaskModal, setShowChangeScheduleTaskModal] = (0,react.useState)(false);
    const isEnabled = Boolean(emailNotificationSetting === null || emailNotificationSetting === void 0 ? void 0 : emailNotificationSetting.value);
    const status = isEnabled ? 'enabled' : 'disabled';
    const isMobile = (0,hooks/* useIsMobile */.al)();
    const { onToggleScheduleLimitModal } = (0,hooks/* useInterfaceControlActions */.fE)();
    const { isFreeTier } = (0,hooks/* useGetUser */.be)();
    const isEmailDropdownEnable = (0,esm/* useFeatureFlagEnabled */.Tp)('email-notification');
    const isUndoAIActionsEnable = (0,esm/* useFeatureFlagEnabled */.Tp)('undoAIActions');
    const { thread } = (0,useThread/* useThread */._)(threadId);
    const threadName = (thread === null || thread === void 0 ? void 0 : thread.name) || 'Thread';
    const sandboxSupportsUndo = sandboxProvider === 'ninja-firecracker' || sandboxProvider === 'ninja-firecracker-secondary';
    const isThreadIdle = agentStatus === 'idle';
    const shouldRenderUndo = isUndoAIActionsEnable && sandboxSupportsUndo && messageSupportsUndo(agentType) && showUndoAIActions && Boolean(threadId && agentRunId);
    const openChangeScheduleTaskModal = ()=>{
        if (isFreeTier) {
            onToggleScheduleLimitModal(true);
        } else {
            setShowChangeScheduleTaskModal(true);
        }
    };
    const handleStatusChange = async (newStatus)=>{
        const newValue = newStatus === 'enabled';
        try {
            await updateSettings(newValue);
            dist/* toast */.oR.success(newValue ? 'Email notifications are now enabled. You can turn them off anytime in Account Settings.' : 'Email notifications disabled');
        } catch (e) {
            dist/* toast */.oR.error('Failed to update notification settings. Please try again.');
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (0,utils.cn)((EmailNotificationsDropdown_module_default()).container, {
                    [(EmailNotificationsDropdown_module_default()).flexBetween]: shouldRenderUndo
                }),
                children: [
                    shouldRenderUndo && /*#__PURE__*/ (0,jsx_runtime.jsx)(UndoAIActions, {
                        threadId: threadId,
                        agentRunId: agentRunId,
                        isThreadIdle: isThreadIdle
                    }),
                    isScheduledTaskEnabled && (thread === null || thread === void 0 ? void 0 : thread.schedule) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
                        color: "transparent",
                        shape: "round",
                        onClick: openChangeScheduleTaskModal,
                        tooltipContent: "Edit scheduled task",
                        tooltipPosition: "bottom",
                        "data-testid": "schedule-automation-button",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CalendarDots_es/* CalendarDotsIcon */.w, {
                                size: constants/* SVG_SIZE_M */.ng3
                            }),
                            " Scheduled Automation"
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
                        color: "transparent",
                        shape: "round",
                        onClick: openChangeScheduleTaskModal,
                        tooltipContent: "Turn this thread into a scheduled task",
                        tooltipPosition: "bottom",
                        "data-testid": "schedule-automation-button",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CalendarPlus_es/* CalendarPlusIcon */.U, {
                                size: constants/* SVG_SIZE_M */.ng3
                            }),
                            " Schedule Automation"
                        ]
                    }),
                    shouldShowEmailDropdown && isEmailDropdownEnable && /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
                        open: open,
                        onOpenChange: setOpen,
                        withEvent: true,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                                asChild: true,
                                disabled: disabled || isPending,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
                                    color: "secondary",
                                    size: "small",
                                    disabled: disabled || isPending,
                                    tooltipContent: !isMobile && 'Receive email alerts when your tasks are done',
                                    className: (0,utils.cn)((EmailNotificationsDropdown_module_default()).button, open && (EmailNotificationsDropdown_module_default()).buttonOpen),
                                    "data-testid": "email-notifications-button",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Bell_es/* BellIcon */.X, {
                                            size: constants/* SVG_SIZE_M */.ng3,
                                            className: (EmailNotificationsDropdown_module_default()).buttonIcon
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: (EmailNotificationsDropdown_module_default()).buttonText,
                                            children: status === 'enabled' ? 'Enabled' : 'Disabled'
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CaretDown_es/* CaretDownIcon */.b, {
                                            size: constants/* SVG_SIZE_S */.lgH,
                                            className: (0,utils.cn)((EmailNotificationsDropdown_module_default()).buttonIcon, (EmailNotificationsDropdown_module_default()).caretDownIcon)
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuContent */.SQ, {
                                align: "start",
                                className: (EmailNotificationsDropdown_module_default()).dropdownContent,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (EmailNotificationsDropdown_module_default()).dropdownSubtitle,
                                        children: "Email notification"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuRadioGroup */.Hr, {
                                        value: status,
                                        onValueChange: (value)=>handleStatusChange(value),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuRadioItem */.Ht, {
                                                value: "disabled",
                                                disabled: isPending,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: (EmailNotificationsDropdown_module_default()).radioLabel,
                                                    children: "Disabled"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuRadioItem */.Ht, {
                                                value: "enabled",
                                                disabled: isPending,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: (EmailNotificationsDropdown_module_default()).radioLabel,
                                                    children: "Enabled"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            isScheduledTaskEnabled && (thread === null || thread === void 0 ? void 0 : thread.schedule) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EditScheduleTaskModal/* EditScheduleTaskModal */.O, {
                isOpen: showChangeScheduleTaskModal,
                onClose: ()=>setShowChangeScheduleTaskModal(false),
                scheduleTask: thread.schedule
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(AddScheduleTaskModal/* AddScheduleTaskModal */.T, {
                isOpen: showChangeScheduleTaskModal,
                onClose: ()=>setShowChangeScheduleTaskModal(false),
                threadId: threadId,
                threadName: threadName
            })
        ]
    });
};

;// ./src/components/thread/chat-input/components/EmailNotificationsDropdown/index.ts



/***/ }),

/***/ 65340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   To: () => (/* binding */ MarkdownRenderer),
/* harmony export */   wO: () => (/* binding */ processUnicodeContent),
/* harmony export */   yX: () => (/* binding */ MarkdownRendererWithScroll)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4164);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97866);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30736);
/* harmony import */ var rehype_sanitize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75770);
/* harmony import */ var _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17037);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64269);
/* harmony import */ var _code_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96984);
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4326);
/* harmony import */ var overlayscrollbars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37654);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5379);
/* harmony import */ var posthog_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26302);
/* eslint-disable @next/next/no-img-element */ /* __next_internal_client_entry_do_not_use__ processUnicodeContent,MarkdownRenderer,MarkdownRendererWithScroll auto */ 












overlayscrollbars__WEBPACK_IMPORTED_MODULE_7__/* .OverlayScrollbars */ .ae.plugin(overlayscrollbars__WEBPACK_IMPORTED_MODULE_7__/* .ClickScrollPlugin */ .lW);
// Process Unicode escape sequences in content
const processUnicodeContent = (content)=>{
    if (!content) return '';
    // Process \uXXXX Unicode escape sequences (BMP characters)
    const bmpProcessed = content.replace(/\\u([0-9a-fA-F]{4})/g, (_, codePoint)=>{
        return String.fromCharCode(parseInt(codePoint, 16));
    });
    // Process \uXXXXXXXX Unicode escape sequences (supplementary plane characters)
    return bmpProcessed.replace(/\\u([0-9a-fA-F]{8})/g, (_, codePoint)=>{
        const highSurrogate = parseInt(codePoint.substring(0, 4), 16);
        const lowSurrogate = parseInt(codePoint.substring(4, 8), 16);
        return String.fromCharCode(highSurrogate, lowSurrogate);
    });
};
const MarkdownRenderer = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function MarkdownRenderer(param, ref) {
    let { content, className, isStreaming } = param;
    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    // Process Unicode escape sequences in the content
    const processedContent = processUnicodeContent(content);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const container = containerRef.current;
        if (!container || !isStreaming) return;
        const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100;
        if (isNearBottom) {
            container.scrollTop = container.scrollHeight;
        }
    }, [
        content,
        isStreaming
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_2__/* .ScrollArea */ .F, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)('w-full h-full rounded-md relative', className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "p-4 markdown prose prose-sm dark:prose-invert max-w-none w-full min-w-0 overflow-auto",
            ref: containerRef,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_markdown__WEBPACK_IMPORTED_MODULE_8__/* .Markdown */ .oz, {
                    remarkPlugins: [
                        remark_gfm__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A
                    ],
                    rehypePlugins: [
                        rehype_raw__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,
                        rehype_sanitize__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A
                    ],
                    components: {
                        code (props) {
                            const { className, children, ...rest } = props;
                            const match = /language-(\w+)/.exec(className || '');
                            // Check if it's an inline code block by examining the node type
                            const isInline = !className || !match;
                            if (isInline) {
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                                    className: className,
                                    ...rest,
                                    children: children
                                });
                            }
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_code_renderer__WEBPACK_IMPORTED_MODULE_4__/* .CodeRenderer */ .$, {
                                content: String(children).replace(/\n$/, ''),
                                language: match ? match[1] : ''
                            });
                        },
                        // Style other elements as needed
                        h1: (param)=>{
                            let { node, ...props } = param;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                className: "text-2xl font-bold my-4",
                                ...props
                            });
                        },
                        h2: (param)=>{
                            let { node, ...props } = param;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                className: "text-xl font-bold my-3",
                                ...props
                            });
                        },
                        h3: (param)=>{
                            let { node, ...props } = param;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                className: "text-lg font-bold my-2",
                                ...props
                            });
                        },
                        a: (param)=>{
                            let { node, href, ...props } = param;
                            const handleMouseDown = (e)=>{
                                if (e.button !== 0) {
                                    return;
                                }
                                e.preventDefault();
                                e.stopPropagation();
                                if (href) {
                                    window.open(href, '_blank', 'noopener,noreferrer');
                                }
                            };
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                href: href !== null && href !== void 0 ? href : undefined,
                                className: "text-primary hover:underline cursor-pointer",
                                ...props,
                                onMouseDown: handleMouseDown
                            });
                        },
                        p: (param)=>{
                            let { node, ...props } = param;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                className: "my-2 font-sans cjk-text whitespace-pre-wrap",
                                ...props
                            });
                        },
                        ul: (param)=>{
                            let { node, ...props } = param;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
                                className: "list-disc pl-5 my-2",
                                ...props
                            });
                        },
                        ol: (param)=>{
                            let { node, ...props } = param;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ol", {
                                className: "list-decimal pl-5 my-2",
                                ...props
                            });
                        },
                        li: (param)=>{
                            let { node, ...props } = param;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                className: "my-1",
                                ...props
                            });
                        },
                        blockquote: (param)=>{
                            let { node, ...props } = param;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("blockquote", {
                                className: "border-l-4 border-muted pl-4 italic my-2",
                                ...props
                            });
                        },
                        img: (param)=>{
                            let { node, ...props } = param;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                className: "max-w-full h-auto rounded-md my-2",
                                ...props,
                                alt: props.alt || ''
                            });
                        },
                        pre: (param)=>{
                            let { node, ...props } = param;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", {
                                className: "p-0 my-2 bg-transparent",
                                ...props
                            });
                        },
                        table: (param)=>{
                            let { node, ...props } = param;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", {
                                className: "w-full border-collapse my-3 text-sm",
                                ...props
                            });
                        },
                        th: (param)=>{
                            let { node, ...props } = param;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
                                className: "border border-slate-300 dark:border-zinc-700 px-3 py-2 text-left font-semibold bg-slate-100 dark:bg-zinc-800",
                                ...props
                            });
                        },
                        td: (param)=>{
                            let { node, ...props } = param;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                className: "border border-slate-300 dark:border-zinc-700 px-3 py-2 cjk-text",
                                ...props
                            });
                        }
                    },
                    children: processedContent
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    ref: scrollRef
                })
            ]
        })
    });
}), (prevProps, nextProps)=>{
    return prevProps.content === nextProps.content && prevProps.className === nextProps.className && prevProps.isStreaming === nextProps.isStreaming;
});
const MarkdownRendererWithScrollInner = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function MarkdownRendererWithScrollInner(props, ref) {
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { resolvedTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_5__/* .useTheme */ .D)();
    const [initialize] = (0,overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_12__/* .useOverlayScrollbars */ .d)({
        defer: true,
        options: {
            scrollbars: {
                clickScroll: true,
                theme: resolvedTheme === 'dark' ? 'os-theme-light' : 'os-theme-dark'
            },
            overflow: {
                y: 'scroll'
            }
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (containerRef.current) {
            initialize(containerRef.current);
        }
    }, [
        initialize
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MarkdownRenderer, {
        ref: (el)=>{
            containerRef.current = el;
            if (typeof ref === 'function') {
                ref(el);
            } else if (ref) {
                ref.current = el;
            }
        },
        ...props
    });
});
const MarkdownRendererWithScroll = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function MarkdownRendererWithScroll(props, ref) {
    const isOverlayScrollbarsEnabled = (0,posthog_js_react__WEBPACK_IMPORTED_MODULE_6__/* .useFeatureFlagEnabled */ .Tp)('overlayScrollbars');
    if (isOverlayScrollbarsEnabled) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MarkdownRendererWithScrollInner, {
            ...props,
            ref: ref
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MarkdownRenderer, {
        ...props,
        ref: ref
    });
});


/***/ }),

/***/ 66348:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"Slider_root__jIs1T","sliderThumb":"Slider_sliderThumb__HEcAl","nj-animate-horizontal-appearance-ltr-enter":"Slider_nj-animate-horizontal-appearance-ltr-enter__goo4z","nj-animate-horizontal-appearance-ltr-enter-active":"Slider_nj-animate-horizontal-appearance-ltr-enter-active__nHuH7","nj-animate-horizontal-appearance-ltr-exit":"Slider_nj-animate-horizontal-appearance-ltr-exit__oi5dB","nj-animate-horizontal-appearance-ltr-exit-active":"Slider_nj-animate-horizontal-appearance-ltr-exit-active__t_yro","nj-animate-left-panel-width-reduce-enter":"Slider_nj-animate-left-panel-width-reduce-enter__CGk3z","nj-animate-left-panel-width-reduce-enter-active":"Slider_nj-animate-left-panel-width-reduce-enter-active__HmwcH","nj-animate-left-panel-width-reduce-exit":"Slider_nj-animate-left-panel-width-reduce-exit__8s03l","nj-animate-left-panel-width-reduce-exit-active":"Slider_nj-animate-left-panel-width-reduce-exit-active__gC_fI","nj-animate-vertical-appearance-appear":"Slider_nj-animate-vertical-appearance-appear__X2QX1","nj-animate-vertical-appearance-appear-active":"Slider_nj-animate-vertical-appearance-appear-active__Jb4ad","nj-animate-vertical-appearance-enter":"Slider_nj-animate-vertical-appearance-enter__8DDYE","nj-animate-vertical-appearance-enter-active":"Slider_nj-animate-vertical-appearance-enter-active__NHj3T","nj-animate-vertical-appearance-exit":"Slider_nj-animate-vertical-appearance-exit__ojTbG","nj-animate-vertical-appearance-exit-active":"Slider_nj-animate-vertical-appearance-exit-active__9bn_C","sliderTrack":"Slider_sliderTrack__TQ_2x","sliderRange":"Slider_sliderRange__fyh9v","infinite-spinner":"Slider_infinite-spinner__d4FMa","fadeIn":"Slider_fadeIn__xJCnW","blinking":"Slider_blinking__KJE3R","movingRight":"Slider_movingRight__NlmU5"};

/***/ }),

/***/ 67324:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"title":"ToolButton_title__WUrOk","caption":"ToolButton_caption__G45U8","nj-animate-horizontal-appearance-ltr-enter":"ToolButton_nj-animate-horizontal-appearance-ltr-enter__eQitr","nj-animate-horizontal-appearance-ltr-enter-active":"ToolButton_nj-animate-horizontal-appearance-ltr-enter-active__S_QwY","nj-animate-horizontal-appearance-ltr-exit":"ToolButton_nj-animate-horizontal-appearance-ltr-exit__8t_RW","nj-animate-horizontal-appearance-ltr-exit-active":"ToolButton_nj-animate-horizontal-appearance-ltr-exit-active__lLqtE","nj-animate-left-panel-width-reduce-enter":"ToolButton_nj-animate-left-panel-width-reduce-enter__nmoU7","nj-animate-left-panel-width-reduce-enter-active":"ToolButton_nj-animate-left-panel-width-reduce-enter-active__qcdLb","nj-animate-left-panel-width-reduce-exit":"ToolButton_nj-animate-left-panel-width-reduce-exit__jr9pO","nj-animate-left-panel-width-reduce-exit-active":"ToolButton_nj-animate-left-panel-width-reduce-exit-active__rYj5u","nj-animate-vertical-appearance-appear":"ToolButton_nj-animate-vertical-appearance-appear__mYEdV","nj-animate-vertical-appearance-appear-active":"ToolButton_nj-animate-vertical-appearance-appear-active__SN8KI","nj-animate-vertical-appearance-enter":"ToolButton_nj-animate-vertical-appearance-enter__PilHs","nj-animate-vertical-appearance-enter-active":"ToolButton_nj-animate-vertical-appearance-enter-active__FCwM4","nj-animate-vertical-appearance-exit":"ToolButton_nj-animate-vertical-appearance-exit__yvWZu","nj-animate-vertical-appearance-exit-active":"ToolButton_nj-animate-vertical-appearance-exit-active__us_mI","iconSpin":"ToolButton_iconSpin__S41OZ","infinite-spinner":"ToolButton_infinite-spinner__CQHnU","fadeIn":"ToolButton_fadeIn__CwlT_","blinking":"ToolButton_blinking__tjAeh","movingRight":"ToolButton_movingRight__Z0vIh"};

/***/ }),

/***/ 67464:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"nj-animate-horizontal-appearance-ltr-enter":"ViewModeToggle_nj-animate-horizontal-appearance-ltr-enter__cqBH5","nj-animate-horizontal-appearance-ltr-enter-active":"ViewModeToggle_nj-animate-horizontal-appearance-ltr-enter-active__IsPlE","nj-animate-horizontal-appearance-ltr-exit":"ViewModeToggle_nj-animate-horizontal-appearance-ltr-exit__wvH0N","nj-animate-horizontal-appearance-ltr-exit-active":"ViewModeToggle_nj-animate-horizontal-appearance-ltr-exit-active__up35_","nj-animate-left-panel-width-reduce-enter":"ViewModeToggle_nj-animate-left-panel-width-reduce-enter__gkFxN","nj-animate-left-panel-width-reduce-enter-active":"ViewModeToggle_nj-animate-left-panel-width-reduce-enter-active__OJ7mo","nj-animate-left-panel-width-reduce-exit":"ViewModeToggle_nj-animate-left-panel-width-reduce-exit__IZRxg","nj-animate-left-panel-width-reduce-exit-active":"ViewModeToggle_nj-animate-left-panel-width-reduce-exit-active__iQrdC","nj-animate-vertical-appearance-appear":"ViewModeToggle_nj-animate-vertical-appearance-appear__wLZcg","nj-animate-vertical-appearance-appear-active":"ViewModeToggle_nj-animate-vertical-appearance-appear-active__M3Ryu","nj-animate-vertical-appearance-enter":"ViewModeToggle_nj-animate-vertical-appearance-enter__lfaBl","nj-animate-vertical-appearance-enter-active":"ViewModeToggle_nj-animate-vertical-appearance-enter-active__Dj61k","nj-animate-vertical-appearance-exit":"ViewModeToggle_nj-animate-vertical-appearance-exit__4_Wmp","nj-animate-vertical-appearance-exit-active":"ViewModeToggle_nj-animate-vertical-appearance-exit-active__9Xomd","root":"ViewModeToggle_root__HuAtX","segment":"ViewModeToggle_segment__EC_kw","infinite-spinner":"ViewModeToggle_infinite-spinner__V1slS","fadeIn":"ViewModeToggle_fadeIn__4bl_H","blinking":"ViewModeToggle_blinking__SZU3a","movingRight":"ViewModeToggle_movingRight__PGisx"};

/***/ }),

/***/ 68291:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"loader":"SyncfusionPdfRenderer_loader__9h_f1","nj-animate-horizontal-appearance-ltr-enter":"SyncfusionPdfRenderer_nj-animate-horizontal-appearance-ltr-enter__82huo","nj-animate-horizontal-appearance-ltr-enter-active":"SyncfusionPdfRenderer_nj-animate-horizontal-appearance-ltr-enter-active__D4cWd","nj-animate-horizontal-appearance-ltr-exit":"SyncfusionPdfRenderer_nj-animate-horizontal-appearance-ltr-exit__pxayw","nj-animate-horizontal-appearance-ltr-exit-active":"SyncfusionPdfRenderer_nj-animate-horizontal-appearance-ltr-exit-active__z0lXh","nj-animate-left-panel-width-reduce-enter":"SyncfusionPdfRenderer_nj-animate-left-panel-width-reduce-enter__SpOQc","nj-animate-left-panel-width-reduce-enter-active":"SyncfusionPdfRenderer_nj-animate-left-panel-width-reduce-enter-active__VYxQf","nj-animate-left-panel-width-reduce-exit":"SyncfusionPdfRenderer_nj-animate-left-panel-width-reduce-exit__G_x4E","nj-animate-left-panel-width-reduce-exit-active":"SyncfusionPdfRenderer_nj-animate-left-panel-width-reduce-exit-active__4VXA_","nj-animate-vertical-appearance-appear":"SyncfusionPdfRenderer_nj-animate-vertical-appearance-appear__wKqV9","nj-animate-vertical-appearance-appear-active":"SyncfusionPdfRenderer_nj-animate-vertical-appearance-appear-active__os7GB","nj-animate-vertical-appearance-enter":"SyncfusionPdfRenderer_nj-animate-vertical-appearance-enter__VSeQM","nj-animate-vertical-appearance-enter-active":"SyncfusionPdfRenderer_nj-animate-vertical-appearance-enter-active__KitJC","nj-animate-vertical-appearance-exit":"SyncfusionPdfRenderer_nj-animate-vertical-appearance-exit__N7ZKL","nj-animate-vertical-appearance-exit-active":"SyncfusionPdfRenderer_nj-animate-vertical-appearance-exit-active__wP_uq","root":"SyncfusionPdfRenderer_root__3SNf9","pdfViewer":"SyncfusionPdfRenderer_pdfViewer__nerxb","isHidden":"SyncfusionPdfRenderer_isHidden__6BqwM","infinite-spinner":"SyncfusionPdfRenderer_infinite-spinner__rKFYz","fadeIn":"SyncfusionPdfRenderer_fadeIn__pJYU_","blinking":"SyncfusionPdfRenderer_blinking__sn2vT","movingRight":"SyncfusionPdfRenderer_movingRight__bYEvY"};

/***/ }),

/***/ 68981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ deployWebsiteUsingAgent)
/* harmony export */ });
/* unused harmony export DEPLOY_WEBSITE_PROMPT */
/* harmony import */ var _constants_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66872);

/**
 * Common deploy functionality for HTML files
 */ const DEPLOY_WEBSITE_PROMPT = 'Deploy the website to production';
/**
 * Handler for deploy button clicks
 * @param onSubmitMessage - Function to submit a message to the chat
 */ const deployWebsiteUsingAgent = (onSubmitMessage)=>{
    onSubmitMessage(DEPLOY_WEBSITE_PROMPT, {
        model_name: _constants_models__WEBPACK_IMPORTED_MODULE_0__/* .SONNET_4_MODEL_ID */ .jx
    });
};


/***/ }),

/***/ 70117:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"fileManagerPanel":"FileManager_fileManagerPanel__IbB_M","nj-animate-horizontal-appearance-ltr-enter":"FileManager_nj-animate-horizontal-appearance-ltr-enter__UQBK3","nj-animate-horizontal-appearance-ltr-enter-active":"FileManager_nj-animate-horizontal-appearance-ltr-enter-active__bPsNz","nj-animate-horizontal-appearance-ltr-exit":"FileManager_nj-animate-horizontal-appearance-ltr-exit__GpbZ_","nj-animate-horizontal-appearance-ltr-exit-active":"FileManager_nj-animate-horizontal-appearance-ltr-exit-active___4R78","nj-animate-left-panel-width-reduce-enter":"FileManager_nj-animate-left-panel-width-reduce-enter__KzWYg","nj-animate-left-panel-width-reduce-enter-active":"FileManager_nj-animate-left-panel-width-reduce-enter-active__8ZQdJ","nj-animate-left-panel-width-reduce-exit":"FileManager_nj-animate-left-panel-width-reduce-exit__DNTey","nj-animate-left-panel-width-reduce-exit-active":"FileManager_nj-animate-left-panel-width-reduce-exit-active__U93P0","nj-animate-vertical-appearance-appear":"FileManager_nj-animate-vertical-appearance-appear__fBk0G","nj-animate-vertical-appearance-appear-active":"FileManager_nj-animate-vertical-appearance-appear-active__zF_Ia","nj-animate-vertical-appearance-enter":"FileManager_nj-animate-vertical-appearance-enter__6iZuU","nj-animate-vertical-appearance-enter-active":"FileManager_nj-animate-vertical-appearance-enter-active__v6E0w","nj-animate-vertical-appearance-exit":"FileManager_nj-animate-vertical-appearance-exit__mgfSB","nj-animate-vertical-appearance-exit-active":"FileManager_nj-animate-vertical-appearance-exit-active__O_aJo","actionsColumn":"FileManager_actionsColumn__F9RTF","fileManagerOverride":"FileManager_fileManagerOverride__9rGz9","flatdata_breadcrumbbar":"FileManager_flatdata_breadcrumbbar__aqhJR","rowActions":"FileManager_rowActions__Y2QdP","infinite-spinner":"FileManager_infinite-spinner__Bsq9m","fadeIn":"FileManager_fadeIn__ZZFTW","blinking":"FileManager_blinking__QGHJf","movingRight":"FileManager_movingRight__X3UGy"};

/***/ }),

/***/ 70215:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"sliderWrapper":"ToolCallStepsTrack_sliderWrapper__ESY9i","controlButtons":"ToolCallStepsTrack_controlButtons__45sIj","totalCount":"ToolCallStepsTrack_totalCount__nGBZp","innerMobileContent":"ToolCallStepsTrack_innerMobileContent__9DZ2T","nj-animate-horizontal-appearance-ltr-enter":"ToolCallStepsTrack_nj-animate-horizontal-appearance-ltr-enter__17_sn","nj-animate-horizontal-appearance-ltr-enter-active":"ToolCallStepsTrack_nj-animate-horizontal-appearance-ltr-enter-active__YSnFr","nj-animate-horizontal-appearance-ltr-exit":"ToolCallStepsTrack_nj-animate-horizontal-appearance-ltr-exit__wjyO0","nj-animate-horizontal-appearance-ltr-exit-active":"ToolCallStepsTrack_nj-animate-horizontal-appearance-ltr-exit-active__mhmxi","nj-animate-left-panel-width-reduce-enter":"ToolCallStepsTrack_nj-animate-left-panel-width-reduce-enter__mqkOI","nj-animate-left-panel-width-reduce-enter-active":"ToolCallStepsTrack_nj-animate-left-panel-width-reduce-enter-active___kHVB","nj-animate-left-panel-width-reduce-exit":"ToolCallStepsTrack_nj-animate-left-panel-width-reduce-exit__PMeFh","nj-animate-left-panel-width-reduce-exit-active":"ToolCallStepsTrack_nj-animate-left-panel-width-reduce-exit-active__peyvn","nj-animate-vertical-appearance-appear":"ToolCallStepsTrack_nj-animate-vertical-appearance-appear__5vK4B","nj-animate-vertical-appearance-appear-active":"ToolCallStepsTrack_nj-animate-vertical-appearance-appear-active__pMA0l","nj-animate-vertical-appearance-enter":"ToolCallStepsTrack_nj-animate-vertical-appearance-enter__vuTCN","nj-animate-vertical-appearance-enter-active":"ToolCallStepsTrack_nj-animate-vertical-appearance-enter-active__sBKNd","nj-animate-vertical-appearance-exit":"ToolCallStepsTrack_nj-animate-vertical-appearance-exit__GE8sx","nj-animate-vertical-appearance-exit-active":"ToolCallStepsTrack_nj-animate-vertical-appearance-exit-active__CY0Qy","mobileWrapper":"ToolCallStepsTrack_mobileWrapper__P4yQT","infinite-spinner":"ToolCallStepsTrack_infinite-spinner__20U4y","fadeIn":"ToolCallStepsTrack_fadeIn__mzsMp","blinking":"ToolCallStepsTrack_blinking__WWVHT","movingRight":"ToolCallStepsTrack_movingRight__m1FG8"};

/***/ }),

/***/ 71825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ useRNWebViewDownloadEnabled)
/* harmony export */ });
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92253);
/* __next_internal_client_entry_do_not_use__ useRNWebViewDownloadEnabled auto */ 
const useRNWebViewDownloadEnabled = function() {
    let includeMobile = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    var _window_ReactNativeWebView, _window, _window1;
    const isInReactNativeWebView = !!((_window = window) === null || _window === void 0 ? void 0 : (_window_ReactNativeWebView = _window.ReactNativeWebView) === null || _window_ReactNativeWebView === void 0 ? void 0 : _window_ReactNativeWebView.postMessage);
    const isRNWebViewDownloadEnabled = !!((_window1 = window) === null || _window1 === void 0 ? void 0 : _window1.ReactNativeWebViewDownloadEnabled);
    if (!react_device_detect__WEBPACK_IMPORTED_MODULE_0__/* .isMobile */ .Fr) return true;
    if (!isInReactNativeWebView && includeMobile && react_device_detect__WEBPACK_IMPORTED_MODULE_0__/* .isMobile */ .Fr) return true;
    return isRNWebViewDownloadEnabled;
};


/***/ }),

/***/ 72525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ ToolCallSidePanel)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/SpinnerGap.es.js + 1 modules
var SpinnerGap_es = __webpack_require__(91679);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/terminal.js
var terminal = __webpack_require__(50803);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-dashed.js
var circle_dashed = __webpack_require__(36835);
// EXTERNAL MODULE: ./src/components/thread/tool-views/utils.ts
var utils = __webpack_require__(16601);
// EXTERNAL MODULE: ./src/components/thread/utils.ts
var thread_utils = __webpack_require__(49595);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/CheckCircle.es.js
var CheckCircle_es = __webpack_require__(80399);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Warning.es.js
var Warning_es = __webpack_require__(36051);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/CircleDashed.es.js
var CircleDashed_es = __webpack_require__(3478);
// EXTERNAL MODULE: ./src/components/thread/tool-views/components/ToolViewFooterStatus/ToolViewFooterStatus.module.scss
var ToolViewFooterStatus_module = __webpack_require__(23435);
var ToolViewFooterStatus_module_default = /*#__PURE__*/__webpack_require__.n(ToolViewFooterStatus_module);
// EXTERNAL MODULE: ./node_modules/react-device-detect/dist/lib.js
var lib = __webpack_require__(92253);
;// ./src/components/thread/tool-views/components/ToolViewFooterStatus/ToolViewFooterStatus.tsx
/* __next_internal_client_entry_do_not_use__ ToolViewFooterStatus auto */ 



const ToolViewFooterStatus = (param)=>{
    let { isStreaming, isSuccess, operation, toolTitle, exitCode = null, successMessage, failureMessage, loadingMessage } = param;
    const defaultSuccess = ()=>{
        if (successMessage) {
            return successMessage;
        }
        if (toolTitle) {
            return "".concat(toolTitle, " completed successfully");
        }
        if (operation) {
            return "".concat(operation, " completed successfully");
        }
        if (exitCode !== null) {
            return "Command completed successfully (exit code: ".concat(exitCode, ")");
        }
        return 'Completed successfully';
    };
    const defaultFailure = ()=>{
        if (failureMessage) {
            return failureMessage;
        }
        if (toolTitle) {
            return "".concat(toolTitle, " operation failed");
        }
        if (operation) {
            return "".concat(operation, " failed");
        }
        if (exitCode !== null) {
            return "Command failed with exit code ".concat(exitCode);
        }
        return 'Execution failed';
    };
    const defaultLoading = ()=>{
        if (loadingMessage) {
            return loadingMessage;
        }
        if (toolTitle) {
            return "Executing ".concat(toolTitle.toLowerCase(), "...");
        }
        if (operation) {
            return "Executing ".concat(operation.toLowerCase(), "...");
        }
        return 'Processing...';
    };
    if (lib/* isMobile */.Fr) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (ToolViewFooterStatus_module_default()).root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (ToolViewFooterStatus_module_default()).container,
            children: [
                !isStreaming && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (ToolViewFooterStatus_module_default()).status,
                    children: [
                        isSuccess ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircle_es/* CheckCircleIcon */.C, {
                            className: (ToolViewFooterStatus_module_default()).successIcon,
                            weight: "fill"
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Warning_es/* WarningIcon */.i, {
                            className: (ToolViewFooterStatus_module_default()).errorIcon,
                            weight: "fill"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: isSuccess ? defaultSuccess() : defaultFailure()
                        })
                    ]
                }),
                isStreaming && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (ToolViewFooterStatus_module_default()).status,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CircleDashed_es/* CircleDashedIcon */.L, {
                            className: (ToolViewFooterStatus_module_default()).loadingIcon
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: defaultLoading()
                        })
                    ]
                })
            ]
        })
    });
};

;// ./src/components/thread/tool-views/components/ToolViewFooterStatus/index.ts


;// ./src/components/thread/tool-views/CommandToolView.tsx






function CommandToolView(param) {
    let { assistantContent, toolContent, isSuccess = true, isStreaming = false } = param;
    var _rawCommand_replace_replace_replace // Remove actual newlines
    , _rawCommand_replace_replace // Remove escaped newlines
    , _rawCommand_replace // Remove prompt prefix
    ;
    // Extract command with improved XML parsing
    const rawCommand = react.useMemo(()=>{
        if (!assistantContent) return null;
        try {
            // Try to parse JSON content first
            const parsed = (0,thread_utils/* safeJsonParse */.jD)(assistantContent, null);
            if (parsed === null || parsed === void 0 ? void 0 : parsed.content) {
                // Look for execute-command tag
                const commandMatch = parsed.content.match(/<execute-command[^>]*>([\s\S]*?)<\/execute-command>/);
                if (commandMatch) {
                    return commandMatch[1].trim();
                }
            }
        } catch (e) {
            // If JSON parsing fails, try direct XML extraction
            const commandMatch = assistantContent.match(/<execute-command[^>]*>([\s\S]*?)<\/execute-command>/);
            if (commandMatch) {
                return commandMatch[1].trim();
            }
        }
        return null;
    }, [
        assistantContent
    ]);
    // Clean the command by removing any leading/trailing whitespace and newlines
    const command = rawCommand === null || rawCommand === void 0 ? void 0 : (_rawCommand_replace = rawCommand.replace(/^ninja@computer:~\$\s*/g, '')) === null || _rawCommand_replace === void 0 ? void 0 : (_rawCommand_replace_replace = _rawCommand_replace.replace(/\\n/g, '')) === null || _rawCommand_replace_replace === void 0 ? void 0 : (_rawCommand_replace_replace_replace = _rawCommand_replace_replace.replace(/\n/g, '')) === null || _rawCommand_replace_replace_replace === void 0 ? void 0 : _rawCommand_replace_replace_replace.trim(); // Clean up any remaining whitespace
    // Extract and clean the output with improved parsing
    const output = react.useMemo(()=>{
        if (!toolContent) return null;
        try {
            // Try to parse JSON content first
            const parsed = (0,thread_utils/* safeJsonParse */.jD)(toolContent, null);
            if (parsed === null || parsed === void 0 ? void 0 : parsed.content) {
                const outputInOutputMatch = parsed.content.match(/ToolResult\([^)]*?output='(?:\{[\s\S]*?"output"\s*:\s*")([\s\S]*?)"[\s\S]*?\}'[^)]*?\)/);
                if (outputInOutputMatch) {
                    return outputInOutputMatch[1].replace(/\\\\n/g, '\n').replace(/\\"/g, '"');
                }
                const outputToolResultMatch = parsed.content.match(/ToolResult\([^)]*?output="([\s\S]*?)"[^)]*?\)/);
                if (outputToolResultMatch) {
                    return outputToolResultMatch[1];
                }
                // Look for tool_result tag
                const toolResultMatch = parsed.content.match(/<tool_result>\s*<execute-command>([\s\S]*?)<\/execute-command>\s*<\/tool_result>/);
                if (toolResultMatch) {
                    const inner = toolResultMatch[1].trim();
                    const innerOutputMatch = inner.match(/ToolResult\(.*?output='([\s\S]*?)'.*?\)/);
                    if (innerOutputMatch) {
                        return innerOutputMatch[1].replace(/\\n/g, '\n').replace(/\\"/g, '"');
                    }
                    return inner;
                }
                // Look for output field in a ToolResult pattern
                const outputMatch = parsed.content.match(/ToolResult\(.*?output='([\s\S]*?)'.*?\)/);
                if (outputMatch) {
                    return outputMatch[1].replace(/\\n/g, '\n').replace(/\\"/g, '"');
                }
                // Try to parse as direct JSON
                try {
                    const outputJson = (0,thread_utils/* safeJsonParse */.jD)(parsed.content, null);
                    if (outputJson === null || outputJson === void 0 ? void 0 : outputJson.output) {
                        return outputJson.output;
                    }
                } catch (e) {
                    // If JSON parsing fails, use the content as-is
                    return parsed.content;
                }
            }
        } catch (e) {
            // If JSON parsing fails, try direct XML extraction
            const toolResultMatch = toolContent.match(/<tool_result>\s*<execute-command>([\s\S]*?)<\/execute-command>\s*<\/tool_result>/);
            if (toolResultMatch) {
                const inner = toolResultMatch[1].trim();
                const outputMatch = inner.match(/ToolResult\(.*?output='([\s\S]*?)'.*?\)/);
                if (outputMatch) {
                    return outputMatch[1].replace(/\\n/g, '\n').replace(/\\"/g, '"');
                }
                return inner;
            }
            const outputMatch = toolContent.match(/ToolResult\(.*?output='([\s\S]*?)'.*?\)/);
            if (outputMatch) {
                return outputMatch[1].replace(/\\n/g, '\n').replace(/\\"/g, '"');
            }
        }
        return toolContent;
    }, [
        toolContent
    ]);
    const cleanOutput = (0,utils/* unescapeString */.wh)(output || '');
    const exitCode = (0,utils/* extractExitCode */.Fl)(toolContent);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex-1 overflow-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "overflow-hidden h-full flex flex-col",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex items-center p-2 justify-between border-y bg-white dark:bg-zinc-950 py-3 px-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(terminal/* default */.A, {
                                        className: "h-4 w-4 mr-2 text-zinc-600 dark:text-zinc-400"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-xs font-medium text-zinc-700 dark:text-zinc-300",
                                        children: "Terminal"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "terminal-container flex-1 overflow-auto bg-black text-zinc-300 font-mono",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "p-3 text-xs",
                                children: [
                                    command && cleanOutput && !isStreaming && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-start",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "text-emerald-400 shrink-0 mr-2",
                                                        children: "ninja@computer:~$"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "text-zinc-300",
                                                        children: command
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "break-words text-zinc-400 pl-0 whitespace-pre-wrap",
                                                children: cleanOutput
                                            }),
                                            isSuccess && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "text-emerald-400 mt-1",
                                                children: "ninja@computer:~$ _"
                                            })
                                        ]
                                    }),
                                    command && !cleanOutput && !isStreaming && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-start",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "text-emerald-400 shrink-0 mr-2",
                                                        children: "ninja@computer:~$"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "text-zinc-300",
                                                        children: command
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "flex items-center h-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "w-2 h-4 bg-zinc-500 animate-pulse"
                                                })
                                            })
                                        ]
                                    }),
                                    !command && !cleanOutput && !isStreaming && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-start",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-emerald-400 shrink-0 mr-2",
                                                children: "ninja@computer:~$"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "w-2 h-4 bg-zinc-500 animate-pulse"
                                            })
                                        ]
                                    }),
                                    isStreaming && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-start",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "text-emerald-400 shrink-0 mr-2",
                                                        children: "ninja@computer:~$"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "text-zinc-300",
                                                        children: command || 'running command...'
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-2 text-zinc-400",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_dashed/* default */.A, {
                                                        className: "h-3 w-3 animate-spin text-blue-400"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "Command execution in progress..."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolViewFooterStatus, {
                isStreaming: isStreaming,
                isSuccess: isSuccess,
                exitCode: exitCode,
                operation: "Command",
                loadingMessage: "Executing command..."
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/diff/lib/index.mjs
var diff_lib = __webpack_require__(87895);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/file-diff.js
var file_diff = __webpack_require__(35619);
// EXTERNAL MODULE: ./src/lib/utils/threadUtils.ts + 1 modules
var threadUtils = __webpack_require__(99699);
// EXTERNAL MODULE: ./src/components/ui/markdown.tsx + 1 modules
var markdown = __webpack_require__(7811);
// EXTERNAL MODULE: ./src/lib/utils.ts
var lib_utils = __webpack_require__(64269);
;// ./src/components/thread/tool-views/GenericToolView.tsx









function GenericToolView(param) {
    let { name = 'unknown', assistantContent, toolContent, isSuccess = true, isStreaming = false, assistantTimestamp, toolTimestamp } = param;
    ;
    const toolTitle = (0,utils/* getToolTitle */.Bs)(name);
    const Icon = (0,threadUtils/* getToolIcon */.S8)(name);
    // Format content for display
    const formatContent = (content)=>{
        if (!content) {
            return null;
        }
        try {
            const parsed = (0,thread_utils/* safeJsonParse */.jD)(content, '');
            const prettyJson = JSON.stringify(parsed, null, 2);
            return "```json\n".concat(prettyJson, "\n```");
        } catch (e) {
            return content;
        }
    };
    // Format the contents
    const formattedAssistantContent = react.useMemo(()=>formatContent(assistantContent), [
        assistantContent
    ]);
    const formattedToolContent = react.useMemo(()=>formatContent(toolContent), [
        toolContent
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col h-full border-t border-zinc-200 dark:border-zinc-800",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex-1 overflow-auto px-6 py-4 bg-white dark:bg-zinc-900",
                children: [
                    assistantContent && !isStreaming && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "text-xs font-medium text-zinc-500 dark:text-zinc-400",
                                        children: "Input"
                                    }),
                                    assistantTimestamp && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "text-xs text-zinc-500 dark:text-zinc-400",
                                        children: (0,utils/* formatTimestamp */.Ey)(assistantTimestamp)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(markdown/* Markdown */.o, {
                                    className: "text-xs text-zinc-800 dark:text-zinc-300",
                                    children: formattedAssistantContent
                                })
                            })
                        ]
                    }),
                    toolContent && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-1.5 mt-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "text-xs font-medium text-zinc-500 dark:text-zinc-400",
                                        children: isStreaming ? 'Processing' : 'Output'
                                    }),
                                    toolTimestamp && !isStreaming && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "text-xs text-zinc-500 dark:text-zinc-400",
                                        children: (0,utils/* formatTimestamp */.Ey)(toolTimestamp)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (0,lib_utils.cn)('rounded-md border p-3', isStreaming ? 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/10' : isSuccess ? 'border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900' : 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/10'),
                                children: isStreaming ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-2 text-xs font-medium text-blue-700 dark:text-blue-400",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_dashed/* default */.A, {
                                            className: "h-3 w-3 animate-spin"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            children: [
                                                "Executing ",
                                                toolTitle.toLowerCase(),
                                                "..."
                                            ]
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(markdown/* Markdown */.o, {
                                    className: "text-xs text-zinc-800 dark:text-zinc-300",
                                    children: formattedToolContent
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolViewFooterStatus, {
                isStreaming: isStreaming,
                isSuccess: isSuccess,
                successMessage: "Completed successfully",
                failureMessage: "Execution failed",
                loadingMessage: "Processing..."
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/utils/index.ts + 9 modules
var src_utils = __webpack_require__(19482);
;// ./src/components/thread/tool-views/StrReplaceToolView.tsx










function StrReplaceToolView(param) {
    let { name = 'str-replace', assistantContent, toolContent, assistantTimestamp, toolTimestamp, isSuccess = true, isStreaming = false } = param;
    const filePath = (0,src_utils/* hideMdExtension */.di)((0,utils/* extractFilePath */.pn)(assistantContent));
    const { oldStr, newStr } = (0,utils/* extractStrReplaceContent */.yq)(assistantContent);
    if (!oldStr || !newStr) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(GenericToolView, {
            name: name,
            assistantContent: assistantContent,
            toolContent: toolContent,
            assistantTimestamp: assistantTimestamp,
            toolTimestamp: toolTimestamp,
            isSuccess: isSuccess,
            isStreaming: isStreaming
        });
    }
    const generateInlineDiff = (oldStr, newStr)=>{
        const lineDiff = (0,diff_lib/* diffLines */.Pp)(oldStr, newStr);
        const result = [];
        for(let i = 0; i < lineDiff.length; i++){
            var _lineDiff_;
            const part = lineDiff[i];
            if (part.added && i > 0 && ((_lineDiff_ = lineDiff[i - 1]) === null || _lineDiff_ === void 0 ? void 0 : _lineDiff_.removed)) {
                const removed = lineDiff[i - 1].value;
                const added = part.value;
                const charDiff = (0,diff_lib/* diffChars */.JJ)(removed, added);
                result.pop();
                result.push({
                    type: 'removed',
                    parts: charDiff.filter((d)=>d.removed || !d.added && !d.removed).map((d)=>({
                            text: d.value,
                            highlight: !!d.removed
                        }))
                });
                result.push({
                    type: 'added',
                    parts: charDiff.filter((d)=>d.added || !d.added && !d.removed).map((d)=>({
                            text: d.value,
                            highlight: !!d.added
                        }))
                });
            } else if (!part.added && !part.removed) {
                result.push({
                    type: 'unchanged',
                    parts: [
                        {
                            text: part.value
                        }
                    ]
                });
            } else {
                result.push({
                    type: part.added ? 'added' : 'removed',
                    parts: [
                        {
                            text: part.value
                        }
                    ]
                });
            }
        }
        return result;
    };
    const decodedOldStr = (0,thread_utils/* safeJsonParse */.jD)('"'.concat(oldStr, '"'), '');
    const decodedNewStr = (0,thread_utils/* safeJsonParse */.jD)('"'.concat(newStr, '"'), '');
    const oldClean = (0,src_utils/* normalizeNewlines */.jN)(decodedOldStr);
    const newClean = (0,src_utils/* normalizeNewlines */.jN)(decodedNewStr);
    const diffParts = generateInlineDiff(oldClean, newClean);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex-1 overflow-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "overflow-hidden h-full flex flex-col",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex items-center p-2 justify-between border-y bg-white dark:bg-zinc-950 py-3 px-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(file_diff/* default */.A, {
                                        className: "h-4 w-4 mr-2 text-zinc-600 dark:text-zinc-400"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-xs font-medium text-zinc-700 dark:text-zinc-300",
                                        children: "String Replacement"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "px-6 py-2 border-b border-zinc-200 dark:border-zinc-800 flex items-center bg-white dark:bg-zinc-950",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                className: "text-xs font-mono text-zinc-700 dark:text-zinc-300",
                                children: filePath || 'Unknown file'
                            })
                        }),
                        isStreaming ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-1 bg-white dark:bg-zinc-950 flex items-center justify-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-center p-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_dashed/* default */.A, {
                                        className: "h-8 w-8 mx-auto mb-3 text-blue-500 animate-spin"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-sm font-medium text-zinc-700 dark:text-zinc-300",
                                        children: "Processing string replacement..."
                                    }),
                                    filePath && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-xs mt-1 text-zinc-500 dark:text-zinc-400 font-mono",
                                        children: filePath
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "text-xs font-mono overflow-auto",
                            children: diffParts.filter((line)=>line.type === 'added' || line.type === 'unchanged').map((line, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: (0,lib_utils.cn)('flex whitespace-pre-wrap', line.type === 'added' ? 'bg-green-50 dark:bg-green-900/20' : 'bg-white dark:bg-zinc-950'),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "px-3 py-1 flex-1",
                                        children: line.parts.map((part, j)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: (0,lib_utils.cn)(part.highlight && (line.type === 'added' ? 'bg-green-200 dark:bg-green-700/40' : '')),
                                                children: part.text
                                            }, j))
                                    })
                                }, i))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolViewFooterStatus, {
                isStreaming: isStreaming,
                isSuccess: isSuccess,
                successMessage: "Replacement applied successfully",
                failureMessage: "Replacement failed",
                loadingMessage: "Processing string replacement..."
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/folder-plus.js
var folder_plus = __webpack_require__(22198);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/replace.js
var replace = __webpack_require__(7073);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/file-x.js
var file_x = __webpack_require__(63240);
// EXTERNAL MODULE: ./node_modules/sonner/dist/index.mjs
var dist = __webpack_require__(18720);
// EXTERNAL MODULE: ./node_modules/@datadog/browser-logs/esm/entries/main.js + 109 modules
var main = __webpack_require__(73262);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
;// ./src/hooks/useWordStreaming.ts
/* __next_internal_client_entry_do_not_use__ useWordStreaming auto */ 
const defaultTokenize = (text)=>Array.from(text !== null && text !== void 0 ? text : '');
const useWordStreaming = function(fullText, tokensPerSecond) {
    let isStreaming = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, tokenizeFn = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : defaultTokenize;
    const [visibleCount, setVisibleCount] = (0,react.useState)(0);
    const tokensRef = (0,react.useRef)([]);
    const rafIdRef = (0,react.useRef)(null);
    const lastTsRef = (0,react.useRef)(null);
    const accRef = (0,react.useRef)(0);
    const stepSeconds = 1 / Math.max(1, tokensPerSecond);
    const loopRef = (0,react.useRef)();
    loopRef.current = (ts)=>{
        const total = tokensRef.current.length;
        const shouldAnimate = total > 0 && (isStreaming || visibleCount < total);
        if (!shouldAnimate) {
            rafIdRef.current = null;
            lastTsRef.current = null;
            accRef.current = 0;
            return;
        }
        if (lastTsRef.current == null) {
            lastTsRef.current = ts;
            rafIdRef.current = window.requestAnimationFrame(loopRef.current);
            return;
        }
        const dt = Math.max(0, (ts - lastTsRef.current) / 1000);
        lastTsRef.current = ts;
        accRef.current += dt;
        if (accRef.current >= stepSeconds) {
            const steps = Math.max(1, Math.floor(accRef.current / stepSeconds));
            accRef.current -= steps * stepSeconds;
            setVisibleCount((prev)=>Math.min(prev + steps, tokensRef.current.length));
        }
        rafIdRef.current = window.requestAnimationFrame(loopRef.current);
    };
    const ensureLoopRunning = ()=>{
        if (rafIdRef.current != null || !loopRef.current) return;
        rafIdRef.current = window.requestAnimationFrame(loopRef.current);
    };
    (0,react.useEffect)(()=>{
        const next = tokenizeFn(fullText || '');
        tokensRef.current = next;
        setVisibleCount((v)=>Math.min(v, next.length));
        if (next.length === 0) {
            setVisibleCount(0);
            return;
        }
        ensureLoopRunning();
    }, [
        fullText,
        isStreaming,
        tokenizeFn
    ]);
    (0,react.useEffect)(()=>{
        ensureLoopRunning();
        return ()=>{
            if (rafIdRef.current != null) {
                cancelAnimationFrame(rafIdRef.current);
                rafIdRef.current = null;
            }
            lastTsRef.current = null;
            accRef.current = 0;
        };
    }, [
        visibleCount,
        fullText,
        tokenizeFn,
        isStreaming,
        stepSeconds
    ]);
    const visibleText = (0,react.useMemo)(()=>tokensRef.current.slice(0, visibleCount).join(''), [
        visibleCount,
        fullText,
        tokenizeFn
    ]);
    return {
        visibleText
    };
};

// EXTERNAL MODULE: ./src/components/file-renderers/markdown-renderer.tsx
var markdown_renderer = __webpack_require__(65340);
// EXTERNAL MODULE: ./src/hooks/index.ts + 39 modules
var hooks = __webpack_require__(71203);
// EXTERNAL MODULE: ./src/components/file-renderers/SyncfusionExcelRenderer/index.ts + 2 modules
var SyncfusionExcelRenderer = __webpack_require__(87736);
// EXTERNAL MODULE: ./node_modules/react-papaparse/dist/react-papaparse.es.js
var react_papaparse_es = __webpack_require__(60882);
// EXTERNAL MODULE: ./src/components/ui/scroll-area.tsx
var scroll_area = __webpack_require__(17037);
;// ./src/components/ui/table.tsx
/* __next_internal_client_entry_do_not_use__ Table,TableHeader,TableBody,TableFooter,TableHead,TableRow,TableCell,TableCaption auto */ 


function Table(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("table", {
            "data-slot": "table",
            className: (0,lib_utils.cn)('w-full caption-bottom text-sm', className),
            ...props
        })
    });
}
function TableHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
        "data-slot": "table-header",
        className: (0,lib_utils.cn)('[&_tr]:border-b', className),
        ...props
    });
}
function TableBody(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
        "data-slot": "table-body",
        className: (0,lib_utils.cn)('[&_tr:last-child]:border-0', className),
        ...props
    });
}
function TableFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx("tfoot", {
        "data-slot": "table-footer",
        className: cn('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', className),
        ...props
    });
}
function TableRow(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("tr", {
        "data-slot": "table-row",
        className: (0,lib_utils.cn)('hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors', className),
        ...props
    });
}
function TableHead(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
        "data-slot": "table-head",
        className: (0,lib_utils.cn)('text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    });
}
function TableCell(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
        "data-slot": "table-cell",
        className: (0,lib_utils.cn)('p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    });
}
function TableCaption(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx("caption", {
        "data-slot": "table-caption",
        className: cn('text-muted-foreground mt-4 text-sm', className),
        ...props
    });
}


// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(65142);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(3998);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.js
var search = __webpack_require__(86651);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(90368);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(27937);
;// ./src/components/file-renderers/csv-renderer.tsx
/* __next_internal_client_entry_do_not_use__ CsvRenderer auto */ 









function CsvRenderer(param) {
    let { content, className } = param;
    const [searchTerm, setSearchTerm] = (0,react.useState)('');
    const [currentPage, setCurrentPage] = (0,react.useState)(1);
    const rowsPerPage = 15;
    // Parse CSV data
    const parsedData = (0,react.useMemo)(()=>{
        if (!content) return {
            data: [],
            headers: []
        };
        try {
            let headers = [];
            let data = [];
            (0,react_papaparse_es/* readString */.E3)(content, {
                header: true,
                skipEmptyLines: true,
                complete: (results)=>{
                    if (results.errors && results.errors.length > 0) {
                        main/* datadogLogs */.yf.logger.error('CSV parsing errors:', {
                            resultErrors: results.errors
                        });
                    }
                    headers = results.meta.fields || [];
                    data = results.data || [];
                },
                error: (error)=>{
                    main/* datadogLogs */.yf.logger.error('CSV parsing error:', {}, error);
                }
            });
            return {
                data,
                headers
            };
        } catch (error) {
            main/* datadogLogs */.yf.logger.error('Failed to parse CSV:', {}, error);
            return {
                data: [],
                headers: []
            };
        }
    }, [
        content
    ]);
    // Filter data based on search term
    const filteredData = (0,react.useMemo)(()=>{
        if (!searchTerm.trim()) return parsedData.data;
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return parsedData.data.filter((row)=>{
            return Object.values(row).some((value)=>{
                if (value === null || value === undefined) return false;
                return String(value).toLowerCase().includes(lowerCaseSearchTerm);
            });
        });
    }, [
        parsedData.data,
        searchTerm
    ]);
    // Paginate data
    const paginatedData = (0,react.useMemo)(()=>{
        const startIndex = (currentPage - 1) * rowsPerPage;
        return filteredData.slice(startIndex, startIndex + rowsPerPage);
    }, [
        filteredData,
        currentPage,
        rowsPerPage
    ]);
    // Calculate total pages
    const totalPages = Math.max(1, Math.ceil(filteredData.length / rowsPerPage));
    // Reset to first page when search changes
    (0,react.useEffect)(()=>{
        setCurrentPage(1);
    }, [
        searchTerm
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,lib_utils.cn)('flex flex-col h-full w-full', className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between p-4 border-b",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative w-full max-w-sm",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(search/* default */.A, {
                                className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* Input */.p, {
                                type: "text",
                                placeholder: "Search...",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value),
                                className: "pl-9"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-2 ml-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                variant: "outline",
                                size: "icon",
                                onClick: ()=>setCurrentPage(Math.max(1, currentPage - 1)),
                                disabled: currentPage === 1,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_left/* default */.A, {
                                    className: "h-4 w-4"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: "text-sm text-muted-foreground min-w-[100px] text-center",
                                children: [
                                    "Page ",
                                    currentPage,
                                    " of ",
                                    totalPages
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                variant: "outline",
                                size: "icon",
                                onClick: ()=>setCurrentPage(Math.min(totalPages, currentPage + 1)),
                                disabled: currentPage === totalPages,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_right/* default */.A, {
                                    className: "h-4 w-4"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(scroll_area/* ScrollArea */.F, {
                className: "flex-1 w-full relative",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "min-w-full",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHeader, {
                                className: "sticky top-0 bg-background z-10",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow, {
                                    children: parsedData.headers.map((header, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead, {
                                            className: "whitespace-nowrap",
                                            children: header
                                        }, index))
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody, {
                                children: paginatedData.length > 0 ? paginatedData.map((row, rowIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow, {
                                        children: parsedData.headers.map((header, cellIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell, {
                                                className: cellIndex === 0 ? 'font-medium' : '',
                                                children: row[header] || ''
                                            }, cellIndex))
                                    }, rowIndex)) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell, {
                                        colSpan: parsedData.headers.length || 1,
                                        className: "h-24 text-center",
                                        children: searchTerm ? 'No results found.' : 'No data available.'
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/ui/code-block.tsx
var code_block = __webpack_require__(13993);
// EXTERNAL MODULE: ./src/lib/api.ts
var api = __webpack_require__(90960);
// EXTERNAL MODULE: ./src/lib/utils/deploy-utils.ts
var deploy_utils = __webpack_require__(68981);
// EXTERNAL MODULE: ./src/components/file-renderers/HTMLRenderer/index.ts + 3 modules
var HTMLRenderer = __webpack_require__(96960);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader.js
var loader = __webpack_require__(42348);
// EXTERNAL MODULE: ./src/components/thread/tool-views/FileOperationToolView.module.scss
var FileOperationToolView_module = __webpack_require__(4677);
var FileOperationToolView_module_default = /*#__PURE__*/__webpack_require__.n(FileOperationToolView_module);
// EXTERNAL MODULE: ./src/components/file-renderers/HTMLRenderer/HTMLToolbar.tsx + 3 modules
var HTMLToolbar = __webpack_require__(39873);
// EXTERNAL MODULE: ./src/components/file-renderers/FileRendererToolbar/index.tsx
var FileRendererToolbar = __webpack_require__(28420);
;// ./src/components/thread/tool-views/FileOperationToolView.tsx

























// Map file extensions to language names for syntax highlighting
const getLanguageFromFileName = (fileName)=>{
    var _fileName_split_pop;
    const extension = ((_fileName_split_pop = fileName.split('.').pop()) === null || _fileName_split_pop === void 0 ? void 0 : _fileName_split_pop.toLowerCase()) || '';
    // Map of file extensions to language names for syntax highlighting
    const extensionMap = {
        // Web languages
        html: 'html',
        htm: 'html',
        css: 'css',
        scss: 'scss',
        sass: 'scss',
        less: 'less',
        js: 'javascript',
        jsx: 'jsx',
        ts: 'typescript',
        tsx: 'tsx',
        json: 'json',
        jsonc: 'json',
        // Build and config files
        xml: 'xml',
        yml: 'yaml',
        yaml: 'yaml',
        toml: 'toml',
        ini: 'ini',
        env: 'bash',
        gitignore: 'bash',
        dockerignore: 'bash',
        // Scripting languages
        py: 'python',
        rb: 'ruby',
        php: 'php',
        go: 'go',
        java: 'java',
        kt: 'kotlin',
        c: 'c',
        cpp: 'cpp',
        h: 'c',
        hpp: 'cpp',
        cs: 'csharp',
        swift: 'swift',
        rs: 'rust',
        // Shell scripts
        sh: 'bash',
        bash: 'bash',
        zsh: 'bash',
        ps1: 'powershell',
        bat: 'batch',
        cmd: 'batch',
        // Markup languages (excluding markdown which has its own renderer)
        svg: 'svg',
        tex: 'latex',
        // Data formats
        graphql: 'graphql',
        gql: 'graphql'
    };
    return extensionMap[extension] || 'text';
};
function FileOperationToolView(param) {
    let { assistantContent, toolContent, assistantTimestamp, toolTimestamp, isSuccess = true, isStreaming = false, name, thread, onSubmitMessage } = param;
    const isMobile = (0,hooks/* useIsMobile */.al)();
    const [htmlPreviewUrl, setHtmlPreviewUrl] = (0,react.useState)(null);
    const [isLoadingHtmlContent, setIsLoadingHtmlContent] = (0,react.useState)(true);
    // Determine operation type from content or name
    const getOperationType = ()=>{
        // First check tool name if available
        if (name) {
            if (name.includes('create')) return 'create';
            if (name.includes('rewrite')) return 'rewrite';
            if (name.includes('delete')) return 'delete';
        }
        if (!assistantContent) return 'create'; // default fallback
        if (assistantContent.includes('<create-file>')) return 'create';
        if (assistantContent.includes('<full-file-rewrite>')) return 'rewrite';
        if (assistantContent.includes('delete-file') || assistantContent.includes('<delete>')) return 'delete';
        // Check for tool names as a fallback
        if (assistantContent.toLowerCase().includes('create file')) return 'create';
        if (assistantContent.toLowerCase().includes('rewrite file')) return 'rewrite';
        if (assistantContent.toLowerCase().includes('delete file')) return 'delete';
        // Default to create if we can't determine
        return 'create';
    };
    const operation = getOperationType();
    const filePath = (0,utils/* extractFilePath */.pn)(assistantContent);
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    // Only extract content for create and rewrite operations
    const contentFile = operation !== 'delete' ? (0,utils/* extractFileContent */.FK)(assistantContent, operation === 'create' ? 'create-file' : 'full-file-rewrite') : null;
    const iframeRef = (0,react.useRef)(null);
    const [htmlContent, setHtmlContent] = (0,react.useState)(contentFile);
    const [version, setVersion] = (0,react.useState)(0);
    const mounted = (0,react.useRef)(true);
    const codePanelRef = (0,react.useRef)(null);
    const [autoScrollEnabled, setAutoScrollEnabled] = (0,react.useState)(!isStreaming);
    // For debugging - show raw content if file path can't be extracted for delete operations
    const showDebugInfo = !filePath && operation === 'delete';
    // Process file path - handle potential newlines and clean up
    const processedFilePath = filePath ? filePath.trim().replace(/\\n/g, '\n').split('\n')[0] : null;
    const fileName = processedFilePath ? processedFilePath.split('/').pop() || processedFilePath : '';
    const isMarkdown = fileName.endsWith('.md');
    const isHtml = fileName.endsWith('.html');
    const isCsv = fileName.endsWith('.csv');
    const isXlsx = fileName.endsWith('.xlsx') || fileName.endsWith('.xls');
    const language = getLanguageFromFileName(fileName);
    const hasHighlighting = language !== 'text';
    const fileContent = !isStreaming && isHtml ? htmlContent : contentFile;
    const shouldUseSyncfusionCsv = isCsv && !isMobile && !!fileContent;
    const { visibleText: displayedContent } = useWordStreaming(fileContent !== null && fileContent !== void 0 ? fileContent : '', 300, isStreaming);
    const content = isStreaming ? displayedContent : fileContent;
    const contentLines = content ? content.replace(/\\n/g, '\n').split('\n').filter((line, index)=>!(index === 0 && line.trim() === '')) : [];
    (0,react.useEffect)(()=>{
        if (isStreaming) {
            setAutoScrollEnabled(true);
        }
    }, [
        displayedContent,
        isStreaming
    ]);
    const handleSaveHTML = (0,react.useCallback)(async (content)=>{
        try {
            setIsLoading(true);
            dist/* toast */.oR.info('Saving File');
            await (0,api/* updateSandboxFile */.rX)(thread.thread_id, "/workspace/".concat(fileName), content !== null && content !== void 0 ? content : '');
            dist/* toast */.oR.success('File updated');
        } catch (e) {
            main/* datadogLogs */.yf.logger.error('Failed to save file', {}, e);
            dist/* toast */.oR.error('Failed to save file');
        } finally{
            setIsLoading(false);
        }
    }, [
        thread.thread_id,
        fileName
    ]);
    // Add state for view mode toggle (code or preview)
    const [viewMode, setViewMode] = (0,react.useState)('code');
    const csvBinaryUrl = (0,react.useMemo)(()=>{
        if (!shouldUseSyncfusionCsv) return null;
        var _processUnicodeContent;
        return URL.createObjectURL(new Blob([
            (_processUnicodeContent = (0,markdown_renderer/* processUnicodeContent */.wO)(fileContent)) !== null && _processUnicodeContent !== void 0 ? _processUnicodeContent : ''
        ], {
            type: 'text/csv'
        }));
    }, [
        shouldUseSyncfusionCsv,
        fileContent
    ]);
    (0,react.useEffect)(()=>{
        const threadId = thread === null || thread === void 0 ? void 0 : thread.thread_id;
        if (!isHtml || !threadId) {
            return;
        }
        const fetchHtmlPreviewUrl = async (fileName)=>{
            try {
                setIsLoading(true);
                const data = await (0,api/* getSandboxServiceUrl */.ab)({
                    thread,
                    service: 'web-preview'
                });
                const url = new URL(data === null || data === void 0 ? void 0 : data.url);
                const previewUrl = url.origin + url.pathname + fileName.replace('/workspace/', '') + url.search;
                setHtmlPreviewUrl(previewUrl !== null && previewUrl !== void 0 ? previewUrl : null);
            } catch (e) {
                setHtmlPreviewUrl(null);
            } finally{
                setIsLoading(false);
            }
        };
        fetchHtmlPreviewUrl(processedFilePath);
    }, [
        thread,
        isHtml,
        processedFilePath
    ]);
    (0,react.useEffect)(()=>{
        if (isStreaming) {
            setAutoScrollEnabled(true);
        }
    }, [
        displayedContent,
        isStreaming
    ]);
    (0,react.useLayoutEffect)(()=>{
        const shouldAutoScroll = autoScrollEnabled;
        if (!shouldAutoScroll) return;
        const el = codePanelRef.current;
        if (!el) return;
        const positionAtBottom = el.scrollHeight - el.clientHeight - el.scrollTop <= 1;
        // stop auto-scrolling to wait for more content
        if (positionAtBottom) {
            setAutoScrollEnabled(false);
            return;
        }
        el.scrollTop = el.scrollHeight - el.clientHeight;
    }, [
        displayedContent,
        autoScrollEnabled
    ]);
    (0,react.useEffect)(()=>{
        if (isMarkdown || isCsv || isXlsx || isHtml && !isStreaming) {
            setViewMode('preview');
        } else {
            setViewMode('code');
        }
    }, [
        isCsv,
        isHtml,
        isMarkdown,
        isStreaming,
        isXlsx
    ]);
    (0,react.useEffect)(()=>{
        mounted.current = true;
        const handleMessage = (event)=>{
            var _event_data, _event_data_payload;
            if ((event === null || event === void 0 ? void 0 : (_event_data = event.data) === null || _event_data === void 0 ? void 0 : _event_data.type) !== 'GRAPESJS_SAVE_FILE') return;
            var _event_data_payload_content;
            const next = (_event_data_payload_content = (_event_data_payload = event.data.payload) === null || _event_data_payload === void 0 ? void 0 : _event_data_payload.content) !== null && _event_data_payload_content !== void 0 ? _event_data_payload_content : '';
            if (!mounted.current) return;
            handleSaveHTML === null || handleSaveHTML === void 0 ? void 0 : handleSaveHTML(next);
            setHtmlContent(next);
            setVersion(Date.now());
        };
        window.addEventListener('message', handleMessage);
        return ()=>{
            mounted.current = false;
            window.removeEventListener('message', handleMessage);
        };
    }, [
        htmlPreviewUrl,
        version,
        handleSaveHTML
    ]);
    // Fall back to generic view if file path is missing or if content is missing for non-delete operations
    if (!isStreaming && !filePath && !showDebugInfo || operation !== 'delete' && !fileContent) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(GenericToolView, {
            name: name || "file-".concat(operation),
            assistantContent: assistantContent,
            toolContent: toolContent,
            assistantTimestamp: assistantTimestamp,
            toolTimestamp: toolTimestamp,
            isSuccess: isSuccess,
            isStreaming: isStreaming
        });
    }
    // Operation-specific configs
    const configs = {
        create: {
            icon: folder_plus/* default */.A,
            successMessage: 'File created successfully'
        },
        rewrite: {
            icon: replace/* default */.A,
            successMessage: 'File rewritten successfully'
        },
        delete: {
            icon: file_x/* default */.A,
            successMessage: 'File deleted successfully'
        }
    };
    const config = configs[operation];
    const handleCopyClick = ()=>{
        (0,lib_utils/* copyTextToClipboard */.eM)(fileContent, !hasHighlighting);
    };
    const handleDeployClick = ()=>{
        (0,deploy_utils/* deployWebsiteUsingAgent */.Y)(onSubmitMessage);
    };
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "h-full w-full flex justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(loader/* default */.A, {
                className: "h-6 w-6 animate-spin text-primary"
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                "data-testid": "file-operation-tool-view",
                className: "flex-1 overflow-auto",
                children: [
                    operation !== 'delete' && fileContent && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "border-t border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm bg-white dark:bg-zinc-950 h-full flex flex-col",
                        children: [
                            isHtml ? /*#__PURE__*/ (0,jsx_runtime.jsx)(HTMLToolbar/* HtmlRendererToolbar */.W, {
                                fileName: fileName,
                                htmlPreviewUrl: htmlPreviewUrl,
                                viewMode: viewMode,
                                isStreaming: isStreaming,
                                onChangeMode: setViewMode,
                                handleCopyClick: handleCopyClick,
                                showDeployBtn: isSuccess && !!htmlPreviewUrl && !!onSubmitMessage,
                                handleDeployClick: handleDeployClick,
                                showOpenNewTabBtn: isSuccess && !!htmlPreviewUrl
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(FileRendererToolbar/* FileRendererToolbar */.N, {
                                fileName: fileName,
                                showCopyButton: isSuccess && !!fileContent,
                                handleCopyClick: handleCopyClick,
                                hasBorderBottom: true
                            }),
                            viewMode === 'code' || !isHtml && !isMarkdown && !isCsv && !isXlsx || !isSuccess || isStreaming && isHtml ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                ref: codePanelRef,
                                className: "flex-1 overflow-auto bg-white dark:bg-[#1D2020] text-zinc-900 dark:text-[#e1e4e8]",
                                style: {
                                    overscrollBehavior: 'contain',
                                    overflowAnchor: 'none'
                                },
                                children: hasHighlighting ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "absolute left-0 top-0 bottom-0 w-12 border-r border-zinc-200 dark:border-zinc-800 z-10 flex flex-col",
                                            children: contentLines.map((_, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "h-auto text-right pr-3 text-xs font-mono text-zinc-500 dark:text-zinc-500 select-none",
                                                    children: idx + 1
                                                }, idx))
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "pl-12",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(code_block/* CodeBlockCode */.sd, {
                                                code: isStreaming ? (0,markdown_renderer/* processUnicodeContent */.wO)(displayedContent) : (0,markdown_renderer/* processUnicodeContent */.wO)(fileContent),
                                                language: language,
                                                className: "text-xs px-2",
                                                isStreaming: isStreaming
                                            })
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "min-w-full table",
                                    children: [
                                        contentLines.map((line, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "table-row hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "table-cell text-center py-0.5 text-xs font-mono text-zinc-500 dark:text-zinc-500 select-none min-w-12 border-r border-zinc-200 dark:border-zinc-800",
                                                        children: idx + 1
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "table-cell pl-3 py-0.5 text-xs font-mono whitespace-pre text-zinc-800 dark:text-zinc-300",
                                                        children: (0,markdown_renderer/* processUnicodeContent */.wO)(line) || ' '
                                                    })
                                                ]
                                            }, idx)),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "table-row h-4"
                                        })
                                    ]
                                })
                            }) : null,
                            isHtml && viewMode === 'preview' && !isStreaming && (isSuccess && htmlPreviewUrl ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    isLoadingHtmlContent && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: (FileOperationToolView_module_default()).loader,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SpinnerGap_es/* SpinnerGapIcon */.r, {
                                            size: constants/* SVG_SIZE_XXL */.iWV,
                                            className: "animate-spin"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: (0,lib_utils.cn)((FileOperationToolView_module_default()).root, {
                                            [(FileOperationToolView_module_default()).isHidden]: isLoadingHtmlContent
                                        }),
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
                                            ref: iframeRef,
                                            src: "".concat(htmlPreviewUrl, "?v=").concat(version),
                                            title: "HTML Preview of ".concat(fileName),
                                            onLoad: ()=>setIsLoadingHtmlContent(false),
                                            className: "w-full h-full border-0",
                                            style: {
                                                minHeight: '300px'
                                            },
                                            sandbox: "allow-same-origin allow-scripts"
                                        }, "preview-".concat(version))
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(HTMLRenderer/* HTMLPreviewError */.G, {})),
                            isMarkdown && viewMode === 'preview' && isSuccess && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex-1 overflow-auto bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(markdown_renderer/* MarkdownRenderer */.To, {
                                    content: content,
                                    isStreaming: isStreaming
                                })
                            }),
                            isCsv && viewMode === 'preview' && isSuccess && (shouldUseSyncfusionCsv && csvBinaryUrl ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SyncfusionExcelRenderer/* SyncfusionExcelRenderer */.a, {
                                binaryUrl: csvBinaryUrl,
                                fileName: fileName
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex-1 overflow-hidden bg-white dark:bg-zinc-950",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CsvRenderer, {
                                    content: (0,markdown_renderer/* processUnicodeContent */.wO)(fileContent)
                                })
                            })),
                            isXlsx && viewMode === 'preview' && isSuccess && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex-1 overflow-hidden bg-white dark:bg-zinc-950 p-6 text-sm text-zinc-700 dark:text-zinc-200",
                                children: [
                                    "Creating",
                                    ' ',
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "!font-semibold",
                                        children: fileName || 'file.txt'
                                    }),
                                    ' ',
                                    "file..."
                                ]
                            })
                        ]
                    }),
                    operation === 'delete' && processedFilePath && !isStreaming && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "overflow-hidden h-full flex flex-col",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "p-6 flex-1 flex flex-col items-center justify-center bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "w-14 h-14 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(file_x/* default */.A, {
                                        className: "h-7 w-7 text-red-600 dark:text-red-400"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                    className: "text-lg font-medium mb-4 text-red-600 dark:text-red-400",
                                    children: "File Deleted"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-4 w-full max-w-md text-center mb-2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                        className: "text-sm font-mono text-zinc-700 dark:text-zinc-300 break-all",
                                        children: processedFilePath
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-sm text-zinc-500 dark:text-zinc-400 mt-2",
                                    children: "This file has been permanently removed"
                                })
                            ]
                        })
                    }),
                    operation === 'delete' && isStreaming && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "overflow-hidden h-full flex flex-col",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "p-6 flex-1 flex flex-col items-center justify-center bg-white dark:bg-zinc-950",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_dashed/* default */.A, {
                                        className: "h-8 w-8 mx-auto mb-3 text-blue-500 animate-spin"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-sm font-medium text-zinc-700 dark:text-zinc-300",
                                        children: "Deleting file..."
                                    }),
                                    processedFilePath && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-xs mt-2 font-mono text-zinc-500 dark:text-zinc-400 break-all",
                                        children: processedFilePath
                                    })
                                ]
                            })
                        })
                    }),
                    operation === 'delete' && !processedFilePath && !showDebugInfo && !isStreaming && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "overflow-hidden h-full flex flex-col",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "p-6 flex-1 flex flex-col items-center justify-center bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "w-14 h-14 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(file_x/* default */.A, {
                                        className: "h-7 w-7 text-red-600 dark:text-red-400"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                    className: "text-lg font-medium mb-4 text-red-600 dark:text-red-400",
                                    children: "File Deleted"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-4 w-full max-w-md text-center mb-2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-sm text-zinc-700 dark:text-zinc-300",
                                        children: "Unknown file path"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-sm text-zinc-500 dark:text-zinc-400 mt-2",
                                    children: "A file has been deleted but the path could not be determined"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolViewFooterStatus, {
                isStreaming: isStreaming,
                isSuccess: isSuccess,
                operation: "process",
                successMessage: config.successMessage,
                failureMessage: "Failed to ".concat(operation, " file"),
                loadingMessage: "Processing file operation..."
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/monitor-play.js
var monitor_play = __webpack_require__(23896);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/external-link.js
var external_link = __webpack_require__(93499);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Spinner.es.js + 1 modules
var Spinner_es = __webpack_require__(97849);
;// ./src/components/thread/tool-views/BrowserToolView.tsx
/* eslint-disable @next/next/no-img-element */ 









function BrowserToolView(param) {
    let { name = 'browser-operation', assistantContent, toolContent, assistantTimestamp, toolTimestamp, isSuccess = true, isStreaming = false, thread, agentStatus = 'idle', messages = [], currentIndex = 0, totalCalls = 1 } = param;
    const url = (0,utils/* extractBrowserUrl */.J1)(assistantContent);
    const operation = (0,utils/* extractBrowserOperation */.DS)(name);
    const toolTitle = (0,utils/* getToolTitle */.Bs)(name);
    const [vncPreviewUrl, setVncPreviewUrl] = (0,react.useState)(null);
    const [loadingVncPreview, setLoadingVncPreview] = (0,react.useState)(false);
    // --- message_id Extraction Logic ---
    let browserStateMessageId;
    // Find the browser_state message and extract the screenshot
    let screenshotBase64 = null;
    try {
        // 1. Parse the top-level JSON
        const topLevelParsed = (0,thread_utils/* safeJsonParse */.jD)(toolContent, {});
        const innerContentString = topLevelParsed === null || topLevelParsed === void 0 ? void 0 : topLevelParsed.content;
        if (typeof innerContentString === 'string') {
            // 2. Extract the output='...' string using regex
            const outputMatch = innerContentString.match(/\boutput='(.*?)'(?=\s*\))/);
            const outputString = outputMatch ? outputMatch[1] : null;
            if (outputString) {
                // 3. Unescape the JSON string (basic unescaping for \n and \")
                const unescapedOutput = outputString.replace(/\\"/g, '').replace(/\\n/g, '').replace(/\\/g, '');
                // 4. Parse the unescaped JSON to get message_id
                const finalParsedOutput = (0,thread_utils/* safeJsonParse */.jD)(unescapedOutput, {});
                browserStateMessageId = finalParsedOutput === null || finalParsedOutput === void 0 ? void 0 : finalParsedOutput.message_id;
            }
        } else if (Array.isArray(innerContentString)) {
            const imgNode = innerContentString.find(utils/* isImageContent */.zy);
            if (imgNode) {
                screenshotBase64 = imgNode.image_url.url;
            }
        }
    } catch (error) {
        main/* datadogLogs */.yf.logger.error('[BrowserToolView] Error parsing tool content for message_id:', {}, error);
    }
    if (browserStateMessageId && messages.length > 0) {
        const browserStateMessage = messages.find((msg)=>msg.type === 'browser_state' && msg.message_id === browserStateMessageId);
        if (browserStateMessage) {
            const browserStateContent = (0,thread_utils/* safeJsonParse */.jD)(browserStateMessage.content, {});
            screenshotBase64 = (browserStateContent === null || browserStateContent === void 0 ? void 0 : browserStateContent.screenshot_base64) || null;
        }
    }
    // Fetch VNC preview URL when component mounts or thread changes
    (0,react.useEffect)(()=>{
        const fetchVncUrl = async ()=>{
            try {
                setLoadingVncPreview(true);
                const res = await (0,api/* getSandboxServiceUrl */.ab)({
                    thread: thread,
                    service: 'vnc'
                });
                setVncPreviewUrl(res.url);
            } catch (error) {
                main/* datadogLogs */.yf.logger.error('[BrowserToolView] Error fetching VNC URL:', {}, error);
                setVncPreviewUrl(null);
            } finally{
                setLoadingVncPreview(false);
            }
        };
        if (thread) {
            fetchVncUrl();
        }
    }, [
        thread
    ]);
    const isRunning = isStreaming || agentStatus === 'running';
    const isLastToolCall = currentIndex === totalCalls - 1;
    // Memoize the VNC iframe to prevent reconnections on re-renders
    const vncIframe = (0,react.useMemo)(()=>{
        if (!vncPreviewUrl) return null;
        ;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
            src: vncPreviewUrl,
            title: "Browser preview",
            className: "w-full h-full border-0 flex-1"
        });
    }, [
        vncPreviewUrl
    ]); // Only recreate if the URL changes
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex-1 overflow-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "overflow-hidden h-full flex flex-col",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "bg-zinc-100 dark:bg-zinc-900 p-2 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(monitor_play/* default */.A, {
                                            className: "h-4 w-4 mr-2 text-zinc-600 dark:text-zinc-400"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-xs font-medium text-zinc-700 dark:text-zinc-300",
                                            children: "Browser Window"
                                        })
                                    ]
                                }),
                                url && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "text-xs font-mono text-zinc-500 dark:text-zinc-400 truncate max-w-[340px]",
                                    children: url
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-1 flex items-stretch bg-black",
                            children: isLastToolCall ? // Only show live sandbox or fallback to sandbox for the last tool call
                            isRunning && vncIframe ? // Use the memoized iframe for live preview
                            vncIframe : screenshotBase64 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex items-center justify-center w-full h-full max-h-[650px] overflow-auto",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: screenshotBase64,
                                    alt: "Browser Screenshot",
                                    className: "max-w-full max-h-full object-contain"
                                })
                            }) : vncIframe ? // Use the memoized iframe
                            vncIframe : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "p-8 flex flex-col items-center justify-center w-full bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400",
                                children: [
                                    loadingVncPreview ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Spinner_es/* SpinnerIcon */.N, {
                                        className: "h-12 w-12 mb-3 animate-spin"
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(monitor_play/* default */.A, {
                                        className: "h-12 w-12 mb-3 opacity-40"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-sm font-medium",
                                        children: loadingVncPreview ? 'Loading browser preview...' : 'Browser preview not available'
                                    }),
                                    url && /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                        href: url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "mt-3 flex items-center text-blue-600 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-400 hover:underline",
                                        children: [
                                            "Visit URL ",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.A, {
                                                className: "h-3 w-3 ml-1"
                                            })
                                        ]
                                    })
                                ]
                            }) : screenshotBase64 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex items-center justify-center w-full h-full max-h-[650px] overflow-auto",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: screenshotBase64,
                                    alt: "Browser Screenshot",
                                    className: "max-w-full max-h-full object-contain"
                                })
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "p-8 flex flex-col items-center justify-center w-full bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(monitor_play/* default */.A, {
                                        className: "h-12 w-12 mb-3 opacity-40"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-sm font-medium",
                                        children: "No Browser State image found"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolViewFooterStatus, {
                isStreaming: isRunning,
                isSuccess: isSuccess,
                operation: "Browser action",
                loadingMessage: "Executing browser action..."
            })
        ]
    });
}

;// ./src/components/thread/tool-views/WebSearchToolView.tsx





function WebSearchToolView(param) {
    let { name = 'web-search', assistantContent, toolContent, assistantTimestamp, toolTimestamp, isSuccess = true, isStreaming = false } = param;
    const query = (0,utils/* extractSearchQuery */.wi)(assistantContent);
    const searchResults = (0,utils/* extractSearchResults */.SK)(toolContent);
    const toolTitle = (0,utils/* getToolTitle */.Bs)(name);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex-1 overflow-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "overflow-hidden h-full flex flex-col",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex items-center p-2 justify-between border-y bg-white dark:bg-zinc-950 py-3 px-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(search/* default */.A, {
                                        className: "h-4 w-4 mr-2 text-zinc-600 dark:text-zinc-400"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-xs font-medium text-zinc-700 dark:text-zinc-300",
                                        children: toolTitle
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "px-3 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                className: "text-xs font-mono text-zinc-700 dark:text-zinc-300",
                                children: query || 'Unknown query'
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-1 overflow-auto bg-white dark:bg-zinc-950 font-mono text-sm",
                            children: isStreaming ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex-1 flex items-center justify-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-center p-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_dashed/* default */.A, {
                                            className: "h-8 w-8 mx-auto mb-3 text-blue-500 animate-spin"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-sm font-medium text-zinc-700 dark:text-zinc-300",
                                            children: "Searching the web..."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-xs mt-1 text-zinc-500 dark:text-zinc-400",
                                            children: "This might take a moment"
                                        })
                                    ]
                                })
                            }) : Array.isArray(searchResults) && searchResults.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "p-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-3",
                                        children: [
                                            "Found ",
                                            searchResults.length,
                                            " results"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "divide-y divide-zinc-100 dark:divide-zinc-800 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md",
                                        children: searchResults.map((result, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "p-3 space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex flex-col",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "text-xs text-zinc-500 dark:text-zinc-400 truncate mb-0.5",
                                                                children: (0,utils/* cleanUrl */.TG)(result.url)
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                href: result.url,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center gap-1",
                                                                children: [
                                                                    result.title,
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.A, {
                                                                        className: "h-3 w-3 opacity-60"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    result.snippet && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        className: "text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2",
                                                        children: result.snippet
                                                    })
                                                ]
                                            }, idx))
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "p-6 text-center flex-1 flex flex-col items-center justify-center h-full",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(search/* default */.A, {
                                        className: "h-6 w-6 mx-auto mb-2 text-zinc-400 dark:text-zinc-500"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-sm font-medium text-zinc-700 dark:text-zinc-300",
                                        children: "No results found"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-xs mt-1 text-zinc-500 dark:text-zinc-400",
                                        children: "Try refining your search query"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolViewFooterStatus, {
                isStreaming: isStreaming,
                isSuccess: isSuccess,
                toolTitle: toolTitle,
                loadingMessage: "Executing ".concat(toolTitle.toLowerCase(), "...")
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/globe.js
var globe = __webpack_require__(39068);
;// ./src/components/thread/tool-views/WebCrawlToolView.tsx






function WebCrawlToolView(param) {
    let { name = 'crawl-webpage', assistantContent, toolContent, assistantTimestamp, toolTimestamp, isSuccess = true, isStreaming = false } = param;
    const url = (0,utils/* extractCrawlUrl */.m$)(assistantContent);
    const webpageContent = (0,utils/* extractWebpageContent */._C)(toolContent);
    const toolTitle = (0,utils/* getToolTitle */.Bs)(name);
    if (!url) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(GenericToolView, {
            name: name,
            assistantContent: assistantContent,
            toolContent: toolContent,
            assistantTimestamp: assistantTimestamp,
            toolTimestamp: toolTimestamp,
            isSuccess: isSuccess,
            isStreaming: isStreaming
        });
    }
    // Format domain for display
    const formatDomain = (url)=>{
        try {
            const urlObj = new URL(url);
            return urlObj.hostname.replace('www.', '');
        } catch (e) {
            return url;
        }
    };
    const domain = url ? formatDomain(url) : 'Unknown';
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex-1 overflow-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "overflow-hidden h-full flex flex-col",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center p-2 justify-between border-y bg-white dark:bg-zinc-950 py-3 px-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(globe/* default */.A, {
                                            className: "h-4 w-4 mr-2 text-zinc-600 dark:text-zinc-400"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-xs font-medium text-zinc-700 dark:text-zinc-300",
                                            children: toolTitle
                                        })
                                    ]
                                }),
                                !isStreaming && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "flex items-center gap-2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                        href: url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center gap-1.5 py-1 px-2 text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.A, {
                                                className: "h-3.5 w-3.5 text-zinc-500 flex-shrink-0"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: "Open URL"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "px-3 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                className: "text-xs font-mono text-zinc-700 dark:text-zinc-300",
                                children: url
                            })
                        }),
                        isStreaming ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-1 bg-white dark:bg-zinc-950 flex items-center justify-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-center p-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_dashed/* default */.A, {
                                        className: "h-8 w-8 mx-auto mb-3 text-blue-500 animate-spin"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-sm font-medium text-zinc-700 dark:text-zinc-300",
                                        children: "Crawling webpage..."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "text-xs mt-1 text-zinc-500 dark:text-zinc-400",
                                        children: [
                                            "Fetching content from ",
                                            domain
                                        ]
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-1 overflow-auto bg-white dark:bg-zinc-950 font-mono text-sm",
                            children: webpageContent ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "p-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2",
                                        children: "Page Content"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
                                            className: "p-3 text-xs overflow-auto whitespace-pre-wrap text-zinc-800 dark:text-zinc-300 font-mono",
                                            children: webpageContent.text || 'No content extracted'
                                        })
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "p-6 h-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(globe/* default */.A, {
                                            className: "h-6 w-6 mx-auto mb-2 text-zinc-400 dark:text-zinc-500"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-sm font-medium text-zinc-700 dark:text-zinc-300",
                                            children: "No content extracted"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-xs mt-1 text-zinc-500 dark:text-zinc-400",
                                            children: "The webpage might be restricted or empty"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolViewFooterStatus, {
                isStreaming: isStreaming,
                isSuccess: isSuccess,
                toolTitle: toolTitle,
                loadingMessage: "Executing ".concat(toolTitle.toLowerCase(), "...")
            })
        ]
    });
}

;// ./src/components/thread/tool-views/WebScrapeToolTextItem.tsx




const WebScrapeToolTextItem = (param)=>{
    let { url, title, text } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
        className: "mb-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                className: "pb-2 space-y-0.5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-xs text-zinc-500 dark:text-zinc-400 truncate",
                        children: (0,utils/* cleanUrl */.TG)(url)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                        href: url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline",
                        children: [
                            title,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.A, {
                                className: "h-3 w-3 opacity-60"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(markdown/* Markdown */.o, {
                children: text !== null && text !== void 0 ? text : 'No content extracted'
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/ArrowSquareOut.es.js
var ArrowSquareOut_es = __webpack_require__(31271);
;// ./src/components/thread/tool-views/WebScrapeToolView.tsx










function WebScrapeToolView(param) {
    let { name = 'scrape-webpage', assistantContent, toolContent, assistantTimestamp, toolTimestamp, isSuccess = true, isStreaming = false } = param;
    const url = (0,utils/* extractCrawlUrl */.m$)(assistantContent);
    const webpageContent = (0,utils/* extractWebpageContent */._C)(toolContent);
    const jsonWithFixesLinks = (0,thread_utils/* fixBrokenMarkdownLinks */.dY)(webpageContent === null || webpageContent === void 0 ? void 0 : webpageContent.text) || '';
    const preparedContent = (0,thread_utils/* safeJsonParse */.jD)(jsonWithFixesLinks, []);
    const toolTitle = (0,utils/* getToolTitle */.Bs)(name);
    if (!url) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(GenericToolView, {
            name: name,
            assistantContent: assistantContent,
            toolContent: toolContent,
            assistantTimestamp: assistantTimestamp,
            toolTimestamp: toolTimestamp,
            isSuccess: isSuccess,
            isStreaming: isStreaming
        });
    }
    // Format domain for display
    const formatDomain = (url)=>{
        try {
            const urlObj = new URL(url);
            return urlObj.hostname.replace('www.', '');
        } catch (e) {
            return url;
        }
    };
    const domain = url ? formatDomain(url) : 'Unknown';
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex-1 overflow-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "overflow-hidden h-full flex flex-col",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center p-2 justify-between border-y bg-white dark:bg-zinc-950 py-1 px-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(globe/* default */.A, {
                                            className: "h-4 w-4 mr-2 text-zinc-600 dark:text-zinc-400"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-xs font-medium text-zinc-700 dark:text-zinc-300",
                                            children: toolTitle
                                        })
                                    ]
                                }),
                                !isStreaming && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "flex items-center gap-2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "p-3",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowSquareOut_es/* ArrowSquareOutIcon */.k, {
                                            size: constants/* SVG_SIZE_M */.ng3
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "px-3 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                "data-testid": "web-scrape-tool-view-url-label",
                                className: "text-xs font-mono text-zinc-700 dark:text-zinc-300",
                                children: url
                            })
                        }),
                        isStreaming ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-1 bg-white dark:bg-zinc-950 flex items-center justify-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-center p-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_dashed/* default */.A, {
                                        className: "h-8 w-8 mx-auto mb-3 text-blue-500 animate-spin"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-sm font-medium text-zinc-700 dark:text-zinc-300",
                                        children: "Scraping webpage..."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "text-xs mt-1 text-zinc-500 dark:text-zinc-400",
                                        children: [
                                            "Fetching content from ",
                                            domain
                                        ]
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            "data-testid": "web-scrape-tool-view-content",
                            className: "flex-1 overflow-auto bg-white dark:bg-zinc-950 font-mono text-sm",
                            children: preparedContent ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "p-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2",
                                        children: "Page Content"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "p-3 text-xs overflow-auto text-zinc-800 dark:text-zinc-300 font-mono",
                                            children: Array.isArray(preparedContent) && preparedContent.length > 0 ? preparedContent.map((result, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(WebScrapeToolTextItem, {
                                                    // Fixing this casing on the backend
                                                    // Support both old and new formats for now
                                                    title: (result === null || result === void 0 ? void 0 : result.title) || (result === null || result === void 0 ? void 0 : result.Title),
                                                    url: (result === null || result === void 0 ? void 0 : result.url) || (result === null || result === void 0 ? void 0 : result.URL),
                                                    text: (result === null || result === void 0 ? void 0 : result.text) || (result === null || result === void 0 ? void 0 : result.Text)
                                                }, idx)) : 'No content extracted'
                                        })
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "p-6 h-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(globe/* default */.A, {
                                            className: "h-6 w-6 mx-auto mb-2 text-zinc-400 dark:text-zinc-500"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-sm font-medium text-zinc-700 dark:text-zinc-300",
                                            children: "No content extracted"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-xs mt-1 text-zinc-500 dark:text-zinc-400",
                                            children: "The webpage might be restricted or empty"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolViewFooterStatus, {
                isStreaming: isStreaming,
                isSuccess: isSuccess,
                toolTitle: toolTitle,
                loadingMessage: "Executing ".concat(toolTitle.toLowerCase(), "...")
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/network.js
var network = __webpack_require__(14639);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/database.js
var database = __webpack_require__(85710);
;// ./src/components/thread/tool-views/DataProviderToolView.tsx








function DataProviderToolView(param) {
    let { name = 'unknown', assistantContent, toolContent, isSuccess = true, isStreaming = false, assistantTimestamp, toolTimestamp } = param;
    const toolTitle = (0,utils/* getToolTitle */.Bs)(name);
    const Icon = (0,threadUtils/* getToolIcon */.S8)(name) || network/* default */.A;
    // Extract data from the assistant content (request)
    const extractRequest = react.useMemo(()=>{
        if (!assistantContent) return null;
        try {
            // Parse assistant content as JSON
            const parsed = (0,thread_utils/* safeJsonParse */.jD)(assistantContent, null);
            if (parsed === null || parsed === void 0 ? void 0 : parsed.content) {
                // Try to extract content from service name and route
                const serviceMatch = parsed.content.match(/service_name=\\?"([^"\\]+)\\?"/);
                const routeMatch = parsed.content.match(/route=\\?"([^"\\]+)\\?"/);
                // For execute-data-provider-call, also extract the payload
                let payload = null;
                if (name === 'execute-data-provider-call') {
                    const payloadMatch = parsed.content.match(/{([^}]+)}/);
                    if (payloadMatch) {
                        try {
                            // Try to parse the payload JSON
                            payload = (0,thread_utils/* safeJsonParse */.jD)("{".concat(payloadMatch[1], "}"), '');
                        } catch (e) {
                            payload = payloadMatch[1];
                        }
                    }
                }
                return {
                    service: serviceMatch ? serviceMatch[1] : undefined,
                    route: routeMatch ? routeMatch[1] : undefined,
                    payload
                };
            }
        } catch (e) {
            main/* datadogLogs */.yf.logger.error('Error parsing assistant content:', {}, e);
        }
        return null;
    }, [
        assistantContent,
        name
    ]);
    // Parse the tool response
    const parsedResponse = react.useMemo(()=>{
        if (!toolContent || isStreaming) return null;
        try {
            // Extract content from tool_result tags if present
            const toolResultMatch = toolContent.match(/<tool_result>\s*<[^>]+>([\s\S]*?)<\/[^>]+>\s*<\/tool_result>/);
            let contentToFormat = toolResultMatch ? toolResultMatch[1] : toolContent;
            // Look for a ToolResult pattern
            const toolResultOutputMatch = contentToFormat.match(/ToolResult\(success=.+?, output='([\s\S]*?)'\)/);
            if (toolResultOutputMatch) {
                contentToFormat = toolResultOutputMatch[1];
            }
            // Try to parse as JSON for pretty formatting
            try {
                // Replace escaped quotes and newlines
                contentToFormat = contentToFormat.replace(/\\"/g, '"').replace(/\\n/g, '\n');
                const parsedJson = (0,thread_utils/* safeJsonParse */.jD)(contentToFormat, '');
                return JSON.stringify(parsedJson, null, 2);
            } catch (e) {
                // If not valid JSON, return as is
                return contentToFormat;
            }
        } catch (e) {
            return toolContent;
        }
    }, [
        toolContent,
        isStreaming
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex-1 overflow-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "overflow-hidden h-full flex flex-col",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex items-center p-2 justify-between border-y bg-white dark:bg-zinc-950 py-3 px-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(database/* default */.A, {
                                        className: "h-4 w-4 mr-2 text-zinc-600 dark:text-zinc-400"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-xs font-medium text-zinc-700 dark:text-zinc-300",
                                        children: toolTitle
                                    })
                                ]
                            })
                        }),
                        extractRequest && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "px-3 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4 m-3",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("code", {
                                className: "text-xs font-mono text-zinc-700 dark:text-zinc-300",
                                children: [
                                    extractRequest.service,
                                    extractRequest.route && "/".concat(extractRequest.route)
                                ]
                            })
                        }),
                        !isStreaming ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-1 bg-white dark:bg-zinc-950 font-mono text-sm",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "p-3",
                                children: [
                                    (extractRequest === null || extractRequest === void 0 ? void 0 : extractRequest.payload) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mb-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2",
                                                children: "Request Payload"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
                                                    className: "p-3 text-xs overflow-auto whitespace-pre-wrap text-zinc-800 dark:text-zinc-300 font-mono",
                                                    children: typeof extractRequest.payload === 'object' ? JSON.stringify(extractRequest.payload, null, 2) : extractRequest.payload
                                                })
                                            })
                                        ]
                                    }),
                                    parsedResponse && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2",
                                                children: "Response Data"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
                                                    className: "p-3 text-xs overflow-auto whitespace-pre-wrap text-zinc-800 dark:text-zinc-300 font-mono",
                                                    children: parsedResponse
                                                })
                                            })
                                        ]
                                    }),
                                    !(extractRequest === null || extractRequest === void 0 ? void 0 : extractRequest.payload) && !parsedResponse && assistantContent && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mb-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2",
                                                children: "Raw Request"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
                                                    className: "p-3 text-xs overflow-auto whitespace-pre-wrap text-zinc-800 dark:text-zinc-300 font-mono",
                                                    children: assistantContent
                                                })
                                            })
                                        ]
                                    }),
                                    !parsedResponse && toolContent && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2",
                                                children: "Raw Response"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
                                                    className: "p-3 text-xs overflow-auto whitespace-pre-wrap text-zinc-800 dark:text-zinc-300 font-mono",
                                                    children: toolContent
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-1 bg-white dark:bg-zinc-950 flex items-center justify-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-center p-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_dashed/* default */.A, {
                                        className: "h-8 w-8 mx-auto mb-3 text-blue-500 animate-spin"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "text-sm font-medium text-zinc-700 dark:text-zinc-300",
                                        children: [
                                            "Processing ",
                                            name.toLowerCase(),
                                            " operation..."
                                        ]
                                    }),
                                    (extractRequest === null || extractRequest === void 0 ? void 0 : extractRequest.service) && (extractRequest === null || extractRequest === void 0 ? void 0 : extractRequest.route) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "text-xs mt-1 text-zinc-500 dark:text-zinc-400 font-mono",
                                        children: [
                                            extractRequest.service,
                                            "/",
                                            extractRequest.route
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolViewFooterStatus, {
                isStreaming: isStreaming,
                isSuccess: isSuccess,
                toolTitle: toolTitle,
                loadingMessage: "Get Data Provider Endpoints ".concat(toolTitle.toLowerCase(), "...")
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/rocket.js
var rocket = __webpack_require__(20639);
// EXTERNAL MODULE: ./src/components/ui/card.tsx
var card = __webpack_require__(86948);
// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button = __webpack_require__(62717);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/GlobeSimple.es.js + 1 modules
var GlobeSimple_es = __webpack_require__(2625);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Info.es.js
var Info_es = __webpack_require__(27845);
;// ./src/components/thread/tool-views/DeployToolView.tsx












function extractDeployData(assistantContent, toolContent) {
    let name = null;
    let directoryPath = null;
    let deployResult = null;
    let rawContent = null;
    // Extract deploy result from tool content
    const href = (0,threadUtils/* extractWebsiteUrl */.YN)(toolContent);
    if (href) {
        deployResult = {
            url: href,
            success: true,
            output: toolContent
        };
    } else {
        deployResult = {
            message: 'Deployment Failed',
            success: false,
            output: toolContent
        };
    }
    // Try to extract from assistant content first
    const assistantStr = (0,utils/* unescapeString */.wh)(assistantContent);
    if (assistantStr) {
        try {
            const parsed = (0,thread_utils/* safeJsonParse */.jD)(assistantStr, null);
            if (parsed.parameters) {
                name = parsed.parameters.name || null;
                directoryPath = parsed.parameters.directory_path || null;
            }
        } catch (e) {
            // Try regex extraction
            const nameMatch = assistantStr.match(/name["']\s*:\s*["']([^"']+)["']/);
            const dirMatch = assistantStr.match(/directory_path["']\s*:\s*["']([^"']+)["']/);
            if (nameMatch) name = nameMatch[1];
            if (dirMatch) directoryPath = dirMatch[1];
        }
    }
    // Extract deploy result from tool content
    const toolStr = toolContent;
    if (toolStr) {
        rawContent = toolStr;
        try {
            const parsed = (0,thread_utils/* safeJsonParse */.jD)(toolStr, null);
            // Handle the nested tool_execution structure
            let resultData = null;
            if (parsed.tool_execution && parsed.tool_execution.result) {
                resultData = parsed.tool_execution.result;
                // Also extract arguments if not found in assistant content
                if (!name && parsed.tool_execution.arguments) {
                    name = parsed.tool_execution.arguments.name || null;
                    directoryPath = parsed.tool_execution.arguments.directory_path || null;
                }
            } else if (parsed.output) {
                // Fallback to old format
                resultData = parsed;
            }
            if (resultData) {
                var _resultData_output, _resultData_output1;
                deployResult = {
                    message: ((_resultData_output = resultData.output) === null || _resultData_output === void 0 ? void 0 : _resultData_output.message) || null,
                    output: ((_resultData_output1 = resultData.output) === null || _resultData_output1 === void 0 ? void 0 : _resultData_output1.output) || null,
                    success: resultData.success !== undefined ? resultData.success : true
                };
                // Try to extract deployment URL from output
                if (deployResult.output) {
                    const urlMatch = deployResult.output.match(/https:\/\/[^\s]+\.pages\.dev[^\s]*/);
                    if (urlMatch) {
                        deployResult.url = urlMatch[0];
                    }
                }
            }
        } catch (e) {
            // If parsing fails, treat as raw content
            deployResult = {
                message: 'Deploy completed',
                output: toolStr,
                success: true
            };
        }
    }
    return {
        name,
        directoryPath,
        deployResult,
        rawContent
    };
}
function DeployToolView(param) {
    let { name = 'deploy', assistantContent, toolContent, isSuccess = true, isStreaming = false, deployResult, rawContent } = param;
    if (!deployResult) {
        const deployData = extractDeployData(assistantContent, toolContent);
        deployResult = deployData.deployResult;
        rawContent = deployData.rawContent;
    }
    const toolTitle = (0,utils/* getToolTitle */.Bs)(name);
    const actualIsSuccess = (deployResult === null || deployResult === void 0 ? void 0 : deployResult.success) !== undefined ? deployResult.success : isSuccess;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zp, {
        className: "gap-0 flex border shadow-none border-t border-b-0 border-x-0 p-0 rounded-none flex-col h-full overflow-hidden bg-card",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex items-center p-2 justify-between border-b bg-white dark:bg-zinc-950 py-3 px-6",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(rocket/* default */.A, {
                            className: "h-4 w-4 mr-2 text-zinc-600 dark:text-zinc-400"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-xs font-medium text-zinc-700 dark:text-zinc-300",
                            children: toolTitle
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardContent */.Wu, {
                className: "p-0 h-full flex-1 overflow-hidden relative",
                children: isStreaming ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex-1 flex items-center justify-center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-center p-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_dashed/* default */.A, {
                                className: "h-8 w-8 mx-auto mb-3 text-blue-500 animate-spin"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-sm font-medium text-zinc-700 dark:text-zinc-300",
                                children: "Processing deployment..."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-xs mt-1 text-zinc-500 dark:text-zinc-400",
                                children: "This might take a moment"
                            })
                        ]
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(scroll_area/* ScrollArea */.F, {
                    className: "h-full w-full",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "p-4",
                        children: actualIsSuccess && deployResult ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "space-y-4",
                            children: deployResult.url && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "p-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "w-6 h-6 rounded text-[#005cff] flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GlobeSimple_es/* GlobeSimpleIcon */.n, {
                                                        weight: "fill",
                                                        size: constants/* SVG_SIZE_M */.ng3
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "text-sm font-medium text-zinc-900 dark:text-zinc-100",
                                                    children: "Website Deployed"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "bg-zinc-50 dark:bg-zinc-800 rounded p-2 mb-3",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                                className: "text-xs font-mono text-zinc-700 dark:text-zinc-300 break-all",
                                                children: deployResult.url
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
                                            as: "a",
                                            href: deployResult.url,
                                            color: "tertiary",
                                            fullWidth: true,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowSquareOut_es/* ArrowSquareOutIcon */.k, {
                                                    size: constants/* SVG_SIZE_M */.ng3
                                                }),
                                                "Open Website"
                                            ]
                                        })
                                    ]
                                })
                            })
                        }) : /* Failure State */ /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "space-y-4",
                            children: rawContent && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-zinc-100 dark:bg-neutral-900 rounded-lg overflow-hidden border border-zinc-200/20",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-accent px-4 py-2 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Info_es/* InfoIcon */.m, {
                                                className: "h-4 w-4 text-zinc-600 dark:text-zinc-400"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-sm font-medium text-zinc-700 dark:text-zinc-300",
                                                children: "Error Details"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "p-4 max-h-96 overflow-auto scrollbar-hide",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
                                            className: "text-xs text-zinc-600 dark:text-zinc-300 font-mono whitespace-pre-wrap break-all",
                                            children: rawContent
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolViewFooterStatus, {
                isStreaming: isStreaming,
                isSuccess: isSuccess,
                operation: "Deploy",
                loadingMessage: "Processing deployment..."
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/lib/utils/sandbox-proxy-utils.ts
var sandbox_proxy_utils = __webpack_require__(88108);
;// ./src/components/thread/tool-views/ExposePortToolView.tsx










function ExposePortToolView(param) {
    let { name = 'expose-port', assistantContent, toolContent, isSuccess = true, isStreaming = false, assistantTimestamp, toolTimestamp, thread } = param;
    ;
    // Parse the assistant content
    const parsedAssistantContent = react.useMemo(()=>{
        if (!assistantContent) return null;
        try {
            const parsed = (0,thread_utils/* safeJsonParse */.jD)(assistantContent, null);
            return (parsed === null || parsed === void 0 ? void 0 : parsed.content) || null;
        } catch (e) {
            main/* datadogLogs */.yf.logger.error('Failed to parse assistant content:', {}, e);
            return null;
        }
    }, [
        assistantContent
    ]);
    // Parse the tool result
    const toolResult = react.useMemo(()=>{
        if (!toolContent) return null;
        try {
            // First parse the outer JSON
            const parsed = (0,thread_utils/* safeJsonParse */.jD)(toolContent, null);
            // Then extract the tool result content
            const match = parsed === null || parsed === void 0 ? void 0 : parsed.content.match(/output='(.*?)'/);
            if (match) {
                const jsonStr = match[1].replace(/\\n/g, '').replace(/\\"/g, '"');
                return (0,thread_utils/* safeJsonParse */.jD)(jsonStr, null);
            }
            return null;
        } catch (e) {
            main/* datadogLogs */.yf.logger.error('Failed to parse tool content:', {}, e);
            return null;
        }
    }, [
        toolContent
    ]);
    // Extract port number from assistant content
    const portNumber = react.useMemo(()=>{
        if (!parsedAssistantContent) return null;
        try {
            const match = parsedAssistantContent.match(/<expose-port>\s*(\d+)\s*<\/expose-port>/);
            return match ? match[1] : null;
        } catch (e) {
            main/* datadogLogs */.yf.logger.error('Failed to extract port number:', {}, e);
            return null;
        }
    }, [
        parsedAssistantContent
    ]);
    // If we have no content to show, render a placeholder
    if (!portNumber && !toolResult && !isStreaming) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "flex flex-col h-full p-4",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "text-xs text-zinc-500 dark:text-zinc-400",
                children: "No port exposure information available"
            })
        });
    }
    if ((0,sandbox_proxy_utils/* containsTemporarySandboxUrl */.Br)(toolResult === null || toolResult === void 0 ? void 0 : toolResult.url) && sandbox_proxy_utils/* TEMP_WEBSITE_DEPLOYMENT_PORTS */.aZ.includes(portNumber)) {
        const absoluteUrl = (0,sandbox_proxy_utils/* getSandboxProxyUrl */.nu)(thread.thread_id, 'site');
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(DeployToolView, {
            assistantContent: assistantContent,
            toolContent: toolContent,
            isSuccess: isSuccess,
            isStreaming: isStreaming,
            thread: thread,
            deployResult: {
                success: true,
                url: absoluteUrl
            }
        });
    }
    const exposedUrl = toolResult.shortcode ? toolResult.url : (0,sandbox_proxy_utils/* getSandboxProxyUrl */.nu)(thread.thread_id, 'app', portNumber);
    const proxyUrlMessage = toolResult.message.replace(sandbox_proxy_utils/* TEMPORARY_SANDBOX_SERVICE_URL_REGEX */.c4, exposedUrl);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex-1 overflow-auto p-6 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950",
                children: [
                    portNumber && !isStreaming && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "text-xs font-medium text-zinc-500 dark:text-zinc-400",
                                        children: "Port to Expose"
                                    }),
                                    assistantTimestamp && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "text-xs text-zinc-500 dark:text-zinc-400",
                                        children: (0,utils/* formatTimestamp */.Ey)(assistantTimestamp)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-xs font-medium text-zinc-800 dark:text-zinc-300",
                                            children: "Port"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-xs font-mono text-zinc-800 dark:text-zinc-300",
                                            children: portNumber
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    toolResult && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-1.5 mt-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "text-xs font-medium text-zinc-500 dark:text-zinc-400",
                                        children: isStreaming ? 'Processing' : 'Exposed URL'
                                    }),
                                    toolTimestamp && !isStreaming && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "text-xs text-zinc-500 dark:text-zinc-400",
                                        children: (0,utils/* formatTimestamp */.Ey)(toolTimestamp)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (0,lib_utils.cn)('rounded-md border p-3', isStreaming ? 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/10' : isSuccess ? 'border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900' : 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/10'),
                                children: isStreaming ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "flex items-center gap-2 text-xs font-medium text-blue-700 dark:text-blue-400",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            "Exposing port ",
                                            portNumber,
                                            "..."
                                        ]
                                    })
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.A, {
                                                    className: "h-4 w-4 text-zinc-500 dark:text-zinc-400"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: exposedUrl,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline break-all",
                                                    children: exposedUrl
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-xs text-zinc-600 dark:text-zinc-400",
                                                    children: "Port"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-xs font-mono text-zinc-800 dark:text-zinc-300",
                                                    children: toolResult.port
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-xs text-zinc-600 dark:text-zinc-400",
                                            children: proxyUrlMessage
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-xs text-amber-600 dark:text-amber-400 italic",
                                            children: "Note: This URL might only be temporarily available and could expire after some time."
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolViewFooterStatus, {
                isStreaming: isStreaming,
                isSuccess: isSuccess,
                successMessage: "Port exposed successfully",
                failureMessage: "Failed to expose port",
                loadingMessage: "Exposing port..."
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/CaretLeft.es.js
var CaretLeft_es = __webpack_require__(19994);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/CaretRight.es.js
var CaretRight_es = __webpack_require__(76728);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/CaretLineRight.es.js + 1 modules
var CaretLineRight_es = __webpack_require__(13739);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slider/dist/index.mjs
var react_slider_dist = __webpack_require__(83026);
// EXTERNAL MODULE: ./src/components/ui/Slider/Slider.module.scss
var Slider_module = __webpack_require__(66348);
var Slider_module_default = /*#__PURE__*/__webpack_require__.n(Slider_module);
;// ./src/components/ui/Slider/Slider.tsx
/* __next_internal_client_entry_do_not_use__ Slider auto */ 




const Slider = (param)=>{
    let { className, trackClassName, rangeClassName, thumbClassName, defaultValue, value, min = 0, max = 100, ...props } = param;
    const values = react.useMemo(()=>Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [
            min,
            max
        ], [
        value,
        defaultValue,
        min,
        max
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_slider_dist/* Root */.bL, {
        "data-slot": "slider",
        defaultValue: defaultValue,
        value: value,
        min: min,
        max: max,
        className: (0,lib_utils.cn)((Slider_module_default()).root, className),
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_slider_dist/* Track */.CC, {
                "data-slot": "slider-track",
                className: (0,lib_utils.cn)((Slider_module_default()).sliderTrack, trackClassName),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_slider_dist/* Range */.Q6, {
                    "data-slot": "slider-range",
                    className: (0,lib_utils.cn)((Slider_module_default()).sliderRange, rangeClassName)
                })
            }),
            Array.from({
                length: values.length
            }, (_, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(react_slider_dist/* Thumb */.zi, {
                    "data-slot": "slider-thumb",
                    className: (0,lib_utils.cn)((Slider_module_default()).sliderThumb, thumbClassName)
                }, index))
        ]
    });
};

// EXTERNAL MODULE: ./src/components/thread/tool-views/components/ToolCallStepsTrack/ToolCallStepsTrack.module.scss
var ToolCallStepsTrack_module = __webpack_require__(70215);
var ToolCallStepsTrack_module_default = /*#__PURE__*/__webpack_require__.n(ToolCallStepsTrack_module);
;// ./src/components/thread/tool-views/components/ToolCallStepsTrack/ToolCallStepsTrack.tsx
/* __next_internal_client_entry_do_not_use__ ToolCallStepsTrack auto */ 





const ToolCallStepsTrack = (param)=>{
    let { totalCalls, currentIndex, onNavigate } = param;
    const isFirst = currentIndex <= 0;
    const isLast = currentIndex >= totalCalls - 1;
    const goToPrev = ()=>{
        if (!isFirst) onNavigate(currentIndex - 1);
    };
    const goToNext = ()=>{
        if (!isLast) onNavigate(currentIndex + 1);
    };
    const goToLast = ()=>{
        if (!isLast) onNavigate(totalCalls - 1);
    };
    const counter = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (ToolCallStepsTrack_module_default()).totalCount,
        children: [
            currentIndex + 1,
            " / ",
            totalCalls
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (ToolCallStepsTrack_module_default()).sliderWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider, {
                min: 0,
                max: totalCalls - 1,
                step: 1,
                value: [
                    currentIndex
                ],
                onValueChange: (param)=>{
                    let [newValue] = param;
                    return onNavigate(newValue);
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (ToolCallStepsTrack_module_default()).controlButtons,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                        size: "small",
                        shape: "round",
                        color: "transparent",
                        disabled: isFirst,
                        onClick: goToPrev,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CaretLeft_es/* CaretLeftIcon */.e, {
                            size: constants/* SVG_SIZE_M */.ng3
                        })
                    }),
                    counter,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                        size: "small",
                        shape: "round",
                        color: "transparent",
                        disabled: isLast,
                        onClick: goToNext,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CaretRight_es/* CaretRightIcon */.J, {
                            size: constants/* SVG_SIZE_M */.ng3
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                        size: "small",
                        shape: "round",
                        color: "transparent",
                        disabled: isLast,
                        onClick: goToLast,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CaretLineRight_es/* CaretLineRightIcon */.p, {
                            size: constants/* SVG_SIZE_M */.ng3
                        })
                    })
                ]
            })
        ]
    });
};

;// ./src/components/thread/tool-views/components/ToolCallStepsTrack/index.ts


// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(20063);
// EXTERNAL MODULE: ./src/components/file-renderers/index.tsx + 14 modules
var file_renderers = __webpack_require__(28773);
;// ./src/components/thread/tool-views/SeeExcelToolView.tsx
/* __next_internal_client_entry_do_not_use__ SeeExcelToolView auto */ 









const excelCache = new Map();
function SeeExcelToolView(param) {
    let { assistantContent, isSuccess = true, isStreaming = false, thread } = param;
    const pathname = (0,navigation.usePathname)();
    const isShare = pathname.includes('/share/');
    const fileName = (0,react.useMemo)(()=>{
        var _extractFilePath;
        return (_extractFilePath = (0,utils/* extractFilePath */.pn)(assistantContent)) !== null && _extractFilePath !== void 0 ? _extractFilePath : null;
    }, [
        assistantContent
    ]);
    const filePath = (0,react.useMemo)(()=>{
        return fileName ? !fileName.includes('workspace') ? "/workspace/".concat(fileName) : fileName : null;
    }, [
        fileName
    ]);
    const [loading, setLoading] = (0,react.useState)(false);
    const [binaryUrlForRenderer, setBinaryUrlForRenderer] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        let cancelled = false;
        let currentBlobUrl = null;
        async function loadContent() {
            setLoading(true);
            setBinaryUrlForRenderer(null);
            if (!filePath || !(thread === null || thread === void 0 ? void 0 : thread.thread_id)) {
                setLoading(false);
                return;
            }
            const cacheKey = "".concat(thread.thread_id, ":").concat(filePath);
            const cachedUrl = excelCache.get(cacheKey);
            if (cachedUrl) {
                setBinaryUrlForRenderer(cachedUrl);
                setLoading(false);
                return;
            }
            try {
                const content = await (0,api/* getSandboxFileContent */.nn)(thread.thread_id, filePath, isShare);
                if (cancelled) {
                    return;
                }
                if (content instanceof Blob) {
                    currentBlobUrl = URL.createObjectURL(content);
                    setBinaryUrlForRenderer(currentBlobUrl);
                    excelCache.set(cacheKey, currentBlobUrl);
                } else {
                    ;
                }
            } catch (err) {
                console.error('[SeeExcelToolView] Failed to load Excel file', err);
            } finally{
                if (!cancelled) setLoading(false);
            }
        }
        loadContent();
        return ()=>{
            cancelled = true;
            if (currentBlobUrl && !excelCache.has("".concat(thread === null || thread === void 0 ? void 0 : thread.thread_id, ":").concat(filePath))) {
                URL.revokeObjectURL(currentBlobUrl);
            }
        };
    }, [
        thread === null || thread === void 0 ? void 0 : thread.thread_id,
        isShare,
        filePath
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zp, {
        className: "gap-0 flex border shadow-none border-t border-b-0 border-x-0 p-0 rounded-none flex-col h-full overflow-hidden bg-card",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FileRendererToolbar/* FileRendererToolbar */.N, {
                fileName: fileName
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardContent */.Wu, {
                className: "p-0 h-full flex-1 overflow-hidden relative",
                children: isStreaming || loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex-1 flex items-center justify-center h-full",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-center p-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_dashed/* default */.A, {
                                className: "h-8 w-8 mx-auto mb-3 text-blue-500 animate-spin"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-sm",
                                children: "Loading…"
                            })
                        ]
                    })
                }) : !binaryUrlForRenderer ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex items-center justify-center h-full",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-sm text-zinc-500",
                        children: "No content available"
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(file_renderers/* FileRenderer */.YB, {
                    content: null,
                    binaryUrl: binaryUrlForRenderer,
                    fileName: filePath !== null && filePath !== void 0 ? filePath : 'file',
                    className: "h-full w-full overflow-y-auto",
                    thread: thread,
                    showToolbar: false
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolViewFooterStatus, {
                isStreaming: isStreaming || loading,
                isSuccess: isSuccess
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Image.es.js
var Image_es = __webpack_require__(94528);
;// ./src/components/thread/tool-views/SeeImageToolView.tsx
/* __next_internal_client_entry_do_not_use__ SeeImageToolView auto */ 









const imageCache = new Map();
function SeeImageToolView(param) {
    let { assistantContent, isSuccess = true, isStreaming = false, thread } = param;
    const pathname = (0,navigation.usePathname)();
    const isShare = pathname.includes('/share/');
    const fileName = (0,react.useMemo)(()=>{
        var _extractFilePath;
        return (_extractFilePath = (0,utils/* extractFilePath */.pn)(assistantContent)) !== null && _extractFilePath !== void 0 ? _extractFilePath : null;
    }, [
        assistantContent
    ]);
    const filePath = (0,react.useMemo)(()=>{
        return fileName ? !fileName.includes('workspace') ? "/workspace/".concat(fileName) : fileName : null;
    }, [
        fileName
    ]);
    const [loading, setLoading] = (0,react.useState)(false);
    const [blobUrlForRenderer, setBlobUrlForRenderer] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        let cancelled = false;
        let currentBlobUrl = null;
        async function loadContent() {
            setLoading(true);
            setBlobUrlForRenderer(null);
            if (!filePath || !(thread === null || thread === void 0 ? void 0 : thread.thread_id)) {
                setLoading(false);
                return;
            }
            const cacheKey = "".concat(thread.thread_id, ":").concat(filePath);
            const cachedUrl = imageCache.get(cacheKey);
            if (cachedUrl) {
                setBlobUrlForRenderer(cachedUrl);
                setLoading(false);
                return;
            }
            try {
                const content = await (0,api/* getSandboxFileContent */.nn)(thread.thread_id, filePath, isShare);
                if (cancelled) {
                    return;
                }
                if (content instanceof Blob) {
                    currentBlobUrl = URL.createObjectURL(content);
                    setBlobUrlForRenderer(currentBlobUrl);
                    imageCache.set(cacheKey, currentBlobUrl);
                } else {
                    ;
                }
            } catch (err) {
                console.error('[SeeImageToolView] Failed to load image', err);
            } finally{
                if (!cancelled) setLoading(false);
            }
        }
        loadContent();
        return ()=>{
            cancelled = true;
            if (currentBlobUrl && !imageCache.has("".concat(thread === null || thread === void 0 ? void 0 : thread.thread_id, ":").concat(filePath))) {
                URL.revokeObjectURL(currentBlobUrl);
            }
        };
    }, [
        thread === null || thread === void 0 ? void 0 : thread.thread_id,
        isShare,
        filePath
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zp, {
        className: "gap-0 flex border shadow-none border-t border-b-0 border-x-0 p-0 rounded-none flex-col h-full overflow-hidden bg-card",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex items-center p-2 justify-between border-b bg-white dark:bg-zinc-950 py-3 px-6",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Image_es/* ImageIcon */.x, {
                            className: "h-4 w-4 mr-2 text-zinc-600 dark:text-zinc-400"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-xs font-medium text-zinc-700 dark:text-zinc-300",
                            children: fileName
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardContent */.Wu, {
                className: "p-0 h-full flex-1 overflow-hidden relative",
                children: isStreaming || loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex-1 flex items-center justify-center h-full",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-center p-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_dashed/* default */.A, {
                                className: "h-8 w-8 mx-auto mb-3 text-blue-500 animate-spin"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-sm",
                                children: "Loading…"
                            })
                        ]
                    })
                }) : !blobUrlForRenderer ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex items-center justify-center h-full",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-sm text-zinc-500",
                        children: "No content available"
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(file_renderers/* FileRenderer */.YB, {
                    content: null,
                    binaryUrl: blobUrlForRenderer,
                    fileName: filePath !== null && filePath !== void 0 ? filePath : 'file',
                    className: "h-full w-full object-contain",
                    thread: thread
                }, filePath !== null && filePath !== void 0 ? filePath : 'no-file')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolViewFooterStatus, {
                isStreaming: isStreaming || loading,
                isSuccess: isSuccess
            })
        ]
    });
}

;// ./src/components/thread/tool-views/StepToolView.tsx





function StepToolView(param) {
    let { name = 'step', toolContent, isSuccess = true, isStreaming = false } = param;
    const thoughtContent = (0,utils/* extractStepContent */.fz)(toolContent);
    const toolTitle = (0,utils/* getToolTitle */.Bs)(name);
    const processedThoughtContent = (0,markdown_renderer/* processUnicodeContent */.wO)(thoughtContent);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex-1 overflow-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "overflow-hidden h-full flex flex-col",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex-1 overflow-auto bg-white dark:bg-zinc-950 font-mono text-sm",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "p-3",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "flex-1 overflow-auto bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(markdown_renderer/* MarkdownRenderer */.To, {
                                        content: processedThoughtContent
                                    })
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolViewFooterStatus, {
                isStreaming: isStreaming,
                isSuccess: isSuccess,
                toolTitle: toolTitle,
                loadingMessage: "Executing ".concat(toolTitle.toLowerCase(), "...")
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/play.js
var play = __webpack_require__(85921);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/copy.js
var copy = __webpack_require__(75426);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/eye.js
var eye = __webpack_require__(57828);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/code.js
var code = __webpack_require__(9602);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/clock.js
var clock = __webpack_require__(26983);
// EXTERNAL MODULE: ./src/components/thread/tool-views/components/TranscribeToolView/TranscribeToolView.module.scss
var TranscribeToolView_module = __webpack_require__(82019);
var TranscribeToolView_module_default = /*#__PURE__*/__webpack_require__.n(TranscribeToolView_module);
;// ./src/components/thread/tool-views/components/TranscribeToolView/TranscribeToolView.tsx











function YouTubeTranscribeToolView(param) {
    let { assistantContent, toolContent, assistantTimestamp, toolTimestamp, isSuccess = true, isStreaming = false, name } = param;
    var _youtubeData_URL_match;
    const [viewMode, setViewMode] = (0,react.useState)('formatted');
    const youtubeData = (0,utils/* extractYouTubeData */.tL)(toolContent);
    if (!youtubeData.URL) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(GenericToolView, {
            name: name || 'youtube-transcribe',
            assistantContent: assistantContent,
            toolContent: toolContent,
            assistantTimestamp: assistantTimestamp,
            toolTimestamp: toolTimestamp,
            isSuccess: isSuccess,
            isStreaming: isStreaming
        });
    }
    // Extract basic info
    const titleMatch = youtubeData.Transcript.match(/## (.+)/);
    const title = titleMatch ? titleMatch[1] : 'YouTube Transcript';
    const viewsMatch = youtubeData.Transcript.match(/- \*\*Views\*\*: (.+)/);
    const views = viewsMatch ? parseInt(viewsMatch[1]).toLocaleString() : null;
    const runtimeMatch = youtubeData.Transcript.match(/- \*\*Runtime\*\*: (.+)/);
    const runtime = runtimeMatch ? runtimeMatch[1] : null;
    const videoId = (_youtubeData_URL_match = youtubeData.URL.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)) === null || _youtubeData_URL_match === void 0 ? void 0 : _youtubeData_URL_match[1];
    const handleCopyClick = ()=>{
        (0,lib_utils/* copyTextToClipboard */.eM)(youtubeData.Transcript, false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (TranscribeToolView_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (TranscribeToolView_module_default()).content,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (TranscribeToolView_module_default()).toolView,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (TranscribeToolView_module_default()).header,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (TranscribeToolView_module_default()).titleSection,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: youtubeData.URL,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: (TranscribeToolView_module_default()).playLink,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(play/* default */.A, {
                                                className: (TranscribeToolView_module_default()).playIcon
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: (TranscribeToolView_module_default()).title,
                                            children: title
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (TranscribeToolView_module_default()).controls,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                                            color: "transparent",
                                            shape: "round",
                                            onClick: handleCopyClick,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(copy/* default */.A, {
                                                size: constants/* SVG_SIZE_M */.ng3
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: (TranscribeToolView_module_default()).viewToggle,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                                                    color: viewMode === 'formatted' ? 'tertiary' : 'transparent',
                                                    shape: "round",
                                                    onClick: ()=>setViewMode('formatted'),
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(eye/* default */.A, {
                                                        size: constants/* SVG_SIZE_M */.ng3
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                                                    color: viewMode === 'raw' ? 'tertiary' : 'transparent',
                                                    shape: "round",
                                                    onClick: ()=>setViewMode('raw'),
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(code/* default */.A, {
                                                        size: constants/* SVG_SIZE_M */.ng3
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        viewMode === 'formatted' && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (TranscribeToolView_module_default()).videoInfo,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (TranscribeToolView_module_default()).metadata,
                                    children: [
                                        views && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: (TranscribeToolView_module_default()).metadataItem,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(eye/* default */.A, {
                                                    className: (TranscribeToolView_module_default()).metadataIcon
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "Views:"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: (TranscribeToolView_module_default()).metadataValue,
                                                    children: views
                                                })
                                            ]
                                        }),
                                        runtime && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: (TranscribeToolView_module_default()).metadataItem,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(clock/* default */.A, {
                                                    className: (TranscribeToolView_module_default()).metadataIcon
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "Duration:"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: (TranscribeToolView_module_default()).metadataValue,
                                                    children: [
                                                        Math.floor(parseInt(runtime) / 60),
                                                        ":",
                                                        (parseInt(runtime) % 60).toString().padStart(2, '0')
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                videoId && /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: "https://img.youtube.com/vi/".concat(videoId, "/maxresdefault.jpg"),
                                    alt: "Video thumbnail",
                                    className: (TranscribeToolView_module_default()).thumbnail,
                                    onError: (e)=>{
                                        e.currentTarget.src = "https://img.youtube.com/vi/".concat(videoId, "/hqdefault.jpg");
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (TranscribeToolView_module_default()).content,
                            children: viewMode === 'formatted' ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (TranscribeToolView_module_default()).formattedView,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(markdown_renderer/* MarkdownRenderer */.To, {
                                    content: youtubeData.Transcript
                                })
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (TranscribeToolView_module_default()).rawView,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
                                    className: (TranscribeToolView_module_default()).rawText,
                                    children: youtubeData.Transcript
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolViewFooterStatus, {
                isStreaming: isStreaming,
                isSuccess: isSuccess,
                operation: "transcribe",
                successMessage: "Video transcribed successfully",
                failureMessage: "Failed to transcribe video",
                loadingMessage: "Transcribing YouTube video..."
            })
        ]
    });
}

;// ./src/components/thread/tool-views/components/TranscribeToolView/index.ts


// EXTERNAL MODULE: ./src/assets/icons/superNinjaIcon.tsx
var superNinjaIcon = __webpack_require__(48525);
// EXTERNAL MODULE: ./src/components/thread/ComputerProcessing/ComputerProcessing.module.scss
var ComputerProcessing_module = __webpack_require__(19852);
var ComputerProcessing_module_default = /*#__PURE__*/__webpack_require__.n(ComputerProcessing_module);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/ComputerTower.es.js
var ComputerTower_es = __webpack_require__(20565);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/ShieldCheck.es.js
var ShieldCheck_es = __webpack_require__(90378);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/Crown.es.js + 1 modules
var Crown_es = __webpack_require__(89412);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/Stack.es.js + 1 modules
var Stack_es = __webpack_require__(16474);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/Terminal.es.js
var Terminal_es = __webpack_require__(51357);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/GithubLogo.es.js
var GithubLogo_es = __webpack_require__(40381);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/Code.es.js
var Code_es = __webpack_require__(1194);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/Browsers.es.js
var Browsers_es = __webpack_require__(70238);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/RocketLaunch.es.js
var RocketLaunch_es = __webpack_require__(14204);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/Infinity.es.js
var Infinity_es = __webpack_require__(48953);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/Atom.es.js
var Atom_es = __webpack_require__(3762);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/ChatsCircle.es.js + 1 modules
var ChatsCircle_es = __webpack_require__(90768);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/PuzzlePiece.es.js + 1 modules
var PuzzlePiece_es = __webpack_require__(6456);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/ArrowsCounterClockwise.es.js + 1 modules
var ArrowsCounterClockwise_es = __webpack_require__(48402);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/Files.es.js
var Files_es = __webpack_require__(42722);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/MicrosoftPowerpointLogo.es.js + 1 modules
var MicrosoftPowerpointLogo_es = __webpack_require__(95336);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/MicrosoftWordLogo.es.js
var MicrosoftWordLogo_es = __webpack_require__(26094);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/FilePdf.es.js
var FilePdf_es = __webpack_require__(72915);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/MicrosoftExcelLogo.es.js
var MicrosoftExcelLogo_es = __webpack_require__(67185);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/ChartBarHorizontal.es.js + 1 modules
var ChartBarHorizontal_es = __webpack_require__(58572);
;// ./src/components/thread/ComputerProcessing/constants.ts

const features = [
    {
        icon: ComputerTower_es/* ComputerTowerIcon */.c,
        text: 'Dedicated VM for each thread'
    },
    {
        icon: ShieldCheck_es/* ShieldCheckIcon */.Z,
        text: 'Device data isolation'
    },
    {
        icon: Crown_es/* CrownIcon */.p,
        text: 'Access to premium LLMs'
    },
    {
        icon: Stack_es/* StackIcon */.m,
        text: 'Run multiple VMs in parallel'
    },
    {
        icon: Terminal_es/* TerminalIcon */.k,
        text: 'VM Terminal access'
    },
    {
        icon: GithubLogo_es/* GithubLogoIcon */.y,
        text: 'Integrate & deploy with GitHub'
    },
    {
        icon: Code_es/* CodeIcon */.l,
        text: 'VS code integration'
    },
    {
        icon: Browsers_es/* BrowsersIcon */.n,
        text: 'Build websites, apps & more'
    },
    {
        icon: RocketLaunch_es/* RocketLaunchIcon */.P,
        text: 'Deploy applications when ready'
    },
    {
        icon: Infinity_es/* InfinityIcon */.Qt,
        text: 'Infinite context for file analysis'
    },
    {
        icon: Atom_es/* AtomIcon */.t,
        text: 'Worlds fastest AI researcher'
    },
    {
        icon: ChatsCircle_es/* ChatsCircleIcon */.$,
        text: 'Unlimited chat & images'
    },
    {
        icon: PuzzlePiece_es/* PuzzlePieceIcon */.Q,
        text: 'MCP tools integration (coming soon)'
    },
    {
        icon: ArrowsCounterClockwise_es/* ArrowsCounterClockwiseIcon */.a,
        text: 'Undo & redo AI actions (coming soon)'
    },
    {
        icon: Files_es/* FilesIcon */.z,
        text: 'Analyze Files'
    },
    {
        icon: MicrosoftPowerpointLogo_es/* MicrosoftPowerpointLogoIcon */.g,
        text: 'Create PowerPoint slides'
    },
    {
        icon: MicrosoftWordLogo_es/* MicrosoftWordLogoIcon */.h,
        text: 'Create Word documents'
    },
    {
        icon: FilePdf_es/* FilePdfIcon */.y,
        text: 'Create PDF files'
    },
    {
        icon: MicrosoftExcelLogo_es/* MicrosoftExcelLogoIcon */.M,
        text: 'Create Spreadsheets'
    },
    {
        icon: ChartBarHorizontal_es/* ChartBarHorizontalIcon */.h,
        text: 'Analyze and Visualize data'
    }
];

;// ./src/components/thread/ComputerProcessing/ComputerProcessing.tsx






const ComputerProcessing = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (ComputerProcessing_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(superNinjaIcon/* SuperNinjaIcon */.z, {
                size: 120
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: (ComputerProcessing_module_default()).loadingText,
                children: "Getting things ready..."
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (ComputerProcessing_module_default()).scrollContainer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (ComputerProcessing_module_default()).scrollContent,
                    children: [
                        features.map((feature, index)=>{
                            const Icon = feature.icon;
                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (ComputerProcessing_module_default()).featureItem,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                                        className: (ComputerProcessing_module_default()).icon,
                                        size: constants/* SVG_SIZE_M */.ng3
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (ComputerProcessing_module_default()).featureText,
                                        children: feature.text
                                    })
                                ]
                            }, "first-".concat(index));
                        }),
                        features.map((feature, index)=>{
                            const Icon = feature.icon;
                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (ComputerProcessing_module_default()).featureItem,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                                        className: (ComputerProcessing_module_default()).icon,
                                        size: constants/* SVG_SIZE_M */.ng3
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (ComputerProcessing_module_default()).featureText,
                                        children: feature.text
                                    })
                                ]
                            }, "second-".concat(index));
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const ComputerProcessing_ComputerProcessing = (ComputerProcessing);

// EXTERNAL MODULE: ./src/components/thread/SidePanel/index.ts + 6 modules
var SidePanel = __webpack_require__(90534);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Terminal.es.js
var csr_Terminal_es = __webpack_require__(6285);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/DotsThreeOutlineVertical.es.js + 1 modules
var DotsThreeOutlineVertical_es = __webpack_require__(37723);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Browser.es.js + 1 modules
var Browser_es = __webpack_require__(98435);
// EXTERNAL MODULE: ./src/components/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(6259);
// EXTERNAL MODULE: ./src/components/ui/ButtonTryOnDesktop/index.tsx + 1 modules
var ButtonTryOnDesktop = __webpack_require__(29345);
// EXTERNAL MODULE: ./src/components/ui/popover.tsx
var popover = __webpack_require__(26333);
// EXTERNAL MODULE: ./src/assets/icons/vscodeIcon.tsx
var vscodeIcon = __webpack_require__(73028);
// EXTERNAL MODULE: ./src/hooks/use-in-react-native-webview.ts
var use_in_react_native_webview = __webpack_require__(75664);
// EXTERNAL MODULE: ./src/components/VideoTutorials/components/TutorialPayer/index.ts + 4 modules
var TutorialPayer = __webpack_require__(26608);
;// ./src/components/thread/ToolThreeDotsMenu/ToolThreeDotsMenu.tsx
/* __next_internal_client_entry_do_not_use__ ToolThreeDotsMenu auto */ 















const ToolThreeDotsMenu = (param)=>{
    let { thread } = param;
    const { isFreeTier } = (0,hooks/* useGetUser */.be)();
    const [waitingForService, setWaitingForService] = (0,react.useState)(null);
    const isInReactNativeWebView = (0,use_in_react_native_webview/* useInReactNativeWebView */.M)(true);
    const { isVisible: isVisibleClineVideo, onVisibilityToggle: handleOpenClineVideo, onVisibilityRemove: handleRemoveClineVideo } = (0,hooks/* useVisible */.MI)();
    const handleUrlButtonClickCallback = (0,react.useCallback)(async (service)=>{
        try {
            setWaitingForService(service);
            const res = await (0,api/* getSandboxServiceUrl */.ab)({
                thread,
                service
            });
            window.open(res.url, '_blank', 'noopener,noreferrer');
        } catch (error) {
            dist/* toast */.oR.error('Failed to open service. Please try again later.');
        } finally{
            setWaitingForService(null);
        }
    }, [
        thread
    ]);
    const vscodeButton = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
        shape: "round",
        size: "small",
        color: "transparent",
        className: "h-8 gap-1",
        disabled: waitingForService !== null,
        onClick: ()=>isFreeTier ? handleOpenClineVideo() : handleUrlButtonClickCallback('vscode'),
        ...isFreeTier && {
            tooltipContent: 'Upgrade to access VS code with Cline IDE'
        },
        children: [
            waitingForService === 'vscode' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Spinner_es/* SpinnerIcon */.N, {
                className: "h-4 w-4 animate-spin"
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(vscodeIcon/* VSCodeIcon */.W, {
                variant: "secondary"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "hidden sm:inline",
                children: "VS Code"
            })
        ]
    });
    const terminalButton = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
        shape: "round",
        size: "small",
        color: "transparent",
        className: "h-8 gap-1",
        onClick: ()=>handleUrlButtonClickCallback('terminal'),
        disabled: waitingForService !== null || isFreeTier,
        ...isFreeTier && {
            tooltipContent: "Upgrade to access Terminal on AI Agent's computer."
        },
        children: [
            waitingForService === 'terminal' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Spinner_es/* SpinnerIcon */.N, {
                className: "h-4 w-4 animate-spin"
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(csr_Terminal_es/* TerminalIcon */.k, {
                size: constants/* SVG_SIZE_M */.ng3
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "hidden sm:inline",
                children: "Terminal"
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
        children: [
            isVisibleClineVideo && /*#__PURE__*/ (0,jsx_runtime.jsx)(TutorialPayer/* TutorialPayerUpgradeButton */.O, {
                url: constants/* NINJA_CLINE_TUTORIAL_URL */.Ajp,
                onClose: ()=>handleRemoveClineVideo()
            }),
            isInReactNativeWebView ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonTryOnDesktop/* ButtonTryOnDesktop */.Vg, {
                asChild: true,
                children: vscodeButton
            }) : vscodeButton,
            isInReactNativeWebView ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonTryOnDesktop/* ButtonTryOnDesktop */.Vg, {
                asChild: true,
                children: terminalButton
            }) : terminalButton,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(popover/* Popover */.AM, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonTryOnDesktop/* ButtonTryOnDesktopPopoverContent */.vK, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                        asChild: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(popover/* PopoverAnchor */.dT, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                                shape: "round",
                                color: "transparent",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DotsThreeOutlineVertical_es/* DotsThreeOutlineVerticalIcon */.i, {
                                    size: constants/* SVG_SIZE_M */.ng3
                                })
                            })
                        })
                    }),
                    isInReactNativeWebView ? /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuContent */.SQ, {
                        align: "end",
                        forceMount: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonTryOnDesktop/* ButtonTryOnDesktopTrigger */.rE, {
                            asChild: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */._2, {
                                onClick: (e)=>e.preventDefault(),
                                disabled: waitingForService !== null || isFreeTier,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Browser_es/* BrowserIcon */.W, {
                                        size: constants/* SVG_SIZE_M */.ng3
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: "Open in browser"
                                    })
                                ]
                            })
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuContent */.SQ, {
                        align: "end",
                        forceMount: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItemTooltip */.xd, {
                            ...isFreeTier && {
                                tooltipContent: "Upgrade to access Browser on AI Agent's computer.",
                                tooltipPosition: 'bottom'
                            },
                            onClick: ()=>handleUrlButtonClickCallback('vnc'),
                            disabled: waitingForService !== null || isFreeTier,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Browser_es/* BrowserIcon */.W, {
                                    size: constants/* SVG_SIZE_M */.ng3
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: "Open in browser"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};

;// ./src/components/thread/ToolThreeDotsMenu/index.ts


// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/CircleDashed.es.js
var ssr_CircleDashed_es = __webpack_require__(79974);
// EXTERNAL MODULE: ./src/components/thread/tool-views/components/ToolCallHeaderActions/ToolCallHeaderActions.module.scss
var ToolCallHeaderActions_module = __webpack_require__(6925);
var ToolCallHeaderActions_module_default = /*#__PURE__*/__webpack_require__.n(ToolCallHeaderActions_module);
;// ./src/components/thread/tool-views/components/ToolCallHeaderActions/ToolCallHeaderActions.tsx
/* __next_internal_client_entry_do_not_use__ ToolCallHeaderActions auto */ 




const ToolCallHeaderActions = (param)=>{
    let { isStreaming, isShare, thread } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            isStreaming && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (ToolCallHeaderActions_module_default()).streamingBadge,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ssr_CircleDashed_es/* CircleDashedIcon */.L, {
                        size: constants/* SVG_SIZE_XS */.Pbx,
                        className: "animate-spin"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: "Running"
                    })
                ]
            }),
            !isShare && /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolThreeDotsMenu, {
                thread: thread
            })
        ]
    });
};

;// ./src/components/thread/tool-views/components/ToolCallHeaderActions/index.ts


;// ./src/components/thread/tool-call-side-panel.tsx
/* __next_internal_client_entry_do_not_use__ ToolCallSidePanel auto */ 


// Import tool view components from the tool-views directory




















// Get the specialized tool view component based on the tool name
function getToolView(toolName, assistantContent, toolContent, assistantTimestamp, toolTimestamp) {
    let isSuccess = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, thread = arguments.length > 6 ? arguments[6] : void 0, messages = arguments.length > 7 ? arguments[7] : void 0, agentStatus = arguments.length > 8 ? arguments[8] : void 0, currentIndex = arguments.length > 9 ? arguments[9] : void 0, totalCalls = arguments.length > 10 ? arguments[10] : void 0, isStreaming = arguments.length > 11 ? arguments[11] : void 0, onSubmitMessage = arguments.length > 12 ? arguments[12] : void 0;
    if (!toolName) return null;
    const normalizedToolName = toolName.toLowerCase();
    switch(normalizedToolName){
        case 'execute-command':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(CommandToolView, {
                assistantContent: assistantContent,
                toolContent: toolContent,
                isSuccess: isSuccess,
                isStreaming: isStreaming
            });
        case 'str-replace':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(StrReplaceToolView, {
                assistantContent: assistantContent,
                toolContent: toolContent,
                assistantTimestamp: assistantTimestamp,
                toolTimestamp: toolTimestamp,
                isSuccess: isSuccess
            });
        case 'expose-port':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ExposePortToolView, {
                assistantContent: assistantContent,
                toolContent: toolContent,
                assistantTimestamp: assistantTimestamp,
                toolTimestamp: toolTimestamp,
                isSuccess: isSuccess,
                isStreaming: isStreaming,
                thread: thread
            });
        case 'create-file':
        case 'full-file-rewrite':
        case 'delete-file':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(FileOperationToolView, {
                assistantContent: assistantContent,
                toolContent: toolContent,
                assistantTimestamp: assistantTimestamp,
                toolTimestamp: toolTimestamp,
                isSuccess: isSuccess,
                name: normalizedToolName,
                thread: thread,
                onSubmitMessage: onSubmitMessage,
                isStreaming: isStreaming
            });
        case 'browser-navigate':
        case 'browser-click':
        case 'browser-extract':
        case 'browser-fill':
        case 'browser-wait':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(BrowserToolView, {
                currentIndex: currentIndex,
                totalCalls: totalCalls,
                agentStatus: agentStatus,
                messages: messages,
                name: normalizedToolName,
                assistantContent: assistantContent,
                toolContent: toolContent,
                assistantTimestamp: assistantTimestamp,
                toolTimestamp: toolTimestamp,
                isSuccess: isSuccess,
                thread: thread
            });
        case 'web-search':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(WebSearchToolView, {
                assistantContent: assistantContent,
                toolContent: toolContent,
                assistantTimestamp: assistantTimestamp,
                toolTimestamp: toolTimestamp,
                isSuccess: isSuccess
            });
        case 'crawl-webpage':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(WebCrawlToolView, {
                assistantContent: assistantContent,
                toolContent: toolContent,
                assistantTimestamp: assistantTimestamp,
                toolTimestamp: toolTimestamp,
                isSuccess: isSuccess
            });
        case 'scrape-webpage':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(WebScrapeToolView, {
                assistantContent: assistantContent,
                toolContent: toolContent,
                assistantTimestamp: assistantTimestamp,
                toolTimestamp: toolTimestamp,
                isSuccess: isSuccess
            });
        case 'execute-data-provider-call':
        case 'get-data-provider-endpoints':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(DataProviderToolView, {
                name: normalizedToolName,
                assistantContent: assistantContent,
                toolContent: toolContent,
                assistantTimestamp: assistantTimestamp,
                toolTimestamp: toolTimestamp,
                isSuccess: isSuccess,
                isStreaming: isStreaming
            });
        case 'deploy':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(DeployToolView, {
                assistantContent: assistantContent,
                toolContent: toolContent,
                isSuccess: isSuccess,
                isStreaming: isStreaming,
                thread: thread,
                onSubmitMessage: onSubmitMessage
            });
        case 'see-image':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(SeeImageToolView, {
                assistantContent: assistantContent,
                toolContent: toolContent,
                isSuccess: isSuccess,
                isStreaming: isStreaming,
                thread: thread,
                onSubmitMessage: onSubmitMessage
            });
        case 'see-excel':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(SeeExcelToolView, {
                assistantContent: assistantContent,
                toolContent: toolContent,
                isSuccess: isSuccess,
                isStreaming: isStreaming,
                thread: thread,
                onSubmitMessage: onSubmitMessage
            });
        case 'step':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(StepToolView, {
                toolContent: toolContent,
                isSuccess: isSuccess
            });
        case 'transcribe-youtube':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(YouTubeTranscribeToolView, {
                name: normalizedToolName,
                assistantContent: assistantContent,
                toolContent: toolContent,
                assistantTimestamp: assistantTimestamp,
                toolTimestamp: toolTimestamp
            });
        default:
            // Check if it's a browser operation
            if (normalizedToolName.startsWith('browser-') || normalizedToolName.startsWith('web-browser-')) {
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(BrowserToolView, {
                    currentIndex: currentIndex,
                    totalCalls: totalCalls,
                    agentStatus: agentStatus,
                    messages: messages,
                    name: toolName,
                    assistantContent: assistantContent,
                    toolContent: toolContent,
                    assistantTimestamp: assistantTimestamp,
                    toolTimestamp: toolTimestamp,
                    isSuccess: isSuccess,
                    thread: thread
                });
            }
            // Fallback to generic view
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(GenericToolView, {
                name: toolName,
                assistantContent: assistantContent,
                toolContent: toolContent,
                assistantTimestamp: assistantTimestamp,
                toolTimestamp: toolTimestamp,
                isSuccess: isSuccess,
                isStreaming: isStreaming
            });
    }
}
function ToolCallSidePanel(param) {
    let { isOpen, onClose, totalCalls, currentToolCall, currentIndex, onNavigate, messages, agentStatus, thread, isShare, onSubmitMessage, isLoadingTool = false, isMaximized, onToggleMaximize, isStreaming = false } = param;
    var _currentToolCall_toolResult, _currentToolCall_toolResult1, _currentToolCall_toolResult2;
    // Add keyboard shortcut for CMD+I to close panel
    react.useEffect(()=>{
        if (!isOpen) return;
        const handleKeyDown = (event)=>{
            if ((event.metaKey || event.ctrlKey) && event.key === 'i') {
                event.preventDefault();
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        isOpen,
        onClose
    ]);
    // Listen for sidebar toggle events
    react.useEffect(()=>{
        if (!isOpen) return;
        const handleSidebarToggle = (event)=>{
            if (event.detail.expanded) {
                onClose();
            }
        };
        window.addEventListener('sidebar-left-toggled', handleSidebarToggle);
        return ()=>window.removeEventListener('sidebar-left-toggled', handleSidebarToggle);
    }, [
        isOpen,
        onClose
    ]);
    const title = 'Computer';
    const baseSidePanelProps = {
        onClose,
        title,
        isMaximized,
        onToggleMaximize
    };
    if (!isOpen) {
        return null;
    }
    if (!totalCalls) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(SidePanel/* SidePanel */.w, {
            ...baseSidePanelProps,
            showMaximizeButton: false,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ComputerProcessing_ComputerProcessing, {})
        });
    }
    if (isLoadingTool || !(currentToolCall === null || currentToolCall === void 0 ? void 0 : currentToolCall.assistantCall)) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(SidePanel/* SidePanel */.w, {
            ...baseSidePanelProps,
            showMaximizeButton: false,
            headerBottom: /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolCallStepsTrack, {
                totalCalls: totalCalls,
                currentIndex: currentIndex,
                onNavigate: onNavigate
            }),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex flex-col items-center justify-center h-full w-full border-t border-zinc-200 dark:border-zinc-800",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex-1 overflow-auto px-6 py-4",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SpinnerGap_es/* SpinnerGapIcon */.r, {
                        "data-testid": "loading-current-tool-label",
                        size: constants/* SVG_SIZE_XXL */.iWV,
                        className: "animate-spin"
                    })
                })
            })
        });
    }
    var _currentToolCall_toolResult_isSuccess;
    const toolView = getToolView(currentToolCall.assistantCall.name, currentToolCall.assistantCall.content, (_currentToolCall_toolResult = currentToolCall.toolResult) === null || _currentToolCall_toolResult === void 0 ? void 0 : _currentToolCall_toolResult.content, currentToolCall.assistantCall.timestamp, (_currentToolCall_toolResult1 = currentToolCall.toolResult) === null || _currentToolCall_toolResult1 === void 0 ? void 0 : _currentToolCall_toolResult1.timestamp, isStreaming ? true : (_currentToolCall_toolResult_isSuccess = (_currentToolCall_toolResult2 = currentToolCall.toolResult) === null || _currentToolCall_toolResult2 === void 0 ? void 0 : _currentToolCall_toolResult2.isSuccess) !== null && _currentToolCall_toolResult_isSuccess !== void 0 ? _currentToolCall_toolResult_isSuccess : true, thread, messages, agentStatus, currentIndex, totalCalls, isStreaming, onSubmitMessage);
    if (!toolView) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(SidePanel/* SidePanel */.w, {
            ...baseSidePanelProps,
            showMaximizeButton: false,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex items-center justify-center flex-1 p-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "text-sm text-zinc-500 dark:text-zinc-400 text-center",
                    children: "Unable to display tool details."
                })
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SidePanel/* SidePanel */.w, {
        ...baseSidePanelProps,
        headerActions: /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolCallHeaderActions, {
            isStreaming: isStreaming,
            isShare: isShare,
            thread: thread
        }),
        headerBottom: /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolCallStepsTrack, {
            totalCalls: totalCalls,
            currentIndex: currentIndex,
            onNavigate: onNavigate
        }),
        children: toolView
    });
}


/***/ }),

/***/ 73805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* reexport */ FeedbackRating)
});

// UNUSED EXPORTS: FeedbackDetails

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/sonner/dist/index.mjs
var dist = __webpack_require__(18720);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(85203);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/components/thread/Feedback/components/FeedbackRating/FeedbackRating.module.scss
var FeedbackRating_module = __webpack_require__(1797);
var FeedbackRating_module_default = /*#__PURE__*/__webpack_require__.n(FeedbackRating_module);
// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button = __webpack_require__(62717);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/SmileyAngry.es.js + 1 modules
var SmileyAngry_es = __webpack_require__(15781);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/SmileySad.es.js + 1 modules
var SmileySad_es = __webpack_require__(44655);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/SmileyMeh.es.js + 1 modules
var SmileyMeh_es = __webpack_require__(75558);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Smiley.es.js + 1 modules
var Smiley_es = __webpack_require__(20606);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/SmileyWink.es.js + 1 modules
var SmileyWink_es = __webpack_require__(75916);
// EXTERNAL MODULE: ./src/hooks/index.ts + 39 modules
var hooks = __webpack_require__(71203);
// EXTERNAL MODULE: ./src/components/ui/dialog.tsx
var dialog = __webpack_require__(51834);
// EXTERNAL MODULE: ./src/components/ui/TextareaSimple/index.tsx + 1 modules
var TextareaSimple = __webpack_require__(12328);
// EXTERNAL MODULE: ./src/components/thread/Feedback/components/FeedbackDetails/FeedbackDetails.module.scss
var FeedbackDetails_module = __webpack_require__(25928);
var FeedbackDetails_module_default = /*#__PURE__*/__webpack_require__.n(FeedbackDetails_module);
// EXTERNAL MODULE: ./src/lib/api.ts
var api = __webpack_require__(90960);
// EXTERNAL MODULE: ./src/hooks/loadingOverlay/index.ts + 2 modules
var loadingOverlay = __webpack_require__(60184);
// EXTERNAL MODULE: ./src/hooks/use-keyboard-open.ts
var use_keyboard_open = __webpack_require__(28853);
// EXTERNAL MODULE: ./node_modules/react-device-detect/dist/lib.js
var lib = __webpack_require__(92253);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(64269);
;// ./src/components/thread/Feedback/components/FeedbackDetails/FeedbackDetails.tsx
/* __next_internal_client_entry_do_not_use__ FeedbackDetails auto */ 












const SUBMITTED_TEXT = 'Thank you for the feedback';
const FeedbackDetails = (param)=>{
    let { groupAgentRunId, currentRating, open, onToggle } = param;
    const [reason, setReason] = (0,react.useState)('');
    const { showLoadingOverlay, hideLoadingOverlay } = (0,loadingOverlay/* useLoadingOverlayActions */.B)();
    const isKeyboardOpen = (0,use_keyboard_open/* useKeyboardOpen */.H)();
    const handleToggle = ()=>{
        setReason('');
        onToggle();
    };
    const handleDetailsSubmit = async ()=>{
        onToggle();
        showLoadingOverlay({
            overlayText: 'Submitting feedback...'
        });
        const data = {
            rating: {
                rating: currentRating,
                reason
            },
            agent_run_id: groupAgentRunId
        };
        try {
            await (0,api/* createAgentRunFeedback */.st)(data);
            dist/* toast */.oR.success(SUBMITTED_TEXT);
        } catch (error) {
            dist/* toast */.oR.error(constants/* COMMON_ERROR_TEXT */.N4C);
        } finally{
            setReason('');
            hideLoadingOverlay();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.lG, {
        open: open,
        onOpenChange: handleToggle,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogContent */.Cf, {
            className: (0,utils.cn)((FeedbackDetails_module_default()).root, isKeyboardOpen ? 'top-[unset] bottom-[200px]' : ''),
            onOpenAutoFocus: lib/* isIOS */.un ? (e)=>e.preventDefault() : undefined,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogHeader */.c7, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogTitle */.L3, {
                        children: "Tell us why?"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextareaSimple/* TextareaSimple */.p, {
                    value: reason,
                    onChange: setReason,
                    minRows: 4,
                    maxRows: 4
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogFooter */.Es, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                        onClick: handleDetailsSubmit,
                        children: "Submit"
                    })
                })
            ]
        })
    });
};

;// ./src/components/thread/Feedback/components/FeedbackDetails/index.ts


;// ./src/components/thread/Feedback/components/FeedbackRating/FeedbackRating.tsx
/* __next_internal_client_entry_do_not_use__ FeedbackRating auto */ 










const FEEDBACK_MAP = [
    {
        rating: 1,
        title: 'Incorrect',
        IconComponent: SmileyAngry_es/* SmileyAngryIcon */.s
    },
    {
        rating: 2,
        title: 'Poor',
        IconComponent: SmileySad_es/* SmileySadIcon */.p
    },
    {
        rating: 3,
        title: 'Fair',
        IconComponent: SmileyMeh_es/* SmileyMehIcon */.h
    },
    {
        rating: 4,
        title: 'Good',
        IconComponent: Smiley_es/* SmileyIcon */.P
    },
    {
        rating: 5,
        title: 'Superb',
        IconComponent: SmileyWink_es/* SmileyWinkIcon */.W
    }
];
const FeedbackRating_SUBMITTED_TEXT = 'Thank you for the feedback';
const CANCELLED_TEXT = 'Feedback cancelled';
const FeedbackRating = (param)=>{
    let { groupAgentRun } = param;
    var _groupAgentRun_feedback_data_rating, _groupAgentRun_feedback_data, _groupAgentRun_feedback;
    const { isVisible, onVisibilitySet, onVisibilityToggle } = (0,hooks/* useVisible */.MI)();
    const [currentRating, setCurrentRating] = (0,react.useState)((groupAgentRun === null || groupAgentRun === void 0 ? void 0 : (_groupAgentRun_feedback = groupAgentRun.feedback) === null || _groupAgentRun_feedback === void 0 ? void 0 : (_groupAgentRun_feedback_data = _groupAgentRun_feedback.data) === null || _groupAgentRun_feedback_data === void 0 ? void 0 : (_groupAgentRun_feedback_data_rating = _groupAgentRun_feedback_data.rating) === null || _groupAgentRun_feedback_data_rating === void 0 ? void 0 : _groupAgentRun_feedback_data_rating.rating) || null);
    const [loading, setLoading] = (0,react.useState)(false);
    const handleRatingClick = async (rating)=>{
        const isCancelling = currentRating === rating;
        const agent_run_id = groupAgentRun === null || groupAgentRun === void 0 ? void 0 : groupAgentRun.id;
        setLoading(true);
        try {
            if (isCancelling) {
                setCurrentRating(null);
                const response = await (0,api/* deleteAgentRunFeedback */.xP)(agent_run_id);
                dist/* toast */.oR.success(CANCELLED_TEXT);
            } else {
                setCurrentRating(rating);
                await (0,api/* createAgentRunFeedback */.st)({
                    rating: {
                        rating
                    },
                    agent_run_id
                });
                dist/* toast */.oR.success(FeedbackRating_SUBMITTED_TEXT);
            }
        } catch (error) {
            setCurrentRating(currentRating);
            dist/* toast */.oR.error(constants/* COMMON_ERROR_TEXT */.N4C);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (FeedbackRating_module_default()).root,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (FeedbackRating_module_default()).content,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: (FeedbackRating_module_default()).title,
                                children: "Rate the response"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                                onClick: onVisibilitySet,
                                disabled: currentRating === null || loading,
                                color: "link",
                                "data-e2e": "task-rating-text-button",
                                children: "Tell us why?"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (FeedbackRating_module_default()).ratingWrapper,
                        children: FEEDBACK_MAP.map((param)=>{
                            let { rating, IconComponent, title } = param;
                            const isSelected = currentRating === rating;
                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
                                className: classnames_default()((FeedbackRating_module_default()).ratingButton, {
                                    [(FeedbackRating_module_default()).selected]: isSelected
                                }),
                                color: "transparent",
                                onClick: ()=>handleRatingClick(rating),
                                "data-e2e": "task-rating-".concat(rating),
                                disabled: loading,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconComponent, {
                                        weight: isSelected ? 'fill' : 'regular',
                                        size: constants/* SVG_SIZE_L */.uUe
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (FeedbackRating_module_default()).iconTitle,
                                        children: title
                                    })
                                ]
                            }, rating);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FeedbackDetails, {
                groupAgentRunId: groupAgentRun === null || groupAgentRun === void 0 ? void 0 : groupAgentRun.id,
                currentRating: currentRating,
                open: isVisible,
                onToggle: onVisibilityToggle
            })
        ]
    });
};

;// ./src/components/thread/Feedback/components/FeedbackRating/index.tsx


;// ./src/components/thread/Feedback/index.tsx




/***/ }),

/***/ 73891:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"footer":"RenameDialog_footer__CuB2i","inputValue":"RenameDialog_inputValue__Huq6q","nj-animate-horizontal-appearance-ltr-enter":"RenameDialog_nj-animate-horizontal-appearance-ltr-enter__hhKE1","nj-animate-horizontal-appearance-ltr-enter-active":"RenameDialog_nj-animate-horizontal-appearance-ltr-enter-active__Af_DQ","nj-animate-horizontal-appearance-ltr-exit":"RenameDialog_nj-animate-horizontal-appearance-ltr-exit__GbsbR","nj-animate-horizontal-appearance-ltr-exit-active":"RenameDialog_nj-animate-horizontal-appearance-ltr-exit-active__nLpRb","nj-animate-left-panel-width-reduce-enter":"RenameDialog_nj-animate-left-panel-width-reduce-enter__gBBX7","nj-animate-left-panel-width-reduce-enter-active":"RenameDialog_nj-animate-left-panel-width-reduce-enter-active__zZ8XM","nj-animate-left-panel-width-reduce-exit":"RenameDialog_nj-animate-left-panel-width-reduce-exit__wCVAL","nj-animate-left-panel-width-reduce-exit-active":"RenameDialog_nj-animate-left-panel-width-reduce-exit-active__G6SmX","nj-animate-vertical-appearance-appear":"RenameDialog_nj-animate-vertical-appearance-appear___WQrx","nj-animate-vertical-appearance-appear-active":"RenameDialog_nj-animate-vertical-appearance-appear-active__jeQf6","nj-animate-vertical-appearance-enter":"RenameDialog_nj-animate-vertical-appearance-enter__F6mX0","nj-animate-vertical-appearance-enter-active":"RenameDialog_nj-animate-vertical-appearance-enter-active__Rtsea","nj-animate-vertical-appearance-exit":"RenameDialog_nj-animate-vertical-appearance-exit__kx9U0","nj-animate-vertical-appearance-exit-active":"RenameDialog_nj-animate-vertical-appearance-exit-active__gU_TN","infinite-spinner":"RenameDialog_infinite-spinner__u0Ce1","fadeIn":"RenameDialog_fadeIn__uEWMG","blinking":"RenameDialog_blinking__L3OzQ","movingRight":"RenameDialog_movingRight__SM4on"};

/***/ }),

/***/ 76178:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"HTMLPreviewError_root__6ToBz","center":"HTMLPreviewError_center__KnI8a","iconWrap":"HTMLPreviewError_iconWrap__wrpMJ","title":"HTMLPreviewError_title__IQqf3","nj-animate-horizontal-appearance-ltr-enter":"HTMLPreviewError_nj-animate-horizontal-appearance-ltr-enter__GqIcM","nj-animate-horizontal-appearance-ltr-enter-active":"HTMLPreviewError_nj-animate-horizontal-appearance-ltr-enter-active__hxXhV","nj-animate-horizontal-appearance-ltr-exit":"HTMLPreviewError_nj-animate-horizontal-appearance-ltr-exit__q_nfx","nj-animate-horizontal-appearance-ltr-exit-active":"HTMLPreviewError_nj-animate-horizontal-appearance-ltr-exit-active__FKqLe","nj-animate-left-panel-width-reduce-enter":"HTMLPreviewError_nj-animate-left-panel-width-reduce-enter__Sz7xI","nj-animate-left-panel-width-reduce-enter-active":"HTMLPreviewError_nj-animate-left-panel-width-reduce-enter-active__bKsyR","nj-animate-left-panel-width-reduce-exit":"HTMLPreviewError_nj-animate-left-panel-width-reduce-exit__LIjIW","nj-animate-left-panel-width-reduce-exit-active":"HTMLPreviewError_nj-animate-left-panel-width-reduce-exit-active__hQd4b","nj-animate-vertical-appearance-appear":"HTMLPreviewError_nj-animate-vertical-appearance-appear___adc4","nj-animate-vertical-appearance-appear-active":"HTMLPreviewError_nj-animate-vertical-appearance-appear-active__RlSUo","nj-animate-vertical-appearance-enter":"HTMLPreviewError_nj-animate-vertical-appearance-enter__6nR_9","nj-animate-vertical-appearance-enter-active":"HTMLPreviewError_nj-animate-vertical-appearance-enter-active__a6w_H","nj-animate-vertical-appearance-exit":"HTMLPreviewError_nj-animate-vertical-appearance-exit__0nTPA","nj-animate-vertical-appearance-exit-active":"HTMLPreviewError_nj-animate-vertical-appearance-exit-active__vmuP8","previewArea":"HTMLPreviewError_previewArea__VD102","icon":"HTMLPreviewError_icon__e1H6e","infinite-spinner":"HTMLPreviewError_infinite-spinner__W5tIl","fadeIn":"HTMLPreviewError_fadeIn__68CrF","blinking":"HTMLPreviewError_blinking__ZQQhy","movingRight":"HTMLPreviewError_movingRight__wOCut"};

/***/ }),

/***/ 77586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vx: () => (/* reexport safe */ _MessageComponent__WEBPACK_IMPORTED_MODULE_0__.Vx)
/* harmony export */ });
/* harmony import */ var _MessageComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47500);



/***/ }),

/***/ 82019:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"container":"TranscribeToolView_container__7qh4n","toolView":"TranscribeToolView_toolView__vUlLA","titleSection":"TranscribeToolView_titleSection__OYnBr","playLink":"TranscribeToolView_playLink__Xp2Iu","controls":"TranscribeToolView_controls__6lhgN","viewToggle":"TranscribeToolView_viewToggle__FBI5V","metadata":"TranscribeToolView_metadata__G5Rj2","metadataItem":"TranscribeToolView_metadataItem__os_IJ","header":"TranscribeToolView_header__KXLu5","title":"TranscribeToolView_title__vxJNC","rawText":"TranscribeToolView_rawText__9ey3b","nj-animate-horizontal-appearance-ltr-enter":"TranscribeToolView_nj-animate-horizontal-appearance-ltr-enter__wWy8B","nj-animate-horizontal-appearance-ltr-enter-active":"TranscribeToolView_nj-animate-horizontal-appearance-ltr-enter-active__NBUad","nj-animate-horizontal-appearance-ltr-exit":"TranscribeToolView_nj-animate-horizontal-appearance-ltr-exit__7hrnc","nj-animate-horizontal-appearance-ltr-exit-active":"TranscribeToolView_nj-animate-horizontal-appearance-ltr-exit-active__gS_dJ","nj-animate-left-panel-width-reduce-enter":"TranscribeToolView_nj-animate-left-panel-width-reduce-enter__1L_io","nj-animate-left-panel-width-reduce-enter-active":"TranscribeToolView_nj-animate-left-panel-width-reduce-enter-active__ROF29","nj-animate-left-panel-width-reduce-exit":"TranscribeToolView_nj-animate-left-panel-width-reduce-exit__VE3u0","nj-animate-left-panel-width-reduce-exit-active":"TranscribeToolView_nj-animate-left-panel-width-reduce-exit-active__18p_1","nj-animate-vertical-appearance-appear":"TranscribeToolView_nj-animate-vertical-appearance-appear__hD1N7","nj-animate-vertical-appearance-appear-active":"TranscribeToolView_nj-animate-vertical-appearance-appear-active__fqnKq","nj-animate-vertical-appearance-enter":"TranscribeToolView_nj-animate-vertical-appearance-enter__JIAk6","nj-animate-vertical-appearance-enter-active":"TranscribeToolView_nj-animate-vertical-appearance-enter-active__UnOE_","nj-animate-vertical-appearance-exit":"TranscribeToolView_nj-animate-vertical-appearance-exit__lcpPE","nj-animate-vertical-appearance-exit-active":"TranscribeToolView_nj-animate-vertical-appearance-exit-active__l07D9","content":"TranscribeToolView_content__kHvjH","playIcon":"TranscribeToolView_playIcon__WQTxd","videoInfo":"TranscribeToolView_videoInfo__hn_C1","metadataIcon":"TranscribeToolView_metadataIcon__qQd3_","metadataValue":"TranscribeToolView_metadataValue__0Btbi","thumbnail":"TranscribeToolView_thumbnail__ouo4g","formattedView":"TranscribeToolView_formattedView__SSJzM","rawView":"TranscribeToolView_rawView__sif26","infinite-spinner":"TranscribeToolView_infinite-spinner__Vy7Z1","fadeIn":"TranscribeToolView_fadeIn__Y8gIF","blinking":"TranscribeToolView_blinking__vtGE5","movingRight":"TranscribeToolView_movingRight__GrkTY"};

/***/ }),

/***/ 83323:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"nj-animate-horizontal-appearance-ltr-enter":"FileRendererToolbar_nj-animate-horizontal-appearance-ltr-enter__yyMVG","nj-animate-horizontal-appearance-ltr-enter-active":"FileRendererToolbar_nj-animate-horizontal-appearance-ltr-enter-active__7bbqq","nj-animate-horizontal-appearance-ltr-exit":"FileRendererToolbar_nj-animate-horizontal-appearance-ltr-exit__T4mNb","nj-animate-horizontal-appearance-ltr-exit-active":"FileRendererToolbar_nj-animate-horizontal-appearance-ltr-exit-active__LCeMP","nj-animate-left-panel-width-reduce-enter":"FileRendererToolbar_nj-animate-left-panel-width-reduce-enter__rM3bx","nj-animate-left-panel-width-reduce-enter-active":"FileRendererToolbar_nj-animate-left-panel-width-reduce-enter-active__Xz9th","nj-animate-left-panel-width-reduce-exit":"FileRendererToolbar_nj-animate-left-panel-width-reduce-exit__QS8ku","nj-animate-left-panel-width-reduce-exit-active":"FileRendererToolbar_nj-animate-left-panel-width-reduce-exit-active__Z8t_s","nj-animate-vertical-appearance-appear":"FileRendererToolbar_nj-animate-vertical-appearance-appear__PUX9t","nj-animate-vertical-appearance-appear-active":"FileRendererToolbar_nj-animate-vertical-appearance-appear-active__UDbEA","nj-animate-vertical-appearance-enter":"FileRendererToolbar_nj-animate-vertical-appearance-enter__0f11d","nj-animate-vertical-appearance-enter-active":"FileRendererToolbar_nj-animate-vertical-appearance-enter-active__NlHMJ","nj-animate-vertical-appearance-exit":"FileRendererToolbar_nj-animate-vertical-appearance-exit__5AsXX","nj-animate-vertical-appearance-exit-active":"FileRendererToolbar_nj-animate-vertical-appearance-exit-active__8oDn_","toolbar":"FileRendererToolbar_toolbar__DHecT","hasBorderBottom":"FileRendererToolbar_hasBorderBottom__eWKsa","inner":"FileRendererToolbar_inner__hUJpm","modeGroup":"FileRendererToolbar_modeGroup__4HbKp","modeButton":"FileRendererToolbar_modeButton__oJcrH","infinite-spinner":"FileRendererToolbar_infinite-spinner__1_VpR","fadeIn":"FileRendererToolbar_fadeIn__GKDbd","blinking":"FileRendererToolbar_blinking__wZMcf","movingRight":"FileRendererToolbar_movingRight__eRCD_"};

/***/ }),

/***/ 83686:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 83989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* reexport */ AddScheduleTaskModal)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button = __webpack_require__(62717);
// EXTERNAL MODULE: ./src/components/ui/dialog.tsx
var dialog = __webpack_require__(51834);
// EXTERNAL MODULE: ./src/components/thread/AddScheduleTaskModal/AddScheduleTaskModal.module.scss
var AddScheduleTaskModal_module = __webpack_require__(33728);
var AddScheduleTaskModal_module_default = /*#__PURE__*/__webpack_require__.n(AddScheduleTaskModal_module);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/X.es.js
var X_es = __webpack_require__(10127);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/Lock.es.js + 1 modules
var Lock_es = __webpack_require__(1960);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./src/components/ui/InputSimple/index.tsx + 1 modules
var InputSimple = __webpack_require__(44974);
// EXTERNAL MODULE: ./src/components/thread/AddScheduleTaskModal/ScheduleSelector/index.ts + 10 modules
var ScheduleSelector = __webpack_require__(33291);
// EXTERNAL MODULE: ./node_modules/sonner/dist/index.mjs
var dist = __webpack_require__(18720);
// EXTERNAL MODULE: ./node_modules/@datadog/browser-logs/esm/entries/main.js + 109 modules
var main = __webpack_require__(73262);
// EXTERNAL MODULE: ./src/hooks/index.ts + 39 modules
var hooks = __webpack_require__(71203);
// EXTERNAL MODULE: ./src/hooks/scheduledTasks/index.ts + 3 modules
var scheduledTasks = __webpack_require__(29632);
// EXTERNAL MODULE: ./src/components/thread/AddScheduleTaskModal/BannerOnDemandCredit/index.ts + 1 modules
var BannerOnDemandCredit = __webpack_require__(20093);
// EXTERNAL MODULE: ./src/types/schedules.ts
var schedules = __webpack_require__(43956);
// EXTERNAL MODULE: ./src/utils/schedules.ts
var utils_schedules = __webpack_require__(84456);
// EXTERNAL MODULE: ./src/constants/schedules.ts
var constants_schedules = __webpack_require__(91296);
// EXTERNAL MODULE: ./src/hooks/userHooks/useUserSettings.ts
var useUserSettings = __webpack_require__(5072);
// EXTERNAL MODULE: ./src/constants/settings.ts
var settings = __webpack_require__(29715);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/EnvelopeSimple.es.js
var EnvelopeSimple_es = __webpack_require__(70235);
// EXTERNAL MODULE: ./src/components/ui/SwitchSimple/index.ts + 1 modules
var SwitchSimple = __webpack_require__(84885);
;// ./src/components/thread/AddScheduleTaskModal/AddScheduleTaskModal.tsx
/* __next_internal_client_entry_do_not_use__ AddScheduleTaskModal auto */ 




















const AddScheduleTaskModal = (param)=>{
    let { isOpen, onClose, threadId, threadName } = param;
    var _creditAccountInfo_reload_config;
    const { setting: timezoneSetting } = (0,useUserSettings/* useUserSettings */.Q)(settings/* TimezoneSettingKeys */.gG.SELECTED_TIMEZONE);
    const { createScheduledTask } = (0,scheduledTasks/* useScheduleList */.H)();
    const { creditAccountInfo } = (0,hooks/* useCreditsAccountWithAutoPayInfo */.oT)();
    const isOnDemandEnable = creditAccountInfo === null || creditAccountInfo === void 0 ? void 0 : (_creditAccountInfo_reload_config = creditAccountInfo.reload_config) === null || _creditAccountInfo_reload_config === void 0 ? void 0 : _creditAccountInfo_reload_config.auto_reload_enabled;
    const [name, setName] = (0,react.useState)('');
    const [selectedScheduleType, setSelectedScheduleType] = (0,react.useState)(schedules/* ScheduleType */.uS.Once);
    const [selectedDayOrMonth, setSelectedDayOrMonth] = (0,react.useState)(1);
    const [selectedScheduleDate, setSelectedScheduleDate] = (0,react.useState)(new Date());
    const [selectedTime, setSelectedTime] = (0,react.useState)(0);
    const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
    const [createScheduleAt, setCreateScheduleAt] = (0,react.useState)(null);
    const [notifyByEmail, setNotifyByEmail] = (0,react.useState)(false);
    const handleSubmit = async ()=>{
        setIsSubmitting(true);
        const request = {
            target_type: 'THREAD',
            target_id: threadId,
            title: name,
            schedule_config: {
                ...(0,utils_schedules/* getScheduleBodyData */.a9)(selectedScheduleType, selectedScheduleDate, selectedDayOrMonth, selectedTime),
                timezone: timezoneSetting.value || 'UTC',
                notifications: [
                    {
                        type: schedules/* ScheduleNotificationConfigType */.Fs.Email,
                        enabled: notifyByEmail
                    }
                ]
            },
            data: {
                execution_type: 'thread_agent_run',
                agent_execution_mode: 'complex',
                prompt: 'use the tool to get the current time, and Re-run the previous task'
            }
        };
        try {
            await createScheduledTask(request);
            dist/* toast */.oR.success('Scheduled task set successfully');
        } catch (error) {
            main/* datadogLogs */.yf.logger.error('Failed to create scheduled task', {}, error);
            dist/* toast */.oR.error('Failed to create scheduled task');
        } finally{
            setIsSubmitting(false);
            onClose();
        }
    };
    (0,react.useEffect)(()=>{
        var _getScheduleOptions;
        const options = (_getScheduleOptions = (0,constants_schedules/* getScheduleOptions */.MR)(selectedScheduleType)) !== null && _getScheduleOptions !== void 0 ? _getScheduleOptions : [];
        var _getScheduleDayMonthOptions;
        const optionsDayMonths = (_getScheduleDayMonthOptions = (0,constants_schedules/* getScheduleDayMonthOptions */.u0)(selectedScheduleType)) !== null && _getScheduleDayMonthOptions !== void 0 ? _getScheduleDayMonthOptions : [];
        setSelectedTime(options[0].value);
        setSelectedDayOrMonth(optionsDayMonths[0].value);
    }, [
        selectedScheduleType
    ]);
    (0,react.useEffect)(()=>{
        if (!isOpen) {
            return;
        }
        setName(threadName);
        setCreateScheduleAt(new Date());
    }, [
        isOpen,
        threadName
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.lG, {
        open: isOpen,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogContent */.Cf, {
            className: (AddScheduleTaskModal_module_default()).root,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogTitle */.L3, {
                    className: (AddScheduleTaskModal_module_default()).header,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: (AddScheduleTaskModal_module_default()).title,
                            children: "Add scheduled task"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (AddScheduleTaskModal_module_default()).closeButton,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(X_es/* XIcon */.u, {
                                size: constants/* SVG_SIZE_M */.ng3,
                                onClick: onClose
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(BannerOnDemandCredit/* BannerOnDemandCredit */.q, {
                    isOnDemandEnable: isOnDemandEnable
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (AddScheduleTaskModal_module_default()).content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (AddScheduleTaskModal_module_default()).taskSection,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: (AddScheduleTaskModal_module_default()).taskLabel,
                                    children: "Task name"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(InputSimple/* InputSimple */.$, {
                                    value: name,
                                    onChange: (e)=>setName(e.target.value),
                                    maxLength: 50,
                                    className: (AddScheduleTaskModal_module_default()).inputBox
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (AddScheduleTaskModal_module_default()).taskSection,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (AddScheduleTaskModal_module_default()).taskSubSection,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: (AddScheduleTaskModal_module_default()).taskLabel,
                                            children: "Task"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: (AddScheduleTaskModal_module_default()).taskLabelDescription,
                                            children: "Ninja will use the context from the initial thread"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (AddScheduleTaskModal_module_default()).inputBox,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: (AddScheduleTaskModal_module_default()).threadInfo,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "Based on Thread "
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                                                    children: threadName
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        " on ",
                                                        createScheduleAt === null || createScheduleAt === void 0 ? void 0 : createScheduleAt.toLocaleDateString()
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Lock_es/* LockIcon */.X, {
                                            size: constants/* SVG_SIZE_S */.lgH
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (AddScheduleTaskModal_module_default()).taskSection,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (AddScheduleTaskModal_module_default()).taskSubSection,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: (AddScheduleTaskModal_module_default()).taskLabel,
                                            children: "Schedule"
                                        }),
                                        timezoneSetting && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: (AddScheduleTaskModal_module_default()).taskLabelDescription,
                                            children: [
                                                "Timezone: ",
                                                timezoneSetting === null || timezoneSetting === void 0 ? void 0 : timezoneSetting.value
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ScheduleSelector/* ScheduleSelector */.L, {
                                    selectedScheduleType: selectedScheduleType,
                                    setSelectedScheduleType: setSelectedScheduleType,
                                    selectedDayOrMonth: selectedDayOrMonth,
                                    setSelectedDayOrMonth: setSelectedDayOrMonth,
                                    selectedScheduleDate: selectedScheduleDate,
                                    setSelectedScheduleDate: setSelectedScheduleDate,
                                    selectedTime: selectedTime,
                                    setSelectedTime: setSelectedTime
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (AddScheduleTaskModal_module_default()).taskSection,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: (AddScheduleTaskModal_module_default()).taskLabel,
                                    children: "Notify me when finished"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (AddScheduleTaskModal_module_default()).inputContainer,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(EnvelopeSimple_es/* EnvelopeSimpleIcon */.s, {
                                            size: constants/* SVG_SIZE_M */.ng3
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "Email"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(SwitchSimple/* SwitchSimple */.v, {
                                            isChecked: notifyByEmail,
                                            onChange: ()=>setNotifyByEmail((prev)=>!prev)
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {
                            className: "divider"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogFooter */.Es, {
                    className: (AddScheduleTaskModal_module_default()).footer,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                            color: "secondary-outline",
                            onClick: onClose,
                            disabled: isSubmitting,
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                            color: "highlight",
                            onClick: (e)=>{
                                e.preventDefault();
                                handleSubmit();
                            },
                            disabled: !isOnDemandEnable || isSubmitting || !name.trim(),
                            children: "Submit"
                        })
                    ]
                })
            ]
        })
    });
};

;// ./src/components/thread/AddScheduleTaskModal/index.ts



/***/ }),

/***/ 84319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SI: () => (/* binding */ detectAllSiteUrls),
/* harmony export */   ht: () => (/* binding */ detectSiteUrls)
/* harmony export */ });
/* unused harmony exports constructHtmlPreviewUrl, normalizeUrl */
/* harmony import */ var _lib_envs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68276);

/**
 * Constructs a preview URL for HTML files in the sandbox environment.
 * Properly handles URL encoding of file paths by encoding each path segment individually.
 *
 * @param sandboxUrl - The base URL of the sandbox
 * @param filePath - The path to the HTML file (can include /workspace/ prefix)
 * @returns The properly encoded preview URL, or undefined if inputs are invalid
 */ function constructHtmlPreviewUrl(sandboxUrl, filePath) {
    if (!sandboxUrl || !filePath) {
        return undefined;
    }
    // Remove /workspace/ prefix if present
    const processedPath = filePath.replace(/^\/workspace\//, '');
    // Split the path into segments and encode each segment individually
    const pathSegments = processedPath.split('/').map((segment)=>encodeURIComponent(segment));
    // Join the segments back together with forward slashes
    const encodedPath = pathSegments.join('/');
    return "".concat(sandboxUrl, "/").concat(encodedPath);
}
/**
 * Extracts the base domain (hostname:port) from NEXT_PUBLIC_URL or window.location
 */ function getBaseDomain() {
    if (false) {}
    const baseUrl = _lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_URL */ ._T || window.location.origin;
    try {
        const url = new URL(baseUrl);
        return url.port ? "".concat(url.hostname, ":").concat(url.port) : url.hostname;
    } catch (e) {
        const urlMatch = baseUrl.match(/https?:\/\/([^/]+)/);
        return urlMatch ? urlMatch[1] : window.location.host;
    }
}
/**
 * Escapes special regex characters in domain (dots and colons)
 */ function escapeDomainForRegex(domain) {
    return domain.replace(/[.:]/g, (char)=>char === '.' ? '\\.' : '\\:');
}
/**
 * Normalizes URL by adding protocol if missing
 */ function normalizeUrl(protocol, host) {
    return protocol ? "".concat(protocol).concat(host) : "https://".concat(host);
}
/**
 * Detects preview and production URLs in text.
 *
 * Preview pattern: [\w\-]+.app.{domain}
 * Production pattern: sites.{any-domain}/[\w\-]+/[\w\-]+/index.html
 *
 * @param text - Text to search for URLs
 * @returns Detected URL info or null if no match found
 */ function detectSiteUrls(text) {
    const baseDomain = getBaseDomain();
    if (!baseDomain) {
        return null;
    }
    const escapedDomain = escapeDomainForRegex(baseDomain);
    // Only matches preview URLs for the current app domain
    const previewPattern = new RegExp('(https?://)?([\\w\\-]+\\.(app|site)\\.' + escapedDomain + ')', 'gi');
    // Production URL pattern: sites.{any-domain}/[\w\-]+/[\w\-]+/index.html
    // Matches production URLs on any domain (sites.super.betamyninja.ai, etc.)
    // Both path segments can contain hyphens (e.g., UUIDs)
    const productionPattern = new RegExp('(https?://)?(sites\\.[\\w\\.\\-]+/[\\w\\-]+/[\\w\\-]+/index\\.html)', 'gi');
    // Check for preview URL first
    previewPattern.lastIndex = 0;
    const previewMatch = previewPattern.exec(text);
    if (previewMatch) {
        return {
            url: normalizeUrl(previewMatch[1], previewMatch[2]),
            isPreview: true,
            fullMatch: previewMatch[0]
        };
    }
    // Reset regex lastIndex before checking production
    productionPattern.lastIndex = 0;
    // Check for production URL
    const productionMatch = productionPattern.exec(text);
    if (productionMatch) {
        return {
            url: normalizeUrl(productionMatch[1], productionMatch[2]),
            isPreview: false,
            fullMatch: productionMatch[0]
        };
    }
    return null;
}
/**
 * Detects all preview and production URLs in text.
 *
 * @param text - Text to search for URLs
 * @returns Object containing sets of private (preview) and public (production) URLs
 */ function detectAllSiteUrls(text) {
    const privateUrls = new Set();
    const publicUrls = new Set();
    const baseDomain = getBaseDomain();
    if (!baseDomain) {
        return {
            privateUrls,
            publicUrls
        };
    }
    const escapedDomain = escapeDomainForRegex(baseDomain);
    // Preview URL pattern (for private URLs)
    // Use escapedDomain to match the actual base domain (including port if present)
    const previewPattern = new RegExp('(https?://)?([\\w\\-]+\\.(app|site)\\.' + escapedDomain + ')', 'gi');
    // Production URL pattern - match all occurrences
    const productionPattern = new RegExp('(https?://)?(sites\\.[\\w\\.\\-]+/[\\w\\-]+/[\\w\\-]+/index\\.html)', 'gi');
    // Find all production URLs
    productionPattern.lastIndex = 0;
    let match;
    while((match = productionPattern.exec(text)) !== null){
        const productionUrl = normalizeUrl(match[1], match[2]);
        publicUrls.add(productionUrl);
        // Prevent infinite loop if regex doesn't advance
        if (match.index === productionPattern.lastIndex) {
            productionPattern.lastIndex++;
        }
    }
    // Find all preview URLs
    previewPattern.lastIndex = 0;
    while((match = previewPattern.exec(text)) !== null){
        const previewUrl = normalizeUrl(match[1], match[2]);
        privateUrls.add(previewUrl);
        if (match.index === previewPattern.lastIndex) {
            previewPattern.lastIndex++;
        }
    }
    return {
        privateUrls,
        publicUrls
    };
}


/***/ }),

/***/ 84414:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"nj-animate-horizontal-appearance-ltr-enter":"ResizeHandle_nj-animate-horizontal-appearance-ltr-enter__t6NEY","nj-animate-horizontal-appearance-ltr-enter-active":"ResizeHandle_nj-animate-horizontal-appearance-ltr-enter-active__Hx4_1","nj-animate-horizontal-appearance-ltr-exit":"ResizeHandle_nj-animate-horizontal-appearance-ltr-exit__3UY4J","nj-animate-horizontal-appearance-ltr-exit-active":"ResizeHandle_nj-animate-horizontal-appearance-ltr-exit-active__JrJMo","nj-animate-left-panel-width-reduce-enter":"ResizeHandle_nj-animate-left-panel-width-reduce-enter__r2NA9","nj-animate-left-panel-width-reduce-enter-active":"ResizeHandle_nj-animate-left-panel-width-reduce-enter-active__hKSIy","nj-animate-left-panel-width-reduce-exit":"ResizeHandle_nj-animate-left-panel-width-reduce-exit__N9LQo","nj-animate-left-panel-width-reduce-exit-active":"ResizeHandle_nj-animate-left-panel-width-reduce-exit-active__mDw_e","nj-animate-vertical-appearance-appear":"ResizeHandle_nj-animate-vertical-appearance-appear__J5qMa","nj-animate-vertical-appearance-appear-active":"ResizeHandle_nj-animate-vertical-appearance-appear-active__83LIH","nj-animate-vertical-appearance-enter":"ResizeHandle_nj-animate-vertical-appearance-enter__sSuh0","nj-animate-vertical-appearance-enter-active":"ResizeHandle_nj-animate-vertical-appearance-enter-active__iR2ss","nj-animate-vertical-appearance-exit":"ResizeHandle_nj-animate-vertical-appearance-exit__40cSK","nj-animate-vertical-appearance-exit-active":"ResizeHandle_nj-animate-vertical-appearance-exit-active__058Zl","resizeHandle":"ResizeHandle_resizeHandle__WqIVk","dragButton":"ResizeHandle_dragButton__soRVU","dragging":"ResizeHandle_dragging__f0W9V","hitArea":"ResizeHandle_hitArea__cEZVM","dragGradient":"ResizeHandle_dragGradient__VwGs4","infinite-spinner":"ResizeHandle_infinite-spinner__CYDlM","fadeIn":"ResizeHandle_fadeIn__T_tHR","blinking":"ResizeHandle_blinking__PXQEW","movingRight":"ResizeHandle_movingRight__1H8jl"};

/***/ }),

/***/ 84831:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"loader":"ExcelRenderer_loader__DG7ZS","nj-animate-horizontal-appearance-ltr-enter":"ExcelRenderer_nj-animate-horizontal-appearance-ltr-enter__FKlvh","nj-animate-horizontal-appearance-ltr-enter-active":"ExcelRenderer_nj-animate-horizontal-appearance-ltr-enter-active__HjGxp","nj-animate-horizontal-appearance-ltr-exit":"ExcelRenderer_nj-animate-horizontal-appearance-ltr-exit__D3Jnp","nj-animate-horizontal-appearance-ltr-exit-active":"ExcelRenderer_nj-animate-horizontal-appearance-ltr-exit-active__tr7qI","nj-animate-left-panel-width-reduce-enter":"ExcelRenderer_nj-animate-left-panel-width-reduce-enter__LqKMj","nj-animate-left-panel-width-reduce-enter-active":"ExcelRenderer_nj-animate-left-panel-width-reduce-enter-active__jcVL9","nj-animate-left-panel-width-reduce-exit":"ExcelRenderer_nj-animate-left-panel-width-reduce-exit__YNbOt","nj-animate-left-panel-width-reduce-exit-active":"ExcelRenderer_nj-animate-left-panel-width-reduce-exit-active__vtMmv","nj-animate-vertical-appearance-appear":"ExcelRenderer_nj-animate-vertical-appearance-appear__PEoeD","nj-animate-vertical-appearance-appear-active":"ExcelRenderer_nj-animate-vertical-appearance-appear-active__SR7GE","nj-animate-vertical-appearance-enter":"ExcelRenderer_nj-animate-vertical-appearance-enter__MZEl2","nj-animate-vertical-appearance-enter-active":"ExcelRenderer_nj-animate-vertical-appearance-enter-active___4K7s","nj-animate-vertical-appearance-exit":"ExcelRenderer_nj-animate-vertical-appearance-exit__Sjf_6","nj-animate-vertical-appearance-exit-active":"ExcelRenderer_nj-animate-vertical-appearance-exit-active__F3mht","root":"ExcelRenderer_root__f3XR_","spinner":"ExcelRenderer_spinner__9ulmC","infinite-spinner":"ExcelRenderer_infinite-spinner__Hg71N","error":"ExcelRenderer_error__9KQOl","fadeIn":"ExcelRenderer_fadeIn__pD_Uf","blinking":"ExcelRenderer_blinking__yEGLP","movingRight":"ExcelRenderer_movingRight__53ihH"};

/***/ }),

/***/ 84832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ NinjaStarIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47615);


const NinjaStarIcon = (param)=>{
    let { size = _constants__WEBPACK_IMPORTED_MODULE_1__/* .SVG_SIZE_M */ .ng3, ...svgProps } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
        ...svgProps,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 20 20",
        fill: "none",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.59207 2.92779C3.42394 2.7129 3.65272 2.41363 3.90115 2.5235L13.0014 6.55764C13.0786 6.59186 13.1472 6.63825 13.2072 6.69241L17.0722 3.66313C17.2871 3.49486 17.5865 3.72372 17.4765 3.97221L13.4423 13.0725L13.4401 13.0761L16.4123 17.0781C16.5727 17.2943 16.3438 17.5851 16.0988 17.4765L7.00952 13.4467L2.92191 16.4833C2.70569 16.6436 2.41498 16.4148 2.52348 16.1699L6.56568 7.05202C6.59591 6.98381 6.63476 6.92155 6.68067 6.86672L3.59207 2.92779ZM9.99998 7.75001C8.75738 7.75002 7.75004 8.7574 7.74999 9.99999C7.74999 11.2426 8.75735 12.25 9.99998 12.25C11.2426 12.25 12.25 11.2426 12.25 9.99999C12.2499 8.7574 11.2426 7.75001 9.99998 7.75001Z",
            fill: "currentColor"
        })
    });
};


/***/ }),

/***/ 85035:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"SyncfusionExcelRenderer_root__0B34R","loader":"SyncfusionExcelRenderer_loader__OBU99","nj-animate-horizontal-appearance-ltr-enter":"SyncfusionExcelRenderer_nj-animate-horizontal-appearance-ltr-enter__akqCc","nj-animate-horizontal-appearance-ltr-enter-active":"SyncfusionExcelRenderer_nj-animate-horizontal-appearance-ltr-enter-active__Pe1Mv","nj-animate-horizontal-appearance-ltr-exit":"SyncfusionExcelRenderer_nj-animate-horizontal-appearance-ltr-exit__OSxDe","nj-animate-horizontal-appearance-ltr-exit-active":"SyncfusionExcelRenderer_nj-animate-horizontal-appearance-ltr-exit-active__P3oBo","nj-animate-left-panel-width-reduce-enter":"SyncfusionExcelRenderer_nj-animate-left-panel-width-reduce-enter__Ei1g1","nj-animate-left-panel-width-reduce-enter-active":"SyncfusionExcelRenderer_nj-animate-left-panel-width-reduce-enter-active__5crh4","nj-animate-left-panel-width-reduce-exit":"SyncfusionExcelRenderer_nj-animate-left-panel-width-reduce-exit__vv_Z5","nj-animate-left-panel-width-reduce-exit-active":"SyncfusionExcelRenderer_nj-animate-left-panel-width-reduce-exit-active__IeD_w","nj-animate-vertical-appearance-appear":"SyncfusionExcelRenderer_nj-animate-vertical-appearance-appear__KLVG9","nj-animate-vertical-appearance-appear-active":"SyncfusionExcelRenderer_nj-animate-vertical-appearance-appear-active__RrTRb","nj-animate-vertical-appearance-enter":"SyncfusionExcelRenderer_nj-animate-vertical-appearance-enter__zVGty","nj-animate-vertical-appearance-enter-active":"SyncfusionExcelRenderer_nj-animate-vertical-appearance-enter-active__6jEMH","nj-animate-vertical-appearance-exit":"SyncfusionExcelRenderer_nj-animate-vertical-appearance-exit__pfT8a","nj-animate-vertical-appearance-exit-active":"SyncfusionExcelRenderer_nj-animate-vertical-appearance-exit-active__H0Df5","editor":"SyncfusionExcelRenderer_editor__gI8x6","isHidden":"SyncfusionExcelRenderer_isHidden__grQ1v","infinite-spinner":"SyncfusionExcelRenderer_infinite-spinner__floIE","fadeIn":"SyncfusionExcelRenderer_fadeIn__7t6vk","blinking":"SyncfusionExcelRenderer_blinking__tMUER","movingRight":"SyncfusionExcelRenderer_movingRight__DzjFy"};

/***/ }),

/***/ 87039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ BROWSER_TAKEOVER_TOOL_REGEXP),
/* harmony export */   N: () => (/* binding */ WHITELISTED_XML_TAGS)
/* harmony export */ });
const XML_TAGS = [
    'move-to',
    'click',
    'scroll',
    'typing',
    'press',
    'wait',
    'mouse-down',
    'mouse-up',
    'drag-to',
    'hotkey',
    'get-data-provider-endpoints',
    'execute-data-provider-call',
    'ask',
    'complete',
    'transcribe-audio',
    'browser-navigate-to',
    'browser-go-back',
    'browser-wait',
    'browser-click-element',
    'browser-input-text',
    'browser-send-keys',
    'browser-switch-tab',
    'browser-close-tab',
    'browser-scroll-down',
    'browser-scroll-up',
    'browser-scroll-to-text',
    'browser-get-dropdown-options',
    'browser-select-dropdown-option',
    'browser-drag-drop',
    'browser-click-coordinates',
    'web-browser-takeover',
    'deploy',
    'see-excel',
    'expose-port',
    'create-file',
    'str-replace',
    'full-file-rewrite',
    'delete-file',
    'execute-command',
    'see-image',
    'web-search',
    'scrape-webpage',
    'transcribe-youtube'
];
const WHITELISTED_XML_TAGS = XML_TAGS.join('|');
const BROWSER_TAKEOVER_TOOL_REGEXP = /<tool_result>\s*<web-browser-takeover>([\s\S]*?)<\/web-browser-takeover>\s*<\/tool_result>/;


/***/ }),

/***/ 87141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useResizablePanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ useResizablePanel auto */ 
const useResizablePanel = (param)=>{
    let { defaultWidth = 650, minWidth = 544, minContentWidth = 400, isOpen, isMobile, isMaximized, containerRef } = param;
    const [panelWidth, setPanelWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultWidth);
    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleMouseDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        e.preventDefault();
        setIsDragging(true);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handleResize = ()=>{
            var _containerRef_current;
            const containerWidth = (containerRef === null || containerRef === void 0 ? void 0 : (_containerRef_current = containerRef.current) === null || _containerRef_current === void 0 ? void 0 : _containerRef_current.offsetWidth) || window.innerWidth;
            const calculatedMaxWidth = containerWidth - minContentWidth;
            setPanelWidth((prevWidth)=>{
                const clampedWidth = Math.min(Math.max(prevWidth, minWidth), calculatedMaxWidth);
                return clampedWidth;
            });
        };
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize);
        };
    }, [
        containerRef,
        minContentWidth,
        minWidth
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!isDragging) return;
        let animationFrameId;
        const handleMouseMove = (e)=>{
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            animationFrameId = requestAnimationFrame(()=>{
                var _containerRef_current, _containerRef_current1;
                const containerWidth = (containerRef === null || containerRef === void 0 ? void 0 : (_containerRef_current = containerRef.current) === null || _containerRef_current === void 0 ? void 0 : _containerRef_current.offsetWidth) || window.innerWidth;
                const containerLeft = (containerRef === null || containerRef === void 0 ? void 0 : (_containerRef_current1 = containerRef.current) === null || _containerRef_current1 === void 0 ? void 0 : _containerRef_current1.getBoundingClientRect().left) || 0;
                const newWidth = containerWidth - (e.clientX - containerLeft);
                const calculatedMaxWidth = containerWidth - minContentWidth;
                const clampedWidth = Math.min(Math.max(newWidth, minWidth), calculatedMaxWidth);
                setPanelWidth(clampedWidth);
            });
        };
        const handleMouseUp = ()=>{
            setIsDragging(false);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return ()=>{
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [
        isDragging,
        minWidth,
        containerRef,
        minContentWidth
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!isOpen || !isMaximized && !isMobile) {
            var _containerRef_current;
            const containerWidth = (containerRef === null || containerRef === void 0 ? void 0 : (_containerRef_current = containerRef.current) === null || _containerRef_current === void 0 ? void 0 : _containerRef_current.offsetWidth) || window.innerWidth;
            const calculatedMaxWidth = containerWidth - minContentWidth;
            setPanelWidth(Math.min(defaultWidth, calculatedMaxWidth));
        }
    }, [
        isOpen,
        isMaximized,
        isMobile,
        defaultWidth,
        containerRef,
        minContentWidth
    ]);
    const shouldShowResizeHandle = !isMobile && !isMaximized;
    return {
        panelWidth,
        isDragging,
        handleMouseDown,
        shouldShowResizeHandle
    };
};


/***/ }),

/***/ 87736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* reexport */ SyncfusionExcelRenderer)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/components/file-renderers/SyncfusionExcelRenderer/SyncfusionExcelRenderer.module.scss
var SyncfusionExcelRenderer_module = __webpack_require__(85035);
var SyncfusionExcelRenderer_module_default = /*#__PURE__*/__webpack_require__.n(SyncfusionExcelRenderer_module);
// EXTERNAL MODULE: ./node_modules/@datadog/browser-logs/esm/entries/main.js + 109 modules
var main = __webpack_require__(73262);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(64269);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-react-spreadsheet/src/spreadsheet/spreadsheet.component.js
var spreadsheet_component = __webpack_require__(49654);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-react-base/index.js + 6 modules
var ej2_react_base = __webpack_require__(38576);
// EXTERNAL MODULE: ./node_modules/@syncfusion/ej2-spreadsheet/index.js + 1 modules
var ej2_spreadsheet = __webpack_require__(18905);
// EXTERNAL MODULE: ./src/components/file-renderers/FileRendererToolbar/index.tsx
var FileRendererToolbar = __webpack_require__(28420);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/SpinnerGap.es.js + 1 modules
var SpinnerGap_es = __webpack_require__(91679);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
;// ./src/components/file-renderers/SyncfusionExcelRenderer/constants.ts
const workbookMetaByExtension = new Map([
    [
        'xlsx',
        {
            saveType: 'Xlsx',
            mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        }
    ],
    [
        'xls',
        {
            saveType: 'Xls',
            mime: 'application/vnd.ms-excel'
        }
    ],
    [
        'csv',
        {
            saveType: 'Csv',
            mime: 'text/csv'
        }
    ]
]);

// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.mjs
var dist = __webpack_require__(5379);
// EXTERNAL MODULE: ./src/lib/envs.ts
var envs = __webpack_require__(68276);
// EXTERNAL MODULE: ./src/hooks/index.ts + 39 modules
var hooks = __webpack_require__(71203);
// EXTERNAL MODULE: ./node_modules/sonner/dist/index.mjs
var sonner_dist = __webpack_require__(18720);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/singleton/apis/fetchAuthSession.mjs
var fetchAuthSession = __webpack_require__(42917);
;// ./src/components/file-renderers/SyncfusionExcelRenderer/SyncfusionExcelRenderer.tsx















const SyncfusionExcelRenderer = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { binaryUrl, fileName, isCsvFile, showToolbar, updateExcelFile, handleDownload, handleCopyClick } = param;
    // Workaround: This prop is called fileName but its actually filePath. Some other files have same issue
    const fileExcelName = fileName === null || fileName === void 0 ? void 0 : fileName.split('/').pop();
    const shouldRefreshAfterOpen = (0,react.useRef)(false);
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    const ssRef = (0,react.useRef)(null);
    const { resolvedTheme } = (0,dist/* useTheme */.D)();
    const isDark = resolvedTheme === 'dark';
    const tokenRef = (0,react.useRef)(null);
    const workbookMeta = (0,react.useMemo)(()=>{
        var _fileName_split_pop;
        if (!fileName) return undefined;
        const ext = (_fileName_split_pop = fileName.split('.').pop()) === null || _fileName_split_pop === void 0 ? void 0 : _fileName_split_pop.toLowerCase();
        return workbookMetaByExtension.get(ext);
    }, [
        fileName
    ]);
    (0,react.useEffect)(()=>{
        let cancelled = false;
        (async ()=>{
            try {
                var _session_tokens_accessToken, _session_tokens;
                const session = await (0,fetchAuthSession/* fetchAuthSession */.$)();
                var _session_tokens_accessToken_toString;
                const token = (_session_tokens_accessToken_toString = session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : (_session_tokens_accessToken = _session_tokens.accessToken) === null || _session_tokens_accessToken === void 0 ? void 0 : _session_tokens_accessToken.toString()) !== null && _session_tokens_accessToken_toString !== void 0 ? _session_tokens_accessToken_toString : null;
                if (!cancelled) tokenRef.current = token;
            } catch (error) {
                sonner_dist/* toast */.oR.error('Cannot open spreadsheet');
                main/* datadogLogs */.yf.logger.error('Failed to fetch auth session', {}, error);
            }
        })();
        return ()=>{
            cancelled = true;
        };
    }, []);
    const beforeOpen = (0,react.useCallback)((args)=>{
        const token = tokenRef.current;
        if (!token) {
            args.cancel = true;
            sonner_dist/* toast */.oR.error('Cannot open spreadsheet');
            return;
        }
        var _args_requestData;
        args.requestData = {
            ...(_args_requestData = args.requestData) !== null && _args_requestData !== void 0 ? _args_requestData : {},
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        };
    }, []);
    const openFromBinaryUrl = (0,react.useCallback)(async ()=>{
        if (!binaryUrl) return;
        if (!fileName || !workbookMeta) {
            sonner_dist/* toast */.oR.error('Unable to open spreadsheet: missing file name or unsupported extension.');
            return;
        }
        const spreadsheet = ssRef.current;
        if (!spreadsheet) return;
        await spreadsheet.refresh();
        try {
            const res = await fetch(binaryUrl, {
                cache: 'no-store'
            });
            if (!res.ok) {
                throw new Error("Fetch failed: ".concat(res.status, " ").concat(res.statusText));
            }
            const blob = await res.blob();
            const file = new File([
                blob
            ], fileName, {
                type: workbookMeta.mime
            });
            shouldRefreshAfterOpen.current = true;
            await spreadsheet.open({
                file
            });
        } catch (error) {
            shouldRefreshAfterOpen.current = false;
            sonner_dist/* toast */.oR.error('Unable to open spreadsheet.');
        }
    }, [
        binaryUrl,
        fileName,
        workbookMeta
    ]);
    const onCreated = ()=>{
        setIsLoading(false);
    };
    const handleSave = (0,react.useCallback)(async ()=>{
        sonner_dist/* toast */.oR.info('Saving…');
        const token = tokenRef.current;
        const spreadsheet = ssRef.current;
        if (!spreadsheet) throw new Error('Spreadsheet not ready');
        if (!fileName || !workbookMeta) {
            const message = 'Unable to save spreadsheet: missing file name or unsupported extension.';
            sonner_dist/* toast */.oR.error(message);
            throw new Error(message);
        }
        try {
            var _json_jsonObject, _fileName_split_pop;
            const json = await spreadsheet.saveAsJson();
            var _json_jsonObject_Workbook;
            const workbookJson = (_json_jsonObject_Workbook = json === null || json === void 0 ? void 0 : (_json_jsonObject = json.jsonObject) === null || _json_jsonObject === void 0 ? void 0 : _json_jsonObject.Workbook) !== null && _json_jsonObject_Workbook !== void 0 ? _json_jsonObject_Workbook : null;
            const formData = new FormData();
            if (!workbookJson) {
                throw new Error('Spreadsheet save returned no workbook data');
            }
            const ext = (_fileName_split_pop = fileName.split('.').pop()) === null || _fileName_split_pop === void 0 ? void 0 : _fileName_split_pop.toLowerCase();
            const isCsv = ext === 'csv';
            const newFileName = isCsv ? "".concat(fileName.slice(0, fileName.lastIndexOf('.')), ".xlsx") : fileName;
            const newWorkbookMeta = isCsv ? workbookMetaByExtension.get('xlsx') : workbookMeta;
            formData.append('FileName', newFileName);
            formData.append('saveType', newWorkbookMeta.saveType);
            formData.append('JSONData', JSON.stringify(workbookJson));
            formData.append('PdfLayoutSettings', JSON.stringify({
                FitSheetOnOnePage: false
            }));
            // Warning: Changing the POST request structure may cause CORS errors, so be careful
            const response = await fetch("".concat(envs/* NEXT_PUBLIC_EXCELEDITOR_URL */.Z5, "/save"), {
                method: 'POST',
                headers: {
                    Authorization: "Bearer ".concat(token)
                },
                body: formData
            });
            if (!response.ok) {
                throw new Error("Save failed: ".concat(response.status, " ").concat(response.statusText));
            }
            const blob = await response.blob();
            await updateExcelFile(blob);
        } catch (error) {
            sonner_dist/* toast */.oR.error('Unable to update spreadsheet.');
            main/* datadogLogs */.yf.logger.error('Unable to update spreadsheet.', {}, error);
        }
    }, [
        fileName,
        workbookMeta
    ]);
    const onBeforeSave = (0,react.useCallback)((args)=>{
        if (!fileName || !workbookMeta) {
            args.cancel = true;
            sonner_dist/* toast */.oR.error('Cannot save spreadsheet: missing file name or unsupported extension.');
            return;
        }
        args.needBlobData = true;
        args.isFullPost = false;
        args.saveType = workbookMeta.saveType;
    }, [
        fileName,
        workbookMeta
    ]);
    const handleOpenComplete = (0,react.useCallback)(()=>{
        if (!shouldRefreshAfterOpen.current) return;
        shouldRefreshAfterOpen.current = false;
        requestAnimationFrame(()=>{
            var _ssRef_current;
            (_ssRef_current = ssRef.current) === null || _ssRef_current === void 0 ? void 0 : _ssRef_current.refresh();
        });
    }, []);
    (0,react.useImperativeHandle)(ref, ()=>({
            save: handleSave
        }), [
        handleSave
    ]);
    (0,hooks/* useSyncfusionTheme */.IH)(isDark, ssRef);
    (0,react.useEffect)(()=>{
        if (!isLoading) {
            openFromBinaryUrl();
        }
    }, [
        isLoading,
        openFromBinaryUrl
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (SyncfusionExcelRenderer_module_default()).root,
        children: [
            isLoading && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (SyncfusionExcelRenderer_module_default()).loader,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SpinnerGap_es/* SpinnerGapIcon */.r, {
                    size: constants/* SVG_SIZE_XXL */.iWV,
                    className: "animate-spin"
                })
            }),
            showToolbar && /*#__PURE__*/ (0,jsx_runtime.jsx)(FileRendererToolbar/* FileRendererToolbar */.N, {
                fileName: fileExcelName,
                showCopyButton: isCsvFile,
                showDownloadButton: true,
                showSaveButton: true,
                handleSave: handleSave,
                handleDownload: handleDownload,
                handleCopyClick: handleCopyClick
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(spreadsheet_component/* SpreadsheetComponent */.m, {
                ref: ssRef,
                allowOpen: true,
                allowSave: true,
                beforeOpen: beforeOpen,
                openUrl: "".concat(envs/* NEXT_PUBLIC_EXCELEDITOR_URL */.Z5, "/open"),
                saveUrl: "".concat(envs/* NEXT_PUBLIC_EXCELEDITOR_URL */.Z5, "/save"),
                openComplete: handleOpenComplete,
                created: onCreated,
                beforeSave: onBeforeSave,
                height: "100%",
                width: "100%",
                className: (0,utils.cn)((SyncfusionExcelRenderer_module_default()).editor, {
                    [(SyncfusionExcelRenderer_module_default()).isHidden]: isLoading
                }),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ej2_react_base/* Inject */.y_, {
                    services: [
                        ej2_spreadsheet/* Open */.v5j,
                        ej2_spreadsheet/* Save */.eMP
                    ]
                })
            })
        ]
    });
});
SyncfusionExcelRenderer.displayName = 'SyncfusionExcelRenderer';

;// ./src/components/file-renderers/SyncfusionExcelRenderer/index.ts




/***/ }),

/***/ 90534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w: () => (/* reexport */ SidePanel),
  n: () => (/* reexport */ SidePanelBase)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/hooks/index.ts + 39 modules
var hooks = __webpack_require__(71203);
// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button = __webpack_require__(62717);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/X.es.js
var X_es = __webpack_require__(10127);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/ArrowsInSimple.es.js + 1 modules
var ArrowsInSimple_es = __webpack_require__(79416);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/ArrowsOutSimple.es.js + 1 modules
var ArrowsOutSimple_es = __webpack_require__(89371);
// EXTERNAL MODULE: ./src/components/thread/SidePanel/components/PanelHeader/PanelHeader.module.scss
var PanelHeader_module = __webpack_require__(49491);
var PanelHeader_module_default = /*#__PURE__*/__webpack_require__.n(PanelHeader_module);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
;// ./src/components/thread/SidePanel/components/PanelHeader/PanelHeader.tsx
/* __next_internal_client_entry_do_not_use__ PanelHeader auto */ 






const CloseButton = (param)=>{
    let { onClick } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
        size: "small",
        shape: "round",
        color: "transparent",
        className: (PanelHeader_module_default()).closeButton,
        onClick: onClick,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(X_es/* XIcon */.u, {
            className: (PanelHeader_module_default()).icon
        })
    });
};
const PanelHeader = (param)=>{
    let { title, subtitle, isMaximized, onToggleMaximize, onClose, actions, showMaximizeButton = true, bottom } = param;
    const isMobile = (0,hooks/* useIsMobile */.al)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (PanelHeader_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (PanelHeader_module_default()).header,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (PanelHeader_module_default()).leftSection,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (PanelHeader_module_default()).titleWrapper,
                            children: [
                                !isMobile && showMaximizeButton && /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                                    size: "small",
                                    shape: "round",
                                    color: "transparent",
                                    className: (PanelHeader_module_default()).maximizeButton,
                                    title: isMaximized ? 'Restore width' : 'Maximize',
                                    onClick: onToggleMaximize,
                                    children: isMaximized ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowsInSimple_es/* ArrowsInSimpleIcon */.F, {
                                        size: constants/* SVG_SIZE_M */.ng3
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowsOutSimple_es/* ArrowsOutSimpleIcon */.M, {
                                        size: constants/* SVG_SIZE_M */.ng3
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                    className: (PanelHeader_module_default()).title,
                                    children: title
                                }),
                                subtitle
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (PanelHeader_module_default()).rightSection,
                        children: [
                            actions,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CloseButton, {
                                onClick: onClose
                            })
                        ]
                    })
                ]
            }),
            bottom
        ]
    });
};

;// ./src/components/thread/SidePanel/components/PanelHeader/index.ts


// EXTERNAL MODULE: ./src/components/thread/SidePanel/SidePanel.module.scss
var SidePanel_module = __webpack_require__(46678);
var SidePanel_module_default = /*#__PURE__*/__webpack_require__.n(SidePanel_module);
;// ./src/components/thread/SidePanel/SidePanel.tsx
/* __next_internal_client_entry_do_not_use__ SidePanel auto */ 



const SidePanel = (param)=>{
    let { onClose, title, subtitle, isMaximized, onToggleMaximize, headerActions, children, showMaximizeButton = true, headerBottom } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (SidePanel_module_default()).content,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PanelHeader, {
                title: title,
                subtitle: subtitle,
                isMaximized: isMaximized,
                onToggleMaximize: onToggleMaximize,
                onClose: onClose,
                actions: headerActions,
                showMaximizeButton: showMaximizeButton,
                bottom: headerBottom
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (SidePanel_module_default()).panelMainContent,
                children: children
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(85203);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/components/ui/ResizeHandle/ResizeHandle.module.scss
var ResizeHandle_module = __webpack_require__(84414);
var ResizeHandle_module_default = /*#__PURE__*/__webpack_require__.n(ResizeHandle_module);
;// ./src/components/ui/ResizeHandle/ResizeHandle.tsx
/* __next_internal_client_entry_do_not_use__ ResizeHandle auto */ 


function ResizeHandle(param) {
    let { onMouseDown, className, isDragging = false } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classnames_default()((ResizeHandle_module_default()).resizeHandle, className, {
            [(ResizeHandle_module_default()).dragging]: isDragging
        }),
        onMouseDown: onMouseDown,
        children: [
            isDragging && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (ResizeHandle_module_default()).dragGradient
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (ResizeHandle_module_default()).hitArea
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (ResizeHandle_module_default()).dragButton
            })
        ]
    });
}

;// ./src/components/ui/ResizeHandle/index.ts


;// ./src/components/thread/SidePanel/SidePanelBase.tsx
/* __next_internal_client_entry_do_not_use__ SidePanelBase auto */ 





const SidePanelBase = (param)=>{
    let { isOpen, isMaximized, containerRef, panelWidth, isDragging, shouldShowResizeHandle, handleMouseDown, children } = param;
    const isMobile = (0,hooks/* useIsMobile */.al)();
    if (!isOpen) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: containerRef,
        className: classnames_default()((SidePanel_module_default()).container, {
            [(SidePanel_module_default()).dragging]: isDragging
        }),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (SidePanel_module_default()).innerContainer,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classnames_default()((SidePanel_module_default()).panel, {
                    [(SidePanel_module_default()).panelTransition]: !isDragging,
                    [(SidePanel_module_default()).panelMaximized]: isMaximized,
                    [(SidePanel_module_default()).panelResponsive]: !isMobile && !isMaximized,
                    [(SidePanel_module_default()).panelClosed]: !isOpen
                }),
                ...!isMobile && !isMaximized && {
                    style: {
                        width: "".concat(panelWidth, "px")
                    }
                },
                children: [
                    shouldShowResizeHandle && /*#__PURE__*/ (0,jsx_runtime.jsx)(ResizeHandle, {
                        onMouseDown: handleMouseDown,
                        isDragging: isDragging
                    }),
                    children
                ]
            })
        })
    });
};

;// ./src/components/thread/SidePanel/index.ts




/***/ }),

/***/ 90861:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"content":"UndoAIAction_content__pHe3t","nj-animate-horizontal-appearance-ltr-enter":"UndoAIAction_nj-animate-horizontal-appearance-ltr-enter__RIHhk","nj-animate-horizontal-appearance-ltr-enter-active":"UndoAIAction_nj-animate-horizontal-appearance-ltr-enter-active__IPDYq","nj-animate-horizontal-appearance-ltr-exit":"UndoAIAction_nj-animate-horizontal-appearance-ltr-exit__U6gtb","nj-animate-horizontal-appearance-ltr-exit-active":"UndoAIAction_nj-animate-horizontal-appearance-ltr-exit-active__AEZJ1","nj-animate-left-panel-width-reduce-enter":"UndoAIAction_nj-animate-left-panel-width-reduce-enter__q6snd","nj-animate-left-panel-width-reduce-enter-active":"UndoAIAction_nj-animate-left-panel-width-reduce-enter-active__R6NFu","nj-animate-left-panel-width-reduce-exit":"UndoAIAction_nj-animate-left-panel-width-reduce-exit__OfzxM","nj-animate-left-panel-width-reduce-exit-active":"UndoAIAction_nj-animate-left-panel-width-reduce-exit-active__J7_nR","nj-animate-vertical-appearance-appear":"UndoAIAction_nj-animate-vertical-appearance-appear__FD47N","nj-animate-vertical-appearance-appear-active":"UndoAIAction_nj-animate-vertical-appearance-appear-active__ooWKw","nj-animate-vertical-appearance-enter":"UndoAIAction_nj-animate-vertical-appearance-enter___QGJ_","nj-animate-vertical-appearance-enter-active":"UndoAIAction_nj-animate-vertical-appearance-enter-active__UYD1R","nj-animate-vertical-appearance-exit":"UndoAIAction_nj-animate-vertical-appearance-exit__q22TF","nj-animate-vertical-appearance-exit-active":"UndoAIAction_nj-animate-vertical-appearance-exit-active__xcyyx","root":"UndoAIAction_root__yfEYb","button":"UndoAIAction_button__JZw_G","infinite-spinner":"UndoAIAction_infinite-spinner__YgSKU","fadeIn":"UndoAIAction_fadeIn__DTwqY","blinking":"UndoAIAction_blinking__2TPes","movingRight":"UndoAIAction_movingRight__a0fKm"};

/***/ }),

/***/ 95059:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"loader":"SyncfusionMarkdownRenderer_loader__dAlPB","nj-animate-horizontal-appearance-ltr-enter":"SyncfusionMarkdownRenderer_nj-animate-horizontal-appearance-ltr-enter__hqjhp","nj-animate-horizontal-appearance-ltr-enter-active":"SyncfusionMarkdownRenderer_nj-animate-horizontal-appearance-ltr-enter-active__EsBsQ","nj-animate-horizontal-appearance-ltr-exit":"SyncfusionMarkdownRenderer_nj-animate-horizontal-appearance-ltr-exit__DuRC_","nj-animate-horizontal-appearance-ltr-exit-active":"SyncfusionMarkdownRenderer_nj-animate-horizontal-appearance-ltr-exit-active__8XnQK","nj-animate-left-panel-width-reduce-enter":"SyncfusionMarkdownRenderer_nj-animate-left-panel-width-reduce-enter__D15me","nj-animate-left-panel-width-reduce-enter-active":"SyncfusionMarkdownRenderer_nj-animate-left-panel-width-reduce-enter-active__BukxT","nj-animate-left-panel-width-reduce-exit":"SyncfusionMarkdownRenderer_nj-animate-left-panel-width-reduce-exit__ymJtf","nj-animate-left-panel-width-reduce-exit-active":"SyncfusionMarkdownRenderer_nj-animate-left-panel-width-reduce-exit-active__xhDLt","nj-animate-vertical-appearance-appear":"SyncfusionMarkdownRenderer_nj-animate-vertical-appearance-appear__WZJIX","nj-animate-vertical-appearance-appear-active":"SyncfusionMarkdownRenderer_nj-animate-vertical-appearance-appear-active__WpJ7j","nj-animate-vertical-appearance-enter":"SyncfusionMarkdownRenderer_nj-animate-vertical-appearance-enter__7FAM5","nj-animate-vertical-appearance-enter-active":"SyncfusionMarkdownRenderer_nj-animate-vertical-appearance-enter-active__jIZXD","nj-animate-vertical-appearance-exit":"SyncfusionMarkdownRenderer_nj-animate-vertical-appearance-exit__FYt1l","nj-animate-vertical-appearance-exit-active":"SyncfusionMarkdownRenderer_nj-animate-vertical-appearance-exit-active__V9YYm","root":"SyncfusionMarkdownRenderer_root__hHt39","editor":"SyncfusionMarkdownRenderer_editor__nvk9L","isHidden":"SyncfusionMarkdownRenderer_isHidden__amrTq","infinite-spinner":"SyncfusionMarkdownRenderer_infinite-spinner__4LTWq","fadeIn":"SyncfusionMarkdownRenderer_fadeIn__tIAzN","blinking":"SyncfusionMarkdownRenderer_blinking__TOtJ0","movingRight":"SyncfusionMarkdownRenderer_movingRight__MWZDI"};

/***/ }),

/***/ 96603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* reexport */ AssistantMessageDebugComponent)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(64269);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Binoculars.es.js + 1 modules
var Binoculars_es = __webpack_require__(73308);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Camera.es.js + 1 modules
var Camera_es = __webpack_require__(61560);
;// ./src/components/thread/ThreadDebug/components/AssistantMessageDebugComponent/AssistantMessageDebugComponent.tsx



function AssistantMessageDebugComponent(param) {
    let { message, msgIndex } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "text-xs font-normal text-muted-foreground",
        children: [
            msgIndex === 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                href: (0,utils/* getDiverUrl */.g_)(message.agent_run_id, 'dive'),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-xl",
                                title: "Redirect to dive link",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Binoculars_es/* BinocularsIcon */.W, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                href: (0,utils/* getDiverUrl */.g_)(message.agent_run_id, 'ss'),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-xl",
                                title: "Redirect to ss link",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Camera_es/* CameraIcon */.x, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                children: "Agent Run ID:"
                            }),
                            " ",
                            message.agent_run_id
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                        children: "Created At:"
                    }),
                    " ",
                    message.created_at,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                        children: "Updated At:"
                    }),
                    " ",
                    message.updated_at,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                        children: "Message ID:"
                    }),
                    " ",
                    message.message_id
                ]
            })
        ]
    });
}

;// ./src/components/thread/ThreadDebug/components/AssistantMessageDebugComponent/index.ts



/***/ }),

/***/ 96960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* reexport */ HTMLPreviewError),
  X: () => (/* reexport */ NewHTMLDesignRenderer)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/components/file-renderers/code-renderer.tsx
var code_renderer = __webpack_require__(96984);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(64269);
// EXTERNAL MODULE: ./src/components/file-renderers/HTMLRenderer/HTMLToolbar.tsx + 3 modules
var HTMLToolbar = __webpack_require__(39873);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/SpinnerGap.es.js + 1 modules
var SpinnerGap_es = __webpack_require__(91679);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./src/components/file-renderers/HTMLRenderer/HTMLDesignRenderer.module.scss
var HTMLDesignRenderer_module = __webpack_require__(39839);
var HTMLDesignRenderer_module_default = /*#__PURE__*/__webpack_require__.n(HTMLDesignRenderer_module);
;// ./src/components/file-renderers/HTMLRenderer/NewHTMLDesignRenderer.tsx
/* __next_internal_client_entry_do_not_use__ NewHTMLDesignRenderer auto */ 







const NewHTMLDesignRenderer = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { fileName, content, previewUrl, className, onSaveHTML, handleCopyClick, handleDeployClick, isLoading } = param;
    const iframeRef = (0,react.useRef)(null);
    const htmlFileName = fileName === null || fileName === void 0 ? void 0 : fileName.split('/').pop();
    const [isLoadingContent, setIsLoadingContent] = (0,react.useState)(true);
    const [htmlContent, setHtmlContent] = (0,react.useState)(content);
    const [viewMode, setViewMode] = (0,react.useState)('preview');
    const [version, setVersion] = (0,react.useState)(Date.now());
    const mounted = (0,react.useRef)(true);
    (0,react.useImperativeHandle)(ref, ()=>({
            getContent: ()=>htmlContent
        }), [
        htmlContent
    ]);
    (0,react.useEffect)(()=>{
        mounted.current = true;
        const handleMessage = (event)=>{
            var _event_data, _event_data_payload;
            if ((event === null || event === void 0 ? void 0 : (_event_data = event.data) === null || _event_data === void 0 ? void 0 : _event_data.type) !== 'GRAPESJS_SAVE_FILE') return;
            var _event_data_payload_content;
            const next = (_event_data_payload_content = (_event_data_payload = event.data.payload) === null || _event_data_payload === void 0 ? void 0 : _event_data_payload.content) !== null && _event_data_payload_content !== void 0 ? _event_data_payload_content : '';
            if (!mounted.current) return;
            onSaveHTML === null || onSaveHTML === void 0 ? void 0 : onSaveHTML(next);
            setHtmlContent(next);
            setVersion(Date.now());
        };
        window.addEventListener('message', handleMessage);
        return ()=>{
            mounted.current = false;
            window.removeEventListener('message', handleMessage);
        };
    }, [
        previewUrl,
        version,
        onSaveHTML
    ]);
    (0,react.useEffect)(()=>{
        setHtmlContent(content);
    }, [
        content
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (HTMLDesignRenderer_module_default()).loader,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SpinnerGap_es/* SpinnerGapIcon */.r, {
                size: constants/* SVG_SIZE_XXL */.iWV,
                className: "animate-spin"
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,utils.cn)((HTMLDesignRenderer_module_default()).root, className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (HTMLDesignRenderer_module_default()).content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(HTMLToolbar/* HtmlRendererToolbar */.W, {
                    fileName: htmlFileName,
                    htmlPreviewUrl: previewUrl,
                    viewMode: viewMode,
                    onChangeMode: setViewMode,
                    handleCopyClick: handleCopyClick,
                    showDeployBtn: !!previewUrl && !!handleDeployClick,
                    handleDeployClick: handleDeployClick,
                    showOpenNewTabBtn: !!previewUrl
                }),
                viewMode === 'preview' ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (HTMLDesignRenderer_module_default()).canvas,
                    children: [
                        isLoadingContent && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (HTMLDesignRenderer_module_default()).loader,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SpinnerGap_es/* SpinnerGapIcon */.r, {
                                size: constants/* SVG_SIZE_XXL */.iWV,
                                className: "animate-spin"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
                            ref: iframeRef,
                            src: "".concat(previewUrl, "?v=").concat(version),
                            title: "HTML Preview",
                            onLoad: ()=>setIsLoadingContent(false),
                            className: (0,utils.cn)((HTMLDesignRenderer_module_default()).fill, (HTMLDesignRenderer_module_default()).iframe, {
                                [(HTMLDesignRenderer_module_default()).isHidden]: isLoadingContent
                            }),
                            sandbox: "allow-same-origin allow-scripts"
                        }, "preview-".concat(version))
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (HTMLDesignRenderer_module_default()).canvas,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(code_renderer/* CodeRendererWithScroll */.O, {
                        content: htmlContent,
                        language: "html",
                        className: (HTMLDesignRenderer_module_default()).fill
                    }, "code-".concat(version))
                })
            ]
        })
    });
});
NewHTMLDesignRenderer.displayName = 'NewHTMLDesignRenderer';

// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Warning.es.js
var Warning_es = __webpack_require__(36051);
// EXTERNAL MODULE: ./src/components/file-renderers/HTMLRenderer/HTMLPreviewError/HTMLPreviewError.module.scss
var HTMLPreviewError_module = __webpack_require__(76178);
var HTMLPreviewError_module_default = /*#__PURE__*/__webpack_require__.n(HTMLPreviewError_module);
;// ./src/components/file-renderers/HTMLRenderer/HTMLPreviewError/HTMLPreviewError.tsx
/* __next_internal_client_entry_do_not_use__ HTMLPreviewError auto */ 



const HTMLPreviewError = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (HTMLPreviewError_module_default()).previewArea,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (HTMLPreviewError_module_default()).center,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (HTMLPreviewError_module_default()).root,
                role: "alert",
                "aria-live": "assertive",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (HTMLPreviewError_module_default()).iconWrap,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Warning_es/* Warning */.N, {
                            weight: "fill",
                            className: (HTMLPreviewError_module_default()).icon
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                        className: (HTMLPreviewError_module_default()).title,
                        children: "Preview Not Available"
                    })
                ]
            })
        })
    });
};

;// ./src/components/file-renderers/HTMLRenderer/HTMLPreviewError/index.ts


;// ./src/components/file-renderers/HTMLRenderer/index.ts




/***/ }),

/***/ 96984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ CodeRenderer),
/* harmony export */   O: () => (/* binding */ CodeRendererWithScroll)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22916);
/* harmony import */ var _uiw_codemirror_theme_vscode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83667);
/* harmony import */ var _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64455);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64269);
/* harmony import */ var _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17037);
/* harmony import */ var _uiw_codemirror_theme_xcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33137);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5379);
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88082);
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4326);
/* harmony import */ var overlayscrollbars__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37654);
/* harmony import */ var posthog_js_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26302);
/* harmony import */ var _FileRendererToolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28420);
/* __next_internal_client_entry_do_not_use__ CodeRenderer,CodeRendererWithScroll auto */ 













overlayscrollbars__WEBPACK_IMPORTED_MODULE_11__/* .OverlayScrollbars */ .ae.plugin(overlayscrollbars__WEBPACK_IMPORTED_MODULE_11__/* .ClickScrollPlugin */ .lW);
// Map of language aliases to CodeMirror language support
const languageMap = {
    js: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.js,
    jsx: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.jsx,
    ts: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.ts,
    tsx: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.tsx,
    html: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.html,
    css: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.css,
    json: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.json,
    md: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.markdown,
    python: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.python,
    py: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.python,
    rust: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.rust,
    go: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.go,
    java: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.java,
    c: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.c,
    cpp: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.cpp,
    cs: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.csharp,
    php: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.php,
    ruby: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.ruby,
    sh: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.shell,
    bash: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.shell,
    sql: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.sql,
    yaml: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.yaml,
    yml: _uiw_codemirror_extensions_langs__WEBPACK_IMPORTED_MODULE_4__/* .langs */ .cg.yaml
};
const CodeRenderer = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function CodeRenderer(param, ref) {
    let { fileName, content, language = '', className, showToolbar, handleCopyClick, handleDownload } = param;
    // Get current theme
    const { resolvedTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_8__/* .useTheme */ .D)();
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Workaround: This prop is called fileName but its actually filePath. Some other files have same issue
    const fileCodeName = fileName === null || fileName === void 0 ? void 0 : fileName.split('/').pop();
    // Set mounted state to true after component mounts
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMounted(true);
    }, []);
    // Determine the language extension to use
    const langExtension = language && languageMap[language] ? [
        languageMap[language]()
    ] : [];
    // Add line wrapping extension
    const extensions = [
        ...langExtension,
        _codemirror_view__WEBPACK_IMPORTED_MODULE_12__/* .EditorView */ .Lz.lineWrapping
    ];
    // Select the theme based on the current theme
    const theme = mounted && resolvedTheme === 'dark' ? _uiw_codemirror_theme_vscode__WEBPACK_IMPORTED_MODULE_3__/* .vscodeDark */ .Ts : _uiw_codemirror_theme_xcode__WEBPACK_IMPORTED_MODULE_7__/* .xcodeLight */ ._x;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            showToolbar && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FileRendererToolbar__WEBPACK_IMPORTED_MODULE_10__/* .FileRendererToolbar */ .N, {
                fileName: fileCodeName,
                showCopyButton: true,
                handleCopyClick: handleCopyClick,
                showDownloadButton: true,
                handleDownload: handleDownload,
                hasBorderBottom: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_6__/* .ScrollArea */ .F, {
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)('w-full h-full', className),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "w-full",
                    ref: ref,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
                        value: content,
                        theme: theme,
                        extensions: extensions,
                        basicSetup: {
                            lineNumbers: false,
                            highlightActiveLine: false,
                            highlightActiveLineGutter: false,
                            foldGutter: false
                        },
                        editable: false,
                        className: "text-sm w-full min-h-full",
                        style: {
                            maxWidth: '100%'
                        },
                        height: "auto"
                    })
                })
            })
        ]
    });
});
function CodeRendererWithScrollInner(props) {
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { resolvedTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_8__/* .useTheme */ .D)();
    const [initialize] = (0,overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_13__/* .useOverlayScrollbars */ .d)({
        defer: true,
        options: {
            scrollbars: {
                clickScroll: true,
                theme: resolvedTheme === 'dark' ? 'os-theme-light' : 'os-theme-dark'
            }
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (containerRef.current) {
            initialize(containerRef.current);
        }
    }, [
        initialize
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CodeRenderer, {
        ...props,
        ref: containerRef
    });
}
function CodeRendererWithScroll(props) {
    const isOverlayScrollbarsEnabled = (0,posthog_js_react__WEBPACK_IMPORTED_MODULE_9__/* .useFeatureFlagEnabled */ .Tp)('overlayScrollbars');
    if (isOverlayScrollbarsEnabled) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CodeRendererWithScrollInner, {
            ...props
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CodeRenderer, {
        ...props
    });
}


/***/ }),

/***/ 99699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  eB: () => (/* binding */ contentToString),
  yU: () => (/* binding */ createStreamingContent),
  lA: () => (/* binding */ createToolCallInput),
  QP: () => (/* binding */ extractToolNameFromContent),
  YN: () => (/* binding */ extractWebsiteUrl),
  _R: () => (/* binding */ getToolDisplayName),
  S8: () => (/* binding */ getToolIcon),
  _m: () => (/* binding */ metadataToString),
  aX: () => (/* binding */ useGroupedMessages)
});

// UNUSED EXPORTS: getCreateToolDisplayName

// EXTERNAL MODULE: ./src/components/thread/utils.ts
var utils = __webpack_require__(49595);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/GearFine.es.js + 1 modules
var GearFine_es = __webpack_require__(96332);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Globe.es.js
var Globe_es = __webpack_require__(15240);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/PencilSimpleLine.es.js + 1 modules
var PencilSimpleLine_es = __webpack_require__(7007);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/FileMagnifyingGlass.es.js + 1 modules
var FileMagnifyingGlass_es = __webpack_require__(34957);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/FilePlus.es.js + 1 modules
var FilePlus_es = __webpack_require__(13072);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/FileText.es.js + 1 modules
var FileText_es = __webpack_require__(45878);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Terminal.es.js
var Terminal_es = __webpack_require__(6285);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/MagnifyingGlass.es.js + 1 modules
var MagnifyingGlass_es = __webpack_require__(98943);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/ArrowSquareOut.es.js
var ArrowSquareOut_es = __webpack_require__(31271);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Network.es.js + 1 modules
var Network_es = __webpack_require__(90859);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/FileX.es.js + 1 modules
var FileX_es = __webpack_require__(50264);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/CloudArrowUp.es.js
var CloudArrowUp_es = __webpack_require__(14884);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Code.es.js
var Code_es = __webpack_require__(45434);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Chat.es.js + 1 modules
var Chat_es = __webpack_require__(14886);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Wrench.es.js + 1 modules
var Wrench_es = __webpack_require__(68227);
// EXTERNAL MODULE: ./src/lib/utils/general.ts
var general = __webpack_require__(62030);
// EXTERNAL MODULE: ./src/components/thread/tool-views/utils.ts
var tool_views_utils = __webpack_require__(16601);
;// ./src/components/thread/constants.ts
const TOOL_NAME_REGEXP = /<([a-zA-Z\-_]+)(?:\s+[^>]*)?>|<([a-zA-Z\-_]+)(?:\s+[^>]*)?\/>/;
const HIDE_STREAMING_XML_TAGS = new Set([
    'execute-command',
    'create-file',
    'delete-file',
    'full-file-rewrite',
    'str-replace',
    'browser-click-element',
    'browser-close-tab',
    'browser-drag-drop',
    'browser-get-dropdown-options',
    'browser-go-back',
    'browser-input-text',
    'browser-navigate-to',
    'browser-scroll-down',
    'browser-scroll-to-text',
    'browser-scroll-up',
    'browser-select-dropdown-option',
    'browser-send-keys',
    'browser-switch-tab',
    'browser-wait',
    'deploy',
    'ask',
    'complete',
    'crawl-webpage',
    'web-search'
]);
const STREAMING_TOOL_XML_TAGS = new Set([
    'execute-command',
    'create-file',
    'full-file-rewrite'
]);

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
;// ./src/lib/utils/threadUtils.ts






const extractWebsiteUrl = (rawJson)=>{
    const tryParse = (data)=>{
        if (typeof data === 'string') {
            const m = data.match(/"website-url"\s*:\s*"([^"]+)"/);
            if (m) return m[1];
            try {
                return tryParse((0,utils/* safeJsonParse */.jD)(data, ''));
            } catch (e) {
                return null;
            }
        }
        if (data && typeof data === 'object') {
            if ('website-url' in data) {
                return data['website-url'];
            }
            var _Object_values_map_find;
            return (_Object_values_map_find = Object.values(data).map(tryParse).find((url)=>url !== null)) !== null && _Object_values_map_find !== void 0 ? _Object_values_map_find : null;
        }
        return null;
    };
    return tryParse(rawJson);
};
const getToolIcon = (toolName)=>{
    if (!toolName) {
        return GearFine_es/* GearFineIcon */.h;
    }
    const normalizedName = toolName.toLowerCase();
    if (normalizedName.startsWith('browser-')) {
        return Globe_es/* GlobeIcon */.f;
    }
    switch(normalizedName){
        case 'create-file':
            return PencilSimpleLine_es/* PencilSimpleLineIcon */.B;
        case 'str-replace':
            return FileMagnifyingGlass_es/* FileMagnifyingGlassIcon */.VF;
        case 'full-file-rewrite':
            return FilePlus_es/* FilePlusIcon */.u;
        case 'read-file':
            return FileText_es/* FileTextIcon */.d;
        case 'execute-command':
            return Terminal_es/* TerminalIcon */.k;
        case 'web-search':
            return MagnifyingGlass_es/* MagnifyingGlassIcon */.$;
        case 'crawl-webpage':
            return Globe_es/* GlobeIcon */.f;
        case 'call-data-provider':
            return ArrowSquareOut_es/* ArrowSquareOutIcon */.k;
        case 'get-data-provider-endpoints':
            return Network_es/* NetworkIcon */.w;
        case 'execute-data-provider-call':
            return Network_es/* NetworkIcon */.w;
        case 'delete-file':
            return FileX_es/* FileXIcon */.g;
        case 'deploy-site':
            return CloudArrowUp_es/* CloudArrowUpIcon */.L;
        case 'execute-code':
            return Code_es/* CodeIcon */.l;
        case 'ask':
            return Chat_es/* ChatIcon */.o;
        default:
            return Wrench_es/* WrenchIcon */.P;
    }
};
const getToolDisplayName = (toolName, toolContent)=>{
    switch(toolName){
        case 'create-file':
            return getCreateToolDisplayName(toolName, toolContent);
        case 'str-replace':
            return 'Update';
        case 'scrape-webpage':
            return 'Get webpage';
        default:
            return toolName ? (0,general/* capitalizeFirstLetter */.Z)(toolName.replaceAll('-', ' ')) : undefined;
    }
};
const getCreateToolDisplayName = (toolName, toolContent)=>{
    if (toolName !== 'create-file') {
        return null;
    }
    const xmlRegex = /<(?!inform\b)([a-zA-Z\-_]+)(?:\s+[^>]*)?>(?:[\s\S]*?)<\/\1>|<(?!inform\b)([a-zA-Z\-_]+)(?:\s+[^>]*)?\/>/g;
    const match = xmlRegex.exec(toolContent);
    var _match_;
    const rawXml = (_match_ = match === null || match === void 0 ? void 0 : match[0]) !== null && _match_ !== void 0 ? _match_ : '';
    const paramDisplay = (0,utils/* extractPrimaryParam */.D5)(toolName, (0,tool_views_utils/* unescapeString */.wh)(rawXml) || '');
    return paramDisplay === 'todo.md' ? 'Create plan' : 'Create';
};
// Extract the first tool name referenced in an assistant message.
const extractToolNameFromContent = (content)=>{
    const xmlMatch = content.match(TOOL_NAME_REGEXP);
    if (xmlMatch) return xmlMatch[1] || xmlMatch[2] || 'unknown';
    const parsed = (0,utils/* cachedSafeJsonParse */.$W)(content, {});
    if (parsed.tool_calls && parsed.tool_calls.length) {
        return parsed.tool_calls[0].name || 'unknown';
    }
    return 'unknown';
};
const createToolCallInput = (assistantMsg, toolMsg)=>{
    const toolName = extractToolNameFromContent(assistantMsg.content);
    if (toolName === 'ask' || toolName === 'complete') {
        return undefined;
    }
    const toolContentLower = (toolMsg.content || '').toLowerCase();
    const isSuccess = !(toolContentLower.includes('failed') || toolContentLower.includes('error') || toolContentLower.includes('failure'));
    return {
        assistantCall: {
            name: toolName,
            content: assistantMsg.content,
            timestamp: assistantMsg.created_at
        },
        toolResult: {
            content: toolMsg.content,
            isSuccess,
            timestamp: toolMsg.created_at
        }
    };
};
const useGroupedMessages = (messages)=>{
    return (0,react.useMemo)(()=>{
        const groupedMessages = [];
        let currentGroup = null;
        messages.forEach((message, index)=>{
            const messageType = message.type;
            const key = message.message_id || "msg-".concat(index);
            const agentRunId = message.agent_run_id;
            if (messageType === 'user') {
                if (currentGroup) {
                    groupedMessages.push(currentGroup);
                }
                groupedMessages.push({
                    type: 'user',
                    messages: [
                        message
                    ],
                    key,
                    agentRunId
                });
                currentGroup = null;
            } else if (messageType === 'assistant' || messageType === 'tool' || messageType === 'browser_state') {
                if (currentGroup && currentGroup.type === 'assistant_group') {
                    currentGroup.messages.push(message);
                } else {
                    if (currentGroup) {
                        groupedMessages.push(currentGroup);
                    }
                    currentGroup = {
                        type: 'assistant_group',
                        messages: [
                            message
                        ],
                        key,
                        agentRunId
                    };
                }
            } else if (messageType !== 'status') {
                if (currentGroup) {
                    groupedMessages.push(currentGroup);
                    currentGroup = null;
                }
            }
        });
        if (currentGroup) {
            groupedMessages.push(currentGroup);
        }
        return groupedMessages;
    }, [
        messages
    ]);
};
const createStreamingContent = (streamingTextContent)=>{
    if (!streamingTextContent) return {
        streamingText: '',
        detectedTag: null,
        streamingAssistantText: ''
    };
    let detectedTag = null;
    let tagStartIndex = -1;
    let tagEndIndex = -1;
    for (const tag of HIDE_STREAMING_XML_TAGS){
        const openingTagPattern = new RegExp("<".concat(tag, "\\b"));
        const closingTagPattern = "</".concat(tag, ">");
        const match = streamingTextContent.match(openingTagPattern);
        if (match) {
            detectedTag = tag;
            tagStartIndex = match.index;
            tagEndIndex = streamingTextContent.indexOf(closingTagPattern);
            break;
        }
    }
    // For thread message
    const streamingText = detectedTag ? streamingTextContent.substring(0, tagStartIndex) : streamingTextContent;
    // For computer panel - only if tag is in STREAMING_TOOL_XML_TAGS
    let streamingAssistantText = '';
    if (detectedTag && STREAMING_TOOL_XML_TAGS.has(detectedTag) && tagStartIndex !== -1) {
        streamingAssistantText = streamingTextContent.substring(tagStartIndex);
        if (tagEndIndex === -1) {
            streamingAssistantText = "".concat(streamingAssistantText, "</").concat(detectedTag, ">");
        }
    }
    return {
        streamingText,
        detectedTag,
        streamingAssistantText
    };
};
const contentToString = (content)=>{
    if (typeof content === 'string') {
        return content;
    }
    return JSON.stringify(content);
};
const metadataToString = (metadata)=>{
    if (typeof metadata === 'string') {
        return metadata;
    }
    return JSON.stringify(metadata);
};


/***/ })

}]);
//# sourceMappingURL=3337-70d90d76d81dd566.js.map