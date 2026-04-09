"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2360],{

/***/ 20063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47260);
/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "redirect")) __webpack_require__.d(__webpack_exports__, { redirect: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.redirect; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "useParams")) __webpack_require__.d(__webpack_exports__, { useParams: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.useParams; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "usePathname")) __webpack_require__.d(__webpack_exports__, { usePathname: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.usePathname; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "useRouter")) __webpack_require__.d(__webpack_exports__, { useRouter: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "useSearchParams")) __webpack_require__.d(__webpack_exports__, { useSearchParams: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.useSearchParams; } });


//# sourceMappingURL=navigation.js.map

/***/ }),

/***/ 43184:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ CookieStorage)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72378);


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class CookieStorage {
    constructor(data = {}) {
        const { path, domain, expires, sameSite, secure } = data;
        this.domain = domain;
        this.path = path || '/';
        this.expires = Object.prototype.hasOwnProperty.call(data, 'expires')
            ? expires
            : 365;
        this.secure = Object.prototype.hasOwnProperty.call(data, 'secure')
            ? secure
            : true;
        if (Object.prototype.hasOwnProperty.call(data, 'sameSite')) {
            if (!sameSite || !['strict', 'lax', 'none'].includes(sameSite)) {
                throw new Error('The sameSite value of cookieStorage must be "lax", "strict" or "none".');
            }
            if (sameSite === 'none' && !this.secure) {
                throw new Error('sameSite = None requires the Secure attribute in latest browser versions.');
            }
            this.sameSite = sameSite;
        }
    }
    async setItem(key, value) {
        js_cookie__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.set(key, value, this.getData());
    }
    async getItem(key) {
        const item = js_cookie__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(key);
        return item ?? null;
    }
    async removeItem(key) {
        js_cookie__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.remove(key, this.getData());
    }
    async clear() {
        const cookie = js_cookie__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get();
        const promises = Object.keys(cookie).map(key => this.removeItem(key));
        await Promise.all(promises);
    }
    getData() {
        return {
            path: this.path,
            expires: this.expires,
            domain: this.domain,
            secure: this.secure,
            ...(this.sameSite && { sameSite: this.sameSite }),
        };
    }
}


//# sourceMappingURL=CookieStorage.mjs.map


/***/ }),

/***/ 72378:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ api)
/* harmony export */ });
/*! js-cookie v3.0.5 | MIT */
/* eslint-disable no-var */
function assign (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target
}
/* eslint-enable no-var */

/* eslint-disable no-var */
var defaultConverter = {
  read: function (value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  },
  write: function (value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
};
/* eslint-enable no-var */

/* eslint-disable no-var */

function init (converter, defaultAttributes) {
  function set (name, value, attributes) {
    if (typeof document === 'undefined') {
      return
    }

    attributes = assign({}, defaultAttributes, attributes);

    if (typeof attributes.expires === 'number') {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }

    name = encodeURIComponent(name)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape);

    var stringifiedAttributes = '';
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue
      }

      stringifiedAttributes += '; ' + attributeName;

      if (attributes[attributeName] === true) {
        continue
      }

      // Considers RFC 6265 section 5.2:
      // ...
      // 3.  If the remaining unparsed-attributes contains a %x3B (";")
      //     character:
      // Consume the characters of the unparsed-attributes up to,
      // not including, the first %x3B (";") character.
      // ...
      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
    }

    return (document.cookie =
      name + '=' + converter.write(value, name) + stringifiedAttributes)
  }

  function get (name) {
    if (typeof document === 'undefined' || (arguments.length && !name)) {
      return
    }

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all.
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split('=');
      var value = parts.slice(1).join('=');

      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);

        if (name === found) {
          break
        }
      } catch (e) {}
    }

    return name ? jar[name] : jar
  }

  return Object.create(
    {
      set,
      get,
      remove: function (name, attributes) {
        set(
          name,
          '',
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function (attributes) {
        return init(this.converter, assign({}, this.attributes, attributes))
      },
      withConverter: function (converter) {
        return init(assign({}, this.converter, converter), this.attributes)
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  )
}

var api = init(defaultConverter, { path: '/' });
/* eslint-enable no-var */




/***/ }),

/***/ 72999:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ DefaultAmplify)
});

// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/storage/CookieStorage.mjs
var CookieStorage = __webpack_require__(43184);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/storage/index.mjs + 8 modules
var storage = __webpack_require__(42014);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs + 2 modules
var Amplify = __webpack_require__(64016);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/utils/parseAmplifyConfig.mjs + 2 modules
var parseAmplifyConfig = __webpack_require__(42990);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/Logger/ConsoleLogger.mjs + 1 modules
var ConsoleLogger = __webpack_require__(94389);
// EXTERNAL MODULE: ./node_modules/@aws-crypto/sha256-js/build/module/index.js + 7 modules
var build_module = __webpack_require__(73739);
// EXTERNAL MODULE: ./node_modules/@smithy/util-hex-encoding/dist-es/index.js
var dist_es = __webpack_require__(78652);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/Platform/index.mjs + 13 modules
var Platform = __webpack_require__(78735);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/clients/serde/responseInfo.mjs
var responseInfo = __webpack_require__(3015);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/clients/serde/json.mjs
var json = __webpack_require__(47192);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/clients/internal/composeServiceApi.mjs
var composeServiceApi = __webpack_require__(11529);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/jitteredBackoff.mjs + 2 modules
var jitteredBackoff = __webpack_require__(53110);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/clients/middleware/retry/defaultRetryDecider.mjs + 1 modules
var defaultRetryDecider = __webpack_require__(30861);
;// ./node_modules/@aws-amplify/core/dist/esm/foundation/factories/serviceClients/cognitoIdentity/constants.mjs



















// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * The service name used to sign requests if the API requires authentication.
 */
const COGNITO_IDENTITY_SERVICE_NAME = 'cognito-identity';
const DEFAULT_SERVICE_CLIENT_API_CONFIG = {
    service: COGNITO_IDENTITY_SERVICE_NAME,
    retryDecider: (0,defaultRetryDecider/* getRetryDecider */.D)(json/* parseJsonError */.F),
    computeDelay: jitteredBackoff/* jitteredBackoff */.y,
    cache: 'no-store',
};


//# sourceMappingURL=constants.mjs.map

// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/clients/handlers/aws/unauthenticated.mjs + 7 modules
var unauthenticated = __webpack_require__(61740);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/clients/internal/composeTransferHandler.mjs
var composeTransferHandler = __webpack_require__(2035);
;// ./node_modules/@aws-amplify/core/dist/esm/foundation/factories/middleware/createDisableCacheMiddleware.mjs
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * A Cognito Identity-specific middleware that disables caching for all requests.
 */
const createDisableCacheMiddleware = () => next => async function disableCacheMiddleware(request) {
    request.headers['cache-control'] = 'no-store';
    return next(request);
};


//# sourceMappingURL=createDisableCacheMiddleware.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/foundation/factories/serviceClients/cognitoIdentity/handler/cognitoIdentityTransferHandler.mjs



















// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * A Cognito Identity-specific transfer handler that does NOT sign requests, and
 * disables caching.
 *
 * @internal
 */
const cognitoIdentityTransferHandler = (0,composeTransferHandler/* composeTransferHandler */.q)(unauthenticated/* unauthenticatedHandler */.F, [createDisableCacheMiddleware]);


//# sourceMappingURL=cognitoIdentityTransferHandler.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/foundation/factories/serviceClients/cognitoIdentity/serde/createClientSerializer.mjs
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createClientSerializer = (operation) => (input, endpoint) => {
    const headers = getSharedHeaders(operation);
    const body = JSON.stringify(input);
    return buildHttpRpcRequest(endpoint, headers, body);
};
const getSharedHeaders = (operation) => ({
    'content-type': 'application/x-amz-json-1.1',
    'x-amz-target': `AWSCognitoIdentityService.${operation}`,
});
const buildHttpRpcRequest = ({ url }, headers, body) => ({
    headers,
    url,
    body,
    method: 'POST',
});


//# sourceMappingURL=createClientSerializer.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/foundation/factories/serviceClients/cognitoIdentity/createGetCredentialsForIdentityClient.mjs






















// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createGetCredentialsForIdentityClient = (config) => (0,composeServiceApi/* composeServiceApi */.A)(cognitoIdentityTransferHandler, createClientSerializer('GetCredentialsForIdentity'), getCredentialsForIdentityDeserializer, {
    ...DEFAULT_SERVICE_CLIENT_API_CONFIG,
    ...config,
    userAgentValue: (0,Platform/* getAmplifyUserAgent */.fE)(),
});
const getCredentialsForIdentityDeserializer = async (response) => {
    if (response.statusCode >= 300) {
        const error = await (0,json/* parseJsonError */.F)(response);
        throw error;
    }
    const body = await (0,json/* parseJsonBody */.Y)(response);
    return {
        IdentityId: body.IdentityId,
        Credentials: deserializeCredentials(body.Credentials),
        $metadata: (0,responseInfo/* parseMetadata */.j)(response),
    };
};
const deserializeCredentials = ({ Expiration, ...rest } = {}) => ({
    ...rest,
    Expiration: Expiration && new Date(Expiration * 1000),
});


//# sourceMappingURL=createGetCredentialsForIdentityClient.mjs.map

// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs + 1 modules
var utils = __webpack_require__(50160);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/errors/AuthError.mjs
var AuthError = __webpack_require__(39820);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/errors/utils/assertServiceError.mjs
var assertServiceError = __webpack_require__(59547);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/foundation/parsers/regionParsers.mjs
var regionParsers = __webpack_require__(5431);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/types.mjs
var types = __webpack_require__(74652);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/clients/endpoints/getDnsSuffix.mjs + 1 modules
var getDnsSuffix = __webpack_require__(26239);
// EXTERNAL MODULE: ./node_modules/@aws-amplify/core/dist/esm/utils/amplifyUrl/index.mjs
var amplifyUrl = __webpack_require__(2223);
;// ./node_modules/@aws-amplify/core/dist/esm/foundation/factories/serviceClients/cognitoIdentity/cognitoIdentityPoolEndpointResolver.mjs



















// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const cognitoIdentityPoolEndpointResolver = ({ region, }) => ({
    url: new amplifyUrl/* AmplifyUrl */.o(`https://${COGNITO_IDENTITY_SERVICE_NAME}.${region}.${(0,getDnsSuffix/* getDnsSuffix */.R)(region)}`),
});


//# sourceMappingURL=cognitoIdentityPoolEndpointResolver.mjs.map

;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/factories/createCognitoIdentityPoolEndpointResolver.mjs



// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createCognitoIdentityPoolEndpointResolver = ({ endpointOverride }) => (input) => {
    if (endpointOverride) {
        return { url: new amplifyUrl/* AmplifyUrl */.o(endpointOverride) };
    }
    return cognitoIdentityPoolEndpointResolver(input);
};


//# sourceMappingURL=createCognitoIdentityPoolEndpointResolver.mjs.map

;// ./node_modules/@aws-amplify/core/dist/esm/foundation/factories/serviceClients/cognitoIdentity/createGetIdClient.mjs






















// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createGetIdClient = (config) => (0,composeServiceApi/* composeServiceApi */.A)(cognitoIdentityTransferHandler, createClientSerializer('GetId'), getIdDeserializer, {
    ...DEFAULT_SERVICE_CLIENT_API_CONFIG,
    ...config,
    userAgentValue: (0,Platform/* getAmplifyUserAgent */.fE)(),
});
const getIdDeserializer = async (response) => {
    if (response.statusCode >= 300) {
        const error = await (0,json/* parseJsonError */.F)(response);
        throw error;
    }
    const body = await (0,json/* parseJsonBody */.Y)(response);
    return {
        IdentityId: body.IdentityId,
        $metadata: (0,responseInfo/* parseMetadata */.j)(response),
    };
};


//# sourceMappingURL=createGetIdClient.mjs.map

;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/utils.mjs



// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function formLoginsMap(idToken) {
    const issuer = (0,utils/* decodeJWT */.Cq)(idToken).payload.iss;
    const res = {};
    if (!issuer) {
        throw new AuthError/* AuthError */.l({
            name: 'InvalidIdTokenException',
            message: 'Invalid Idtoken.',
        });
    }
    const domainName = issuer.replace(/(^\w+:|^)\/\//, '');
    res[domainName] = idToken;
    return res;
}


//# sourceMappingURL=utils.mjs.map

;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/IdentityIdProvider.mjs









// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Provides a Cognito identityId
 *
 * @param tokens - The AuthTokens received after SignIn
 * @returns string
 * @throws configuration exceptions: `InvalidIdentityPoolIdException`
 *  - Auth errors that may arise from misconfiguration.
 * @throws service exceptions: {@link GetIdException }
 */
async function cognitoIdentityIdProvider({ tokens, authConfig, identityIdStore, }) {
    identityIdStore.setAuthConfig({ Cognito: authConfig });
    // will return null only if there is no identityId cached or if there is an error retrieving it
    const identityId = await identityIdStore.loadIdentityId();
    if (identityId) {
        return identityId.id;
    }
    const logins = tokens?.idToken
        ? formLoginsMap(tokens.idToken.toString())
        : {};
    const generatedIdentityId = await generateIdentityId(logins, authConfig);
    // Store generated identityId
    identityIdStore.storeIdentityId({
        id: generatedIdentityId,
        type: tokens ? 'primary' : 'guest',
    });
    return generatedIdentityId;
}
async function generateIdentityId(logins, authConfig) {
    const identityPoolId = authConfig?.identityPoolId;
    const region = (0,regionParsers/* getRegionFromIdentityPoolId */.C)(identityPoolId);
    const getId = createGetIdClient({
        endpointResolver: createCognitoIdentityPoolEndpointResolver({
            endpointOverride: authConfig.identityPoolEndpoint,
        }),
    });
    // IdentityId is absent so get it using IdentityPoolId with Cognito's GetId API
    let idResult;
    // for a first-time user, this will return a brand new identity
    // for a returning user, this will retrieve the previous identity assocaited with the logins
    try {
        idResult = (await getId({
            region,
        }, {
            IdentityPoolId: identityPoolId,
            Logins: logins,
        })).IdentityId;
    }
    catch (e) {
        (0,assertServiceError/* assertServiceError */.e)(e);
        throw new AuthError/* AuthError */.l(e);
    }
    if (!idResult) {
        throw new AuthError/* AuthError */.l({
            name: 'GetIdResponseException',
            message: 'Received undefined response from getId operation',
            recoverySuggestion: 'Make sure to pass a valid identityPoolId in the configuration.',
        });
    }
    return idResult;
}


//# sourceMappingURL=IdentityIdProvider.mjs.map

;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/credentialsProvider.mjs











// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger = new ConsoleLogger/* ConsoleLogger */.C('CognitoCredentialsProvider');
const CREDENTIALS_TTL = 50 * 60 * 1000; // 50 min, can be modified on config if required in the future
class CognitoAWSCredentialsAndIdentityIdProvider {
    constructor(identityIdStore) {
        this._nextCredentialsRefresh = 0;
        this._identityIdStore = identityIdStore;
    }
    async clearCredentialsAndIdentityId() {
        logger.debug('Clearing out credentials and identityId');
        this._credentialsAndIdentityId = undefined;
        await this._identityIdStore.clearIdentityId();
    }
    async clearCredentials() {
        logger.debug('Clearing out in-memory credentials');
        this._credentialsAndIdentityId = undefined;
    }
    async getCredentialsAndIdentityId(getCredentialsOptions) {
        const isAuthenticated = getCredentialsOptions.authenticated;
        const { tokens } = getCredentialsOptions;
        const { authConfig } = getCredentialsOptions;
        try {
            (0,utils/* assertIdentityPoolIdConfig */.Eh)(authConfig?.Cognito);
        }
        catch {
            // No identity pool configured, skipping
            return;
        }
        if (!isAuthenticated && !authConfig.Cognito.allowGuestAccess) {
            // TODO(V6): return partial result like Native platforms
            return;
        }
        const { forceRefresh } = getCredentialsOptions;
        const tokenHasChanged = this.hasTokenChanged(tokens);
        const identityId = await cognitoIdentityIdProvider({
            tokens,
            authConfig: authConfig.Cognito,
            identityIdStore: this._identityIdStore,
        });
        // Clear cached credentials when forceRefresh is true OR the cache token has changed
        if (forceRefresh || tokenHasChanged) {
            this.clearCredentials();
        }
        if (!isAuthenticated) {
            return this.getGuestCredentials(identityId, authConfig.Cognito);
        }
        else {
            (0,types/* assertIdTokenInAuthTokens */.OW)(tokens);
            return this.credsForOIDCTokens(authConfig.Cognito, tokens, identityId);
        }
    }
    async getGuestCredentials(identityId, authConfig) {
        // Return existing in-memory cached credentials only if it exists, is not past it's lifetime and is unauthenticated credentials
        if (this._credentialsAndIdentityId &&
            !this.isPastTTL() &&
            this._credentialsAndIdentityId.isAuthenticatedCreds === false) {
            logger.info('returning stored credentials as they neither past TTL nor expired.');
            return this._credentialsAndIdentityId;
        }
        // Clear to discard if any authenticated credentials are set and start with a clean slate
        this.clearCredentials();
        const region = (0,regionParsers/* getRegionFromIdentityPoolId */.C)(authConfig.identityPoolId);
        const getCredentialsForIdentity = createGetCredentialsForIdentityClient({
            endpointResolver: createCognitoIdentityPoolEndpointResolver({
                endpointOverride: authConfig.identityPoolEndpoint,
            }),
        });
        // use identityId to obtain guest credentials
        // save credentials in-memory
        // No logins params should be passed for guest creds:
        // https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html
        let clientResult;
        try {
            clientResult = await getCredentialsForIdentity({ region }, {
                IdentityId: identityId,
            });
        }
        catch (e) {
            (0,assertServiceError/* assertServiceError */.e)(e);
            throw new AuthError/* AuthError */.l(e);
        }
        if (clientResult?.Credentials?.AccessKeyId &&
            clientResult?.Credentials?.SecretKey) {
            this._nextCredentialsRefresh = new Date().getTime() + CREDENTIALS_TTL;
            const res = {
                credentials: {
                    accessKeyId: clientResult.Credentials.AccessKeyId,
                    secretAccessKey: clientResult.Credentials.SecretKey,
                    sessionToken: clientResult.Credentials.SessionToken,
                    expiration: clientResult.Credentials.Expiration,
                },
                identityId,
            };
            if (clientResult.IdentityId) {
                res.identityId = clientResult.IdentityId;
                this._identityIdStore.storeIdentityId({
                    id: clientResult.IdentityId,
                    type: 'guest',
                });
            }
            this._credentialsAndIdentityId = {
                ...res,
                isAuthenticatedCreds: false,
            };
            return res;
        }
        else {
            throw new AuthError/* AuthError */.l({
                name: 'CredentialsNotFoundException',
                message: `Cognito did not respond with either Credentials, AccessKeyId or SecretKey.`,
            });
        }
    }
    async credsForOIDCTokens(authConfig, authTokens, identityId) {
        if (this._credentialsAndIdentityId &&
            !this.isPastTTL() &&
            this._credentialsAndIdentityId.isAuthenticatedCreds === true) {
            logger.debug('returning stored credentials as they neither past TTL nor expired.');
            return this._credentialsAndIdentityId;
        }
        // Clear to discard if any unauthenticated credentials are set and start with a clean slate
        this.clearCredentials();
        const logins = authTokens.idToken
            ? formLoginsMap(authTokens.idToken.toString())
            : {};
        const region = (0,regionParsers/* getRegionFromIdentityPoolId */.C)(authConfig.identityPoolId);
        const getCredentialsForIdentity = createGetCredentialsForIdentityClient({
            endpointResolver: createCognitoIdentityPoolEndpointResolver({
                endpointOverride: authConfig.identityPoolEndpoint,
            }),
        });
        let clientResult;
        try {
            clientResult = await getCredentialsForIdentity({ region }, {
                IdentityId: identityId,
                Logins: logins,
            });
        }
        catch (e) {
            (0,assertServiceError/* assertServiceError */.e)(e);
            throw new AuthError/* AuthError */.l(e);
        }
        if (clientResult?.Credentials?.AccessKeyId &&
            clientResult?.Credentials?.SecretKey) {
            this._nextCredentialsRefresh = new Date().getTime() + CREDENTIALS_TTL;
            const res = {
                credentials: {
                    accessKeyId: clientResult.Credentials.AccessKeyId,
                    secretAccessKey: clientResult.Credentials.SecretKey,
                    sessionToken: clientResult.Credentials.SessionToken,
                    expiration: clientResult.Credentials.Expiration,
                },
                identityId,
            };
            if (clientResult.IdentityId) {
                res.identityId = clientResult.IdentityId;
                // note: the following call removes guest identityId from the persistent store (localStorage)
                this._identityIdStore.storeIdentityId({
                    id: clientResult.IdentityId,
                    type: 'primary',
                });
            }
            // Store the credentials in-memory along with the expiration
            this._credentialsAndIdentityId = {
                ...res,
                isAuthenticatedCreds: true,
                associatedIdToken: authTokens.idToken?.toString(),
            };
            return res;
        }
        else {
            throw new AuthError/* AuthError */.l({
                name: 'CredentialsException',
                message: `Cognito did not respond with either Credentials, AccessKeyId or SecretKey.`,
            });
        }
    }
    isPastTTL() {
        return this._nextCredentialsRefresh === undefined
            ? true
            : this._nextCredentialsRefresh <= Date.now();
    }
    hasTokenChanged(tokens) {
        return (!!tokens &&
            !!this._credentialsAndIdentityId?.associatedIdToken &&
            tokens.idToken?.toString() !==
                this._credentialsAndIdentityId.associatedIdToken);
    }
}


//# sourceMappingURL=credentialsProvider.mjs.map

// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/TokenStore.mjs + 3 modules
var TokenStore = __webpack_require__(51769);
;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/types.mjs
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const IdentityIdStorageKeys = {
    identityId: 'identityId',
};


//# sourceMappingURL=types.mjs.map

;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/IdentityIdStore.mjs





// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const IdentityIdStore_logger = new ConsoleLogger/* ConsoleLogger */.C('DefaultIdentityIdStore');
class DefaultIdentityIdStore {
    setAuthConfig(authConfigParam) {
        (0,utils/* assertIdentityPoolIdConfig */.Eh)(authConfigParam.Cognito);
        this.authConfig = authConfigParam;
        this._authKeys = createKeysForAuthStorage('Cognito', authConfigParam.Cognito.identityPoolId);
    }
    constructor(keyValueStorage) {
        this._authKeys = {};
        this._hasGuestIdentityId = false;
        this.keyValueStorage = keyValueStorage;
    }
    async loadIdentityId() {
        (0,utils/* assertIdentityPoolIdConfig */.Eh)(this.authConfig?.Cognito);
        try {
            if (this._primaryIdentityId) {
                return {
                    id: this._primaryIdentityId,
                    type: 'primary',
                };
            }
            else {
                const storedIdentityId = await this.keyValueStorage.getItem(this._authKeys.identityId);
                if (storedIdentityId) {
                    this._hasGuestIdentityId = true;
                    return {
                        id: storedIdentityId,
                        type: 'guest',
                    };
                }
                return null;
            }
        }
        catch (err) {
            IdentityIdStore_logger.log('Error getting stored IdentityId.', err);
            return null;
        }
    }
    async storeIdentityId(identity) {
        (0,utils/* assertIdentityPoolIdConfig */.Eh)(this.authConfig?.Cognito);
        if (identity.type === 'guest') {
            this.keyValueStorage.setItem(this._authKeys.identityId, identity.id);
            // Clear in-memory storage of primary identityId
            this._primaryIdentityId = undefined;
            this._hasGuestIdentityId = true;
        }
        else {
            this._primaryIdentityId = identity.id;
            // Clear locally stored guest id
            if (this._hasGuestIdentityId) {
                this.keyValueStorage.removeItem(this._authKeys.identityId);
                this._hasGuestIdentityId = false;
            }
        }
    }
    async clearIdentityId() {
        this._primaryIdentityId = undefined;
        await this.keyValueStorage.removeItem(this._authKeys.identityId);
    }
}
const createKeysForAuthStorage = (provider, identifier) => {
    return (0,TokenStore/* getAuthStorageKeys */.Qm)(IdentityIdStorageKeys)(`com.amplify.${provider}`, identifier);
};


//# sourceMappingURL=IdentityIdStore.mjs.map

;// ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/index.mjs




// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Cognito specific implmentation of the CredentialsProvider interface
 * that manages setting and getting of AWS Credentials.
 *
 * @throws configuration expections: `InvalidIdentityPoolIdException`
 *  - Auth errors that may arise from misconfiguration.
 * @throws service expections: {@link GetCredentialsForIdentityException}, {@link GetIdException}
 *
 */
const cognitoCredentialsProvider = new CognitoAWSCredentialsAndIdentityIdProvider(new DefaultIdentityIdStore(storage/* defaultStorage */.ZL));


//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/tokenProvider.mjs + 6 modules
var tokenProvider = __webpack_require__(62843);
;// ./node_modules/aws-amplify/dist/esm/initSingleton.mjs




// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const DefaultAmplify = {
    /**
     * Configures Amplify with the {@link resourceConfig} and {@link libraryOptions}.
     *
     * @param resourceConfig The {@link ResourcesConfig} object that is typically imported from the
     * `amplifyconfiguration.json` file. It can also be an object literal created inline when calling `Amplify.configure`.
     * @param libraryOptions The {@link LibraryOptions} additional options for the library.
     *
     * @example
     * import config from './amplifyconfiguration.json';
     *
     * Amplify.configure(config);
     */
    configure(resourceConfig, libraryOptions) {
        const resolvedResourceConfig = (0,parseAmplifyConfig/* parseAmplifyConfig */.M)(resourceConfig);
        const cookieBasedKeyValueStorage = new CookieStorage/* CookieStorage */.W({ sameSite: 'lax' });
        const resolvedKeyValueStorage = libraryOptions?.ssr
            ? cookieBasedKeyValueStorage
            : storage/* defaultStorage */.ZL;
        const resolvedCredentialsProvider = libraryOptions?.ssr
            ? new CognitoAWSCredentialsAndIdentityIdProvider(new DefaultIdentityIdStore(cookieBasedKeyValueStorage))
            : cognitoCredentialsProvider;
        // If no Auth config is provided, no special handling will be required, configure as is.
        // Otherwise, we can assume an Auth config is provided from here on.
        if (!resolvedResourceConfig.Auth) {
            Amplify/* Amplify */.H.configure(resolvedResourceConfig, libraryOptions);
            return;
        }
        // If Auth options are provided, always just configure as is.
        // Otherwise, we can assume no Auth libraryOptions were provided from here on.
        if (libraryOptions?.Auth) {
            Amplify/* Amplify */.H.configure(resolvedResourceConfig, libraryOptions);
            return;
        }
        // If no Auth libraryOptions were previously configured, then always add default providers.
        if (!Amplify/* Amplify */.H.libraryOptions.Auth) {
            tokenProvider/* cognitoUserPoolsTokenProvider */.Q.setAuthConfig(resolvedResourceConfig.Auth);
            tokenProvider/* cognitoUserPoolsTokenProvider */.Q.setKeyValueStorage(
            // TODO: allow configure with a public interface
            resolvedKeyValueStorage);
            Amplify/* Amplify */.H.configure(resolvedResourceConfig, {
                ...libraryOptions,
                Auth: {
                    tokenProvider: tokenProvider/* cognitoUserPoolsTokenProvider */.Q,
                    credentialsProvider: resolvedCredentialsProvider,
                },
            });
            return;
        }
        // At this point, Auth libraryOptions would have been previously configured and no overriding
        // Auth options were given, so we should preserve the currently configured Auth libraryOptions.
        if (libraryOptions) {
            const authLibraryOptions = Amplify/* Amplify */.H.libraryOptions.Auth;
            // If ssr is provided through libraryOptions, we should respect the intentional reconfiguration.
            if (libraryOptions.ssr !== undefined) {
                tokenProvider/* cognitoUserPoolsTokenProvider */.Q.setKeyValueStorage(
                // TODO: allow configure with a public interface
                resolvedKeyValueStorage);
                authLibraryOptions.credentialsProvider = resolvedCredentialsProvider;
            }
            Amplify/* Amplify */.H.configure(resolvedResourceConfig, {
                Auth: authLibraryOptions,
                ...libraryOptions,
            });
            return;
        }
        // Finally, if there were no libraryOptions given at all, we should simply not touch the currently
        // configured libraryOptions.
        Amplify/* Amplify */.H.configure(resolvedResourceConfig);
    },
    /**
     * Returns the {@link ResourcesConfig} object passed in as the `resourceConfig` parameter when calling
     * `Amplify.configure`.
     *
     * @returns An {@link ResourcesConfig} object.
     */
    getConfig() {
        return Amplify/* Amplify */.H.getConfig();
    },
};


//# sourceMappingURL=initSingleton.mjs.map


/***/ })

}]);
//# sourceMappingURL=2360-8b4fcb7a8441b9ad.js.map