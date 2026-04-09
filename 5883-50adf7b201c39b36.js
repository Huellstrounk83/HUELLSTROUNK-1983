(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4108,5883],{

/***/ 1200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* reexport */ ModeSelectorItem)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/CheckCircle.es.js
var CheckCircle_es = __webpack_require__(80399);
// EXTERNAL MODULE: ./src/components/ExecutionModeSelector/components/ModeSelectorItem/ModeSelectorItem.module.scss
var ModeSelectorItem_module = __webpack_require__(61513);
var ModeSelectorItem_module_default = /*#__PURE__*/__webpack_require__.n(ModeSelectorItem_module);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/components/ui/Icon/index.ts
var ui_Icon = __webpack_require__(87566);
// EXTERNAL MODULE: ./src/gen/sn-api/models/index.ts + 31 modules
var models = __webpack_require__(61330);
// EXTERNAL MODULE: ./src/hooks/index.ts + 39 modules
var hooks = __webpack_require__(71203);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(64269);
;// ./src/components/ExecutionModeSelector/components/ModeSelectorItem/ModeSelectorItem.tsx
/* __next_internal_client_entry_do_not_use__ ModeSelectorItem auto */ 








const ModeSelectorItem = (param)=>{
    let { isSelected, Icon, title, titleWithTokenNum, value, quota, description, modelLabel, isDisabled, isLoading, mode, className, onSelect, onClose } = param;
    const { isFreeTier } = (0,hooks/* useGetUser */.be)();
    const { openPaymentModal } = (0,hooks/* usePaymentControlActions */.WP)();
    const { creditBalance } = (0,hooks/* useCreditsAccountInfo */.Fg)();
    const shouldUseCreditBalance = (0,react.useMemo)(()=>value === 0 && !!creditBalance, [
        value,
        creditBalance
    ]);
    const isDisabledByTier = (0,react.useMemo)(()=>isFreeTier && mode !== models/* AgentExecutionMode */.Ff.standard, [
        isFreeTier,
        mode
    ]);
    const handleClick = ()=>{
        if (isDisabled || isDisabledByTier) {
            return;
        }
        onSelect === null || onSelect === void 0 ? void 0 : onSelect();
    };
    const handleUpgradeClick = ()=>{
        openPaymentModal();
        onClose === null || onClose === void 0 ? void 0 : onClose();
    };
    const shouldDisplayComingSoon = isDisabled && value !== 0;
    const renderQuotaValue = ()=>{
        if (isDisabledByTier) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: (ModeSelectorItem_module_default()).value,
                children: "Upgrade to unlock"
            });
        }
        if (quota === -1) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: (ModeSelectorItem_module_default()).value,
                children: "Unlimited"
            });
        }
        if (shouldUseCreditBalance) {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: (ModeSelectorItem_module_default()).description,
                        children: value
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: (ModeSelectorItem_module_default()).value,
                        children: "Using on-demand"
                    })
                ]
            });
        }
        const isWarning = value === 0;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            className: (0,utils.cn)((ModeSelectorItem_module_default()).value, {
                [(ModeSelectorItem_module_default()).warning]: isWarning
            }),
            children: value
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,utils.cn)((ModeSelectorItem_module_default()).root, className, {
            [(ModeSelectorItem_module_default()).disabled]: isDisabled,
            [(ModeSelectorItem_module_default()).inactive]: isDisabledByTier
        }),
        onClick: handleClick,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (ModeSelectorItem_module_default()).mainContent,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                        size: constants/* SVG_SIZE_M */.ng3
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (ModeSelectorItem_module_default()).content,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (ModeSelectorItem_module_default()).titleContainer,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: (ModeSelectorItem_module_default()).title,
                                        children: titleWithTokenNum !== null && titleWithTokenNum !== void 0 ? titleWithTokenNum : title
                                    }),
                                    isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: (ModeSelectorItem_module_default()).defaultValue,
                                        children: "..."
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            renderQuotaValue(),
                                            shouldDisplayComingSoon && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: (ModeSelectorItem_module_default()).comingSoon,
                                                children: "(coming soon)"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (ModeSelectorItem_module_default()).description,
                                children: description
                            })
                        ]
                    }),
                    isSelected && /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircle_es/* CheckCircleIcon */.C, {
                        weight: "fill",
                        size: constants/* SVG_SIZE_M */.ng3
                    })
                ]
            }),
            modelLabel && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (ModeSelectorItem_module_default()).modelLabel,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (ModeSelectorItem_module_default()).modelWrapper,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: "Powered by"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (ModeSelectorItem_module_default()).modelName,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Icon/* Icon */.I, {
                                        type: modelLabel.iconName,
                                        size: 14
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: modelLabel.modelName
                                    })
                                ]
                            })
                        ]
                    }),
                    modelLabel.infoLogo && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (ModeSelectorItem_module_default()).modelInfo,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: modelLabel.info
                            }),
                            modelLabel.infoLogo && /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Icon/* Icon */.I, {
                                type: modelLabel.infoLogo,
                                size: constants/* SVG_SIZE_S */.lgH
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// ./src/components/ExecutionModeSelector/components/ModeSelectorItem/index.ts



/***/ }),

/***/ 2208:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"nj-animate-horizontal-appearance-ltr-enter":"NinjaLoader_nj-animate-horizontal-appearance-ltr-enter__F83p0","nj-animate-horizontal-appearance-ltr-enter-active":"NinjaLoader_nj-animate-horizontal-appearance-ltr-enter-active__PLnqY","nj-animate-horizontal-appearance-ltr-exit":"NinjaLoader_nj-animate-horizontal-appearance-ltr-exit__ORaht","nj-animate-horizontal-appearance-ltr-exit-active":"NinjaLoader_nj-animate-horizontal-appearance-ltr-exit-active__YwMMX","nj-animate-left-panel-width-reduce-enter":"NinjaLoader_nj-animate-left-panel-width-reduce-enter__WBTOY","nj-animate-left-panel-width-reduce-enter-active":"NinjaLoader_nj-animate-left-panel-width-reduce-enter-active__JsDS_","nj-animate-left-panel-width-reduce-exit":"NinjaLoader_nj-animate-left-panel-width-reduce-exit__whlBD","nj-animate-left-panel-width-reduce-exit-active":"NinjaLoader_nj-animate-left-panel-width-reduce-exit-active__XI1Yk","nj-animate-vertical-appearance-appear":"NinjaLoader_nj-animate-vertical-appearance-appear__XOsRD","nj-animate-vertical-appearance-appear-active":"NinjaLoader_nj-animate-vertical-appearance-appear-active__LEfwm","nj-animate-vertical-appearance-enter":"NinjaLoader_nj-animate-vertical-appearance-enter__7d3_I","nj-animate-vertical-appearance-enter-active":"NinjaLoader_nj-animate-vertical-appearance-enter-active__7RzrX","nj-animate-vertical-appearance-exit":"NinjaLoader_nj-animate-vertical-appearance-exit___hcQL","nj-animate-vertical-appearance-exit-active":"NinjaLoader_nj-animate-vertical-appearance-exit-active__2fBUt","root":"NinjaLoader_root__yx7YU","imageContainer":"NinjaLoader_imageContainer__G6jAx","spinner":"NinjaLoader_spinner__t1W55","infinite-spinner":"NinjaLoader_infinite-spinner__PGnNd","content":"NinjaLoader_content__ZGqqb","fadeIn":"NinjaLoader_fadeIn__ijxGx","blinking":"NinjaLoader_blinking___nNh7","movingRight":"NinjaLoader_movingRight__E2ZDu"};

/***/ }),

/***/ 2611:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"menuLabel":"BuilderSelector_menuLabel__J0QkH","nj-animate-horizontal-appearance-ltr-enter":"BuilderSelector_nj-animate-horizontal-appearance-ltr-enter__FfsUw","nj-animate-horizontal-appearance-ltr-enter-active":"BuilderSelector_nj-animate-horizontal-appearance-ltr-enter-active__8LP6u","nj-animate-horizontal-appearance-ltr-exit":"BuilderSelector_nj-animate-horizontal-appearance-ltr-exit__87f3h","nj-animate-horizontal-appearance-ltr-exit-active":"BuilderSelector_nj-animate-horizontal-appearance-ltr-exit-active__ms9u_","nj-animate-left-panel-width-reduce-enter":"BuilderSelector_nj-animate-left-panel-width-reduce-enter__upwWg","nj-animate-left-panel-width-reduce-enter-active":"BuilderSelector_nj-animate-left-panel-width-reduce-enter-active___ebax","nj-animate-left-panel-width-reduce-exit":"BuilderSelector_nj-animate-left-panel-width-reduce-exit__tFMPr","nj-animate-left-panel-width-reduce-exit-active":"BuilderSelector_nj-animate-left-panel-width-reduce-exit-active__l1Bkg","nj-animate-vertical-appearance-appear":"BuilderSelector_nj-animate-vertical-appearance-appear__pY0zs","nj-animate-vertical-appearance-appear-active":"BuilderSelector_nj-animate-vertical-appearance-appear-active__3Lc9Z","nj-animate-vertical-appearance-enter":"BuilderSelector_nj-animate-vertical-appearance-enter___0PMD","nj-animate-vertical-appearance-enter-active":"BuilderSelector_nj-animate-vertical-appearance-enter-active__g2Qy4","nj-animate-vertical-appearance-exit":"BuilderSelector_nj-animate-vertical-appearance-exit__VTCLs","nj-animate-vertical-appearance-exit-active":"BuilderSelector_nj-animate-vertical-appearance-exit-active__zNYeD","infinite-spinner":"BuilderSelector_infinite-spinner__QUui0","fadeIn":"BuilderSelector_fadeIn__XiRyD","blinking":"BuilderSelector_blinking__c_nRa","movingRight":"BuilderSelector_movingRight__oejG4"};

/***/ }),

/***/ 3135:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"ChatModelSelector_root__A4_nR","modelItemContainer":"ChatModelSelector_modelItemContainer__FVVfo"};

/***/ }),

/***/ 3602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ initiateGitHubAuth)
/* harmony export */ });
/* unused harmony export generateGitHubAuthUrl */
/* harmony import */ var _lib_envs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68276);

const generateGitHubAuthUrl = (userId)=>{
    const baseUrl = 'https://github.com/login/oauth/authorize';
    const params = new URLSearchParams({
        client_id: _lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_GITHUB_CLIENT_ID */ .y || '',
        redirect_uri: _lib_envs__WEBPACK_IMPORTED_MODULE_0__/* .NEXT_PUBLIC_GITHUB_REDIRECT_URI */ .md || '',
        state: "".concat(window.location.origin + window.location.pathname, "?user_id=").concat(userId, "&nonce=").concat(crypto.randomUUID())
    });
    return "".concat(baseUrl, "?").concat(params.toString());
};
const initiateGitHubAuth = (userId)=>{
    const authUrl = generateGitHubAuthUrl(userId);
    ;
    ;
    ;
    // Redirect to GitHub OAuth
    window.location.href = authUrl;
};


/***/ }),

/***/ 5150:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"inputContainer":"ChatInput_inputContainer__m1_qO","container":"ChatInput_container__LR02N","inputWrapper":"ChatInput_inputWrapper__4aDqQ","buttonsRow":"ChatInput_buttonsRow__qmaDQ","upgradeContainer":"ChatInput_upgradeContainer__tJBNJ","upgradeInfo":"ChatInput_upgradeInfo__4XxOw","buttonsRowWrapper":"ChatInput_buttonsRowWrapper___qWjN","inputWrapperContainer":"ChatInput_inputWrapperContainer__3k8Td","agentStatus":"ChatInput_agentStatus__ZnK1x","agentStatusContent":"ChatInput_agentStatusContent__ABzel","mistakeNotice":"ChatInput_mistakeNotice__LVHjJ","nj-animate-horizontal-appearance-ltr-enter":"ChatInput_nj-animate-horizontal-appearance-ltr-enter__CJcwn","nj-animate-horizontal-appearance-ltr-enter-active":"ChatInput_nj-animate-horizontal-appearance-ltr-enter-active__fPO32","nj-animate-horizontal-appearance-ltr-exit":"ChatInput_nj-animate-horizontal-appearance-ltr-exit__sMNts","nj-animate-horizontal-appearance-ltr-exit-active":"ChatInput_nj-animate-horizontal-appearance-ltr-exit-active__16FVY","nj-animate-left-panel-width-reduce-enter":"ChatInput_nj-animate-left-panel-width-reduce-enter__knmoL","nj-animate-left-panel-width-reduce-enter-active":"ChatInput_nj-animate-left-panel-width-reduce-enter-active__UB03n","nj-animate-left-panel-width-reduce-exit":"ChatInput_nj-animate-left-panel-width-reduce-exit__ue8mF","nj-animate-left-panel-width-reduce-exit-active":"ChatInput_nj-animate-left-panel-width-reduce-exit-active__C2Mtn","nj-animate-vertical-appearance-appear":"ChatInput_nj-animate-vertical-appearance-appear__0NNOS","nj-animate-vertical-appearance-appear-active":"ChatInput_nj-animate-vertical-appearance-appear-active__JwFgI","nj-animate-vertical-appearance-enter":"ChatInput_nj-animate-vertical-appearance-enter__prjYQ","nj-animate-vertical-appearance-enter-active":"ChatInput_nj-animate-vertical-appearance-enter-active__RE_Ub","nj-animate-vertical-appearance-exit":"ChatInput_nj-animate-vertical-appearance-exit__hMrkI","nj-animate-vertical-appearance-exit-active":"ChatInput_nj-animate-vertical-appearance-exit-active__GHFD6","containerLandingPage":"ChatInput_containerLandingPage__nWT_m","card":"ChatInput_card__Va8yA","upgradeButton":"ChatInput_upgradeButton__sOxQ_","closeButton":"ChatInput_closeButton__UOiPY","button":"ChatInput_button__erSm0","infinite-spinner":"ChatInput_infinite-spinner__mIvTe","fadeIn":"ChatInput_fadeIn__npV1d","blinking":"ChatInput_blinking___M0wA","movingRight":"ChatInput_movingRight__n87Ia"};

/***/ }),

/***/ 6334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $L: () => (/* binding */ getModelDisplayName),
/* harmony export */   ZI: () => (/* binding */ getModelIcon),
/* harmony export */   sI: () => (/* binding */ prepareModelsList)
/* harmony export */ });
/* unused harmony exports getDefaultModelIconName, getDefaultModelProvider, getModelProvider */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47615);

const getModelDisplayName = (param)=>{
    let { targetModel, metadata, defaultValue } = param;
    var _metadata_targetModel, _newExternalModelsList_targetModel;
    if (!targetModel) {
        return defaultValue || '';
    }
    return !!metadata && ((_metadata_targetModel = metadata[targetModel]) === null || _metadata_targetModel === void 0 ? void 0 : _metadata_targetModel.display_name) || ((_newExternalModelsList_targetModel = _constants__WEBPACK_IMPORTED_MODULE_0__/* .newExternalModelsList */ .Mxn[targetModel]) === null || _newExternalModelsList_targetModel === void 0 ? void 0 : _newExternalModelsList_targetModel.display_name) || _constants__WEBPACK_IMPORTED_MODULE_0__/* .NINJA_AGENT_TITLE */ .q8Z;
};
const getDefaultModelIconName = (modelId)=>{
    const provider = modelId.split('/')[1];
    switch(provider){
        case 'bedrock':
            if (modelId.includes('nova-')) {
                return 'nova';
            }
            return 'awsLogo';
        case 'openai':
            return 'chatGPTLogo';
        case 'gemini':
            return 'googleGeminiProLogo';
        case 'ninja':
        case 'ninjatech':
            return 'ninjaOutlined';
        default:
            return undefined;
    }
};
const getModelIcon = (param)=>{
    let { targetModel, metadata, defaultValue } = param;
    var _metadata_targetModel, _newExternalModelsList_targetModel;
    if (!targetModel) {
        return defaultValue;
    }
    return !!metadata && _constants__WEBPACK_IMPORTED_MODULE_0__/* .modelIconsMap */ .AIE[(_metadata_targetModel = metadata[targetModel]) === null || _metadata_targetModel === void 0 ? void 0 : _metadata_targetModel.icon] || ((_newExternalModelsList_targetModel = _constants__WEBPACK_IMPORTED_MODULE_0__/* .newExternalModelsList */ .Mxn[targetModel]) === null || _newExternalModelsList_targetModel === void 0 ? void 0 : _newExternalModelsList_targetModel.icon_name) || getDefaultModelIconName(targetModel);
};
const getDefaultModelProvider = (modelId)=>{
    const provider = modelId.split('/')[1];
    switch(provider){
        case 'bedrock':
            return _constants__WEBPACK_IMPORTED_MODULE_0__/* .AGENT_PROVIDER */ .i5D.amazon;
        case 'anthropic':
            return _constants__WEBPACK_IMPORTED_MODULE_0__/* .AGENT_PROVIDER */ .i5D.anthropic;
        case 'openai':
            return _constants__WEBPACK_IMPORTED_MODULE_0__/* .AGENT_PROVIDER */ .i5D.openai;
        case 'gemini':
        case 'google':
            return _constants__WEBPACK_IMPORTED_MODULE_0__/* .AGENT_PROVIDER */ .i5D.google;
        case 'deepseek':
            return _constants__WEBPACK_IMPORTED_MODULE_0__/* .AGENT_PROVIDER */ .i5D.deepseek;
        case 'alibaba':
            return _constants__WEBPACK_IMPORTED_MODULE_0__/* .AGENT_PROVIDER */ .i5D.alibaba;
        case 'xai':
            return _constants__WEBPACK_IMPORTED_MODULE_0__/* .AGENT_PROVIDER */ .i5D.x;
        case 'ninja':
        case 'ninjatech':
            return _constants__WEBPACK_IMPORTED_MODULE_0__/* .AGENT_PROVIDER */ .i5D.ninja;
        default:
            return undefined;
    }
};
const getModelProvider = (param)=>{
    let { targetModel } = param;
    var _newExternalModelsList_targetModel;
    return ((_newExternalModelsList_targetModel = _constants__WEBPACK_IMPORTED_MODULE_0__/* .newExternalModelsList */ .Mxn[targetModel]) === null || _newExternalModelsList_targetModel === void 0 ? void 0 : _newExternalModelsList_targetModel.provider) || getDefaultModelProvider(targetModel);
};
const prepareModelsList = (options, metadata)=>{
    return Object.entries(options || {}).map((param)=>{
        let [keyOption, settingOption] = param;
        var _metadata_keyOption, _metadata_keyOption_data, _metadata_keyOption1;
        return {
            id: keyOption,
            iconName: getModelIcon({
                targetModel: keyOption,
                metadata: metadata
            }),
            title: getModelDisplayName({
                targetModel: keyOption,
                metadata: metadata
            }),
            availableIn: settingOption.requires,
            description: (_metadata_keyOption = metadata[keyOption]) === null || _metadata_keyOption === void 0 ? void 0 : _metadata_keyOption.description,
            isNew: Boolean((_metadata_keyOption1 = metadata[keyOption]) === null || _metadata_keyOption1 === void 0 ? void 0 : (_metadata_keyOption_data = _metadata_keyOption1.data) === null || _metadata_keyOption_data === void 0 ? void 0 : _metadata_keyOption_data.is_new),
            modelProvider: getModelProvider({
                targetModel: keyOption
            })
        };
    });
};


/***/ }),

/***/ 7024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ initiateGitHubAppInstall)
/* harmony export */ });
/* harmony import */ var _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73262);
/* harmony import */ var _gen_sn_api_github_app_github_app_gen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76727);


const initiateGitHubAppInstall = async ()=>{
    ;
    try {
        const installUrl = await (0,_gen_sn_api_github_app_github_app_gen__WEBPACK_IMPORTED_MODULE_1__/* .githubGetInstallUrl */ .W3)({
            redirect_uri: window.location.href
        });
        ;
        // Redirect to GitHub App installation page
        window.location.href = installUrl.install_url;
    } catch (error) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_0__/* .datadogLogs */ .yf.logger.error('Error initiating GitHub App installation:', {}, error);
        throw error;
    }
};


/***/ }),

/***/ 8103:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"GitHubUniversalSearch_root__AXnFs","searchContainer":"GitHubUniversalSearch_searchContainer__VeF2o","searchIcon":"GitHubUniversalSearch_searchIcon__43AV4","searchInput":"GitHubUniversalSearch_searchInput__soYpa","nj-animate-horizontal-appearance-ltr-enter":"GitHubUniversalSearch_nj-animate-horizontal-appearance-ltr-enter__46RRK","nj-animate-horizontal-appearance-ltr-enter-active":"GitHubUniversalSearch_nj-animate-horizontal-appearance-ltr-enter-active__NnGE2","nj-animate-horizontal-appearance-ltr-exit":"GitHubUniversalSearch_nj-animate-horizontal-appearance-ltr-exit__FytD5","nj-animate-horizontal-appearance-ltr-exit-active":"GitHubUniversalSearch_nj-animate-horizontal-appearance-ltr-exit-active__ic3SM","nj-animate-left-panel-width-reduce-enter":"GitHubUniversalSearch_nj-animate-left-panel-width-reduce-enter__4A3Po","nj-animate-left-panel-width-reduce-enter-active":"GitHubUniversalSearch_nj-animate-left-panel-width-reduce-enter-active__tt_ZD","nj-animate-left-panel-width-reduce-exit":"GitHubUniversalSearch_nj-animate-left-panel-width-reduce-exit__I_iFM","nj-animate-left-panel-width-reduce-exit-active":"GitHubUniversalSearch_nj-animate-left-panel-width-reduce-exit-active__wGSSN","nj-animate-vertical-appearance-appear":"GitHubUniversalSearch_nj-animate-vertical-appearance-appear__Ljdfw","nj-animate-vertical-appearance-appear-active":"GitHubUniversalSearch_nj-animate-vertical-appearance-appear-active__e_fue","nj-animate-vertical-appearance-enter":"GitHubUniversalSearch_nj-animate-vertical-appearance-enter__ZHdmT","nj-animate-vertical-appearance-enter-active":"GitHubUniversalSearch_nj-animate-vertical-appearance-enter-active__Kgvv9","nj-animate-vertical-appearance-exit":"GitHubUniversalSearch_nj-animate-vertical-appearance-exit__EI7iH","nj-animate-vertical-appearance-exit-active":"GitHubUniversalSearch_nj-animate-vertical-appearance-exit-active__nPTNk","infinite-spinner":"GitHubUniversalSearch_infinite-spinner__7aVTl","fadeIn":"GitHubUniversalSearch_fadeIn__ufkiD","blinking":"GitHubUniversalSearch_blinking__e7fLo","movingRight":"GitHubUniversalSearch_movingRight___i7Ht"};

/***/ }),

/***/ 10789:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"branchSubmenu":"GithubRepoBranchSelector_branchSubmenu___hcze","mobileContent":"GithubRepoBranchSelector_mobileContent__bjimy","selectedContent":"GithubRepoBranchSelector_selectedContent__Q88MR","repoItem":"GithubRepoBranchSelector_repoItem__RPkok","branchItem":"GithubRepoBranchSelector_branchItem__cJ_1p","header":"GithubRepoBranchSelector_header__jywVT","mobileHeader":"GithubRepoBranchSelector_mobileHeader__w_F_Y","mobileRepoItem":"GithubRepoBranchSelector_mobileRepoItem__vE7Hi","mobileBranchItem":"GithubRepoBranchSelector_mobileBranchItem__S_XRG","mobileLoadingItem":"GithubRepoBranchSelector_mobileLoadingItem__Sl6g4","popoverHeader":"GithubRepoBranchSelector_popoverHeader__DvZe9","popoverStatus":"GithubRepoBranchSelector_popoverStatus__LmR5e","popoverBody":"GithubRepoBranchSelector_popoverBody__49cnN","popoverItem":"GithubRepoBranchSelector_popoverItem___tXJH","githubIcon":"GithubRepoBranchSelector_githubIcon__AWmGZ","repoBranchTitle":"GithubRepoBranchSelector_repoBranchTitle__rPcPR","accountHeader":"GithubRepoBranchSelector_accountHeader__aPQdP","mobileAccountHeader":"GithubRepoBranchSelector_mobileAccountHeader__Jtmj1","popoverTitle":"GithubRepoBranchSelector_popoverTitle__SGZI4","loadingMessage":"GithubRepoBranchSelector_loadingMessage__axUBm","errorMessage":"GithubRepoBranchSelector_errorMessage__VD0G_","emptyMessage":"GithubRepoBranchSelector_emptyMessage__3SA_g","mobileLoadingMessage":"GithubRepoBranchSelector_mobileLoadingMessage__c577j","mobileErrorMessage":"GithubRepoBranchSelector_mobileErrorMessage__1RaRE","mobileEmptyMessage":"GithubRepoBranchSelector_mobileEmptyMessage__TnpzI","mobileErrorItem":"GithubRepoBranchSelector_mobileErrorItem__HNf4T","popoverText":"GithubRepoBranchSelector_popoverText__8bzKU","selectedIndicator":"GithubRepoBranchSelector_selectedIndicator__u_68_","trigger":"GithubRepoBranchSelector_trigger__Cx7KI","clearButton":"GithubRepoBranchSelector_clearButton__grsKY","mobileBackButton":"GithubRepoBranchSelector_mobileBackButton__UJUQt","repoName":"GithubRepoBranchSelector_repoName__bcGie","branchName":"GithubRepoBranchSelector_branchName__CXlgG","selectedBranchName":"GithubRepoBranchSelector_selectedBranchName__FT2Or","nj-animate-horizontal-appearance-ltr-enter":"GithubRepoBranchSelector_nj-animate-horizontal-appearance-ltr-enter__nfJDl","nj-animate-horizontal-appearance-ltr-enter-active":"GithubRepoBranchSelector_nj-animate-horizontal-appearance-ltr-enter-active__X6MjK","nj-animate-horizontal-appearance-ltr-exit":"GithubRepoBranchSelector_nj-animate-horizontal-appearance-ltr-exit__mJvZg","nj-animate-horizontal-appearance-ltr-exit-active":"GithubRepoBranchSelector_nj-animate-horizontal-appearance-ltr-exit-active__Piioz","nj-animate-left-panel-width-reduce-enter":"GithubRepoBranchSelector_nj-animate-left-panel-width-reduce-enter__ysBFe","nj-animate-left-panel-width-reduce-enter-active":"GithubRepoBranchSelector_nj-animate-left-panel-width-reduce-enter-active___43u8","nj-animate-left-panel-width-reduce-exit":"GithubRepoBranchSelector_nj-animate-left-panel-width-reduce-exit__FMyUZ","nj-animate-left-panel-width-reduce-exit-active":"GithubRepoBranchSelector_nj-animate-left-panel-width-reduce-exit-active__gcP2V","nj-animate-vertical-appearance-appear":"GithubRepoBranchSelector_nj-animate-vertical-appearance-appear__GEryt","nj-animate-vertical-appearance-appear-active":"GithubRepoBranchSelector_nj-animate-vertical-appearance-appear-active__q1C28","nj-animate-vertical-appearance-enter":"GithubRepoBranchSelector_nj-animate-vertical-appearance-enter__j4eTS","nj-animate-vertical-appearance-enter-active":"GithubRepoBranchSelector_nj-animate-vertical-appearance-enter-active__jMueH","nj-animate-vertical-appearance-exit":"GithubRepoBranchSelector_nj-animate-vertical-appearance-exit__rXpFV","nj-animate-vertical-appearance-exit-active":"GithubRepoBranchSelector_nj-animate-vertical-appearance-exit-active__ISuvb","disabled":"GithubRepoBranchSelector_disabled__gpgVH","selectedGithubIcon":"GithubRepoBranchSelector_selectedGithubIcon__X3TQB","branchNameTooltip":"GithubRepoBranchSelector_branchNameTooltip__kTgnY","selectedButton":"GithubRepoBranchSelector_selectedButton___U1YT","dropdownContent":"GithubRepoBranchSelector_dropdownContent__665WV","errorContainer":"GithubRepoBranchSelector_errorContainer__ttY0v","emptyContainer":"GithubRepoBranchSelector_emptyContainer__GxNi6","repoContainer":"GithubRepoBranchSelector_repoContainer__YxdA_","selectedRepoItem":"GithubRepoBranchSelector_selectedRepoItem__UIMbZ","chevron":"GithubRepoBranchSelector_chevron__tszhs","stickyHeader":"GithubRepoBranchSelector_stickyHeader__DLMO1","branchList":"GithubRepoBranchSelector_branchList__p3iDm","branchIcon":"GithubRepoBranchSelector_branchIcon__js8IO","checkIcon":"GithubRepoBranchSelector_checkIcon__fBwln","spinner":"GithubRepoBranchSelector_spinner__iW0C1","infinite-spinner":"GithubRepoBranchSelector_infinite-spinner__AejO_","mobileSheetContent":"GithubRepoBranchSelector_mobileSheetContent__Ca2yE","content":"GithubRepoBranchSelector_content__WpqAu","repoSearch":"GithubRepoBranchSelector_repoSearch__EYzPp","mobileRepoList":"GithubRepoBranchSelector_mobileRepoList__rtY1m","mobileBranchList":"GithubRepoBranchSelector_mobileBranchList__YUxRR","mobileErrorContainer":"GithubRepoBranchSelector_mobileErrorContainer__Nf6OH","mobileEmptyContainer":"GithubRepoBranchSelector_mobileEmptyContainer__kLyLj","manageSettingsContainer":"GithubRepoBranchSelector_manageSettingsContainer__xnW4m","manageSettingsLink":"GithubRepoBranchSelector_manageSettingsLink__vC6gJ","manageSettingsText":"GithubRepoBranchSelector_manageSettingsText__45tPr","mobileManageSettingsContainer":"GithubRepoBranchSelector_mobileManageSettingsContainer__eETlo","mobileManageSettingsLink":"GithubRepoBranchSelector_mobileManageSettingsLink__KiqwL","popoverContentWrapper":"GithubRepoBranchSelector_popoverContentWrapper__QE0qq","popoverContent":"GithubRepoBranchSelector_popoverContent__OvIb0","statusDot":"GithubRepoBranchSelector_statusDot__2tWnA","popoverIcon":"GithubRepoBranchSelector_popoverIcon__lNe_A","fadeIn":"GithubRepoBranchSelector_fadeIn__4t_Py","blinking":"GithubRepoBranchSelector_blinking__wYzOd","movingRight":"GithubRepoBranchSelector_movingRight__FhlFP"};

/***/ }),

/***/ 11186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bq: () => (/* binding */ SelectTrigger),
/* harmony export */   eb: () => (/* binding */ SelectItem),
/* harmony export */   gC: () => (/* binding */ SelectContent),
/* harmony export */   l6: () => (/* binding */ Select),
/* harmony export */   mi: () => (/* binding */ SelectSeparator),
/* harmony export */   yv: () => (/* binding */ SelectValue)
/* harmony export */ });
/* unused harmony exports SelectGroup, SelectLabel, SelectScrollDownButton, SelectScrollUpButton */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47887);
/* harmony import */ var _barrel_optimize_names_CheckIcon_ChevronDownIcon_ChevronUpIcon_DotIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24033);
/* harmony import */ var _barrel_optimize_names_CheckIcon_ChevronDownIcon_ChevronUpIcon_DotIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98934);
/* harmony import */ var _barrel_optimize_names_CheckIcon_ChevronDownIcon_ChevronUpIcon_DotIcon_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5917);
/* harmony import */ var _barrel_optimize_names_CheckIcon_ChevronDownIcon_ChevronUpIcon_DotIcon_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12108);
/* harmony import */ var _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59034);
/* harmony import */ var _scroll_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17037);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64269);
/* __next_internal_client_entry_do_not_use__ Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectScrollDownButton,SelectScrollUpButton,SelectSeparator,SelectTrigger,SelectValue auto */ 






function Select(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_4__/* .Root */ .bL, {
        "data-slot": "select",
        ...props
    });
}
function SelectGroup(param) {
    let { ...props } = param;
    return /*#__PURE__*/ _jsx(SelectPrimitive.Group, {
        "data-slot": "select-group",
        ...props
    });
}
function SelectValue(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_4__/* .Value */ .WT, {
        "data-slot": "select-value",
        ...props
    });
}
function SelectTrigger(param) {
    let { className, size = 'default', children, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_4__/* .Trigger */ .l9, {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_4__/* .Icon */ .In, {
                asChild: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckIcon_ChevronDownIcon_ChevronUpIcon_DotIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                    className: "size-4 opacity-50"
                })
            })
        ]
    });
}
function SelectContent(param) {
    let { className, children, position = 'popper', scrollbar = false, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_4__/* .Portal */ .ZL, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_4__/* .Content */ .UC, {
            "data-slot": "select-content",
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md', position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1', className),
            position: position,
            ...props,
            children: scrollbar ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_6__/* .Root */ .bL, {
                className: "w-full h-full",
                type: "auto",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_4__/* .Viewport */ .LM, {
                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)('p-1', position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1', className),
                        asChild: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_6__/* .Viewport */ .LM, {
                            className: "w-full h-full",
                            children: children
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_scroll_area__WEBPACK_IMPORTED_MODULE_2__/* .ScrollBar */ .$, {
                        orientation: "vertical"
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectScrollUpButton, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_4__/* .Viewport */ .LM, {
                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)('p-1', position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'),
                        children: children
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectScrollDownButton, {})
                ]
            })
        })
    });
}
function SelectLabel(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx(SelectPrimitive.Label, {
        "data-slot": "select-label",
        className: cn('text-muted-foreground px-2 py-1.5 text-xs', className),
        ...props
    });
}
function SelectItem(param) {
    let { className, children, indicatorType = 'check', ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_4__/* .Item */ .q7, {
        "data-slot": "select-item",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_4__/* .ItemIndicator */ .VF, {
                    children: indicatorType === 'dot' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckIcon_ChevronDownIcon_ChevronUpIcon_DotIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                        className: "size-4 scale-200"
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckIcon_ChevronDownIcon_ChevronUpIcon_DotIcon_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                        className: "size-4"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_4__/* .ItemText */ .p4, {
                children: children
            })
        ]
    });
}
function SelectSeparator(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_4__/* .Separator */ .wv, {
        "data-slot": "select-separator",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)('bg-border pointer-events-none -mx-1 my-1 h-px', className),
        ...props
    });
}
function SelectScrollUpButton(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_4__/* .ScrollUpButton */ .PP, {
        "data-slot": "select-scroll-up-button",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckIcon_ChevronDownIcon_ChevronUpIcon_DotIcon_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
            className: "size-4"
        })
    });
}
function SelectScrollDownButton(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_4__/* .ScrollDownButton */ .wn, {
        "data-slot": "select-scroll-down-button",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckIcon_ChevronDownIcon_ChevronUpIcon_DotIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
            className: "size-4"
        })
    });
}



/***/ }),

/***/ 13915:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"ImprovePromptButton_root__Ekorn","nj-animate-horizontal-appearance-ltr-enter":"ImprovePromptButton_nj-animate-horizontal-appearance-ltr-enter__UEkLc","nj-animate-horizontal-appearance-ltr-enter-active":"ImprovePromptButton_nj-animate-horizontal-appearance-ltr-enter-active__E5N2i","nj-animate-horizontal-appearance-ltr-exit":"ImprovePromptButton_nj-animate-horizontal-appearance-ltr-exit__rrKNr","nj-animate-horizontal-appearance-ltr-exit-active":"ImprovePromptButton_nj-animate-horizontal-appearance-ltr-exit-active__121YZ","nj-animate-left-panel-width-reduce-enter":"ImprovePromptButton_nj-animate-left-panel-width-reduce-enter__8g9Gs","nj-animate-left-panel-width-reduce-enter-active":"ImprovePromptButton_nj-animate-left-panel-width-reduce-enter-active__9Xte9","nj-animate-left-panel-width-reduce-exit":"ImprovePromptButton_nj-animate-left-panel-width-reduce-exit__k9nRT","nj-animate-left-panel-width-reduce-exit-active":"ImprovePromptButton_nj-animate-left-panel-width-reduce-exit-active__R_Xs7","nj-animate-vertical-appearance-appear":"ImprovePromptButton_nj-animate-vertical-appearance-appear__TrrVh","nj-animate-vertical-appearance-appear-active":"ImprovePromptButton_nj-animate-vertical-appearance-appear-active__X4snQ","nj-animate-vertical-appearance-enter":"ImprovePromptButton_nj-animate-vertical-appearance-enter__cXBc8","nj-animate-vertical-appearance-enter-active":"ImprovePromptButton_nj-animate-vertical-appearance-enter-active__sXKFP","nj-animate-vertical-appearance-exit":"ImprovePromptButton_nj-animate-vertical-appearance-exit__t18_B","nj-animate-vertical-appearance-exit-active":"ImprovePromptButton_nj-animate-vertical-appearance-exit-active__s7qxf","button":"ImprovePromptButton_button__sQDHP","spinner":"ImprovePromptButton_spinner__LzJSX","infinite-spinner":"ImprovePromptButton_infinite-spinner__Pwrs9","fadeIn":"ImprovePromptButton_fadeIn__E0hwz","blinking":"ImprovePromptButton_blinking__AjDUn","movingRight":"ImprovePromptButton_movingRight__JqYBv"};

/***/ }),

/***/ 18537:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"nj-animate-horizontal-appearance-ltr-enter":"TutorialPayer_nj-animate-horizontal-appearance-ltr-enter__DpCO_","nj-animate-horizontal-appearance-ltr-enter-active":"TutorialPayer_nj-animate-horizontal-appearance-ltr-enter-active__1_pPm","nj-animate-horizontal-appearance-ltr-exit":"TutorialPayer_nj-animate-horizontal-appearance-ltr-exit__k6A8C","nj-animate-horizontal-appearance-ltr-exit-active":"TutorialPayer_nj-animate-horizontal-appearance-ltr-exit-active__F9Avf","nj-animate-left-panel-width-reduce-enter":"TutorialPayer_nj-animate-left-panel-width-reduce-enter__GQnCf","nj-animate-left-panel-width-reduce-enter-active":"TutorialPayer_nj-animate-left-panel-width-reduce-enter-active__YW90q","nj-animate-left-panel-width-reduce-exit":"TutorialPayer_nj-animate-left-panel-width-reduce-exit__aYL_a","nj-animate-left-panel-width-reduce-exit-active":"TutorialPayer_nj-animate-left-panel-width-reduce-exit-active__nn0gI","nj-animate-vertical-appearance-appear":"TutorialPayer_nj-animate-vertical-appearance-appear__A5kJU","nj-animate-vertical-appearance-appear-active":"TutorialPayer_nj-animate-vertical-appearance-appear-active__7RxuD","nj-animate-vertical-appearance-enter":"TutorialPayer_nj-animate-vertical-appearance-enter__DBrMm","nj-animate-vertical-appearance-enter-active":"TutorialPayer_nj-animate-vertical-appearance-enter-active__peyck","nj-animate-vertical-appearance-exit":"TutorialPayer_nj-animate-vertical-appearance-exit__3UDe5","nj-animate-vertical-appearance-exit-active":"TutorialPayer_nj-animate-vertical-appearance-exit-active__CwqQt","root":"TutorialPayer_root__Z2W7F","infinite-spinner":"TutorialPayer_infinite-spinner__mrObl","fadeIn":"TutorialPayer_fadeIn__8LAxe","blinking":"TutorialPayer_blinking__tONwm","movingRight":"TutorialPayer_movingRight__ko_9S"};

/***/ }),

/***/ 23855:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"GithubConnectorModal_root__5bL2i","content":"GithubConnectorModal_content__ITBOe","heading":"GithubConnectorModal_heading__9vOba","fieldWrapper":"GithubConnectorModal_fieldWrapper__qKypo","title":"GithubConnectorModal_title__UgWPp","headerWrapper":"GithubConnectorModal_headerWrapper__4TB_o","detailsInnerWrapper":"GithubConnectorModal_detailsInnerWrapper__0lABt","linkField":"GithubConnectorModal_linkField__qdrhE","iconWrapper":"GithubConnectorModal_iconWrapper__42YuS","githubIcon":"GithubConnectorModal_githubIcon__eBgaa","detailsWrapper":"GithubConnectorModal_detailsWrapper__Vbty0","header":"GithubConnectorModal_header__VksgF","description":"GithubConnectorModal_description__kCA4s","nj-animate-horizontal-appearance-ltr-enter":"GithubConnectorModal_nj-animate-horizontal-appearance-ltr-enter__Vo5rH","nj-animate-horizontal-appearance-ltr-enter-active":"GithubConnectorModal_nj-animate-horizontal-appearance-ltr-enter-active___sNWU","nj-animate-horizontal-appearance-ltr-exit":"GithubConnectorModal_nj-animate-horizontal-appearance-ltr-exit__FglBw","nj-animate-horizontal-appearance-ltr-exit-active":"GithubConnectorModal_nj-animate-horizontal-appearance-ltr-exit-active__WcfR_","nj-animate-left-panel-width-reduce-enter":"GithubConnectorModal_nj-animate-left-panel-width-reduce-enter__vGMxm","nj-animate-left-panel-width-reduce-enter-active":"GithubConnectorModal_nj-animate-left-panel-width-reduce-enter-active__7thBv","nj-animate-left-panel-width-reduce-exit":"GithubConnectorModal_nj-animate-left-panel-width-reduce-exit__z9jn6","nj-animate-left-panel-width-reduce-exit-active":"GithubConnectorModal_nj-animate-left-panel-width-reduce-exit-active__Ig_dJ","nj-animate-vertical-appearance-appear":"GithubConnectorModal_nj-animate-vertical-appearance-appear__pT3b5","nj-animate-vertical-appearance-appear-active":"GithubConnectorModal_nj-animate-vertical-appearance-appear-active__4WWr6","nj-animate-vertical-appearance-enter":"GithubConnectorModal_nj-animate-vertical-appearance-enter__07DIG","nj-animate-vertical-appearance-enter-active":"GithubConnectorModal_nj-animate-vertical-appearance-enter-active__txkZX","nj-animate-vertical-appearance-exit":"GithubConnectorModal_nj-animate-vertical-appearance-exit__b9XQa","nj-animate-vertical-appearance-exit-active":"GithubConnectorModal_nj-animate-vertical-appearance-exit-active__7dKCM","detailsOuterWrapper":"GithubConnectorModal_detailsOuterWrapper__SNGJa","fieldName":"GithubConnectorModal_fieldName__gwN73","infinite-spinner":"GithubConnectorModal_infinite-spinner__q9MXP","fadeIn":"GithubConnectorModal_fadeIn__NEfQA","blinking":"GithubConnectorModal_blinking__EisT1","movingRight":"GithubConnectorModal_movingRight__ns7p9"};

/***/ }),

/***/ 26377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* reexport */ ExternalModelItem)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./src/components/thread/chat-input/components/ImageModelSelector/ExternalModelItem/ExternalModelItem.module.scss
var ExternalModelItem_module = __webpack_require__(27193);
var ExternalModelItem_module_default = /*#__PURE__*/__webpack_require__.n(ExternalModelItem_module);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/CheckCircle.es.js
var CheckCircle_es = __webpack_require__(80399);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button = __webpack_require__(62717);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(85203);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/hooks/index.ts + 39 modules
var hooks = __webpack_require__(71203);
;// ./src/components/thread/chat-input/components/ImageModelSelector/ExternalModelItem/ExternalModelItem.tsx







const ExternalModelItem = (param)=>{
    let { id, icon, title, selected, description, unlimited, disabled, onSelect, onUpgrade } = param;
    const { isMember, isAdmin } = (0,hooks/* useTeamInfo */.JA)();
    const notATeamMember = !isMember && !isAdmin;
    const handleClick = ()=>{
        if (disabled) {
            return;
        }
        onSelect === null || onSelect === void 0 ? void 0 : onSelect();
    };
    const handleButtonClick = ()=>disabled && notATeamMember ? onUpgrade === null || onUpgrade === void 0 ? void 0 : onUpgrade() : handleClick();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
        className: classnames_default()((ExternalModelItem_module_default()).root, {
            [(ExternalModelItem_module_default()).disabled]: disabled
        }),
        color: "transparent",
        onClick: handleButtonClick,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: (ExternalModelItem_module_default()).titleWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (ExternalModelItem_module_default()).leftSideWrapper,
                        children: [
                            icon,
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (ExternalModelItem_module_default()).textWrapper,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (ExternalModelItem_module_default()).title,
                                        children: title
                                    }),
                                    description && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (ExternalModelItem_module_default()).description,
                                        children: description
                                    })
                                ]
                            })
                        ]
                    }),
                    unlimited && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: (ExternalModelItem_module_default()).unlimited,
                        children: "Unlimited"
                    })
                ]
            }),
            selected && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "w-5",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircle_es/* CheckCircleIcon */.C, {
                    weight: "fill",
                    size: constants/* SVG_SIZE_M */.ng3
                })
            }),
            disabled && notATeamMember && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: (ExternalModelItem_module_default()).upgradeLabel,
                children: "Upgrade"
            })
        ]
    });
};

;// ./src/components/thread/chat-input/components/ImageModelSelector/ExternalModelItem/index.ts



/***/ }),

/***/ 26608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* reexport */ TutorialPayer),
  O: () => (/* reexport */ TutorialPayerUpgradeButton)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./src/components/ui/dialog.tsx
var dialog = __webpack_require__(51834);
// EXTERNAL MODULE: ./node_modules/next/dist/api/app-dynamic.js
var app_dynamic = __webpack_require__(67909);
;// ./src/components/ui/VideoPlayer/VideoPlayer.tsx
/* __next_internal_client_entry_do_not_use__ VideoPlayer auto */ 

const ReactPlayer = (0,app_dynamic["default"])(()=>__webpack_require__.e(/* import() */ 5946).then(__webpack_require__.bind(__webpack_require__, 5946)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(5946)
            ]
    },
    ssr: false
});
const VideoPlayer = (param)=>{
    let { width = '100%', height = '100%', controls = true, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ReactPlayer, {
        controls: controls,
        width: width,
        height: height,
        ...rest
    });
};

;// ./src/components/ui/VideoPlayer/index.ts


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var dist = __webpack_require__(861);
// EXTERNAL MODULE: ./src/components/VideoTutorials/components/TutorialPayer/TutorialPayer.module.scss
var TutorialPayer_module = __webpack_require__(18537);
var TutorialPayer_module_default = /*#__PURE__*/__webpack_require__.n(TutorialPayer_module);
// EXTERNAL MODULE: ./src/hooks/use-mobile.ts
var use_mobile = __webpack_require__(75409);
;// ./src/components/VideoTutorials/components/TutorialPayer/TutorialPayer.tsx
/* __next_internal_client_entry_do_not_use__ TutorialPayer auto */ 





const TutorialPayer = (param)=>{
    let { url, onClose } = param;
    const isMobile = (0,use_mobile/* useIsMobile */.a)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.lG, {
        open: !!url,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogContent */.Cf, {
            className: (TutorialPayer_module_default()).root,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* VisuallyHidden */.s6, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogTitle */.L3, {
                        children: "Tutorial payer"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* VisuallyHidden */.s6, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogDescription */.rr, {
                        children: "Tutorial payer"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(VideoPlayer, {
                    src: url,
                    playing: !isMobile
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button = __webpack_require__(62717);
// EXTERNAL MODULE: ./src/components/VideoTutorials/components/TutorialPayer/TutorialPayerWithUpgradeBtn.module.scss
var TutorialPayerWithUpgradeBtn_module = __webpack_require__(95253);
var TutorialPayerWithUpgradeBtn_module_default = /*#__PURE__*/__webpack_require__.n(TutorialPayerWithUpgradeBtn_module);
// EXTERNAL MODULE: ./src/hooks/index.ts + 39 modules
var hooks = __webpack_require__(71203);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(65229);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
;// ./src/components/VideoTutorials/components/TutorialPayer/TutorialPayerWithUpgradeBtn.tsx
/* __next_internal_client_entry_do_not_use__ TutorialPayerUpgradeButton auto */ 









const TutorialPayerUpgradeButton = (param)=>{
    let { url, onClose } = param;
    const isMobile = (0,use_mobile/* useIsMobile */.a)();
    const { openPaymentModal } = (0,hooks/* usePaymentControlActions */.WP)();
    const onClickUpgrade = ()=>{
        openPaymentModal();
        onClose();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.lG, {
        open: !!url,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogContent */.Cf, {
            className: (TutorialPayerWithUpgradeBtn_module_default()).root,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogTitle */.L3, {
                    className: (TutorialPayerWithUpgradeBtn_module_default()).header,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: "Upgrade to access VS code with Cline IDE"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (TutorialPayerWithUpgradeBtn_module_default()).upgradeContainer,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                                    onClick: onClickUpgrade,
                                    children: "Upgrade Now"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                                    color: "transparent",
                                    shape: "round",
                                    onClick: onClose,
                                    className: (TutorialPayerWithUpgradeBtn_module_default()).closeButton,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(x/* default */.A, {
                                        size: constants/* SVG_SIZE_M */.ng3
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* VisuallyHidden */.s6, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogDescription */.rr, {
                        children: "Tutorial player"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (TutorialPayerWithUpgradeBtn_module_default()).playerShell,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(VideoPlayer, {
                        src: url,
                        playing: !isMobile,
                        width: "100%",
                        height: "100%",
                        className: (TutorialPayerWithUpgradeBtn_module_default()).player
                    })
                })
            ]
        })
    });
};

;// ./src/components/VideoTutorials/components/TutorialPayer/index.ts




/***/ }),

/***/ 27193:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"textWrapper":"ExternalModelItem_textWrapper__kJn3G","root":"ExternalModelItem_root__h4c2U","titleWrapper":"ExternalModelItem_titleWrapper__dbWxY","leftSideWrapper":"ExternalModelItem_leftSideWrapper__irqzT","title":"ExternalModelItem_title__Dn_02","description":"ExternalModelItem_description__SB4n_","caption":"ExternalModelItem_caption__fF32o","unlimited":"ExternalModelItem_unlimited__rB96E","upgradeLabel":"ExternalModelItem_upgradeLabel__1s3W2","nj-animate-horizontal-appearance-ltr-enter":"ExternalModelItem_nj-animate-horizontal-appearance-ltr-enter__WCugX","nj-animate-horizontal-appearance-ltr-enter-active":"ExternalModelItem_nj-animate-horizontal-appearance-ltr-enter-active__A63Y6","nj-animate-horizontal-appearance-ltr-exit":"ExternalModelItem_nj-animate-horizontal-appearance-ltr-exit__IujQC","nj-animate-horizontal-appearance-ltr-exit-active":"ExternalModelItem_nj-animate-horizontal-appearance-ltr-exit-active__euHgm","nj-animate-left-panel-width-reduce-enter":"ExternalModelItem_nj-animate-left-panel-width-reduce-enter__9wAwB","nj-animate-left-panel-width-reduce-enter-active":"ExternalModelItem_nj-animate-left-panel-width-reduce-enter-active___U_9_","nj-animate-left-panel-width-reduce-exit":"ExternalModelItem_nj-animate-left-panel-width-reduce-exit__tDkAk","nj-animate-left-panel-width-reduce-exit-active":"ExternalModelItem_nj-animate-left-panel-width-reduce-exit-active__krIwa","nj-animate-vertical-appearance-appear":"ExternalModelItem_nj-animate-vertical-appearance-appear__OM7e9","nj-animate-vertical-appearance-appear-active":"ExternalModelItem_nj-animate-vertical-appearance-appear-active__cTsq5","nj-animate-vertical-appearance-enter":"ExternalModelItem_nj-animate-vertical-appearance-enter__JZ0bP","nj-animate-vertical-appearance-enter-active":"ExternalModelItem_nj-animate-vertical-appearance-enter-active__QdNja","nj-animate-vertical-appearance-exit":"ExternalModelItem_nj-animate-vertical-appearance-exit__gA1nb","nj-animate-vertical-appearance-exit-active":"ExternalModelItem_nj-animate-vertical-appearance-exit-active__3x0Gp","selected":"ExternalModelItem_selected__aB_gR","withoutCursor":"ExternalModelItem_withoutCursor__EKfvA","disabled":"ExternalModelItem_disabled__5shoJ","infinite-spinner":"ExternalModelItem_infinite-spinner__sXG4b","fadeIn":"ExternalModelItem_fadeIn__HIFyo","blinking":"ExternalModelItem_blinking__GhBhK","movingRight":"ExternalModelItem_movingRight__kpj5A"};

/***/ }),

/***/ 33387:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"iconStack":"OAuthProviderSelector_iconStack__8Yr4C","iconBadge":"OAuthProviderSelector_iconBadge__cdx4L","providerName":"OAuthProviderSelector_providerName__csPWx","disconnectLabel":"OAuthProviderSelector_disconnectLabel__plYvn","label":"OAuthProviderSelector_label__Zj2Wp","connectedLabel":"OAuthProviderSelector_connectedLabel__A7JWW","plusText":"OAuthProviderSelector_plusText__JJP0o","trigger":"OAuthProviderSelector_trigger__wf4NO","nj-animate-horizontal-appearance-ltr-enter":"OAuthProviderSelector_nj-animate-horizontal-appearance-ltr-enter__Px_Dn","nj-animate-horizontal-appearance-ltr-enter-active":"OAuthProviderSelector_nj-animate-horizontal-appearance-ltr-enter-active__A5Ey_","nj-animate-horizontal-appearance-ltr-exit":"OAuthProviderSelector_nj-animate-horizontal-appearance-ltr-exit__8TwGD","nj-animate-horizontal-appearance-ltr-exit-active":"OAuthProviderSelector_nj-animate-horizontal-appearance-ltr-exit-active__7zU_R","nj-animate-left-panel-width-reduce-enter":"OAuthProviderSelector_nj-animate-left-panel-width-reduce-enter__ODEVh","nj-animate-left-panel-width-reduce-enter-active":"OAuthProviderSelector_nj-animate-left-panel-width-reduce-enter-active__MGw8A","nj-animate-left-panel-width-reduce-exit":"OAuthProviderSelector_nj-animate-left-panel-width-reduce-exit__MCs_Y","nj-animate-left-panel-width-reduce-exit-active":"OAuthProviderSelector_nj-animate-left-panel-width-reduce-exit-active__hqapa","nj-animate-vertical-appearance-appear":"OAuthProviderSelector_nj-animate-vertical-appearance-appear__IxBwJ","nj-animate-vertical-appearance-appear-active":"OAuthProviderSelector_nj-animate-vertical-appearance-appear-active__s0luj","nj-animate-vertical-appearance-enter":"OAuthProviderSelector_nj-animate-vertical-appearance-enter__ABVJ0","nj-animate-vertical-appearance-enter-active":"OAuthProviderSelector_nj-animate-vertical-appearance-enter-active__iuvYQ","nj-animate-vertical-appearance-exit":"OAuthProviderSelector_nj-animate-vertical-appearance-exit__Q5Ows","nj-animate-vertical-appearance-exit-active":"OAuthProviderSelector_nj-animate-vertical-appearance-exit-active__SD3eq","disabled":"OAuthProviderSelector_disabled__HTfLL","connected":"OAuthProviderSelector_connected__WYvyd","menuItem":"OAuthProviderSelector_menuItem__dKhzv","divider":"OAuthProviderSelector_divider__eY_C9","connectedDot":"OAuthProviderSelector_connectedDot__PeoI6","disconnectIcon":"OAuthProviderSelector_disconnectIcon__TRSNv","infinite-spinner":"OAuthProviderSelector_infinite-spinner__8W59j","fadeIn":"OAuthProviderSelector_fadeIn__0yvHv","blinking":"OAuthProviderSelector_blinking__heY5n","movingRight":"OAuthProviderSelector_movingRight__WZylN"};

/***/ }),

/***/ 37596:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"fadeEnter":"FadeTransition_fadeEnter__n9pxb","fadeEnterActive":"FadeTransition_fadeEnterActive__hgQ_y","fadeExit":"FadeTransition_fadeExit__QVYB6","fadeExitActive":"FadeTransition_fadeExitActive__N6XQM"};

/***/ }),

/***/ 39513:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"DimensionPrimaryItem_root__uRWgc","icon":"DimensionPrimaryItem_icon__GNMel","title":"DimensionPrimaryItem_title__OVO53","subtitle":"DimensionPrimaryItem_subtitle__z_nS8","nj-animate-horizontal-appearance-ltr-enter":"DimensionPrimaryItem_nj-animate-horizontal-appearance-ltr-enter__lNKbS","nj-animate-horizontal-appearance-ltr-enter-active":"DimensionPrimaryItem_nj-animate-horizontal-appearance-ltr-enter-active__50_gB","nj-animate-horizontal-appearance-ltr-exit":"DimensionPrimaryItem_nj-animate-horizontal-appearance-ltr-exit__1eJyf","nj-animate-horizontal-appearance-ltr-exit-active":"DimensionPrimaryItem_nj-animate-horizontal-appearance-ltr-exit-active__WpKCg","nj-animate-left-panel-width-reduce-enter":"DimensionPrimaryItem_nj-animate-left-panel-width-reduce-enter__Y_3In","nj-animate-left-panel-width-reduce-enter-active":"DimensionPrimaryItem_nj-animate-left-panel-width-reduce-enter-active__r2O4f","nj-animate-left-panel-width-reduce-exit":"DimensionPrimaryItem_nj-animate-left-panel-width-reduce-exit__Kwtfd","nj-animate-left-panel-width-reduce-exit-active":"DimensionPrimaryItem_nj-animate-left-panel-width-reduce-exit-active__BSGg_","nj-animate-vertical-appearance-appear":"DimensionPrimaryItem_nj-animate-vertical-appearance-appear__RFP_Q","nj-animate-vertical-appearance-appear-active":"DimensionPrimaryItem_nj-animate-vertical-appearance-appear-active__ac6RR","nj-animate-vertical-appearance-enter":"DimensionPrimaryItem_nj-animate-vertical-appearance-enter__9GqRJ","nj-animate-vertical-appearance-enter-active":"DimensionPrimaryItem_nj-animate-vertical-appearance-enter-active__AQPOp","nj-animate-vertical-appearance-exit":"DimensionPrimaryItem_nj-animate-vertical-appearance-exit__MNuJ_","nj-animate-vertical-appearance-exit-active":"DimensionPrimaryItem_nj-animate-vertical-appearance-exit-active__VzJRC","disabled":"DimensionPrimaryItem_disabled__ytExs","active":"DimensionPrimaryItem_active__Mney6","infinite-spinner":"DimensionPrimaryItem_infinite-spinner__1WJWS","fadeIn":"DimensionPrimaryItem_fadeIn__MA_RQ","blinking":"DimensionPrimaryItem_blinking__hTBXk","movingRight":"DimensionPrimaryItem_movingRight__qd3Gk"};

/***/ }),

/***/ 39985:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"button":"UndoPromptButton_button__nUJ0T","nj-animate-horizontal-appearance-ltr-enter":"UndoPromptButton_nj-animate-horizontal-appearance-ltr-enter__0bQ8D","nj-animate-horizontal-appearance-ltr-enter-active":"UndoPromptButton_nj-animate-horizontal-appearance-ltr-enter-active__xEHIy","nj-animate-horizontal-appearance-ltr-exit":"UndoPromptButton_nj-animate-horizontal-appearance-ltr-exit__9SC4p","nj-animate-horizontal-appearance-ltr-exit-active":"UndoPromptButton_nj-animate-horizontal-appearance-ltr-exit-active__PHa41","nj-animate-left-panel-width-reduce-enter":"UndoPromptButton_nj-animate-left-panel-width-reduce-enter__QGwYf","nj-animate-left-panel-width-reduce-enter-active":"UndoPromptButton_nj-animate-left-panel-width-reduce-enter-active__AxK84","nj-animate-left-panel-width-reduce-exit":"UndoPromptButton_nj-animate-left-panel-width-reduce-exit__5OMCW","nj-animate-left-panel-width-reduce-exit-active":"UndoPromptButton_nj-animate-left-panel-width-reduce-exit-active__gcYlQ","nj-animate-vertical-appearance-appear":"UndoPromptButton_nj-animate-vertical-appearance-appear__elvUp","nj-animate-vertical-appearance-appear-active":"UndoPromptButton_nj-animate-vertical-appearance-appear-active__3AOJE","nj-animate-vertical-appearance-enter":"UndoPromptButton_nj-animate-vertical-appearance-enter__Oh1cs","nj-animate-vertical-appearance-enter-active":"UndoPromptButton_nj-animate-vertical-appearance-enter-active__pfnmy","nj-animate-vertical-appearance-exit":"UndoPromptButton_nj-animate-vertical-appearance-exit__3tTrI","nj-animate-vertical-appearance-exit-active":"UndoPromptButton_nj-animate-vertical-appearance-exit-active__SZs7_","infinite-spinner":"UndoPromptButton_infinite-spinner__BThO0","fadeIn":"UndoPromptButton_fadeIn__iISK_","blinking":"UndoPromptButton_blinking__dw7nK","movingRight":"UndoPromptButton_movingRight__GPyu3"};

/***/ }),

/***/ 40171:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"OAuthConnectModal_root__8OBpc","titleWrapper":"OAuthConnectModal_titleWrapper___uyxF","detailRow":"OAuthConnectModal_detailRow__9bTXc","header":"OAuthConnectModal_header__mKVgZ","details":"OAuthConnectModal_details__LPxfc","websiteLink":"OAuthConnectModal_websiteLink__Izbax","menuItem":"OAuthConnectModal_menuItem__vvxhR","menuItemDisconnect":"OAuthConnectModal_menuItemDisconnect__GH3qV","iconWrapper":"OAuthConnectModal_iconWrapper__S7wJ1","loaderOverlay":"OAuthConnectModal_loaderOverlay__9pCVF","title":"OAuthConnectModal_title__9fPJV","overviewTitle":"OAuthConnectModal_overviewTitle__b0Bj6","overviewText":"OAuthConnectModal_overviewText__Sqa0L","description":"OAuthConnectModal_description__I8npr","detailLabel":"OAuthConnectModal_detailLabel__icMLo","detailValue":"OAuthConnectModal_detailValue__lgwvO","nj-animate-horizontal-appearance-ltr-enter":"OAuthConnectModal_nj-animate-horizontal-appearance-ltr-enter__egMx4","nj-animate-horizontal-appearance-ltr-enter-active":"OAuthConnectModal_nj-animate-horizontal-appearance-ltr-enter-active__EUKIs","nj-animate-horizontal-appearance-ltr-exit":"OAuthConnectModal_nj-animate-horizontal-appearance-ltr-exit__PAFoH","nj-animate-horizontal-appearance-ltr-exit-active":"OAuthConnectModal_nj-animate-horizontal-appearance-ltr-exit-active__ml5Xc","nj-animate-left-panel-width-reduce-enter":"OAuthConnectModal_nj-animate-left-panel-width-reduce-enter__uVcLq","nj-animate-left-panel-width-reduce-enter-active":"OAuthConnectModal_nj-animate-left-panel-width-reduce-enter-active__HSyl7","nj-animate-left-panel-width-reduce-exit":"OAuthConnectModal_nj-animate-left-panel-width-reduce-exit__W4uKC","nj-animate-left-panel-width-reduce-exit-active":"OAuthConnectModal_nj-animate-left-panel-width-reduce-exit-active__3EVup","nj-animate-vertical-appearance-appear":"OAuthConnectModal_nj-animate-vertical-appearance-appear__gUUL1","nj-animate-vertical-appearance-appear-active":"OAuthConnectModal_nj-animate-vertical-appearance-appear-active__wXruO","nj-animate-vertical-appearance-enter":"OAuthConnectModal_nj-animate-vertical-appearance-enter__971n2","nj-animate-vertical-appearance-enter-active":"OAuthConnectModal_nj-animate-vertical-appearance-enter-active__k1JsE","nj-animate-vertical-appearance-exit":"OAuthConnectModal_nj-animate-vertical-appearance-exit__zya4b","nj-animate-vertical-appearance-exit-active":"OAuthConnectModal_nj-animate-vertical-appearance-exit-active__FX1It","icon":"OAuthConnectModal_icon__nm_72","connectButton":"OAuthConnectModal_connectButton__cBI_V","connectedButton":"OAuthConnectModal_connectedButton__0BmSE","greenDot":"OAuthConnectModal_greenDot__gnCRv","overviewSection":"OAuthConnectModal_overviewSection__C1nbc","infinite-spinner":"OAuthConnectModal_infinite-spinner___sano","fadeIn":"OAuthConnectModal_fadeIn__xA3mQ","blinking":"OAuthConnectModal_blinking__BpzZH","movingRight":"OAuthConnectModal_movingRight__QkTaU"};

/***/ }),

/***/ 47880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ useUserMetadata)
/* harmony export */ });
/* harmony import */ var _components_AuthProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19016);
/* harmony import */ var _constants_mockUserSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76254);
/* harmony import */ var _gen_tasks_api_users_public_users_public_gen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76448);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12115);




const useUserMetadata = (isLandingPage)=>{
    const { user } = (0,_components_AuthProvider__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .A)();
    const { data } = (0,_gen_tasks_api_users_public_users_public_gen__WEBPACK_IMPORTED_MODULE_2__/* .useGetMeta */ .JQ)(user, {
        query: {
            enabled: !!user && !isLandingPage
        }
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>({
            metadata: isLandingPage ? _constants_mockUserSettings__WEBPACK_IMPORTED_MODULE_1__/* .MOCK_MODEL_METADATA */ .R : (data === null || data === void 0 ? void 0 : data.model_metadata) || {}
        }), [
        isLandingPage,
        data === null || data === void 0 ? void 0 : data.model_metadata
    ]);
};


/***/ }),

/***/ 49502:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"nj-animate-horizontal-appearance-ltr-enter":"StopResponseButton_nj-animate-horizontal-appearance-ltr-enter__iF6_w","nj-animate-horizontal-appearance-ltr-enter-active":"StopResponseButton_nj-animate-horizontal-appearance-ltr-enter-active__lYRZd","nj-animate-horizontal-appearance-ltr-exit":"StopResponseButton_nj-animate-horizontal-appearance-ltr-exit__oyVaP","nj-animate-horizontal-appearance-ltr-exit-active":"StopResponseButton_nj-animate-horizontal-appearance-ltr-exit-active__XWrUK","nj-animate-left-panel-width-reduce-enter":"StopResponseButton_nj-animate-left-panel-width-reduce-enter__sd16y","nj-animate-left-panel-width-reduce-enter-active":"StopResponseButton_nj-animate-left-panel-width-reduce-enter-active__mj_XG","nj-animate-left-panel-width-reduce-exit":"StopResponseButton_nj-animate-left-panel-width-reduce-exit__MhKmI","nj-animate-left-panel-width-reduce-exit-active":"StopResponseButton_nj-animate-left-panel-width-reduce-exit-active__F1S_U","nj-animate-vertical-appearance-appear":"StopResponseButton_nj-animate-vertical-appearance-appear__QLJEL","nj-animate-vertical-appearance-appear-active":"StopResponseButton_nj-animate-vertical-appearance-appear-active__7ndOU","nj-animate-vertical-appearance-enter":"StopResponseButton_nj-animate-vertical-appearance-enter__GbHjQ","nj-animate-vertical-appearance-enter-active":"StopResponseButton_nj-animate-vertical-appearance-enter-active__Tkp_T","nj-animate-vertical-appearance-exit":"StopResponseButton_nj-animate-vertical-appearance-exit__O784b","nj-animate-vertical-appearance-exit-active":"StopResponseButton_nj-animate-vertical-appearance-exit-active__0bGrX","root":"StopResponseButton_root__23nA1","spinner":"StopResponseButton_spinner__Ixoos","infinite-spinner":"StopResponseButton_infinite-spinner__oFXce","fadeIn":"StopResponseButton_fadeIn__dVinD","blinking":"StopResponseButton_blinking__Pf4sl","movingRight":"StopResponseButton_movingRight__dZafW"};

/***/ }),

/***/ 49595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $W: () => (/* binding */ cachedSafeJsonParse),
/* harmony export */   D5: () => (/* binding */ extractPrimaryParam),
/* harmony export */   J7: () => (/* binding */ extractHtmlTitleFromMessages),
/* harmony export */   Yx: () => (/* binding */ normalizeContentToMarkdownString),
/* harmony export */   dY: () => (/* binding */ fixBrokenMarkdownLinks),
/* harmony export */   gY: () => (/* binding */ clearJsonCache),
/* harmony export */   jD: () => (/* binding */ safeJsonParse),
/* harmony export */   qH: () => (/* binding */ parseToolResultOutput),
/* harmony export */   tx: () => (/* binding */ googleDocsToFiles),
/* harmony export */   uS: () => (/* binding */ isOlderThan7Days)
/* harmony export */ });
/* unused harmony exports MAX_FILE_SIZE, ZIP_FORMATS, extractParagraphsBeforeTag */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19482);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18720);
/* harmony import */ var mime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5422);
/* harmony import */ var _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73262);




// Flag to control whether tool result messages are rendered
// Helper function to safely parse JSON strings from content/metadata
function safeJsonParse(jsonString, fallback) {
    if (!jsonString) {
        return fallback;
    }
    try {
        const preparedJson = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .safeRepairJson */ .Nh)(jsonString);
        return JSON.parse(preparedJson);
    } catch (e) {
        // datadogLogs.logger.warn('Failed to parse JSON string:', jsonString, e); // Optional: log errors
        return fallback;
    }
}
// Cache for JSON parsing to avoid repeatedly calling JSON.parse on identical
// strings.  This dramatically reduces CPU time when the same message content
// or metadata is processed multiple times (which happens a lot during re-renders).
const jsonParseCache = new Map();
function cachedSafeJsonParse(jsonString, fallback) {
    if (!jsonString) return fallback;
    if (jsonParseCache.has(jsonString)) return jsonParseCache.get(jsonString);
    const parsed = safeJsonParse(jsonString, fallback);
    jsonParseCache.set(jsonString, parsed);
    // Prevent unbounded growth (simple LRU eviction)
    if (jsonParseCache.size > 5000) {
        const firstKey = jsonParseCache.keys().next().value;
        jsonParseCache.delete(firstKey);
    }
    return parsed;
}
function clearJsonCache() {
    jsonParseCache.clear();
}
// Helper function to extract a primary parameter from XML/arguments
const extractPrimaryParam = (toolName, content)=>{
    if (!content) return null;
    try {
        // Handle browser tools with a prefix check
        if (toolName === null || toolName === void 0 ? void 0 : toolName.toLowerCase().startsWith('browser-')) {
            // Try to extract URL for navigation
            const urlMatch = content.match(/url=(?:"|')([^"|']+)(?:"|')/);
            if (urlMatch) return urlMatch[1];
            // For other browser operations, extract the goal or action
            const goalMatch = content.match(/goal=(?:"|')([^"|']+)(?:"|')/);
            if (goalMatch) {
                const goal = goalMatch[1];
                return goal.length > 30 ? goal.substring(0, 27) + '...' : goal;
            }
            return null;
        }
        // Special handling for XML content - extract file_path from the actual attributes
        if (content.startsWith('<') && content.includes('>')) {
            const xmlAttrs = content.match(/<[^>]+\s+([^>]+)>/);
            if (xmlAttrs && xmlAttrs[1]) {
                const attrs = xmlAttrs[1].trim();
                const filePathMatch = attrs.match(/file_path=["']([^"']+)["']/);
                if (filePathMatch) {
                    return filePathMatch[1].split('/').pop() || filePathMatch[1];
                }
                // Try to get command for execute-command
                if ((toolName === null || toolName === void 0 ? void 0 : toolName.toLowerCase()) === 'execute-command') {
                    const commandMatch = attrs.match(/(?:command|cmd)=["']([^"']+)["']/);
                    if (commandMatch) {
                        const cmd = commandMatch[1];
                        return cmd.length > 30 ? cmd.substring(0, 27) + '...' : cmd;
                    }
                }
            }
        }
        // Simple regex for common parameters - adjust as needed
        let match = null;
        switch(toolName === null || toolName === void 0 ? void 0 : toolName.toLowerCase()){
            // File operations
            case 'create-file':
            case 'full-file-rewrite':
            case 'read-file':
            case 'delete-file':
            case 'str-replace':
                // Try to match file_path attribute
                match = content.match(/file_path=(?:"|')([^"|']+)(?:"|')/);
                // Return just the filename part
                return match ? match[1].split('/').pop() || match[1] : null;
            // Shell commands
            case 'execute-command':
                // Extract command content
                match = content.match(/command=(?:"|')([^"|']+)(?:"|')/);
                if (match) {
                    const cmd = match[1];
                    return cmd.length > 30 ? cmd.substring(0, 27) + '...' : cmd;
                }
                return null;
            // Web search
            case 'web-search':
                match = content.match(/query=(?:"|')([^"|']+)(?:"|')/);
                return match ? match[1].length > 30 ? match[1].substring(0, 27) + '...' : match[1] : null;
            // Data provider operations
            case 'call-data-provider':
                match = content.match(/service_name=(?:"|')([^"|']+)(?:"|')/);
                const route = content.match(/route=(?:"|')([^"|']+)(?:"|')/);
                return match && route ? "".concat(match[1], "/").concat(route[1]) : match ? match[1] : null;
            // Deployment
            case 'deploy-site':
                match = content.match(/site_name=(?:"|')([^"|']+)(?:"|')/);
                return match ? match[1] : null;
        }
        return null;
    } catch (e) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_3__/* .datadogLogs */ .yf.logger.warn('Error parsing tool parameters:', {}, e);
        return null;
    }
};
const fixBrokenMarkdownLinks = (text)=>{
    return text.replace(/\[([^\]]*?)\s*\n\s*([^\]]*?)\]\(([^)]+)\)/g, (_, part1, part2, url)=>{
        const label = "".concat(part1.trim(), " ").concat(part2.trim());
        return "[".concat(label, "](").concat(url, ") \n");
    });
};
// Normalize assistant/user content to a markdown string.
// Supports strings, arrays of {type: 'text'|'image_url'}, and role-wrapped objects with { content }.
function normalizeContentToMarkdownString(value) {
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) {
        return value.map((part)=>{
            if (!part) return '';
            if (part.type === 'text') return part.text || '';
            if (part.type === 'image_url') {
                var _part_image_url;
                const url = ((_part_image_url = part.image_url) === null || _part_image_url === void 0 ? void 0 : _part_image_url.url) || part.image_url;
                if (!url) return '';
                // todo: embed image model
                return "![Generated Image](".concat(url, ")");
            }
            return '';
        }).filter(Boolean).join('\n\n');
    }
    if (value && typeof value === 'object' && 'content' in value) {
        return normalizeContentToMarkdownString(value.content);
    }
    return value == null ? '' : String(value);
}
const MAX_FILE_SIZE = 25 * 1024 * 1024;
const FILENAME_REGEX = /^[a-zA-Z0-9._-]+[.][a-zA-Z0-9]+$/;
const ZIP_FORMATS = [
    'application/zip',
    'application/x-zip-compressed',
    'application/x-zip',
    'application/octet-stream',
    'application/binary',
    'application/x-binary',
    'binary/octet-stream'
];
const GOOGLE_PROPRIETARY_MIME_TYPE = 'application/vnd.google-apps';
// supported proprietary Google mime types
const googleDriveMimeTypeMapping = {
    'application/vnd.google-apps.document': 'text/plain',
    'application/vnd.google-apps.drawing': 'image/jpeg',
    'application/vnd.google-apps.fusiontable': 'text/csv',
    'application/vnd.google-apps.spreadsheet': 'text/csv',
    'application/vnd.google-apps.photo': 'image/jpeg',
    'application/vnd.google-apps.presentation': 'text/plain'
};
const isValidFilename = (fileName)=>FILENAME_REGEX.test(fileName);
const buildFileToBigMessage = (fileName)=>{
    return "Sorry, ".concat(fileName || 'the attached file', " is too large to process. Please upload a smaller file and try again.");
};
// For proprietary (Google private formats) files Google Drive does not provide us with the file extension
const buildUnsupportedFileExtensionMessage = (fileName)=>{
    var _fileName_split_pop;
    return fileName && isValidFilename(fileName) ? ".".concat((_fileName_split_pop = fileName.split('.').pop()) === null || _fileName_split_pop === void 0 ? void 0 : _fileName_split_pop.toLowerCase(), " file type is not supported. Please try again with a compatible file format.") : 'This file type is not supported. Please try again with a compatible file format.';
};
const validateGoogleDoc = (doc)=>{
    var _doc_mimeType;
    // Check if it's a Google proprietary document type
    if ((_doc_mimeType = doc.mimeType) === null || _doc_mimeType === void 0 ? void 0 : _doc_mimeType.startsWith(GOOGLE_PROPRIETARY_MIME_TYPE)) {
        const supportedMimeType = googleDriveMimeTypeMapping[doc.mimeType];
        if (!supportedMimeType) {
            sonner__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .oR.error(buildUnsupportedFileExtensionMessage());
            return false;
        }
    }
    // Check if it's an unsupported ZIP format
    const isZipFormat = doc.name && doc.mimeType && ZIP_FORMATS.includes(doc.mimeType);
    if (isZipFormat) {
        sonner__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .oR.error(buildUnsupportedFileExtensionMessage(doc.name));
        return false;
    }
    // Check file size limit
    const fileSize = doc.sizeBytes || 0;
    if (fileSize > MAX_FILE_SIZE) {
        sonner__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .oR.error(buildFileToBigMessage(doc.name));
        return false;
    }
    return true;
};
async function googleDocsToFiles(pickerPayload) {
    try {
        const downloadUrlPromises = pickerPayload.map(async (doc)=>{
            var _doc_mimeType;
            if (!validateGoogleDoc(doc)) {
                return;
            }
            const fileName = doc.name;
            // proprietary Google type, we should use drive.export API
            if ((_doc_mimeType = doc.mimeType) === null || _doc_mimeType === void 0 ? void 0 : _doc_mimeType.startsWith(GOOGLE_PROPRIETARY_MIME_TYPE)) {
                const convertedMimeType = googleDriveMimeTypeMapping[doc.mimeType];
                const response = await gapi.client.drive.files.export({
                    fileId: doc.id,
                    mimeType: convertedMimeType
                });
                const blob = new Blob([
                    response.body
                ], {
                    type: convertedMimeType
                });
                return new File([
                    blob
                ], "".concat(fileName, ".").concat(mime__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getExtension(convertedMimeType)), {
                    type: blob.type
                });
            // for non-google files we use get API and provide alt:media param to fetch the content
            } else {
                const response = await gapi.client.drive.files.get({
                    fileId: doc.id,
                    fields: 'id',
                    alt: 'media'
                });
                // response is a binary string, convert it to Uint8Array
                const len = response.body.length;
                const array = new Uint8Array(len);
                for(let i = 0; i < len; i++){
                    array[i] = response.body.charCodeAt(i);
                }
                const blob = new Blob([
                    array
                ], {
                    type: doc.mimeType
                });
                // Create a File object from the Blob
                return new File([
                    blob
                ], fileName, {
                    type: blob.type
                });
            }
        });
        const files = await Promise.all(downloadUrlPromises);
        const validFiles = files === null || files === void 0 ? void 0 : files.filter((file)=>file !== undefined);
        return validFiles;
    } catch (error) {
        return;
    }
}
const extractParagraphsBeforeTag = (param)=>{
    let { content, lastIndex, match } = param;
    const textBeforeTag = content.substring(lastIndex, match.index);
    const captures = [
        match[1],
        match[2]
    ];
    const isToolAfterTag = captures.some(Boolean) && !captures.includes('ask');
    const textBeforeTagParagraphs = textBeforeTag.split(/\n\s*\n/).map((p)=>p.trim()).filter(Boolean);
    const lastParagraphIndex = textBeforeTagParagraphs.length - 1;
    return {
        textBeforeTagParagraphs,
        lastParagraphIndex,
        isToolAfterTag
    };
};
const isOlderThan7Days = (createdAt)=>{
    const createdTime = new Date(createdAt).getTime();
    const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
    return Date.now() - createdTime > sevenDaysInMs;
};
/**
 * Parses ToolResult output from tool message content.
 * Handles the format: ToolResult(success=True, output='{...json...}')
 * Returns the parsed JSON output or null if parsing fails.
 */ function parseToolResultOutput(content) {
    if (!content) return null;
    try {
        // First try to parse as JSON (the outer wrapper)
        const parsedContent = cachedSafeJsonParse(content, {});
        const innerContent = (parsedContent === null || parsedContent === void 0 ? void 0 : parsedContent.content) || content;
        // Extract the output from ToolResult(success=True, output='...')
        const outputMatch = innerContent.match(/ToolResult\(.*?output='([\s\S]*?)'.*?\)/);
        if (outputMatch) {
            // Unescape and parse the JSON inside
            const unescaped = outputMatch[1].replace(/\\n/g, '\n').replace(/\\"/g, '"');
            return cachedSafeJsonParse(unescaped, null);
        }
        return null;
    } catch (e) {
        return null;
    }
}
/**
 * Extracts HTML title from tool messages in a message group.
 * Searches for create-file, full-file-rewrite, or str-replace tool messages
 * and extracts the title from metadata.parsing_details.root_content.
 *
 * @param messages - Array of messages to search through
 * @returns The extracted HTML title or null if not found
 */ function extractHtmlTitleFromMessages(messages) {
    if (!(messages === null || messages === void 0 ? void 0 : messages.length)) return null;
    const FILE_TOOL_PATTERN = /<(?:create-file|full-file-rewrite|str-replace)>/;
    const TITLE_PATTERN = /<title[^>]*>([\s\S]*?)<\/title>/i;
    for (const message of messages){
        if (message.type !== 'tool' || !message.metadata || !FILE_TOOL_PATTERN.test(message.content || '')) {
            continue;
        }
        try {
            var _metadata_parsing_details;
            const metadata = cachedSafeJsonParse(message.metadata, {});
            const rootContent = metadata === null || metadata === void 0 ? void 0 : (_metadata_parsing_details = metadata.parsing_details) === null || _metadata_parsing_details === void 0 ? void 0 : _metadata_parsing_details.root_content;
            if (!rootContent) continue;
            const titleMatch = rootContent.match(TITLE_PATTERN);
            if (titleMatch) {
                return titleMatch[1].trim();
            }
        } catch (e) {
        // Ignore parsing errors
        }
    }
    return null;
}


/***/ }),

/***/ 49859:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"ScreenshotHandler_root__So42O","nj-animate-horizontal-appearance-ltr-enter":"ScreenshotHandler_nj-animate-horizontal-appearance-ltr-enter___30st","nj-animate-horizontal-appearance-ltr-enter-active":"ScreenshotHandler_nj-animate-horizontal-appearance-ltr-enter-active__Wjovx","nj-animate-horizontal-appearance-ltr-exit":"ScreenshotHandler_nj-animate-horizontal-appearance-ltr-exit__skTmF","nj-animate-horizontal-appearance-ltr-exit-active":"ScreenshotHandler_nj-animate-horizontal-appearance-ltr-exit-active__9hyT_","nj-animate-left-panel-width-reduce-enter":"ScreenshotHandler_nj-animate-left-panel-width-reduce-enter__PIyIt","nj-animate-left-panel-width-reduce-enter-active":"ScreenshotHandler_nj-animate-left-panel-width-reduce-enter-active__QP3uj","nj-animate-left-panel-width-reduce-exit":"ScreenshotHandler_nj-animate-left-panel-width-reduce-exit__Q7D0k","nj-animate-left-panel-width-reduce-exit-active":"ScreenshotHandler_nj-animate-left-panel-width-reduce-exit-active__pCQsa","nj-animate-vertical-appearance-appear":"ScreenshotHandler_nj-animate-vertical-appearance-appear__RyYgl","nj-animate-vertical-appearance-appear-active":"ScreenshotHandler_nj-animate-vertical-appearance-appear-active__QNeqY","nj-animate-vertical-appearance-enter":"ScreenshotHandler_nj-animate-vertical-appearance-enter__yCH0M","nj-animate-vertical-appearance-enter-active":"ScreenshotHandler_nj-animate-vertical-appearance-enter-active__NKGeW","nj-animate-vertical-appearance-exit":"ScreenshotHandler_nj-animate-vertical-appearance-exit__KodPB","nj-animate-vertical-appearance-exit-active":"ScreenshotHandler_nj-animate-vertical-appearance-exit-active__LQcI2","infinite-spinner":"ScreenshotHandler_infinite-spinner__IfIBx","fadeIn":"ScreenshotHandler_fadeIn__mT2Te","blinking":"ScreenshotHandler_blinking__8sVJC","movingRight":"ScreenshotHandler_movingRight__7_gc9"};

/***/ }),

/***/ 50587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ ChatInput)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(85203);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 244 modules
var proxy = __webpack_require__(58333);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(35299);
// EXTERNAL MODULE: ./src/components/ui/card.tsx
var card = __webpack_require__(86948);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/singleton/apis/fetchAuthSession.mjs
var fetchAuthSession = __webpack_require__(42917);
// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button = __webpack_require__(62717);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Paperclip.es.js + 1 modules
var Paperclip_es = __webpack_require__(33956);
// EXTERNAL MODULE: ./node_modules/sonner/dist/index.mjs
var dist = __webpack_require__(18720);
// EXTERNAL MODULE: ./src/components/ui/tooltip.tsx
var tooltip = __webpack_require__(46767);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./src/components/ui/SpinnerSimple/index.tsx
var SpinnerSimple = __webpack_require__(2726);
// EXTERNAL MODULE: ./src/lib/envs.ts
var envs = __webpack_require__(68276);
// EXTERNAL MODULE: ./src/hooks/use-mobile.ts
var use_mobile = __webpack_require__(75409);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/path-browserify/index.js
var path_browserify = __webpack_require__(47712);
// EXTERNAL MODULE: ./node_modules/@datadog/browser-logs/esm/entries/main.js + 109 modules
var main = __webpack_require__(73262);
// EXTERNAL MODULE: ./src/hooks/threadHooks/usePromptCommandActions.ts
var threadHooks_usePromptCommandActions = __webpack_require__(70169);
// EXTERNAL MODULE: ./src/hooks/threadHooks/usePromptCommandState.ts
var threadHooks_usePromptCommandState = __webpack_require__(38967);
// EXTERNAL MODULE: ./src/utils/index.ts + 9 modules
var utils = __webpack_require__(19482);
// EXTERNAL MODULE: ./src/types/index.ts + 2 modules
var types = __webpack_require__(37893);
// EXTERNAL MODULE: ./src/lib/utils.ts
var lib_utils = __webpack_require__(64269);
// EXTERNAL MODULE: ./src/hooks/useBillingError.ts
var hooks_useBillingError = __webpack_require__(50947);
// EXTERNAL MODULE: ./src/hooks/index.ts + 39 modules
var hooks = __webpack_require__(71203);
;// ./src/components/thread/chat-input/file-upload-handler.tsx
/* __next_internal_client_entry_do_not_use__ FileUploadHandler,FileUploadHandlerItem,handleFiles,handleLocalFiles auto */ 



















const handleLocalFiles = (files, setPendingFiles, setUploadedFiles, imageOnly)=>{
    const filteredFiles = files.filter((file)=>{
        var _file_type;
        if (file.size > constants/* FILE_SIZE_LIMIT */.tcf * 1024 * 1024) {
            dist/* toast */.oR.error("File size exceeds ".concat(constants/* FILE_SIZE_LIMIT */.tcf, "MB limit: ").concat(file.name));
            return false;
        }
        if (imageOnly && !((_file_type = file.type) === null || _file_type === void 0 ? void 0 : _file_type.startsWith('image/'))) {
            dist/* toast */.oR.error("Only image files are allowed: ".concat(file.name));
            return false;
        }
        return true;
    });
    setPendingFiles((prevFiles)=>[
            ...prevFiles,
            ...filteredFiles
        ]);
    const newUploadedFiles = filteredFiles.map((file)=>({
            name: file.name,
            path: "/workspace/".concat(file.name),
            size: file.size,
            type: file.type
        }));
    setUploadedFiles((prev)=>[
            ...prev,
            ...newUploadedFiles
        ]);
    filteredFiles.forEach((file)=>{
        dist/* toast */.oR.success("File attached: ".concat(file.name));
    });
};
const uploadFiles = async (files, threadId, setUploadedFiles, setIsUploading, handleBillingError, setIsLocalUploading, setIsGDUploading, imageOnly, executionMode)=>{
    try {
        setIsUploading(true);
        setIsLocalUploading === null || setIsLocalUploading === void 0 ? void 0 : setIsLocalUploading(true);
        setIsGDUploading === null || setIsGDUploading === void 0 ? void 0 : setIsGDUploading(true);
        const newUploadedFiles = [];
        for (const file of files){
            var _file_type, _session_tokens;
            if (file.size > constants/* FILE_SIZE_LIMIT */.tcf * 1024 * 1024) {
                dist/* toast */.oR.error("File size exceeds ".concat(constants/* FILE_SIZE_LIMIT */.tcf, "MB limit: ").concat(file.name));
                continue;
            }
            if (imageOnly && !((_file_type = file.type) === null || _file_type === void 0 ? void 0 : _file_type.startsWith('image/'))) {
                dist/* toast */.oR.error("Only image files are allowed: ".concat(file.name));
                continue;
            }
            const formData = new FormData();
            formData.append('file', file);
            const uploadPath = "/workspace/".concat(file.name);
            formData.append('path', uploadPath);
            const session = await (0,fetchAuthSession/* fetchAuthSession */.$)();
            if (!(session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken)) {
                throw new Error('No access token available');
            }
            const url = new URL("".concat(envs/* NEXT_PUBLIC_BACKEND_URL */.xg, "/threads/").concat(threadId, "/sandbox/files"));
            if (executionMode) {
                url.searchParams.append('execution_mode', executionMode);
            }
            const response = await fetch(url.toString(), {
                method: 'POST',
                headers: {
                    Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
                },
                body: formData
            });
            if (!response.ok) {
                if (response.status === 402) {
                    await (0,lib_utils/* handlePaymentErrors */.Eb)(response);
                } else {
                    throw new Error("Upload failed: ".concat(response.statusText));
                }
            }
            // Backend will clean the filename
            const cleanedPath = await response.json().then((data)=>data.path);
            const cleanedFilename = (0,path_browserify.basename)(cleanedPath);
            newUploadedFiles.push({
                name: cleanedFilename,
                path: cleanedPath,
                size: file.size,
                type: file.type
            });
            dist/* toast */.oR.success("File uploaded: ".concat(cleanedFilename));
        }
        setUploadedFiles((prev)=>[
                ...prev,
                ...newUploadedFiles
            ]);
    } catch (error) {
        if (error instanceof types/* BillingError */.Ey) {
            handleBillingError === null || handleBillingError === void 0 ? void 0 : handleBillingError(error);
            return;
        }
        main/* datadogLogs */.yf.logger.error('File upload failed:', {}, error);
        dist/* toast */.oR.error(typeof error === 'string' ? error : error instanceof Error ? error.message : 'Failed to upload file');
    } finally{
        setIsUploading(false);
        setIsLocalUploading === null || setIsLocalUploading === void 0 ? void 0 : setIsLocalUploading(false);
        setIsGDUploading === null || setIsGDUploading === void 0 ? void 0 : setIsGDUploading(false);
    }
};
const handleFiles = async (files, threadId, setPendingFiles, setUploadedFiles, setIsUploading, handleBillingError, setIsLocalUploading, setIsGDUploading, imageOnly, executionMode)=>{
    if (threadId) {
        // If we have a sandboxId, upload files directly
        await uploadFiles(files, threadId, setUploadedFiles, setIsUploading, handleBillingError, setIsLocalUploading, setIsGDUploading, imageOnly, executionMode);
    } else {
        // Otherwise, store files locally
        handleLocalFiles(files, setPendingFiles, setUploadedFiles, imageOnly);
    }
};
const FileUploadHandlerInner = (param)=>{
    let { loading, disabled, isAttachmentDisabled, isAgentRunning, isUploading, threadId, setPendingFiles, setUploadedFiles, setIsUploading, isImageGenerator, handleFileUpload, isLocalUploading, asItem } = param;
    const isMobile = (0,use_mobile/* useIsMobile */.a)();
    if (asItem) return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-row gap-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Paperclip_es/* PaperclipIcon */.A, {
                size: constants/* SVG_SIZE_M */.ng3
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: "Add files or photos"
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipProvider */.Bc, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                    asChild: true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                        onClick: handleFileUpload,
                        color: "secondary",
                        shape: isMobile ? 'round' : 'regular',
                        disabled: loading || disabled && !isAgentRunning || isAttachmentDisabled || isUploading,
                        children: isLocalUploading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SpinnerSimple/* SpinnerSimple */.c, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Paperclip_es/* PaperclipIcon */.A, {
                            size: constants/* SVG_SIZE_M */.ng3
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                    side: "top",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "Attach files"
                    })
                })
            ]
        })
    });
};
const FileUploadHandler = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef(function FileUploadHandler(props, ref) {
    const [isLocalUploading, setIsLocalUploading] = useState(false);
    const { onSetCurrentCommand } = usePromptCommandActions();
    const { currentCommand } = usePromptCommandState();
    const { handleBillingError } = useBillingError();
    const { selectedExecutionMode } = useExecutionModeState();
    const handleFileUpload = ()=>{
        if (ref && 'current' in ref && ref.current) {
            ref.current.click();
        }
    };
    const processFileUpload = async (event)=>{
        ;
        if (!event.target.files || event.target.files.length === 0) return;
        const files = Array.from(event.target.files);
        // attach files logic requires refactoring to remove code duplication
        if (isChatCommand(currentCommand)) {
            onSetCurrentCommand(null);
        }
        // Use the helper function instead of the static method
        handleFiles(files, props.threadId, props.setPendingFiles, props.setUploadedFiles, props.setIsUploading, handleBillingError, setIsLocalUploading, undefined, props.isImageGenerator, selectedExecutionMode);
        event.target.value = '';
    };
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(FileUploadHandlerInner, {
                ...props,
                isLocalUploading: isLocalUploading,
                handleFileUpload: handleFileUpload
            }),
            /*#__PURE__*/ _jsx("input", {
                type: "file",
                ref: ref,
                className: "hidden",
                onChange: processFileUpload,
                multiple: true,
                accept: props.isImageGenerator ? 'image/*' : '*'
            })
        ]
    });
})));
const FileUploadHandlerItem = /*#__PURE__*/ (0,react.forwardRef)(function FileUploadHandlerItem(props, ref) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FileUploadHandlerInner, {
        ...props,
        isLocalUploading: false,
        asItem: true
    });
});


;// ./src/components/ui/textarea.tsx



function Textarea(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
        "data-slot": "textarea",
        className: (0,lib_utils.cn)('border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ...props
    });
}


// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/GoogleDriveLogo.es.js + 1 modules
var GoogleDriveLogo_es = __webpack_require__(39706);
// EXTERNAL MODULE: ./src/components/ui/Icon/index.ts
var ui_Icon = __webpack_require__(87566);
// EXTERNAL MODULE: ./src/components/AuthProvider.tsx
var AuthProvider = __webpack_require__(19016);
// EXTERNAL MODULE: ./src/contexts/GoogleApiContext.tsx + 1 modules
var GoogleApiContext = __webpack_require__(67484);
// EXTERNAL MODULE: ./src/components/thread/utils.ts
var thread_utils = __webpack_require__(49595);
// EXTERNAL MODULE: ./node_modules/@react-oauth/google/dist/index.esm.js
var index_esm = __webpack_require__(84604);
// EXTERNAL MODULE: ./src/hooks/use-in-react-native-webview.ts
var use_in_react_native_webview = __webpack_require__(75664);
// EXTERNAL MODULE: ./src/components/ui/popover.tsx
var popover = __webpack_require__(26333);
// EXTERNAL MODULE: ./src/components/ui/ButtonTryOnDesktop/index.tsx + 1 modules
var ButtonTryOnDesktop = __webpack_require__(29345);
;// ./src/components/thread/chat-input/components/GoogleDriveHandler/GoogleDriveHandler.tsx
/* __next_internal_client_entry_do_not_use__ GoogleDriveHandler auto */ 





















const getUserGoogleProviderEmail = async (ninja_user_id)=>{
    var _session_tokens;
    const session = await (0,fetchAuthSession/* fetchAuthSession */.$)();
    if (!(session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken)) {
        throw new Error('No access token available');
    }
    const response = await fetch("".concat(envs/* NEXT_PUBLIC_NINJA_TOKEN_API_URL */.Uf, "/tokens/providers?user_id=").concat(ninja_user_id), {
        method: 'GET',
        headers: {
            Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch user providers');
    }
    const data = await response.json();
    if (!(data === null || data === void 0 ? void 0 : data.providers)) {
        return null;
    }
    for (const provider of data.providers){
        if (provider.provider_id === 'Google') {
            return provider.email;
        }
    }
    return null;
};
const getGoogleToken = async (ninja_user_id, userGoogleProviderEmail)=>{
    if (!userGoogleProviderEmail) {
        return;
    }
    try {
        var _session_tokens, _data_scopes;
        const session = await (0,fetchAuthSession/* fetchAuthSession */.$)();
        if (!(session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken)) {
            throw new Error('No access token available');
        }
        const response = await fetch("".concat(envs/* NEXT_PUBLIC_NINJA_TOKEN_API_URL */.Uf, "/tokens/?user_id=").concat(ninja_user_id, "&provider_id=Google&email=").concat(userGoogleProviderEmail), {
            method: 'GET',
            headers: {
                Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
            }
        });
        if (!response.ok) {
            return;
        }
        const data = await response.json();
        if (!(data === null || data === void 0 ? void 0 : (_data_scopes = data.scopes) === null || _data_scopes === void 0 ? void 0 : _data_scopes.includes('file.readonly'))) {
            return;
        }
        return data;
    } catch (error) {
        throw error;
    }
};
const GoogleDriveHandler = /*#__PURE__*/ (0,react.forwardRef)(function GoogleDriveHandler(param, ref) {
    let { loading, disabled, isAttachmentDisabled, isAgentRunning, isUploading, threadId, setPendingFiles, setUploadedFiles, setIsUploading, isImageGenerator, asItem } = param;
    const { user, userData } = (0,AuthProvider/* useAuth */.A)();
    const { handleBillingError } = (0,hooks_useBillingError/* useBillingError */.L)();
    const { loadedApis: { drive: driveApiLoaded, gapi: gapiLoaded, drivePicker: drivePickerLoaded } } = (0,react.useContext)(GoogleApiContext/* default */.A);
    const [picker, setPicker] = (0,react.useState)();
    const [isReady, setIsReady] = (0,react.useState)(false);
    const [isGDUploading, setIsGDUploading] = (0,react.useState)(false);
    const { currentCommand } = (0,hooks/* usePromptCommandState */.M5)();
    const { onSetCurrentCommand } = (0,hooks/* usePromptCommandActions */.I)();
    const { selectedExecutionMode } = (0,hooks/* useExecutionModeState */._F)();
    const [popoverOpen, setPopoverOpen] = (0,react.useState)(false);
    const isInReactNativeWebView = (0,use_in_react_native_webview/* useInReactNativeWebView */.M)(false);
    const onCallback = (0,react.useCallback)(async (payload)=>{
        if ((payload === null || payload === void 0 ? void 0 : payload.docs) && (payload === null || payload === void 0 ? void 0 : payload.action) === google.picker.Action.PICKED) {
            try {
                const result = await (0,thread_utils/* googleDocsToFiles */.tx)(payload === null || payload === void 0 ? void 0 : payload.docs);
                if (!result) {
                    dist/* toast */.oR.error('Failed to get files from Picker');
                    return;
                }
                // attach files logic requires refactoring to remove code duplication
                if ((0,utils/* isChatCommand */.fP)(currentCommand)) {
                    onSetCurrentCommand(null);
                }
                await handleFiles(result, threadId, setPendingFiles, setUploadedFiles, setIsUploading, handleBillingError, undefined, setIsGDUploading, isImageGenerator, selectedExecutionMode);
            } catch (error) {
                dist/* toast */.oR.error('Failed to get files from Picker');
            }
        }
    }, [
        threadId,
        setPendingFiles,
        setUploadedFiles,
        setIsUploading,
        isImageGenerator,
        selectedExecutionMode
    ]);
    const googleLoginParams = {
        flow: 'auth-code',
        ux_mode: 'redirect',
        redirect_uri: envs/* NEXT_PUBLIC_GOOGLE_AUTHORIZATION_REDIRECT_URI */.a0,
        hint: userData.email,
        state: "".concat(window.location.href.split('?')[0], "?user_id=").concat(user),
        scope: 'https://www.googleapis.com/auth/drive.file'
    };
    const connectGoogleDrive = (0,index_esm/* useGoogleLogin */.mg)(googleLoginParams);
    const handleFileUpload = async ()=>{
        try {
            var _gapi_client_getToken;
            const userGoogleProviderEmail = await getUserGoogleProviderEmail(user);
            const googleToken = await getGoogleToken(user, userGoogleProviderEmail);
            if (!googleToken || !googleToken.access_token) {
                if (isInReactNativeWebView) {
                    setPopoverOpen(true);
                    return 'popover';
                }
                connectGoogleDrive();
                return;
            }
            const picker = new google.picker.PickerBuilder().addView(isImageGenerator ? google.picker.ViewId.DOCS_IMAGES : google.picker.ViewId.DOCS).setOAuthToken(googleToken === null || googleToken === void 0 ? void 0 : googleToken.access_token).setDeveloperKey(envs/* NEXT_PUBLIC_GOOGLE_API_KEY */.NA).setCallback(onCallback).setAppId(envs/* NEXT_PUBLIC_GOOGLE_CLIENT_ID */.At.split('-')[0]).setOrigin(envs/* NEXT_PUBLIC_URL */._T).setMaxItems(10).enableFeature(google.picker.Feature.MULTISELECT_ENABLED).build();
            setPicker(picker);
            if (((_gapi_client_getToken = gapi.client.getToken()) === null || _gapi_client_getToken === void 0 ? void 0 : _gapi_client_getToken.access_token) !== googleToken.access_token) {
                gapi.client.setToken({
                    access_token: googleToken.access_token
                });
            }
            setIsReady(true);
            picker.setVisible(true);
        } catch (error) {
            dist/* toast */.oR.error(error instanceof Error ? error.message : 'Failed to initialize Google Drive picker');
        }
    };
    (0,react.useImperativeHandle)(ref, ()=>({
            handleFileUpload
        }));
    if (asItem) return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-row gap-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Icon/* Icon */.I, {
                size: constants/* SVG_SIZE_M */.ng3,
                type: "googleDrive"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: "Add from Google Drive"
            })
        ]
    });
    return isInReactNativeWebView ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(popover/* Popover */.AM, {
        open: popoverOpen,
        onOpenChange: setPopoverOpen,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(popover/* PopoverAnchor */.dT, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                    onClick: handleFileUpload,
                    color: "secondary",
                    shape: "round",
                    disabled: loading || disabled && !isAgentRunning || isAttachmentDisabled || isUploading,
                    children: isGDUploading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SpinnerSimple/* SpinnerSimple */.c, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(GoogleDriveLogo_es/* GoogleDriveLogoIcon */.y, {
                        size: constants/* SVG_SIZE_M */.ng3
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonTryOnDesktop/* ButtonTryOnDesktopPopoverContent */.vK, {})
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(popover/* Popover */.AM, {
        open: popoverOpen,
        onOpenChange: setPopoverOpen,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipProvider */.Bc, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                            asChild: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(popover/* PopoverAnchor */.dT, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                                    onClick: handleFileUpload,
                                    color: "secondary",
                                    shape: "round",
                                    disabled: loading || disabled && !isAgentRunning || isUploading,
                                    children: isGDUploading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SpinnerSimple/* SpinnerSimple */.c, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(GoogleDriveLogo_es/* GoogleDriveLogoIcon */.y, {
                                        size: constants/* SVG_SIZE_M */.ng3
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                            side: "top",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                children: "Attach files from Google Drive"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonTryOnDesktop/* ButtonTryOnDesktopPopoverContent */.vK, {})
        ]
    });
});

;// ./src/components/thread/chat-input/components/GoogleDriveHandler/index.ts


// EXTERNAL MODULE: ./src/components/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(6259);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Camera.es.js + 1 modules
var Camera_es = __webpack_require__(61560);
;// ./src/components/thread/chat-input/components/ScreenshotHandler/utils.ts
/**
 * Captures a single frame from a MediaStream and converts it to a Blob
 *
 * @param stream - The MediaStream from getDisplayMedia
 * @returns Promise that resolves to a PNG Blob of the captured frame
 */ const captureScreenFrame = async (stream)=>{
    return new Promise((resolve, reject)=>{
        const video = document.createElement('video');
        video.srcObject = stream;
        video.autoplay = true;
        video.onloadedmetadata = async ()=>{
            // Wait for first frame to be ready
            await new Promise((r)=>setTimeout(r, 100));
            // Create canvas with video dimensions
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                reject(new Error('Canvas context not available'));
                return;
            }
            // Draw video frame to canvas
            ctx.drawImage(video, 0, 0);
            // Convert canvas to blob
            canvas.toBlob((blob)=>{
                if (blob) {
                    resolve(blob);
                } else {
                    reject(new Error('Failed to create blob'));
                }
            }, 'image/png');
        };
        video.onerror = ()=>reject(new Error('Video loading failed'));
    });
};
/**
 * Converts a Blob to a File with timestamp-based naming
 *
 * @param blob - The Blob to convert
 * @param prefix - Optional prefix for the filename (default: 'screenshot')
 * @returns File object ready for upload
 */ const blobToFile = function(blob) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'screenshot';
    return new File([
        blob
    ], "".concat(prefix, "-").concat(Date.now(), ".png"), {
        type: 'image/png'
    });
};
/**
 * Requests screen capture permission and returns a MediaStream
 *
 * @returns Promise that resolves to a MediaStream of the selected screen/window/tab
 * @throws Error if user denies permission or screen capture is not supported
 */ const requestScreenCapture = async ()=>{
    var _navigator_mediaDevices;
    if (!((_navigator_mediaDevices = navigator.mediaDevices) === null || _navigator_mediaDevices === void 0 ? void 0 : _navigator_mediaDevices.getDisplayMedia)) {
        throw new Error('Screen capture is not supported in this browser');
    }
    return await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: false
    });
};
/**
 * Stops all tracks in a MediaStream to release resources
 *
 * @param stream - The MediaStream to stop
 */ const stopMediaStream = (stream)=>{
    stream === null || stream === void 0 ? void 0 : stream.getTracks().forEach((track)=>track.stop());
};
/**
 * Captures a screenshot of the user's screen
 *
 * @returns Promise that resolves to a File object of the screenshot
 * @throws Error if capture fails or user cancels
 */ const captureScreenshot = async ()=>{
    let stream = null;
    try {
        stream = await requestScreenCapture();
        const blob = await captureScreenFrame(stream);
        const file = blobToFile(blob);
        return file;
    } finally{
        stopMediaStream(stream);
    }
};
/**
 * Checks if the error is a user cancellation
 *
 * @param error - The error to check
 * @returns true if user cancelled the screen capture
 */ const isUserCancellation = (error)=>{
    if (error instanceof Error) {
        return error.name === 'NotAllowedError' || error.name === 'AbortError';
    }
    return false;
};

// EXTERNAL MODULE: ./src/components/thread/chat-input/components/ScreenshotHandler/ScreenshotHandler.module.scss
var ScreenshotHandler_module = __webpack_require__(49859);
var ScreenshotHandler_module_default = /*#__PURE__*/__webpack_require__.n(ScreenshotHandler_module);
;// ./src/components/thread/chat-input/components/ScreenshotHandler/ScreenshotHandler.tsx








const ScreenshotHandler = (param)=>{
    let { disabled = false, onCapture } = param;
    const handleScreenCapture = async ()=>{
        if (disabled) return;
        try {
            const file = await captureScreenshot();
            if (onCapture) {
                await onCapture(file);
            }
        } catch (error) {
            if (isUserCancellation(error)) {
                ;
                return;
            }
            main/* datadogLogs */.yf.logger.error('Error capturing screen:', error);
            dist/* toast */.oR.error('Unable to capture screen. Please try again.');
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        onClick: handleScreenCapture,
        className: (ScreenshotHandler_module_default()).root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Camera_es/* CameraIcon */.x, {
                size: constants/* SVG_SIZE_M */.ng3
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: "Take a screenshot"
            })
        ]
    });
};

;// ./src/components/thread/chat-input/components/ScreenshotHandler/index.ts


// EXTERNAL MODULE: ./node_modules/posthog-js/react/dist/esm/index.js
var esm = __webpack_require__(26302);
;// ./src/components/thread/chat-input/components/AttachmentDropdownButton/AttachmentDropdownButton.tsx


















const AttachmentDropdownButton = (param)=>{
    let { fileInputRef, googleDriveInputRef, ...props } = param;
    const googleDriveHandlerRef = (0,react.useRef)(null);
    const { currentCommand } = (0,hooks/* usePromptCommandState */.M5)();
    const { onSetCurrentCommand } = (0,hooks/* usePromptCommandActions */.I)();
    const { handleBillingError } = (0,hooks_useBillingError/* useBillingError */.L)();
    const { selectedExecutionMode } = (0,hooks/* useExecutionModeState */._F)();
    const [popoverOpen, setPopoverOpen] = (0,react.useState)(false);
    const isInReactNativeWebView = (0,use_in_react_native_webview/* useInReactNativeWebView */.M)(true);
    const shouldShowScreenshot = (0,esm/* useFeatureFlagEnabled */.Tp)('show-screen-shot-button');
    const shouldShowOneDrive = (0,esm/* useFeatureFlagEnabled */.Tp)('show-one-drive-button');
    const handleFileUpload = ()=>{
        if (fileInputRef && 'current' in fileInputRef && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const processFileUpload = async (event)=>{
        ;
        if (!event.target.files || event.target.files.length === 0) return;
        // attach files logic requires refactoring to remove code duplication
        if ((0,utils/* isChatCommand */.fP)(currentCommand)) {
            onSetCurrentCommand(null);
        }
        const files = Array.from(event.target.files);
        // Use the helper function instead of the static method
        await handleFiles(files, props.threadId, props.setPendingFiles, props.setUploadedFiles, props.setIsUploading, handleBillingError, undefined, undefined, props.isImageGenerator, selectedExecutionMode);
        event.target.value = '';
    };
    const handleScreenshotCapture = async (file)=>{
        if ((0,utils/* isChatCommand */.fP)(currentCommand)) {
            onSetCurrentCommand(null);
        }
        await handleFiles([
            file
        ], props.threadId, props.setPendingFiles, props.setUploadedFiles, props.setIsUploading, handleBillingError, undefined, undefined, props.isImageGenerator, selectedExecutionMode);
    };
    const handleGoogleDriveUpload = async ()=>{
        if (googleDriveHandlerRef && 'current' in googleDriveHandlerRef && googleDriveHandlerRef.current) {
            var _googleDriveHandlerRef_current_handleFileUpload, _googleDriveHandlerRef_current;
            const res = await ((_googleDriveHandlerRef_current_handleFileUpload = (_googleDriveHandlerRef_current = googleDriveHandlerRef.current).handleFileUpload) === null || _googleDriveHandlerRef_current_handleFileUpload === void 0 ? void 0 : _googleDriveHandlerRef_current_handleFileUpload.call(_googleDriveHandlerRef_current));
            if (res === 'popover' && isInReactNativeWebView) {
                setPopoverOpen(true);
            }
        }
    };
    const disabled = props.loading || props.disabled && !props.isAgentRunning || props.isAttachmentDisabled || props.isUploading;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(popover/* Popover */.AM, {
                open: popoverOpen,
                onOpenChange: setPopoverOpen,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
                        withListener: true,
                        withEvent: true,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                                asChild: true,
                                disabled: disabled,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(popover/* PopoverAnchor */.dT, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                                        color: "secondary",
                                        shape: "round",
                                        disabled: disabled,
                                        tooltipContent: (0,utils/* isChatCommand */.fP)(currentCommand) ? 'Attaching files will switch from Chat Agent to General Agent' : undefined,
                                        children: props.isUploading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SpinnerSimple/* SpinnerSimple */.c, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Paperclip_es/* PaperclipIcon */.A, {
                                            size: constants/* SVG_SIZE_M */.ng3
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuContent */.SQ, {
                                align: "start",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onSelect: handleFileUpload,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileUploadHandlerItem, {
                                                ...props,
                                                handleFileUpload: handleFileUpload
                                            })
                                        }),
                                        shouldShowScreenshot && /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onSelect: (e)=>{
                                                e.preventDefault();
                                                e.stopPropagation();
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScreenshotHandler, {
                                                disabled: disabled,
                                                onCapture: handleScreenshotCapture
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuSeparator */.mB, {}),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onSelect: handleGoogleDriveUpload,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GoogleDriveHandler, {
                                                ...props,
                                                asItem: true,
                                                ref: googleDriveHandlerRef
                                            })
                                        }),
                                        shouldShowOneDrive && /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                            disabled: true,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-row gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Icon/* Icon */.I, {
                                                        size: constants/* SVG_SIZE_M */.ng3,
                                                        type: "oneDrive"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        children: "Add from OneDrive"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonTryOnDesktop/* ButtonTryOnDesktopPopoverContent */.vK, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                type: "file",
                ref: fileInputRef,
                className: "hidden",
                onChange: processFileUpload,
                multiple: true,
                accept: props.isImageGenerator ? 'image/*' : '*'
            })
        ]
    });
};

;// ./src/components/thread/chat-input/components/AttachmentDropdownButton/index.ts


// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/StopCircle.es.js + 1 modules
var StopCircle_es = __webpack_require__(69559);
// EXTERNAL MODULE: ./src/components/thread/ChatInput/components/StopResponseButton/StopResponseButton.module.scss
var StopResponseButton_module = __webpack_require__(49502);
var StopResponseButton_module_default = /*#__PURE__*/__webpack_require__.n(StopResponseButton_module);
;// ./src/components/thread/ChatInput/components/StopResponseButton/StopResponseButton.tsx
/* __next_internal_client_entry_do_not_use__ StopResponseButton auto */ 




const StopResponseButton = (param)=>{
    let { isLoading, disabled, onStop } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
        "data-testid": "stop-res-button",
        type: "submit",
        shape: "round",
        color: "transparent",
        disabled: disabled,
        onClick: onStop,
        className: (StopResponseButton_module_default()).root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(StopCircle_es/* StopCircleIcon */.A, {
                size: constants/* SVG_SIZE_M */.ng3,
                weight: "fill"
            }),
            isLoading && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: (StopResponseButton_module_default()).spinner
            })
        ]
    });
};

;// ./src/components/thread/ChatInput/components/StopResponseButton/index.tsx


// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/PaperPlaneRight.es.js + 1 modules
var PaperPlaneRight_es = __webpack_require__(97136);
;// ./src/components/thread/ChatInput/components/SendMessageButton/SendMessageButton.tsx
/* __next_internal_client_entry_do_not_use__ SendMessageButton auto */ 




const SendMessageButton = (param)=>{
    let { disabled, onSubmit } = param;
    const isMobile = (0,hooks/* useIsMobile */.al)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
        "data-testid": "send-message-button",
        type: "submit",
        shape: "round",
        size: isMobile ? 'small' : 'medium',
        color: disabled ? 'transparent' : 'primary',
        disabled: disabled,
        onClick: onSubmit,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PaperPlaneRight_es/* PaperPlaneRightIcon */.S, {
            weight: disabled ? 'regular' : 'fill',
            size: constants/* SVG_SIZE_M */.ng3
        })
    });
};

;// ./src/components/thread/ChatInput/components/SendMessageButton/index.tsx


;// ./src/components/thread/ChatInput/components/SubmitTrigger/SubmitTrigger.tsx
/* __next_internal_client_entry_do_not_use__ SubmitTrigger auto */ 


const SubmitTrigger = (param)=>{
    let { isLoading, isAgentRunning, isAgentStopping, disabled, onSubmit, onStopAgent } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: isAgentRunning || isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(StopResponseButton, {
            onStop: onStopAgent,
            disabled: disabled || isAgentStopping,
            isLoading: isLoading
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(SendMessageButton, {
            onSubmit: onSubmit,
            disabled: disabled
        })
    });
};

;// ./src/components/thread/ChatInput/components/SubmitTrigger/index.tsx


// EXTERNAL MODULE: ./src/lib/config.ts
var config = __webpack_require__(46830);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Clock.es.js
var Clock_es = __webpack_require__(2197);
// EXTERNAL MODULE: ./src/components/thread/Feedback/components/RunTimer/RunTimer.module.scss
var RunTimer_module = __webpack_require__(83617);
var RunTimer_module_default = /*#__PURE__*/__webpack_require__.n(RunTimer_module);
;// ./src/components/thread/Feedback/components/RunTimer/RunTimer.tsx
/* __next_internal_client_entry_do_not_use__ RunTimer auto */ 




const RunTimer = (param)=>{
    let { duration } = param;
    const isMobile = (0,use_mobile/* useIsMobile */.a)();
    if (!duration || isMobile) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (RunTimer_module_default()).root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (RunTimer_module_default()).timerContainer,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Clock_es/* ClockIcon */.O, {
                    size: constants/* SVG_SIZE_S */.lgH,
                    weight: "regular"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    className: (RunTimer_module_default()).duration,
                    children: duration
                })
            ]
        })
    });
};

;// ./src/components/thread/Feedback/components/RunTimer/index.ts


;// ./src/hooks/useRunTimer.ts

const useRunTimer = ()=>{
    const [startTime, setStartTime] = (0,react.useState)(null);
    const [endTime, setEndTime] = (0,react.useState)(null);
    const [duration, setDuration] = (0,react.useState)(null);
    const [isRunning, setIsRunning] = (0,react.useState)(false);
    const intervalRef = (0,react.useRef)(null);
    const startTimeRef = (0,react.useRef)(null);
    const formatDuration = (ms)=>{
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        if (minutes > 0) {
            return "".concat(minutes, "m ").concat(seconds, "s");
        }
        return "".concat(seconds, "s");
    };
    const startTimer = ()=>{
        // Prevent multiple timers from running
        if (isRunning) return;
        const now = new Date();
        setStartTime(now);
        startTimeRef.current = now;
        setEndTime(null);
        setDuration(null);
        setIsRunning(true);
        // Clear any existing interval
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        // Update duration every second while running
        intervalRef.current = setInterval(()=>{
            if (startTimeRef.current) {
                const currentTime = new Date();
                const elapsed = currentTime.getTime() - startTimeRef.current.getTime();
                setDuration(elapsed);
            }
        }, 1000);
    };
    const stopTimer = ()=>{
        if (!isRunning) return;
        const now = new Date();
        setEndTime(now);
        setIsRunning(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        if (startTimeRef.current) {
            const finalDuration = now.getTime() - startTimeRef.current.getTime();
            setDuration(finalDuration);
        }
    };
    const resetTimer = ()=>{
        setStartTime(null);
        setEndTime(null);
        setDuration(null);
        setIsRunning(false);
        startTimeRef.current = null;
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };
    // Cleanup interval on unmount
    (0,react.useEffect)(()=>{
        return ()=>{
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);
    const formattedDuration = duration ? formatDuration(duration) : '';
    return {
        startTime,
        endTime,
        duration,
        formattedDuration,
        isRunning,
        startTimer,
        stopTimer,
        resetTimer
    };
};

// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/GithubLogo.es.js
var GithubLogo_es = __webpack_require__(7725);
// EXTERNAL MODULE: ./src/components/ui/Button/index.tsx
var ui_Button = __webpack_require__(3595);
// EXTERNAL MODULE: ./src/components/thread/chat-input/components/CommandLabel/CommandLabel.module.scss
var CommandLabel_module = __webpack_require__(81131);
var CommandLabel_module_default = /*#__PURE__*/__webpack_require__.n(CommandLabel_module);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/XCircle.es.js + 1 modules
var XCircle_es = __webpack_require__(16694);
;// ./src/components/thread/chat-input/components/CommandLabel/CommandLabel.tsx
/* __next_internal_client_entry_do_not_use__ CommandLabel auto */ 




const CommandLabel = (param)=>{
    let { command, onClose } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (CommandLabel_module_default()).label,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: (CommandLabel_module_default()).labelText,
                children: command
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Button/* Button */.$, {
                color: "tertiary",
                onClick: onClose,
                className: (CommandLabel_module_default()).closeButton,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(XCircle_es/* XCircleIcon */.q, {
                    size: constants/* SVG_SIZE_M */.ng3,
                    weight: "fill"
                })
            })
        ]
    });
};

;// ./src/components/thread/chat-input/components/CommandLabel/index.ts


// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Gear.es.js + 1 modules
var Gear_es = __webpack_require__(57611);
// EXTERNAL MODULE: ./src/components/ui/dialog.tsx
var dialog = __webpack_require__(51834);
// EXTERNAL MODULE: ./src/components/ui/radio-group.tsx
var radio_group = __webpack_require__(50909);
// EXTERNAL MODULE: ./src/components/ui/label.tsx
var label = __webpack_require__(76444);
// EXTERNAL MODULE: ./src/hooks/threadHooks/index.ts + 2 modules
var threadHooks = __webpack_require__(37863);
// EXTERNAL MODULE: ./src/types/general.ts
var general = __webpack_require__(46810);
;// ./src/components/thread/chat-input/model-radio-selector.tsx
/* __next_internal_client_entry_do_not_use__ ModelRadioSelector auto */ 










const ModelRadioSelector = (param)=>{
    let { selectedModel, onModelChange, isNarrowWidth = false } = param;
    const [showModelDialog, setShowModelDialog] = (0,react.useState)(false);
    const isMobile = (0,use_mobile/* useIsMobile */.a)();
    const { currentCommand } = (0,threadHooks/* usePromptCommandState */.M5)();
    const isImageGeneration = currentCommand === general/* ImageGeneratorCommand */.ac.GENERATOR;
    const modelOptions = (0,react.useMemo)(()=>isImageGeneration ? constants/* IMAGE_GENERATION_MODEL_OPTIONS */.azX : constants/* MODEL_OPTIONS */.$Ql, [
        isImageGeneration
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* Dialog */.lG, {
        open: showModelDialog,
        onOpenChange: setShowModelDialog,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogTrigger */.zM, {
                asChild: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
                    shape: isMobile ? 'round' : 'regular',
                    color: "secondary",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Gear_es/* GearIcon */.L, {
                            size: constants/* SVG_SIZE_M */.ng3
                        }),
                        !isMobile && !isNarrowWidth && /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                            children: "Select Model"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogContent */.Cf, {
                className: "sm:max-w-md",
                "aria-describedby": undefined,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogHeader */.c7, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogTitle */.L3, {
                            className: "text-sm font-medium",
                            children: "Select Model"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "p-4",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(radio_group/* RadioGroup */.z, {
                            defaultValue: selectedModel,
                            onValueChange: onModelChange,
                            className: "grid gap-2",
                            children: modelOptions.map((option)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center space-x-2 rounded-md px-3 py-2 hover:bg-accent ".concat(option.disabled ? 'opacity-50 !cursor-not-allowed' : 'cursor-pointer'),
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(radio_group/* RadioGroupItem */.C, {
                                            disabled: option.disabled,
                                            value: option.id,
                                            id: option.id
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(label/* Label */.J, {
                                            htmlFor: option.id,
                                            className: "flex-1 text-sm font-normal ".concat(option.disabled ? '!cursor-not-allowed' : 'cursor-pointer'),
                                            children: option.label
                                        }),
                                        selectedModel === option.id ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Active"
                                        }) : option.disabled && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Coming soon"
                                        })
                                    ]
                                }, option.id))
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogFooter */.Es, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                            onClick: ()=>setShowModelDialog(false),
                            children: "Done"
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Sliders.es.js + 1 modules
var Sliders_es = __webpack_require__(17400);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/X.es.js
var X_es = __webpack_require__(89055);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Check.es.js + 1 modules
var Check_es = __webpack_require__(88702);
// EXTERNAL MODULE: ./src/components/thread/chat-input/components/ImageSettingsSelector/DimensionPrimaryItem/DimensionPrimaryItem.module.scss
var DimensionPrimaryItem_module = __webpack_require__(39513);
var DimensionPrimaryItem_module_default = /*#__PURE__*/__webpack_require__.n(DimensionPrimaryItem_module);
// EXTERNAL MODULE: ./src/constants/settings.ts
var settings = __webpack_require__(29715);
;// ./src/components/thread/chat-input/components/ImageSettingsSelector/DimensionPrimaryItem/DimensionPrimaryItem.tsx






const IconsSet = {
    [settings/* ImageGenNewSettingsDimensionOptionTypes */.Xr.SQUARE]: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Icon/* Icon */.I, {
        type: "square",
        size: constants/* SVG_SIZE_L */.uUe
    }),
    [settings/* ImageGenNewSettingsDimensionOptionTypes */.Xr.PORTRAIT]: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Icon/* Icon */.I, {
        type: "portrait",
        size: constants/* SVG_SIZE_S */.lgH
    }),
    [settings/* ImageGenNewSettingsDimensionOptionTypes */.Xr.LANDSCAPE]: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Icon/* Icon */.I, {
        type: "landscape",
        size: constants/* SVG_SIZE_L */.uUe
    })
};
const DimensionPrimaryItem = (param)=>{
    let { data, isSelected, onClick } = param;
    const { title, resolution, name, isDisabled } = data;
    const CurrentIcon = IconsSet[name.toLowerCase()];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
        onClick: onClick,
        className: classnames_default()((DimensionPrimaryItem_module_default()).root, {
            [(DimensionPrimaryItem_module_default()).active]: isSelected,
            [(DimensionPrimaryItem_module_default()).disabled]: isDisabled
        }),
        disabled: isDisabled,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: (DimensionPrimaryItem_module_default()).icon,
                children: CurrentIcon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: (DimensionPrimaryItem_module_default()).title,
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: (DimensionPrimaryItem_module_default()).subtitle,
                children: resolution
            })
        ]
    });
};

;// ./src/components/thread/chat-input/components/ImageSettingsSelector/DimensionPrimaryItem/index.ts


// EXTERNAL MODULE: ./src/hooks/userHooks/useUserSettings.ts
var useUserSettings = __webpack_require__(5072);
// EXTERNAL MODULE: ./src/components/thread/chat-input/components/ImageSettingsSelector/ImageSettingsSelector.module.scss
var ImageSettingsSelector_module = __webpack_require__(85471);
var ImageSettingsSelector_module_default = /*#__PURE__*/__webpack_require__.n(ImageSettingsSelector_module);
// EXTERNAL MODULE: ./src/components/ui/select.tsx
var ui_select = __webpack_require__(11186);
;// ./src/components/thread/chat-input/components/ImageSettingsSelector/ImageSettingsSelector.tsx
/* __next_internal_client_entry_do_not_use__ ImageSettingsSelector auto */ 















const ImageSettingsSelector = (param)=>{
    let { isShort } = param;
    var _ImageSettingsPrimaryGroup_dimensionValue, _imageStyle_options_imageStyleState, _imageStyleOptions_find;
    const [showModelDialog, setShowModelDialog] = (0,react.useState)(false);
    const isMobile = (0,use_mobile/* useIsMobile */.a)();
    const { setting: imageDimension, updateSettings: updateImageDimension } = (0,useUserSettings/* useUserSettings */.Q)(settings/* ImageSettingKeys */.wm.IMAGE_DIMENTIONS);
    const { setting: imageStyle, updateSettings: updateImageStyle } = (0,useUserSettings/* useUserSettings */.Q)(settings/* ImageSettingKeys */.wm.IMAGE_STYLES);
    const dimensionValue = (imageDimension === null || imageDimension === void 0 ? void 0 : imageDimension.value) || '';
    const styleValue = (imageStyle === null || imageStyle === void 0 ? void 0 : imageStyle.value) || settings/* ImageGenStyles */.M0.NONE;
    const [imageDimensionState, setImageDimensionState] = (0,react.useState)();
    const [imageStyleState, setImageStyleState] = (0,react.useState)();
    (0,react.useEffect)(()=>{
        setImageDimensionState(dimensionValue);
        setImageStyleState(styleValue);
    }, [
        dimensionValue,
        styleValue,
        showModelDialog
    ]);
    const isSaveEnabled = (0,react.useMemo)(()=>{
        return imageDimensionState !== dimensionValue || imageStyleState !== styleValue;
    }, [
        imageDimensionState,
        imageStyleState,
        dimensionValue,
        styleValue
    ]);
    const handleSave = (0,react.useCallback)(async ()=>{
        try {
            await Promise.all([
                updateImageDimension(imageDimensionState),
                updateImageStyle(imageStyleState)
            ]);
            dist/* toast */.oR.success(constants/* COMMON_SUCCESS_TEXT */.IU6);
        } catch (error) {
            dist/* toast */.oR.error(constants/* COMMON_ERROR_TEXT */.N4C);
        } finally{
            setShowModelDialog(false);
        }
    }, [
        imageDimensionState,
        imageStyleState,
        updateImageDimension,
        updateImageStyle
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* Dialog */.lG, {
        open: showModelDialog,
        onOpenChange: setShowModelDialog,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogTrigger */.zM, {
                asChild: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
                    shape: isMobile ? 'round' : 'regular',
                    color: "secondary-outline",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Sliders_es/* Sliders */.r, {
                            size: constants/* SVG_SIZE_M */.ng3
                        }),
                        !isMobile && !isShort && imageDimension && imageStyle && "".concat((_ImageSettingsPrimaryGroup_dimensionValue = settings/* ImageSettingsPrimaryGroup */.wY[dimensionValue]) === null || _ImageSettingsPrimaryGroup_dimensionValue === void 0 ? void 0 : _ImageSettingsPrimaryGroup_dimensionValue.title, ", ").concat(settings/* imageStyleOptionsMap */.fc[styleValue])
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogContent */.Cf, {
                className: "sm:max-w-md",
                "aria-describedby": undefined,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogHeader */.c7, {
                        className: "flex-row justify-between -mt-2 -mr-2.5 mb-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogTitle */.L3, {
                                className: (ImageSettingsSelector_module_default()).title,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Sliders_es/* Sliders */.r, {
                                        size: constants/* SVG_SIZE_L */.uUe
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (ImageSettingsSelector_module_default()).titleText,
                                        children: "Image preferences"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogClose */.HM, {
                                asChild: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                                    color: "transparent",
                                    className: "p-2.5!",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(X_es.X, {
                                        size: constants/* SVG_SIZE_M */.ng3
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(label/* Label */.J, {
                                                className: (ImageSettingsSelector_module_default()).label,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "Dimensions"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: (ImageSettingsSelector_module_default()).labelDesc,
                                                children: "Resolution may vary slightly between different models"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: (ImageSettingsSelector_module_default()).container,
                                        children: Object.entries(settings/* ImageSettingsPrimaryGroup */.wY).map((param)=>{
                                            let [key, data] = param;
                                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(DimensionPrimaryItem, {
                                                isSelected: key === imageDimensionState,
                                                data: {
                                                    ...data,
                                                    name: key,
                                                    isDisabled: Boolean((imageDimension === null || imageDimension === void 0 ? void 0 : imageDimension.options[key]) && !(imageDimension === null || imageDimension === void 0 ? void 0 : imageDimension.options[key].selectable))
                                                },
                                                onClick: ()=>setImageDimensionState(key)
                                            }, key);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(label/* Label */.J, {
                                        className: (ImageSettingsSelector_module_default()).label,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "Style"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: (ImageSettingsSelector_module_default()).container,
                                        children: isMobile ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_select/* Select */.l6, {
                                            value: imageStyleState,
                                            onValueChange: (value)=>setImageStyleState(value),
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* SelectTrigger */.bq, {
                                                    className: (0,lib_utils.cn)((ImageSettingsSelector_module_default()).button, 'w-full min-h-10'),
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: (ImageSettingsSelector_module_default()).buttonText,
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* SelectValue */.yv, {
                                                            placeholder: "None"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_select/* SelectContent */.gC, {
                                                    className: "max-h-80 rounded-2xl",
                                                    scrollbar: true,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* SelectItem */.eb, {
                                                            value: imageStyleState,
                                                            disabled: !(imageStyle === null || imageStyle === void 0 ? void 0 : (_imageStyle_options_imageStyleState = imageStyle.options[imageStyleState]) === null || _imageStyle_options_imageStyleState === void 0 ? void 0 : _imageStyle_options_imageStyleState.selectable),
                                                            indicatorType: "dot",
                                                            className: "py-2.5 px-4 rounded-2xl",
                                                            children: ((_imageStyleOptions_find = settings/* imageStyleOptions */.P0.find((option)=>option.value === imageStyleState)) === null || _imageStyleOptions_find === void 0 ? void 0 : _imageStyleOptions_find.label) || 'None'
                                                        }, imageStyleState),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* SelectSeparator */.mi, {}),
                                                        settings/* imageStyleOptions */.P0.map((param)=>{
                                                            let { value: key, label } = param;
                                                            var _imageStyle_options_key;
                                                            const isOptionDisabled = !(imageStyle === null || imageStyle === void 0 ? void 0 : (_imageStyle_options_key = imageStyle.options[key]) === null || _imageStyle_options_key === void 0 ? void 0 : _imageStyle_options_key.selectable);
                                                            const isActive = key === imageStyleState;
                                                            if (isActive) return null;
                                                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* SelectItem */.eb, {
                                                                value: key,
                                                                disabled: isOptionDisabled,
                                                                indicatorType: "dot",
                                                                className: "py-2.5 px-4",
                                                                children: label
                                                            }, key);
                                                        })
                                                    ]
                                                })
                                            ]
                                        }) : settings/* imageStyleOptions */.P0.map((param)=>{
                                            let { value: key, label } = param;
                                            var _imageStyle_options_key;
                                            const isOptionDisabled = !(imageStyle === null || imageStyle === void 0 ? void 0 : (_imageStyle_options_key = imageStyle.options[key]) === null || _imageStyle_options_key === void 0 ? void 0 : _imageStyle_options_key.selectable);
                                            const isActive = key === imageStyleState;
                                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
                                                disabled: isOptionDisabled,
                                                onClick: ()=>setImageStyleState(key),
                                                color: "secondary-outline",
                                                className: (0,lib_utils.cn)((ImageSettingsSelector_module_default()).button, {
                                                    [(ImageSettingsSelector_module_default()).active]: isActive
                                                }),
                                                children: [
                                                    isActive && /*#__PURE__*/ (0,jsx_runtime.jsx)(Check_es/* Check */.J, {
                                                        size: constants/* SVG_SIZE_M */.ng3
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: (ImageSettingsSelector_module_default()).buttonText,
                                                        children: label
                                                    })
                                                ]
                                            }, key);
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogFooter */.Es, {
                        className: "justify-center! items-center! mt-2",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                            className: (ImageSettingsSelector_module_default()).saveButton,
                            disabled: !isSaveEnabled,
                            onClick: handleSave,
                            children: "Save"
                        })
                    })
                ]
            })
        ]
    });
};

;// ./src/components/thread/chat-input/components/ImageSettingsSelector/index.ts


// EXTERNAL MODULE: ./src/components/ui/SwitchSimple/index.ts + 1 modules
var SwitchSimple = __webpack_require__(84885);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/PlugsConnected.es.js
var PlugsConnected_es = __webpack_require__(98357);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/CaretDown.es.js
var CaretDown_es = __webpack_require__(89690);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/Globe.es.js
var Globe_es = __webpack_require__(72952);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/GithubLogo.es.js
var ssr_GithubLogo_es = __webpack_require__(40381);
// EXTERNAL MODULE: ./src/components/thread/chat-input/components/ConnectorSelector/ConnectorSelector.module.scss
var ConnectorSelector_module = __webpack_require__(58019);
var ConnectorSelector_module_default = /*#__PURE__*/__webpack_require__.n(ConnectorSelector_module);
// EXTERNAL MODULE: ./src/components/Connectors/GithubConnector/GithubConnectorModal.module.scss
var GithubConnectorModal_module = __webpack_require__(23855);
var GithubConnectorModal_module_default = /*#__PURE__*/__webpack_require__.n(GithubConnectorModal_module);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Laptop.es.js + 1 modules
var Laptop_es = __webpack_require__(67437);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/GitBranch.es.js + 1 modules
var GitBranch_es = __webpack_require__(82180);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/CircleNotch.es.js + 1 modules
var CircleNotch_es = __webpack_require__(47982);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/ArrowLeft.es.js + 1 modules
var ArrowLeft_es = __webpack_require__(41295);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/CaretRight.es.js
var CaretRight_es = __webpack_require__(76728);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/CaretDown.es.js
var csr_CaretDown_es = __webpack_require__(83626);
// EXTERNAL MODULE: ./src/lib/github-app-api.ts
var github_app_api = __webpack_require__(7024);
// EXTERNAL MODULE: ./src/components/ui/sheet.tsx
var sheet = __webpack_require__(27063);
// EXTERNAL MODULE: ./src/constants/submenu.ts
var submenu = __webpack_require__(7251);
// EXTERNAL MODULE: ./src/utils/submenu-utils.ts
var submenu_utils = __webpack_require__(95071);
;// ./src/components/thread/chat-input/connect-github-button.tsx





function ConnectGitHubButton(param) {
    let { installing, setInstalling, setError } = param;
    const handleConnect = async ()=>{
        try {
            setInstalling(true);
            await (0,github_app_api/* initiateGitHubAppInstall */.r)();
            return;
        } catch (err) {
            main/* datadogLogs */.yf.logger.error('Failed to initiate GitHub App install:', {}, err);
            setError("Failed to install GitHub App: ".concat(err instanceof Error ? err.message : 'Unknown error'));
        } finally{
            setInstalling(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
        as: "button",
        color: "highlight",
        onClick: handleConnect,
        disabled: installing,
        children: installing ? 'Connecting...' : 'Connect GitHub'
    });
}

// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/MagnifyingGlass.es.js + 1 modules
var MagnifyingGlass_es = __webpack_require__(98943);
// EXTERNAL MODULE: ./src/components/ui/InputSimple/index.tsx + 1 modules
var InputSimple = __webpack_require__(44974);
;// ./src/hooks/useUniversalGitHubFilter.ts

// Filter configuration
const FILTER_CONFIG = {
    caseSensitive: false,
    includeDefaultBranch: true,
    minQueryLength: 0
};
/**
 * Evaluates if a repository matches the search query
 */ const evaluateRepoMatch = (repo, query)=>{
    const normalizedQuery = FILTER_CONFIG.caseSensitive ? query : query.toLowerCase();
    const repoName = FILTER_CONFIG.caseSensitive ? repo.name : repo.name.toLowerCase();
    const defaultBranch = FILTER_CONFIG.caseSensitive ? repo.defaultBranch : repo.defaultBranch.toLowerCase();
    // Check if repo name matches
    const repoMatches = repoName.includes(normalizedQuery);
    // Check if any branches match (if branches are loaded)
    const branchMatches = repo.branches ? repo.branches.some((branch)=>(FILTER_CONFIG.caseSensitive ? branch : branch.toLowerCase()).includes(normalizedQuery)) || FILTER_CONFIG.includeDefaultBranch && defaultBranch.includes(normalizedQuery) : false;
    // If searching by branch, filter branches to show only matching ones
    const filteredBranches = repo.branches && branchMatches && !repoMatches ? repo.branches.filter((branch)=>(FILTER_CONFIG.caseSensitive ? branch : branch.toLowerCase()).includes(normalizedQuery) || FILTER_CONFIG.includeDefaultBranch && defaultBranch.includes(normalizedQuery)) : repo.branches;
    return {
        repoMatches,
        branchMatches,
        filteredBranches
    };
};
/**
 * Filters repositories based on search query
 */ const filterRepositories = (repos, query)=>{
    return repos.map((repo)=>{
        const match = evaluateRepoMatch(repo, query);
        // Include repo if either repo name or branch name matches
        if (match.repoMatches || match.branchMatches) {
            return {
                ...repo,
                // Don't filter branches when searching for repositories - show all branches
                branches: repo.branches
            };
        }
        return null;
    }).filter(Boolean);
};
/**
 * Filters branches based on search query
 */ const filterBranches = (branches, query)=>{
    if (!branches || branches.length === 0) return [];
    const normalizedQuery = FILTER_CONFIG.caseSensitive ? query : query.toLowerCase();
    return branches.filter((branch)=>{
        const normalizedBranch = FILTER_CONFIG.caseSensitive ? branch : branch.toLowerCase();
        return normalizedBranch.includes(normalizedQuery);
    });
};
/**
 * Universal hook for filtering GitHub repositories or branches
 */ const useUniversalGitHubFilter = (dataType, data, searchQuery)=>{
    const filteredData = (0,react.useMemo)(()=>{
        const trimmedQuery = searchQuery.trim();
        // Return all data if no search query
        if (trimmedQuery.length < FILTER_CONFIG.minQueryLength) {
            return data;
        }
        if (dataType === 'repositories') {
            const installations = data;
            // Filter installations and their repositories
            return installations.map((installation)=>({
                    ...installation,
                    repos: filterRepositories(installation.repos, trimmedQuery)
                })).filter((installation)=>installation.repos.length > 0);
        } else {
            // Filter branches
            const branches = data;
            return filterBranches(branches, trimmedQuery);
        }
    }, [
        dataType,
        data,
        searchQuery
    ]);
    return {
        filteredData,
        hasActiveFilter: searchQuery.trim().length >= FILTER_CONFIG.minQueryLength,
        resultCount: dataType === 'repositories' ? filteredData.reduce((count, inst)=>count + inst.repos.length, 0) : filteredData.length
    };
};

;// ./src/hooks/useInputFocus.ts

/**
 * Custom hook for managing input focus state and preservation
 */ const useInputFocus = ()=>{
    const inputRef = (0,react.useRef)(null);
    const wasFocusedRef = (0,react.useRef)(false);
    const handleInputFocus = (0,react.useCallback)(()=>{
        wasFocusedRef.current = true;
    }, []);
    const handleInputBlur = (0,react.useCallback)(()=>{
        wasFocusedRef.current = false;
    }, []);
    const handleInputClick = (0,react.useCallback)((e)=>{
        e.stopPropagation();
    }, []);
    const handleInputChange = (0,react.useCallback)((onChange)=>(event)=>{
            // Store focus state when typing
            if (inputRef.current === document.activeElement) {
                wasFocusedRef.current = true;
            }
            onChange(event);
        }, []);
    // Preserve focus after re-renders
    (0,react.useLayoutEffect)(()=>{
        if (inputRef.current && wasFocusedRef.current && document.activeElement !== inputRef.current) {
            inputRef.current.focus();
        }
    });
    return {
        inputRef,
        handleInputFocus,
        handleInputBlur,
        handleInputClick,
        handleInputChange,
        isFocused: wasFocusedRef.current
    };
};

// EXTERNAL MODULE: ./src/components/thread/chat-input/components/GitHubUniversalSearch/GitHubUniversalSearch.module.scss
var GitHubUniversalSearch_module = __webpack_require__(8103);
var GitHubUniversalSearch_module_default = /*#__PURE__*/__webpack_require__.n(GitHubUniversalSearch_module);
;// ./src/components/thread/chat-input/components/GitHubUniversalSearch/GitHubUniversalSearch.tsx




// Internal components

// Custom hooks


// Constants

// Styles

const GitHubUniversalSearch = (param)=>{
    let { dataType, installations, onFilteredInstallations, branches, onFilteredBranches, placeholder, className = '' } = param;
    // 1. State
    const [searchQuery, setSearchQuery] = (0,react.useState)('');
    const lastFilteredResultsRef = (0,react.useRef)(dataType === 'repositories' ? installations || [] : branches || []);
    // 2. Custom hooks
    const data = dataType === 'repositories' ? installations || [] : branches || [];
    const { filteredData } = useUniversalGitHubFilter(dataType, data, searchQuery);
    const { inputRef, handleInputFocus, handleInputBlur, handleInputClick, handleInputChange } = useInputFocus();
    // 3. Event handlers
    const handleSearchChange = handleInputChange((event)=>{
        setSearchQuery(event.target.value);
    });
    // 4. Effects
    // Update parent component when filtered results change
    (0,react.useEffect)(()=>{
        // Only update if results are different from what we last sent
        if (filteredData !== lastFilteredResultsRef.current) {
            lastFilteredResultsRef.current = filteredData;
            if (dataType === 'repositories' && onFilteredInstallations) {
                onFilteredInstallations(filteredData);
            } else if (dataType === 'branches' && onFilteredBranches) {
                onFilteredBranches(filteredData);
            }
        }
    }, [
        filteredData,
        dataType,
        onFilteredInstallations,
        onFilteredBranches
    ]);
    // 5. Get placeholder text
    const getPlaceholder = ()=>{
        if (placeholder) return placeholder;
        if (dataType === 'repositories') {
            return constants/* GITHUB_CONSTANTS */.esR.SEARCH_REPOSITORIES_PLACEHOLDER;
        } else {
            return constants/* GITHUB_CONSTANTS */.esR.SEARCH_BRANCHES_PLACEHOLDER;
        }
    };
    // 6. Render
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classnames_default()((GitHubUniversalSearch_module_default()).root, className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (GitHubUniversalSearch_module_default()).searchContainer,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(MagnifyingGlass_es/* MagnifyingGlassIcon */.$, {
                    size: constants/* SVG_SIZE_M */.ng3,
                    className: (GitHubUniversalSearch_module_default()).searchIcon
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InputSimple/* InputSimple */.$, {
                    type: "text",
                    placeholder: getPlaceholder(),
                    value: searchQuery,
                    onChange: handleSearchChange,
                    onClick: handleInputClick,
                    className: (GitHubUniversalSearch_module_default()).searchInput,
                    ref: inputRef,
                    onFocus: handleInputFocus,
                    onBlur: handleInputBlur
                })
            ]
        })
    });
};

;// ./src/components/thread/chat-input/components/GitHubUniversalSearch/index.ts


// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/GearSix.es.js + 1 modules
var GearSix_es = __webpack_require__(71292);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/ArrowSquareOut.es.js
var ArrowSquareOut_es = __webpack_require__(31271);
// EXTERNAL MODULE: ./src/components/thread/chat-input/components/GithubRepoBranchSelector/GithubRepoBranchSelector.module.scss
var GithubRepoBranchSelector_module = __webpack_require__(10789);
var GithubRepoBranchSelector_module_default = /*#__PURE__*/__webpack_require__.n(GithubRepoBranchSelector_module);
;// ./src/components/thread/chat-input/components/GithubRepoBranchSelector/GithubSettingsLink.tsx







const GithubSettingsLink = (param)=>{
    let { installationId, onMouseEnter = ()=>{}, isMobile = false } = param;
    const containerClass = isMobile ? (GithubRepoBranchSelector_module_default()).mobileManageSettingsContainer : (GithubRepoBranchSelector_module_default()).manageSettingsContainer;
    const linkClass = isMobile ? (GithubRepoBranchSelector_module_default()).mobileManageSettingsLink : (GithubRepoBranchSelector_module_default()).manageSettingsLink;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: containerClass,
        onMouseEnter: onMouseEnter,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
            as: "a",
            color: "transparent",
            href: "".concat(constants/* GITHUB_CONSTANTS */.esR.GITHUB_SETTINGS_BASE_URL, "/").concat(installationId),
            target: "_blank",
            rel: "noopener noreferrer",
            className: linkClass,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(GearSix_es/* GearSixIcon */.T, {
                    size: constants/* SVG_SIZE_M */.ng3
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    className: (GithubRepoBranchSelector_module_default()).manageSettingsText,
                    children: constants/* GITHUB_CONSTANTS */.esR.MANAGE_GITHUB_SETTINGS_TEXT
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowSquareOut_es/* ArrowSquareOutIcon */.k, {
                    size: constants/* SVG_SIZE_M */.ng3
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./src/gen/sn-api/github-app/github-app.gen.ts
var github_app_gen = __webpack_require__(76727);
// EXTERNAL MODULE: ./src/gen/token-api/tokens/tokens.gen.ts
var tokens_gen = __webpack_require__(60263);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(99776);
// EXTERNAL MODULE: ./src/lib/github-api.ts
var github_api = __webpack_require__(3602);
;// ./src/components/thread/chat-input/components/GithubRepoBranchSelector/GithubRepoBranchSelector.tsx
























const GithubRepoBranchSelector = (param)=>{
    let { disabled, selectedRepo, setSelectedRepo, selectedBranch, setSelectedBranch, selectedInstallationId, setSelectedInstallationId, isGithubContextFromThread, isNarrowWidth = false } = param;
    const queryClient = (0,QueryClientProvider/* useQueryClient */.jE)();
    const [openRepo, setOpenRepo] = (0,react.useState)(null);
    const [isOpen, setIsOpen] = (0,react.useState)(false);
    const [installations, setInstallations] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)(null);
    const [filteredInstallations, setFilteredInstallations] = (0,react.useState)([]);
    const [filteredBranches, setFilteredBranches] = (0,react.useState)([]);
    const [installing, setInstalling] = (0,react.useState)(false);
    const [submenuPosition, setSubmenuPosition] = (0,react.useState)('right');
    // Mobile-specific state
    const [mobileSelectedRepo, setMobileSelectedRepo] = (0,react.useState)(null);
    const [mobileSelectedInstallationId, setMobileSelectedInstallationId] = (0,react.useState)(null);
    const [showBranchesOnMobile, setShowBranchesOnMobile] = (0,react.useState)(false);
    // Popover state
    const [popoverOpen, setPopoverOpen] = (0,react.useState)(false);
    const isMobile = (0,use_mobile/* useIsMobile */.a)();
    const { user } = (0,AuthProvider/* useAuth */.A)();
    const { refetch: refetchUserOauthProviders, data: { providers: availableOauthProviders = [] } = {}, isFetching: isAvailableOauthProvidersLoading } = (0,tokens_gen/* useGetAvailableProviders */.PS)({
        user_id: user
    }, {
        query: {
            enabled: !!user
        }
    });
    const isLoading = loading || isAvailableOauthProvidersLoading;
    const isUserGithubAuthorized = availableOauthProviders.some((providerInfo)=>providerInfo.provider_id === 'Github') && !error;
    const isGitHubConnected = installations.length > 0 && !isLoading && !error;
    // Reset filtered branches when switching repos
    (0,react.useEffect)(()=>{
        setFilteredBranches([]);
    }, [
        openRepo,
        mobileSelectedRepo
    ]);
    // Determine if the dropdown is disabled (when thread_id is set in parent)
    const isDropdownDisabled = disabled || isLoading || selectedRepo && selectedBranch && selectedInstallationId && isGithubContextFromThread;
    // Determine if the dropdown is active
    const isDropdownActive = selectedRepo && !isGithubContextFromThread;
    // Helper functions to update repository branch states
    const updateRepoBranchState = (0,react.useCallback)((installationId, repoIndex, updates)=>{
        setInstallations((prev)=>prev.map((inst)=>inst.installation.id === installationId ? {
                    ...inst,
                    repos: inst.repos.map((r, idx)=>idx === repoIndex ? {
                            ...r,
                            ...updates
                        } : r)
                } : inst));
    }, []);
    const loadBranchesForRepo = (0,react.useCallback)(async (installationId, repoName, repoIndex)=>{
        // Set loading state
        updateRepoBranchState(installationId, repoIndex, {
            loading: true,
            error: undefined
        });
        try {
            const { branches } = await queryClient.fetchQuery({
                queryKey: (0,github_app_gen/* getGithubListRepositoryBranchesQueryKey */.d3)(installationId, repoName),
                queryFn: ()=>(0,github_app_gen/* githubListRepositoryBranches */.uv)(installationId, repoName)
            });
            // Set success state
            updateRepoBranchState(installationId, repoIndex, {
                branches,
                loading: false,
                error: undefined
            });
        } catch (e) {
            // Set error state
            updateRepoBranchState(installationId, repoIndex, {
                branches: [],
                loading: false,
                error: constants/* GITHUB_CONSTANTS */.esR.FAILED_TO_LOAD_BRANCHES
            });
        }
    }, [
        updateRepoBranchState
    ]);
    // Function to detect overflow and adjust submenu positioning and height
    const handleSubmenuPosition = (0,react.useCallback)((repoName)=>{
        if (!repoName) return;
        // Use setTimeout to ensure the submenu is rendered before checking position
        setTimeout(()=>{
            try {
                const submenu = (0,submenu_utils/* getSubmenuElement */._e)(repoName, (GithubRepoBranchSelector_module_default()));
                if (!submenu) return;
                const rect = submenu.getBoundingClientRect();
                setSubmenuPosition((0,submenu_utils/* calculateSubmenuPosition */.tZ)(rect));
                submenu.style.maxHeight = "".concat((0,submenu_utils/* calculateSubmenuHeight */.tt)(rect), "px");
            } catch (error) {
            // Don't log error
            }
        }, 0);
    }, []);
    // Handle window resize to recalculate submenu positioning with debouncing
    (0,react.useEffect)(()=>{
        const debouncedHandleResize = (0,submenu_utils/* debounce */.sg)(()=>{
            if (openRepo) {
                handleSubmenuPosition(openRepo);
            }
        }, submenu/* SUBMENU_CONSTANTS */.I.RESIZE_DEBOUNCE_MS);
        window.addEventListener('resize', debouncedHandleResize);
        return ()=>window.removeEventListener('resize', debouncedHandleResize);
    }, [
        openRepo,
        handleSubmenuPosition
    ]);
    // Named event handlers
    const handleOpenChange = (0,react.useCallback)((open)=>{
        // for close dropdown only triggered by opening other dropdown
        if (open == null) {
            setIsOpen(false);
            return;
        }
        if (!isLoading && !error && !isUserGithubAuthorized && open) {
            (0,github_api/* initiateGitHubAuth */.b)(user);
        } else if (isUserGithubAuthorized && !isGitHubConnected && open) {
            handleConnect();
        } else if (!isDropdownDisabled) {
            setIsOpen(open);
            if (!open) setOpenRepo(null);
            // Reset mobile state when closing
            if (!open && isMobile) {
                setShowBranchesOnMobile(false);
                setMobileSelectedRepo(null);
                setMobileSelectedInstallationId(null);
            }
        }
    }, [
        isDropdownDisabled,
        loading,
        error,
        installations,
        isMobile
    ]);
    const handleClearSelection = (0,react.useCallback)((e)=>{
        e.stopPropagation();
        setSelectedRepo === null || setSelectedRepo === void 0 ? void 0 : setSelectedRepo(null);
        setSelectedBranch === null || setSelectedBranch === void 0 ? void 0 : setSelectedBranch(null);
        setSelectedInstallationId === null || setSelectedInstallationId === void 0 ? void 0 : setSelectedInstallationId(null);
    }, [
        setSelectedRepo,
        setSelectedBranch,
        setSelectedInstallationId
    ]);
    const handleManualOpen = (0,react.useCallback)(()=>{
        if (!isDropdownDisabled) {
            setIsOpen(true);
        }
    }, [
        isDropdownDisabled
    ]);
    const handleSheetOpenChange = (0,react.useCallback)((open)=>{
        if (open) {
            // Prevent keyboard from appearing on iOS
            setTimeout(()=>{
                const activeElement = document.activeElement;
                if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
                    activeElement.blur();
                }
            }, 100);
        }
        handleOpenChange(open);
    }, [
        handleOpenChange
    ]);
    const handleRepoMouseEnter = (0,react.useCallback)(async (repo, repoIdx, installationId)=>{
        setOpenRepo(repo.name);
        // Lazy load branches if not loaded
        if (repo.branches === null && !repo.loading) {
            await loadBranchesForRepo(installationId, repo.name, repoIdx);
        }
        // Check submenu positioning after opening
        handleSubmenuPosition(repo.name);
    }, [
        loadBranchesForRepo,
        handleSubmenuPosition
    ]);
    // const handleRepoMouseLeave = useCallback(() => {
    //   setOpenRepo(null);
    // }, []);
    const handleRepoKeyDown = (0,react.useCallback)((e, repoName, installationId)=>{
        if ((e.key === 'Enter' || e.key === ' ') && !isDropdownDisabled) {
            setSelectedRepo === null || setSelectedRepo === void 0 ? void 0 : setSelectedRepo(repoName);
            setSelectedInstallationId === null || setSelectedInstallationId === void 0 ? void 0 : setSelectedInstallationId(installationId);
            setOpenRepo(repoName);
            // Check submenu positioning after opening
            handleSubmenuPosition(repoName);
        }
    }, [
        isDropdownDisabled,
        setSelectedRepo,
        setSelectedInstallationId,
        handleSubmenuPosition
    ]);
    const handleRepoClick = (0,react.useCallback)((repo, installationId)=>{
        const { name: repoName, defaultBranch } = repo;
        if (!isDropdownDisabled) {
            if (isMobile) {
                // On mobile, select repo and show branches
                setMobileSelectedRepo(repoName);
                setMobileSelectedInstallationId(installationId);
                setShowBranchesOnMobile(true);
                // Load branches for the selected repo
                const installation = installations.find((inst)=>inst.installation.id === installationId);
                if (installation) {
                    const repoIndex = installation.repos.findIndex((repo)=>repo.name === repoName);
                    if (repoIndex !== -1) {
                        const repo = installation.repos[repoIndex];
                        if (repo.branches === null && !repo.loading) {
                            loadBranchesForRepo(installationId, repoName, repoIndex);
                        }
                    }
                }
            } else {
                // On desktop, just select repo
                setSelectedRepo === null || setSelectedRepo === void 0 ? void 0 : setSelectedRepo(repoName);
                setSelectedInstallationId === null || setSelectedInstallationId === void 0 ? void 0 : setSelectedInstallationId(installationId);
                setSelectedBranch === null || setSelectedBranch === void 0 ? void 0 : setSelectedBranch(defaultBranch);
            }
        }
    }, [
        isDropdownDisabled,
        setSelectedRepo,
        setSelectedInstallationId,
        isMobile,
        installations,
        loadBranchesForRepo,
        setSelectedBranch
    ]);
    const handleBranchClick = (0,react.useCallback)((repoName, branch, installationId)=>{
        if (!isDropdownDisabled) {
            setSelectedRepo === null || setSelectedRepo === void 0 ? void 0 : setSelectedRepo(repoName);
            setSelectedBranch === null || setSelectedBranch === void 0 ? void 0 : setSelectedBranch(branch);
            setSelectedInstallationId === null || setSelectedInstallationId === void 0 ? void 0 : setSelectedInstallationId(installationId);
            if (isMobile) {
                setIsOpen(false);
                setShowBranchesOnMobile(false);
                setMobileSelectedRepo(null);
                setMobileSelectedInstallationId(null);
            } else {
                setIsOpen(false);
                setOpenRepo(null);
            }
        }
    }, [
        isDropdownDisabled,
        setSelectedRepo,
        setSelectedBranch,
        setSelectedInstallationId,
        isMobile
    ]);
    const handleBranchKeyDown = (0,react.useCallback)((e, repoName, branch, installationId)=>{
        if ((e.key === 'Enter' || e.key === ' ') && !isDropdownDisabled) {
            setSelectedRepo === null || setSelectedRepo === void 0 ? void 0 : setSelectedRepo(repoName);
            setSelectedBranch === null || setSelectedBranch === void 0 ? void 0 : setSelectedBranch(branch);
            setSelectedInstallationId === null || setSelectedInstallationId === void 0 ? void 0 : setSelectedInstallationId(installationId);
            if (isMobile) {
                setIsOpen(false);
                setShowBranchesOnMobile(false);
                setMobileSelectedRepo(null);
                setMobileSelectedInstallationId(null);
            } else {
                setIsOpen(false);
                setOpenRepo(null);
            }
        }
    }, [
        isDropdownDisabled,
        setSelectedRepo,
        setSelectedBranch,
        setSelectedInstallationId,
        isMobile
    ]);
    const handleMobileBackToRepos = (0,react.useCallback)(()=>{
        setShowBranchesOnMobile(false);
        setMobileSelectedRepo(null);
        setMobileSelectedInstallationId(null);
    }, []);
    const handleConnect = async ()=>{
        try {
            setInstalling(true);
            await (0,github_app_api/* initiateGitHubAppInstall */.r)();
            return;
        } catch (err) {
            main/* datadogLogs */.yf.logger.error('Failed to initiate GitHub App install:', {}, err);
            setError("Failed to install GitHub App: ".concat(err instanceof Error ? err.message : 'Unknown error'));
        } finally{
            setInstalling(false);
        }
    };
    // Fetch installations and repositories
    const fetchInstallationsAndRepos = async ()=>{
        setLoading(true);
        setError(null);
        try {
            const { repositories } = await queryClient.fetchQuery({
                queryKey: (0,github_app_gen/* getGithubListAllRepositoriesQueryKey */.Ud)(),
                queryFn: github_app_gen/* githubListAllRepositories */.VU
            });
            if (!repositories.length) {
                setInstallations([]);
                setFilteredInstallations([]);
                setLoading(false);
                return Promise.resolve(false);
            }
            // Group repositories by installation_id
            const installationMap = new Map();
            for (const repo of repositories){
                const installationId = repo.installation_id;
                if (!installationMap.has(installationId)) {
                    // Create a minimal installation object from the repo data
                    // We don't have full installation details from this endpoint, so we'll use what we can infer
                    const installation = {
                        id: installationId,
                        account: {
                            login: repo.owner.login,
                            id: repo.owner.id,
                            avatar_url: repo.owner.avatar_url,
                            type: repo.owner.type,
                            html_url: repo.html_url
                        },
                        repository_selection: 'selected',
                        access_tokens_url: '',
                        repositories_url: '',
                        html_url: '',
                        app_id: 0,
                        app_slug: '',
                        target_id: repo.owner.id,
                        target_type: repo.owner.type,
                        permissions: {},
                        events: [],
                        created_at: '',
                        updated_at: ''
                    };
                    installationMap.set(installationId, {
                        installation,
                        repos: []
                    });
                }
                const installationData = installationMap.get(installationId);
                const repoWithBranches = {
                    name: repo.full_name,
                    defaultBranch: repo.default_branch,
                    branches: null,
                    loading: false,
                    error: undefined
                };
                installationData.repos.push(repoWithBranches);
            }
            const all = Array.from(installationMap.values());
            setInstallations(all);
            setFilteredInstallations(all);
            return Promise.resolve(true);
        } catch (err) {
            var _err_response;
            if ((err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.status) === 401) {
                main/* datadogLogs */.yf.logger.error('Got 401 from the backend, refetching oauth providers to check if User revoked access', {}, err);
                refetchUserOauthProviders();
            } else {
                main/* datadogLogs */.yf.logger.error('Failed to load installation repositories', {}, err);
                setError(constants/* GITHUB_CONSTANTS */.esR.FAILED_TO_LOAD_GITHUB_REPOSITORIES);
                setInstallations([]);
                setFilteredInstallations([]);
            }
        } finally{
            setLoading(false);
        }
        return Promise.resolve(false);
    };
    // Render popover content for selected repo/branch
    const renderPopoverContent = ()=>{
        if (!selectedRepo || !selectedBranch) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (GithubRepoBranchSelector_module_default()).popoverContent,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (GithubRepoBranchSelector_module_default()).popoverHeader,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: (GithubRepoBranchSelector_module_default()).popoverTitle,
                            children: constants/* GITHUB_CONSTANTS */.esR.GITHUB_LABEL
                        }),
                        isGitHubConnected && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            className: (GithubRepoBranchSelector_module_default()).popoverStatus,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: (GithubRepoBranchSelector_module_default()).statusDot
                                }),
                                constants/* GITHUB_CONSTANTS */.esR.CONNECTED_TEXT
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (GithubRepoBranchSelector_module_default()).popoverBody,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (GithubRepoBranchSelector_module_default()).popoverItem,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Laptop_es/* LaptopIcon */.W, {
                                    size: constants/* SVG_SIZE_M */.ng3,
                                    className: (GithubRepoBranchSelector_module_default()).popoverIcon
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: (GithubRepoBranchSelector_module_default()).popoverText,
                                    children: selectedRepo
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (GithubRepoBranchSelector_module_default()).popoverItem,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(GitBranch_es/* GitBranchIcon */.C, {
                                    size: constants/* SVG_SIZE_M */.ng3,
                                    className: (GithubRepoBranchSelector_module_default()).popoverIcon
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: (GithubRepoBranchSelector_module_default()).popoverText,
                                    children: selectedBranch
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    // Handle popover open/close
    const handlePopoverOpenChange = (open)=>{
        setPopoverOpen(open);
    };
    // Handle click on branch name for mobile
    const handleBranchNameClick = (e)=>{
        if (selectedBranch) {
            e.stopPropagation();
            setPopoverOpen(!popoverOpen);
        }
    };
    // Handle mouse enter/leave for desktop hover
    const handleMouseEnter = ()=>{
        if (selectedBranch) {
            setPopoverOpen(true);
        }
    };
    const handleMouseLeave = ()=>{
        if (selectedBranch) {
            setPopoverOpen(false);
        }
    };
    (0,react.useEffect)(()=>{
        if (isUserGithubAuthorized) {
            fetchInstallationsAndRepos();
        }
    }, [
        isUserGithubAuthorized
    ]);
    // Add keyboard shortcut to open dropdown (Ctrl/Cmd + G)
    (0,react.useEffect)(()=>{
        const handleKeyDown = (e)=>{
            if ((e.ctrlKey || e.metaKey) && e.key === 'g') {
                e.preventDefault();
                handleManualOpen();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return ()=>document.removeEventListener('keydown', handleKeyDown);
    }, [
        handleManualOpen
    ]);
    // Load branches for preselected repo when disabled (from thread context)
    (0,react.useEffect)(()=>{
        const loadBranchesForPreselectedRepo = async ()=>{
            if (isDropdownDisabled && selectedRepo && selectedInstallationId && installations.length > 0) {
                // Find the installation and repo
                const installation = installations.find((inst)=>inst.installation.id === selectedInstallationId);
                if (!installation) return;
                const repoIndex = installation.repos.findIndex((repo)=>repo.name === selectedRepo);
                if (repoIndex === -1) return;
                const repo = installation.repos[repoIndex];
                // If branches are not loaded yet, load them
                if (repo.branches === null && !repo.loading) {
                    await loadBranchesForRepo(selectedInstallationId, selectedRepo, repoIndex);
                }
            }
        };
        loadBranchesForPreselectedRepo();
    }, [
        isDropdownDisabled,
        selectedRepo,
        selectedInstallationId,
        installations,
        loadBranchesForRepo
    ]);
    const renderSubMenuContent = (repo, inst)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (GithubRepoBranchSelector_module_default()).stickyHeader,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (GithubRepoBranchSelector_module_default()).header,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: (GithubRepoBranchSelector_module_default()).repoBranchTitle,
                                    children: constants/* GITHUB_CONSTANTS */.esR.BRANCHES_LABEL
                                }),
                                repo.loading && /*#__PURE__*/ (0,jsx_runtime.jsx)(CircleNotch_es/* CircleNotchIcon */.E, {
                                    size: constants/* SVG_SIZE_M */.ng3,
                                    className: (GithubRepoBranchSelector_module_default()).spinner
                                })
                            ]
                        }),
                        repo.branches && repo.branches.length > 3 && /*#__PURE__*/ (0,jsx_runtime.jsx)(GitHubUniversalSearch, {
                            dataType: "branches",
                            branches: repo.branches,
                            onFilteredBranches: setFilteredBranches
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (GithubRepoBranchSelector_module_default()).branchList,
                    children: [
                        repo.loading && /*#__PURE__*/ (0,jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: classnames_default()((GithubRepoBranchSelector_module_default()).branchItem, selectedBranch === repo.defaultBranch && selectedRepo === repo.name && (GithubRepoBranchSelector_module_default()).selected),
                                        role: "menuitem",
                                        tabIndex: 0,
                                        onClick: ()=>handleBranchClick(repo.name, repo.defaultBranch, inst.installation.id),
                                        onKeyDown: (e)=>handleBranchKeyDown(e, repo.name, repo.defaultBranch, inst.installation.id),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(GitBranch_es/* GitBranchIcon */.C, {
                                                size: constants/* SVG_SIZE_M */.ng3,
                                                className: (GithubRepoBranchSelector_module_default()).branchIcon
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: (GithubRepoBranchSelector_module_default()).branchName,
                                                children: repo.defaultBranch
                                            }),
                                            selectedBranch === repo.defaultBranch && selectedRepo === repo.name && /*#__PURE__*/ (0,jsx_runtime.jsx)(Check_es/* CheckIcon */.S, {
                                                size: constants/* SVG_SIZE_M */.ng3,
                                                className: (GithubRepoBranchSelector_module_default()).checkIcon
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                                    className: "z-100",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        children: repo.defaultBranch
                                    })
                                })
                            ]
                        }),
                        repo.error && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (GithubRepoBranchSelector_module_default()).errorMessage,
                            children: repo.error
                        }),
                        repo.branches && (()=>{
                            // Use filtered branches if available, otherwise use all branches
                            const branchesToShow = filteredBranches.length > 0 ? filteredBranches : repo.branches.includes(repo.defaultBranch) ? repo.branches : [
                                repo.defaultBranch,
                                ...repo.branches
                            ];
                            return branchesToShow.map((branch)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: classnames_default()((GithubRepoBranchSelector_module_default()).branchItem, selectedBranch === branch && selectedRepo === repo.name && (GithubRepoBranchSelector_module_default()).selected),
                                                role: "menuitem",
                                                tabIndex: 0,
                                                onClick: ()=>handleBranchClick(repo.name, branch, inst.installation.id),
                                                onKeyDown: (e)=>handleBranchKeyDown(e, repo.name, branch, inst.installation.id),
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(GitBranch_es/* GitBranchIcon */.C, {
                                                        size: constants/* SVG_SIZE_M */.ng3,
                                                        className: (GithubRepoBranchSelector_module_default()).branchIcon
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: (GithubRepoBranchSelector_module_default()).branchName,
                                                        children: branch
                                                    }),
                                                    selectedBranch === branch && selectedRepo === repo.name && /*#__PURE__*/ (0,jsx_runtime.jsx)(Check_es/* CheckIcon */.S, {
                                                        size: constants/* SVG_SIZE_M */.ng3,
                                                        className: (GithubRepoBranchSelector_module_default()).checkIcon
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                                            className: (branch === null || branch === void 0 ? void 0 : branch.length) > 10 ? 'z-100' : 'z-[-100]',
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: (GithubRepoBranchSelector_module_default()).branchNameTooltip,
                                                children: branch
                                            })
                                        })
                                    ]
                                }, branch));
                        })()
                    ]
                })
            ]
        });
    // Render mobile content
    const renderMobileContent = ()=>{
        if (showBranchesOnMobile && mobileSelectedRepo && mobileSelectedInstallationId) {
            // Show branches for selected repo
            const installation = installations.find((inst)=>inst.installation.id === mobileSelectedInstallationId);
            if (!installation) return null;
            const repoIndex = installation.repos.findIndex((repo)=>repo.name === mobileSelectedRepo);
            if (repoIndex === -1) return null;
            const repo = installation.repos[repoIndex];
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (GithubRepoBranchSelector_module_default()).mobileContent,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (GithubRepoBranchSelector_module_default()).mobileHeader,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                                color: "transparent",
                                shape: "round",
                                className: (GithubRepoBranchSelector_module_default()).mobileBackButton,
                                onClick: handleMobileBackToRepos,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowLeft_es/* ArrowLeftIcon */.A, {
                                    size: constants/* SVG_SIZE_M */.ng3
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: (GithubRepoBranchSelector_module_default()).repoBranchTitle,
                                children: constants/* GITHUB_CONSTANTS */.esR.BRANCHES_LABEL
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (GithubRepoBranchSelector_module_default()).mobileBranchList,
                        children: [
                            repo.branches && repo.branches.length > 3 && /*#__PURE__*/ (0,jsx_runtime.jsx)(GitHubUniversalSearch, {
                                dataType: "branches",
                                branches: repo.branches,
                                onFilteredBranches: setFilteredBranches
                            }),
                            repo.loading && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (GithubRepoBranchSelector_module_default()).mobileLoadingItem,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CircleNotch_es/* CircleNotchIcon */.E, {
                                        size: constants/* SVG_SIZE_M */.ng3,
                                        className: (GithubRepoBranchSelector_module_default()).spinner
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: constants/* GITHUB_CONSTANTS */.esR.LOADING_BRANCHES_TEXT
                                    })
                                ]
                            }),
                            repo.error && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (GithubRepoBranchSelector_module_default()).mobileErrorItem,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: repo.error
                                })
                            }),
                            repo.branches && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: classnames_default()((GithubRepoBranchSelector_module_default()).mobileBranchItem, selectedBranch === repo.defaultBranch && selectedRepo === mobileSelectedRepo && (GithubRepoBranchSelector_module_default()).selected),
                                        onClick: ()=>handleBranchClick(mobileSelectedRepo, repo.defaultBranch, mobileSelectedInstallationId),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(GitBranch_es/* GitBranchIcon */.C, {
                                                size: constants/* SVG_SIZE_M */.ng3,
                                                className: (GithubRepoBranchSelector_module_default()).branchIcon
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: (GithubRepoBranchSelector_module_default()).branchName,
                                                children: repo.defaultBranch
                                            }),
                                            selectedBranch === repo.defaultBranch && selectedRepo === mobileSelectedRepo && /*#__PURE__*/ (0,jsx_runtime.jsx)(Check_es/* CheckIcon */.S, {
                                                size: constants/* SVG_SIZE_M */.ng3,
                                                className: (GithubRepoBranchSelector_module_default()).checkIcon
                                            })
                                        ]
                                    }),
                                    (filteredBranches.length > 0 ? filteredBranches : repo.branches).filter((branch)=>branch !== repo.defaultBranch).map((branch)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: classnames_default()((GithubRepoBranchSelector_module_default()).mobileBranchItem, selectedBranch === branch && selectedRepo === mobileSelectedRepo && (GithubRepoBranchSelector_module_default()).selected),
                                            onClick: ()=>handleBranchClick(mobileSelectedRepo, branch, mobileSelectedInstallationId),
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(GitBranch_es/* GitBranchIcon */.C, {
                                                    size: constants/* SVG_SIZE_M */.ng3,
                                                    className: (GithubRepoBranchSelector_module_default()).branchIcon
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: (GithubRepoBranchSelector_module_default()).branchName,
                                                    children: branch
                                                }),
                                                selectedBranch === branch && selectedRepo === mobileSelectedRepo && /*#__PURE__*/ (0,jsx_runtime.jsx)(Check_es/* CheckIcon */.S, {
                                                    size: constants/* SVG_SIZE_M */.ng3,
                                                    className: (GithubRepoBranchSelector_module_default()).checkIcon
                                                })
                                            ]
                                        }, branch))
                                ]
                            }),
                            !repo.loading && !repo.error && !repo.branches && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (GithubRepoBranchSelector_module_default()).mobileEmptyMessage,
                                children: constants/* GITHUB_CONSTANTS */.esR.NO_BRANCHES_FOUND_TEXT
                            })
                        ]
                    })
                ]
            });
        }
        // Show repo list
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (GithubRepoBranchSelector_module_default()).mobileContent,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (GithubRepoBranchSelector_module_default()).mobileHeader,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: (GithubRepoBranchSelector_module_default()).repoBranchTitle,
                        children: constants/* GITHUB_CONSTANTS */.esR.REPOSITORIES_LABEL
                    })
                }),
                isGitHubConnected && /*#__PURE__*/ (0,jsx_runtime.jsx)(GitHubUniversalSearch, {
                    dataType: "repositories",
                    installations: installations,
                    onFilteredInstallations: setFilteredInstallations
                }),
                loading && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (GithubRepoBranchSelector_module_default()).mobileLoadingMessage,
                    children: constants/* GITHUB_CONSTANTS */.esR.LOADING_REPOSITORIES
                }),
                error && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (GithubRepoBranchSelector_module_default()).mobileErrorContainer,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (GithubRepoBranchSelector_module_default()).mobileErrorMessage,
                            children: error
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectGitHubButton, {
                            installing: installing,
                            setInstalling: setInstalling,
                            setError: setError
                        })
                    ]
                }),
                !loading && !error && filteredInstallations.length === 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (GithubRepoBranchSelector_module_default()).mobileEmptyContainer,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (GithubRepoBranchSelector_module_default()).mobileEmptyMessage,
                            children: filteredInstallations.length !== installations.length ? constants/* GITHUB_CONSTANTS */.esR.NO_REPOSITORIES_MATCH_SEARCH : constants/* GITHUB_CONSTANTS */.esR.NO_REPOSITORIES_FOUND
                        }),
                        filteredInstallations.length === installations.length && installations.length === 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectGitHubButton, {
                            installing: installing,
                            setInstalling: setInstalling,
                            setError: setError
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (GithubRepoBranchSelector_module_default()).mobileRepoList,
                    children: filteredInstallations.map((inst)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: (GithubRepoBranchSelector_module_default()).mobileAccountHeader,
                                    children: inst.installation.account.login
                                }),
                                inst.repos.map((repo, repoIdx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: (GithubRepoBranchSelector_module_default()).mobileRepoItem,
                                        onClick: ()=>handleRepoClick(repo, inst.installation.id),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Laptop_es/* LaptopIcon */.W, {
                                                size: constants/* SVG_SIZE_M */.ng3
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: (GithubRepoBranchSelector_module_default()).repoName,
                                                children: repo.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CaretRight_es/* CaretRightIcon */.J, {
                                                className: (GithubRepoBranchSelector_module_default()).chevron,
                                                size: constants/* SVG_SIZE_M */.ng3
                                            })
                                        ]
                                    }, repo.name)),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(GithubSettingsLink, {
                                    installationId: inst.installation.id,
                                    isMobile: true
                                })
                            ]
                        }, inst.installation.id))
                })
            ]
        });
    };
    // Desktop dropdown
    if (!isMobile) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipProvider */.Bc, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* Tooltip */.m_, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
                    open: isOpen,
                    onOpenChange: handleOpenChange,
                    withEvent: true,
                    withListener: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                            asChild: true,
                            disabled: isDropdownDisabled,
                            children: selectedRepo && selectedBranch ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(popover/* Popover */.AM, {
                                open: Boolean(popoverOpen && selectedRepo && selectedBranch),
                                onOpenChange: handlePopoverOpenChange,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(popover/* PopoverTrigger */.Wv, {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                                                color: isDropdownActive ? 'tertiary-outline' : 'secondary',
                                                className: classnames_default()((GithubRepoBranchSelector_module_default()).trigger, isDropdownDisabled && (GithubRepoBranchSelector_module_default()).disabled, isDropdownActive && (GithubRepoBranchSelector_module_default()).selectedButton),
                                                onMouseEnter: handleMouseEnter,
                                                onMouseLeave: handleMouseLeave,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: (GithubRepoBranchSelector_module_default()).selectedContent,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: classnames_default()((GithubRepoBranchSelector_module_default()).githubIcon, isDropdownActive && (GithubRepoBranchSelector_module_default()).selectedGithubIcon),
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GithubLogo_es/* GithubLogoIcon */.y, {
                                                                size: constants/* SVG_SIZE_S */.lgH,
                                                                color: "#f5f5f5",
                                                                weight: "fill"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: (GithubRepoBranchSelector_module_default()).selectedBranchName,
                                                            children: selectedBranch
                                                        }),
                                                        !isDropdownDisabled && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: (GithubRepoBranchSelector_module_default()).clearButton,
                                                            onClick: handleClearSelection,
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(X_es/* XIcon */.u, {
                                                                size: constants/* SVG_SIZE_S */.lgH
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(popover/* PopoverContent */.hl, {
                                        className: (GithubRepoBranchSelector_module_default()).popoverContentWrapper,
                                        sideOffset: 8,
                                        side: "top",
                                        children: renderPopoverContent()
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                                asChild: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
                                    color: isDropdownActive ? 'tertiary-outline' : 'secondary',
                                    className: classnames_default()((GithubRepoBranchSelector_module_default()).trigger, isDropdownDisabled && (GithubRepoBranchSelector_module_default()).disabled),
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: (GithubRepoBranchSelector_module_default()).githubIcon,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GithubLogo_es/* GithubLogoIcon */.y, {
                                                size: constants/* SVG_SIZE_S */.lgH,
                                                color: "#f5f5f5",
                                                weight: "fill"
                                            })
                                        }),
                                        !isMobile && !isNarrowWidth && /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                            children: "GitHub"
                                        }),
                                        isGitHubConnected && !isNarrowWidth && /*#__PURE__*/ (0,jsx_runtime.jsx)(csr_CaretDown_es/* CaretDownIcon */.b, {
                                            size: constants/* SVG_SIZE_S */.lgH
                                        })
                                    ]
                                })
                            })
                        }),
                        !isGitHubConnected && /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                            side: "top",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                children: constants/* GITHUB_CONSTANTS */.esR.CONNECT_GITHUB_TEXT
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuContent */.SQ, {
                            align: "start",
                            className: (GithubRepoBranchSelector_module_default()).dropdownContent,
                            children: [
                                isGitHubConnected && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: (GithubRepoBranchSelector_module_default()).content,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: (GithubRepoBranchSelector_module_default()).repoBranchTitle,
                                                children: constants/* GITHUB_CONSTANTS */.esR.REPOSITORIES_LABEL
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(GitHubUniversalSearch, {
                                            dataType: "repositories",
                                            installations: installations,
                                            onFilteredInstallations: setFilteredInstallations,
                                            className: (GithubRepoBranchSelector_module_default()).repoSearch
                                        })
                                    ]
                                }),
                                isLoading && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: (GithubRepoBranchSelector_module_default()).loadingMessage,
                                    children: constants/* GITHUB_CONSTANTS */.esR.LOADING_REPOSITORIES
                                }),
                                error && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (GithubRepoBranchSelector_module_default()).errorContainer,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: (GithubRepoBranchSelector_module_default()).errorMessage,
                                            children: error
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectGitHubButton, {
                                            installing: installing,
                                            setInstalling: setInstalling,
                                            setError: setError
                                        })
                                    ]
                                }),
                                !isLoading && !error && filteredInstallations.length === 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (GithubRepoBranchSelector_module_default()).emptyContainer,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: (GithubRepoBranchSelector_module_default()).emptyMessage,
                                            children: filteredInstallations.length !== installations.length ? constants/* GITHUB_CONSTANTS */.esR.NO_REPOSITORIES_MATCH_SEARCH : constants/* GITHUB_CONSTANTS */.esR.NO_REPOSITORIES_FOUND
                                        }),
                                        filteredInstallations.length === installations.length && installations.length === 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectGitHubButton, {
                                            installing: installing,
                                            setInstalling: setInstalling,
                                            setError: setError
                                        })
                                    ]
                                }),
                                filteredInstallations.map((inst)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: (GithubRepoBranchSelector_module_default()).accountHeader,
                                                children: inst.installation.account.login
                                            }),
                                            inst.repos.map((repo, repoIdx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuSub */.lv, {
                                                    open: openRepo === repo.name,
                                                    onOpenChange: (open)=>{
                                                        if (open) {
                                                            handleRepoClick(repo, inst.installation.id);
                                                        } else {
                                                            setOpenRepo(null);
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuSubTrigger */.nV, {
                                                            className: "".concat((GithubRepoBranchSelector_module_default()).repoItem, " ").concat(openRepo === repo.name ? (GithubRepoBranchSelector_module_default()).selectedRepoItem : ''),
                                                            "data-repo": repo.name,
                                                            tabIndex: 0,
                                                            onMouseEnter: ()=>handleRepoMouseEnter(repo, repoIdx, inst.installation.id),
                                                            onKeyDown: (e)=>handleRepoKeyDown(e, repo.name, inst.installation.id),
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: (GithubRepoBranchSelector_module_default()).repoItem,
                                                                onClick: ()=>{
                                                                    handleRepoClick(repo, inst.installation.id);
                                                                    setIsOpen(false);
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Laptop_es/* LaptopIcon */.W, {
                                                                        size: constants/* SVG_SIZE_M */.ng3
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        className: (GithubRepoBranchSelector_module_default()).repoName,
                                                                        children: repo.name
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CaretRight_es/* CaretRightIcon */.J, {
                                                                        className: (GithubRepoBranchSelector_module_default()).chevron,
                                                                        size: constants/* SVG_SIZE_M */.ng3
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuSubContent */.M5, {
                                                            className: (GithubRepoBranchSelector_module_default()).branchSubmenu,
                                                            sideOffset: 4,
                                                            children: renderSubMenuContent(repo, inst)
                                                        })
                                                    ]
                                                }, repo.name)),
                                            isGitHubConnected && /*#__PURE__*/ (0,jsx_runtime.jsx)(GithubSettingsLink, {
                                                installationId: inst.installation.id,
                                                onMouseEnter: ()=>setOpenRepo(null)
                                            })
                                        ]
                                    }, inst.installation.id))
                            ]
                        })
                    ]
                })
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(sheet/* Sheet */.cj, {
        open: isOpen && !isDropdownDisabled,
        onOpenChange: handleSheetOpenChange,
        withEvent: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(sheet/* SheetContent */.h, {
                side: "bottom",
                className: (GithubRepoBranchSelector_module_default()).mobileSheetContent,
                onOpenAutoFocus: (e)=>e.preventDefault(),
                onCloseAutoFocus: (e)=>e.preventDefault(),
                children: renderMobileContent()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(sheet/* SheetTrigger */.CG, {
                asChild: true,
                children: selectedRepo && selectedBranch ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(popover/* Popover */.AM, {
                    open: Boolean(popoverOpen && selectedRepo && selectedBranch),
                    onOpenChange: handlePopoverOpenChange,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(popover/* PopoverTrigger */.Wv, {
                            asChild: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                                color: isDropdownActive ? 'tertiary-outline' : 'secondary',
                                shape: "regular",
                                className: classnames_default()((GithubRepoBranchSelector_module_default()).trigger, isDropdownDisabled && (GithubRepoBranchSelector_module_default()).disabled),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: (GithubRepoBranchSelector_module_default()).selectedContent,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: classnames_default()((GithubRepoBranchSelector_module_default()).githubIcon, isDropdownActive && (GithubRepoBranchSelector_module_default()).selectedGithubIcon),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GithubLogo_es/* GithubLogoIcon */.y, {
                                                size: constants/* SVG_SIZE_S */.lgH,
                                                color: "#f5f5f5",
                                                weight: "fill"
                                            })
                                        }),
                                        !isMobile && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: (GithubRepoBranchSelector_module_default()).selectedBranchName,
                                            onClick: handleBranchNameClick,
                                            children: selectedBranch
                                        }),
                                        !isDropdownDisabled && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: (GithubRepoBranchSelector_module_default()).clearButton,
                                            onClick: handleClearSelection,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(X_es/* XIcon */.u, {
                                                size: constants/* SVG_SIZE_S */.lgH
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(popover/* PopoverContent */.hl, {
                            className: (GithubRepoBranchSelector_module_default()).popoverContentWrapper,
                            sideOffset: 8,
                            side: "top",
                            children: renderPopoverContent()
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                    color: isDropdownActive ? 'tertiary-outline' : 'secondary',
                    shape: "round",
                    className: classnames_default()((GithubRepoBranchSelector_module_default()).trigger, isDropdownDisabled && (GithubRepoBranchSelector_module_default()).disabled),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: (GithubRepoBranchSelector_module_default()).githubIcon,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GithubLogo_es/* GithubLogoIcon */.y, {
                            size: constants/* SVG_SIZE_S */.lgH,
                            color: "#f5f5f5",
                            weight: "fill"
                        })
                    })
                })
            })
        ]
    });
};

;// ./src/components/thread/chat-input/components/GithubRepoBranchSelector/index.ts



// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/ArrowSquareOut.es.js
var ssr_ArrowSquareOut_es = __webpack_require__(97591);
;// ./src/components/Connectors/GithubConnector/GithubConnectorModal.tsx
/* __next_internal_client_entry_do_not_use__ GithubConnectorModal auto */ 





const GithubConnectorModal = (param)=>{
    let { isOpen, onClose, githubConfig, githubDisabled = false } = param;
    const handleClose = ()=>{
        onClose();
    };
    const detailedFields = [
        {
            name: 'Connector type',
            value: 'App'
        },
        {
            name: 'Built by',
            value: 'Ninja'
        },
        {
            name: 'Website',
            value: 'https://github.com',
            extraBtn: /*#__PURE__*/ (0,jsx_runtime.jsx)(ssr_ArrowSquareOut_es/* ArrowSquareOutIcon */.k, {
                size: constants/* SVG_SIZE_M */.ng3
            }),
            link: 'https://github.com'
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.lG, {
        open: isOpen,
        onOpenChange: handleClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogContent */.Cf, {
            className: (GithubConnectorModal_module_default()).root,
            hidecloseicon: false,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogTitle */.L3, {
                    className: (GithubConnectorModal_module_default()).title,
                    children: "Connectors"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (GithubConnectorModal_module_default()).content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (GithubConnectorModal_module_default()).headerWrapper,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: (GithubConnectorModal_module_default()).iconWrapper,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (GithubConnectorModal_module_default()).githubIcon,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ssr_GithubLogo_es/* GithubLogoIcon */.y, {
                                            size: constants/* SVG_SIZE_XL */.WSK,
                                            weight: "fill"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (GithubConnectorModal_module_default()).heading,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: (GithubConnectorModal_module_default()).header,
                                            children: "GitHub"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: (GithubConnectorModal_module_default()).description,
                                            children: "Automate your pull requests and commit workflows and keep changes synced both ways."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (GithubConnectorModal_module_default()).detailsOuterWrapper,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (GithubConnectorModal_module_default()).detailsWrapper,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: (GithubConnectorModal_module_default()).detailsInnerWrapper,
                                        children: detailedFields.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: (GithubConnectorModal_module_default()).fieldWrapper,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: (GithubConnectorModal_module_default()).fieldName,
                                                        children: item.name
                                                    }),
                                                    item.link ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        href: item.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: (GithubConnectorModal_module_default()).linkField,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                children: item.value
                                                            }),
                                                            item.extraBtn
                                                        ]
                                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                children: item.value
                                                            }),
                                                            item.extraBtn
                                                        ]
                                                    })
                                                ]
                                            }, item.name))
                                    }),
                                    githubConfig && /*#__PURE__*/ (0,jsx_runtime.jsx)(GithubRepoBranchSelector, {
                                        disabled: githubDisabled,
                                        selectedRepo: githubConfig.selectedRepo,
                                        setSelectedRepo: githubConfig.setSelectedRepo,
                                        selectedBranch: githubConfig.selectedBranch,
                                        setSelectedBranch: githubConfig.setSelectedBranch,
                                        selectedInstallationId: githubConfig.selectedInstallationId,
                                        setSelectedInstallationId: githubConfig.setSelectedInstallationId,
                                        isGithubContextFromThread: githubConfig.isGithubContextFromThread
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};

;// ./src/components/Connectors/GithubConnector/index.ts


;// ./src/components/thread/chat-input/components/ConnectorSelector/ConnectorSelector.tsx











const ConnectorSelector = (param)=>{
    let { disabled = false, githubDisabled = false, githubConfig, webSearchEnabled = false, onWebSearchToggle } = param;
    const [isOpen, setIsOpen] = (0,react.useState)(false);
    const [isGithubModalOpen, setIsGithubModalOpen] = (0,react.useState)(false);
    const shouldShowUnavailableConnectors = (0,esm/* useFeatureFlagEnabled */.Tp)('show-unavailable-connectors');
    const shouldShowConnectorLabel = (0,esm/* useFeatureFlagEnabled */.Tp)('show-connectors-label');
    const handleWebSearchToggle = (checked)=>{
        onWebSearchToggle === null || onWebSearchToggle === void 0 ? void 0 : onWebSearchToggle(checked);
    };
    const handleGithubClick = ()=>{
        setIsGithubModalOpen(true);
    };
    const handleGithubModalClose = ()=>{
        setIsGithubModalOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
                open: isOpen,
                onOpenChange: setIsOpen,
                withListener: true,
                withEvent: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                        asChild: true,
                        disabled: disabled,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
                            color: "secondary",
                            shape: shouldShowConnectorLabel ? 'regular' : 'round',
                            disabled: disabled,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(PlugsConnected_es/* PlugsConnectedIcon */.w, {
                                    size: constants/* SVG_SIZE_M */.ng3
                                }),
                                shouldShowConnectorLabel && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "Connect"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CaretDown_es/* CaretDownIcon */.b, {
                                            size: constants/* SVG_SIZE_M */.ng3
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuContent */.SQ, {
                        align: "start",
                        className: (ConnectorSelector_module_default()).content,
                        children: [
                            shouldShowUnavailableConnectors && /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */._2, {
                                onSelect: (e)=>{
                                    e.preventDefault();
                                    e.stopPropagation();
                                },
                                className: (ConnectorSelector_module_default()).item,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Globe_es/* GlobeIcon */.f, {
                                        size: constants/* SVG_SIZE_M */.ng3
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (ConnectorSelector_module_default()).label,
                                        children: "Web Search"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SwitchSimple/* SwitchSimple */.v, {
                                        isChecked: webSearchEnabled,
                                        onChange: handleWebSearchToggle
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */._2, {
                                className: (ConnectorSelector_module_default()).item,
                                onSelect: handleGithubClick,
                                disabled: githubDisabled,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (ConnectorSelector_module_default()).githubIcon,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ssr_GithubLogo_es/* GithubLogoIcon */.y, {
                                            size: constants/* SVG_SIZE_S */.lgH,
                                            weight: "fill"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (ConnectorSelector_module_default()).label,
                                        children: "GitHub"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (ConnectorSelector_module_default()).connectLabel,
                                        children: "connect "
                                    })
                                ]
                            }),
                            shouldShowUnavailableConnectors && /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */._2, {
                                className: (ConnectorSelector_module_default()).item,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Icon/* Icon */.I, {
                                        type: "slack",
                                        size: constants/* SVG_SIZE_M */.ng3
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (ConnectorSelector_module_default()).label,
                                        children: "Slack"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (ConnectorSelector_module_default()).connectLabel,
                                        children: "connect "
                                    })
                                ]
                            }),
                            shouldShowUnavailableConnectors && /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */._2, {
                                className: (ConnectorSelector_module_default()).item,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Icon/* Icon */.I, {
                                        type: "figma",
                                        size: constants/* SVG_SIZE_S */.lgH
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (ConnectorSelector_module_default()).label,
                                        children: "Figma"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (ConnectorSelector_module_default()).connectLabel,
                                        children: "connect "
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuSeparator */.mB, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(GithubConnectorModal, {
                isOpen: isGithubModalOpen,
                onClose: handleGithubModalClose,
                githubConfig: githubConfig,
                githubDisabled: githubDisabled
            })
        ]
    });
};

;// ./src/components/thread/chat-input/components/ConnectorSelector/index.ts


// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Sparkle.es.js
var Sparkle_es = __webpack_require__(46441);
// EXTERNAL MODULE: ./node_modules/loglevel/lib/loglevel.js
var loglevel = __webpack_require__(44293);
var loglevel_default = /*#__PURE__*/__webpack_require__.n(loglevel);
// EXTERNAL MODULE: ./src/components/thread/chat-input/components/ImprovePromptButton/ImprovePromptButton.module.scss
var ImprovePromptButton_module = __webpack_require__(13915);
var ImprovePromptButton_module_default = /*#__PURE__*/__webpack_require__.n(ImprovePromptButton_module);
;// ./src/components/thread/chat-input/components/ImprovePromptButton/ImprovePromptButton.tsx












const getImprovePrompt = async (param)=>{
    let { userId, prompt } = param;
    var _session_tokens;
    const session = await (0,fetchAuthSession/* fetchAuthSession */.$)();
    if (!(session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken)) {
        throw new Error('No access token available');
    }
    const response = await fetch("".concat(envs/* NEXT_PUBLIC_BFF_URL */.Nj, "/users/").concat(userId, "/prompts/improve"), {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: "Bearer ".concat(session.tokens.accessToken.toString())
        }),
        body: JSON.stringify({
            prompt,
            stream: true
        })
    });
    if (!response.ok) {
        throw new Error('Failed to fetch improved prompt');
    }
    return response;
};
const useImprovePrompt = (param)=>{
    let { inputRef, inputValue, onInputChange } = param;
    const [improvedPrompt, setImprovedPrompt] = (0,react.useState)('');
    const [temporaryInputValue, setTemporaryInputValue] = (0,react.useState)('');
    const [isPromptLoading, setIsPromptLoading] = (0,react.useState)(false);
    const undoTriggerRef = (0,react.useRef)(false);
    const { user } = (0,AuthProvider/* useAuth */.A)();
    const handleReturnInputToFocus = ()=>{
        var _inputRef_current_focus, _inputRef_current;
        (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : (_inputRef_current_focus = _inputRef_current.focus) === null || _inputRef_current_focus === void 0 ? void 0 : _inputRef_current_focus.call(_inputRef_current);
    };
    const setInputValue = (value)=>{
        if (onInputChange) {
            const event = {
                target: {
                    value
                }
            };
            onInputChange(event);
        }
    };
    const handleUndo = ()=>{
        if (isPromptLoading) {
            undoTriggerRef.current = true;
        }
        setIsPromptLoading(false);
        setInputValue(temporaryInputValue);
        setTemporaryInputValue('');
        handleReturnInputToFocus();
    };
    const updatePrompt = async (param)=>{
        let { response, stream } = param;
        if (!stream) {
            const result = await response.json();
            setInputValue(result.improved_prompt);
            setImprovedPrompt(result.improved_prompt);
            return;
        }
        let value = '';
        if (undoTriggerRef.current) {
            undoTriggerRef.current = false;
            return;
        }
        if (response.body) {
            const reader = response.body.getReader();
            while(true){
                try {
                    const { done, value: chunk } = await reader.read();
                    if (done) break;
                    value += textDecoder.decode(chunk, {
                        stream: true
                    });
                    if (undoTriggerRef.current) {
                        undoTriggerRef.current = false;
                        return;
                    }
                    setInputValue(value);
                } catch (e) {
                    loglevel_default().error('Error reading stream', e);
                    break;
                }
            }
            setImprovedPrompt(value);
        }
    };
    const handleSendPrompt = async ()=>{
        try {
            setIsPromptLoading(true);
            setTemporaryInputValue(inputValue);
            setInputValue('');
            const response = await getImprovePrompt({
                userId: user,
                prompt: inputValue
            });
            updatePrompt({
                response,
                stream: true
            });
            setIsPromptLoading(false);
        } catch (e) {
            if (undoTriggerRef.current) {
                undoTriggerRef.current = false;
            }
            setIsPromptLoading(false);
            setInputValue(temporaryInputValue);
            setTemporaryInputValue('');
            loglevel_default().error(e);
        }
        handleReturnInputToFocus();
    };
    const isUndoImprovePromptAvailable = (0,react.useMemo)(()=>!!temporaryInputValue && inputValue.trim() === improvedPrompt.trim(), [
        temporaryInputValue,
        inputValue,
        improvedPrompt
    ]);
    const isImprovePromptDisabled = (0,react.useMemo)(()=>!isPromptLoading && !inputValue.trim(), [
        isPromptLoading,
        inputValue
    ]);
    return {
        isPromptLoading,
        isUndoImprovePromptAvailable,
        isImprovePromptDisabled,
        improvePrompt: handleSendPrompt,
        undoImprovePrompt: handleUndo
    };
};
const textDecoder = new TextDecoder();
const ImprovePromptButton = (param)=>{
    let { isPromptLoading: isLoading, isImprovePromptDisabled: isDisabled, improvePrompt, undoImprovePrompt } = param;
    const buttonTitle = (0,react.useMemo)(()=>isLoading ? 'Cancel' : 'Improve prompt', [
        isLoading
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipProvider */.Bc, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (ImprovePromptButton_module_default()).root,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                disableHoverableContent: isLoading,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                        asChild: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                            color: isLoading ? 'tertiary' : 'transparent',
                            onClick: isLoading ? undoImprovePrompt : improvePrompt,
                            disabled: isDisabled,
                            shape: "round",
                            className: (ImprovePromptButton_module_default()).button,
                            children: isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(X_es.X, {
                                        size: constants/* SVG_SIZE_M */.ng3
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SpinnerSimple/* SpinnerSimple */.c, {
                                        size: constants/* SVG_SIZE_XXL */.iWV,
                                        className: (ImprovePromptButton_module_default()).spinner,
                                        color: "primary"
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Sparkle_es/* Sparkle */.R, {
                                size: constants/* SVG_SIZE_M */.ng3
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                        side: "top",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            children: buttonTitle
                        })
                    })
                ]
            })
        })
    });
};

;// ./src/components/thread/chat-input/components/ImprovePromptButton/index.ts


// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/ArrowUUpLeft.es.js + 1 modules
var ArrowUUpLeft_es = __webpack_require__(9492);
// EXTERNAL MODULE: ./src/components/thread/chat-input/components/UndoPromptButton/UndoPromptButton.module.scss
var UndoPromptButton_module = __webpack_require__(39985);
var UndoPromptButton_module_default = /*#__PURE__*/__webpack_require__.n(UndoPromptButton_module);
;// ./src/components/thread/chat-input/components/UndoPromptButton/UndoPromptButton.tsx





const UndoPromptButton = (param)=>{
    let { showUndoPromptButton, isLoading, handleUndo } = param;
    if (!showUndoPromptButton || isLoading) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
        className: (UndoPromptButton_module_default()).button,
        color: "secondary-outline",
        onClick: handleUndo,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowUUpLeft_es/* ArrowUUpLeft */.f, {
            size: constants/* SVG_SIZE_S */.lgH
        })
    });
};

;// ./src/components/thread/chat-input/components/UndoPromptButton/index.ts


// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/X.es.js
var ssr_X_es = __webpack_require__(10127);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/PlugsConnected.es.js
var csr_PlugsConnected_es = __webpack_require__(50565);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Plus.es.js + 1 modules
var Plus_es = __webpack_require__(98038);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/NotionLogo.es.js + 1 modules
var NotionLogo_es = __webpack_require__(29134);
;// ./src/components/home/icons.tsx


const Icons = {
    logo: (param)=>{
        let { className } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            width: "42",
            height: "24",
            viewBox: "0 0 42 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: (0,lib_utils.cn)('size-4 fill-[var(--secondary)]', className),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    clipPath: "url(#clip0_322_9172)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M22.3546 0.96832C22.9097 0.390834 23.6636 0.0664062 24.4487 0.0664062C27.9806 0.0664062 31.3091 0.066408 34.587 0.0664146C41.1797 0.0664284 44.481 8.35854 39.8193 13.2082L29.6649 23.7718C29.1987 24.2568 28.4016 23.9133 28.4016 23.2274V13.9234L29.5751 12.7025C30.5075 11.7326 29.8472 10.0742 28.5286 10.0742H13.6016L22.3546 0.96832Z",
                            fill: "current"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M19.6469 23.0305C19.0919 23.608 18.338 23.9324 17.5529 23.9324C14.021 23.9324 10.6925 23.9324 7.41462 23.9324C0.821896 23.9324 -2.47942 15.6403 2.18232 10.7906L12.3367 0.227022C12.8029 -0.257945 13.6 0.0855283 13.6 0.771372L13.6 10.0754L12.4265 11.2963C11.4941 12.2662 12.1544 13.9246 13.473 13.9246L28.4001 13.9246L19.6469 23.0305Z",
                            fill: "current"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                        id: "clip0_322_9172",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                            width: "42",
                            height: "24",
                            fill: "white"
                        })
                    })
                })
            ]
        });
    },
    soc2: (param)=>{
        let { className } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            width: "46",
            height: "45",
            viewBox: "0 0 46 45",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: (0,lib_utils.cn)('size-4', className),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    filter: "url(#filter0_ddd_1_4900)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                            x: "3",
                            y: "0.863281",
                            width: "40",
                            height: "40",
                            rx: "20",
                            fill: "url(#paint0_linear_1_4900)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                            filter: "url(#filter1_d_1_4900)",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                                    x: "6.15784",
                                    y: "4.021",
                                    width: "33.6842",
                                    height: "33.6842",
                                    rx: "16.8421",
                                    fill: "url(#paint1_linear_1_4900)"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M15.0475 29.6233C13.7506 29.6233 12.9548 28.8938 12.8738 27.8033L13.8464 27.7443C13.9348 28.4222 14.3401 28.798 15.0622 28.798C15.6812 28.798 16.0348 28.5696 16.0348 28.1201C16.0348 27.7148 15.8285 27.4717 14.7601 27.2212C13.4633 26.9264 12.977 26.558 12.977 25.7033C12.977 24.7896 13.6917 24.1559 14.8633 24.1559C16.1159 24.1559 16.8012 24.8854 16.9191 25.8948L15.9538 25.9391C15.8875 25.3717 15.5117 24.9812 14.8485 24.9812C14.2959 24.9812 13.957 25.2612 13.957 25.6664C13.957 26.0938 14.2001 26.2559 15.1359 26.4696C16.5433 26.7717 17.0148 27.2875 17.0148 28.0685C17.0148 29.0264 16.2338 29.6233 15.0475 29.6233ZM19.9915 29.6233C18.4367 29.6233 17.5009 28.5843 17.5009 26.897C17.5009 25.2096 18.4367 24.1559 19.9915 24.1559C21.5536 24.1559 22.4894 25.2096 22.4894 26.897C22.4894 28.5843 21.5536 29.6233 19.9915 29.6233ZM19.9915 28.7906C20.942 28.7906 21.502 28.0906 21.502 26.897C21.502 25.7033 20.942 24.9885 19.9915 24.9885C19.0557 24.9885 18.4883 25.7033 18.4883 26.897C18.4883 28.0906 19.0557 28.7906 19.9915 28.7906ZM25.324 29.6233C23.8945 29.6233 22.8997 28.6064 22.8997 26.897C22.8997 25.2169 23.865 24.1559 25.3313 24.1559C26.665 24.1559 27.3797 24.8559 27.6082 26.0422L26.6061 26.0938C26.4734 25.4085 26.0534 24.9885 25.3313 24.9885C24.4397 24.9885 23.8871 25.7327 23.8871 26.897C23.8871 28.0759 24.4545 28.7906 25.324 28.7906C26.105 28.7906 26.5176 28.3412 26.6355 27.5896L27.6376 27.6412C27.4313 28.8717 26.6429 29.6233 25.324 29.6233ZM29.6489 29.5054C29.6489 28.238 30.1205 27.5085 31.5573 26.7569C32.2721 26.3812 32.53 26.1748 32.53 25.7327C32.53 25.298 32.2426 24.9885 31.6826 24.9885C31.0858 24.9885 30.7321 25.3348 30.651 25.9685L29.6637 25.9096C29.7668 24.8191 30.4889 24.1559 31.6826 24.1559C32.8395 24.1559 33.5173 24.7896 33.5173 25.718C33.5173 26.5212 33.1416 26.897 32.1173 27.4422C31.2479 27.9064 30.8279 28.3485 30.7984 28.6727H33.5173V29.5054H29.6489Z",
                                    fill: "#101828"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M13.0537 17.8882L14.9621 12.6566H15.6253L17.5263 17.8882H16.9811L16.4211 16.3187H14.159L13.599 17.8882H13.0537ZM14.3285 15.8324H16.2516L15.2937 13.1061L14.3285 15.8324ZM18.026 17.8882V12.6566H18.5271V17.8882H18.026ZM21.5495 18.0061C20.1642 18.0061 19.2506 16.9745 19.2506 15.2798C19.2506 13.585 20.1642 12.5387 21.5495 12.5387C22.7727 12.5387 23.4506 13.2387 23.6642 14.3292L23.1337 14.3661C22.9863 13.5482 22.4632 13.0324 21.5495 13.0324C20.4811 13.0324 19.7737 13.8798 19.7737 15.2798C19.7737 16.6798 20.4811 17.5124 21.5495 17.5124C22.5074 17.5124 23.0453 16.9598 23.1779 16.0608L23.7085 16.0977C23.5242 17.2471 22.7727 18.0061 21.5495 18.0061ZM24.5062 17.8882V12.6566H26.3409C27.4904 12.6566 28.1683 13.2461 28.1683 14.2187C28.1683 15.1913 27.4904 15.7808 26.3409 15.7808H25.0072V17.8882H24.5062ZM25.0072 15.2945H26.3409C27.1957 15.2945 27.6378 14.9187 27.6378 14.2187C27.6378 13.5113 27.1957 13.1429 26.3409 13.1429H25.0072V15.2945ZM27.9425 17.8882L29.851 12.6566H30.5141L32.4152 17.8882H31.8699L31.3099 16.3187H29.0478L28.4878 17.8882H27.9425ZM29.2173 15.8324H31.1404L30.1825 13.1061L29.2173 15.8324Z",
                                    fill: "#6A7282"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("line", {
                                    x1: "10.4938",
                                    y1: "21.2488",
                                    x2: "34.988",
                                    y2: "21.2488",
                                    stroke: "#E5E7EB",
                                    strokeWidth: "0.263158"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                            id: "filter0_ddd_1_4900",
                            x: "0.857143",
                            y: "0.148996",
                            width: "44.2857",
                            height: "44.2857",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "erode",
                                    in: "SourceAlpha",
                                    result: "effect1_dropShadow_1_4900"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "0.714286"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "0.357143"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1_4900"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "erode",
                                    in: "SourceAlpha",
                                    result: "effect2_dropShadow_1_4900"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "1.42857"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "1.42857"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect1_dropShadow_1_4900",
                                    result: "effect2_dropShadow_1_4900"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "dilate",
                                    in: "SourceAlpha",
                                    result: "effect3_dropShadow_1_4900"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect2_dropShadow_1_4900",
                                    result: "effect3_dropShadow_1_4900"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect3_dropShadow_1_4900",
                                    result: "shape"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                            id: "filter1_d_1_4900",
                            x: "5.44355",
                            y: "3.30671",
                            width: "35.1128",
                            height: "35.1127",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "dilate",
                                    in: "SourceAlpha",
                                    result: "effect1_dropShadow_1_4900"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1_4900"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_1_4900",
                                    result: "shape"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint0_linear_1_4900",
                            x1: "9.88803",
                            y1: "6.55415",
                            x2: "36.0447",
                            y2: "35.5773",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    stopColor: "#F9FAFB"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#E5E7EB"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint1_linear_1_4900",
                            x1: "11.9583",
                            y1: "8.8133",
                            x2: "33.9849",
                            y2: "33.2538",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    stopColor: "#E5E7EB"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F9FAFB"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    },
    soc2Dark: (param)=>{
        let { className } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            width: "46",
            height: "45",
            viewBox: "0 0 46 45",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: (0,lib_utils.cn)('size-4', className),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    filter: "url(#filter0_ddd_1_2018)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                            x: "3",
                            y: "0.863281",
                            width: "40",
                            height: "40",
                            rx: "20",
                            fill: "url(#paint0_linear_1_2018)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                            filter: "url(#filter1_d_1_2018)",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                                    x: "6.1579",
                                    y: "4.021",
                                    width: "33.6842",
                                    height: "33.6842",
                                    rx: "16.8421",
                                    fill: "url(#paint1_linear_1_2018)"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M15.0441 29.6233C14.6118 29.6233 14.2385 29.5496 13.9241 29.4022C13.6097 29.2499 13.3617 29.0362 13.1799 28.7612C12.9982 28.4861 12.8925 28.1668 12.8631 27.8033L13.8357 27.7443C13.8701 27.9752 13.9364 28.1692 14.0346 28.3264C14.1329 28.4787 14.2655 28.5966 14.4325 28.6801C14.6045 28.7587 14.8132 28.798 15.0589 28.798C15.3683 28.798 15.6066 28.7415 15.7736 28.6285C15.9455 28.5106 16.0315 28.3412 16.0315 28.1201C16.0315 27.9777 15.9971 27.8573 15.9283 27.7591C15.8596 27.6559 15.7343 27.5626 15.5525 27.4791C15.3708 27.3906 15.1055 27.3047 14.7567 27.2212C14.3097 27.118 13.9585 27.005 13.7031 26.8822C13.4476 26.7545 13.261 26.5973 13.1431 26.4106C13.0301 26.224 12.9736 25.9882 12.9736 25.7033C12.9736 25.3987 13.0473 25.131 13.1946 24.9001C13.3469 24.6643 13.5655 24.4826 13.8504 24.3548C14.1353 24.2222 14.4718 24.1559 14.8599 24.1559C15.2627 24.1559 15.6115 24.2296 15.9062 24.3769C16.201 24.5243 16.4318 24.7282 16.5989 24.9885C16.7659 25.2489 16.869 25.551 16.9083 25.8948L15.9431 25.9391C15.9234 25.7475 15.8669 25.5805 15.7736 25.438C15.6803 25.2906 15.555 25.1777 15.3978 25.0991C15.2455 25.0205 15.0613 24.9812 14.8452 24.9812C14.5701 24.9812 14.3515 25.045 14.1894 25.1727C14.0273 25.2955 13.9462 25.4601 13.9462 25.6664C13.9462 25.8089 13.9806 25.9268 14.0494 26.0201C14.1182 26.1134 14.2336 26.1945 14.3957 26.2633C14.5627 26.3271 14.8059 26.3959 15.1252 26.4696C15.5869 26.5678 15.9553 26.6931 16.2304 26.8454C16.5055 26.9927 16.702 27.1671 16.8199 27.3685C16.9427 27.565 17.0041 27.7984 17.0041 28.0685C17.0041 28.3829 16.9231 28.658 16.761 28.8938C16.5989 29.1247 16.368 29.304 16.0683 29.4317C15.7736 29.5594 15.4322 29.6233 15.0441 29.6233ZM19.9881 29.6233C19.4723 29.6233 19.0277 29.5152 18.6544 29.2991C18.2811 29.078 17.9937 28.7636 17.7923 28.3559C17.5909 27.9433 17.4902 27.4569 17.4902 26.897C17.4902 26.3369 17.5909 25.8506 17.7923 25.438C17.9937 25.0254 18.2811 24.7085 18.6544 24.4875C19.0277 24.2664 19.4723 24.1559 19.9881 24.1559C20.5039 24.1559 20.9484 24.2664 21.3218 24.4875C21.7 24.7085 21.9874 25.0254 22.1839 25.438C22.3853 25.8506 22.486 26.3369 22.486 26.897C22.486 27.4569 22.3853 27.9433 22.1839 28.3559C21.9874 28.7636 21.7 29.078 21.3218 29.2991C20.9484 29.5152 20.5039 29.6233 19.9881 29.6233ZM19.9881 28.7906C20.3025 28.7906 20.5727 28.717 20.7986 28.5696C21.0246 28.4173 21.1965 28.1987 21.3144 27.9138C21.4323 27.6289 21.4913 27.2899 21.4913 26.897C21.4913 26.4991 21.4323 26.1577 21.3144 25.8727C21.1965 25.5878 21.0246 25.3692 20.7986 25.2169C20.5727 25.0647 20.3025 24.9885 19.9881 24.9885C19.6737 24.9885 19.4035 25.0647 19.1776 25.2169C18.9565 25.3692 18.7846 25.5878 18.6618 25.8727C18.5439 26.1577 18.4849 26.4991 18.4849 26.897C18.4849 27.2899 18.5439 27.6289 18.6618 27.9138C18.7846 28.1987 18.9565 28.4173 19.1776 28.5696C19.4035 28.717 19.6737 28.7906 19.9881 28.7906ZM25.3276 29.6233C24.8511 29.6233 24.4311 29.5152 24.0676 29.2991C23.7041 29.078 23.4192 28.7612 23.2129 28.3485C23.0066 27.9359 22.9034 27.452 22.9034 26.897C22.9034 26.3468 23.0041 25.8654 23.2055 25.4527C23.4069 25.0352 23.6894 24.7159 24.0529 24.4948C24.4213 24.2689 24.8511 24.1559 25.3423 24.1559C25.9908 24.1559 26.5016 24.318 26.875 24.6422C27.2532 24.9664 27.4988 25.4331 27.6118 26.0422L26.6097 26.0938C26.5459 25.745 26.4059 25.4748 26.1897 25.2833C25.9785 25.0868 25.696 24.9885 25.3423 24.9885C25.0476 24.9885 24.7897 25.0671 24.5687 25.2243C24.3525 25.3766 24.1855 25.5977 24.0676 25.8875C23.9546 26.1724 23.8981 26.5089 23.8981 26.897C23.8981 27.285 23.9571 27.6215 24.075 27.9064C24.1929 28.1913 24.3599 28.4099 24.576 28.5622C24.7922 28.7145 25.0452 28.7906 25.335 28.7906C25.7132 28.7906 26.0104 28.6875 26.2266 28.4812C26.4427 28.2699 26.5802 27.9727 26.6392 27.5896L27.6413 27.6412C27.5381 28.2699 27.2876 28.7587 26.8897 29.1075C26.4967 29.4513 25.976 29.6233 25.3276 29.6233ZM29.6598 29.5054C29.6598 29.078 29.7187 28.7071 29.8366 28.3927C29.9594 28.0734 30.1584 27.7836 30.4335 27.5233C30.7086 27.2629 31.0868 27.0075 31.5682 26.7569C31.8236 26.6194 32.0177 26.504 32.1503 26.4106C32.2879 26.3124 32.3861 26.2117 32.445 26.1085C32.5089 26.0054 32.5408 25.8801 32.5408 25.7327C32.5408 25.5068 32.4671 25.3275 32.3198 25.1948C32.1724 25.0573 31.9636 24.9885 31.6935 24.9885C31.3987 24.9885 31.1629 25.072 30.9861 25.2391C30.8093 25.4061 30.7012 25.6492 30.6619 25.9685L29.6745 25.9096C29.7236 25.3594 29.9226 24.9296 30.2714 24.6201C30.625 24.3106 31.0991 24.1559 31.6935 24.1559C32.0717 24.1559 32.3984 24.2222 32.6735 24.3548C32.9535 24.4826 33.1647 24.6643 33.3071 24.9001C33.4545 25.1359 33.5282 25.4085 33.5282 25.718C33.5282 25.9882 33.4815 26.2166 33.3882 26.4033C33.2998 26.5899 33.1573 26.7619 32.9608 26.9191C32.7693 27.0762 32.4917 27.2506 32.1282 27.4422C31.7057 27.6682 31.384 27.8892 31.1629 28.1054C30.9419 28.3166 30.824 28.5057 30.8093 28.6727H33.5282V29.5054H29.6598Z",
                                    fill: "#F4F4F5"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M14.883 12.6566H15.5462L17.4546 17.8882H16.9094L16.3494 16.3187H14.0873L13.5273 17.8882H12.982L14.883 12.6566ZM16.1799 15.8324L15.2146 13.1061L14.2567 15.8324H16.1799ZM18.0764 12.6566H18.5775V17.8882H18.0764V12.6566ZM21.6147 18.0061C21.1578 18.0061 20.755 17.898 20.4062 17.6819C20.0624 17.4608 19.7947 17.144 19.6031 16.7313C19.4115 16.3187 19.3157 15.8349 19.3157 15.2798C19.3157 14.7247 19.4115 14.2408 19.6031 13.8282C19.7947 13.4106 20.0624 13.0913 20.4062 12.8703C20.755 12.6492 21.1578 12.5387 21.6147 12.5387C22.2091 12.5387 22.6831 12.6959 23.0368 13.0103C23.3905 13.3247 23.6238 13.7643 23.7368 14.3292L23.2062 14.3661C23.1277 13.9485 22.9533 13.6219 22.6831 13.3861C22.4178 13.1503 22.0617 13.0324 21.6147 13.0324C21.261 13.0324 20.9491 13.1233 20.6789 13.305C20.4136 13.4819 20.2073 13.7398 20.0599 14.0787C19.9175 14.4177 19.8462 14.818 19.8462 15.2798C19.8462 15.7415 19.9175 16.1419 20.0599 16.4808C20.2073 16.8149 20.4136 17.0703 20.6789 17.2471C20.9491 17.424 21.261 17.5124 21.6147 17.5124C22.0862 17.5124 22.4596 17.3871 22.7347 17.1366C23.0098 16.8812 23.1817 16.5226 23.2505 16.0608L23.781 16.0977C23.6877 16.6871 23.4519 17.1538 23.0736 17.4977C22.7003 17.8366 22.214 18.0061 21.6147 18.0061ZM24.571 12.6566H26.4058C26.784 12.6566 27.1082 12.7205 27.3784 12.8482C27.6535 12.971 27.8647 13.1503 28.0121 13.3861C28.1594 13.617 28.2331 13.8945 28.2331 14.2187C28.2331 14.538 28.1594 14.8156 28.0121 15.0513C27.8647 15.2871 27.6535 15.4689 27.3784 15.5966C27.1082 15.7194 26.784 15.7808 26.4058 15.7808H25.0721V17.8882H24.571V12.6566ZM26.4058 15.2945C26.8331 15.2945 27.1549 15.2036 27.371 15.0219C27.5921 14.8401 27.7026 14.5724 27.7026 14.2187C27.7026 13.865 27.5921 13.5973 27.371 13.4156C27.1549 13.2338 26.8331 13.1429 26.4058 13.1429H25.0721V15.2945H26.4058ZM29.923 12.6566H30.5861L32.4945 17.8882H31.9493L31.3893 16.3187H29.1272L28.5672 17.8882H28.0219L29.923 12.6566ZM31.2198 15.8324L30.2545 13.1061L29.2967 15.8324H31.2198Z",
                                    fill: "#D4D4D8"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("line", {
                                    x1: "10.4938",
                                    y1: "21.2488",
                                    x2: "34.9881",
                                    y2: "21.2488",
                                    stroke: "#E4E4E7",
                                    strokeWidth: "0.263158"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                            id: "filter0_ddd_1_2018",
                            x: "0.857143",
                            y: "0.148996",
                            width: "44.2857",
                            height: "44.2857",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "erode",
                                    in: "SourceAlpha",
                                    result: "effect1_dropShadow_1_2018"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "0.714286"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "0.357143"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1_2018"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "erode",
                                    in: "SourceAlpha",
                                    result: "effect2_dropShadow_1_2018"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "1.42857"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "1.42857"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect1_dropShadow_1_2018",
                                    result: "effect2_dropShadow_1_2018"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "dilate",
                                    in: "SourceAlpha",
                                    result: "effect3_dropShadow_1_2018"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect2_dropShadow_1_2018",
                                    result: "effect3_dropShadow_1_2018"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect3_dropShadow_1_2018",
                                    result: "shape"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                            id: "filter1_d_1_2018",
                            x: "5.44361",
                            y: "3.30671",
                            width: "35.1128",
                            height: "35.1127",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "dilate",
                                    in: "SourceAlpha",
                                    result: "effect1_dropShadow_1_2018"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1_2018"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_1_2018",
                                    result: "shape"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint0_linear_1_2018",
                            x1: "9.88803",
                            y1: "6.55415",
                            x2: "36.0447",
                            y2: "35.5773",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    stopColor: "#27272A"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#52525C"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint1_linear_1_2018",
                            x1: "11.9583",
                            y1: "8.8133",
                            x2: "33.985",
                            y2: "33.2538",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    stopColor: "#52525C"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#27272A"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    },
    hipaa: (param)=>{
        let { className } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            width: "46",
            height: "45",
            viewBox: "0 0 46 45",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: className,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    filter: "url(#filter0_ddd_1_4905)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                            x: "3",
                            y: "0.863281",
                            width: "40",
                            height: "40",
                            rx: "20",
                            fill: "url(#paint0_linear_1_4905)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.0736 7.30078H18.5513C17.4523 7.40753 16.5515 7.91698 15.6382 8.43349L15.6382 8.4335C15.3095 8.61938 14.9792 8.80617 14.6375 8.97544C13.1797 9.69771 11.6905 10.3538 10.1701 10.9436C9.31299 11.2764 8.4347 11.5409 7.5352 11.7372C7.4488 11.7559 7.36935 11.7893 7.29688 11.8372V11.8727C7.5102 11.9479 7.76245 11.9888 8.05363 11.9953C8.84267 12.0125 9.51349 12.0095 10.0661 11.9865C10.1506 11.9828 10.2321 11.9633 10.3106 11.928C12.4837 10.9519 14.6612 9.98527 16.8432 9.02797C16.8476 9.02613 16.852 9.02536 16.8565 9.02567C16.8777 9.02843 16.879 9.03427 16.8603 9.04318C14.6862 10.108 12.5139 11.176 10.3434 12.2473C10.2138 12.3114 9.41474 12.7999 9.89472 12.9132C10.6648 13.0953 11.6052 13.0639 12.3886 12.9939C12.4952 12.9843 12.6 12.9582 12.7029 12.9155C14.1157 12.3278 15.0315 11.9343 15.4503 11.7349C15.5082 11.7069 15.5663 11.6793 15.6245 11.6519C16.9222 11.0378 16.9367 11.0651 15.6682 11.734C14.7886 12.1972 13.894 12.6323 12.9844 13.039C12.7769 13.1321 11.6328 13.7584 12.3364 13.9538C12.4725 13.9916 12.6016 14.0121 12.7238 14.0155C13.3976 14.0333 14.0708 13.9567 14.7434 13.7856C14.8605 13.7558 14.9747 13.7083 15.0861 13.6432C15.7916 13.2327 16.4885 12.8092 17.1769 12.3727C17.1826 12.3694 17.2268 12.3621 17.1921 12.3879C16.5905 12.8389 15.9774 13.2745 15.3529 13.6948C15.2118 13.7897 15.1129 13.8702 15.0562 13.9363C14.891 14.1289 14.5539 14.61 15.0282 14.733C15.5751 14.8745 16.5412 14.457 17.0397 14.2275C17.4891 14.0207 17.9114 13.6074 18.2623 13.264L18.2623 13.264L18.2623 13.264L18.2817 13.245C18.3135 13.2141 18.3187 13.2542 18.3011 13.2736C18.0812 13.5218 17.8525 13.7621 17.6151 13.9943C17.442 14.1642 17.3197 14.3066 17.2481 14.4215C16.2811 15.9736 18.2741 15.2192 18.7317 14.9459C19.0251 14.7708 19.3157 14.3372 19.4771 14.0773C19.4847 14.065 19.4923 14.055 19.4999 14.0473C19.5306 14.016 19.5374 14.0203 19.5203 14.0602C19.395 14.3536 19.2423 14.6318 19.0622 14.8948C18.8756 15.1671 18.9696 15.539 19.3333 15.6045C19.9746 15.7197 20.5823 15.1432 20.8306 14.6275C20.8349 14.6186 20.8427 14.6117 20.8525 14.6082C20.917 14.5857 20.7513 14.9203 20.694 15.036L20.694 15.036L20.694 15.036C20.6842 15.0557 20.6777 15.069 20.6759 15.0731C20.6145 15.2129 20.5891 15.3212 20.5999 15.398C20.6298 15.6155 20.8211 15.675 21.0262 15.6307C21.5992 15.5072 22.0821 15.0501 22.375 14.569C22.3793 14.5618 22.3816 14.5535 22.3816 14.545C22.3658 13.4218 22.3524 12.6862 22.3413 12.3381C22.3296 11.975 22.3313 11.6482 22.3465 11.3579C22.0265 11.3502 21.7496 11.3301 21.5157 11.2976C21.0295 11.2303 20.8074 10.6556 20.7551 10.2381C20.7421 10.1328 20.7309 10.0254 20.7197 9.91727C20.6412 9.1606 20.5585 8.36393 19.7843 7.94825C18.9876 7.52014 17.6982 7.77544 16.9177 8.14733C16.6867 8.25724 16.4617 8.36722 16.2377 8.47668C15.6119 8.78252 14.9945 9.08425 14.2795 9.36898C14.2774 9.3698 14.2738 9.37189 14.2694 9.37443C14.2515 9.3848 14.2205 9.40273 14.2216 9.37313C14.2217 9.36881 14.2231 9.3646 14.2257 9.36094C14.2282 9.35728 14.2317 9.35432 14.2358 9.35239C15.1708 8.93273 16.0943 8.49064 17.0065 8.02613C17.1644 7.94594 17.3811 7.86514 17.6564 7.78373C18.1853 7.62751 18.7113 7.58097 19.2407 7.65332C20.2115 7.7865 20.6664 8.52659 20.7936 9.39571C20.8053 9.47557 20.8144 9.57357 20.8245 9.68219C20.8751 10.2286 20.9506 11.044 21.5138 11.1708C21.7195 11.2172 21.9931 11.24 22.3346 11.239L22.319 10.9648C22.3183 10.9535 22.3134 10.9428 22.3051 10.9348C22.2969 10.9268 22.2859 10.9221 22.2743 10.9215C22.0977 10.9123 21.9254 10.8988 21.7573 10.881C21.118 10.8134 21.057 9.96774 21.0224 9.48751L21.0186 9.43534C20.9317 8.26069 20.3701 7.38696 19.0736 7.30078ZM23.952 11.3634C23.8584 11.3678 23.7589 11.3724 23.653 11.38C23.6381 12.3764 23.6176 13.3716 23.5913 14.3658C23.5897 14.4355 23.6046 14.4991 23.6359 14.5565C23.8796 14.9977 24.2298 15.3257 24.6866 15.5404C24.9543 15.6667 25.3977 15.7916 25.411 15.3441C25.4132 15.2722 25.3913 15.19 25.345 15.0976C25.309 15.0257 25.2745 14.953 25.2415 14.8796C25.12 14.6105 25.1422 14.5988 25.308 14.8446C25.32 14.8627 25.3322 14.8808 25.3446 14.8989C25.5682 15.2289 26.004 15.6077 26.4317 15.6307C26.8196 15.6515 27.0755 15.5183 27.0323 15.0999C27.0253 15.0332 26.9961 14.9624 26.9445 14.8874C26.7672 14.6318 26.6174 14.3613 26.4949 14.0759L26.4943 14.0738L26.4941 14.0718L26.4944 14.0696L26.495 14.0679C26.4956 14.0667 26.4965 14.0657 26.4975 14.0649C26.4986 14.0641 26.4998 14.0636 26.5011 14.0635L26.5672 14.1485L26.5673 14.1486L26.5674 14.1488L26.5674 14.1488L26.5677 14.1492C26.6999 14.3195 26.9863 14.6884 27.0266 14.7353C27.3186 15.0754 27.8997 15.2694 28.3327 15.357C28.7319 15.4376 29.1806 15.3736 28.9683 14.8455C28.8421 14.5317 28.6996 14.2814 28.4347 14.0395C28.3382 13.951 28.2445 13.8599 28.1537 13.7662C27.6951 13.2931 27.7171 13.2711 28.2197 13.7003C28.3102 13.7774 28.4013 13.8539 28.4931 13.9298C28.9793 14.3317 30.2502 14.833 30.8636 14.7685C31.6346 14.6883 31.016 13.9418 30.7302 13.751C30.1035 13.3332 29.4873 12.9014 28.8815 12.4556C28.8549 12.436 28.8321 12.4183 28.8131 12.4026C28.6852 12.2979 28.6914 12.2899 28.8316 12.3787C29.5276 12.8189 30.2219 13.2412 30.9144 13.6455C31.0305 13.7134 31.1484 13.7628 31.268 13.7939C31.9693 13.9759 32.7478 14.0644 33.4742 14.0114C33.7054 13.9943 34.1014 13.8662 33.7975 13.5685C33.6041 13.379 33.3827 13.2274 33.1333 13.1137C31.7854 12.4989 30.4668 11.8295 29.1777 11.1054C29.1562 11.0931 29.1556 11.0919 29.1758 11.1017C30.5406 11.7493 31.9234 12.3584 33.3242 12.9289C33.4299 12.9719 33.5377 12.9983 33.6475 13.0082C34.366 13.0708 35.0843 13.0631 35.8024 12.9851C35.9493 12.9691 36.092 12.936 36.2306 12.8856C36.3123 12.8561 36.3254 12.8069 36.27 12.7381C36.1149 12.5449 35.9246 12.3923 35.6989 12.2805C33.5565 11.2166 31.4098 10.1608 29.2589 9.11322C29.2543 9.11085 29.2508 9.10674 29.2489 9.1017C29.2432 9.08358 29.2551 9.08097 29.2845 9.09387C31.4317 10.0321 33.5736 10.9814 35.7103 11.9418C35.7891 11.9771 35.8711 11.9968 35.9562 12.0008C36.7203 12.0376 37.4841 12.0329 38.2478 11.9865C38.3953 11.9776 38.5416 11.9545 38.6865 11.9174C38.6968 11.9146 38.7059 11.9086 38.7122 11.9003C38.7186 11.8921 38.7219 11.882 38.7216 11.8717C38.7193 11.7834 38.1676 11.6695 37.9373 11.622C37.889 11.612 37.8548 11.605 37.8429 11.6017C36.9206 11.3479 35.9675 11.0175 34.9835 10.6105C33.3147 9.92014 31.7233 9.21553 30.2369 8.37728L30.1894 8.3505C29.2617 7.82668 28.4334 7.35904 27.32 7.31599C26.1103 7.26898 25.3579 7.74594 25.0849 8.91783C25.0582 9.03241 25.0418 9.19421 25.0233 9.37641C24.962 9.98194 24.8778 10.8128 24.3172 10.8851C24.1165 10.9106 23.9148 10.9249 23.7119 10.928C23.6995 10.9281 23.6877 10.933 23.679 10.9415C23.6703 10.95 23.6654 10.9616 23.6654 10.9736L23.6639 11.239C23.9436 11.2635 24.5864 11.2575 24.7991 11.004C24.9732 10.7963 25.0822 10.5565 25.1262 10.2847C25.1525 10.1221 25.1712 9.96165 25.1897 9.8035L25.1897 9.80346L25.1897 9.80343L25.1898 9.80339L25.1898 9.80335C25.2475 9.31007 25.3026 8.83918 25.5743 8.39709C25.8844 7.89295 26.4303 7.68143 27.0394 7.63903C27.8626 7.58143 28.5885 7.82244 29.3168 8.19341C30.1191 8.60232 30.9333 8.98772 31.7594 9.34963C31.7987 9.36683 31.7968 9.37636 31.7537 9.3782C31.7442 9.37881 31.7347 9.37728 31.7252 9.37359C31.0228 9.10275 30.3289 8.7621 29.6401 8.42402L29.6401 8.42401C29.4476 8.32952 29.2555 8.23523 29.0638 8.14272C28.4684 7.85577 27.8161 7.72428 27.1068 7.74825C25.5838 7.79986 25.3327 8.98235 25.2781 10.204C25.2737 10.3063 25.243 10.4341 25.186 10.5874C24.9148 11.3186 24.5549 11.3354 23.952 11.3634ZM23.9444 8.72196C23.9444 9.22639 23.5231 9.63532 23.0035 9.63532C22.4838 9.63532 22.0625 9.22639 22.0625 8.72196C22.0625 8.21752 22.4838 7.80859 23.0035 7.80859C23.5231 7.80859 23.9444 8.21752 23.9444 8.72196ZM23.4354 19.2164C23.9105 19.0149 24.3602 18.7703 24.7846 18.4828C24.8251 18.4553 24.8743 18.4248 24.9283 18.3913L24.9284 18.3913C25.222 18.2092 25.6559 17.9402 25.5713 17.6136C25.5245 17.4321 25.4047 17.3439 25.2119 17.3491C24.7837 17.3602 24.2111 16.9814 23.9239 16.7012C23.8521 16.6308 23.8443 16.5689 23.9007 16.5155C23.9051 16.5112 23.9087 16.5062 23.9112 16.5006C23.9136 16.495 23.9149 16.4889 23.9149 16.4829C23.915 16.4768 23.9138 16.4707 23.9114 16.4651C23.909 16.4595 23.9055 16.4544 23.9011 16.45C23.8622 16.4116 23.8575 16.3616 23.8869 16.2998C24.017 16.0255 24.2377 15.8758 24.5492 15.851C25.1037 15.8072 25.9763 15.9758 26.1329 16.5869C26.1354 16.5965 26.1411 16.6052 26.1491 16.6118C26.5773 16.9473 26.9367 17.5408 26.8095 18.0874C26.5745 19.0961 25.2513 19.6298 24.364 19.9284C24.3582 19.9304 24.352 19.9313 24.3458 19.931C24.3396 19.9307 24.3335 19.9292 24.3279 19.9265L22.5918 19.121C22.5839 19.1173 22.5772 19.1114 22.5725 19.1042C22.5679 19.097 22.5653 19.0886 22.5652 19.08L22.4123 9.7846C22.4122 9.77796 22.4106 9.77142 22.4077 9.76543C22.4047 9.75945 22.4004 9.75416 22.395 9.74995C22.3897 9.74574 22.3835 9.7427 22.3768 9.74104C22.3701 9.73938 22.3631 9.73915 22.3563 9.74036C22.1819 9.77078 22.0944 9.69121 22.0938 9.50165C22.0938 9.46325 22.1096 9.42731 22.1412 9.39382C22.1455 9.3892 22.1508 9.38549 22.1566 9.38293C22.1625 9.38036 22.1688 9.379 22.1753 9.37891C22.1817 9.37882 22.1882 9.38002 22.1941 9.38243C22.2001 9.38483 22.2055 9.3884 22.2101 9.3929C22.3506 9.53238 22.4834 9.62193 22.6084 9.66156C23.0654 9.80595 23.4566 9.71671 23.782 9.39382C23.7906 9.38522 23.8023 9.38025 23.8147 9.37999C23.827 9.37973 23.839 9.3842 23.848 9.39244C23.8923 9.43238 23.9086 9.48829 23.8969 9.56018C23.8709 9.71901 23.7862 9.77769 23.6429 9.73622C23.6359 9.73416 23.6285 9.73372 23.6213 9.73491C23.6141 9.7361 23.6073 9.7389 23.6014 9.74309C23.5954 9.74728 23.5906 9.75274 23.5872 9.75906C23.5837 9.76538 23.5818 9.77239 23.5816 9.77953C23.5332 11.8247 23.484 13.8507 23.434 15.8574C23.4068 16.9628 23.3851 18.0682 23.3689 19.1735C23.3688 19.1812 23.3707 19.1889 23.3744 19.1957C23.3781 19.2025 23.3835 19.2083 23.3901 19.2126C23.3967 19.2168 23.4044 19.2194 23.4123 19.2201C23.4202 19.2207 23.4281 19.2195 23.4354 19.2164ZM24.835 16.2264C24.8351 16.2149 24.8306 16.2036 24.8218 16.1929C24.8131 16.1823 24.8002 16.1726 24.784 16.1644C24.7677 16.1562 24.7484 16.1497 24.7271 16.1451C24.7058 16.1406 24.683 16.1382 24.6599 16.1381C24.6133 16.1377 24.5686 16.1466 24.5355 16.1627C24.5025 16.1788 24.4838 16.2009 24.4837 16.224C24.4836 16.2354 24.488 16.2468 24.4968 16.2574C24.5055 16.268 24.5184 16.2777 24.5347 16.2859C24.5509 16.2941 24.5702 16.3006 24.5915 16.3052C24.6128 16.3097 24.6356 16.3121 24.6587 16.3123C24.7053 16.3126 24.75 16.3037 24.7831 16.2876C24.8161 16.2715 24.8348 16.2495 24.835 16.2264ZM22.5395 27.688C22.7974 27.91 23.0477 28.1255 23.2629 28.3449C23.4832 28.5698 23.616 28.7142 23.6613 28.7781C24.089 29.3808 23.9048 29.8444 23.4595 30.3583C22.7303 31.1997 21.8197 32.4689 22.5352 33.6071C22.5412 33.6166 22.5477 33.6232 22.5546 33.6269C22.5822 33.6423 22.5917 33.6352 22.5831 33.6057C22.5701 33.5611 22.5561 33.516 22.542 33.4706L22.5419 33.4705C22.478 33.2647 22.4119 33.0515 22.4212 32.8458C22.4667 31.8631 23.2106 31.1761 23.8923 30.5466L23.8977 30.5417C24.3421 30.1311 24.7114 29.4154 24.4147 28.8343C24.2678 28.5464 24.0542 28.2661 23.7738 27.9933C23.6245 27.8483 23.4709 27.704 23.3163 27.5588L23.3158 27.5583L23.3156 27.5581C22.8037 27.0774 22.2819 26.5872 21.8762 26.0324C21.4185 25.4066 21.8681 24.8541 22.3733 24.4758C22.8926 24.0867 23.4595 23.7381 24.0261 23.3896C24.3085 23.216 24.5908 23.0423 24.8671 22.8638C25.4539 22.4845 26.0217 21.8458 25.65 21.1149C25.5538 20.9254 25.4164 20.7662 25.2379 20.6375C24.5536 20.1439 23.7116 19.77 22.9035 19.411L22.9035 19.411L22.9035 19.411C22.721 19.3299 22.5402 19.2496 22.3633 19.1689C21.7793 18.902 21.3535 18.6384 20.8303 18.2924L20.8066 18.2767C20.6006 18.141 20.3765 17.9934 20.3285 17.7583C20.2899 17.5678 20.3812 17.4277 20.6024 17.338C20.6123 17.3341 20.6231 17.3334 20.6333 17.3361C20.9841 17.4292 21.8952 16.9131 22.0371 16.5887C22.0414 16.579 22.0422 16.5682 22.0392 16.558C22.0363 16.5479 22.0299 16.539 22.021 16.5329L22.0001 16.5186C21.9942 16.5146 21.9893 16.5092 21.9858 16.5031C21.9823 16.4969 21.9804 16.49 21.9801 16.483C21.9797 16.476 21.9811 16.469 21.984 16.4625C21.9869 16.4561 21.9913 16.4504 21.9968 16.4458L22.0248 16.4228C22.0318 16.417 22.037 16.4094 22.0396 16.4009C22.0422 16.3924 22.0422 16.3833 22.0395 16.3748C21.7775 15.5076 20.282 15.8191 19.877 16.3426C19.8384 16.3924 19.82 16.4381 19.802 16.483C19.7768 16.5457 19.7523 16.6067 19.6743 16.6744C19.3616 16.9457 19.1643 17.2791 19.0823 17.6748C18.9133 18.4924 19.8647 19.2108 20.5056 19.5251C20.6183 19.5801 20.9115 19.6953 21.3853 19.8707C22.0094 20.1014 22.6347 20.3295 23.2611 20.555C23.7097 20.7163 25.3281 21.4896 24.4038 22.1163C24.0499 22.356 23.2622 22.9088 22.0405 23.7748C21.6914 24.0222 21.384 24.3295 21.1185 24.697C20.7273 25.2389 20.8094 25.7191 21.1707 26.2716C21.5263 26.8156 22.0467 27.2636 22.5395 27.688ZM21.4001 16.1957C21.4087 16.2063 21.413 16.2176 21.4128 16.2289H21.4128C21.4126 16.2403 21.4079 16.2514 21.3989 16.2617C21.39 16.272 21.3769 16.2813 21.3606 16.289C21.3442 16.2967 21.3248 16.3028 21.3035 16.3067C21.2823 16.3107 21.2595 16.3126 21.2366 16.3122C21.1902 16.3114 21.146 16.3015 21.1135 16.2848C21.0811 16.2681 21.0631 16.2459 21.0635 16.223C21.0637 16.2117 21.0684 16.2006 21.0773 16.1903C21.0863 16.18 21.0993 16.1707 21.1157 16.163C21.1321 16.1552 21.1514 16.1492 21.1727 16.1453C21.194 16.1413 21.2168 16.1394 21.2397 16.1398C21.2626 16.1402 21.2853 16.1428 21.3064 16.1475C21.3276 16.1522 21.3467 16.1589 21.3628 16.1672C21.3788 16.1754 21.3915 16.1851 21.4001 16.1957ZM21.7927 23.3472L21.7925 23.3472C21.1373 22.9721 20.2923 22.4884 20.1631 21.7698C20.0231 20.9905 20.9151 20.3854 21.566 20.1057C21.5773 20.1007 21.5901 20.1002 21.6016 20.1043L23.2984 20.7135C23.3077 20.7169 23.3156 20.723 23.3212 20.7309C23.3267 20.7389 23.3295 20.7483 23.3292 20.7578L23.2813 22.6997C23.2811 22.7069 23.2793 22.7139 23.2758 22.7202C23.2723 22.7265 23.2674 22.732 23.2613 22.7361L22.1371 23.5149C22.1295 23.5203 22.1205 23.5233 22.1111 23.5236C22.1017 23.5239 22.0924 23.5216 22.0844 23.5168C21.9942 23.4626 21.8958 23.4063 21.7927 23.3472ZM21.4544 22.0735C21.8146 22.3398 22.181 22.5982 22.5535 22.8486C22.6044 22.8827 22.6293 22.8698 22.628 22.8080L22.5919 20.6407C22.5918 20.6333 22.5897 20.626 22.5861 20.6195C22.5824 20.6129 22.5771 20.6073 22.5707 20.6032C22.5644 20.599 22.5571 20.5964 22.5494 20.5956C22.5418 20.5947 22.5341 20.5957 22.5269 20.5983C22.1238 20.7509 20.664 21.49 21.4544 22.0735ZM23.4793 27.5085C23.2219 27.2836 22.8996 26.9619 22.7045 26.7573C22.6963 26.7491 22.6917 26.7382 22.6916 26.7269L22.6556 24.4527C22.6554 24.445 22.6573 24.4373 22.6609 24.4305C22.6646 24.4236 22.6699 24.4178 22.6765 24.4135L23.748 23.7191C23.7562 23.7138 23.7659 23.7111 23.7757 23.7113C23.7856 23.7116 23.7951 23.7148 23.803 23.7205C24.4834 24.2168 25.4096 25.1016 24.8992 26.0099C24.5751 26.5868 24.1219 27.0871 23.5396 27.5108C23.5307 27.5173 23.5199 27.5206 23.5089 27.5202C23.4979 27.5198 23.4874 27.5156 23.4793 27.5085ZM23.5903 24.5269C23.5033 24.4529 23.4126 24.383 23.3183 24.3172C23.2696 24.2831 23.2444 24.2953 23.2428 24.3536L23.1859 26.89C23.1843 26.9527 23.206 26.9616 23.2509 26.9168C23.4218 26.746 23.5881 26.5712 23.7499 26.3923C23.9322 26.1905 24.0642 26.0071 24.1458 25.8421C24.4121 25.3034 23.9773 24.8546 23.5903 24.5269ZM22.4608 30.9952C22.5107 31.0416 22.5602 31.0877 22.609 31.1338C22.6139 31.1384 22.6197 31.142 22.6262 31.1442C22.6326 31.1464 22.6394 31.1473 22.6462 31.1467C22.6531 31.1462 22.6597 31.1442 22.6656 31.1409C22.6715 31.1376 22.6767 31.1332 22.6807 31.1278L23.0899 30.5812C23.0958 30.5734 23.0989 30.5642 23.0989 30.555L23.1459 28.4448C23.1461 28.4383 23.1449 28.4319 23.1423 28.4259C23.1398 28.42 23.136 28.4146 23.1312 28.4103L22.4286 27.7665C22.4197 27.7583 22.4079 27.7537 22.3955 27.7539C22.3832 27.7541 22.3714 27.7589 22.3626 27.7674L22.3463 27.7833C21.9152 28.2035 21.2952 28.8078 21.3931 29.4485C21.4915 30.0925 21.9887 30.5555 22.4608 30.9952ZM22.1684 28.8803C22.3045 28.6963 22.4615 28.5192 22.6394 28.349C22.6922 28.2986 22.7191 28.3094 22.7201 28.3812L22.7552 30.6407C22.7562 30.7141 22.7334 30.7218 22.6868 30.6637C22.589 30.5411 22.4841 30.4115 22.3721 30.2748C22.1433 29.9964 21.932 29.6541 22.0151 29.2918C22.0603 29.0946 22.1114 28.9574 22.1684 28.8803ZM23.0125 34.0863C23.0309 33.3287 23.0502 32.5756 23.0704 31.8269C23.0733 31.7243 23.1026 31.7166 23.1583 31.8038C23.4086 32.1952 23.4276 32.5966 23.2152 33.008C23.2121 33.0141 23.2105 33.0201 23.2105 33.0259C23.2105 33.0309 23.2108 33.0355 23.2114 33.0398C23.2122 33.043 23.2137 33.0459 23.216 33.0484C23.2182 33.0509 23.221 33.0527 23.2242 33.0538C23.2274 33.0549 23.2308 33.0552 23.2341 33.0547C23.2375 33.0542 23.2406 33.0529 23.2433 33.0508C23.5414 32.813 23.5599 32.2232 23.4555 31.8988C23.408 31.751 23.342 31.6098 23.2575 31.4752C23.2536 31.4691 23.2484 31.464 23.2422 31.4601C23.2359 31.4563 23.2289 31.4539 23.2216 31.4532C23.2143 31.4524 23.2069 31.4533 23.2 31.4558C23.1932 31.4582 23.187 31.4622 23.182 31.4674C23.044 31.6112 22.9269 31.7702 22.8307 31.9444C22.7981 32.0034 22.7823 32.0691 22.7832 32.1416C22.7937 32.7539 22.803 33.3662 22.8112 33.9785C22.8125 34.0694 22.8185 34.1424 22.8293 34.1974C22.8407 34.2554 22.8557 34.3124 22.8744 34.3683C22.9006 34.4454 22.925 34.4448 22.9475 34.3665C22.9586 34.3266 22.9706 34.2869 22.9836 34.2476C23.0019 34.1926 23.0116 34.1388 23.0125 34.0863Z",
                            fill: "url(#paint1_linear_1_4905)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M10.4578 29.8555V26.8126H11.1092V28.0512H12.2621V26.8126H12.9135V29.8555H12.2621V28.5998H11.1092V29.8555H10.4578ZM13.4879 29.8555V26.8126H14.1393V29.8555H13.4879ZM14.7142 29.8555V26.8126H15.9313C16.6599 26.8126 17.1013 27.1898 17.1013 27.8069C17.1013 28.424 16.6599 28.8055 15.9313 28.8055H15.3656V29.8555H14.7142ZM15.3656 28.2569H15.8928C16.2356 28.2569 16.4328 28.1026 16.4328 27.8069C16.4328 27.5112 16.2356 27.3612 15.8928 27.3612H15.3656V28.2569ZM17.0022 29.8555L18.0993 26.8126H18.8708L19.9679 29.8555H19.2908L19.0679 29.2083H17.8979L17.675 29.8555H17.0022ZM18.0822 28.6726H18.8879L18.485 27.4983L18.0822 28.6726ZM20.1328 29.8555L21.2299 26.8126H22.0013L23.0985 29.8555H22.4213L22.1985 29.2083H21.0285L20.8056 29.8555H20.1328ZM21.2128 28.6726H22.0185L21.6156 27.4983L21.2128 28.6726ZM11.7478 33.924C10.9163 33.924 10.3206 33.3326 10.3206 32.3383C10.3206 31.3698 10.8821 30.744 11.7606 30.744C12.5578 30.744 12.9863 31.1512 13.1149 31.8755L12.4378 31.9012C12.3692 31.5198 12.1378 31.2926 11.7606 31.2926C11.2763 31.2926 10.9935 31.704 10.9935 32.3383C10.9935 32.9812 11.2892 33.3755 11.7563 33.3755C12.1635 33.3755 12.3863 33.1312 12.4463 32.7198L13.1278 32.7455C13.0035 33.4869 12.5406 33.924 11.7478 33.924ZM14.9508 33.924C14.0251 33.924 13.4679 33.3198 13.4679 32.3383C13.4679 31.3569 14.0251 30.744 14.9508 30.744C15.8765 30.744 16.4337 31.3569 16.4337 32.3383C16.4337 33.3198 15.8765 33.924 14.9508 33.924ZM14.9508 33.3755C15.4565 33.3755 15.7608 32.9983 15.7608 32.3383C15.7608 31.6783 15.4565 31.2926 14.9508 31.2926C14.4408 31.2926 14.1408 31.6783 14.1408 32.3383C14.1408 32.9983 14.4408 33.3755 14.9508 33.3755ZM16.8654 33.8555V30.8126H17.7354L18.5111 33.0283L19.2826 30.8126H20.1526V33.8555H19.5011V31.884L18.7854 33.8469H18.2283L17.5168 31.884V33.8555H16.8654ZM20.7284 33.8555V30.8126H21.9456C22.6741 30.8126 23.1156 31.1898 23.1156 31.8069C23.1156 32.424 22.6741 32.8055 21.9456 32.8055H21.3798V33.8555H20.7284ZM21.3798 32.2569H21.907C22.2498 32.2569 22.447 32.1026 22.447 31.8069C22.447 31.5112 22.2498 31.3612 21.907 31.3612H21.3798V32.2569ZM23.6079 33.8555V30.8126H24.2593V33.3069H25.6607V33.8555H23.6079ZM25.9935 33.8555V30.8126H26.6449V33.8555H25.9935ZM27.0008 33.8555L28.0979 30.8126H28.8694L29.9665 33.8555H29.2894L29.0665 33.2083H27.8965L27.6736 33.8555H27.0008ZM28.0808 32.6726H28.8865L28.4836 31.4983L28.0808 32.6726ZM30.2541 33.8555V30.8126H30.9741L32.1827 32.9126V30.8126H32.8341V33.8555H32.1055L30.9055 31.8283V33.8555H30.2541ZM33.9856 33.8555V31.3612H33.077V30.8126H35.5541V31.3612H34.6413V33.8555H33.9856Z",
                            fill: "#101828"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                            id: "filter0_ddd_1_4905",
                            x: "0.857143",
                            y: "0.148996",
                            width: "44.2857",
                            height: "44.2857",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "erode",
                                    in: "SourceAlpha",
                                    result: "effect1_dropShadow_1_4905"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "0.714286"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "0.357143"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1_4905"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "erode",
                                    in: "SourceAlpha",
                                    result: "effect2_dropShadow_1_4905"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "1.42857"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "1.42857"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect1_dropShadow_1_4905",
                                    result: "effect2_dropShadow_1_4905"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "dilate",
                                    in: "SourceAlpha",
                                    result: "effect3_dropShadow_1_4905"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect2_dropShadow_1_4905",
                                    result: "effect3_dropShadow_1_4905"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect3_dropShadow_1_4905",
                                    result: "shape"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint0_linear_1_4905",
                            x1: "9.88803",
                            y1: "6.55415",
                            x2: "36.0447",
                            y2: "35.5773",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    stopColor: "#E5E7EB"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F9FAFB"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint1_linear_1_4905",
                            x1: "30.5498",
                            y1: "10.0698",
                            x2: "20.9753",
                            y2: "31.2119",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.473541",
                                    stopColor: "#364153",
                                    stopOpacity: "0.7"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.811446",
                                    stopColor: "#364153",
                                    stopOpacity: "0"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    },
    hipaaDark: (param)=>{
        let { className } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            width: "46",
            height: "45",
            viewBox: "0 0 46 45",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: className,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    filter: "url(#filter0_ddd_1_2028)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                            x: "3",
                            y: "0.863281",
                            width: "40",
                            height: "40",
                            rx: "20",
                            fill: "url(#paint0_linear_1_2028)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.0736 7.30078H18.5513C17.4523 7.40753 16.5515 7.91698 15.6382 8.43349L15.6382 8.4335C15.3095 8.61938 14.9792 8.80617 14.6375 8.97544C13.1797 9.69771 11.6905 10.3538 10.1701 10.9436C9.31299 11.2764 8.4347 11.5409 7.5352 11.7372C7.4488 11.7559 7.36935 11.7893 7.29688 11.8372V11.8727C7.5102 11.9479 7.76245 11.9888 8.05363 11.9953C8.84267 12.0125 9.51349 12.0095 10.0661 11.9865C10.1506 11.9828 10.2321 11.9633 10.3106 11.928C12.4837 10.9519 14.6612 9.98527 16.8432 9.02797C16.8476 9.02613 16.852 9.02536 16.8565 9.02567C16.8777 9.02843 16.879 9.03427 16.8603 9.04318C14.6862 10.108 12.5139 11.176 10.3434 12.2473C10.2138 12.3114 9.41474 12.7999 9.89472 12.9132C10.6648 13.0953 11.6052 13.0639 12.3886 12.9939C12.4952 12.9843 12.6 12.9582 12.7029 12.9155C14.1157 12.3278 15.0315 11.9343 15.4503 11.7349C15.5082 11.7069 15.5663 11.6793 15.6245 11.6519C16.9222 11.0378 16.9367 11.0651 15.6682 11.734C14.7886 12.1972 13.894 12.6323 12.9844 13.039C12.7769 13.1321 11.6328 13.7584 12.3364 13.9538C12.4725 13.9916 12.6016 14.0121 12.7238 14.0155C13.3976 14.0333 14.0708 13.9567 14.7434 13.7856C14.8605 13.7558 14.9747 13.7083 15.0861 13.6432C15.7916 13.2327 16.4885 12.8092 17.1769 12.3727C17.1826 12.3694 17.2268 12.3621 17.1921 12.3879C16.5905 12.8389 15.9774 13.2745 15.3529 13.6948C15.2118 13.7897 15.1129 13.8702 15.0562 13.9363C14.891 14.1289 14.5539 14.61 15.0282 14.733C15.5751 14.8745 16.5412 14.457 17.0397 14.2275C17.4891 14.0207 17.9114 13.6074 18.2623 13.264L18.2623 13.264L18.2623 13.264L18.2817 13.245C18.3135 13.2141 18.3187 13.2542 18.3011 13.2736C18.0812 13.5218 17.8525 13.7621 17.6151 13.9943C17.442 14.1642 17.3197 14.3066 17.2481 14.4215C16.2811 15.9736 18.2741 15.2192 18.7317 14.9459C19.0251 14.7708 19.3157 14.3372 19.4771 14.0773C19.4847 14.065 19.4923 14.055 19.4999 14.0473C19.5306 14.016 19.5374 14.0203 19.5203 14.0602C19.395 14.3536 19.2423 14.6318 19.0622 14.8948C18.8756 15.1671 18.9696 15.539 19.3333 15.6045C19.9746 15.7197 20.5823 15.1432 20.8306 14.6275C20.8349 14.6186 20.8427 14.6117 20.8525 14.6082C20.917 14.5857 20.7513 14.9203 20.694 15.036L20.694 15.036L20.694 15.036C20.6842 15.0557 20.6777 15.069 20.6759 15.0731C20.6145 15.2129 20.5891 15.3212 20.5999 15.398C20.6298 15.6155 20.8211 15.675 21.0262 15.6307C21.5992 15.5072 22.0821 15.0501 22.375 14.569C22.3793 14.5618 22.3816 14.5535 22.3816 14.545C22.3658 13.4218 22.3524 12.6862 22.3413 12.3381C22.3296 11.975 22.3313 11.6482 22.3465 11.3579C22.0265 11.3502 21.7496 11.3301 21.5157 11.2976C21.0295 11.2303 20.8074 10.6556 20.7551 10.2381C20.7421 10.1328 20.7309 10.0254 20.7197 9.91727C20.6412 9.1606 20.5585 8.36393 19.7843 7.94825C18.9876 7.52014 17.6982 7.77544 16.9177 8.14733C16.6867 8.25724 16.4617 8.36722 16.2377 8.47668C15.6119 8.78252 14.9945 9.08425 14.2795 9.36898C14.2774 9.3698 14.2738 9.37189 14.2694 9.37443C14.2515 9.3848 14.2205 9.40273 14.2216 9.37313C14.2217 9.36881 14.2231 9.3646 14.2257 9.36094C14.2282 9.35728 14.2317 9.35432 14.2358 9.35239C15.1708 8.93273 16.0943 8.49064 17.0065 8.02613C17.1644 7.94594 17.3811 7.86514 17.6564 7.78373C18.1853 7.62751 18.7113 7.58097 19.2407 7.65332C20.2115 7.7865 20.6664 8.52659 20.7936 9.39571C20.8053 9.47557 20.8144 9.57357 20.8245 9.68219C20.8751 10.2286 20.9506 11.044 21.5138 11.1708C21.7195 11.2172 21.9931 11.24 22.3346 11.239L22.319 10.9648C22.3183 10.9535 22.3134 10.9428 22.3051 10.9348C22.2969 10.9268 22.2859 10.9221 22.2743 10.9215C22.0977 10.9123 21.9254 10.8988 21.7573 10.881C21.118 10.8134 21.057 9.96774 21.0224 9.48751L21.0186 9.43534C20.9317 8.26069 20.3701 7.38696 19.0736 7.30078ZM23.952 11.3634C23.8584 11.3678 23.7589 11.3724 23.653 11.38C23.6381 12.3764 23.6176 13.3716 23.5913 14.3658C23.5897 14.4355 23.6046 14.4991 23.6359 14.5565C23.8796 14.9977 24.2298 15.3257 24.6866 15.5404C24.9543 15.6667 25.3977 15.7916 25.411 15.3441C25.4132 15.2722 25.3913 15.19 25.345 15.0976C25.309 15.0257 25.2745 14.953 25.2415 14.8796C25.12 14.6105 25.1422 14.5988 25.308 14.8446C25.32 14.8627 25.3322 14.8808 25.3446 14.8989C25.5682 15.2289 26.004 15.6077 26.4317 15.6307C26.8196 15.6515 27.0755 15.5183 27.0323 15.0999C27.0253 15.0332 26.9961 14.9624 26.9445 14.8874C26.7672 14.6318 26.6174 14.3613 26.4949 14.0759L26.4943 14.0738L26.4941 14.0718L26.4944 14.0696L26.495 14.0679C26.4956 14.0667 26.4965 14.0657 26.4975 14.0649C26.4986 14.0641 26.4998 14.0636 26.5011 14.0635L26.5672 14.1485L26.5673 14.1486L26.5674 14.1488L26.5674 14.1488L26.5677 14.1492C26.6999 14.3195 26.9863 14.6884 27.0266 14.7353C27.3186 15.0754 27.8997 15.2694 28.3327 15.357C28.7319 15.4376 29.1806 15.3736 28.9683 14.8455C28.8421 14.5317 28.6996 14.2814 28.4347 14.0395C28.3382 13.951 28.2445 13.8599 28.1537 13.7662C27.6951 13.2931 27.7171 13.2711 28.2197 13.7003C28.3102 13.7774 28.4013 13.8539 28.4931 13.9298C28.9793 14.3317 30.2502 14.833 30.8636 14.7685C31.6346 14.6883 31.016 13.9418 30.7302 13.751C30.1035 13.3332 29.4873 12.9014 28.8815 12.4556C28.8549 12.436 28.8321 12.4183 28.8131 12.4026C28.6852 12.2979 28.6914 12.2899 28.8316 12.3787C29.5276 12.8189 30.2219 13.2412 30.9144 13.6455C31.0305 13.7134 31.1484 13.7628 31.268 13.7939C31.9693 13.9759 32.7478 14.0644 33.4742 14.0114C33.7054 13.9943 34.1014 13.8662 33.7975 13.5685C33.6041 13.379 33.3827 13.2274 33.1333 13.1137C31.7854 12.4989 30.4668 11.8295 29.1777 11.1054C29.1562 11.0931 29.1556 11.0919 29.1758 11.1017C30.5406 11.7493 31.9234 12.3584 33.3242 12.9289C33.4299 12.9719 33.5377 12.9983 33.6475 13.0082C34.366 13.0708 35.0843 13.0631 35.8024 12.9851C35.9493 12.9691 36.092 12.936 36.2306 12.8856C36.3123 12.8561 36.3254 12.8069 36.27 12.7381C36.1149 12.5449 35.9246 12.3923 35.6989 12.2805C33.5565 11.2166 31.4098 10.1608 29.2589 9.11322C29.2543 9.11085 29.2508 9.10674 29.2489 9.1017C29.2432 9.08358 29.2551 9.08097 29.2845 9.09387C31.4317 10.0321 33.5736 10.9814 35.7103 11.9418C35.7891 11.9771 35.8711 11.9968 35.9562 12.0008C36.7203 12.0376 37.4841 12.0329 38.2478 11.9865C38.3953 11.9776 38.5416 11.9545 38.6865 11.9174C38.6968 11.9146 38.7059 11.9086 38.7122 11.9003C38.7186 11.8921 38.7219 11.882 38.7216 11.8717C38.7193 11.7834 38.1676 11.6695 37.9373 11.622C37.889 11.612 37.8548 11.605 37.8429 11.6017C36.9206 11.3479 35.9675 11.0175 34.9835 10.6105C33.3147 9.92014 31.7233 9.21553 30.2369 8.37728L30.1894 8.3505C29.2617 7.82668 28.4334 7.35904 27.32 7.31599C26.1103 7.26898 25.3579 7.74594 25.0849 8.91783C25.0582 9.03241 25.0418 9.19421 25.0233 9.37641C24.962 9.98194 24.8778 10.8128 24.3172 10.8851C24.1165 10.9106 23.9148 10.9249 23.7119 10.928C23.6995 10.9281 23.6877 10.933 23.679 10.9415C23.6703 10.95 23.6654 10.9616 23.6654 10.9736L23.6639 11.239C23.9436 11.2635 24.5864 11.2575 24.7991 11.004C24.9732 10.7963 25.0822 10.5565 25.1262 10.2847C25.1525 10.1221 25.1712 9.96165 25.1897 9.8035L25.1897 9.80346L25.1897 9.80343L25.1898 9.80339L25.1898 9.80335C25.2475 9.31007 25.3026 8.83918 25.5743 8.39709C25.8844 7.89295 26.4303 7.68143 27.0394 7.63903C27.8626 7.58143 28.5885 7.82244 29.3168 8.19341C30.1191 8.60232 30.9333 8.98772 31.7594 9.34963C31.7987 9.36683 31.7968 9.37636 31.7537 9.3782C31.7442 9.37881 31.7347 9.37728 31.7252 9.37359C31.0228 9.10275 30.3289 8.7621 29.6401 8.42402L29.6401 8.42401C29.4476 8.32952 29.2555 8.23523 29.0638 8.14272C28.4684 7.85577 27.8161 7.72428 27.1068 7.74825C25.5838 7.79986 25.3327 8.98235 25.2781 10.204C25.2737 10.3063 25.243 10.4341 25.186 10.5874C24.9148 11.3186 24.5549 11.3354 23.952 11.3634ZM23.9444 8.72196C23.9444 9.22639 23.5231 9.63532 23.0035 9.63532C22.4838 9.63532 22.0625 9.22639 22.0625 8.72196C22.0625 8.21752 22.4838 7.80859 23.0035 7.80859C23.5231 7.80859 23.9444 8.21752 23.9444 8.72196ZM23.4354 19.2164C23.9105 19.0149 24.3602 18.7703 24.7846 18.4828C24.8251 18.4553 24.8743 18.4248 24.9283 18.3913L24.9284 18.3913C25.222 18.2092 25.6559 17.9402 25.5713 17.6136C25.5245 17.4321 25.4047 17.3439 25.2119 17.3491C24.7837 17.3602 24.2111 16.9814 23.9239 16.7012C23.8521 16.6308 23.8443 16.5689 23.9007 16.5155C23.9051 16.5112 23.9087 16.5062 23.9112 16.5006C23.9136 16.495 23.9149 16.4889 23.9149 16.4829C23.915 16.4768 23.9138 16.4707 23.9114 16.4651C23.909 16.4595 23.9055 16.4544 23.9011 16.45C23.8622 16.4116 23.8575 16.3616 23.8869 16.2998C24.017 16.0255 24.2377 15.8758 24.5492 15.851C25.1037 15.8072 25.9763 15.9758 26.1329 16.5869C26.1354 16.5965 26.1411 16.6052 26.1491 16.6118C26.5773 16.9473 26.9367 17.5408 26.8095 18.0874C26.5745 19.0961 25.2513 19.6298 24.364 19.9284C24.3582 19.9304 24.352 19.9313 24.3458 19.931C24.3396 19.9307 24.3335 19.9292 24.3279 19.9265L22.5918 19.121C22.5839 19.1173 22.5772 19.1114 22.5725 19.1042C22.5679 19.097 22.5653 19.0886 22.5652 19.08L22.4123 9.7846C22.4122 9.77796 22.4106 9.77142 22.4077 9.76543C22.4047 9.75945 22.4004 9.75416 22.395 9.74995C22.3897 9.74574 22.3835 9.7427 22.3768 9.74104C22.3701 9.73938 22.3631 9.73915 22.3563 9.74036C22.1819 9.77078 22.0944 9.69121 22.0938 9.50165C22.0938 9.46325 22.1096 9.42731 22.1412 9.39382C22.1455 9.3892 22.1508 9.38549 22.1566 9.38293C22.1625 9.38036 22.1688 9.379 22.1753 9.37891C22.1817 9.37882 22.1882 9.38002 22.1941 9.38243C22.2001 9.38483 22.2055 9.3884 22.2101 9.3929C22.3506 9.53238 22.4834 9.62193 22.6084 9.66156C23.0654 9.80595 23.4566 9.71671 23.782 9.39382C23.7906 9.38522 23.8023 9.38025 23.8147 9.37999C23.827 9.37973 23.839 9.3842 23.848 9.39244C23.8923 9.43238 23.9086 9.48829 23.8969 9.56018C23.8709 9.71901 23.7862 9.77769 23.6429 9.73622C23.6359 9.73416 23.6285 9.73372 23.6213 9.73491C23.6141 9.7361 23.6073 9.7389 23.6014 9.74309C23.5954 9.74728 23.5906 9.75274 23.5872 9.75906C23.5837 9.76538 23.5818 9.77239 23.5816 9.77953C23.5332 11.8247 23.484 13.8507 23.434 15.8574C23.4068 16.9628 23.3851 18.0682 23.3689 19.1735C23.3688 19.1812 23.3707 19.1889 23.3744 19.1957C23.3781 19.2025 23.3835 19.2083 23.3901 19.2126C23.3967 19.2168 23.4044 19.2194 23.4123 19.2201C23.4202 19.2207 23.4281 19.2195 23.4354 19.2164ZM24.835 16.2264C24.8351 16.2149 24.8306 16.2036 24.8218 16.1929C24.8131 16.1823 24.8002 16.1726 24.784 16.1644C24.7677 16.1562 24.7484 16.1497 24.7271 16.1451C24.7058 16.1406 24.683 16.1382 24.6599 16.1381C24.6133 16.1377 24.5686 16.1466 24.5355 16.1627C24.5025 16.1788 24.4838 16.2009 24.4837 16.224C24.4836 16.2354 24.488 16.2468 24.4968 16.2574C24.5055 16.268 24.5184 16.2777 24.5347 16.2859C24.5509 16.2941 24.5702 16.3006 24.5915 16.3052C24.6128 16.3097 24.6356 16.3121 24.6587 16.3123C24.7053 16.3126 24.75 16.3037 24.7831 16.2876C24.8161 16.2715 24.8348 16.2495 24.835 16.2264ZM22.5395 27.688C22.7974 27.91 23.0477 28.1255 23.2629 28.3449C23.4832 28.5698 23.616 28.7142 23.6613 28.7781C24.089 29.3808 23.9048 29.8444 23.4595 30.3583C22.7303 31.1997 21.8197 32.4689 22.5352 33.6071C22.5412 33.6166 22.5477 33.6232 22.5546 33.6269C22.5822 33.6423 22.5917 33.6352 22.5831 33.6057C22.5701 33.5611 22.5561 33.516 22.542 33.4706L22.5419 33.4705C22.478 33.2647 22.4119 33.0515 22.4212 32.8458C22.4667 31.8631 23.2106 31.1761 23.8923 30.5466L23.8977 30.5417C24.3421 30.1311 24.7114 29.4154 24.4147 28.8343C24.2678 28.5464 24.0542 28.2661 23.7738 27.9933C23.6245 27.8483 23.4709 27.704 23.3163 27.5588L23.3158 27.5583L23.3156 27.5581C22.8037 27.0774 22.2819 26.5872 21.8762 26.0324C21.4185 25.4066 21.8681 24.8541 22.3733 24.4758C22.8926 24.0867 23.4595 23.7381 24.0261 23.3896C24.3085 23.216 24.5908 23.0423 24.8671 22.8638C25.4539 22.4845 26.0217 21.8458 25.65 21.1149C25.5538 20.9254 25.4164 20.7662 25.2379 20.6375C24.5536 20.1439 23.7116 19.77 22.9035 19.411L22.9035 19.411L22.9035 19.411C22.721 19.3299 22.5402 19.2496 22.3633 19.1689C21.7793 18.902 21.3535 18.6384 20.8303 18.2924L20.8066 18.2767C20.6006 18.141 20.3765 17.9934 20.3285 17.7583C20.2899 17.5678 20.3812 17.4277 20.6024 17.338C20.6123 17.3341 20.6231 17.3334 20.6333 17.3361C20.9841 17.4292 21.8952 16.9131 22.0371 16.5887C22.0414 16.579 22.0422 16.5682 22.0392 16.558C22.0363 16.5479 22.0299 16.539 22.021 16.5329L22.0001 16.5186C21.9942 16.5146 21.9893 16.5092 21.9858 16.5031C21.9823 16.4969 21.9804 16.49 21.9801 16.483C21.9797 16.476 21.9811 16.469 21.984 16.4625C21.9869 16.4561 21.9913 16.4504 21.9968 16.4458L22.0248 16.4228C22.0318 16.417 22.037 16.4094 22.0396 16.4009C22.0422 16.3924 22.0422 16.3833 22.0395 16.3748C21.7775 15.5076 20.282 15.8191 19.877 16.3426C19.8384 16.3924 19.82 16.4381 19.802 16.483C19.7768 16.5457 19.7523 16.6067 19.6743 16.6744C19.3616 16.9457 19.1643 17.2791 19.0823 17.6748C18.9133 18.4924 19.8647 19.2108 20.5056 19.5251C20.6183 19.5801 20.9115 19.6953 21.3853 19.8707C22.0094 20.1014 22.6347 20.3295 23.2611 20.555C23.7097 20.7163 25.3281 21.4896 24.4038 22.1163C24.0499 22.356 23.2622 22.9088 22.0405 23.7748C21.6914 24.0222 21.384 24.3295 21.1185 24.697C20.7273 25.2389 20.8094 25.7191 21.1707 26.2716C21.5263 26.8156 22.0467 27.2636 22.5395 27.688ZM21.4001 16.1957C21.4087 16.2063 21.413 16.2176 21.4128 16.2289H21.4128C21.4126 16.2403 21.4079 16.2514 21.3989 16.2617C21.39 16.272 21.3769 16.2813 21.3606 16.289C21.3442 16.2967 21.3248 16.3028 21.3035 16.3067C21.2823 16.3107 21.2595 16.3126 21.2366 16.3122C21.1902 16.3114 21.146 16.3015 21.1135 16.2848C21.0811 16.2681 21.0631 16.2459 21.0635 16.223C21.0637 16.2117 21.0684 16.2006 21.0773 16.1903C21.0863 16.18 21.0993 16.1707 21.1157 16.163C21.1321 16.1552 21.1514 16.1492 21.1727 16.1453C21.194 16.1413 21.2168 16.1394 21.2397 16.1398C21.2626 16.1402 21.2853 16.1428 21.3064 16.1475C21.3276 16.1522 21.3467 16.1589 21.3628 16.1672C21.3788 16.1754 21.3915 16.1851 21.4001 16.1957ZM21.7927 23.3472L21.7925 23.3472C21.1373 22.9721 20.2923 22.4884 20.1631 21.7698C20.0231 20.9905 20.9151 20.3854 21.566 20.1057C21.5773 20.1007 21.5901 20.1002 21.6016 20.1043L23.2984 20.7135C23.3077 20.7169 23.3156 20.723 23.3212 20.7309C23.3267 20.7389 23.3295 20.7483 23.3292 20.7578L23.2813 22.6997C23.2811 22.7069 23.2793 22.7139 23.2758 22.7202C23.2723 22.7265 23.2674 22.732 23.2613 22.7361L22.1371 23.5149C22.1295 23.5203 22.1205 23.5233 22.1111 23.5236C22.1017 23.5239 22.0924 23.5216 22.0844 23.5168C21.9942 23.4626 21.8958 23.4063 21.7927 23.3472ZM21.4544 22.0735C21.8146 22.3398 22.181 22.5982 22.5535 22.8486C22.6044 22.8827 22.6293 22.8698 22.628 22.8080L22.5919 20.6407C22.5918 20.6333 22.5897 20.626 22.5861 20.6195C22.5824 20.6129 22.5771 20.6073 22.5707 20.6032C22.5644 20.599 22.5571 20.5964 22.5494 20.5956C22.5418 20.5947 22.5341 20.5957 22.5269 20.5983C22.1238 20.7509 20.664 21.49 21.4544 22.0735ZM23.4793 27.5085C23.2219 27.2836 22.8996 26.9619 22.7045 26.7573C22.6963 26.7491 22.6917 26.7382 22.6916 26.7269L22.6556 24.4527C22.6554 24.445 22.6573 24.4373 22.6609 24.4305C22.6646 24.4236 22.6699 24.4178 22.6765 24.4135L23.748 23.7191C23.7562 23.7138 23.7659 23.7111 23.7757 23.7113C23.7856 23.7116 23.7951 23.7148 23.803 23.7205C24.4834 24.2168 25.4096 25.1016 24.8992 26.0099C24.5751 26.5868 24.1219 27.0871 23.5396 27.5108C23.5307 27.5173 23.5199 27.5206 23.5089 27.5202C23.4979 27.5198 23.4874 27.5156 23.4793 27.5085ZM23.5903 24.5269C23.5033 24.4529 23.4126 24.383 23.3183 24.3172C23.2696 24.2831 23.2444 24.2953 23.2428 24.3536L23.1859 26.89C23.1843 26.9527 23.206 26.9616 23.2509 26.9168C23.4218 26.746 23.5881 26.5712 23.7499 26.3923C23.9322 26.1905 24.0642 26.0071 24.1458 25.8421C24.4121 25.3034 23.9773 24.8546 23.5903 24.5269ZM22.4608 30.9952C22.5107 31.0416 22.5602 31.0877 22.609 31.1338C22.6139 31.1384 22.6197 31.142 22.6262 31.1442C22.6326 31.1464 22.6394 31.1473 22.6462 31.1467C22.6531 31.1462 22.6597 31.1442 22.6656 31.1409C22.6715 31.1376 22.6767 31.1332 22.6807 31.1278L23.0899 30.5812C23.0958 30.5734 23.0989 30.5642 23.0989 30.555L23.1459 28.4448C23.1461 28.4383 23.1449 28.4319 23.1423 28.4259C23.1398 28.42 23.136 28.4146 23.1312 28.4103L22.4286 27.7665C22.4197 27.7583 22.4079 27.7537 22.3955 27.7539C22.3832 27.7541 22.3714 27.7589 22.3626 27.7674L22.3463 27.7833C21.9152 28.2035 21.2952 28.8078 21.3931 29.4485C21.4915 30.0925 21.9887 30.5555 22.4608 30.9952ZM22.1684 28.8803C22.3045 28.6963 22.4615 28.5192 22.6394 28.349C22.6922 28.2986 22.7191 28.3094 22.7201 28.3812L22.7552 30.6407C22.7562 30.7141 22.7334 30.7218 22.6868 30.6637C22.589 30.5411 22.4841 30.4115 22.3721 30.2748C22.1433 29.9964 21.932 29.6541 22.0151 29.2918C22.0603 29.0946 22.1114 28.9574 22.1684 28.8803ZM23.0125 34.0863C23.0309 33.3287 23.0502 32.5756 23.0704 31.8269C23.0733 31.7243 23.1026 31.7166 23.1583 31.8038C23.4086 32.1952 23.4276 32.5966 23.2152 33.008C23.2121 33.0141 23.2105 33.0201 23.2105 33.0259C23.2105 33.0309 23.2108 33.0355 23.2114 33.0398C23.2122 33.043 23.2137 33.0459 23.216 33.0484C23.2182 33.0509 23.221 33.0527 23.2242 33.0538C23.2274 33.0549 23.2308 33.0552 23.2341 33.0547C23.2375 33.0542 23.2406 33.0529 23.2433 33.0508C23.5414 32.813 23.5599 32.2232 23.4555 31.8988C23.408 31.751 23.342 31.6098 23.2575 31.4752C23.2536 31.4691 23.2484 31.464 23.2422 31.4601C23.2359 31.4563 23.2289 31.4539 23.2216 31.4532C23.2143 31.4524 23.2069 31.4533 23.2 31.4558C23.1932 31.4582 23.187 31.4622 23.182 31.4674C23.044 31.6112 22.9269 31.7702 22.8307 31.9444C22.7981 32.0034 22.7823 32.0691 22.7832 32.1416C22.7937 32.7539 22.803 33.3662 22.8112 33.9785C22.8125 34.0694 22.8185 34.1424 22.8293 34.1974C22.8407 34.2554 22.8557 34.3124 22.8744 34.3683C22.9006 34.4454 22.925 34.4448 22.9475 34.3665C22.9586 34.3266 22.9706 34.2869 22.9836 34.2476C23.0019 34.1926 23.0116 34.1388 23.0125 34.0863Z",
                            fill: "url(#paint1_linear_1_2028)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M10.4578 26.8126H11.1092V28.2569L10.8221 28.0512H12.5535L12.2621 28.2569V26.8126H12.9135V29.8555H12.2621V28.394L12.5535 28.5998H10.8221L11.1092 28.394V29.8555H10.4578V26.8126ZM13.4544 26.8126H14.1058V29.8555H13.4544V26.8126ZM14.643 26.8126H15.8602C16.1002 26.8126 16.3087 26.8526 16.4859 26.9326C16.663 27.0126 16.7973 27.1283 16.8887 27.2798C16.983 27.4283 17.0302 27.604 17.0302 27.8069C17.0302 28.0098 16.983 28.1869 16.8887 28.3383C16.7973 28.4869 16.663 28.6026 16.4859 28.6855C16.3087 28.7655 16.1002 28.8055 15.8602 28.8055H15.2945V29.8555H14.643V26.8126ZM15.8216 28.2569C15.9959 28.2569 16.1287 28.2183 16.2202 28.1412C16.3145 28.064 16.3616 27.9526 16.3616 27.8069C16.3616 27.6612 16.3145 27.5512 16.2202 27.4769C16.1287 27.3998 15.9959 27.3612 15.8216 27.3612H15.2945V28.2569H15.8216ZM18.0497 26.8126H18.8211L19.9183 29.8555H19.2411L19.0183 29.2083H17.8483L17.6254 29.8555H16.9526L18.0497 26.8126ZM18.8383 28.6726L18.4354 27.4983L18.0326 28.6726H18.8383ZM21.2263 26.8126H21.9978L23.0949 29.8555H22.4178L22.1949 29.2083H21.0249L20.802 29.8555H20.1292L21.2263 26.8126ZM22.0149 28.6726L21.612 27.4983L21.2092 28.6726H22.0149ZM11.7435 33.924C11.4663 33.924 11.2192 33.8612 11.0021 33.7355C10.7849 33.6098 10.6163 33.4269 10.4963 33.1869C10.3763 32.9469 10.3163 32.664 10.3163 32.3383C10.3163 32.0183 10.3749 31.7383 10.4921 31.4983C10.6092 31.2555 10.7763 31.0698 10.9935 30.9412C11.2106 30.8098 11.4635 30.744 11.7521 30.744C12.1435 30.744 12.4506 30.8398 12.6735 31.0312C12.8963 31.2226 13.0421 31.504 13.1106 31.8755L12.4335 31.9012C12.3963 31.7069 12.3192 31.5569 12.2021 31.4512C12.0878 31.3455 11.9378 31.2926 11.7521 31.2926C11.5921 31.2926 11.4549 31.3355 11.3406 31.4212C11.2263 31.5069 11.1378 31.6283 11.0749 31.7855C11.0149 31.9426 10.9849 32.1269 10.9849 32.3383C10.9849 32.5526 11.0149 32.7383 11.0749 32.8955C11.1378 33.0498 11.2263 33.1683 11.3406 33.2512C11.4578 33.334 11.5935 33.3755 11.7478 33.3755C11.9506 33.3755 12.1092 33.3198 12.2235 33.2083C12.3378 33.094 12.4106 32.9312 12.4421 32.7198L13.1235 32.7455C13.0606 33.1226 12.9121 33.414 12.6778 33.6198C12.4435 33.8226 12.1321 33.924 11.7435 33.924ZM14.9297 33.924C14.6268 33.924 14.3625 33.8598 14.1368 33.7312C13.914 33.6026 13.744 33.4198 13.6268 33.1826C13.5097 32.9426 13.4511 32.6612 13.4511 32.3383C13.4511 32.0155 13.5097 31.734 13.6268 31.494C13.744 31.254 13.914 31.0698 14.1368 30.9412C14.3625 30.8098 14.6268 30.744 14.9297 30.744C15.2354 30.744 15.4997 30.8098 15.7225 30.9412C15.9454 31.0698 16.1154 31.254 16.2325 31.494C16.3525 31.734 16.4125 32.0155 16.4125 32.3383C16.4125 32.6612 16.3525 32.9426 16.2325 33.1826C16.1154 33.4198 15.9454 33.6026 15.7225 33.7312C15.4997 33.8598 15.2354 33.924 14.9297 33.924ZM14.9297 33.3755C15.0982 33.3755 15.2425 33.3355 15.3625 33.2555C15.4854 33.1726 15.5797 33.054 15.6454 32.8998C15.7111 32.7426 15.744 32.5555 15.744 32.3383C15.744 32.1212 15.7111 31.934 15.6454 31.7769C15.5797 31.6198 15.4854 31.4998 15.3625 31.4169C15.2425 31.334 15.0982 31.2926 14.9297 31.2926C14.7611 31.2926 14.6154 31.334 14.4925 31.4169C14.3725 31.4998 14.2797 31.6198 14.214 31.7769C14.1511 31.934 14.1197 32.1212 14.1197 32.3383C14.1197 32.5555 14.1511 32.7426 14.214 32.8998C14.2797 33.054 14.3725 33.1726 14.4925 33.2555C14.6154 33.3355 14.7611 33.3755 14.9297 33.3755ZM16.811 30.8126H17.681L18.4567 33.0283L19.2281 30.8126H20.0981V33.8555H19.4467V31.884L18.731 33.8469H18.1739L17.4624 31.884V33.8555H16.811V30.8126ZM20.6363 30.8126H21.8535C22.0935 30.8126 22.3021 30.8526 22.4792 30.9326C22.6563 31.0126 22.7906 31.1283 22.8821 31.2798C22.9763 31.4283 23.0235 31.604 23.0235 31.8069C23.0235 32.0098 22.9763 32.1869 22.8821 32.3383C22.7906 32.4869 22.6563 32.6026 22.4792 32.6855C22.3021 32.7655 22.0935 32.8055 21.8535 32.8055H21.2878V33.8555H20.6363V30.8126ZM21.8149 32.2569C21.9892 32.2569 22.1221 32.2183 22.2135 32.1412C22.3078 32.064 22.3549 31.9526 22.3549 31.8069C22.3549 31.6612 22.3078 31.5512 22.2135 31.4769C22.1221 31.3998 21.9892 31.3612 21.8149 31.3612H21.2878V32.2569H21.8149ZM23.5158 30.8126H24.1672V33.6798L23.8072 33.3069H25.5687V33.8555H23.5158V30.8126ZM26.0395 30.8126H26.6909V33.8555H26.0395V30.8126ZM28.2115 30.8126H28.983L30.0801 33.8555H29.403L29.1801 33.2083H28.0101L27.7873 33.8555H27.1144L28.2115 30.8126ZM29.0001 32.6726L28.5973 31.4983L28.1944 32.6726H29.0001ZM30.501 30.8126H31.221L32.4296 32.9126V30.8126H33.081V33.8555H32.3524L31.1524 31.8283V33.8555H30.501V30.8126ZM34.4267 31.3612H33.5139V30.8126H35.991V31.3612H35.0824V33.8555H34.4267V31.3612Z",
                            fill: "#E4E4E7"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                            id: "filter0_ddd_1_2028",
                            x: "0.857143",
                            y: "0.148996",
                            width: "44.2857",
                            height: "44.2857",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "erode",
                                    in: "SourceAlpha",
                                    result: "effect1_dropShadow_1_2028"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "0.714286"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "0.357143"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1_2028"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "erode",
                                    in: "SourceAlpha",
                                    result: "effect2_dropShadow_1_2028"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "1.42857"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "1.42857"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect1_dropShadow_1_2028",
                                    result: "effect2_dropShadow_1_2028"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "dilate",
                                    in: "SourceAlpha",
                                    result: "effect3_dropShadow_1_2028"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect2_dropShadow_1_2028",
                                    result: "effect3_dropShadow_1_2028"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect3_dropShadow_1_2028",
                                    result: "shape"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint0_linear_1_2028",
                            x1: "9.88803",
                            y1: "6.55415",
                            x2: "36.0447",
                            y2: "35.5773",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    stopColor: "#27272A"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#52525C"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint1_linear_1_2028",
                            x1: "30.5498",
                            y1: "10.0698",
                            x2: "20.9753",
                            y2: "31.2119",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.473541",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0.7"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.811446",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    },
    gdpr: (param)=>{
        let { className } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            width: "46",
            height: "45",
            viewBox: "0 0 46 45",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: (0,lib_utils.cn)('size-4', className),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    filter: "url(#filter0_ddd_1_4914)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                            x: "3",
                            y: "0.863281",
                            width: "40",
                            height: "40",
                            rx: "20",
                            fill: "url(#paint0_linear_1_4914)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M30.6146 31.3062L31.2991 33.4127L33.5139 33.4127L31.7221 34.7145L32.4065 36.821L30.6146 35.5191L28.8228 36.821L29.5072 34.7145L27.7153 33.4127L29.9302 33.4127L30.6146 31.3062Z",
                            fill: "url(#paint1_linear_1_4914)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M23.6857 35.4549L23.0013 33.3485L22.3168 35.4549H20.102L21.8938 36.7568L21.2094 38.8633L23.0013 37.5614L24.7932 38.8633L24.1087 36.7568L25.9006 35.4549H23.6857Z",
                            fill: "url(#paint2_linear_1_4914)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M23.6857 4.96976L23.0013 2.86328L22.3168 4.96975L20.102 4.96975L21.8938 6.27163L21.2094 8.3781L23.0013 7.07623L24.7932 8.3781L24.1087 6.27163L25.9006 4.96975L23.6857 4.96976Z",
                            fill: "url(#paint3_linear_1_4914)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M30.6226 4.90555L31.307 7.01202L33.5219 7.01202L31.73 8.3139L32.4144 10.4204L30.6226 9.1185L28.8307 10.4204L29.5151 8.3139L27.7233 7.01202L29.9381 7.01202L30.6226 4.90555Z",
                            fill: "url(#paint4_linear_1_4914)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M16.0644 33.4127L15.38 31.3062L14.6955 33.4127H12.4807L14.2725 34.7145L13.5881 36.821L15.38 35.5191L17.1719 36.821L16.4874 34.7145L18.2793 33.4127L16.0644 33.4127Z",
                            fill: "url(#paint5_linear_1_4914)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M36.1956 10.4846L36.8801 12.5911L39.095 12.5911L37.3031 13.8929L37.9875 15.9994L36.1956 14.6975L34.4038 15.9994L35.0882 13.8929L33.2963 12.5911L35.5112 12.5911L36.1956 10.4846Z",
                            fill: "url(#paint6_linear_1_4914)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M10.4755 27.8336L9.79104 25.7272L9.1066 27.8336H6.89172L8.6836 29.1355L7.99916 31.242L9.79104 29.9401L11.5829 31.242L10.8985 29.1355L12.6903 27.8336L10.4755 27.8336Z",
                            fill: "url(#paint7_linear_1_4914)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M38.2439 18.1059L38.9283 20.2123L41.1432 20.2123L39.3513 21.5142L40.0357 23.6207L38.2439 22.3188L36.452 23.6207L37.1364 21.5142L35.3446 20.2123H37.5594L38.2439 18.1059Z",
                            fill: "url(#paint8_linear_1_4914)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M8.44313 20.2123L7.75869 18.1059L7.07425 20.2123H4.85938L6.65125 21.5142L5.96682 23.6207L7.75869 22.3188L9.55056 23.6207L8.86613 21.5142L10.658 20.2123H8.44313Z",
                            fill: "url(#paint9_linear_1_4914)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M36.1956 25.7272L36.8801 27.8336H39.095L37.3031 29.1355L37.9875 31.242L36.1956 29.9401L34.4038 31.242L35.0882 29.1355L33.2963 27.8336L35.5112 27.8336L36.1956 25.7272Z",
                            fill: "url(#paint10_linear_1_4914)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M10.4755 12.591L9.79103 10.4846L9.1066 12.591H6.89172L8.6836 13.8929L7.99916 15.9994L9.79103 14.6975L11.5829 15.9994L10.8985 13.8929L12.6903 12.591H10.4755Z",
                            fill: "url(#paint11_linear_1_4914)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M16.0565 7.01202L15.372 4.90555L14.6876 7.01202H12.4727L14.2646 8.3139L13.5802 10.4204L15.372 9.1185L17.1639 10.4204L16.4795 8.3139L18.2714 7.01203L16.0565 7.01202Z",
                            fill: "url(#paint12_linear_1_4914)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M15.2383 20.8682C15.2383 22.1882 15.9883 23.0882 17.2243 23.0882C17.8363 23.0882 18.3403 22.8302 18.5623 22.4162L18.5983 22.9922H19.2223V20.7542H17.3023V21.4802H18.1843C18.1363 21.9362 17.8243 22.2362 17.3263 22.2362C16.6243 22.2362 16.3123 21.6782 16.3123 20.8682C16.3123 20.0642 16.6483 19.4882 17.3083 19.4882C17.8063 19.4882 18.0523 19.7582 18.1303 20.2082L19.2103 20.1602C19.0123 19.2122 18.4303 18.6362 17.2963 18.6362C16.0003 18.6362 15.2383 19.5842 15.2383 20.8682ZM19.7261 18.7322V22.9922H21.2801C22.6601 22.9922 23.4341 22.2302 23.4341 20.8682C23.4341 19.5002 22.6481 18.7322 21.2441 18.7322H19.7261ZM21.2441 22.1402H20.7701V19.5842H21.2441C22.0121 19.5842 22.3601 19.9922 22.3601 20.8622C22.3601 21.7322 22.0121 22.1402 21.2441 22.1402ZM23.8059 22.6543V22.9922H24.8499V21.5822H25.5699C26.6139 21.5822 27.2499 21.0362 27.2499 20.1542C27.2499 19.2722 26.6139 18.7322 25.5699 18.7322H23.8059V22.1211H23.6798V22.6543H23.8059ZM25.4979 20.7242H24.8499V19.5842H25.4979C25.9239 19.5842 26.1819 19.7822 26.1819 20.1542C26.1819 20.5322 25.9179 20.7242 25.4979 20.7242ZM29.531 18.7322H27.581V22.9922H28.625V21.4862H29.423C29.831 21.4862 29.969 21.6362 29.993 21.9542L30.059 22.9922H31.127L31.025 21.7802C30.989 21.3542 30.767 21.1082 30.329 21.0482C30.797 20.9042 31.091 20.5202 31.091 19.9982C31.091 19.2302 30.479 18.7322 29.531 18.7322ZM29.369 20.6342H28.625V19.5842H29.357C29.789 19.5842 30.023 19.7642 30.023 20.1062C30.023 20.4422 29.789 20.6342 29.369 20.6342Z",
                            fill: "#101828"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                            id: "filter0_ddd_1_4914",
                            x: "0.857143",
                            y: "0.148996",
                            width: "44.2857",
                            height: "44.2857",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "erode",
                                    in: "SourceAlpha",
                                    result: "effect1_dropShadow_1_4914"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "0.714286"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "0.357143"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1_4914"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "erode",
                                    in: "SourceAlpha",
                                    result: "effect2_dropShadow_1_4914"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "1.42857"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "1.42857"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect1_dropShadow_1_4914",
                                    result: "effect2_dropShadow_1_4914"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "dilate",
                                    in: "SourceAlpha",
                                    result: "effect3_dropShadow_1_4914"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect2_dropShadow_1_4914",
                                    result: "effect3_dropShadow_1_4914"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect3_dropShadow_1_4914",
                                    result: "shape"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint0_linear_1_4914",
                            x1: "9.88803",
                            y1: "6.55415",
                            x2: "36.0447",
                            y2: "35.5773",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    stopColor: "#E5E7EB"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F9FAFB"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint1_linear_1_4914",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#364153",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#364153",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint2_linear_1_4914",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#364153",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#364153",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint3_linear_1_4914",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#364153",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#364153",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint4_linear_1_4914",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#364153",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#364153",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint5_linear_1_4914",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#364153",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#364153",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint6_linear_1_4914",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#364153",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#364153",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint7_linear_1_4914",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#364153",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#364153",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint8_linear_1_4914",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#364153",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#364153",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint9_linear_1_4914",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#364153",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#364153",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint10_linear_1_4914",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#364153",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#364153",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint11_linear_1_4914",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#364153",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#364153",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint12_linear_1_4914",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#364153",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#364153",
                                    stopOpacity: "0.7"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    },
    gdprDark: (param)=>{
        let { className } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            width: "46",
            height: "45",
            viewBox: "0 0 46 45",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: (0,lib_utils.cn)('size-4', className),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    filter: "url(#filter0_ddd_1_2046)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                            x: "3",
                            y: "0.863281",
                            width: "40",
                            height: "40",
                            rx: "20",
                            fill: "url(#paint0_linear_1_2046)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M30.6146 31.3062L31.2991 33.4127L33.5139 33.4127L31.7221 34.7145L32.4065 36.821L30.6146 35.5191L28.8228 36.821L29.5072 34.7145L27.7153 33.4127L29.9302 33.4127L30.6146 31.3062Z",
                            fill: "url(#paint1_linear_1_2046)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M23.6857 35.4549L23.0013 33.3485L22.3168 35.4549H20.102L21.8938 36.7568L21.2094 38.8633L23.0013 37.5614L24.7932 38.8633L24.1087 36.7568L25.9006 35.4549H23.6857Z",
                            fill: "url(#paint2_linear_1_2046)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M23.6857 4.96976L23.0013 2.86328L22.3168 4.96975L20.102 4.96975L21.8938 6.27163L21.2094 8.3781L23.0013 7.07623L24.7932 8.3781L24.1087 6.27163L25.9006 4.96975L23.6857 4.96976Z",
                            fill: "url(#paint3_linear_1_2046)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M30.6226 4.90555L31.307 7.01202L33.5219 7.01202L31.73 8.3139L32.4144 10.4204L30.6226 9.1185L28.8307 10.4204L29.5151 8.3139L27.7233 7.01202L29.9381 7.01202L30.6226 4.90555Z",
                            fill: "url(#paint4_linear_1_2046)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M16.0644 33.4127L15.38 31.3062L14.6955 33.4127H12.4807L14.2725 34.7145L13.5881 36.821L15.38 35.5191L17.1719 36.821L16.4874 34.7145L18.2793 33.4127L16.0644 33.4127Z",
                            fill: "url(#paint5_linear_1_2046)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M36.1956 10.4846L36.8801 12.5911L39.095 12.5911L37.3031 13.8929L37.9875 15.9994L36.1956 14.6975L34.4038 15.9994L35.0882 13.8929L33.2963 12.5911L35.5112 12.5911L36.1956 10.4846Z",
                            fill: "url(#paint6_linear_1_2046)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M10.4755 27.8336L9.79104 25.7272L9.1066 27.8336H6.89172L8.6836 29.1355L7.99916 31.242L9.79104 29.9401L11.5829 31.242L10.8985 29.1355L12.6903 27.8336L10.4755 27.8336Z",
                            fill: "url(#paint7_linear_1_2046)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M38.2439 18.1059L38.9283 20.2123L41.1432 20.2123L39.3513 21.5142L40.0357 23.6207L38.2439 22.3188L36.452 23.6207L37.1364 21.5142L35.3446 20.2123H37.5594L38.2439 18.1059Z",
                            fill: "url(#paint8_linear_1_2046)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M8.44313 20.2123L7.75869 18.1059L7.07425 20.2123H4.85938L6.65125 21.5142L5.96682 23.6207L7.75869 22.3188L9.55056 23.6207L8.86613 21.5142L10.658 20.2123H8.44313Z",
                            fill: "url(#paint9_linear_1_2046)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M36.1956 25.7272L36.8801 27.8336H39.095L37.3031 29.1355L37.9875 31.242L36.1956 29.9401L34.4038 31.242L35.0882 29.1355L33.2963 27.8336L35.5112 27.8336L36.1956 25.7272Z",
                            fill: "url(#paint10_linear_1_2046)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M10.4755 12.591L9.79103 10.4846L9.1066 12.591H6.89172L8.6836 13.8929L7.99916 15.9994L9.79103 14.6975L11.5829 15.9994L10.8985 13.8929L12.6903 12.591H10.4755Z",
                            fill: "url(#paint11_linear_1_2046)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M16.0565 7.01202L15.372 4.90555L14.6876 7.01202H12.4727L14.2646 8.3139L13.5802 10.4204L15.372 9.1185L17.1639 10.4204L16.4795 8.3139L18.2714 7.01203L16.0565 7.01202Z",
                            fill: "url(#paint12_linear_1_2046)"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M17.2242 23.0882C16.8122 23.0882 16.4582 22.9942 16.1622 22.8062C15.8662 22.6182 15.6382 22.3582 15.4782 22.0262C15.3182 21.6942 15.2382 21.3082 15.2382 20.8682C15.2382 20.4402 15.3202 20.0582 15.4842 19.7222C15.6482 19.3862 15.8822 19.1222 16.1862 18.9302C16.4942 18.7342 16.8642 18.6362 17.2962 18.6362C17.6762 18.6362 17.9942 18.6982 18.2502 18.8222C18.5102 18.9422 18.7182 19.1162 18.8742 19.3442C19.0342 19.5722 19.1462 19.8442 19.2102 20.1602L18.1302 20.2082C18.0902 19.9802 18.0062 19.8042 17.8782 19.6802C17.7502 19.5522 17.5602 19.4882 17.3082 19.4882C17.0882 19.4882 16.9042 19.5482 16.7562 19.6682C16.6082 19.7882 16.4962 19.9522 16.4202 20.1602C16.3482 20.3642 16.3122 20.6002 16.3122 20.8682C16.3122 21.1362 16.3482 21.3742 16.4202 21.5822C16.4922 21.7862 16.6022 21.9462 16.7502 22.0622C16.9022 22.1782 17.0942 22.2362 17.3262 22.2362C17.4942 22.2362 17.6382 22.2042 17.7582 22.1402C17.8822 22.0762 17.9802 21.9882 18.0522 21.8762C18.1242 21.7602 18.1682 21.6282 18.1842 21.4802H17.3022V20.7542H19.2222V22.9922H18.5982L18.5442 22.1042L18.6642 22.1402C18.6242 22.3282 18.5362 22.4942 18.4002 22.6382C18.2682 22.7782 18.1002 22.8882 17.8962 22.9682C17.6962 23.0482 17.4722 23.0882 17.2242 23.0882ZM19.726 22.9922V18.7322H21.244C21.948 18.7322 22.488 18.9182 22.864 19.2902C23.244 19.6582 23.434 20.1842 23.434 20.8682C23.434 21.5482 23.248 22.0722 22.876 22.4402C22.504 22.8082 21.972 22.9922 21.28 22.9922H19.726ZM20.77 22.1402H21.244C21.628 22.1402 21.91 22.0362 22.09 21.8282C22.27 21.6202 22.36 21.2982 22.36 20.8622C22.36 20.4262 22.27 20.1042 22.09 19.8962C21.91 19.6882 21.628 19.5842 21.244 19.5842H20.77V22.1402ZM23.8058 22.9922V18.7322H25.5698C26.0938 18.7322 26.5038 18.8602 26.7998 19.1162C27.0998 19.3682 27.2498 19.7142 27.2498 20.1542C27.2498 20.4462 27.1818 20.7002 27.0458 20.9162C26.9138 21.1282 26.7218 21.2922 26.4698 21.4082C26.2178 21.5242 25.9178 21.5822 25.5698 21.5822H24.8498V22.9922H23.8058ZM24.8498 20.7242H25.4978C25.7098 20.7242 25.8758 20.6762 25.9958 20.5802C26.1198 20.4842 26.1818 20.3422 26.1818 20.1542C26.1818 19.9702 26.1218 19.8302 26.0018 19.7342C25.8818 19.6342 25.7138 19.5842 25.4978 19.5842H24.8498V20.7242ZM27.5809 22.9922V18.7322H29.5309C29.8469 18.7322 30.1209 18.7842 30.3529 18.8882C30.5889 18.9922 30.7709 19.1402 30.8989 19.3322C31.0269 19.5202 31.0909 19.7422 31.0909 19.9982C31.0909 20.1982 31.0509 20.3742 30.9709 20.5262C30.8909 20.6782 30.7789 20.8042 30.6349 20.9042C30.4949 21.0002 30.3269 21.0642 30.1309 21.0962L30.1129 21.0362C30.4049 21.0362 30.6249 21.0982 30.7729 21.2222C30.9249 21.3462 31.0089 21.5322 31.0249 21.7802L31.1269 22.9922H30.0589L29.9929 21.9542C29.9809 21.7942 29.9329 21.6762 29.8489 21.6002C29.7689 21.5242 29.6269 21.4862 29.4229 21.4862H28.6249V22.9922H27.5809ZM28.6249 20.6342H29.3689C29.5809 20.6342 29.7429 20.5882 29.8549 20.4962C29.9669 20.4042 30.0229 20.2742 30.0229 20.1062C30.0229 19.9342 29.9649 19.8042 29.8489 19.7162C29.7369 19.6282 29.5729 19.5842 29.3569 19.5842H28.6249V20.6342Z",
                            fill: "#D4D4D8"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                            id: "filter0_ddd_1_2046",
                            x: "0.857143",
                            y: "0.148996",
                            width: "44.2857",
                            height: "44.2857",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "erode",
                                    in: "SourceAlpha",
                                    result: "effect1_dropShadow_1_2046"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "0.714286"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "0.357143"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1_2046"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "erode",
                                    in: "SourceAlpha",
                                    result: "effect2_dropShadow_1_2046"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "1.42857"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "1.42857"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect1_dropShadow_1_2046",
                                    result: "effect2_dropShadow_1_2046"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feMorphology", {
                                    radius: "0.714286",
                                    operator: "dilate",
                                    in: "SourceAlpha",
                                    result: "effect3_dropShadow_1_2046"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect2_dropShadow_1_2046",
                                    result: "effect3_dropShadow_1_2046"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect3_dropShadow_1_2046",
                                    result: "shape"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint0_linear_1_2046",
                            x1: "9.88803",
                            y1: "6.55415",
                            x2: "36.0447",
                            y2: "35.5773",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    stopColor: "#27272A"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#52525C"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint1_linear_1_2046",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint2_linear_1_2046",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint3_linear_1_2046",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint4_linear_1_2046",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint5_linear_1_2046",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint6_linear_1_2046",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint7_linear_1_2046",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint8_linear_1_2046",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint9_linear_1_2046",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint10_linear_1_2046",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint11_linear_1_2046",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0.7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint12_linear_1_2046",
                            x1: "15.8864",
                            y1: "51.1315",
                            x2: "29.5116",
                            y2: "5.36433",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.188554",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.526459",
                                    stopColor: "#FAFAFA",
                                    stopOpacity: "0.7"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    },
    vercel: ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            width: "52",
            height: "60",
            viewBox: "0 0 52 60",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    filter: "url(#filter0_dddd_1_4108)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z",
                            fill: "black"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                            clipPath: "url(#clip0_1_4108)",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "M26 8L39.5 31.3829H12.5L26 8Z",
                                fill: "white"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                            id: "filter0_dddd_1_4108",
                            x: "0",
                            y: "0",
                            width: "52",
                            height: "60",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "1"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "1"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1_4108"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "3"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "1.5"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect1_dropShadow_1_4108",
                                    result: "effect2_dropShadow_1_4108"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "7"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "2"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect2_dropShadow_1_4108",
                                    result: "effect3_dropShadow_1_4108"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "12"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "2.5"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect3_dropShadow_1_4108",
                                    result: "effect4_dropShadow_1_4108"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect4_dropShadow_1_4108",
                                    result: "shape"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                            id: "clip0_1_4108",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                                width: "27",
                                height: "23.4141",
                                fill: "white",
                                transform: "translate(12.5 8)"
                            })
                        })
                    ]
                })
            ]
        }),
    replit: ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            width: "52",
            height: "60",
            viewBox: "0 0 52 60",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    filter: "url(#filter0_dddd_1_4111)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z",
                            fill: "white"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                            clipPath: "url(#clip0_1_4111)",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M15.5 8.875C15.5 7.83947 16.3395 7 17.375 7H26.125C27.1605 7 28 7.83947 28 8.875V17H17.375C16.3395 17 15.5 16.1605 15.5 15.125V8.875Z",
                                    fill: "#F26207"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M28 17H38.625C39.6605 17 40.5 17.8395 40.5 18.875V25.125C40.5 26.1605 39.6605 27 38.625 27H28V17Z",
                                    fill: "#F26207"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M15.5 28.875C15.5 27.8395 16.3395 27 17.375 27H28V35.125C28 36.1605 27.1605 37 26.125 37H17.375C16.3395 37 15.5 36.1605 15.5 35.125V28.875Z",
                                    fill: "#F26207"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                            id: "filter0_dddd_1_4111",
                            x: "0",
                            y: "0",
                            width: "52",
                            height: "60",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "1"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "1"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1_4111"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "3"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "1.5"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect1_dropShadow_1_4111",
                                    result: "effect2_dropShadow_1_4111"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "7"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "2"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect2_dropShadow_1_4111",
                                    result: "effect3_dropShadow_1_4111"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "12"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "2.5"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect3_dropShadow_1_4111",
                                    result: "effect4_dropShadow_1_4111"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect4_dropShadow_1_4111",
                                    result: "shape"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                            id: "clip0_1_4111",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                                width: "25",
                                height: "30",
                                fill: "white",
                                transform: "translate(15.5 7)"
                            })
                        })
                    ]
                })
            ]
        }),
    posthog: ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            width: "52",
            height: "60",
            viewBox: "0 0 52 60",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    filter: "url(#filter0_dddd_1_4116)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z",
                            fill: "#EEEFE8"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M18.2508 23.0069C18.1951 23.118 18.1096 23.2115 18.0038 23.2768C17.898 23.3421 17.7762 23.3767 17.6518 23.3767C17.5275 23.3767 17.4057 23.3421 17.2999 23.2768C17.1941 23.2115 17.1086 23.118 17.0529 23.0069L16.462 21.8257C16.4155 21.7327 16.3913 21.6302 16.3913 21.5262C16.3913 21.4223 16.4155 21.3197 16.462 21.2267L17.0529 20.0456C17.1086 19.9344 17.1941 19.841 17.2999 19.7757C17.4057 19.7104 17.5275 19.6758 17.6518 19.6758C17.7762 19.6758 17.898 19.7104 18.0038 19.7757C18.1096 19.841 18.1951 19.9344 18.2508 20.0456L18.8417 21.2267C18.8882 21.3197 18.9124 21.4223 18.9124 21.5262C18.9124 21.6302 18.8882 21.7327 18.8417 21.8257L18.2508 23.0069ZM18.2508 29.7047C18.1951 29.8158 18.1096 29.9093 18.0038 29.9746C17.898 30.0399 17.7762 30.0745 17.6518 30.0745C17.5275 30.0745 17.4057 30.0399 17.2999 29.9746C17.1941 29.9093 17.1086 29.8158 17.0529 29.7047L16.4613 28.5235C16.4148 28.4305 16.3906 28.328 16.3906 28.224C16.3906 28.1201 16.4148 28.0176 16.4613 27.9246L17.0522 26.7434C17.1079 26.6322 17.1934 26.5388 17.2992 26.4735C17.405 26.4082 17.5269 26.3736 17.6512 26.3736C17.7755 26.3736 17.8974 26.4082 18.0031 26.4735C18.1089 26.5388 18.1944 26.6322 18.2501 26.7434L18.8411 27.9246C18.8875 28.0176 18.9117 28.1201 18.9117 28.224C18.9117 28.328 18.8875 28.4305 18.8411 28.5235L18.2508 29.7047Z",
                            fill: "#1D4AFF"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M10.9531 27.1607C10.9531 26.5644 11.6747 26.2649 12.0968 26.687L15.1673 29.7575C15.5894 30.1796 15.2906 30.9019 14.6936 30.9019H11.6231C11.4454 30.9019 11.275 30.8313 11.1494 30.7056C11.0237 30.58 10.9531 30.4096 10.9531 30.2319V27.1607ZM10.9531 23.926C10.9531 24.0141 10.9704 24.1013 11.004 24.1827C11.0377 24.2641 11.0871 24.3381 11.1494 24.4004L17.4546 30.7049C17.5168 30.7672 17.5906 30.8167 17.6719 30.8505C17.7532 30.8843 17.8403 30.9018 17.9283 30.9019H21.3921C21.9884 30.9019 22.2879 30.1803 21.8658 29.7582L12.0975 19.9899C11.6747 19.5671 10.9531 19.8659 10.9531 20.4622V23.926ZM10.9531 17.2282C10.9532 17.4059 11.0238 17.5762 11.1494 17.7019L24.1518 30.7062C24.2774 30.8319 24.4478 30.9025 24.6255 30.9025H28.0893C28.6856 30.9025 28.985 30.1803 28.563 29.7582L12.0968 13.2914C11.6747 12.8693 10.9531 13.1681 10.9531 13.765V17.2282ZM17.6509 17.2282C17.651 17.4059 17.7216 17.5762 17.8472 17.7019L29.9029 29.7582C30.325 30.1803 31.0466 29.8808 31.0466 29.2839V25.8207C31.0465 25.643 30.9759 25.4727 30.8503 25.347L18.7946 13.2914C18.3725 12.8693 17.6509 13.1681 17.6509 13.765V17.2282ZM25.4924 13.2914C25.0703 12.8693 24.3488 13.1681 24.3488 13.765V17.2289C24.349 17.4063 24.4196 17.5764 24.5451 17.7019L29.9029 23.0604C30.325 23.4825 31.0466 23.183 31.0466 22.586V19.1229C31.0465 18.9452 30.9759 18.7748 30.8503 18.6492L25.4924 13.2914Z",
                            fill: "#F9BD2B"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M39.4424 27.2418L33.1358 20.9359C32.7138 20.5138 31.9922 20.8126 31.9922 21.4096V30.2312C31.9922 30.4089 32.0628 30.5793 32.1884 30.705C32.3141 30.8306 32.4845 30.9012 32.6622 30.9012H42.4305C42.6082 30.9012 42.7786 30.8306 42.9043 30.705C43.0299 30.5793 43.1005 30.4089 43.1005 30.2312V29.4273C43.1005 29.0574 42.7997 28.762 42.4325 28.7144C41.3008 28.567 40.2495 28.0488 39.4424 27.2418ZM35.2074 28.7579C34.9231 28.7579 34.6505 28.645 34.4494 28.444C34.2484 28.2429 34.1355 27.9703 34.1355 27.686C34.1355 27.4017 34.2484 27.129 34.4494 26.928C34.6505 26.7269 34.9231 26.614 35.2074 26.614C35.4917 26.614 35.7644 26.7269 35.9654 26.928C36.1665 27.129 36.2794 27.4017 36.2794 27.686C36.2794 27.9703 36.1665 28.2429 35.9654 28.444C35.7644 28.645 35.4917 28.7579 35.2074 28.7579Z",
                            fill: "black"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M10.9531 30.2319C10.9531 30.4096 11.0237 30.58 11.1494 30.7056C11.275 30.8313 11.4454 30.9019 11.6231 30.9019H14.6936C15.2906 30.9019 15.5894 30.1796 15.1673 29.7575L12.0968 26.687C11.6747 26.2649 10.9531 26.5637 10.9531 27.1607V30.2319ZM17.6509 18.8455L12.0968 13.2914C11.6747 12.8693 10.9531 13.1681 10.9531 13.765V17.2289C10.9533 17.4063 11.0239 17.5764 11.1494 17.7019L17.6509 24.204V18.8455ZM12.0968 19.9892C11.6747 19.5671 10.9531 19.8659 10.9531 20.4629V23.9267C10.9533 24.1041 11.0239 24.2742 11.1494 24.3997L17.6509 30.9019V25.5433L12.0968 19.9892Z",
                            fill: "#1D4AFF"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M24.3463 19.1229C24.3462 18.9452 24.2756 18.7748 24.15 18.6492L18.7921 13.2914C18.37 12.8693 17.6484 13.1681 17.6484 13.765V17.2289C17.6487 17.4063 17.7193 17.5764 17.8447 17.7019L24.3463 24.204V19.1222V19.1229ZM17.6484 30.9012H21.389C21.9859 30.9012 22.2847 30.1796 21.8626 29.7575L17.6484 25.5433V30.9019V30.9012ZM17.6484 18.8455V23.926C17.6484 24.0141 17.6657 24.1013 17.6994 24.1827C17.733 24.2641 17.7824 24.3381 17.8447 24.4004L24.3463 30.9019V25.8207C24.3462 25.643 24.2756 25.4727 24.15 25.347L17.6484 18.8455Z",
                            fill: "#F54E00"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                        id: "filter0_dddd_1_4116",
                        x: "0",
                        y: "0",
                        width: "52",
                        height: "60",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                dy: "1"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                stdDeviation: "1"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_1_4116"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                dy: "3"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                stdDeviation: "1.5"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                mode: "normal",
                                in2: "effect1_dropShadow_1_4116",
                                result: "effect2_dropShadow_1_4116"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                dy: "7"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                stdDeviation: "2"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                mode: "normal",
                                in2: "effect2_dropShadow_1_4116",
                                result: "effect3_dropShadow_1_4116"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                dy: "12"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                stdDeviation: "2.5"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                mode: "normal",
                                in2: "effect3_dropShadow_1_4116",
                                result: "effect4_dropShadow_1_4116"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect4_dropShadow_1_4116",
                                result: "shape"
                            })
                        ]
                    })
                })
            ]
        }),
    googleDrive: ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            width: "100",
            height: "100",
            viewBox: "0 0 87.3 78",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z",
                    fill: "#0066da"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z",
                    fill: "#00ac47"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z",
                    fill: "#ea4335"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z",
                    fill: "#00832d"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z",
                    fill: "#2684fc"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z",
                    fill: "#ffba00"
                })
            ]
        }),
    linear: ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                    clipPath: "url(#clip0_638_21376)",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "M0.147049 7.38273C0.120349 7.26891 0.255947 7.19723 0.338615 7.27989L4.7201 11.6614C4.80277 11.744 4.73108 11.8796 4.61726 11.8529C2.40618 11.3343 0.665735 9.59382 0.147049 7.38273ZM0.000226962 5.62669C-0.00189029 5.66069 0.0108916 5.69388 0.0349756 5.71796L6.28204 11.965C6.30612 11.9891 6.33931 12.0019 6.37331 11.9998C6.65761 11.9821 6.93656 11.9446 7.2088 11.8887C7.30054 11.8698 7.33241 11.7571 7.26618 11.6909L0.309114 4.73382C0.242891 4.66759 0.130174 4.69946 0.111333 4.7912C0.0554233 5.06343 0.0179347 5.34239 0.000226962 5.62669ZM0.505312 3.56465C0.485333 3.6095 0.495509 3.66192 0.53023 3.69665L8.30335 11.4698C8.33808 11.5045 8.3905 11.5147 8.43535 11.4947C8.64968 11.3992 8.8574 11.2916 9.05761 11.1726C9.12386 11.1332 9.13409 11.0422 9.0796 10.9877L1.01228 2.9204C0.957788 2.86591 0.866754 2.87613 0.82739 2.94239C0.708432 3.14259 0.600779 3.35031 0.505312 3.56465ZM1.51904 2.16888C1.47463 2.12447 1.47188 2.05324 1.51373 2.00639C2.61354 0.775117 4.21337 0 5.99423 0C9.31112 0 12 2.68887 12 6.00577C12 7.78663 11.2249 9.38646 9.99361 10.4863C9.94678 10.5281 9.87553 10.5254 9.83111 10.481L1.51904 2.16888Z",
                        fill: "currentColor"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                        id: "clip0_638_21376",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                            width: "12",
                            height: "12",
                            fill: "white"
                        })
                    })
                })
            ]
        }),
    workos: ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            width: "52",
            height: "60",
            viewBox: "0 0 52 60",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    filter: "url(#filter0_dddd_1_4101)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z",
                            fill: "#6363F1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                            clipPath: "url(#clip0_1_4101)",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M12 22.0011C12 22.557 12.1516 23.0624 12.4043 23.5173L17.3069 32.0083C17.8123 32.8675 18.5704 33.5751 19.5307 33.8783C21.3502 34.4848 23.3213 33.7267 24.2816 32.1094L25.444 30.0372L20.7942 21.9505L25.7473 13.409L26.9097 11.3873C27.2635 10.7808 27.7184 10.2754 28.2744 9.87109H20.6931C19.3791 9.87109 18.1155 10.5787 17.4585 11.7411L12.4043 20.4848C12.1516 20.9397 12 21.4451 12 22.0011Z",
                                    fill: "white"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M40.0009 22.0019C40.0009 21.446 39.8493 20.9405 39.5966 20.4857L34.6435 11.8936C33.6832 10.2257 31.7121 9.51816 29.8926 10.1247C28.9323 10.4279 28.1742 11.1355 27.6688 11.9947L26.5063 13.9153L31.2067 22.0019L26.2536 30.5434L25.0912 32.6156C24.7374 33.2221 24.2825 33.7275 23.7266 34.1319H31.3583C32.6724 34.1319 33.9359 33.4243 34.593 32.2618L39.6471 23.5182C39.8493 23.0633 40.0009 22.5579 40.0009 22.0019Z",
                                    fill: "white"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                            id: "filter0_dddd_1_4101",
                            x: "0",
                            y: "0",
                            width: "52",
                            height: "60",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "1"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "1"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1_4101"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "3"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "1.5"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect1_dropShadow_1_4101",
                                    result: "effect2_dropShadow_1_4101"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "7"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "2"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect2_dropShadow_1_4101",
                                    result: "effect3_dropShadow_1_4101"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "12"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "2.5"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect3_dropShadow_1_4101",
                                    result: "effect4_dropShadow_1_4101"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect4_dropShadow_1_4101",
                                    result: "shape"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                            id: "clip0_1_4101",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                                width: "28",
                                height: "28",
                                fill: "white",
                                transform: "translate(12 8)"
                            })
                        })
                    ]
                })
            ]
        }),
    runwayml: ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            width: "52",
            height: "60",
            viewBox: "0 0 52 60",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    filter: "url(#filter0_dddd_1_4106)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z",
                            fill: "#101828"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M37.678 13.2664C38.3954 15.4976 38.2063 17.5358 36.7194 19.377C36.0513 20.2045 35.105 20.7428 33.2308 21.2226C33.6954 21.6556 34.1217 22.0294 34.521 22.4302C35.2929 23.2052 36.0595 23.986 36.8108 24.781C38.5668 26.639 38.5001 29.3228 37.3076 31.4453C35.7329 34.2479 31.7191 35.1571 29.2989 33.0723C28.1452 32.0786 27.0621 31.0026 25.9522 29.9584C25.7293 29.7485 25.529 29.5145 25.2864 29.2579C25.0948 29.8493 24.9711 30.4074 24.7399 30.9169C23.4524 33.7547 19.82 34.9039 16.8601 33.4455C14.8504 32.4552 13.9101 30.7587 13.8784 28.6156C13.8134 24.2092 13.8339 19.8011 13.8679 15.3939C13.8907 12.4321 16.3064 9.88977 19.2617 9.83918C23.7709 9.762 28.2832 9.77292 32.793 9.83779C35.1105 9.87113 36.753 11.063 37.678 13.2664ZM21.0218 13.8121C20.2809 13.2306 19.4728 13.0218 18.6063 13.4803C17.7302 13.9439 17.3212 14.6789 17.3266 15.7004C17.3488 19.9172 17.3308 24.134 17.3447 28.3508C17.346 28.7318 17.3968 29.1459 17.5522 29.4864C17.9764 30.415 19.1143 30.8701 20.1817 30.6052C21.2025 30.3518 21.8008 29.5747 21.8013 28.4783C21.804 24.1995 21.7934 19.9206 21.8116 15.6418C21.8147 14.9289 21.594 14.3552 21.0218 13.8121ZM25.8643 21.1924C25.6845 21.2009 25.5046 21.2095 25.2832 21.22C25.2832 22.2251 25.2729 23.1939 25.2932 24.1622C25.2967 24.3236 25.3961 24.5182 25.513 24.6367C27.31 26.4581 29.1012 28.2862 30.9369 30.0681C31.2679 30.3895 31.7728 30.6269 32.2308 30.7023C33.164 30.8562 34.1069 30.2305 34.5663 29.2999C34.9496 28.5235 34.7691 27.5689 34.0724 26.8589C32.4945 25.2511 30.8899 23.6692 29.3299 22.0444C28.7194 21.4085 28.0705 21.0385 27.1623 21.1823C26.7788 21.243 26.3776 21.1924 25.8643 21.1924ZM29.4434 13.2325C27.9264 13.2325 26.4094 13.2325 25.0086 13.2325C25.1354 14.7766 25.2569 16.2585 25.3812 17.7726C27.7177 17.7726 30.0693 17.7785 32.4208 17.7705C33.8172 17.7656 34.7019 16.8615 34.6935 15.4759C34.6855 14.157 33.7615 13.2426 32.4172 13.2339C31.4674 13.2276 30.5175 13.2325 29.4434 13.2325Z",
                            fill: "#FEFEFE"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                        id: "filter0_dddd_1_4106",
                        x: "0",
                        y: "0",
                        width: "52",
                        height: "60",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                dy: "1"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                stdDeviation: "1"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_1_4106"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                dy: "3"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                stdDeviation: "1.5"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                mode: "normal",
                                in2: "effect1_dropShadow_1_4106",
                                result: "effect2_dropShadow_1_4106"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                dy: "7"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                stdDeviation: "2"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                mode: "normal",
                                in2: "effect2_dropShadow_1_4106",
                                result: "effect3_dropShadow_1_4106"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                dy: "12"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                stdDeviation: "2.5"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                mode: "normal",
                                in2: "effect3_dropShadow_1_4106",
                                result: "effect4_dropShadow_1_4106"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect4_dropShadow_1_4106",
                                result: "shape"
                            })
                        ]
                    })
                })
            ]
        }),
    gemini: ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            width: "52",
            height: "60",
            viewBox: "0 0 52 60",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    filter: "url(#filter0_dddd_1_4143)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z",
                            fill: "white"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                            clipPath: "url(#clip0_1_4143)",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "M26 34C25.5426 30.9809 24.131 28.1874 21.9718 26.0282C19.8126 23.869 17.0191 22.4574 14 22C17.0191 21.5426 19.8126 20.131 21.9718 17.9718C24.131 15.8126 25.5426 13.0191 26 10C26.4575 13.0191 27.8692 15.8125 30.0283 17.9717C32.1875 20.1308 34.9809 21.5425 38 22C34.9809 22.4575 32.1875 23.8692 30.0283 26.0283C27.8692 28.1875 26.4575 30.9809 26 34Z",
                                fill: "url(#paint0_linear_1_4143)"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                            id: "filter0_dddd_1_4143",
                            x: "0",
                            y: "0",
                            width: "52",
                            height: "60",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "1"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "1"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1_4143"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "3"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "1.5"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect1_dropShadow_1_4143",
                                    result: "effect2_dropShadow_1_4143"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "7"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "2"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect2_dropShadow_1_4143",
                                    result: "effect3_dropShadow_1_4143"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "12"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "2.5"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect3_dropShadow_1_4143",
                                    result: "effect4_dropShadow_1_4143"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect4_dropShadow_1_4143",
                                    result: "shape"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint0_linear_1_4143",
                            x1: "13.9999",
                            y1: "2410",
                            x2: "1663.52",
                            y2: "739.48",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    stopColor: "#1C7DFF"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "0.52021",
                                    stopColor: "#1C69FF"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F0DCD6"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                            id: "clip0_1_4143",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                                width: "24",
                                height: "24",
                                fill: "white",
                                transform: "translate(14 10)"
                            })
                        })
                    ]
                })
            ]
        }),
    boat: ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            width: "52",
            height: "60",
            viewBox: "0 0 52 60",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    filter: "url(#filter0_dddd_1_4139)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z",
                            fill: "#0086FF"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M34.4067 25.7667C33.678 26.7432 32.145 28.3644 31.2924 28.3644H27.3297V25.7646H30.486C30.9375 25.7646 31.368 25.5819 31.6788 25.2606C33.3 23.5806 34.2366 21.5814 34.2366 19.4373C34.2366 15.7791 31.5024 12.5451 27.3276 10.5963V8.84908C27.3276 8.09728 26.7186 7.48828 25.9668 7.48828C25.215 7.48828 24.606 8.09728 24.606 8.84908V9.57358C23.4363 9.23128 22.1973 8.97088 20.9037 8.82178C23.0457 11.1486 24.354 14.2608 24.354 17.6733C24.354 20.733 23.3082 23.5428 21.5505 25.7688H24.606V28.3728H20.133C19.5282 28.3728 19.0368 27.8835 19.0368 27.2766V26.1384C19.0368 25.9389 18.8751 25.7751 18.6735 25.7751H12.7767C12.6612 25.7751 12.5625 25.8696 12.5625 25.9851C12.5583 30.6429 16.2438 34.1394 20.6517 34.1394H33.0942C36.0762 34.1394 37.4097 30.3174 39.1569 27.8856C39.8352 26.9448 41.4627 26.1888 41.9562 25.9788C42.0465 25.941 42.099 25.857 42.099 25.7583V24.2463C42.099 24.093 41.9478 23.9775 41.7987 24.0195C41.7987 24.0195 34.6062 25.6722 34.5222 25.6953C34.4382 25.7205 34.4067 25.7688 34.4067 25.7688V25.7667Z",
                            fill: "white"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M22.0494 17.6649C22.0494 15.3192 21.2451 13.1604 19.9011 11.4531L13.1328 23.1648H20.4135C21.4488 21.5856 22.0515 19.6956 22.0515 17.667L22.0494 17.6649Z",
                            fill: "white"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                        id: "filter0_dddd_1_4139",
                        x: "0",
                        y: "0",
                        width: "52",
                        height: "60",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                dy: "1"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                stdDeviation: "1"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_1_4139"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                dy: "3"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                stdDeviation: "1.5"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                mode: "normal",
                                in2: "effect1_dropShadow_1_4139",
                                result: "effect2_dropShadow_1_4139"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                dy: "7"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                stdDeviation: "2"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                mode: "normal",
                                in2: "effect2_dropShadow_1_4139",
                                result: "effect3_dropShadow_1_4139"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                dy: "12"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                stdDeviation: "2.5"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                mode: "normal",
                                in2: "effect3_dropShadow_1_4139",
                                result: "effect4_dropShadow_1_4139"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect4_dropShadow_1_4139",
                                result: "shape"
                            })
                        ]
                    })
                })
            ]
        }),
    supabase: ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            width: "52",
            height: "60",
            viewBox: "0 0 52 60",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    filter: "url(#filter0_dddd_1_4134)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z",
                            fill: "#121212"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                            clipPath: "url(#clip0_1_4134)",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M28.5219 36.7564C27.7374 37.7443 26.1469 37.2031 26.128 35.9417L25.8516 17.4922H38.257C40.5039 17.4922 41.7571 20.0874 40.3599 21.8472L28.5219 36.7564Z",
                                    fill: "url(#paint0_linear_1_4134)"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M28.5219 36.7564C27.7374 37.7443 26.1469 37.2031 26.128 35.9417L25.8516 17.4922H38.257C40.5039 17.4922 41.7571 20.0874 40.3599 21.8472L28.5219 36.7564Z",
                                    fill: "url(#paint1_linear_1_4134)",
                                    fillOpacity: "0.2"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M23.48 7.06882C24.2645 6.08082 25.8551 6.62217 25.874 7.88359L25.9951 26.333H13.745C11.4979 26.333 10.2447 23.7378 11.642 21.978L23.48 7.06882Z",
                                    fill: "#3ECF8E"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                            id: "filter0_dddd_1_4134",
                            x: "0",
                            y: "0",
                            width: "52",
                            height: "60",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "1"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "1"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1_4134"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "3"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "1.5"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect1_dropShadow_1_4134",
                                    result: "effect2_dropShadow_1_4134"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "7"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "2"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect2_dropShadow_1_4134",
                                    result: "effect3_dropShadow_1_4134"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "12"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "2.5"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect3_dropShadow_1_4134",
                                    result: "effect4_dropShadow_1_4134"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect4_dropShadow_1_4134",
                                    result: "shape"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint0_linear_1_4134",
                            x1: "25.8516",
                            y1: "21.5829",
                            x2: "36.8771",
                            y2: "26.207",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    stopColor: "#249361"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#3ECF8E"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint1_linear_1_4134",
                            x1: "20.9634",
                            y1: "14.8902",
                            x2: "25.9916",
                            y2: "24.3555",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "1",
                                    stopOpacity: "0"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                            id: "clip0_1_4134",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                                width: "29.9027",
                                height: "31",
                                fill: "white",
                                transform: "translate(11.0469 6.5)"
                            })
                        })
                    ]
                })
            ]
        }),
    figma: ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            width: "52",
            height: "60",
            viewBox: "0 0 52 60",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    filter: "url(#filter0_dddd_1_4123)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z",
                            fill: "white"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                            clipPath: "url(#clip0_1_4123)",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("mask", {
                                    id: "mask0_1_4123",
                                    maskUnits: "userSpaceOnUse",
                                    x: "15",
                                    y: "7",
                                    width: "21",
                                    height: "30",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                        d: "M35.875 7H15.875V37H35.875V7Z",
                                        fill: "white"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                    mask: "url(#mask0_1_4123)",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            d: "M20.875 37.0001C23.635 37.0001 25.875 34.7601 25.875 32.0001V27.0001H20.875C18.115 27.0001 15.875 29.2401 15.875 32.0001C15.875 34.7601 18.115 37.0001 20.875 37.0001Z",
                                            fill: "#0ACF83"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            d: "M15.875 21.9999C15.875 19.2399 18.115 16.9999 20.875 16.9999H25.875V26.9999H20.875C18.115 26.9999 15.875 24.7599 15.875 21.9999Z",
                                            fill: "#A259FF"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            d: "M15.875 12C15.875 9.24 18.115 7 20.875 7H25.875V17H20.875C18.115 17 15.875 14.76 15.875 12Z",
                                            fill: "#F24E1E"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            d: "M25.875 7H30.875C33.635 7 35.875 9.24 35.875 12C35.875 14.76 33.635 17 30.875 17H25.875V7Z",
                                            fill: "#FF7262"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            d: "M35.875 21.9999C35.875 24.7599 33.635 26.9999 30.875 26.9999C28.115 26.9999 25.875 24.7599 25.875 21.9999C25.875 19.2399 28.115 16.9999 30.875 16.9999C33.635 16.9999 35.875 19.2399 35.875 21.9999Z",
                                            fill: "#1ABCFE"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                            id: "filter0_dddd_1_4123",
                            x: "0",
                            y: "0",
                            width: "52",
                            height: "60",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "1"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "1"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1_4123"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "3"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "1.5"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect1_dropShadow_1_4123",
                                    result: "effect2_dropShadow_1_4123"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "7"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "2"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect2_dropShadow_1_4123",
                                    result: "effect3_dropShadow_1_4123"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                                    dy: "12"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                                    stdDeviation: "2.5"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "effect3_dropShadow_1_4123",
                                    result: "effect4_dropShadow_1_4123"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect4_dropShadow_1_4123",
                                    result: "shape"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                            id: "clip0_1_4123",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                                width: "20.25",
                                height: "30",
                                fill: "white",
                                transform: "translate(15.875 7)"
                            })
                        })
                    ]
                })
            ]
        })
};

// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/SlidersHorizontal.es.js
var SlidersHorizontal_es = __webpack_require__(58073);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/LinkBreak.es.js + 1 modules
var LinkBreak_es = __webpack_require__(3252);
;// ./src/lib/salesforce-api.ts

const generateSalesforceAuthUrl = (userId)=>{
    const baseUrl = 'https://login.salesforce.com/services/oauth2/authorize';
    const params = new URLSearchParams({
        response_type: 'code',
        client_id: envs/* NEXT_PUBLIC_SALESFORCE_CLIENT_ID */.iG || '',
        redirect_uri: "".concat(envs/* NEXT_PUBLIC_NINJA_TOKEN_API_URL */.Uf, "/auth/salesforce"),
        scope: 'api refresh_token',
        state: "".concat(window.location.origin).concat(window.location.pathname, "?user_id=").concat(userId, "&nonce=").concat(crypto.randomUUID())
    });
    return "".concat(baseUrl, "?").concat(params.toString());
};
const initiateSalesforceAuth = (userId)=>{
    const authUrl = generateSalesforceAuthUrl(userId);
    window.location.href = authUrl;
};

// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/GoogleLogo.es.js + 1 modules
var GoogleLogo_es = __webpack_require__(49898);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/FacebookLogo.es.js + 1 modules
var FacebookLogo_es = __webpack_require__(74709);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/AmazonLogo.es.js + 1 modules
var AmazonLogo_es = __webpack_require__(17381);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/AppleLogo.es.js + 1 modules
var AppleLogo_es = __webpack_require__(51178);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Plug.es.js + 1 modules
var Plug_es = __webpack_require__(36822);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Envelope.es.js + 1 modules
var Envelope_es = __webpack_require__(64082);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Calendar.es.js + 1 modules
var Calendar_es = __webpack_require__(74350);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/File.es.js + 1 modules
var File_es = __webpack_require__(51296);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Table.es.js + 1 modules
var Table_es = __webpack_require__(90677);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Cloud.es.js + 1 modules
var Cloud_es = __webpack_require__(57129);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/ChatCircle.es.js + 1 modules
var ChatCircle_es = __webpack_require__(80251);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/SlackLogo.es.js + 1 modules
var SlackLogo_es = __webpack_require__(70911);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/PaintBrush.es.js + 1 modules
var PaintBrush_es = __webpack_require__(2039);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Folder.es.js
var Folder_es = __webpack_require__(31429);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/LinkedinLogo.es.js + 1 modules
var LinkedinLogo_es = __webpack_require__(13523);
;// ./src/gen/token-api/models/oAuthProvider.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * NinjaTech Token Service
 * OpenAPI spec version: 0.1.0
 */ // eslint-disable-next-line @typescript-eslint/no-redeclare
const OAuthProvider = {
    Google: 'Google',
    Facebook: 'Facebook',
    Amazon: 'Amazon',
    Apple: 'Apple',
    Github: 'Github',
    NinjaApi: 'NinjaApi',
    Salesforce: 'Salesforce'
};

;// ./src/components/thread/chat-input/components/OAuthProviderSelector/constants.ts


// Extended OAuth providers for MCP integrations
// These will be stored in AWS Secrets Manager under OAuthProviderApiKey
const ExtendedOAuthProvider = {
    // Google Services (excluding 'Google' which is already in OAuthProvider)
    Gmail: 'Gmail',
    GoogleCalendar: 'GoogleCalendar',
    GoogleDocs: 'GoogleDocs',
    GoogleSheets: 'GoogleSheets',
    GoogleDrive: 'GoogleDrive',
    // Business & Productivity
    Salesforce: 'Salesforce',
    Asana: 'Asana',
    Airtable: 'Airtable',
    Monday: 'Monday',
    HubSpot: 'HubSpot',
    Slack: 'Slack',
    // Design & Creative
    Figma: 'Figma',
    Canva: 'Canva',
    // Storage & File
    Dropbox: 'Dropbox',
    OneDrive: 'OneDrive',
    // Communication & Scheduling
    Calendly: 'Calendly',
    Discord: 'Discord',
    LinkedIn: 'LinkedIn',
    // Financial & Accounting
    QuickBooks: 'QuickBooks',
    Xero: 'Xero',
    Moneybird: 'Moneybird',
    // Cloud & Infrastructure
    MicrosoftAzure: 'MicrosoftAzure'
};
// Map providers to icons (using fallback icons where specific logos aren't available)
const PROVIDER_ICONS = {
    // Existing providers
    Google: GoogleLogo_es/* GoogleLogoIcon */.Y,
    Facebook: FacebookLogo_es/* FacebookLogoIcon */.Z,
    Amazon: AmazonLogo_es/* AmazonLogoIcon */.t,
    Apple: AppleLogo_es/* AppleLogoIcon */.F,
    Github: GithubLogo_es/* GithubLogoIcon */.y,
    NinjaApi: Plug_es/* PlugIcon */.g,
    // Extended providers - Google Services
    Gmail: Envelope_es/* EnvelopeIcon */.u,
    GoogleCalendar: Calendar_es/* CalendarIcon */.C,
    GoogleDocs: File_es/* FileIcon */.o,
    GoogleSheets: Table_es/* TableIcon */.K,
    GoogleDrive: GoogleDriveLogo_es/* GoogleDriveLogoIcon */.y,
    // Business & Productivity
    Salesforce: Cloud_es/* CloudIcon */.h,
    Asana: ChatCircle_es/* ChatCircleIcon */.c,
    Airtable: Table_es/* TableIcon */.K,
    Monday: Calendar_es/* CalendarIcon */.C,
    HubSpot: ChatCircle_es/* ChatCircleIcon */.c,
    Slack: SlackLogo_es/* SlackLogoIcon */.n,
    // Design & Creative
    Figma: PaintBrush_es/* PaintBrushIcon */.A,
    Canva: PaintBrush_es/* PaintBrushIcon */.A,
    // Storage & File
    Dropbox: Folder_es/* FolderIcon */.sj,
    OneDrive: Cloud_es/* CloudIcon */.h,
    // Communication & Scheduling
    Calendly: Calendar_es/* CalendarIcon */.C,
    Discord: ChatCircle_es/* ChatCircleIcon */.c,
    LinkedIn: LinkedinLogo_es/* LinkedinLogoIcon */.$,
    // Financial & Accounting
    QuickBooks: File_es/* FileIcon */.o,
    Xero: File_es/* FileIcon */.o,
    Moneybird: File_es/* FileIcon */.o,
    // Cloud & Infrastructure
    MicrosoftAzure: Cloud_es/* CloudIcon */.h
};
// Provider display names
const PROVIDER_DISPLAY_NAMES = {
    // Existing
    Google: 'Google',
    Facebook: 'Facebook',
    Amazon: 'Amazon',
    Apple: 'Apple',
    Github: 'GitHub',
    NinjaApi: 'Ninja API',
    // Extended - Google Services
    Gmail: 'Gmail',
    GoogleCalendar: 'Google Calendar',
    GoogleDocs: 'Google Docs',
    GoogleSheets: 'Google Sheets',
    GoogleDrive: 'Google Drive',
    // Business & Productivity
    Salesforce: 'Salesforce',
    Asana: 'Asana',
    Airtable: 'Airtable',
    Monday: 'Monday.com',
    HubSpot: 'HubSpot',
    Slack: 'Slack',
    // Design & Creative
    Figma: 'Figma',
    Canva: 'Canva',
    // Storage & File
    Dropbox: 'Dropbox',
    OneDrive: 'OneDrive',
    // Communication & Scheduling
    Calendly: 'Calendly',
    Discord: 'Discord',
    LinkedIn: 'LinkedIn',
    // Financial & Accounting
    QuickBooks: 'QuickBooks',
    Xero: 'Xero',
    Moneybird: 'Moneybird',
    // Cloud & Infrastructure
    MicrosoftAzure: 'Microsoft Azure'
};
// Provider descriptions
const PROVIDER_DESCRIPTIONS = {
    // Existing
    Google: 'Access your Google account and services.',
    Facebook: 'Connect to your Facebook profile and data.',
    Amazon: 'Access your Amazon account and services.',
    Apple: 'Sign in with your Apple ID.',
    Github: 'Access your GitHub repositories and code.',
    NinjaApi: 'Connect to Ninja API services.',
    // Extended - Google Services
    Gmail: 'Read, send, and manage your emails.',
    GoogleCalendar: 'Access and manage your calendar events.',
    GoogleDocs: 'Create and edit documents.',
    GoogleSheets: 'Create and edit spreadsheets.',
    GoogleDrive: 'Access and manage your files and folders.',
    // Business & Productivity
    Salesforce: 'Access your CRM data and manage customer relationships.',
    Asana: 'Manage your projects, tasks, and workflows.',
    Airtable: 'Access and manage your databases and spreadsheets.',
    Monday: 'Collaborate on projects and manage work.',
    HubSpot: 'Access your marketing, sales, and service data.',
    Slack: 'Search messages, summarize discussions, and extract action items.',
    // Design & Creative
    Figma: 'Access your design files and collaborate on projects.',
    Canva: 'Create and edit designs and graphics.',
    // Storage & File
    Dropbox: 'Access and manage your cloud storage files.',
    OneDrive: 'Access your Microsoft cloud storage and files.',
    // Communication & Scheduling
    Calendly: 'Manage your scheduling and appointments.',
    Discord: 'Access your servers and messages.',
    LinkedIn: 'Connect with your professional network.',
    // Financial & Accounting
    QuickBooks: 'Manage your accounting and finances.',
    Xero: 'Access your accounting data and reports.',
    Moneybird: 'Manage invoices and financial administration.',
    // Cloud & Infrastructure
    MicrosoftAzure: 'Access your cloud infrastructure and services.'
};
// Combined list of all providers (existing + extended)
const ALL_PROVIDERS = [
    ...Object.values(OAuthProvider),
    ...Object.values(ExtendedOAuthProvider)
];
// Providers to show in dropdown (GitHub, Google Drive, Slack, Figma)
const VISIBLE_PROVIDERS = [
    OAuthProvider.Github,
    ExtendedOAuthProvider.Salesforce
];
// Provider configuration page URLs
const PROVIDER_CONFIG_URLS = {
    [OAuthProvider.Github]: 'https://github.com/settings/installations',
    [ExtendedOAuthProvider.GoogleDrive]: 'https://myaccount.google.com/permissions',
    [ExtendedOAuthProvider.Salesforce]: 'https://login.salesforce.com/lightning/setup/ConnectedApplication/home',
    [ExtendedOAuthProvider.Slack]: 'https://slack.com/apps/manage',
    [ExtendedOAuthProvider.Figma]: 'https://www.figma.com/settings'
};

// EXTERNAL MODULE: ./src/components/thread/chat-input/components/OAuthConnectModal/OAuthConnectModal.module.scss
var OAuthConnectModal_module = __webpack_require__(40171);
var OAuthConnectModal_module_default = /*#__PURE__*/__webpack_require__.n(OAuthConnectModal_module);
;// ./src/components/thread/chat-input/components/OAuthConnectModal/OAuthConnectModal.tsx















const OAuthConnectModal = (param)=>{
    let { isOpen, onClose, provider, onConnect } = param;
    const [isConnecting, setIsConnecting] = (0,react.useState)(false);
    const [isDisconnecting, setIsDisconnecting] = (0,react.useState)(false);
    const { user: userId } = (0,AuthProvider/* useAuth */.A)();
    const { data: { providers: availableProviders = [] } = {}, refetch } = (0,tokens_gen/* useGetAvailableProviders */.PS)({
        user_id: userId
    }, {
        query: {
            enabled: !!userId
        }
    });
    if (!provider) return null;
    const Icon = PROVIDER_ICONS[provider];
    const displayName = PROVIDER_DISPLAY_NAMES[provider];
    const description = PROVIDER_DESCRIPTIONS[provider];
    const isConnected = availableProviders.some((p)=>p.provider_id === provider);
    const handleConnect = async ()=>{
        setIsConnecting(true);
        try {
            if (provider === 'Github') {
                (0,github_api/* initiateGitHubAuth */.b)(userId);
                return;
            }
            if (provider === 'Salesforce') {
                initiateSalesforceAuth(userId);
                return;
            }
            await onConnect(provider);
        } finally{
            setIsConnecting(false);
        }
    };
    const handleDisconnect = async ()=>{
        setIsDisconnecting(true);
        try {
            await (0,tokens_gen/* revokeAccess */.NE)({
                user_id: userId,
                provider_id: provider
            });
            await refetch();
            dist/* toast */.oR.success("Disconnected from ".concat(displayName));
        } catch (e) {
            dist/* toast */.oR.error('Failed to disconnect. Please try again.');
        } finally{
            setIsDisconnecting(false);
        }
    };
    const handleConfigure = ()=>{
        const configUrl = PROVIDER_CONFIG_URLS[provider];
        if (configUrl) {
            window.open(configUrl, '_blank', 'noopener,noreferrer');
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.lG, {
        open: isOpen,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogContent */.Cf, {
            hidecloseicon: false,
            className: (OAuthConnectModal_module_default()).root,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogHeader */.c7, {
                    className: (OAuthConnectModal_module_default()).header,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (OAuthConnectModal_module_default()).iconWrapper,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                                size: constants/* SVG_SIZE_L */.uUe,
                                weight: "fill",
                                className: (OAuthConnectModal_module_default()).icon
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (OAuthConnectModal_module_default()).titleWrapper,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogTitle */.L3, {
                                    className: (OAuthConnectModal_module_default()).title,
                                    children: displayName
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogDescription */.rr, {
                                    className: (OAuthConnectModal_module_default()).description,
                                    children: description
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (OAuthConnectModal_module_default()).details,
                    children: [
                        (isConnecting || isDisconnecting) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (OAuthConnectModal_module_default()).loaderOverlay,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SpinnerSimple/* SpinnerSimple */.c, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (OAuthConnectModal_module_default()).detailRow,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: (OAuthConnectModal_module_default()).detailLabel,
                                    children: "Connector type"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: (OAuthConnectModal_module_default()).detailValue,
                                    children: "MCP"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (OAuthConnectModal_module_default()).detailRow,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: (OAuthConnectModal_module_default()).detailLabel,
                                    children: "Built by"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: (OAuthConnectModal_module_default()).detailValue,
                                    children: displayName
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (OAuthConnectModal_module_default()).detailRow,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: (OAuthConnectModal_module_default()).detailLabel,
                                    children: "Website"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    href: "https://".concat(provider.toLowerCase(), ".com"),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: (OAuthConnectModal_module_default()).websiteLink,
                                    children: [
                                        provider.toLowerCase(),
                                        ".com",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowSquareOut_es/* ArrowSquareOutIcon */.k, {
                                            size: constants/* SVG_SIZE_M */.ng3,
                                            weight: "regular"
                                        })
                                    ]
                                })
                            ]
                        }),
                        isConnected ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
                                        color: "transparent",
                                        disabled: isDisconnecting,
                                        className: (OAuthConnectModal_module_default()).connectedButton,
                                        size: "medium",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: (OAuthConnectModal_module_default()).greenDot
                                            }),
                                            "Connected",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(csr_CaretDown_es/* CaretDownIcon */.b, {
                                                size: constants/* SVG_SIZE_M */.ng3,
                                                weight: "regular"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuContent */.SQ, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onClick: handleConfigure,
                                            className: (OAuthConnectModal_module_default()).menuItem,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(SlidersHorizontal_es/* SlidersHorizontalIcon */.o, {
                                                    size: constants/* SVG_SIZE_M */.ng3
                                                }),
                                                "Configure in ",
                                                displayName
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */._2, {
                                            onClick: handleDisconnect,
                                            disabled: isDisconnecting,
                                            className: (OAuthConnectModal_module_default()).menuItemDisconnect,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(LinkBreak_es/* LinkBreakIcon */.h, {
                                                    size: constants/* SVG_SIZE_M */.ng3
                                                }),
                                                isDisconnecting ? 'Disconnecting...' : 'Disconnect'
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                            color: "highlight",
                            onClick: handleConnect,
                            disabled: isConnecting,
                            className: (OAuthConnectModal_module_default()).connectButton,
                            size: "medium",
                            children: isConnecting ? 'Connecting...' : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Plus_es/* PlusIcon */.c, {
                                        size: constants/* SVG_SIZE_M */.ng3,
                                        weight: "regular"
                                    }),
                                    "Connect"
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (OAuthConnectModal_module_default()).overviewSection,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                            className: (OAuthConnectModal_module_default()).overviewTitle,
                            children: "Overview"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            className: (OAuthConnectModal_module_default()).overviewText,
                            children: [
                                "Connect your ",
                                displayName,
                                " account to enable ",
                                constants/* PROJECT_NAME */.cbb,
                                " to access and work with your data. You can disconnect this integration at any time from your account settings."
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

;// ./src/components/thread/chat-input/components/OAuthConnectModal/index.ts


// EXTERNAL MODULE: ./src/components/thread/chat-input/components/OAuthProviderSelector/OAuthProviderSelector.module.scss
var OAuthProviderSelector_module = __webpack_require__(33387);
var OAuthProviderSelector_module_default = /*#__PURE__*/__webpack_require__.n(OAuthProviderSelector_module);
;// ./src/components/thread/chat-input/components/OAuthProviderSelector/OAuthProviderSelector.tsx













const OAuthProviderSelector = (param)=>{
    let { disabled = false, onProviderSelect } = param;
    var _providersData_providers;
    const [isOpen, setIsOpen] = (0,react.useState)(false);
    const [selectedProvider, setSelectedProvider] = (0,react.useState)(null);
    const { user } = (0,AuthProvider/* useAuth */.A)();
    const { data: providersData } = (0,tokens_gen/* useGetAvailableProviders */.PS)({
        user_id: user
    }, {
        query: {
            enabled: !!user
        }
    });
    const connectedProviders = new Set((providersData === null || providersData === void 0 ? void 0 : (_providersData_providers = providersData.providers) === null || _providersData_providers === void 0 ? void 0 : _providersData_providers.map((p)=>p.provider_id)) || []);
    const hasConnectedProviders = connectedProviders.size > 0;
    const handleProviderClick = (provider)=>{
        setSelectedProvider(provider);
        setIsOpen(false);
    };
    const handleConnect = async (provider)=>{
        onProviderSelect === null || onProviderSelect === void 0 ? void 0 : onProviderSelect(provider);
        setSelectedProvider(null);
    };
    const handleCloseModal = ()=>{
        setSelectedProvider(null);
    };
    const handleAddConnectorsClick = ()=>{
        // TODO: Implement navigation to full connectors list/modal
        setIsOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
                open: isOpen,
                onOpenChange: setIsOpen,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                        asChild: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
                            disabled: disabled,
                            size: "small",
                            color: "transparent",
                            className: classnames_default()((OAuthProviderSelector_module_default()).trigger, {
                                [(OAuthProviderSelector_module_default()).disabled]: disabled,
                                [(OAuthProviderSelector_module_default()).connected]: hasConnectedProviders
                            }),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(csr_PlugsConnected_es/* PlugsConnectedIcon */.w, {
                                    size: constants/* SVG_SIZE_M */.ng3,
                                    className: (OAuthProviderSelector_module_default()).icon
                                }),
                                "Connect",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(csr_CaretDown_es/* CaretDownIcon */.b, {
                                    size: constants/* SVG_SIZE_M */.ng3,
                                    className: (OAuthProviderSelector_module_default()).icon
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuContent */.SQ, {
                        children: [
                            VISIBLE_PROVIDERS.map((provider)=>{
                                const Icon = PROVIDER_ICONS[provider];
                                const displayName = PROVIDER_DISPLAY_NAMES[provider];
                                const isConnected = connectedProviders.has(provider);
                                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */._2, {
                                    onClick: ()=>handleProviderClick(provider),
                                    className: (OAuthProviderSelector_module_default()).menuItem,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                                            size: constants/* SVG_SIZE_M */.ng3,
                                            className: (OAuthProviderSelector_module_default()).icon
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: (OAuthProviderSelector_module_default()).providerName,
                                            children: displayName
                                        }),
                                        isConnected ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: (OAuthProviderSelector_module_default()).connectedLabel,
                                            children: "Connected"
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: (OAuthProviderSelector_module_default()).label,
                                            children: "Connect"
                                        })
                                    ]
                                }, provider);
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (OAuthProviderSelector_module_default()).divider
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */._2, {
                                onClick: handleAddConnectorsClick,
                                className: (OAuthProviderSelector_module_default()).menuItem,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Plus_es/* PlusIcon */.c, {
                                        size: constants/* SVG_SIZE_M */.ng3,
                                        className: (OAuthProviderSelector_module_default()).icon
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (OAuthProviderSelector_module_default()).providerName,
                                        children: "Add connectors"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: (OAuthProviderSelector_module_default()).iconStack,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: (OAuthProviderSelector_module_default()).iconBadge,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons.linear, {})
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: (OAuthProviderSelector_module_default()).iconBadge,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NotionLogo_es/* NotionLogoIcon */.M, {
                                                    size: 12,
                                                    weight: "fill"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: (OAuthProviderSelector_module_default()).iconBadge,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: (OAuthProviderSelector_module_default()).plusText,
                                                    children: "+50"
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)(OAuthConnectModal, {
                isOpen: !!selectedProvider,
                onClose: handleCloseModal,
                provider: selectedProvider,
                onConnect: handleConnect
            })
        ]
    });
};

;// ./src/components/thread/chat-input/components/OAuthProviderSelector/index.ts


;// ./src/components/thread/chat-input/message-input.tsx




























const COMMAND_INDENT_MAP = {
    [types/* DeepResearchCommands */.YR.FAST_RESEARCH]: 180,
    [types/* DeepCoderCommands */._V.FAST_CODER]: 160,
    [types/* ImageGeneratorCommand */.ac.GENERATOR]: 88,
    [types/* ChatCommand */.cz.CHAT]: 80,
    [types/* DeepCoderCommands */._V.COMPLEX_CODER]: 190,
    [types/* DeepCoderCommands */._V.STANDARD_CODER]: 128
};
const MessageInput = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { value, onChange, onSubmit, onClear, placeholder, loading, disabled, isAgentRunning, isAgentStopping, onStopAgent, isDraggingOver, uploadedFiles, fileInputRef, googleDriveInputRef, isUploading, sandboxId, threadId, setPendingFiles, setUploadedFiles, setIsUploading, hideAttachments = false, selectedModel, onModelChange, githubConfig, isLandingPage = false, landingPageAction, onResetCommand, isComputerPanelOpen, isNarrowWidth = false, isAttachmentDisabled } = param;
    const isMobile = (0,use_mobile/* useIsMobile */.a)();
    const isImageSettingsEnabled = true;
    const isInReactNativeWebView = (0,use_in_react_native_webview/* useInReactNativeWebView */.M)(true);
    const isConnectorEnabled = (0,esm/* useFeatureFlagEnabled */.Tp)('newConnector');
    const isMcpConnectorEnabled = (0,esm/* useFeatureFlagEnabled */.Tp)('mcpConnector');
    const { formattedDuration: runDuration, isRunning: timerIsRunning, startTimer, stopTimer, resetTimer } = useRunTimer();
    const overlayRef = react.useRef(null);
    const { isPromptLoading, isUndoImprovePromptAvailable, isImprovePromptDisabled, improvePrompt, undoImprovePrompt } = useImprovePrompt({
        inputRef: ref,
        inputValue: value,
        onInputChange: onChange
    });
    const { currentCommand } = (0,hooks/* usePromptCommandState */.M5)();
    const isImageGenerator = (0,utils/* isImageGeneratorCommand */.iU)(currentCommand);
    const isChat = (0,utils/* isChatCommand */.fP)(currentCommand);
    // Web search state
    const [webSearchEnabled, setWebSearchEnabled] = react.useState(false);
    // Construct GitHub config from props
    const constructedGithubConfig = react.useMemo(()=>{
        if (!githubConfig) return undefined;
        return githubConfig;
    }, [
        githubConfig
    ]);
    const textIndent = (0,react.useMemo)(()=>{
        var _COMMAND_INDENT_MAP_currentCommand;
        const commandLength = (_COMMAND_INDENT_MAP_currentCommand = COMMAND_INDENT_MAP[currentCommand]) !== null && _COMMAND_INDENT_MAP_currentCommand !== void 0 ? _COMMAND_INDENT_MAP_currentCommand : 0;
        const undoButtonLength = isUndoImprovePromptAvailable ? 34 : 0;
        if (commandLength && undoButtonLength) {
            return commandLength + undoButtonLength + 4; // gap
        }
        return commandLength + undoButtonLength;
    }, [
        currentCommand,
        isUndoImprovePromptAvailable
    ]);
    // Start/stop timer based on agent status
    (0,react.useEffect)(()=>{
        if (isAgentRunning) {
            startTimer();
        } else {
            stopTimer();
        }
    }, [
        isAgentRunning,
        startTimer,
        stopTimer
    ]);
    // force to have 2 rows when mounting
    (0,react.useLayoutEffect)(()=>{
        const textarea = ref;
        if (!textarea.current) return;
        textarea.current.style.height = '';
        textarea.current.rows = 2;
    }, []);
    (0,react.useEffect)(()=>{
        const textarea = ref;
        if (!textarea.current) return;
        const adjustHeight = ()=>{
            textarea.current.style.height = 'auto';
            const maxHeight = window.innerHeight / 2;
            const newHeight = Math.min(Math.max(textarea.current.scrollHeight, 24), maxHeight);
            textarea.current.style.height = "".concat(newHeight, "px");
        };
        adjustHeight();
        // Call it twice to ensure proper height calculation
        adjustHeight();
        window.addEventListener('resize', adjustHeight);
        return ()=>window.removeEventListener('resize', adjustHeight);
    }, [
        value,
        ref,
        textIndent
    ]);
    (0,react.useEffect)(()=>{
        const textarea = ref;
        if (currentCommand && textarea.current && overlayRef.current) {
            const st = textarea.current.scrollTop;
            overlayRef.current.style.transform = "translateY(".concat(-st, "px)");
            textarea.current.focus();
        }
    }, [
        currentCommand,
        ref
    ]);
    const handleKeyDown = (e)=>{
        if (!isMobile && e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            if ((value.trim() || uploadedFiles.length > 0) && !loading && (!disabled || isAgentRunning)) {
                onSubmit(e);
            }
        }
    };
    const handleScroll = (e)=>{
        const st = e.currentTarget.scrollTop;
        if (overlayRef.current) {
            overlayRef.current.style.transform = "translateY(".concat(-st, "px)");
        }
    };
    const attachmentProps = {
        loading,
        disabled: disabled || isPromptLoading,
        isAttachmentDisabled,
        isAgentRunning,
        isUploading,
        threadId,
        setPendingFiles,
        setUploadedFiles,
        setIsUploading,
        isImageGenerator
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col w-full h-auto gap-4 justify-between",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex gap-2 items-center px-2 pe-6 relative overflow-hidden",
                children: [
                    (!!currentCommand || isUndoImprovePromptAvailable) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        ref: overlayRef,
                        "aria-hidden": false,
                        className: "pointer-events-none absolute inset-0 overflow-hidden z-10 flex flex-row flex-nowrap justify-start items-start gap-1 pt-1 pl-2",
                        children: [
                            currentCommand && /*#__PURE__*/ (0,jsx_runtime.jsx)(CommandLabel, {
                                onClose: onResetCommand,
                                command: currentCommand
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(UndoPromptButton, {
                                showUndoPromptButton: isUndoImprovePromptAvailable,
                                isLoading: isPromptLoading,
                                handleUndo: undoImprovePrompt
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Textarea, {
                        ref: ref,
                        value: value,
                        onChange: onChange,
                        onKeyDown: handleKeyDown,
                        onScroll: handleScroll,
                        placeholder: currentCommand ? '' : placeholder,
                        className: (0,lib_utils.cn)('w-full bg-transparent dark:bg-transparent border-none shadow-none focus-visible:ring-0 px-2 py-1 text-base min-h-[40px] max-h-[50vh] overflow-y-auto resize-none [scrollbar-width:thin]  [scrollbar-color:rgb(121,130,134)_transparent]', isDraggingOver ? 'opacity-40' : '', isMobile ? 'max-h-[200px]' : ''),
                        disabled: loading || disabled && !isAgentRunning,
                        rows: 2,
                        style: {
                            textIndent
                        }
                    }),
                    (value === null || value === void 0 ? void 0 : value.length) > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                        shape: "round",
                        color: "transparent",
                        className: "!absolute right-1 top-1 !px-0",
                        onClick: onClear,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ssr_X_es/* XIcon */.u, {
                            size: constants/* SVG_SIZE_M */.ng3
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between mt-1 mx-1 mb-1 pr-2 gap-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                            !isLandingPage && !hideAttachments && /*#__PURE__*/ (0,jsx_runtime.jsx)(AttachmentDropdownButton, {
                                fileInputRef: fileInputRef,
                                googleDriveInputRef: googleDriveInputRef,
                                ...attachmentProps
                            }),
                            !isLandingPage && !isMcpConnectorEnabled && (isImageGenerator ? isImageSettingsEnabled && /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageSettingsSelector, {
                                isShort: isComputerPanelOpen
                            }) : !isInReactNativeWebView ? isConnectorEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectorSelector, {
                                disabled: disabled,
                                githubDisabled: !!currentCommand && !(0,utils/* isDeepCoderCommand */.V8)(currentCommand),
                                githubConfig: constructedGithubConfig,
                                webSearchEnabled: webSearchEnabled,
                                onWebSearchToggle: setWebSearchEnabled
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(GithubRepoBranchSelector, {
                                disabled: disabled || !!currentCommand && !(0,utils/* isDeepCoderCommand */.V8)(currentCommand),
                                selectedRepo: constructedGithubConfig.selectedRepo,
                                setSelectedRepo: constructedGithubConfig.setSelectedRepo,
                                selectedBranch: constructedGithubConfig.selectedBranch,
                                setSelectedBranch: constructedGithubConfig.setSelectedBranch,
                                selectedInstallationId: constructedGithubConfig.selectedInstallationId,
                                setSelectedInstallationId: constructedGithubConfig.setSelectedInstallationId,
                                isGithubContextFromThread: constructedGithubConfig.isGithubContextFromThread,
                                isNarrowWidth: isNarrowWidth
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonTryOnDesktop/* ButtonTryOnDesktop */.Vg, {
                                color: "secondary",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-gray-100 flex items-center justify-center bg-black rounded-full p-0.5",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GithubLogo_es/* GithubLogoIcon */.y, {
                                            size: constants/* SVG_SIZE_S */.lgH,
                                            weight: "fill"
                                        })
                                    }),
                                    !isMobile && constants/* GITHUB_CONSTANTS */.esR.GITHUB_LABEL
                                ]
                            })),
                            !isLandingPage && isMcpConnectorEnabled && /*#__PURE__*/ (0,jsx_runtime.jsx)(OAuthProviderSelector, {}),
                            isLandingPage && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                                        onClick: landingPageAction,
                                        shape: "round",
                                        color: "secondary",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paperclip_es/* PaperclipIcon */.A, {
                                            size: constants/* SVG_SIZE_M */.ng3
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
                                        onClick: landingPageAction,
                                        color: "secondary",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-gray-100 flex items-center justify-center bg-black rounded-full p-0.5",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GithubLogo_es/* GithubLogoIcon */.y, {
                                                    size: constants/* SVG_SIZE_S */.lgH,
                                                    weight: "fill"
                                                })
                                            }),
                                            !isMobile && constants/* GITHUB_CONSTANTS */.esR.GITHUB_LABEL
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-2 min-w-10",
                        children: [
                            !config/* config */.$W.IS_PRODUCTION && timerIsRunning && !isNarrowWidth && /*#__PURE__*/ (0,jsx_runtime.jsx)(RunTimer, {
                                duration: runDuration || ''
                            }),
                            !isLandingPage && /*#__PURE__*/ (0,jsx_runtime.jsx)(ImprovePromptButton, {
                                isPromptLoading: isPromptLoading,
                                isImprovePromptDisabled: isImprovePromptDisabled,
                                improvePrompt: improvePrompt,
                                undoImprovePrompt: undoImprovePrompt
                            }),
                            config/* shouldAllowModelSelection */.Ys && !isLandingPage && !isImageGenerator && !isChat && /*#__PURE__*/ (0,jsx_runtime.jsx)(ModelRadioSelector, {
                                selectedModel: selectedModel,
                                onModelChange: onModelChange,
                                isNarrowWidth: isNarrowWidth
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SubmitTrigger, {
                                isLoading: loading,
                                isAgentRunning: isAgentRunning,
                                isAgentStopping: isAgentStopping,
                                onStopAgent: onStopAgent,
                                onSubmit: onSubmit,
                                disabled: !value.trim() && !isAgentRunning || loading || isPromptLoading || disabled && !isAgentRunning
                            })
                        ]
                    })
                ]
            })
        ]
    });
});
MessageInput.displayName = 'MessageInput';

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(65229);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(3998);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 3 modules
var AnimatePresence = __webpack_require__(71408);
;// ./src/components/thread/chat-input/uploaded-file-display.tsx
/* __next_internal_client_entry_do_not_use__ UploadedFilesDisplay auto */ 





const UploadedFilesDisplay = (param)=>{
    let { uploadedFiles, sandboxId, onRemoveFile } = param;
    const formatFileSize = (bytes)=>{
        if (bytes < 1024) return "".concat(bytes, " B");
        if (bytes < 1024 * 1024) return "".concat((bytes / 1024).toFixed(1), " KB");
        return "".concat((bytes / (1024 * 1024)).toFixed(1), " MB");
    };
    if (uploadedFiles.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AnimatePresence/* AnimatePresence */.N, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.P.div, {
            initial: {
                opacity: 0,
                height: 0
            },
            animate: {
                opacity: 1,
                height: 'auto'
            },
            exit: {
                opacity: 0,
                height: 0
            },
            className: "mb-2 overflow-hidden",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex flex-wrap gap-1.5 max-h-20 overflow-y-auto px-3",
                children: uploadedFiles.map((file, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.P.div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.9
                        },
                        transition: {
                            duration: 0.15
                        },
                        className: (0,lib_utils.cn)('px-2 py-1 bg-muted rounded-md flex items-center gap-1.5 group text-sm', !sandboxId ? 'border-blue-200 dark:border-blue-800' : ''),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "truncate max-w-[120px] text-gray-700 dark:text-gray-300",
                                children: file.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: "text-xs text-gray-500 dark:text-gray-400 flex-shrink-0",
                                children: [
                                    "(",
                                    formatFileSize(file.size),
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                type: "button",
                                variant: "ghost",
                                size: "icon",
                                className: "h-4 w-4 rounded-full p-0 hover:bg-gray-200 dark:hover:bg-gray-700",
                                onClick: ()=>onRemoveFile(index),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(x/* default */.A, {
                                    className: "h-3 w-3"
                                })
                            })
                        ]
                    }, index))
            })
        })
    });
};

;// ./src/lib/utils/safe-local-storage.ts

const isBrowser = "object" !== 'undefined';
const safeSetItem = (key, value)=>{
    if (!isBrowser) {
        return;
    }
    try {
        window.sessionStorage.setItem(key, value);
    } catch (error) {
        if (false) {}
    }
};
const safeGetItem = (key)=>{
    if (!isBrowser) {
        return null;
    }
    try {
        return window.sessionStorage.getItem(key);
    } catch (error) {
        if (false) {}
        return null;
    }
};
const safeRemoveItem = (key)=>{
    if (!isBrowser) {
        return;
    }
    try {
        window.sessionStorage.removeItem(key);
    } catch (error) {
        if (false) {}
    }
};

;// ./src/hooks/use-model-selection.ts
/* __next_internal_client_entry_do_not_use__ useModelSelection auto */ 


const useModelSelection = ()=>{
    const [selectedModel, setSelectedModel] = (0,react.useState)(()=>{
        if (false) {}
        const model = window.sessionStorage.getItem(constants/* STORAGE_KEY_MODEL */.WYF);
        return !model || model === constants/* FLUX_1_1_PRO_MODEL_ID */.GmQ ? constants/* DEFAULT_MODEL_ID */.Skq : model;
    });
    const onModelChange = (0,react.useCallback)((value)=>{
        setSelectedModel(value);
        safeSetItem(constants/* STORAGE_KEY_MODEL */.WYF, value);
    }, []);
    (0,react.useEffect)(()=>{
        const handleStorage = (e)=>{
            if (e.key === constants/* STORAGE_KEY_MODEL */.WYF && typeof e.newValue === 'string') {
                setSelectedModel(e.newValue);
            }
        };
        window.addEventListener('storage', handleStorage);
        return ()=>window.removeEventListener('storage', handleStorage);
    }, []);
    return {
        selectedModel,
        onModelChange
    };
};

// EXTERNAL MODULE: ./src/components/thread/ChatInput/ChatInput.module.scss
var ChatInput_module = __webpack_require__(5150);
var ChatInput_module_default = /*#__PURE__*/__webpack_require__.n(ChatInput_module);
// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(20063);
// EXTERNAL MODULE: ./src/components/thread/chat-input/components/BackToNativeButton/BackToNativeButton.module.scss
var BackToNativeButton_module = __webpack_require__(66251);
var BackToNativeButton_module_default = /*#__PURE__*/__webpack_require__.n(BackToNativeButton_module);
;// ./src/components/thread/chat-input/components/BackToNativeButton/BackToNativeButton.tsx
/* __next_internal_client_entry_do_not_use__ BackToNativeButton auto */ 





const BackToNativeButton = (param)=>{
    let { disabled, smallButton, hide } = param;
    const isInReactNativeWebView = (0,use_in_react_native_webview/* useInReactNativeWebView */.M)(false);
    return isInReactNativeWebView && !hide && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (BackToNativeButton_module_default()).buttonContainer,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_Button/* Button */.$, {
            color: "secondary",
            size: smallButton ? 'small' : 'medium',
            onClick: ()=>{
                window.ReactNativeWebView.postMessage(JSON.stringify({
                    type: 'back-to-native'
                }));
            },
            className: (BackToNativeButton_module_default()).button,
            disabled: disabled,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Icon/* Icon */.I, {
                    type: "ninjaMainIcon",
                    size: constants/* SVG_SIZE_M */.ng3
                }),
                "Back to MyNinja"
            ]
        })
    });
};

;// ./src/components/thread/chat-input/components/BackToNativeButton/index.ts


// EXTERNAL MODULE: ./src/constants/models.ts
var models = __webpack_require__(66872);
// EXTERNAL MODULE: ./src/components/ExecutionModeSelector/components/ModeSelectorTrigger/ModeSelectorTrigger.module.scss
var ModeSelectorTrigger_module = __webpack_require__(95709);
var ModeSelectorTrigger_module_default = /*#__PURE__*/__webpack_require__.n(ModeSelectorTrigger_module);
;// ./src/components/ExecutionModeSelector/components/ModeSelectorTrigger/ModeSelectorTrigger.tsx









const ModeSelectorTrigger = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { isActive, isNarrowWidth = false, ...triggerProps } = param;
    const isMobile = (0,use_mobile/* useIsMobile */.a)();
    const { selectedExecutionMode } = (0,hooks/* useExecutionModeState */._F)();
    const { currentCommand } = (0,hooks/* usePromptCommandState */.M5)();
    const { queriesBalanceData } = (0,hooks/* useQueriesBalanceData */.G4)(currentCommand);
    var _queriesBalanceData_selectedExecutionMode;
    const { title, Icon, modelLabel } = (_queriesBalanceData_selectedExecutionMode = queriesBalanceData[selectedExecutionMode]) !== null && _queriesBalanceData_selectedExecutionMode !== void 0 ? _queriesBalanceData_selectedExecutionMode : {}; // {} for AgentExecutionMode.non_applicable
    if (!queriesBalanceData[selectedExecutionMode]) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
        ref: ref,
        color: isActive ? 'tertiary' : 'transparent',
        ...triggerProps,
        className: (ModeSelectorTrigger_module_default()).root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                size: constants/* SVG_SIZE_M */.ng3
            }),
            !isMobile && !isNarrowWidth && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: title
            }),
            (modelLabel === null || modelLabel === void 0 ? void 0 : modelLabel.infoLogo) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Icon/* Icon */.I, {
                type: modelLabel.infoLogo,
                size: constants/* SVG_SIZE_S */.lgH
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(csr_CaretDown_es/* CaretDownIcon */.b, {
                size: constants/* SVG_SIZE_S */.lgH
            })
        ]
    });
});
ModeSelectorTrigger.displayName = 'ModeSelectorTrigger';

;// ./src/components/ExecutionModeSelector/components/ModeSelectorTrigger/index.ts


// EXTERNAL MODULE: ./src/components/ExecutionModeSelector/components/ModeSelectorContainer/ModeSelectorContainer.module.scss
var ModeSelectorContainer_module = __webpack_require__(52777);
var ModeSelectorContainer_module_default = /*#__PURE__*/__webpack_require__.n(ModeSelectorContainer_module);
// EXTERNAL MODULE: ./src/components/ExecutionModeSelector/components/ModeSelectorItem/index.ts + 1 modules
var ModeSelectorItem = __webpack_require__(1200);
// EXTERNAL MODULE: ./src/gen/sn-api/models/index.ts + 31 modules
var sn_api_models = __webpack_require__(61330);
// EXTERNAL MODULE: ./src/components/ExecutionModeSelector/components/OnDemandBanner/index.ts + 1 modules
var OnDemandBanner = __webpack_require__(75489);
;// ./src/components/ExecutionModeSelector/components/ModeSelectorContainer/ModeSelectorContainer.tsx
/* __next_internal_client_entry_do_not_use__ ModeSelectorContainer auto */ 








const ModeSelectorContainer = (param)=>{
    let { onClose } = param;
    const { currentCommand } = (0,hooks/* usePromptCommandState */.M5)();
    const { queriesBalanceData, isLoading } = (0,hooks/* useQueriesBalanceData */.G4)(currentCommand);
    const { setExecutionMode } = (0,hooks/* useExecutionModeActions */.Ml)();
    const { selectedExecutionMode } = (0,hooks/* useExecutionModeState */._F)();
    const handleSelect = (mode)=>{
        if (selectedExecutionMode !== mode) {
            setExecutionMode(mode);
        }
        onClose();
    };
    const handleBannerClick = ()=>{
        onClose();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuContent */.SQ, {
        align: "end",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (ModeSelectorContainer_module_default()).root,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (ModeSelectorContainer_module_default()).title,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: (ModeSelectorContainer_module_default()).headerInfo,
                            children: "SuperNinja Autonomous Agent"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: (ModeSelectorContainer_module_default()).headerDescription,
                            children: "AI agent with its own virtual computer"
                        })
                    ]
                }),
                Object.entries(queriesBalanceData)// it's a temporary hardcode to hide disabled items in the research mode
                .filter((param)=>{
                    let [key] = param;
                    return !(currentCommand === types/* DeepResearchCommands */.YR.FAST_RESEARCH && key !== sn_api_models/* AgentExecutionMode */.Ff.fast);
                }).map((param)=>{
                    let [key, item] = param;
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ModeSelectorItem/* ModeSelectorItem */.a, {
                            isSelected: selectedExecutionMode === key,
                            isLoading: isLoading,
                            onSelect: ()=>handleSelect(key),
                            className: (ModeSelectorContainer_module_default()).selectorItem,
                            mode: key,
                            onClose: onClose,
                            ...item
                        })
                    }, key);
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(OnDemandBanner/* OnDemandBanner */.f, {
                    onClick: handleBannerClick
                })
            ]
        })
    });
};

;// ./src/components/ExecutionModeSelector/components/ModeSelectorContainer/index.ts


;// ./src/components/ExecutionModeSelector/ExecutionModeSelector.tsx
/* __next_internal_client_entry_do_not_use__ ExecutionModeSelector auto */ 





const ExecutionModeSelector = (param)=>{
    let { isNarrowWidth = false } = param;
    const [open, setOpen] = (0,react.useState)(false);
    const { isPaymentModalOpen } = (0,hooks/* usePaymentControlState */._s)();
    const handleClose = ()=>{
        setOpen(false);
    };
    (0,react.useEffect)(()=>{
        if (isPaymentModalOpen) setOpen(false);
    }, [
        isPaymentModalOpen
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
        open: open,
        onOpenChange: setOpen,
        withListener: true,
        withEvent: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                asChild: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ModeSelectorTrigger, {
                    "data-testid": "execution-mode-selector-button",
                    isActive: open,
                    isNarrowWidth: isNarrowWidth
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ModeSelectorContainer, {
                onClose: handleClose
            })
        ]
    });
};

;// ./src/components/ExecutionModeSelector/index.ts


// EXTERNAL MODULE: ./src/components/thread/chat-input/components/ImageModelSelector/SelectorButton/SelectorButton.module.scss
var SelectorButton_module = __webpack_require__(69529);
var SelectorButton_module_default = /*#__PURE__*/__webpack_require__.n(SelectorButton_module);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/CaretUp.es.js
var CaretUp_es = __webpack_require__(22325);
;// ./src/components/thread/chat-input/components/ImageModelSelector/SelectorButton/SelectorButton.tsx







const SelectorButton = /*#__PURE__*/ (0,react.forwardRef)(function SelectorButton(param, ref) {
    let { disabled, label, isActive, icon, IconComponent, className, ...triggerProps } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
        ref: ref,
        disabled: disabled,
        color: isActive ? 'tertiary' : 'transparent',
        ...triggerProps,
        className: className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (SelectorButton_module_default()).valueWrapper,
                children: [
                    icon && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (SelectorButton_module_default()).iconWrapper,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Icon/* Icon */.I, {
                            type: icon,
                            size: constants/* SVG_SIZE_S */.lgH
                        })
                    }),
                    IconComponent && /*#__PURE__*/ (0,jsx_runtime.jsx)(IconComponent, {
                        size: constants/* SVG_SIZE_S */.lgH
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: (SelectorButton_module_default()).label,
                        children: label
                    })
                ]
            }),
            isActive ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CaretUp_es/* CaretUpIcon */.S, {
                size: constants/* SVG_SIZE_S */.lgH
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(CaretDown_es/* CaretDownIcon */.b, {
                size: constants/* SVG_SIZE_S */.lgH
            })
        ]
    });
});

;// ./src/components/thread/chat-input/components/ImageModelSelector/SelectorButton/index.ts


// EXTERNAL MODULE: ./src/components/thread/chat-input/components/ImageModelSelector/ExternalModelItem/index.ts + 1 modules
var ExternalModelItem = __webpack_require__(26377);
// EXTERNAL MODULE: ./src/hooks/userHooks/useUserMetadata.ts
var useUserMetadata = __webpack_require__(47880);
// EXTERNAL MODULE: ./src/components/thread/chat-input/components/ImageModelSelector/utils.ts
var ImageModelSelector_utils = __webpack_require__(6334);
// EXTERNAL MODULE: ./src/components/thread/chat-input/components/ChatModelSelector/ChatModelSelector.module.scss
var ChatModelSelector_module = __webpack_require__(3135);
var ChatModelSelector_module_default = /*#__PURE__*/__webpack_require__.n(ChatModelSelector_module);
;// ./src/components/thread/chat-input/components/ChatModelSelector/ChatModelSelector.tsx
/* __next_internal_client_entry_do_not_use__ ChatModelSelector auto */ 












const ChatModelSelector = ()=>{
    const [open, setOpen] = (0,react.useState)(false);
    const { setting, updateSettings } = (0,useUserSettings/* useUserSettings */.Q)(settings/* ChatSettingKeys */.P3.CHAT_PRIMARY_MODEL);
    const { metadata } = (0,useUserMetadata/* useUserMetadata */.c)();
    const { openPaymentModal } = (0,hooks/* usePaymentControlActions */.WP)();
    const currentSelectedModel = setting === null || setting === void 0 ? void 0 : setting.value;
    const modelLabel = (0,ImageModelSelector_utils/* getModelDisplayName */.$L)({
        targetModel: currentSelectedModel,
        metadata
    });
    const handleUpgradeClick = ()=>{
        setOpen(false);
        openPaymentModal();
    };
    const modelItems = (0,react.useMemo)(()=>{
        // Only show models from user's settings when in chat mode
        return (0,ImageModelSelector_utils/* prepareModelsList */.sI)((setting === null || setting === void 0 ? void 0 : setting.options) || {}, metadata).map((item)=>{
            return {
                id: item.id,
                icon: item.iconName ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Icon/* Icon */.I, {
                    type: item.iconName,
                    size: constants/* SVG_SIZE_M */.ng3
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                title: item.title,
                selected: item.id === currentSelectedModel,
                availableIn: item.availableIn
            };
        }).filter((item)=>!item.id.startsWith('alias/ninjatech/'));
    }, [
        setting === null || setting === void 0 ? void 0 : setting.options,
        currentSelectedModel,
        metadata
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                asChild: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectorButton, {
                    isActive: open,
                    label: modelLabel === constants/* NINJA_AUTO_SELECT_NAME */.OHm ? constants/* NINJA_AUTO_SELECT_NAME_SHORT */.fWh : modelLabel,
                    icon: (0,ImageModelSelector_utils/* getModelIcon */.ZI)({
                        targetModel: currentSelectedModel,
                        metadata
                    }),
                    className: "min-w-5"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuContent */.SQ, {
                align: "end",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (ChatModelSelector_module_default()).root,
                    children: modelItems.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                            className: (ChatModelSelector_module_default()).modelItemContainer,
                            onSelect: ()=>{
                                if (!item.availableIn) {
                                    updateSettings(item.id);
                                }
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExternalModelItem/* ExternalModelItem */.g, {
                                ...item,
                                disabled: !!item.availableIn,
                                onUpgrade: handleUpgradeClick
                            })
                        }, item.id))
                })
            })
        ]
    });
};

;// ./src/components/thread/chat-input/components/ChatModelSelector/index.ts


// EXTERNAL MODULE: ./src/components/thread/chat-input/components/ImageModelSelector/ImageModelSelector.module.scss
var ImageModelSelector_module = __webpack_require__(72335);
var ImageModelSelector_module_default = /*#__PURE__*/__webpack_require__.n(ImageModelSelector_module);
;// ./src/components/thread/chat-input/components/ImageModelSelector/ImageModelSelector.tsx
/* __next_internal_client_entry_do_not_use__ ImageModelSelector auto */ 












const ImageModelSelector = ()=>{
    const [open, setOpen] = (0,react.useState)(false);
    const { setting, updateSettings } = (0,useUserSettings/* useUserSettings */.Q)(settings/* ImageSettingKeys */.wm.IMAGE_PRIMARY_MODEL);
    const { metadata } = (0,useUserMetadata/* useUserMetadata */.c)();
    const { openPaymentModal } = (0,hooks/* usePaymentControlActions */.WP)();
    const modelLabel = (0,ImageModelSelector_utils/* getModelDisplayName */.$L)({
        targetModel: setting === null || setting === void 0 ? void 0 : setting.value,
        metadata
    });
    const handleUpgradeClick = ()=>{
        setOpen(false);
        openPaymentModal();
    };
    const modelItems = (0,react.useMemo)(()=>{
        return (0,ImageModelSelector_utils/* prepareModelsList */.sI)((setting === null || setting === void 0 ? void 0 : setting.options) || {}, metadata).filter((item)=>item.id !== constants/* NINJA_AGENT_IMAGE_AUTO_MODEL */.BSx).map((item)=>{
            return {
                id: item.id,
                icon: item.iconName ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_Icon/* Icon */.I, {
                    type: item.iconName,
                    size: constants/* SVG_SIZE_M */.ng3
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                title: item.title,
                selected: item.id === (setting === null || setting === void 0 ? void 0 : setting.value),
                availableIn: item.availableIn
            };
        });
    }, [
        setting === null || setting === void 0 ? void 0 : setting.options,
        setting === null || setting === void 0 ? void 0 : setting.value,
        metadata
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                asChild: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectorButton, {
                    isActive: open,
                    label: modelLabel === constants/* NINJA_AUTO_SELECT_NAME */.OHm ? constants/* NINJA_AUTO_SELECT_NAME_SHORT */.fWh : modelLabel,
                    icon: (0,ImageModelSelector_utils/* getModelIcon */.ZI)({
                        targetModel: setting === null || setting === void 0 ? void 0 : setting.value,
                        metadata
                    }),
                    className: "min-w-5"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuContent */.SQ, {
                align: "end",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (ImageModelSelector_module_default()).root,
                    children: modelItems.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                            className: (ImageModelSelector_module_default()).modelItemContainer,
                            onSelect: ()=>{
                                if (!item.availableIn) {
                                    updateSettings(item.id);
                                }
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExternalModelItem/* ExternalModelItem */.g, {
                                ...item,
                                disabled: !!item.availableIn,
                                onUpgrade: handleUpgradeClick
                            })
                        }, item.id))
                })
            })
        ]
    });
};

;// ./src/components/thread/chat-input/components/ImageModelSelector/index.ts


// EXTERNAL MODULE: ./src/components/thread/chat-input/components/CreationSection/CreationSection.module.scss
var CreationSection_module = __webpack_require__(96599);
var CreationSection_module_default = /*#__PURE__*/__webpack_require__.n(CreationSection_module);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/Command.es.js + 1 modules
var Command_es = __webpack_require__(36869);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/AppWindow.es.js + 1 modules
var AppWindow_es = __webpack_require__(56050);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/Atom.es.js
var Atom_es = __webpack_require__(3762);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/Code.es.js
var Code_es = __webpack_require__(1194);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/ChatCircleText.es.js
var ChatCircleText_es = __webpack_require__(23834);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/Images.es.js
var Images_es = __webpack_require__(90655);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/Video.es.js
var Video_es = __webpack_require__(82750);
;// ./src/components/thread/chat-input/components/BuilderSelector/constants.ts


const COMMAND_LIST = [
    {
        title: 'General Agent',
        color: 'var(--nj-foreground-primary)',
        icon: Command_es/* CommandIcon */.t,
        cmd: null
    },
    {
        title: 'Agentic app builder',
        color: '#8A66FF',
        icon: AppWindow_es/* AppWindowIcon */.T,
        cmd: types/* AppBuilderCommand */.oF.AGENTIC_APP_BUILDER,
        tmpDisabled: true
    },
    {
        title: 'Deep Research',
        color: '#669EFF',
        icon: Atom_es/* AtomIcon */.t,
        cmd: types/* DeepResearchCommands */.YR.FAST_RESEARCH,
        shouldDisabledByTier: true
    },
    {
        title: 'Coder',
        color: '#E8AC9D',
        icon: Code_es/* CodeIcon */.l,
        cmd: types/* DeepCoderCommands */._V.FAST_CODER,
        shouldDisabledByTier: true
    },
    {
        title: 'Chat',
        color: '#71E0A9',
        icon: ChatCircleText_es/* ChatCircleTextIcon */.v,
        cmd: types/* ChatCommand */.cz.CHAT
    },
    {
        title: 'Image',
        color: '#F9CE6C',
        icon: Images_es/* ImagesIcon */.s,
        cmd: types/* ImageGeneratorCommand */.ac.GENERATOR
    },
    {
        title: 'Video',
        color: '#F2A1B5',
        icon: Video_es/* VideoIcon */.n,
        cmd: types/* VideoCommand */.$x.VIDEO,
        tmpDisabled: true
    }
];

// EXTERNAL MODULE: ./src/components/thread/chat-input/components/BuilderSelector/BuilderSelector.module.scss
var BuilderSelector_module = __webpack_require__(2611);
var BuilderSelector_module_default = /*#__PURE__*/__webpack_require__.n(BuilderSelector_module);
// EXTERNAL MODULE: ./src/components/thread/chat-input/components/BuilderSelector/BuilderTrigger/BuilderTrigger.module.scss
var BuilderTrigger_module = __webpack_require__(68800);
var BuilderTrigger_module_default = /*#__PURE__*/__webpack_require__.n(BuilderTrigger_module);
;// ./src/components/thread/chat-input/components/BuilderSelector/BuilderTrigger/BuilderTrigger.tsx
/* __next_internal_client_entry_do_not_use__ BuilderTrigger auto */ 







const BuilderTrigger = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { isActive, ...triggerProps } = param;
    const isMobile = (0,hooks/* useIsMobile */.al)();
    const { currentCommand } = (0,hooks/* usePromptCommandState */.M5)();
    const currentTitle = ()=>{
        if ((0,utils/* isDeepResearchCommand */.lN)(currentCommand)) return {
            title: 'Deep Research',
            color: '#669EFF',
            icon: Atom_es/* AtomIcon */.t
        };
        if ((0,utils/* isDeepCoderCommand */.V8)(currentCommand)) return {
            title: 'Coder',
            color: '#E8AC9D',
            icon: Code_es/* CodeIcon */.l
        };
        if ((0,utils/* isChatCommand */.fP)(currentCommand)) return {
            title: 'Chat',
            color: '#71E0A9',
            icon: ChatCircleText_es/* ChatCircleTextIcon */.v
        };
        if ((0,utils/* isImageGeneratorCommand */.iU)(currentCommand)) return {
            title: 'Image',
            color: '#F9CE6C',
            icon: Images_es/* ImagesIcon */.s
        };
        return {
            title: 'General Agent',
            color: 'var(--nj-foreground-primary)',
            icon: Command_es/* CommandIcon */.t
        };
    };
    const commandInfo = currentTitle();
    const CurrentIcon = commandInfo.icon;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
        ref: ref,
        color: isActive ? 'tertiary' : 'transparent',
        ...triggerProps,
        className: (BuilderTrigger_module_default()).root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (BuilderTrigger_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CurrentIcon, {
                    size: constants/* SVG_SIZE_M */.ng3,
                    color: commandInfo.color
                }),
                !isMobile && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: commandInfo.title
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CaretDown_es/* CaretDownIcon */.b, {
                    size: constants/* SVG_SIZE_M */.ng3
                })
            ]
        })
    });
});
BuilderTrigger.displayName = 'BuilderTrigger';

;// ./src/components/thread/chat-input/components/BuilderSelector/BuilderTrigger/index.ts


;// ./src/components/thread/chat-input/components/BuilderSelector/BuilderSelector.tsx
/* __next_internal_client_entry_do_not_use__ BuilderSelector auto */ 








const BuilderSelector = (param)=>{
    let { isLandingPage, landingPageAction, handleCommandChange, handleImageGenerator, handleChat } = param;
    const shouldShowUnavailableCommands = (0,esm/* useFeatureFlagEnabled */.Tp)('show-unavailable-commands');
    const { isFreeTier } = (0,hooks/* useGetUser */.be)();
    const isDisabledByTier = isFreeTier;
    const [open, setOpen] = (0,react.useState)(false);
    const handleSelect = (title)=>{
        if (isLandingPage) {
            landingPageAction === null || landingPageAction === void 0 ? void 0 : landingPageAction();
            return;
        }
        if (handleCommandChange) {
            handleCommandChange(title);
        }
        switch(title){
            case 'Image':
                handleImageGenerator();
                break;
            case 'Chat':
                handleChat();
                break;
            default:
                break;
        }
        setOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
        open: open,
        onOpenChange: setOpen,
        withListener: true,
        withEvent: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                asChild: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BuilderTrigger, {
                    isActive: open
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuContent */.SQ, {
                align: "start",
                className: "w-56",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuLabel */.lp, {
                        className: (BuilderSelector_module_default()).menuLabel,
                        children: "Select Command Type"
                    }),
                    COMMAND_LIST.map((command)=>{
                        if (shouldShowUnavailableCommands || !command.tmpDisabled) {
                            if (command.shouldDisabledByTier && isDisabledByTier) {
                                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItemTooltip */.xd, {
                                    disabled: true,
                                    tooltipContent: 'Available with upgrade',
                                    tooltipPosition: 'top',
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(command.icon, {
                                            size: constants/* SVG_SIZE_M */.ng3,
                                            color: command.color
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: command.title
                                        })
                                    ]
                                }, command.title);
                            } else {
                                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */._2, {
                                    onClick: ()=>!command.tmpDisabled && handleSelect(command.cmd),
                                    disabled: command.tmpDisabled,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(command.icon, {
                                            size: constants/* SVG_SIZE_M */.ng3,
                                            color: command.color
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: command.title
                                        })
                                    ]
                                }, command.title);
                            }
                        }
                    })
                ]
            })
        ]
    });
};

;// ./src/components/thread/chat-input/components/BuilderSelector/index.ts


// EXTERNAL MODULE: ./src/assets/icons/vscodeIcon.tsx
var vscodeIcon = __webpack_require__(73028);
// EXTERNAL MODULE: ./src/components/ui/TextareaSimple/index.tsx + 1 modules
var TextareaSimple = __webpack_require__(12328);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/UploadSimple.es.js + 1 modules
var UploadSimple_es = __webpack_require__(54281);
// EXTERNAL MODULE: ./src/lib/api.ts
var api = __webpack_require__(90960);
// EXTERNAL MODULE: ./src/hooks/use-sandbox-provider-selection.ts
var use_sandbox_provider_selection = __webpack_require__(92663);
// EXTERNAL MODULE: ./src/components/NinjaVSCodeModal/NinjaVSCodeModal.module.scss
var NinjaVSCodeModal_module = __webpack_require__(97473);
var NinjaVSCodeModal_module_default = /*#__PURE__*/__webpack_require__.n(NinjaVSCodeModal_module);
;// ./src/components/NinjaVSCodeModal/NinjaVSCodeModal.tsx
/* __next_internal_client_entry_do_not_use__ NinjaVSCodeModal auto */ 


















const NinjaVSCodeModal = (param)=>{
    let { isOpen, onClose } = param;
    const [projectName, setProjectName] = (0,react.useState)('');
    const [pendingFiles, setPendingFiles] = (0,react.useState)([]);
    const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
    const [selectedRepo, setSelectedRepo] = (0,react.useState)(null);
    const [selectedBranch, setSelectedBranch] = (0,react.useState)(null);
    const [selectedInstallationId, setSelectedInstallationId] = (0,react.useState)(null);
    const fileInputRef = (0,react.useRef)(null);
    const router = (0,navigation.useRouter)();
    const { handleBillingError } = (0,hooks_useBillingError/* useBillingError */.L)();
    const { selectedProvider: selectedSandboxProvider } = (0,use_sandbox_provider_selection/* useSandboxProviderSelection */.G)();
    const { refreshThreads } = (0,hooks/* useThreadList */._K)();
    const isContinueDisabled = (0,react.useMemo)(()=>!projectName.trim() || isSubmitting, [
        projectName,
        isSubmitting
    ]);
    const handleFileUpload = ()=>{
        var _fileInputRef_current;
        (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
    };
    const handleFileChange = (event)=>{
        if (!event.target.files || event.target.files.length === 0) return;
        const files = Array.from(event.target.files);
        // Filter files by size (using same logic as file-upload-handler)
        const filteredFiles = files.filter((file)=>{
            if (file.size > constants/* FILE_SIZE_LIMIT */.tcf * 1024 * 1024) {
                dist/* toast */.oR.error("File size exceeds ".concat(constants/* FILE_SIZE_LIMIT */.tcf, "MB limit: ").concat(file.name));
                return false;
            }
            return true;
        });
        setPendingFiles((prevFiles)=>[
                ...prevFiles,
                ...filteredFiles
            ]);
        filteredFiles.forEach((file)=>{
            dist/* toast */.oR.success("File attached: ".concat(file.name));
        });
        event.target.value = '';
    };
    const handleRemoveFile = (index)=>{
        setPendingFiles((prevFiles)=>prevFiles.filter((_, i)=>i !== index));
    };
    const handleClose = ()=>{
        setProjectName('');
        setPendingFiles([]);
        setSelectedRepo(null);
        setSelectedBranch(null);
        setSelectedInstallationId(null);
        onClose();
    };
    const handleSubmit = async ()=>{
        if (isContinueDisabled) return;
        setIsSubmitting(true);
        try {
            const formData = new FormData();
            // Add prompt with "/vs-code " prefix
            const promptWithPrefix = "/vs-code ".concat(projectName.trim());
            formData.append('prompt', promptWithPrefix);
            // Append files
            pendingFiles.forEach((file)=>{
                formData.append('files', file, file.name);
            });
            // Append GitHub repo/branch/installation if set
            if (selectedRepo) formData.append('github_repo', selectedRepo);
            if (selectedBranch) formData.append('github_branch', selectedBranch);
            if (selectedInstallationId) formData.append('github_installation_id', String(selectedInstallationId));
            formData.append('sandbox_provider', selectedSandboxProvider);
            // Default values for required fields
            formData.append('enable_thinking', String(false));
            formData.append('reasoning_effort', 'low');
            formData.append('enable_context_manager', String(true));
            const result = await (0,api/* initiateAgent */.fu)(formData);
            // Refresh threads list
            refreshThreads();
            if (result === null || result === void 0 ? void 0 : result.thread_id) {
                try {
                    const res = await (0,api/* getSandboxServiceUrl */.ab)({
                        threadId: result.thread_id,
                        service: 'vscode'
                    });
                    window.open(res.url, '_blank', 'noopener,noreferrer');
                } catch (error) {}
                router.push("/agents/".concat(result.thread_id));
                handleClose();
            } else {
                throw new Error('Agent initiation did not return a thread_id.');
            }
        } catch (error) {
            if (error instanceof types/* BillingError */.Ey) {
                handleBillingError({
                    message: error.detail.message || 'Monthly usage limit reached. Please upgrade your plan.',
                    message_to_user: error.detail.message_to_user,
                    currentUsage: error.detail.currentUsage,
                    limit: error.detail.limit,
                    subscription: error.detail.subscription || {
                        price_id: config/* config */.$W.SUBSCRIPTION_TIERS.FREE.priceId,
                        plan_name: 'Free'
                    },
                    code: error.detail.code,
                    bucket: error.detail.bucket
                });
                setIsSubmitting(false);
                return;
            }
            if (error instanceof types/* ConcurrencyError */.Yu) {
                setIsSubmitting(false);
                return;
            }
            main/* datadogLogs */.yf.logger.error('Error during submission process:', {}, error);
            const isConnectionError = error instanceof TypeError && error.message.includes('Failed to fetch');
            if (!config/* isLocalEnv */.NL || isConnectionError) {
                dist/* toast */.oR.error(error.message || 'An unexpected error occurred');
            }
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.lG, {
        open: isOpen,
        onOpenChange: handleClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogContent */.Cf, {
            className: "".concat((NinjaVSCodeModal_module_default()).root, " ").concat((NinjaVSCodeModal_module_default()).modalContent),
            hidecloseicon: false,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogTitle */.L3, {
                    className: (NinjaVSCodeModal_module_default()).title,
                    children: [
                        "".concat(constants/* MY_NINJA_PROJECT_NAME */.KI$, " Cline AI Studio"),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: (NinjaVSCodeModal_module_default()).description,
                            children: "Start coding instantly in VS Code + Cline within the AI's virtual machine. No setup required."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (NinjaVSCodeModal_module_default()).content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (NinjaVSCodeModal_module_default()).fieldGroup,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: (NinjaVSCodeModal_module_default()).fieldHeader,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: (NinjaVSCodeModal_module_default()).fieldLabel,
                                        children: "Name"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextareaSimple/* TextareaSimple */.p, {
                                    value: projectName,
                                    onChange: setProjectName,
                                    placeholder: "Describe your project",
                                    className: (NinjaVSCodeModal_module_default()).input,
                                    minRows: 1,
                                    maxRows: 3
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (NinjaVSCodeModal_module_default()).fieldGroup,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (NinjaVSCodeModal_module_default()).fieldHeader,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                            className: (NinjaVSCodeModal_module_default()).fieldLabel,
                                            children: "Files"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: (NinjaVSCodeModal_module_default()).optionalLabel,
                                            children: "Optional"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (NinjaVSCodeModal_module_default()).uploadSection,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
                                            color: "secondary",
                                            shape: "regular",
                                            onClick: handleFileUpload,
                                            disabled: isSubmitting,
                                            className: (NinjaVSCodeModal_module_default()).uploadButton,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(UploadSimple_es/* UploadSimple */.C, {
                                                    size: constants/* SVG_SIZE_M */.ng3
                                                }),
                                                "Upload"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            type: "file",
                                            ref: fileInputRef,
                                            className: (NinjaVSCodeModal_module_default()).hiddenInput,
                                            onChange: handleFileChange,
                                            multiple: true
                                        }),
                                        pendingFiles.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: (NinjaVSCodeModal_module_default()).filesList,
                                            children: pendingFiles.map((file, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: (NinjaVSCodeModal_module_default()).fileItem,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: (NinjaVSCodeModal_module_default()).fileName,
                                                            children: file.name
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                                                            color: "transparent",
                                                            shape: "regular",
                                                            onClick: ()=>handleRemoveFile(index),
                                                            className: (NinjaVSCodeModal_module_default()).removeButton,
                                                            children: "\xd7"
                                                        })
                                                    ]
                                                }, index))
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (NinjaVSCodeModal_module_default()).fieldGroup,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (NinjaVSCodeModal_module_default()).fieldHeader,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                            className: (NinjaVSCodeModal_module_default()).fieldLabel,
                                            children: "Repository"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: (NinjaVSCodeModal_module_default()).optionalLabel,
                                            children: "Optional"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: (NinjaVSCodeModal_module_default()).githubSelectorWrapper,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GithubRepoBranchSelector, {
                                        disabled: isSubmitting,
                                        selectedRepo: selectedRepo,
                                        setSelectedRepo: setSelectedRepo,
                                        selectedBranch: selectedBranch,
                                        setSelectedBranch: setSelectedBranch,
                                        selectedInstallationId: selectedInstallationId,
                                        setSelectedInstallationId: setSelectedInstallationId
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogFooter */.Es, {
                    className: (NinjaVSCodeModal_module_default()).footer,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
                        color: "highlight",
                        onClick: handleSubmit,
                        disabled: isContinueDisabled,
                        className: (NinjaVSCodeModal_module_default()).continueButton,
                        children: [
                            isSubmitting && /*#__PURE__*/ (0,jsx_runtime.jsx)(SpinnerSimple/* SpinnerSimple */.c, {
                                size: constants/* SVG_SIZE_M */.ng3
                            }),
                            "Continue"
                        ]
                    })
                })
            ]
        })
    });
};

;// ./src/components/NinjaVSCodeModal/index.ts


// EXTERNAL MODULE: ./src/components/VideoTutorials/components/TutorialPayer/index.ts + 4 modules
var TutorialPayer = __webpack_require__(26608);
;// ./src/components/NinjaStartVSCodeThreadButton/NinjaStartVSCodeThreadButton.tsx
/* __next_internal_client_entry_do_not_use__ NinjaStartVSCodeThreadButton auto */ 











const NinjaStartVSCodeThreadButton = (param)=>{
    let { smallButton, isLandingPage, landingPageAction } = param;
    const [isVisibleClineVideo, setIsVisibleClineVideo] = (0,react.useState)(false);
    const { isVisible, onVisibilitySet, onVisibilityRemove } = (0,hooks/* useVisible */.MI)();
    const { isFreeTier } = (0,hooks/* useGetUser */.be)();
    const isMobile = (0,hooks/* useIsMobile */.al)();
    const params = (0,navigation.useParams)();
    const threadId = params === null || params === void 0 ? void 0 : params.threadId;
    const handleOpenInVsCode = (0,react.useCallback)(async ()=>{
        try {
            if (!!threadId) {
                const res = await (0,api/* getSandboxServiceUrl */.ab)({
                    threadId: threadId,
                    service: 'vscode'
                });
                window.open(res.url, '_blank', 'noopener,noreferrer');
            } else {
                onVisibilitySet();
            }
        } catch (error) {}
    }, [
        threadId
    ]);
    const handleClick = ()=>{
        if (isFreeTier) {
            setIsVisibleClineVideo(true);
            return;
        }
        if (isLandingPage) {
            landingPageAction === null || landingPageAction === void 0 ? void 0 : landingPageAction();
        } else {
            handleOpenInVsCode();
        }
    };
    const clineButton = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
        color: "transparent",
        size: smallButton ? 'small' : 'medium',
        onClick: handleClick,
        ...isFreeTier && {
            tooltipContent: 'Upgrade to access VS code with Cline IDE'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(vscodeIcon/* VSCodeIcon */.W, {
                className: "h-5 w-5",
                variant: "secondary"
            }),
            "Ninja Cline ",
            isMobile ? '' : 'AI Studio'
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            isMobile ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonTryOnDesktop/* ButtonTryOnDesktop */.Vg, {
                asChild: true,
                children: clineButton
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: clineButton
            }),
            isVisibleClineVideo && /*#__PURE__*/ (0,jsx_runtime.jsx)(TutorialPayer/* TutorialPayerUpgradeButton */.O, {
                url: constants/* NINJA_CLINE_TUTORIAL_URL */.Ajp,
                onClose: ()=>setIsVisibleClineVideo(false)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NinjaVSCodeModal, {
                isOpen: isVisible,
                onClose: onVisibilityRemove
            })
        ]
    });
};

;// ./src/components/NinjaStartVSCodeThreadButton/index.ts


;// ./src/components/thread/chat-input/components/CreationSection/CreationSection.tsx
/* __next_internal_client_entry_do_not_use__ CreationSection auto */ 








const CreationSection = (param)=>{
    let { isLandingPage = false, landingPageAction, handleCommandChange, handleImageGenerator, handleChat } = param;
    const { currentCommand } = (0,hooks/* usePromptCommandState */.M5)();
    const isImageGenerator = (0,utils/* isImageGeneratorCommand */.iU)(currentCommand);
    const isChat = (0,utils/* isChatCommand */.fP)(currentCommand);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (CreationSection_module_default()).root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BuilderSelector, {
                isLandingPage: isLandingPage,
                landingPageAction: landingPageAction,
                handleCommandChange: handleCommandChange,
                handleImageGenerator: handleImageGenerator,
                handleChat: handleChat
            }),
            !isLandingPage && !isImageGenerator && !isChat && /*#__PURE__*/ (0,jsx_runtime.jsx)(ExecutionModeSelector, {}),
            !isLandingPage && isChat && /*#__PURE__*/ (0,jsx_runtime.jsx)(ChatModelSelector, {}),
            !isLandingPage && isImageGenerator && /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageModelSelector, {}),
            (0,utils/* isDeepCoderCommand */.V8)(currentCommand) && /*#__PURE__*/ (0,jsx_runtime.jsx)(NinjaStartVSCodeThreadButton, {})
        ]
    });
};

;// ./src/components/thread/chat-input/components/CreationSection/index.ts


;// ./src/components/thread/chat-input/chat-input.tsx
/* __next_internal_client_entry_do_not_use__ ChatInput auto */ 























const ChatInput = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { onSubmit, placeholder = 'Describe what you need help with...', loading = false, disabled = false, isAgentRunning = false, isAgentStopping = false, onStopAgent, autoFocus = true, value: controlledValue, onChange: controlledOnChange, onFileBrowse, sandboxId, threadId, hideAttachments = false, backendFileProcessing = false, selectedRepo, setSelectedRepo, selectedBranch, setSelectedBranch, selectedInstallationId, setSelectedInstallationId, isGithubContextFromThread, isLandingPage = false, landingPageAction, attachedFilesData, isThreadChatInput = true, isComputerPanelOpen } = param;
    const isControlled = controlledValue !== undefined && controlledOnChange !== undefined;
    const isBackToNinjaEnabled = (0,esm/* useFeatureFlagEnabled */.Tp)('backToNinja');
    const { handleBillingError } = (0,hooks_useBillingError/* useBillingError */.L)();
    const [uncontrolledValue, setUncontrolledValue] = (0,react.useState)((0,utils/* getLatestSubmitValue */.tE)(threadId, 'message') || '');
    const value = isControlled ? controlledValue : uncontrolledValue;
    const [uploadedFiles, setUploadedFiles] = (0,react.useState)((0,utils/* getLatestSubmitValue */.tE)(threadId, 'uploadedFiles') || []);
    const [pendingFiles, setPendingFiles] = (0,react.useState)([]);
    const [isUploading, setIsUploading] = (0,react.useState)(false);
    const [isDraggingOver, setIsDraggingOver] = (0,react.useState)(false);
    const [messageInputWidth, setMessageInputWidth] = (0,react.useState)(0);
    const { currentCommand } = (0,threadHooks/* usePromptCommandState */.M5)();
    const isDeepResearch = (0,utils/* isDeepResearchCommand */.lN)(currentCommand);
    const isAttachmentDisabled = (0,react.useMemo)(()=>isDeepResearch, [
        isDeepResearch
    ]);
    const { onSetCurrentCommand, onResetCurrentCommand } = (0,threadHooks/* usePromptCommandActions */.I)();
    const { selectedExecutionMode } = (0,hooks/* useExecutionModeState */._F)();
    const { selectedModel, onModelChange } = useModelSelection();
    const textareaRef = (0,react.useRef)(null);
    const fileInputRef = (0,react.useRef)(null);
    const googleDriveInputRef = (0,react.useRef)(null);
    const searchParams = (0,navigation.useSearchParams)();
    const pathname = (0,navigation.usePathname)();
    const hasCommand = searchParams.has(constants/* SKILL_SEARCH_PARAM */.ndv);
    const isAnyDeepAgentEnabled = true;
    const isImageGeneratorEnabled = true;
    const isImageAttachmentEnabled = true;
    const isChatModeEnabled = true;
    const isInReactNativeWebView = (0,use_in_react_native_webview/* useInReactNativeWebView */.M)(false);
    const filterImageFiles = (0,react.useCallback)(()=>{
        setUploadedFiles((files)=>files.filter((file)=>{
                var _file_type;
                return (_file_type = file.type) === null || _file_type === void 0 ? void 0 : _file_type.startsWith('image/');
            }));
        setPendingFiles((files)=>files.filter((file)=>{
                var _file_type;
                return (_file_type = file.type) === null || _file_type === void 0 ? void 0 : _file_type.startsWith('image/');
            }));
    }, []);
    (0,react.useImperativeHandle)(ref, ()=>({
            getPendingFiles: ()=>pendingFiles,
            clearPendingFiles: ()=>setPendingFiles([])
        }));
    (0,react.useEffect)(()=>{
        if (attachedFilesData && attachedFilesData.length > 0) {
            setUploadedFiles((prev)=>[
                    ...prev,
                    ...attachedFilesData
                ]);
            const preparedFiles = attachedFilesData.map((fileData)=>{
                return new File([
                    fileData.blob
                ], fileData.name, {
                    type: fileData.type || 'text/plain'
                });
            });
            attachedFilesData.forEach((file)=>{
                dist/* toast */.oR.success("File attached: ".concat(file.name));
            });
            setPendingFiles(preparedFiles);
        }
    }, [
        attachedFilesData
    ]);
    (0,react.useEffect)(()=>{
        if (autoFocus && textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [
        autoFocus
    ]);
    (0,react.useEffect)(()=>{
        if (hasCommand && (isAnyDeepAgentEnabled || isImageGeneratorEnabled)) {
            const command = searchParams.get(constants/* SKILL_SEARCH_PARAM */.ndv);
            if ((command === types/* DeepResearchCommands */.YR.FAST_RESEARCH || (0,utils/* isDeepCoderCommand */.V8)(command) || isImageGeneratorEnabled && command === types/* ImageGeneratorCommand */.ac.GENERATOR || isChatModeEnabled && command === types/* ChatCommand */.cz.CHAT) && currentCommand !== command) {
                onSetCurrentCommand(command);
                setUploadedFiles([]);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        hasCommand,
        pathname
    ]);
    (0,react.useEffect)(()=>{
        if (currentCommand !== types/* ImageGeneratorCommand */.ac.GENERATOR || uploadedFiles.length === 0 || !isImageAttachmentEnabled) {
            return;
        }
        filterImageFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        currentCommand
    ]);
    (0,react.useEffect)(()=>{
        if (!textareaRef.current) return;
        const resizeObserver = new ResizeObserver((entries)=>{
            for (const entry of entries){
                setMessageInputWidth(entry.contentRect.width);
            }
        });
        resizeObserver.observe(textareaRef.current);
        return ()=>resizeObserver.disconnect();
    }, []);
    const handleClear = ()=>{
        if (!value.trim() && uploadedFiles.length === 0 || loading) return;
        if (!isControlled) {
            setUncontrolledValue('');
        } else {
            controlledOnChange('');
        }
        setUploadedFiles([]);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!value.trim() && uploadedFiles.length === 0 || loading || disabled && !isAgentRunning) return;
        if (isAgentRunning && onStopAgent) {
            onStopAgent();
            return;
        }
        let message = currentCommand ? "".concat(currentCommand, " ").concat(value) : value;
        if (threadId) sessionStorage.setItem('latestSubmit', JSON.stringify({
            message,
            uploadedFiles,
            threadId
        }));
        // Only add file paths to message if backend is not handling file processing
        if (uploadedFiles.length > 0 && !backendFileProcessing) {
            const fileInfo = uploadedFiles.map((file)=>"[Uploaded File: ".concat(file.path, "]")).join('\n');
            message = message ? "".concat(message, "\n\n").concat(fileInfo) : fileInfo;
            ;
        }
        const selected_model = currentCommand || selectedModel === models/* UNSELECTED_MODEL_ID */.tZ ? undefined : selectedModel;
        try {
            await onSubmit(message, {
                model_name: selected_model,
                enable_thinking: false,
                agent_execution_mode: selectedExecutionMode
            });
            // Only clear on success
            if (!isControlled) {
                setUncontrolledValue('');
            }
            setUploadedFiles([]);
        } catch (error) {
            if (error instanceof types/* BillingError */.Ey) {
                return; // Exit early, don't clear form
            }
            if (error instanceof types/* ConcurrencyError */.Yu) {
                return;
            }
            // For other errors, clear the form
            if (!isControlled) {
                setUncontrolledValue('');
            }
            setUploadedFiles([]);
        }
    };
    const handleChange = (e)=>{
        const value = e.target.value || '';
        const [cmd, cleaned] = (0,utils/* stripLeadingCommands */.xZ)(value);
        const isEnabled = cmd === types/* DeepResearchCommands */.YR.FAST_RESEARCH || (0,utils/* isDeepCoderCommand */.V8)(cmd) || isImageGeneratorEnabled && cmd === types/* ImageGeneratorCommand */.ac.GENERATOR || isChatModeEnabled && cmd === types/* ChatCommand */.cz.CHAT;
        if (cmd !== undefined && cmd !== currentCommand && isEnabled) {
            onSetCurrentCommand(cmd);
            setUploadedFiles([]);
        }
        if (isControlled) {
            controlledOnChange(isEnabled ? cleaned : value);
        } else {
            setUncontrolledValue(isEnabled ? cleaned : value);
        }
    };
    const removeUploadedFile = (index)=>{
        setUploadedFiles((prev)=>prev.filter((_, i)=>i !== index));
        if (!sandboxId && pendingFiles.length > index) {
            setPendingFiles((prev)=>prev.filter((_, i)=>i !== index));
        }
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsDraggingOver(true);
    };
    const handleDragLeave = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsDraggingOver(false);
    };
    const handleDropFile = async (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsDraggingOver(false);
        if (fileInputRef.current && e.dataTransfer.files.length > 0 && !isAttachmentDisabled) {
            if ((0,utils/* isChatCommand */.fP)(currentCommand)) {
                onSetCurrentCommand(null);
            }
            const files = Array.from(e.dataTransfer.files);
            await handleFiles(files, threadId, setPendingFiles, setUploadedFiles, setIsUploading, handleBillingError, undefined, undefined, currentCommand === types/* ImageGeneratorCommand */.ac.GENERATOR, selectedExecutionMode);
        }
    };
    const handleCommandChange = (value)=>{
        onSetCurrentCommand(value);
        if (!(0,utils/* isDeepCoderCommand */.V8)(value)) {
            if (value === types/* ImageGeneratorCommand */.ac.GENERATOR && isImageAttachmentEnabled) {
                return;
            }
            setUploadedFiles([]);
        }
    };
    const handleResetCommand = ()=>{
        if (currentCommand === types/* ImageGeneratorCommand */.ac.GENERATOR) {
            onModelChange(models/* DEFAULT_MODEL_ID */.Sk);
        }
        onResetCurrentCommand();
    };
    const handleImageGenerator = ()=>{
        handleCommandChange(types/* ImageGeneratorCommand */.ac.GENERATOR);
        onModelChange(models/* FLUX_1_1_PRO_MODEL_ID */.Gm);
    };
    const handleChat = ()=>{
        onSetCurrentCommand(types/* ChatCommand */.cz.CHAT);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classnames_default()((ChatInput_module_default()).container, {
            [(ChatInput_module_default()).containerLandingPage]: isLandingPage
        }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* Card */.Zp, {
                className: (ChatInput_module_default()).card,
                onDragOver: handleDragOver,
                onDragLeave: handleDragLeave,
                onDrop: handleDropFile,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (ChatInput_module_default()).inputWrapperContainer,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(BackToNativeButton, {
                            smallButton: !isThreadChatInput,
                            hide: !isThreadChatInput || !isBackToNinjaEnabled,
                            disabled: isUploading
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (ChatInput_module_default()).inputWrapper,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (ChatInput_module_default()).inputContainer,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CreationSection, {
                                        isLandingPage: isLandingPage,
                                        landingPageAction: landingPageAction,
                                        handleCommandChange: handleCommandChange,
                                        handleImageGenerator: handleImageGenerator,
                                        handleChat: handleChat
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(UploadedFilesDisplay, {
                                        uploadedFiles: uploadedFiles,
                                        sandboxId: sandboxId,
                                        onRemoveFile: removeUploadedFile
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MessageInput, {
                                        ref: textareaRef,
                                        value: value,
                                        onChange: handleChange,
                                        onSubmit: handleSubmit,
                                        onClear: handleClear,
                                        placeholder: placeholder,
                                        loading: loading,
                                        disabled: disabled,
                                        isAgentRunning: isAgentRunning,
                                        isAgentStopping: isAgentStopping,
                                        onStopAgent: onStopAgent,
                                        isDraggingOver: isDraggingOver,
                                        uploadedFiles: uploadedFiles,
                                        fileInputRef: fileInputRef,
                                        googleDriveInputRef: googleDriveInputRef,
                                        isUploading: isUploading,
                                        sandboxId: sandboxId,
                                        threadId: threadId,
                                        setPendingFiles: setPendingFiles,
                                        setUploadedFiles: setUploadedFiles,
                                        setIsUploading: setIsUploading,
                                        hideAttachments: hideAttachments,
                                        selectedModel: selectedModel,
                                        onModelChange: onModelChange,
                                        githubConfig: {
                                            selectedRepo,
                                            setSelectedRepo,
                                            selectedBranch,
                                            setSelectedBranch,
                                            selectedInstallationId,
                                            setSelectedInstallationId,
                                            isGithubContextFromThread
                                        },
                                        isLandingPage: isLandingPage,
                                        landingPageAction: landingPageAction,
                                        command: currentCommand,
                                        onResetCommand: handleResetCommand,
                                        isComputerPanelOpen: isComputerPanelOpen,
                                        isNarrowWidth: messageInputWidth > 0 && messageInputWidth < 580,
                                        isAttachmentDisabled: isAttachmentDisabled
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.P.div, {
                initial: {
                    opacity: 0,
                    y: -10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: (ChatInput_module_default()).agentStatus,
                children: isAgentRunning ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (ChatInput_module_default()).agentStatusContent,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(loader_circle/* default */.A, {
                            className: "animate-spin",
                            size: constants/* SVG_SIZE_XS */.Pbx
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: isAgentStopping ? 'Ninja is stopping...' : 'Ninja is working...'
                        })
                    ]
                }) : threadId && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    className: (ChatInput_module_default()).mistakeNotice,
                    children: "Ninja can make mistakes. Please double check responses."
                })
            })
        ]
    });
});
ChatInput.displayName = 'ChatInput';


/***/ }),

/***/ 50909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ RadioGroupItem),
/* harmony export */   z: () => (/* binding */ RadioGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24058);
/* harmony import */ var _barrel_optimize_names_CircleIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99051);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64269);
/* __next_internal_client_entry_do_not_use__ RadioGroup,RadioGroupItem auto */ 




function RadioGroup(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .bL, {
        "data-slot": "radio-group",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('grid gap-3', className),
        ...props
    });
}
function RadioGroupItem(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_3__/* .Item */ .q7, {
        "data-slot": "radio-group-item",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50', className),
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_3__/* .Indicator */ .C1, {
            "data-slot": "radio-group-indicator",
            className: "relative flex items-center justify-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CircleIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
            })
        })
    });
}



/***/ }),

/***/ 50947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ useBillingError)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* harmony import */ var _interfaceHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76563);


// useBillingError is deprecated and needs refactoring
/**
 * @deprecated
 */ function useBillingError() {
    const [billingError, setBillingError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { onToggleLimitReachedModal } = (0,_interfaceHooks__WEBPACK_IMPORTED_MODULE_1__/* .useInterfaceControlActions */ .f)();
    const handleBillingError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((error)=>{
        if ((error === null || error === void 0 ? void 0 : error.code) === 'CHAT_RATE_LIMIT_EXCEEDED') {
            onToggleLimitReachedModal({
                open: true,
                modalType: 'chat-skill-limit',
                limitPeriod: (error === null || error === void 0 ? void 0 : error.bucket) || null
            });
            return true;
        }
        if ((error === null || error === void 0 ? void 0 : error.code) === 'IMAGE_RATE_LIMIT_EXCEEDED') {
            onToggleLimitReachedModal({
                open: true,
                modalType: 'image-skill-limit',
                limitPeriod: (error === null || error === void 0 ? void 0 : error.bucket) || null
            });
            return true;
        }
        if ((error === null || error === void 0 ? void 0 : error.code) === 'VS_CODE_DIRECT_LAUNCH_RATE_LIMIT_EXCEEDED') {
            onToggleLimitReachedModal({
                open: true,
                modalType: 'vs-code-direct-launch-limit',
                limitPeriod: (error === null || error === void 0 ? void 0 : error.bucket) || null
            });
            return true;
        }
        // Case 1: Error is already a formatted billing error detail object
        if (error && (error.message || error.subscription)) {
            var _error_subscription, _error_subscription1;
            setBillingError({
                message: error.message || "You've reached your monthly usage limit.",
                message_to_user: error.message_to_user,
                currentUsage: error.currentUsage || ((_error_subscription = error.subscription) === null || _error_subscription === void 0 ? void 0 : _error_subscription.current_usage),
                limit: error.limit || ((_error_subscription1 = error.subscription) === null || _error_subscription1 === void 0 ? void 0 : _error_subscription1.limit),
                subscription: error.subscription || {}
            });
            onToggleLimitReachedModal({
                open: true,
                modalType: 'execution-mode-limit',
                limitPeriod: (error === null || error === void 0 ? void 0 : error.bucket) || null
            });
            return true;
        }
        // Case 2: Error is an HTTP error response
        if (error.status === 402 || error.message && error.message.includes('Payment Required')) {
            var _error_data;
            // Try to get details from error.data.detail (common API pattern)
            const errorDetail = ((_error_data = error.data) === null || _error_data === void 0 ? void 0 : _error_data.detail) || {};
            const subscription = errorDetail.subscription || {};
            setBillingError({
                message: errorDetail.message || "You've reached your monthly usage limit.",
                message_to_user: error.message_to_user,
                currentUsage: subscription.current_usage,
                limit: subscription.limit,
                subscription
            });
            onToggleLimitReachedModal({
                open: true,
                modalType: 'execution-mode-limit',
                limitPeriod: (error === null || error === void 0 ? void 0 : error.bucket) || null
            });
            return true;
        }
        // Not a billing error
        return false;
    }, [
        onToggleLimitReachedModal
    ]);
    const clearBillingError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setBillingError(null);
    }, []);
    return {
        billingError,
        handleBillingError,
        clearBillingError
    };
}


/***/ }),

/***/ 52777:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"headerInfo":"ModeSelectorContainer_headerInfo__nVZeJ","headerDescription":"ModeSelectorContainer_headerDescription__uRkX0","nj-animate-horizontal-appearance-ltr-enter":"ModeSelectorContainer_nj-animate-horizontal-appearance-ltr-enter__Wrghl","nj-animate-horizontal-appearance-ltr-enter-active":"ModeSelectorContainer_nj-animate-horizontal-appearance-ltr-enter-active__rnnFA","nj-animate-horizontal-appearance-ltr-exit":"ModeSelectorContainer_nj-animate-horizontal-appearance-ltr-exit__8USjp","nj-animate-horizontal-appearance-ltr-exit-active":"ModeSelectorContainer_nj-animate-horizontal-appearance-ltr-exit-active__Y8L__","nj-animate-left-panel-width-reduce-enter":"ModeSelectorContainer_nj-animate-left-panel-width-reduce-enter__PIeZG","nj-animate-left-panel-width-reduce-enter-active":"ModeSelectorContainer_nj-animate-left-panel-width-reduce-enter-active__CztGJ","nj-animate-left-panel-width-reduce-exit":"ModeSelectorContainer_nj-animate-left-panel-width-reduce-exit__Q3Yfn","nj-animate-left-panel-width-reduce-exit-active":"ModeSelectorContainer_nj-animate-left-panel-width-reduce-exit-active__v3k1e","nj-animate-vertical-appearance-appear":"ModeSelectorContainer_nj-animate-vertical-appearance-appear__ewfMK","nj-animate-vertical-appearance-appear-active":"ModeSelectorContainer_nj-animate-vertical-appearance-appear-active__eHgiN","nj-animate-vertical-appearance-enter":"ModeSelectorContainer_nj-animate-vertical-appearance-enter___t_ac","nj-animate-vertical-appearance-enter-active":"ModeSelectorContainer_nj-animate-vertical-appearance-enter-active__Ki32l","nj-animate-vertical-appearance-exit":"ModeSelectorContainer_nj-animate-vertical-appearance-exit__i1r74","nj-animate-vertical-appearance-exit-active":"ModeSelectorContainer_nj-animate-vertical-appearance-exit-active__Ek4aE","root":"ModeSelectorContainer_root__N0rnh","title":"ModeSelectorContainer_title__7jEjl","selectorItem":"ModeSelectorContainer_selectorItem__oqpDQ","infinite-spinner":"ModeSelectorContainer_infinite-spinner__lQAXF","fadeIn":"ModeSelectorContainer_fadeIn__fNQTQ","blinking":"ModeSelectorContainer_blinking__CopII","movingRight":"ModeSelectorContainer_movingRight__ONtNl"};

/***/ }),

/***/ 55243:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"container":"OnDemandBanner_container__dW1v_","content":"OnDemandBanner_content___VNSG","root":"OnDemandBanner_root__vCDId","title":"OnDemandBanner_title__mDUUH","caption":"OnDemandBanner_caption__iAKRK","link":"OnDemandBanner_link__m8MLR","nj-animate-horizontal-appearance-ltr-enter":"OnDemandBanner_nj-animate-horizontal-appearance-ltr-enter__YDgoM","nj-animate-horizontal-appearance-ltr-enter-active":"OnDemandBanner_nj-animate-horizontal-appearance-ltr-enter-active__u2G45","nj-animate-horizontal-appearance-ltr-exit":"OnDemandBanner_nj-animate-horizontal-appearance-ltr-exit__Gp1ae","nj-animate-horizontal-appearance-ltr-exit-active":"OnDemandBanner_nj-animate-horizontal-appearance-ltr-exit-active__N27uq","nj-animate-left-panel-width-reduce-enter":"OnDemandBanner_nj-animate-left-panel-width-reduce-enter__8I0ez","nj-animate-left-panel-width-reduce-enter-active":"OnDemandBanner_nj-animate-left-panel-width-reduce-enter-active__Il9JG","nj-animate-left-panel-width-reduce-exit":"OnDemandBanner_nj-animate-left-panel-width-reduce-exit__PUItQ","nj-animate-left-panel-width-reduce-exit-active":"OnDemandBanner_nj-animate-left-panel-width-reduce-exit-active__k2o_X","nj-animate-vertical-appearance-appear":"OnDemandBanner_nj-animate-vertical-appearance-appear__i4SGp","nj-animate-vertical-appearance-appear-active":"OnDemandBanner_nj-animate-vertical-appearance-appear-active__IuZ37","nj-animate-vertical-appearance-enter":"OnDemandBanner_nj-animate-vertical-appearance-enter__MG6jM","nj-animate-vertical-appearance-enter-active":"OnDemandBanner_nj-animate-vertical-appearance-enter-active__PS9OS","nj-animate-vertical-appearance-exit":"OnDemandBanner_nj-animate-vertical-appearance-exit__wJoI_","nj-animate-vertical-appearance-exit-active":"OnDemandBanner_nj-animate-vertical-appearance-exit-active__njZOf","infinite-spinner":"OnDemandBanner_infinite-spinner__NVU0l","fadeIn":"OnDemandBanner_fadeIn__IQtNX","blinking":"OnDemandBanner_blinking__mZGpl","movingRight":"OnDemandBanner_movingRight__3nIhL"};

/***/ }),

/***/ 58019:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"content":"ConnectorSelector_content__EScnG","item":"ConnectorSelector_item__Nbcsu","githubIcon":"ConnectorSelector_githubIcon__LyqeW","connectLabel":"ConnectorSelector_connectLabel__zoni1","nj-animate-horizontal-appearance-ltr-enter":"ConnectorSelector_nj-animate-horizontal-appearance-ltr-enter__Yo9xQ","nj-animate-horizontal-appearance-ltr-enter-active":"ConnectorSelector_nj-animate-horizontal-appearance-ltr-enter-active__KbBJ5","nj-animate-horizontal-appearance-ltr-exit":"ConnectorSelector_nj-animate-horizontal-appearance-ltr-exit__wU82M","nj-animate-horizontal-appearance-ltr-exit-active":"ConnectorSelector_nj-animate-horizontal-appearance-ltr-exit-active__S__vB","nj-animate-left-panel-width-reduce-enter":"ConnectorSelector_nj-animate-left-panel-width-reduce-enter__xHybB","nj-animate-left-panel-width-reduce-enter-active":"ConnectorSelector_nj-animate-left-panel-width-reduce-enter-active__VYkOx","nj-animate-left-panel-width-reduce-exit":"ConnectorSelector_nj-animate-left-panel-width-reduce-exit__rmTg_","nj-animate-left-panel-width-reduce-exit-active":"ConnectorSelector_nj-animate-left-panel-width-reduce-exit-active__rX_4s","nj-animate-vertical-appearance-appear":"ConnectorSelector_nj-animate-vertical-appearance-appear__lCN9g","nj-animate-vertical-appearance-appear-active":"ConnectorSelector_nj-animate-vertical-appearance-appear-active__tbW4s","nj-animate-vertical-appearance-enter":"ConnectorSelector_nj-animate-vertical-appearance-enter__XNE_P","nj-animate-vertical-appearance-enter-active":"ConnectorSelector_nj-animate-vertical-appearance-enter-active__SrDnR","nj-animate-vertical-appearance-exit":"ConnectorSelector_nj-animate-vertical-appearance-exit__ePdTE","nj-animate-vertical-appearance-exit-active":"ConnectorSelector_nj-animate-vertical-appearance-exit-active__8dxGD","label":"ConnectorSelector_label__N29F_","infinite-spinner":"ConnectorSelector_infinite-spinner__FSYC4","fadeIn":"ConnectorSelector_fadeIn__34RiU","blinking":"ConnectorSelector_blinking__3bqL1","movingRight":"ConnectorSelector_movingRight__inN_F"};

/***/ }),

/***/ 60263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FE: () => (/* binding */ getGetTokenQueryKey),
/* harmony export */   In: () => (/* binding */ getAvailableProviders),
/* harmony export */   NE: () => (/* binding */ revokeAccess),
/* harmony export */   Nm: () => (/* binding */ useGetToken),
/* harmony export */   PS: () => (/* binding */ useGetAvailableProviders),
/* harmony export */   r$: () => (/* binding */ getGetAvailableProvidersQueryKey)
/* harmony export */ });
/* unused harmony exports getToken, getGetTokenQueryOptions, getGetAvailableProvidersQueryOptions, getUserScopes, getGetUserScopesQueryKey, getGetUserScopesQueryOptions, useGetUserScopes, getRevokeAccessQueryKey, getRevokeAccessQueryOptions, useRevokeAccess */
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53455);
/* harmony import */ var _lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37010);
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * NinjaTech Token Service
 * OpenAPI spec version: 0.1.0
 */ 

/**
 * @summary Returns an access token
 */ const getToken = (params, options, signal)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://token.public.beta.myninja.ai/v1/tokens/",
        method: 'GET',
        params,
        signal
    }, options);
};
const getGetTokenQueryKey = (params)=>{
    return [
        "https://token.public.beta.myninja.ai/v1/tokens/",
        ...params ? [
            params
        ] : []
    ];
};
const getGetTokenQueryOptions = (params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetTokenQueryKey(params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getToken(params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary Returns an access token
 */ function useGetToken(params, options, queryClient) {
    const queryOptions = getGetTokenQueryOptions(params, options);
    const query = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .I)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Provides a list of available Providers for a given User
 */ const getAvailableProviders = (params, options, signal)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://token.public.beta.myninja.ai/v1/tokens/providers",
        method: 'GET',
        params,
        signal
    }, options);
};
const getGetAvailableProvidersQueryKey = (params)=>{
    return [
        "https://token.public.beta.myninja.ai/v1/tokens/providers",
        ...params ? [
            params
        ] : []
    ];
};
const getGetAvailableProvidersQueryOptions = (params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetAvailableProvidersQueryKey(params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getAvailableProviders(params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary Provides a list of available Providers for a given User
 */ function useGetAvailableProviders(params, options, queryClient) {
    const queryOptions = getGetAvailableProvidersQueryOptions(params, options);
    const query = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .I)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Returns scopes granted by a given user
 */ const getUserScopes = (params, options, signal)=>{
    return customInstance({
        url: "https://token.public.beta.myninja.ai/v1/tokens/scopes",
        method: 'GET',
        params,
        signal
    }, options);
};
const getGetUserScopesQueryKey = (params)=>{
    return [
        "https://token.public.beta.myninja.ai/v1/tokens/scopes",
        ...params ? [
            params
        ] : []
    ];
};
const getGetUserScopesQueryOptions = (params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserScopesQueryKey(params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUserScopes(params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary Returns scopes granted by a given user
 */ function useGetUserScopes(params, options, queryClient) {
    const queryOptions = getGetUserScopesQueryOptions(params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Revoke access for a user
 */ const revokeAccess = (params, options, signal)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://token.public.beta.myninja.ai/v1/tokens/revoke",
        method: 'GET',
        params,
        signal
    }, options);
};
const getRevokeAccessQueryKey = (params)=>{
    return [
        "https://token.public.beta.myninja.ai/v1/tokens/revoke",
        ...params ? [
            params
        ] : []
    ];
};
const getRevokeAccessQueryOptions = (params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getRevokeAccessQueryKey(params);
    const queryFn = (param)=>{
        let { signal } = param;
        return revokeAccess(params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary Revoke access for a user
 */ function useRevokeAccess(params, options, queryClient) {
    const queryOptions = getRevokeAccessQueryOptions(params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}


/***/ }),

/***/ 61513:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"ModeSelectorItem_root__ki4n1","content":"ModeSelectorItem_content__17WmK","titleContainer":"ModeSelectorItem_titleContainer__drmfU","modelName":"ModeSelectorItem_modelName__VlzDk","mainContent":"ModeSelectorItem_mainContent__7Gdso","modelLabel":"ModeSelectorItem_modelLabel__vZFOT","title":"ModeSelectorItem_title__GxQnr","comingSoon":"ModeSelectorItem_comingSoon__uHD6I","defaultValue":"ModeSelectorItem_defaultValue__0Wv4f","value":"ModeSelectorItem_value__arGeM","description":"ModeSelectorItem_description__cktl7","nj-animate-horizontal-appearance-ltr-enter":"ModeSelectorItem_nj-animate-horizontal-appearance-ltr-enter__9qlE2","nj-animate-horizontal-appearance-ltr-enter-active":"ModeSelectorItem_nj-animate-horizontal-appearance-ltr-enter-active__mZvwz","nj-animate-horizontal-appearance-ltr-exit":"ModeSelectorItem_nj-animate-horizontal-appearance-ltr-exit__3ZBJm","nj-animate-horizontal-appearance-ltr-exit-active":"ModeSelectorItem_nj-animate-horizontal-appearance-ltr-exit-active__LY5QE","nj-animate-left-panel-width-reduce-enter":"ModeSelectorItem_nj-animate-left-panel-width-reduce-enter__l4mJF","nj-animate-left-panel-width-reduce-enter-active":"ModeSelectorItem_nj-animate-left-panel-width-reduce-enter-active__ylQqw","nj-animate-left-panel-width-reduce-exit":"ModeSelectorItem_nj-animate-left-panel-width-reduce-exit__iQsaU","nj-animate-left-panel-width-reduce-exit-active":"ModeSelectorItem_nj-animate-left-panel-width-reduce-exit-active__wqMb7","nj-animate-vertical-appearance-appear":"ModeSelectorItem_nj-animate-vertical-appearance-appear__5fUwW","nj-animate-vertical-appearance-appear-active":"ModeSelectorItem_nj-animate-vertical-appearance-appear-active__6sNAw","nj-animate-vertical-appearance-enter":"ModeSelectorItem_nj-animate-vertical-appearance-enter__sYMIr","nj-animate-vertical-appearance-enter-active":"ModeSelectorItem_nj-animate-vertical-appearance-enter-active__xJaSA","nj-animate-vertical-appearance-exit":"ModeSelectorItem_nj-animate-vertical-appearance-exit__X5Q1a","nj-animate-vertical-appearance-exit-active":"ModeSelectorItem_nj-animate-vertical-appearance-exit-active__wB5XP","disabled":"ModeSelectorItem_disabled__mpcyy","inactive":"ModeSelectorItem_inactive__MlMb_","warning":"ModeSelectorItem_warning__Vd5n8","modelWrapper":"ModeSelectorItem_modelWrapper__DdNfB","modelInfo":"ModeSelectorItem_modelInfo__7Tlej","infinite-spinner":"ModeSelectorItem_infinite-spinner__DYOIA","fadeIn":"ModeSelectorItem_fadeIn__pV2AJ","blinking":"ModeSelectorItem_blinking__k921s","movingRight":"ModeSelectorItem_movingRight__I2q1Y"};

/***/ }),

/***/ 66251:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"buttonContainer":"BackToNativeButton_buttonContainer__xcDRl","nj-animate-horizontal-appearance-ltr-enter":"BackToNativeButton_nj-animate-horizontal-appearance-ltr-enter__X2e_O","nj-animate-horizontal-appearance-ltr-enter-active":"BackToNativeButton_nj-animate-horizontal-appearance-ltr-enter-active__l9Mde","nj-animate-horizontal-appearance-ltr-exit":"BackToNativeButton_nj-animate-horizontal-appearance-ltr-exit__gJ1qf","nj-animate-horizontal-appearance-ltr-exit-active":"BackToNativeButton_nj-animate-horizontal-appearance-ltr-exit-active__voDm5","nj-animate-left-panel-width-reduce-enter":"BackToNativeButton_nj-animate-left-panel-width-reduce-enter__uZ4Qw","nj-animate-left-panel-width-reduce-enter-active":"BackToNativeButton_nj-animate-left-panel-width-reduce-enter-active__V4Evr","nj-animate-left-panel-width-reduce-exit":"BackToNativeButton_nj-animate-left-panel-width-reduce-exit__GO9tt","nj-animate-left-panel-width-reduce-exit-active":"BackToNativeButton_nj-animate-left-panel-width-reduce-exit-active__WQuoo","nj-animate-vertical-appearance-appear":"BackToNativeButton_nj-animate-vertical-appearance-appear__DVpz5","nj-animate-vertical-appearance-appear-active":"BackToNativeButton_nj-animate-vertical-appearance-appear-active__h0y6x","nj-animate-vertical-appearance-enter":"BackToNativeButton_nj-animate-vertical-appearance-enter__393HI","nj-animate-vertical-appearance-enter-active":"BackToNativeButton_nj-animate-vertical-appearance-enter-active__iaqEK","nj-animate-vertical-appearance-exit":"BackToNativeButton_nj-animate-vertical-appearance-exit__XEwmL","nj-animate-vertical-appearance-exit-active":"BackToNativeButton_nj-animate-vertical-appearance-exit-active__wJrb0","button":"BackToNativeButton_button__5LTWh","infinite-spinner":"BackToNativeButton_infinite-spinner__VoQDK","fadeIn":"BackToNativeButton_fadeIn__ypEnv","blinking":"BackToNativeButton_blinking__ndTnB","movingRight":"BackToNativeButton_movingRight__E6czC"};

/***/ }),

/***/ 67484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ GoogleApiProvider),
  A: () => (/* binding */ contexts_GoogleApiContext)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
;// ./src/hooks/useLoadScript.ts

function useLoadScript(param) {
    let { src, nonce, onScriptLoadSuccess, onScriptLoadError } = param;
    const [scriptLoadedSuccessfully, setScriptLoadedSuccessfully] = (0,react.useState)(false);
    const onScriptLoadSuccessRef = (0,react.useRef)(onScriptLoadSuccess);
    onScriptLoadSuccessRef.current = onScriptLoadSuccess;
    const onScriptLoadErrorRef = (0,react.useRef)(onScriptLoadError);
    onScriptLoadErrorRef.current = onScriptLoadError;
    (0,react.useEffect)(()=>{
        const scriptTag = document.createElement('script');
        scriptTag.src = src;
        scriptTag.async = true;
        scriptTag.defer = true;
        scriptTag.nonce = nonce;
        scriptTag.onload = ()=>{
            var _onScriptLoadSuccessRef_current;
            setScriptLoadedSuccessfully(true);
            (_onScriptLoadSuccessRef_current = onScriptLoadSuccessRef.current) === null || _onScriptLoadSuccessRef_current === void 0 ? void 0 : _onScriptLoadSuccessRef_current.call(onScriptLoadSuccessRef);
        };
        scriptTag.onerror = ()=>{
            var _onScriptLoadErrorRef_current;
            setScriptLoadedSuccessfully(false);
            (_onScriptLoadErrorRef_current = onScriptLoadErrorRef.current) === null || _onScriptLoadErrorRef_current === void 0 ? void 0 : _onScriptLoadErrorRef_current.call(onScriptLoadErrorRef);
        };
        document.body.appendChild(scriptTag);
        return ()=>{
            document.body.removeChild(scriptTag);
        };
    }, [
        src,
        nonce
    ]);
    return scriptLoadedSuccessfully;
}

// EXTERNAL MODULE: ./src/lib/envs.ts
var envs = __webpack_require__(68276);
// EXTERNAL MODULE: ./node_modules/@datadog/browser-logs/esm/entries/main.js + 109 modules
var main = __webpack_require__(73262);
;// ./src/contexts/GoogleApiContext.tsx
/// <reference types="gapi" />





const GoogleApiContext = /*#__PURE__*/ (0,react.createContext)({
    loadedApis: {}
});
const GoogleApiProvider = (param)=>{
    let { nonce, children } = param;
    const [loadedApis, setLoadedApis] = (0,react.useState)({
        drive: false,
        drivePicker: false,
        gapi: false
    });
    const [gapiScriptLoaded, setGapiScriptLoaded] = (0,react.useState)(false);
    const onPickerLoaded = (0,react.useCallback)(()=>{
        setLoadedApis((prevState)=>{
            return {
                ...prevState,
                drivePicker: true
            };
        });
    }, []);
    const onGApiClientLoaded = (0,react.useCallback)(()=>{
        const loadClients = async ()=>{
            try {
                await gapi.client.init({
                    apiKey: envs/* NEXT_PUBLIC_GOOGLE_API_KEY */.NA,
                    discoveryDocs: [
                        'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'
                    ]
                });
                setLoadedApis((prevState)=>{
                    return {
                        ...prevState,
                        gapi: true,
                        drive: true
                    };
                });
            } catch (e) {
                main/* datadogLogs */.yf.logger.warn('Unable to init gapi client');
            }
        };
        loadClients();
    }, []);
    (0,react.useEffect)(()=>{
        if (gapiScriptLoaded) {
            gapi.load('picker', onPickerLoaded);
            gapi.load('client', onGApiClientLoaded);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        gapiScriptLoaded
    ]);
    const onScriptLoadSuccess = (0,react.useCallback)(()=>{
        setGapiScriptLoaded(true);
    }, []);
    useLoadScript({
        src: 'https://apis.google.com/js/api.js',
        nonce,
        onScriptLoadSuccess
    });
    const contextValue = (0,react.useMemo)(()=>({
            loadedApis
        }), [
        loadedApis
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(GoogleApiContext.Provider, {
        value: contextValue,
        children: children
    });
};

/* harmony default export */ const contexts_GoogleApiContext = (GoogleApiContext);


/***/ }),

/***/ 68800:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"container":"BuilderTrigger_container__nP4Gk","nj-animate-horizontal-appearance-ltr-enter":"BuilderTrigger_nj-animate-horizontal-appearance-ltr-enter__fH43m","nj-animate-horizontal-appearance-ltr-enter-active":"BuilderTrigger_nj-animate-horizontal-appearance-ltr-enter-active__dFhfF","nj-animate-horizontal-appearance-ltr-exit":"BuilderTrigger_nj-animate-horizontal-appearance-ltr-exit__Rqtf4","nj-animate-horizontal-appearance-ltr-exit-active":"BuilderTrigger_nj-animate-horizontal-appearance-ltr-exit-active__HYcOQ","nj-animate-left-panel-width-reduce-enter":"BuilderTrigger_nj-animate-left-panel-width-reduce-enter__t2Qsh","nj-animate-left-panel-width-reduce-enter-active":"BuilderTrigger_nj-animate-left-panel-width-reduce-enter-active___lTC1","nj-animate-left-panel-width-reduce-exit":"BuilderTrigger_nj-animate-left-panel-width-reduce-exit__iypFz","nj-animate-left-panel-width-reduce-exit-active":"BuilderTrigger_nj-animate-left-panel-width-reduce-exit-active__lBScN","nj-animate-vertical-appearance-appear":"BuilderTrigger_nj-animate-vertical-appearance-appear__wp2IM","nj-animate-vertical-appearance-appear-active":"BuilderTrigger_nj-animate-vertical-appearance-appear-active___ZJxJ","nj-animate-vertical-appearance-enter":"BuilderTrigger_nj-animate-vertical-appearance-enter__99A1F","nj-animate-vertical-appearance-enter-active":"BuilderTrigger_nj-animate-vertical-appearance-enter-active__HB8hc","nj-animate-vertical-appearance-exit":"BuilderTrigger_nj-animate-vertical-appearance-exit__Os5Ay","nj-animate-vertical-appearance-exit-active":"BuilderTrigger_nj-animate-vertical-appearance-exit-active__OE6kF","root":"BuilderTrigger_root__9xluc","infinite-spinner":"BuilderTrigger_infinite-spinner__OKmpU","fadeIn":"BuilderTrigger_fadeIn__lL4i0","blinking":"BuilderTrigger_blinking__xn2wq","movingRight":"BuilderTrigger_movingRight__hpHsQ"};

/***/ }),

/***/ 69529:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"valueWrapper":"SelectorButton_valueWrapper__JcE5S","iconWrapper":"SelectorButton_iconWrapper__isMwb","label":"SelectorButton_label__w8MNI","nj-animate-horizontal-appearance-ltr-enter":"SelectorButton_nj-animate-horizontal-appearance-ltr-enter__6IsG3","nj-animate-horizontal-appearance-ltr-enter-active":"SelectorButton_nj-animate-horizontal-appearance-ltr-enter-active__e423v","nj-animate-horizontal-appearance-ltr-exit":"SelectorButton_nj-animate-horizontal-appearance-ltr-exit__KtQoj","nj-animate-horizontal-appearance-ltr-exit-active":"SelectorButton_nj-animate-horizontal-appearance-ltr-exit-active__iitdG","nj-animate-left-panel-width-reduce-enter":"SelectorButton_nj-animate-left-panel-width-reduce-enter__yGN9e","nj-animate-left-panel-width-reduce-enter-active":"SelectorButton_nj-animate-left-panel-width-reduce-enter-active__nhYQ0","nj-animate-left-panel-width-reduce-exit":"SelectorButton_nj-animate-left-panel-width-reduce-exit__DK_FK","nj-animate-left-panel-width-reduce-exit-active":"SelectorButton_nj-animate-left-panel-width-reduce-exit-active__AP82Q","nj-animate-vertical-appearance-appear":"SelectorButton_nj-animate-vertical-appearance-appear__qU9N2","nj-animate-vertical-appearance-appear-active":"SelectorButton_nj-animate-vertical-appearance-appear-active__Gx2wl","nj-animate-vertical-appearance-enter":"SelectorButton_nj-animate-vertical-appearance-enter__ws6Ur","nj-animate-vertical-appearance-enter-active":"SelectorButton_nj-animate-vertical-appearance-enter-active__xRB_Y","nj-animate-vertical-appearance-exit":"SelectorButton_nj-animate-vertical-appearance-exit__cIhUW","nj-animate-vertical-appearance-exit-active":"SelectorButton_nj-animate-vertical-appearance-exit-active__xZ2vL","infinite-spinner":"SelectorButton_infinite-spinner__fWG6M","fadeIn":"SelectorButton_fadeIn__DVX_Z","blinking":"SelectorButton_blinking__m_Lrp","movingRight":"SelectorButton_movingRight__Trayq"};

/***/ }),

/***/ 72335:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"ImageModelSelector_root__BcuQ3","modelItemContainer":"ImageModelSelector_modelItemContainer__f0jgJ"};

/***/ }),

/***/ 73028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ VSCodeIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47615);


const VSCodeIcon = (param)=>{
    let { size = _constants__WEBPACK_IMPORTED_MODULE_1__/* .SVG_SIZE_M */ .ng3, variant = 'primary', ...svgProps } = param;
    return variant === 'primary' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 100 100",
        ...svgProps,
        width: size,
        height: size,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("mask", {
                id: "a",
                width: 100,
                height: 100,
                x: 0,
                y: 0,
                maskUnits: "userSpaceOnUse",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M70.912 99.317a6.223 6.223 0 0 0 4.96-.19l20.589-9.907A6.25 6.25 0 0 0 100 83.587V16.413a6.25 6.25 0 0 0-3.54-5.632L75.874.874a6.226 6.226 0 0 0-7.104 1.21L29.355 38.04 12.187 25.01a4.162 4.162 0 0 0-5.318.236l-5.506 5.009a4.168 4.168 0 0 0-.004 6.162L16.247 50 1.36 63.583a4.168 4.168 0 0 0 .004 6.162l5.506 5.01a4.162 4.162 0 0 0 5.318.236l17.168-13.032L68.77 97.917a6.217 6.217 0 0 0 2.143 1.4ZM75.015 27.3 45.11 50l29.906 22.701V27.3Z",
                    clipRule: "evenodd"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                mask: "url(#a)",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                        fill: "#0065A9",
                        d: "M96.461 10.796 75.857.876a6.23 6.23 0 0 0-7.107 1.207l-67.451 61.5a4.167 4.167 0 0 0 .004 6.162l5.51 5.009a4.167 4.167 0 0 0 5.32.236l81.228-61.62c2.725-2.067 6.639-.124 6.639 3.297v-.24a6.25 6.25 0 0 0-3.539-5.63Z"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
                        filter: "url(#b)",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                            fill: "#007ACC",
                            d: "m96.461 89.204-20.604 9.92a6.229 6.229 0 0 1-7.107-1.207l-67.451-61.5a4.167 4.167 0 0 1 .004-6.162l5.51-5.009a4.167 4.167 0 0 1 5.32-.236l81.228 61.62c2.725 2.067 6.639.124 6.639-3.297v.24a6.25 6.25 0 0 1-3.539 5.63Z"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
                        filter: "url(#c)",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                            fill: "#1F9CF0",
                            d: "M75.858 99.126a6.232 6.232 0 0 1-7.108-1.21c2.306 2.307 6.25.674 6.25-2.588V4.672c0-3.262-3.944-4.895-6.25-2.589a6.232 6.232 0 0 1 7.108-1.21l20.6 9.908A6.25 6.25 0 0 1 100 16.413v67.174a6.25 6.25 0 0 1-3.541 5.633l-20.601 9.906Z"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                        fill: "url(#d)",
                        fillRule: "evenodd",
                        d: "M70.851 99.317a6.224 6.224 0 0 0 4.96-.19L96.4 89.22a6.25 6.25 0 0 0 3.54-5.633V16.413a6.25 6.25 0 0 0-3.54-5.632L75.812.874a6.226 6.226 0 0 0-7.104 1.21L29.294 38.04 12.126 25.01a4.162 4.162 0 0 0-5.317.236l-5.507 5.009a4.168 4.168 0 0 0-.004 6.162L16.186 50 1.298 63.583a4.168 4.168 0 0 0 .004 6.162l5.507 5.009a4.162 4.162 0 0 0 5.317.236L29.294 61.96l39.414 35.958a6.218 6.218 0 0 0 2.143 1.4ZM74.954 27.3 45.048 50l29.906 22.701V27.3Z",
                        clipRule: "evenodd",
                        opacity: 0.25,
                        style: {
                            mixBlendMode: 'overlay'
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                        id: "b",
                        width: 116.727,
                        height: 92.246,
                        x: -8.394,
                        y: 15.829,
                        colorInterpolationFilters: "sRGB",
                        filterUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
                                floodOpacity: 0,
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
                                stdDeviation: 4.167
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
                                in2: "BackgroundImageFix",
                                mode: "overlay",
                                result: "effect1_dropShadow"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow",
                                result: "shape"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                        id: "c",
                        width: 47.917,
                        height: 116.151,
                        x: 60.417,
                        y: -8.076,
                        colorInterpolationFilters: "sRGB",
                        filterUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
                                floodOpacity: 0,
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
                                stdDeviation: 4.167
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
                                in2: "BackgroundImageFix",
                                mode: "overlay",
                                result: "effect1_dropShadow"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow",
                                result: "shape"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "d",
                        x1: 49.939,
                        x2: 49.939,
                        y1: 0.258,
                        y2: 99.742,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                                stopColor: "#fff"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                                offset: 1,
                                stopColor: "#fff",
                                stopOpacity: 0
                            })
                        ]
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M14.3762 1.94799C14.3762 1.39864 13.7612 1.39864 13.4878 1.46731C13.8705 1.16516 14.3193 1.23842 14.4787 1.32997L18.1746 3.14217C18.5267 3.31484 18.7501 3.67413 18.7501 4.06786V15.9894C18.7501 16.3884 18.5208 16.7516 18.1615 16.9214L14.6838 18.5659C14.4445 18.6688 13.9252 18.9229 13.4878 18.5658C14.0345 18.6689 14.3307 18.2798 14.3762 18.0165V1.94799Z",
                fill: "url(#paint0_linear_3770_28189)"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M13.532 1.45683C13.8221 1.3995 14.3761 1.42608 14.3761 1.94742V6.05098L3.17099 14.5277C2.97514 14.6759 2.6995 14.6513 2.53268 14.4708L1.37783 13.2211C1.19692 13.0254 1.20957 12.719 1.40602 12.539L13.4876 1.46673L13.532 1.45683Z",
                fill: "url(#paint1_linear_3770_28189)"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M14.3761 13.9816L3.17099 5.50488C2.97514 5.35672 2.6995 5.3813 2.53268 5.56182L1.37783 6.81144C1.19692 7.00719 1.20957 7.31363 1.40602 7.49369L13.4876 18.5659C14.0344 18.6689 14.3306 18.2798 14.3761 18.0165V13.9816Z",
                fill: "url(#paint2_linear_3770_28189)"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint0_linear_3770_28189",
                        x1: "13.4878",
                        y1: "10",
                        x2: "18.7501",
                        y2: "10",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                                stopColor: "#E96384"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                                offset: "1",
                                stopColor: "#6333FF"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint1_linear_3770_28189",
                        x1: "1.25",
                        y1: "8.02997",
                        x2: "14.3761",
                        y2: "8.02997",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                                stopColor: "#E96384"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                                offset: "1",
                                stopColor: "#6333FF"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint2_linear_3770_28189",
                        x1: "1.25",
                        y1: "11.9955",
                        x2: "14.3761",
                        y2: "11.9955",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                                stopColor: "#E96384"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                                offset: "1",
                                stopColor: "#6333FF"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 75489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* reexport */ OnDemandBanner)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button = __webpack_require__(62717);
// EXTERNAL MODULE: ./src/components/ExecutionModeSelector/components/OnDemandBanner/OnDemandBanner.module.scss
var OnDemandBanner_module = __webpack_require__(55243);
var OnDemandBanner_module_default = /*#__PURE__*/__webpack_require__.n(OnDemandBanner_module);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./src/hooks/index.ts + 39 modules
var hooks = __webpack_require__(71203);
// EXTERNAL MODULE: ./src/hooks/paymentHooks/useCreditsAccountInfo.ts
var useCreditsAccountInfo = __webpack_require__(70258);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/ArrowSquareOut.es.js
var ArrowSquareOut_es = __webpack_require__(97591);
;// ./src/components/ExecutionModeSelector/components/OnDemandBanner/OnDemandBanner.tsx
/* __next_internal_client_entry_do_not_use__ OnDemandBanner auto */ 






const OnDemandBanner = (param)=>{
    let { onClick } = param;
    const { isFreeTier } = (0,hooks/* useGetUser */.be)();
    const { isAdmin, isMember, isTeamInfoLoading } = (0,hooks/* useTeamInfo */.JA)();
    const { openPaymentModal } = (0,hooks/* usePaymentControlActions */.WP)();
    const { creditBalance, isCreditAccountLoading } = (0,useCreditsAccountInfo/* useCreditsAccountInfo */.F)();
    const shouldShowBanner = !isAdmin && !isMember && creditBalance === 0;
    const handleUpgradeClick = ()=>{
        onClick === null || onClick === void 0 ? void 0 : onClick();
        openPaymentModal();
    };
    if (isTeamInfoLoading || isCreditAccountLoading || !shouldShowBanner) {
        return null;
    }
    if (isFreeTier) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (OnDemandBanner_module_default()).root,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (OnDemandBanner_module_default()).container,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            className: (OnDemandBanner_module_default()).title,
                            children: [
                                "Get more ",
                                constants/* PROJECT_NAME */.cbb,
                                " tasks"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: (OnDemandBanner_module_default()).caption,
                            children: "Upgrade to unlock unlimited tasks"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                    size: "small",
                    color: "highlight",
                    onClick: handleUpgradeClick,
                    children: "Upgrade"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (OnDemandBanner_module_default()).root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: (OnDemandBanner_module_default()).container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: (OnDemandBanner_module_default()).title,
                        children: [
                            "On-demand ",
                            constants/* PROJECT_NAME */.cbb,
                            " Credit Pack"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: (OnDemandBanner_module_default()).caption,
                        children: [
                            "Never run out of ",
                            constants/* PROJECT_NAME */.cbb,
                            " tasks"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
                        as: "a",
                        href: constants/* WEB_SITE_PRICING_PAGE */.EmG,
                        color: "link",
                        target: "_blank",
                        rel: "noreferrer",
                        className: (OnDemandBanner_module_default()).link,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: "Learn more"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowSquareOut_es/* ArrowSquareOutIcon */.k, {
                                size: constants/* SVG_SIZE_S */.lgH
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* Button */.$, {
                size: "small",
                color: "highlight",
                as: "a",
                href: constants/* MY_NINJA_ADD_ON_URL */.IgA,
                onClick: (e)=>{
                    var _window_ReactNativeWebView;
                    if ((_window_ReactNativeWebView = window.ReactNativeWebView) === null || _window_ReactNativeWebView === void 0 ? void 0 : _window_ReactNativeWebView.postMessage) {
                        e.preventDefault();
                        window.ReactNativeWebView.postMessage(JSON.stringify({
                            type: 'enable-on-demand-credits'
                        }));
                    }
                },
                children: "Enable"
            })
        ]
    });
};

;// ./src/components/ExecutionModeSelector/components/OnDemandBanner/index.ts



/***/ }),

/***/ 76444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10489);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64269);
/* __next_internal_client_entry_do_not_use__ Label auto */ 



function Label(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .b, {
        "data-slot": "label",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    });
}



/***/ }),

/***/ 76727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Di: () => (/* binding */ useGithubListRepositoryBranches),
/* harmony export */   Op: () => (/* binding */ githubListInstallationRepositories),
/* harmony export */   Ud: () => (/* binding */ getGithubListAllRepositoriesQueryKey),
/* harmony export */   VU: () => (/* binding */ githubListAllRepositories),
/* harmony export */   W3: () => (/* binding */ githubGetInstallUrl),
/* harmony export */   d3: () => (/* binding */ getGithubListRepositoryBranchesQueryKey),
/* harmony export */   hT: () => (/* binding */ githubListInstallations),
/* harmony export */   jH: () => (/* binding */ githubCreateInstallationAccessToken),
/* harmony export */   je: () => (/* binding */ useGithubCreateInstallation),
/* harmony export */   uv: () => (/* binding */ githubListRepositoryBranches)
/* harmony export */ });
/* unused harmony exports githubCreateInstallation, getGithubCreateInstallationMutationOptions, githubGetInstallation, getGithubGetInstallationQueryKey, getGithubGetInstallationInfiniteQueryOptions, useGithubGetInstallationInfinite, getGithubGetInstallationQueryOptions, useGithubGetInstallation, getGithubListInstallationsQueryKey, getGithubListInstallationsInfiniteQueryOptions, useGithubListInstallationsInfinite, getGithubListInstallationsQueryOptions, useGithubListInstallations, getGithubListAllRepositoriesInfiniteQueryOptions, useGithubListAllRepositoriesInfinite, getGithubListAllRepositoriesQueryOptions, useGithubListAllRepositories, getGithubListInstallationRepositoriesQueryKey, getGithubListInstallationRepositoriesInfiniteQueryOptions, useGithubListInstallationRepositoriesInfinite, getGithubListInstallationRepositoriesQueryOptions, useGithubListInstallationRepositories, getGithubListRepositoryBranchesInfiniteQueryOptions, useGithubListRepositoryBranchesInfinite, getGithubListRepositoryBranchesQueryOptions, getGithubGetInstallUrlQueryKey, getGithubGetInstallUrlInfiniteQueryOptions, useGithubGetInstallUrlInfinite, getGithubGetInstallUrlQueryOptions, useGithubGetInstallUrl, getGithubCreateInstallationAccessTokenMutationOptions, useGithubCreateInstallationAccessToken */
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80549);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53455);
/* harmony import */ var _lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37010);
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ 

/**
 * Create a user integration record for a GitHub App installation.
This should be called from the frontend after the installation process is completed.
 * @summary Create Installation
 */ const githubCreateInstallation = (installationId, options, signal)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://super-agent-api.beta.myninja.ai/api/github-app/installations/".concat(installationId),
        method: 'POST',
        signal
    }, options);
};
const getGithubCreateInstallationMutationOptions = (options)=>{
    const mutationKey = [
        'githubCreateInstallation'
    ];
    const { mutation: mutationOptions, request: requestOptions } = options ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ? options : {
        ...options,
        mutation: {
            ...options.mutation,
            mutationKey
        }
    } : {
        mutation: {
            mutationKey
        },
        request: undefined
    };
    const mutationFn = (props)=>{
        const { installationId } = props !== null && props !== void 0 ? props : {};
        return githubCreateInstallation(installationId, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Create Installation
 */ const useGithubCreateInstallation = (options, queryClient)=>{
    const mutationOptions = getGithubCreateInstallationMutationOptions(options);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useMutation */ .n)(mutationOptions, queryClient);
};
/**
 * Get details of a specific installation.
 * @summary Get Installation
 */ const githubGetInstallation = (installationId, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/github-app/installations/".concat(installationId),
        method: 'GET',
        signal
    }, options);
};
const getGithubGetInstallationQueryKey = (installationId)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/github-app/installations/".concat(installationId)
    ];
};
const getGithubGetInstallationInfiniteQueryOptions = (installationId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGithubGetInstallationQueryKey(installationId);
    const queryFn = (param)=>{
        let { signal } = param;
        return githubGetInstallation(installationId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!installationId,
        ...queryOptions
    };
};
/**
 * @summary Get Installation
 */ function useGithubGetInstallationInfinite(installationId, options, queryClient) {
    const queryOptions = getGithubGetInstallationInfiniteQueryOptions(installationId, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGithubGetInstallationQueryOptions = (installationId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGithubGetInstallationQueryKey(installationId);
    const queryFn = (param)=>{
        let { signal } = param;
        return githubGetInstallation(installationId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!installationId,
        ...queryOptions
    };
};
/**
 * @summary Get Installation
 */ function useGithubGetInstallation(installationId, options, queryClient) {
    const queryOptions = getGithubGetInstallationQueryOptions(installationId, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Get installations available for a given user.
 * @summary List Installations
 */ const githubListInstallations = (options, signal)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://super-agent-api.beta.myninja.ai/api/github-app/installations",
        method: 'GET',
        signal
    }, options);
};
const getGithubListInstallationsQueryKey = ()=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/github-app/installations"
    ];
};
const getGithubListInstallationsInfiniteQueryOptions = (options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGithubListInstallationsQueryKey();
    const queryFn = (param)=>{
        let { signal } = param;
        return githubListInstallations(requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary List Installations
 */ function useGithubListInstallationsInfinite(options, queryClient) {
    const queryOptions = getGithubListInstallationsInfiniteQueryOptions(options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGithubListInstallationsQueryOptions = (options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGithubListInstallationsQueryKey();
    const queryFn = (param)=>{
        let { signal } = param;
        return githubListInstallations(requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary List Installations
 */ function useGithubListInstallations(options, queryClient) {
    const queryOptions = getGithubListInstallationsQueryOptions(options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Get combined repositories list across all User's installations.
 * @summary List All Repositories
 */ const githubListAllRepositories = (options, signal)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://super-agent-api.beta.myninja.ai/api/github-app/installations/repositories",
        method: 'GET',
        signal
    }, options);
};
const getGithubListAllRepositoriesQueryKey = ()=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/github-app/installations/repositories"
    ];
};
const getGithubListAllRepositoriesInfiniteQueryOptions = (options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGithubListAllRepositoriesQueryKey();
    const queryFn = (param)=>{
        let { signal } = param;
        return githubListAllRepositories(requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary List All Repositories
 */ function useGithubListAllRepositoriesInfinite(options, queryClient) {
    const queryOptions = getGithubListAllRepositoriesInfiniteQueryOptions(options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGithubListAllRepositoriesQueryOptions = (options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGithubListAllRepositoriesQueryKey();
    const queryFn = (param)=>{
        let { signal } = param;
        return githubListAllRepositories(requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary List All Repositories
 */ function useGithubListAllRepositories(options, queryClient) {
    const queryOptions = getGithubListAllRepositoriesQueryOptions(options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * List repositories accessible to an installation.
 * @summary List Installation Repositories
 */ const githubListInstallationRepositories = (installationId, options, signal)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://super-agent-api.beta.myninja.ai/api/github-app/installations/".concat(installationId, "/repositories"),
        method: 'GET',
        signal
    }, options);
};
const getGithubListInstallationRepositoriesQueryKey = (installationId)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/github-app/installations/".concat(installationId, "/repositories")
    ];
};
const getGithubListInstallationRepositoriesInfiniteQueryOptions = (installationId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGithubListInstallationRepositoriesQueryKey(installationId);
    const queryFn = (param)=>{
        let { signal } = param;
        return githubListInstallationRepositories(installationId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!installationId,
        ...queryOptions
    };
};
/**
 * @summary List Installation Repositories
 */ function useGithubListInstallationRepositoriesInfinite(installationId, options, queryClient) {
    const queryOptions = getGithubListInstallationRepositoriesInfiniteQueryOptions(installationId, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGithubListInstallationRepositoriesQueryOptions = (installationId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGithubListInstallationRepositoriesQueryKey(installationId);
    const queryFn = (param)=>{
        let { signal } = param;
        return githubListInstallationRepositories(installationId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!installationId,
        ...queryOptions
    };
};
/**
 * @summary List Installation Repositories
 */ function useGithubListInstallationRepositories(installationId, options, queryClient) {
    const queryOptions = getGithubListInstallationRepositoriesQueryOptions(installationId, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * List all branches for a repository accessible to an installation.
 * @summary List Repository Branches
 */ const githubListRepositoryBranches = (installationId, repoName, options, signal)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://super-agent-api.beta.myninja.ai/api/github-app/installations/".concat(installationId, "/repositories/").concat(repoName, "/branches"),
        method: 'GET',
        signal
    }, options);
};
const getGithubListRepositoryBranchesQueryKey = (installationId, repoName)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/github-app/installations/".concat(installationId, "/repositories/").concat(repoName, "/branches")
    ];
};
const getGithubListRepositoryBranchesInfiniteQueryOptions = (installationId, repoName, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGithubListRepositoryBranchesQueryKey(installationId, repoName);
    const queryFn = (param)=>{
        let { signal } = param;
        return githubListRepositoryBranches(installationId, repoName, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(installationId && repoName),
        ...queryOptions
    };
};
/**
 * @summary List Repository Branches
 */ function useGithubListRepositoryBranchesInfinite(installationId, repoName, options, queryClient) {
    const queryOptions = getGithubListRepositoryBranchesInfiniteQueryOptions(installationId, repoName, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGithubListRepositoryBranchesQueryOptions = (installationId, repoName, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGithubListRepositoryBranchesQueryKey(installationId, repoName);
    const queryFn = (param)=>{
        let { signal } = param;
        return githubListRepositoryBranches(installationId, repoName, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(installationId && repoName),
        ...queryOptions
    };
};
/**
 * @summary List Repository Branches
 */ function useGithubListRepositoryBranches(installationId, repoName, options, queryClient) {
    const queryOptions = getGithubListRepositoryBranchesQueryOptions(installationId, repoName, options);
    const query = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .I)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Get the GitHub App installation URL.
 * @summary Get Install Url
 */ const githubGetInstallUrl = (params, options, signal)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://super-agent-api.beta.myninja.ai/api/github-app/install-url",
        method: 'GET',
        params,
        signal
    }, options);
};
const getGithubGetInstallUrlQueryKey = (params)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/github-app/install-url",
        ...params ? [
            params
        ] : []
    ];
};
const getGithubGetInstallUrlInfiniteQueryOptions = (params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGithubGetInstallUrlQueryKey(params);
    const queryFn = (param)=>{
        let { signal } = param;
        return githubGetInstallUrl(params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary Get Install Url
 */ function useGithubGetInstallUrlInfinite(params, options, queryClient) {
    const queryOptions = getGithubGetInstallUrlInfiniteQueryOptions(params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGithubGetInstallUrlQueryOptions = (params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGithubGetInstallUrlQueryKey(params);
    const queryFn = (param)=>{
        let { signal } = param;
        return githubGetInstallUrl(params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary Get Install Url
 */ function useGithubGetInstallUrl(params, options, queryClient) {
    const queryOptions = getGithubGetInstallUrlQueryOptions(params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Generate an installation access token.
TODO: after all refactoring, should be GET I believe
 * @summary Create Installation Access Token
 */ const githubCreateInstallationAccessToken = (installationId, options, signal)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://super-agent-api.beta.myninja.ai/api/github-app/installations/".concat(installationId, "/access-token"),
        method: 'POST',
        signal
    }, options);
};
const getGithubCreateInstallationAccessTokenMutationOptions = (options)=>{
    const mutationKey = [
        'githubCreateInstallationAccessToken'
    ];
    const { mutation: mutationOptions, request: requestOptions } = options ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ? options : {
        ...options,
        mutation: {
            ...options.mutation,
            mutationKey
        }
    } : {
        mutation: {
            mutationKey
        },
        request: undefined
    };
    const mutationFn = (props)=>{
        const { installationId } = props !== null && props !== void 0 ? props : {};
        return githubCreateInstallationAccessToken(installationId, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Create Installation Access Token
 */ const useGithubCreateInstallationAccessToken = (options, queryClient)=>{
    const mutationOptions = getGithubCreateInstallationAccessTokenMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};


/***/ }),

/***/ 81131:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"label":"CommandLabel_label__ppJRE","labelText":"CommandLabel_labelText__9ySaI","nj-animate-horizontal-appearance-ltr-enter":"CommandLabel_nj-animate-horizontal-appearance-ltr-enter__AimCi","nj-animate-horizontal-appearance-ltr-enter-active":"CommandLabel_nj-animate-horizontal-appearance-ltr-enter-active__cGwhx","nj-animate-horizontal-appearance-ltr-exit":"CommandLabel_nj-animate-horizontal-appearance-ltr-exit__nbekL","nj-animate-horizontal-appearance-ltr-exit-active":"CommandLabel_nj-animate-horizontal-appearance-ltr-exit-active__sqwnd","nj-animate-left-panel-width-reduce-enter":"CommandLabel_nj-animate-left-panel-width-reduce-enter__PNL08","nj-animate-left-panel-width-reduce-enter-active":"CommandLabel_nj-animate-left-panel-width-reduce-enter-active__ZuDQw","nj-animate-left-panel-width-reduce-exit":"CommandLabel_nj-animate-left-panel-width-reduce-exit__sLSvo","nj-animate-left-panel-width-reduce-exit-active":"CommandLabel_nj-animate-left-panel-width-reduce-exit-active__KuP4K","nj-animate-vertical-appearance-appear":"CommandLabel_nj-animate-vertical-appearance-appear__eAP5p","nj-animate-vertical-appearance-appear-active":"CommandLabel_nj-animate-vertical-appearance-appear-active__HaKtX","nj-animate-vertical-appearance-enter":"CommandLabel_nj-animate-vertical-appearance-enter__9_0P4","nj-animate-vertical-appearance-enter-active":"CommandLabel_nj-animate-vertical-appearance-enter-active__1V0hH","nj-animate-vertical-appearance-exit":"CommandLabel_nj-animate-vertical-appearance-exit__PiaCv","nj-animate-vertical-appearance-exit-active":"CommandLabel_nj-animate-vertical-appearance-exit-active__TQYeC","closeButton":"CommandLabel_closeButton__yikNT","infinite-spinner":"CommandLabel_infinite-spinner__WtKwU","fadeIn":"CommandLabel_fadeIn__so_if","blinking":"CommandLabel_blinking__SFDjJ","movingRight":"CommandLabel_movingRight__UnX5D"};

/***/ }),

/***/ 81240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* reexport */ NinjaLoader)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./src/components/ui/NinjaLoader/NinjaLoader.module.scss
var NinjaLoader_module = __webpack_require__(2208);
var NinjaLoader_module_default = /*#__PURE__*/__webpack_require__.n(NinjaLoader_module);
// EXTERNAL MODULE: ./src/assets/icons/superNinjaIcon.tsx
var superNinjaIcon = __webpack_require__(48525);
;// ./src/components/ui/NinjaLoader/NinjaLoader.tsx
/* __next_internal_client_entry_do_not_use__ NinjaLoader auto */ 


const SIZE = 160;
const NinjaLoader = (param)=>{
    let { content } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (NinjaLoader_module_default()).root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (NinjaLoader_module_default()).imageContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(superNinjaIcon/* SuperNinjaIcon */.z, {
                        size: SIZE
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (NinjaLoader_module_default()).spinner
                    })
                ]
            }),
            content && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (NinjaLoader_module_default()).content,
                children: content
            })
        ]
    });
};

;// ./src/components/ui/NinjaLoader/index.tsx



/***/ }),

/***/ 82240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* reexport */ FadeTransition)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/CSSTransition.js + 9 modules
var CSSTransition = __webpack_require__(35598);
// EXTERNAL MODULE: ./src/components/ui/FadeTransition/FadeTransition.module.scss
var FadeTransition_module = __webpack_require__(37596);
var FadeTransition_module_default = /*#__PURE__*/__webpack_require__.n(FadeTransition_module);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
;// ./src/components/ui/FadeTransition/FadeTransition.tsx
/* __next_internal_client_entry_do_not_use__ FadeTransition auto */ 



const FadeTransition = (param)=>{
    let { inProp, nodeRef, children, unmountOnExit = true, onExited } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CSSTransition/* default */.A, {
        in: inProp,
        timeout: constants/* ANIMATION_TIMEOUT */.j$8,
        classNames: {
            enter: (FadeTransition_module_default()).fadeEnter,
            enterActive: (FadeTransition_module_default()).fadeEnterActive,
            exit: (FadeTransition_module_default()).fadeExit,
            exitActive: (FadeTransition_module_default()).fadeExitActive
        },
        nodeRef: nodeRef,
        unmountOnExit: unmountOnExit,
        onExited: onExited,
        children: children
    });
};

;// ./src/components/ui/FadeTransition/index.ts



/***/ }),

/***/ 83617:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"RunTimer_root__1d7ho","timerContainer":"RunTimer_timerContainer__EUcVX","nj-animate-horizontal-appearance-ltr-enter":"RunTimer_nj-animate-horizontal-appearance-ltr-enter__rfS9l","nj-animate-horizontal-appearance-ltr-enter-active":"RunTimer_nj-animate-horizontal-appearance-ltr-enter-active__XZVGW","nj-animate-horizontal-appearance-ltr-exit":"RunTimer_nj-animate-horizontal-appearance-ltr-exit__iPZ64","nj-animate-horizontal-appearance-ltr-exit-active":"RunTimer_nj-animate-horizontal-appearance-ltr-exit-active__WUn0O","nj-animate-left-panel-width-reduce-enter":"RunTimer_nj-animate-left-panel-width-reduce-enter__Am0BX","nj-animate-left-panel-width-reduce-enter-active":"RunTimer_nj-animate-left-panel-width-reduce-enter-active__dJFn6","nj-animate-left-panel-width-reduce-exit":"RunTimer_nj-animate-left-panel-width-reduce-exit__LeUol","nj-animate-left-panel-width-reduce-exit-active":"RunTimer_nj-animate-left-panel-width-reduce-exit-active__4hFjl","nj-animate-vertical-appearance-appear":"RunTimer_nj-animate-vertical-appearance-appear__XIHnU","nj-animate-vertical-appearance-appear-active":"RunTimer_nj-animate-vertical-appearance-appear-active__i4Ecv","nj-animate-vertical-appearance-enter":"RunTimer_nj-animate-vertical-appearance-enter__XbAN8","nj-animate-vertical-appearance-enter-active":"RunTimer_nj-animate-vertical-appearance-enter-active__WXvZD","nj-animate-vertical-appearance-exit":"RunTimer_nj-animate-vertical-appearance-exit__7j9tM","nj-animate-vertical-appearance-exit-active":"RunTimer_nj-animate-vertical-appearance-exit-active__0t3i4","duration":"RunTimer_duration__T204e","infinite-spinner":"RunTimer_infinite-spinner__GKMVc","fadeIn":"RunTimer_fadeIn__CyavI","blinking":"RunTimer_blinking__0M4wJ","movingRight":"RunTimer_movingRight__C9txy"};

/***/ }),

/***/ 85471:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"title":"ImageSettingsSelector_title__T9PCM","label":"ImageSettingsSelector_label__t6Jrh","container":"ImageSettingsSelector_container__BPk7T","button":"ImageSettingsSelector_button__RA8kL","buttonText":"ImageSettingsSelector_buttonText___OYyC","titleText":"ImageSettingsSelector_titleText__altu2","active":"ImageSettingsSelector_active__KcTmK","labelDesc":"ImageSettingsSelector_labelDesc__72ZEa","nj-animate-horizontal-appearance-ltr-enter":"ImageSettingsSelector_nj-animate-horizontal-appearance-ltr-enter__wa4t6","nj-animate-horizontal-appearance-ltr-enter-active":"ImageSettingsSelector_nj-animate-horizontal-appearance-ltr-enter-active__Mc6JM","nj-animate-horizontal-appearance-ltr-exit":"ImageSettingsSelector_nj-animate-horizontal-appearance-ltr-exit__5mQe5","nj-animate-horizontal-appearance-ltr-exit-active":"ImageSettingsSelector_nj-animate-horizontal-appearance-ltr-exit-active__GTLLw","nj-animate-left-panel-width-reduce-enter":"ImageSettingsSelector_nj-animate-left-panel-width-reduce-enter__sZl_F","nj-animate-left-panel-width-reduce-enter-active":"ImageSettingsSelector_nj-animate-left-panel-width-reduce-enter-active__0duna","nj-animate-left-panel-width-reduce-exit":"ImageSettingsSelector_nj-animate-left-panel-width-reduce-exit__McZV0","nj-animate-left-panel-width-reduce-exit-active":"ImageSettingsSelector_nj-animate-left-panel-width-reduce-exit-active__u2qJv","nj-animate-vertical-appearance-appear":"ImageSettingsSelector_nj-animate-vertical-appearance-appear__y51VC","nj-animate-vertical-appearance-appear-active":"ImageSettingsSelector_nj-animate-vertical-appearance-appear-active__br__M","nj-animate-vertical-appearance-enter":"ImageSettingsSelector_nj-animate-vertical-appearance-enter__L3WD1","nj-animate-vertical-appearance-enter-active":"ImageSettingsSelector_nj-animate-vertical-appearance-enter-active__6h7Aj","nj-animate-vertical-appearance-exit":"ImageSettingsSelector_nj-animate-vertical-appearance-exit__koTml","nj-animate-vertical-appearance-exit-active":"ImageSettingsSelector_nj-animate-vertical-appearance-exit-active__TrGm8","saveButton":"ImageSettingsSelector_saveButton__vLIt2","disabled":"ImageSettingsSelector_disabled__pDRqf","infinite-spinner":"ImageSettingsSelector_infinite-spinner__fzLgB","fadeIn":"ImageSettingsSelector_fadeIn__qhR7W","blinking":"ImageSettingsSelector_blinking__OW0yi","movingRight":"ImageSettingsSelector_movingRight__n7bA_"};

/***/ }),

/***/ 86948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wu: () => (/* binding */ CardContent),
/* harmony export */   ZB: () => (/* binding */ CardTitle),
/* harmony export */   Zp: () => (/* binding */ Card)
/* harmony export */ });
/* unused harmony exports CardHeader, CardFooter, CardAction, CardDescription */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64269);



function Card(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        "data-slot": "card",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    });
}
function CardHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "card-header",
        className: cn('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    });
}
function CardTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        "data-slot": "card-title",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('leading-none font-semibold', className),
        ...props
    });
}
function CardDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "card-description",
        className: cn('text-muted-foreground text-sm', className),
        ...props
    });
}
function CardAction(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "card-action",
        className: cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    });
}
function CardContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        "data-slot": "card-content",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('px-6', className),
        ...props
    });
}
function CardFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "card-footer",
        className: cn('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    });
}



/***/ }),

/***/ 92663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ useSandboxProviderSelection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* harmony import */ var _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73262);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47615);
/* harmony import */ var posthog_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26302);




const STORAGE_KEY_SANDBOX_PROVIDER = 'selected-sandbox-provider';
const useSandboxProviderSelection = ()=>{
    const [selectedProvider, setSelectedProvider] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_SANDBOX_PROVIDER */ .q1W);
    const isResetDefaultSandboxProviderEnabled = (0,posthog_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useFeatureFlagEnabled */ .Tp)('reset-default-sandbox-provider');
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        try {
            const storedProvider = localStorage.getItem(STORAGE_KEY_SANDBOX_PROVIDER);
            if (storedProvider) {
                if (isResetDefaultSandboxProviderEnabled) {
                    localStorage.setItem(STORAGE_KEY_SANDBOX_PROVIDER, _constants__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_SANDBOX_PROVIDER */ .q1W);
                } else {
                    setSelectedProvider(storedProvider);
                }
            }
        } catch (error) {
            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_1__/* .datadogLogs */ .yf.logger.error('Failed to load sandbox provider preference from localStorage:', {}, error);
        }
    }, []);
    const handleProviderChange = (providerId)=>{
        setSelectedProvider(providerId);
        try {
            localStorage.setItem(STORAGE_KEY_SANDBOX_PROVIDER, providerId);
        } catch (error) {
            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_1__/* .datadogLogs */ .yf.logger.error('Failed to save sandbox provider preference to localStorage:', {}, error);
        }
    };
    return {
        selectedProvider,
        setSelectedProvider: handleProviderChange
    };
};


/***/ }),

/***/ 95253:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"upgradeContainer":"TutorialPayerWithUpgradeBtn_upgradeContainer__nAt_b","header":"TutorialPayerWithUpgradeBtn_header__1v7_a","nj-animate-horizontal-appearance-ltr-enter":"TutorialPayerWithUpgradeBtn_nj-animate-horizontal-appearance-ltr-enter__oayb_","nj-animate-horizontal-appearance-ltr-enter-active":"TutorialPayerWithUpgradeBtn_nj-animate-horizontal-appearance-ltr-enter-active__gpYou","nj-animate-horizontal-appearance-ltr-exit":"TutorialPayerWithUpgradeBtn_nj-animate-horizontal-appearance-ltr-exit__oCkPM","nj-animate-horizontal-appearance-ltr-exit-active":"TutorialPayerWithUpgradeBtn_nj-animate-horizontal-appearance-ltr-exit-active__taojO","nj-animate-left-panel-width-reduce-enter":"TutorialPayerWithUpgradeBtn_nj-animate-left-panel-width-reduce-enter__kpGgO","nj-animate-left-panel-width-reduce-enter-active":"TutorialPayerWithUpgradeBtn_nj-animate-left-panel-width-reduce-enter-active__p6bam","nj-animate-left-panel-width-reduce-exit":"TutorialPayerWithUpgradeBtn_nj-animate-left-panel-width-reduce-exit__HvkOV","nj-animate-left-panel-width-reduce-exit-active":"TutorialPayerWithUpgradeBtn_nj-animate-left-panel-width-reduce-exit-active__6tbbj","nj-animate-vertical-appearance-appear":"TutorialPayerWithUpgradeBtn_nj-animate-vertical-appearance-appear__er_yO","nj-animate-vertical-appearance-appear-active":"TutorialPayerWithUpgradeBtn_nj-animate-vertical-appearance-appear-active__2duvl","nj-animate-vertical-appearance-enter":"TutorialPayerWithUpgradeBtn_nj-animate-vertical-appearance-enter__aTQNc","nj-animate-vertical-appearance-enter-active":"TutorialPayerWithUpgradeBtn_nj-animate-vertical-appearance-enter-active__nfeYY","nj-animate-vertical-appearance-exit":"TutorialPayerWithUpgradeBtn_nj-animate-vertical-appearance-exit__uyS_V","nj-animate-vertical-appearance-exit-active":"TutorialPayerWithUpgradeBtn_nj-animate-vertical-appearance-exit-active__1Pnr8","root":"TutorialPayerWithUpgradeBtn_root__5SJ_X","playerShell":"TutorialPayerWithUpgradeBtn_playerShell__82IyU","infinite-spinner":"TutorialPayerWithUpgradeBtn_infinite-spinner__RaU3F","fadeIn":"TutorialPayerWithUpgradeBtn_fadeIn__bNdck","blinking":"TutorialPayerWithUpgradeBtn_blinking__3cgHK","movingRight":"TutorialPayerWithUpgradeBtn_movingRight__9ObUN"};

/***/ }),

/***/ 95709:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"ModeSelectorTrigger_root__UqhLL","value":"ModeSelectorTrigger_value__uX5_7","nj-animate-horizontal-appearance-ltr-enter":"ModeSelectorTrigger_nj-animate-horizontal-appearance-ltr-enter__fnUNM","nj-animate-horizontal-appearance-ltr-enter-active":"ModeSelectorTrigger_nj-animate-horizontal-appearance-ltr-enter-active__mCiAR","nj-animate-horizontal-appearance-ltr-exit":"ModeSelectorTrigger_nj-animate-horizontal-appearance-ltr-exit__TIkU1","nj-animate-horizontal-appearance-ltr-exit-active":"ModeSelectorTrigger_nj-animate-horizontal-appearance-ltr-exit-active__tPlbD","nj-animate-left-panel-width-reduce-enter":"ModeSelectorTrigger_nj-animate-left-panel-width-reduce-enter__nQ7X2","nj-animate-left-panel-width-reduce-enter-active":"ModeSelectorTrigger_nj-animate-left-panel-width-reduce-enter-active__MAK6z","nj-animate-left-panel-width-reduce-exit":"ModeSelectorTrigger_nj-animate-left-panel-width-reduce-exit__MjVk6","nj-animate-left-panel-width-reduce-exit-active":"ModeSelectorTrigger_nj-animate-left-panel-width-reduce-exit-active__ggCeZ","nj-animate-vertical-appearance-appear":"ModeSelectorTrigger_nj-animate-vertical-appearance-appear__tajk4","nj-animate-vertical-appearance-appear-active":"ModeSelectorTrigger_nj-animate-vertical-appearance-appear-active__pGiaA","nj-animate-vertical-appearance-enter":"ModeSelectorTrigger_nj-animate-vertical-appearance-enter__CkEow","nj-animate-vertical-appearance-enter-active":"ModeSelectorTrigger_nj-animate-vertical-appearance-enter-active__C_gC3","nj-animate-vertical-appearance-exit":"ModeSelectorTrigger_nj-animate-vertical-appearance-exit__w4uZt","nj-animate-vertical-appearance-exit-active":"ModeSelectorTrigger_nj-animate-vertical-appearance-exit-active__NPfyY","infinite-spinner":"ModeSelectorTrigger_infinite-spinner__WgYBR","fadeIn":"ModeSelectorTrigger_fadeIn__RPldh","blinking":"ModeSelectorTrigger_blinking__duNoe","movingRight":"ModeSelectorTrigger_movingRight__ixs0c"};

/***/ }),

/***/ 96599:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"CreationSection_root__jbLOw","nj-animate-horizontal-appearance-ltr-enter":"CreationSection_nj-animate-horizontal-appearance-ltr-enter__SSTnv","nj-animate-horizontal-appearance-ltr-enter-active":"CreationSection_nj-animate-horizontal-appearance-ltr-enter-active__YkohH","nj-animate-horizontal-appearance-ltr-exit":"CreationSection_nj-animate-horizontal-appearance-ltr-exit__BZuhT","nj-animate-horizontal-appearance-ltr-exit-active":"CreationSection_nj-animate-horizontal-appearance-ltr-exit-active__DoIVi","nj-animate-left-panel-width-reduce-enter":"CreationSection_nj-animate-left-panel-width-reduce-enter__5MeCe","nj-animate-left-panel-width-reduce-enter-active":"CreationSection_nj-animate-left-panel-width-reduce-enter-active__hqYJh","nj-animate-left-panel-width-reduce-exit":"CreationSection_nj-animate-left-panel-width-reduce-exit__KDrXX","nj-animate-left-panel-width-reduce-exit-active":"CreationSection_nj-animate-left-panel-width-reduce-exit-active__StlIU","nj-animate-vertical-appearance-appear":"CreationSection_nj-animate-vertical-appearance-appear__qlPnm","nj-animate-vertical-appearance-appear-active":"CreationSection_nj-animate-vertical-appearance-appear-active__zVdBW","nj-animate-vertical-appearance-enter":"CreationSection_nj-animate-vertical-appearance-enter__tCuG9","nj-animate-vertical-appearance-enter-active":"CreationSection_nj-animate-vertical-appearance-enter-active__WFzE4","nj-animate-vertical-appearance-exit":"CreationSection_nj-animate-vertical-appearance-exit__zXGo2","nj-animate-vertical-appearance-exit-active":"CreationSection_nj-animate-vertical-appearance-exit-active__NbaC6","infinite-spinner":"CreationSection_infinite-spinner__DdnV_","fadeIn":"CreationSection_fadeIn__vWYGb","blinking":"CreationSection_blinking__2Mqq9","movingRight":"CreationSection_movingRight__dBayQ"};

/***/ }),

/***/ 97473:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"NinjaVSCodeModal_root__QomzF","content":"NinjaVSCodeModal_content__wEL8R","fieldGroup":"NinjaVSCodeModal_fieldGroup__IBx_f","uploadSection":"NinjaVSCodeModal_uploadSection__CtYc8","filesList":"NinjaVSCodeModal_filesList__wDHfa","footer":"NinjaVSCodeModal_footer__7IvuX","fieldHeader":"NinjaVSCodeModal_fieldHeader__ua5lU","fileItem":"NinjaVSCodeModal_fileItem__g93Qa","title":"NinjaVSCodeModal_title__y4dLm","fieldLabel":"NinjaVSCodeModal_fieldLabel__Iom_S","description":"NinjaVSCodeModal_description___gc99","fileName":"NinjaVSCodeModal_fileName__qsaxt","optionalLabel":"NinjaVSCodeModal_optionalLabel__VoOyU","nj-animate-horizontal-appearance-ltr-enter":"NinjaVSCodeModal_nj-animate-horizontal-appearance-ltr-enter__1wDFF","nj-animate-horizontal-appearance-ltr-enter-active":"NinjaVSCodeModal_nj-animate-horizontal-appearance-ltr-enter-active__tyZdC","nj-animate-horizontal-appearance-ltr-exit":"NinjaVSCodeModal_nj-animate-horizontal-appearance-ltr-exit__93OkU","nj-animate-horizontal-appearance-ltr-exit-active":"NinjaVSCodeModal_nj-animate-horizontal-appearance-ltr-exit-active__aMiCB","nj-animate-left-panel-width-reduce-enter":"NinjaVSCodeModal_nj-animate-left-panel-width-reduce-enter__XoBoo","nj-animate-left-panel-width-reduce-enter-active":"NinjaVSCodeModal_nj-animate-left-panel-width-reduce-enter-active__T95uO","nj-animate-left-panel-width-reduce-exit":"NinjaVSCodeModal_nj-animate-left-panel-width-reduce-exit__MhSaL","nj-animate-left-panel-width-reduce-exit-active":"NinjaVSCodeModal_nj-animate-left-panel-width-reduce-exit-active__XKba2","nj-animate-vertical-appearance-appear":"NinjaVSCodeModal_nj-animate-vertical-appearance-appear__2oL21","nj-animate-vertical-appearance-appear-active":"NinjaVSCodeModal_nj-animate-vertical-appearance-appear-active__xU1El","nj-animate-vertical-appearance-enter":"NinjaVSCodeModal_nj-animate-vertical-appearance-enter__tlspu","nj-animate-vertical-appearance-enter-active":"NinjaVSCodeModal_nj-animate-vertical-appearance-enter-active__hud_G","nj-animate-vertical-appearance-exit":"NinjaVSCodeModal_nj-animate-vertical-appearance-exit__zp50g","nj-animate-vertical-appearance-exit-active":"NinjaVSCodeModal_nj-animate-vertical-appearance-exit-active__roMEj","input":"NinjaVSCodeModal_input__Q1swR","uploadButton":"NinjaVSCodeModal_uploadButton__ZTDm_","hiddenInput":"NinjaVSCodeModal_hiddenInput__nhwTx","removeButton":"NinjaVSCodeModal_removeButton__myDUP","continueButton":"NinjaVSCodeModal_continueButton__80KJ5","githubSelectorWrapper":"NinjaVSCodeModal_githubSelectorWrapper__ytIes","infinite-spinner":"NinjaVSCodeModal_infinite-spinner___iI2v","fadeIn":"NinjaVSCodeModal_fadeIn__PERc0","blinking":"NinjaVSCodeModal_blinking__WVGxp","movingRight":"NinjaVSCodeModal_movingRight__3yaC3"};

/***/ })

}]);
//# sourceMappingURL=5883-50adf7b201c39b36.js.map