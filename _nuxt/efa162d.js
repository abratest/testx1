(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1699:function(t,e,n){var r=n(530),o=n(956),c=function(t){var e=typeof t;if("string"===e)return o.isHexStrict(t)?new r(t.replace(/0x/i,""),16):new r(t,10);if("number"===e)return new r(t);if(o.isBigNumber(t))return new r(t.toString(10));if(o.isBN(t))return t;throw new Error(t+" is not a number")},h=function(t,e,n){var h,l,f;if("bytes"===(t=(f=t).startsWith("int[")?"int256"+f.slice(3):"int"===f?"int256":f.startsWith("uint[")?"uint256"+f.slice(4):"uint"===f?"uint256":f.startsWith("fixed[")?"fixed128x128"+f.slice(5):"fixed"===f?"fixed128x128":f.startsWith("ufixed[")?"ufixed128x128"+f.slice(6):"ufixed"===f?"ufixed128x128":f)){if(e.replace(/^0x/i,"").length%2!=0)throw new Error("Invalid bytes characters "+e.length);return e}if("string"===t)return o.utf8ToHex(e);if("bool"===t)return e?"01":"00";if(t.startsWith("address")){if(h=n?64:40,!o.isAddress(e))throw new Error(e+" is not a valid address, or the checksum is invalid.");return o.leftPad(e.toLowerCase(),h)}if(h=function(t){var e=/^\D+(\d+).*$/.exec(t);return e?parseInt(e[1],10):null}(t),t.startsWith("bytes")){if(!h)throw new Error("bytes[] not yet supported in solidity");if(n&&(h=32),h<1||h>32||h<e.replace(/^0x/i,"").length/2)throw new Error("Invalid bytes"+h+" for "+e);return o.rightPad(e,2*h)}if(t.startsWith("uint")){if(h%8||h<8||h>256)throw new Error("Invalid uint"+h+" size");if((l=c(e)).bitLength()>h)throw new Error("Supplied uint exceeds width: "+h+" vs "+l.bitLength());if(l.lt(new r(0)))throw new Error("Supplied uint "+l.toString()+" is negative");return h?o.leftPad(l.toString("hex"),h/8*2):l}if(t.startsWith("int")){if(h%8||h<8||h>256)throw new Error("Invalid int"+h+" size");if((l=c(e)).bitLength()>h)throw new Error("Supplied int exceeds width: "+h+" vs "+l.bitLength());return l.lt(new r(0))?l.toTwos(h).toString("hex"):h?o.leftPad(l.toString("hex"),h/8*2):l}throw new Error("Unsupported or invalid type: "+t)},l=function(t){if(Array.isArray(t))throw new Error("Autodetection of array types is not supported.");var e,n,c="";if(t&&"object"==typeof t&&(t.hasOwnProperty("v")||t.hasOwnProperty("t")||t.hasOwnProperty("value")||t.hasOwnProperty("type"))?(e=t.hasOwnProperty("t")?t.t:t.type,c=t.hasOwnProperty("v")?t.v:t.value):(e=o.toHex(t,!0),c=o.toHex(t),e.startsWith("int")||e.startsWith("uint")||(e="bytes")),!e.startsWith("int")&&!e.startsWith("uint")||"string"!=typeof c||/^(-)?0x/i.test(c)||(c=new r(c)),Array.isArray(c)){if((n=function(t){var e=/^\D+\d*\[(\d+)\]$/.exec(t);return e?parseInt(e[1],10):null}(e))&&c.length!==n)throw new Error(e+" is not matching the given array "+JSON.stringify(c));n=c.length}return Array.isArray(c)?c.map((function(t){return h(e,t,n).toString("hex").replace("0x","")})).join(""):h(e,c,n).toString("hex").replace("0x","")};t.exports={soliditySha3:function(){var t=Array.prototype.slice.call(arguments),e=t.map(l);return o.sha3("0x"+e.join(""))},soliditySha3Raw:function(){return o.sha3Raw("0x"+Array.prototype.slice.call(arguments).map(l).join(""))},encodePacked:function(){var t=Array.prototype.slice.call(arguments),e=t.map(l);return"0x"+e.join("").toLowerCase()}}},1702:function(t,e,n){"use strict";var r=n(113),o=n(1703),c=n(156).errors,h=n(366).w3cwebsocket,l=function(t,e){r.call(this),e=e||{},this.url=t,this._customTimeout=e.timeout||15e3,this.headers=e.headers||{},this.protocol=e.protocol||void 0,this.reconnectOptions=Object.assign({auto:!1,delay:5e3,maxAttempts:!1,onTimeout:!1},e.reconnect),this.clientConfig=e.clientConfig||void 0,this.requestOptions=e.requestOptions||void 0,this.DATA="data",this.CLOSE="close",this.ERROR="error",this.CONNECT="connect",this.RECONNECT="reconnect",this.connection=null,this.requestQueue=new Map,this.responseQueue=new Map,this.reconnectAttempts=0,this.reconnecting=!1;var n=o.parseURL(t);n.username&&n.password&&(this.headers.authorization="Basic "+o.btoa(n.username+":"+n.password)),n.auth&&(this.headers.authorization="Basic "+o.btoa(n.auth)),Object.defineProperty(this,"connected",{get:function(){return this.connection&&this.connection.readyState===this.connection.OPEN},enumerable:!0}),this.connect()};(l.prototype=Object.create(r.prototype)).constructor=l,l.prototype.connect=function(){this.connection=new h(this.url,this.protocol,void 0,this.headers,this.requestOptions,this.clientConfig),this._addSocketListeners()},l.prototype._onMessage=function(t){var e=this;this._parseResponse("string"==typeof t.data?t.data:"").forEach((function(t){if(t.method&&-1!==t.method.indexOf("_subscription"))e.emit(e.DATA,t);else{var n=t.id;Array.isArray(t)&&(n=t[0].id),e.responseQueue.has(n)&&(void 0!==e.responseQueue.get(n).callback&&e.responseQueue.get(n).callback(!1,t),e.responseQueue.delete(n))}}))},l.prototype._onConnect=function(){if(this.emit(this.CONNECT),this.reconnectAttempts=0,this.reconnecting=!1,this.requestQueue.size>0){var t=this;this.requestQueue.forEach((function(e,n){t.send(e.payload,e.callback),t.requestQueue.delete(n)}))}},l.prototype._onClose=function(t){var e=this;!this.reconnectOptions.auto||[1e3,1001].includes(t.code)&&!1!==t.wasClean?(this.emit(this.CLOSE,t),this.requestQueue.size>0&&this.requestQueue.forEach((function(n,r){n.callback(c.ConnectionNotOpenError(t)),e.requestQueue.delete(r)})),this.responseQueue.size>0&&this.responseQueue.forEach((function(n,r){n.callback(c.InvalidConnection("on WS",t)),e.responseQueue.delete(r)})),this._removeSocketListeners(),this.removeAllListeners()):this.reconnect()},l.prototype._addSocketListeners=function(){this.connection.addEventListener("message",this._onMessage.bind(this)),this.connection.addEventListener("open",this._onConnect.bind(this)),this.connection.addEventListener("close",this._onClose.bind(this))},l.prototype._removeSocketListeners=function(){this.connection.removeEventListener("message",this._onMessage),this.connection.removeEventListener("open",this._onConnect),this.connection.removeEventListener("close",this._onClose)},l.prototype._parseResponse=function(data){var t=this,e=[];return data.replace(/\}[\n\r]?\{/g,"}|--|{").replace(/\}\][\n\r]?\[\{/g,"}]|--|[{").replace(/\}[\n\r]?\[\{/g,"}|--|[{").replace(/\}\][\n\r]?\{/g,"}]|--|{").split("|--|").forEach((function(data){t.lastChunk&&(data=t.lastChunk+data);var n=null;try{n=JSON.parse(data)}catch(e){return t.lastChunk=data,clearTimeout(t.lastChunkTimeout),void(t.lastChunkTimeout=setTimeout((function(){t.reconnectOptions.auto&&t.reconnectOptions.onTimeout?t.reconnect():(t.emit(t.ERROR,c.ConnectionTimeout(t._customTimeout)),t.requestQueue.size>0&&t.requestQueue.forEach((function(e,n){e.callback(c.ConnectionTimeout(t._customTimeout)),t.requestQueue.delete(n)})))}),t._customTimeout))}clearTimeout(t.lastChunkTimeout),t.lastChunk=null,n&&e.push(n)})),e},l.prototype.send=function(t,e){var n=t.id,r={payload:t,callback:e};if(Array.isArray(t)&&(n=t[0].id),this.connection.readyState===this.connection.CONNECTING||this.reconnecting)this.requestQueue.set(n,r);else{if(this.connection.readyState!==this.connection.OPEN)return this.requestQueue.delete(n),this.emit(this.ERROR,c.ConnectionNotOpenError()),void r.callback(c.ConnectionNotOpenError());this.responseQueue.set(n,r),this.requestQueue.delete(n);try{this.connection.send(JSON.stringify(r.payload))}catch(t){r.callback(t),this.responseQueue.delete(n)}}},l.prototype.reset=function(){this.responseQueue.clear(),this.requestQueue.clear(),this.removeAllListeners(),this._removeSocketListeners(),this._addSocketListeners()},l.prototype.disconnect=function(code,t){this._removeSocketListeners(),this.connection.close(code||1e3,t)},l.prototype.supportsSubscriptions=function(){return!0},l.prototype.reconnect=function(){var t=this;this.reconnecting=!0,this.responseQueue.size>0&&this.responseQueue.forEach((function(e,n){e.callback(c.PendingRequestsOnReconnectingError()),t.responseQueue.delete(n)})),!this.reconnectOptions.maxAttempts||this.reconnectAttempts<this.reconnectOptions.maxAttempts?setTimeout((function(){t.reconnectAttempts++,t._removeSocketListeners(),t.emit(t.RECONNECT,t.reconnectAttempts),t.connect()}),this.reconnectOptions.delay):(this.emit(this.ERROR,c.MaxAttemptsReachedOnReconnectingError()),this.reconnecting=!1,this.requestQueue.size>0&&this.requestQueue.forEach((function(e,n){e.callback(c.MaxAttemptsReachedOnReconnectingError()),t.requestQueue.delete(n)})))},t.exports=l},1703:function(t,e,n){(function(e,r){var o="[object process]"===Object.prototype.toString.call(void 0!==e?e:0),c="undefined"!=typeof navigator&&"ReactNative"===navigator.product,h=null,l=null;if(o||c){h=function(t){return r.from(t).toString("base64")};var f=n(112);if(f.URL){var d=f.URL;l=function(t){return new d(t)}}else l=n(112).parse}else h=btoa.bind("object"==typeof globalThis?globalThis:self),l=function(t){return new URL(t)};t.exports={parseURL:l,btoa:h}}).call(this,n(30),n(6).Buffer)},1704:function(t,e,n){var r=n(156).errors,o=n(184).XMLHttpRequest,c=n(237),h=n(302),l=function(t,e){e=e||{},this.withCredentials=e.withCredentials||!1,this.timeout=e.timeout||0,this.headers=e.headers,this.agent=e.agent,this.connected=!1;const n=!1!==e.keepAlive;this.host=t||"http://localhost:8545",this.agent||("https"===this.host.substring(0,5)?this.httpsAgent=new h.Agent({keepAlive:n}):this.httpAgent=new c.Agent({keepAlive:n}))};l.prototype._prepareRequest=function(){var t;if("undefined"!=typeof XMLHttpRequest)t=new XMLHttpRequest;else{t=new o;var e={httpsAgent:this.httpsAgent,httpAgent:this.httpAgent,baseUrl:this.baseUrl};this.agent&&(e.httpsAgent=this.agent.https,e.httpAgent=this.agent.http,e.baseUrl=this.agent.baseUrl),t.nodejsSet(e)}return t.open("POST",this.host,!0),t.setRequestHeader("Content-Type","application/json"),t.timeout=this.timeout,t.withCredentials=this.withCredentials,this.headers&&this.headers.forEach((function(header){t.setRequestHeader(header.name,header.value)})),t},l.prototype.send=function(t,e){var n=this,o=this._prepareRequest();o.onreadystatechange=function(){if(4===o.readyState&&1!==o.timeout){var t=o.responseText,c=null;try{t=JSON.parse(t)}catch(t){c=r.InvalidResponse(o.responseText)}n.connected=!0,e(c,t)}},o.ontimeout=function(){n.connected=!1,e(r.ConnectionTimeout(this.timeout))};try{o.send(JSON.stringify(t))}catch(t){this.connected=!1,e(r.InvalidConnection(this.host))}},l.prototype.disconnect=function(){},l.prototype.supportsSubscriptions=function(){return!1},t.exports=l},1705:function(t,e,n){"use strict";var r=n(156).errors,o=n(367),c=function(path,t){var e=this;this.responseCallbacks={},this.notificationCallbacks=[],this.path=path,this.connected=!1,this.connection=t.connect({path:this.path}),this.addDefaultEvents();var n=function(t){var n=null;Array.isArray(t)?t.forEach((function(t){e.responseCallbacks[t.id]&&(n=t.id)})):n=t.id,n||-1===t.method.indexOf("_subscription")?e.responseCallbacks[n]&&(e.responseCallbacks[n](null,t),delete e.responseCallbacks[n]):e.notificationCallbacks.forEach((function(e){"function"==typeof e&&e(t)}))};"Socket"===t.constructor.name?o(this.connection).done(n):this.connection.on("data",(function(data){e._parseResponse(data.toString()).forEach(n)}))};c.prototype.addDefaultEvents=function(){var t=this;this.connection.on("connect",(function(){t.connected=!0})),this.connection.on("close",(function(){t.connected=!1})),this.connection.on("error",(function(){t._timeout()})),this.connection.on("end",(function(){t._timeout()})),this.connection.on("timeout",(function(){t._timeout()}))},c.prototype._parseResponse=function(data){var t=this,e=[];return data.replace(/\}[\n\r]?\{/g,"}|--|{").replace(/\}\][\n\r]?\[\{/g,"}]|--|[{").replace(/\}[\n\r]?\[\{/g,"}|--|[{").replace(/\}\][\n\r]?\{/g,"}]|--|{").split("|--|").forEach((function(data){t.lastChunk&&(data=t.lastChunk+data);var n=null;try{n=JSON.parse(data)}catch(e){return t.lastChunk=data,clearTimeout(t.lastChunkTimeout),void(t.lastChunkTimeout=setTimeout((function(){throw t._timeout(),r.InvalidResponse(data)}),15e3))}clearTimeout(t.lastChunkTimeout),t.lastChunk=null,n&&e.push(n)})),e},c.prototype._addResponseCallback=function(t,e){var n=t.id||t[0].id,r=t.method||t[0].method;this.responseCallbacks[n]=e,this.responseCallbacks[n].method=r},c.prototype._timeout=function(){for(var t in this.responseCallbacks)this.responseCallbacks.hasOwnProperty(t)&&(this.responseCallbacks[t](r.InvalidConnection("on IPC")),delete this.responseCallbacks[t])},c.prototype.reconnect=function(){this.connection.connect({path:this.path})},c.prototype.send=function(t,e){this.connection.writable||this.connection.connect({path:this.path}),this.connection.write(JSON.stringify(t)),this._addResponseCallback(t,e)},c.prototype.on=function(t,e){if("function"!=typeof e)throw new Error("The second parameter callback must be a function.");switch(t){case"data":this.notificationCallbacks.push(e);break;default:this.connection.on(t,e)}},c.prototype.once=function(t,e){if("function"!=typeof e)throw new Error("The second parameter callback must be a function.");this.connection.once(t,e)},c.prototype.removeListener=function(t,e){var n=this;switch(t){case"data":this.notificationCallbacks.forEach((function(t,r){t===e&&n.notificationCallbacks.splice(r,1)}));break;default:this.connection.removeListener(t,e)}},c.prototype.removeAllListeners=function(t){switch(t){case"data":this.notificationCallbacks=[];break;default:this.connection.removeAllListeners(t)}},c.prototype.reset=function(){this._timeout(),this.notificationCallbacks=[],this.connection.removeAllListeners("error"),this.connection.removeAllListeners("end"),this.connection.removeAllListeners("timeout"),this.addDefaultEvents()},c.prototype.supportsSubscriptions=function(){return!0},t.exports=c},239:function(t,e,n){var r=n(362),o=n(956),c=n(1699),h=n(167),l=n(530),f=function(t,e){var n=[];return e.forEach((function(param){if("object"==typeof param.components){if("tuple"!==param.type.substring(0,5))throw new Error("components found but type is not tuple; report on GitHub");var e="",r=param.type.indexOf("[");r>=0&&(e=param.type.substring(r));var o=f(t,param.components);Array.isArray(o)&&t?n.push("tuple("+o.join(",")+")"+e):t?n.push("("+o+")"):n.push("("+o.join(",")+")"+e)}else n.push(param.type)})),n},d=function(t){if(!o.isHexStrict(t))throw new Error("The parameter must be a valid HEX string.");var e="",i=0,n=t.length;for("0x"===t.substring(0,2)&&(i=2);i<n;i+=2){var code=parseInt(t.substr(i,2),16);e+=String.fromCharCode(code)}return e},m=function(t){if(!t)return"0x00";for(var e="",i=0;i<t.length;i++){var n=t.charCodeAt(i).toString(16);e+=n.length<2?"0"+n:n}return"0x"+e},y=function(t){if(t=t?t.toLowerCase():"ether",!r.unitMap[t])throw new Error('This unit "'+t+"\" doesn't exist, please use the one of the following units"+JSON.stringify(r.unitMap,null,2));return t};t.exports={_fireError:function(t,e,n,r,o){return!t||"object"!=typeof t||t instanceof Error||!t.data||((t.data&&"object"==typeof t.data||Array.isArray(t.data))&&(t.data=JSON.stringify(t.data,null,2)),t=t.message+"\n"+t.data),"string"==typeof t&&(t=new Error(t)),"function"==typeof r&&r(t,o),"function"==typeof n&&((e&&"function"==typeof e.listeners&&e.listeners("error").length||"function"==typeof r)&&e.catch((function(){})),setTimeout((function(){n(t)}),1)),e&&"function"==typeof e.emit&&setTimeout((function(){e.emit("error",t,o),e.removeAllListeners()}),1),e},_jsonInterfaceMethodToString:function(t){return t&&"object"==typeof t&&t.name&&-1!==t.name.indexOf("(")?t.name:t.name+"("+f(!1,t.inputs).join(",")+")"},_flattenTypes:f,randomHex:function(t){return"0x"+h(t).toString("hex")},BN:o.BN,isBN:o.isBN,isBigNumber:o.isBigNumber,isHex:o.isHex,isHexStrict:o.isHexStrict,sha3:o.sha3,sha3Raw:o.sha3Raw,keccak256:o.sha3,soliditySha3:c.soliditySha3,soliditySha3Raw:c.soliditySha3Raw,encodePacked:c.encodePacked,isAddress:o.isAddress,checkAddressChecksum:o.checkAddressChecksum,toChecksumAddress:function(address){if(void 0===address)return"";if(!/^(0x)?[0-9a-f]{40}$/i.test(address))throw new Error('Given address "'+address+'" is not a valid Ethereum address.');address=address.toLowerCase().replace(/^0x/i,"");for(var t=o.sha3(address).replace(/^0x/i,""),e="0x",i=0;i<address.length;i++)parseInt(t[i],16)>7?e+=address[i].toUpperCase():e+=address[i];return e},toHex:o.toHex,toBN:o.toBN,bytesToHex:o.bytesToHex,hexToBytes:o.hexToBytes,hexToNumberString:o.hexToNumberString,hexToNumber:o.hexToNumber,toDecimal:o.hexToNumber,numberToHex:o.numberToHex,fromDecimal:o.numberToHex,hexToUtf8:o.hexToUtf8,hexToString:o.hexToUtf8,toUtf8:o.hexToUtf8,stripHexPrefix:o.stripHexPrefix,utf8ToHex:o.utf8ToHex,stringToHex:o.utf8ToHex,fromUtf8:o.utf8ToHex,hexToAscii:d,toAscii:d,asciiToHex:m,fromAscii:m,unitMap:r.unitMap,toWei:function(t,e){if(e=y(e),!o.isBN(t)&&"string"!=typeof t)throw new Error("Please pass numbers as strings or BN objects to avoid precision errors.");return o.isBN(t)?r.toWei(t,e):r.toWei(t,e).toString(10)},fromWei:function(t,e){if(e=y(e),!o.isBN(t)&&"string"!=typeof t)throw new Error("Please pass numbers as strings or BN objects to avoid precision errors.");return o.isBN(t)?r.fromWei(t,e):r.fromWei(t,e).toString(10)},padLeft:o.leftPad,leftPad:o.leftPad,padRight:o.rightPad,rightPad:o.rightPad,toTwosComplement:o.toTwosComplement,isBloom:o.isBloom,isUserEthereumAddressInBloom:o.isUserEthereumAddressInBloom,isContractAddressInBloom:o.isContractAddressInBloom,isTopic:o.isTopic,isTopicInBloom:o.isTopicInBloom,isInBloom:o.isInBloom,compareBlockNumbers:function(a,b){if(a==b)return 0;if("genesis"!=a&&"earliest"!=a&&0!=a||"genesis"!=b&&"earliest"!=b&&0!=b){if("genesis"==a||"earliest"==a)return-1;if("genesis"==b||"earliest"==b)return 1;if("latest"==a)return"pending"==b?-1:1;if("latest"===b)return"pending"==a?1:-1;if("pending"==a)return 1;if("pending"==b)return-1;{let t=new l(a),e=new l(b);return t.lt(e)?-1:t.eq(e)?0:1}}return 0},toNumber:o.toNumber}},556:function(t,e,n){"use strict";var r=n(316),o=n(318),c=n(170),h=function(){var t=this;r.packageInit(this,arguments),[new o({name:"getId",call:"net_version",params:0,outputFormatter:parseInt}),new o({name:"isListening",call:"net_listening",params:0}),new o({name:"getPeerCount",call:"net_peerCount",params:0,outputFormatter:c.hexToNumber})].forEach((function(e){e.attachToObject(t),e.setRequestManager(t._requestManager)}))};r.addProviders(h),t.exports=h},956:function(t,e,n){(function(e){var r=n(530),o=n(299),c=n(363),h=n(1690),l=n(365),f=function(object){return r.isBN(object)},d=function(object){return object&&object.constructor&&"BigNumber"===object.constructor.name},m=function(t){try{return o.apply(null,arguments)}catch(e){throw new Error(e+' Given value: "'+t+'"')}},y=function(address){return!!/^(0x)?[0-9a-f]{40}$/i.test(address)&&(!(!/^(0x|0X)?[0-9a-f]{40}$/.test(address)&&!/^(0x|0X)?[0-9A-F]{40}$/.test(address))||x(address))},x=function(address){address=address.replace(/^0x/i,"");for(var t=S(address.toLowerCase()).replace(/^0x/i,""),i=0;i<40;i++)if(parseInt(t[i],16)>7&&address[i].toUpperCase()!==address[i]||parseInt(t[i],16)<=7&&address[i].toLowerCase()!==address[i])return!1;return!0},v=function(t){var e="";t=(t=(t=(t=(t=c.encode(t)).replace(/^(?:\u0000)*/,"")).split("").reverse().join("")).replace(/^(?:\u0000)*/,"")).split("").reverse().join("");for(var i=0;i<t.length;i++){var n=t.charCodeAt(i).toString(16);e+=n.length<2?"0"+n:n}return"0x"+e},w=function(t){if(!t)return t;if("string"==typeof t&&!k(t))throw new Error('Given value "'+t+'" is not a valid hex string.');return m(t).toNumber()},C=function(t){if(null==t)return t;if(!isFinite(t)&&!k(t))throw new Error('Given input "'+t+'" is not a number.');var e=m(t),n=e.toString(16);return e.lt(new r(0))?"-0x"+n.substr(1):"0x"+n},T=function(t,n){if(y(t))return n?"address":"0x"+t.toLowerCase().replace(/^0x/i,"");if("boolean"==typeof t)return n?"bool":t?"0x01":"0x00";if(e.isBuffer(t))return"0x"+t.toString("hex");if("object"==typeof t&&t&&!d(t)&&!f(t))return n?"string":v(JSON.stringify(t));if("string"==typeof t){if(0===t.indexOf("-0x")||0===t.indexOf("-0X"))return n?"int256":C(t);if(0===t.indexOf("0x")||0===t.indexOf("0X"))return n?"bytes":t;if(!isFinite(t))return n?"string":v(t)}return n?t<0?"int256":"uint256":C(t)},k=function(t){return("string"==typeof t||"number"==typeof t)&&/^(-)?0x[0-9a-f]*$/i.test(t)},E=function(t){return("string"==typeof t||"number"==typeof t)&&/^(-0x|0x)?[0-9a-f]*$/i.test(t)},A="0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",S=function(t){f(t)&&(t=t.toString()),k(t)&&/^0x/i.test(t.toString())?t=h.toBuffer(t):"string"==typeof t&&(t=e.from(t,"utf-8"));var n=h.bufferToHex(h.keccak256(t));return n===A?null:n};S._Hash=h.keccak256;t.exports={BN:r,isBN:f,isBigNumber:d,toBN:m,isAddress:y,isBloom:function(t){return l.isBloom(t)},isUserEthereumAddressInBloom:function(t,e){return l.isUserEthereumAddressInBloom(t,e)},isContractAddressInBloom:function(t,e){return l.isContractAddressInBloom(t,e)},isTopic:function(t){return l.isTopic(t)},isTopicInBloom:function(t,e){return l.isTopicInBloom(t,e)},isInBloom:function(t,e){return l.isInBloom(t,e)},checkAddressChecksum:x,utf8ToHex:v,hexToUtf8:function(t){if(!k(t))throw new Error('The parameter "'+t+'" must be a valid HEX string.');for(var e="",code=0,n=(t=(t=(t=(t=(t=t.replace(/^0x/i,"")).replace(/^(?:00)*/,"")).split("").reverse().join("")).replace(/^(?:00)*/,"")).split("").reverse().join("")).length,i=0;i<n;i+=2)code=parseInt(t.substr(i,2),16),e+=String.fromCharCode(code);return c.decode(e)},hexToNumber:w,hexToNumberString:function(t){if(!t)return t;if("string"==typeof t&&!k(t))throw new Error('Given value "'+t+'" is not a valid hex string.');return m(t).toString(10)},numberToHex:C,toHex:T,hexToBytes:function(t){if(t=t.toString(16),!k(t))throw new Error('Given value "'+t+'" is not a valid hex string.');t=t.replace(/^0x/i,"");for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToHex:function(t){for(var e=[],i=0;i<t.length;i++)e.push((t[i]>>>4).toString(16)),e.push((15&t[i]).toString(16));return"0x"+e.join("")},isHex:E,isHexStrict:k,stripHexPrefix:function(t){return 0!==t&&E(t)?t.replace(/^(-)?0x/i,"$1"):t},leftPad:function(t,e,n){var r=/^0x/i.test(t)||"number"==typeof t,o=e-(t=t.toString(16).replace(/^0x/i,"")).length+1>=0?e-t.length+1:0;return(r?"0x":"")+new Array(o).join(n||"0")+t},rightPad:function(t,e,n){var r=/^0x/i.test(t)||"number"==typeof t,o=e-(t=t.toString(16).replace(/^0x/i,"")).length+1>=0?e-t.length+1:0;return(r?"0x":"")+t+new Array(o).join(n||"0")},toTwosComplement:function(t){return"0x"+m(t).toTwos(256).toString(16,64)},sha3:S,sha3Raw:function(t){return null===(t=S(t))?A:t},toNumber:function(t){return"number"==typeof t?t:w(T(t))}}}).call(this,n(6).Buffer)}}]);