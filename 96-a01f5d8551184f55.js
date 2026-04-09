(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[96],{

/***/ 10275:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"enabled":"BannerOnDemandCredit_enabled__ps2h_","disabled":"BannerOnDemandCredit_disabled__L35i2","root":"BannerOnDemandCredit_root__PDBXw","nj-animate-horizontal-appearance-ltr-enter":"BannerOnDemandCredit_nj-animate-horizontal-appearance-ltr-enter__K4nMD","nj-animate-horizontal-appearance-ltr-enter-active":"BannerOnDemandCredit_nj-animate-horizontal-appearance-ltr-enter-active__kc9SI","nj-animate-horizontal-appearance-ltr-exit":"BannerOnDemandCredit_nj-animate-horizontal-appearance-ltr-exit__kdTbr","nj-animate-horizontal-appearance-ltr-exit-active":"BannerOnDemandCredit_nj-animate-horizontal-appearance-ltr-exit-active__boVj4","nj-animate-left-panel-width-reduce-enter":"BannerOnDemandCredit_nj-animate-left-panel-width-reduce-enter__I98kK","nj-animate-left-panel-width-reduce-enter-active":"BannerOnDemandCredit_nj-animate-left-panel-width-reduce-enter-active__IeeEf","nj-animate-left-panel-width-reduce-exit":"BannerOnDemandCredit_nj-animate-left-panel-width-reduce-exit__d6C5_","nj-animate-left-panel-width-reduce-exit-active":"BannerOnDemandCredit_nj-animate-left-panel-width-reduce-exit-active__qp4UU","nj-animate-vertical-appearance-appear":"BannerOnDemandCredit_nj-animate-vertical-appearance-appear__fn9ZE","nj-animate-vertical-appearance-appear-active":"BannerOnDemandCredit_nj-animate-vertical-appearance-appear-active__6QSt_","nj-animate-vertical-appearance-enter":"BannerOnDemandCredit_nj-animate-vertical-appearance-enter__jVGZx","nj-animate-vertical-appearance-enter-active":"BannerOnDemandCredit_nj-animate-vertical-appearance-enter-active__4dXfm","nj-animate-vertical-appearance-exit":"BannerOnDemandCredit_nj-animate-vertical-appearance-exit__T12AP","nj-animate-vertical-appearance-exit-active":"BannerOnDemandCredit_nj-animate-vertical-appearance-exit-active__ooc8O","title":"BannerOnDemandCredit_title__ZnzR3","subtitle":"BannerOnDemandCredit_subtitle__4KfHA","body":"BannerOnDemandCredit_body__c5OLJ","infinite-spinner":"BannerOnDemandCredit_infinite-spinner__4k2_N","fadeIn":"BannerOnDemandCredit_fadeIn__GeIQu","blinking":"BannerOnDemandCredit_blinking__CeXG6","movingRight":"BannerOnDemandCredit_movingRight__q7cn0"};

/***/ }),

/***/ 12177:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"ScheduleSelector_root__mwdo_","nj-animate-horizontal-appearance-ltr-enter":"ScheduleSelector_nj-animate-horizontal-appearance-ltr-enter__StnOq","nj-animate-horizontal-appearance-ltr-enter-active":"ScheduleSelector_nj-animate-horizontal-appearance-ltr-enter-active__HtcOn","nj-animate-horizontal-appearance-ltr-exit":"ScheduleSelector_nj-animate-horizontal-appearance-ltr-exit__vNJ_T","nj-animate-horizontal-appearance-ltr-exit-active":"ScheduleSelector_nj-animate-horizontal-appearance-ltr-exit-active__0cijY","nj-animate-left-panel-width-reduce-enter":"ScheduleSelector_nj-animate-left-panel-width-reduce-enter__5TBlL","nj-animate-left-panel-width-reduce-enter-active":"ScheduleSelector_nj-animate-left-panel-width-reduce-enter-active__eaoct","nj-animate-left-panel-width-reduce-exit":"ScheduleSelector_nj-animate-left-panel-width-reduce-exit__3KZuy","nj-animate-left-panel-width-reduce-exit-active":"ScheduleSelector_nj-animate-left-panel-width-reduce-exit-active__ymlMI","nj-animate-vertical-appearance-appear":"ScheduleSelector_nj-animate-vertical-appearance-appear__01ZiE","nj-animate-vertical-appearance-appear-active":"ScheduleSelector_nj-animate-vertical-appearance-appear-active__JJl6b","nj-animate-vertical-appearance-enter":"ScheduleSelector_nj-animate-vertical-appearance-enter__vucng","nj-animate-vertical-appearance-enter-active":"ScheduleSelector_nj-animate-vertical-appearance-enter-active__QwaLP","nj-animate-vertical-appearance-exit":"ScheduleSelector_nj-animate-vertical-appearance-exit__nJbeR","nj-animate-vertical-appearance-exit-active":"ScheduleSelector_nj-animate-vertical-appearance-exit-active__JkTvM","infinite-spinner":"ScheduleSelector_infinite-spinner__yetIU","fadeIn":"ScheduleSelector_fadeIn___M_FU","blinking":"ScheduleSelector_blinking__r43Bl","movingRight":"ScheduleSelector_movingRight__dBEBw"};

/***/ }),

/***/ 13191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ useUserInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* harmony import */ var _lib_utils_amplify_client_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87214);
/* __next_internal_client_entry_do_not_use__ useUserInfo auto */ 

const useUserInfo = ()=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        ninja_user_id: '',
        name: 'Loading...',
        email: 'loading@example.com',
        avatar: ''
    });
    // Fetch user data
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const fetchUserData = async ()=>{
            const user = await (0,_lib_utils_amplify_client_utils__WEBPACK_IMPORTED_MODULE_1__/* .getUserFromAmplifySession */ .K)();
            if (user) {
                setUser(user);
            }
        };
        fetchUserData();
    }, []);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            ninja_user_id: (user === null || user === void 0 ? void 0 : user.ninja_user_id) || '',
            name: (user === null || user === void 0 ? void 0 : user.name) || '',
            email: (user === null || user === void 0 ? void 0 : user.email) || '',
            avatar: (user === null || user === void 0 ? void 0 : user.avatar) || ''
        }), [
        user
    ]);
};


/***/ }),

/***/ 20093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* reexport */ BannerOnDemandCredit)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button = __webpack_require__(62717);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./src/components/thread/AddScheduleTaskModal/BannerOnDemandCredit/BannerOnDemandCredit.module.scss
var BannerOnDemandCredit_module = __webpack_require__(10275);
var BannerOnDemandCredit_module_default = /*#__PURE__*/__webpack_require__.n(BannerOnDemandCredit_module);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(64269);
;// ./src/components/thread/AddScheduleTaskModal/BannerOnDemandCredit/BannerOnDemandCredit.tsx
/* __next_internal_client_entry_do_not_use__ BannerOnDemandCredit auto */ 




const BannerOnDemandCredit = (param)=>{
    let { isOnDemandEnable } = param;
    if (isOnDemandEnable) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (0,utils.cn)((BannerOnDemandCredit_module_default()).root, (BannerOnDemandCredit_module_default()).enabled),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (BannerOnDemandCredit_module_default()).title,
                    children: "On-demand credit enabled"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (BannerOnDemandCredit_module_default()).subtitle,
                    children: "Schedule task will use on-demand credits when it runs"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,utils.cn)((BannerOnDemandCredit_module_default()).root, (BannerOnDemandCredit_module_default()).disabled),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (BannerOnDemandCredit_module_default()).body,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (BannerOnDemandCredit_module_default()).title,
                        children: "On-demand credit required"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (BannerOnDemandCredit_module_default()).subtitle,
                        children: "Schedule task will use on-demand credits when it runs. Enable on-demand credits first to run scheduled task."
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

;// ./src/components/thread/AddScheduleTaskModal/BannerOnDemandCredit/index.ts



/***/ }),

/***/ 26930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* reexport */ ManageSubscriptionButton)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button = __webpack_require__(62717);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Cube.es.js + 1 modules
var Cube_es = __webpack_require__(19796);
;// ./src/components/payment/ManageSubscriptionButton/ManageSubscriptionButton.tsx




const ManageSubscriptionButton = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* Button */.$, {
        as: "a",
        href: constants/* MY_NINJA_SUBSCRIPTION_INFO_URL */.Pyo,
        color: "transparent",
        fullWidthWithLeftAlign: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Cube_es/* CubeIcon */.X, {
                size: constants/* SVG_SIZE_M */.ng3
            }),
            " Subscription"
        ]
    });
};

;// ./src/components/payment/ManageSubscriptionButton/index.ts



/***/ }),

/***/ 28853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ useKeyboardOpen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92253);
/* __next_internal_client_entry_do_not_use__ useKeyboardOpen auto */ 

const KEYBOARD_THRESHOLD = 150;
const useKeyboardOpen = ()=>{
    const [isKeyboardOpen, setIsKeyboardOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!react_device_detect__WEBPACK_IMPORTED_MODULE_1__/* .isMobile */ .Fr) return;
        const handleResize = ()=>{
            const initialViewportHeight = window.innerHeight;
            const currentViewportHeight = window.visualViewport.height;
            const heightDifference = initialViewportHeight - currentViewportHeight;
            setIsKeyboardOpen(heightDifference > KEYBOARD_THRESHOLD);
        };
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return react_device_detect__WEBPACK_IMPORTED_MODULE_1__/* .isMobile */ .Fr && isKeyboardOpen;
};


/***/ }),

/***/ 29632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* binding */ useScheduleList)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(99776);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useQuery.js
var modern_useQuery = __webpack_require__(53455);
// EXTERNAL MODULE: ./src/lib/orval/custom-instance.ts
var custom_instance = __webpack_require__(37010);
;// ./src/gen/sn-api/public-accounts/public-accounts.gen.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ 

/**
 * Get the account entitlements
 * @summary Get Entitlements
 */ const getEntitlementsApiAccountsAccountIdEntitlementsGet = (accountId, params, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/accounts/".concat(accountId, "/entitlements"),
        method: 'GET',
        params,
        signal
    }, options);
};
const getGetEntitlementsApiAccountsAccountIdEntitlementsGetQueryKey = (accountId, params)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/accounts/".concat(accountId, "/entitlements"),
        ...params ? [
            params
        ] : []
    ];
};
const getGetEntitlementsApiAccountsAccountIdEntitlementsGetInfiniteQueryOptions = (accountId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetEntitlementsApiAccountsAccountIdEntitlementsGetQueryKey(accountId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getEntitlementsApiAccountsAccountIdEntitlementsGet(accountId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!accountId,
        ...queryOptions
    };
};
/**
 * @summary Get Entitlements
 */ function useGetEntitlementsApiAccountsAccountIdEntitlementsGetInfinite(accountId, params, options, queryClient) {
    const queryOptions = getGetEntitlementsApiAccountsAccountIdEntitlementsGetInfiniteQueryOptions(accountId, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetEntitlementsApiAccountsAccountIdEntitlementsGetQueryOptions = (accountId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetEntitlementsApiAccountsAccountIdEntitlementsGetQueryKey(accountId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getEntitlementsApiAccountsAccountIdEntitlementsGet(accountId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!accountId,
        ...queryOptions
    };
};
/**
 * @summary Get Entitlements
 */ function useGetEntitlementsApiAccountsAccountIdEntitlementsGet(accountId, params, options, queryClient) {
    const queryOptions = getGetEntitlementsApiAccountsAccountIdEntitlementsGetQueryOptions(accountId, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Get Account
 */ const getAccountApiAccountsGet = (options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/accounts",
        method: 'GET',
        signal
    }, options);
};
const getGetAccountApiAccountsGetQueryKey = ()=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/accounts"
    ];
};
const getGetAccountApiAccountsGetInfiniteQueryOptions = (options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetAccountApiAccountsGetQueryKey();
    const queryFn = (param)=>{
        let { signal } = param;
        return getAccountApiAccountsGet(requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary Get Account
 */ function useGetAccountApiAccountsGetInfinite(options, queryClient) {
    const queryOptions = getGetAccountApiAccountsGetInfiniteQueryOptions(options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetAccountApiAccountsGetQueryOptions = (options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetAccountApiAccountsGetQueryKey();
    const queryFn = (param)=>{
        let { signal } = param;
        return getAccountApiAccountsGet(requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary Get Account
 */ function useGetAccountApiAccountsGet(options, queryClient) {
    const queryOptions = getGetAccountApiAccountsGetQueryOptions(options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Create a new user in the database.
 * @summary Create Account
 */ const createAccountApiAccountsPost = (createAccountRequest, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/accounts",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: createAccountRequest,
        signal
    }, options);
};
const getCreateAccountApiAccountsPostMutationOptions = (options)=>{
    const mutationKey = [
        'createAccountApiAccountsPost'
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
        const { data } = props !== null && props !== void 0 ? props : {};
        return createAccountApiAccountsPost(data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Create Account
 */ const useCreateAccountApiAccountsPost = (options, queryClient)=>{
    const mutationOptions = getCreateAccountApiAccountsPostMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Put Account Gtm Information
 */ const putAccountGtmInformationApiAccountsAccountIdGtmInformationPut = (accountId, updateGTMInformationRequest, options)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/accounts/".concat(accountId, "/gtm_information"),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        data: updateGTMInformationRequest
    }, options);
};
const getPutAccountGtmInformationApiAccountsAccountIdGtmInformationPutMutationOptions = (options)=>{
    const mutationKey = [
        'putAccountGtmInformationApiAccountsAccountIdGtmInformationPut'
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
        const { accountId, data } = props !== null && props !== void 0 ? props : {};
        return putAccountGtmInformationApiAccountsAccountIdGtmInformationPut(accountId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Put Account Gtm Information
 */ const usePutAccountGtmInformationApiAccountsAccountIdGtmInformationPut = (options, queryClient)=>{
    const mutationOptions = getPutAccountGtmInformationApiAccountsAccountIdGtmInformationPutMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Get User Schedules
 */ const getUserSchedulesApiAccountsAccountIdSchedulesGet = (accountId, options, signal)=>{
    return (0,custom_instance/* customInstance */.T)({
        url: "https://super-agent-api.beta.myninja.ai/api/accounts/".concat(accountId, "/schedules"),
        method: 'GET',
        signal
    }, options);
};
const getGetUserSchedulesApiAccountsAccountIdSchedulesGetQueryKey = (accountId)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/accounts/".concat(accountId, "/schedules")
    ];
};
const getGetUserSchedulesApiAccountsAccountIdSchedulesGetInfiniteQueryOptions = (accountId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserSchedulesApiAccountsAccountIdSchedulesGetQueryKey(accountId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUserSchedulesApiAccountsAccountIdSchedulesGet(accountId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!accountId,
        ...queryOptions
    };
};
/**
 * @summary Get User Schedules
 */ function useGetUserSchedulesApiAccountsAccountIdSchedulesGetInfinite(accountId, options, queryClient) {
    const queryOptions = getGetUserSchedulesApiAccountsAccountIdSchedulesGetInfiniteQueryOptions(accountId, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetUserSchedulesApiAccountsAccountIdSchedulesGetQueryOptions = (accountId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetUserSchedulesApiAccountsAccountIdSchedulesGetQueryKey(accountId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getUserSchedulesApiAccountsAccountIdSchedulesGet(accountId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!accountId,
        ...queryOptions
    };
};
/**
 * @summary Get User Schedules
 */ function useGetUserSchedulesApiAccountsAccountIdSchedulesGet(accountId, options, queryClient) {
    const queryOptions = getGetUserSchedulesApiAccountsAccountIdSchedulesGetQueryOptions(accountId, options);
    const query = (0,modern_useQuery/* useQuery */.I)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}

// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useMutation.js + 1 modules
var modern_useMutation = __webpack_require__(80549);
;// ./src/gen/sn-api/scheduled/scheduled.gen.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ 

/**
 * @summary Create Schedule
 */ const createScheduleApiSchedulesPost = (createScheduleRequest, options, signal)=>{
    return (0,custom_instance/* customInstance */.T)({
        url: "https://super-agent-api.beta.myninja.ai/api/schedules/",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: createScheduleRequest,
        signal
    }, options);
};
const getCreateScheduleApiSchedulesPostMutationOptions = (options)=>{
    const mutationKey = [
        'createScheduleApiSchedulesPost'
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
        const { data } = props !== null && props !== void 0 ? props : {};
        return createScheduleApiSchedulesPost(data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Create Schedule
 */ const useCreateScheduleApiSchedulesPost = (options, queryClient)=>{
    const mutationOptions = getCreateScheduleApiSchedulesPostMutationOptions(options);
    return (0,modern_useMutation/* useMutation */.n)(mutationOptions, queryClient);
};
/**
 * @summary Update Schedule
 */ const updateScheduleApiSchedulesScheduleIdPut = (scheduleId, updateScheduleRequest, options)=>{
    return (0,custom_instance/* customInstance */.T)({
        url: "https://super-agent-api.beta.myninja.ai/api/schedules/".concat(scheduleId),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        data: updateScheduleRequest
    }, options);
};
const getUpdateScheduleApiSchedulesScheduleIdPutMutationOptions = (options)=>{
    const mutationKey = [
        'updateScheduleApiSchedulesScheduleIdPut'
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
        const { scheduleId, data } = props !== null && props !== void 0 ? props : {};
        return updateScheduleApiSchedulesScheduleIdPut(scheduleId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Update Schedule
 */ const useUpdateScheduleApiSchedulesScheduleIdPut = (options, queryClient)=>{
    const mutationOptions = getUpdateScheduleApiSchedulesScheduleIdPutMutationOptions(options);
    return (0,modern_useMutation/* useMutation */.n)(mutationOptions, queryClient);
};
/**
 * @summary Delete Schedule
 */ const deleteScheduleApiSchedulesScheduleIdDelete = (scheduleId, options)=>{
    return (0,custom_instance/* customInstance */.T)({
        url: "https://super-agent-api.beta.myninja.ai/api/schedules/".concat(scheduleId),
        method: 'DELETE'
    }, options);
};
const getDeleteScheduleApiSchedulesScheduleIdDeleteMutationOptions = (options)=>{
    const mutationKey = [
        'deleteScheduleApiSchedulesScheduleIdDelete'
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
        const { scheduleId } = props !== null && props !== void 0 ? props : {};
        return deleteScheduleApiSchedulesScheduleIdDelete(scheduleId, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Delete Schedule
 */ const useDeleteScheduleApiSchedulesScheduleIdDelete = (options, queryClient)=>{
    const mutationOptions = getDeleteScheduleApiSchedulesScheduleIdDeleteMutationOptions(options);
    return (0,modern_useMutation/* useMutation */.n)(mutationOptions, queryClient);
};

// EXTERNAL MODULE: ./src/hooks/use-accounts.ts
var use_accounts = __webpack_require__(77755);
;// ./src/hooks/scheduledTasks/constants.ts
const SCHEDULE_QUERY_KEYS = {
    lists: (accountId)=>[
            'schedules',
            'list',
            accountId
        ],
    detail: (scheduleId)=>[
            'schedules',
            'detail',
            scheduleId
        ]
};

;// ./src/hooks/scheduledTasks/index.ts
/* __next_internal_client_entry_do_not_use__ useScheduleList auto */ 





const useScheduleList = ()=>{
    const queryClient = (0,QueryClientProvider/* useQueryClient */.jE)();
    const { data: personalAccount } = (0,use_accounts/* useGetAccount */.j)();
    const accountId = personalAccount === null || personalAccount === void 0 ? void 0 : personalAccount.account_id;
    const queryResult = useGetUserSchedulesApiAccountsAccountIdSchedulesGet(accountId, {
        query: {
            enabled: !!accountId,
            queryKey: SCHEDULE_QUERY_KEYS.lists(accountId)
        }
    });
    const { mutateAsync: createScheduleMutation, isPending: isCreating } = useCreateScheduleApiSchedulesPost();
    const { mutateAsync: updateScheduleMutation, isPending: isUpdating } = useUpdateScheduleApiSchedulesScheduleIdPut();
    const { mutateAsync: deleteScheduleMutation, isPending: isDeleting } = useDeleteScheduleApiSchedulesScheduleIdDelete();
    const invalidateSchedules = (0,react.useCallback)(()=>{
        if (!accountId) return;
        queryClient.invalidateQueries({
            queryKey: SCHEDULE_QUERY_KEYS.lists(accountId)
        });
    }, [
        queryClient,
        accountId
    ]);
    const createScheduledTask = (0,react.useCallback)(async (payload)=>{
        const created = await createScheduleMutation({
            data: payload
        });
        invalidateSchedules();
        return created;
    }, [
        createScheduleMutation,
        invalidateSchedules
    ]);
    const updateScheduledTask = (0,react.useCallback)(async (scheduleId, payload)=>{
        const updated = await updateScheduleMutation({
            scheduleId,
            data: payload
        });
        invalidateSchedules();
        return updated;
    }, [
        updateScheduleMutation,
        invalidateSchedules
    ]);
    const deleteScheduledTask = (0,react.useCallback)(async (scheduleId)=>{
        await deleteScheduleMutation({
            scheduleId
        });
        invalidateSchedules();
    }, [
        deleteScheduleMutation,
        invalidateSchedules
    ]);
    return (0,react.useMemo)(()=>{
        var _queryResult_data;
        var _queryResult_data_schedules;
        return {
            schedules: (_queryResult_data_schedules = (_queryResult_data = queryResult.data) === null || _queryResult_data === void 0 ? void 0 : _queryResult_data.schedules) !== null && _queryResult_data_schedules !== void 0 ? _queryResult_data_schedules : [],
            isLoading: queryResult.isPending,
            createScheduledTask,
            isCreating,
            updateScheduledTask,
            isUpdating,
            deleteScheduledTask,
            isDeleting,
            refreshSchedules: invalidateSchedules
        };
    }, [
        queryResult,
        createScheduledTask,
        isCreating,
        updateScheduledTask,
        isUpdating,
        deleteScheduledTask,
        isDeleting,
        invalidateSchedules
    ]);
};


/***/ }),

/***/ 33291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* reexport */ ScheduleSelector)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/components/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(6259);
// EXTERNAL MODULE: ./src/components/thread/AddScheduleTaskModal/ScheduleTypeSelector/ScheduleTypeSelector.module.scss
var ScheduleTypeSelector_module = __webpack_require__(89241);
var ScheduleTypeSelector_module_default = /*#__PURE__*/__webpack_require__.n(ScheduleTypeSelector_module);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/CaretDown.es.js
var CaretDown_es = __webpack_require__(89690);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./src/components/ui/TextDivider/index.ts + 1 modules
var TextDivider = __webpack_require__(55398);
// EXTERNAL MODULE: ./src/types/schedules.ts
var schedules = __webpack_require__(43956);
// EXTERNAL MODULE: ./src/utils/schedules.ts
var utils_schedules = __webpack_require__(84456);
;// ./src/components/thread/AddScheduleTaskModal/ScheduleTypeSelector/ScheduleTypeSelector.tsx
/* __next_internal_client_entry_do_not_use__ ScheduleTypeSelector auto */ 








const ScheduleTypeSelector = (param)=>{
    let { selectedScheduleType, setSelectedScheduleType } = param;
    const [open, setOpen] = (0,react.useState)(false);
    const handleClick = (value)=>{
        setSelectedScheduleType(value);
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
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (ScheduleTypeSelector_module_default()).triggerButton,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: (ScheduleTypeSelector_module_default()).label,
                            children: (0,utils_schedules/* getScheduleTypeLabel */.o5)(selectedScheduleType)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CaretDown_es/* CaretDownIcon */.b, {
                            size: constants/* SVG_SIZE_XS */.Pbx
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuContent */.SQ, {
                children: Object.entries(schedules/* SCHEDULE_TYPE_LABELS */.Lr).map((param)=>{
                    let [value, label] = param;
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                onClick: ()=>handleClick(value),
                                className: (ScheduleTypeSelector_module_default()).selectorItem,
                                children: label
                            }),
                            value === schedules/* ScheduleType */.uS.Once && /*#__PURE__*/ (0,jsx_runtime.jsx)(TextDivider/* TextDivider */.l, {})
                        ]
                    }, value);
                })
            })
        ]
    });
};

;// ./src/components/thread/AddScheduleTaskModal/ScheduleTypeSelector/index.ts


// EXTERNAL MODULE: ./src/components/thread/AddScheduleTaskModal/ScheduleSelector/ScheduleSelector.module.scss
var ScheduleSelector_module = __webpack_require__(12177);
var ScheduleSelector_module_default = /*#__PURE__*/__webpack_require__.n(ScheduleSelector_module);
// EXTERNAL MODULE: ./src/components/thread/AddScheduleTaskModal/ScheduleDayMonthSelector/ScheduleDayMonthSelector.module.scss
var ScheduleDayMonthSelector_module = __webpack_require__(90157);
var ScheduleDayMonthSelector_module_default = /*#__PURE__*/__webpack_require__.n(ScheduleDayMonthSelector_module);
// EXTERNAL MODULE: ./src/constants/schedules.ts
var constants_schedules = __webpack_require__(91296);
;// ./src/components/thread/AddScheduleTaskModal/ScheduleDayMonthSelector/ScheduleDayMonthSelector.tsx
/* __next_internal_client_entry_do_not_use__ ScheduleDayMonthSelector auto */ 






const ScheduleDayMonthSelector = (param)=>{
    let { selectedScheduleType, selectedDayOrMonth, setSelectedDayOrMonth } = param;
    const [open, setOpen] = (0,react.useState)(false);
    const handleClick = (value)=>{
        setSelectedDayOrMonth(value);
        setOpen(false);
    };
    const options = (0,constants_schedules/* getScheduleDayMonthOptions */.u0)(selectedScheduleType);
    const selectedOption = options.find((option)=>option.value === selectedDayOrMonth);
    var _selectedOption_label;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
        open: open,
        onOpenChange: setOpen,
        withListener: true,
        withEvent: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                asChild: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (ScheduleDayMonthSelector_module_default()).triggerButton,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: (ScheduleDayMonthSelector_module_default()).label,
                            children: (_selectedOption_label = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) !== null && _selectedOption_label !== void 0 ? _selectedOption_label : 'Select time'
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CaretDown_es/* CaretDownIcon */.b, {
                            size: constants/* SVG_SIZE_XS */.Pbx
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuContent */.SQ, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (ScheduleDayMonthSelector_module_default()).container,
                    children: options.map((option)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            onClick: ()=>handleClick(option.value),
                            className: (ScheduleDayMonthSelector_module_default()).selectorItem,
                            children: option.label
                        }, option.value))
                })
            })
        ]
    });
};

;// ./src/components/thread/AddScheduleTaskModal/ScheduleDayMonthSelector/index.ts


// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(90368);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(27937);
// EXTERNAL MODULE: ./node_modules/react-day-picker/dist/index.esm.js + 59 modules
var index_esm = __webpack_require__(24693);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(64269);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(3998);
;// ./src/components/ui/calendar.tsx
/* __next_internal_client_entry_do_not_use__ Calendar auto */ 





function Calendar(param) {
    let { className, classNames, showOutsideDays = true, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* DayPicker */.hv, {
        showOutsideDays: showOutsideDays,
        className: (0,utils.cn)('p-3', className),
        classNames: {
            months: 'flex flex-col sm:flex-row gap-2',
            month: 'flex flex-col gap-4',
            caption: 'flex justify-center pt-1 relative items-center w-full',
            caption_label: 'text-sm font-medium',
            nav: 'flex items-center gap-1',
            nav_button: (0,utils.cn)((0,ui_button/* buttonVariants */.r)({
                variant: 'outline'
            }), 'size-7 bg-transparent p-0 opacity-50 hover:opacity-100'),
            nav_button_previous: 'absolute left-1',
            nav_button_next: 'absolute right-1',
            table: 'w-full border-collapse space-x-1',
            head_row: 'flex',
            head_cell: 'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
            row: 'flex w-full mt-2',
            cell: (0,utils.cn)('relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md', props.mode === 'range' ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md' : '[&:has([aria-selected])]:rounded-md'),
            day: (0,utils.cn)((0,ui_button/* buttonVariants */.r)({
                variant: 'ghost'
            }), 'size-8 p-0 font-normal aria-selected:opacity-100'),
            day_range_start: 'day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground',
            day_range_end: 'day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground',
            day_selected: 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
            day_today: 'bg-accent text-accent-foreground',
            day_outside: 'day-outside text-muted-foreground aria-selected:text-muted-foreground',
            day_disabled: 'text-muted-foreground opacity-50',
            day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
            day_hidden: 'invisible',
            ...classNames
        },
        components: {
            IconLeft: (param)=>{
                let { className, ...props } = param;
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_left/* default */.A, {
                    className: (0,utils.cn)('size-4', className),
                    ...props
                });
            },
            IconRight: (param)=>{
                let { className, ...props } = param;
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_right/* default */.A, {
                    className: (0,utils.cn)('size-4', className),
                    ...props
                });
            }
        },
        ...props
    });
}


// EXTERNAL MODULE: ./src/components/thread/AddScheduleTaskModal/ScheduleDateSelector/ScheduleDateSelector.module.scss
var ScheduleDateSelector_module = __webpack_require__(49969);
var ScheduleDateSelector_module_default = /*#__PURE__*/__webpack_require__.n(ScheduleDateSelector_module);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/CalendarDots.es.js
var CalendarDots_es = __webpack_require__(98699);
;// ./src/components/thread/AddScheduleTaskModal/ScheduleDateSelector/ScheduleDateSelector.tsx
/* __next_internal_client_entry_do_not_use__ ScheduleDateSelector auto */ 







const ScheduleDateSelector = (param)=>{
    let { selectedScheduleDate, setSelectedScheduleDate } = param;
    const [open, setOpen] = (0,react.useState)(false);
    const handleDateSelect = (date)=>{
        if (date) {
            setSelectedScheduleDate(date);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
        open: open,
        onOpenChange: setOpen,
        withListener: true,
        withEvent: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                asChild: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (ScheduleDateSelector_module_default()).triggerButton,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CalendarDots_es/* CalendarDotsIcon */.w, {
                            size: constants/* SVG_SIZE_M */.ng3
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: (0,utils_schedules/* formatDate */.Yq)(selectedScheduleDate)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuContent */.SQ, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Calendar, {
                    mode: "single",
                    selected: selectedScheduleDate,
                    onSelect: handleDateSelect,
                    captionLayout: "dropdown"
                })
            })
        ]
    });
};

;// ./src/components/thread/AddScheduleTaskModal/ScheduleDateSelector/index.ts


// EXTERNAL MODULE: ./src/components/thread/AddScheduleTaskModal/ScheduleTimeSelector/ScheduleTimeSelector.module.scss
var ScheduleTimeSelector_module = __webpack_require__(33699);
var ScheduleTimeSelector_module_default = /*#__PURE__*/__webpack_require__.n(ScheduleTimeSelector_module);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/Clock.es.js
var Clock_es = __webpack_require__(34693);
;// ./src/components/thread/AddScheduleTaskModal/ScheduleTimeSelector/ScheduleTimeSelector.tsx
/* __next_internal_client_entry_do_not_use__ ScheduleTimeSelector auto */ 






const ScheduleTimeSelector = (param)=>{
    let { selectedScheduleType, selectedTime, setSelectedTime } = param;
    const [open, setOpen] = (0,react.useState)(false);
    var _getScheduleOptions;
    const options = (_getScheduleOptions = (0,constants_schedules/* getScheduleOptions */.MR)(selectedScheduleType)) !== null && _getScheduleOptions !== void 0 ? _getScheduleOptions : [];
    const handleClick = (value)=>{
        setSelectedTime(value);
        setOpen(false);
    };
    const selectedOption = options.find((option)=>option.value === selectedTime);
    var _selectedOption_label;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
        open: open,
        onOpenChange: setOpen,
        withListener: true,
        withEvent: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                asChild: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (ScheduleTimeSelector_module_default()).triggerButton,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Clock_es/* ClockIcon */.O, {
                            size: constants/* SVG_SIZE_M */.ng3
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: (ScheduleTimeSelector_module_default()).label,
                            children: (_selectedOption_label = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) !== null && _selectedOption_label !== void 0 ? _selectedOption_label : 'Select time'
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CaretDown_es/* CaretDownIcon */.b, {
                            size: constants/* SVG_SIZE_XS */.Pbx
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuContent */.SQ, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (ScheduleTimeSelector_module_default()).container,
                    children: options.map((option)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            onClick: ()=>handleClick(option.value),
                            className: (ScheduleTimeSelector_module_default()).selectorItem,
                            children: option.label
                        }, option.value))
                })
            })
        ]
    });
};

;// ./src/components/thread/AddScheduleTaskModal/ScheduleTimeSelector/index.ts


;// ./src/components/thread/AddScheduleTaskModal/ScheduleSelector/ScheduleSelector.tsx
/* __next_internal_client_entry_do_not_use__ ScheduleSelector auto */ 






const ScheduleSelector = (param)=>{
    let { selectedScheduleType, setSelectedScheduleType, selectedDayOrMonth, setSelectedDayOrMonth, selectedScheduleDate, setSelectedScheduleDate, selectedTime, setSelectedTime } = param;
    const showScheduleDateSelector = selectedScheduleType === schedules/* ScheduleType */.uS.Once;
    const showScheduleWeekMonthSelector = selectedScheduleType === schedules/* ScheduleType */.uS.Weekly || selectedScheduleType === schedules/* ScheduleType */.uS.Monthly;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (ScheduleSelector_module_default()).root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ScheduleTypeSelector, {
                selectedScheduleType: selectedScheduleType,
                setSelectedScheduleType: setSelectedScheduleType
            }),
            showScheduleWeekMonthSelector && /*#__PURE__*/ (0,jsx_runtime.jsx)(ScheduleDayMonthSelector, {
                selectedScheduleType: selectedScheduleType,
                selectedDayOrMonth: selectedDayOrMonth,
                setSelectedDayOrMonth: setSelectedDayOrMonth
            }),
            showScheduleDateSelector && /*#__PURE__*/ (0,jsx_runtime.jsx)(ScheduleDateSelector, {
                selectedScheduleDate: selectedScheduleDate,
                setSelectedScheduleDate: setSelectedScheduleDate
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ScheduleTimeSelector, {
                selectedScheduleType: selectedScheduleType,
                selectedTime: selectedTime,
                setSelectedTime: setSelectedTime
            })
        ]
    });
};

;// ./src/components/thread/AddScheduleTaskModal/ScheduleSelector/index.ts



/***/ }),

/***/ 33699:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"label":"ScheduleTimeSelector_label__9mXma","triggerButton":"ScheduleTimeSelector_triggerButton__rCMI_","nj-animate-horizontal-appearance-ltr-enter":"ScheduleTimeSelector_nj-animate-horizontal-appearance-ltr-enter__OI7uY","nj-animate-horizontal-appearance-ltr-enter-active":"ScheduleTimeSelector_nj-animate-horizontal-appearance-ltr-enter-active__TDfC7","nj-animate-horizontal-appearance-ltr-exit":"ScheduleTimeSelector_nj-animate-horizontal-appearance-ltr-exit__O7ucZ","nj-animate-horizontal-appearance-ltr-exit-active":"ScheduleTimeSelector_nj-animate-horizontal-appearance-ltr-exit-active__cQ4FJ","nj-animate-left-panel-width-reduce-enter":"ScheduleTimeSelector_nj-animate-left-panel-width-reduce-enter__ATbQR","nj-animate-left-panel-width-reduce-enter-active":"ScheduleTimeSelector_nj-animate-left-panel-width-reduce-enter-active__GmQMu","nj-animate-left-panel-width-reduce-exit":"ScheduleTimeSelector_nj-animate-left-panel-width-reduce-exit__az217","nj-animate-left-panel-width-reduce-exit-active":"ScheduleTimeSelector_nj-animate-left-panel-width-reduce-exit-active__Hn_1t","nj-animate-vertical-appearance-appear":"ScheduleTimeSelector_nj-animate-vertical-appearance-appear__SyNXl","nj-animate-vertical-appearance-appear-active":"ScheduleTimeSelector_nj-animate-vertical-appearance-appear-active__YolCJ","nj-animate-vertical-appearance-enter":"ScheduleTimeSelector_nj-animate-vertical-appearance-enter__UhQcQ","nj-animate-vertical-appearance-enter-active":"ScheduleTimeSelector_nj-animate-vertical-appearance-enter-active__H12BA","nj-animate-vertical-appearance-exit":"ScheduleTimeSelector_nj-animate-vertical-appearance-exit__QLfpH","nj-animate-vertical-appearance-exit-active":"ScheduleTimeSelector_nj-animate-vertical-appearance-exit-active__DkHE3","selectorItem":"ScheduleTimeSelector_selectorItem__13F6N","container":"ScheduleTimeSelector_container__oHUTo","infinite-spinner":"ScheduleTimeSelector_infinite-spinner__MglQI","fadeIn":"ScheduleTimeSelector_fadeIn__5tHKP","blinking":"ScheduleTimeSelector_blinking__4gRGR","movingRight":"ScheduleTimeSelector_movingRight__eKjlN"};

/***/ }),

/***/ 40327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Cn: () => (/* binding */ SidebarGroup),
  sF: () => (/* binding */ SidebarInset),
  wZ: () => (/* binding */ SidebarMenu),
  e7: () => (/* binding */ SidebarMenuAction),
  Uj: () => (/* binding */ SidebarMenuButton),
  FX: () => (/* binding */ SidebarMenuItem),
  q9: () => (/* binding */ SidebarMenuSub),
  GB: () => (/* binding */ SidebarProvider),
  cL: () => (/* binding */ useSidebar)
});

// UNUSED EXPORTS: Sidebar, SidebarContent, SidebarFooter, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarMenuBadge, SidebarMenuSkeleton, SidebarMenuSubButton, SidebarMenuSubItem, SidebarRail, SidebarSeparator, SidebarTrigger

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs
var dist = __webpack_require__(32467);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(83101);
// EXTERNAL MODULE: ./src/hooks/use-mobile.ts
var use_mobile = __webpack_require__(75409);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(64269);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(3998);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(65142);
;// ./src/components/ui/separator.tsx
/* __next_internal_client_entry_do_not_use__ Separator auto */ 



function separator_Separator(param) {
    let { className, orientation = 'horizontal', decorative = true, ...props } = param;
    return /*#__PURE__*/ _jsx(SeparatorPrimitive.Root, {
        "data-slot": "separator-root",
        decorative: decorative,
        orientation: orientation,
        className: cn('bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px', className),
        ...props
    });
}


// EXTERNAL MODULE: ./src/components/ui/sheet.tsx
var sheet = __webpack_require__(27063);
// EXTERNAL MODULE: ./src/components/ui/skeleton.tsx
var skeleton = __webpack_require__(20243);
// EXTERNAL MODULE: ./src/components/ui/tooltip.tsx
var ui_tooltip = __webpack_require__(46767);
// EXTERNAL MODULE: ./src/types/index.ts + 2 modules
var types = __webpack_require__(37893);
// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(20063);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
;// ./src/components/ui/sidebar.tsx
/* __next_internal_client_entry_do_not_use__ Sidebar,SidebarContent,SidebarFooter,SidebarGroup,SidebarGroupAction,SidebarGroupContent,SidebarGroupLabel,SidebarHeader,SidebarInput,SidebarInset,SidebarMenu,SidebarMenuAction,SidebarMenuBadge,SidebarMenuButton,SidebarMenuItem,SidebarMenuSkeleton,SidebarMenuSub,SidebarMenuSubButton,SidebarMenuSubItem,SidebarProvider,SidebarRail,SidebarSeparator,SidebarTrigger,useSidebar auto */ 
















const SIDEBAR_COOKIE_NAME = 'sidebar_state';
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = '16rem';
const SIDEBAR_WIDTH_MOBILE = '18rem';
const SIDEBAR_WIDTH_ICON = '3rem';
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';
const SidebarContext = /*#__PURE__*/ react.createContext(null);
function useSidebar() {
    const context = react.useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider.');
    }
    return context;
}
function SidebarProvider(param) {
    let { defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props } = param;
    const pathname = (0,navigation.usePathname)();
    const isMobile = (0,use_mobile/* useIsMobile */.a)();
    const [openMobile, setOpenMobile] = react.useState(false);
    const [shouldRefreshProjectsList, setShouldRefreshProjectsList] = react.useState(false);
    const [isComputerButtonExist, setIsComputerButtonExist] = react.useState(false);
    const [leftPanelSection, setLeftPanelSection] = react.useState(types/* LeftPanelSections */.Uw.THREAD_LIST);
    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const initialOpen = openProp !== null && openProp !== void 0 ? openProp : isMobile ? openMobile : pathname === constants/* AppRoutes */.SbO.DASHBOARD ? true : defaultOpen;
    const [_open, _setOpen] = react.useState(initialOpen);
    const open = openProp !== null && openProp !== void 0 ? openProp : isMobile ? openMobile : _open;
    const setOpen = react.useCallback((value)=>{
        const openState = typeof value === 'function' ? value(open) : value;
        if (setOpenProp) {
            setOpenProp(openState);
        } else {
            if (isMobile) {
                setOpenMobile(openState);
            } else {
                _setOpen(openState);
            }
        }
        // This sets the cookie to keep the sidebar state.
        document.cookie = "".concat(SIDEBAR_COOKIE_NAME, "=").concat(openState, "; path=/; max-age=").concat(SIDEBAR_COOKIE_MAX_AGE);
    }, [
        setOpenProp,
        open,
        setOpenMobile,
        isMobile
    ]);
    const setLeftPanelData = (0,react.useCallback)((param)=>{
        let { panelType, isExpanded } = param;
        setLeftPanelSection(panelType);
        setOpen(isExpanded);
    }, [
        setOpen
    ]);
    // Helper to toggle the sidebar.
    const toggleSidebar = react.useCallback(()=>{
        return isMobile ? setOpenMobile((open)=>!open) : setOpen((open)=>!open);
    }, [
        isMobile,
        setOpen,
        setOpenMobile
    ]);
    // Adds a keyboard shortcut to toggle the sidebar.
    react.useEffect(()=>{
        const handleKeyDown = (event)=>{
            if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                toggleSidebar();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        toggleSidebar
    ]);
    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? 'expanded' : 'collapsed';
    const contextValue = react.useMemo(()=>({
            state,
            isLeftSidePanelOpen: open,
            setIsLeftSidePanelOpen: setOpen,
            isMobile,
            toggleSidebar,
            shouldRefreshProjectsList,
            setShouldRefreshProjectsList,
            isComputerButtonExist,
            setIsComputerButtonExist,
            leftPanelSection,
            setLeftPanelData
        }), [
        state,
        open,
        setOpen,
        isMobile,
        toggleSidebar,
        shouldRefreshProjectsList,
        setShouldRefreshProjectsList,
        isComputerButtonExist,
        setIsComputerButtonExist,
        leftPanelSection,
        setLeftPanelData
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SidebarContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_tooltip/* TooltipProvider */.Bc, {
            delayDuration: 0,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                "data-slot": "sidebar-wrapper",
                style: {
                    '--sidebar-width': SIDEBAR_WIDTH,
                    '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
                    ...style
                },
                className: (0,utils.cn)('group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-[100dvh] max-h-[100dvh] w-full', className),
                ...props,
                children: children
            })
        })
    });
}
function Sidebar(param) {
    let { side = 'left', variant = 'sidebar', collapsible = 'offcanvas', className, children, ...props } = param;
    const { isMobile, state, isLeftSidePanelOpen, setIsLeftSidePanelOpen } = useSidebar();
    if (collapsible === 'none') {
        return /*#__PURE__*/ _jsx("div", {
            "data-slot": "sidebar",
            className: cn('bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col', className),
            ...props,
            children: children
        });
    }
    if (isMobile) {
        return /*#__PURE__*/ _jsx(Sheet, {
            open: isLeftSidePanelOpen,
            onOpenChange: setIsLeftSidePanelOpen,
            ...props,
            children: /*#__PURE__*/ _jsxs(SheetContent, {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar",
                "data-mobile": "true",
                className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
                style: {
                    '--sidebar-width': SIDEBAR_WIDTH_MOBILE
                },
                side: side,
                children: [
                    /*#__PURE__*/ _jsxs(SheetHeader, {
                        className: "sr-only",
                        children: [
                            /*#__PURE__*/ _jsx(SheetTitle, {
                                children: "Sidebar"
                            }),
                            /*#__PURE__*/ _jsx(SheetDescription, {
                                children: "Displays the mobile sidebar."
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "flex h-full w-full flex-col",
                        children: children
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ _jsxs("div", {
        className: "group peer text-sidebar-foreground hidden md:block",
        "data-state": state,
        "data-collapsible": state === 'collapsed' ? collapsible : '',
        "data-variant": variant,
        "data-side": side,
        "data-slot": "sidebar",
        children: [
            /*#__PURE__*/ _jsx("div", {
                "data-slot": "sidebar-gap",
                className: cn('relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear', 'group-data-[collapsible=offcanvas]:w-0', 'group-data-[side=right]:rotate-180', variant === 'floating' || variant === 'inset' ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]' : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)')
            }),
            /*#__PURE__*/ _jsx("div", {
                "data-slot": "sidebar-container",
                className: cn('fixed inset-y-0 z-10 hidden h-[100dvh] w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex', side === 'left' ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]' : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]', // Adjust the padding for floating and inset variants.
                variant === 'floating' || variant === 'inset' ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]' : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l', className),
                ...props,
                children: /*#__PURE__*/ _jsx("div", {
                    "data-sidebar": "sidebar",
                    "data-slot": "sidebar-inner",
                    className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                    children: children
                })
            })
        ]
    });
}
function SidebarTrigger(param) {
    let { className, onClick, ...props } = param;
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ _jsxs(Button, {
        "data-sidebar": "trigger",
        "data-slot": "sidebar-trigger",
        variant: "ghost",
        size: "icon",
        className: cn('size-7', className),
        onClick: (event)=>{
            onClick === null || onClick === void 0 ? void 0 : onClick(event);
            toggleSidebar();
        },
        ...props,
        children: [
            /*#__PURE__*/ _jsx(PanelLeftIcon, {}),
            /*#__PURE__*/ _jsx("span", {
                className: "sr-only",
                children: "Toggle Sidebar"
            })
        ]
    });
}
function SidebarRail(param) {
    let { className, ...props } = param;
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ _jsx("button", {
        "data-sidebar": "rail",
        "data-slot": "sidebar-rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: toggleSidebar,
        title: "Toggle Sidebar",
        className: cn('hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex', 'in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize', '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize', 'hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full', '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2', '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2', className),
        ...props
    });
}
function SidebarInset(param) {
    let { className, ...props } = param;
    const isMobile = (0,use_mobile/* useIsMobile */.a)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
        "data-slot": "sidebar-inset",
        className: (0,utils.cn)('h-full py-0 pr-0', 'flex min-h-[100dvh] max-h-[100dvh] overflow-hidden', 'bg-background relative flex min-w-0 flex-1 flex-col', 'md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:shadow-[0_2px_8px_0_rgba(0,0,0,0.24)] md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2', className),
        ...props
    });
}
function SidebarInput(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx(Input, {
        "data-slot": "sidebar-input",
        "data-sidebar": "input",
        className: cn('bg-background h-8 w-full shadow-none', className),
        ...props
    });
}
function SidebarHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "sidebar-header",
        "data-sidebar": "header",
        className: cn('flex flex-col gap-2 p-2', className),
        ...props
    });
}
function SidebarFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "sidebar-footer",
        "data-sidebar": "footer",
        className: cn('flex flex-col gap-2 p-2', className),
        ...props
    });
}
function SidebarSeparator(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx(Separator, {
        "data-slot": "sidebar-separator",
        "data-sidebar": "separator",
        className: cn('bg-sidebar-border mx-2 w-auto', className),
        ...props
    });
}
function SidebarContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "sidebar-content",
        "data-sidebar": "content",
        className: cn('flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden', className),
        ...props
    });
}
function SidebarGroup(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        "data-slot": "sidebar-group",
        "data-sidebar": "group",
        className: (0,utils.cn)('relative flex w-full min-w-0 flex-col p-2', className),
        ...props
    });
}
function SidebarGroupLabel(param) {
    let { className, asChild = false, ...props } = param;
    const Comp = asChild ? Slot : 'div';
    return /*#__PURE__*/ _jsx(Comp, {
        "data-slot": "sidebar-group-label",
        "data-sidebar": "group-label",
        className: cn('text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0', 'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0', className),
        ...props
    });
}
function SidebarGroupAction(param) {
    let { className, asChild = false, ...props } = param;
    const Comp = asChild ? Slot : 'button';
    return /*#__PURE__*/ _jsx(Comp, {
        "data-slot": "sidebar-group-action",
        "data-sidebar": "group-action",
        className: cn('text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0', // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 md:after:hidden', 'group-data-[collapsible=icon]:hidden', className),
        ...props
    });
}
function SidebarGroupContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "sidebar-group-content",
        "data-sidebar": "group-content",
        className: cn('w-full text-sm', className),
        ...props
    });
}
function SidebarMenu(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
        "data-slot": "sidebar-menu",
        "data-sidebar": "menu",
        className: (0,utils.cn)('flex w-full min-w-0 flex-col gap-1', className),
        ...props
    });
}
function SidebarMenuItem(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        "data-slot": "sidebar-menu-item",
        "data-sidebar": "menu-item",
        className: (0,utils.cn)('group/menu-item relative flex items-center', className),
        ...props
    });
}
const sidebarMenuButtonVariants = (0,class_variance_authority_dist/* cva */.F)('peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0', {
    variants: {
        variant: {
            default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
            outline: 'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]'
        },
        size: {
            default: 'h-8 text-sm',
            sm: 'h-7 text-xs',
            lg: 'h-12 text-sm group-data-[collapsible=icon]:p-0!'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function SidebarMenuButton(param) {
    let { asChild = false, isActive = false, variant = 'default', size = 'default', tooltip, className, ...props } = param;
    const Comp = asChild ? dist/* Slot */.DX : 'button';
    const { isMobile, state } = useSidebar();
    const button = /*#__PURE__*/ (0,jsx_runtime.jsx)(Comp, {
        "data-slot": "sidebar-menu-button",
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: (0,utils.cn)(sidebarMenuButtonVariants({
            variant,
            size
        }), className),
        ...props
    });
    if (!tooltip) {
        return button;
    }
    if (typeof tooltip === 'string') {
        tooltip = {
            children: tooltip
        };
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_tooltip/* Tooltip */.m_, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_tooltip/* TooltipTrigger */.k$, {
                asChild: true,
                children: button
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_tooltip/* TooltipContent */.ZI, {
                side: "right",
                align: "center",
                hidden: state !== 'collapsed' || isMobile,
                ...tooltip
            })
        ]
    });
}
function SidebarMenuAction(param) {
    let { className, asChild = false, showOnHover = false, ...props } = param;
    const Comp = asChild ? dist/* Slot */.DX : 'button';
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Comp, {
        "data-slot": "sidebar-menu-action",
        "data-sidebar": "menu-action",
        className: (0,utils.cn)('text-sidebar-foreground ring-sidebar-ring hover:cursor-pointer hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground inset-y-full flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0', 'absolute top-1/2 right-1 -translate-y-1/2', // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 md:after:hidden', 'peer-data-[size=sm]/menu-button:right-[10px]', 'peer-data-[size=default]/menu-button:right-[10px]', 'peer-data-[size=lg]/menu-button:right-[10px]', 'group-data-[collapsible=icon]:hidden', showOnHover && 'peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0', className),
        ...props
    });
}
function SidebarMenuBadge(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx("div", {
        "data-slot": "sidebar-menu-badge",
        "data-sidebar": "menu-badge",
        className: cn('text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none', 'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground', 'peer-data-[size=sm]/menu-button:top-1', 'peer-data-[size=default]/menu-button:top-1.5', 'peer-data-[size=lg]/menu-button:top-2.5', 'group-data-[collapsible=icon]:hidden', className),
        ...props
    });
}
function SidebarMenuSkeleton(param) {
    let { className, showIcon = false, ...props } = param;
    // Random width between 50 to 90%.
    const width = React.useMemo(()=>{
        return "".concat(Math.floor(Math.random() * 40) + 50, "%");
    }, []);
    return /*#__PURE__*/ _jsxs("div", {
        "data-slot": "sidebar-menu-skeleton",
        "data-sidebar": "menu-skeleton",
        className: cn('flex h-8 items-center gap-2 rounded-md px-2', className),
        ...props,
        children: [
            showIcon && /*#__PURE__*/ _jsx(Skeleton, {
                className: "size-4 rounded-md",
                "data-sidebar": "menu-skeleton-icon"
            }),
            /*#__PURE__*/ _jsx(Skeleton, {
                className: "h-4 max-w-(--skeleton-width) flex-1",
                "data-sidebar": "menu-skeleton-text",
                style: {
                    '--skeleton-width': width
                }
            })
        ]
    });
}
function SidebarMenuSub(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
        "data-slot": "sidebar-menu-sub",
        "data-sidebar": "menu-sub",
        className: (0,utils.cn)('border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5', 'group-data-[collapsible=icon]:hidden', className),
        ...props
    });
}
function SidebarMenuSubItem(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ _jsx("li", {
        "data-slot": "sidebar-menu-sub-item",
        "data-sidebar": "menu-sub-item",
        className: cn('group/menu-sub-item relative', className),
        ...props
    });
}
function SidebarMenuSubButton(param) {
    let { asChild = false, size = 'md', isActive = false, className, ...props } = param;
    const Comp = asChild ? Slot : 'a';
    return /*#__PURE__*/ _jsx(Comp, {
        "data-slot": "sidebar-menu-sub-button",
        "data-sidebar": "menu-sub-button",
        "data-size": size,
        "data-active": isActive,
        className: cn('text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0', 'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground', size === 'sm' && 'text-xs', size === 'md' && 'text-sm', 'group-data-[collapsible=icon]:hidden', className),
        ...props
    });
}



/***/ }),

/***/ 43956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fs: () => (/* binding */ ScheduleNotificationConfigType),
/* harmony export */   Lr: () => (/* binding */ SCHEDULE_TYPE_LABELS),
/* harmony export */   uS: () => (/* binding */ ScheduleType)
/* harmony export */ });
// Schedule type definitions
var ScheduleType = /*#__PURE__*/ function(ScheduleType) {
    ScheduleType["Once"] = "once";
    ScheduleType["Minutes"] = "minutes";
    ScheduleType["Hourly"] = "hourly";
    ScheduleType["Daily"] = "daily";
    ScheduleType["Weekly"] = "weekly";
    ScheduleType["Monthly"] = "monthly";
    return ScheduleType;
}({});
// Notification type definitions
var ScheduleNotificationConfigType = /*#__PURE__*/ function(ScheduleNotificationConfigType) {
    ScheduleNotificationConfigType["Email"] = "email";
    ScheduleNotificationConfigType["Slack"] = "slack";
    return ScheduleNotificationConfigType;
}({});
// Schedule type options
const SCHEDULE_TYPE_LABELS = {
    ["once"]: 'Does not repeat',
    ["minutes"]: 'Minutes',
    ["hourly"]: 'Hourly',
    ["daily"]: 'Daily',
    ["weekly"]: 'Weekly',
    ["monthly"]: 'Monthly'
};


/***/ }),

/***/ 48944:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"NinjaLogo_root__G3kFB","nj-animate-horizontal-appearance-ltr-enter":"NinjaLogo_nj-animate-horizontal-appearance-ltr-enter___z_0Q","nj-animate-horizontal-appearance-ltr-enter-active":"NinjaLogo_nj-animate-horizontal-appearance-ltr-enter-active___NTzE","nj-animate-horizontal-appearance-ltr-exit":"NinjaLogo_nj-animate-horizontal-appearance-ltr-exit__BVkBi","nj-animate-horizontal-appearance-ltr-exit-active":"NinjaLogo_nj-animate-horizontal-appearance-ltr-exit-active__ivDHQ","nj-animate-left-panel-width-reduce-enter":"NinjaLogo_nj-animate-left-panel-width-reduce-enter__GuUxB","nj-animate-left-panel-width-reduce-enter-active":"NinjaLogo_nj-animate-left-panel-width-reduce-enter-active__D2EfN","nj-animate-left-panel-width-reduce-exit":"NinjaLogo_nj-animate-left-panel-width-reduce-exit__kVAKq","nj-animate-left-panel-width-reduce-exit-active":"NinjaLogo_nj-animate-left-panel-width-reduce-exit-active__uaYlW","nj-animate-vertical-appearance-appear":"NinjaLogo_nj-animate-vertical-appearance-appear__7IKm4","nj-animate-vertical-appearance-appear-active":"NinjaLogo_nj-animate-vertical-appearance-appear-active__uqAML","nj-animate-vertical-appearance-enter":"NinjaLogo_nj-animate-vertical-appearance-enter__v5F_U","nj-animate-vertical-appearance-enter-active":"NinjaLogo_nj-animate-vertical-appearance-enter-active__L2YYj","nj-animate-vertical-appearance-exit":"NinjaLogo_nj-animate-vertical-appearance-exit__Ky5dv","nj-animate-vertical-appearance-exit-active":"NinjaLogo_nj-animate-vertical-appearance-exit-active__QyLYA","infinite-spinner":"NinjaLogo_infinite-spinner__YDb6F","fadeIn":"NinjaLogo_fadeIn___eSOV","blinking":"NinjaLogo_blinking__JgdR4","movingRight":"NinjaLogo_movingRight__kT_Jv"};

/***/ }),

/***/ 49688:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"TextDivider_root__ahd8Y","nj-animate-horizontal-appearance-ltr-enter":"TextDivider_nj-animate-horizontal-appearance-ltr-enter__UaYcB","nj-animate-horizontal-appearance-ltr-enter-active":"TextDivider_nj-animate-horizontal-appearance-ltr-enter-active__Y1yj5","nj-animate-horizontal-appearance-ltr-exit":"TextDivider_nj-animate-horizontal-appearance-ltr-exit__8MwcI","nj-animate-horizontal-appearance-ltr-exit-active":"TextDivider_nj-animate-horizontal-appearance-ltr-exit-active__qsOto","nj-animate-left-panel-width-reduce-enter":"TextDivider_nj-animate-left-panel-width-reduce-enter__todl9","nj-animate-left-panel-width-reduce-enter-active":"TextDivider_nj-animate-left-panel-width-reduce-enter-active__PlDrR","nj-animate-left-panel-width-reduce-exit":"TextDivider_nj-animate-left-panel-width-reduce-exit__l2vZA","nj-animate-left-panel-width-reduce-exit-active":"TextDivider_nj-animate-left-panel-width-reduce-exit-active__bTiBn","nj-animate-vertical-appearance-appear":"TextDivider_nj-animate-vertical-appearance-appear__NW8x_","nj-animate-vertical-appearance-appear-active":"TextDivider_nj-animate-vertical-appearance-appear-active__5U8Nw","nj-animate-vertical-appearance-enter":"TextDivider_nj-animate-vertical-appearance-enter__LvCwE","nj-animate-vertical-appearance-enter-active":"TextDivider_nj-animate-vertical-appearance-enter-active___G_tg","nj-animate-vertical-appearance-exit":"TextDivider_nj-animate-vertical-appearance-exit__ibbzN","nj-animate-vertical-appearance-exit-active":"TextDivider_nj-animate-vertical-appearance-exit-active__ZrIK1","divider":"TextDivider_divider__4IP_C","withMargin":"TextDivider_withMargin__xb7N2","dashed":"TextDivider_dashed__oao3J","infinite-spinner":"TextDivider_infinite-spinner__n4L_Z","fadeIn":"TextDivider_fadeIn__AAQ3B","blinking":"TextDivider_blinking__5QLKL","movingRight":"TextDivider_movingRight__tJuT9"};

/***/ }),

/***/ 49969:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"triggerButton":"ScheduleDateSelector_triggerButton__5Yz9E","nj-animate-horizontal-appearance-ltr-enter":"ScheduleDateSelector_nj-animate-horizontal-appearance-ltr-enter__ZOrBs","nj-animate-horizontal-appearance-ltr-enter-active":"ScheduleDateSelector_nj-animate-horizontal-appearance-ltr-enter-active__EnjN_","nj-animate-horizontal-appearance-ltr-exit":"ScheduleDateSelector_nj-animate-horizontal-appearance-ltr-exit__Z63_G","nj-animate-horizontal-appearance-ltr-exit-active":"ScheduleDateSelector_nj-animate-horizontal-appearance-ltr-exit-active__NZr7f","nj-animate-left-panel-width-reduce-enter":"ScheduleDateSelector_nj-animate-left-panel-width-reduce-enter__ADIyY","nj-animate-left-panel-width-reduce-enter-active":"ScheduleDateSelector_nj-animate-left-panel-width-reduce-enter-active__XY_H9","nj-animate-left-panel-width-reduce-exit":"ScheduleDateSelector_nj-animate-left-panel-width-reduce-exit__iBQdf","nj-animate-left-panel-width-reduce-exit-active":"ScheduleDateSelector_nj-animate-left-panel-width-reduce-exit-active__3dfuG","nj-animate-vertical-appearance-appear":"ScheduleDateSelector_nj-animate-vertical-appearance-appear__EnPmL","nj-animate-vertical-appearance-appear-active":"ScheduleDateSelector_nj-animate-vertical-appearance-appear-active__Da4C_","nj-animate-vertical-appearance-enter":"ScheduleDateSelector_nj-animate-vertical-appearance-enter__hEpDx","nj-animate-vertical-appearance-enter-active":"ScheduleDateSelector_nj-animate-vertical-appearance-enter-active__HQ706","nj-animate-vertical-appearance-exit":"ScheduleDateSelector_nj-animate-vertical-appearance-exit__7ExMj","nj-animate-vertical-appearance-exit-active":"ScheduleDateSelector_nj-animate-vertical-appearance-exit-active__Bv6Gm","infinite-spinner":"ScheduleDateSelector_infinite-spinner__LfBxN","fadeIn":"ScheduleDateSelector_fadeIn__k2vnc","blinking":"ScheduleDateSelector_blinking__D01zn","movingRight":"ScheduleDateSelector_movingRight__hr3J_"};

/***/ }),

/***/ 50208:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"root":"EditScheduleTaskModal_root__NAIkF","title":"EditScheduleTaskModal_title__WQruZ","content":"EditScheduleTaskModal_content__AncVi","taskSection":"EditScheduleTaskModal_taskSection__4ReLW","taskSubSection":"EditScheduleTaskModal_taskSubSection__OSFHV","header":"EditScheduleTaskModal_header__pNan9","inputContainer":"EditScheduleTaskModal_inputContainer__8CZLB","closeButton":"EditScheduleTaskModal_closeButton__GTxDz","inputBox":"EditScheduleTaskModal_inputBox__TSqbZ","updateNotes":"EditScheduleTaskModal_updateNotes__7oR_z","footer":"EditScheduleTaskModal_footer__khO00","taskLabel":"EditScheduleTaskModal_taskLabel__eRWM1","taskLabelDescription":"EditScheduleTaskModal_taskLabelDescription__h9OzQ","nj-animate-horizontal-appearance-ltr-enter":"EditScheduleTaskModal_nj-animate-horizontal-appearance-ltr-enter__2pBzR","nj-animate-horizontal-appearance-ltr-enter-active":"EditScheduleTaskModal_nj-animate-horizontal-appearance-ltr-enter-active__swWyJ","nj-animate-horizontal-appearance-ltr-exit":"EditScheduleTaskModal_nj-animate-horizontal-appearance-ltr-exit__8W2ZG","nj-animate-horizontal-appearance-ltr-exit-active":"EditScheduleTaskModal_nj-animate-horizontal-appearance-ltr-exit-active__otVzC","nj-animate-left-panel-width-reduce-enter":"EditScheduleTaskModal_nj-animate-left-panel-width-reduce-enter__kSb77","nj-animate-left-panel-width-reduce-enter-active":"EditScheduleTaskModal_nj-animate-left-panel-width-reduce-enter-active__1IDT7","nj-animate-left-panel-width-reduce-exit":"EditScheduleTaskModal_nj-animate-left-panel-width-reduce-exit__m91xK","nj-animate-left-panel-width-reduce-exit-active":"EditScheduleTaskModal_nj-animate-left-panel-width-reduce-exit-active__nyRFz","nj-animate-vertical-appearance-appear":"EditScheduleTaskModal_nj-animate-vertical-appearance-appear__RooX8","nj-animate-vertical-appearance-appear-active":"EditScheduleTaskModal_nj-animate-vertical-appearance-appear-active__sVl5f","nj-animate-vertical-appearance-enter":"EditScheduleTaskModal_nj-animate-vertical-appearance-enter__5FYIN","nj-animate-vertical-appearance-enter-active":"EditScheduleTaskModal_nj-animate-vertical-appearance-enter-active__Y5Msd","nj-animate-vertical-appearance-exit":"EditScheduleTaskModal_nj-animate-vertical-appearance-exit__0suT2","nj-animate-vertical-appearance-exit-active":"EditScheduleTaskModal_nj-animate-vertical-appearance-exit-active__5fhNE","threadInfo":"EditScheduleTaskModal_threadInfo__m1nM1","infinite-spinner":"EditScheduleTaskModal_infinite-spinner__Lvams","fadeIn":"EditScheduleTaskModal_fadeIn__OCUOF","blinking":"EditScheduleTaskModal_blinking__qA8Sr","movingRight":"EditScheduleTaskModal_movingRight__se4sm"};

/***/ }),

/***/ 50866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* reexport */ EditScheduleTaskModal)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button = __webpack_require__(62717);
// EXTERNAL MODULE: ./src/components/ui/dialog.tsx
var dialog = __webpack_require__(51834);
// EXTERNAL MODULE: ./src/components/scheduled-tasks/EditScheduleTaskModal/EditScheduleTaskModal.module.scss
var EditScheduleTaskModal_module = __webpack_require__(50208);
var EditScheduleTaskModal_module_default = /*#__PURE__*/__webpack_require__.n(EditScheduleTaskModal_module);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/X.es.js
var X_es = __webpack_require__(10127);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/Lock.es.js + 1 modules
var Lock_es = __webpack_require__(1960);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/ssr/EnvelopeSimple.es.js
var EnvelopeSimple_es = __webpack_require__(70235);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./src/components/ui/InputSimple/index.tsx + 1 modules
var InputSimple = __webpack_require__(44974);
// EXTERNAL MODULE: ./node_modules/sonner/dist/index.mjs
var dist = __webpack_require__(18720);
// EXTERNAL MODULE: ./node_modules/@datadog/browser-logs/esm/entries/main.js + 109 modules
var main = __webpack_require__(73262);
// EXTERNAL MODULE: ./src/gen/sn-api/models/index.ts + 31 modules
var models = __webpack_require__(61330);
// EXTERNAL MODULE: ./src/hooks/scheduledTasks/index.ts + 3 modules
var scheduledTasks = __webpack_require__(29632);
// EXTERNAL MODULE: ./src/components/thread/AddScheduleTaskModal/BannerOnDemandCredit/index.ts + 1 modules
var BannerOnDemandCredit = __webpack_require__(20093);
// EXTERNAL MODULE: ./src/hooks/index.ts + 39 modules
var hooks = __webpack_require__(71203);
// EXTERNAL MODULE: ./src/components/thread/AddScheduleTaskModal/ScheduleSelector/index.ts + 10 modules
var ScheduleSelector = __webpack_require__(33291);
// EXTERNAL MODULE: ./src/utils/schedules.ts
var schedules = __webpack_require__(84456);
// EXTERNAL MODULE: ./src/types/schedules.ts
var types_schedules = __webpack_require__(43956);
// EXTERNAL MODULE: ./src/components/ui/SwitchSimple/index.ts + 1 modules
var SwitchSimple = __webpack_require__(84885);
// EXTERNAL MODULE: ./src/hooks/threadHooks/useThread.ts
var useThread = __webpack_require__(99151);
;// ./src/components/scheduled-tasks/EditScheduleTaskModal/EditScheduleTaskModal.tsx
/* __next_internal_client_entry_do_not_use__ EditScheduleTaskModal auto */ 


















const EditScheduleTaskModal = (param)=>{
    let { isOpen, onClose, scheduleTask } = param;
    var _creditAccountInfo_reload_config;
    const { creditAccountInfo } = (0,hooks/* useCreditsAccountWithAutoPayInfo */.oT)();
    const isOnDemandEnable = creditAccountInfo === null || creditAccountInfo === void 0 ? void 0 : (_creditAccountInfo_reload_config = creditAccountInfo.reload_config) === null || _creditAccountInfo_reload_config === void 0 ? void 0 : _creditAccountInfo_reload_config.auto_reload_enabled;
    const { updateScheduledTask, isUpdating } = (0,scheduledTasks/* useScheduleList */.H)();
    const threadId = scheduleTask.target_type === 'THREAD' ? scheduleTask.target_id : null;
    const { thread } = (0,useThread/* useThread */._)(threadId);
    const [name, setName] = (0,react.useState)(scheduleTask.title);
    const [selectedScheduleType, setSelectedScheduleType] = (0,react.useState)(types_schedules/* ScheduleType */.uS.Once);
    const [selectedDayOrMonth, setSelectedDayOrMonth] = (0,react.useState)(0);
    const [selectedScheduleDate, setSelectedScheduleDate] = (0,react.useState)(new Date());
    const [selectedTime, setSelectedTime] = (0,react.useState)(0);
    const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
    const [notifyByEmail, setNotifyByEmail] = (0,react.useState)(false);
    // Parse the schedule config when the modal opens or scheduleTask changes
    (0,react.useEffect)(()=>{
        var _scheduleTask_schedule_config_notifications;
        const parsed = (0,schedules/* parseScheduleConfig */.fo)(scheduleTask.schedule_config);
        setSelectedScheduleType(parsed.selectedScheduleType);
        setSelectedDayOrMonth(parsed.selectedDayOrMonth);
        setSelectedScheduleDate(parsed.selectedScheduleDate);
        setSelectedTime(parsed.selectedTime);
        // Check if email notification is turned on
        const emailNotification = (_scheduleTask_schedule_config_notifications = scheduleTask.schedule_config.notifications) === null || _scheduleTask_schedule_config_notifications === void 0 ? void 0 : _scheduleTask_schedule_config_notifications.find((notif)=>notif.type === 'email');
        setNotifyByEmail((emailNotification === null || emailNotification === void 0 ? void 0 : emailNotification.enabled) || false);
    }, [
        scheduleTask
    ]);
    const handleSubmit = async ()=>{
        try {
            setIsSubmitting(true);
            const shouldActivate = scheduleTask.status !== models/* ScheduleStatus */.YW.ACTIVE;
            await updateScheduledTask(scheduleTask.schedule_id, {
                title: name,
                schedule_config: {
                    ...(0,schedules/* getScheduleBodyData */.a9)(selectedScheduleType, selectedScheduleDate, selectedDayOrMonth, selectedTime),
                    timezone: scheduleTask.schedule_config.timezone,
                    notifications: [
                        {
                            type: types_schedules/* ScheduleNotificationConfigType */.Fs.Email,
                            enabled: notifyByEmail
                        }
                    ]
                },
                ...shouldActivate && {
                    status: models/* ScheduleStatus */.YW.ACTIVE
                }
            });
            dist/* toast */.oR.success('Schedule updated successfully');
            onClose();
        } catch (error) {
            dist/* toast */.oR.error('Failed to update schedule');
            main/* datadogLogs */.yf.logger.error('Failed to update schedule', {
                error
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.lG, {
        open: isOpen,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogContent */.Cf, {
            className: (EditScheduleTaskModal_module_default()).root,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogTitle */.L3, {
                    className: (EditScheduleTaskModal_module_default()).header,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: (EditScheduleTaskModal_module_default()).title,
                            children: "Edit scheduled task"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (EditScheduleTaskModal_module_default()).closeButton,
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
                    className: (EditScheduleTaskModal_module_default()).content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (EditScheduleTaskModal_module_default()).taskSection,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: (EditScheduleTaskModal_module_default()).taskLabel,
                                    children: "Task name"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(InputSimple/* InputSimple */.$, {
                                    value: name,
                                    onChange: (e)=>setName(e.target.value),
                                    maxLength: 50,
                                    className: (EditScheduleTaskModal_module_default()).inputBox
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (EditScheduleTaskModal_module_default()).taskSection,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (EditScheduleTaskModal_module_default()).taskSubSection,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: (EditScheduleTaskModal_module_default()).taskLabel,
                                            children: "Task"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: (EditScheduleTaskModal_module_default()).taskLabelDescription,
                                            children: "Ninja will use the context from the initial thread"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (EditScheduleTaskModal_module_default()).inputBox,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: (EditScheduleTaskModal_module_default()).threadInfo,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "Based on Thread "
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                                                    children: thread === null || thread === void 0 ? void 0 : thread.name
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: " on ".concat(new Date(scheduleTask.created_at).toLocaleDateString())
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
                            className: (EditScheduleTaskModal_module_default()).taskSection,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (EditScheduleTaskModal_module_default()).taskSubSection,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: (EditScheduleTaskModal_module_default()).taskLabel,
                                            children: "Schedule"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: (EditScheduleTaskModal_module_default()).taskLabelDescription,
                                            children: [
                                                "Timezone: ",
                                                scheduleTask.schedule_config.timezone
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
                            className: (EditScheduleTaskModal_module_default()).taskSection,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: (EditScheduleTaskModal_module_default()).taskLabel,
                                    children: "Notify me when finished"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (EditScheduleTaskModal_module_default()).inputContainer,
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
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: (EditScheduleTaskModal_module_default()).updateNotes,
                            children: "Updating scheduled task details will automatically activate any paused tasks."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogFooter */.Es, {
                    className: (EditScheduleTaskModal_module_default()).footer,
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
                            disabled: !isOnDemandEnable || isSubmitting || isUpdating || !name.trim(),
                            children: isSubmitting || isUpdating ? 'Updating...' : 'Update'
                        })
                    ]
                })
            ]
        })
    });
};

;// ./src/components/scheduled-tasks/EditScheduleTaskModal/index.ts



/***/ }),

/***/ 55398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* reexport */ TextDivider)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(85203);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/components/ui/TextDivider/TextDivider.module.scss
var TextDivider_module = __webpack_require__(49688);
var TextDivider_module_default = /*#__PURE__*/__webpack_require__.n(TextDivider_module);
;// ./src/components/ui/TextDivider/TextDivider.tsx
/* __next_internal_client_entry_do_not_use__ TextDivider auto */ 


const TextDivider = (param)=>{
    let { text, withMargin = true, type = 'solid' } = param;
    return text ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: (TextDivider_module_default()).root,
        children: text
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {
        className: classnames_default()((TextDivider_module_default()).divider, {
            [(TextDivider_module_default()).withMargin]: withMargin,
            [(TextDivider_module_default()).dashed]: type === 'dashed'
        })
    });
};

;// ./src/components/ui/TextDivider/index.ts



/***/ }),

/***/ 60184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* reexport */ useLoadingOverlayActions),
  b: () => (/* reexport */ useLoadingOverlayState)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/store/index.ts + 2 modules
var store = __webpack_require__(82678);
// EXTERNAL MODULE: ./src/store/config.ts + 1 modules
var config = __webpack_require__(33057);
;// ./src/hooks/loadingOverlay/useLoadingOverlayState.ts
/* __next_internal_client_entry_do_not_use__ useLoadingOverlayState auto */ 


const useLoadingOverlayState = ()=>{
    const { isOpen, overlayText } = (0,config/* useAppSelector */.GV)(store/* loadingOverlayState */.WN);
    return (0,react.useMemo)(()=>({
            isLoadingOverlayOpen: isOpen,
            overlayText
        }), [
        isOpen,
        overlayText
    ]);
};

;// ./src/hooks/loadingOverlay/useLoadingOverlayActions.ts
/* __next_internal_client_entry_do_not_use__ useLoadingOverlayActions auto */ 


const useLoadingOverlayActions = ()=>{
    const dispatch = (0,config/* useAppDispatch */.jL)();
    const showLoadingOverlay = (0,react.useCallback)((param)=>{
        let { overlayText } = param;
        dispatch((0,store/* setIsLoadingOverlayOpen */.l9)({
            isOpen: true,
            overlayText
        }));
    }, [
        dispatch
    ]);
    const hideLoadingOverlay = (0,react.useCallback)(()=>{
        dispatch((0,store/* setIsLoadingOverlayOpen */.l9)());
    }, [
        dispatch
    ]);
    return (0,react.useMemo)(()=>({
            showLoadingOverlay,
            hideLoadingOverlay
        }), [
        showLoadingOverlay,
        hideLoadingOverlay
    ]);
};

;// ./src/hooks/loadingOverlay/index.ts




/***/ }),

/***/ 65142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64269);



function Input(param) {
    let { className, type, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
        type: type,
        "data-slot": "input",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    });
}



/***/ }),

/***/ 77755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ useGetAccount)
/* harmony export */ });
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90960);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99776);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53455);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80549);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);



const useGetAccount = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQueryClient */ .jE)();
    const { data, isLoading, isFetching } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__/* .useQuery */ .I)({
        queryKey: [
            'account-get'
        ],
        queryFn: ()=>(0,_lib_api__WEBPACK_IMPORTED_MODULE_0__/* .getAccount */ .sU)()
    });
    const updateGTMMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__/* .useMutation */ .n)({
        mutationFn: _lib_api__WEBPACK_IMPORTED_MODULE_0__/* .updateAccountGTM */ .l3,
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    'account-get'
                ]
            });
        }
    });
    const updateGTM = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (gtmInfo)=>{
        await updateGTMMutation.mutateAsync(gtmInfo);
    }, [
        updateGTMMutation
    ]);
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            data,
            isLoading,
            isFetching,
            updateGTM,
            isUpdatingGTM: updateGTMMutation.isPending
        }), [
        data,
        isFetching,
        isLoading,
        updateGTM,
        updateGTMMutation.isPending
    ]);
};


/***/ }),

/***/ 84456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Yq: () => (/* binding */ formatDate),
/* harmony export */   a9: () => (/* binding */ getScheduleBodyData),
/* harmony export */   fY: () => (/* binding */ getDescription),
/* harmony export */   fo: () => (/* binding */ parseScheduleConfig),
/* harmony export */   o5: () => (/* binding */ getScheduleTypeLabel)
/* harmony export */ });
/* harmony import */ var _constants_schedules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91296);
/* harmony import */ var _types_schedules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43956);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36117);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);



const getScheduleTypeLabel = (type)=>{
    return _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .SCHEDULE_TYPE_LABELS */ .Lr[type];
};
const formatDate = (date)=>{
    if (!date) {
        return '';
    }
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};
const getScheduleBodyData = (type, date, dayOrMonth, time)=>{
    if (type === _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .ScheduleType */ .uS.Hourly || type === _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .ScheduleType */ .uS.Minutes) {
        return {
            type: type,
            rate: time
        };
    }
    const h = Math.floor(time / 60);
    const m = time % 60;
    if (type === _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .ScheduleType */ .uS.Once) {
        // Format as ISO string without timezone conversion
        const isoString = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(date).hour(h).minute(m).second(0).format('YYYY-MM-DDTHH:mm:ss');
        return {
            type: type,
            run_at: isoString
        };
    }
    if (type === _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .ScheduleType */ .uS.Daily) {
        return {
            type: type,
            hour: h,
            minute: m
        };
    }
    if (type === _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .ScheduleType */ .uS.Weekly) {
        return {
            type: type,
            day_of_week: dayOrMonth,
            hour: h,
            minute: m
        };
    }
    if (type === _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .ScheduleType */ .uS.Monthly) {
        return {
            type: type,
            day_of_month: dayOrMonth,
            hour: h,
            minute: m
        };
    }
    return {};
};
const getOrdinal = (day)=>{
    if (day === 1) {
        return "".concat(day, "st");
    }
    if (day === 2) {
        return "".concat(day, "nd");
    }
    if (day === 3) {
        return "".concat(day, "rd");
    }
    return "".concat(day, "th");
};
const getFormatTime = (hour, minute)=>{
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = (hour + 11) % 12 + 1;
    const displayMinute = minute.toString().padStart(2, '0');
    return "".concat(displayHour, ":").concat(displayMinute, " ").concat(period);
};
const getDescription = (schedule_config)=>{
    if (schedule_config.type === _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .ScheduleType */ .uS.Once) {
        const date = new Date(schedule_config.run_at);
        const readableDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            timeZone: schedule_config.timezone
        });
        // Format time in the schedule's timezone
        const timeString = date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            timeZone: schedule_config.timezone
        });
        return "Runs once at ".concat(readableDate, " at ").concat(timeString);
    }
    if (schedule_config.type === _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .ScheduleType */ .uS.Minutes) {
        return "Runs every ".concat(schedule_config.rate, " minutes");
    }
    if (schedule_config.type === _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .ScheduleType */ .uS.Hourly) {
        return "Runs every ".concat(schedule_config.rate, " hour").concat(schedule_config.rate > 1 ? 's' : '');
    }
    const { hour, minute } = schedule_config;
    if (schedule_config.type === _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .ScheduleType */ .uS.Daily) {
        return "Daily at ".concat(getFormatTime(hour, minute));
    }
    if (schedule_config.type === _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .ScheduleType */ .uS.Weekly) {
        const { day_of_week } = schedule_config;
        if (day_of_week < 1 || day_of_week > 7) return '';
        return "Weekly on ".concat(_constants_schedules__WEBPACK_IMPORTED_MODULE_0__/* .DAYS_OF_WEEK */ .j_[day_of_week - 1].label, " at ").concat(getFormatTime(hour, minute));
    }
    if (schedule_config.type === _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .ScheduleType */ .uS.Monthly) {
        const { day_of_month } = schedule_config;
        if (day_of_month < 1 || day_of_month > 31) return '';
        return "Monthly on ".concat(getOrdinal(day_of_month), " at ").concat(getFormatTime(hour, minute));
    }
    return '';
};
const parseScheduleConfig = (config)=>{
    switch(config.type){
        case 'once':
            {
                const runAtDate = new Date(config.run_at);
                return {
                    selectedScheduleType: _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .ScheduleType */ .uS.Once,
                    selectedDayOrMonth: 0,
                    selectedScheduleDate: runAtDate,
                    selectedTime: runAtDate.getHours() * 60 + runAtDate.getMinutes()
                };
            }
        case 'minutes':
            return {
                selectedScheduleType: _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .ScheduleType */ .uS.Minutes,
                selectedDayOrMonth: 0,
                selectedScheduleDate: new Date(),
                selectedTime: config.rate
            };
        case 'hourly':
            return {
                selectedScheduleType: _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .ScheduleType */ .uS.Hourly,
                selectedDayOrMonth: 0,
                selectedScheduleDate: new Date(),
                selectedTime: config.rate
            };
        case 'daily':
            return {
                selectedScheduleType: _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .ScheduleType */ .uS.Daily,
                selectedDayOrMonth: 0,
                selectedScheduleDate: new Date(),
                selectedTime: config.hour * 60 + config.minute
            };
        case 'weekly':
            return {
                selectedScheduleType: _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .ScheduleType */ .uS.Weekly,
                selectedDayOrMonth: config.day_of_week,
                selectedScheduleDate: new Date(),
                selectedTime: config.hour * 60 + config.minute
            };
        case 'monthly':
            return {
                selectedScheduleType: _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .ScheduleType */ .uS.Monthly,
                selectedDayOrMonth: config.day_of_month,
                selectedScheduleDate: new Date(),
                selectedTime: config.hour * 60 + config.minute
            };
        default:
            return {
                selectedScheduleType: _types_schedules__WEBPACK_IMPORTED_MODULE_1__/* .ScheduleType */ .uS.Once,
                selectedDayOrMonth: 0,
                selectedScheduleDate: new Date(),
                selectedTime: 0
            };
    }
};


/***/ }),

/***/ 89241:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"label":"ScheduleTypeSelector_label__ogfP4","triggerButton":"ScheduleTypeSelector_triggerButton__Vzmfb","nj-animate-horizontal-appearance-ltr-enter":"ScheduleTypeSelector_nj-animate-horizontal-appearance-ltr-enter__5WlJQ","nj-animate-horizontal-appearance-ltr-enter-active":"ScheduleTypeSelector_nj-animate-horizontal-appearance-ltr-enter-active__uprcs","nj-animate-horizontal-appearance-ltr-exit":"ScheduleTypeSelector_nj-animate-horizontal-appearance-ltr-exit__gT_OU","nj-animate-horizontal-appearance-ltr-exit-active":"ScheduleTypeSelector_nj-animate-horizontal-appearance-ltr-exit-active__fgz3Z","nj-animate-left-panel-width-reduce-enter":"ScheduleTypeSelector_nj-animate-left-panel-width-reduce-enter__ZhE1k","nj-animate-left-panel-width-reduce-enter-active":"ScheduleTypeSelector_nj-animate-left-panel-width-reduce-enter-active__lZBuW","nj-animate-left-panel-width-reduce-exit":"ScheduleTypeSelector_nj-animate-left-panel-width-reduce-exit__zWq9x","nj-animate-left-panel-width-reduce-exit-active":"ScheduleTypeSelector_nj-animate-left-panel-width-reduce-exit-active__tI6Ix","nj-animate-vertical-appearance-appear":"ScheduleTypeSelector_nj-animate-vertical-appearance-appear__u7l5U","nj-animate-vertical-appearance-appear-active":"ScheduleTypeSelector_nj-animate-vertical-appearance-appear-active___kye4","nj-animate-vertical-appearance-enter":"ScheduleTypeSelector_nj-animate-vertical-appearance-enter__0GghB","nj-animate-vertical-appearance-enter-active":"ScheduleTypeSelector_nj-animate-vertical-appearance-enter-active__0RQYB","nj-animate-vertical-appearance-exit":"ScheduleTypeSelector_nj-animate-vertical-appearance-exit___M3dF","nj-animate-vertical-appearance-exit-active":"ScheduleTypeSelector_nj-animate-vertical-appearance-exit-active__QVjG4","selectorItem":"ScheduleTypeSelector_selectorItem__6NdKb","infinite-spinner":"ScheduleTypeSelector_infinite-spinner__ym9hj","fadeIn":"ScheduleTypeSelector_fadeIn__DAqf5","blinking":"ScheduleTypeSelector_blinking__KRhif","movingRight":"ScheduleTypeSelector_movingRight__E7gSD"};

/***/ }),

/***/ 90157:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"label":"ScheduleDayMonthSelector_label__hprQc","triggerButton":"ScheduleDayMonthSelector_triggerButton__Ed_1i","nj-animate-horizontal-appearance-ltr-enter":"ScheduleDayMonthSelector_nj-animate-horizontal-appearance-ltr-enter__7VlqG","nj-animate-horizontal-appearance-ltr-enter-active":"ScheduleDayMonthSelector_nj-animate-horizontal-appearance-ltr-enter-active__87rXL","nj-animate-horizontal-appearance-ltr-exit":"ScheduleDayMonthSelector_nj-animate-horizontal-appearance-ltr-exit__0y_DZ","nj-animate-horizontal-appearance-ltr-exit-active":"ScheduleDayMonthSelector_nj-animate-horizontal-appearance-ltr-exit-active__DVEcE","nj-animate-left-panel-width-reduce-enter":"ScheduleDayMonthSelector_nj-animate-left-panel-width-reduce-enter__S3BNd","nj-animate-left-panel-width-reduce-enter-active":"ScheduleDayMonthSelector_nj-animate-left-panel-width-reduce-enter-active__1DrUy","nj-animate-left-panel-width-reduce-exit":"ScheduleDayMonthSelector_nj-animate-left-panel-width-reduce-exit__Vs6BR","nj-animate-left-panel-width-reduce-exit-active":"ScheduleDayMonthSelector_nj-animate-left-panel-width-reduce-exit-active__TB9Tf","nj-animate-vertical-appearance-appear":"ScheduleDayMonthSelector_nj-animate-vertical-appearance-appear__2u7jU","nj-animate-vertical-appearance-appear-active":"ScheduleDayMonthSelector_nj-animate-vertical-appearance-appear-active__axMu0","nj-animate-vertical-appearance-enter":"ScheduleDayMonthSelector_nj-animate-vertical-appearance-enter__imfe2","nj-animate-vertical-appearance-enter-active":"ScheduleDayMonthSelector_nj-animate-vertical-appearance-enter-active__vv2Ux","nj-animate-vertical-appearance-exit":"ScheduleDayMonthSelector_nj-animate-vertical-appearance-exit__eEhKs","nj-animate-vertical-appearance-exit-active":"ScheduleDayMonthSelector_nj-animate-vertical-appearance-exit-active__W_TXE","selectorItem":"ScheduleDayMonthSelector_selectorItem__6gjzx","container":"ScheduleDayMonthSelector_container__d3aM_","infinite-spinner":"ScheduleDayMonthSelector_infinite-spinner__b9ewj","fadeIn":"ScheduleDayMonthSelector_fadeIn__I2F29","blinking":"ScheduleDayMonthSelector_blinking__XLZeh","movingRight":"ScheduleDayMonthSelector_movingRight__whG4e"};

/***/ }),

/***/ 91296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MR: () => (/* binding */ getScheduleOptions),
/* harmony export */   j_: () => (/* binding */ DAYS_OF_WEEK),
/* harmony export */   u0: () => (/* binding */ getScheduleDayMonthOptions)
/* harmony export */ });
/* unused harmony export DAYS_OF_MONTH */
/* harmony import */ var _types_schedules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43956);

const HOURLY_OPTIONS = Array.from({
    length: 23
}, (_, index)=>{
    const value = index + 1;
    return {
        value,
        label: "Every ".concat(value, " hour").concat(value === 1 ? '' : 's')
    };
});
const MINUTE_INTERVALS = [
    30,
    35,
    40,
    45,
    50,
    55
];
const MINUTELY_OPTIONS = MINUTE_INTERVALS.map((value)=>({
        value,
        label: "Every ".concat(value, " minute").concat(value === 1 ? '' : 's')
    }));
const buildTimeOptions = function() {
    let stepMinutes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 15;
    const result = [];
    for(let minutes = 0; minutes < 24 * 60; minutes += stepMinutes){
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        const period = h >= 12 ? 'PM' : 'AM';
        const displayHour = (h + 11) % 12 + 1;
        const displayMinute = m.toString().padStart(2, '0');
        result.push({
            value: minutes,
            label: "".concat(displayHour, ":").concat(displayMinute, " ").concat(period)
        });
    }
    return result;
};
const TIME_OPTIONS = buildTimeOptions();
const getScheduleOptions = (type)=>{
    if (type === _types_schedules__WEBPACK_IMPORTED_MODULE_0__/* .ScheduleType */ .uS.Hourly) return HOURLY_OPTIONS;
    if (type === _types_schedules__WEBPACK_IMPORTED_MODULE_0__/* .ScheduleType */ .uS.Minutes) return MINUTELY_OPTIONS;
    return TIME_OPTIONS;
};
const DAYS_OF_WEEK = [
    {
        value: 1,
        label: 'Sunday'
    },
    {
        value: 2,
        label: 'Monday'
    },
    {
        value: 3,
        label: 'Tuesday'
    },
    {
        value: 4,
        label: 'Wednesday'
    },
    {
        value: 5,
        label: 'Thursday'
    },
    {
        value: 6,
        label: 'Friday'
    },
    {
        value: 7,
        label: 'Saturday'
    }
];
const DAYS_OF_MONTH = Array.from({
    length: 31
}, (_, i)=>({
        value: i + 1,
        label: "Day ".concat(i + 1)
    }));
const getScheduleDayMonthOptions = (type)=>{
    if (type === _types_schedules__WEBPACK_IMPORTED_MODULE_0__/* .ScheduleType */ .uS.Monthly) return DAYS_OF_MONTH;
    return DAYS_OF_WEEK;
};


/***/ }),

/***/ 93297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* reexport */ NinjaLogo)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./src/assets/icons/superNinjaIcon.tsx
var superNinjaIcon = __webpack_require__(48525);
// EXTERNAL MODULE: ./src/components/ui/NinjaLogo/NinjaLogo.module.scss
var NinjaLogo_module = __webpack_require__(48944);
var NinjaLogo_module_default = /*#__PURE__*/__webpack_require__.n(NinjaLogo_module);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(85203);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// ./src/components/ui/NinjaLogo/NinjaLogo.tsx
/* __next_internal_client_entry_do_not_use__ NinjaLogo auto */ 




const NinjaLogo = (param)=>{
    let { size = constants/* SVG_SIZE_M */.ng3, className } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: classnames_default()((NinjaLogo_module_default()).root, className),
        style: {
            width: size,
            height: size
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(superNinjaIcon/* SuperNinjaIcon */.z, {
            size: size
        })
    });
};

;// ./src/components/ui/NinjaLogo/index.ts



/***/ }),

/***/ 98053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $v: () => (/* binding */ AlertDialogDescription),
/* harmony export */   EO: () => (/* binding */ AlertDialogContent),
/* harmony export */   Lt: () => (/* binding */ AlertDialog),
/* harmony export */   Rx: () => (/* binding */ AlertDialogAction),
/* harmony export */   Zr: () => (/* binding */ AlertDialogCancel),
/* harmony export */   ck: () => (/* binding */ AlertDialogFooter),
/* harmony export */   r7: () => (/* binding */ AlertDialogTitle),
/* harmony export */   wd: () => (/* binding */ AlertDialogHeader)
/* harmony export */ });
/* unused harmony exports AlertDialogPortal, AlertDialogOverlay, AlertDialogTrigger */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35646);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64269);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3998);
/* __next_internal_client_entry_do_not_use__ AlertDialog,AlertDialogPortal,AlertDialogOverlay,AlertDialogTrigger,AlertDialogContent,AlertDialogHeader,AlertDialogFooter,AlertDialogTitle,AlertDialogDescription,AlertDialogAction,AlertDialogCancel auto */ 




function AlertDialog(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__/* .Root */ .bL, {
        "data-slot": "alert-dialog",
        ...props
    });
}
function AlertDialogTrigger(param) {
    let { ...props } = param;
    return /*#__PURE__*/ _jsx(AlertDialogPrimitive.Trigger, {
        "data-slot": "alert-dialog-trigger",
        ...props
    });
}
function AlertDialogPortal(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__/* .Portal */ .ZL, {
        "data-slot": "alert-dialog-portal",
        ...props
    });
}
function AlertDialogOverlay(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__/* .Overlay */ .hJ, {
        "data-slot": "alert-dialog-overlay",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    });
}
function AlertDialogContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertDialogOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__/* .Content */ .UC, {
                "data-slot": "alert-dialog-content",
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props
            })
        ]
    });
}
function AlertDialogHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        "data-slot": "alert-dialog-header",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    });
}
function AlertDialogFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        "data-slot": "alert-dialog-footer",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    });
}
function AlertDialogTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__/* .Title */ .hE, {
        "data-slot": "alert-dialog-title",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('text-lg font-semibold', className),
        ...props
    });
}
function AlertDialogDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__/* .Description */ .VY, {
        "data-slot": "alert-dialog-description",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('text-muted-foreground text-sm', className),
        ...props
    });
}
function AlertDialogAction(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__/* .Action */ .rc, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)((0,_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .buttonVariants */ .r)(), className),
        ...props
    });
}
function AlertDialogCancel(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__/* .Cancel */ .ZD, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)((0,_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .buttonVariants */ .r)({
            variant: 'outline'
        }), className),
        ...props
    });
}



/***/ }),

/***/ 99151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ useThread)
/* harmony export */ });
/* harmony import */ var _components_AuthProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19016);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99776);
/* harmony import */ var _gen_sn_api_threads_threads_gen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23267);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40585);
/* __next_internal_client_entry_do_not_use__ useThread auto */ 




const useThread = (threadId)=>{
    const { user } = (0,_components_AuthProvider__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .A)();
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__/* .useQueryClient */ .jE)();
    const queryResult = (0,_gen_sn_api_threads_threads_gen__WEBPACK_IMPORTED_MODULE_2__/* .useGetThreadApiThreadsThreadIdGet */ .q6)(threadId, {
        query: {
            enabled: !!user && !!threadId,
            queryKey: _constants__WEBPACK_IMPORTED_MODULE_3__/* .THREAD_QUERY_KEYS */ .h.detail(threadId)
        }
    });
    const { data: thread, isLoading } = queryResult;
    const refreshThread = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        queryClient.invalidateQueries({
            queryKey: _constants__WEBPACK_IMPORTED_MODULE_3__/* .THREAD_QUERY_KEYS */ .h.detail(threadId)
        });
    }, [
        queryClient,
        threadId
    ]);
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            thread,
            isLoading,
            refreshThread
        }), [
        thread,
        isLoading,
        refreshThread
    ]);
};


/***/ })

}]);
//# sourceMappingURL=96-a01f5d8551184f55.js.map