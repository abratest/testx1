(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{1690:function(e,r,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),f=this&&this.__exportStar||function(e,r){for(var p in e)"default"===p||Object.prototype.hasOwnProperty.call(r,p)||n(r,e,p)};Object.defineProperty(r,"__esModule",{value:!0}),r.isHexString=r.getKeys=r.fromAscii=r.fromUtf8=r.toAscii=r.arrayContainsArray=r.getBinarySize=r.padToEven=r.stripHexPrefix=r.isHexPrefixed=void 0,f(t(957),r),f(t(958),r),f(t(1696),r),f(t(692),r),f(t(1697),r),f(t(303),r),f(t(1698),r),f(t(240),r),f(t(693),r);var o=t(368);Object.defineProperty(r,"isHexPrefixed",{enumerable:!0,get:function(){return o.isHexPrefixed}}),Object.defineProperty(r,"stripHexPrefix",{enumerable:!0,get:function(){return o.stripHexPrefix}}),Object.defineProperty(r,"padToEven",{enumerable:!0,get:function(){return o.padToEven}}),Object.defineProperty(r,"getBinarySize",{enumerable:!0,get:function(){return o.getBinarySize}}),Object.defineProperty(r,"arrayContainsArray",{enumerable:!0,get:function(){return o.arrayContainsArray}}),Object.defineProperty(r,"toAscii",{enumerable:!0,get:function(){return o.toAscii}}),Object.defineProperty(r,"fromUtf8",{enumerable:!0,get:function(){return o.fromUtf8}}),Object.defineProperty(r,"fromAscii",{enumerable:!0,get:function(){return o.fromAscii}}),Object.defineProperty(r,"getKeys",{enumerable:!0,get:function(){return o.getKeys}}),Object.defineProperty(r,"isHexString",{enumerable:!0,get:function(){return o.isHexString}})},1696:function(e,r,t){"use strict";(function(e){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Address=void 0;var f=n(t(60)),o=t(240),c=t(303),d=t(958),l=function(){function r(e){(0,f.default)(20===e.length,"Invalid address length"),this.buf=e}return r.zero=function(){return new r((0,c.zeros)(20))},r.fromString=function(e){return(0,f.default)((0,d.isValidAddress)(e),"Invalid address"),new r((0,c.toBuffer)(e))},r.fromPublicKey=function(t){return(0,f.default)(e.isBuffer(t),"Public key should be Buffer"),new r((0,d.pubToAddress)(t))},r.fromPrivateKey=function(t){return(0,f.default)(e.isBuffer(t),"Private key should be Buffer"),new r((0,d.privateToAddress)(t))},r.generate=function(t,n){return(0,f.default)(o.BN.isBN(n)),new r((0,d.generateAddress)(t.buf,n.toArrayLike(e)))},r.generate2=function(t,n,o){return(0,f.default)(e.isBuffer(n)),(0,f.default)(e.isBuffer(o)),new r((0,d.generateAddress2)(t.buf,n,o))},r.prototype.equals=function(address){return this.buf.equals(address.buf)},r.prototype.isZero=function(){return this.equals(r.zero())},r.prototype.isPrecompileOrSystemAddress=function(){var e=new o.BN(this.buf),r=new o.BN(0),t=new o.BN("ffff","hex");return e.gte(r)&&e.lte(t)},r.prototype.toString=function(){return"0x"+this.buf.toString("hex")},r.prototype.toBuffer=function(){return e.from(this.buf)},r}();r.Address=l}).call(this,t(6).Buffer)},1697:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.hashPersonalMessage=r.isValidSignature=r.fromRpcSig=r.toCompactSig=r.toRpcSig=r.ecrecover=r.ecsign=void 0;var n=t(99),f=t(240),o=t(303),c=t(692),d=t(531),l=t(693);function h(e,r){var t=(0,l.toType)(e,l.TypeOutput.BN);if(!r)return t.subn(27);var n=(0,l.toType)(r,l.TypeOutput.BN);return t.sub(n.muln(2).addn(35))}function y(e){var r=new f.BN(e);return r.eqn(0)||r.eqn(1)}r.ecsign=function(r,t,f){var o=(0,n.ecdsaSign)(r,t),c=o.signature,d=o.recid,h=e.from(c.slice(0,32)),s=e.from(c.slice(32,64));if(!f||"number"==typeof f){if(f&&!Number.isSafeInteger(f))throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");return{r:h,s:s,v:f?d+(2*f+35):d+27}}return{r:h,s:s,v:(0,l.toType)(f,l.TypeOutput.BN).muln(2).addn(35).addn(d).toArrayLike(e)}};r.ecrecover=function(r,t,f,s,c){var d=e.concat([(0,o.setLengthLeft)(f,32),(0,o.setLengthLeft)(s,32)],64),l=h(t,c);if(!y(l))throw new Error("Invalid signature v value");var v=(0,n.ecdsaRecover)(d,l.toNumber(),r);return e.from((0,n.publicKeyConvert)(v,!1).slice(1))};r.toRpcSig=function(r,t,s,n){if(!y(h(r,n)))throw new Error("Invalid signature v value");return(0,o.bufferToHex)(e.concat([(0,o.setLengthLeft)(t,32),(0,o.setLengthLeft)(s,32),(0,o.toBuffer)(r)]))};r.toCompactSig=function(r,t,s,n){if(!y(h(r,n)))throw new Error("Invalid signature v value");var f=(0,l.toType)(r,l.TypeOutput.Number),c=s;return(f>28&&f%2==1||1===f||28===f)&&((c=e.from(s))[0]|=128),(0,o.bufferToHex)(e.concat([(0,o.setLengthLeft)(t,32),(0,o.setLengthLeft)(c,32)]))};r.fromRpcSig=function(e){var r,s,t,n=(0,o.toBuffer)(e);if(n.length>=65)r=n.slice(0,32),s=n.slice(32,64),t=(0,o.bufferToInt)(n.slice(64));else{if(64!==n.length)throw new Error("Invalid signature length");r=n.slice(0,32),s=n.slice(32,64),t=(0,o.bufferToInt)(n.slice(32,33))>>7,s[0]&=127}return t<27&&(t+=27),{v:t,r:r,s:s}};r.isValidSignature=function(e,r,s,t,n){void 0===t&&(t=!0);var o=new f.BN("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),c=new f.BN("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",16);if(32!==r.length||32!==s.length)return!1;if(!y(h(e,n)))return!1;var d=new f.BN(r),l=new f.BN(s);return!(d.isZero()||d.gt(c)||l.isZero()||l.gt(c))&&(!t||1!==l.cmp(o))};r.hashPersonalMessage=function(r){(0,d.assertIsBuffer)(r);var t=e.from("Ethereum Signed Message:\n".concat(r.length),"utf-8");return(0,c.keccak)(e.concat([t,r]))}}).call(this,t(6).Buffer)},1698:function(e,r,t){"use strict";(function(e){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.defineProperties=void 0;var f=n(t(60)),o=t(368),c=t(240),d=t(303);r.defineProperties=function(r,t,data){if(r.raw=[],r._fields=[],r.toJSON=function(label){if(void 0===label&&(label=!1),label){var e={};return r._fields.forEach((function(t){e[t]="0x".concat(r[t].toString("hex"))})),e}return(0,d.baToJSON)(r.raw)},r.serialize=function(){return c.rlp.encode(r.raw)},t.forEach((function(t,i){function n(){return r.raw[i]}function o(n){"00"!==(n=(0,d.toBuffer)(n)).toString("hex")||t.allowZero||(n=e.allocUnsafe(0)),t.allowLess&&t.length?(n=(0,d.unpadBuffer)(n),(0,f.default)(t.length>=n.length,"The field ".concat(t.name," must not have more ").concat(t.length," bytes"))):t.allowZero&&0===n.length||!t.length||(0,f.default)(t.length===n.length,"The field ".concat(t.name," must have byte length of ").concat(t.length)),r.raw[i]=n}r._fields.push(t.name),Object.defineProperty(r,t.name,{enumerable:!0,configurable:!0,get:n,set:o}),t.default&&(r[t.name]=t.default),t.alias&&Object.defineProperty(r,t.alias,{enumerable:!1,configurable:!0,set:o,get:n})})),data)if("string"==typeof data&&(data=e.from((0,o.stripHexPrefix)(data),"hex")),e.isBuffer(data)&&(data=c.rlp.decode(data)),Array.isArray(data)){if(data.length>r._fields.length)throw new Error("wrong number of fields in data");data.forEach((function(e,i){r[r._fields[i]]=(0,d.toBuffer)(e)}))}else{if("object"!=typeof data)throw new Error("invalid data");var n=Object.keys(data);t.forEach((function(e){-1!==n.indexOf(e.name)&&(r[e.name]=data[e.name]),-1!==n.indexOf(e.alias)&&(r[e.alias]=data[e.alias])}))}}}).call(this,t(6).Buffer)},240:function(e,r,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),f=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(r,e,t);return f(r,e),r},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.rlp=r.BN=void 0;var d=c(t(1691));r.BN=d.default;var l=o(t(1693));r.rlp=l},303:function(e,r,t){"use strict";(function(e){var n=this&&this.__values||function(e){var s="function"==typeof Symbol&&Symbol.iterator,r=s&&e[s],i=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")},f=this&&this.__read||function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,f,i=t.call(e),o=[];try{for(;(void 0===r||r-->0)&&!(n=i.next()).done;)o.push(n.value)}catch(e){f={error:e}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(f)throw f.error}}return o};Object.defineProperty(r,"__esModule",{value:!0}),r.bufArrToArr=r.arrToBufArr=r.validateNoLeadingZeroes=r.baToJSON=r.toUtf8=r.addHexPrefix=r.toUnsigned=r.fromSigned=r.bufferToHex=r.bufferToInt=r.toBuffer=r.unpadHexString=r.unpadArray=r.unpadBuffer=r.setLengthRight=r.setLengthLeft=r.zeros=r.intToBuffer=r.intToHex=void 0;var o=t(240),c=t(368),d=t(531);r.intToHex=function(i){if(!Number.isSafeInteger(i)||i<0)throw new Error("Received an invalid integer type: ".concat(i));return"0x".concat(i.toString(16))};r.intToBuffer=function(i){var t=(0,r.intToHex)(i);return e.from((0,c.padToEven)(t.slice(2)),"hex")};r.zeros=function(r){return e.allocUnsafe(r).fill(0)};var l=function(e,t,n){var f=(0,r.zeros)(t);return n?e.length<t?(e.copy(f),f):e.slice(0,t):e.length<t?(e.copy(f,t-e.length),f):e.slice(-t)};r.setLengthLeft=function(e,r){return(0,d.assertIsBuffer)(e),l(e,r,!1)};r.setLengthRight=function(e,r){return(0,d.assertIsBuffer)(e),l(e,r,!0)};var h=function(a){for(var e=a[0];a.length>0&&"0"===e.toString();)e=(a=a.slice(1))[0];return a};r.unpadBuffer=function(a){return(0,d.assertIsBuffer)(a),h(a)};r.unpadArray=function(a){return(0,d.assertIsArray)(a),h(a)};r.unpadHexString=function(a){return(0,d.assertIsHexString)(a),a=(0,c.stripHexPrefix)(a),h(a)};r.toBuffer=function(t){if(null==t)return e.allocUnsafe(0);if(e.isBuffer(t))return e.from(t);if(Array.isArray(t)||t instanceof Uint8Array)return e.from(t);if("string"==typeof t){if(!(0,c.isHexString)(t))throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ".concat(t));return e.from((0,c.padToEven)((0,c.stripHexPrefix)(t)),"hex")}if("number"==typeof t)return(0,r.intToBuffer)(t);if(o.BN.isBN(t)){if(t.isNeg())throw new Error("Cannot convert negative BN to buffer. Given: ".concat(t));return t.toArrayLike(e)}if(t.toArray)return e.from(t.toArray());if(t.toBuffer)return e.from(t.toBuffer());throw new Error("invalid type")};r.bufferToInt=function(e){return new o.BN((0,r.toBuffer)(e)).toNumber()};r.bufferToHex=function(e){return"0x"+(e=(0,r.toBuffer)(e)).toString("hex")};r.fromSigned=function(e){return new o.BN(e).fromTwos(256)};r.toUnsigned=function(r){return e.from(r.toTwos(256).toArray())};r.addHexPrefix=function(e){return"string"!=typeof e||(0,c.isHexPrefixed)(e)?e:"0x"+e};r.toUtf8=function(r){if((r=(0,c.stripHexPrefix)(r)).length%2!=0)throw new Error("Invalid non-even hex string input for toUtf8() provided");return e.from(r.replace(/^(00)+|(00)+$/g,""),"hex").toString("utf8")};r.baToJSON=function(t){if(e.isBuffer(t))return"0x".concat(t.toString("hex"));if(t instanceof Array){for(var n=[],i=0;i<t.length;i++)n.push((0,r.baToJSON)(t[i]));return n}};r.validateNoLeadingZeroes=function(e){var r,t;try{for(var o=n(Object.entries(e)),c=o.next();!c.done;c=o.next()){var d=f(c.value,2),l=d[0],h=d[1];if(void 0!==h&&h.length>0&&0===h[0])throw new Error("".concat(l," cannot have leading zeroes, received: ").concat(h.toString("hex")))}}catch(e){r={error:e}}finally{try{c&&!c.done&&(t=o.return)&&t.call(o)}finally{if(r)throw r.error}}},r.arrToBufArr=function r(t){return Array.isArray(t)?t.map((function(a){return r(a)})):e.from(t)},r.bufArrToArr=function e(r){return Array.isArray(r)?r.map((function(a){return e(a)})):Uint8Array.from(null!=r?r:[])}}).call(this,t(6).Buffer)},368:function(e,r,t){"use strict";(function(e){function t(e){if("string"!=typeof e)throw new Error("[isHexPrefixed] input must be type 'string', received type ".concat(typeof e));return"0"===e[0]&&"x"===e[1]}Object.defineProperty(r,"__esModule",{value:!0}),r.isHexString=r.getKeys=r.fromAscii=r.fromUtf8=r.toAscii=r.arrayContainsArray=r.getBinarySize=r.padToEven=r.stripHexPrefix=r.isHexPrefixed=void 0,r.isHexPrefixed=t;function n(e){var a=e;if("string"!=typeof a)throw new Error("[padToEven] value must be type 'string', received ".concat(typeof a));return a.length%2&&(a="0".concat(a)),a}r.stripHexPrefix=function(e){if("string"!=typeof e)throw new Error("[stripHexPrefix] input must be type 'string', received ".concat(typeof e));return t(e)?e.slice(2):e},r.padToEven=n,r.getBinarySize=function(r){if("string"!=typeof r)throw new Error("[getBinarySize] method requires input type 'string', recieved ".concat(typeof r));return e.byteLength(r,"utf8")},r.arrayContainsArray=function(e,r,t){if(!0!==Array.isArray(e))throw new Error("[arrayContainsArray] method requires input 'superset' to be an array, got type '".concat(typeof e,"'"));if(!0!==Array.isArray(r))throw new Error("[arrayContainsArray] method requires input 'subset' to be an array, got type '".concat(typeof r,"'"));return r[t?"some":"every"]((function(r){return e.indexOf(r)>=0}))},r.toAscii=function(e){var r="",i=0,t=e.length;for("0x"===e.substring(0,2)&&(i=2);i<t;i+=2){var code=parseInt(e.substr(i,2),16);r+=String.fromCharCode(code)}return r},r.fromUtf8=function(r){var t=e.from(r,"utf8");return"0x".concat(n(t.toString("hex")).replace(/^0+|0+$/g,""))},r.fromAscii=function(e){for(var r="",i=0;i<e.length;i++){var t=e.charCodeAt(i).toString(16);r+=t.length<2?"0".concat(t):t}return"0x".concat(r)},r.getKeys=function(e,r,t){if(!Array.isArray(e))throw new Error("[getKeys] method expects input 'params' to be an array, got ".concat(typeof e));if("string"!=typeof r)throw new Error("[getKeys] method expects input 'key' to be type 'string', got ".concat(typeof e));for(var n=[],i=0;i<e.length;i++){var f=e[i][r];if(t&&!f)f="";else if("string"!=typeof f)throw new Error("invalid abi - expected type 'string', received ".concat(typeof f));n.push(f)}return n},r.isHexString=function(e,r){return!("string"!=typeof e||!e.match(/^0x[0-9A-Fa-f]*$/))&&(!r||e.length===2+2*r)}}).call(this,t(6).Buffer)},531:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.assertIsString=r.assertIsArray=r.assertIsBuffer=r.assertIsHexString=void 0;var n=t(368);r.assertIsHexString=function(input){if(!(0,n.isHexString)(input)){var e="This method only supports 0x-prefixed hex strings but input was: ".concat(input);throw new Error(e)}};r.assertIsBuffer=function(input){if(!e.isBuffer(input)){var r="This method only supports Buffer but input was: ".concat(input);throw new Error(r)}};r.assertIsArray=function(input){if(!Array.isArray(input)){var e="This method only supports number arrays but input was: ".concat(input);throw new Error(e)}};r.assertIsString=function(input){if("string"!=typeof input){var e="This method only supports strings but input was: ".concat(input);throw new Error(e)}}}).call(this,t(6).Buffer)},692:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.rlphash=r.ripemd160FromArray=r.ripemd160FromString=r.ripemd160=r.sha256FromArray=r.sha256FromString=r.sha256=r.keccakFromArray=r.keccakFromHexString=r.keccakFromString=r.keccak256=r.keccak=void 0;var n=t(182),f=t(126),o=t(240),c=t(303),d=t(531);r.keccak=function(a,e){switch(void 0===e&&(e=256),(0,d.assertIsBuffer)(a),e){case 224:return(0,n.keccak224)(a);case 256:return(0,n.keccak256)(a);case 384:return(0,n.keccak384)(a);case 512:return(0,n.keccak512)(a);default:throw new Error("Invald algorithm: keccak".concat(e))}};r.keccak256=function(a){return(0,r.keccak)(a)};r.keccakFromString=function(a,t){void 0===t&&(t=256),(0,d.assertIsString)(a);var n=e.from(a,"utf8");return(0,r.keccak)(n,t)};r.keccakFromHexString=function(a,e){return void 0===e&&(e=256),(0,d.assertIsHexString)(a),(0,r.keccak)((0,c.toBuffer)(a),e)};r.keccakFromArray=function(a,e){return void 0===e&&(e=256),(0,d.assertIsArray)(a),(0,r.keccak)((0,c.toBuffer)(a),e)};var l=function(a){return a=(0,c.toBuffer)(a),f("sha256").update(a).digest()};r.sha256=function(a){return(0,d.assertIsBuffer)(a),l(a)};r.sha256FromString=function(a){return(0,d.assertIsString)(a),l(a)};r.sha256FromArray=function(a){return(0,d.assertIsArray)(a),l(a)};var h=function(a,e){a=(0,c.toBuffer)(a);var r=f("rmd160").update(a).digest();return!0===e?(0,c.setLengthLeft)(r,32):r};r.ripemd160=function(a,e){return(0,d.assertIsBuffer)(a),h(a,e)};r.ripemd160FromString=function(a,e){return(0,d.assertIsString)(a),h(a,e)};r.ripemd160FromArray=function(a,e){return(0,d.assertIsArray)(a),h(a,e)};r.rlphash=function(a){return(0,r.keccak)(o.rlp.encode(a))}}).call(this,t(6).Buffer)},693:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.toType=r.TypeOutput=r.bnToRlp=r.bnToUnpaddedBuffer=r.bnToHex=void 0;var n,f=t(240),o=t(368),c=t(303);function d(r){return(0,c.unpadBuffer)(r.toArrayLike(e))}r.bnToHex=function(e){return"0x".concat(e.toString(16))},r.bnToUnpaddedBuffer=d,r.bnToRlp=function(e){return d(e)},function(e){e[e.Number=0]="Number",e[e.BN=1]="BN",e[e.Buffer=2]="Buffer",e[e.PrefixedHexString=3]="PrefixedHexString"}(n=r.TypeOutput||(r.TypeOutput={})),r.toType=function(input,e){if(null===input)return null;if(void 0!==input){if("string"==typeof input&&!(0,o.isHexString)(input))throw new Error("A string must be provided with a 0x-prefix, given: ".concat(input));if("number"==typeof input&&!Number.isSafeInteger(input))throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");var output=(0,c.toBuffer)(input);if(e===n.Buffer)return output;if(e===n.BN)return new f.BN(output);if(e===n.Number){var r=new f.BN(output),t=new f.BN(Number.MAX_SAFE_INTEGER.toString());if(r.gt(t))throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)");return r.toNumber()}return"0x".concat(output.toString("hex"))}}}).call(this,t(6).Buffer)},957:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.KECCAK256_RLP=r.KECCAK256_RLP_S=r.KECCAK256_RLP_ARRAY=r.KECCAK256_RLP_ARRAY_S=r.KECCAK256_NULL=r.KECCAK256_NULL_S=r.TWO_POW256=r.MAX_INTEGER=r.MAX_UINT64=void 0;var n=t(6),f=t(240);r.MAX_UINT64=new f.BN("ffffffffffffffff",16),r.MAX_INTEGER=new f.BN("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16),r.TWO_POW256=new f.BN("10000000000000000000000000000000000000000000000000000000000000000",16),r.KECCAK256_NULL_S="c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",r.KECCAK256_NULL=n.Buffer.from(r.KECCAK256_NULL_S,"hex"),r.KECCAK256_RLP_ARRAY_S="1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",r.KECCAK256_RLP_ARRAY=n.Buffer.from(r.KECCAK256_RLP_ARRAY_S,"hex"),r.KECCAK256_RLP_S="56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",r.KECCAK256_RLP=n.Buffer.from(r.KECCAK256_RLP_S,"hex")},958:function(e,r,t){"use strict";(function(e){var n=this&&this.__read||function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,f,i=t.call(e),o=[];try{for(;(void 0===r||r-->0)&&!(n=i.next()).done;)o.push(n.value)}catch(e){f={error:e}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(f)throw f.error}}return o},f=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.isZeroAddress=r.zeroAddress=r.importPublic=r.privateToAddress=r.privateToPublic=r.publicToAddress=r.pubToAddress=r.isValidPublic=r.isValidPrivate=r.generateAddress2=r.generateAddress=r.isValidChecksumAddress=r.toChecksumAddress=r.isValidAddress=r.Account=void 0;var o=f(t(60)),c=t(240),d=t(99),l=t(368),h=t(957),y=t(303),v=t(692),m=t(531),A=t(693),w=function(){function e(e,r,t,n){void 0===e&&(e=new c.BN(0)),void 0===r&&(r=new c.BN(0)),void 0===t&&(t=h.KECCAK256_RLP),void 0===n&&(n=h.KECCAK256_NULL),this.nonce=e,this.balance=r,this.stateRoot=t,this.codeHash=n,this._validate()}return e.fromAccountData=function(r){var t=r.nonce,n=r.balance,f=r.stateRoot,o=r.codeHash;return new e(t?new c.BN((0,y.toBuffer)(t)):void 0,n?new c.BN((0,y.toBuffer)(n)):void 0,f?(0,y.toBuffer)(f):void 0,o?(0,y.toBuffer)(o):void 0)},e.fromRlpSerializedAccount=function(e){var r=c.rlp.decode(e);if(!Array.isArray(r))throw new Error("Invalid serialized account input. Must be array");return this.fromValuesArray(r)},e.fromValuesArray=function(r){var t=n(r,4),f=t[0],o=t[1],d=t[2],l=t[3];return new e(new c.BN(f),new c.BN(o),d,l)},e.prototype._validate=function(){if(this.nonce.lt(new c.BN(0)))throw new Error("nonce must be greater than zero");if(this.balance.lt(new c.BN(0)))throw new Error("balance must be greater than zero");if(32!==this.stateRoot.length)throw new Error("stateRoot must have a length of 32");if(32!==this.codeHash.length)throw new Error("codeHash must have a length of 32")},e.prototype.raw=function(){return[(0,A.bnToUnpaddedBuffer)(this.nonce),(0,A.bnToUnpaddedBuffer)(this.balance),this.stateRoot,this.codeHash]},e.prototype.serialize=function(){return c.rlp.encode(this.raw())},e.prototype.isContract=function(){return!this.codeHash.equals(h.KECCAK256_NULL)},e.prototype.isEmpty=function(){return this.balance.isZero()&&this.nonce.isZero()&&this.codeHash.equals(h.KECCAK256_NULL)},e}();r.Account=w;r.isValidAddress=function(e){try{(0,m.assertIsString)(e)}catch(e){return!1}return/^0x[0-9a-fA-F]{40}$/.test(e)};r.toChecksumAddress=function(e,r){(0,m.assertIsHexString)(e);var address=(0,l.stripHexPrefix)(e).toLowerCase(),t="";r&&(t=(0,A.toType)(r,A.TypeOutput.BN).toString()+"0x");for(var n=(0,v.keccakFromString)(t+address).toString("hex"),f="0x",i=0;i<address.length;i++)parseInt(n[i],16)>=8?f+=address[i].toUpperCase():f+=address[i];return f};r.isValidChecksumAddress=function(e,t){return(0,r.isValidAddress)(e)&&(0,r.toChecksumAddress)(e,t)===e};r.generateAddress=function(r,t){(0,m.assertIsBuffer)(r),(0,m.assertIsBuffer)(t);var n=new c.BN(t);return n.isZero()?(0,v.rlphash)([r,null]).slice(-20):(0,v.rlphash)([r,e.from(n.toArray())]).slice(-20)};r.generateAddress2=function(r,t,n){return(0,m.assertIsBuffer)(r),(0,m.assertIsBuffer)(t),(0,m.assertIsBuffer)(n),(0,o.default)(20===r.length),(0,o.default)(32===t.length),(0,v.keccak256)(e.concat([e.from("ff","hex"),r,t,(0,v.keccak256)(n)])).slice(-20)};r.isValidPrivate=function(e){return(0,d.privateKeyVerify)(e)};r.isValidPublic=function(r,t){return void 0===t&&(t=!1),(0,m.assertIsBuffer)(r),64===r.length?(0,d.publicKeyVerify)(e.concat([e.from([4]),r])):!!t&&(0,d.publicKeyVerify)(r)};r.pubToAddress=function(r,t){return void 0===t&&(t=!1),(0,m.assertIsBuffer)(r),t&&64!==r.length&&(r=e.from((0,d.publicKeyConvert)(r,!1).slice(1))),(0,o.default)(64===r.length),(0,v.keccak)(r).slice(-20)},r.publicToAddress=r.pubToAddress;r.privateToPublic=function(r){return(0,m.assertIsBuffer)(r),e.from((0,d.publicKeyCreate)(r,!1)).slice(1)};r.privateToAddress=function(e){return(0,r.publicToAddress)((0,r.privateToPublic)(e))};r.importPublic=function(r){return(0,m.assertIsBuffer)(r),64!==r.length&&(r=e.from((0,d.publicKeyConvert)(r,!1).slice(1))),r};r.zeroAddress=function(){var e=(0,y.zeros)(20);return(0,y.bufferToHex)(e)};r.isZeroAddress=function(e){try{(0,m.assertIsString)(e)}catch(e){return!1}return(0,r.zeroAddress)()===e}}).call(this,t(6).Buffer)}}]);