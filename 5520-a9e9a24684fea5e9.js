"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5520],{

/***/ 19016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useAuth),
/* harmony export */   O: () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12115);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35943);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42917);
/* harmony import */ var aws_amplify_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40281);
/* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33057);
/* harmony import */ var _store_slices_logoutSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87518);
/* harmony import */ var _lib_utils_amplify_client_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87214);
/* harmony import */ var _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73262);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74879);
/* harmony import */ var posthog_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26614);
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50814);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90960);












const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
const AuthProvider = (param)=>{
    let { children } = param;
    const dispatch = (0,_store_config__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .jL)();
    const [session, setSession] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [sessionId, setSessionId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const [isCheckingAccount, setIsCheckingAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const addUserToGTMDataLayer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((user)=>{
        var _user_name, _user_name1;
        if (!user) {
            return;
        }
        (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_7__/* .addUserIdToGTMDataLayer */ .sZ)({
            user_id: user.ninja_user_id || '',
            user_email: user.email || '',
            user_first_name: ((_user_name = user.name) === null || _user_name === void 0 ? void 0 : _user_name.split(' ')[0]) || '',
            user_last_name: ((_user_name1 = user.name) === null || _user_name1 === void 0 ? void 0 : _user_name1.split(' ').slice(1).join(' ')) || '',
            tier_id: null
        });
    }, []);
    const handleSessionId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {
        let reuseExisting = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        let wsSessionId;
        if (reuseExisting) {
            wsSessionId = window.sessionStorage.getItem('ninja_ws_session_id') || (0,uuid__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)();
        } else {
            wsSessionId = (0,uuid__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)();
        }
        window.sessionStorage.setItem('ninja_ws_session_id', wsSessionId);
        setSessionId(wsSessionId);
    }, []);
    const clearSessionId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        window.sessionStorage.removeItem('ninja_ws_session_id');
        setSessionId(undefined);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const hubListenerCancelToken = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__/* .Hub */ .YZ.listen('auth', async (param)=>{
            let { payload } = param;
            switch(payload.event){
                case 'signedIn':
                    const currentSession = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__/* .fetchAuthSession */ .$)();
                    setSession(currentSession);
                    const user = await (0,_lib_utils_amplify_client_utils__WEBPACK_IMPORTED_MODULE_4__/* .getUserFromAmplifySession */ .K)();
                    setUser((user === null || user === void 0 ? void 0 : user.ninja_user_id) || null);
                    setUserData(user);
                    handleSessionId();
                    _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_5__/* .datadogLogs */ .yf.setUser({
                        id: user === null || user === void 0 ? void 0 : user.ninja_user_id,
                        email: user === null || user === void 0 ? void 0 : user.email
                    });
                    posthog_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.identify(user === null || user === void 0 ? void 0 : user.ninja_user_id, {
                        email: user === null || user === void 0 ? void 0 : user.email,
                        name: user === null || user === void 0 ? void 0 : user.name
                    });
                    // Add user to GTM data layer
                    addUserToGTMDataLayer(user);
                    // Delete the custom username from localStorage after sign-in (it was used for email signup process to store custom username)
                    window.localStorage.removeItem('_cognito_customUsername');
                    break;
                case 'signedOut':
                    setSession(null);
                    setUser(null);
                    clearSessionId();
                    _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_5__/* .datadogLogs */ .yf.clearUser();
                    // Clear persisted Redux state on sign-out
                    dispatch((0,_store_slices_logoutSlice__WEBPACK_IMPORTED_MODULE_3__/* .logout */ .ri)());
                    break;
                case 'tokenRefresh':
                    const refreshedSession = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__/* .fetchAuthSession */ .$)();
                    setSession(refreshedSession);
                    break;
                case 'tokenRefresh_failure':
                    _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_5__/* .datadogLogs */ .yf.logger.warn('Failure while refreshing auth tokens.');
                    break;
            }
        });
        return ()=>{
            hubListenerCancelToken === null || hubListenerCancelToken === void 0 ? void 0 : hubListenerCancelToken();
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getInitialSession = async ()=>{
            var _currentSession_tokens;
            const currentSession = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__/* .fetchAuthSession */ .$)();
            setSession(currentSession);
            if (!(currentSession === null || currentSession === void 0 ? void 0 : (_currentSession_tokens = currentSession.tokens) === null || _currentSession_tokens === void 0 ? void 0 : _currentSession_tokens.accessToken)) {
                _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_5__/* .datadogLogs */ .yf.logger.warn('No access token found, user is not authenticated.');
                setIsLoading(false);
                return;
            }
            const user = await (0,_lib_utils_amplify_client_utils__WEBPACK_IMPORTED_MODULE_4__/* .getUserFromAmplifySession */ .K)();
            setUser(user === null || user === void 0 ? void 0 : user.ninja_user_id);
            setUserData(user);
            handleSessionId(true);
            _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_5__/* .datadogLogs */ .yf.setUser({
                id: user === null || user === void 0 ? void 0 : user.ninja_user_id,
                email: user === null || user === void 0 ? void 0 : user.email
            });
            posthog_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.identify(user === null || user === void 0 ? void 0 : user.ninja_user_id, {
                email: user === null || user === void 0 ? void 0 : user.email,
                name: user === null || user === void 0 ? void 0 : user.name
            });
            // Add user to GTM data layer for existing sessions
            addUserToGTMDataLayer(user);
            setIsLoading(false);
        };
        getInitialSession();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const checkAccountExists = async ()=>{
            try {
                try {
                    ;
                    await (0,_lib_api__WEBPACK_IMPORTED_MODULE_8__/* .getAccount */ .sU)();
                } catch (error) {
                    _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_5__/* .datadogLogs */ .yf.logger.warn('No accounts found, creating a new account...');
                    const sessionUser = await (0,_lib_utils_amplify_client_utils__WEBPACK_IMPORTED_MODULE_4__/* .getUserFromAmplifySession */ .K)();
                    await (0,_lib_api__WEBPACK_IMPORTED_MODULE_8__/* .createUser */ .kg)({
                        id: sessionUser.ninja_user_id,
                        name: sessionUser.name,
                        email: sessionUser.email
                    });
                } finally{
                    setIsCheckingAccount(false);
                }
            } catch (error) {
                _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_5__/* .datadogLogs */ .yf.logger.error('Error checking/creating account:', error);
            }
        };
        if (!isCheckingAccount && user) {
            setIsCheckingAccount(true);
            checkAccountExists();
            handleSessionId(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        user
    ]);
    const signOut = async ()=>{
        await (0,aws_amplify_auth__WEBPACK_IMPORTED_MODULE_12__/* .signOut */ .C)();
    };
    const value = {
        session,
        user,
        userData,
        sessionId,
        isLoading,
        signOut
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AuthContext.Provider, {
        value: value,
        children: children
    });
};
const useAuth = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};


/***/ }),

/***/ 23267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F2: () => (/* binding */ getThreadApiThreadsThreadIdGet),
/* harmony export */   Gh: () => (/* binding */ usePutThreadApiThreadsThreadIdPut),
/* harmony export */   aY: () => (/* binding */ useGetThreadsApiThreadsGet),
/* harmony export */   fL: () => (/* binding */ getToolsSummaryApiThreadsThreadIdToolsSummaryGet),
/* harmony export */   iI: () => (/* binding */ useDeleteThreadApiThreadsThreadIdDelete),
/* harmony export */   q6: () => (/* binding */ useGetThreadApiThreadsThreadIdGet)
/* harmony export */ });
/* unused harmony exports getThreadsApiThreadsGet, getGetThreadsApiThreadsGetQueryKey, getGetThreadsApiThreadsGetInfiniteQueryOptions, useGetThreadsApiThreadsGetInfinite, getGetThreadsApiThreadsGetQueryOptions, getGetThreadApiThreadsThreadIdGetQueryKey, getGetThreadApiThreadsThreadIdGetInfiniteQueryOptions, useGetThreadApiThreadsThreadIdGetInfinite, getGetThreadApiThreadsThreadIdGetQueryOptions, putThreadApiThreadsThreadIdPut, getPutThreadApiThreadsThreadIdPutMutationOptions, deleteThreadApiThreadsThreadIdDelete, getDeleteThreadApiThreadsThreadIdDeleteMutationOptions, getGetToolsSummaryApiThreadsThreadIdToolsSummaryGetQueryKey, getGetToolsSummaryApiThreadsThreadIdToolsSummaryGetInfiniteQueryOptions, useGetToolsSummaryApiThreadsThreadIdToolsSummaryGetInfinite, getGetToolsSummaryApiThreadsThreadIdToolsSummaryGetQueryOptions, useGetToolsSummaryApiThreadsThreadIdToolsSummaryGet, getMessagesApiThreadsThreadIdPaginationMessagesGet, getGetMessagesApiThreadsThreadIdPaginationMessagesGetQueryKey, getGetMessagesApiThreadsThreadIdPaginationMessagesGetInfiniteQueryOptions, useGetMessagesApiThreadsThreadIdPaginationMessagesGetInfinite, getGetMessagesApiThreadsThreadIdPaginationMessagesGetQueryOptions, useGetMessagesApiThreadsThreadIdPaginationMessagesGet, getWindowMessagesApiThreadsThreadIdPaginationWindowMessagesMessageIdGet, getGetWindowMessagesApiThreadsThreadIdPaginationWindowMessagesMessageIdGetQueryKey, getGetWindowMessagesApiThreadsThreadIdPaginationWindowMessagesMessageIdGetInfiniteQueryOptions, useGetWindowMessagesApiThreadsThreadIdPaginationWindowMessagesMessageIdGetInfinite, getGetWindowMessagesApiThreadsThreadIdPaginationWindowMessagesMessageIdGetQueryOptions, useGetWindowMessagesApiThreadsThreadIdPaginationWindowMessagesMessageIdGet, getAllMessagesApiThreadsThreadIdPaginationAllMessagesGet, getGetAllMessagesApiThreadsThreadIdPaginationAllMessagesGetQueryKey, getGetAllMessagesApiThreadsThreadIdPaginationAllMessagesGetInfiniteQueryOptions, useGetAllMessagesApiThreadsThreadIdPaginationAllMessagesGetInfinite, getGetAllMessagesApiThreadsThreadIdPaginationAllMessagesGetQueryOptions, useGetAllMessagesApiThreadsThreadIdPaginationAllMessagesGet, getMessageApiThreadsThreadIdPaginationMessagesMessageIdGet, getGetMessageApiThreadsThreadIdPaginationMessagesMessageIdGetQueryKey, getGetMessageApiThreadsThreadIdPaginationMessagesMessageIdGetInfiniteQueryOptions, useGetMessageApiThreadsThreadIdPaginationMessagesMessageIdGetInfinite, getGetMessageApiThreadsThreadIdPaginationMessagesMessageIdGetQueryOptions, useGetMessageApiThreadsThreadIdPaginationMessagesMessageIdGet, resolveShortcodeEndpointApiThreadsShortcodeShortcodeGet, getResolveShortcodeEndpointApiThreadsShortcodeShortcodeGetQueryKey, getResolveShortcodeEndpointApiThreadsShortcodeShortcodeGetInfiniteQueryOptions, useResolveShortcodeEndpointApiThreadsShortcodeShortcodeGetInfinite, getResolveShortcodeEndpointApiThreadsShortcodeShortcodeGetQueryOptions, useResolveShortcodeEndpointApiThreadsShortcodeShortcodeGet, getThreadsV2ApiV2ThreadsGet, getGetThreadsV2ApiV2ThreadsGetQueryKey, getGetThreadsV2ApiV2ThreadsGetInfiniteQueryOptions, useGetThreadsV2ApiV2ThreadsGetInfinite, getGetThreadsV2ApiV2ThreadsGetQueryOptions, useGetThreadsV2ApiV2ThreadsGet, getThreadV2ApiV2ThreadsThreadIdGet, getGetThreadV2ApiV2ThreadsThreadIdGetQueryKey, getGetThreadV2ApiV2ThreadsThreadIdGetInfiniteQueryOptions, useGetThreadV2ApiV2ThreadsThreadIdGetInfinite, getGetThreadV2ApiV2ThreadsThreadIdGetQueryOptions, useGetThreadV2ApiV2ThreadsThreadIdGet, getMessagesV2ApiV2ThreadsThreadIdMessagesGet, getGetMessagesV2ApiV2ThreadsThreadIdMessagesGetQueryKey, getGetMessagesV2ApiV2ThreadsThreadIdMessagesGetInfiniteQueryOptions, useGetMessagesV2ApiV2ThreadsThreadIdMessagesGetInfinite, getGetMessagesV2ApiV2ThreadsThreadIdMessagesGetQueryOptions, useGetMessagesV2ApiV2ThreadsThreadIdMessagesGet */
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53455);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80549);
/* harmony import */ var _lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37010);
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ 

/**
 * @summary Get Threads
 */ const getThreadsApiThreadsGet = (params, options, signal)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://super-agent-api.beta.myninja.ai/api/threads",
        method: 'GET',
        params,
        signal
    }, options);
};
const getGetThreadsApiThreadsGetQueryKey = (params)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/threads",
        ...params ? [
            params
        ] : []
    ];
};
const getGetThreadsApiThreadsGetInfiniteQueryOptions = (params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetThreadsApiThreadsGetQueryKey(params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getThreadsApiThreadsGet(params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary Get Threads
 */ function useGetThreadsApiThreadsGetInfinite(params, options, queryClient) {
    const queryOptions = getGetThreadsApiThreadsGetInfiniteQueryOptions(params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetThreadsApiThreadsGetQueryOptions = (params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetThreadsApiThreadsGetQueryKey(params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getThreadsApiThreadsGet(params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary Get Threads
 */ function useGetThreadsApiThreadsGet(params, options, queryClient) {
    const queryOptions = getGetThreadsApiThreadsGetQueryOptions(params, options);
    const query = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .I)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Get Thread
 */ const getThreadApiThreadsThreadIdGet = (threadId, options, signal)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId),
        method: 'GET',
        signal
    }, options);
};
const getGetThreadApiThreadsThreadIdGetQueryKey = (threadId)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId)
    ];
};
const getGetThreadApiThreadsThreadIdGetInfiniteQueryOptions = (threadId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetThreadApiThreadsThreadIdGetQueryKey(threadId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getThreadApiThreadsThreadIdGet(threadId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Get Thread
 */ function useGetThreadApiThreadsThreadIdGetInfinite(threadId, options, queryClient) {
    const queryOptions = getGetThreadApiThreadsThreadIdGetInfiniteQueryOptions(threadId, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetThreadApiThreadsThreadIdGetQueryOptions = (threadId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetThreadApiThreadsThreadIdGetQueryKey(threadId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getThreadApiThreadsThreadIdGet(threadId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Get Thread
 */ function useGetThreadApiThreadsThreadIdGet(threadId, options, queryClient) {
    const queryOptions = getGetThreadApiThreadsThreadIdGetQueryOptions(threadId, options);
    const query = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .I)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Put Thread
 */ const putThreadApiThreadsThreadIdPut = (threadId, putThreadApiThreadsThreadIdPutBody, options)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        data: putThreadApiThreadsThreadIdPutBody
    }, options);
};
const getPutThreadApiThreadsThreadIdPutMutationOptions = (options)=>{
    const mutationKey = [
        'putThreadApiThreadsThreadIdPut'
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
        const { threadId, data } = props !== null && props !== void 0 ? props : {};
        return putThreadApiThreadsThreadIdPut(threadId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Put Thread
 */ const usePutThreadApiThreadsThreadIdPut = (options, queryClient)=>{
    const mutationOptions = getPutThreadApiThreadsThreadIdPutMutationOptions(options);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useMutation */ .n)(mutationOptions, queryClient);
};
/**
 * @summary Delete Thread
 */ const deleteThreadApiThreadsThreadIdDelete = (threadId, options)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId),
        method: 'DELETE'
    }, options);
};
const getDeleteThreadApiThreadsThreadIdDeleteMutationOptions = (options)=>{
    const mutationKey = [
        'deleteThreadApiThreadsThreadIdDelete'
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
        const { threadId } = props !== null && props !== void 0 ? props : {};
        return deleteThreadApiThreadsThreadIdDelete(threadId, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Delete Thread
 */ const useDeleteThreadApiThreadsThreadIdDelete = (options, queryClient)=>{
    const mutationOptions = getDeleteThreadApiThreadsThreadIdDeleteMutationOptions(options);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useMutation */ .n)(mutationOptions, queryClient);
};
/**
 * Get an ordered list of tool message mappings.

Returns:
    ToolSummaryResponse: Ordered list of assistant to tool message mappings
 * @summary Get Tools Summary
 */ const getToolsSummaryApiThreadsThreadIdToolsSummaryGet = (threadId, options, signal)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/tools_summary"),
        method: 'GET',
        signal
    }, options);
};
const getGetToolsSummaryApiThreadsThreadIdToolsSummaryGetQueryKey = (threadId)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/tools_summary")
    ];
};
const getGetToolsSummaryApiThreadsThreadIdToolsSummaryGetInfiniteQueryOptions = (threadId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetToolsSummaryApiThreadsThreadIdToolsSummaryGetQueryKey(threadId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getToolsSummaryApiThreadsThreadIdToolsSummaryGet(threadId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Get Tools Summary
 */ function useGetToolsSummaryApiThreadsThreadIdToolsSummaryGetInfinite(threadId, options, queryClient) {
    const queryOptions = getGetToolsSummaryApiThreadsThreadIdToolsSummaryGetInfiniteQueryOptions(threadId, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetToolsSummaryApiThreadsThreadIdToolsSummaryGetQueryOptions = (threadId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetToolsSummaryApiThreadsThreadIdToolsSummaryGetQueryKey(threadId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getToolsSummaryApiThreadsThreadIdToolsSummaryGet(threadId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Get Tools Summary
 */ function useGetToolsSummaryApiThreadsThreadIdToolsSummaryGet(threadId, options, queryClient) {
    const queryOptions = getGetToolsSummaryApiThreadsThreadIdToolsSummaryGetQueryOptions(threadId, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Get messages for a thread. This endpoint replaces the frontend's direct Supabase query.
 * @summary Get Messages
 */ const getMessagesApiThreadsThreadIdPaginationMessagesGet = (threadId, params, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/pagination/messages"),
        method: 'GET',
        params,
        signal
    }, options);
};
const getGetMessagesApiThreadsThreadIdPaginationMessagesGetQueryKey = (threadId, params)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/pagination/messages"),
        ...params ? [
            params
        ] : []
    ];
};
const getGetMessagesApiThreadsThreadIdPaginationMessagesGetInfiniteQueryOptions = (threadId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetMessagesApiThreadsThreadIdPaginationMessagesGetQueryKey(threadId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getMessagesApiThreadsThreadIdPaginationMessagesGet(threadId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Get Messages
 */ function useGetMessagesApiThreadsThreadIdPaginationMessagesGetInfinite(threadId, params, options, queryClient) {
    const queryOptions = getGetMessagesApiThreadsThreadIdPaginationMessagesGetInfiniteQueryOptions(threadId, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetMessagesApiThreadsThreadIdPaginationMessagesGetQueryOptions = (threadId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetMessagesApiThreadsThreadIdPaginationMessagesGetQueryKey(threadId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getMessagesApiThreadsThreadIdPaginationMessagesGet(threadId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Get Messages
 */ function useGetMessagesApiThreadsThreadIdPaginationMessagesGet(threadId, params, options, queryClient) {
    const queryOptions = getGetMessagesApiThreadsThreadIdPaginationMessagesGetQueryOptions(threadId, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Get Window Messages
 */ const getWindowMessagesApiThreadsThreadIdPaginationWindowMessagesMessageIdGet = (threadId, messageId, params, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/pagination/window-messages/").concat(messageId),
        method: 'GET',
        params,
        signal
    }, options);
};
const getGetWindowMessagesApiThreadsThreadIdPaginationWindowMessagesMessageIdGetQueryKey = (threadId, messageId, params)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/pagination/window-messages/").concat(messageId),
        ...params ? [
            params
        ] : []
    ];
};
const getGetWindowMessagesApiThreadsThreadIdPaginationWindowMessagesMessageIdGetInfiniteQueryOptions = (threadId, messageId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetWindowMessagesApiThreadsThreadIdPaginationWindowMessagesMessageIdGetQueryKey(threadId, messageId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getWindowMessagesApiThreadsThreadIdPaginationWindowMessagesMessageIdGet(threadId, messageId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(threadId && messageId),
        ...queryOptions
    };
};
/**
 * @summary Get Window Messages
 */ function useGetWindowMessagesApiThreadsThreadIdPaginationWindowMessagesMessageIdGetInfinite(threadId, messageId, params, options, queryClient) {
    const queryOptions = getGetWindowMessagesApiThreadsThreadIdPaginationWindowMessagesMessageIdGetInfiniteQueryOptions(threadId, messageId, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetWindowMessagesApiThreadsThreadIdPaginationWindowMessagesMessageIdGetQueryOptions = (threadId, messageId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetWindowMessagesApiThreadsThreadIdPaginationWindowMessagesMessageIdGetQueryKey(threadId, messageId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getWindowMessagesApiThreadsThreadIdPaginationWindowMessagesMessageIdGet(threadId, messageId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(threadId && messageId),
        ...queryOptions
    };
};
/**
 * @summary Get Window Messages
 */ function useGetWindowMessagesApiThreadsThreadIdPaginationWindowMessagesMessageIdGet(threadId, messageId, params, options, queryClient) {
    const queryOptions = getGetWindowMessagesApiThreadsThreadIdPaginationWindowMessagesMessageIdGetQueryOptions(threadId, messageId, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Get All Messages
 */ const getAllMessagesApiThreadsThreadIdPaginationAllMessagesGet = (threadId, params, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/pagination/all-messages"),
        method: 'GET',
        params,
        signal
    }, options);
};
const getGetAllMessagesApiThreadsThreadIdPaginationAllMessagesGetQueryKey = (threadId, params)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/pagination/all-messages"),
        ...params ? [
            params
        ] : []
    ];
};
const getGetAllMessagesApiThreadsThreadIdPaginationAllMessagesGetInfiniteQueryOptions = (threadId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetAllMessagesApiThreadsThreadIdPaginationAllMessagesGetQueryKey(threadId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getAllMessagesApiThreadsThreadIdPaginationAllMessagesGet(threadId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Get All Messages
 */ function useGetAllMessagesApiThreadsThreadIdPaginationAllMessagesGetInfinite(threadId, params, options, queryClient) {
    const queryOptions = getGetAllMessagesApiThreadsThreadIdPaginationAllMessagesGetInfiniteQueryOptions(threadId, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetAllMessagesApiThreadsThreadIdPaginationAllMessagesGetQueryOptions = (threadId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetAllMessagesApiThreadsThreadIdPaginationAllMessagesGetQueryKey(threadId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getAllMessagesApiThreadsThreadIdPaginationAllMessagesGet(threadId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Get All Messages
 */ function useGetAllMessagesApiThreadsThreadIdPaginationAllMessagesGet(threadId, params, options, queryClient) {
    const queryOptions = getGetAllMessagesApiThreadsThreadIdPaginationAllMessagesGetQueryOptions(threadId, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Get Message
 */ const getMessageApiThreadsThreadIdPaginationMessagesMessageIdGet = (threadId, messageId, params, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/pagination/messages/").concat(messageId),
        method: 'GET',
        params,
        signal
    }, options);
};
const getGetMessageApiThreadsThreadIdPaginationMessagesMessageIdGetQueryKey = (threadId, messageId, params)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/pagination/messages/").concat(messageId),
        ...params ? [
            params
        ] : []
    ];
};
const getGetMessageApiThreadsThreadIdPaginationMessagesMessageIdGetInfiniteQueryOptions = (threadId, messageId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetMessageApiThreadsThreadIdPaginationMessagesMessageIdGetQueryKey(threadId, messageId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getMessageApiThreadsThreadIdPaginationMessagesMessageIdGet(threadId, messageId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(threadId && messageId),
        ...queryOptions
    };
};
/**
 * @summary Get Message
 */ function useGetMessageApiThreadsThreadIdPaginationMessagesMessageIdGetInfinite(threadId, messageId, params, options, queryClient) {
    const queryOptions = getGetMessageApiThreadsThreadIdPaginationMessagesMessageIdGetInfiniteQueryOptions(threadId, messageId, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetMessageApiThreadsThreadIdPaginationMessagesMessageIdGetQueryOptions = (threadId, messageId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetMessageApiThreadsThreadIdPaginationMessagesMessageIdGetQueryKey(threadId, messageId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getMessageApiThreadsThreadIdPaginationMessagesMessageIdGet(threadId, messageId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(threadId && messageId),
        ...queryOptions
    };
};
/**
 * @summary Get Message
 */ function useGetMessageApiThreadsThreadIdPaginationMessagesMessageIdGet(threadId, messageId, params, options, queryClient) {
    const queryOptions = getGetMessageApiThreadsThreadIdPaginationMessagesMessageIdGetQueryOptions(threadId, messageId, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Resolve shortcode to thread_id and port.
 * @summary Resolve Shortcode Endpoint
 */ const resolveShortcodeEndpointApiThreadsShortcodeShortcodeGet = (shortcode, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/shortcode/".concat(shortcode),
        method: 'GET',
        signal
    }, options);
};
const getResolveShortcodeEndpointApiThreadsShortcodeShortcodeGetQueryKey = (shortcode)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/threads/shortcode/".concat(shortcode)
    ];
};
const getResolveShortcodeEndpointApiThreadsShortcodeShortcodeGetInfiniteQueryOptions = (shortcode, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getResolveShortcodeEndpointApiThreadsShortcodeShortcodeGetQueryKey(shortcode);
    const queryFn = (param)=>{
        let { signal } = param;
        return resolveShortcodeEndpointApiThreadsShortcodeShortcodeGet(shortcode, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!shortcode,
        ...queryOptions
    };
};
/**
 * @summary Resolve Shortcode Endpoint
 */ function useResolveShortcodeEndpointApiThreadsShortcodeShortcodeGetInfinite(shortcode, options, queryClient) {
    const queryOptions = getResolveShortcodeEndpointApiThreadsShortcodeShortcodeGetInfiniteQueryOptions(shortcode, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getResolveShortcodeEndpointApiThreadsShortcodeShortcodeGetQueryOptions = (shortcode, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getResolveShortcodeEndpointApiThreadsShortcodeShortcodeGetQueryKey(shortcode);
    const queryFn = (param)=>{
        let { signal } = param;
        return resolveShortcodeEndpointApiThreadsShortcodeShortcodeGet(shortcode, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!shortcode,
        ...queryOptions
    };
};
/**
 * @summary Resolve Shortcode Endpoint
 */ function useResolveShortcodeEndpointApiThreadsShortcodeShortcodeGet(shortcode, options, queryClient) {
    const queryOptions = getResolveShortcodeEndpointApiThreadsShortcodeShortcodeGetQueryOptions(shortcode, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Get Threads V2
 */ const getThreadsV2ApiV2ThreadsGet = (options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/v2/threads/",
        method: 'GET',
        signal
    }, options);
};
const getGetThreadsV2ApiV2ThreadsGetQueryKey = ()=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/v2/threads/"
    ];
};
const getGetThreadsV2ApiV2ThreadsGetInfiniteQueryOptions = (options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetThreadsV2ApiV2ThreadsGetQueryKey();
    const queryFn = (param)=>{
        let { signal } = param;
        return getThreadsV2ApiV2ThreadsGet(requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary Get Threads V2
 */ function useGetThreadsV2ApiV2ThreadsGetInfinite(options, queryClient) {
    const queryOptions = getGetThreadsV2ApiV2ThreadsGetInfiniteQueryOptions(options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetThreadsV2ApiV2ThreadsGetQueryOptions = (options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetThreadsV2ApiV2ThreadsGetQueryKey();
    const queryFn = (param)=>{
        let { signal } = param;
        return getThreadsV2ApiV2ThreadsGet(requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary Get Threads V2
 */ function useGetThreadsV2ApiV2ThreadsGet(options, queryClient) {
    const queryOptions = getGetThreadsV2ApiV2ThreadsGetQueryOptions(options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Get Thread V2
 */ const getThreadV2ApiV2ThreadsThreadIdGet = (threadId, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/v2/threads/".concat(threadId),
        method: 'GET',
        signal
    }, options);
};
const getGetThreadV2ApiV2ThreadsThreadIdGetQueryKey = (threadId)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/v2/threads/".concat(threadId)
    ];
};
const getGetThreadV2ApiV2ThreadsThreadIdGetInfiniteQueryOptions = (threadId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetThreadV2ApiV2ThreadsThreadIdGetQueryKey(threadId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getThreadV2ApiV2ThreadsThreadIdGet(threadId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Get Thread V2
 */ function useGetThreadV2ApiV2ThreadsThreadIdGetInfinite(threadId, options, queryClient) {
    const queryOptions = getGetThreadV2ApiV2ThreadsThreadIdGetInfiniteQueryOptions(threadId, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetThreadV2ApiV2ThreadsThreadIdGetQueryOptions = (threadId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetThreadV2ApiV2ThreadsThreadIdGetQueryKey(threadId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getThreadV2ApiV2ThreadsThreadIdGet(threadId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Get Thread V2
 */ function useGetThreadV2ApiV2ThreadsThreadIdGet(threadId, options, queryClient) {
    const queryOptions = getGetThreadV2ApiV2ThreadsThreadIdGetQueryOptions(threadId, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Get messages for a thread. This endpoint replaces the frontend's direct Supabase query.
 * @summary Get Messages V2
 */ const getMessagesV2ApiV2ThreadsThreadIdMessagesGet = (threadId, params, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/v2/threads/".concat(threadId, "/messages"),
        method: 'GET',
        params,
        signal
    }, options);
};
const getGetMessagesV2ApiV2ThreadsThreadIdMessagesGetQueryKey = (threadId, params)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/v2/threads/".concat(threadId, "/messages"),
        ...params ? [
            params
        ] : []
    ];
};
const getGetMessagesV2ApiV2ThreadsThreadIdMessagesGetInfiniteQueryOptions = (threadId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetMessagesV2ApiV2ThreadsThreadIdMessagesGetQueryKey(threadId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getMessagesV2ApiV2ThreadsThreadIdMessagesGet(threadId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Get Messages V2
 */ function useGetMessagesV2ApiV2ThreadsThreadIdMessagesGetInfinite(threadId, params, options, queryClient) {
    const queryOptions = getGetMessagesV2ApiV2ThreadsThreadIdMessagesGetInfiniteQueryOptions(threadId, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetMessagesV2ApiV2ThreadsThreadIdMessagesGetQueryOptions = (threadId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetMessagesV2ApiV2ThreadsThreadIdMessagesGetQueryKey(threadId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getMessagesV2ApiV2ThreadsThreadIdMessagesGet(threadId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Get Messages V2
 */ function useGetMessagesV2ApiV2ThreadsThreadIdMessagesGet(threadId, params, options, queryClient) {
    const queryOptions = getGetMessagesV2ApiV2ThreadsThreadIdMessagesGetQueryOptions(threadId, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}


/***/ }),

/***/ 36095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $5: () => (/* binding */ getOpenMessagesApiOpenThreadsThreadIdMessagesGet),
/* harmony export */   af: () => (/* binding */ getOpenToolsSummaryApiOpenThreadIdToolsSummaryGet),
/* harmony export */   dG: () => (/* binding */ getOpenThreadApiOpenThreadsThreadIdGet)
/* harmony export */ });
/* unused harmony exports healthApiThreadsThreadIdSandboxHealthGet, getHealthApiThreadsThreadIdSandboxHealthGetQueryKey, getHealthApiThreadsThreadIdSandboxHealthGetInfiniteQueryOptions, useHealthApiThreadsThreadIdSandboxHealthGetInfinite, getHealthApiThreadsThreadIdSandboxHealthGetQueryOptions, useHealthApiThreadsThreadIdSandboxHealthGet, listFilesApiThreadsThreadIdSandboxFilesGet, getListFilesApiThreadsThreadIdSandboxFilesGetQueryKey, getListFilesApiThreadsThreadIdSandboxFilesGetInfiniteQueryOptions, useListFilesApiThreadsThreadIdSandboxFilesGetInfinite, getListFilesApiThreadsThreadIdSandboxFilesGetQueryOptions, useListFilesApiThreadsThreadIdSandboxFilesGet, createFileApiThreadsThreadIdSandboxFilesPost, getCreateFileApiThreadsThreadIdSandboxFilesPostMutationOptions, useCreateFileApiThreadsThreadIdSandboxFilesPost, updateFileApiThreadsThreadIdSandboxFilesPut, getUpdateFileApiThreadsThreadIdSandboxFilesPutMutationOptions, useUpdateFileApiThreadsThreadIdSandboxFilesPut, deleteFileApiThreadsThreadIdSandboxFilesDelete, getDeleteFileApiThreadsThreadIdSandboxFilesDeleteMutationOptions, useDeleteFileApiThreadsThreadIdSandboxFilesDelete, listFilesAllApiThreadsThreadIdSandboxFilesAllGet, getListFilesAllApiThreadsThreadIdSandboxFilesAllGetQueryKey, getListFilesAllApiThreadsThreadIdSandboxFilesAllGetInfiniteQueryOptions, useListFilesAllApiThreadsThreadIdSandboxFilesAllGetInfinite, getListFilesAllApiThreadsThreadIdSandboxFilesAllGetQueryOptions, useListFilesAllApiThreadsThreadIdSandboxFilesAllGet, renameFileApiThreadsThreadIdSandboxFilesRenamePut, getRenameFileApiThreadsThreadIdSandboxFilesRenamePutMutationOptions, useRenameFileApiThreadsThreadIdSandboxFilesRenamePut, deleteAllFilesApiThreadsThreadIdSandboxFilesAllDelete, getDeleteAllFilesApiThreadsThreadIdSandboxFilesAllDeleteMutationOptions, useDeleteAllFilesApiThreadsThreadIdSandboxFilesAllDelete, readFileApiThreadsThreadIdSandboxFilesContentPost, getReadFileApiThreadsThreadIdSandboxFilesContentPostMutationOptions, useReadFileApiThreadsThreadIdSandboxFilesContentPost, ensureActiveApiThreadsThreadIdSandboxEnsureActivePost, getEnsureActiveApiThreadsThreadIdSandboxEnsureActivePostMutationOptions, useEnsureActiveApiThreadsThreadIdSandboxEnsureActivePost, scheduleZipFilesApiThreadsThreadIdSandboxFilesScheduleZipPost, getScheduleZipFilesApiThreadsThreadIdSandboxFilesScheduleZipPostMutationOptions, useScheduleZipFilesApiThreadsThreadIdSandboxFilesScheduleZipPost, getScheduledZipFilesApiThreadsThreadIdSandboxSessionsSessionIdFilesZipFileNameGet, getGetScheduledZipFilesApiThreadsThreadIdSandboxSessionsSessionIdFilesZipFileNameGetQueryKey, getGetScheduledZipFilesApiThreadsThreadIdSandboxSessionsSessionIdFilesZipFileNameGetInfiniteQueryOptions, useGetScheduledZipFilesApiThreadsThreadIdSandboxSessionsSessionIdFilesZipFileNameGetInfinite, getGetScheduledZipFilesApiThreadsThreadIdSandboxSessionsSessionIdFilesZipFileNameGetQueryOptions, useGetScheduledZipFilesApiThreadsThreadIdSandboxSessionsSessionIdFilesZipFileNameGet, downloadFilesApiThreadsThreadIdSandboxFilesDownloadPost, getDownloadFilesApiThreadsThreadIdSandboxFilesDownloadPostMutationOptions, useDownloadFilesApiThreadsThreadIdSandboxFilesDownloadPost, appServiceApiThreadsThreadIdSandboxServicesAppPortGet, getAppServiceApiThreadsThreadIdSandboxServicesAppPortGetQueryKey, getAppServiceApiThreadsThreadIdSandboxServicesAppPortGetInfiniteQueryOptions, useAppServiceApiThreadsThreadIdSandboxServicesAppPortGetInfinite, getAppServiceApiThreadsThreadIdSandboxServicesAppPortGetQueryOptions, useAppServiceApiThreadsThreadIdSandboxServicesAppPortGet, serviceApiThreadsThreadIdSandboxServicesServiceNameGet, getServiceApiThreadsThreadIdSandboxServicesServiceNameGetQueryKey, getServiceApiThreadsThreadIdSandboxServicesServiceNameGetInfiniteQueryOptions, useServiceApiThreadsThreadIdSandboxServicesServiceNameGetInfinite, getServiceApiThreadsThreadIdSandboxServicesServiceNameGetQueryOptions, useServiceApiThreadsThreadIdSandboxServicesServiceNameGet, getGetOpenThreadApiOpenThreadsThreadIdGetQueryKey, getGetOpenThreadApiOpenThreadsThreadIdGetInfiniteQueryOptions, useGetOpenThreadApiOpenThreadsThreadIdGetInfinite, getGetOpenThreadApiOpenThreadsThreadIdGetQueryOptions, useGetOpenThreadApiOpenThreadsThreadIdGet, getGetOpenMessagesApiOpenThreadsThreadIdMessagesGetQueryKey, getGetOpenMessagesApiOpenThreadsThreadIdMessagesGetInfiniteQueryOptions, useGetOpenMessagesApiOpenThreadsThreadIdMessagesGetInfinite, getGetOpenMessagesApiOpenThreadsThreadIdMessagesGetQueryOptions, useGetOpenMessagesApiOpenThreadsThreadIdMessagesGet, getGetOpenToolsSummaryApiOpenThreadIdToolsSummaryGetQueryKey, getGetOpenToolsSummaryApiOpenThreadIdToolsSummaryGetInfiniteQueryOptions, useGetOpenToolsSummaryApiOpenThreadIdToolsSummaryGetInfinite, getGetOpenToolsSummaryApiOpenThreadIdToolsSummaryGetQueryOptions, useGetOpenToolsSummaryApiOpenThreadIdToolsSummaryGet, listFilesApiOpenThreadsThreadIdSandboxFilesGet, getListFilesApiOpenThreadsThreadIdSandboxFilesGetQueryKey, getListFilesApiOpenThreadsThreadIdSandboxFilesGetInfiniteQueryOptions, useListFilesApiOpenThreadsThreadIdSandboxFilesGetInfinite, getListFilesApiOpenThreadsThreadIdSandboxFilesGetQueryOptions, useListFilesApiOpenThreadsThreadIdSandboxFilesGet, listFilesAllApiOpenThreadsThreadIdSandboxFilesAllGet, getListFilesAllApiOpenThreadsThreadIdSandboxFilesAllGetQueryKey, getListFilesAllApiOpenThreadsThreadIdSandboxFilesAllGetInfiniteQueryOptions, useListFilesAllApiOpenThreadsThreadIdSandboxFilesAllGetInfinite, getListFilesAllApiOpenThreadsThreadIdSandboxFilesAllGetQueryOptions, useListFilesAllApiOpenThreadsThreadIdSandboxFilesAllGet, readFileApiOpenThreadsThreadIdSandboxFilesContentPost, getReadFileApiOpenThreadsThreadIdSandboxFilesContentPostMutationOptions, useReadFileApiOpenThreadsThreadIdSandboxFilesContentPost, handleInstallationWebhookApiOpenGithubAppWebhookPost, getHandleInstallationWebhookApiOpenGithubAppWebhookPostMutationOptions, useHandleInstallationWebhookApiOpenGithubAppWebhookPost, verifyUnsubscribeTokenApiOpenUnsubscribeVerifyTokenPost, getVerifyUnsubscribeTokenApiOpenUnsubscribeVerifyTokenPostMutationOptions, useVerifyUnsubscribeTokenApiOpenUnsubscribeVerifyTokenPost, createProjectApiProjectsPost, getCreateProjectApiProjectsPostMutationOptions, useCreateProjectApiProjectsPost, getProjectsApiProjectsGet, getGetProjectsApiProjectsGetQueryKey, getGetProjectsApiProjectsGetInfiniteQueryOptions, useGetProjectsApiProjectsGetInfinite, getGetProjectsApiProjectsGetQueryOptions, useGetProjectsApiProjectsGet, updateProjectApiProjectsProjectIdPatch, getUpdateProjectApiProjectsProjectIdPatchMutationOptions, useUpdateProjectApiProjectsProjectIdPatch, getProjectApiProjectsProjectIdGet, getGetProjectApiProjectsProjectIdGetQueryKey, getGetProjectApiProjectsProjectIdGetInfiniteQueryOptions, useGetProjectApiProjectsProjectIdGetInfinite, getGetProjectApiProjectsProjectIdGetQueryOptions, useGetProjectApiProjectsProjectIdGet, deleteProjectApiProjectsProjectIdDelete, getDeleteProjectApiProjectsProjectIdDeleteMutationOptions, useDeleteProjectApiProjectsProjectIdDelete, healthCheckHealthGet, getHealthCheckHealthGetQueryKey, getHealthCheckHealthGetInfiniteQueryOptions, useHealthCheckHealthGetInfinite, getHealthCheckHealthGetQueryOptions, useHealthCheckHealthGet */
/* harmony import */ var _lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37010);
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ 

/**
 * @summary Health
 */ const healthApiThreadsThreadIdSandboxHealthGet = (threadId, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/health"),
        method: 'GET',
        signal
    }, options);
};
const getHealthApiThreadsThreadIdSandboxHealthGetQueryKey = (threadId)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/health")
    ];
};
const getHealthApiThreadsThreadIdSandboxHealthGetInfiniteQueryOptions = (threadId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getHealthApiThreadsThreadIdSandboxHealthGetQueryKey(threadId);
    const queryFn = (param)=>{
        let { signal } = param;
        return healthApiThreadsThreadIdSandboxHealthGet(threadId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Health
 */ function useHealthApiThreadsThreadIdSandboxHealthGetInfinite(threadId, options, queryClient) {
    const queryOptions = getHealthApiThreadsThreadIdSandboxHealthGetInfiniteQueryOptions(threadId, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getHealthApiThreadsThreadIdSandboxHealthGetQueryOptions = (threadId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getHealthApiThreadsThreadIdSandboxHealthGetQueryKey(threadId);
    const queryFn = (param)=>{
        let { signal } = param;
        return healthApiThreadsThreadIdSandboxHealthGet(threadId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Health
 */ function useHealthApiThreadsThreadIdSandboxHealthGet(threadId, options, queryClient) {
    const queryOptions = getHealthApiThreadsThreadIdSandboxHealthGetQueryOptions(threadId, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * List files and directories at the specified path
 * @summary List Files
 */ const listFilesApiThreadsThreadIdSandboxFilesGet = (threadId, params, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/files"),
        method: 'GET',
        params,
        signal
    }, options);
};
const getListFilesApiThreadsThreadIdSandboxFilesGetQueryKey = (threadId, params)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/files"),
        ...params ? [
            params
        ] : []
    ];
};
const getListFilesApiThreadsThreadIdSandboxFilesGetInfiniteQueryOptions = (threadId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getListFilesApiThreadsThreadIdSandboxFilesGetQueryKey(threadId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return listFilesApiThreadsThreadIdSandboxFilesGet(threadId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary List Files
 */ function useListFilesApiThreadsThreadIdSandboxFilesGetInfinite(threadId, params, options, queryClient) {
    const queryOptions = getListFilesApiThreadsThreadIdSandboxFilesGetInfiniteQueryOptions(threadId, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getListFilesApiThreadsThreadIdSandboxFilesGetQueryOptions = (threadId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getListFilesApiThreadsThreadIdSandboxFilesGetQueryKey(threadId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return listFilesApiThreadsThreadIdSandboxFilesGet(threadId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary List Files
 */ function useListFilesApiThreadsThreadIdSandboxFilesGet(threadId, params, options, queryClient) {
    const queryOptions = getListFilesApiThreadsThreadIdSandboxFilesGetQueryOptions(threadId, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Create a file in the sandbox using direct file upload
 * @summary Create File
 */ const createFileApiThreadsThreadIdSandboxFilesPost = (threadId, bodyCreateFileApiThreadsThreadIdSandboxFilesPost, params, options, signal)=>{
    const formData = new FormData();
    formData.append("path", bodyCreateFileApiThreadsThreadIdSandboxFilesPost.path);
    formData.append("file", bodyCreateFileApiThreadsThreadIdSandboxFilesPost.file);
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/files"),
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: formData,
        params,
        signal
    }, options);
};
const getCreateFileApiThreadsThreadIdSandboxFilesPostMutationOptions = (options)=>{
    const mutationKey = [
        'createFileApiThreadsThreadIdSandboxFilesPost'
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
        const { threadId, data, params } = props !== null && props !== void 0 ? props : {};
        return createFileApiThreadsThreadIdSandboxFilesPost(threadId, data, params, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Create File
 */ const useCreateFileApiThreadsThreadIdSandboxFilesPost = (options, queryClient)=>{
    const mutationOptions = getCreateFileApiThreadsThreadIdSandboxFilesPostMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * Update a file in the sandbox using direct file upload
 * @summary Update File
 */ const updateFileApiThreadsThreadIdSandboxFilesPut = (threadId, bodyUpdateFileApiThreadsThreadIdSandboxFilesPut, params, options)=>{
    const formData = new FormData();
    formData.append("path", bodyUpdateFileApiThreadsThreadIdSandboxFilesPut.path);
    formData.append("file", bodyUpdateFileApiThreadsThreadIdSandboxFilesPut.file);
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/files"),
        method: 'PUT',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: formData,
        params
    }, options);
};
const getUpdateFileApiThreadsThreadIdSandboxFilesPutMutationOptions = (options)=>{
    const mutationKey = [
        'updateFileApiThreadsThreadIdSandboxFilesPut'
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
        const { threadId, data, params } = props !== null && props !== void 0 ? props : {};
        return updateFileApiThreadsThreadIdSandboxFilesPut(threadId, data, params, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Update File
 */ const useUpdateFileApiThreadsThreadIdSandboxFilesPut = (options, queryClient)=>{
    const mutationOptions = getUpdateFileApiThreadsThreadIdSandboxFilesPutMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * Delete a file from sandbox
 * @summary Delete File
 */ const deleteFileApiThreadsThreadIdSandboxFilesDelete = (threadId, filePathRequest, options)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/files"),
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        data: filePathRequest
    }, options);
};
const getDeleteFileApiThreadsThreadIdSandboxFilesDeleteMutationOptions = (options)=>{
    const mutationKey = [
        'deleteFileApiThreadsThreadIdSandboxFilesDelete'
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
        const { threadId, data } = props !== null && props !== void 0 ? props : {};
        return deleteFileApiThreadsThreadIdSandboxFilesDelete(threadId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Delete File
 */ const useDeleteFileApiThreadsThreadIdSandboxFilesDelete = (options, queryClient)=>{
    const mutationOptions = getDeleteFileApiThreadsThreadIdSandboxFilesDeleteMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * List all files and directories at the specified path
 * @summary List Files All
 */ const listFilesAllApiThreadsThreadIdSandboxFilesAllGet = (threadId, params, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/files/all"),
        method: 'GET',
        params,
        signal
    }, options);
};
const getListFilesAllApiThreadsThreadIdSandboxFilesAllGetQueryKey = (threadId, params)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/files/all"),
        ...params ? [
            params
        ] : []
    ];
};
const getListFilesAllApiThreadsThreadIdSandboxFilesAllGetInfiniteQueryOptions = (threadId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getListFilesAllApiThreadsThreadIdSandboxFilesAllGetQueryKey(threadId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return listFilesAllApiThreadsThreadIdSandboxFilesAllGet(threadId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary List Files All
 */ function useListFilesAllApiThreadsThreadIdSandboxFilesAllGetInfinite(threadId, params, options, queryClient) {
    const queryOptions = getListFilesAllApiThreadsThreadIdSandboxFilesAllGetInfiniteQueryOptions(threadId, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getListFilesAllApiThreadsThreadIdSandboxFilesAllGetQueryOptions = (threadId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getListFilesAllApiThreadsThreadIdSandboxFilesAllGetQueryKey(threadId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return listFilesAllApiThreadsThreadIdSandboxFilesAllGet(threadId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary List Files All
 */ function useListFilesAllApiThreadsThreadIdSandboxFilesAllGet(threadId, params, options, queryClient) {
    const queryOptions = getListFilesAllApiThreadsThreadIdSandboxFilesAllGetQueryOptions(threadId, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Rename a file in the sandbox
 * @summary Rename File
 */ const renameFileApiThreadsThreadIdSandboxFilesRenamePut = (threadId, fileRenameRequest, options)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/files/rename"),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        data: fileRenameRequest
    }, options);
};
const getRenameFileApiThreadsThreadIdSandboxFilesRenamePutMutationOptions = (options)=>{
    const mutationKey = [
        'renameFileApiThreadsThreadIdSandboxFilesRenamePut'
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
        const { threadId, data } = props !== null && props !== void 0 ? props : {};
        return renameFileApiThreadsThreadIdSandboxFilesRenamePut(threadId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Rename File
 */ const useRenameFileApiThreadsThreadIdSandboxFilesRenamePut = (options, queryClient)=>{
    const mutationOptions = getRenameFileApiThreadsThreadIdSandboxFilesRenamePutMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * Delete all files from sandbox
 * @summary Delete All Files
 */ const deleteAllFilesApiThreadsThreadIdSandboxFilesAllDelete = (threadId, options)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/files-all"),
        method: 'DELETE'
    }, options);
};
const getDeleteAllFilesApiThreadsThreadIdSandboxFilesAllDeleteMutationOptions = (options)=>{
    const mutationKey = [
        'deleteAllFilesApiThreadsThreadIdSandboxFilesAllDelete'
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
        const { threadId } = props !== null && props !== void 0 ? props : {};
        return deleteAllFilesApiThreadsThreadIdSandboxFilesAllDelete(threadId, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Delete All Files
 */ const useDeleteAllFilesApiThreadsThreadIdSandboxFilesAllDelete = (options, queryClient)=>{
    const mutationOptions = getDeleteAllFilesApiThreadsThreadIdSandboxFilesAllDeleteMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * Read a file from the sandbox
 * @summary Read File
 */ const readFileApiThreadsThreadIdSandboxFilesContentPost = (threadId, filePathRequest, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/files/content"),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: filePathRequest,
        signal
    }, options);
};
const getReadFileApiThreadsThreadIdSandboxFilesContentPostMutationOptions = (options)=>{
    const mutationKey = [
        'readFileApiThreadsThreadIdSandboxFilesContentPost'
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
        const { threadId, data } = props !== null && props !== void 0 ? props : {};
        return readFileApiThreadsThreadIdSandboxFilesContentPost(threadId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Read File
 */ const useReadFileApiThreadsThreadIdSandboxFilesContentPost = (options, queryClient)=>{
    const mutationOptions = getReadFileApiThreadsThreadIdSandboxFilesContentPostMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * Ensure that a thread's sandbox is active and running.
Checks the sandbox status and starts it if it's not running.
 * @summary Ensure Active
 */ const ensureActiveApiThreadsThreadIdSandboxEnsureActivePost = (threadId, params, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/ensure-active"),
        method: 'POST',
        params,
        signal
    }, options);
};
const getEnsureActiveApiThreadsThreadIdSandboxEnsureActivePostMutationOptions = (options)=>{
    const mutationKey = [
        'ensureActiveApiThreadsThreadIdSandboxEnsureActivePost'
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
        const { threadId, params } = props !== null && props !== void 0 ? props : {};
        return ensureActiveApiThreadsThreadIdSandboxEnsureActivePost(threadId, params, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Ensure Active
 */ const useEnsureActiveApiThreadsThreadIdSandboxEnsureActivePost = (options, queryClient)=>{
    const mutationOptions = getEnsureActiveApiThreadsThreadIdSandboxEnsureActivePostMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * Schedule a task to zip all files in a directory
 * @summary Schedule Zip Files
 */ const scheduleZipFilesApiThreadsThreadIdSandboxFilesScheduleZipPost = (threadId, params, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/files/schedule-zip"),
        method: 'POST',
        params,
        signal
    }, options);
};
const getScheduleZipFilesApiThreadsThreadIdSandboxFilesScheduleZipPostMutationOptions = (options)=>{
    const mutationKey = [
        'scheduleZipFilesApiThreadsThreadIdSandboxFilesScheduleZipPost'
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
        const { threadId, params } = props !== null && props !== void 0 ? props : {};
        return scheduleZipFilesApiThreadsThreadIdSandboxFilesScheduleZipPost(threadId, params, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Schedule Zip Files
 */ const useScheduleZipFilesApiThreadsThreadIdSandboxFilesScheduleZipPost = (options, queryClient)=>{
    const mutationOptions = getScheduleZipFilesApiThreadsThreadIdSandboxFilesScheduleZipPostMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * Get the status of a scheduled zip files command
 * @summary Get Scheduled Zip Files
 */ const getScheduledZipFilesApiThreadsThreadIdSandboxSessionsSessionIdFilesZipFileNameGet = (threadId, sessionId, zipFileName, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/sessions/").concat(sessionId, "/files/").concat(zipFileName),
        method: 'GET',
        signal
    }, options);
};
const getGetScheduledZipFilesApiThreadsThreadIdSandboxSessionsSessionIdFilesZipFileNameGetQueryKey = (threadId, sessionId, zipFileName)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/sessions/").concat(sessionId, "/files/").concat(zipFileName)
    ];
};
const getGetScheduledZipFilesApiThreadsThreadIdSandboxSessionsSessionIdFilesZipFileNameGetInfiniteQueryOptions = (threadId, sessionId, zipFileName, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetScheduledZipFilesApiThreadsThreadIdSandboxSessionsSessionIdFilesZipFileNameGetQueryKey(threadId, sessionId, zipFileName);
    const queryFn = (param)=>{
        let { signal } = param;
        return getScheduledZipFilesApiThreadsThreadIdSandboxSessionsSessionIdFilesZipFileNameGet(threadId, sessionId, zipFileName, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(threadId && sessionId && zipFileName),
        ...queryOptions
    };
};
/**
 * @summary Get Scheduled Zip Files
 */ function useGetScheduledZipFilesApiThreadsThreadIdSandboxSessionsSessionIdFilesZipFileNameGetInfinite(threadId, sessionId, zipFileName, options, queryClient) {
    const queryOptions = getGetScheduledZipFilesApiThreadsThreadIdSandboxSessionsSessionIdFilesZipFileNameGetInfiniteQueryOptions(threadId, sessionId, zipFileName, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetScheduledZipFilesApiThreadsThreadIdSandboxSessionsSessionIdFilesZipFileNameGetQueryOptions = (threadId, sessionId, zipFileName, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetScheduledZipFilesApiThreadsThreadIdSandboxSessionsSessionIdFilesZipFileNameGetQueryKey(threadId, sessionId, zipFileName);
    const queryFn = (param)=>{
        let { signal } = param;
        return getScheduledZipFilesApiThreadsThreadIdSandboxSessionsSessionIdFilesZipFileNameGet(threadId, sessionId, zipFileName, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(threadId && sessionId && zipFileName),
        ...queryOptions
    };
};
/**
 * @summary Get Scheduled Zip Files
 */ function useGetScheduledZipFilesApiThreadsThreadIdSandboxSessionsSessionIdFilesZipFileNameGet(threadId, sessionId, zipFileName, options, queryClient) {
    const queryOptions = getGetScheduledZipFilesApiThreadsThreadIdSandboxSessionsSessionIdFilesZipFileNameGetQueryOptions(threadId, sessionId, zipFileName, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Zip all files in a directory
 * @summary Download Files
 */ const downloadFilesApiThreadsThreadIdSandboxFilesDownloadPost = (threadId, params, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/files/download"),
        method: 'POST',
        params,
        signal
    }, options);
};
const getDownloadFilesApiThreadsThreadIdSandboxFilesDownloadPostMutationOptions = (options)=>{
    const mutationKey = [
        'downloadFilesApiThreadsThreadIdSandboxFilesDownloadPost'
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
        const { threadId, params } = props !== null && props !== void 0 ? props : {};
        return downloadFilesApiThreadsThreadIdSandboxFilesDownloadPost(threadId, params, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Download Files
 */ const useDownloadFilesApiThreadsThreadIdSandboxFilesDownloadPost = (options, queryClient)=>{
    const mutationOptions = getDownloadFilesApiThreadsThreadIdSandboxFilesDownloadPostMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * @summary App Service
 */ const appServiceApiThreadsThreadIdSandboxServicesAppPortGet = (threadId, port, params, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/services/app/").concat(port),
        method: 'GET',
        params,
        signal
    }, options);
};
const getAppServiceApiThreadsThreadIdSandboxServicesAppPortGetQueryKey = (threadId, port, params)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/services/app/").concat(port),
        ...params ? [
            params
        ] : []
    ];
};
const getAppServiceApiThreadsThreadIdSandboxServicesAppPortGetInfiniteQueryOptions = (threadId, port, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getAppServiceApiThreadsThreadIdSandboxServicesAppPortGetQueryKey(threadId, port, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return appServiceApiThreadsThreadIdSandboxServicesAppPortGet(threadId, port, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(threadId && port),
        ...queryOptions
    };
};
/**
 * @summary App Service
 */ function useAppServiceApiThreadsThreadIdSandboxServicesAppPortGetInfinite(threadId, port, params, options, queryClient) {
    const queryOptions = getAppServiceApiThreadsThreadIdSandboxServicesAppPortGetInfiniteQueryOptions(threadId, port, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getAppServiceApiThreadsThreadIdSandboxServicesAppPortGetQueryOptions = (threadId, port, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getAppServiceApiThreadsThreadIdSandboxServicesAppPortGetQueryKey(threadId, port, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return appServiceApiThreadsThreadIdSandboxServicesAppPortGet(threadId, port, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(threadId && port),
        ...queryOptions
    };
};
/**
 * @summary App Service
 */ function useAppServiceApiThreadsThreadIdSandboxServicesAppPortGet(threadId, port, params, options, queryClient) {
    const queryOptions = getAppServiceApiThreadsThreadIdSandboxServicesAppPortGetQueryOptions(threadId, port, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Service
 */ const serviceApiThreadsThreadIdSandboxServicesServiceNameGet = (threadId, serviceName, params, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/services/").concat(serviceName),
        method: 'GET',
        params,
        signal
    }, options);
};
const getServiceApiThreadsThreadIdSandboxServicesServiceNameGetQueryKey = (threadId, serviceName, params)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/threads/".concat(threadId, "/sandbox/services/").concat(serviceName),
        ...params ? [
            params
        ] : []
    ];
};
const getServiceApiThreadsThreadIdSandboxServicesServiceNameGetInfiniteQueryOptions = (threadId, serviceName, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getServiceApiThreadsThreadIdSandboxServicesServiceNameGetQueryKey(threadId, serviceName, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return serviceApiThreadsThreadIdSandboxServicesServiceNameGet(threadId, serviceName, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(threadId && serviceName),
        ...queryOptions
    };
};
/**
 * @summary Service
 */ function useServiceApiThreadsThreadIdSandboxServicesServiceNameGetInfinite(threadId, serviceName, params, options, queryClient) {
    const queryOptions = getServiceApiThreadsThreadIdSandboxServicesServiceNameGetInfiniteQueryOptions(threadId, serviceName, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getServiceApiThreadsThreadIdSandboxServicesServiceNameGetQueryOptions = (threadId, serviceName, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getServiceApiThreadsThreadIdSandboxServicesServiceNameGetQueryKey(threadId, serviceName, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return serviceApiThreadsThreadIdSandboxServicesServiceNameGet(threadId, serviceName, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!(threadId && serviceName),
        ...queryOptions
    };
};
/**
 * @summary Service
 */ function useServiceApiThreadsThreadIdSandboxServicesServiceNameGet(threadId, serviceName, params, options, queryClient) {
    const queryOptions = getServiceApiThreadsThreadIdSandboxServicesServiceNameGetQueryOptions(threadId, serviceName, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Get Open Thread
 */ const getOpenThreadApiOpenThreadsThreadIdGet = (threadId, options, signal)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://super-agent-api.beta.myninja.ai/api/open/threads/".concat(threadId),
        method: 'GET',
        signal
    }, options);
};
const getGetOpenThreadApiOpenThreadsThreadIdGetQueryKey = (threadId)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/open/threads/".concat(threadId)
    ];
};
const getGetOpenThreadApiOpenThreadsThreadIdGetInfiniteQueryOptions = (threadId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetOpenThreadApiOpenThreadsThreadIdGetQueryKey(threadId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getOpenThreadApiOpenThreadsThreadIdGet(threadId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Get Open Thread
 */ function useGetOpenThreadApiOpenThreadsThreadIdGetInfinite(threadId, options, queryClient) {
    const queryOptions = getGetOpenThreadApiOpenThreadsThreadIdGetInfiniteQueryOptions(threadId, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetOpenThreadApiOpenThreadsThreadIdGetQueryOptions = (threadId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetOpenThreadApiOpenThreadsThreadIdGetQueryKey(threadId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getOpenThreadApiOpenThreadsThreadIdGet(threadId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Get Open Thread
 */ function useGetOpenThreadApiOpenThreadsThreadIdGet(threadId, options, queryClient) {
    const queryOptions = getGetOpenThreadApiOpenThreadsThreadIdGetQueryOptions(threadId, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Get messages for a public thread.
 * @summary Get Open Messages
 */ const getOpenMessagesApiOpenThreadsThreadIdMessagesGet = (threadId, params, options, signal)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://super-agent-api.beta.myninja.ai/api/open/threads/".concat(threadId, "/messages"),
        method: 'GET',
        params,
        signal
    }, options);
};
const getGetOpenMessagesApiOpenThreadsThreadIdMessagesGetQueryKey = (threadId, params)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/open/threads/".concat(threadId, "/messages"),
        ...params ? [
            params
        ] : []
    ];
};
const getGetOpenMessagesApiOpenThreadsThreadIdMessagesGetInfiniteQueryOptions = (threadId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetOpenMessagesApiOpenThreadsThreadIdMessagesGetQueryKey(threadId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getOpenMessagesApiOpenThreadsThreadIdMessagesGet(threadId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Get Open Messages
 */ function useGetOpenMessagesApiOpenThreadsThreadIdMessagesGetInfinite(threadId, params, options, queryClient) {
    const queryOptions = getGetOpenMessagesApiOpenThreadsThreadIdMessagesGetInfiniteQueryOptions(threadId, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetOpenMessagesApiOpenThreadsThreadIdMessagesGetQueryOptions = (threadId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetOpenMessagesApiOpenThreadsThreadIdMessagesGetQueryKey(threadId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return getOpenMessagesApiOpenThreadsThreadIdMessagesGet(threadId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Get Open Messages
 */ function useGetOpenMessagesApiOpenThreadsThreadIdMessagesGet(threadId, params, options, queryClient) {
    const queryOptions = getGetOpenMessagesApiOpenThreadsThreadIdMessagesGetQueryOptions(threadId, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Get an ordered list of tool message mappings for a public thread.

Returns:
    ToolsSummaryResponse: Ordered list of assistant to tool message mappings
 * @summary Get Open Tools Summary
 */ const getOpenToolsSummaryApiOpenThreadIdToolsSummaryGet = (threadId, options, signal)=>{
    return (0,_lib_orval_custom_instance__WEBPACK_IMPORTED_MODULE_0__/* .customInstance */ .T)({
        url: "https://super-agent-api.beta.myninja.ai/api/open/".concat(threadId, "/tools_summary"),
        method: 'GET',
        signal
    }, options);
};
const getGetOpenToolsSummaryApiOpenThreadIdToolsSummaryGetQueryKey = (threadId)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/open/".concat(threadId, "/tools_summary")
    ];
};
const getGetOpenToolsSummaryApiOpenThreadIdToolsSummaryGetInfiniteQueryOptions = (threadId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetOpenToolsSummaryApiOpenThreadIdToolsSummaryGetQueryKey(threadId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getOpenToolsSummaryApiOpenThreadIdToolsSummaryGet(threadId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Get Open Tools Summary
 */ function useGetOpenToolsSummaryApiOpenThreadIdToolsSummaryGetInfinite(threadId, options, queryClient) {
    const queryOptions = getGetOpenToolsSummaryApiOpenThreadIdToolsSummaryGetInfiniteQueryOptions(threadId, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetOpenToolsSummaryApiOpenThreadIdToolsSummaryGetQueryOptions = (threadId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetOpenToolsSummaryApiOpenThreadIdToolsSummaryGetQueryKey(threadId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getOpenToolsSummaryApiOpenThreadIdToolsSummaryGet(threadId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary Get Open Tools Summary
 */ function useGetOpenToolsSummaryApiOpenThreadIdToolsSummaryGet(threadId, options, queryClient) {
    const queryOptions = getGetOpenToolsSummaryApiOpenThreadIdToolsSummaryGetQueryOptions(threadId, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary List Files
 */ const listFilesApiOpenThreadsThreadIdSandboxFilesGet = (threadId, params, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/open/threads/".concat(threadId, "/sandbox/files"),
        method: 'GET',
        params,
        signal
    }, options);
};
const getListFilesApiOpenThreadsThreadIdSandboxFilesGetQueryKey = (threadId, params)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/open/threads/".concat(threadId, "/sandbox/files"),
        ...params ? [
            params
        ] : []
    ];
};
const getListFilesApiOpenThreadsThreadIdSandboxFilesGetInfiniteQueryOptions = (threadId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getListFilesApiOpenThreadsThreadIdSandboxFilesGetQueryKey(threadId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return listFilesApiOpenThreadsThreadIdSandboxFilesGet(threadId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary List Files
 */ function useListFilesApiOpenThreadsThreadIdSandboxFilesGetInfinite(threadId, params, options, queryClient) {
    const queryOptions = getListFilesApiOpenThreadsThreadIdSandboxFilesGetInfiniteQueryOptions(threadId, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getListFilesApiOpenThreadsThreadIdSandboxFilesGetQueryOptions = (threadId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getListFilesApiOpenThreadsThreadIdSandboxFilesGetQueryKey(threadId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return listFilesApiOpenThreadsThreadIdSandboxFilesGet(threadId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary List Files
 */ function useListFilesApiOpenThreadsThreadIdSandboxFilesGet(threadId, params, options, queryClient) {
    const queryOptions = getListFilesApiOpenThreadsThreadIdSandboxFilesGetQueryOptions(threadId, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary List Files All
 */ const listFilesAllApiOpenThreadsThreadIdSandboxFilesAllGet = (threadId, params, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/open/threads/".concat(threadId, "/sandbox/files/all"),
        method: 'GET',
        params,
        signal
    }, options);
};
const getListFilesAllApiOpenThreadsThreadIdSandboxFilesAllGetQueryKey = (threadId, params)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/open/threads/".concat(threadId, "/sandbox/files/all"),
        ...params ? [
            params
        ] : []
    ];
};
const getListFilesAllApiOpenThreadsThreadIdSandboxFilesAllGetInfiniteQueryOptions = (threadId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getListFilesAllApiOpenThreadsThreadIdSandboxFilesAllGetQueryKey(threadId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return listFilesAllApiOpenThreadsThreadIdSandboxFilesAllGet(threadId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary List Files All
 */ function useListFilesAllApiOpenThreadsThreadIdSandboxFilesAllGetInfinite(threadId, params, options, queryClient) {
    const queryOptions = getListFilesAllApiOpenThreadsThreadIdSandboxFilesAllGetInfiniteQueryOptions(threadId, params, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getListFilesAllApiOpenThreadsThreadIdSandboxFilesAllGetQueryOptions = (threadId, params, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getListFilesAllApiOpenThreadsThreadIdSandboxFilesAllGetQueryKey(threadId, params);
    const queryFn = (param)=>{
        let { signal } = param;
        return listFilesAllApiOpenThreadsThreadIdSandboxFilesAllGet(threadId, params, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!threadId,
        ...queryOptions
    };
};
/**
 * @summary List Files All
 */ function useListFilesAllApiOpenThreadsThreadIdSandboxFilesAllGet(threadId, params, options, queryClient) {
    const queryOptions = getListFilesAllApiOpenThreadsThreadIdSandboxFilesAllGetQueryOptions(threadId, params, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Read File
 */ const readFileApiOpenThreadsThreadIdSandboxFilesContentPost = (threadId, filePathRequest, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/open/threads/".concat(threadId, "/sandbox/files/content"),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: filePathRequest,
        signal
    }, options);
};
const getReadFileApiOpenThreadsThreadIdSandboxFilesContentPostMutationOptions = (options)=>{
    const mutationKey = [
        'readFileApiOpenThreadsThreadIdSandboxFilesContentPost'
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
        const { threadId, data } = props !== null && props !== void 0 ? props : {};
        return readFileApiOpenThreadsThreadIdSandboxFilesContentPost(threadId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Read File
 */ const useReadFileApiOpenThreadsThreadIdSandboxFilesContentPost = (options, queryClient)=>{
    const mutationOptions = getReadFileApiOpenThreadsThreadIdSandboxFilesContentPostMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * Handle GitHub App installation webhooks.
TODO:
- change webhook URL in all GH Apps from the GH settings
- configure webhook secret to verify the event is authentic GH request
 * @summary Handle Installation Webhook
 */ const handleInstallationWebhookApiOpenGithubAppWebhookPost = (handleInstallationWebhookApiOpenGithubAppWebhookPostBody, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/open/github-app/webhook",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: handleInstallationWebhookApiOpenGithubAppWebhookPostBody,
        signal
    }, options);
};
const getHandleInstallationWebhookApiOpenGithubAppWebhookPostMutationOptions = (options)=>{
    const mutationKey = [
        'handleInstallationWebhookApiOpenGithubAppWebhookPost'
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
        return handleInstallationWebhookApiOpenGithubAppWebhookPost(data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Handle Installation Webhook
 */ const useHandleInstallationWebhookApiOpenGithubAppWebhookPost = (options, queryClient)=>{
    const mutationOptions = getHandleInstallationWebhookApiOpenGithubAppWebhookPostMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * Verify an unsubscribe token via email service.
Uses the same pattern as send_templated_email.
 * @summary Verify Unsubscribe Token
 */ const verifyUnsubscribeTokenApiOpenUnsubscribeVerifyTokenPost = (verifyUnsubscribeTokenRequest, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/open/unsubscribe/verify-token",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: verifyUnsubscribeTokenRequest,
        signal
    }, options);
};
const getVerifyUnsubscribeTokenApiOpenUnsubscribeVerifyTokenPostMutationOptions = (options)=>{
    const mutationKey = [
        'verifyUnsubscribeTokenApiOpenUnsubscribeVerifyTokenPost'
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
        return verifyUnsubscribeTokenApiOpenUnsubscribeVerifyTokenPost(data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Verify Unsubscribe Token
 */ const useVerifyUnsubscribeTokenApiOpenUnsubscribeVerifyTokenPost = (options, queryClient)=>{
    const mutationOptions = getVerifyUnsubscribeTokenApiOpenUnsubscribeVerifyTokenPostMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Create Project
 */ const createProjectApiProjectsPost = (createProjectRequest, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/projects",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: createProjectRequest,
        signal
    }, options);
};
const getCreateProjectApiProjectsPostMutationOptions = (options)=>{
    const mutationKey = [
        'createProjectApiProjectsPost'
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
        return createProjectApiProjectsPost(data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Create Project
 */ const useCreateProjectApiProjectsPost = (options, queryClient)=>{
    const mutationOptions = getCreateProjectApiProjectsPostMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Get Projects
 */ const getProjectsApiProjectsGet = (options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/projects",
        method: 'GET',
        signal
    }, options);
};
const getGetProjectsApiProjectsGetQueryKey = ()=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/projects"
    ];
};
const getGetProjectsApiProjectsGetInfiniteQueryOptions = (options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetProjectsApiProjectsGetQueryKey();
    const queryFn = (param)=>{
        let { signal } = param;
        return getProjectsApiProjectsGet(requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary Get Projects
 */ function useGetProjectsApiProjectsGetInfinite(options, queryClient) {
    const queryOptions = getGetProjectsApiProjectsGetInfiniteQueryOptions(options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetProjectsApiProjectsGetQueryOptions = (options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetProjectsApiProjectsGetQueryKey();
    const queryFn = (param)=>{
        let { signal } = param;
        return getProjectsApiProjectsGet(requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary Get Projects
 */ function useGetProjectsApiProjectsGet(options, queryClient) {
    const queryOptions = getGetProjectsApiProjectsGetQueryOptions(options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Update Project
 */ const updateProjectApiProjectsProjectIdPatch = (projectId, updateProjectRequest, options)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/projects/".concat(projectId),
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        data: updateProjectRequest
    }, options);
};
const getUpdateProjectApiProjectsProjectIdPatchMutationOptions = (options)=>{
    const mutationKey = [
        'updateProjectApiProjectsProjectIdPatch'
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
        const { projectId, data } = props !== null && props !== void 0 ? props : {};
        return updateProjectApiProjectsProjectIdPatch(projectId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Update Project
 */ const useUpdateProjectApiProjectsProjectIdPatch = (options, queryClient)=>{
    const mutationOptions = getUpdateProjectApiProjectsProjectIdPatchMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Get Project
 */ const getProjectApiProjectsProjectIdGet = (projectId, options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/projects/".concat(projectId),
        method: 'GET',
        signal
    }, options);
};
const getGetProjectApiProjectsProjectIdGetQueryKey = (projectId)=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/projects/".concat(projectId)
    ];
};
const getGetProjectApiProjectsProjectIdGetInfiniteQueryOptions = (projectId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetProjectApiProjectsProjectIdGetQueryKey(projectId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getProjectApiProjectsProjectIdGet(projectId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!projectId,
        ...queryOptions
    };
};
/**
 * @summary Get Project
 */ function useGetProjectApiProjectsProjectIdGetInfinite(projectId, options, queryClient) {
    const queryOptions = getGetProjectApiProjectsProjectIdGetInfiniteQueryOptions(projectId, options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetProjectApiProjectsProjectIdGetQueryOptions = (projectId, options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetProjectApiProjectsProjectIdGetQueryKey(projectId);
    const queryFn = (param)=>{
        let { signal } = param;
        return getProjectApiProjectsProjectIdGet(projectId, requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        enabled: !!projectId,
        ...queryOptions
    };
};
/**
 * @summary Get Project
 */ function useGetProjectApiProjectsProjectIdGet(projectId, options, queryClient) {
    const queryOptions = getGetProjectApiProjectsProjectIdGetQueryOptions(projectId, options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Delete Project
 */ const deleteProjectApiProjectsProjectIdDelete = (projectId, options)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/api/projects/".concat(projectId),
        method: 'DELETE'
    }, options);
};
const getDeleteProjectApiProjectsProjectIdDeleteMutationOptions = (options)=>{
    const mutationKey = [
        'deleteProjectApiProjectsProjectIdDelete'
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
        const { projectId } = props !== null && props !== void 0 ? props : {};
        return deleteProjectApiProjectsProjectIdDelete(projectId, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Delete Project
 */ const useDeleteProjectApiProjectsProjectIdDelete = (options, queryClient)=>{
    const mutationOptions = getDeleteProjectApiProjectsProjectIdDeleteMutationOptions(options);
    return useMutation(mutationOptions, queryClient);
};
/**
 * Health check endpoint to verify API is working.
 * @summary Health Check
 */ const healthCheckHealthGet = (options, signal)=>{
    return customInstance({
        url: "https://super-agent-api.beta.myninja.ai/health",
        method: 'GET',
        signal
    }, options);
};
const getHealthCheckHealthGetQueryKey = ()=>{
    return [
        "https://super-agent-api.beta.myninja.ai/health"
    ];
};
const getHealthCheckHealthGetInfiniteQueryOptions = (options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getHealthCheckHealthGetQueryKey();
    const queryFn = (param)=>{
        let { signal } = param;
        return healthCheckHealthGet(requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary Health Check
 */ function useHealthCheckHealthGetInfinite(options, queryClient) {
    const queryOptions = getHealthCheckHealthGetInfiniteQueryOptions(options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getHealthCheckHealthGetQueryOptions = (options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getHealthCheckHealthGetQueryKey();
    const queryFn = (param)=>{
        let { signal } = param;
        return healthCheckHealthGet(requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary Health Check
 */ function useHealthCheckHealthGet(options, queryClient) {
    const queryOptions = getHealthCheckHealthGetQueryOptions(options);
    const query = useQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}


/***/ }),

/***/ 37010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ customInstance)
/* harmony export */ });
/* unused harmony export AXIOS_INSTANCE */
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42917);
/* harmony import */ var _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73262);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95125);
/* harmony import */ var _lib_envs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68276);
/* harmony import */ var _constants_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41319);





const AXIOS_INSTANCE = axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.create({
    baseURL: ''
});
AXIOS_INSTANCE.interceptors.request.use(async (config)=>{
    var _currentSession_tokens, _currentSession_tokens_accessToken, _currentSession_tokens1;
    const currentSession = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_3__/* .fetchAuthSession */ .$)();
    const token = (currentSession === null || currentSession === void 0 ? void 0 : (_currentSession_tokens = currentSession.tokens) === null || _currentSession_tokens === void 0 ? void 0 : _currentSession_tokens.accessToken.toString()) || null;
    if (config.url.startsWith('https://super-agent-api.beta.myninja.ai/api/open')) {
        config.url = getUrl(config.url);
        return config;
    }
    if (!token) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_0__/* .datadogLogs */ .yf.logger.error('getBaseHeaders: missing access token');
        throw new Error('Auth token must not be empty');
    }
    const ninja_user_id = (currentSession === null || currentSession === void 0 ? void 0 : (_currentSession_tokens1 = currentSession.tokens) === null || _currentSession_tokens1 === void 0 ? void 0 : (_currentSession_tokens_accessToken = _currentSession_tokens1.accessToken) === null || _currentSession_tokens_accessToken === void 0 ? void 0 : _currentSession_tokens_accessToken.payload['custom:ninja_user_id']) || '';
    config.headers.Authorization = "Bearer ".concat(token);
    config.headers[_constants_content__WEBPACK_IMPORTED_MODULE_4__/* .X_NINJA_USER_ID_HEADER */ .u] = ninja_user_id;
    config.url = config.url = getUrl(config.url);
    return config;
});
function getUrl(url) {
    if (url.includes('https://super-agent-api.beta.myninja.ai/api')) {
        return url.replace('https://super-agent-api.beta.myninja.ai/api', _lib_envs__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_PUBLIC_BACKEND_URL */ .xg);
    }
    if (url.includes('https://tasks-api.beta.myninja.ai')) {
        return url.replace('https://tasks-api.beta.myninja.ai', _lib_envs__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_PUBLIC_TASKS_API_URL */ .KE);
    }
    if (url.includes('https://bff.beta.myninja.ai')) {
        return url.replace('https://bff.beta.myninja.ai', _lib_envs__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_PUBLIC_BFF_URL */ .Nj);
    }
    if (url.includes('https://wallet-users.public.beta.myninja.ai')) {
        return url.replace('https://wallet-users.public.beta.myninja.ai', _lib_envs__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_PUBLIC_WALLET_URL */ .a5);
    }
    if (url.includes('https://content.public.beta.myninja.ai')) {
        return url.replace('https://content.public.beta.myninja.ai', _lib_envs__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_PUBLIC_CONTENT_API_URL */ .XQ);
    }
    if (url.includes('https://token.public.beta.myninja.ai/v1')) {
        return url.replace('https://token.public.beta.myninja.ai/v1', _lib_envs__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_PUBLIC_NINJA_TOKEN_API_URL */ .Uf);
    }
}
// add a second `options` argument here if you want to pass extra options to each generated query
const customInstance = (config, options)=>{
    const source = axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.CancelToken.source();
    const promise = AXIOS_INSTANCE({
        ...config,
        ...options,
        cancelToken: source.token
    }).then((param)=>{
        let { data } = param;
        return data;
    });
    // @ts-expect-error - taken from the React query example
    promise.cancel = ()=>{
        source.cancel('Query was cancelled');
    };
    return promise;
};


/***/ }),

/***/ 37863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $Y: () => (/* reexport */ useAllOpenMessages),
  I: () => (/* reexport */ usePromptCommandActions/* usePromptCommandActions */.I),
  M5: () => (/* reexport */ usePromptCommandState/* usePromptCommandState */.M),
  _K: () => (/* reexport */ useThreadList)
});

// EXTERNAL MODULE: ./src/hooks/threadHooks/usePromptCommandState.ts
var usePromptCommandState = __webpack_require__(38967);
// EXTERNAL MODULE: ./src/hooks/threadHooks/usePromptCommandActions.ts
var usePromptCommandActions = __webpack_require__(70169);
// EXTERNAL MODULE: ./src/components/AuthProvider.tsx
var AuthProvider = __webpack_require__(19016);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/utils/index.ts + 9 modules
var utils = __webpack_require__(19482);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(99776);
// EXTERNAL MODULE: ./src/gen/sn-api/threads/threads.gen.ts
var threads_gen = __webpack_require__(23267);
// EXTERNAL MODULE: ./src/hooks/threadHooks/constants.ts
var constants = __webpack_require__(40585);
;// ./src/hooks/threadHooks/useThreadList.ts
/* __next_internal_client_entry_do_not_use__ useThreadList auto */ 





const useThreadList = (params)=>{
    const { user } = (0,AuthProvider/* useAuth */.A)();
    const queryClient = (0,QueryClientProvider/* useQueryClient */.jE)();
    const cleanParams = (0,react.useMemo)(()=>{
        if (!params) return undefined;
        const cleaned = Object.fromEntries(Object.entries(params).filter((param)=>{
            let [_, value] = param;
            return !(typeof value === 'string' && value === '');
        }));
        return Object.keys(cleaned).length > 0 ? cleaned : undefined;
    }, [
        params
    ]);
    const queryResult = (0,threads_gen/* useGetThreadsApiThreadsGet */.aY)(cleanParams, {
        query: {
            enabled: !!user,
            queryKey: constants/* THREAD_QUERY_KEYS */.h.lists(cleanParams)
        }
    });
    const { data, isLoading } = queryResult;
    const { mutateAsync: updateThreadMutation, isPending: isUpdating } = (0,threads_gen/* usePutThreadApiThreadsThreadIdPut */.Gh)();
    const { mutateAsync: deleteThreadMutation, isPending: isDeleting } = (0,threads_gen/* useDeleteThreadApiThreadsThreadIdDelete */.iI)();
    const invalidateThreads = (0,react.useCallback)(()=>{
        // Invalidate all thread list queries
        queryClient.invalidateQueries({
            predicate: (query)=>{
                const listKeyPrefix = constants/* THREAD_QUERY_KEYS */.h.lists();
                return query.queryKey[0] === listKeyPrefix[0] && query.queryKey[1] === listKeyPrefix[1];
            }
        });
    }, [
        queryClient
    ]);
    const deleteThread = (0,react.useCallback)(async (threadId)=>{
        await deleteThreadMutation({
            threadId
        });
        // Remove thread from list cache
        queryClient.setQueryData(constants/* THREAD_QUERY_KEYS */.h.lists(params), (oldData)=>{
            if (!oldData) return oldData;
            return oldData.filter((thread)=>thread.thread_id !== threadId);
        });
        // Remove thread detail cache if exists
        queryClient.removeQueries({
            queryKey: constants/* THREAD_QUERY_KEYS */.h.detail(threadId)
        });
    }, [
        params,
        deleteThreadMutation,
        queryClient
    ]);
    const updateThreadInList = (0,react.useCallback)((threadId, partialData)=>{
        queryClient.setQueryData(constants/* THREAD_QUERY_KEYS */.h.lists(), (oldData)=>{
            if (!oldData) return oldData;
            return oldData.map((thread)=>thread.thread_id === threadId ? {
                    ...thread,
                    ...partialData
                } : thread);
        });
    }, [
        queryClient
    ]);
    const updateThreadDetail = (0,react.useCallback)((threadId, partialData)=>{
        queryClient.setQueryData(constants/* THREAD_QUERY_KEYS */.h.detail(threadId), (oldData)=>{
            if (!oldData) return oldData;
            return {
                ...oldData,
                ...partialData
            };
        });
    }, [
        queryClient
    ]);
    const updateThread = (0,react.useCallback)(async (threadId, data)=>{
        // Optimistic update
        updateThreadInList(threadId, data);
        updateThreadDetail(threadId, data);
        try {
            await updateThreadMutation({
                threadId,
                data
            });
        } catch (error) {
            // On failure, invalidate to refetch and rollback
            queryClient.invalidateQueries({
                queryKey: constants/* THREAD_QUERY_KEYS */.h.detail(threadId)
            });
            throw error;
        } finally{
            invalidateThreads();
        }
    }, [
        updateThreadInList,
        updateThreadDetail,
        updateThreadMutation,
        queryClient,
        invalidateThreads
    ]);
    const mappedThreads = (0,react.useMemo)(()=>{
        if (!data) {
            return [];
        }
        return (0,utils/* sortThreads */.iD)(data.map((thread)=>({
                threadId: thread.thread_id,
                projectId: thread.project_id,
                name: thread.name,
                url: "/agents/".concat(thread.thread_id),
                updatedAt: thread.last_activity_at,
                status: thread.status,
                isImportant: thread === null || thread === void 0 ? void 0 : thread.is_important
            })));
    }, [
        data
    ]);
    return (0,react.useMemo)(()=>({
            threads: mappedThreads,
            isLoading,
            deleteThread,
            isDeleting,
            updateThread,
            isUpdating,
            refreshThreads: invalidateThreads,
            updateThreadInList
        }), [
        mappedThreads,
        isLoading,
        deleteThread,
        isDeleting,
        updateThread,
        isUpdating,
        invalidateThreads,
        updateThreadInList
    ]);
};

// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(53455);
// EXTERNAL MODULE: ./src/gen/sn-api/default/default.gen.ts
var default_gen = __webpack_require__(36095);
;// ./src/hooks/threadHooks/useAllOpenMessages.tsx


/**
 * Hook that fetches all open messages for a thread at once
 * @param threadId - The thread ID to fetch messages for
 * @returns Object containing all messages and loading states
 */ function useAllOpenMessages(threadId) {
    const query = (0,useQuery/* useQuery */.I)({
        queryKey: [
            'all-open-messages',
            threadId
        ],
        queryFn: async ()=>{
            const allMessages = [];
            let paginationToken = undefined;
            let isFirstPage = true;
            while(true){
                const response = await (0,default_gen/* getOpenMessagesApiOpenThreadsThreadIdMessagesGet */.$5)(threadId, isFirstPage ? {
                    page_size: 1000,
                    order: 'asc'
                } : {
                    pagination_token: paginationToken
                });
                if (response.messages) {
                    allMessages.push(...response.messages);
                }
                if (!response.pagination_token) {
                    break;
                }
                paginationToken = response.pagination_token;
                isFirstPage = false;
            }
            return allMessages;
        },
        staleTime: Infinity,
        enabled: !!threadId
    });
    var _query_data;
    return {
        messages: (_query_data = query.data) !== null && _query_data !== void 0 ? _query_data : [],
        isLoading: query.isLoading,
        error: query.error,
        isError: query.isError,
        refetch: query.refetch
    };
}

;// ./src/hooks/threadHooks/index.ts






/***/ }),

/***/ 38967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ usePromptCommandState)
/* harmony export */ });
/* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33057);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82678);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12115);
/* __next_internal_client_entry_do_not_use__ usePromptCommandState auto */ 


const usePromptCommandState = ()=>{
    const { currentCommand } = (0,_store_config__WEBPACK_IMPORTED_MODULE_0__/* .useAppSelector */ .GV)(_store__WEBPACK_IMPORTED_MODULE_1__/* .promptCommandState */ .XP);
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({
            currentCommand
        }), [
        currentCommand
    ]);
};


/***/ }),

/***/ 40585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ THREAD_QUERY_KEYS)
/* harmony export */ });
// Query key constants
const THREAD_QUERY_KEYS = {
    lists: (params)=>{
        return [
            'threads',
            'list',
            params
        ];
    },
    detail: (threadId)=>[
            'threads',
            'detail',
            threadId
        ]
};


/***/ }),

/***/ 62030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   o: () => (/* binding */ capitalizeEachFirstLetter)
/* harmony export */ });
const capitalizeEachFirstLetter = (str)=>{
    return str.split(' ').map((word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
};
function capitalizeFirstLetter(str) {
    if (!str) {
        return '';
    }
    return [
        ...str
    ][0].toUpperCase() + str.slice(1);
}


/***/ }),

/***/ 70169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ usePromptCommandActions)
/* harmony export */ });
/* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33057);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82678);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12115);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19482);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18720);
/* __next_internal_client_entry_do_not_use__ usePromptCommandActions auto */ 




const usePromptCommandActions = ()=>{
    const dispatch = (0,_store_config__WEBPACK_IMPORTED_MODULE_0__/* .useAppDispatch */ .jL)();
    const { selectedDeepCoderMode } = (0,_store_config__WEBPACK_IMPORTED_MODULE_0__/* .useAppSelector */ .GV)(_store__WEBPACK_IMPORTED_MODULE_1__/* .agentExecutionModeState */ .gV);
    const handleSetCurrentCommand = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((command)=>{
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .isDeepCoderCommand */ .V8)(command)) {
            const coderCommandByMode = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .getDeepCoderCommandByMode */ .R)(selectedDeepCoderMode);
            dispatch((0,_store__WEBPACK_IMPORTED_MODULE_1__/* .setCurrentCommand */ .r9)(coderCommandByMode));
        } else {
            dispatch((0,_store__WEBPACK_IMPORTED_MODULE_1__/* .setCurrentCommand */ .r9)(command));
        }
        sonner__WEBPACK_IMPORTED_MODULE_4__/* .toast */ .oR.success("Switching to ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .getSkillCommandTitle */ .bF)(command)));
    }, [
        dispatch,
        selectedDeepCoderMode
    ]);
    const handleResetCurrentCommand = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        dispatch((0,_store__WEBPACK_IMPORTED_MODULE_1__/* .resetCurrentCommand */ .Ac)());
        sonner__WEBPACK_IMPORTED_MODULE_4__/* .toast */ .oR.success("Switching to ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .getSkillCommandTitle */ .bF)(null)));
    }, [
        dispatch
    ]);
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({
            onSetCurrentCommand: handleSetCurrentCommand,
            onResetCurrentCommand: handleResetCurrentCommand
        }), [
        handleSetCurrentCommand,
        handleResetCurrentCommand
    ]);
};


/***/ }),

/***/ 70258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ useCreditsAccountInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* harmony import */ var _userHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95520);
/* harmony import */ var _store_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57403);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19482);
/* harmony import */ var _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58926);





const useCreditsAccountInfo = ()=>{
    const { userId, isOpenTier, isFreeTier } = (0,_userHooks__WEBPACK_IMPORTED_MODULE_1__/* .useGetUser */ .be)();
    const { data, isLoading } = (0,_store_services__WEBPACK_IMPORTED_MODULE_2__/* .useGetCreditAccountExistsQuery */ .gl)({
        user_id: userId
    }, {
        skip: isOpenTier || isFreeTier
    });
    const creditBalance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return (data === null || data === void 0 ? void 0 : data.payment_source) !== _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_4__/* .CreditAccountPaymentSource */ .Or.VIRTUAL && (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .getPriceFromNanos */ .Pw)(data === null || data === void 0 ? void 0 : data.balance_nanos) || 0;
    }, [
        data
    ]);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            isCreditAccountLoading: isLoading,
            hasCreditAccount: !!(data === null || data === void 0 ? void 0 : data.has_account),
            creditBalance,
            isCreditStatusOnHold: (data === null || data === void 0 ? void 0 : data.keys_status) === _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_4__/* .CreditAccountKeysStatus */ .P5.ON_HOLD
        }), [
        isLoading,
        data,
        creditBalance
    ]);
};


/***/ }),

/***/ 71203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Gv: () => (/* reexport */ useAcceptInviteWithDifferentAccountModal),
  v6: () => (/* reexport */ useAccountEntitlements),
  $Y: () => (/* reexport */ threadHooks/* useAllOpenMessages */.$Y),
  Yd: () => (/* reexport */ useAutoSelectExecutionMode),
  j8: () => (/* reexport */ useCheckIfUserInvitedToTeam),
  Rd: () => (/* reexport */ useCommonStreamCallbacks),
  Fg: () => (/* reexport */ useCreditsAccountInfo/* useCreditsAccountInfo */.F),
  oT: () => (/* reexport */ useCreditsAccountWithAutoPayInfo),
  DL: () => (/* reexport */ useDeviceDetect),
  o7: () => (/* reexport */ useEntitlements),
  Ml: () => (/* reexport */ useExecutionModeActions),
  _F: () => (/* reexport */ useExecutionModeState),
  cb: () => (/* reexport */ useGetDisplayedPlan),
  rP: () => (/* reexport */ useGetFinalPriceLabel),
  Mz: () => (/* reexport */ useGetPlanVariant),
  WD: () => (/* reexport */ useGetPriceRange),
  G3: () => (/* reexport */ useGetReferralsInfo),
  be: () => (/* reexport */ userHooks/* useGetUser */.be),
  fE: () => (/* reexport */ interfaceHooks/* useInterfaceControlActions */.f),
  x4: () => (/* reexport */ interfaceHooks/* useInterfaceControlState */.x),
  n6: () => (/* reexport */ useInvitationAccessDeniedModal),
  Vn: () => (/* reexport */ userHooks/* useInvitationInfo */.Vn),
  EH: () => (/* reexport */ useInviteUsersModal),
  al: () => (/* reexport */ use_mobile/* useIsMobile */.a),
  "in": () => (/* reexport */ useJoinWorkspaceModal),
  WP: () => (/* reexport */ usePaymentControlActions),
  _s: () => (/* reexport */ usePaymentControlState),
  Ds: () => (/* reexport */ usePortal),
  I: () => (/* reexport */ threadHooks/* usePromptCommandActions */.I),
  M5: () => (/* reexport */ threadHooks/* usePromptCommandState */.M5),
  y: () => (/* reexport */ usePurchaseSeatsModal),
  G4: () => (/* reexport */ useQueriesBalanceData),
  to: () => (/* reexport */ useReferralControlActions),
  fs: () => (/* reexport */ useReferralControlState),
  Pj: () => (/* reexport */ useReferralModalAfterSubscription),
  Tx: () => (/* reexport */ useSubscriptionInfo),
  jC: () => (/* reexport */ useSubscriptionPlans),
  pV: () => (/* reexport */ userHooks/* useSupportTicket */.pV),
  IH: () => (/* reexport */ useSyncfusionTheme),
  JA: () => (/* reexport */ userHooks/* useTeamInfo */.JA),
  _K: () => (/* reexport */ threadHooks/* useThreadList */._K),
  H8: () => (/* reexport */ useUnableJoinTeamModal),
  Qc: () => (/* reexport */ userHooks/* useUpdateUser */.Qc),
  hY: () => (/* reexport */ useUpgradeDowngradeParams),
  MI: () => (/* reexport */ useVisible)
});

// UNUSED EXPORTS: useFeatureFlagWithEnable, useSelectedNumberOfSeats

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
;// ./src/hooks/useVisible.ts
/* __next_internal_client_entry_do_not_use__ useVisible auto */ 
const useVisible = (value)=>{
    const [isVisible, setIsVisible] = (0,react.useState)(value !== null && value !== void 0 ? value : false);
    const onVisibilitySet = (0,react.useCallback)(()=>setIsVisible(true), []);
    const onVisibilityRemove = (0,react.useCallback)(()=>setIsVisible(false), []);
    const onVisibilityToggle = (0,react.useCallback)(()=>setIsVisible((state)=>!state), []);
    return {
        isVisible,
        onVisibilitySet,
        onVisibilityRemove,
        onVisibilityToggle
    };
};

// EXTERNAL MODULE: ./node_modules/react-device-detect/dist/lib.js
var lib = __webpack_require__(92253);
;// ./src/hooks/useDeviceDetect.ts
/* __next_internal_client_entry_do_not_use__ useDeviceDetect auto */ 

const useDeviceDetect = ()=>{
    const [deviceInfo, setDeviceInfo] = (0,react.useState)();
    (0,react.useEffect)(()=>{
        setDeviceInfo({
            userAgent: lib/* getUA */.ZQ,
            osName: lib/* osName */.wH,
            osVersion: lib/* osVersion */.B4,
            browserName: lib/* browserName */.C0,
            browserVersion: lib/* browserVersion */.n5,
            isMobile: lib/* isMobile */.Fr,
            isTablet: lib/* isTablet */.v1,
            isDesktop: lib/* isDesktop */.xl,
            isAndroid: lib/* isAndroid */.m0,
            isIOS: lib/* isIOS */.un,
            isMacOs: lib/* isMacOs */.Ue,
            isWindows: lib/* isWindows */.uF,
            isChrome: lib/* isChrome */.H8,
            isFirefox: lib/* isFirefox */.gm,
            isSafari: lib/* isSafari */.nr,
            isEdge: lib/* isEdge */.UP,
            isSmartTV: lib/* isSmartTV */.UX,
            isWearable: lib/* isWearable */.w,
            isConsole: lib/* isConsole */.iX,
            isMobileOnly: lib/* isMobileOnly */.XF
        });
    }, []);
    return deviceInfo;
};

// EXTERNAL MODULE: ./src/types/index.ts + 2 modules
var types = __webpack_require__(37893);
// EXTERNAL MODULE: ./node_modules/@datadog/browser-logs/esm/entries/main.js + 109 modules
var main = __webpack_require__(73262);
// EXTERNAL MODULE: ./node_modules/sonner/dist/index.mjs
var dist = __webpack_require__(18720);
;// ./src/hooks/useCommonStreamCallbacks.ts




const useCommonStreamCallbacks = (param)=>{
    let { threadId, agentRunId, setMessages, agentStatus, currentCommand } = param;
    const handleNewMessageFromStream = (0,react.useCallback)((message, finalizeStreamAfter)=>{
        ;
        if (!message.message_id) {
            var _message_content;
            main/* datadogLogs */.yf.logger.warn("[STREAM HANDLER] Received message is missing ID: Type=".concat(message.type, ", Content=").concat((_message_content = message.content) === null || _message_content === void 0 ? void 0 : _message_content.substring(0, 50), "..."));
        }
        if (currentCommand === types/* ChatCommand */.cz.CHAT) {
            finalizeStreamAfter === null || finalizeStreamAfter === void 0 ? void 0 : finalizeStreamAfter();
        }
        setMessages((prev)=>{
            // First check if the message already exists
            const messageExists = prev.some((m)=>m.message_id === message.message_id);
            if (messageExists) {
                // If it exists, update it instead of adding a new one
                return prev.map((m)=>m.message_id === message.message_id ? message : m);
            } else {
                // If it's a new message, add it to the end
                return [
                    ...prev,
                    message
                ];
            }
        });
    }, []);
    const handleNewAssistantChunkFromStream = (0,react.useCallback)((param)=>{
        let { content, message_id } = param;
        if (currentCommand !== types/* ChatCommand */.cz.CHAT) {
            return;
        }
        ;
        const optimisticAssistantMessageId = "optimistic-".concat(agentRunId);
        setMessages((prev)=>{
            // Check if message with this ID already exists
            const existingMessage = prev.find((m)=>m.message_id === message_id || m.message_id === optimisticAssistantMessageId);
            if (existingMessage) {
                // If exists, update content by concatenating
                return prev.map((m)=>m.message_id === existingMessage.message_id ? {
                        ...m,
                        content: m.content + content,
                        updated_at: new Date().toISOString()
                    } : m);
            } else {
                const optimisticAssistantMessage = {
                    message_id: optimisticAssistantMessageId,
                    thread_id: threadId,
                    agent_run_id: agentRunId,
                    type: 'assistant',
                    is_llm_message: true,
                    content: content,
                    metadata: '{"thread_run_id": "'.concat(agentRunId, '"}'),
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                };
                return [
                    ...prev,
                    optimisticAssistantMessage
                ];
            }
        });
    }, [
        agentRunId,
        currentCommand
    ]);
    const handleNewErrorNotificationFromStream = (0,react.useCallback)((errorNotification)=>{
        ;
        const optimisticAssistantMessage = {
            message_id: "temp-".concat(Date.now()),
            thread_id: threadId,
            agent_run_id: agentRunId,
            type: 'assistant',
            is_llm_message: true,
            content: '{"role": "assistant", "content": "'.concat(errorNotification, '", "tool_calls": null}'),
            metadata: '{"thread_run_id": "'.concat(agentRunId, '"}'),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        setMessages((prev)=>{
            return [
                ...prev,
                optimisticAssistantMessage
            ];
        });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        threadId,
        agentRunId
    ]);
    const handleStreamError = (0,react.useCallback)((errorMessage)=>{
        main/* datadogLogs */.yf.logger.error("[PAGE] Stream hook error: ".concat(errorMessage));
        if (!errorMessage.toLowerCase().includes('not found') && !errorMessage.toLowerCase().includes('agent run is not running')) {
            dist/* toast */.oR.error("Stream Error: ".concat(errorMessage));
        }
    }, []);
    const handleStreamClose = (0,react.useCallback)(()=>{
        ;
    }, [
        agentStatus
    ]);
    return (0,react.useMemo)(()=>({
            handleStreamError,
            handleStreamClose,
            handleNewMessageFromStream,
            handleNewAssistantChunkFromStream,
            handleNewErrorNotificationFromStream
        }), [
        handleStreamError,
        handleStreamClose,
        handleNewMessageFromStream,
        handleNewAssistantChunkFromStream,
        handleNewErrorNotificationFromStream
    ]);
};

// EXTERNAL MODULE: ./src/hooks/userHooks/index.ts + 5 modules
var userHooks = __webpack_require__(95520);
;// ./src/hooks/syncfusionHooks/useSyncfusionTheme.ts

const isSpreadsheet = (inst)=>{
    const anyInst = inst;
    return !!inst && typeof (anyInst === null || anyInst === void 0 ? void 0 : anyInst.getActiveSheet) === 'function' && typeof (anyInst === null || anyInst === void 0 ? void 0 : anyInst.resize) === 'function';
};
const safeRefresh = (inst)=>{
    if (!inst) return;
    const isInstDoc = inst;
    if (isInstDoc === null || isInstDoc === void 0 ? void 0 : isInstDoc.documentEditor) {
        return;
    }
    if (isSpreadsheet(inst)) {
        return;
    }
    const anyInst = inst;
    if (typeof (anyInst === null || anyInst === void 0 ? void 0 : anyInst.refresh) === 'function') anyInst.refresh();
    else if (typeof (anyInst === null || anyInst === void 0 ? void 0 : anyInst.refreshUI) === 'function') anyInst.refreshUI();
    else if (typeof (anyInst === null || anyInst === void 0 ? void 0 : anyInst.dataBind) === 'function') anyInst.dataBind();
};
const useSyncfusionTheme = (isDark, ref)=>{
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        setIsLoading(true);
        const id = 'syncfusion-theme';
        const existing = document.getElementById(id);
        if (existing) existing.remove();
        const link = document.createElement('link');
        link.id = id;
        link.rel = 'stylesheet';
        link.href = isDark ? 'https://cdn.syncfusion.com/ej2/31.1.17/bootstrap5-dark.css' : 'https://cdn.syncfusion.com/ej2/31.1.17/bootstrap5.css';
        link.onload = ()=>{
            safeRefresh(ref === null || ref === void 0 ? void 0 : ref.current);
            setIsLoading(false);
        };
        link.onerror = ()=>{
            console.error('Failed to load Syncfusion theme');
            setIsLoading(false);
        };
        document.head.appendChild(link);
    }, [
        isDark,
        ref
    ]);
    return {
        isLoading
    };
};

;// ./src/hooks/syncfusionHooks/index.ts


// EXTERNAL MODULE: ./src/store/services/index.ts + 9 modules
var services = __webpack_require__(57403);
;// ./src/hooks/accountHooks/useAccountEntitlements.ts
/* __next_internal_client_entry_do_not_use__ useAccountEntitlements auto */ 


const RUN_OUT_OF_COMPLEX_QUERIES = 5;
const RUN_OUT_TO_ZERO_OF_COMPLEX_QUERIES = 0;
const RUN_OUT_OF_STANDARD_QUERIES = 0;
const RUN_OUT_OF_FAST_QUERIES = 0;
const RUN_OUT_OF_TOTAL_QUERIES = 0;
const useAccountEntitlements = ()=>{
    const { userId } = (0,userHooks/* useGetUser */.be)();
    const { data, isLoading, isFetching, isSuccess } = (0,services/* useGetAccountEntitlementsQuery */.py)(userId);
    const { standard_queries_available, complex_queries_available, fast_queries_available, total_queries_available } = (data === null || data === void 0 ? void 0 : data.query_balance) || {};
    const isRunningOutOfComplex = (0,react.useMemo)(()=>{
        return !isLoading && complex_queries_available >= 0 && complex_queries_available <= RUN_OUT_OF_COMPLEX_QUERIES;
    }, [
        isLoading,
        complex_queries_available
    ]);
    const isRunningOutToZeroOfComplex = (0,react.useMemo)(()=>{
        return !isLoading && complex_queries_available === RUN_OUT_TO_ZERO_OF_COMPLEX_QUERIES;
    }, [
        isLoading,
        complex_queries_available
    ]);
    const isRunningOutOfStandard = (0,react.useMemo)(()=>{
        return !isLoading && standard_queries_available === RUN_OUT_OF_STANDARD_QUERIES;
    }, [
        isLoading,
        standard_queries_available
    ]);
    const isRunningOutOfFast = (0,react.useMemo)(()=>{
        return !isLoading && fast_queries_available === RUN_OUT_OF_FAST_QUERIES;
    }, [
        isLoading,
        fast_queries_available
    ]);
    const isRunningOutOfTotal = (0,react.useMemo)(()=>{
        return !isLoading && total_queries_available === RUN_OUT_OF_TOTAL_QUERIES;
    }, [
        isLoading,
        total_queries_available
    ]);
    return (0,react.useMemo)(()=>({
            ...data,
            isLoading,
            isFetching,
            isSuccess,
            isRunningOutOfComplex,
            isRunningOutOfStandard,
            isRunningOutOfFast,
            isRunningOutOfTotal,
            isRunningOutToZeroOfComplex
        }), [
        data,
        isLoading,
        isFetching,
        isSuccess,
        isRunningOutOfComplex,
        isRunningOutOfStandard,
        isRunningOutOfFast,
        isRunningOutOfTotal,
        isRunningOutToZeroOfComplex
    ]);
};

// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Lightning.es.js + 1 modules
var Lightning_es = __webpack_require__(33969);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/Speedometer.es.js + 1 modules
var Speedometer_es = __webpack_require__(15548);
// EXTERNAL MODULE: ./node_modules/@phosphor-icons/react/dist/csr/GraduationCap.es.js + 1 modules
var GraduationCap_es = __webpack_require__(9807);
// EXTERNAL MODULE: ./src/utils/index.ts + 9 modules
var utils = __webpack_require__(19482);
;// ./src/hooks/accountHooks/useQueriesBalanceData.ts
/* __next_internal_client_entry_do_not_use__ useQueriesBalanceData auto */ 




const useQueriesBalanceData = (currentCommand)=>{
    const { query_balance, isLoading } = useAccountEntitlements();
    const { standard_queries_available, standard_queries_quota, complex_queries_available, complex_queries_quota, fast_queries_available, fast_queries_quota } = query_balance || {};
    const queriesBalanceData = (0,react.useMemo)(()=>{
        const standardModelLabel = (()=>{
            switch(currentCommand){
                case types/* DeepCoderCommands */._V.FAST_CODER:
                case types/* DeepCoderCommands */._V.COMPLEX_CODER:
                case types/* DeepCoderCommands */._V.STANDARD_CODER:
                    return {
                        iconName: 'zaiLogo',
                        modelName: 'GLM-4.7, 357B'
                    };
                case types/* DeepResearchCommands */.YR.FAST_RESEARCH:
                    return {
                        iconName: 'alibabaLogoJSX',
                        modelName: 'Qwen3-235B'
                    };
                default:
                    return {
                        iconName: 'zaiLogo',
                        modelName: 'GLM-4.7, 357B'
                    };
            }
        })();
        const fastModel = (()=>{
            if ((0,utils/* isDeepCoderCommand */.V8)(currentCommand)) {
                return {
                    Icon: Lightning_es/* LightningIcon */.C,
                    title: 'Fast Coder',
                    titleWithTokenNum: 'Fast Coder (1,000 tokens/s)',
                    value: fast_queries_available,
                    quota: fast_queries_quota,
                    description: 'Fastest agentic coder in the world',
                    modelLabel: {
                        iconName: 'zaiLogo',
                        modelName: 'GLM-4.6, 357B',
                        info: 'Cerebras',
                        infoLogo: 'cerebrasLogoJSX'
                    }
                };
            }
            if ((0,utils/* isDeepResearchCommand */.lN)(currentCommand)) {
                return {
                    Icon: Lightning_es/* LightningIcon */.C,
                    title: 'Fast',
                    titleWithTokenNum: 'Fast (1,500 tokens/s)',
                    value: fast_queries_available,
                    quota: fast_queries_quota,
                    description: 'Fastest Deep Research in the world',
                    modelLabel: {
                        iconName: 'alibabaLogoJSX',
                        modelName: 'Qwen3-235B',
                        info: 'Cerebras',
                        infoLogo: 'cerebrasLogoJSX'
                    }
                };
            }
            return {
                Icon: Lightning_es/* LightningIcon */.C,
                title: 'Fast',
                titleWithTokenNum: 'Fast (1,000 tokens/s)',
                value: fast_queries_available,
                quota: fast_queries_quota,
                description: 'Fastest general agent in the world',
                modelLabel: {
                    iconName: 'zaiLogo',
                    modelName: 'GLM-4.6, 357B',
                    info: 'Cerebras',
                    infoLogo: 'cerebrasLogoJSX'
                }
            };
        })();
        return {
            standard: {
                Icon: Speedometer_es/* SpeedometerIcon */.$,
                title: 'Standard',
                value: standard_queries_available,
                quota: standard_queries_quota,
                description: 'Balanced for quality & speed',
                modelLabel: standardModelLabel
            },
            complex: {
                Icon: GraduationCap_es/* GraduationCapIcon */.y,
                title: 'Complex',
                value: complex_queries_available,
                quota: complex_queries_quota,
                description: 'Highest quality LLM for complex tasks',
                modelLabel: {
                    iconName: 'claudeLogo',
                    modelName: 'Sonnet 4.5'
                }
            },
            fast: fastModel
        };
    }, [
        standard_queries_available,
        standard_queries_quota,
        complex_queries_available,
        complex_queries_quota,
        currentCommand,
        fast_queries_available,
        fast_queries_quota
    ]);
    return (0,react.useMemo)(()=>({
            queriesBalanceData,
            isLoading
        }), [
        queriesBalanceData,
        isLoading
    ]);
};

// EXTERNAL MODULE: ./src/store/config.ts + 1 modules
var config = __webpack_require__(33057);
// EXTERNAL MODULE: ./src/store/index.ts + 2 modules
var store = __webpack_require__(82678);
;// ./src/hooks/accountHooks/useExecutionModeState.ts
/* __next_internal_client_entry_do_not_use__ useExecutionModeState auto */ 



const useExecutionModeState = ()=>{
    const { selectedGeneralAgentMode, selectedDeepCoderMode, selectedDeepResearchMode } = (0,config/* useAppSelector */.GV)(store/* agentExecutionModeState */.gV);
    const { currentCommand } = (0,config/* useAppSelector */.GV)(store/* promptCommandState */.XP);
    const selectedExecutionMode = (0,react.useMemo)(()=>{
        if ((0,utils/* isDeepCoderCommand */.V8)(currentCommand)) {
            return selectedDeepCoderMode;
        }
        if ((0,utils/* isDeepResearchCommand */.lN)(currentCommand)) {
            return selectedDeepResearchMode;
        }
        return selectedGeneralAgentMode;
    }, [
        currentCommand,
        selectedGeneralAgentMode,
        selectedDeepCoderMode,
        selectedDeepResearchMode
    ]);
    return (0,react.useMemo)(()=>({
            selectedExecutionMode
        }), [
        selectedExecutionMode
    ]);
};

// EXTERNAL MODULE: ./src/lib/utils/general.ts
var general = __webpack_require__(62030);
;// ./src/hooks/accountHooks/useExecutionModeActions.ts
/* __next_internal_client_entry_do_not_use__ useExecutionModeActions auto */ 





const useExecutionModeActions = ()=>{
    const dispatch = (0,config/* useAppDispatch */.jL)();
    const { currentCommand } = (0,config/* useAppSelector */.GV)(store/* promptCommandState */.XP);
    const setExecutionMode = (0,react.useCallback)(function(mode) {
        let skipToast = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if ((0,utils/* isDeepResearchCommand */.lN)(currentCommand)) {
            dispatch((0,store/* setSelectedDeepResearchMode */.hR)(mode));
        } else if ((0,utils/* isDeepCoderCommand */.V8)(currentCommand)) {
            const newCoderCommand = (0,utils/* getDeepCoderCommandByMode */.R)(mode);
            dispatch((0,store/* setCurrentCommand */.r9)(newCoderCommand));
            dispatch((0,store/* setSelectedDeepCoderMode */.cE)(mode));
        } else {
            dispatch((0,store/* setSelectedGeneralAgentMode */.E$)(mode));
        }
        if (!skipToast) {
            dist/* toast */.oR.success("Switching to ".concat((0,general/* capitalizeEachFirstLetter */.o)(mode), " mode"));
        }
    }, [
        dispatch,
        currentCommand
    ]);
    return {
        setExecutionMode
    };
};

;// ./src/hooks/accountHooks/useAutoSelectExecutionMode.ts
/* __next_internal_client_entry_do_not_use__ useAutoSelectExecutionMode auto */ 




const useAutoSelectExecutionMode = ()=>{
    const dispatch = (0,config/* useAppDispatch */.jL)();
    const { snTierId, isFreeTier } = (0,userHooks/* useGetUser */.be)();
    const { isSettled } = (0,config/* useAppSelector */.GV)(store/* agentExecutionModeState */.gV);
    (0,react.useEffect)(()=>{
        if (!isSettled && !!snTierId) {
            dispatch((0,store/* setIsExecutionModeSettled */.TD)(true));
            const defaultModeSet = (0,utils/* getDefaultModeSetByTier */.eC)(snTierId);
            dispatch((0,store/* setExecutionModeSet */.mi)(defaultModeSet));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        snTierId
    ]);
};

;// ./src/hooks/accountHooks/index.ts






// EXTERNAL MODULE: ./src/hooks/threadHooks/index.ts + 2 modules
var threadHooks = __webpack_require__(37863);
;// ./src/hooks/paymentHooks/usePaymentControlState.ts
/* __next_internal_client_entry_do_not_use__ usePaymentControlState auto */ 


const usePaymentControlState = ()=>{
    const { isPaymentModalOpen, paymentModalTitle, selectedPeriod, selectedFamily, selectedPlanSetByFamily, initialized, paymentUpgradeOptionsModal, isRequestUsageTableOpen, usageTableType, selectedPaymentTab } = (0,config/* useAppSelector */.GV)(store/* paymentControlState */.nG);
    const selectedPlanKind = (0,react.useMemo)(()=>selectedFamily && selectedPlanSetByFamily[selectedFamily], [
        selectedPlanSetByFamily,
        selectedFamily
    ]);
    const getDisplayedPlanKindByFamily = (0,react.useCallback)((planFamily)=>{
        return selectedPlanSetByFamily[planFamily];
    }, [
        selectedPlanSetByFamily
    ]);
    return (0,react.useMemo)(()=>({
            isPaymentModalOpen,
            paymentModalTitle,
            selectedPeriod,
            /**
       * @deprecated
       */ selectedFamily,
            /**
       * @deprecated
       */ selectedPlanSetByFamily,
            initialized,
            paymentUpgradeOptionsModal,
            selectedPlanKind,
            isRequestUsageTableOpen,
            usageTableType,
            selectedPaymentTab,
            /**
       * @deprecated
       */ getDisplayedPlanKindByFamily
        }), [
        isPaymentModalOpen,
        paymentModalTitle,
        selectedPeriod,
        selectedFamily,
        selectedPlanSetByFamily,
        initialized,
        paymentUpgradeOptionsModal,
        selectedPlanKind,
        isRequestUsageTableOpen,
        usageTableType,
        selectedPaymentTab,
        getDisplayedPlanKindByFamily
    ]);
};

;// ./src/hooks/paymentHooks/usePaymentControlActions.ts
/* __next_internal_client_entry_do_not_use__ usePaymentControlActions auto */ 



const usePaymentControlActions = ()=>{
    const { isAppleOrAmpPayment, subscriptionInfo } = useSubscriptionInfo();
    const dispatch = (0,config/* useAppDispatch */.jL)();
    const openPaymentModal = (0,react.useCallback)(()=>{
        var _window_ReactNativeWebView, _window;
        if (!!(subscriptionInfo === null || subscriptionInfo === void 0 ? void 0 : subscriptionInfo.is_cancelled)) {
            dispatch((0,store/* setPaymentUpgradeOptionsModal */.ki)('cancelled-subscription'));
            return;
        }
        if (window.ReactNativeWebViewPlatform) {
            // For users who are on webview via iOS/Android app
            if ((subscriptionInfo === null || subscriptionInfo === void 0 ? void 0 : subscriptionInfo.source) && (window.ReactNativeWebViewPlatform === 'android' && (subscriptionInfo === null || subscriptionInfo === void 0 ? void 0 : subscriptionInfo.source) !== 'google_play_store' || window.ReactNativeWebViewPlatform === 'ios' && (subscriptionInfo === null || subscriptionInfo === void 0 ? void 0 : subscriptionInfo.source) !== 'apple')) {
                dispatch((0,store/* setPaymentUpgradeOptionsModal */.ki)('wrong-payment-method'));
                return;
            }
        } else {
            if (isAppleOrAmpPayment) {
                dispatch((0,store/* setPaymentUpgradeOptionsModal */.ki)('wrong-payment-method'));
                return;
            }
        }
        if (!!(subscriptionInfo === null || subscriptionInfo === void 0 ? void 0 : subscriptionInfo.has_scheduled_downgrade) || !!(subscriptionInfo === null || subscriptionInfo === void 0 ? void 0 : subscriptionInfo.has_scheduled_plan_change) || !!(subscriptionInfo === null || subscriptionInfo === void 0 ? void 0 : subscriptionInfo.processing_plan_change)) {
            dispatch((0,store/* setPaymentUpgradeOptionsModal */.ki)('downgraded-subscription'));
            return;
        }
        if ((_window = window) === null || _window === void 0 ? void 0 : (_window_ReactNativeWebView = _window.ReactNativeWebView) === null || _window_ReactNativeWebView === void 0 ? void 0 : _window_ReactNativeWebView.postMessage) {
            window.ReactNativeWebView.postMessage(JSON.stringify({
                type: 'open-payment-modal'
            }));
        }
        dispatch((0,store/* setIsPaymentModalOpen */.QZ)(true));
    }, [
        dispatch,
        isAppleOrAmpPayment,
        subscriptionInfo
    ]);
    const closePaymentModal = (0,react.useCallback)(()=>{
        dispatch((0,store/* setIsPaymentModalOpen */.QZ)(false));
        dispatch((0,store/* setPaymentModalTitle */.IW)('Plan'));
    }, [
        dispatch
    ]);
    const onSetPaymentModalTitle = (0,react.useCallback)((title)=>{
        dispatch((0,store/* setPaymentModalTitle */.IW)(title));
    }, [
        dispatch
    ]);
    const closeUpgradeOptionsModal = (0,react.useCallback)(()=>{
        dispatch((0,store/* setPaymentUpgradeOptionsModal */.ki)(null));
    }, [
        dispatch
    ]);
    const onSetSelectedPeriod = (0,react.useCallback)((period)=>{
        dispatch((0,store/* setSelectedPeriod */.vw)(period));
    }, [
        dispatch
    ]);
    const onSetSelectedFamily = (0,react.useCallback)((planFamily)=>{
        dispatch((0,store/* setSelectedFamily */.GJ)(planFamily));
    }, [
        dispatch
    ]);
    const onSetSelectedPlanByFamily = (0,react.useCallback)((param)=>{
        let { planFamily, planKind } = param;
        dispatch((0,store/* setSelectedPlanByFamily */.e_)({
            planFamily,
            planKind
        }));
    }, [
        dispatch
    ]);
    const onToggleRequestUsageTableModal = (0,react.useCallback)((value)=>{
        dispatch((0,store/* setRequestUsageTableOpen */.R)(value));
    }, [
        dispatch
    ]);
    const onSetSelectedPaymentTab = (0,react.useCallback)((tab)=>{
        dispatch((0,store/* setSelectedPaymentTab */.Bx)(tab));
    }, [
        dispatch
    ]);
    return {
        openPaymentModal,
        closePaymentModal,
        onSetPaymentModalTitle,
        onSetSelectedPeriod,
        closeUpgradeOptionsModal,
        onSetSelectedFamily,
        onSetSelectedPlanByFamily,
        onToggleRequestUsageTableModal,
        onSetSelectedPaymentTab
    };
};

// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
;// ./src/hooks/paymentHooks/useSubscriptionInfo.ts
/* __next_internal_client_entry_do_not_use__ useSubscriptionInfo auto */ 




const useSubscriptionInfo = ()=>{
    const { isFreeTier, isTeamsTier, userId, isUserDataLoading } = (0,userHooks/* useGetUser */.be)();
    const { isOwner } = (0,userHooks/* useTeamInfo */.JA)();
    const shouldSkip = (0,react.useMemo)(()=>{
        return isFreeTier || isTeamsTier && !isOwner || !userId || isUserDataLoading;
    }, [
        isFreeTier,
        isTeamsTier,
        isOwner,
        userId,
        isUserDataLoading
    ]);
    const { data: subscriptionInfo, isLoading: isSubscriptionInfoLoading, isFetching: isSubscriptionInfoFetching } = (0,services/* useGetUserSubscriptionInfoQuery */.wK)({
        user_id: userId
    }, {
        skip: shouldSkip
    });
    const isLegacyPlan = (0,react.useMemo)(()=>constants/* LEGACY_PLAN_KINDS */.qgA.includes(subscriptionInfo === null || subscriptionInfo === void 0 ? void 0 : subscriptionInfo.plan_kind), [
        subscriptionInfo
    ]);
    const isSubscribed = (0,react.useMemo)(()=>{
        return !!(subscriptionInfo === null || subscriptionInfo === void 0 ? void 0 : subscriptionInfo.plan_tier);
    }, [
        subscriptionInfo
    ]);
    return (0,react.useMemo)(()=>({
            subscriptionInfo,
            isSubscriptionInfoLoading,
            isSubscriptionInfoFetching,
            isAppleOrAmpPayment: (0,utils/* isAppleOrAmpSource */.bb)(subscriptionInfo === null || subscriptionInfo === void 0 ? void 0 : subscriptionInfo.source),
            isAmpPayment: (subscriptionInfo === null || subscriptionInfo === void 0 ? void 0 : subscriptionInfo.source) === 'amp',
            isLegacyPlan,
            isSubscribed
        }), [
        subscriptionInfo,
        isSubscriptionInfoLoading,
        isSubscriptionInfoFetching,
        isLegacyPlan,
        isSubscribed
    ]);
};

// EXTERNAL MODULE: ./src/gen/wallet-api/models/index.ts + 29 modules
var models = __webpack_require__(58926);
;// ./src/utils/localStorage.ts

const getReferralId = ()=>{
    return localStorage.getItem(constants/* REFERRAL_ID */.g7W);
};

;// ./src/hooks/paymentHooks/useSubscriptionPlans.ts
/* __next_internal_client_entry_do_not_use__ useSubscriptionPlans auto */ 





const useSubscriptionPlans = (param)=>{
    let { group, seat_count, families = [
        models/* PlanFamily */.mX.pro,
        models/* PlanFamily */.mX.max,
        models/* PlanFamily */.mX.business
    ], skip, discountType } = param;
    const { userId } = (0,userHooks/* useGetUser */.be)();
    const referralId = getReferralId();
    const { data, isLoading, isFetching } = (0,services/* useGetSubscriptionPlansQuery */.J6)({
        user_id: userId,
        group,
        referral_id: referralId && group !== 'teams' ? referralId : undefined,
        seat_count,
        families,
        discount_type: discountType
    }, {
        skip: skip
    });
    return (0,react.useMemo)(()=>{
        var _;
        const variant = (_ = (data || [])[0]) === null || _ === void 0 ? void 0 : _.variant;
        const isNewVariantPaymentFeature = variant ? constants/* NEW_PLANS_VARIANTS */.Ny.includes(variant) : false;
        return {
            plans: data,
            isPlansLoading: isLoading || isFetching,
            // TODO: check if we can just delete isFetching from isPlansLoading
            isPlansLoadingFirstTime: isLoading,
            isNewVariantPaymentFeature
        };
    }, [
        data,
        isLoading,
        isFetching
    ]);
};

;// ./src/hooks/paymentHooks/useGetDisplayedPlan.ts
/* __next_internal_client_entry_do_not_use__ useGetDisplayedPlan auto */ 



const useGetDisplayedPlan = ()=>{
    const { getDisplayedPlanKindByFamily, selectedFamily } = usePaymentControlState();
    const { plans, isPlansLoading } = useSubscriptionPlans({
        families: [
            models/* PlanFamily */.mX.pro,
            models/* PlanFamily */.mX.max,
            models/* PlanFamily */.mX.business
        ]
    });
    const getDisplayedPlan = (0,react.useCallback)((planFamily)=>{
        const displayedPlanKind = getDisplayedPlanKindByFamily(planFamily);
        return plans === null || plans === void 0 ? void 0 : plans.find((plan)=>plan.plan_kind === displayedPlanKind);
    }, [
        plans,
        getDisplayedPlanKindByFamily
    ]);
    const currentSelectedPlan = (0,react.useMemo)(()=>selectedFamily ? getDisplayedPlan(selectedFamily) : undefined, [
        selectedFamily,
        getDisplayedPlan
    ]);
    return (0,react.useMemo)(()=>({
            plans,
            isPlansLoading,
            currentSelectedPlan,
            getDisplayedPlan
        }), [
        plans,
        isPlansLoading,
        getDisplayedPlan,
        currentSelectedPlan
    ]);
};

;// ./src/hooks/paymentHooks/useGetPriceRange.ts
/* __next_internal_client_entry_do_not_use__ useGetPriceRange auto */ 



/**
 * @deprecated
 */ const useGetPriceRange = (param)=>{
    let { planFamily } = param;
    const { plans } = useGetDisplayedPlan();
    const { selectedPeriod } = usePaymentControlState();
    const plansInFamily = (0,react.useMemo)(()=>{
        return (plans === null || plans === void 0 ? void 0 : plans.filter((param)=>{
            let { plan_kind } = param;
            return plan_kind !== 'max-05-monthly' && plan_kind !== 'max-20-monthly' && plan_kind !== 'max-05-annually' && plan_kind !== 'max-20-annually' && plan_kind !== 'business-20-monthly' && plan_kind !== 'business-20-annually';
        }).filter((plan)=>plan.plan_family === planFamily && plan.period === selectedPeriod)) || [];
    }, [
        plans,
        planFamily,
        selectedPeriod
    ]);
    const priceRange = (0,react.useMemo)(()=>{
        if (plansInFamily.length === 0) {
            return {
                minPrice: 0,
                maxPrice: 0
            };
        }
        const priceList = plansInFamily.map((plan)=>{
            return (0,utils/* getFinalPriceLabel */.i4)({
                displayedPlan: plan
            });
        }).map((plan)=>typeof plan === 'number' ? plan : 0);
        return {
            minPrice: Math.min(...priceList),
            maxPrice: Math.max(...priceList)
        };
    }, [
        plansInFamily
    ]);
    return {
        minPrice: priceRange.minPrice || '-',
        maxPrice: priceRange.maxPrice || '-'
    };
};

;// ./src/hooks/paymentHooks/useGetFinalPriceLabel.ts



/**
 * @deprecated
 */ const useGetFinalPriceLabel = (param)=>{
    let { planFamily } = param;
    const { getDisplayedPlan } = useGetDisplayedPlan();
    const displayedPlan = getDisplayedPlan(planFamily);
    const discountedPriceLabel = (0,react.useMemo)(()=>{
        return (0,utils/* getDiscountedPriceLabel */.sl)({
            displayedPlan
        });
    }, [
        displayedPlan
    ]);
    const originalPriceLabel = (0,react.useMemo)(()=>{
        return (0,utils/* getOriginalPriceLabel */.Ph)({
            displayedPlan
        });
    }, [
        displayedPlan
    ]);
    const totalRecurringPriceLabel = (0,react.useMemo)(()=>{
        return (0,utils/* getTotalRecurringPriceLabel */.pX)({
            displayedPlan
        });
    }, [
        displayedPlan
    ]);
    return {
        discountedPrice: displayedPlan === null || displayedPlan === void 0 ? void 0 : displayedPlan.discounted_price,
        originalPriceLabel,
        discountedPriceLabel,
        finalPriceLabel: totalRecurringPriceLabel
    };
};

// EXTERNAL MODULE: ./src/hooks/userHooks/useGetUser.ts
var useGetUser = __webpack_require__(76345);
;// ./src/hooks/paymentHooks/useGetReferralsInfo.ts
/* __next_internal_client_entry_do_not_use__ useGetReferralsInfo auto */ 




const useGetReferralsInfo = ()=>{
    const { userId, isSubscribedTier } = (0,useGetUser/* useGetUser */.b)();
    const { data, isLoading } = (0,services/* useGetReferralInfoUserIdQuery */.NY)({
        user_id: userId
    }, {
        // The feature is WIP
        skip: true
    });
    const { isAppleOrAmpPayment, subscriptionInfo } = useSubscriptionInfo();
    const isEligibleForReferral = (0,react.useMemo)(()=>!isAppleOrAmpPayment && !(subscriptionInfo === null || subscriptionInfo === void 0 ? void 0 : subscriptionInfo.is_cancelled) && (subscriptionInfo === null || subscriptionInfo === void 0 ? void 0 : subscriptionInfo.plan_family) === models/* PlanFamily */.mX.max, [
        isAppleOrAmpPayment,
        subscriptionInfo
    ]);
    return (0,react.useMemo)(()=>({
            referralsInfo: data,
            url: (data === null || data === void 0 ? void 0 : data.url) || '',
            isReferralsLoading: isLoading,
            isEligibleForReferral
        }), [
        data,
        isLoading,
        isEligibleForReferral
    ]);
};

// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(36117);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/posthog-js/react/dist/esm/index.js
var esm = __webpack_require__(26302);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/isSameOrAfter.js
var isSameOrAfter = __webpack_require__(83405);
var isSameOrAfter_default = /*#__PURE__*/__webpack_require__.n(isSameOrAfter);
;// ./src/hooks/paymentHooks/useReferralControlState.ts
/* __next_internal_client_entry_do_not_use__ useReferralControlState auto */ 


const useReferralControlState = ()=>{
    const { referralModalLastShownAt, autoShownModalType } = (0,config/* useAppSelector */.GV)(store/* referralControlState */.km);
    return (0,react.useMemo)(()=>({
            referralModalLastShownAt,
            autoShownModalType
        }), [
        referralModalLastShownAt,
        autoShownModalType
    ]);
};

;// ./src/hooks/paymentHooks/useReferralControlActions.ts
/* __next_internal_client_entry_do_not_use__ useReferralControlActions auto */ 





dayjs_min_default().extend((isSameOrAfter_default()));
const useReferralControlActions = ()=>{
    const dispatch = (0,config/* useAppDispatch */.jL)();
    const { referralModalLastShownAt } = useReferralControlState();
    const onSetReferralModalLastShownAt = (0,react.useCallback)((isoStringOrNull)=>{
        dispatch((0,store/* setReferralModalLastShownAt */.ho)(isoStringOrNull));
    }, [
        dispatch
    ]);
    const onSetAutoShownModalType = (0,react.useCallback)((modalType)=>{
        dispatch((0,store/* setAutoShownModalType */.Y)(modalType));
    }, [
        dispatch
    ]);
    const onToggleReferralModal = (0,react.useCallback)((param)=>{
        let { show, modalType } = param;
        dispatch((0,store/* setIsShowReferralModal */.K)(show));
        dispatch((0,store/* setAutoShownModalType */.Y)(modalType !== null && modalType !== void 0 ? modalType : null));
    }, [
        dispatch
    ]);
    const triggerReferralModalIfNeeded = (0,react.useCallback)((param)=>{
        let { modalType } = param;
        const now = dayjs_min_default()();
        const today = now.startOf('day');
        const lastShown = referralModalLastShownAt ? dayjs_min_default()(referralModalLastShownAt).startOf('day') : null;
        const shownToday = lastShown ? lastShown.isSame(today, 'day') : false;
        if (shownToday) {
            return;
        }
        onToggleReferralModal({
            show: true,
            modalType
        });
    }, [
        onToggleReferralModal,
        referralModalLastShownAt
    ]);
    return (0,react.useMemo)(()=>({
            onSetReferralModalLastShownAt,
            onSetAutoShownModalType,
            onToggleReferralModal,
            triggerReferralModalIfNeeded
        }), [
        onSetReferralModalLastShownAt,
        onSetAutoShownModalType,
        onToggleReferralModal,
        triggerReferralModalIfNeeded
    ]);
};

;// ./src/hooks/paymentHooks/useReferralModalAfterSubscription.ts
/* __next_internal_client_entry_do_not_use__ useReferralModalAfterSubscription auto */ 







dayjs_min_default().extend((isSameOrAfter_default()));
const AFTER_SUBSCRIPTION_GAP_DAYS = 2;
const useReferralModalAfterSubscription = ()=>{
    const isReferralProgramEnabled = (0,esm/* useFeatureFlagEnabled */.Tp)('referralProgramFE');
    const { isEligibleForReferral } = useGetReferralsInfo();
    const { onToggleReferralModal } = useReferralControlActions();
    const { referralModalLastShownAt } = useReferralControlState();
    const { metadata, isUserDataLoading, tier_start_date } = (0,userHooks/* useGetUser */.be)();
    const { referral_shown_after_subscription } = metadata || {};
    const openedRef = (0,react.useRef)(false);
    (0,react.useEffect)(()=>{
        if (!isReferralProgramEnabled) {
            return;
        }
        if (openedRef.current || !isEligibleForReferral || isUserDataLoading) {
            return;
        }
        if (referral_shown_after_subscription === true) {
            return;
        }
        const startDate = tier_start_date ? dayjs_min_default()(tier_start_date).startOf('day') : null;
        if (!startDate || !startDate.isValid()) {
            return;
        }
        const now = dayjs_min_default()();
        const today = now.startOf('day');
        const hasReachedGap = today.diff(startDate, 'day') >= AFTER_SUBSCRIPTION_GAP_DAYS;
        if (!hasReachedGap) {
            return;
        }
        const lastShown = referralModalLastShownAt ? dayjs_min_default()(referralModalLastShownAt).startOf('day') : null;
        const shownToday = lastShown ? lastShown.isSame(today, 'day') : false;
        if (shownToday) {
            return;
        }
        openedRef.current = true;
        onToggleReferralModal({
            show: true,
            modalType: 'after-subscription'
        });
    }, [
        isReferralProgramEnabled,
        isUserDataLoading,
        isEligibleForReferral,
        tier_start_date,
        referralModalLastShownAt,
        referral_shown_after_subscription,
        onToggleReferralModal
    ]);
};

;// ./src/hooks/paymentHooks/useGetPlanVariant.ts


const useGetPlanVariant = (param)=>{
    let { planFamily } = param;
    const { getDisplayedPlan } = useGetDisplayedPlan();
    const displayedPlan = getDisplayedPlan(planFamily);
    const isNewVariant = constants/* NEW_PLANS_VARIANTS */.Ny.includes((displayedPlan === null || displayedPlan === void 0 ? void 0 : displayedPlan.variant) || '');
    return {
        planVariant: displayedPlan === null || displayedPlan === void 0 ? void 0 : displayedPlan.variant,
        isNewVariant
    };
};

// EXTERNAL MODULE: ./src/hooks/paymentHooks/useCreditsAccountInfo.ts
var useCreditsAccountInfo = __webpack_require__(70258);
;// ./src/hooks/paymentHooks/useCreditsAccountWithAutoPayInfo.tsx



const useCreditsAccountWithAutoPayInfo = ()=>{
    const { userId, isOpenTier, isFreeTier } = (0,userHooks/* useGetUser */.be)();
    const { data: creditAccountInfo, isLoading: isCreditAccountInfoLoading } = (0,services/* useGetCreditAccountInfoQuery */.cV)({
        user_id: userId
    }, {
        skip: isOpenTier || isFreeTier
    });
    return (0,react.useMemo)(()=>({
            creditAccountInfo,
            isCreditAccountInfoLoading: isCreditAccountInfoLoading
        }), [
        creditAccountInfo,
        isCreditAccountInfoLoading
    ]);
};

// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(20063);
;// ./src/hooks/paymentHooks/useUpgradeDowngradeParamsHandler.ts
/* __next_internal_client_entry_do_not_use__ useUpgradeDowngradeParams auto */ 




const useUpgradeDowngradeParams = ()=>{
    const searchParams = (0,navigation.useSearchParams)();
    const router = (0,navigation.useRouter)();
    const pathname = (0,navigation.usePathname)();
    const { isLegacyPlan } = useSubscriptionInfo();
    const keys = [
        'operation_type',
        'to_tier',
        'status'
    ];
    const params = Object.fromEntries(keys.map((key)=>[
            key,
            searchParams.get(key)
        ]));
    const { operation_type, to_tier, status } = params;
    (0,react.useEffect)(()=>{
        if (!!operation_type) {
            const tierName = to_tier ? (0,utils/* convertTierName */.d7)(to_tier) : to_tier;
            if (status === 'rejected') {
                dist/* toast */.oR.error('Consent approval is needed in the PayPal popup. Please try again and provide your consent.');
                router.replace(pathname);
                return;
            }
            if (operation_type === 'no_change') {
                if (status === 'scheduled' || status === 'successful') {
                    dist/* toast */.oR.success('Subscription updated');
                } else {
                    dist/* toast */.oR.error('Subscription update failed');
                }
                router.replace(pathname);
                return;
            }
            if (operation_type === 'upgrade') {
                if (status === 'successful') {
                    (0,dist/* toast */.oR)(isLegacyPlan ? 'Payment processing in progress' : "Upgrade to ".concat(tierName, " successful"));
                } else if (status === 'scheduled') {
                    (0,dist/* toast */.oR)('Account upgrade started');
                } else {
                    dist/* toast */.oR.error("Upgrade to ".concat(tierName, " failed"));
                }
                router.replace(pathname);
                return;
            }
            if (operation_type === 'downgrade') {
                if (status === 'scheduled') {
                    (0,dist/* toast */.oR)('Account downgrade started');
                } else {
                    dist/* toast */.oR.error('Account downgrade failed');
                }
                router.replace(pathname);
                return;
            }
            router.replace(pathname);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        status,
        to_tier,
        operation_type
    ]);
};

;// ./src/hooks/paymentHooks/index.ts
















// EXTERNAL MODULE: ./src/hooks/use-mobile.ts
var use_mobile = __webpack_require__(75409);
// EXTERNAL MODULE: ./src/hooks/interfaceHooks/index.ts + 2 modules
var interfaceHooks = __webpack_require__(76563);
;// ./src/hooks/usePortal.ts
/* __next_internal_client_entry_do_not_use__ usePortal auto */ 
const usePortal = (rootId)=>{
    const elRef = (0,react.useRef)(null);
    const [mounted, setMounted] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        setMounted(true);
    }, []);
    (0,react.useEffect)(()=>{
        if (!mounted) {
            return;
        }
        if (!elRef.current) {
            elRef.current = document.createElement('div');
        }
        const container = rootId ? document.getElementById(rootId) : document.body;
        if (!container || !elRef.current) {
            return;
        }
        container.appendChild(elRef.current);
        return ()=>{
            var _elRef_current;
            if (((_elRef_current = elRef.current) === null || _elRef_current === void 0 ? void 0 : _elRef_current.parentElement) === container) {
                container.removeChild(elRef.current);
            }
        };
    }, [
        mounted,
        rootId
    ]);
    if (!mounted) {
        return null;
    }
    return elRef.current;
};

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs + 1 modules
var rtk_query_modern = __webpack_require__(36317);
;// ./src/hooks/useEntitlements.ts
/* __next_internal_client_entry_do_not_use__ useEntitlements auto */ 





const availableIndividualTiers = [
    models/* UserTier */.Kx.superninja_standard,
    models/* UserTier */.Kx.superninja_pro,
    models/* UserTier */.Kx.superninja_ultra,
    models/* UserTier */.Kx.superninja_max
];
const availableBusinessTiers = [
    models/* UserTier */.Kx.business_superninja_pro,
    models/* UserTier */.Kx.business_superninja_ultra,
    models/* UserTier */.Kx.business_superninja_max
];
const useEntitlements = (param)=>{
    let { isBusiness, interval } = param;
    const { user_id } = (0,userHooks/* useGetUser */.be)();
    const { plans, isPlansLoading } = useSubscriptionPlans({
        group: isBusiness ? 'teams' : 'individual'
    });
    const planVariant = plans ? plans[0].variant : undefined;
    const canLoadData = !isPlansLoading && plans && (plans === null || plans === void 0 ? void 0 : plans.length) > 0 && !!planVariant;
    const dataArg = canLoadData ? {
        plan_variant: planVariant,
        user_id: user_id
    } : rtk_query_modern/* skipToken */.hT;
    const { data, isLoading, isFetching } = (0,services/* useGetEntitlementsListQuery */.kj)(dataArg);
    const sumLimits = (limits)=>{
        const values = Object.entries(limits).map((param)=>{
            let [, v] = param;
            var _v_value;
            return (_v_value = v === null || v === void 0 ? void 0 : v.value) !== null && _v_value !== void 0 ? _v_value : 0;
        });
        if (values.some((v)=>v === -1)) return -1;
        return values.reduce((acc, v)=>acc + v, 0);
    };
    var _data_entitlements;
    const entitlements = ((_data_entitlements = data === null || data === void 0 ? void 0 : data.entitlements) !== null && _data_entitlements !== void 0 ? _data_entitlements : []).filter((item)=>(isBusiness ? availableBusinessTiers : availableIndividualTiers).includes(item.tier)).filter((item)=>item.interval === interval).map((item)=>{
        const total = sumLimits(item.limits);
        return {
            ...item,
            limits: {
                ...item.limits,
                total: {
                    value: total
                }
            }
        };
    });
    return (0,react.useMemo)(()=>({
            entitlements,
            isLoading: isLoading || isFetching
        }), [
        entitlements,
        isLoading,
        isFetching
    ]);
};

;// ./src/hooks/useFeatureFlageWithEnable.tsx

const useFeatureFlagWithEnable = (param)=>{
    let { flagKey, enabled = false, defaultVariant = 'control' } = param;
    const posthog = usePostHog();
    var _posthog_getFeatureFlag;
    const variant = enabled ? (_posthog_getFeatureFlag = posthog === null || posthog === void 0 ? void 0 : posthog.getFeatureFlag(flagKey)) !== null && _posthog_getFeatureFlag !== void 0 ? _posthog_getFeatureFlag : defaultVariant : defaultVariant;
    return variant;
};

// EXTERNAL MODULE: ./src/store/slices/teamsSlice.ts
var teamsSlice = __webpack_require__(45290);
;// ./src/hooks/teamsHooks/useInviteUsersModal.ts
/* __next_internal_client_entry_do_not_use__ useInviteUsersModal auto */ 


const useInviteUsersModal = ()=>{
    const { isOpenInviteUsersModal, isFirstInviteUsersRequest } = (0,config/* useAppSelector */.GV)(teamsSlice/* teamsState */.EQ);
    const dispatch = (0,config/* useAppDispatch */.jL)();
    const onChangeIsOpenInviteUsersModal = (0,react.useCallback)((value, isFirst)=>{
        dispatch((0,teamsSlice/* setIsOpenInviteUsersModal */.Lm)(value));
        dispatch((0,teamsSlice/* setIsFirstInviteUsersRequest */.hF)(isFirst || false));
    }, [
        dispatch
    ]);
    return (0,react.useMemo)(()=>({
            isFirstInviteUsersRequest,
            isOpenInviteUsersModal,
            onChangeIsOpenInviteUsersModal
        }), [
        isFirstInviteUsersRequest,
        isOpenInviteUsersModal,
        onChangeIsOpenInviteUsersModal
    ]);
};

;// ./src/hooks/teamsHooks/usePurchaseSeatsModal.ts
/* __next_internal_client_entry_do_not_use__ usePurchaseSeatsModal auto */ 


const usePurchaseSeatsModal = ()=>{
    const { isOpenPurchaseSeatsModal } = (0,config/* useAppSelector */.GV)(teamsSlice/* teamsState */.EQ);
    const dispatch = (0,config/* useAppDispatch */.jL)();
    const onClosePurchaseSeatsModal = (0,react.useCallback)(()=>{
        dispatch((0,teamsSlice/* setIsOpenPurchaseSeatsModal */.p$)(false));
    }, [
        dispatch
    ]);
    const onOpenPurchaseSeatsModal = (0,react.useCallback)(()=>{
        dispatch((0,teamsSlice/* setIsOpenPurchaseSeatsModal */.p$)(true));
    }, [
        dispatch
    ]);
    return (0,react.useMemo)(()=>({
            isOpenPurchaseSeatsModal,
            onClosePurchaseSeatsModal,
            onOpenPurchaseSeatsModal
        }), [
        isOpenPurchaseSeatsModal,
        onClosePurchaseSeatsModal,
        onOpenPurchaseSeatsModal
    ]);
};

;// ./src/hooks/teamsHooks/useSelectedNumberOfSeats.ts
/* __next_internal_client_entry_do_not_use__ useSelectedNumberOfSeats auto */ 


const useSelectedNumberOfSeats = ()=>{
    const { selectedNumberOfSeatsToBuy } = useAppSelector(teamsState);
    const dispatch = useAppDispatch();
    const onChangeSelectedNumberOfSeatsToBuy = useCallback((value)=>{
        dispatch(setSelectedNumberOfSeatsToBuy(value));
    }, [
        dispatch
    ]);
    return useMemo(()=>({
            selectedNumberOfSeatsToBuy,
            onChangeSelectedNumberOfSeatsToBuy
        }), [
        selectedNumberOfSeatsToBuy,
        onChangeSelectedNumberOfSeatsToBuy
    ]);
};

// EXTERNAL MODULE: ./src/gen/tasks-api/models/index.ts + 77 modules
var tasks_api_models = __webpack_require__(55360);
// EXTERNAL MODULE: ./src/constants/teams.ts
var teams = __webpack_require__(29044);
;// ./src/hooks/teamsHooks/useCheckIfUserInvitedToTeam.ts
/* __next_internal_client_entry_do_not_use__ useCheckIfUserInvitedToTeam auto */ 







const useCheckIfUserInvitedToTeam = ()=>{
    const appUser = (0,userHooks/* useGetUser */.be)();
    const { isSubscribedTier } = appUser;
    const { onChangeIsOpenJoinWorkspaceModal } = useJoinWorkspaceModal();
    const invitationToken = localStorage.getItem(constants/* INVITATION_TOKEN */.APt);
    const pathname = (0,navigation.usePathname)();
    const { isOwner, teamInfo, isTeamInfoLoading, isTeamInfoFetching } = (0,userHooks/* useTeamInfo */.JA)();
    const { isAppleOrAmpPayment, subscriptionInfo, isSubscriptionInfoFetching, isSubscriptionInfoLoading } = useSubscriptionInfo();
    const { onChangeIsOpenUnableJoinTeamModal } = useUnableJoinTeamModal();
    const { invitationInfo, onAcceptInvite, invitationError, isInvitationInfoLoading } = (0,userHooks/* useInvitationInfo */.Vn)({
        token: invitationToken
    });
    const { onOpenInvitationDeniedAccessModal } = useInvitationAccessDeniedModal();
    const [isInviteLoading, setIsInviteLoading] = (0,react.useState)(false);
    const handleAccept = async ()=>{
        try {
            await onAcceptInvite();
        } catch (e) {
            main/* datadogLogs */.yf.logger.error('Failed to accept invite', e);
        } finally{
            setIsInviteLoading(false);
        }
    };
    (0,react.useEffect)(()=>{
        if (!!invitationToken && pathname !== constants/* AppRoutes */.SbO.INVITE) {
            setIsInviteLoading(true);
        }
    }, [
        invitationToken,
        pathname
    ]);
    (0,react.useEffect)(()=>{
        if (!!invitationError) {
            setIsInviteLoading(false);
            localStorage.removeItem(constants/* INVITATION_TOKEN */.APt);
        }
    }, [
        invitationError
    ]);
    (0,react.useEffect)(()=>{
        if (!!invitationToken && !!invitationInfo && !invitationError && !isInvitationInfoLoading && pathname !== constants/* AppRoutes */.SbO.INVITE) {
            if (invitationInfo.status === tasks_api_models/* InvitationStatus */.sT.accepted) {
                setIsInviteLoading(false);
                (0,dist/* toast */.oR)(teams/* ACCEPTED_INVITE_MESSAGE_TEXT */.w);
                localStorage.removeItem(constants/* INVITATION_TOKEN */.APt);
            }
            if (invitationInfo.status === tasks_api_models/* InvitationStatus */.sT.cancelled || invitationInfo.status === tasks_api_models/* InvitationStatus */.sT.expired) {
                setIsInviteLoading(false);
                onOpenInvitationDeniedAccessModal((invitationInfo === null || invitationInfo === void 0 ? void 0 : invitationInfo.team_name) || '', (invitationInfo === null || invitationInfo === void 0 ? void 0 : invitationInfo.user_email) || '');
                localStorage.removeItem(constants/* INVITATION_TOKEN */.APt);
            }
            if (invitationInfo.status === tasks_api_models/* InvitationStatus */.sT.active) {
                var _invitationInfo_user_email, _appUser_email;
                if (((_invitationInfo_user_email = invitationInfo.user_email) === null || _invitationInfo_user_email === void 0 ? void 0 : _invitationInfo_user_email.toLowerCase()) === ((_appUser_email = appUser.email) === null || _appUser_email === void 0 ? void 0 : _appUser_email.toLowerCase())) {
                    if (isSubscribedTier) {
                        setIsInviteLoading(false);
                        if (!isTeamInfoLoading && !isTeamInfoFetching && !isSubscriptionInfoLoading && !isSubscriptionInfoFetching) {
                            if (!!(subscriptionInfo === null || subscriptionInfo === void 0 ? void 0 : subscriptionInfo.is_cancelled)) {
                                handleAccept();
                                return;
                            }
                            if (!!teamInfo) {
                                if (isOwner && ((teamInfo === null || teamInfo === void 0 ? void 0 : teamInfo.num_seats_assigned) || 0) > 0 || isAppleOrAmpPayment) {
                                    onChangeIsOpenUnableJoinTeamModal(true);
                                } else {
                                    onChangeIsOpenJoinWorkspaceModal(true);
                                }
                            } else {
                                if (isAppleOrAmpPayment) {
                                    onChangeIsOpenUnableJoinTeamModal(true);
                                } else {
                                    onChangeIsOpenJoinWorkspaceModal(true);
                                }
                            }
                        }
                    } else {
                        handleAccept();
                    }
                } else {
                    localStorage.removeItem(constants/* INVITATION_TOKEN */.APt);
                    setIsInviteLoading(false);
                }
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        invitationToken,
        invitationInfo,
        appUser,
        isSubscribedTier,
        invitationError,
        isInvitationInfoLoading,
        pathname,
        teamInfo,
        isTeamInfoLoading,
        isTeamInfoFetching,
        isAppleOrAmpPayment,
        subscriptionInfo,
        isSubscriptionInfoLoading,
        isSubscriptionInfoFetching
    ]);
    return (0,react.useMemo)(()=>({
            isInviteLoading
        }), [
        isInviteLoading
    ]);
};

;// ./src/hooks/teamsHooks/useUnableJoinTeamModal.ts
/* __next_internal_client_entry_do_not_use__ useUnableJoinTeamModal auto */ 


const useUnableJoinTeamModal = ()=>{
    const { isOpenUnableJoinTeamModal } = (0,config/* useAppSelector */.GV)(teamsSlice/* teamsState */.EQ);
    const dispatch = (0,config/* useAppDispatch */.jL)();
    const onChangeIsOpenUnableJoinTeamModal = (0,react.useCallback)((value)=>{
        dispatch((0,teamsSlice/* setIsOpenUnableJoinTeamModal */.mv)(value));
    }, [
        dispatch
    ]);
    return (0,react.useMemo)(()=>({
            isOpenUnableJoinTeamModal,
            onChangeIsOpenUnableJoinTeamModal
        }), [
        isOpenUnableJoinTeamModal,
        onChangeIsOpenUnableJoinTeamModal
    ]);
};

;// ./src/hooks/teamsHooks/useJoinWorkspaceModal.ts
/* __next_internal_client_entry_do_not_use__ useJoinWorkspaceModal auto */ 


const useJoinWorkspaceModal = ()=>{
    const { isOpenJoinWorkspaceModal } = (0,config/* useAppSelector */.GV)(teamsSlice/* teamsState */.EQ);
    const dispatch = (0,config/* useAppDispatch */.jL)();
    const onChangeIsOpenJoinWorkspaceModal = (0,react.useCallback)((value)=>{
        dispatch((0,teamsSlice/* setIsOpenJoinWorkspaceModal */.vb)(value));
    }, [
        dispatch
    ]);
    return (0,react.useMemo)(()=>({
            isOpenJoinWorkspaceModal,
            onChangeIsOpenJoinWorkspaceModal
        }), [
        isOpenJoinWorkspaceModal,
        onChangeIsOpenJoinWorkspaceModal
    ]);
};

;// ./src/hooks/teamsHooks/useInvitationAccessDeniedModal.ts
/* __next_internal_client_entry_do_not_use__ useInvitationAccessDeniedModal auto */ 


const useInvitationAccessDeniedModal = ()=>{
    const { invitationAccessDeniedModal } = (0,config/* useAppSelector */.GV)(teamsSlice/* teamsState */.EQ);
    const dispatch = (0,config/* useAppDispatch */.jL)();
    const onCloseInvitationDeniedAccessModal = (0,react.useCallback)(()=>{
        dispatch((0,teamsSlice/* setInvitationAccessDeniedModalState */.fs)({
            isOpen: false,
            teamName: '',
            teamOwner: ''
        }));
    }, [
        dispatch
    ]);
    const onOpenInvitationDeniedAccessModal = (0,react.useCallback)((teamName, teamOwner)=>{
        dispatch((0,teamsSlice/* setInvitationAccessDeniedModalState */.fs)({
            isOpen: true,
            teamName,
            teamOwner
        }));
    }, [
        dispatch
    ]);
    return (0,react.useMemo)(()=>({
            isInvitationAccessDeniedOpen: invitationAccessDeniedModal.isOpen,
            invitationAccessDeniedModalTeamName: invitationAccessDeniedModal.teamName,
            invitationAccessDeniedModalTeamOwner: invitationAccessDeniedModal.teamOwner,
            onCloseInvitationDeniedAccessModal,
            onOpenInvitationDeniedAccessModal
        }), [
        invitationAccessDeniedModal,
        onCloseInvitationDeniedAccessModal,
        onOpenInvitationDeniedAccessModal
    ]);
};

;// ./src/hooks/teamsHooks/useAcceptInviteWithDifferentAccountModal.ts
/* __next_internal_client_entry_do_not_use__ useAcceptInviteWithDifferentAccountModal auto */ 


const useAcceptInviteWithDifferentAccountModal = ()=>{
    const { isOpenAcceptInviteWithDifferentAccountModal } = (0,config/* useAppSelector */.GV)(teamsSlice/* teamsState */.EQ);
    const dispatch = (0,config/* useAppDispatch */.jL)();
    const onChangeIsOpenAcceptInviteWithDifferentAccountModal = (0,react.useCallback)((value)=>{
        dispatch((0,teamsSlice/* setIsOpenAcceptInviteWithDifferentAccountModal */.Jd)(value));
    }, [
        dispatch
    ]);
    return (0,react.useMemo)(()=>({
            isOpenAcceptInviteWithDifferentAccountModal,
            onChangeIsOpenAcceptInviteWithDifferentAccountModal
        }), [
        isOpenAcceptInviteWithDifferentAccountModal,
        onChangeIsOpenAcceptInviteWithDifferentAccountModal
    ]);
};

;// ./src/hooks/teamsHooks/index.ts










;// ./src/hooks/index.ts
















/***/ }),

/***/ 75409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useIsMobile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);

const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    const [isMobile, setIsMobile] = react__WEBPACK_IMPORTED_MODULE_0__.useState(undefined);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        // Check if we're in a browser environment with matchMedia support
        if ( true && window.matchMedia) {
            const mql = window.matchMedia("(max-width: ".concat(MOBILE_BREAKPOINT - 1, "px)"));
            const onChange = ()=>{
                setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
            };
            mql.addEventListener('change', onChange);
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
            return ()=>mql.removeEventListener('change', onChange);
        }
    }, []);
    return isMobile;
}


/***/ }),

/***/ 76345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ useGetUser)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12115);
/* harmony import */ var _components_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19016);
/* harmony import */ var _store_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57403);
/* harmony import */ var _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73262);
/* harmony import */ var _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55360);
/* __next_internal_client_entry_do_not_use__ useGetUser auto */ 





// This hook can be extended by any of values from ApiUser
const useGetUser = ()=>{
    const { user } = (0,_components_AuthProvider__WEBPACK_IMPORTED_MODULE_1__/* .useAuth */ .A)();
    const { data: userData, isLoading: isUserDataLoading } = (0,_store_services__WEBPACK_IMPORTED_MODULE_2__/* .useGetUserByIdQuery */ .$f)(user, {
        skip: !user
    });
    _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_3__/* .datadogLogs */ .yf.setUserProperty('tier_id', userData === null || userData === void 0 ? void 0 : userData.tier_id);
    const { user_segment, email, first_name, last_name, metadata, superninja_tier_id } = userData || {};
    const isMaxTier = superninja_tier_id === _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_4__/* .AccountSubscriptionTier */ .J0.max || superninja_tier_id === _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_4__/* .AccountSubscriptionTier */ .J0.business_max;
    const isTeamsTier = superninja_tier_id === _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_4__/* .AccountSubscriptionTier */ .J0.business_pro || superninja_tier_id === _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_4__/* .AccountSubscriptionTier */ .J0.business_ultra || superninja_tier_id === _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_4__/* .AccountSubscriptionTier */ .J0.business_max;
    const isSubscribedTier = superninja_tier_id === _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_4__/* .AccountSubscriptionTier */ .J0.starter || superninja_tier_id === _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_4__/* .AccountSubscriptionTier */ .J0.standard || superninja_tier_id === _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_4__/* .AccountSubscriptionTier */ .J0.pro || superninja_tier_id === _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_4__/* .AccountSubscriptionTier */ .J0.ultra || superninja_tier_id === _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_4__/* .AccountSubscriptionTier */ .J0.max || superninja_tier_id === _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_4__/* .AccountSubscriptionTier */ .J0.business_pro || superninja_tier_id === _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_4__/* .AccountSubscriptionTier */ .J0.business_ultra || superninja_tier_id === _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_4__/* .AccountSubscriptionTier */ .J0.business_max || superninja_tier_id === _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_4__/* .AccountSubscriptionTier */ .J0.internal_unlimited;
    const isEducationUser = user_segment === _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_4__/* .UserSegment */ .Pq.education;
    const isFreeTier = superninja_tier_id === _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_4__/* .AccountSubscriptionTier */ .J0.free;
    const isStarterTier = superninja_tier_id === _gen_tasks_api_models__WEBPACK_IMPORTED_MODULE_4__/* .AccountSubscriptionTier */ .J0.starter;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            ...userData,
            userId: user,
            email,
            firstName: first_name,
            lastName: last_name,
            metadata: metadata,
            snTierId: superninja_tier_id,
            isMaxTier,
            isUserDataLoading: isUserDataLoading,
            isTeamsTier,
            isOpenTier: !user,
            isFreeTier,
            isSubscribedTier,
            isEducationUser,
            isStarterTier
        }), [
        userData,
        user,
        email,
        first_name,
        last_name,
        metadata,
        isMaxTier,
        isUserDataLoading,
        isTeamsTier,
        isEducationUser,
        isSubscribedTier,
        isFreeTier,
        superninja_tier_id,
        isStarterTier
    ]);
};


/***/ }),

/***/ 76563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* reexport */ useInterfaceControlActions),
  x: () => (/* reexport */ useInterfaceControlState)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/store/index.ts + 2 modules
var store = __webpack_require__(82678);
// EXTERNAL MODULE: ./src/store/config.ts + 1 modules
var config = __webpack_require__(33057);
;// ./src/hooks/interfaceHooks/useInterfaceControlState.ts
/* __next_internal_client_entry_do_not_use__ useInterfaceControlState auto */ 


const useInterfaceControlState = ()=>{
    const { isShowReferralModal, isShowAddOnModal, isShowLimitReachedModal, isShowFileWarningBubble, limitReachedModalType, isShowDiscountBanner, isShowScheduleLimitModal, isShowSupportTicketModal, rateLimitExceededBucketType } = (0,config/* useAppSelector */.GV)(store/* interfaceControlState */.gQ);
    return (0,react.useMemo)(()=>({
            isShowReferralModal,
            isShowAddOnModal,
            isShowLimitReachedModal,
            isShowFileWarningBubble,
            limitReachedModalType,
            isShowDiscountBanner,
            isShowScheduleLimitModal,
            isShowSupportTicketModal,
            rateLimitExceededBucketType
        }), [
        isShowReferralModal,
        isShowAddOnModal,
        isShowLimitReachedModal,
        isShowFileWarningBubble,
        limitReachedModalType,
        isShowDiscountBanner,
        isShowScheduleLimitModal,
        isShowSupportTicketModal,
        rateLimitExceededBucketType
    ]);
};

// EXTERNAL MODULE: ./src/store/slices/interfaceControlSlice.ts
var interfaceControlSlice = __webpack_require__(10040);
;// ./src/hooks/interfaceHooks/useInterfaceControlActions.ts




const useInterfaceControlActions = ()=>{
    const dispatch = (0,config/* useAppDispatch */.jL)();
    const onToggleAddOnModal = (0,react.useCallback)((open)=>{
        dispatch((0,store/* setIsShowAddOnModal */.Xb)(open));
    }, [
        dispatch
    ]);
    const onToggleLimitReachedModal = (0,react.useCallback)((param)=>{
        let { open, modalType, limitPeriod } = param;
        dispatch((0,store/* setIsShowLimitReachedModal */.y3)(open));
        const updatedModalType = open ? modalType || null : null;
        dispatch((0,store/* setLimitReachedModalType */.nl)(updatedModalType));
        dispatch((0,interfaceControlSlice/* setRateLimitExceededBucketType */.JN)(limitPeriod));
    }, [
        dispatch
    ]);
    const onCloseLimitReachedModal = (0,react.useCallback)(()=>{
        dispatch((0,store/* setIsShowLimitReachedModal */.y3)(false));
    }, [
        dispatch
    ]);
    const triggerFileWarningBubble = (0,react.useCallback)(()=>{
        dispatch((0,store/* setIsShowFileWarningBubble */.sS)(true));
        // Show notification for 10 seconds
        setTimeout(()=>{
            dispatch((0,store/* setIsShowFileWarningBubble */.sS)(false));
        }, 10 * 1000);
    }, [
        dispatch
    ]);
    const onToggleDiscountBanner = (0,react.useCallback)((open)=>{
        dispatch((0,store/* setIsShowDiscountBanner */.Fr)(open));
    }, [
        dispatch
    ]);
    const onToggleScheduleLimitModal = (0,react.useCallback)((open)=>{
        dispatch((0,store/* setIsShowScheduleLimitModal */.P4)(open));
    }, [
        dispatch
    ]);
    const onToggleSupportTicketModal = (0,react.useCallback)((open)=>{
        dispatch((0,store/* setIsShowSupportTicketModal */.wW)(open));
    }, [
        dispatch
    ]);
    return (0,react.useMemo)(()=>({
            onToggleAddOnModal,
            onToggleLimitReachedModal,
            triggerFileWarningBubble,
            onToggleDiscountBanner,
            onCloseLimitReachedModal,
            onToggleScheduleLimitModal,
            onToggleSupportTicketModal
        }), [
        onToggleAddOnModal,
        onToggleLimitReachedModal,
        triggerFileWarningBubble,
        onToggleDiscountBanner,
        onCloseLimitReachedModal,
        onToggleScheduleLimitModal,
        onToggleSupportTicketModal
    ]);
};

;// ./src/hooks/interfaceHooks/index.ts




/***/ }),

/***/ 82678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  gV: () => (/* reexport */ agentExecutionModeSlice/* agentExecutionModeState */.gV),
  gQ: () => (/* reexport */ interfaceControlSlice/* interfaceControlState */.gQ),
  WN: () => (/* reexport */ loadingOverlaySlice/* loadingOverlayState */.WN),
  nG: () => (/* reexport */ paymentControlSlice/* paymentControlState */.nG),
  XP: () => (/* reexport */ promptCommandSlice/* promptCommandState */.XP),
  km: () => (/* reexport */ referralControlSlice/* referralControlState */.km),
  Ac: () => (/* reexport */ promptCommandSlice/* resetCurrentCommand */.Ac),
  OB: () => (/* reexport */ selectedExternalFileSlice/* selectedExternalFileState */.OB),
  Y: () => (/* reexport */ referralControlSlice/* setAutoShownModalType */.Y),
  r9: () => (/* reexport */ promptCommandSlice/* setCurrentCommand */.r9),
  mi: () => (/* reexport */ agentExecutionModeSlice/* setExecutionModeSet */.mi),
  TD: () => (/* reexport */ agentExecutionModeSlice/* setIsExecutionModeSettled */.TD),
  l9: () => (/* reexport */ loadingOverlaySlice/* setIsLoadingOverlayOpen */.l9),
  QZ: () => (/* reexport */ paymentControlSlice/* setIsPaymentModalOpen */.QZ),
  Xb: () => (/* reexport */ interfaceControlSlice/* setIsShowAddOnModal */.Xb),
  Fr: () => (/* reexport */ interfaceControlSlice/* setIsShowDiscountBanner */.Fr),
  sS: () => (/* reexport */ interfaceControlSlice/* setIsShowFileWarningBubble */.sS),
  y3: () => (/* reexport */ interfaceControlSlice/* setIsShowLimitReachedModal */.y3),
  K: () => (/* reexport */ interfaceControlSlice/* setIsShowReferralModal */.K),
  P4: () => (/* reexport */ interfaceControlSlice/* setIsShowScheduleLimitModal */.P4),
  wW: () => (/* reexport */ interfaceControlSlice/* setIsShowSupportTicketModal */.wW),
  nl: () => (/* reexport */ interfaceControlSlice/* setLimitReachedModalType */.nl),
  IW: () => (/* reexport */ paymentControlSlice/* setPaymentModalTitle */.IW),
  ki: () => (/* reexport */ paymentControlSlice/* setPaymentUpgradeOptionsModal */.ki),
  ho: () => (/* reexport */ referralControlSlice/* setReferralModalLastShownAt */.ho),
  R: () => (/* reexport */ paymentControlSlice/* setRequestUsageTableOpen */.R),
  cE: () => (/* reexport */ agentExecutionModeSlice/* setSelectedDeepCoderMode */.cE),
  hR: () => (/* reexport */ agentExecutionModeSlice/* setSelectedDeepResearchMode */.Ac),
  zM: () => (/* reexport */ selectedExternalFileSlice/* setSelectedExternalFile */.zM),
  GJ: () => (/* reexport */ paymentControlSlice/* setSelectedFamily */.GJ),
  E$: () => (/* reexport */ agentExecutionModeSlice/* setSelectedGeneralAgentMode */.E$),
  Bx: () => (/* reexport */ paymentControlSlice/* setSelectedPaymentTab */.Bx),
  vw: () => (/* reexport */ paymentControlSlice/* setSelectedPeriod */.vw),
  e_: () => (/* reexport */ paymentControlSlice/* setSelectedPlanByFamily */.e_),
  jx: () => (/* reexport */ sidePanelSlice/* sidePanelState */.jx),
  y7: () => (/* reexport */ updateDefaultExecutionMode)
});

// UNUSED EXPORTS: closePanel, computerPanelState, fileDirectoryPanelState, resetInterfaceControl, resetPaymentControl, selectCurrentCommand, setActivePanelType, setIsComputerPanelOpen, setIsFileDirectoryPanelOpen

// EXTERNAL MODULE: ./src/store/slices/computerPanelSlice.ts
var computerPanelSlice = __webpack_require__(48935);
// EXTERNAL MODULE: ./src/store/slices/fileDirectoryPanelSlice.ts
var fileDirectoryPanelSlice = __webpack_require__(18447);
// EXTERNAL MODULE: ./src/store/slices/sidePanelSlice.ts
var sidePanelSlice = __webpack_require__(59677);
// EXTERNAL MODULE: ./src/store/slices/selectedExternalFileSlice.ts
var selectedExternalFileSlice = __webpack_require__(76764);
// EXTERNAL MODULE: ./src/store/slices/loadingOverlaySlice.ts
var loadingOverlaySlice = __webpack_require__(58036);
// EXTERNAL MODULE: ./src/store/slices/agentExecutionModeSlice.ts
var agentExecutionModeSlice = __webpack_require__(12850);
// EXTERNAL MODULE: ./src/store/slices/promptCommandSlice.ts
var promptCommandSlice = __webpack_require__(69213);
// EXTERNAL MODULE: ./src/store/slices/paymentControlSlice.ts
var paymentControlSlice = __webpack_require__(78393);
// EXTERNAL MODULE: ./src/store/slices/interfaceControlSlice.ts
var interfaceControlSlice = __webpack_require__(10040);
// EXTERNAL MODULE: ./src/store/slices/referralControlSlice.ts
var referralControlSlice = __webpack_require__(950);
// EXTERNAL MODULE: ./src/utils/index.ts + 9 modules
var utils = __webpack_require__(19482);
;// ./src/store/thunks/executionModeThunk.ts


const updateDefaultExecutionMode = (snTierId)=>(dispatch, getState)=>{
        const defaultModeSet = (0,utils/* getDefaultModeSetByTier */.eC)(snTierId);
        dispatch((0,agentExecutionModeSlice/* setExecutionModeSet */.mi)(defaultModeSet));
    };

;// ./src/store/thunks/index.ts


;// ./src/store/index.ts
























/***/ }),

/***/ 95520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  be: () => (/* reexport */ useGetUser/* useGetUser */.b),
  Vn: () => (/* reexport */ useInvitationInfo),
  pV: () => (/* reexport */ useSupportTicket),
  JA: () => (/* reexport */ useTeamInfo),
  Qc: () => (/* reexport */ useUpdateUser)
});

// EXTERNAL MODULE: ./src/hooks/userHooks/useGetUser.ts
var useGetUser = __webpack_require__(76345);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./src/components/AuthProvider.tsx
var AuthProvider = __webpack_require__(19016);
// EXTERNAL MODULE: ./src/store/services/index.ts + 9 modules
var services = __webpack_require__(57403);
// EXTERNAL MODULE: ./node_modules/sonner/dist/index.mjs
var dist = __webpack_require__(18720);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
;// ./src/hooks/userHooks/useUpdateUser.ts






const useUpdateUser = ()=>{
    //WIP: we need to get it from Redux store
    const { user } = (0,AuthProvider/* useAuth */.A)();
    const { metadata } = (0,useGetUser/* useGetUser */.b)();
    const [updateUserMutation, { isLoading }] = (0,services/* useUpdateUserMutation */.H7)();
    const updateUser = (0,react.useCallback)(async (param)=>{
        let { data, showSuccessToast, notificationText } = param;
        try {
            await updateUserMutation({
                id: user,
                body: data
            }).unwrap();
            if (!showSuccessToast) {
                return;
            }
            // WIP: we should skip multiple-rendering !toast.isActive(TOAST_ID)
            dist/* toast */.oR.success(notificationText || constants/* COMMON_SUCCESS_TEXT */.IU6);
        } catch (error) {
            dist/* toast */.oR.error(constants/* COMMON_ERROR_TEXT */.N4C);
        }
    }, [
        updateUserMutation,
        user
    ]);
    const updateUserMetadata = (0,react.useCallback)(async (updatedMetadata)=>{
        await updateUser({
            data: {
                metadata: {
                    ...metadata || {},
                    ...updatedMetadata
                }
            }
        });
    }, [
        metadata,
        updateUser
    ]);
    return (0,react.useMemo)(()=>({
            updateUser,
            updateUserMetadata,
            isUpdateUserLoading: isLoading
        }), [
        updateUser,
        updateUserMetadata,
        isLoading
    ]);
};

// EXTERNAL MODULE: ./src/types/index.ts + 2 modules
var types = __webpack_require__(37893);
;// ./src/hooks/userHooks/useTeamInfo.ts
/* __next_internal_client_entry_do_not_use__ useTeamInfo auto */ 



const useTeamInfo = ()=>{
    const { isTeamsTier, userId, isUserDataLoading } = (0,useGetUser/* useGetUser */.b)();
    const { data: teamInfo, isLoading: isTeamInfoLoading, isFetching: isTeamInfoFetching } = (0,services/* useGetTeamByUserIdQuery */.Mu)({
        user_id: userId
    }, {
        skip: !userId || !isTeamsTier || isUserDataLoading
    });
    return (0,react.useMemo)(()=>{
        var _teamInfo_seat, _teamInfo_seat1, _teamInfo_seat2;
        return {
            teamInfo: (teamInfo === null || teamInfo === void 0 ? void 0 : teamInfo.team) || null,
            seatInfo: (teamInfo === null || teamInfo === void 0 ? void 0 : teamInfo.seat) || null,
            isTeamInfoLoading,
            isTeamInfoFetching,
            isOwner: (teamInfo === null || teamInfo === void 0 ? void 0 : (_teamInfo_seat = teamInfo.seat) === null || _teamInfo_seat === void 0 ? void 0 : _teamInfo_seat.role) === types/* SeatRole */.Qf.OWNER,
            isAdmin: (teamInfo === null || teamInfo === void 0 ? void 0 : (_teamInfo_seat1 = teamInfo.seat) === null || _teamInfo_seat1 === void 0 ? void 0 : _teamInfo_seat1.role) === types/* SeatRole */.Qf.ADMIN,
            isMember: (teamInfo === null || teamInfo === void 0 ? void 0 : (_teamInfo_seat2 = teamInfo.seat) === null || _teamInfo_seat2 === void 0 ? void 0 : _teamInfo_seat2.role) === types/* SeatRole */.Qf.MEMBER
        };
    }, [
        teamInfo,
        isTeamInfoLoading,
        isTeamInfoFetching
    ]);
};

// EXTERNAL MODULE: ./src/store/config.ts + 1 modules
var config = __webpack_require__(33057);
// EXTERNAL MODULE: ./src/hooks/index.ts + 39 modules
var hooks = __webpack_require__(71203);
// EXTERNAL MODULE: ./src/utils/index.ts + 9 modules
var utils = __webpack_require__(19482);
;// ./src/hooks/userHooks/useInvitationInfo.ts
/* __next_internal_client_entry_do_not_use__ useInvitationInfo auto */ 






const useInvitationInfo = (param)=>{
    let { token } = param;
    const { userId, tier_id } = (0,hooks/* useGetUser */.be)();
    const dispatch = (0,config/* useAppDispatch */.jL)();
    const [acceptInvite, { isLoading: isAcceptInviteLoading }] = (0,services/* useAcceptInviteMutation */.cg)();
    const { data: invitationInfo, isLoading, isFetching, error } = (0,services/* useGetTeamByInvitationTokenQuery */.sv)({
        token: token || '',
        user_id: userId
    }, {
        skip: !token || !userId
    });
    const handleAcceptInvite = (0,react.useCallback)(async ()=>{
        try {
            await acceptInvite({
                user_id: userId,
                token: token || '',
                team_id: (invitationInfo === null || invitationInfo === void 0 ? void 0 : invitationInfo.team_id) || '',
                seat_id: (invitationInfo === null || invitationInfo === void 0 ? void 0 : invitationInfo.seat_id) || ''
            }).unwrap();
            if ((0,utils/* defineIsTeamsTier */.y)(tier_id)) {
                dispatch(services/* teamsApi */.Fv.util.invalidateTags([
                    services/* TeamsTags */.kn.TeamByUserId
                ]));
            }
        } catch (e) {
            dist/* toast */.oR.error('Something went wrong');
        } finally{
            localStorage.removeItem(constants/* INVITATION_TOKEN */.APt);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        userId,
        token,
        invitationInfo,
        acceptInvite,
        tier_id
    ]);
    return (0,react.useMemo)(()=>({
            invitationInfo,
            isInvitationInfoLoading: isLoading || isFetching,
            onAcceptInvite: handleAcceptInvite,
            invitationError: error,
            isAcceptInviteLoading
        }), [
        invitationInfo,
        isLoading,
        handleAcceptInvite,
        isFetching,
        error,
        isAcceptInviteLoading
    ]);
};

// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useMutation.js + 1 modules
var useMutation = __webpack_require__(80549);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(53455);
// EXTERNAL MODULE: ./src/lib/orval/custom-instance.ts
var custom_instance = __webpack_require__(37010);
;// ./src/gen/sn-api/users/users.gen.ts
/**
 * Generated by orval v7.11.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */ 

/**
 * @summary Create Support Ticket
 */ const createSupportTicketApiV1UsersUserIdSupportTicketsPost = (userId, supportTicket, options, signal)=>{
    return (0,custom_instance/* customInstance */.T)({
        url: "https://super-agent-api.beta.myninja.ai/api/v1/users/".concat(userId, "/support-tickets"),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: supportTicket,
        signal
    }, options);
};
const getCreateSupportTicketApiV1UsersUserIdSupportTicketsPostMutationOptions = (options)=>{
    const mutationKey = [
        'createSupportTicketApiV1UsersUserIdSupportTicketsPost'
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
        return createSupportTicketApiV1UsersUserIdSupportTicketsPost(userId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Create Support Ticket
 */ const useCreateSupportTicketApiV1UsersUserIdSupportTicketsPost = (options, queryClient)=>{
    const mutationOptions = getCreateSupportTicketApiV1UsersUserIdSupportTicketsPostMutationOptions(options);
    return (0,useMutation/* useMutation */.n)(mutationOptions, queryClient);
};
/**
 * @summary Get Support Tickets
 */ const getSupportTicketsApiV1UsersSupportTicketsGet = (options, signal)=>{
    return (0,custom_instance/* customInstance */.T)({
        url: "https://super-agent-api.beta.myninja.ai/api/v1/users/support-tickets",
        method: 'GET',
        signal
    }, options);
};
const getGetSupportTicketsApiV1UsersSupportTicketsGetQueryKey = ()=>{
    return [
        "https://super-agent-api.beta.myninja.ai/api/v1/users/support-tickets"
    ];
};
const getGetSupportTicketsApiV1UsersSupportTicketsGetInfiniteQueryOptions = (options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetSupportTicketsApiV1UsersSupportTicketsGetQueryKey();
    const queryFn = (param)=>{
        let { signal } = param;
        return getSupportTicketsApiV1UsersSupportTicketsGet(requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary Get Support Tickets
 */ function useGetSupportTicketsApiV1UsersSupportTicketsGetInfinite(options, queryClient) {
    const queryOptions = getGetSupportTicketsApiV1UsersSupportTicketsGetInfiniteQueryOptions(options);
    const query = useInfiniteQuery(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getGetSupportTicketsApiV1UsersSupportTicketsGetQueryOptions = (options)=>{
    const { query: queryOptions, request: requestOptions } = options !== null && options !== void 0 ? options : {};
    var _queryOptions_queryKey;
    const queryKey = (_queryOptions_queryKey = queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.queryKey) !== null && _queryOptions_queryKey !== void 0 ? _queryOptions_queryKey : getGetSupportTicketsApiV1UsersSupportTicketsGetQueryKey();
    const queryFn = (param)=>{
        let { signal } = param;
        return getSupportTicketsApiV1UsersSupportTicketsGet(requestOptions, signal);
    };
    return {
        queryKey,
        queryFn,
        ...queryOptions
    };
};
/**
 * @summary Get Support Tickets
 */ function useGetSupportTicketsApiV1UsersSupportTicketsGet(options, queryClient) {
    const queryOptions = getGetSupportTicketsApiV1UsersSupportTicketsGetQueryOptions(options);
    const query = (0,useQuery/* useQuery */.I)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Create Support Pylon Ticket
 */ const createSupportPylonTicketApiV1UsersUserIdSupportPylonTicketsPost = (userId, supportPylonTicket, options, signal)=>{
    return (0,custom_instance/* customInstance */.T)({
        url: "https://super-agent-api.beta.myninja.ai/api/v1/users/".concat(userId, "/support-pylon-tickets"),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: supportPylonTicket,
        signal
    }, options);
};
const getCreateSupportPylonTicketApiV1UsersUserIdSupportPylonTicketsPostMutationOptions = (options)=>{
    const mutationKey = [
        'createSupportPylonTicketApiV1UsersUserIdSupportPylonTicketsPost'
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
        return createSupportPylonTicketApiV1UsersUserIdSupportPylonTicketsPost(userId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Create Support Pylon Ticket
 */ const useCreateSupportPylonTicketApiV1UsersUserIdSupportPylonTicketsPost = (options, queryClient)=>{
    const mutationOptions = getCreateSupportPylonTicketApiV1UsersUserIdSupportPylonTicketsPostMutationOptions(options);
    return (0,useMutation/* useMutation */.n)(mutationOptions, queryClient);
};
/**
 * @summary Create Pylon Attachment
 */ const createPylonAttachmentApiV1UsersUserIdSupportPylonTicketsUploadAttachmentPost = (userId, bodyCreatePylonAttachmentApiV1UsersUserIdSupportPylonTicketsUploadAttachmentPost, options, signal)=>{
    const formData = new FormData();
    formData.append("file", bodyCreatePylonAttachmentApiV1UsersUserIdSupportPylonTicketsUploadAttachmentPost.file);
    return (0,custom_instance/* customInstance */.T)({
        url: "https://super-agent-api.beta.myninja.ai/api/v1/users/".concat(userId, "/support-pylon-tickets/upload-attachment"),
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: formData,
        signal
    }, options);
};
const getCreatePylonAttachmentApiV1UsersUserIdSupportPylonTicketsUploadAttachmentPostMutationOptions = (options)=>{
    const mutationKey = [
        'createPylonAttachmentApiV1UsersUserIdSupportPylonTicketsUploadAttachmentPost'
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
        return createPylonAttachmentApiV1UsersUserIdSupportPylonTicketsUploadAttachmentPost(userId, data, requestOptions);
    };
    return {
        mutationFn,
        ...mutationOptions
    };
};
/**
 * @summary Create Pylon Attachment
 */ const useCreatePylonAttachmentApiV1UsersUserIdSupportPylonTicketsUploadAttachmentPost = (options, queryClient)=>{
    const mutationOptions = getCreatePylonAttachmentApiV1UsersUserIdSupportPylonTicketsUploadAttachmentPostMutationOptions(options);
    return (0,useMutation/* useMutation */.n)(mutationOptions, queryClient);
};

// EXTERNAL MODULE: ./node_modules/posthog-js/react/dist/esm/index.js
var esm = __webpack_require__(26302);
;// ./src/hooks/userHooks/useSupportTicket.ts
/* __next_internal_client_entry_do_not_use__ useSupportTicket auto */ 



const useSupportTicket = ()=>{
    const isPylonMigrationEnabled = (0,esm/* useFeatureFlagEnabled */.Tp)('pylon-migration');
    const { userId } = (0,useGetUser/* useGetUser */.b)();
    const queryResult = useGetSupportTicketsApiV1UsersSupportTicketsGet({
        query: {
            enabled: !!userId && isPylonMigrationEnabled
        }
    });
    const { mutateAsync: submitZendeskSupportTicket, isPending: isZendeskCreating } = useCreateSupportTicketApiV1UsersUserIdSupportTicketsPost();
    const { mutateAsync: submitPylonSupportTicket, isPending: isPylonCreating } = useCreateSupportPylonTicketApiV1UsersUserIdSupportPylonTicketsPost();
    const { mutateAsync: uploadPylonAttachment, isPending: isUploadingAttachment } = useCreatePylonAttachmentApiV1UsersUserIdSupportPylonTicketsUploadAttachmentPost();
    const submitSupportTicket = (0,react.useCallback)(async (payload)=>{
        if (isPylonMigrationEnabled) {
            return await submitPylonSupportTicket({
                userId,
                data: payload
            });
        } else {
            return await submitZendeskSupportTicket({
                userId,
                data: payload
            });
        }
    }, [
        isPylonMigrationEnabled,
        submitPylonSupportTicket,
        submitZendeskSupportTicket,
        userId
    ]);
    const uploadAttachment = (0,react.useCallback)(async (file)=>{
        if (!isPylonMigrationEnabled) {
            throw new Error('Pylon migration is not enabled');
        }
        return await uploadPylonAttachment({
            userId,
            data: {
                file
            }
        });
    }, [
        isPylonMigrationEnabled,
        uploadPylonAttachment,
        userId
    ]);
    return (0,react.useMemo)(()=>({
            ticketFields: queryResult.data,
            isLoading: queryResult.isPending,
            submitSupportTicket: submitSupportTicket,
            uploadAttachment: uploadAttachment,
            isCreating: isPylonMigrationEnabled ? isPylonCreating : isZendeskCreating,
            isUploadingAttachment: isUploadingAttachment
        }), [
        isPylonCreating,
        isPylonMigrationEnabled,
        isZendeskCreating,
        isUploadingAttachment,
        queryResult,
        submitSupportTicket,
        uploadAttachment
    ]);
};

;// ./src/hooks/userHooks/index.ts







/***/ })

}]);
//# sourceMappingURL=5520-a9e9a24684fea5e9.js.map