(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1791:function(t,e,n){"use strict";const o=n(460),r=n(537),c=function(t){const e="A".charCodeAt(0),n="Z".charCodeAt(0);return(t=(t=t.toUpperCase()).substr(4)+t.substr(0,4)).split("").map((function(t){const code=t.charCodeAt(0);return code>=e&&code<=n?code-e+10:t})).join("")},h=function(t){let e,n=t;for(;n.length>2;)e=n.slice(0,9),n=parseInt(e,10)%97+n.slice(e.length);return parseInt(n,10)%97};class l{constructor(t){this._iban=t}static toAddress(t){if(!(t=new l(t)).isDirect())throw new Error("IBAN is indirect and can't be converted");return t.toAddress()}static toIban(address){return l.fromAddress(address).toString()}static fromAddress(address){if(!o.isAddress(address))throw new Error("Provided address is not a valid address: "+address);address=address.replace("0x","").replace("0X","");const t=function(t,e){let n=t;for(;n.length<2*e;)n="0"+n;return n}(new r(address,16).toString(36),15);return l.fromBban(t.toUpperCase())}static fromBban(t){const e=("0"+(98-h(c("XE00"+t)))).slice(-2);return new l("XE"+e+t)}static createIndirect(t){return l.fromBban("ETH"+t.institution+t.identifier)}static isValid(t){return new l(t).isValid()}isValid(){return/^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(this._iban)&&1===h(c(this._iban))}isDirect(){return 34===this._iban.length||35===this._iban.length}isIndirect(){return 20===this._iban.length}checksum(){return this._iban.substr(2,2)}institution(){return this.isIndirect()?this._iban.substr(7,4):""}client(){return this.isIndirect()?this._iban.substr(11):""}toAddress(){if(this.isDirect()){const t=this._iban.substr(4),e=new r(t,36);return o.toChecksumAddress(e.toString(16,20))}return""}toString(){return this._iban}}t.exports=l},1794:function(t,e,n){"use strict";var o=n(113),r=n(1795),c=n(195).errors,h=n(366).w3cwebsocket,l=function(t,e){o.call(this),e=e||{},this.url=t,this._customTimeout=e.timeout||15e3,this.headers=e.headers||{},this.protocol=e.protocol||void 0,this.reconnectOptions=Object.assign({auto:!1,delay:5e3,maxAttempts:!1,onTimeout:!1},e.reconnect),this.clientConfig=e.clientConfig||void 0,this.requestOptions=e.requestOptions||void 0,this.DATA="data",this.CLOSE="close",this.ERROR="error",this.CONNECT="connect",this.RECONNECT="reconnect",this.connection=null,this.requestQueue=new Map,this.responseQueue=new Map,this.reconnectAttempts=0,this.reconnecting=!1;var n=r.parseURL(t);n.username&&n.password&&(this.headers.authorization="Basic "+r.btoa(n.username+":"+n.password)),n.auth&&(this.headers.authorization="Basic "+r.btoa(n.auth)),Object.defineProperty(this,"connected",{get:function(){return this.connection&&this.connection.readyState===this.connection.OPEN},enumerable:!0}),this.connect()};(l.prototype=Object.create(o.prototype)).constructor=l,l.prototype.connect=function(){this.connection=new h(this.url,this.protocol,void 0,this.headers,this.requestOptions,this.clientConfig),this._addSocketListeners()},l.prototype._onMessage=function(t){var e=this;this._parseResponse("string"==typeof t.data?t.data:"").forEach((function(t){if(t.method&&-1!==t.method.indexOf("_subscription"))e.emit(e.DATA,t);else{var n=t.id;Array.isArray(t)&&(n=t[0].id),e.responseQueue.has(n)&&(void 0!==e.responseQueue.get(n).callback&&e.responseQueue.get(n).callback(!1,t),e.responseQueue.delete(n))}}))},l.prototype._onConnect=function(){if(this.emit(this.CONNECT),this.reconnectAttempts=0,this.reconnecting=!1,this.requestQueue.size>0){var t=this;this.requestQueue.forEach((function(e,n){t.send(e.payload,e.callback),t.requestQueue.delete(n)}))}},l.prototype._onClose=function(t){var e=this;!this.reconnectOptions.auto||[1e3,1001].includes(t.code)&&!1!==t.wasClean?(this.emit(this.CLOSE,t),this.requestQueue.size>0&&this.requestQueue.forEach((function(n,o){n.callback(c.ConnectionNotOpenError(t)),e.requestQueue.delete(o)})),this.responseQueue.size>0&&this.responseQueue.forEach((function(n,o){n.callback(c.InvalidConnection("on WS",t)),e.responseQueue.delete(o)})),this._removeSocketListeners(),this.removeAllListeners()):this.reconnect()},l.prototype._addSocketListeners=function(){this.connection.addEventListener("message",this._onMessage.bind(this)),this.connection.addEventListener("open",this._onConnect.bind(this)),this.connection.addEventListener("close",this._onClose.bind(this))},l.prototype._removeSocketListeners=function(){this.connection.removeEventListener("message",this._onMessage),this.connection.removeEventListener("open",this._onConnect),this.connection.removeEventListener("close",this._onClose)},l.prototype._parseResponse=function(data){var t=this,e=[];return data.replace(/\}[\n\r]?\{/g,"}|--|{").replace(/\}\][\n\r]?\[\{/g,"}]|--|[{").replace(/\}[\n\r]?\[\{/g,"}|--|[{").replace(/\}\][\n\r]?\{/g,"}]|--|{").split("|--|").forEach((function(data){t.lastChunk&&(data=t.lastChunk+data);var n=null;try{n=JSON.parse(data)}catch(e){return t.lastChunk=data,clearTimeout(t.lastChunkTimeout),void(t.lastChunkTimeout=setTimeout((function(){t.reconnectOptions.auto&&t.reconnectOptions.onTimeout?t.reconnect():(t.emit(t.ERROR,c.ConnectionTimeout(t._customTimeout)),t.requestQueue.size>0&&t.requestQueue.forEach((function(e,n){e.callback(c.ConnectionTimeout(t._customTimeout)),t.requestQueue.delete(n)})))}),t._customTimeout))}clearTimeout(t.lastChunkTimeout),t.lastChunk=null,n&&e.push(n)})),e},l.prototype.send=function(t,e){var n=t.id,o={payload:t,callback:e};if(Array.isArray(t)&&(n=t[0].id),this.connection.readyState===this.connection.CONNECTING||this.reconnecting)this.requestQueue.set(n,o);else{if(this.connection.readyState!==this.connection.OPEN)return this.requestQueue.delete(n),this.emit(this.ERROR,c.ConnectionNotOpenError()),void o.callback(c.ConnectionNotOpenError());this.responseQueue.set(n,o),this.requestQueue.delete(n);try{this.connection.send(JSON.stringify(o.payload))}catch(t){o.callback(t),this.responseQueue.delete(n)}}},l.prototype.reset=function(){this.responseQueue.clear(),this.requestQueue.clear(),this.removeAllListeners(),this._removeSocketListeners(),this._addSocketListeners()},l.prototype.disconnect=function(code,t){this._removeSocketListeners(),this.connection.close(code||1e3,t)},l.prototype.supportsSubscriptions=function(){return!0},l.prototype.reconnect=function(){var t=this;this.reconnecting=!0,this.responseQueue.size>0&&this.responseQueue.forEach((function(e,n){e.callback(c.PendingRequestsOnReconnectingError()),t.responseQueue.delete(n)})),!this.reconnectOptions.maxAttempts||this.reconnectAttempts<this.reconnectOptions.maxAttempts?setTimeout((function(){t.reconnectAttempts++,t._removeSocketListeners(),t.emit(t.RECONNECT,t.reconnectAttempts),t.connect()}),this.reconnectOptions.delay):(this.emit(this.ERROR,c.MaxAttemptsReachedOnReconnectingError()),this.reconnecting=!1,this.requestQueue.size>0&&this.requestQueue.forEach((function(e,n){e.callback(c.MaxAttemptsReachedOnReconnectingError()),t.requestQueue.delete(n)})))},t.exports=l},1795:function(t,e,n){(function(e,o){var r="[object process]"===Object.prototype.toString.call(void 0!==e?e:0),c="undefined"!=typeof navigator&&"ReactNative"===navigator.product,h=null,l=null;if(r||c){h=function(t){return o.from(t).toString("base64")};var d=n(112);if(d.URL){var f=d.URL;l=function(t){return new f(t)}}else l=n(112).parse}else h=btoa.bind("object"==typeof globalThis?globalThis:self),l=function(t){return new URL(t)};t.exports={parseURL:l,btoa:h}}).call(this,n(30),n(6).Buffer)},1796:function(t,e,n){var o=n(195).errors,r=n(184).XMLHttpRequest,c=n(237),h=n(302),l=function(t,e){e=e||{},this.withCredentials=e.withCredentials||!1,this.timeout=e.timeout||0,this.headers=e.headers,this.agent=e.agent,this.connected=!1;const n=!1!==e.keepAlive;this.host=t||"http://localhost:8545",this.agent||("https"===this.host.substring(0,5)?this.httpsAgent=new h.Agent({keepAlive:n}):this.httpAgent=new c.Agent({keepAlive:n}))};l.prototype._prepareRequest=function(){var t;if("undefined"!=typeof XMLHttpRequest)t=new XMLHttpRequest;else{t=new r;var e={httpsAgent:this.httpsAgent,httpAgent:this.httpAgent,baseUrl:this.baseUrl};this.agent&&(e.httpsAgent=this.agent.https,e.httpAgent=this.agent.http,e.baseUrl=this.agent.baseUrl),t.nodejsSet(e)}return t.open("POST",this.host,!0),t.setRequestHeader("Content-Type","application/json"),t.timeout=this.timeout,t.withCredentials=this.withCredentials,this.headers&&this.headers.forEach((function(header){t.setRequestHeader(header.name,header.value)})),t},l.prototype.send=function(t,e){var n=this,r=this._prepareRequest();r.onreadystatechange=function(){if(4===r.readyState&&1!==r.timeout){var t=r.responseText,c=null;try{t=JSON.parse(t)}catch(t){c=o.InvalidResponse(r.responseText)}n.connected=!0,e(c,t)}},r.ontimeout=function(){n.connected=!1,e(o.ConnectionTimeout(this.timeout))};try{r.send(JSON.stringify(t))}catch(t){this.connected=!1,e(o.InvalidConnection(this.host))}},l.prototype.disconnect=function(){},l.prototype.supportsSubscriptions=function(){return!1},t.exports=l},1797:function(t,e,n){"use strict";var o=n(195).errors,r=n(367),c=function(path,t){var e=this;this.responseCallbacks={},this.notificationCallbacks=[],this.path=path,this.connected=!1,this.connection=t.connect({path:this.path}),this.addDefaultEvents();var n=function(t){var n=null;Array.isArray(t)?t.forEach((function(t){e.responseCallbacks[t.id]&&(n=t.id)})):n=t.id,n||-1===t.method.indexOf("_subscription")?e.responseCallbacks[n]&&(e.responseCallbacks[n](null,t),delete e.responseCallbacks[n]):e.notificationCallbacks.forEach((function(e){"function"==typeof e&&e(t)}))};"Socket"===t.constructor.name?r(this.connection).done(n):this.connection.on("data",(function(data){e._parseResponse(data.toString()).forEach(n)}))};c.prototype.addDefaultEvents=function(){var t=this;this.connection.on("connect",(function(){t.connected=!0})),this.connection.on("close",(function(){t.connected=!1})),this.connection.on("error",(function(){t._timeout()})),this.connection.on("end",(function(){t._timeout()})),this.connection.on("timeout",(function(){t._timeout()}))},c.prototype._parseResponse=function(data){var t=this,e=[];return data.replace(/\}[\n\r]?\{/g,"}|--|{").replace(/\}\][\n\r]?\[\{/g,"}]|--|[{").replace(/\}[\n\r]?\[\{/g,"}|--|[{").replace(/\}\][\n\r]?\{/g,"}]|--|{").split("|--|").forEach((function(data){t.lastChunk&&(data=t.lastChunk+data);var n=null;try{n=JSON.parse(data)}catch(e){return t.lastChunk=data,clearTimeout(t.lastChunkTimeout),void(t.lastChunkTimeout=setTimeout((function(){throw t._timeout(),o.InvalidResponse(data)}),15e3))}clearTimeout(t.lastChunkTimeout),t.lastChunk=null,n&&e.push(n)})),e},c.prototype._addResponseCallback=function(t,e){var n=t.id||t[0].id,o=t.method||t[0].method;this.responseCallbacks[n]=e,this.responseCallbacks[n].method=o},c.prototype._timeout=function(){for(var t in this.responseCallbacks)this.responseCallbacks.hasOwnProperty(t)&&(this.responseCallbacks[t](o.InvalidConnection("on IPC")),delete this.responseCallbacks[t])},c.prototype.reconnect=function(){this.connection.connect({path:this.path})},c.prototype.send=function(t,e){this.connection.writable||this.connection.connect({path:this.path}),this.connection.write(JSON.stringify(t)),this._addResponseCallback(t,e)},c.prototype.on=function(t,e){if("function"!=typeof e)throw new Error("The second parameter callback must be a function.");switch(t){case"data":this.notificationCallbacks.push(e);break;default:this.connection.on(t,e)}},c.prototype.once=function(t,e){if("function"!=typeof e)throw new Error("The second parameter callback must be a function.");this.connection.once(t,e)},c.prototype.removeListener=function(t,e){var n=this;switch(t){case"data":this.notificationCallbacks.forEach((function(t,o){t===e&&n.notificationCallbacks.splice(o,1)}));break;default:this.connection.removeListener(t,e)}},c.prototype.removeAllListeners=function(t){switch(t){case"data":this.notificationCallbacks=[];break;default:this.connection.removeAllListeners(t)}},c.prototype.reset=function(){this._timeout(),this.notificationCallbacks=[],this.connection.removeAllListeners("error"),this.connection.removeAllListeners("end"),this.connection.removeAllListeners("timeout"),this.addDefaultEvents()},c.prototype.supportsSubscriptions=function(){return!0},t.exports=c}}]);