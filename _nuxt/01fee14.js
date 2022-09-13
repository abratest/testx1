(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{1160:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WalletSDKRelayAbstract=t.APP_VERSION_KEY=t.LOCAL_STORAGE_ADDRESSES_KEY=t.WALLET_USER_NAME_KEY=void 0;const r=n(726);t.WALLET_USER_NAME_KEY="walletUsername",t.LOCAL_STORAGE_ADDRESSES_KEY="Addresses",t.APP_VERSION_KEY="AppVersion";t.WalletSDKRelayAbstract=class{async makeEthereumJSONRPCRequest(e,t){if(!t)throw new Error("Error: No jsonRpcUrl provided");return window.fetch(t,{method:"POST",body:JSON.stringify(e),mode:"cors",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{if(!e)throw r.ethErrors.rpc.parse({});const t=e,{error:n}=t;if(n)throw(0,r.serializeError)(n);return t})}}},1172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Web3Method=void 0,function(e){e.requestEthereumAccounts="requestEthereumAccounts",e.signEthereumMessage="signEthereumMessage",e.signEthereumTransaction="signEthereumTransaction",e.submitEthereumTransaction="submitEthereumTransaction",e.ethereumAddressFromSignedMessage="ethereumAddressFromSignedMessage",e.scanQRCode="scanQRCode",e.generic="generic",e.childRequestEthereumAccounts="childRequestEthereumAccounts",e.addEthereumChain="addEthereumChain",e.switchEthereumChain="switchEthereumChain",e.makeEthereumJSONRPCRequest="makeEthereumJSONRPCRequest",e.watchAsset="watchAsset"}(t.Web3Method||(t.Web3Method={}))},2114:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__decorate||function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},d=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},h=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WalletSDKRelay=void 0;const l=h(n(2115)),m=n(726),E=n(376),S=n(467),R=n(729),f=n(2116),v=n(315),y=d(n(2120)),M=n(730),A=n(1160),_=n(1172),I=n(2121),W=n(2122),C=n(2123),w=n(2124);class N extends A.WalletSDKRelayAbstract{constructor(e){super(),this.accountsCallback=null,this.chainCallback=null,this.appName="",this.appLogoUrl=null,this.subscriptions=new E.Subscription,this.linkAPIUrl=e.linkAPIUrl,this.storage=e.storage,this._session=M.Session.load(e.storage)||new M.Session(e.storage).save(),this.relayEventManager=e.relayEventManager,this.eventListener=e.eventListener,this.connection=new f.WalletSDKConnection(this._session.id,this._session.key,this.linkAPIUrl,this.eventListener),this.subscriptions.add(this.connection.incomingEvent$.pipe((0,S.filter)(e=>"Web3Response"===e.event)).subscribe({next:this.handleIncomingEvent})),this.subscriptions.add(this.connection.linked$.pipe((0,S.skip)(1),(0,S.tap)(e=>{var t;this.isLinked=e;const n=this.storage.getItem(A.LOCAL_STORAGE_ADDRESSES_KEY);if(e&&(this.session.linked=e),this.isUnlinkedErrorState=!1,n){const r=n.split(" "),o="true"===this.storage.getItem("IsStandaloneSigning");if(""!==r[0]&&!e&&this.session.linked&&!o){this.isUnlinkedErrorState=!0;const e=this.getSessionIdHash();null===(t=this.eventListener)||void 0===t||t.onEvent(R.EVENTS.UNLINKED_ERROR_STATE,{sessionIdHash:e,origin:location.origin})}}})).subscribe()),this.subscriptions.add(this.connection.sessionConfig$.pipe((0,S.filter)(e=>!!e.metadata&&"1"===e.metadata.__destroyed)).subscribe(()=>{var e;const t=this.connection.isDestroyed;return null===(e=this.eventListener)||void 0===e||e.onEvent(R.EVENTS.METADATA_DESTROYED,{alreadyDestroyed:t,sessionIdHash:this.getSessionIdHash(),origin:location.origin}),this.resetAndReload()})),this.subscriptions.add(this.connection.sessionConfig$.pipe((0,S.filter)(e=>e.metadata&&void 0!==e.metadata.WalletUsername)).pipe((0,S.mergeMap)(e=>y.decrypt(e.metadata.WalletUsername,this._session.secret))).subscribe({next:e=>{this.storage.setItem(A.WALLET_USER_NAME_KEY,e)},error:()=>{var e;null===(e=this.eventListener)||void 0===e||e.onEvent(R.EVENTS.GENERAL_ERROR,{message:"Had error decrypting",value:"username"})}})),this.subscriptions.add(this.connection.sessionConfig$.pipe((0,S.filter)(e=>e.metadata&&void 0!==e.metadata.AppVersion)).pipe((0,S.mergeMap)(e=>y.decrypt(e.metadata.AppVersion,this._session.secret))).subscribe({next:e=>{this.storage.setItem(A.APP_VERSION_KEY,e)},error:()=>{var e;null===(e=this.eventListener)||void 0===e||e.onEvent(R.EVENTS.GENERAL_ERROR,{message:"Had error decrypting",value:"appversion"})}})),this.subscriptions.add(this.connection.sessionConfig$.pipe((0,S.filter)(e=>e.metadata&&void 0!==e.metadata.ChainId&&void 0!==e.metadata.JsonRpcUrl)).pipe((0,S.mergeMap)(e=>(0,E.zip)(y.decrypt(e.metadata.ChainId,this._session.secret),y.decrypt(e.metadata.JsonRpcUrl,this._session.secret)))).pipe((0,S.distinctUntilChanged)()).subscribe({next:([e,t])=>{this.chainCallback&&this.chainCallback(e,t)},error:()=>{var e;null===(e=this.eventListener)||void 0===e||e.onEvent(R.EVENTS.GENERAL_ERROR,{message:"Had error decrypting",value:"chainId|jsonRpcUrl"})}})),this.subscriptions.add(this.connection.sessionConfig$.pipe((0,S.filter)(e=>e.metadata&&void 0!==e.metadata.EthereumAddress)).pipe((0,S.mergeMap)(e=>y.decrypt(e.metadata.EthereumAddress,this._session.secret))).subscribe({next:e=>{this.accountsCallback&&this.accountsCallback([e]),N.accountRequestCallbackIds.size>0&&(Array.from(N.accountRequestCallbackIds.values()).forEach(t=>{const n=(0,w.Web3ResponseMessage)({id:t,response:(0,C.RequestEthereumAccountsResponse)([e])});this.invokeCallback(Object.assign(Object.assign({},n),{id:t}))}),N.accountRequestCallbackIds.clear())},error:()=>{var e;null===(e=this.eventListener)||void 0===e||e.onEvent(R.EVENTS.GENERAL_ERROR,{message:"Had error decrypting",value:"selectedAddress"})}})),this.ui=e.uiConstructor({linkAPIUrl:e.linkAPIUrl,version:e.version,darkMode:e.darkMode,session:this._session,connected$:this.connection.connected$}),this.connection.connect()}attachUI(){this.ui.attach()}resetAndReload(){this.connection.setSessionMetadata("__destroyed","1").pipe((0,S.timeout)(1e3),(0,S.catchError)(e=>(0,E.of)(null))).subscribe(e=>{var t,n,r;try{this.subscriptions.unsubscribe()}catch(e){null===(t=this.eventListener)||void 0===t||t.onEvent(R.EVENTS.GENERAL_ERROR,{message:"Had error unsubscribing"})}null===(n=this.eventListener)||void 0===n||n.onEvent(R.EVENTS.SESSION_STATE_CHANGE,{method:"relay::resetAndReload",sessionMetadataChange:"__destroyed, 1",sessionIdHash:this.getSessionIdHash(),origin:location.origin}),this.connection.destroy();const o=M.Session.load(this.storage);(null==o?void 0:o.id)===this._session.id?this.storage.clear():o&&(null===(r=this.eventListener)||void 0===r||r.onEvent(R.EVENTS.SKIPPED_CLEARING_SESSION,{sessionIdHash:this.getSessionIdHash(),storedSessionIdHash:M.Session.hash(o.id),origin:location.origin})),this.ui.reloadUI()},e=>{var t;null===(t=this.eventListener)||void 0===t||t.onEvent(R.EVENTS.FAILURE,{method:"relay::resetAndReload",message:"failed to reset and reload with "+e,sessionIdHash:this.getSessionIdHash()})})}setAppInfo(e,t){this.appName=e,this.appLogoUrl=t}getStorageItem(e){return this.storage.getItem(e)}get session(){return this._session}setStorageItem(e,t){this.storage.setItem(e,t)}signEthereumMessage(e,address,t,n){return this.sendRequest({method:_.Web3Method.signEthereumMessage,params:{message:(0,v.hexStringFromBuffer)(e,!0),address:address,addPrefix:t,typedDataJson:n||null}})}ethereumAddressFromSignedMessage(e,t,n){return this.sendRequest({method:_.Web3Method.ethereumAddressFromSignedMessage,params:{message:(0,v.hexStringFromBuffer)(e,!0),signature:(0,v.hexStringFromBuffer)(t,!0),addPrefix:n}})}signEthereumTransaction(e){return this.sendRequest({method:_.Web3Method.signEthereumTransaction,params:{fromAddress:e.fromAddress,toAddress:e.toAddress,weiValue:(0,v.bigIntStringFromBN)(e.weiValue),data:(0,v.hexStringFromBuffer)(e.data,!0),nonce:e.nonce,gasPriceInWei:e.gasPriceInWei?(0,v.bigIntStringFromBN)(e.gasPriceInWei):null,maxFeePerGas:e.gasPriceInWei?(0,v.bigIntStringFromBN)(e.gasPriceInWei):null,maxPriorityFeePerGas:e.gasPriceInWei?(0,v.bigIntStringFromBN)(e.gasPriceInWei):null,gasLimit:e.gasLimit?(0,v.bigIntStringFromBN)(e.gasLimit):null,chainId:e.chainId,shouldSubmit:!1}})}signAndSubmitEthereumTransaction(e){return this.sendRequest({method:_.Web3Method.signEthereumTransaction,params:{fromAddress:e.fromAddress,toAddress:e.toAddress,weiValue:(0,v.bigIntStringFromBN)(e.weiValue),data:(0,v.hexStringFromBuffer)(e.data,!0),nonce:e.nonce,gasPriceInWei:e.gasPriceInWei?(0,v.bigIntStringFromBN)(e.gasPriceInWei):null,maxFeePerGas:e.maxFeePerGas?(0,v.bigIntStringFromBN)(e.maxFeePerGas):null,maxPriorityFeePerGas:e.maxPriorityFeePerGas?(0,v.bigIntStringFromBN)(e.maxPriorityFeePerGas):null,gasLimit:e.gasLimit?(0,v.bigIntStringFromBN)(e.gasLimit):null,chainId:e.chainId,shouldSubmit:!0}})}submitEthereumTransaction(e,t){return this.sendRequest({method:_.Web3Method.submitEthereumTransaction,params:{signedTransaction:(0,v.hexStringFromBuffer)(e,!0),chainId:t}})}scanQRCode(e){return this.sendRequest({method:_.Web3Method.scanQRCode,params:{regExp:e}})}genericRequest(data,e){return this.sendRequest({method:_.Web3Method.generic,params:{action:e,data:data}})}sendGenericMessage(e){return this.sendRequest(e)}sendRequest(e){let t=null;const n=(0,v.randomBytesHex)(8),r=()=>{this.publishWeb3RequestCanceledEvent(n),this.handleWeb3ResponseMessage((0,w.Web3ResponseMessage)({id:n,response:(0,C.ErrorResponse)(e.method,"User rejected request")})),null==t||t()};return{promise:new Promise((o,c)=>{this.ui.isStandalone()||(t=this.ui.showConnecting({isUnlinkedErrorState:this.isUnlinkedErrorState,onCancel:r,onResetConnection:this.resetAndReload})),this.relayEventManager.callbacks.set(n,e=>{if(null==t||t(),e.errorMessage)return c(new Error(e.errorMessage));o(e)}),this.ui.isStandalone()?this.sendRequestStandalone(n,e):this.publishWeb3RequestEvent(n,e)}),cancel:r}}setConnectDisabled(e){this.ui.setConnectDisabled(e)}setAccountsCallback(e){this.accountsCallback=e}setChainCallback(e){this.chainCallback=e}publishWeb3RequestEvent(e,t){var n;const r=(0,W.Web3RequestMessage)({id:e,request:t}),o=M.Session.load(this.storage);null===(n=this.eventListener)||void 0===n||n.onEvent(R.EVENTS.WEB3_REQUEST,{eventId:r.id,method:"relay::"+r.request.method,sessionIdHash:this.getSessionIdHash(),storedSessionIdHash:o?M.Session.hash(o.id):"",isSessionMismatched:((null==o?void 0:o.id)!==this._session.id).toString(),origin:location.origin}),this.subscriptions.add(this.publishEvent("Web3Request",r,!0).subscribe({next:e=>{var t;null===(t=this.eventListener)||void 0===t||t.onEvent(R.EVENTS.WEB3_REQUEST_PUBLISHED,{eventId:r.id,method:"relay::"+r.request.method,sessionIdHash:this.getSessionIdHash(),storedSessionIdHash:o?M.Session.hash(o.id):"",isSessionMismatched:((null==o?void 0:o.id)!==this._session.id).toString(),origin:location.origin})},error:e=>{this.handleWeb3ResponseMessage((0,w.Web3ResponseMessage)({id:r.id,response:{method:r.request.method,errorMessage:e.message}}))}}))}publishWeb3RequestCanceledEvent(e){const t=(0,I.Web3RequestCanceledMessage)(e);this.subscriptions.add(this.publishEvent("Web3RequestCanceled",t,!1).subscribe())}publishEvent(e,t,n){const r=this.session.secret;return new E.Observable(e=>{y.encrypt(JSON.stringify(Object.assign(Object.assign({},t),{origin:location.origin})),r).then(t=>{e.next(t),e.complete()})}).pipe((0,S.mergeMap)(t=>this.connection.publishEvent(e,t,n)))}handleIncomingEvent(e){try{this.subscriptions.add(y.decrypt(e.data,this.session.secret).pipe((0,S.map)(e=>JSON.parse(e))).subscribe({next:e=>{const t=(0,w.isWeb3ResponseMessage)(e)?e:null;t&&this.handleWeb3ResponseMessage(t)},error:()=>{var e;null===(e=this.eventListener)||void 0===e||e.onEvent(R.EVENTS.GENERAL_ERROR,{message:"Had error decrypting",value:"incomingEvent"})}}))}catch(e){return}}handleWeb3ResponseMessage(e){var t;const{response:n}=e;if(null===(t=this.eventListener)||void 0===t||t.onEvent(R.EVENTS.WEB3_RESPONSE,{eventId:e.id,method:"relay::"+n.method,sessionIdHash:this.getSessionIdHash(),origin:location.origin}),(0,C.isRequestEthereumAccountsResponse)(n))return N.accountRequestCallbackIds.forEach(t=>this.invokeCallback(Object.assign(Object.assign({},e),{id:t}))),void N.accountRequestCallbackIds.clear();this.invokeCallback(e)}invokeCallback(e){const t=this.relayEventManager.callbacks.get(e.id);t&&(t(e.response),this.relayEventManager.callbacks.delete(e.id))}requestEthereumAccounts(){const e={method:_.Web3Method.requestEthereumAccounts,params:{appName:this.appName,appLogoUrl:this.appLogoUrl||null}},t=(0,v.randomBytesHex)(8),n=()=>{this.publishWeb3RequestCanceledEvent(t),this.handleWeb3ResponseMessage((0,w.Web3ResponseMessage)({id:t,response:(0,C.ErrorResponse)(e.method,"User rejected request")}))};return{promise:new Promise((r,o)=>{var c;this.relayEventManager.callbacks.set(t,e=>{if(this.ui.hideRequestEthereumAccounts(),e.errorMessage)return o(new Error(e.errorMessage));r(e)});const d=(null===(c=null===window||void 0===window?void 0:window.navigator)||void 0===c?void 0:c.userAgent)||null;if(d&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(d))window.location.href="https://go.cb-w.com/xoXnYwQimhb?cb_url="+encodeURIComponent(window.location.href);else{if(this.ui.inlineAccountsResponse()){const e=e=>{this.handleWeb3ResponseMessage((0,w.Web3ResponseMessage)({id:t,response:(0,C.RequestEthereumAccountsResponse)(e)}))};this.ui.requestEthereumAccounts({onCancel:n,onAccounts:e})}else this.ui.requestEthereumAccounts({onCancel:n});N.accountRequestCallbackIds.add(t),this.ui.inlineAccountsResponse()||this.ui.isStandalone()||this.publishWeb3RequestEvent(t,e)}}),cancel:n}}watchAsset(e,address,symbol,t,image){const n={method:_.Web3Method.watchAsset,params:{type:e,options:{address:address,symbol:symbol,decimals:t,image:image}}};let r=null;const o=(0,v.randomBytesHex)(8),c=()=>{this.publishWeb3RequestCanceledEvent(o),this.handleWeb3ResponseMessage((0,w.Web3ResponseMessage)({id:o,response:(0,C.ErrorResponse)(n.method,"User rejected request")})),null==r||r()};this.ui.inlineWatchAsset()||(r=this.ui.showConnecting({isUnlinkedErrorState:this.isUnlinkedErrorState,onCancel:c,onResetConnection:this.resetAndReload}));return{cancel:c,promise:new Promise((c,d)=>{this.relayEventManager.callbacks.set(o,e=>{if(null==r||r(),e.errorMessage)return d(new Error(e.errorMessage));c(e)});const h=()=>{this.handleWeb3ResponseMessage((0,w.Web3ResponseMessage)({id:o,response:(0,C.WatchAssetReponse)(!1)}))},l=()=>{this.handleWeb3ResponseMessage((0,w.Web3ResponseMessage)({id:o,response:(0,C.WatchAssetReponse)(!0)}))};this.ui.inlineWatchAsset()&&this.ui.watchAsset({onApprove:l,onCancel:h,type:e,address:address,symbol:symbol,decimals:t,image:image}),this.ui.inlineWatchAsset()||this.ui.isStandalone()||this.publishWeb3RequestEvent(o,n)})}}addEthereumChain(e,t,n,r,o,c){const d={method:_.Web3Method.addEthereumChain,params:{chainId:e,rpcUrls:t,blockExplorerUrls:r,chainName:o,iconUrls:n,nativeCurrency:c}};let h=null;const l=(0,v.randomBytesHex)(8),m=()=>{this.publishWeb3RequestCanceledEvent(l),this.handleWeb3ResponseMessage((0,w.Web3ResponseMessage)({id:l,response:(0,C.ErrorResponse)(d.method,"User rejected request")})),null==h||h()};this.ui.inlineAddEthereumChain(e)||(h=this.ui.showConnecting({isUnlinkedErrorState:this.isUnlinkedErrorState,onCancel:m,onResetConnection:this.resetAndReload}));return{promise:new Promise((t,n)=>{this.relayEventManager.callbacks.set(l,e=>{if(null==h||h(),e.errorMessage)return n(new Error(e.errorMessage));t(e)});const r=()=>{this.handleWeb3ResponseMessage((0,w.Web3ResponseMessage)({id:l,response:(0,C.AddEthereumChainResponse)({isApproved:!1,rpcUrl:""})}))},o=e=>{this.handleWeb3ResponseMessage((0,w.Web3ResponseMessage)({id:l,response:(0,C.AddEthereumChainResponse)({isApproved:!0,rpcUrl:e})}))};this.ui.inlineAddEthereumChain(e)&&this.ui.addEthereumChain({onCancel:r,onApprove:o,chainId:d.params.chainId,rpcUrls:d.params.rpcUrls,blockExplorerUrls:d.params.blockExplorerUrls,chainName:d.params.chainName,iconUrls:d.params.iconUrls,nativeCurrency:d.params.nativeCurrency}),this.ui.inlineAddEthereumChain(e)||this.ui.isStandalone()||this.publishWeb3RequestEvent(l,d)}),cancel:m}}switchEthereumChain(e){const t={method:_.Web3Method.switchEthereumChain,params:{chainId:e}};let n=null;const r=(0,v.randomBytesHex)(8),o=()=>{this.publishWeb3RequestCanceledEvent(r),this.handleWeb3ResponseMessage((0,w.Web3ResponseMessage)({id:r,response:(0,C.ErrorResponse)(t.method,"User rejected request")})),null==n||n()};this.ui.inlineSwitchEthereumChain()||(n=this.ui.showConnecting({isUnlinkedErrorState:this.isUnlinkedErrorState,onCancel:o,onResetConnection:this.resetAndReload}));return{promise:new Promise((e,o)=>{this.relayEventManager.callbacks.set(r,t=>(null==n||n(),t.errorMessage&&t.errorCode?o(m.ethErrors.provider.custom({code:t.errorCode,message:"Unrecognized chain ID. Try adding the chain using addEthereumChain first."})):t.errorMessage?o(new Error(t.errorMessage)):void e(t)));this.ui.switchEthereumChain({onCancel:e=>{e?this.handleWeb3ResponseMessage((0,w.Web3ResponseMessage)({id:r,response:(0,C.ErrorResponse)(_.Web3Method.switchEthereumChain,"unsupported chainId",e)})):this.handleWeb3ResponseMessage((0,w.Web3ResponseMessage)({id:r,response:(0,C.SwitchEthereumChainResponse)({isApproved:!1,rpcUrl:""})}))},onApprove:e=>{this.handleWeb3ResponseMessage((0,w.Web3ResponseMessage)({id:r,response:(0,C.SwitchEthereumChainResponse)({isApproved:!0,rpcUrl:e})}))},chainId:t.params.chainId}),this.ui.inlineSwitchEthereumChain()||this.ui.isStandalone()||this.publishWeb3RequestEvent(r,t)}),cancel:o}}inlineAddEthereumChain(e){return this.ui.inlineAddEthereumChain(e)}getSessionIdHash(){return M.Session.hash(this._session.id)}sendRequestStandalone(e,t){const n=()=>{this.handleWeb3ResponseMessage((0,w.Web3ResponseMessage)({id:e,response:(0,C.ErrorResponse)(t.method,"User rejected request")}))},r=t=>{this.handleWeb3ResponseMessage((0,w.Web3ResponseMessage)({id:e,response:t}))};switch(t.method){case _.Web3Method.signEthereumMessage:this.ui.signEthereumMessage({request:t,onSuccess:r,onCancel:n});break;case _.Web3Method.signEthereumTransaction:this.ui.signEthereumTransaction({request:t,onSuccess:r,onCancel:n});break;case _.Web3Method.submitEthereumTransaction:this.ui.submitEthereumTransaction({request:t,onSuccess:r,onCancel:n});break;case _.Web3Method.ethereumAddressFromSignedMessage:this.ui.ethereumAddressFromSignedMessage({request:t,onSuccess:r});break;default:n()}}}N.accountRequestCallbackIds=new Set,c([l.default],N.prototype,"resetAndReload",null),c([l.default],N.prototype,"handleIncomingEvent",null),t.WalletSDKRelay=N},2120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decrypt=t.encrypt=void 0;const r=n(376),o=n(315);t.encrypt=async function(e,t){if(64!==t.length)throw Error("secret must be 256 bits");const n=crypto.getRandomValues(new Uint8Array(12)),r=await crypto.subtle.importKey("raw",(0,o.hexStringToUint8Array)(t),{name:"aes-gcm"},!1,["encrypt","decrypt"]),c=new TextEncoder,d=await window.crypto.subtle.encrypt({name:"AES-GCM",iv:n},r,c.encode(e)),h=d.slice(d.byteLength-16),l=d.slice(0,d.byteLength-16),m=new Uint8Array(h),E=new Uint8Array(l),S=new Uint8Array([...n,...m,...E]);return(0,o.uint8ArrayToHex)(S)},t.decrypt=function(e,t){if(64!==t.length)throw Error("secret must be 256 bits");return new r.Observable(n=>{!async function(){const r=await crypto.subtle.importKey("raw",(0,o.hexStringToUint8Array)(t),{name:"aes-gcm"},!1,["encrypt","decrypt"]),c=(0,o.hexStringToUint8Array)(e),d=c.slice(0,12),h=c.slice(12,28),l=c.slice(28),m=new Uint8Array([...l,...h]),E={name:"AES-GCM",iv:new Uint8Array(d)};try{const e=await window.crypto.subtle.decrypt(E,r,m),t=new TextDecoder;n.next(t.decode(e)),n.complete()}catch(e){n.error(e)}}()})}},2121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Web3RequestCanceledMessage=void 0;const r=n(735);t.Web3RequestCanceledMessage=function(e){return{type:r.RelayMessageType.WEB3_REQUEST_CANCELED,id:e}}},2122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Web3RequestMessage=void 0;const r=n(735);t.Web3RequestMessage=function(e){return Object.assign({type:r.RelayMessageType.WEB3_REQUEST},e)}},2123:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EthereumAddressFromSignedMessageResponse=t.SubmitEthereumTransactionResponse=t.SignEthereumTransactionResponse=t.SignEthereumMessageResponse=t.isRequestEthereumAccountsResponse=t.WatchAssetReponse=t.RequestEthereumAccountsResponse=t.SwitchEthereumChainResponse=t.AddEthereumChainResponse=t.ErrorResponse=void 0;const r=n(1172);t.ErrorResponse=function(e,t,n){return{method:e,errorMessage:t,errorCode:n}},t.AddEthereumChainResponse=function(e){return{method:r.Web3Method.addEthereumChain,result:e}},t.SwitchEthereumChainResponse=function(e){return{method:r.Web3Method.switchEthereumChain,result:e}},t.RequestEthereumAccountsResponse=function(e){return{method:r.Web3Method.requestEthereumAccounts,result:e}},t.WatchAssetReponse=function(e){return{method:r.Web3Method.watchAsset,result:e}},t.isRequestEthereumAccountsResponse=function(e){return e&&e.method===r.Web3Method.requestEthereumAccounts},t.SignEthereumMessageResponse=function(e){return{method:r.Web3Method.signEthereumMessage,result:e}},t.SignEthereumTransactionResponse=function(e){return{method:r.Web3Method.signEthereumTransaction,result:e}},t.SubmitEthereumTransactionResponse=function(e){return{method:r.Web3Method.submitEthereumTransaction,result:e}},t.EthereumAddressFromSignedMessageResponse=function(address){return{method:r.Web3Method.ethereumAddressFromSignedMessage,result:address}}},2124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isWeb3ResponseMessage=t.Web3ResponseMessage=void 0;const r=n(735);t.Web3ResponseMessage=function(e){return Object.assign({type:r.RelayMessageType.WEB3_RESPONSE},e)},t.isWeb3ResponseMessage=function(e){return e&&e.type===r.RelayMessageType.WEB3_RESPONSE}},2125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WalletSDKRelayEventManager=void 0;const r=n(315);t.WalletSDKRelayEventManager=class{constructor(){this._nextRequestId=0,this.callbacks=new Map}makeRequestId(){this._nextRequestId=(this._nextRequestId+1)%2147483647;const e=this._nextRequestId,t=(0,r.prepend0x)(e.toString(16));return this.callbacks.get(t)&&this.callbacks.delete(t),e}}},315:function(e,t,n){"use strict";(function(e){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getFavicon=t.range=t.isBigNumber=t.ensureParsedJSONObject=t.ensureBN=t.ensureRegExpString=t.ensureIntNumber=t.ensureBuffer=t.ensureAddressString=t.ensureEvenLengthHexString=t.ensureHexString=t.isHexString=t.prepend0x=t.strip0x=t.has0xPrefix=t.hexStringFromIntNumber=t.intNumberFromHexString=t.bigIntStringFromBN=t.hexStringFromBuffer=t.hexStringToUint8Array=t.uint8ArrayToHex=t.randomBytesHex=void 0;const o=r(n(548)),c=n(732),d=/^[0-9]*$/,h=/^[a-f0-9]*$/;function l(e){return[...e].map(b=>b.toString(16).padStart(2,"0")).join("")}function m(e){return e.startsWith("0x")||e.startsWith("0X")}function E(e){return m(e)?e.slice(2):e}function S(e){return m(e)?"0x"+e.slice(2):"0x"+e}function R(e){if("string"!=typeof e)return!1;const s=E(e).toLowerCase();return h.test(s)}function f(e,t=!1){if("string"==typeof e){const s=E(e).toLowerCase();if(h.test(s))return(0,c.HexString)(t?"0x"+s:s)}throw new Error(`"${String(e)}" is not a hexadecimal string`)}function v(e,t=!1){let n=f(e,!1);return n.length%2==1&&(n=(0,c.HexString)("0"+n)),t?(0,c.HexString)("0x"+n):n}function y(e){if("number"==typeof e&&Number.isInteger(e))return(0,c.IntNumber)(e);if("string"==typeof e){if(d.test(e))return(0,c.IntNumber)(Number(e));if(R(e))return(0,c.IntNumber)(new o.default(v(e,!1),16).toNumber())}throw new Error("Not an integer: "+String(e))}function M(e){if(null==e||"function"!=typeof e.constructor)return!1;const{constructor:t}=e;return"function"==typeof t.config&&"number"==typeof t.EUCLID}t.randomBytesHex=function(e){return l(crypto.getRandomValues(new Uint8Array(e)))},t.uint8ArrayToHex=l,t.hexStringToUint8Array=function(e){return new Uint8Array(e.match(/.{1,2}/g).map(e=>parseInt(e,16)))},t.hexStringFromBuffer=function(e,t=!1){const n=e.toString("hex");return(0,c.HexString)(t?"0x"+n:n)},t.bigIntStringFromBN=function(e){return(0,c.BigIntString)(e.toString(10))},t.intNumberFromHexString=function(e){return(0,c.IntNumber)(new o.default(v(e,!1),16).toNumber())},t.hexStringFromIntNumber=function(e){return(0,c.HexString)("0x"+new o.default(e).toString(16))},t.has0xPrefix=m,t.strip0x=E,t.prepend0x=S,t.isHexString=R,t.ensureHexString=f,t.ensureEvenLengthHexString=v,t.ensureAddressString=function(e){if("string"==typeof e){const s=E(e).toLowerCase();if(R(s)&&40===s.length)return(0,c.AddressString)(S(s))}throw new Error("Invalid Ethereum address: "+String(e))},t.ensureBuffer=function(t){if(e.isBuffer(t))return t;if("string"==typeof t){if(R(t)){const s=v(t,!1);return e.from(s,"hex")}return e.from(t,"utf8")}throw new Error("Not binary data: "+String(t))},t.ensureIntNumber=y,t.ensureRegExpString=function(e){if(e instanceof RegExp)return(0,c.RegExpString)(e.toString());throw new Error("Not a RegExp: "+String(e))},t.ensureBN=function(e){if(null!==e&&(o.default.isBN(e)||M(e)))return new o.default(e.toString(10),10);if("number"==typeof e)return new o.default(y(e));if("string"==typeof e){if(d.test(e))return new o.default(e,10);if(R(e))return new o.default(v(e,!1),16)}throw new Error("Not an integer: "+String(e))},t.ensureParsedJSONObject=function(e){if("string"==typeof e)return JSON.parse(e);if("object"==typeof e)return e;throw new Error("Not a JSON string or an object: "+String(e))},t.isBigNumber=M,t.range=function(e,t){return Array.from({length:t-e},(t,i)=>e+i)},t.getFavicon=function(){const e=document.querySelector('link[sizes="192x192"]')||document.querySelector('link[sizes="180x180"]')||document.querySelector('link[rel="icon"]')||document.querySelector('link[rel="shortcut icon"]'),{protocol:t,host:n}=document.location,r=e?e.getAttribute("href"):null;return!r||r.startsWith("javascript:")?null:r.startsWith("http://")||r.startsWith("https://")||r.startsWith("data:")?r:r.startsWith("//")?t+r:`${t}//${n}${r}`}}).call(this,n(6).Buffer)},730:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Session=void 0;const r=n(1064),o=n(376),c=n(467),d=n(315);class h{constructor(e,t,n,o){this._storage=e,this._id=t||(0,d.randomBytesHex)(16),this._secret=n||(0,d.randomBytesHex)(32);const c=r.sha256.create();c.update(`${this._id}, ${this._secret} WalletLink`),this._key=c.hex(),this._linked=!!o}static load(e){const t=e.getItem("session:id"),n=e.getItem("session:linked"),r=e.getItem("session:secret");return t&&r?new h(e,t,r,"1"===n):null}static get persistedSessionIdChange$(){return(0,o.fromEvent)(window,"storage").pipe((0,c.filter)(e=>"session:id"===e.key),(0,c.map)(e=>({oldValue:e.oldValue||null,newValue:e.newValue||null})))}static hash(e){return r.sha256.create().update(e).hex()}get id(){return this._id}get secret(){return this._secret}get key(){return this._key}get linked(){return this._linked}set linked(e){this._linked=e,this.persistLinked()}save(){return this._storage.setItem("session:id",this._id),this._storage.setItem("session:secret",this._secret),this.persistLinked(),this}persistLinked(){this._storage.setItem("session:linked",this._linked?"1":"0")}}t.Session=h},732:function(e,t,n){"use strict";function r(){return e=>e}Object.defineProperty(t,"__esModule",{value:!0}),t.RegExpString=t.IntNumber=t.BigIntString=t.AddressString=t.HexString=t.OpaqueType=void 0,t.OpaqueType=r,t.HexString=e=>e,t.AddressString=e=>e,t.BigIntString=e=>e,t.IntNumber=function(e){return Math.floor(e)},t.RegExpString=e=>e},735:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RelayMessageType=void 0,function(e){e.SESSION_ID_REQUEST="SESSION_ID_REQUEST",e.SESSION_ID_RESPONSE="SESSION_ID_RESPONSE",e.LINKED="LINKED",e.UNLINKED="UNLINKED",e.WEB3_REQUEST="WEB3_REQUEST",e.WEB3_REQUEST_CANCELED="WEB3_REQUEST_CANCELED",e.WEB3_RESPONSE="WEB3_RESPONSE"}(t.RelayMessageType||(t.RelayMessageType={}))}}]);