"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[281],{

/***/ 1133:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K7: () => (/* binding */ DEFAULT_RETRY_ATTEMPTS),
/* harmony export */   Q8: () => (/* binding */ AMZ_SDK_REQUEST_HEADER),
/* harmony export */   jy: () => (/* binding */ AMZ_SDK_INVOCATION_ID_HEADER),
/* harmony export */   mU: () => (/* binding */ DEFAULT_MAX_DELAY_MS)
/* harmony export */ });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const DEFAULT_RETRY_ATTEMPTS = 3;
const AMZ_SDK_INVOCATION_ID_HEADER = 'amz-sdk-invocation-id';
const AMZ_SDK_REQUEST_HEADER = 'amz-sdk-request';
const DEFAULT_MAX_DELAY_MS = 5 * 60 * 1000;


//# sourceMappingURL=constants.mjs.map


/***/ }),

/***/ 2035:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ composeTransferHandler)
/* harmony export */ });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Compose a transfer handler with a core transfer handler and a list of middleware.
 * @param coreHandler Core transfer handler
 * @param middleware	List of middleware
 * @returns A transfer handler whose option type is the union of the core
 * 	transfer handler's option type and the middleware's option type.
 * @internal
 */
const composeTransferHandler = (coreHandler, middleware) => (request, options) => {
    const context = {};
    let composedHandler = (composeHandlerRequest) => coreHandler(composeHandlerRequest, options);
    for (let i = middleware.length - 1; i >= 0; i--) {
        const m = middleware[i];
        const resolvedMiddleware = m(options);
        composedHandler = resolvedMiddleware(composedHandler, context);
    }
    return composedHandler(request);
};


//# sourceMappingURL=composeTransferHandler.mjs.map


/***/ }),

/***/ 2223:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ AmplifyUrl)
/* harmony export */ });
/* unused harmony export AmplifyUrlSearchParams */
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const AmplifyUrl = URL;
const AmplifyUrlSearchParams = (/* unused pure expression or super */ null && (URLSearchParams));


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 3015:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ parseMetadata)
/* harmony export */ });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const parseMetadata = (response) => {
    const { headers, statusCode } = response;
    return {
        ...(isMetadataBearer(response) ? response.$metadata : {}),
        httpStatusCode: statusCode,
        requestId: headers['x-amzn-requestid'] ??
            headers['x-amzn-request-id'] ??
            headers['x-amz-request-id'],
        extendedRequestId: headers['x-amz-id-2'],
        cfId: headers['x-amz-cf-id'],
    };
};
const isMetadataBearer = (response) => typeof response?.$metadata === 'object';


//# sourceMappingURL=responseInfo.mjs.map


/***/ }),

/***/ 5431:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ getRegionFromIdentityPoolId),
/* harmony export */   J: () => (/* binding */ getRegionFromUserPoolId)
/* harmony export */ });
/* harmony import */ var _errors_AuthError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39820);


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function getRegionFromUserPoolId(userPoolId) {
    const region = userPoolId?.split('_')[0];
    if (!userPoolId ||
        userPoolId.indexOf('_') < 0 ||
        !region ||
        typeof region !== 'string')
        throw new _errors_AuthError_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AuthError */ .l({
            name: 'InvalidUserPoolId',
            message: 'Invalid user pool id provided.',
        });
    return region;
}
function getRegionFromIdentityPoolId(identityPoolId) {
    if (!identityPoolId || !identityPoolId.includes(':')) {
        throw new _errors_AuthError_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AuthError */ .l({
            name: 'InvalidIdentityPoolIdException',
            message: 'Invalid identity pool id provided.',
            recoverySuggestion: 'Make sure a valid identityPoolId is given in the config.',
        });
    }
    return identityPoolId.split(':')[0];
}


//# sourceMappingURL=regionParsers.mjs.map


/***/ }),

/***/ 7714:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ cognitoUserPoolTransferHandler)
/* harmony export */ });
/* harmony import */ var _aws_amplify_core_internals_aws_client_utils_composers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2035);
/* harmony import */ var _aws_amplify_core_internals_aws_client_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61740);



// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * A Cognito Identity-specific middleware that disables caching for all requests.
 */
const disableCacheMiddlewareFactory = () => (next, _) => async function disableCacheMiddleware(request) {
    request.headers['cache-control'] = 'no-store';
    return next(request);
};
/**
 * A Cognito Identity-specific transfer handler that does NOT sign requests, and
 * disables caching.
 *
 * @internal
 */
const cognitoUserPoolTransferHandler = (0,_aws_amplify_core_internals_aws_client_utils_composers__WEBPACK_IMPORTED_MODULE_0__/* .composeTransferHandler */ .q)(_aws_amplify_core_internals_aws_client_utils__WEBPACK_IMPORTED_MODULE_1__/* .unauthenticatedHandler */ .F, [disableCacheMiddlewareFactory]);


//# sourceMappingURL=cognitoUserPoolTransferHandler.mjs.map


/***/ }),

/***/ 9588:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BM: () => (/* binding */ AuthAction),
/* harmony export */   ID: () => (/* binding */ GeoAction),
/* harmony export */   b7: () => (/* binding */ Category),
/* harmony export */   dT: () => (/* binding */ Framework),
/* harmony export */   r5: () => (/* binding */ InAppMessagingAction),
/* harmony export */   rn: () => (/* binding */ AiAction),
/* harmony export */   sZ: () => (/* binding */ StorageAction)
/* harmony export */ });
/* unused harmony exports AnalyticsAction, ApiAction, DataStoreAction, InteractionsAction, PredictionsAction, PubSubAction, PushNotificationAction */
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var Framework;
(function (Framework) {
    // < 100 - Web frameworks
    Framework["WebUnknown"] = "0";
    Framework["React"] = "1";
    Framework["NextJs"] = "2";
    Framework["Angular"] = "3";
    Framework["VueJs"] = "4";
    Framework["Nuxt"] = "5";
    Framework["Svelte"] = "6";
    // 100s - Server side frameworks
    Framework["ServerSideUnknown"] = "100";
    Framework["ReactSSR"] = "101";
    Framework["NextJsSSR"] = "102";
    Framework["AngularSSR"] = "103";
    Framework["VueJsSSR"] = "104";
    Framework["NuxtSSR"] = "105";
    Framework["SvelteSSR"] = "106";
    // 200s - Mobile framework
    Framework["ReactNative"] = "201";
    Framework["Expo"] = "202";
})(Framework || (Framework = {}));
var Category;
(function (Category) {
    Category["AI"] = "ai";
    Category["API"] = "api";
    Category["Auth"] = "auth";
    Category["Analytics"] = "analytics";
    Category["DataStore"] = "datastore";
    Category["Geo"] = "geo";
    Category["InAppMessaging"] = "inappmessaging";
    Category["Interactions"] = "interactions";
    Category["Predictions"] = "predictions";
    Category["PubSub"] = "pubsub";
    Category["PushNotification"] = "pushnotification";
    Category["Storage"] = "storage";
})(Category || (Category = {}));
var AiAction;
(function (AiAction) {
    AiAction["CreateConversation"] = "1";
    AiAction["GetConversation"] = "2";
    AiAction["ListConversations"] = "3";
    AiAction["DeleteConversation"] = "4";
    AiAction["SendMessage"] = "5";
    AiAction["ListMessages"] = "6";
    AiAction["OnMessage"] = "7";
    AiAction["Generation"] = "8";
    AiAction["UpdateConversation"] = "9";
})(AiAction || (AiAction = {}));
var AnalyticsAction;
(function (AnalyticsAction) {
    AnalyticsAction["Record"] = "1";
    AnalyticsAction["IdentifyUser"] = "2";
})(AnalyticsAction || (AnalyticsAction = {}));
var ApiAction;
(function (ApiAction) {
    ApiAction["GraphQl"] = "1";
    ApiAction["Get"] = "2";
    ApiAction["Post"] = "3";
    ApiAction["Put"] = "4";
    ApiAction["Patch"] = "5";
    ApiAction["Del"] = "6";
    ApiAction["Head"] = "7";
})(ApiAction || (ApiAction = {}));
var AuthAction;
(function (AuthAction) {
    AuthAction["SignUp"] = "1";
    AuthAction["ConfirmSignUp"] = "2";
    AuthAction["ResendSignUpCode"] = "3";
    AuthAction["SignIn"] = "4";
    AuthAction["FetchMFAPreference"] = "6";
    AuthAction["UpdateMFAPreference"] = "7";
    AuthAction["SetUpTOTP"] = "10";
    AuthAction["VerifyTOTPSetup"] = "11";
    AuthAction["ConfirmSignIn"] = "12";
    AuthAction["DeleteUserAttributes"] = "15";
    AuthAction["DeleteUser"] = "16";
    AuthAction["UpdateUserAttributes"] = "17";
    AuthAction["FetchUserAttributes"] = "18";
    AuthAction["ConfirmUserAttribute"] = "22";
    AuthAction["SignOut"] = "26";
    AuthAction["UpdatePassword"] = "27";
    AuthAction["ResetPassword"] = "28";
    AuthAction["ConfirmResetPassword"] = "29";
    AuthAction["FederatedSignIn"] = "30";
    AuthAction["RememberDevice"] = "32";
    AuthAction["ForgetDevice"] = "33";
    AuthAction["FetchDevices"] = "34";
    AuthAction["SendUserAttributeVerificationCode"] = "35";
    AuthAction["SignInWithRedirect"] = "36";
    AuthAction["StartWebAuthnRegistration"] = "37";
    AuthAction["CompleteWebAuthnRegistration"] = "38";
    AuthAction["ListWebAuthnCredentials"] = "39";
    AuthAction["DeleteWebAuthnCredential"] = "40";
})(AuthAction || (AuthAction = {}));
var DataStoreAction;
(function (DataStoreAction) {
    DataStoreAction["Subscribe"] = "1";
    DataStoreAction["GraphQl"] = "2";
})(DataStoreAction || (DataStoreAction = {}));
var GeoAction;
(function (GeoAction) {
    GeoAction["SearchByText"] = "0";
    GeoAction["SearchByCoordinates"] = "1";
    GeoAction["SearchForSuggestions"] = "2";
    GeoAction["SearchByPlaceId"] = "3";
    GeoAction["SaveGeofences"] = "4";
    GeoAction["GetGeofence"] = "5";
    GeoAction["ListGeofences"] = "6";
    GeoAction["DeleteGeofences"] = "7";
})(GeoAction || (GeoAction = {}));
var InAppMessagingAction;
(function (InAppMessagingAction) {
    InAppMessagingAction["SyncMessages"] = "1";
    InAppMessagingAction["IdentifyUser"] = "2";
    InAppMessagingAction["NotifyMessageInteraction"] = "3";
})(InAppMessagingAction || (InAppMessagingAction = {}));
var InteractionsAction;
(function (InteractionsAction) {
    InteractionsAction["None"] = "0";
})(InteractionsAction || (InteractionsAction = {}));
var PredictionsAction;
(function (PredictionsAction) {
    PredictionsAction["Convert"] = "1";
    PredictionsAction["Identify"] = "2";
    PredictionsAction["Interpret"] = "3";
})(PredictionsAction || (PredictionsAction = {}));
var PubSubAction;
(function (PubSubAction) {
    PubSubAction["Subscribe"] = "1";
})(PubSubAction || (PubSubAction = {}));
var PushNotificationAction;
(function (PushNotificationAction) {
    PushNotificationAction["InitializePushNotifications"] = "1";
    PushNotificationAction["IdentifyUser"] = "2";
})(PushNotificationAction || (PushNotificationAction = {}));
var StorageAction;
(function (StorageAction) {
    StorageAction["UploadData"] = "1";
    StorageAction["DownloadData"] = "2";
    StorageAction["List"] = "3";
    StorageAction["Copy"] = "4";
    StorageAction["Remove"] = "5";
    StorageAction["GetProperties"] = "6";
    StorageAction["GetUrl"] = "7";
    StorageAction["GetDataAccess"] = "8";
    StorageAction["ListCallerAccessGrants"] = "9";
})(StorageAction || (StorageAction = {}));


//# sourceMappingURL=types.mjs.map


/***/ }),

/***/ 10005:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ DEFAULT_SERVICE_CLIENT_API_CONFIG)
/* harmony export */ });
/* harmony import */ var _aws_amplify_core_internals_aws_client_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30861);
/* harmony import */ var _aws_amplify_core_internals_aws_client_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47192);
/* harmony import */ var _aws_amplify_core_internals_aws_client_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53110);
/* harmony import */ var _aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78735);
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79301);




// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const DEFAULT_SERVICE_CLIENT_API_CONFIG = {
    service: _constants_mjs__WEBPACK_IMPORTED_MODULE_0__/* .COGNITO_IDP_SERVICE_NAME */ .M,
    retryDecider: (0,_aws_amplify_core_internals_aws_client_utils__WEBPACK_IMPORTED_MODULE_1__/* .getRetryDecider */ .D)(_aws_amplify_core_internals_aws_client_utils__WEBPACK_IMPORTED_MODULE_2__/* .parseJsonError */ .F),
    computeDelay: _aws_amplify_core_internals_aws_client_utils__WEBPACK_IMPORTED_MODULE_3__/* .jitteredBackoff */ .y,
    get userAgentValue() {
        return (0,_aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_4__/* .getAmplifyUserAgent */ .fE)();
    },
    cache: 'no-store',
};


//# sourceMappingURL=constants.mjs.map


/***/ }),

/***/ 11529:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ composeServiceApi)
/* harmony export */ });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Compose a service API handler that accepts input as defined shape and responds conforming to defined output shape.
 * A service API handler is composed with:
 * * A transfer handler
 * * A serializer function
 * * A deserializer function
 * * A default config object
 *
 * The returned service API handler, when called, will trigger the following workflow:
 * 1. When calling the service API handler function, the default config object is merged into the input config
 * object to assign the default values of some omitted configs, resulting to a resolved config object.
 * 2. The `endpointResolver` function from the default config object will be invoked with the resolved config object and
 * API input object resulting to an endpoint instance.
 * 3. The serializer function is invoked with API input object and the endpoint instance resulting to an HTTP request
 * instance.
 * 4. The HTTP request instance and the resolved config object is passed to the transfer handler function.
 * 5. The transfer handler function resolves to an HTTP response instance(can be either successful or failed status code).
 * 6. The deserializer function is invoked with the HTTP response instance resulting to the API output object, and
 * return to the caller.
 *
 *
 * @param transferHandler Async function for dispatching HTTP requests and returning HTTP response.
 * @param serializer  Async function for converting object in defined input shape into HTTP request targeting a given
 * 	endpoint.
 * @param deserializer Async function for converting HTTP response into output object in defined output shape, or error
 * 	shape.
 * @param defaultConfig  object containing default options to be consumed by transfer handler, serializer and
 *  deserializer.
 * @returns a async service API handler function that accepts a config object and input object in defined shape, returns
 * 	an output object in defined shape. It may also throw error instance in defined shape in deserializer. The config
 *  object type is composed with options type of transferHandler, endpointResolver function as well as endpointResolver
 *  function's input options type, region string. The config object property will be marked as optional if it's also
 * 	defined in defaultConfig.
 *
 * @internal
 */
const composeServiceApi = (transferHandler, serializer, deserializer, defaultConfig) => {
    return async (config, input) => {
        const resolvedConfig = {
            ...defaultConfig,
            ...config,
        };
        // We need to allow different endpoints based on both given config(other than region) and input.
        // However for most of non-S3 services, region is the only input for endpoint resolver.
        const endpoint = await resolvedConfig.endpointResolver(resolvedConfig, input);
        // Unlike AWS SDK clients, a serializer should NOT populate the `host` or `content-length` headers.
        // Both of these headers are prohibited per Spec(https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name).
        // They will be populated automatically by browser, or node-fetch polyfill.
        const request = await serializer(input, endpoint);
        const response = await transferHandler(request, {
            ...resolvedConfig,
        });
        return deserializer(response);
    };
};


//# sourceMappingURL=composeServiceApi.mjs.map


/***/ }),

/***/ 22411:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ createCognitoUserPoolEndpointResolver)
});

// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/utils/amplifyUrl/index.mjs
var amplifyUrl = __webpack_require__(2223);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/clients/endpoints/getDnsSuffix.mjs + 1 modules
var getDnsSuffix = __webpack_require__(26239);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/foundation/constants.mjs
var constants = __webpack_require__(79301);
;// ./node_modules/@aws-amplify/auth/dist/esm/foundation/cognitoUserPoolEndpointResolver.mjs




// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const cognitoUserPoolEndpointResolver = ({ region, }) => ({
    url: new amplifyUrl/* AmplifyUrl */.o(`https://${constants/* COGNITO_IDP_SERVICE_NAME */.M}.${region}.${(0,getDnsSuffix/* getDnsSuffix */.R)(region)}`),
});


//# sourceMappingURL=cognitoUserPoolEndpointResolver.mjs.map

;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs



const createCognitoUserPoolEndpointResolver = ({ endpointOverride }) => (input) => {
    if (endpointOverride) {
        return { url: new amplifyUrl/* AmplifyUrl */.o(endpointOverride) };
    }
    return cognitoUserPoolEndpointResolver(input);
};


//# sourceMappingURL=createCognitoUserPoolEndpointResolver.mjs.map


/***/ }),

/***/ 23411:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ createAssertionFunction)
/* harmony export */ });
/* harmony import */ var _AmplifyError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35993);


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createAssertionFunction = (errorMap, AssertionError = _AmplifyError_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AmplifyError */ .x) => (assertion, name, additionalContext) => {
    const { message, recoverySuggestion } = errorMap[name];
    if (!assertion) {
        throw new AssertionError({
            name,
            message: additionalContext
                ? `${message} ${additionalContext}`
                : message,
            recoverySuggestion,
        });
    }
};


//# sourceMappingURL=createAssertionFunction.mjs.map


/***/ }),

/***/ 24471:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ oAuthStore)
/* harmony export */ });
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42014);
/* harmony import */ var _signInWithRedirectStore_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81230);



// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const oAuthStore = new _signInWithRedirectStore_mjs__WEBPACK_IMPORTED_MODULE_0__/* .DefaultOAuthStore */ .S(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__/* .defaultStorage */ .ZL);


//# sourceMappingURL=oAuthStore.mjs.map


/***/ }),

/***/ 26239:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* binding */ getDnsSuffix)
});

;// ./node_modules/@aws-amplify/core/dist/esm/clients/endpoints/partitions.mjs
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Default partition for AWS services. This is used when the region is not provided or the region is not recognized.
 *
 * @internal
 */
const defaultPartition = {
    id: 'aws',
    outputs: {
        dnsSuffix: 'amazonaws.com',
    },
    regionRegex: '^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$',
    regions: ['aws-global'],
};
/**
 * This data is adapted from the partition file from AWS SDK shared utilities but remove some contents for bundle size
 * concern. Information removed are `dualStackDnsSuffix`, `supportDualStack`, `supportFIPS`, restricted partitions, and
 * list of regions for each partition other than global regions.
 *
 * * Ref: https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints
 * * Ref: https://github.com/aws/aws-sdk-js-v3/blob/0201baef03c2379f1f6f7150b9d401d4b230d488/packages/util-endpoints/src/lib/aws/partitions.json#L1
 *
 * @internal
 */
const partitionsInfo = {
    partitions: [
        defaultPartition,
        {
            id: 'aws-cn',
            outputs: {
                dnsSuffix: 'amazonaws.com.cn',
            },
            regionRegex: '^cn\\-\\w+\\-\\d+$',
            regions: ['aws-cn-global'],
        },
    ],
};


//# sourceMappingURL=partitions.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/clients/endpoints/getDnsSuffix.mjs


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Get the AWS Services endpoint URL's DNS suffix for a given region. A typical AWS regional service endpoint URL will
 * follow this pattern: {endpointPrefix}.{region}.{dnsSuffix}. For example, the endpoint URL for Cognito Identity in
 * us-east-1 will be cognito-identity.us-east-1.amazonaws.com. Here the DnsSuffix is `amazonaws.com`.
 *
 * @param region
 * @returns The DNS suffix
 *
 * @internal
 */
const getDnsSuffix = (region) => {
    const { partitions } = partitionsInfo;
    for (const { regions, outputs, regionRegex } of partitions) {
        const regex = new RegExp(regionRegex);
        if (regions.includes(region) || regex.test(region)) {
            return outputs.dnsSuffix;
        }
    }
    return defaultPartition.outputs.dnsSuffix;
};


//# sourceMappingURL=getDnsSuffix.mjs.map


/***/ }),

/***/ 26348:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ AmplifyErrorCode)
/* harmony export */ });
var AmplifyErrorCode;
(function (AmplifyErrorCode) {
    AmplifyErrorCode["NoEndpointId"] = "NoEndpointId";
    AmplifyErrorCode["PlatformNotSupported"] = "PlatformNotSupported";
    AmplifyErrorCode["Unknown"] = "Unknown";
    AmplifyErrorCode["NetworkError"] = "NetworkError";
})(AmplifyErrorCode || (AmplifyErrorCode = {}));


//# sourceMappingURL=errors.mjs.map


/***/ }),

/***/ 30861:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ getRetryDecider)
});

// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/types/errors.mjs
var errors = __webpack_require__(26348);
;// ./node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/isClockSkewError.mjs
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// via https://github.com/aws/aws-sdk-js-v3/blob/ab0e7be36e7e7f8a0c04834357aaad643c7912c3/packages/service-error-classification/src/constants.ts#L8
const CLOCK_SKEW_ERROR_CODES = [
    'AuthFailure',
    'InvalidSignatureException',
    'RequestExpired',
    'RequestInTheFuture',
    'RequestTimeTooSkewed',
    'SignatureDoesNotMatch',
    'BadRequestException', // API Gateway
];
/**
 * Given an error code, returns true if it is related to a clock skew error.
 *
 * @param errorCode String representation of some error.
 * @returns True if given error is present in `CLOCK_SKEW_ERROR_CODES`, false otherwise.
 *
 * @internal
 */
const isClockSkewError = (errorCode) => !!errorCode && CLOCK_SKEW_ERROR_CODES.includes(errorCode);


//# sourceMappingURL=isClockSkewError.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/defaultRetryDecider.mjs



// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Get retry decider function
 * @param errorParser Function to load JavaScript error from HTTP response
 */
const getRetryDecider = (errorParser) => async (response, error) => {
    const parsedError = error ??
        (await errorParser(response)) ??
        undefined;
    const errorCode = parsedError?.code || parsedError?.name;
    const statusCode = response?.statusCode;
    const isRetryable = isConnectionError(error) ||
        isThrottlingError(statusCode, errorCode) ||
        isClockSkewError(errorCode) ||
        isServerSideError(statusCode, errorCode);
    return {
        retryable: isRetryable,
    };
};
// reference: https://github.com/aws/aws-sdk-js-v3/blob/ab0e7be36e7e7f8a0c04834357aaad643c7912c3/packages/service-error-classification/src/constants.ts#L22-L37
const THROTTLING_ERROR_CODES = [
    'BandwidthLimitExceeded',
    'EC2ThrottledException',
    'LimitExceededException',
    'PriorRequestNotComplete',
    'ProvisionedThroughputExceededException',
    'RequestLimitExceeded',
    'RequestThrottled',
    'RequestThrottledException',
    'SlowDown',
    'ThrottledException',
    'Throttling',
    'ThrottlingException',
    'TooManyRequestsException',
];
const TIMEOUT_ERROR_CODES = [
    'TimeoutError',
    'RequestTimeout',
    'RequestTimeoutException',
];
const isThrottlingError = (statusCode, errorCode) => statusCode === 429 ||
    (!!errorCode && THROTTLING_ERROR_CODES.includes(errorCode));
const isConnectionError = (error) => [
    errors/* AmplifyErrorCode */.m.NetworkError,
    // TODO(vNext): unify the error code `ERR_NETWORK` used by the Storage XHR handler
    'ERR_NETWORK',
].includes(error?.name);
const isServerSideError = (statusCode, errorCode) => (!!statusCode && [500, 502, 503, 504].includes(statusCode)) ||
    (!!errorCode && TIMEOUT_ERROR_CODES.includes(errorCode));


//# sourceMappingURL=defaultRetryDecider.mjs.map


/***/ }),

/***/ 31622:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ base64Decoder)
/* harmony export */ });
/* harmony import */ var _globalHelpers_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88968);


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const base64Decoder = {
    convert(input, options) {
        let inputStr = input;
        // urlSafe character replacement options conform to the base64 url spec
        // https://datatracker.ietf.org/doc/html/rfc4648#page-7
        if (options?.urlSafe) {
            inputStr = inputStr.replace(/-/g, '+').replace(/_/g, '/');
        }
        return (0,_globalHelpers_index_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getAtob */ .nW)()(inputStr);
    },
};


//# sourceMappingURL=base64Decoder.mjs.map


/***/ }),

/***/ 35414:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ openAuthSession)
/* harmony export */ });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const openAuthSession = async (url) => {
    if (!window?.location) {
        return;
    }
    // enforce HTTPS
    window.location.href = url.replace('http://', 'https://');
};


//# sourceMappingURL=openAuthSession.mjs.map


/***/ }),

/***/ 39820:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ AuthError)
/* harmony export */ });
/* harmony import */ var _aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35993);


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class AuthError extends _aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_0__/* .AmplifyError */ .x {
    constructor(params) {
        super(params);
        // Hack for making the custom error class work when transpiled to es5
        // TODO: Delete the following 2 lines after we change the build target to >= es2015
        this.constructor = AuthError;
        Object.setPrototypeOf(this, AuthError.prototype);
    }
}


//# sourceMappingURL=AuthError.mjs.map


/***/ }),

/***/ 40281:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ signOut)
});

// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/Logger/ConsoleLogger.mjs + 1 modules
var ConsoleLogger = __webpack_require__(94389);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs + 2 modules
var Amplify = __webpack_require__(64016);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/storage/index.mjs + 8 modules
var storage = __webpack_require__(42014);
;// ./node_modules/@aws-amplify/core/dist/esm/singleton/apis/clearCredentials.mjs


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function clearCredentials() {
    return Amplify/* Amplify */.H.Auth.clearCredentials();
}


//# sourceMappingURL=clearCredentials.mjs.map

// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/Hub/index.mjs
var Hub = __webpack_require__(35943);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs + 1 modules
var utils = __webpack_require__(50160);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs
var types = __webpack_require__(9588);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs
var getAuthUserAgentValue = __webpack_require__(82993);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs
var AuthError = __webpack_require__(39820);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/signInWithRedirectStore.mjs
var signInWithRedirectStore = __webpack_require__(81230);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/tokenProvider.mjs + 6 modules
var tokenProvider = __webpack_require__(62843);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs
var regionParsers = __webpack_require__(5431);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/types.mjs
var utils_types = __webpack_require__(74652);
// EXTERNAL MODULE: ./node_modules/@aws-crypto/sha256-js/build/module/index.js + 7 modules
var build_module = __webpack_require__(73739);
;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/completeOAuthSignOut.mjs







// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const completeOAuthSignOut = async (store) => {
    await store.clearOAuthData();
    tokenProvider/* tokenOrchestrator */.o.clearTokens();
    await clearCredentials();
    Hub/* Hub */.YZ.dispatch('auth', { event: 'signedOut' }, 'Auth', Hub/* AMPLIFY_SYMBOL */.U9);
};


//# sourceMappingURL=completeOAuthSignOut.mjs.map

// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/utils/openAuthSession.mjs
var openAuthSession = __webpack_require__(35414);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/getRedirectUrl.mjs
var getRedirectUrl = __webpack_require__(58552);
;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/oAuthSignOutRedirect.mjs




// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const oAuthSignOutRedirect = async (authConfig, preferPrivateSession = false, redirectUrl) => {
    (0,utils/* assertOAuthConfig */.G6)(authConfig);
    const { loginWith, userPoolClientId } = authConfig;
    const { domain, redirectSignOut } = loginWith.oauth;
    const signoutUri = (0,getRedirectUrl/* getRedirectUrl */.M)(redirectSignOut, redirectUrl);
    const oAuthLogoutEndpoint = `https://${domain}/logout?${Object.entries({
        client_id: userPoolClientId,
        logout_uri: encodeURIComponent(signoutUri),
    })
        .map(([k, v]) => `${k}=${v}`)
        .join('&')}`;
    return (0,openAuthSession/* openAuthSession */.z)(oAuthLogoutEndpoint);
};


//# sourceMappingURL=oAuthSignOutRedirect.mjs.map

;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/handleOAuthSignOut.mjs



// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const handleOAuthSignOut = async (cognitoConfig, store, tokenOrchestrator, redirectUrl) => {
    const { isOAuthSignIn } = await store.loadOAuthSignIn();
    const oauthMetadata = await tokenOrchestrator.getOAuthMetadata();
    // Clear everything before attempting to visted logout endpoint since the current application
    // state could be wiped away on redirect
    await completeOAuthSignOut(store);
    // The isOAuthSignIn flag is propagated by the oAuthToken store which manages oauth keys in local storage only.
    // These keys are used to determine if a user is in an inflight or signedIn oauth states.
    // However, this behavior represents an issue when 2 apps share the same set of tokens in Cookie storage because the app that didn't
    // start the OAuth will not have access to the oauth keys.
    // A heuristic solution is to add oauth metadata to the tokenOrchestrator which will have access to the underlying
    // storage mechanism that is used by Amplify.
    if (isOAuthSignIn || oauthMetadata?.oauthSignIn) {
        // On web, this will always end up being a void action
        return oAuthSignOutRedirect(cognitoConfig, false, redirectUrl);
    }
};


//# sourceMappingURL=handleOAuthSignOut.mjs.map

// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/errors/constants.mjs
var constants = __webpack_require__(44715);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs
var composeServiceApi = __webpack_require__(11529);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/handler/cognitoUserPoolTransferHandler.mjs
var cognitoUserPoolTransferHandler = __webpack_require__(7714);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolSerializer.mjs
var createUserPoolSerializer = __webpack_require__(48701);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolDeserializer.mjs
var createUserPoolDeserializer = __webpack_require__(66572);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/constants.mjs
var cognitoIdentityProvider_constants = __webpack_require__(10005);
;// ./node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createRevokeTokenClient.mjs








// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createRevokeTokenClient = (config) => (0,composeServiceApi/* composeServiceApi */.A)(cognitoUserPoolTransferHandler/* cognitoUserPoolTransferHandler */.e, (0,createUserPoolSerializer/* createUserPoolSerializer */._)('RevokeToken'), (0,createUserPoolDeserializer/* createUserPoolDeserializer */.T)(), {
    ...cognitoIdentityProvider_constants/* DEFAULT_SERVICE_CLIENT_API_CONFIG */.C,
    ...config,
});


//# sourceMappingURL=createRevokeTokenClient.mjs.map

;// ./node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createGlobalSignOutClient.mjs








// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createGlobalSignOutClient = (config) => (0,composeServiceApi/* composeServiceApi */.A)(cognitoUserPoolTransferHandler/* cognitoUserPoolTransferHandler */.e, (0,createUserPoolSerializer/* createUserPoolSerializer */._)('GlobalSignOut'), (0,createUserPoolDeserializer/* createUserPoolDeserializer */.T)(), {
    ...cognitoIdentityProvider_constants/* DEFAULT_SERVICE_CLIENT_API_CONFIG */.C,
    ...config,
});


//# sourceMappingURL=createGlobalSignOutClient.mjs.map

// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs + 1 modules
var createCognitoUserPoolEndpointResolver = __webpack_require__(22411);
;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signOut.mjs


























// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger = new ConsoleLogger/* ConsoleLogger */.C('Auth');
/**
 * Signs a user out
 *
 * @param input - The SignOutInput object
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */
async function signOut(input) {
    const cognitoConfig = Amplify/* Amplify */.H.getConfig().Auth?.Cognito;
    (0,utils/* assertTokenProviderConfig */.$y)(cognitoConfig);
    if (input?.global) {
        await globalSignOut(cognitoConfig);
    }
    else {
        await clientSignOut(cognitoConfig);
    }
    let hasOAuthConfig;
    try {
        (0,utils/* assertOAuthConfig */.G6)(cognitoConfig);
        hasOAuthConfig = true;
    }
    catch (err) {
        hasOAuthConfig = false;
    }
    if (hasOAuthConfig) {
        const oAuthStore = new signInWithRedirectStore/* DefaultOAuthStore */.S(storage/* defaultStorage */.ZL);
        oAuthStore.setAuthConfig(cognitoConfig);
        const { type } = (await handleOAuthSignOut(cognitoConfig, oAuthStore, tokenProvider/* tokenOrchestrator */.o, input?.oauth?.redirectUrl)) ?? {};
        if (type === 'error') {
            throw new AuthError/* AuthError */.l({
                name: constants/* OAUTH_SIGNOUT_EXCEPTION */.mh,
                message: `An error occurred when attempting to log out from OAuth provider.`,
            });
        }
    }
    else {
        // complete sign out
        tokenProvider/* tokenOrchestrator */.o.clearTokens();
        await clearCredentials();
        Hub/* Hub */.YZ.dispatch('auth', { event: 'signedOut' }, 'Auth', Hub/* AMPLIFY_SYMBOL */.U9);
    }
}
async function clientSignOut(cognitoConfig) {
    try {
        const { userPoolEndpoint, userPoolId, userPoolClientId } = cognitoConfig;
        const authTokens = await tokenProvider/* tokenOrchestrator */.o.getTokenStore().loadTokens();
        (0,utils_types/* assertAuthTokensWithRefreshToken */.X4)(authTokens);
        if (isSessionRevocable(authTokens.accessToken)) {
            const revokeToken = createRevokeTokenClient({
                endpointResolver: (0,createCognitoUserPoolEndpointResolver/* createCognitoUserPoolEndpointResolver */.o)({
                    endpointOverride: userPoolEndpoint,
                }),
            });
            await revokeToken({
                region: (0,regionParsers/* getRegionFromUserPoolId */.J)(userPoolId),
                userAgentValue: (0,getAuthUserAgentValue/* getAuthUserAgentValue */.A)(types/* AuthAction */.BM.SignOut),
            }, {
                ClientId: userPoolClientId,
                Token: authTokens.refreshToken,
            });
        }
    }
    catch (err) {
        // this shouldn't throw
        logger.debug('Client signOut error caught but will proceed with token removal');
    }
}
async function globalSignOut(cognitoConfig) {
    try {
        const { userPoolEndpoint, userPoolId } = cognitoConfig;
        const authTokens = await tokenProvider/* tokenOrchestrator */.o.getTokenStore().loadTokens();
        (0,utils_types/* assertAuthTokens */.H0)(authTokens);
        const globalSignOutClient = createGlobalSignOutClient({
            endpointResolver: (0,createCognitoUserPoolEndpointResolver/* createCognitoUserPoolEndpointResolver */.o)({
                endpointOverride: userPoolEndpoint,
            }),
        });
        await globalSignOutClient({
            region: (0,regionParsers/* getRegionFromUserPoolId */.J)(userPoolId),
            userAgentValue: (0,getAuthUserAgentValue/* getAuthUserAgentValue */.A)(types/* AuthAction */.BM.SignOut),
        }, {
            AccessToken: authTokens.accessToken.toString(),
        });
    }
    catch (err) {
        // it should not throw
        logger.debug('Global signOut error caught but will proceed with token removal');
    }
}
const isSessionRevocable = (token) => !!token?.payload?.origin_jti;


//# sourceMappingURL=signOut.mjs.map


/***/ }),

/***/ 41113:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ isBrowser)
/* harmony export */ });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const isBrowser = () => typeof window !== 'undefined' && typeof window.document !== 'undefined';


//# sourceMappingURL=isBrowser.mjs.map


/***/ }),

/***/ 42014:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZL: () => (/* binding */ defaultStorage),
  pR: () => (/* binding */ syncSessionStorage)
});

// UNUSED EXPORTS: CookieStorage, sessionStorage, sharedInMemoryStorage

// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/types/errors.mjs
var errors = __webpack_require__(26348);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/errors/AmplifyError.mjs
var AmplifyError = __webpack_require__(35993);
;// ./node_modules/@aws-amplify/core/dist/esm/errors/PlatformNotSupportedError.mjs



// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class PlatformNotSupportedError extends AmplifyError/* AmplifyError */.x {
    constructor() {
        super({
            name: errors/* AmplifyErrorCode */.m.PlatformNotSupported,
            message: 'Function not supported on current platform',
        });
    }
}


//# sourceMappingURL=PlatformNotSupportedError.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/storage/KeyValueStorage.mjs



// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
class KeyValueStorage {
    constructor(storage) {
        this.storage = storage;
    }
    /**
     * This is used to set a specific item in storage
     * @param {string} key - the key for the item
     * @param {object} value - the value
     * @returns {string} value that was set
     */
    async setItem(key, value) {
        if (!this.storage)
            throw new PlatformNotSupportedError();
        this.storage.setItem(key, value);
    }
    /**
     * This is used to get a specific key from storage
     * @param {string} key - the key for the item
     * This is used to clear the storage
     * @returns {string} the data item
     */
    async getItem(key) {
        if (!this.storage)
            throw new PlatformNotSupportedError();
        return this.storage.getItem(key);
    }
    /**
     * This is used to remove an item from storage
     * @param {string} key - the key being set
     * @returns {string} value - value that was deleted
     */
    async removeItem(key) {
        if (!this.storage)
            throw new PlatformNotSupportedError();
        this.storage.removeItem(key);
    }
    /**
     * This is used to clear the storage
     * @returns {string} nothing
     */
    async clear() {
        if (!this.storage)
            throw new PlatformNotSupportedError();
        this.storage.clear();
    }
}


//# sourceMappingURL=KeyValueStorage.mjs.map

// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/Logger/ConsoleLogger.mjs + 1 modules
var ConsoleLogger = __webpack_require__(94389);
;// ./node_modules/@aws-amplify/core/dist/esm/storage/InMemoryStorage.mjs
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
class InMemoryStorage {
    constructor() {
        this.storage = new Map();
    }
    get length() {
        return this.storage.size;
    }
    key(index) {
        if (index > this.length - 1) {
            return null;
        }
        return Array.from(this.storage.keys())[index];
    }
    setItem(key, value) {
        this.storage.set(key, value);
    }
    getItem(key) {
        return this.storage.get(key) ?? null;
    }
    removeItem(key) {
        this.storage.delete(key);
    }
    clear() {
        this.storage.clear();
    }
}


//# sourceMappingURL=InMemoryStorage.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/storage/utils.mjs



// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 * @returns Either a reference to window.localStorage or an in-memory storage as fallback
 */
const logger = new ConsoleLogger/* ConsoleLogger */.C('CoreStorageUtils');
const getLocalStorageWithFallback = () => {
    try {
        // Attempt to use localStorage directly
        if (typeof window !== 'undefined' && window.localStorage) {
            return window.localStorage;
        }
    }
    catch (e) {
        // Handle any errors related to localStorage access
        logger.info('localStorage not found. InMemoryStorage is used as a fallback.');
    }
    // Return in-memory storage as a fallback if localStorage is not accessible
    return new InMemoryStorage();
};
/**
 * @internal
 * @returns Either a reference to window.sessionStorage or an in-memory storage as fallback
 */
const getSessionStorageWithFallback = () => {
    try {
        // Attempt to use sessionStorage directly
        if (typeof window !== 'undefined' && window.sessionStorage) {
            // Verify we can actually use it by testing access
            window.sessionStorage.getItem('test');
            return window.sessionStorage;
        }
        throw new Error('sessionStorage is not defined');
    }
    catch (e) {
        // Handle any errors related to sessionStorage access
        logger.info('sessionStorage not found. InMemoryStorage is used as a fallback.');
        return new InMemoryStorage();
    }
};


//# sourceMappingURL=utils.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/storage/DefaultStorage.mjs



// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
class DefaultStorage extends KeyValueStorage {
    constructor() {
        super(getLocalStorageWithFallback());
    }
}


//# sourceMappingURL=DefaultStorage.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/storage/SessionStorage.mjs



// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
class SessionStorage extends KeyValueStorage {
    constructor() {
        super(getSessionStorageWithFallback());
    }
}


//# sourceMappingURL=SessionStorage.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/storage/SyncKeyValueStorage.mjs



// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
class SyncKeyValueStorage {
    constructor(storage) {
        this._storage = storage;
    }
    get storage() {
        if (!this._storage)
            throw new PlatformNotSupportedError();
        return this._storage;
    }
    /**
     * This is used to set a specific item in storage
     * @param {string} key - the key for the item
     * @param {object} value - the value
     * @returns {string} value that was set
     */
    setItem(key, value) {
        this.storage.setItem(key, value);
    }
    /**
     * This is used to get a specific key from storage
     * @param {string} key - the key for the item
     * This is used to clear the storage
     * @returns {string} the data item
     */
    getItem(key) {
        return this.storage.getItem(key);
    }
    /**
     * This is used to remove an item from storage
     * @param {string} key - the key being set
     * @returns {string} value - value that was deleted
     */
    removeItem(key) {
        this.storage.removeItem(key);
    }
    /**
     * This is used to clear the storage
     * @returns {string} nothing
     */
    clear() {
        this.storage.clear();
    }
}


//# sourceMappingURL=SyncKeyValueStorage.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/storage/SyncSessionStorage.mjs



// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
class SyncSessionStorage extends SyncKeyValueStorage {
    constructor() {
        super(getSessionStorageWithFallback());
    }
}


//# sourceMappingURL=SyncSessionStorage.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/storage/index.mjs







// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const defaultStorage = new DefaultStorage();
const sessionStorage = new SessionStorage();
const syncSessionStorage = new SyncSessionStorage();
const sharedInMemoryStorage = new KeyValueStorage(new InMemoryStorage());


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 44715:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $6: () => (/* binding */ invalidOriginException),
/* harmony export */   A0: () => (/* binding */ AUTO_SIGN_IN_EXCEPTION),
/* harmony export */   Cs: () => (/* binding */ TOKEN_REFRESH_EXCEPTION),
/* harmony export */   RW: () => (/* binding */ invalidRedirectException),
/* harmony export */   jK: () => (/* binding */ invalidPreferredRedirectUrlException),
/* harmony export */   kM: () => (/* binding */ DEVICE_METADATA_NOT_FOUND_EXCEPTION),
/* harmony export */   mh: () => (/* binding */ OAUTH_SIGNOUT_EXCEPTION),
/* harmony export */   yA: () => (/* binding */ UNEXPECTED_SIGN_IN_INTERRUPTION_EXCEPTION),
/* harmony export */   z0: () => (/* binding */ USER_ALREADY_AUTHENTICATED_EXCEPTION),
/* harmony export */   zz: () => (/* binding */ USER_UNAUTHENTICATED_EXCEPTION)
/* harmony export */ });
/* unused harmony exports INVALID_APP_SCHEME_EXCEPTION, INVALID_ORIGIN_EXCEPTION, INVALID_PREFERRED_REDIRECT_EXCEPTION, INVALID_REDIRECT_EXCEPTION, invalidAppSchemeException */
/* harmony import */ var _AuthError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39820);


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const USER_UNAUTHENTICATED_EXCEPTION = 'UserUnAuthenticatedException';
const USER_ALREADY_AUTHENTICATED_EXCEPTION = 'UserAlreadyAuthenticatedException';
const DEVICE_METADATA_NOT_FOUND_EXCEPTION = 'DeviceMetadataNotFoundException';
const AUTO_SIGN_IN_EXCEPTION = 'AutoSignInException';
const INVALID_REDIRECT_EXCEPTION = 'InvalidRedirectException';
const INVALID_APP_SCHEME_EXCEPTION = 'InvalidAppSchemeException';
const INVALID_PREFERRED_REDIRECT_EXCEPTION = 'InvalidPreferredRedirectUrlException';
const invalidRedirectException = new _AuthError_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AuthError */ .l({
    name: INVALID_REDIRECT_EXCEPTION,
    message: 'signInRedirect or signOutRedirect had an invalid format or was not found.',
    recoverySuggestion: 'Please make sure the signIn/Out redirect in your oauth config is valid.',
});
const invalidAppSchemeException = new _AuthError_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AuthError */ .l({
    name: INVALID_APP_SCHEME_EXCEPTION,
    message: 'A valid non-http app scheme was not found in the config.',
    recoverySuggestion: 'Please make sure a valid custom app scheme is present in the config.',
});
const invalidPreferredRedirectUrlException = new _AuthError_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AuthError */ .l({
    name: INVALID_PREFERRED_REDIRECT_EXCEPTION,
    message: 'The given preferredRedirectUrl does not match any items in the redirectSignOutUrls array from the config.',
    recoverySuggestion: 'Please make sure a matching preferredRedirectUrl is provided.',
});
const INVALID_ORIGIN_EXCEPTION = 'InvalidOriginException';
const invalidOriginException = new _AuthError_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AuthError */ .l({
    name: INVALID_ORIGIN_EXCEPTION,
    message: 'redirect is coming from a different origin. The oauth flow needs to be initiated from the same origin',
    recoverySuggestion: 'Please call signInWithRedirect from the same origin.',
});
const OAUTH_SIGNOUT_EXCEPTION = 'OAuthSignOutException';
const TOKEN_REFRESH_EXCEPTION = 'TokenRefreshException';
const UNEXPECTED_SIGN_IN_INTERRUPTION_EXCEPTION = 'UnexpectedSignInInterruptionException';


//# sourceMappingURL=constants.mjs.map


/***/ }),

/***/ 47192:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ parseJsonError),
/* harmony export */   Y: () => (/* binding */ parseJsonBody)
/* harmony export */ });
/* harmony import */ var _responseInfo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3015);


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Utility functions for serializing and deserializing of JSON protocol in general(including: REST-JSON, JSON-RPC, etc.)
 */
/**
 * Error parser for AWS JSON protocol.
 */
const parseJsonError = async (response) => {
    if (!response || response.statusCode < 300) {
        return;
    }
    const body = await parseJsonBody(response);
    const sanitizeErrorCode = (rawValue) => {
        const [cleanValue] = rawValue.toString().split(/[,:]+/);
        if (cleanValue.includes('#')) {
            return cleanValue.split('#')[1];
        }
        return cleanValue;
    };
    const code = sanitizeErrorCode(response.headers['x-amzn-errortype'] ??
        body.code ??
        body.__type ??
        'UnknownError');
    const message = body.message ?? body.Message ?? 'Unknown error';
    const error = new Error(message);
    return Object.assign(error, {
        name: code,
        $metadata: (0,_responseInfo_mjs__WEBPACK_IMPORTED_MODULE_0__/* .parseMetadata */ .j)(response),
    });
};
/**
 * Parse JSON response body to JavaScript object.
 */
const parseJsonBody = async (response) => {
    if (!response.body) {
        throw new Error('Missing response payload');
    }
    const output = await response.body.json();
    return Object.assign(output, {
        $metadata: (0,_responseInfo_mjs__WEBPACK_IMPORTED_MODULE_0__/* .parseMetadata */ .j)(response),
    });
};


//# sourceMappingURL=json.mjs.map


/***/ }),

/***/ 48701:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ createUserPoolSerializer)
/* harmony export */ });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createUserPoolSerializer = (operation) => (input, endpoint) => {
    const headers = getSharedHeaders(operation);
    const body = JSON.stringify(input);
    return buildHttpRpcRequest(endpoint, headers, body);
};
const getSharedHeaders = (operation) => ({
    'content-type': 'application/x-amz-json-1.1',
    'x-amz-target': `AWSCognitoIdentityProviderService.${operation}`,
});
const buildHttpRpcRequest = ({ url }, headers, body) => ({
    headers,
    url,
    body,
    method: 'POST',
});


//# sourceMappingURL=createUserPoolSerializer.mjs.map


/***/ }),

/***/ 50160:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Eh: () => (/* binding */ assertIdentityPoolIdConfig),
  G6: () => (/* binding */ assertOAuthConfig),
  $y: () => (/* binding */ assertTokenProviderConfig),
  Cq: () => (/* binding */ decodeJWT)
});

// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/utils/convert/base64/base64Decoder.mjs
var base64Decoder = __webpack_require__(31622);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/errors/createAssertionFunction.mjs
var createAssertionFunction = __webpack_require__(23411);
;// ./node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/errorHelpers.mjs




// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var AuthConfigurationErrorCode;
(function (AuthConfigurationErrorCode) {
    AuthConfigurationErrorCode["AuthTokenConfigException"] = "AuthTokenConfigException";
    AuthConfigurationErrorCode["AuthUserPoolAndIdentityPoolException"] = "AuthUserPoolAndIdentityPoolException";
    AuthConfigurationErrorCode["AuthUserPoolException"] = "AuthUserPoolException";
    AuthConfigurationErrorCode["InvalidIdentityPoolIdException"] = "InvalidIdentityPoolIdException";
    AuthConfigurationErrorCode["OAuthNotConfigureException"] = "OAuthNotConfigureException";
})(AuthConfigurationErrorCode || (AuthConfigurationErrorCode = {}));
const authConfigurationErrorMap = {
    [AuthConfigurationErrorCode.AuthTokenConfigException]: {
        message: 'Auth Token Provider not configured.',
        recoverySuggestion: 'Make sure to call Amplify.configure in your app.',
    },
    [AuthConfigurationErrorCode.AuthUserPoolAndIdentityPoolException]: {
        message: 'Auth UserPool or IdentityPool not configured.',
        recoverySuggestion: 'Make sure to call Amplify.configure in your app with UserPoolId and IdentityPoolId.',
    },
    [AuthConfigurationErrorCode.AuthUserPoolException]: {
        message: 'Auth UserPool not configured.',
        recoverySuggestion: 'Make sure to call Amplify.configure in your app with userPoolId and userPoolClientId.',
    },
    [AuthConfigurationErrorCode.InvalidIdentityPoolIdException]: {
        message: 'Invalid identity pool id provided.',
        recoverySuggestion: 'Make sure a valid identityPoolId is given in the config.',
    },
    [AuthConfigurationErrorCode.OAuthNotConfigureException]: {
        message: 'oauth param not configured.',
        recoverySuggestion: 'Make sure to call Amplify.configure with oauth parameter in your app.',
    },
};
const assert = (0,createAssertionFunction/* createAssertionFunction */.p)(authConfigurationErrorMap);


//# sourceMappingURL=errorHelpers.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs





// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function assertTokenProviderConfig(cognitoConfig) {
    let assertionValid = true; // assume valid until otherwise proveed
    if (!cognitoConfig) {
        assertionValid = false;
    }
    else {
        assertionValid =
            !!cognitoConfig.userPoolId && !!cognitoConfig.userPoolClientId;
    }
    assert(assertionValid, AuthConfigurationErrorCode.AuthUserPoolException);
}
function assertOAuthConfig(cognitoConfig) {
    const validOAuthConfig = !!cognitoConfig?.loginWith?.oauth?.domain &&
        !!cognitoConfig?.loginWith?.oauth?.redirectSignOut &&
        !!cognitoConfig?.loginWith?.oauth?.redirectSignIn &&
        !!cognitoConfig?.loginWith?.oauth?.responseType;
    assert(validOAuthConfig, AuthConfigurationErrorCode.OAuthNotConfigureException);
}
function assertIdentityPoolIdConfig(cognitoConfig) {
    const validConfig = !!cognitoConfig?.identityPoolId;
    assert(validConfig, AuthConfigurationErrorCode.InvalidIdentityPoolIdException);
}
/**
 * Decodes payload of JWT token
 *
 * @param {String} token A string representing a token to be decoded
 * @throws {@link Error} - Throws error when token is invalid or payload malformed.
 */
function decodeJWT(token) {
    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) {
        throw new Error('Invalid token');
    }
    try {
        const base64WithUrlSafe = tokenParts[1];
        const base64 = base64WithUrlSafe.replace(/-/g, '+').replace(/_/g, '/');
        const jsonStr = decodeURIComponent(base64Decoder/* base64Decoder */.m
            .convert(base64)
            .split('')
            .map(char => `%${`00${char.charCodeAt(0).toString(16)}`.slice(-2)}`)
            .join(''));
        const payload = JSON.parse(jsonStr);
        return {
            toString: () => token,
            payload,
        };
    }
    catch (err) {
        throw new Error('Invalid token payload');
    }
}


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 51769:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Uv: () => (/* binding */ DefaultTokenStore),
  Qm: () => (/* binding */ getAuthStorageKeys)
});

// UNUSED EXPORTS: createKeysForAuthStorage

// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs + 1 modules
var utils = __webpack_require__(50160);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs
var AuthError = __webpack_require__(39820);
;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/types.mjs
const AuthTokenStorageKeys = {
    accessToken: 'accessToken',
    idToken: 'idToken',
    oidcProvider: 'oidcProvider',
    clockDrift: 'clockDrift',
    refreshToken: 'refreshToken',
    deviceKey: 'deviceKey',
    randomPasswordKey: 'randomPasswordKey',
    deviceGroupKey: 'deviceGroupKey',
    signInDetails: 'signInDetails',
    oauthMetadata: 'oauthMetadata',
};


//# sourceMappingURL=types.mjs.map

// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/errors/createAssertionFunction.mjs
var createAssertionFunction = __webpack_require__(23411);
;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/errorHelpers.mjs


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var TokenProviderErrorCode;
(function (TokenProviderErrorCode) {
    TokenProviderErrorCode["InvalidAuthTokens"] = "InvalidAuthTokens";
})(TokenProviderErrorCode || (TokenProviderErrorCode = {}));
const tokenValidationErrorMap = {
    [TokenProviderErrorCode.InvalidAuthTokens]: {
        message: 'Invalid tokens.',
        recoverySuggestion: 'Make sure the tokens are valid.',
    },
};
const assert = (0,createAssertionFunction/* createAssertionFunction */.p)(tokenValidationErrorMap);


//# sourceMappingURL=errorHelpers.mjs.map

;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/constants.mjs
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const AUTH_KEY_PREFIX = 'CognitoIdentityServiceProvider';


//# sourceMappingURL=constants.mjs.map

;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/TokenStore.mjs






class DefaultTokenStore {
    getKeyValueStorage() {
        if (!this.keyValueStorage) {
            throw new AuthError/* AuthError */.l({
                name: 'KeyValueStorageNotFoundException',
                message: 'KeyValueStorage was not found in TokenStore',
            });
        }
        return this.keyValueStorage;
    }
    setKeyValueStorage(keyValueStorage) {
        this.keyValueStorage = keyValueStorage;
    }
    setAuthConfig(authConfig) {
        this.authConfig = authConfig;
    }
    async loadTokens() {
        // TODO(v6): migration logic should be here
        // Reading V5 tokens old format
        try {
            const authKeys = await this.getAuthKeys();
            const accessTokenString = await this.getKeyValueStorage().getItem(authKeys.accessToken);
            if (!accessTokenString) {
                throw new AuthError/* AuthError */.l({
                    name: 'NoSessionFoundException',
                    message: 'Auth session was not found. Make sure to call signIn.',
                });
            }
            const accessToken = (0,utils/* decodeJWT */.Cq)(accessTokenString);
            const itString = await this.getKeyValueStorage().getItem(authKeys.idToken);
            const idToken = itString ? (0,utils/* decodeJWT */.Cq)(itString) : undefined;
            const refreshToken = (await this.getKeyValueStorage().getItem(authKeys.refreshToken)) ??
                undefined;
            const clockDriftString = (await this.getKeyValueStorage().getItem(authKeys.clockDrift)) ?? '0';
            const clockDrift = Number.parseInt(clockDriftString);
            const signInDetails = await this.getKeyValueStorage().getItem(authKeys.signInDetails);
            const tokens = {
                accessToken,
                idToken,
                refreshToken,
                deviceMetadata: (await this.getDeviceMetadata()) ?? undefined,
                clockDrift,
                username: await this.getLastAuthUser(),
            };
            if (signInDetails) {
                tokens.signInDetails = JSON.parse(signInDetails);
            }
            return tokens;
        }
        catch (err) {
            return null;
        }
    }
    async storeTokens(tokens) {
        assert(tokens !== undefined, TokenProviderErrorCode.InvalidAuthTokens);
        const lastAuthUser = tokens.username;
        await this.getKeyValueStorage().setItem(this.getLastAuthUserKey(), lastAuthUser);
        const authKeys = await this.getAuthKeys();
        await this.getKeyValueStorage().setItem(authKeys.accessToken, tokens.accessToken.toString());
        if (tokens.idToken) {
            await this.getKeyValueStorage().setItem(authKeys.idToken, tokens.idToken.toString());
        }
        else {
            await this.getKeyValueStorage().removeItem(authKeys.idToken);
        }
        if (tokens.refreshToken) {
            await this.getKeyValueStorage().setItem(authKeys.refreshToken, tokens.refreshToken);
        }
        else {
            await this.getKeyValueStorage().removeItem(authKeys.refreshToken);
        }
        if (tokens.deviceMetadata) {
            if (tokens.deviceMetadata.deviceKey) {
                await this.getKeyValueStorage().setItem(authKeys.deviceKey, tokens.deviceMetadata.deviceKey);
            }
            if (tokens.deviceMetadata.deviceGroupKey) {
                await this.getKeyValueStorage().setItem(authKeys.deviceGroupKey, tokens.deviceMetadata.deviceGroupKey);
            }
            await this.getKeyValueStorage().setItem(authKeys.randomPasswordKey, tokens.deviceMetadata.randomPassword);
        }
        if (tokens.signInDetails) {
            await this.getKeyValueStorage().setItem(authKeys.signInDetails, JSON.stringify(tokens.signInDetails));
        }
        else {
            await this.getKeyValueStorage().removeItem(authKeys.signInDetails);
        }
        await this.getKeyValueStorage().setItem(authKeys.clockDrift, `${tokens.clockDrift}`);
    }
    async clearTokens() {
        const authKeys = await this.getAuthKeys();
        // Not calling clear because it can remove data that is not managed by AuthTokenStore
        await Promise.all([
            this.getKeyValueStorage().removeItem(authKeys.accessToken),
            this.getKeyValueStorage().removeItem(authKeys.idToken),
            this.getKeyValueStorage().removeItem(authKeys.clockDrift),
            this.getKeyValueStorage().removeItem(authKeys.refreshToken),
            this.getKeyValueStorage().removeItem(authKeys.signInDetails),
            this.getKeyValueStorage().removeItem(this.getLastAuthUserKey()),
            this.getKeyValueStorage().removeItem(authKeys.oauthMetadata),
        ]);
    }
    async getDeviceMetadata(username) {
        const authKeys = await this.getAuthKeys(username);
        const deviceKey = await this.getKeyValueStorage().getItem(authKeys.deviceKey);
        const deviceGroupKey = await this.getKeyValueStorage().getItem(authKeys.deviceGroupKey);
        const randomPassword = await this.getKeyValueStorage().getItem(authKeys.randomPasswordKey);
        return randomPassword && deviceGroupKey && deviceKey
            ? {
                deviceKey,
                deviceGroupKey,
                randomPassword,
            }
            : null;
    }
    async clearDeviceMetadata(username) {
        const authKeys = await this.getAuthKeys(username);
        await Promise.all([
            this.getKeyValueStorage().removeItem(authKeys.deviceKey),
            this.getKeyValueStorage().removeItem(authKeys.deviceGroupKey),
            this.getKeyValueStorage().removeItem(authKeys.randomPasswordKey),
        ]);
    }
    async getAuthKeys(username) {
        (0,utils/* assertTokenProviderConfig */.$y)(this.authConfig?.Cognito);
        const lastAuthUser = username ?? (await this.getLastAuthUser());
        return createKeysForAuthStorage(AUTH_KEY_PREFIX, `${this.authConfig.Cognito.userPoolClientId}.${lastAuthUser}`);
    }
    getLastAuthUserKey() {
        (0,utils/* assertTokenProviderConfig */.$y)(this.authConfig?.Cognito);
        const identifier = this.authConfig.Cognito.userPoolClientId;
        return `${AUTH_KEY_PREFIX}.${identifier}.LastAuthUser`;
    }
    async getLastAuthUser() {
        const lastAuthUser = (await this.getKeyValueStorage().getItem(this.getLastAuthUserKey())) ??
            'username';
        return lastAuthUser;
    }
    async setOAuthMetadata(metadata) {
        const { oauthMetadata: oauthMetadataKey } = await this.getAuthKeys();
        await this.getKeyValueStorage().setItem(oauthMetadataKey, JSON.stringify(metadata));
    }
    async getOAuthMetadata() {
        const { oauthMetadata: oauthMetadataKey } = await this.getAuthKeys();
        const oauthMetadata = await this.getKeyValueStorage().getItem(oauthMetadataKey);
        return oauthMetadata && JSON.parse(oauthMetadata);
    }
}
const createKeysForAuthStorage = (provider, identifier) => {
    return getAuthStorageKeys(AuthTokenStorageKeys)(`${provider}`, identifier);
};
function getAuthStorageKeys(authKeys) {
    const keys = Object.values({ ...authKeys });
    return (prefix, identifier) => keys.reduce((acc, authKey) => ({
        ...acc,
        [authKey]: `${prefix}.${identifier}.${authKey}`,
    }), {});
}


//# sourceMappingURL=TokenStore.mjs.map


/***/ }),

/***/ 53110:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ jitteredBackoff_jitteredBackoff)
});

;// ./node_modules/@aws-amplify/core/dist/esm/utils/retry/constants.mjs
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const MAX_DELAY_MS = 5 * 60 * 1000;


//# sourceMappingURL=constants.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/utils/retry/jitteredBackoff.mjs


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @private
 * Internal use of Amplify only
 */
function jitteredBackoff(maxDelayMs = MAX_DELAY_MS) {
    const BASE_TIME_MS = 100;
    const JITTER_FACTOR = 100;
    return attempt => {
        const delay = 2 ** attempt * BASE_TIME_MS + JITTER_FACTOR * Math.random();
        return delay > maxDelayMs ? false : delay;
    };
}


//# sourceMappingURL=jitteredBackoff.mjs.map

// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/constants.mjs
var constants = __webpack_require__(1133);
;// ./node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/jitteredBackoff.mjs







// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// TODO: [v6] The separate retry utility is used by Data packages now and will replaced by retry middleware.
const jitteredBackoff_jitteredBackoff = attempt => {
    const delayFunction = jitteredBackoff(constants/* DEFAULT_MAX_DELAY_MS */.mU);
    const delay = delayFunction(attempt);
    // The delayFunction returns false when the delay is greater than the max delay(5 mins).
    // In this case, the retry middleware will delay 5 mins instead, as a ceiling of the delay.
    return delay === false ? constants/* DEFAULT_MAX_DELAY_MS */.mU : delay;
};


//# sourceMappingURL=jitteredBackoff.mjs.map


/***/ }),

/***/ 58552:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ getRedirectUrl)
/* harmony export */ });
/* harmony import */ var _errors_constants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44715);


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/** @internal */
function getRedirectUrl(redirects, preferredRedirectUrl) {
    if (preferredRedirectUrl) {
        const redirectUrl = redirects?.find(redirect => redirect === preferredRedirectUrl);
        if (!redirectUrl) {
            throw _errors_constants_mjs__WEBPACK_IMPORTED_MODULE_0__/* .invalidPreferredRedirectUrlException */ .jK;
        }
        return redirectUrl;
    }
    else {
        const redirectUrlFromTheSameOrigin = redirects?.find(isSameOriginAndPathName) ??
            redirects?.find(isTheSameDomain);
        const redirectUrlFromDifferentOrigin = redirects?.find(isHttps) ?? redirects?.find(isHttp);
        if (redirectUrlFromTheSameOrigin) {
            return redirectUrlFromTheSameOrigin;
        }
        else if (redirectUrlFromDifferentOrigin) {
            throw _errors_constants_mjs__WEBPACK_IMPORTED_MODULE_0__/* .invalidOriginException */ .$6;
        }
        throw _errors_constants_mjs__WEBPACK_IMPORTED_MODULE_0__/* .invalidRedirectException */ .RW;
    }
}
// origin + pathname => https://example.com/app
const isSameOriginAndPathName = (redirect) => redirect.startsWith(String(window.location.origin + (window.location.pathname || '/')));
// domain => outlook.live.com, github.com
const isTheSameDomain = (redirect) => redirect.includes(String(window.location.hostname));
const isHttp = (redirect) => redirect.startsWith('http://');
const isHttps = (redirect) => redirect.startsWith('https://');


//# sourceMappingURL=getRedirectUrl.mjs.map


/***/ }),

/***/ 59547:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ assertServiceError)
/* harmony export */ });
/* harmony import */ var _aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26348);
/* harmony import */ var _AuthError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39820);



// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function assertServiceError(error) {
    if (!error ||
        error.name === 'Error' ||
        error instanceof TypeError) {
        throw new _AuthError_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AuthError */ .l({
            name: _aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_1__/* .AmplifyErrorCode */ .m.Unknown,
            message: 'An unknown error has occurred.',
            underlyingError: error,
        });
    }
}


//# sourceMappingURL=assertServiceError.mjs.map


/***/ }),

/***/ 61740:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ unauthenticatedHandler)
});

// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/constants.mjs
var constants = __webpack_require__(1133);
;// ./node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/retryMiddleware.mjs


/**
 * Middleware that executes the retry logic.
 */
const retryMiddlewareFactory = ({ maxAttempts = constants/* DEFAULT_RETRY_ATTEMPTS */.K7, retryDecider, computeDelay, abortSignal, }) => {
    if (maxAttempts < 1) {
        throw new Error('maxAttempts must be greater than 0');
    }
    return (next, context) => async function retryMiddleware(request) {
        let error;
        let attemptsCount = context.attemptsCount ?? 0;
        let response;
        // When retry is not needed or max attempts is reached, either error or response will be set. This function handles either cases.
        const handleTerminalErrorOrResponse = () => {
            if (response) {
                addOrIncrementMetadataAttempts(response, attemptsCount);
                return response;
            }
            else {
                addOrIncrementMetadataAttempts(error, attemptsCount);
                throw error;
            }
        };
        while (!abortSignal?.aborted && attemptsCount < maxAttempts) {
            try {
                response = await next(request);
                error = undefined;
            }
            catch (e) {
                error = e;
                response = undefined;
            }
            // context.attemptsCount may be updated after calling next handler which may retry the request by itself.
            attemptsCount =
                (context.attemptsCount ?? 0) > attemptsCount
                    ? (context.attemptsCount ?? 0)
                    : attemptsCount + 1;
            context.attemptsCount = attemptsCount;
            const { isCredentialsExpiredError, retryable } = await retryDecider(response, error, context);
            if (retryable) {
                // Setting isCredentialsInvalid flag to notify signing middleware to forceRefresh credentials provider.
                context.isCredentialsExpired = !!isCredentialsExpiredError;
                if (!abortSignal?.aborted && attemptsCount < maxAttempts) {
                    // prevent sleep for last attempt or cancelled request;
                    const delay = computeDelay(attemptsCount);
                    await cancellableSleep(delay, abortSignal);
                }
                continue;
            }
            else {
                return handleTerminalErrorOrResponse();
            }
        }
        if (abortSignal?.aborted) {
            throw new Error('Request aborted.');
        }
        else {
            return handleTerminalErrorOrResponse();
        }
    };
};
const cancellableSleep = (timeoutMs, abortSignal) => {
    if (abortSignal?.aborted) {
        return Promise.resolve();
    }
    let timeoutId;
    let sleepPromiseResolveFn;
    const sleepPromise = new Promise(resolve => {
        sleepPromiseResolveFn = resolve;
        timeoutId = setTimeout(resolve, timeoutMs);
    });
    abortSignal?.addEventListener('abort', function cancelSleep(_) {
        clearTimeout(timeoutId);
        abortSignal?.removeEventListener('abort', cancelSleep);
        sleepPromiseResolveFn();
    });
    return sleepPromise;
};
const addOrIncrementMetadataAttempts = (nextHandlerOutput, attempts) => {
    if (Object.prototype.toString.call(nextHandlerOutput) !== '[object Object]') {
        return;
    }
    nextHandlerOutput.$metadata = {
        ...(nextHandlerOutput.$metadata ?? {}),
        attempts,
    };
};


//# sourceMappingURL=retryMiddleware.mjs.map

// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 3 modules
var v4 = __webpack_require__(74879);
;// ./node_modules/@aws-amplify/core/dist/esm/utils/amplifyUuid/index.mjs


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const amplifyUuid = v4/* default */.A;


//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/@aws-crypto/sha256-js/build/module/index.js + 7 modules
var build_module = __webpack_require__(73739);
// EXTERNAL MODULE: ./node_modules/@smithy/util-hex-encoding/dist-es/index.js
var dist_es = __webpack_require__(78652);
;// ./node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/amzSdkInvocationIdHeaderMiddleware.mjs

















// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Middleware injects a UUID string to `amz-sdk-invocation-id` header.
 * if the header is not set already. This header is helpful to provide
 * observability to group the requests caused by automatic retry.
 *
 * This middleware is standalone because of extra UUID dependency, we will
 * NOT use this middleware for API categories.
 *
 * Ref: https://sdk.amazonaws.com/kotlin/api/smithy-kotlin/api/1.0.9/http-client/aws.smithy.kotlin.runtime.http.operation/-http-operation-context/-sdk-invocation-id.html
 */
const amzSdkInvocationIdHeaderMiddlewareFactory = () => next => {
    return async function amzSdkInvocationIdHeaderMiddleware(request) {
        if (!request.headers[constants/* AMZ_SDK_INVOCATION_ID_HEADER */.jy]) {
            request.headers[constants/* AMZ_SDK_INVOCATION_ID_HEADER */.jy] = amplifyUuid();
        }
        return next(request);
    };
};


//# sourceMappingURL=amzSdkInvocationIdHeaderMiddleware.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/amzSdkRequestHeaderMiddleware.mjs


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Middleware injects `amz-sdk-request` header to indicate the retry state at the time an HTTP request is made.
 * This middleware should co-exist with retryMiddleware as it relies on the retryAttempts value in middleware context
 * set by the retry middleware.
 *
 * Example header: `amz-sdk-request: attempt=1; max=3`.
 *
 * This middleware is standalone because of extra headers may conflict with custom endpoint settings(e.g. CORS), we will
 * NOT use this middleware for API categories.
 */
const amzSdkRequestHeaderMiddlewareFactory = ({ maxAttempts = constants/* DEFAULT_RETRY_ATTEMPTS */.K7 }) => (next, context) => {
    return async function amzSdkRequestHeaderMiddleware(request) {
        const attemptsCount = context.attemptsCount ?? 0;
        request.headers[constants/* AMZ_SDK_REQUEST_HEADER */.Q8] =
            `attempt=${attemptsCount + 1}; max=${maxAttempts}`;
        return next(request);
    };
};


//# sourceMappingURL=amzSdkRequestHeaderMiddleware.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/clients/middleware/userAgent/middleware.mjs
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Middleware injects user agent string to specified header(default to 'x-amz-user-agent'),
 * if the header is not set already.
 *
 * TODO: incorporate new user agent design
 */
const userAgentMiddlewareFactory = ({ userAgentHeader = 'x-amz-user-agent', userAgentValue = '', }) => next => {
    return async function userAgentMiddleware(request) {
        if (userAgentValue.trim().length === 0) {
            const result = await next(request);
            return result;
        }
        else {
            const headerName = userAgentHeader.toLowerCase();
            request.headers[headerName] = request.headers[headerName]
                ? `${request.headers[headerName]} ${userAgentValue}`
                : userAgentValue;
            const response = await next(request);
            return response;
        }
    };
};


//# sourceMappingURL=middleware.mjs.map

// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/clients/internal/composeTransferHandler.mjs
var composeTransferHandler = __webpack_require__(2035);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/errors/AmplifyError.mjs
var AmplifyError = __webpack_require__(35993);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/types/errors.mjs
var errors = __webpack_require__(26348);
;// ./node_modules/@aws-amplify/core/dist/esm/clients/utils/memoization.mjs
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Cache the payload of a response body. It allows multiple calls to the body,
 * for example, when reading the body in both retry decider and error deserializer.
 * Caching body is allowed here because we call the body accessor(blob(), json(),
 * etc.) when body is small or streaming implementation is not available(RN).
 *
 * @internal
 */
const withMemoization = (payloadAccessor) => {
    let cached;
    return () => {
        if (!cached) {
            // Explicitly not awaiting. Intermediate await would add overhead and
            // introduce a possible race in the event that this wrapper is called
            // again before the first `payloadAccessor` call resolves.
            cached = payloadAccessor();
        }
        return cached;
    };
};


//# sourceMappingURL=memoization.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/clients/handlers/fetch.mjs





// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const shouldSendBody = (method) => !['HEAD', 'GET'].includes(method.toUpperCase());
// TODO[AllanZhengYP]: we need to provide isCanceledError utility
const fetchTransferHandler = async ({ url, method, headers, body }, { abortSignal, cache, withCrossDomainCredentials }) => {
    let resp;
    try {
        resp = await fetch(url, {
            method,
            headers,
            body: shouldSendBody(method) ? body : undefined,
            signal: abortSignal,
            cache,
            credentials: withCrossDomainCredentials ? 'include' : 'same-origin',
        });
    }
    catch (e) {
        if (e instanceof TypeError) {
            throw new AmplifyError/* AmplifyError */.x({
                name: errors/* AmplifyErrorCode */.m.NetworkError,
                message: 'A network error has occurred.',
                underlyingError: e,
            });
        }
        throw e;
    }
    const responseHeaders = {};
    resp.headers?.forEach((value, key) => {
        responseHeaders[key.toLowerCase()] = value;
    });
    const httpResponse = {
        statusCode: resp.status,
        headers: responseHeaders,
        body: null,
    };
    // resp.body is a ReadableStream according to Fetch API spec, but React Native
    // does not implement it.
    const bodyWithMixin = Object.assign(resp.body ?? {}, {
        text: withMemoization(() => resp.text()),
        blob: withMemoization(() => resp.blob()),
        json: withMemoization(() => resp.json()),
    });
    return {
        ...httpResponse,
        body: bodyWithMixin,
    };
};


//# sourceMappingURL=fetch.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/clients/handlers/aws/unauthenticated.mjs











// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const unauthenticatedHandler = (0,composeTransferHandler/* composeTransferHandler */.q)(fetchTransferHandler, [
    userAgentMiddlewareFactory,
    amzSdkInvocationIdHeaderMiddlewareFactory,
    retryMiddlewareFactory,
    amzSdkRequestHeaderMiddlewareFactory,
]);


//# sourceMappingURL=unauthenticated.mjs.map


/***/ }),

/***/ 62843:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* binding */ cognitoUserPoolsTokenProvider),
  o: () => (/* binding */ tokenOrchestrator)
});

// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/storage/index.mjs + 8 modules
var storage = __webpack_require__(42014);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs + 1 modules
var utils = __webpack_require__(50160);
;// ./node_modules/@aws-amplify/core/dist/esm/utils/deDupeAsyncFunction.mjs
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * returns in-flight promise if there is one
 *
 * @param asyncFunction - asyncFunction to be deduped.
 * @returns - the return type of the callback
 */
const deDupeAsyncFunction = (asyncFunction) => {
    let inflightPromise;
    return async (...args) => {
        if (inflightPromise)
            return inflightPromise;
        inflightPromise = new Promise((resolve, reject) => {
            asyncFunction(...args)
                .then(result => {
                resolve(result);
            })
                .catch(error => {
                reject(error);
            })
                .finally(() => {
                inflightPromise = undefined;
            });
        });
        return inflightPromise;
    };
};


//# sourceMappingURL=deDupeAsyncFunction.mjs.map

// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs
var regionParsers = __webpack_require__(5431);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/types.mjs
var types = __webpack_require__(74652);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs
var AuthError = __webpack_require__(39820);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoUserPoolEndpointResolver.mjs + 1 modules
var createCognitoUserPoolEndpointResolver = __webpack_require__(22411);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs
var composeServiceApi = __webpack_require__(11529);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolSerializer.mjs
var createUserPoolSerializer = __webpack_require__(48701);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/serde/createUserPoolDeserializer.mjs
var createUserPoolDeserializer = __webpack_require__(66572);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/shared/handler/cognitoUserPoolTransferHandler.mjs
var cognitoUserPoolTransferHandler = __webpack_require__(7714);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/constants.mjs
var constants = __webpack_require__(10005);
;// ./node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createGetTokensFromRefreshTokenClient.mjs








// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createGetTokensFromRefreshTokenClient = (config) => (0,composeServiceApi/* composeServiceApi */.A)(cognitoUserPoolTransferHandler/* cognitoUserPoolTransferHandler */.e, (0,createUserPoolSerializer/* createUserPoolSerializer */._)('GetTokensFromRefreshToken'), (0,createUserPoolDeserializer/* createUserPoolDeserializer */.T)(), {
    ...constants/* DEFAULT_SERVICE_CLIENT_API_CONFIG */.C,
    ...config,
});


//# sourceMappingURL=createGetTokensFromRefreshTokenClient.mjs.map

;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/refreshAuthTokens.mjs















// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const refreshAuthTokensFunction = async ({ tokens, authConfig, username, }) => {
    (0,utils/* assertTokenProviderConfig */.$y)(authConfig?.Cognito);
    const { userPoolId, userPoolClientId, userPoolEndpoint } = authConfig.Cognito;
    const region = (0,regionParsers/* getRegionFromUserPoolId */.J)(userPoolId);
    (0,types/* assertAuthTokensWithRefreshToken */.X4)(tokens);
    const getTokensFromRefreshToken = createGetTokensFromRefreshTokenClient({
        endpointResolver: (0,createCognitoUserPoolEndpointResolver/* createCognitoUserPoolEndpointResolver */.o)({
            endpointOverride: userPoolEndpoint,
        }),
    });
    const { AuthenticationResult } = await getTokensFromRefreshToken({ region }, {
        ClientId: userPoolClientId,
        RefreshToken: tokens.refreshToken,
        DeviceKey: tokens.deviceMetadata?.deviceKey,
    });
    const accessToken = (0,utils/* decodeJWT */.Cq)(AuthenticationResult?.AccessToken ?? '');
    const idToken = AuthenticationResult?.IdToken
        ? (0,utils/* decodeJWT */.Cq)(AuthenticationResult.IdToken)
        : undefined;
    const { iat } = accessToken.payload;
    // This should never happen. If it does, it's a bug from the service.
    if (!iat) {
        throw new AuthError/* AuthError */.l({
            name: 'iatNotFoundException',
            message: 'iat not found in access token',
        });
    }
    const clockDrift = iat * 1000 - new Date().getTime();
    return {
        accessToken,
        idToken,
        clockDrift,
        refreshToken: AuthenticationResult?.RefreshToken ?? tokens.refreshToken,
        username,
    };
};
const refreshAuthTokens = deDupeAsyncFunction(refreshAuthTokensFunction);
const refreshAuthTokensWithoutDedupe = (/* unused pure expression or super */ null && (refreshAuthTokensFunction));


//# sourceMappingURL=refreshAuthTokens.mjs.map

// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/TokenStore.mjs + 3 modules
var TokenStore = __webpack_require__(51769);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/Hub/index.mjs
var Hub = __webpack_require__(35943);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/utils/isBrowser.mjs
var isBrowser = __webpack_require__(41113);
;// ./node_modules/@aws-amplify/core/dist/esm/utils/isTokenExpired.mjs
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function isTokenExpired({ expiresAt, clockDrift, tolerance = 5000, }) {
    const currentTime = Date.now();
    return currentTime + clockDrift + tolerance > expiresAt;
}


//# sourceMappingURL=isTokenExpired.mjs.map

// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/types/errors.mjs
var errors = __webpack_require__(26348);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertServiceError.mjs
var assertServiceError = __webpack_require__(59547);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/oAuthStore.mjs
var oAuthStore = __webpack_require__(24471);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/oauth/inflightPromise.mjs
var inflightPromise = __webpack_require__(80049);
;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/TokenOrchestrator.mjs







// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class TokenOrchestrator {
    constructor() {
        this.waitForInflightOAuth = (0,isBrowser/* isBrowser */.B)()
            ? async () => {
                if (!(await oAuthStore/* oAuthStore */.f.loadOAuthInFlight())) {
                    return;
                }
                if (this.inflightPromise) {
                    return this.inflightPromise;
                }
                // when there is valid oauth config and there is an inflight oauth flow, try
                // to block async calls that require fetching tokens before the oauth flow completes
                // e.g. getCurrentUser, fetchAuthSession etc.
                this.inflightPromise = new Promise((resolve, _reject) => {
                    (0,inflightPromise/* addInflightPromise */.I)(resolve);
                });
                return this.inflightPromise;
            }
            : async () => {
                // no-op for non-browser environments
            };
    }
    setAuthConfig(authConfig) {
        oAuthStore/* oAuthStore */.f.setAuthConfig(authConfig.Cognito);
        this.authConfig = authConfig;
    }
    setTokenRefresher(tokenRefresher) {
        this.tokenRefresher = tokenRefresher;
    }
    setAuthTokenStore(tokenStore) {
        this.tokenStore = tokenStore;
    }
    getTokenStore() {
        if (!this.tokenStore) {
            throw new AuthError/* AuthError */.l({
                name: 'EmptyTokenStoreException',
                message: 'TokenStore not set',
            });
        }
        return this.tokenStore;
    }
    getTokenRefresher() {
        if (!this.tokenRefresher) {
            throw new AuthError/* AuthError */.l({
                name: 'EmptyTokenRefresherException',
                message: 'TokenRefresher not set',
            });
        }
        return this.tokenRefresher;
    }
    async getTokens(options) {
        let tokens;
        try {
            (0,utils/* assertTokenProviderConfig */.$y)(this.authConfig?.Cognito);
        }
        catch (_err) {
            // Token provider not configured
            return null;
        }
        await this.waitForInflightOAuth();
        this.inflightPromise = undefined;
        tokens = await this.getTokenStore().loadTokens();
        const username = await this.getTokenStore().getLastAuthUser();
        if (tokens === null) {
            return null;
        }
        const idTokenExpired = !!tokens?.idToken &&
            isTokenExpired({
                expiresAt: (tokens.idToken?.payload?.exp ?? 0) * 1000,
                clockDrift: tokens.clockDrift ?? 0,
            });
        const accessTokenExpired = isTokenExpired({
            expiresAt: (tokens.accessToken?.payload?.exp ?? 0) * 1000,
            clockDrift: tokens.clockDrift ?? 0,
        });
        if (options?.forceRefresh || idTokenExpired || accessTokenExpired) {
            tokens = await this.refreshTokens({
                tokens,
                username,
            });
            if (tokens === null) {
                return null;
            }
        }
        return {
            accessToken: tokens?.accessToken,
            idToken: tokens?.idToken,
            signInDetails: tokens?.signInDetails,
        };
    }
    async refreshTokens({ tokens, username, }) {
        try {
            const { signInDetails } = tokens;
            const newTokens = await this.getTokenRefresher()({
                tokens,
                authConfig: this.authConfig,
                username,
            });
            newTokens.signInDetails = signInDetails;
            await this.setTokens({ tokens: newTokens });
            Hub/* Hub */.YZ.dispatch('auth', { event: 'tokenRefresh' }, 'Auth', Hub/* AMPLIFY_SYMBOL */.U9);
            return newTokens;
        }
        catch (err) {
            return this.handleErrors(err);
        }
    }
    handleErrors(err) {
        (0,assertServiceError/* assertServiceError */.e)(err);
        if (err.name !== errors/* AmplifyErrorCode */.m.NetworkError) {
            // TODO(v6): Check errors on client
            this.clearTokens();
        }
        Hub/* Hub */.YZ.dispatch('auth', {
            event: 'tokenRefresh_failure',
            data: { error: err },
        }, 'Auth', Hub/* AMPLIFY_SYMBOL */.U9);
        if (err.name.startsWith('NotAuthorizedException')) {
            return null;
        }
        throw err;
    }
    async setTokens({ tokens }) {
        return this.getTokenStore().storeTokens(tokens);
    }
    async clearTokens() {
        return this.getTokenStore().clearTokens();
    }
    getDeviceMetadata(username) {
        return this.getTokenStore().getDeviceMetadata(username);
    }
    clearDeviceMetadata(username) {
        return this.getTokenStore().clearDeviceMetadata(username);
    }
    setOAuthMetadata(metadata) {
        return this.getTokenStore().setOAuthMetadata(metadata);
    }
    getOAuthMetadata() {
        return this.getTokenStore().getOAuthMetadata();
    }
}


//# sourceMappingURL=TokenOrchestrator.mjs.map

;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/CognitoUserPoolsTokenProvider.mjs





// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class CognitoUserPoolsTokenProvider {
    constructor() {
        this.authTokenStore = new TokenStore/* DefaultTokenStore */.Uv();
        this.authTokenStore.setKeyValueStorage(storage/* defaultStorage */.ZL);
        this.tokenOrchestrator = new TokenOrchestrator();
        this.tokenOrchestrator.setAuthTokenStore(this.authTokenStore);
        this.tokenOrchestrator.setTokenRefresher(refreshAuthTokens);
    }
    getTokens({ forceRefresh } = { forceRefresh: false }) {
        return this.tokenOrchestrator.getTokens({ forceRefresh });
    }
    setKeyValueStorage(keyValueStorage) {
        this.authTokenStore.setKeyValueStorage(keyValueStorage);
    }
    setAuthConfig(authConfig) {
        this.authTokenStore.setAuthConfig(authConfig);
        this.tokenOrchestrator.setAuthConfig(authConfig);
    }
}


//# sourceMappingURL=CognitoUserPoolsTokenProvider.mjs.map

;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/tokenProvider.mjs


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * The default provider for the JWT access token and ID token issued from the configured Cognito user pool. It manages
 * the refresh and storage of the tokens. It stores the tokens in `window.localStorage` if available, and falls back to
 * in-memory storage if not.
 */
const cognitoUserPoolsTokenProvider = new CognitoUserPoolsTokenProvider();
const { tokenOrchestrator } = cognitoUserPoolsTokenProvider;


//# sourceMappingURL=tokenProvider.mjs.map


/***/ }),

/***/ 66572:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ createUserPoolDeserializer)
/* harmony export */ });
/* harmony import */ var _aws_amplify_core_internals_aws_client_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47192);
/* harmony import */ var _errors_utils_assertServiceError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59547);
/* harmony import */ var _errors_AuthError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39820);




// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createUserPoolDeserializer = () => async (response) => {
    if (response.statusCode >= 300) {
        const error = await (0,_aws_amplify_core_internals_aws_client_utils__WEBPACK_IMPORTED_MODULE_0__/* .parseJsonError */ .F)(response);
        (0,_errors_utils_assertServiceError_mjs__WEBPACK_IMPORTED_MODULE_1__/* .assertServiceError */ .e)(error);
        throw new _errors_AuthError_mjs__WEBPACK_IMPORTED_MODULE_2__/* .AuthError */ .l({
            name: error.name,
            message: error.message,
            metadata: error.$metadata,
        });
    }
    return (0,_aws_amplify_core_internals_aws_client_utils__WEBPACK_IMPORTED_MODULE_0__/* .parseJsonBody */ .Y)(response);
};


//# sourceMappingURL=createUserPoolDeserializer.mjs.map


/***/ }),

/***/ 74652:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H0: () => (/* binding */ assertAuthTokens),
/* harmony export */   OW: () => (/* binding */ assertIdTokenInAuthTokens),
/* harmony export */   O_: () => (/* binding */ assertDeviceMetadata),
/* harmony export */   X4: () => (/* binding */ assertAuthTokensWithRefreshToken),
/* harmony export */   f3: () => (/* binding */ OAuthStorageKeys)
/* harmony export */ });
/* unused harmony exports isTypeUserPoolConfig, oAuthTokenRefreshException, tokenRefreshException */
/* harmony import */ var _errors_AuthError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39820);
/* harmony import */ var _errors_constants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44715);



// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function isTypeUserPoolConfig(authConfig) {
    if (authConfig &&
        authConfig.Cognito.userPoolId &&
        authConfig.Cognito.userPoolClientId) {
        return true;
    }
    return false;
}
function assertAuthTokens(tokens) {
    if (!tokens || !tokens.accessToken) {
        throw new _errors_AuthError_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AuthError */ .l({
            name: _errors_constants_mjs__WEBPACK_IMPORTED_MODULE_1__/* .USER_UNAUTHENTICATED_EXCEPTION */ .zz,
            message: 'User needs to be authenticated to call this API.',
            recoverySuggestion: 'Sign in before calling this API again.',
        });
    }
}
function assertIdTokenInAuthTokens(tokens) {
    if (!tokens || !tokens.idToken) {
        throw new _errors_AuthError_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AuthError */ .l({
            name: _errors_constants_mjs__WEBPACK_IMPORTED_MODULE_1__/* .USER_UNAUTHENTICATED_EXCEPTION */ .zz,
            message: 'User needs to be authenticated to call this API.',
            recoverySuggestion: 'Sign in before calling this API again.',
        });
    }
}
const oAuthTokenRefreshException = new _errors_AuthError_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AuthError */ .l({
    name: _errors_constants_mjs__WEBPACK_IMPORTED_MODULE_1__/* .TOKEN_REFRESH_EXCEPTION */ .Cs,
    message: `Token refresh is not supported when authenticated with the 'implicit grant' (token) oauth flow. 
	Please change your oauth configuration to use 'code grant' flow.`,
    recoverySuggestion: `Please logout and change your Amplify configuration to use "code grant" flow. 
	E.g { responseType: 'code' }`,
});
const tokenRefreshException = new _errors_AuthError_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AuthError */ .l({
    name: _errors_constants_mjs__WEBPACK_IMPORTED_MODULE_1__/* .USER_UNAUTHENTICATED_EXCEPTION */ .zz,
    message: 'User needs to be authenticated to call this API.',
    recoverySuggestion: 'Sign in before calling this API again.',
});
function assertAuthTokensWithRefreshToken(tokens) {
    if (isAuthenticatedWithImplicitOauthFlow(tokens)) {
        throw oAuthTokenRefreshException;
    }
    if (!isAuthenticatedWithRefreshToken(tokens)) {
        throw tokenRefreshException;
    }
}
function assertDeviceMetadata(deviceMetadata) {
    if (!deviceMetadata ||
        !deviceMetadata.deviceKey ||
        !deviceMetadata.deviceGroupKey ||
        !deviceMetadata.randomPassword) {
        throw new _errors_AuthError_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AuthError */ .l({
            name: _errors_constants_mjs__WEBPACK_IMPORTED_MODULE_1__/* .DEVICE_METADATA_NOT_FOUND_EXCEPTION */ .kM,
            message: 'Either deviceKey, deviceGroupKey or secretPassword were not found during the sign-in process.',
            recoverySuggestion: 'Make sure to not clear storage after calling the signIn API.',
        });
    }
}
const OAuthStorageKeys = {
    inflightOAuth: 'inflightOAuth',
    oauthSignIn: 'oauthSignIn',
    oauthPKCE: 'oauthPKCE',
    oauthState: 'oauthState',
};
function isAuthenticated(tokens) {
    return tokens?.accessToken || tokens?.idToken;
}
function isAuthenticatedWithRefreshToken(tokens) {
    return isAuthenticated(tokens) && tokens?.refreshToken;
}
function isAuthenticatedWithImplicitOauthFlow(tokens) {
    return isAuthenticated(tokens) && !tokens?.refreshToken;
}


//# sourceMappingURL=types.mjs.map


/***/ }),

/***/ 74879:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ esm_browser_v4)
});

;// ./node_modules/uuid/dist/esm-browser/native.js
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const esm_browser_native = ({ randomUUID });

;// ./node_modules/uuid/dist/esm-browser/rng.js
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}

;// ./node_modules/uuid/dist/esm-browser/stringify.js

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!validate(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
/* harmony default export */ const esm_browser_stringify = ((/* unused pure expression or super */ null && (stringify)));

;// ./node_modules/uuid/dist/esm-browser/v4.js



function v4(options, buf, offset) {
    if (esm_browser_native.randomUUID && !buf && !options) {
        return esm_browser_native.randomUUID();
    }
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? rng();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return unsafeStringify(rnds);
}
/* harmony default export */ const esm_browser_v4 = (v4);


/***/ }),

/***/ 75276:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ setCustomUserAgent),
/* harmony export */   e: () => (/* binding */ getCustomUserAgent)
/* harmony export */ });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Maintains custom user-agent state set by external consumers.
const customUserAgentState = {};
/**
 * Sets custom user agent state which will be appended to applicable requests. Returns a function that can be used to
 * clean up any custom state set with this API.
 *
 * @note
 * This API operates globally. Calling this API multiple times will result in the most recently set values for a
 * particular API being used.
 *
 * @note
 * This utility IS NOT compatible with SSR.
 *
 * @param input - SetCustomUserAgentInput that defines custom state to apply to the specified APIs.
 */
const setCustomUserAgent = (input) => {
    // Save custom user-agent state & increment reference counter
    // TODO Remove `any` when we upgrade to TypeScript 5.2, see: https://github.com/microsoft/TypeScript/issues/44373
    customUserAgentState[input.category] = input.apis.reduce((acc, api) => ({
        ...acc,
        [api]: {
            refCount: acc[api]?.refCount ? acc[api].refCount + 1 : 1,
            additionalDetails: input.additionalDetails,
        },
    }), customUserAgentState[input.category] ?? {});
    // Callback that cleans up state for APIs recorded by this call
    let cleanUpCallbackCalled = false;
    const cleanUpCallback = () => {
        // Only allow the cleanup callback to be called once
        if (cleanUpCallbackCalled) {
            return;
        }
        cleanUpCallbackCalled = true;
        input.apis.forEach(api => {
            const apiRefCount = customUserAgentState[input.category][api].refCount;
            if (apiRefCount > 1) {
                customUserAgentState[input.category][api].refCount = apiRefCount - 1;
            }
            else {
                delete customUserAgentState[input.category][api];
                // Clean up category if no more APIs set
                if (!Object.keys(customUserAgentState[input.category]).length) {
                    delete customUserAgentState[input.category];
                }
            }
        });
    };
    return cleanUpCallback;
};
const getCustomUserAgent = (category, api) => customUserAgentState[category]?.[api]?.additionalDetails;


//# sourceMappingURL=customUserAgent.mjs.map


/***/ }),

/***/ 78735:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fE: () => (/* binding */ getAmplifyUserAgent)
});

// UNUSED EXPORTS: Platform, getAmplifyUserAgentObject, sanitizeAmplifyVersion

// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs
var types = __webpack_require__(9588);
;// ./node_modules/@aws-amplify/core/dist/esm/Platform/version.mjs
// generated by genversion
const version = '6.15.5';


//# sourceMappingURL=version.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/Platform/detection/helpers.mjs
/* provided dependency */ var process = __webpack_require__(95704);
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const globalExists = () => {
    return typeof global !== 'undefined';
};
const globalThisExists = () => {
    return typeof globalThis !== 'undefined';
};
const windowExists = () => {
    return typeof window !== 'undefined';
};
const documentExists = () => {
    return typeof document !== 'undefined';
};
const processExists = () => {
    return typeof process !== 'undefined';
};
const keyPrefixMatch = (object, prefix) => {
    return !!Object.keys(object).find(key => key.startsWith(prefix));
};


//# sourceMappingURL=helpers.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/Platform/detection/React.mjs
/* provided dependency */ var React_process = __webpack_require__(95704);


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with react 18.2 - built using Vite
function reactWebDetect() {
    const elementKeyPrefixedWithReact = (key) => {
        return key.startsWith('_react') || key.startsWith('__react');
    };
    const elementIsReactEnabled = (element) => {
        return Object.keys(element).find(elementKeyPrefixedWithReact);
    };
    const allElementsWithId = () => Array.from(document.querySelectorAll('[id]'));
    return documentExists() && allElementsWithId().some(elementIsReactEnabled);
}
function reactSSRDetect() {
    return (processExists() &&
        typeof React_process.env !== 'undefined' &&
        !!Object.keys(React_process.env).find(key => key.includes('react')));
}
// use the some


//# sourceMappingURL=React.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/Platform/detection/Vue.mjs


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with vue 3.3.2
function vueWebDetect() {
    return windowExists() && keyPrefixMatch(window, '__VUE');
}
function vueSSRDetect() {
    return globalExists() && keyPrefixMatch(global, '__VUE');
}


//# sourceMappingURL=Vue.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/Platform/detection/Svelte.mjs
/* provided dependency */ var Svelte_process = __webpack_require__(95704);


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with svelte 3.59
function svelteWebDetect() {
    return windowExists() && keyPrefixMatch(window, '__SVELTE');
}
function svelteSSRDetect() {
    return (processExists() &&
        typeof Svelte_process.env !== 'undefined' &&
        !!Object.keys(Svelte_process.env).find(key => key.includes('svelte')));
}


//# sourceMappingURL=Svelte.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/Platform/detection/Next.mjs


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with next 13.4 / react 18.2
function nextWebDetect() {
    return (windowExists() &&
        window.next &&
        typeof window.next === 'object');
}
function nextSSRDetect() {
    return (globalExists() &&
        (keyPrefixMatch(global, '__next') || keyPrefixMatch(global, '__NEXT')));
}


//# sourceMappingURL=Next.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/Platform/detection/Nuxt.mjs


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with nuxt 2.15 / vue 2.7
function nuxtWebDetect() {
    return (windowExists() &&
        (window.__NUXT__ !== undefined ||
            window.$nuxt !== undefined));
}
function nuxtSSRDetect() {
    return (globalExists() && typeof global.__NUXT_PATHS__ !== 'undefined');
}


//# sourceMappingURL=Nuxt.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/Platform/detection/Angular.mjs
/* provided dependency */ var Angular_process = __webpack_require__(95704);


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with @angular/core 16.0.0
function angularWebDetect() {
    const angularVersionSetInDocument = Boolean(documentExists() && document.querySelector('[ng-version]'));
    const angularContentSetInWindow = Boolean(windowExists() && typeof window.ng !== 'undefined');
    return angularVersionSetInDocument || angularContentSetInWindow;
}
function angularSSRDetect() {
    return ((processExists() &&
        typeof Angular_process.env === 'object' &&
        Angular_process.env.npm_lifecycle_script?.startsWith('ng ')) ||
        false);
}


//# sourceMappingURL=Angular.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/Platform/detection/ReactNative.mjs
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with react-native 0.17.7
function reactNativeDetect() {
    return (typeof navigator !== 'undefined' &&
        typeof navigator.product !== 'undefined' &&
        navigator.product === 'ReactNative');
}


//# sourceMappingURL=ReactNative.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/Platform/detection/Expo.mjs


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with expo 48 / react-native 0.71.3
function expoDetect() {
    return globalExists() && typeof global.expo !== 'undefined';
}


//# sourceMappingURL=Expo.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/Platform/detection/Web.mjs


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function webDetect() {
    return windowExists();
}


//# sourceMappingURL=Web.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/Platform/detection/index.mjs











// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// These are in the order of detection where when both are detectable, the early Framework will be reported
const detectionMap = [
    // First, detect mobile
    { platform: types/* Framework */.dT.Expo, detectionMethod: expoDetect },
    { platform: types/* Framework */.dT.ReactNative, detectionMethod: reactNativeDetect },
    // Next, detect web frameworks
    { platform: types/* Framework */.dT.NextJs, detectionMethod: nextWebDetect },
    { platform: types/* Framework */.dT.Nuxt, detectionMethod: nuxtWebDetect },
    { platform: types/* Framework */.dT.Angular, detectionMethod: angularWebDetect },
    { platform: types/* Framework */.dT.React, detectionMethod: reactWebDetect },
    { platform: types/* Framework */.dT.VueJs, detectionMethod: vueWebDetect },
    { platform: types/* Framework */.dT.Svelte, detectionMethod: svelteWebDetect },
    { platform: types/* Framework */.dT.WebUnknown, detectionMethod: webDetect },
    // Last, detect ssr frameworks
    { platform: types/* Framework */.dT.NextJsSSR, detectionMethod: nextSSRDetect },
    { platform: types/* Framework */.dT.NuxtSSR, detectionMethod: nuxtSSRDetect },
    { platform: types/* Framework */.dT.ReactSSR, detectionMethod: reactSSRDetect },
    { platform: types/* Framework */.dT.VueJsSSR, detectionMethod: vueSSRDetect },
    { platform: types/* Framework */.dT.AngularSSR, detectionMethod: angularSSRDetect },
    { platform: types/* Framework */.dT.SvelteSSR, detectionMethod: svelteSSRDetect },
];
function detect() {
    return (detectionMap.find(detectionEntry => detectionEntry.detectionMethod())
        ?.platform || types/* Framework */.dT.ServerSideUnknown);
}


//# sourceMappingURL=index.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/Platform/detectFramework.mjs



// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// We want to cache detection since the framework won't change
let frameworkCache;
const frameworkChangeObservers = [];
// Setup the detection reset tracking / timeout delays
let resetTriggered = false;
const SSR_RESET_TIMEOUT = 10; // ms
const WEB_RESET_TIMEOUT = 10; // ms
const PRIME_FRAMEWORK_DELAY = 1000; // ms
const detectFramework = () => {
    if (!frameworkCache) {
        frameworkCache = detect();
        if (resetTriggered) {
            // The final run of detectFramework:
            // Starting from this point, the `frameworkCache` becomes "final".
            // So we don't need to notify the observers again so the observer
            // can be removed after the final notice.
            while (frameworkChangeObservers.length) {
                frameworkChangeObservers.pop()?.();
            }
        }
        else {
            // The first run of detectFramework:
            // Every time we update the cache, call each observer function
            frameworkChangeObservers.forEach(fcn => {
                fcn();
            });
        }
        // Retry once for either Unknown type after a delay (explained below)
        resetTimeout(types/* Framework */.dT.ServerSideUnknown, SSR_RESET_TIMEOUT);
        resetTimeout(types/* Framework */.dT.WebUnknown, WEB_RESET_TIMEOUT);
    }
    return frameworkCache;
};
/**
 * @internal Setup observer callback that will be called everytime the framework changes
 */
const observeFrameworkChanges = (fcn) => {
    // When the `frameworkCache` won't be updated again, we ignore all incoming
    // observers.
    if (resetTriggered) {
        return;
    }
    frameworkChangeObservers.push(fcn);
};
function clearCache() {
    frameworkCache = undefined;
}
// For a framework type and a delay amount, setup the event to re-detect
//   During the runtime boot, it is possible that framework detection will
//   be triggered before the framework has made modifications to the
//   global/window/etc needed for detection. When no framework is detected
//   we will reset and try again to ensure we don't use a cached
//   non-framework detection result for all requests.
function resetTimeout(framework, delay) {
    if (frameworkCache === framework && !resetTriggered) {
        setTimeout(() => {
            clearCache();
            resetTriggered = true;
            setTimeout(detectFramework, PRIME_FRAMEWORK_DELAY);
        }, delay);
    }
}


//# sourceMappingURL=detectFramework.mjs.map

// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/Platform/customUserAgent.mjs
var customUserAgent = __webpack_require__(75276);
;// ./node_modules/@aws-amplify/core/dist/esm/Platform/index.mjs





// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const BASE_USER_AGENT = `aws-amplify`;
/** Sanitize Amplify version string be removing special character + and character post the special character  */
const sanitizeAmplifyVersion = (amplifyVersion) => amplifyVersion.replace(/\+.*/, '');
class PlatformBuilder {
    constructor() {
        this.userAgent = `${BASE_USER_AGENT}/${sanitizeAmplifyVersion(version)}`;
    }
    get framework() {
        return detectFramework();
    }
    get isReactNative() {
        return (this.framework === types/* Framework */.dT.ReactNative ||
            this.framework === types/* Framework */.dT.Expo);
    }
    observeFrameworkChanges(fcn) {
        observeFrameworkChanges(fcn);
    }
}
const Platform = new PlatformBuilder();
const getAmplifyUserAgentObject = ({ category, action, } = {}) => {
    const userAgent = [
        [BASE_USER_AGENT, sanitizeAmplifyVersion(version)],
    ];
    if (category) {
        userAgent.push([category, action]);
    }
    userAgent.push(['framework', detectFramework()]);
    if (category && action) {
        const customState = (0,customUserAgent/* getCustomUserAgent */.e)(category, action);
        if (customState) {
            customState.forEach(state => {
                userAgent.push(state);
            });
        }
    }
    return userAgent;
};
const getAmplifyUserAgent = (customUserAgentDetails) => {
    const userAgent = getAmplifyUserAgentObject(customUserAgentDetails);
    const userAgentString = userAgent
        .map(([agentKey, agentValue]) => agentKey && agentValue ? `${agentKey}/${agentValue}` : agentKey)
        .join(' ');
    return userAgentString;
};


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 79301:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ COGNITO_IDP_SERVICE_NAME)
/* harmony export */ });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * The service name used to sign requests if the API requires authentication.
 */
const COGNITO_IDP_SERVICE_NAME = 'cognito-idp';


//# sourceMappingURL=constants.mjs.map


/***/ }),

/***/ 80049:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ addInflightPromise),
/* harmony export */   i: () => (/* binding */ resolveAndClearInflightPromises)
/* harmony export */ });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const inflightPromises = [];
const addInflightPromise = (resolver) => {
    inflightPromises.push(resolver);
};
const resolveAndClearInflightPromises = () => {
    while (inflightPromises.length) {
        inflightPromises.pop()?.();
    }
};


//# sourceMappingURL=inflightPromise.mjs.map


/***/ }),

/***/ 81230:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ DefaultOAuthStore)
/* harmony export */ });
/* harmony import */ var _aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50160);
/* harmony import */ var _tokenProvider_TokenStore_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51769);
/* harmony import */ var _types_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74652);




// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const V5_HOSTED_UI_KEY = 'amplify-signin-with-hostedUI';
const name = 'CognitoIdentityServiceProvider';
class DefaultOAuthStore {
    constructor(keyValueStorage) {
        this.keyValueStorage = keyValueStorage;
    }
    async clearOAuthInflightData() {
        (0,_aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_0__/* .assertTokenProviderConfig */ .$y)(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        await Promise.all([
            this.keyValueStorage.removeItem(authKeys.inflightOAuth),
            this.keyValueStorage.removeItem(authKeys.oauthPKCE),
            this.keyValueStorage.removeItem(authKeys.oauthState),
        ]);
    }
    async clearOAuthData() {
        (0,_aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_0__/* .assertTokenProviderConfig */ .$y)(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        await this.clearOAuthInflightData();
        await this.keyValueStorage.removeItem(V5_HOSTED_UI_KEY); // remove in case a customer migrated an App from v5 to v6
        return this.keyValueStorage.removeItem(authKeys.oauthSignIn);
    }
    loadOAuthState() {
        (0,_aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_0__/* .assertTokenProviderConfig */ .$y)(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        return this.keyValueStorage.getItem(authKeys.oauthState);
    }
    storeOAuthState(state) {
        (0,_aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_0__/* .assertTokenProviderConfig */ .$y)(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        return this.keyValueStorage.setItem(authKeys.oauthState, state);
    }
    loadPKCE() {
        (0,_aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_0__/* .assertTokenProviderConfig */ .$y)(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        return this.keyValueStorage.getItem(authKeys.oauthPKCE);
    }
    storePKCE(pkce) {
        (0,_aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_0__/* .assertTokenProviderConfig */ .$y)(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        return this.keyValueStorage.setItem(authKeys.oauthPKCE, pkce);
    }
    setAuthConfig(authConfigParam) {
        this.cognitoConfig = authConfigParam;
    }
    async loadOAuthInFlight() {
        (0,_aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_0__/* .assertTokenProviderConfig */ .$y)(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        return ((await this.keyValueStorage.getItem(authKeys.inflightOAuth)) === 'true');
    }
    async storeOAuthInFlight(inflight) {
        (0,_aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_0__/* .assertTokenProviderConfig */ .$y)(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        await this.keyValueStorage.setItem(authKeys.inflightOAuth, `${inflight}`);
    }
    async loadOAuthSignIn() {
        (0,_aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_0__/* .assertTokenProviderConfig */ .$y)(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        const isLegacyHostedUISignIn = await this.keyValueStorage.getItem(V5_HOSTED_UI_KEY);
        const [isOAuthSignIn, preferPrivateSession] = (await this.keyValueStorage.getItem(authKeys.oauthSignIn))?.split(',') ??
            [];
        return {
            isOAuthSignIn: isOAuthSignIn === 'true' || isLegacyHostedUISignIn === 'true',
            preferPrivateSession: preferPrivateSession === 'true',
        };
    }
    async storeOAuthSignIn(oauthSignIn, preferPrivateSession = false) {
        (0,_aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_0__/* .assertTokenProviderConfig */ .$y)(this.cognitoConfig);
        const authKeys = createKeysForAuthStorage(name, this.cognitoConfig.userPoolClientId);
        await this.keyValueStorage.setItem(authKeys.oauthSignIn, `${oauthSignIn},${preferPrivateSession}`);
    }
}
const createKeysForAuthStorage = (provider, identifier) => {
    return (0,_tokenProvider_TokenStore_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getAuthStorageKeys */ .Qm)(_types_mjs__WEBPACK_IMPORTED_MODULE_2__/* .OAuthStorageKeys */ .f3)(provider, identifier);
};


//# sourceMappingURL=signInWithRedirectStore.mjs.map


/***/ }),

/***/ 82993:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getAuthUserAgentValue)
/* harmony export */ });
/* harmony import */ var _aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78735);
/* harmony import */ var _aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9588);


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const getAuthUserAgentValue = (action, customUserAgentDetails) => (0,_aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_0__/* .getAmplifyUserAgent */ .fE)({
    category: _aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_1__/* .Category */ .b7.Auth,
    action,
    ...customUserAgentDetails,
});


//# sourceMappingURL=getAuthUserAgentValue.mjs.map


/***/ }),

/***/ 88968:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MY: () => (/* binding */ getCrypto),
/* harmony export */   nW: () => (/* binding */ getAtob),
/* harmony export */   xA: () => (/* binding */ getBtoa)
/* harmony export */ });
/* harmony import */ var _errors_AmplifyError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35993);




// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const getCrypto = () => {
    if (typeof window === 'object' && typeof window.crypto === 'object') {
        return window.crypto;
    }
    // Next.js global polyfill
    if (typeof crypto === 'object') {
        return crypto;
    }
    throw new _errors_AmplifyError_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AmplifyError */ .x({
        name: 'MissingPolyfill',
        message: 'Cannot resolve the `crypto` function from the environment.',
    });
};
const getBtoa = () => {
    // browser
    if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
        return window.btoa;
    }
    // Next.js global polyfill
    if (typeof btoa === 'function') {
        return btoa;
    }
    throw new _errors_AmplifyError_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AmplifyError */ .x({
        name: 'Base64EncoderError',
        message: 'Cannot resolve the `btoa` function from the environment.',
    });
};
const getAtob = () => {
    // browser
    if (typeof window !== 'undefined' && typeof window.atob === 'function') {
        return window.atob;
    }
    // Next.js global polyfill
    if (typeof atob === 'function') {
        return atob;
    }
    throw new _errors_AmplifyError_mjs__WEBPACK_IMPORTED_MODULE_0__/* .AmplifyError */ .x({
        name: 'Base64EncoderError',
        message: 'Cannot resolve the `atob` function from the environment.',
    });
};


//# sourceMappingURL=index.mjs.map


/***/ })

}]);
//# sourceMappingURL=281-3c4173689b41413c.js.map