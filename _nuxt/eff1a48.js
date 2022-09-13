(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{109:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),function(t){t[t.NotSignedIn=1e3]="NotSignedIn",t[t.UserCancelled=1001]="UserCancelled",t[t.NoRefreshToken=1002]="NoRefreshToken",t[t.UnsupportedAuthenticationMethod=1003]="UnsupportedAuthenticationMethod",t[t.ServerError=1004]="ServerError",t[t.InvalidConfiguration=1005]="InvalidConfiguration",t[t.PopupBlocked=1006]="PopupBlocked"}(r||(r={}));class o extends Error{constructor(t,code){super(t),this.name="AuthenticationError",Error.captureStackTrace&&Error.captureStackTrace(this,o),this.code=code}static NotSignedIn(){return new o("Not signed in.",r.NotSignedIn)}static UserCancelled(){return new o("Sign in request was cancelled.",r.UserCancelled)}static NoRefreshToken(){return new o("Refresh token is not available.",r.NoRefreshToken)}static UnsupportedAuthenticationMethod(){return new o("Sign in method not supported.",r.UnsupportedAuthenticationMethod)}static PopupBlocked(t){return new o(`The popup was blocked. Please make sure ${t} is allowed to open popups.`,r.PopupBlocked)}static ServerError(t,e){const n=new o("Error from the server: "+t,r.ServerError);return n.description=e,n}static InvalidConfiguration(t){return new o("The OAuth Configuration is invalid: "+t,r.InvalidConfiguration)}}},1390:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{constructor(t){this.errorHandler=t}check(t){t?/chrome/.test(navigator.userAgent.toLowerCase())?setTimeout(()=>{this.isPopupBlocked(t)},200):t.onload=()=>{this.isPopupBlocked(t)}:this.handleBlocked()}isPopupBlocked(t){t.innerHeight>0==!1&&this.handleBlocked()}handleBlocked(){this.errorHandler()}}},1392:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){var r={times:5,intervalFunc:l(0)};arguments.length<3&&"function"==typeof t?(n=e||(0,d.promiseCallback)(),e=t):(h(r,t),n=n||(0,d.promiseCallback)());if("function"!=typeof e)throw new Error("Invalid arguments for async.retry");var o=(0,c.default)(e),f=1;function m(){o((t,...e)=>{!1!==t&&(t&&f++<r.times&&("function"!=typeof r.errorFilter||r.errorFilter(t))?setTimeout(m,r.intervalFunc(f-1)):n(t,...e))})}return m(),n[d.PROMISE_SYMBOL]};var r,o=n(762),c=(r=o)&&r.__esModule?r:{default:r},d=n(2695);function l(t){return function(){return t}}function h(t,e){if("object"==typeof e)t.times=+e.times||5,t.intervalFunc="function"==typeof e.interval?e.interval:l(+e.interval||0),t.errorFilter=e.errorFilter;else{if("number"!=typeof e&&"string"!=typeof e)throw new Error("Invalid arguments for async.retry");t.times=+e||5}}t.exports=e.default},1393:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=l(n(2696)),o=l(n(2697)),c=l(n(762)),d=l(n(2698));function l(t){return t&&t.__esModule?t:{default:t}}e.default=(0,d.default)((function(t,e){if(e=(0,r.default)(e),!Array.isArray(t))return e(new Error("First argument to waterfall must be an array of functions"));if(!t.length)return e();var n=0;function d(e){(0,c.default)(t[n++])(...e,(0,o.default)(l))}function l(r,...o){if(!1!==r)return r||n===t.length?e(r,...o):void d(o)}d([])})),t.exports=e.default},1415:function(t,e,n){"use strict";n.d(e,"a",(function(){return Y}));var r=n(108),o=n(79),c=n(1391);class d{constructor(content,t=!1){this.content=this.parseContent(content),this.container=this.createContainer(),this.injectTemplate(this.container,this.content),t&&this.setLoading(!0),this.addCloseHandlers(),setTimeout(()=>{this.show()},10)}show(){this.container.classList.add("bitski-visible","bitski-loaded")}hide(){this.container.classList.remove("bitski-visible","bitski-loaded")}dismiss(){setTimeout(()=>{this.container.remove()},500),this.hide()}close(){this.dismiss(),this.onClose&&this.onClose()}setLoading(t){const body=document.querySelector(".bitski-dialog-body");body&&(t?body.classList.add("bitski-loading"):body.classList.remove("bitski-loading"))}parseContent(content){if(content instanceof HTMLElement)return content;if(document.querySelector(content))return document.querySelector(content);const div=document.createElement("div");return div.innerText=content,div}createContainer(){const t=document.querySelector("#bitski-dialog-container");if(t)return t;const e=document.createElement("div");return e.id="bitski-dialog-container",document.body.appendChild(e),e}injectTemplate(t,content){t.innerHTML="\n  <div class='bitski-dialog'>\n      <button class='bitski-close-button'>Close</button>\n      <div class='bitski-dialog-body'></div>\n  </div>\n";const body=t.querySelector(".bitski-dialog-body");body&&body.appendChild(content)}addCloseHandlers(){this.container.addEventListener("click",t=>{t.target===this.container&&this.close()}),document.addEventListener("keyup",t=>{"Escape"===t.key&&this.close()});const t=this.container.querySelector(".bitski-close-button");t&&t.addEventListener("click",this.close.bind(this))}}var l=n(174),h=n(501);class f{constructor(t,e,n,r){this.webBaseUrl=t,this.apiBaseUrl=e,this.defaultHeaders=n,this.callbackURL=r,window.addEventListener("message",this.receiveMessage.bind(this),!1)}async sign(t,e){if(this.callbackURL){const n=await this.submitTransaction(t,e);return this.redirectToCallbackURL(n.transaction)}return this.submitTransaction(t,e).catch(t=>this.handleCallback({error:t})),this.showAuthorizationModal(t)}receiveMessage(t){if(t.source===window||!t.origin.includes(o.n))return;const data=t.data;null!=data&&this.handleCallback(data)}handleCallback(t){if(void 0===this.currentRequest)return;const[e,n]=this.currentRequest;this.currentRequestDialog&&this.currentRequestDialog.dismiss(),t.error?n(t.error):e(t.result),this.currentRequest=void 0,this.currentRequestDialog=void 0}async submitTransaction(t,e){const n={transaction:t},r=Object.assign({},this.defaultHeaders,{Authorization:"Bearer "+e,"Content-Type":"application/json"});return await Object(c.a)({times:5},async()=>{const t=await fetch(this.apiBaseUrl+"/transactions",{method:"POST",body:JSON.stringify(n),headers:r});return Object(h.a)(t)})}showAuthorizationModal(t){return new Promise((e,n)=>{const r=`${this.webBaseUrl}/transactions/${t.id}`,iframe=document.createElement("iframe");iframe.style.position="absolute",iframe.style.top="0",iframe.style.left="0",iframe.style.width="100%",iframe.style.height="100%",iframe.frameBorder="0",iframe.src=r,this.currentRequestDialog&&this.currentRequestDialog.close(),this.currentRequest=[e,n],this.currentRequestDialog=new d(iframe,!0),this.currentRequestDialog.onClose=()=>{n(l.a.UserCancelled())}})}redirectToCallbackURL(t){const e=`${this.webBaseUrl}/transactions/${t.id}?redirectURI=${this.callbackURL}`;return window.location.href=e,Promise.resolve("")}}var m=n(101);class k extends m.f{constructor(t,e){super(),this.authProvider=t,this.cachedValues=new Map,e&&e.on("signOut",()=>this.cachedValues.clear())}handleRequest(t,e,n){return!1===this.supportsCache(t.method)||t.skipCache?e():void this.checkCachedValues(t.method).then(t=>{void 0!==t?n(void 0,t):e()}).catch(()=>e())}supportsCache(t){return o.f.includes(t)}checkCachedValues(t){if(this.cachedValues.has(t))return Promise.resolve(this.cachedValues.get(t));switch(t){case"eth_accounts":return this.getAccounts();default:return Promise.reject(new Error("Method not supported"))}}getAccounts(){return this.authProvider.getUser().then(t=>{if(t.accounts)return this.cachedValues.set("eth_accounts",t.accounts),t.accounts;throw new Error("Accounts not found on user")})}}class w extends r.a{handleRequest(t,e,n){"eth_accounts"===t.method?this.handleAuthenticatedRequest(t,e,n):e()}}var v=n(786),y=n.n(v),T=n(1392),_=n.n(T),x=n(1393),S=n.n(x),E=n(1394),M=n.n(E),C=n(178),I=n.n(C),U=n(430),P=n.n(U);const R=["Gateway timeout","ETIMEDOUT","SyntaxError"],N=["eth_getBlockByNumber","eth_blockNumber","net_Version","eth_getLogs"];class A extends m.f{constructor(t){super(),this.rpcUrl=t.rpcUrl,this.defaultHeaders=t.defaultHeaders,this.originHttpHeaderKey=t.originHttpHeaderKey}handleRequest(t,e,n){N.includes(t.method)?this.handleRestRequest(t,n):e()}handleRestRequest(t,e){const n=t.origin,r=t.params.length>0?"?params="+encodeURIComponent(JSON.stringify(t.params)):"",o=`${this.rpcUrl}/${t.method}${r}`,c={method:"GET",headers:Object.assign({Accept:"application/json","Content-Type":"application/json"},this.defaultHeaders),credentials:"omit"};this.originHttpHeaderKey&&n&&(c.headers[this.originHttpHeaderKey]=n),_()({times:5,interval:1e3,errorFilter:O},t=>this._submitRequest(o,c,t),(t,n)=>{if(t&&O(t)){const n=`FetchSubprovider - cannot complete request. All retries exhausted.\nOriginal Error:\n${t.toString()}\n\n`,r=new Error(n);return e(r)}return e(t,n)})}_submitRequest(t,e,n){P()(M()(t,e))((t,e)=>{if(t)return n(t);S()([function(t){switch(e.status){case 405:return t(new I.a.MethodNotFound);case 418:return t(function(){const t=new Error("Request is being rate limited.");return new I.a.InternalError(t)}());case 503:case 504:return t(function(){let t="Gateway timeout. The request took too long to process. ";t+="This can happen when querying logs over too wide a block range.";const e=new Error("Gateway timeout. The request took too long to process. This can happen when querying logs over too wide a block range.");return new I.a.InternalError(e)}());default:return t()}},t=>P()(e.text())(t),y()(t=>JSON.parse(t)),function(body,t){if(200!==e.status)return t(new I.a.InternalError(body));t(null,body)}],n)})}}function O(t){const e=t.toString();return R.some(t=>e.includes(t))}var D,B=new Uint8Array(16);function H(){if(!D&&!(D="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return D(B)}var L=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var j=function(t){return"string"==typeof t&&L.test(t)},z=[],V=0;V<256;++V)z.push((V+256).toString(16).substr(1));var F=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(z[t[e+0]]+z[t[e+1]]+z[t[e+2]]+z[t[e+3]]+"-"+z[t[e+4]]+z[t[e+5]]+"-"+z[t[e+6]]+z[t[e+7]]+"-"+z[t[e+8]]+z[t[e+9]]+"-"+z[t[e+10]]+z[t[e+11]]+z[t[e+12]]+z[t[e+13]]+z[t[e+14]]+z[t[e+15]]).toLowerCase();if(!j(n))throw TypeError("Stringified UUID is invalid");return n};var G,J=function(t,e,n){var r=(t=t||{}).random||(t.rng||H)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=r[i];return e}return F(r)};!function(t){t.SendTransaction="ETH_SEND_TRANSACTION",t.SignTransaction="ETH_SIGN_TRANSACTION",t.Sign="ETH_SIGN",t.SignTypedData="ETH_SIGN_TYPED_DATA",t.SignTypedDataV3="ETH_SIGN_TYPED_DATA_V3",t.SignTypedDataV4="ETH_SIGN_TYPED_DATA_V4"}(G||(G={}));class $ extends m.f{constructor(t,e,n,r){super(),this.network=t,this.tokenProvider=n,this.signer=e,this.signatureMethods=r||o.h}handleRequest(t,e,n){this.requiresSignature(t.method)?this.handleSignatureRequest(t,n):e()}async handleSignatureRequest(t,e){try{const n=await this.tokenProvider.getAccessToken(),r=await this.createBitskiTransaction(t),o=await this.signer.sign(r,n);e(void 0,await this.sendIfNeeded(t,o))}catch(t){e(t,void 0)}}requiresSignature(t){return this.signatureMethods.includes(t)}sendIfNeeded(t,e){if("eth_sendTransaction"===t.method){const t={id:0,jsonrpc:"2.0",method:"eth_sendRawTransaction",params:[e]};return this.performRequest(t)}return Promise.resolve(e)}loadBalanceIfNeeded(t){const e="eth_sendTransaction"===t.method||"eth_signTransaction"===t.method,n=!this.network.rpcUrl.includes("api.bitski.com");if(e&&n){const e={id:0,jsonrpc:"2.0",method:"eth_getBalance",params:[t.params[0].from,"latest"]};return this.performRequest(e)}return Promise.resolve()}async createBitskiTransaction(t){const e=await this.createContext(t),n=this.kindForMethod(t.method),r=this.createPayload(t);return{id:J(),kind:n,payload:r,context:e}}async createContext(t){switch(t.method){case"eth_sendTransaction":case"eth_signTransaction":{const e=await this.loadBalanceIfNeeded(t);return{chainId:this.network.chainId,currentBalance:e}}case"eth_signTypedData":case"eth_signTypedData_v3":case"eth_signTypedData_v4":if(t.params&&t.params.length>0)return{from:t.params[0]};throw l.a.MissingFrom();default:return{}}}createPayload(t){switch(t.method){case"eth_sendTransaction":case"eth_signTransaction":if(t.params&&t.params.length>0)return t.params[0];throw l.a.MissingTransaction();case"eth_sign":if(t.params&&t.params.length>1)return{from:t.params[0],message:t.params[1]};throw l.a.MissingMessage();case"personal_sign":if(t.params&&t.params.length>1)return{from:t.params[1],message:t.params[0]};throw l.a.MissingMessage();case"eth_signTypedData":case"eth_signTypedData_v3":case"eth_signTypedData_v4":if(t.params&&t.params.length>1)return t.params[1];throw l.a.MissingTypedData();default:throw l.a.UnsupportedMethod()}}kindForMethod(t){switch(t){case"eth_sendTransaction":case"eth_signTransaction":return G.SignTransaction;case"eth_sign":case"personal_sign":return G.Sign;case"eth_signTypedData":return G.SignTypedData;case"eth_signTypedData_v3":return G.SignTypedDataV3;case"eth_signTypedData_v4":return G.SignTypedDataV4;default:throw l.a.UnsupportedMethod()}}performRequest(t){return new Promise((e,n)=>{this.emitPayload(t,(t,r)=>{t?n(t):e(r.result)})})}}class Y extends r.b{constructor(t,e,n,r,c={}){super(c),c=c||{},this.network=r,this.clientId=t,this.sdkVersion=n,this.apiBaseUrl=c.apiBaseUrl||o.c,this.webBaseUrl=c.webBaseUrl||o.e,this.tokenProvider=e;const d={"X-API-KEY":this.clientId,"X-CLIENT-ID":this.clientId,"X-CLIENT-VERSION":this.sdkVersion};this.headers=d,this.rpcHeaders={},c&&c.additionalHeaders&&(this.headers=Object.assign({},c.additionalHeaders,this.headers),this.rpcHeaders=c.additionalHeaders),this.network&&this.network.rpcUrl.includes("bitski.com")&&(this.rpcHeaders=Object.assign({},this.rpcHeaders,d)),this.signer=new f(this.webBaseUrl,this.apiBaseUrl,this.headers,c.callbackURL),this.addSubproviders()}addSubproviders(){const t=new w(o.b+"/mainnet",!1,this.tokenProvider,this.headers),e=new r.a(this.network.rpcUrl,!1,this.tokenProvider,this.rpcHeaders);if(void 0!==this.tokenProvider.getUser){const t=new k(this.tokenProvider,this);this.addProvider(t)}this.addProvider(t);const n=new $(this.network,this.signer,this.tokenProvider);if(this.addProvider(n),this.network.rpcUrl.startsWith("https://api.bitski.com")){const t=new A({rpcUrl:this.network.rpcUrl,defaultHeaders:this.headers});this.addProvider(t)}this.addProvider(e)}}},1448:function(t,e,n){"use strict";e.a="\n  \n#bitski-dialog-container {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0);\n  z-index: 1000;\n  transition: background linear 0.2s;\n  pointer-events: none;\n}\n#bitski-dialog-container.bitski-visible {\n  background: rgba(0, 0, 0, 0.5);\n  pointer-events: auto;\n}\n.bitski-dialog {\n  opacity: 0;\n  transform: translateY(100vh);\n  transition: opacity 300ms linear, transform 400ms cubic-bezier(0.19, 1, 0.22, 1);\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n#bitski-dialog-container.bitski-visible .bitski-dialog {\n  opacity: 1;\n  transform: none;\n  transition: opacity 300ms linear, transform 600ms cubic-bezier(0.19, 1, 0.22, 1);\n  pointer-events: auto;\n}\n.bitski-dialog .bitski-close-button {\n  background: transparent url('https://cdn.bitskistatic.com/sdk/close.svg') no-repeat 50% 50%;\n  position: absolute;\n  right: 12px;\n  top: 12px;\n  border: none;\n  outline: none;\n  margin: 0;\n  cursor: pointer;\n  padding: 0;\n  width: 28px;\n  height: 28px;\n  z-index: 100;\n  overflow: hidden;\n  text-indent: -1000px;\n}\n.bitski-dialog-body {\n  background: #fff;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 5;\n  max-width: 100%;\n}\n.bitski-dialog-body.bitski-loading::after {\n  content: \"\";\n  background: url('https://cdn.bitskistatic.com/sdk/loading.svg') no-repeat 50% 50%;\n  animation: rotate 600ms linear infinite;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  opacity: 0.3;\n  width: 38px;\n  height: 38px;\n  margin-left: -19px;\n  margin-top: -19px;\n  z-index: -1;\n}\n@media (min-width: 600px) {\n  #bitski-dialog-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .bitski-dialog {\n    position: relative;\n    width: 400px;\n    height: 420px;\n  }\n  .bitski-dialog-body {\n    border-radius: 16px;\n    overflow: hidden;\n    box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.1), 0px 10px 50px rgba(0,0,0,0.4);\n  }\n}\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n  \n.bitski-connect-button {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 'Helvetica Neue', sans-serif;\n  font-weight: 500;\n  background-color: #1C11D9;\n  background-repeat: no-repeat;\n  background-position: 0px 0px;\n  border: none;\n  color: #fff;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  text-shadow: 1px 0 1px rgba(0, 0, 0, 0.03);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.14);\n  transition: background 200ms linear, transform 200ms ease-out;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.bitski-connect-button:focus,\n.bitski-connect-button:active {\n  background-color: #2117C7;\n  transform: scale(0.99, 0.99);\n  color: rgba(255, 255, 255, 0.8);\n}\n.bitski-connect-button.size-small {\n  background-image: url('https://cdn.bitskistatic.com/sdk/btn-v2-bg-sm.svg');\n  border-radius: 3px;\n  font-size: 10px;\n  height: 22px;\n  line-height: 19px;\n  padding-left: 30px;\n  padding-right: 8px;\n}\n.bitski-connect-button.size-medium {\n  background-image: url('https://cdn.bitskistatic.com/sdk/btn-v2-bg-md.svg');\n  border-radius: 4px;\n  font-size: 11px;\n  height: 30px;\n  line-height: 29px;\n  padding-left: 40px;\n  padding-right: 12px;\n}\n.bitski-connect-button.size-large {\n  background-image: url('https://cdn.bitskistatic.com/sdk/btn-v2-bg-lg.svg');\n  border-radius: 5px;\n  font-size: 14px;\n  height: 44px;\n  line-height: 44px;\n  padding-left: 57px;\n  padding-right: 15px;\n}\n\n"},174:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return o})),function(t){t[t.UnsupportedMethod=3e3]="UnsupportedMethod",t[t.UserCancelled=3001]="UserCancelled",t[t.MissingTransaction=3002]="MissingTransaction",t[t.MissingMessage=3003]="MissingMessage",t[t.MissingFrom=3004]="MissingFrom",t[t.MissingTypedData=3005]="MissingTypedData"}(r||(r={}));class o extends Error{constructor(t,code){super(t),this.name="TransactionError",Error.captureStackTrace&&Error.captureStackTrace(this,o),this.code=code}static UnsupportedMethod(){return new o("The method requested is not currently supported.",r.UnsupportedMethod)}static UserCancelled(){return new o("The user cancelled this transaction",r.UserCancelled)}static MissingTransaction(){return new o("Could not find transaction in request",r.MissingTransaction)}static MissingMessage(){return new o("Could not find message params in request",r.MissingMessage)}static MissingFrom(){return new o("Could not find from address in request params.",r.MissingFrom)}static MissingTypedData(){return new o("Could not find data to sign in request params.",r.MissingTypedData)}}},2693:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(...e){var n=e.pop();return t.call(this,e,n)}},t.exports=e.default},2694:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.fallback=l,e.wrap=h;var r,o=e.hasQueueMicrotask="function"==typeof queueMicrotask&&queueMicrotask,c=e.hasSetImmediate="function"==typeof t&&t,d=e.hasNextTick="object"==typeof n&&"function"==typeof n.nextTick;function l(t){setTimeout(t,0)}function h(t){return(e,...n)=>t(()=>e(...n))}r=o?queueMicrotask:c?t:d?n.nextTick:l,e.default=h(r)}).call(this,n(306).setImmediate,n(30))},2695:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=Symbol("promiseCallback");e.promiseCallback=function(){let t,e;function n(n,...r){if(n)return e(n);t(r.length>1?r:r[0])}return n[r]=new Promise((n,r)=>{t=n,e=r}),n},e.PROMISE_SYMBOL=r},2696:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){function e(...e){if(null!==t){var n=t;t=null,n.apply(this,e)}}return Object.assign(e,t),e},t.exports=e.default},2697:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(...e){if(null===t)throw new Error("Callback was already called.");var n=t;t=null,n.apply(this,e)}},t.exports=e.default},2698:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e=t.length){if(!e)throw new Error("arity is undefined");return function(...n){return"function"==typeof n[e-1]?t.apply(this,n):new Promise((r,o)=>{n[e-1]=(t,...e)=>{if(t)return o(t);r(e.length>1?e:e[0])},t.apply(this,n)})}},t.exports=e.default},412:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return o})),function(t){t[t.InvalidJSON=2e3]="InvalidJSON",t[t.NoErrorBody=2001]="NoErrorBody"}(r||(r={}));class o extends Error{constructor(t,code){super(t),this.name="ParseError",Error.captureStackTrace&&Error.captureStackTrace(this,o),this.code=code}static InvalidJSON(){return new o("Could not decode response as JSON",r.InvalidJSON)}static UnknownError(){return new o("An unknown error occurred.",r.NoErrorBody)}}},413:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{constructor(t=localStorage){this.storage=t}clear(){this.storage.clear()}getItem(t){return this.storage.getItem(t)}setItem(t,e){this.storage.setItem(t,e)}clearItem(t){this.storage.removeItem(t)}}},501:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(108),o=n(412);function c(t){return t.json().catch(()=>{throw o.a.InvalidJSON()}).then(e=>{if(t.status>=200&&t.status<300)return e;throw e&&e.error&&e.error.message?new r.g(e.error.message,t.status,t.url):e&&e.error?new r.g(e.error,t.status,t.url):o.a.UnknownError()})}},639:function(t,e,n){"use strict";function r(){if(!window.opener)throw new Error("Parent window could not be found");!function(t){if(!window.opener)throw new Error("No window.opener");if(t){const data=o(t);if(!data.state)throw new Error("No state found in response");{const e="popupCallback_"+data.state,n=window.opener[e];if(!n)throw new Error("No callback found on opener");n(t)}}}(window.location)}function o(t){let e;if(t.href.includes("#")?e=function(t){if(!t.includes("#"))throw new Error("No params found in result");return t.split("#").pop()}(t.hash):t.href.includes("?")&&(e=t.search.split("?").pop()),!e)throw new Error("No params found in result");return e.split("&").reduce((t,e)=>{const[n,r]=e.split("=");return n&&r&&(t[decodeURIComponent(n)]=decodeURIComponent(r)),t},{})}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}))},762:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isAsyncIterable=e.isAsyncGenerator=e.isAsync=void 0;var r,o=n(786),c=(r=o)&&r.__esModule?r:{default:r};function d(t){return"AsyncFunction"===t[Symbol.toStringTag]}e.default=function(t){if("function"!=typeof t)throw new Error("expected a function");return d(t)?(0,c.default)(t):t},e.isAsync=d,e.isAsyncGenerator=function(t){return"AsyncGenerator"===t[Symbol.toStringTag]},e.isAsyncIterable=function(t){return"function"==typeof t[Symbol.asyncIterator]}},785:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r,o=n(503),c=n(109);!function(t){t.Small="SMALL",t.Medium="MEDIUM",t.Large="LARGE"}(r||(r={}));class d{constructor(t,e,n){e=e||{},this.authProvider=t,this.size=e.size||r.Medium,this.authIntegrationType=e.authMethod||o.c.Popup,this.callback=n,this.signInOptions=e.signInOptions||{},this.element=document.createElement("button"),this.configureElement(),this.element.addEventListener("click",this.signin.bind(this)),e.container&&e.container.appendChild(this.element)}remove(){this.element.parentNode&&this.element.parentNode.removeChild(this.element)}signin(){this.authProvider.signInOrConnect(this.authIntegrationType,this.signInOptions).then(t=>{this.callback&&this.callback(void 0,t)}).catch(t=>{t instanceof c.a&&t.code===c.b.UserCancelled?this.onCancel&&this.onCancel():this.callback&&this.callback(t,void 0)})}configureElement(){this.element.title="Continue with Bitski",this.element.innerText="Continue with Bitski",this.element.className="bitski-connect-button";let t="";switch(this.size){case r.Small:t="size-small";break;case r.Medium:t="size-medium";break;case r.Large:t="size-large"}this.element.classList.add(t)}}},786:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if((0,c.isAsync)(t))return function(...e){const n=e.pop();return l(t.apply(this,e),n)};return(0,r.default)((function(e,n){var r;try{r=t.apply(this,e)}catch(t){return n(t)}if(r&&"function"==typeof r.then)return l(r,n);n(null,r)}))};var r=d(n(2693)),o=d(n(2694)),c=n(762);function d(t){return t&&t.__esModule?t:{default:t}}function l(t,e){return t.then(t=>{h(e,null,t)},t=>{h(e,t&&t.message?t:new Error(t))})}function h(t,e,n){try{t(e,n)}catch(t){(0,o.default)(t=>{throw t},t)}}t.exports=e.default},79:function(t,e,n){"use strict";n.d(e,"p",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"e",(function(){return l})),n.d(e,"n",(function(){return h})),n.d(e,"i",(function(){return f})),n.d(e,"l",(function(){return m})),n.d(e,"j",(function(){return k})),n.d(e,"g",(function(){return w})),n.d(e,"k",(function(){return v})),n.d(e,"o",(function(){return y})),n.d(e,"a",(function(){return T})),n.d(e,"m",(function(){return _})),n.d(e,"q",(function(){return x})),n.d(e,"f",(function(){return S})),n.d(e,"h",(function(){return E}));const r="0.14.0",o="https://www.bitski.com/v1",c="https://api.bitski.com/v1",d="https://api.bitski.com/v1/web3",l="https://sign.bitski.com",h=".bitski.com",f={authorization_endpoint:"https://account.bitski.com/oauth2/auth",revocation_endpoint:"",token_endpoint:"https://account.bitski.com/oauth2/token",userinfo_endpoint:"https://account.bitski.com/userinfo"},m=["openid"],k=["offline"],w=500,v={location:"no",toolbar:"no",width:500,height:500,left:100,top:100},y="bitski.refresh_token",T="bitski.access_token",_="bitski.id_token",x="bitski.user",S=["eth_accounts"],E=["eth_sendTransaction","eth_signTransaction","eth_sign","personal_sign","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4"]},817:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(94);class o extends r.BasicQueryStringUtils{parse(input,t){return super.parse(input,!1)}}}}]);