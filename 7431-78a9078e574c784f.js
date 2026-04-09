(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7431],{

/***/ 2726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* reexport safe */ _SpinnerSimple__WEBPACK_IMPORTED_MODULE_0__.c)
/* harmony export */ });
/* harmony import */ var _SpinnerSimple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67147);



/***/ }),

/***/ 5072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ useUserSettings)
/* harmony export */ });
/* harmony import */ var _components_AuthProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19016);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _gen_tasks_api_users_public_users_public_gen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76448);
/* harmony import */ var _constants_mockUserSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76254);




const useUserSettings = (settingKey, isLandingPage, enabled)=>{
    const { user } = (0,_components_AuthProvider__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .A)();
    const { data, refetch } = (0,_gen_tasks_api_users_public_users_public_gen__WEBPACK_IMPORTED_MODULE_2__/* .useGetUserSettings */ .Mw)(user, settingKey, {
        query: {
            enabled: (enabled !== null && enabled !== void 0 ? enabled : true) && !!user && !isLandingPage
        }
    });
    const { mutateAsync, isPending } = (0,_gen_tasks_api_users_public_users_public_gen__WEBPACK_IMPORTED_MODULE_2__/* .useUpdateSettingValue */ .Ib)();
    const updateSettings = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((newValue)=>{
        if (isLandingPage) {
            return Promise.resolve();
        }
        return mutateAsync({
            userId: user,
            settingKey,
            data: {
                new_value: newValue
            }
        }).finally(()=>{
            refetch();
        });
    }, [
        mutateAsync,
        user,
        settingKey,
        refetch,
        isLandingPage
    ]);
    const settings = isLandingPage ? _constants_mockUserSettings__WEBPACK_IMPORTED_MODULE_3__/* .MOCK_USER_SETTINGS */ .P : data === null || data === void 0 ? void 0 : data.settings;
    const setting = settings ? settings[settingKey] : undefined;
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            setting,
            updateSettings,
            isPending: isLandingPage ? false : isPending
        }), [
        setting,
        updateSettings,
        isPending,
        isLandingPage
    ]);
};


/***/ }),

/***/ 29715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $B: () => (/* binding */ NotificationsSettingKeys),
/* harmony export */   M0: () => (/* binding */ ImageGenStyles),
/* harmony export */   P0: () => (/* binding */ imageStyleOptions),
/* harmony export */   P3: () => (/* binding */ ChatSettingKeys),
/* harmony export */   Xr: () => (/* binding */ ImageGenNewSettingsDimensionOptionTypes),
/* harmony export */   fc: () => (/* binding */ imageStyleOptionsMap),
/* harmony export */   gG: () => (/* binding */ TimezoneSettingKeys),
/* harmony export */   wY: () => (/* binding */ ImageSettingsPrimaryGroup),
/* harmony export */   wm: () => (/* binding */ ImageSettingKeys)
/* harmony export */ });
var ImageSettingKeys = /*#__PURE__*/ function(ImageSettingKeys) {
    ImageSettingKeys["IMAGE"] = "image:";
    ImageSettingKeys["IMAGE_PRIMARY_MODEL"] = "image:primary_model";
    ImageSettingKeys["IMAGE_SIZES"] = "image:size";
    ImageSettingKeys["IMAGE_STYLES"] = "image:style";
    ImageSettingKeys["IMAGE_BACKGROUND"] = "image:background";
    ImageSettingKeys["IMAGE_DIMENTIONS"] = "image:image_type";
    return ImageSettingKeys;
}({});
var ChatSettingKeys = /*#__PURE__*/ function(ChatSettingKeys) {
    ChatSettingKeys["CHAT"] = "writer:";
    ChatSettingKeys["CHAT_PRIMARY_MODEL"] = "writer:primary_model";
    return ChatSettingKeys;
}({});
var NotificationsSettingKeys = /*#__PURE__*/ function(NotificationsSettingKeys) {
    NotificationsSettingKeys["TASK_EMAIL"] = "notifications:sn_agent:email";
    return NotificationsSettingKeys;
}({});
var ImageGenStyles = /*#__PURE__*/ function(ImageGenStyles) {
    ImageGenStyles["NONE"] = "none";
    ImageGenStyles["CINEMATIC"] = "cinematic";
    ImageGenStyles["PHOTOGRAPHIC"] = "photographic";
    ImageGenStyles["ANIME"] = "anime";
    ImageGenStyles["MANGA"] = "manga";
    ImageGenStyles["DIGITAL_ART"] = "digital_art";
    ImageGenStyles["PIXEL_ART"] = "pixel_art";
    ImageGenStyles["FANTASY_ART"] = "fantasy_art";
    ImageGenStyles["NEONPUNK"] = "neonpunk";
    ImageGenStyles["MODEL_3D"] = "model_3d";
    return ImageGenStyles;
}({});
const imageStyleOptions = [
    {
        value: 'none',
        label: 'None'
    },
    {
        value: 'cinematic',
        label: 'Cinematic'
    },
    {
        value: 'photographic',
        label: 'Photographic'
    },
    {
        value: 'anime',
        label: 'Anime'
    },
    {
        value: 'manga',
        label: 'Manga'
    },
    {
        value: 'digital_art',
        label: 'Digital'
    },
    {
        value: 'pixel_art',
        label: 'Pixel Art'
    },
    {
        value: 'fantasy_art',
        label: 'Fantasy'
    },
    {
        value: 'neonpunk',
        label: 'Neonpunk'
    },
    {
        value: 'model_3d',
        label: '3D'
    }
];
const imageStyleOptionsMap = {
    ...Object.fromEntries(imageStyleOptions.map((style)=>[
            style.value,
            style.label
        ])),
    none: 'no style',
    undefined: 'no style'
};
var ImageGenNewSettingsDimensionOptionTypes = /*#__PURE__*/ function(ImageGenNewSettingsDimensionOptionTypes) {
    ImageGenNewSettingsDimensionOptionTypes["SQUARE"] = "square";
    ImageGenNewSettingsDimensionOptionTypes["PORTRAIT"] = "portrait";
    ImageGenNewSettingsDimensionOptionTypes["LANDSCAPE"] = "landscape";
    return ImageGenNewSettingsDimensionOptionTypes;
}({});
const ImageSettingsPrimaryGroup = {
    ["square"]: {
        title: 'Square',
        resolution: '1024x1024'
    },
    ["portrait"]: {
        title: 'Portrait',
        resolution: '1024x1536'
    },
    ["landscape"]: {
        title: 'Landscape',
        resolution: '1536x1024'
    }
};
var TimezoneSettingKeys = /*#__PURE__*/ function(TimezoneSettingKeys) {
    TimezoneSettingKeys["SELECTED_TIMEZONE"] = "general:manually_selected_timezone";
    return TimezoneSettingKeys;
}({});


/***/ }),

/***/ 58624:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"nj-animate-horizontal-appearance-ltr-enter":"SpinnerSimple_nj-animate-horizontal-appearance-ltr-enter__H6Q_u","nj-animate-horizontal-appearance-ltr-enter-active":"SpinnerSimple_nj-animate-horizontal-appearance-ltr-enter-active__p9V75","nj-animate-horizontal-appearance-ltr-exit":"SpinnerSimple_nj-animate-horizontal-appearance-ltr-exit__WBTo3","nj-animate-horizontal-appearance-ltr-exit-active":"SpinnerSimple_nj-animate-horizontal-appearance-ltr-exit-active__Gt47b","nj-animate-left-panel-width-reduce-enter":"SpinnerSimple_nj-animate-left-panel-width-reduce-enter__A_0v5","nj-animate-left-panel-width-reduce-enter-active":"SpinnerSimple_nj-animate-left-panel-width-reduce-enter-active__UYhiG","nj-animate-left-panel-width-reduce-exit":"SpinnerSimple_nj-animate-left-panel-width-reduce-exit__8Lzwk","nj-animate-left-panel-width-reduce-exit-active":"SpinnerSimple_nj-animate-left-panel-width-reduce-exit-active___eDva","nj-animate-vertical-appearance-appear":"SpinnerSimple_nj-animate-vertical-appearance-appear__v_HTv","nj-animate-vertical-appearance-appear-active":"SpinnerSimple_nj-animate-vertical-appearance-appear-active__0ZADK","nj-animate-vertical-appearance-enter":"SpinnerSimple_nj-animate-vertical-appearance-enter__sRRdK","nj-animate-vertical-appearance-enter-active":"SpinnerSimple_nj-animate-vertical-appearance-enter-active__TDwed","nj-animate-vertical-appearance-exit":"SpinnerSimple_nj-animate-vertical-appearance-exit__xLIj7","nj-animate-vertical-appearance-exit-active":"SpinnerSimple_nj-animate-vertical-appearance-exit-active___mUVi","root":"SpinnerSimple_root__92vcd","spinner":"SpinnerSimple_spinner__MzSRH","infinite-spinner":"SpinnerSimple_infinite-spinner__1TfF5","primary":"SpinnerSimple_primary__Q3MQ_","secondary":"SpinnerSimple_secondary__REzYq","gradient":"SpinnerSimple_gradient__IPHX6","fadeIn":"SpinnerSimple_fadeIn__AJ_xL","blinking":"SpinnerSimple_blinking__Icjbe","movingRight":"SpinnerSimple_movingRight__ksjl5"};

/***/ }),

/***/ 67147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ SpinnerSimple)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85203);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SpinnerSimple_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58624);
/* harmony import */ var _SpinnerSimple_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SpinnerSimple_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47615);
/* __next_internal_client_entry_do_not_use__ SpinnerSimple auto */ 



const SpinnerSimple = (param)=>{
    let { size = _constants__WEBPACK_IMPORTED_MODULE_3__/* .SVG_SIZE_M */ .ng3, className, color = 'gradient' } = param;
    const style = {
        width: size,
        height: size
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        style: style,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_SpinnerSimple_module_scss__WEBPACK_IMPORTED_MODULE_2___default().root), className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            style: style,
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_SpinnerSimple_module_scss__WEBPACK_IMPORTED_MODULE_2___default().spinner), (_SpinnerSimple_module_scss__WEBPACK_IMPORTED_MODULE_2___default())[color])
        })
    });
};


/***/ }),

/***/ 76254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ MOCK_USER_SETTINGS),
/* harmony export */   R: () => (/* binding */ MOCK_MODEL_METADATA)
/* harmony export */ });
/* harmony import */ var _constants_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29715);

const MOCK_MODEL_METADATA = {
    'agent/ninjatech/text-auto': {
        display_name: 'Ninja Auto-selects AI model',
        group: 'NinjaTech',
        icon: 'ninjatech',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/ninjatech/ninja-agent': {
        display_name: 'Fine-tuned Llama 3.3 70B',
        group: 'NinjaTech',
        icon: 'ninjatech',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/ninjatech/super-agent:turbo': {
        display_name: 'Turbo 1.0',
        group: 'NinjaTech',
        icon: 'ninjatech:super-agent',
        skill: 'text',
        description: 'Fast with mix of internal models',
        data: {}
    },
    'alias/ninjatech/super-agent:nexus': {
        display_name: 'SuperAgent Nexus',
        group: 'NinjaTech',
        icon: 'ninjatech:super-agent',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/ninjatech/super-agent:apex': {
        display_name: 'Apex 1.0',
        group: 'NinjaTech',
        icon: 'ninjatech:super-agent',
        skill: 'text',
        description: 'Slow & high quality using premium external models',
        data: {}
    },
    'alias/ninjatech/super-agent:reasoning': {
        display_name: 'Reasoning 2.0',
        group: 'NinjaTech',
        icon: 'ninjatech:super-agent',
        skill: 'text',
        description: 'Advanced reasoning for complex logic and coding',
        data: {
            is_new: true
        }
    },
    'agent/ninjatech/super-agent:deep-research': {
        display_name: 'Deep Researcher 2.0',
        group: 'NinjaTech',
        icon: 'ninjatech:super-agent',
        skill: 'text',
        description: 'Online Deep Research',
        data: {}
    },
    'alias/amazon/nova-micro': {
        display_name: 'Amazon Nova Micro',
        group: 'Amazon Bedrock',
        icon: 'amazon:nova',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/amazon/nova-lite': {
        display_name: 'Amazon Nova Lite',
        group: 'Amazon Bedrock',
        icon: 'amazon:nova',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/amazon/nova-pro': {
        display_name: 'Amazon Nova Pro',
        group: 'Amazon Bedrock',
        icon: 'amazon:nova',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/amazon/titan-text-g1-express': {
        display_name: 'Titan Text G1 - Express',
        group: 'Amazon Bedrock',
        icon: 'amazon:nova',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/amazon/titan-text-g1-lite': {
        display_name: 'Titan Text G1 - Lite',
        group: 'Amazon Bedrock',
        icon: 'amazon:nova',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/amazon/titan-text-premier': {
        display_name: 'Amazon Titan Text Premier',
        group: 'Amazon Bedrock',
        icon: 'amazon:nova',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/anthropic/claude-opus-4-5': {
        display_name: 'Claude 4.5 Opus',
        group: 'Amazon Bedrock',
        icon: 'anthropic',
        skill: 'text',
        description: null,
        data: {
            is_new: true
        }
    },
    'alias/anthropic/claude-sonnet-4-5-bedrock': {
        display_name: 'Claude 4.5 Sonnet',
        group: 'Amazon Bedrock',
        icon: 'anthropic',
        skill: 'text',
        description: null,
        data: {
            is_new: true
        }
    },
    'alias/anthropic/claude-haiku-4-5-bedrock': {
        display_name: 'Claude 4.5 Haiku',
        group: 'Amazon Bedrock',
        icon: 'anthropic',
        skill: 'text',
        description: null
    },
    'alias/anthropic/claude-4-sonnet': {
        display_name: 'Claude 4 Sonnet',
        group: 'Amazon Bedrock',
        icon: 'anthropic',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/cohere/command-r': {
        display_name: 'Command R',
        group: 'Amazon Bedrock',
        icon: 'cohere',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/cohere/command-r-plus': {
        display_name: 'Command R+',
        group: 'Amazon Bedrock',
        icon: 'cohere',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/mistral/mistral-small': {
        display_name: 'Mistral Small',
        group: 'Amazon Bedrock',
        icon: 'mistral',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/mistral/mistral-large': {
        display_name: 'Mistral Large',
        group: 'Amazon Bedrock',
        icon: 'mistral',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/deepseek/deepseek-v3': {
        display_name: 'DeepSeek V3',
        group: 'DeepSeek',
        icon: 'deepseek',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/deepseek/deepseek-v3p1': {
        display_name: 'DeepSeek V3.1',
        group: 'DeepSeek',
        icon: 'deepseek',
        skill: 'text',
        description: null,
        data: {
            is_new: true
        }
    },
    'alias/deepseek/deepseek-r1': {
        display_name: 'DeepSeek R1',
        group: 'DeepSeek',
        icon: 'deepseek',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/openai/gpt-5.1': {
        display_name: 'GPT-5.1',
        group: 'OpenAI',
        icon: 'openai',
        skill: 'text',
        description: null,
        data: {
            is_new: true
        }
    },
    // TODO: https://ninjatech.atlassian.net/browse/NJ-8954
    //   'alias/openai/gpt-5.1-codex': {
    //     display_name: 'GPT-5.1 Codex',
    //     group: 'OpenAI',
    //     icon: 'openai',
    //     skill: 'text',
    //     description: null,
    //     data: {
    //       is_new: true,
    //     },
    //   },
    'alias/openai/gpt-5': {
        display_name: 'GPT-5',
        group: 'OpenAI',
        icon: 'openai',
        skill: 'text',
        description: null
    },
    'alias/openai/gpt-5-mini': {
        display_name: 'GPT-5 Mini',
        group: 'OpenAI',
        icon: 'openai',
        skill: 'text',
        description: null
    },
    'alias/openai/gpt-5-high-thinking': {
        display_name: 'GPT-5 High Thinking',
        group: 'OpenAI',
        icon: 'openai',
        skill: 'text',
        description: null
    },
    'alias/openai/o3': {
        display_name: 'O3',
        group: 'OpenAI',
        icon: 'openai',
        skill: 'text',
        description: null,
        data: {
            is_new: true
        }
    },
    'alias/openai/gpt-4.1': {
        display_name: 'GPT-4.1',
        group: 'OpenAI',
        icon: 'openai',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/openai/gpt-4.1-mini': {
        display_name: 'GPT-4.1 Mini',
        group: 'OpenAI',
        icon: 'openai',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/google/gemini-3.0-pro': {
        display_name: 'Gemini 3.0 Pro (Preview)',
        group: 'Google',
        icon: 'google:gemini',
        skill: 'text',
        description: null,
        data: {
            is_new: true
        }
    },
    'alias/google/gemini-2.5-pro': {
        display_name: 'Gemini 2.5 Pro',
        group: 'Google',
        icon: 'google:gemini',
        skill: 'text',
        description: null,
        data: {
            is_new: true
        }
    },
    'alias/google/gemini-2.5-flash': {
        display_name: 'Gemini 2.5 Flash',
        group: 'Google',
        icon: 'google:gemini',
        skill: 'text',
        description: null,
        data: {
            is_new: true
        }
    },
    'alias/google/gemini-1.5-flash': {
        display_name: 'Gemini 1.5 Flash',
        group: 'Google',
        icon: 'google:gemini',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/google/gemini-1.5-pro': {
        display_name: 'Gemini 1.5 Pro',
        group: 'Google',
        icon: 'google:gemini',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/google/gemini-2.0-flash': {
        display_name: 'Gemini 2.0 Flash',
        group: 'Google',
        icon: 'google:gemini',
        skill: 'text',
        description: null,
        data: {}
    },
    'alias/meta/llama-4-scout': {
        display_name: 'Llama 4 Scout (Groq Fast)',
        group: 'Meta',
        icon: 'llama',
        skill: 'text',
        description: null,
        data: {
            is_new: true
        }
    },
    'alias/meta/llama-4-maverick': {
        display_name: 'Llama 4 Maverick (Groq Fast)',
        group: 'Meta',
        icon: 'llama',
        skill: 'text',
        description: null,
        data: {
            is_new: true
        }
    },
    'alias/alibaba/qwen-3-32b': {
        display_name: 'Qwen 3 32B (Groq Fast)',
        group: 'Alibaba',
        icon: 'alibaba',
        skill: 'text',
        description: null,
        data: {
            is_new: true
        }
    },
    'alias/alibaba/qwen-3-32b-cerebras': {
        display_name: 'Qwen 3 32B (Cerebras Ultra Fast)',
        group: 'Alibaba',
        icon: 'alibaba',
        skill: 'text',
        description: null,
        data: {
            is_new: true
        }
    },
    'alias/xai/grok4': {
        display_name: 'Grok 4 (Preview)',
        group: 'xai',
        icon: 'xai',
        skill: 'text',
        description: null,
        data: {
            is_new: true
        }
    },
    'alias/xai/grok-code-fast': {
        display_name: 'Grok Code Fast',
        group: 'xai',
        icon: 'xai',
        skill: 'text',
        description: null,
        data: {
            is_new: true
        }
    },
    'agent/ninjatech/image-auto': {
        display_name: 'Ninja Auto-selects AI model',
        group: 'NinjaTech',
        icon: 'ninjatech',
        skill: 'image',
        description: null,
        data: {}
    },
    'alias/ninjatech/flux': {
        display_name: 'FLUX Schnell',
        group: 'NinjaTech',
        icon: 'ninjatech',
        skill: 'image',
        description: null,
        data: {}
    },
    'alias/ninjatech/flux-pro': {
        display_name: 'FLUX 1.1 PRO',
        group: 'NinjaTech',
        icon: 'ninjatech',
        skill: 'image',
        description: null,
        data: {}
    },
    'alias/amazon/nova-canvas': {
        display_name: 'Amazon Nova Canvas',
        group: 'Amazon Bedrock',
        icon: 'amazon:nova',
        skill: 'image',
        description: null,
        data: {}
    },
    'alias/stability/stable-diffusion-xl': {
        display_name: 'Stable Diffusion Core',
        group: 'Amazon Bedrock',
        icon: 'stable-diffusion',
        skill: 'image',
        description: null,
        data: {}
    },
    'alias/openai/dall-e-3': {
        display_name: 'DALL-E 3',
        group: 'OpenAI',
        icon: 'openai',
        skill: 'image',
        description: null,
        data: {}
    },
    'alias/openai/gpt-image-1': {
        display_name: 'GPT Image 1',
        group: 'OpenAI',
        icon: 'openai',
        skill: 'image',
        description: null,
        data: {
            is_new: true
        }
    },
    'gemini-image-3.0-pro': {
        display_name: 'Gemini Image 3.0 Pro (Preview)',
        group: 'Google',
        icon: 'google:gemini',
        skill: 'image',
        description: null,
        data: {
            is_new: true
        }
    },
    'alias/google/imagen-4': {
        display_name: 'Gemini Imagen 4 (Preview)',
        group: 'Google',
        icon: 'google:gemini',
        skill: 'image',
        description: null,
        data: {
            is_new: true
        }
    },
    'alias/google/imagen-4-ultra': {
        display_name: 'Gemini Imagen 4 Ultra (Preview)',
        group: 'Google',
        icon: 'google:gemini',
        skill: 'image',
        description: null,
        data: {
            is_new: true
        }
    },
    'alias/google/imagen-4-fast': {
        display_name: 'Gemini Imagen 4 Fast (Preview)',
        group: 'Google',
        icon: 'google:gemini',
        skill: 'image',
        description: null,
        data: {
            is_new: true
        }
    },
    'alias/blackforestlabs/flux.1-kontext-pro': {
        display_name: 'FLUX.1 Kontext [pro]',
        group: 'NinjaTech',
        icon: 'ninjatech',
        skill: 'image',
        description: null,
        data: {
            is_new: true
        }
    }
};
const MOCK_USER_SETTINGS = {
    [_constants_settings__WEBPACK_IMPORTED_MODULE_0__/* .ImageSettingKeys */ .wm.IMAGE_PRIMARY_MODEL]: {
        value: 'agent/ninjatech/image-auto',
        user_editable: true,
        description: 'model to use when generating images',
        options: {
            'agent/ninjatech/image-auto': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/ninjatech/flux': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/blackforestlabs/flux.1-kontext-pro': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/ninjatech/flux-pro': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/openai/gpt-image-1': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/openai/dall-e-3': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/amazon/nova-canvas': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/stability/stable-diffusion-xl': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/google/imagen-4-ultra': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/google/imagen-4': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/google/imagen-4-fast': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            }
        },
        setting_type: 'Select'
    },
    [_constants_settings__WEBPACK_IMPORTED_MODULE_0__/* .ChatSettingKeys */ .P3.CHAT_PRIMARY_MODEL]: {
        value: 'agent/ninjatech/text-auto',
        user_editable: true,
        description: 'model to use when performing writer/coder skills',
        options: {
            'agent/ninjatech/text-auto': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/anthropic/claude-sonnet-4-5-bedrock': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/openai/gpt-5.1': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/google/gemini-3.0-pro': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/xai/grok-code-fast': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/deepseek/deepseek-v3p1': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/anthropic/claude-opus-4-5': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/anthropic/claude-haiku-4-5-bedrock': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/anthropic/claude-4-sonnet': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/openai/gpt-5': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/openai/gpt-5-mini': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/openai/gpt-5-high-thinking': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/openai/o3': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/openai/gpt-4.1': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/openai/gpt-4.1-mini': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/google/gemini-2.5-pro': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/google/gemini-2.5-flash': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/deepseek/deepseek-r1': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/deepseek/deepseek-v3': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/alibaba/qwen-3-32b-cerebras': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/alibaba/qwen-3-32b': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/meta/llama-4-scout': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/meta/llama-4-maverick': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/ninjatech/super-agent:reasoning': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/ninjatech/super-agent:turbo': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/ninjatech/super-agent:apex': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/amazon/nova-pro': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/amazon/nova-lite': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/amazon/nova-micro': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/xai/grok4': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/cohere/command-r-plus': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/cohere/command-r': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/mistral/mistral-large': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            },
            'alias/mistral/mistral-small': {
                selectable: true,
                requires: null,
                unselectable_reason: null,
                group: null
            }
        },
        setting_type: 'Select'
    }
};


/***/ }),

/***/ 76448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ib: () => (/* binding */ useUpdateSettingValue),
/* harmony export */   JQ: () => (/* binding */ useGetMeta),
/* harmony export */   Mw: () => (/* binding */ useGetUserSettings)
/* harmony export */ });
/* unused harmony exports getUser, getGetUserQueryKey, getGetUserInfiniteQueryOptions, useGetUserInfinite, getGetUserQueryOptions, useGetUser, userSelfDeletion, getUserSelfDeletionMutationOptions, useUserSelfDeletion, recordUserLocation, getRecordUserLocationMutationOptions, useRecordUserLocation, checkTaskQuota, getCheckTaskQuotaQueryKey, getCheckTaskQuotaInfiniteQueryOptions, useCheckTaskQuotaInfinite, getCheckTaskQuotaQueryOptions, useCheckTaskQuota, getUserConversations, getGetUserConversationsQueryKey, getGetUserConversationsInfiniteQueryOptions, useGetUserConversationsInfinite, getGetUserConversationsQueryOptions, useGetUserConversations, getUserConversation, getGetUserConversationQueryKey, getGetUserConversationInfiniteQueryOptions, useGetUserConversationInfinite, getGetUserConversationQueryOptions, useGetUserConversation, patchConversation, getPatchConversationMutationOptions, usePatchConversation, deleteUserConversation, getDeleteUserConversationMutationOptions, useDeleteUserConversation, getShare, getGetShareQueryKey, getGetShareInfiniteQueryOptions, useGetShareInfinite, getGetShareQueryOptions, useGetShare, shareUserConversation, getShareUserConversationMutationOptions, useShareUserConversation, unshareUserConversation, getUnshareUserConversationMutationOptions, useUnshareUserConversation, deleteUserConversationMessages, getDeleteUserConversationMessagesMutationOptions, useDeleteUserConversationMessages, markNoAttentionRequired, getMarkNoAttentionRequiredMutationOptions, useMarkNoAttentionRequired, getUserTopConversations, getGetUserTopConversationsQueryKey, getGetUserTopConversationsInfiniteQueryOptions, useGetUserTopConversationsInfinite, getGetUserTopConversationsQueryOptions, useGetUserTopConversations, archiveUserTopConversations, getArchiveUserTopConversationsMutationOptions, useArchiveUserTopConversations, getUserTask, getGetUserTaskQueryKey, getGetUserTaskInfiniteQueryOptions, useGetUserTaskInfinite, getGetUserTaskQueryOptions, useGetUserTask, putUserTask, getPutUserTaskMutationOptions, usePutUserTask, patchUserTask, getPatchUserTaskMutationOptions, usePatchUserTask, transitionUserTaskState, getTransitionUserTaskStateMutationOptions, useTransitionUserTaskState, getUserTaskState, getGetUserTaskStateQueryKey, getGetUserTaskStateInfiniteQueryOptions, useGetUserTaskStateInfinite, getGetUserTaskStateQueryOptions, useGetUserTaskState, taskMessagesSetRead, getTaskMessagesSetReadMutationOptions, useTaskMessagesSetRead, archiveAllTasks, getArchiveAllTasksMutationOptions, useArchiveAllTasks, getUserTasks, getGetUserTasksQueryKey, getGetUserTasksInfiniteQueryOptions, useGetUserTasksInfinite, getGetUserTasksQueryOptions, useGetUserTasks, getSharedContent, getGetSharedContentQueryKey, getGetSharedContentInfiniteQueryOptions, useGetSharedContentInfinite, getGetSharedContentQueryOptions, useGetSharedContent, createSupportTicket, getCreateSupportTicketMutationOptions, useCreateSupportTicket, getUserSettings, getGetUserSettingsQueryKey, getGetUserSettingsInfiniteQueryOptions, useGetUserSettingsInfinite, getGetUserSettingsQueryOptions, updateSettingValue, getUpdateSettingValueMutationOptions, getMeta, getGetMetaQueryKey, getGetMetaInfiniteQueryOptions, useGetMetaInfinite, getGetMetaQueryOptions, getReferralByUserId, getGetReferralByUserIdQueryKey, getGetReferralByUserIdInfiniteQueryOptions, useGetReferralByUserIdInfinite, getGetReferralByUserIdQueryOptions, useGetReferralByUserId, exposeReferralToUser, getExposeReferralToUserMutationOptions, useExposeReferralToUser, getUserNotifications, getGetUserNotificationsQueryKey, getGetUserNotificationsInfiniteQueryOptions, useGetUserNotificationsInfinite, getGetUserNotificationsQueryOptions, useGetUserNotifications, updateUserNotification, getUpdateUserNotificationMutationOptions, useUpdateUserNotification, logUtmParameters, getLogUtmParametersMutationOptions, useLogUtmParameters, getPlanVariantEntitlements, getGetPlanVariantEntitlementsQueryKey, getGetPlanVariantEntitlementsInfiniteQueryOptions, useGetPlanVariantEntitlementsInfinite, getGetPlanVariantEntitlementsQueryOptions, useGetPlanVariantEntitlements */
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53455);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80549);
/* harmony import */ var _lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37010);
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * Ninja Tasks API
 * OpenAPI spec version: 0.1.0
 */ 

/**
 * Read a user, used internally and publicly
 * @summary Get User
 */ const getUser = (userId, params, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId),
        method: 'GET',
        params,
        signal
    }, options);
};
const getGetUserQueryKey = (userId, params)=>{
    return [
        "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId),
        ...params ? [
            params
        ] : []
    ];
};
const getGetUserInfiniteQueryOptions = (userId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserQueryKey(userId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUser(userId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions
    };
};
/**
 * @summary Get User
 */ function useGetUserInfinite(userId, params, options, queryClient) {
    const queryOptions = getGetUserInfiniteQueryOptions(userId, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetUserQueryOptions = (userId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserQueryKey(userId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUser(userId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions
    };
};
/**
 * @summary Get User
 */ function useGetUser(userId, params, options, queryClient) {
    const queryOptions = getGetUserQueryOptions(userId, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * User initiated self deletion, and cancel all the current subscriptions and revoke access and delete user in user table.
 * @summary User Self Deletion
 */ const userSelfDeletion = (userId, options)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/self_deletion/".concat(userId),
        method: 'DELETE'
    }, options);
};
const getUserSelfDeletionMutationOptions = (options)=>{
    const mutationKey = [
        'userSelfDeletion'
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
        const { userId } = props !== null && props !== void 0 ? props : {};
        return userSelfDeletion(userId, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary User Self Deletion
 */ const useUserSelfDeletion = (options, queryClient)=>{
    const mutationOptions = getUserSelfDeletionMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Record User Location
 */ const recordUserLocation = (userId, locationRequest, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/location"),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: locationRequest,
        signal
    }, options);
};
const getRecordUserLocationMutationOptions = (options)=>{
    const mutationKey = [
        'recordUserLocation'
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
        const { userId, data } = props !== null && props !== void 0 ? props : {};
        return recordUserLocation(userId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Record User Location
 */ const useRecordUserLocation = (options, queryClient)=>{
    const mutationOptions = getRecordUserLocationMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * Check whether the user has exceeded their task quota,
if so, raise an exception which becomes a 402 response
 * @summary Check Task Quota
 */ const checkTaskQuota = (userId, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/check_task_quota"),
        method: 'GET',
        signal
    }, options);
};
const getCheckTaskQuotaQueryKey = (userId)=>{
    return [
        "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/check_task_quota")
    ];
};
const getCheckTaskQuotaInfiniteQueryOptions = (userId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getCheckTaskQuotaQueryKey(userId);
    const queryFn = (param)=>{
        let { signal } = param;
        return checkTaskQuota(userId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions
    };
};
/**
 * @summary Check Task Quota
 */ function useCheckTaskQuotaInfinite(userId, options, queryClient) {
    const queryOptions = getCheckTaskQuotaInfiniteQueryOptions(userId, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getCheckTaskQuotaQueryOptions = (userId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getCheckTaskQuotaQueryKey(userId);
    const queryFn = (param)=>{
        let { signal } = param;
        return checkTaskQuota(userId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions
    };
};
/**
 * @summary Check Task Quota
 */ function useCheckTaskQuota(userId, options, queryClient) {
    const queryOptions = getCheckTaskQuotaQueryOptions(userId, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Get the user's list of conversations
 * @summary Get User Conversations
 */ const getUserConversations = (userId, params, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/conversations"),
        method: 'GET',
        params,
        signal
    }, options);
};
const getGetUserConversationsQueryKey = (userId, params)=>{
    return [
        "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/conversations"),
        ...params ? [
            params
        ] : []
    ];
};
const getGetUserConversationsInfiniteQueryOptions = (userId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserConversationsQueryKey(userId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUserConversations(userId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions
    };
};
/**
 * @summary Get User Conversations
 */ function useGetUserConversationsInfinite(userId, params, options, queryClient) {
    const queryOptions = getGetUserConversationsInfiniteQueryOptions(userId, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetUserConversationsQueryOptions = (userId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserConversationsQueryKey(userId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUserConversations(userId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions
    };
};
/**
 * @summary Get User Conversations
 */ function useGetUserConversations(userId, params, options, queryClient) {
    const queryOptions = getGetUserConversationsQueryOptions(userId, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Get a user's conversation
 * @summary Get User Conversation
 */ const getUserConversation = (userId, conversationId, params, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/conversations/").concat(conversationId),
        method: 'GET',
        params,
        signal
    }, options);
};
const getGetUserConversationQueryKey = (userId, conversationId, params)=>{
    return [
        "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/conversations/").concat(conversationId),
        ...params ? [
            params
        ] : []
    ];
};
const getGetUserConversationInfiniteQueryOptions = (userId, conversationId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserConversationQueryKey(userId, conversationId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUserConversation(userId, conversationId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(userId && conversationId),
        ...queryOptions
    };
};
/**
 * @summary Get User Conversation
 */ function useGetUserConversationInfinite(userId, conversationId, params, options, queryClient) {
    const queryOptions = getGetUserConversationInfiniteQueryOptions(userId, conversationId, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetUserConversationQueryOptions = (userId, conversationId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserConversationQueryKey(userId, conversationId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUserConversation(userId, conversationId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(userId && conversationId),
        ...queryOptions
    };
};
/**
 * @summary Get User Conversation
 */ function useGetUserConversation(userId, conversationId, params, options, queryClient) {
    const queryOptions = getGetUserConversationQueryOptions(userId, conversationId, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Update an existing Conversation
 * @summary Patch Conversation
 */ const patchConversation = (userId, conversationId, patchConversation, options)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/conversations/").concat(conversationId),
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        data: patchConversation
    }, options);
};
const getPatchConversationMutationOptions = (options)=>{
    const mutationKey = [
        'patchConversation'
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
        const { userId, conversationId, data } = props !== null && props !== void 0 ? props : {};
        return patchConversation(userId, conversationId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Patch Conversation
 */ const usePatchConversation = (options, queryClient)=>{
    const mutationOptions = getPatchConversationMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Delete User Conversation
 */ const deleteUserConversation = (userId, conversationId, options)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/conversations/").concat(conversationId),
        method: 'DELETE'
    }, options);
};
const getDeleteUserConversationMutationOptions = (options)=>{
    const mutationKey = [
        'deleteUserConversation'
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
        const { userId, conversationId } = props !== null && props !== void 0 ? props : {};
        return deleteUserConversation(userId, conversationId, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Delete User Conversation
 */ const useDeleteUserConversation = (options, queryClient)=>{
    const mutationOptions = getDeleteUserConversationMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Get Share
 */ const getShare = (userId, conversationId, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/conversations/").concat(conversationId, "/share"),
        method: 'GET',
        signal
    }, options);
};
const getGetShareQueryKey = (userId, conversationId)=>{
    return [
        "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/conversations/").concat(conversationId, "/share")
    ];
};
const getGetShareInfiniteQueryOptions = (userId, conversationId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetShareQueryKey(userId, conversationId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getShare(userId, conversationId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(userId && conversationId),
        ...queryOptions
    };
};
/**
 * @summary Get Share
 */ function useGetShareInfinite(userId, conversationId, options, queryClient) {
    const queryOptions = getGetShareInfiniteQueryOptions(userId, conversationId, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetShareQueryOptions = (userId, conversationId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetShareQueryKey(userId, conversationId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getShare(userId, conversationId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(userId && conversationId),
        ...queryOptions
    };
};
/**
 * @summary Get Share
 */ function useGetShare(userId, conversationId, options, queryClient) {
    const queryOptions = getGetShareQueryOptions(userId, conversationId, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Share a conversation
 * @summary Share User Conversation
 */ const shareUserConversation = (userId, conversationId, shareConversationRequest, options)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/conversations/").concat(conversationId, "/share"),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        data: shareConversationRequest
    }, options);
};
const getShareUserConversationMutationOptions = (options)=>{
    const mutationKey = [
        'shareUserConversation'
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
        const { userId, conversationId, data } = props !== null && props !== void 0 ? props : {};
        return shareUserConversation(userId, conversationId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Share User Conversation
 */ const useShareUserConversation = (options, queryClient)=>{
    const mutationOptions = getShareUserConversationMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * Unshare a conversation or delete a shared link for conversation
 * @summary Unshare User Conversation
 */ const unshareUserConversation = (userId, conversationId, shareConversationRequest, options)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/conversations/").concat(conversationId, "/share"),
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        data: shareConversationRequest
    }, options);
};
const getUnshareUserConversationMutationOptions = (options)=>{
    const mutationKey = [
        'unshareUserConversation'
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
        const { userId, conversationId, data } = props !== null && props !== void 0 ? props : {};
        return unshareUserConversation(userId, conversationId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Unshare User Conversation
 */ const useUnshareUserConversation = (options, queryClient)=>{
    const mutationOptions = getUnshareUserConversationMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Delete User Conversation Messages
 */ const deleteUserConversationMessages = (userId, conversationId, deleteConversationMessagesRequest, options)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/conversations/").concat(conversationId, "/messages"),
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        data: deleteConversationMessagesRequest
    }, options);
};
const getDeleteUserConversationMessagesMutationOptions = (options)=>{
    const mutationKey = [
        'deleteUserConversationMessages'
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
        const { userId, conversationId, data } = props !== null && props !== void 0 ? props : {};
        return deleteUserConversationMessages(userId, conversationId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Delete User Conversation Messages
 */ const useDeleteUserConversationMessages = (options, queryClient)=>{
    const mutationOptions = getDeleteUserConversationMessagesMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * Mark all the tasks of a conversation as no attention required
 * @summary Mark No Attention Required
 */ const markNoAttentionRequired = (userId, conversationId, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/conversations/").concat(conversationId, "/mark_no_attention_required"),
        method: 'POST',
        signal
    }, options);
};
const getMarkNoAttentionRequiredMutationOptions = (options)=>{
    const mutationKey = [
        'markNoAttentionRequired'
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
        const { userId, conversationId } = props !== null && props !== void 0 ? props : {};
        return markNoAttentionRequired(userId, conversationId, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Mark No Attention Required
 */ const useMarkNoAttentionRequired = (options, queryClient)=>{
    const mutationOptions = getMarkNoAttentionRequiredMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * Get the user's list of top conversations (which doesn't belong to a task)
 * @summary Get User Top Conversations
 */ const getUserTopConversations = (userId, params, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/top_conversations"),
        method: 'GET',
        params,
        signal
    }, options);
};
const getGetUserTopConversationsQueryKey = (userId, params)=>{
    return [
        "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/top_conversations"),
        ...params ? [
            params
        ] : []
    ];
};
const getGetUserTopConversationsInfiniteQueryOptions = (userId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserTopConversationsQueryKey(userId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUserTopConversations(userId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions
    };
};
/**
 * @summary Get User Top Conversations
 */ function useGetUserTopConversationsInfinite(userId, params, options, queryClient) {
    const queryOptions = getGetUserTopConversationsInfiniteQueryOptions(userId, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetUserTopConversationsQueryOptions = (userId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserTopConversationsQueryKey(userId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUserTopConversations(userId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions
    };
};
/**
 * @summary Get User Top Conversations
 */ function useGetUserTopConversations(userId, params, options, queryClient) {
    const queryOptions = getGetUserTopConversationsQueryOptions(userId, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Archive all archivable top_conversations and archivable tasks for a user
 * @summary Archive User Top Conversations
 */ const archiveUserTopConversations = (userId, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/archive_all"),
        method: 'POST',
        signal
    }, options);
};
const getArchiveUserTopConversationsMutationOptions = (options)=>{
    const mutationKey = [
        'archiveUserTopConversations'
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
        const { userId } = props !== null && props !== void 0 ? props : {};
        return archiveUserTopConversations(userId, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Archive User Top Conversations
 */ const useArchiveUserTopConversations = (options, queryClient)=>{
    const mutationOptions = getArchiveUserTopConversationsMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * Read a task
 * @summary Get User Task
 */ const getUserTask = (userId, taskId, params, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/tasks/").concat(taskId),
        method: 'GET',
        params,
        signal
    }, options);
};
const getGetUserTaskQueryKey = (userId, taskId, params)=>{
    return [
        "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/tasks/").concat(taskId),
        ...params ? [
            params
        ] : []
    ];
};
const getGetUserTaskInfiniteQueryOptions = (userId, taskId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserTaskQueryKey(userId, taskId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUserTask(userId, taskId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(userId && taskId),
        ...queryOptions
    };
};
/**
 * @summary Get User Task
 */ function useGetUserTaskInfinite(userId, taskId, params, options, queryClient) {
    const queryOptions = getGetUserTaskInfiniteQueryOptions(userId, taskId, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetUserTaskQueryOptions = (userId, taskId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserTaskQueryKey(userId, taskId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUserTask(userId, taskId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(userId && taskId),
        ...queryOptions
    };
};
/**
 * @summary Get User Task
 */ function useGetUserTask(userId, taskId, params, options, queryClient) {
    const queryOptions = getGetUserTaskQueryOptions(userId, taskId, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Update an existing task
 * @summary Put User Task
 */ const putUserTask = (userId, taskId, apiTask, options)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/tasks/").concat(taskId),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        data: apiTask
    }, options);
};
const getPutUserTaskMutationOptions = (options)=>{
    const mutationKey = [
        'putUserTask'
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
        const { userId, taskId, data } = props !== null && props !== void 0 ? props : {};
        return putUserTask(userId, taskId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Put User Task
 */ const usePutUserTask = (options, queryClient)=>{
    const mutationOptions = getPutUserTaskMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * Patch an existing task
 * @summary Patch User Task
 */ const patchUserTask = (userId, taskId, patchApiTask, options)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/tasks/").concat(taskId),
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        data: patchApiTask
    }, options);
};
const getPatchUserTaskMutationOptions = (options)=>{
    const mutationKey = [
        'patchUserTask'
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
        const { userId, taskId, data } = props !== null && props !== void 0 ? props : {};
        return patchUserTask(userId, taskId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Patch User Task
 */ const usePatchUserTask = (options, queryClient)=>{
    const mutationOptions = getPatchUserTaskMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Transition User Task State
 */ const transitionUserTaskState = (userId, taskId, taskStateTransitionRequest, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/tasks/").concat(taskId, "/state/transition"),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: taskStateTransitionRequest,
        signal
    }, options);
};
const getTransitionUserTaskStateMutationOptions = (options)=>{
    const mutationKey = [
        'transitionUserTaskState'
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
        const { userId, taskId, data } = props !== null && props !== void 0 ? props : {};
        return transitionUserTaskState(userId, taskId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Transition User Task State
 */ const useTransitionUserTaskState = (options, queryClient)=>{
    const mutationOptions = getTransitionUserTaskStateMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Get User Task State
 */ const getUserTaskState = (userId, taskId, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/tasks/").concat(taskId, "/state"),
        method: 'GET',
        signal
    }, options);
};
const getGetUserTaskStateQueryKey = (userId, taskId)=>{
    return [
        "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/tasks/").concat(taskId, "/state")
    ];
};
const getGetUserTaskStateInfiniteQueryOptions = (userId, taskId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserTaskStateQueryKey(userId, taskId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUserTaskState(userId, taskId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(userId && taskId),
        ...queryOptions
    };
};
/**
 * @summary Get User Task State
 */ function useGetUserTaskStateInfinite(userId, taskId, options, queryClient) {
    const queryOptions = getGetUserTaskStateInfiniteQueryOptions(userId, taskId, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetUserTaskStateQueryOptions = (userId, taskId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserTaskStateQueryKey(userId, taskId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUserTaskState(userId, taskId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(userId && taskId),
        ...queryOptions
    };
};
/**
 * @summary Get User Task State
 */ function useGetUserTaskState(userId, taskId, options, queryClient) {
    const queryOptions = getGetUserTaskStateQueryOptions(userId, taskId, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Mark all the task messages as read.
 * @summary Task Messages Set Read
 */ const taskMessagesSetRead = (userId, taskId, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/tasks/").concat(taskId, "/messages/set_read"),
        method: 'POST',
        signal
    }, options);
};
const getTaskMessagesSetReadMutationOptions = (options)=>{
    const mutationKey = [
        'taskMessagesSetRead'
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
        const { userId, taskId } = props !== null && props !== void 0 ? props : {};
        return taskMessagesSetRead(userId, taskId, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Task Messages Set Read
 */ const useTaskMessagesSetRead = (options, queryClient)=>{
    const mutationOptions = getTaskMessagesSetReadMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * Archive all tasks for a user
 * @summary Archive All Tasks
 */ const archiveAllTasks = (userId, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/tasks/archive_all"),
        method: 'POST',
        signal
    }, options);
};
const getArchiveAllTasksMutationOptions = (options)=>{
    const mutationKey = [
        'archiveAllTasks'
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
        const { userId } = props !== null && props !== void 0 ? props : {};
        return archiveAllTasks(userId, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Archive All Tasks
 */ const useArchiveAllTasks = (options, queryClient)=>{
    const mutationOptions = getArchiveAllTasksMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * If page_token is provided, the query should have the exact same parameters as the previous query.
Return a list of tasks grouped by conversation id and filtered by:
    * user_id - User ID - required
    * page_token - Page token - optional
 * @summary Get User Tasks
 */ const getUserTasks = (userId, params, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/tasks"),
        method: 'GET',
        params,
        signal
    }, options);
};
const getGetUserTasksQueryKey = (userId, params)=>{
    return [
        "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/tasks"),
        ...params ? [
            params
        ] : []
    ];
};
const getGetUserTasksInfiniteQueryOptions = (userId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserTasksQueryKey(userId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUserTasks(userId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions
    };
};
/**
 * @summary Get User Tasks
 */ function useGetUserTasksInfinite(userId, params, options, queryClient) {
    const queryOptions = getGetUserTasksInfiniteQueryOptions(userId, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetUserTasksQueryOptions = (userId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserTasksQueryKey(userId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUserTasks(userId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions
    };
};
/**
 * @summary Get User Tasks
 */ function useGetUserTasks(userId, params, options, queryClient) {
    const queryOptions = getGetUserTasksQueryOptions(userId, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * From a message id, fetch user request, return message content along with user request
 * @summary Get Shared Content
 */ const getSharedContent = (userId, messageId, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/shared_content/").concat(messageId),
        method: 'GET',
        signal
    }, options);
};
const getGetSharedContentQueryKey = (userId, messageId)=>{
    return [
        "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/shared_content/").concat(messageId)
    ];
};
const getGetSharedContentInfiniteQueryOptions = (userId, messageId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetSharedContentQueryKey(userId, messageId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getSharedContent(userId, messageId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(userId && messageId),
        ...queryOptions
    };
};
/**
 * @summary Get Shared Content
 */ function useGetSharedContentInfinite(userId, messageId, options, queryClient) {
    const queryOptions = getGetSharedContentInfiniteQueryOptions(userId, messageId, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetSharedContentQueryOptions = (userId, messageId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetSharedContentQueryKey(userId, messageId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getSharedContent(userId, messageId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(userId && messageId),
        ...queryOptions
    };
};
/**
 * @summary Get Shared Content
 */ function useGetSharedContent(userId, messageId, options, queryClient) {
    const queryOptions = getGetSharedContentQueryOptions(userId, messageId, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Create a support ticket
 * @summary Create Support Ticket
 */ const createSupportTicket = (userId, supportTicketRequest, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/support_ticket"),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: supportTicketRequest,
        signal
    }, options);
};
const getCreateSupportTicketMutationOptions = (options)=>{
    const mutationKey = [
        'createSupportTicket'
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
        const { userId, data } = props !== null && props !== void 0 ? props : {};
        return createSupportTicket(userId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Create Support Ticket
 */ const useCreateSupportTicket = (options, queryClient)=>{
    const mutationOptions = getCreateSupportTicketMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * return detailed information on all the user settings inside a path. for the UI to display settings informaiton correctly.
 * @summary Get User Settings
 */ const getUserSettings = (userId, settingsScope, options, signal)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/settings/").concat(settingsScope),
        method: 'GET',
        signal
    }, options);
};
const getGetUserSettingsQueryKey = (userId, settingsScope)=>{
    return [
        "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/settings/").concat(settingsScope)
    ];
};
const getGetUserSettingsInfiniteQueryOptions = (userId, settingsScope, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserSettingsQueryKey(userId, settingsScope);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUserSettings(userId, settingsScope, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(userId && settingsScope),
        ...queryOptions
    };
};
/**
 * @summary Get User Settings
 */ function useGetUserSettingsInfinite(userId, settingsScope, options, queryClient) {
    const queryOptions = getGetUserSettingsInfiniteQueryOptions(userId, settingsScope, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetUserSettingsQueryOptions = (userId, settingsScope, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserSettingsQueryKey(userId, settingsScope);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUserSettings(userId, settingsScope, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(userId && settingsScope),
        ...queryOptions
    };
};
/**
 * @summary Get User Settings
 */ function useGetUserSettings(userId, settingsScope, options, queryClient) {
    const queryOptions = getGetUserSettingsQueryOptions(userId, settingsScope, options);
    const query = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .I)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * stores the users desired value for a setting. validating that its an acceptable value
 * @summary Update Setting Value
 */ const updateSettingValue = (userId, settingKey, updateSettingValueRequest, options)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/settings/").concat(settingKey),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        data: updateSettingValueRequest
    }, options);
};
const getUpdateSettingValueMutationOptions = (options)=>{
    const mutationKey = [
        'updateSettingValue'
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
        const { userId, settingKey, data } = props !== null && props !== void 0 ? props : {};
        return updateSettingValue(userId, settingKey, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Update Setting Value
 */ const useUpdateSettingValue = (options, queryClient)=>{
    const mutationOptions = getUpdateSettingValueMutationOptions(options);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useMutation */ .n)(mutationOptions, queryClient);
};
/**
 * return support information like AI models information, etc.
 * @summary Get Meta
 */ const getMeta = (userId, options, signal)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/meta"),
        method: 'GET',
        signal
    }, options);
};
const getGetMetaQueryKey = (userId)=>{
    return [
        "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/meta")
    ];
};
const getGetMetaInfiniteQueryOptions = (userId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetMetaQueryKey(userId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getMeta(userId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions
    };
};
/**
 * @summary Get Meta
 */ function useGetMetaInfinite(userId, options, queryClient) {
    const queryOptions = getGetMetaInfiniteQueryOptions(userId, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetMetaQueryOptions = (userId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetMetaQueryKey(userId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getMeta(userId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions
    };
};
/**
 * @summary Get Meta
 */ function useGetMeta(userId, options, queryClient) {
    const queryOptions = getGetMetaQueryOptions(userId, options);
    const query = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .I)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Get a referral for a user.
 * @summary Get Referral By User Id
 */ const getReferralByUserId = (userId, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/referral"),
        method: 'GET',
        signal
    }, options);
};
const getGetReferralByUserIdQueryKey = (userId)=>{
    return [
        "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/referral")
    ];
};
const getGetReferralByUserIdInfiniteQueryOptions = (userId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetReferralByUserIdQueryKey(userId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getReferralByUserId(userId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions
    };
};
/**
 * @summary Get Referral By User Id
 */ function useGetReferralByUserIdInfinite(userId, options, queryClient) {
    const queryOptions = getGetReferralByUserIdInfiniteQueryOptions(userId, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetReferralByUserIdQueryOptions = (userId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetReferralByUserIdQueryKey(userId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getReferralByUserId(userId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions
    };
};
/**
 * @summary Get Referral By User Id
 */ function useGetReferralByUserId(userId, options, queryClient) {
    const queryOptions = getGetReferralByUserIdQueryOptions(userId, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Expose a referral for a user.
 * @summary Expose Referral To User
 */ const exposeReferralToUser = (userId, referralId, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/expose_referral/").concat(referralId),
        method: 'POST',
        signal
    }, options);
};
const getExposeReferralToUserMutationOptions = (options)=>{
    const mutationKey = [
        'exposeReferralToUser'
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
        const { userId, referralId } = props !== null && props !== void 0 ? props : {};
        return exposeReferralToUser(userId, referralId, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Expose Referral To User
 */ const useExposeReferralToUser = (options, queryClient)=>{
    const mutationOptions = getExposeReferralToUserMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Get User Notifications
 */ const getUserNotifications = (userId, notificationType, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/notifications/").concat(notificationType),
        method: 'GET',
        signal
    }, options);
};
const getGetUserNotificationsQueryKey = (userId, notificationType)=>{
    return [
        "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/notifications/").concat(notificationType)
    ];
};
const getGetUserNotificationsInfiniteQueryOptions = (userId, notificationType, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserNotificationsQueryKey(userId, notificationType);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUserNotifications(userId, notificationType, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(userId && notificationType),
        ...queryOptions
    };
};
/**
 * @summary Get User Notifications
 */ function useGetUserNotificationsInfinite(userId, notificationType, options, queryClient) {
    const queryOptions = getGetUserNotificationsInfiniteQueryOptions(userId, notificationType, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetUserNotificationsQueryOptions = (userId, notificationType, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserNotificationsQueryKey(userId, notificationType);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUserNotifications(userId, notificationType, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(userId && notificationType),
        ...queryOptions
    };
};
/**
 * @summary Get User Notifications
 */ function useGetUserNotifications(userId, notificationType, options, queryClient) {
    const queryOptions = getGetUserNotificationsQueryOptions(userId, notificationType, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Update User Notification
 */ const updateUserNotification = (userId, notificationType, updateNotificationRequest, options)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/notifications/").concat(notificationType),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        data: updateNotificationRequest
    }, options);
};
const getUpdateUserNotificationMutationOptions = (options)=>{
    const mutationKey = [
        'updateUserNotification'
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
        const { userId, notificationType, data } = props !== null && props !== void 0 ? props : {};
        return updateUserNotification(userId, notificationType, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Update User Notification
 */ const useUpdateUserNotification = (options, queryClient)=>{
    const mutationOptions = getUpdateUserNotificationMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * Log UTM parameters for a user.
 * @summary Log Utm Parameters
 */ const logUtmParameters = (userId, uTMParameters, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/".concat(userId, "/utm/log"),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: uTMParameters,
        signal
    }, options);
};
const getLogUtmParametersMutationOptions = (options)=>{
    const mutationKey = [
        'logUtmParameters'
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
        const { userId, data } = props !== null && props !== void 0 ? props : {};
        return logUtmParameters(userId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Log Utm Parameters
 */ const useLogUtmParameters = (options, queryClient)=>{
    const mutationOptions = getLogUtmParametersMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Get Plan Variant Entitlements
 */ const getPlanVariantEntitlements = (planVariant, params, options, signal)=>{
    return customInstance({
        url: "https://tasks-api.beta.myninja.ai/v2/users/plan_variants/".concat(planVariant, "/entitlements"),
        method: 'GET',
        params,
        signal
    }, options);
};
const getGetPlanVariantEntitlementsQueryKey = (planVariant, params)=>{
    return [
        "https://tasks-api.beta.myninja.ai/v2/users/plan_variants/".concat(planVariant, "/entitlements"),
        ...params ? [
            params
        ] : []
    ];
};
const getGetPlanVariantEntitlementsInfiniteQueryOptions = (planVariant, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetPlanVariantEntitlementsQueryKey(planVariant, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getPlanVariantEntitlements(planVariant, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!planVariant,
        ...queryOptions
    };
};
/**
 * @summary Get Plan Variant Entitlements
 */ function useGetPlanVariantEntitlementsInfinite(planVariant, params, options, queryClient) {
    const queryOptions = getGetPlanVariantEntitlementsInfiniteQueryOptions(planVariant, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetPlanVariantEntitlementsQueryOptions = (planVariant, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetPlanVariantEntitlementsQueryKey(planVariant, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getPlanVariantEntitlements(planVariant, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!planVariant,
        ...queryOptions
    };
};
/**
 * @summary Get Plan Variant Entitlements
 */ function useGetPlanVariantEntitlements(planVariant, params, options, queryClient) {
    const queryOptions = getGetPlanVariantEntitlementsQueryOptions(planVariant, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}


/***/ })

}]);
//# sourceMappingURL=7431-78a9078e574c784f.js.map