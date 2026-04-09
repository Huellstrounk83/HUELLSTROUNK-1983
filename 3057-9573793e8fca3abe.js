"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3057],{

/***/ 950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   Y: () => (/* binding */ setAutoShownModalType),
/* harmony export */   ho: () => (/* binding */ setReferralModalLastShownAt),
/* harmony export */   km: () => (/* binding */ referralControlState)
/* harmony export */ });
/* unused harmony export referralControlSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26286);

const initialState = {
    referralModalLastShownAt: null,
    autoShownModalType: null
};
const referralControlSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__/* .createSlice */ .Z0)({
    name: 'referralControl',
    initialState,
    reducers: {
        setReferralModalLastShownAt: (state, param)=>{
            let { payload } = param;
            state.referralModalLastShownAt = payload;
        },
        setAutoShownModalType: (state, param)=>{
            let { payload } = param;
            state.autoShownModalType = payload;
        }
    }
});
const referralControlState = (state)=>state.referralControl;
const { setReferralModalLastShownAt, setAutoShownModalType } = referralControlSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (referralControlSlice.reducer);


/***/ }),

/***/ 4020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SJ: () => (/* binding */ projectApi),
  AQ: () => (/* binding */ useCreateProjectMutation),
  P4: () => (/* binding */ useDeleteProjectMutation),
  zM: () => (/* binding */ useGetProjectByIdQuery),
  su: () => (/* binding */ useGetProjectsQuery),
  vH: () => (/* binding */ useLazyGetProjectByIdQuery),
  rP: () => (/* binding */ useUpdateProjectMutation)
});

// UNUSED EXPORTS: ProjectTags

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs
var rtk_query_react_modern = __webpack_require__(61321);
// EXTERNAL MODULE: ./src/store/services/config.ts
var config = __webpack_require__(4225);
;// ./src/utils/api.ts
const mapDbProjectToProject = (data)=>{
    return {
        id: data.project_id,
        name: data.name || '',
        description: data.description || '',
        accountId: data.account_id,
        isPublic: data.is_public || false,
        isImportant: data.is_important || false,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
        userCreated: data.user_created || false,
        files: data.files || {},
        status: data.status
    };
};

// EXTERNAL MODULE: ./node_modules/@datadog/browser-logs/esm/entries/main.js + 109 modules
var main = __webpack_require__(73262);
;// ./src/store/services/projectApi.ts




var ProjectTags = /*#__PURE__*/ function(ProjectTags) {
    ProjectTags["Project"] = "Project";
    ProjectTags["Projects"] = "Projects";
    return ProjectTags;
}({});
const projectApi = (0,rtk_query_react_modern/* createApi */.xP)({
    reducerPath: 'projectApi',
    baseQuery: config/* baseSuperNinjaQueryWithRetry */.DC,
    tagTypes: [
        "Project",
        "Projects"
    ],
    endpoints: (builder)=>({
            createProject: builder.mutation({
                query: (request)=>({
                        url: '/projects',
                        method: 'POST',
                        body: request,
                        responseHandler: async (response)=>{
                            if (response.status === 200) {
                                const data = await response.json();
                                return mapDbProjectToProject(data);
                            }
                            return Promise.reject(new Error("Failed to create project: ".concat(response.status)));
                        }
                    }),
                onQueryStarted: async (arg, param)=>{
                    let { dispatch, queryFulfilled } = param;
                    try {
                        const { data: newProject } = await queryFulfilled;
                        dispatch(projectApi.util.updateQueryData('getProjects', undefined, (draft)=>{
                            draft.push(newProject);
                        }));
                    } catch (error) {
                        main/* datadogLogs */.yf.logger.error('Failed to create project in cache:', error);
                    }
                },
                invalidatesTags: [
                    "Project"
                ]
            }),
            getProjectById: builder.query({
                query: (id)=>({
                        url: "/projects/".concat(id),
                        method: 'GET',
                        responseHandler: async (response)=>{
                            ;
                            if (response.status === 200) {
                                const data = await response.json();
                                return mapDbProjectToProject(data);
                            }
                            return Promise.reject(new Error("Failed to fetch project: ".concat(response.status)));
                        }
                    }),
                providesTags: (result, error, id)=>{
                    return [
                        {
                            type: "Project",
                            id
                        }
                    ];
                }
            }),
            updateProject: builder.mutation({
                query: (param)=>{
                    let { id, changes } = param;
                    return {
                        url: "/projects/".concat(id),
                        method: 'PATCH',
                        body: changes,
                        responseHandler: async (response)=>{
                            if (response.status === 200) {
                                const data = await response.json();
                                return mapDbProjectToProject(data);
                            }
                            return Promise.reject(new Error("Failed to update project: ".concat(response.status)));
                        }
                    };
                },
                onQueryStarted: async (arg, param)=>{
                    let { dispatch, queryFulfilled } = param;
                    try {
                        const { data: updatedProject } = await queryFulfilled;
                        dispatch(projectApi.util.updateQueryData('getProjects', undefined, (draft)=>{
                            const index = draft.findIndex((project)=>project.id === updatedProject.id);
                            if (index !== -1) {
                                draft[index] = updatedProject;
                            }
                        }));
                    } catch (error) {
                        main/* datadogLogs */.yf.logger.error('Failed to update project in cache:', error);
                    }
                },
                invalidatesTags: [
                    "Project"
                ]
            }),
            getProjects: builder.query({
                query: ()=>({
                        url: '/projects',
                        method: 'GET',
                        responseHandler: async (response)=>{
                            if (response.status === 200) {
                                const data = await response.json();
                                return data.projects.map((project)=>mapDbProjectToProject(project));
                            }
                            return Promise.reject(new Error("Failed to fetch projects: ".concat(response.status)));
                        }
                    }),
                providesTags: (result, error)=>{
                    return [
                        {
                            type: "Projects",
                            id: 'LIST'
                        }
                    ];
                }
            }),
            deleteProject: builder.mutation({
                query: (id)=>({
                        url: "/projects/".concat(id),
                        method: 'DELETE'
                    }),
                onQueryStarted: async (id, param)=>{
                    let { dispatch, queryFulfilled } = param;
                    try {
                        await queryFulfilled;
                        dispatch(projectApi.util.updateQueryData('getProjects', undefined, (draft)=>{
                            const index = draft.findIndex((project)=>project.id === id);
                            if (index !== -1) {
                                draft.splice(index, 1);
                            }
                        }));
                    } catch (error) {
                        main/* datadogLogs */.yf.logger.error('Failed to delete project in cache:', error);
                    }
                },
                invalidatesTags: [
                    "Project"
                ]
            })
        })
});
const { useCreateProjectMutation, useUpdateProjectMutation, useGetProjectByIdQuery, useLazyGetProjectByIdQuery, useGetProjectsQuery, useDeleteProjectMutation } = projectApi;


/***/ }),

/***/ 4225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DC: () => (/* binding */ baseSuperNinjaQueryWithRetry),
/* harmony export */   FC: () => (/* binding */ baseUploadS3Query),
/* harmony export */   Hs: () => (/* binding */ baseSuperNinjaQuery),
/* harmony export */   Ok: () => (/* binding */ baseMyNinjaQueryWithRetry),
/* harmony export */   bW: () => (/* binding */ baseWalletQueryWithRetry),
/* harmony export */   nM: () => (/* binding */ baseContentQueryWithRetry)
/* harmony export */ });
/* unused harmony exports getBaseHeaders, baseBFFQueryWithRetry */
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42917);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36317);
/* harmony import */ var _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73262);
/* harmony import */ var _lib_envs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68276);
/* harmony import */ var _lib_utils_amplify_client_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87214);





const MAX_RETRIES = 3;
const NEXT_PUBLIC_MY_NINJA_API_URL = "".concat(_lib_envs__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_PUBLIC_TASKS_API_URL */ .KE, "/v2");
const paramsSerializer = (params)=>{
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach((param)=>{
        let [key, value] = param;
        if (value === undefined) {
            return;
        }
        if (Array.isArray(value)) {
            value.forEach((item)=>searchParams.append(key, String(item)));
        } else {
            searchParams.append(key, String(value));
        }
    });
    return searchParams.toString();
};
const getBaseHeaders = async (headers)=>{
    var _session_tokens;
    const session = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_3__/* .fetchAuthSession */ .$)();
    const accessToken = session === null || session === void 0 ? void 0 : (_session_tokens = session.tokens) === null || _session_tokens === void 0 ? void 0 : _session_tokens.accessToken;
    if (!accessToken) {
        _datadog_browser_logs__WEBPACK_IMPORTED_MODULE_0__/* .datadogLogs */ .yf.logger.warn('getBaseHeaders: missing access token');
        throw new Error('Auth token must not be empty');
    }
    headers.set('Authorization', "Bearer ".concat(accessToken.toString()));
    headers.set('Content-Type', 'application/json');
    return headers;
};
const createRawBaseQuery = (baseUrl, options)=>{
    return (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__/* .fetchBaseQuery */ .cw)({
        baseUrl,
        ...(options === null || options === void 0 ? void 0 : options.paramsSerializer) && {
            paramsSerializer: options.paramsSerializer
        }
    });
};
const createAsyncBaseQuery = function(baseUrl) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const rawBaseQuery = createRawBaseQuery(baseUrl, {
        paramsSerializer: options.paramsSerializer
    });
    return async (args, api, extraOptions)=>{
        const headers = new Headers(typeof args === 'string' ? undefined : args.headers);
        try {
            if (options.getHeaders) {
                const customHeaders = await options.getHeaders();
                if (customHeaders) {
                    Object.entries(customHeaders).forEach((param)=>{
                        let [key, value] = param;
                        headers.set(key, value);
                    });
                }
            }
            const finalHeaders = await getBaseHeaders(headers);
            const modifiedArgs = typeof args === 'string' ? {
                url: args,
                headers: finalHeaders
            } : {
                ...args,
                headers: finalHeaders
            };
            return rawBaseQuery(modifiedArgs, api, extraOptions);
        } catch (err) {
            return {
                error: {
                    status: 'FETCH_ERROR',
                    error: err.message
                }
            };
        }
    };
};
const baseSuperNinjaQuery = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__/* .retry */ .L5)(createAsyncBaseQuery(_lib_envs__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_PUBLIC_BACKEND_URL */ .xg), {
    maxRetries: 0
});
const baseSuperNinjaQueryWithRetry = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__/* .retry */ .L5)(createAsyncBaseQuery(_lib_envs__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_PUBLIC_BACKEND_URL */ .xg), {
    maxRetries: MAX_RETRIES
});
const baseMyNinjaQueryWithRetry = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__/* .retry */ .L5)(createAsyncBaseQuery(NEXT_PUBLIC_MY_NINJA_API_URL), {
    maxRetries: MAX_RETRIES
});
const baseBFFQueryWithRetry = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__/* .retry */ .L5)(createAsyncBaseQuery(_lib_envs__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_PUBLIC_BFF_URL */ .Nj), {
    maxRetries: MAX_RETRIES
});
const baseContentQueryWithRetry = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__/* .retry */ .L5)(createAsyncBaseQuery(_lib_envs__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_PUBLIC_CONTENT_API_URL */ .XQ, {
    getHeaders: async ()=>{
        const user = await (0,_lib_utils_amplify_client_utils__WEBPACK_IMPORTED_MODULE_2__/* .getUserFromAmplifySession */ .K)();
        return {
            'X-User-ID': (user === null || user === void 0 ? void 0 : user.ninja_user_id) || ''
        };
    }
}), {
    maxRetries: MAX_RETRIES
});
const baseUploadS3Query = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__/* .retry */ .L5)((0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__/* .fetchBaseQuery */ .cw)({}), {
    maxRetries: 0
});
const baseWalletQueryWithRetry = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__/* .retry */ .L5)(createAsyncBaseQuery(_lib_envs__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_PUBLIC_WALLET_URL */ .a5, {
    paramsSerializer
}), {
    maxRetries: MAX_RETRIES
});


/***/ }),

/***/ 10040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   Fr: () => (/* binding */ setIsShowDiscountBanner),
/* harmony export */   JN: () => (/* binding */ setRateLimitExceededBucketType),
/* harmony export */   K: () => (/* binding */ setIsShowReferralModal),
/* harmony export */   P4: () => (/* binding */ setIsShowScheduleLimitModal),
/* harmony export */   Xb: () => (/* binding */ setIsShowAddOnModal),
/* harmony export */   gQ: () => (/* binding */ interfaceControlState),
/* harmony export */   nl: () => (/* binding */ setLimitReachedModalType),
/* harmony export */   sS: () => (/* binding */ setIsShowFileWarningBubble),
/* harmony export */   wW: () => (/* binding */ setIsShowSupportTicketModal),
/* harmony export */   y3: () => (/* binding */ setIsShowLimitReachedModal)
/* harmony export */ });
/* unused harmony exports interfaceControlSlice, resetInterfaceControl */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26286);

const initialState = {
    isShowReferralModal: false,
    isShowAddOnModal: false,
    isShowLimitReachedModal: false,
    limitReachedModalType: null,
    isShowFileWarningBubble: false,
    isShowDiscountBanner: true,
    rateLimitExceededBucketType: null,
    isShowScheduleLimitModal: false,
    isShowSupportTicketModal: false
};
const interfaceControlSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__/* .createSlice */ .Z0)({
    name: 'interfaceControl',
    initialState,
    reducers: {
        setIsShowReferralModal: (state, param)=>{
            let { payload } = param;
            state.isShowReferralModal = payload !== null && payload !== void 0 ? payload : !state.isShowReferralModal;
        },
        setIsShowAddOnModal: (state, param)=>{
            let { payload } = param;
            state.isShowAddOnModal = payload !== null && payload !== void 0 ? payload : !state.isShowAddOnModal;
        },
        setIsShowLimitReachedModal: (state, param)=>{
            let { payload } = param;
            state.isShowLimitReachedModal = payload !== null && payload !== void 0 ? payload : !state.isShowLimitReachedModal;
        },
        setLimitReachedModalType: (state, param)=>{
            let { payload } = param;
            state.limitReachedModalType = payload;
        },
        setRateLimitExceededBucketType: (state, param)=>{
            let { payload } = param;
            state.rateLimitExceededBucketType = payload;
        },
        setIsShowFileWarningBubble: (state, param)=>{
            let { payload } = param;
            state.isShowFileWarningBubble = payload;
        },
        setIsShowDiscountBanner: (state, param)=>{
            let { payload } = param;
            state.isShowDiscountBanner = payload !== null && payload !== void 0 ? payload : !state.isShowDiscountBanner;
        },
        setIsShowScheduleLimitModal: (state, param)=>{
            let { payload } = param;
            state.isShowScheduleLimitModal = payload !== null && payload !== void 0 ? payload : !state.isShowScheduleLimitModal;
        },
        setIsShowSupportTicketModal: (state, param)=>{
            let { payload } = param;
            state.isShowSupportTicketModal = payload !== null && payload !== void 0 ? payload : !state.isShowSupportTicketModal;
        },
        resetInterfaceControl: ()=>initialState
    }
});
const interfaceControlState = (state)=>state.interfaceControl;
const { setIsShowReferralModal, setIsShowAddOnModal, setIsShowLimitReachedModal, setIsShowFileWarningBubble, setLimitReachedModalType, setRateLimitExceededBucketType, setIsShowDiscountBanner, setIsShowScheduleLimitModal, setIsShowSupportTicketModal, resetInterfaceControl } = interfaceControlSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interfaceControlSlice.reducer);


/***/ }),

/***/ 12850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ac: () => (/* binding */ setSelectedDeepResearchMode),
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   E$: () => (/* binding */ setSelectedGeneralAgentMode),
/* harmony export */   TD: () => (/* binding */ setIsExecutionModeSettled),
/* harmony export */   cE: () => (/* binding */ setSelectedDeepCoderMode),
/* harmony export */   gV: () => (/* binding */ agentExecutionModeState),
/* harmony export */   mi: () => (/* binding */ setExecutionModeSet)
/* harmony export */ });
/* unused harmony export agentExecutionModeSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26286);
/* harmony import */ var _gen_sn_api_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61330);


const initialState = {
    selectedGeneralAgentMode: _gen_sn_api_models__WEBPACK_IMPORTED_MODULE_0__/* .AgentExecutionMode */ .Ff.complex,
    selectedDeepCoderMode: _gen_sn_api_models__WEBPACK_IMPORTED_MODULE_0__/* .AgentExecutionMode */ .Ff.fast,
    selectedDeepResearchMode: _gen_sn_api_models__WEBPACK_IMPORTED_MODULE_0__/* .AgentExecutionMode */ .Ff.fast,
    isSettled: false
};
const agentExecutionModeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__/* .createSlice */ .Z0)({
    name: 'agentExecutionMode',
    initialState,
    reducers: {
        setSelectedGeneralAgentMode: (state, action)=>{
            state.selectedGeneralAgentMode = action.payload;
        },
        setSelectedDeepCoderMode: (state, action)=>{
            state.selectedDeepCoderMode = action.payload;
        },
        setSelectedDeepResearchMode: (state, action)=>{
            state.selectedDeepResearchMode = action.payload;
        },
        setIsExecutionModeSettled: (state, action)=>{
            state.isSettled = action.payload;
        },
        setExecutionModeSet: (state, param)=>{
            let { payload } = param;
            state.selectedGeneralAgentMode = payload.general;
            state.selectedDeepCoderMode = payload.deepCoder;
            state.selectedDeepResearchMode = payload.deepResearch;
        }
    }
});
const agentExecutionModeState = (state)=>state.agentExecutionMode;
const { setSelectedGeneralAgentMode, setSelectedDeepCoderMode, setSelectedDeepResearchMode, setIsExecutionModeSettled, setExecutionModeSet } = agentExecutionModeSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (agentExecutionModeSlice.reducer);


/***/ }),

/***/ 18447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports fileDirectoryPanelSlice, fileDirectoryPanelState, setIsFileDirectoryPanelOpen */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26286);

const initialState = {
    isOpen: false
};
const fileDirectoryPanelSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__/* .createSlice */ .Z0)({
    name: 'fileDirectoryPanel',
    initialState,
    reducers: {
        setIsFileDirectoryPanelOpen: (state, action)=>{
            var _action_payload;
            state.isOpen = (_action_payload = action.payload) !== null && _action_payload !== void 0 ? _action_payload : !state.isOpen;
        }
    }
});
const fileDirectoryPanelState = (state)=>state.fileDirectoryPanel;
const { setIsFileDirectoryPanelOpen } = fileDirectoryPanelSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fileDirectoryPanelSlice.reducer);


/***/ }),

/***/ 29044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Zt: () => (/* binding */ InviteUsersFileInputId),
/* harmony export */   mq: () => (/* binding */ LIMIT_NUMBER_OF_INVITED_EMAILS),
/* harmony export */   nv: () => (/* binding */ SEATS_PAGE_LIMIT),
/* harmony export */   w: () => (/* binding */ ACCEPTED_INVITE_MESSAGE_TEXT)
/* harmony export */ });
/* unused harmony exports TEAM_ACTIVE_MEMBERS_COLUMNS, TEAM_PENDING_MEMBERS_COLUMNS */
const TEAM_ACTIVE_MEMBERS_COLUMNS = [
    {
        header: 'Name',
        key: 'name'
    },
    {
        header: 'Email',
        key: 'email'
    },
    {
        header: 'Role',
        key: 'role'
    },
    {
        header: '',
        key: 'actions'
    }
];
const TEAM_PENDING_MEMBERS_COLUMNS = [
    {
        header: 'Email',
        key: 'email'
    },
    {
        header: '',
        key: 'actions'
    }
];
const SEATS_PAGE_LIMIT = 15;
const InviteUsersFileInputId = 'inviteEmailsFile';
const LIMIT_NUMBER_OF_INVITED_EMAILS = 1000;
const ACCEPTED_INVITE_MESSAGE_TEXT = 'You have already accepted this invitation';


/***/ }),

/***/ 33057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  qj: () => (/* binding */ persistor),
  M_: () => (/* binding */ store),
  jL: () => (/* binding */ useAppDispatch),
  GV: () => (/* binding */ useAppSelector)
});

// UNUSED EXPORTS: makeStore, wrapper

// EXTERNAL MODULE: ./node_modules/redux/dist/redux.mjs
var redux = __webpack_require__(81093);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs + 1 modules
var redux_toolkit_modern = __webpack_require__(26286);
// EXTERNAL MODULE: ./node_modules/next-redux-wrapper/es6/index.js + 1 modules
var es6 = __webpack_require__(58473);
// EXTERNAL MODULE: ./node_modules/redux-persist/lib/storage/createWebStorage.js
var createWebStorage = __webpack_require__(6957);
;// ./src/store/storage.ts

const createNoopStorage = ()=>{
    return {
        getItem (_key) {
            return Promise.resolve(null);
        },
        setItem (_key, value) {
            return Promise.resolve(value);
        },
        removeItem (_key) {
            return Promise.resolve();
        }
    };
};
const storage =  true ? (0,createWebStorage/* default */.A)('local') : 0;
/* harmony default export */ const store_storage = (storage);

// EXTERNAL MODULE: ./node_modules/redux-persist/es/index.js + 7 modules
var es = __webpack_require__(19051);
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
// EXTERNAL MODULE: ./src/store/slices/referralControlSlice.ts
var referralControlSlice = __webpack_require__(950);
// EXTERNAL MODULE: ./src/store/slices/interfaceControlSlice.ts
var interfaceControlSlice = __webpack_require__(10040);
// EXTERNAL MODULE: ./src/store/slices/teamsSlice.ts
var teamsSlice = __webpack_require__(45290);
// EXTERNAL MODULE: ./src/lib/config.ts
var config = __webpack_require__(46830);
// EXTERNAL MODULE: ./src/store/slices/logoutSlice.ts
var logoutSlice = __webpack_require__(87518);
// EXTERNAL MODULE: ./node_modules/react-redux/dist/react-redux.mjs
var react_redux = __webpack_require__(1213);
// EXTERNAL MODULE: ./src/store/services/index.ts + 9 modules
var services = __webpack_require__(57403);
;// ./src/store/config.ts



















/**
 * Please use React Query. (read migration section in Readme.md)
 * UPD: to move away from RTK query we have to do the whole migration at once. Until we have two different api services, the cache handling will be a messy.
 * Sine only one api is written by RQ, it's reasonable to come back to RTK query for now.
 */ const apiReducers = {
    [services/* memoryApi */.A2.reducerPath]: services/* memoryApi */.A2.reducer,
    [services/* userApi */.i$.reducerPath]: services/* userApi */.i$.reducer,
    [services/* sandboxApi */.yI.reducerPath]: services/* sandboxApi */.yI.reducer,
    [services/* sandboxApiWithoutRetry */.yz.reducerPath]: services/* sandboxApiWithoutRetry */.yz.reducer,
    [services/* contentApi */.eD.reducerPath]: services/* contentApi */.eD.reducer,
    [services/* uploadS3Api */.MU.reducerPath]: services/* uploadS3Api */.MU.reducer,
    [services/* projectApi */.SJ.reducerPath]: services/* projectApi */.SJ.reducer,
    [services/* teamsApi */.Fv.reducerPath]: services/* teamsApi */.Fv.reducer,
    [services/* walletApi */.y2.reducerPath]: services/* walletApi */.y2.reducer,
    [services/* entitlementsApi */.Xe.reducerPath]: services/* entitlementsApi */.Xe.reducer,
    [services/* accountEntitlementsApi */.QL.reducerPath]: services/* accountEntitlementsApi */.QL.reducer,
    [services/* threadApi */.vI.reducerPath]: services/* threadApi */.vI.reducer
};
// TODO(olha): typescript returns type errors, it will be fixed as P0.5. the new apiReducers value is a temporarily solution
// const apiReducers = apiServices.reduce((acc, api) => {
//   acc[api.reducerPath] = api.reducer;
//   return acc;
// }, {} as ApiReducersMap) satisfies ApiReducersMap;
const staticReducers = {
    computerPanel: computerPanelSlice/* default */.Ay,
    fileDirectoryPanel: fileDirectoryPanelSlice/* default */.Ay,
    sidePanel: sidePanelSlice/* default */.Ay,
    selectedExternalFile: selectedExternalFileSlice/* default */.Ay,
    loadingOverlay: loadingOverlaySlice/* default */.Ay,
    agentExecutionMode: agentExecutionModeSlice/* default */.Ay,
    promptCommand: promptCommandSlice/* default */.Ay,
    paymentControl: paymentControlSlice/* default */.Ay,
    interfaceControl: interfaceControlSlice/* default */.Ay,
    referralControl: referralControlSlice/* default */.Ay,
    teams: teamsSlice/* default */.Ay
};
const appReducer = (0,redux/* combineReducers */.HY)({
    ...staticReducers,
    ...apiReducers
});
const rootReducer = (state, action)=>{
    if (action.type === logoutSlice/* logout */.ri.type) {
        store_storage.removeItem('persist:root');
        state = undefined;
    }
    return appReducer(state, action);
};
const persistConfig = {
    key: 'root',
    storage: store_storage,
    whitelist: [
        'referralControl',
        'agentExecutionMode'
    ]
};
const persistedReducer = (0,es/* persistReducer */.rL)(persistConfig, rootReducer);
const makeStore = ()=>(0,redux_toolkit_modern/* configureStore */.U1)({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [
                        es/* FLUSH */.ZM,
                        es/* REHYDRATE */.r2,
                        es/* PAUSE */.Hz,
                        es/* PERSIST */.DY,
                        es/* PURGE */.Cq,
                        es/* REGISTER */.eY
                    ]
                }
            }).concat(...services/* apiServices */.T2.map((api)=>api.middleware)),
        devTools: config/* isBetaEnv */.kU
    });
const store = makeStore();
const persistor = (0,es/* persistStore */.GM)(store);
const useAppDispatch = ()=>(0,react_redux/* useDispatch */.wA)();
const useAppSelector = react_redux/* useSelector */.d4;
const wrapper = (0,es6/* createWrapper */.uG)(makeStore);


/***/ }),

/***/ 41319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ X_NINJA_CONVERSATION_ID_HEADER),
/* harmony export */   u: () => (/* binding */ X_NINJA_USER_ID_HEADER)
/* harmony export */ });
const X_NINJA_USER_ID_HEADER = 'x-ninja-user-id';
const X_NINJA_CONVERSATION_ID_HEADER = 'x-ninja-conversation-id';


/***/ }),

/***/ 45290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   EQ: () => (/* binding */ teamsState),
/* harmony export */   Jd: () => (/* binding */ setIsOpenAcceptInviteWithDifferentAccountModal),
/* harmony export */   Lm: () => (/* binding */ setIsOpenInviteUsersModal),
/* harmony export */   fs: () => (/* binding */ setInvitationAccessDeniedModalState),
/* harmony export */   hF: () => (/* binding */ setIsFirstInviteUsersRequest),
/* harmony export */   mv: () => (/* binding */ setIsOpenUnableJoinTeamModal),
/* harmony export */   p$: () => (/* binding */ setIsOpenPurchaseSeatsModal),
/* harmony export */   vb: () => (/* binding */ setIsOpenJoinWorkspaceModal)
/* harmony export */ });
/* unused harmony exports teamsSlice, setSelectedNumberOfSeatsToBuy, setIsOpenRequestUpgradeModal, setIsOpenAddSeatsCheckout, setIsGetEnterpriseModalOpen */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26286);

const initialState = {
    isOpenInviteUsersModal: false,
    isOpenJoinWorkspaceModal: false,
    selectedNumberOfSeatsToBuy: undefined,
    isFirstInviteUsersRequest: false,
    invitationAccessDeniedModal: {
        isOpen: false,
        teamName: '',
        teamOwner: ''
    },
    isOpenRequestUpgradeModal: false,
    isOpenPurchaseSeatsModal: false,
    isOpenAddSeatsCheckout: false,
    isGetEnterpriseModalOpen: false,
    isOpenUnableJoinTeamModal: false,
    isOpenAcceptInviteWithDifferentAccountModal: false
};
const teamsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__/* .createSlice */ .Z0)({
    name: 'teams',
    initialState,
    reducers: {
        setIsOpenInviteUsersModal: (state, param)=>{
            let { payload } = param;
            state.isOpenInviteUsersModal = payload;
        },
        setIsOpenUnableJoinTeamModal: (state, param)=>{
            let { payload } = param;
            state.isOpenUnableJoinTeamModal = payload;
        },
        setIsOpenRequestUpgradeModal: (state, param)=>{
            let { payload } = param;
            state.isOpenRequestUpgradeModal = payload;
        },
        setIsGetEnterpriseModalOpen: (state, param)=>{
            let { payload } = param;
            state.isGetEnterpriseModalOpen = payload;
        },
        setIsOpenAddSeatsCheckout: (state, param)=>{
            let { payload } = param;
            state.isOpenAddSeatsCheckout = payload;
        },
        setIsOpenPurchaseSeatsModal: (state, param)=>{
            let { payload } = param;
            state.isOpenPurchaseSeatsModal = payload;
        },
        setIsOpenAcceptInviteWithDifferentAccountModal: (state, param)=>{
            let { payload } = param;
            state.isOpenAcceptInviteWithDifferentAccountModal = payload;
        },
        setIsOpenJoinWorkspaceModal: (state, param)=>{
            let { payload } = param;
            state.isOpenJoinWorkspaceModal = payload;
        },
        setSelectedNumberOfSeatsToBuy: (state, param)=>{
            let { payload } = param;
            state.selectedNumberOfSeatsToBuy = payload;
        },
        setIsFirstInviteUsersRequest: (state, param)=>{
            let { payload } = param;
            state.isFirstInviteUsersRequest = payload;
        },
        setInvitationAccessDeniedModalState: (state, param)=>{
            let { payload } = param;
            state.invitationAccessDeniedModal = payload;
        }
    }
});
const teamsState = (state)=>state.teams;
const { setIsOpenInviteUsersModal, setIsOpenJoinWorkspaceModal, setSelectedNumberOfSeatsToBuy, setIsFirstInviteUsersRequest, setInvitationAccessDeniedModalState, setIsOpenRequestUpgradeModal, setIsOpenPurchaseSeatsModal, setIsOpenAddSeatsCheckout, setIsGetEnterpriseModalOpen, setIsOpenUnableJoinTeamModal, setIsOpenAcceptInviteWithDifferentAccountModal } = teamsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (teamsSlice.reducer);


/***/ }),

/***/ 48935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports computerPanelSlice, computerPanelState, setIsComputerPanelOpen */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26286);

const initialState = {
    isOpen: false
};
const computerPanelSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__/* .createSlice */ .Z0)({
    name: 'computerPanel',
    initialState,
    reducers: {
        setIsComputerPanelOpen: (state, action)=>{
            var _action_payload;
            state.isOpen = (_action_payload = action.payload) !== null && _action_payload !== void 0 ? _action_payload : !state.isOpen;
        }
    }
});
const computerPanelState = (state)=>state.computerPanel;
const { setIsComputerPanelOpen } = computerPanelSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (computerPanelSlice.reducer);


/***/ }),

/***/ 57403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  kn: () => (/* reexport */ TeamsTags),
  QL: () => (/* reexport */ accountEntitlementsApi),
  T2: () => (/* binding */ apiServices),
  eD: () => (/* reexport */ contentApi),
  Xe: () => (/* reexport */ entitlementsApi),
  A2: () => (/* reexport */ memoryApi),
  SJ: () => (/* reexport */ projectApi/* projectApi */.SJ),
  yI: () => (/* reexport */ sandboxApi),
  yz: () => (/* reexport */ sandboxApiWithoutRetry),
  Fv: () => (/* reexport */ teamsApi),
  vI: () => (/* reexport */ threadApi/* threadApi */.vI),
  MU: () => (/* reexport */ uploadS3Api),
  cg: () => (/* reexport */ useAcceptInviteMutation),
  aW: () => (/* reexport */ useCreateMemoryMutation),
  AQ: () => (/* reexport */ projectApi/* useCreateProjectMutation */.AQ),
  eX: () => (/* reexport */ useDeleteFileMutation),
  xz: () => (/* reexport */ useDeleteMemoryMutation),
  P4: () => (/* reexport */ projectApi/* useDeleteProjectMutation */.P4),
  kT: () => (/* reexport */ useDownloadFilesMutation),
  py: () => (/* reexport */ useGetAccountEntitlementsQuery),
  gl: () => (/* reexport */ useGetCreditAccountExistsQuery),
  cV: () => (/* reexport */ useGetCreditAccountInfoQuery),
  kj: () => (/* reexport */ useGetEntitlementsListQuery),
  J5: () => (/* reexport */ useGetFileUploadUrlMutation),
  F2: () => (/* reexport */ useGetMemoriesQuery),
  zM: () => (/* reexport */ projectApi/* useGetProjectByIdQuery */.zM),
  su: () => (/* reexport */ projectApi/* useGetProjectsQuery */.su),
  NY: () => (/* reexport */ useGetReferralInfoUserIdQuery),
  J6: () => (/* reexport */ useGetSubscriptionPlansQuery),
  sv: () => (/* reexport */ useGetTeamByInvitationTokenQuery),
  Mu: () => (/* reexport */ useGetTeamByUserIdQuery),
  $f: () => (/* reexport */ useGetUserByIdQuery),
  wK: () => (/* reexport */ useGetUserSubscriptionInfoQuery),
  Qi: () => (/* reexport */ useGetZipFileMutation),
  GK: () => (/* reexport */ useInviteUsersMutation),
  Do: () => (/* reexport */ useLazyFetchFileURLQuery),
  vH: () => (/* reexport */ projectApi/* useLazyGetProjectByIdQuery */.vH),
  qe: () => (/* reexport */ useLazyGetSeatsListQuery),
  _4: () => (/* reexport */ useScheduleZipFilesMutation),
  X5: () => (/* reexport */ useSetTeamNameMutation),
  PA: () => (/* reexport */ threadApi/* useUndoAgentRunMutation */.PA),
  rP: () => (/* reexport */ projectApi/* useUpdateProjectMutation */.rP),
  H7: () => (/* reexport */ useUpdateUserMutation),
  qE: () => (/* reexport */ useUploadFileByURLMutation),
  i$: () => (/* reexport */ userApi),
  y2: () => (/* reexport */ walletApi)
});

// UNUSED EXPORTS: AccountEntitlementsTags, ContentTags, EntitlementsTags, MemoryTags, ProjectTags, SandboxTags, ThreadTags, UserTags, WalletTags, useCancelSubscriptionMutation, useChangePlanMutation, useClaimOfferMutation, useCreateCreditAccountMutation, useCreatePaypalSubscriptionMutation, useCreateSubscriptionMutation, useFetchFileURLQuery, useForkThreadMutation, useGetAPIUsagesQuery, useGetComplementaryOfferQuery, useGetOfferInfoUserIdQuery, useGetSeatsListQuery, useGetStripeCostsQuery, useGetStripePricesQuery, useGetSubscriptionPlanByIdQuery, useGetUserBudgetQuotaInfoQuery, useGetUserTaskCostsInfoQuery, useGetUserTaskQuotaInfoQuery, useLazyGetBillingPortalUrlQuery, useLazyGetSessionInfoQuery, useLazyGetUserBudgetQuotaInfoQuery, useLazyGetUserTaskQuotaInfoQuery, useRenewSubscriptionMutation, useResumeSubscriptionMutation, useSetupIntentMutation, useUpdateCancelSubscriptionReasonMutation, useUpdateCreditAccountMutation, useUpdateDowngradeSubscriptionMutation, useUpgradeSubscriptionMutation

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs
var rtk_query_react_modern = __webpack_require__(61321);
// EXTERNAL MODULE: ./src/store/services/config.ts
var config = __webpack_require__(4225);
;// ./src/store/services/memoryApi.ts


var MemoryTags = /*#__PURE__*/ function(MemoryTags) {
    MemoryTags["Memory"] = "Memory";
    return MemoryTags;
}({});
const memoryApi = (0,rtk_query_react_modern/* createApi */.xP)({
    reducerPath: 'memoryApi',
    baseQuery: config/* baseSuperNinjaQueryWithRetry */.DC,
    tagTypes: [
        "Memory"
    ],
    endpoints: (builder)=>({
            getMemories: builder.query({
                query: (params)=>({
                        url: '/memory',
                        method: 'GET',
                        params
                    }),
                // we should use a pessimistic update here when BE will send the result in response
                providesTags: (result)=>result ? [
                        ...result.memories.map((param)=>{
                            let { id } = param;
                            return {
                                type: "Memory",
                                id
                            };
                        }),
                        {
                            type: "Memory",
                            id: 'LIST'
                        }
                    ] : [
                        {
                            type: "Memory",
                            id: 'LIST'
                        }
                    ]
            }),
            createMemory: builder.mutation({
                query: (body)=>({
                        url: '/memory',
                        method: 'POST',
                        body
                    }),
                // we should use a pessimistic update here when BE will send the result in response
                invalidatesTags: [
                    {
                        type: "Memory",
                        id: 'LIST'
                    }
                ]
            }),
            deleteMemory: builder.mutation({
                query: (id)=>({
                        url: "/memory/".concat(id),
                        method: 'DELETE'
                    }),
                // we should use a pessimistic update here when BE will send the result in response
                invalidatesTags: (result, error, id)=>[
                        {
                            type: "Memory",
                            id
                        },
                        {
                            type: "Memory",
                            id: 'LIST'
                        }
                    ]
            })
        })
});
const { useGetMemoriesQuery, useCreateMemoryMutation, useDeleteMemoryMutation } = memoryApi;

;// ./src/store/services/userApi.ts


var UserTags = /*#__PURE__*/ function(UserTags) {
    UserTags["User"] = "User";
    return UserTags;
}({});
const userApi = (0,rtk_query_react_modern/* createApi */.xP)({
    reducerPath: 'userApi',
    baseQuery: config/* baseMyNinjaQueryWithRetry */.Ok,
    tagTypes: [
        "User"
    ],
    endpoints: (builder)=>({
            getUserById: builder.query({
                query: (id)=>({
                        url: "/users/".concat(id)
                    }),
                providesTags: (result, error, id)=>{
                    return [
                        {
                            type: "User",
                            id
                        }
                    ];
                }
            }),
            updateUser: builder.mutation({
                query: (param)=>{
                    let { id, body } = param;
                    return {
                        url: "/users/".concat(id),
                        method: 'PATCH',
                        body
                    };
                },
                async onQueryStarted (param, param1) {
                    let { id, ...patch } = param, { dispatch, queryFulfilled } = param1;
                    const patchResult = dispatch(userApi.util.updateQueryData('getUserById', id, (draft)=>({
                            ...draft,
                            ...patch.body
                        })));
                    try {
                        await queryFulfilled;
                    } catch (e) {
                        patchResult.undo();
                    }
                }
            })
        })
});
const { useGetUserByIdQuery, useUpdateUserMutation } = userApi;

// EXTERNAL MODULE: ./src/constants/content.ts
var content = __webpack_require__(41319);
;// ./src/store/services/contentApi.ts



var ContentTags = /*#__PURE__*/ function(ContentTags) {
    ContentTags["GetFileURL"] = "GetFileURL";
    return ContentTags;
}({});
const contentApi = (0,rtk_query_react_modern/* createApi */.xP)({
    reducerPath: 'contentApi',
    tagTypes: [
        "GetFileURL"
    ],
    baseQuery: config/* baseContentQueryWithRetry */.nM,
    endpoints: (builder)=>({
            fetchFileURL: builder.query({
                query: (param)=>{
                    let { user_id, file_name } = param;
                    return {
                        url: "/users/".concat(user_id, "/content-url/").concat(file_name),
                        params: {
                            format: 'original'
                        }
                    };
                },
                providesTags: ()=>[
                        "GetFileURL"
                    ]
            }),
            getFileUploadUrl: builder.mutation({
                query: (param)=>{
                    let { userId, context, content_type, ...rest } = param;
                    return {
                        url: "/users/".concat(userId, "/upload-form"),
                        method: 'POST',
                        body: {
                            content_type: content_type || 'text/plain',
                            ...rest
                        },
                        headers: {
                            ...context.userId && {
                                [content/* X_NINJA_USER_ID_HEADER */.u]: context.userId
                            },
                            ...context.projectId && {
                                [content/* X_NINJA_CONVERSATION_ID_HEADER */.q]: context.projectId
                            }
                        }
                    };
                }
            }),
            deleteFile: builder.mutation({
                query: (param)=>{
                    let { user_id, file_name } = param;
                    return {
                        url: "/users/".concat(user_id, "/content/").concat(file_name),
                        method: 'DELETE'
                    };
                }
            })
        })
});
const { useFetchFileURLQuery, useLazyFetchFileURLQuery, useGetFileUploadUrlMutation, useDeleteFileMutation } = contentApi;

// EXTERNAL MODULE: ./src/utils/index.ts + 9 modules
var utils = __webpack_require__(19482);
;// ./src/store/services/sandboxApi.ts



var SandboxTags = /*#__PURE__*/ function(SandboxTags) {
    SandboxTags["Sandbox"] = "Sandbox";
    SandboxTags["SandboxWithoutRetry"] = "SandboxWithoutRetry";
    SandboxTags["GetZipFileWithoutRetry"] = "GetZipFileWithoutRetry";
    return SandboxTags;
}({});
const sandboxApiWithoutRetry = (0,rtk_query_react_modern/* createApi */.xP)({
    reducerPath: 'sandboxApiWithoutRetry',
    baseQuery: config/* baseSuperNinjaQuery */.Hs,
    tagTypes: [
        "SandboxWithoutRetry"
    ],
    endpoints: (builder)=>({
            getZipFile: builder.mutation({
                query: (params)=>({
                        url: "/threads/".concat(params.threadId, "/sandbox/sessions/").concat(params.session_id, "/files/").concat(params.zip_file_name),
                        method: 'GET',
                        responseHandler: async (response)=>{
                            if (response.status === 200) {
                                const blob = await response.blob();
                                (0,utils/* downloadBlob */.WN)(blob, "".concat(params.zip_file_name));
                            }
                            return {
                                status: response.status
                            };
                        },
                        invalidatesTags: (result, error, params)=>[
                                {
                                    type: "GetZipFileWithoutRetry",
                                    id: params.zip_file_name
                                }
                            ]
                    })
            })
        })
});
const sandboxApi = (0,rtk_query_react_modern/* createApi */.xP)({
    reducerPath: 'sandboxApi',
    baseQuery: config/* baseSuperNinjaQueryWithRetry */.DC,
    tagTypes: [
        "Sandbox"
    ],
    endpoints: (builder)=>({
            scheduleZipFiles: builder.mutation({
                query: (params)=>({
                        url: "/threads/".concat(params.threadId, "/sandbox/files/schedule-zip"),
                        method: 'POST',
                        params: {
                            path: params.path
                        }
                    })
            }),
            downloadFiles: builder.mutation({
                query: (params)=>({
                        url: "/threads/".concat(params.threadId, "/sandbox/files/download"),
                        method: 'POST',
                        params: {
                            path: params.path
                        },
                        responseHandler: async (response)=>{
                            const blob = await response.blob();
                            (0,utils/* downloadBlob */.WN)(blob, "".concat(params.path.split('/').pop() || 'files', ".zip"));
                        }
                    })
            })
        })
});
const { useDownloadFilesMutation, useScheduleZipFilesMutation } = sandboxApi;
const { useGetZipFileMutation } = sandboxApiWithoutRetry;

;// ./src/store/services/uploadS3Api.ts


const uploadS3Api = (0,rtk_query_react_modern/* createApi */.xP)({
    reducerPath: 'uploadS3Api',
    baseQuery: config/* baseUploadS3Query */.FC,
    endpoints: (builder)=>({
            uploadFileByURL: builder.mutation({
                query: (param)=>{
                    let { url, body } = param;
                    return {
                        url,
                        method: 'POST',
                        body
                    };
                }
            })
        })
});
const { useUploadFileByURLMutation } = uploadS3Api;

// EXTERNAL MODULE: ./src/store/services/projectApi.ts + 1 modules
var projectApi = __webpack_require__(4020);
// EXTERNAL MODULE: ./src/types/index.ts + 2 modules
var types = __webpack_require__(37893);
// EXTERNAL MODULE: ./src/constants/index.ts + 10 modules
var constants = __webpack_require__(47615);
// EXTERNAL MODULE: ./src/constants/teams.ts
var teams = __webpack_require__(29044);
;// ./src/store/services/teamsApi.ts





var TeamsTags = /*#__PURE__*/ function(TeamsTags) {
    TeamsTags["TeamByUserId"] = "TeamByUserId";
    TeamsTags["SeatsList"] = "SeatsList";
    TeamsTags["TeamInfoByInviteToken"] = "TeamInfoByInviteToken";
    return TeamsTags;
}({});
const teamsApi = (0,rtk_query_react_modern/* createApi */.xP)({
    reducerPath: 'teamsApi',
    baseQuery: config/* baseMyNinjaQueryWithRetry */.Ok,
    tagTypes: [
        "TeamByUserId",
        "SeatsList",
        "TeamInfoByInviteToken"
    ],
    endpoints: (builder)=>({
            getSeatsList: builder.query({
                query: (param)=>{
                    let { team_id, user_id, page_token, statuses } = param;
                    return {
                        url: "/teams/".concat(team_id, "/seats"),
                        params: {
                            user_id,
                            records_limit: teams/* SEATS_PAGE_LIMIT */.nv,
                            b64_serialized_last_evaluated_key: page_token,
                            include_statuses: statuses
                        },
                        headers: {
                            [constants/* X_NINJA_USER_ID_HEADER */.uhU]: user_id
                        }
                    };
                },
                serializeQueryArgs: (param)=>{
                    let { queryArgs } = param;
                    const { team_id, statuses } = queryArgs;
                    return {
                        team_id,
                        statuses
                    };
                },
                merge: (currentCache, newData)=>{
                    currentCache.seats.push(...newData.seats);
                    currentCache.b64_serialized_last_evaluated_key = newData.b64_serialized_last_evaluated_key;
                },
                forceRefetch (param) {
                    let { currentArg, previousArg } = param;
                    return !!(currentArg === null || currentArg === void 0 ? void 0 : currentArg.page_token) && (currentArg === null || currentArg === void 0 ? void 0 : currentArg.page_token) !== (previousArg === null || previousArg === void 0 ? void 0 : previousArg.page_token);
                },
                providesTags: (_, __, param)=>{
                    let { team_id, statuses, page_token } = param;
                    return [
                        {
                            type: "SeatsList",
                            id: team_id,
                            status: statuses
                        }
                    ];
                }
            }),
            getTeamByUserId: builder.query({
                query: (param)=>{
                    let { user_id } = param;
                    return {
                        url: "/teams?user_id=".concat(user_id),
                        headers: {
                            [constants/* X_NINJA_USER_ID_HEADER */.uhU]: user_id
                        }
                    };
                },
                providesTags: (_, __, param)=>{
                    let { user_id } = param;
                    return [
                        {
                            type: "TeamByUserId",
                            id: user_id
                        }
                    ];
                }
            }),
            setTeamName: builder.mutation({
                query: (param)=>{
                    let { user_id, team_id, team_name } = param;
                    return {
                        url: "/teams/".concat(team_id),
                        method: 'PUT',
                        params: {
                            user_id
                        },
                        body: {
                            team_name
                        },
                        headers: {
                            [constants/* X_NINJA_USER_ID_HEADER */.uhU]: user_id
                        }
                    };
                },
                async onQueryStarted (param, param1) {
                    let { ...patch } = param, { dispatch, queryFulfilled } = param1;
                    try {
                        await queryFulfilled;
                        dispatch(teamsApi.util.updateQueryData('getTeamByUserId', {
                            user_id: patch.user_id
                        }, (draft)=>({
                                ...draft,
                                team: {
                                    ...draft === null || draft === void 0 ? void 0 : draft.team,
                                    team_name: patch.team_name
                                }
                            })));
                    } catch (e) {}
                }
            }),
            inviteUsers: builder.mutation({
                query: (param)=>{
                    let { user_id, team_id, users } = param;
                    return {
                        url: "/teams/".concat(team_id, "/invite"),
                        method: 'POST',
                        params: {
                            user_id
                        },
                        body: {
                            users
                        },
                        headers: {
                            [constants/* X_NINJA_USER_ID_HEADER */.uhU]: user_id
                        }
                    };
                },
                async onQueryStarted (param, param1) {
                    let { ...patch } = param, { dispatch, queryFulfilled } = param1;
                    try {
                        await queryFulfilled;
                        dispatch(teamsApi.util.updateQueryData('getSeatsList', {
                            user_id: patch.user_id,
                            team_id: patch.team_id,
                            page_token: '',
                            statuses: types/* SeatStatus */.G1.INVITE_PENDING
                        }, ()=>({
                                seats: [],
                                b64_serialized_last_evaluated_key: ''
                            })));
                    } catch (e) {}
                }
            }),
            acceptInvite: builder.mutation({
                query: (param)=>{
                    let { user_id, team_id, seat_id, token } = param;
                    return {
                        url: "/teams/".concat(team_id, "/seats/").concat(seat_id, "/accept-invite"),
                        method: 'PUT',
                        params: {
                            user_id: user_id
                        },
                        body: {
                            token
                        },
                        headers: {
                            [constants/* X_NINJA_USER_ID_HEADER */.uhU]: user_id
                        }
                    };
                }
            }),
            getTeamByInvitationToken: builder.query({
                query: (param)=>{
                    let { token, user_id } = param;
                    return {
                        url: "/teams/invitation/".concat(token),
                        params: {
                            user_id
                        },
                        headers: {
                            [constants/* X_NINJA_USER_ID_HEADER */.uhU]: user_id
                        }
                    };
                },
                providesTags: [
                    "TeamInfoByInviteToken"
                ]
            })
        })
});
const { useGetTeamByUserIdQuery, useSetTeamNameMutation, useInviteUsersMutation, useGetSeatsListQuery, useLazyGetSeatsListQuery, useAcceptInviteMutation, useGetTeamByInvitationTokenQuery } = teamsApi;

// EXTERNAL MODULE: ./src/lib/envs.ts
var envs = __webpack_require__(68276);
;// ./src/store/services/walletApi.ts




var WalletTags = /*#__PURE__*/ function(WalletTags) {
    WalletTags["Token"] = "Token";
    WalletTags["Costs"] = "Costs";
    WalletTags["UserSubscriptionInfo"] = "UserSubscriptionInfo";
    WalletTags["BudgetQuota"] = "BudgetQuota";
    WalletTags["TasksQuota"] = "TasksQuota";
    WalletTags["TasksCosts"] = "TasksCosts";
    WalletTags["SessionVerification"] = "SessionVerification";
    WalletTags["Plans"] = "Plans";
    WalletTags["PlanById"] = "PlanById";
    WalletTags["CreditsInfo"] = "CreditsInfo";
    WalletTags["APIUsages"] = "APIUsages";
    WalletTags["OfferByUserId"] = "OfferByUserId";
    WalletTags["ReferralByUserId"] = "ReferralByUserId";
    WalletTags["AccountExists"] = "AccountExists";
    return WalletTags;
}({});
const walletApi = (0,rtk_query_react_modern/* createApi */.xP)({
    reducerPath: 'walletApi',
    tagTypes: [
        "Token",
        "Costs",
        "UserSubscriptionInfo",
        "BudgetQuota",
        "TasksQuota",
        "TasksCosts",
        "SessionVerification",
        "Plans",
        "PlanById",
        "CreditsInfo",
        "APIUsages",
        "OfferByUserId",
        "ReferralByUserId",
        "AccountExists"
    ],
    refetchOnMountOrArgChange: true,
    baseQuery: config/* baseWalletQueryWithRetry */.bW,
    endpoints: (builder)=>({
            // TODO(olha): add types from fast api when it will be ready
            getStripePrices: builder.query({
                query: (param)=>{
                    let { user_id } = param;
                    return "/stripe/prices/user/".concat(user_id);
                },
                providesTags: ()=>[
                        "Token"
                    ],
                keepUnusedDataFor: 60 * 60 * 10
            }),
            getSessionInfo: builder.query({
                query: (param)=>{
                    let { user_id, session_id } = param;
                    return "/stripe/user/".concat(user_id, "/session-id/").concat(session_id);
                },
                providesTags: ()=>[
                        "SessionVerification"
                    ]
            }),
            getStripeCosts: builder.query({
                query: (param)=>{
                    let { user_id, next_evaluated_key } = param;
                    return "/stripe/activity/user/".concat(user_id).concat(next_evaluated_key ? '?next_evaluated_key=' + next_evaluated_key : '');
                },
                providesTags: ()=>[
                        "Costs"
                    ]
            }),
            getUserSubscriptionInfo: builder.query({
                query: (param)=>{
                    let { user_id } = param;
                    return "/subscriptions/user/".concat(user_id);
                },
                providesTags: ()=>[
                        "UserSubscriptionInfo"
                    ]
            }),
            getUserBudgetQuotaInfo: builder.query({
                query: (param)=>{
                    let { user_id } = param;
                    return "/stripe/budget-quota/user/".concat(user_id);
                },
                providesTags: ()=>[
                        "BudgetQuota"
                    ]
            }),
            getUserTaskQuotaInfo: builder.query({
                query: (param)=>{
                    let { user_id } = param;
                    return "/stripe/task-count-quota/user/".concat(user_id);
                },
                providesTags: ()=>[
                        "TasksQuota"
                    ],
                keepUnusedDataFor: 60 * 60 * 10
            }),
            upgradeSubscription: builder.mutation({
                query: (param)=>{
                    let { user_id, lookup_key, promotion_code, embedded, add_on_amount_usd_cents } = param;
                    return {
                        url: "stripe/checkout-session/user/".concat(user_id),
                        method: 'POST',
                        params: {
                            lookup_key,
                            promotion_code,
                            embedded,
                            add_on_amount_usd_cents
                        },
                        body: {
                            success_url: envs/* NEXT_PUBLIC_MY_NINJA_URL */.QG,
                            cancel_url: envs/* NEXT_PUBLIC_MY_NINJA_URL */.QG
                        }
                    };
                }
            }),
            renewSubscription: builder.mutation({
                query: (param)=>{
                    let { user_id, lookup_key } = param;
                    return {
                        url: "stripe/subscription/renew/early/user/".concat(user_id, "?lookup_key=").concat(lookup_key),
                        method: 'POST'
                    };
                }
            }),
            getBillingPortalUrl: builder.query({
                query: (param)=>{
                    let { user_id, return_url } = param;
                    return {
                        url: "/stripe/billing-portal/user/".concat(user_id),
                        params: {
                            return_url: "".concat(envs/* NEXT_PUBLIC_MY_NINJA_URL */.QG).concat(return_url)
                        }
                    };
                }
            }),
            getUserTaskCostsInfo: builder.query({
                query: (param)=>{
                    let { user_id, task_id } = param;
                    return "/stripe/costs/user/".concat(user_id, "/task/").concat(task_id);
                },
                providesTags: ()=>[
                        "TasksCosts"
                    ]
            }),
            createSubscription: builder.mutation({
                query: (param)=>{
                    let { user_id, plan_id, seat_count, stripe_promotion_code, referral_id, discount_type } = param;
                    return {
                        url: "stripe/subscription/user/".concat(user_id),
                        params: {
                            plan_id,
                            ...!!seat_count && {
                                seat_count
                            },
                            ...!!stripe_promotion_code && {
                                stripe_promotion_code
                            },
                            ...!!referral_id && {
                                referral_id
                            },
                            ...!!discount_type && {
                                discount_type
                            }
                        },
                        method: 'PUT'
                    };
                }
            }),
            updateDowngradeSubscription: builder.mutation({
                query: (param)=>{
                    let { user_id, product_key, price_timestamp } = param;
                    return {
                        url: "subscriptions/user/".concat(user_id, "/upgrade_or_downgrade?upgrade_product_key=").concat(product_key, "&price_timestamp=").concat(price_timestamp),
                        method: 'PUT'
                    };
                }
            }),
            changePlan: builder.mutation({
                query: (param)=>{
                    let { user_id, product_key, price_timestamp, seat_count } = param;
                    return {
                        url: "subscriptions/user/".concat(user_id, "/change_plan?product_key=").concat(product_key, "&price_timestamp=").concat(price_timestamp).concat(seat_count ? "&seat_count=".concat(seat_count) : ''),
                        method: 'PUT'
                    };
                },
                invalidatesTags: (result, error, arg)=>{
                    if (!!result && !result.approve_url) {
                        return [
                            "UserSubscriptionInfo"
                        ];
                    }
                    return [];
                },
                async onQueryStarted (param, param1) {
                    let { ...patch } = param, { dispatch, queryFulfilled } = param1;
                    if (patch.seat_count) {
                        try {
                            await queryFulfilled;
                            dispatch(teamsApi.util.invalidateTags([
                                TeamsTags.TeamByUserId
                            ]));
                        } catch (e) {}
                    }
                }
            }),
            getSubscriptionPlans: builder.query({
                query: (param)=>{
                    let { user_id, group, seat_count, referral_id, families, discount_type } = param;
                    return {
                        url: '/plans/',
                        params: {
                            user_id,
                            group: group,
                            seat_count: seat_count,
                            referral_id,
                            families,
                            discount_type
                        }
                    };
                },
                providesTags: ()=>[
                        "Plans"
                    ],
                keepUnusedDataFor: 60 * 60 * 10
            }),
            getSubscriptionPlanById: builder.query({
                query: (param)=>{
                    let { user_id, plan_id, seat_count, stripe_promotion_code, referral_id, discount_type } = param;
                    return {
                        url: "/plans/kinds/".concat(plan_id),
                        params: {
                            user_id,
                            seat_count,
                            stripe_promotion_code,
                            referral_id,
                            discount_type
                        }
                    };
                },
                providesTags: ()=>[
                        "PlanById"
                    ],
                keepUnusedDataFor: 60 * 60 * 10
            }),
            createPaypalSubscription: builder.mutation({
                query: (param)=>{
                    let { user_id, subscription_id } = param;
                    return {
                        url: "paypal/subscription/".concat(subscription_id, "/user/").concat(user_id),
                        method: 'PUT'
                    };
                },
                invalidatesTags: (result, error, arg)=>[
                        "UserSubscriptionInfo"
                    ]
            }),
            cancelSubscription: builder.mutation({
                query: (user_id)=>({
                        url: "/subscriptions/user/".concat(user_id, "/cancel"),
                        method: 'PUT'
                    }),
                invalidatesTags: (result, error, arg)=>[
                        "UserSubscriptionInfo"
                    ]
            }),
            resumeSubscription: builder.mutation({
                query: (user_id)=>({
                        url: "/subscriptions/user/".concat(user_id, "/resume"),
                        method: 'PUT'
                    }),
                invalidatesTags: (result, error, arg)=>[
                        "UserSubscriptionInfo"
                    ]
            }),
            updateCancelSubscriptionReason: builder.mutation({
                query: (param)=>{
                    let { user_id, reason } = param;
                    return {
                        url: "/subscriptions/user/".concat(user_id, "/record_cancellation_reason"),
                        method: 'PUT',
                        body: {
                            reason
                        }
                    };
                },
                invalidatesTags: (result, error, arg)=>[
                        "UserSubscriptionInfo"
                    ]
            }),
            setupIntent: builder.mutation({
                query: (param)=>{
                    let { user_id } = param;
                    return {
                        url: "stripe/users/".concat(user_id, "/setup-intent"),
                        method: 'POST'
                    };
                }
            }),
            getCreditAccountInfo: builder.query({
                query: (param)=>{
                    let { user_id } = param;
                    return {
                        url: "/credit_accounts/users/".concat(user_id)
                    };
                },
                providesTags: ()=>[
                        "CreditsInfo"
                    ]
            }),
            getCreditAccountExists: builder.query({
                query: (param)=>{
                    let { user_id } = param;
                    return {
                        url: "/credit_accounts/users/".concat(user_id, "/exists")
                    };
                },
                providesTags: ()=>[
                        "AccountExists"
                    ]
            }),
            createCreditAccount: builder.mutation({
                query: (param)=>{
                    let { user_id, paymentInfo } = param;
                    return {
                        url: "credit_accounts/users/".concat(user_id, "/accounts"),
                        method: 'POST',
                        body: {
                            ...paymentInfo
                        }
                    };
                },
                invalidatesTags: ()=>[
                        "CreditsInfo"
                    ]
            }),
            updateCreditAccount: builder.mutation({
                query: (param)=>{
                    let { user_id, paymentInfo, credit_account } = param;
                    return {
                        url: "credit_accounts/users/".concat(user_id, "/accounts/").concat(credit_account),
                        method: 'PUT',
                        body: {
                            ...paymentInfo
                        }
                    };
                },
                invalidatesTags: ()=>[
                        "CreditsInfo"
                    ]
            }),
            getAPIUsages: builder.query({
                query: (param)=>{
                    let { user_id, account_id, next_page_token, previous_page_token } = param;
                    return {
                        url: "/credit_accounts/users/".concat(user_id, "/accounts/").concat(account_id, "/transactions"),
                        params: {
                            next_page_token: next_page_token || undefined,
                            previous_page_token: previous_page_token || undefined
                        }
                    };
                },
                keepUnusedDataFor: 0,
                providesTags: ()=>[
                        "APIUsages"
                    ]
            }),
            getOfferInfoUserId: builder.query({
                query: (param)=>{
                    let { user_id } = param;
                    return {
                        url: "/offers/user/".concat(user_id)
                    };
                },
                providesTags: ()=>[
                        "OfferByUserId"
                    ],
                keepUnusedDataFor: 60 * 60 * 10
            }),
            claimOffer: builder.mutation({
                query: (param)=>{
                    let { user_id, offer_type } = param;
                    return {
                        url: "/offers/user/".concat(user_id, "/claim"),
                        method: 'POST',
                        body: {
                            offer_type
                        }
                    };
                }
            }),
            getReferralInfoUserId: builder.query({
                query: (param)=>{
                    let { user_id } = param;
                    return {
                        url: "/offers/user/".concat(user_id, "/referral")
                    };
                },
                providesTags: ()=>[
                        "ReferralByUserId"
                    ],
                keepUnusedDataFor: 60 * 60 * 10
            }),
            // TODO: fix CancelOffersResponse type generate
            getComplementaryOffer: builder.query({
                query: (param)=>{
                    let { user_id } = param;
                    return {
                        url: "/offers/user/".concat(user_id, "/cancel_offers")
                    };
                },
                keepUnusedDataFor: 60 * 60 * 10
            })
        })
});
const { useGetUserBudgetQuotaInfoQuery, useGetUserTaskQuotaInfoQuery, useLazyGetUserTaskQuotaInfoQuery, useGetUserSubscriptionInfoQuery, useGetStripeCostsQuery, useGetStripePricesQuery, useUpgradeSubscriptionMutation, useLazyGetBillingPortalUrlQuery, useRenewSubscriptionMutation, useLazyGetUserBudgetQuotaInfoQuery, useGetUserTaskCostsInfoQuery, useLazyGetSessionInfoQuery, useCreateSubscriptionMutation, useGetSubscriptionPlansQuery, useUpdateDowngradeSubscriptionMutation, useCreatePaypalSubscriptionMutation, useCancelSubscriptionMutation, useResumeSubscriptionMutation, useChangePlanMutation, useGetSubscriptionPlanByIdQuery, useUpdateCancelSubscriptionReasonMutation, useSetupIntentMutation, useCreateCreditAccountMutation, useGetCreditAccountInfoQuery, useUpdateCreditAccountMutation, useGetAPIUsagesQuery, useGetOfferInfoUserIdQuery, useClaimOfferMutation, useGetReferralInfoUserIdQuery, useGetComplementaryOfferQuery, useGetCreditAccountExistsQuery } = walletApi;

;// ./src/store/services/entitlementsApi.ts


var EntitlementsTags = /*#__PURE__*/ function(EntitlementsTags) {
    EntitlementsTags["Entitlements"] = "Entitlements";
    return EntitlementsTags;
}({});
const entitlementsApi = (0,rtk_query_react_modern/* createApi */.xP)({
    reducerPath: 'entitlementsApi',
    baseQuery: config/* baseMyNinjaQueryWithRetry */.Ok,
    tagTypes: [
        "Entitlements"
    ],
    endpoints: (builder)=>({
            getEntitlementsList: builder.query({
                query: (param)=>{
                    let { plan_variant, user_id } = param;
                    return {
                        url: "/users/plan_variants/".concat(plan_variant, "/entitlements"),
                        params: {
                            user_id
                        }
                    };
                },
                providesTags: ()=>[
                        "Entitlements"
                    ],
                keepUnusedDataFor: 60 * 60 * 10
            })
        })
});
const { useGetEntitlementsListQuery } = entitlementsApi;

;// ./src/store/services/accountEntitlementsApi.ts


var AccountEntitlementsTags = /*#__PURE__*/ function(AccountEntitlementsTags) {
    AccountEntitlementsTags["Entitlements"] = "Entitlements";
    return AccountEntitlementsTags;
}({});
const accountEntitlementsApi = (0,rtk_query_react_modern/* createApi */.xP)({
    reducerPath: 'accountEntitlementsApi',
    baseQuery: config/* baseSuperNinjaQueryWithRetry */.DC,
    tagTypes: [
        "Entitlements"
    ],
    endpoints: (builder)=>({
            getAccountEntitlements: builder.query({
                query: (userId)=>({
                        url: "/accounts/".concat(userId, "/entitlements")
                    }),
                providesTags: [
                    "Entitlements"
                ]
            })
        })
});
const { useGetAccountEntitlementsQuery } = accountEntitlementsApi;

// EXTERNAL MODULE: ./src/store/services/threadApi.ts
var threadApi = __webpack_require__(63689);
;// ./src/store/services/index.ts











const apiServices = [
    memoryApi,
    userApi,
    sandboxApi,
    sandboxApiWithoutRetry,
    contentApi,
    uploadS3Api,
    projectApi/* projectApi */.SJ,
    teamsApi,
    walletApi,
    entitlementsApi,
    accountEntitlementsApi,
    threadApi/* threadApi */.vI
];













/***/ }),

/***/ 58036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   WN: () => (/* binding */ loadingOverlayState),
/* harmony export */   l9: () => (/* binding */ setIsLoadingOverlayOpen)
/* harmony export */ });
/* unused harmony export loadingOverlaySlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26286);

const initialState = {
    isOpen: false,
    overlayText: ''
};
const loadingOverlaySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__/* .createSlice */ .Z0)({
    name: 'loadingOverlay',
    initialState,
    reducers: {
        setIsLoadingOverlayOpen: (state, action)=>{
            var _action_payload, _action_payload1;
            var _action_payload_isOpen;
            state.isOpen = (_action_payload_isOpen = (_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.isOpen) !== null && _action_payload_isOpen !== void 0 ? _action_payload_isOpen : !state.isOpen;
            var _action_payload_overlayText;
            state.overlayText = (_action_payload_overlayText = (_action_payload1 = action.payload) === null || _action_payload1 === void 0 ? void 0 : _action_payload1.overlayText) !== null && _action_payload_overlayText !== void 0 ? _action_payload_overlayText : 'Loading...';
        }
    }
});
const loadingOverlayState = (state)=>state.loadingOverlay;
const { setIsLoadingOverlayOpen } = loadingOverlaySlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadingOverlaySlice.reducer);


/***/ }),

/***/ 59677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $p: () => (/* binding */ setActivePanelType),
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   Zv: () => (/* binding */ closePanel),
/* harmony export */   jx: () => (/* binding */ sidePanelState)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26286);

const initialState = {
    activePanelType: null
};
const sidePanelSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__/* .createSlice */ .Z0)({
    name: 'sidePanel',
    initialState,
    reducers: {
        setActivePanelType: (state, action)=>{
            state.activePanelType = action.payload;
        },
        closePanel: (state)=>{
            state.activePanelType = null;
        }
    }
});
const sidePanelState = (state)=>state.sidePanel;
const { setActivePanelType, closePanel } = sidePanelSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidePanelSlice.reducer);


/***/ }),

/***/ 63689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PA: () => (/* binding */ useUndoAgentRunMutation),
/* harmony export */   jk: () => (/* binding */ useForkThreadMutation),
/* harmony export */   vI: () => (/* binding */ threadApi)
/* harmony export */ });
/* unused harmony export ThreadTags */
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61321);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4225);


var ThreadTags = /*#__PURE__*/ function(ThreadTags) {
    ThreadTags["Thread"] = "Thread";
    return ThreadTags;
}({});
const threadApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__/* .createApi */ .xP)({
    reducerPath: 'threadApi',
    baseQuery: _config__WEBPACK_IMPORTED_MODULE_0__/* .baseSuperNinjaQuery */ .Hs,
    tagTypes: [
        "Thread"
    ],
    endpoints: (builder)=>({
            undoAgentRun: builder.mutation({
                query: (param)=>{
                    let { threadId, agentRunId } = param;
                    return {
                        url: "/thread/".concat(threadId, "/undo_run/").concat(agentRunId),
                        method: 'POST'
                    };
                },
                invalidatesTags: [
                    {
                        type: "Thread",
                        id: 'UNDO'
                    }
                ]
            }),
            forkThread: builder.mutation({
                query: (threadId)=>({
                        url: "/thread/".concat(threadId, "/fork"),
                        method: 'POST'
                    }),
                invalidatesTags: [
                    "Thread"
                ]
            })
        })
});
const { useUndoAgentRunMutation, useForkThreadMutation } = threadApi;


/***/ }),

/***/ 69213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ac: () => (/* binding */ resetCurrentCommand),
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   XP: () => (/* binding */ promptCommandState),
/* harmony export */   r9: () => (/* binding */ setCurrentCommand)
/* harmony export */ });
/* unused harmony export promptCommandSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26286);

const initialState = {
    currentCommand: null
};
const promptCommandSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__/* .createSlice */ .Z0)({
    name: 'promptCommand',
    initialState,
    reducers: {
        setCurrentCommand: (state, action)=>{
            state.currentCommand = action.payload;
        },
        resetCurrentCommand: (state)=>{
            state.currentCommand = null;
        }
    }
});
const promptCommandState = (state)=>state.promptCommand;
const { setCurrentCommand, resetCurrentCommand } = promptCommandSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (promptCommandSlice.reducer);


/***/ }),

/***/ 76764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   OB: () => (/* binding */ selectedExternalFileState),
/* harmony export */   zM: () => (/* binding */ setSelectedExternalFile)
/* harmony export */ });
/* unused harmony exports selectedExternalFileSlice, computerPanelState */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26286);

const initialState = {
    selectedExternalFile: ''
};
const selectedExternalFileSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__/* .createSlice */ .Z0)({
    name: 'selectedExternalFile',
    initialState,
    reducers: {
        setSelectedExternalFile: (state, action)=>{
            var _action_payload;
            state.selectedExternalFile = (_action_payload = action.payload) !== null && _action_payload !== void 0 ? _action_payload : '';
        }
    }
});
const computerPanelState = (state)=>state.computerPanel;
const selectedExternalFileState = (state)=>state.selectedExternalFile;
const { setSelectedExternalFile } = selectedExternalFileSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectedExternalFileSlice.reducer);


/***/ }),

/***/ 78393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   Bx: () => (/* binding */ setSelectedPaymentTab),
/* harmony export */   GJ: () => (/* binding */ setSelectedFamily),
/* harmony export */   IW: () => (/* binding */ setPaymentModalTitle),
/* harmony export */   QZ: () => (/* binding */ setIsPaymentModalOpen),
/* harmony export */   R: () => (/* binding */ setRequestUsageTableOpen),
/* harmony export */   e_: () => (/* binding */ setSelectedPlanByFamily),
/* harmony export */   ki: () => (/* binding */ setPaymentUpgradeOptionsModal),
/* harmony export */   nG: () => (/* binding */ paymentControlState),
/* harmony export */   vw: () => (/* binding */ setSelectedPeriod)
/* harmony export */ });
/* unused harmony exports paymentControlSlice, resetPaymentControl */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26286);
/* harmony import */ var _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58926);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47615);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19482);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37893);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57403);






const initialState = {
    isPaymentModalOpen: false,
    paymentModalTitle: 'Plans',
    isRequestUsageTableOpen: false,
    usageTableType: undefined,
    selectedPeriod: _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_0__/* .CanonicalInterval */ .AT.annually,
    selectedPaymentTab: _types__WEBPACK_IMPORTED_MODULE_3__/* .PaymentTabs */ .nX.INDIVIDUAL,
    selectedFamily: undefined,
    selectedPlanSetByFamily: {
        ..._constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_BUY_ANNUALLY_PLAN_KIND_MAP */ .i9Y,
        [_gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_0__/* .PlanFamily */ .mX.undefined]: _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_0__/* .PlanKind */ .UL['standard-annually']
    },
    initialized: false,
    paymentUpgradeOptionsModal: null
};
const paymentControlSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__/* .createSlice */ .Z0)({
    name: 'paymentControl',
    initialState,
    reducers: {
        setIsPaymentModalOpen: (state, param)=>{
            let { payload } = param;
            state.isPaymentModalOpen = payload !== null && payload !== void 0 ? payload : !state.isPaymentModalOpen;
        },
        setPaymentModalTitle: (state, param)=>{
            let { payload } = param;
            state.paymentModalTitle = payload !== null && payload !== void 0 ? payload : 'Plan';
        },
        setRequestUsageTableOpen: (state, param)=>{
            let { payload } = param;
            state.isRequestUsageTableOpen = !!payload;
            state.usageTableType = payload;
        },
        setPaymentUpgradeOptionsModal: (state, param)=>{
            let { payload } = param;
            state.paymentUpgradeOptionsModal = payload;
        },
        setSelectedPeriod: (state, param)=>{
            let { payload: newPeriod } = param;
            state.selectedPeriod = newPeriod;
            Object.entries(state.selectedPlanSetByFamily).forEach((param)=>{
                let [planFamily, currentPlan] = param;
                if (planFamily === _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_0__/* .PlanFamily */ .mX.undefined) {
                    return;
                }
                state.selectedPlanSetByFamily[planFamily] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getCorrespondingPlanKind */ .jC)({
                    currentPlan,
                    planFamily: planFamily,
                    targetInterval: newPeriod
                });
            });
        },
        setSelectedFamily: (state, action)=>{
            state.selectedFamily = action.payload;
        },
        setSelectedPlanByFamily: (state, action)=>{
            const { planFamily, planKind } = action.payload;
            state.selectedPlanSetByFamily[planFamily] = planKind;
        },
        setSelectedPaymentTab: (state, action)=>{
            state.selectedPaymentTab = action.payload;
        },
        resetPaymentControl: ()=>initialState
    },
    extraReducers: (builder)=>{
        builder.addMatcher(_services__WEBPACK_IMPORTED_MODULE_4__/* .walletApi */ .y2.endpoints.getUserSubscriptionInfo.matchFulfilled, (state, param)=>{
            let { payload } = param;
            if (state.initialized || payload.interval !== _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_0__/* .CanonicalInterval */ .AT.monthly && payload.interval !== _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_0__/* .CanonicalInterval */ .AT.annually) {
                return;
            }
            state.selectedPeriod = !!payload.interval ? payload.interval : _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_0__/* .CanonicalInterval */ .AT.annually;
            if (payload.interval === _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_0__/* .CanonicalInterval */ .AT.monthly) {
                state.selectedPlanSetByFamily = {
                    ..._constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_UPDATE_MONTHLY_PLAN_KIND_MAP */ .mWj,
                    [_gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_0__/* .PlanFamily */ .mX.undefined]: _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_0__/* .PlanKind */ .UL['standard-monthly']
                };
            }
            if (payload.interval === _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_0__/* .CanonicalInterval */ .AT.annually) {
                state.selectedPlanSetByFamily = {
                    ..._constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_UPDATE_ANNUALLY_PLAN_KIND_MAP */ .rI1,
                    [_gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_0__/* .PlanFamily */ .mX.undefined]: _gen_wallet_api_models__WEBPACK_IMPORTED_MODULE_0__/* .PlanKind */ .UL['standard-annually']
                };
            }
            state.initialized = true;
        });
    }
});
const paymentControlState = (state)=>state.paymentControl;
const { setIsPaymentModalOpen, setPaymentModalTitle, setSelectedPeriod, setSelectedPlanByFamily, resetPaymentControl, setSelectedFamily, setPaymentUpgradeOptionsModal, setRequestUsageTableOpen, setSelectedPaymentTab } = paymentControlSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paymentControlSlice.reducer);


/***/ }),

/***/ 87518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ri: () => (/* binding */ logout)
/* harmony export */ });
/* unused harmony export logoutSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26286);

const logoutSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__/* .createSlice */ .Z0)({
    name: 'logout',
    initialState: null,
    reducers: {
        logout: ()=>undefined
    }
});
const { logout } = logoutSlice.actions;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (logoutSlice.reducer);


/***/ })

}]);
//# sourceMappingURL=3057-9573793e8fca3abe.js.map