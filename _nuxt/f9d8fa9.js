(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{1204:function(e,r){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var n=new Uint8Array(16);e.exports=function(){return t(n),n}}else{var o=new Array(16);e.exports=function(){for(var e,i=0;i<16;i++)0==(3&i)&&(e=4294967296*Math.random()),o[i]=e>>>((3&i)<<3)&255;return o}}},1205:function(e,r){for(var t=[],i=0;i<256;++i)t[i]=(i+256).toString(16).substr(1);e.exports=function(e,r){var i=r||0,n=t;return[n[e[i++]],n[e[i++]],n[e[i++]],n[e[i++]],"-",n[e[i++]],n[e[i++]],"-",n[e[i++]],n[e[i++]],"-",n[e[i++]],n[e[i++]],"-",n[e[i++]],n[e[i++]],n[e[i++]],n[e[i++]],n[e[i++]],n[e[i++]]].join("")}},1206:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.KECCAK256_RLP=r.KECCAK256_RLP_S=r.KECCAK256_RLP_ARRAY=r.KECCAK256_RLP_ARRAY_S=r.KECCAK256_NULL=r.KECCAK256_NULL_S=r.TWO_POW256=r.MAX_INTEGER=r.MAX_UINT64=void 0;var n=t(6),o=t(248);r.MAX_UINT64=new o.BN("ffffffffffffffff",16),r.MAX_INTEGER=new o.BN("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16),r.TWO_POW256=new o.BN("10000000000000000000000000000000000000000000000000000000000000000",16),r.KECCAK256_NULL_S="c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",r.KECCAK256_NULL=n.Buffer.from(r.KECCAK256_NULL_S,"hex"),r.KECCAK256_RLP_ARRAY_S="1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",r.KECCAK256_RLP_ARRAY=n.Buffer.from(r.KECCAK256_RLP_ARRAY_S,"hex"),r.KECCAK256_RLP_S="56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",r.KECCAK256_RLP=n.Buffer.from(r.KECCAK256_RLP_S,"hex")},1208:function(e,r,t){"use strict";(function(e){var n=this&&this.__read||function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,o,i=t.call(e),f=[];try{for(;(void 0===r||r-->0)&&!(n=i.next()).done;)f.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return f},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.isZeroAddress=r.zeroAddress=r.importPublic=r.privateToAddress=r.privateToPublic=r.publicToAddress=r.pubToAddress=r.isValidPublic=r.isValidPrivate=r.generateAddress2=r.generateAddress=r.isValidChecksumAddress=r.toChecksumAddress=r.isValidAddress=r.Account=void 0;var f=o(t(60)),c=t(248),d=t(99),l=t(382),h=t(1206),v=t(319),y=t(741),m=t(557),w=t(742),A=function(){function e(e,r,t,n){void 0===e&&(e=new c.BN(0)),void 0===r&&(r=new c.BN(0)),void 0===t&&(t=h.KECCAK256_RLP),void 0===n&&(n=h.KECCAK256_NULL),this.nonce=e,this.balance=r,this.stateRoot=t,this.codeHash=n,this._validate()}return e.fromAccountData=function(r){var t=r.nonce,n=r.balance,o=r.stateRoot,f=r.codeHash;return new e(t?new c.BN((0,v.toBuffer)(t)):void 0,n?new c.BN((0,v.toBuffer)(n)):void 0,o?(0,v.toBuffer)(o):void 0,f?(0,v.toBuffer)(f):void 0)},e.fromRlpSerializedAccount=function(e){var r=c.rlp.decode(e);if(!Array.isArray(r))throw new Error("Invalid serialized account input. Must be array");return this.fromValuesArray(r)},e.fromValuesArray=function(r){var t=n(r,4),o=t[0],f=t[1],d=t[2],l=t[3];return new e(new c.BN(o),new c.BN(f),d,l)},e.prototype._validate=function(){if(this.nonce.lt(new c.BN(0)))throw new Error("nonce must be greater than zero");if(this.balance.lt(new c.BN(0)))throw new Error("balance must be greater than zero");if(32!==this.stateRoot.length)throw new Error("stateRoot must have a length of 32");if(32!==this.codeHash.length)throw new Error("codeHash must have a length of 32")},e.prototype.raw=function(){return[(0,w.bnToUnpaddedBuffer)(this.nonce),(0,w.bnToUnpaddedBuffer)(this.balance),this.stateRoot,this.codeHash]},e.prototype.serialize=function(){return c.rlp.encode(this.raw())},e.prototype.isContract=function(){return!this.codeHash.equals(h.KECCAK256_NULL)},e.prototype.isEmpty=function(){return this.balance.isZero()&&this.nonce.isZero()&&this.codeHash.equals(h.KECCAK256_NULL)},e}();r.Account=A;r.isValidAddress=function(e){try{(0,m.assertIsString)(e)}catch(e){return!1}return/^0x[0-9a-fA-F]{40}$/.test(e)};r.toChecksumAddress=function(e,r){(0,m.assertIsHexString)(e);var address=(0,l.stripHexPrefix)(e).toLowerCase(),t="";r&&(t=(0,w.toType)(r,w.TypeOutput.BN).toString()+"0x");for(var n=(0,y.keccakFromString)(t+address).toString("hex"),o="0x",i=0;i<address.length;i++)parseInt(n[i],16)>=8?o+=address[i].toUpperCase():o+=address[i];return o};r.isValidChecksumAddress=function(e,t){return(0,r.isValidAddress)(e)&&(0,r.toChecksumAddress)(e,t)===e};r.generateAddress=function(r,t){(0,m.assertIsBuffer)(r),(0,m.assertIsBuffer)(t);var n=new c.BN(t);return n.isZero()?(0,y.rlphash)([r,null]).slice(-20):(0,y.rlphash)([r,e.from(n.toArray())]).slice(-20)};r.generateAddress2=function(r,t,n){return(0,m.assertIsBuffer)(r),(0,m.assertIsBuffer)(t),(0,m.assertIsBuffer)(n),(0,f.default)(20===r.length),(0,f.default)(32===t.length),(0,y.keccak256)(e.concat([e.from("ff","hex"),r,t,(0,y.keccak256)(n)])).slice(-20)};r.isValidPrivate=function(e){return(0,d.privateKeyVerify)(e)};r.isValidPublic=function(r,t){return void 0===t&&(t=!1),(0,m.assertIsBuffer)(r),64===r.length?(0,d.publicKeyVerify)(e.concat([e.from([4]),r])):!!t&&(0,d.publicKeyVerify)(r)};r.pubToAddress=function(r,t){return void 0===t&&(t=!1),(0,m.assertIsBuffer)(r),t&&64!==r.length&&(r=e.from((0,d.publicKeyConvert)(r,!1).slice(1))),(0,f.default)(64===r.length),(0,y.keccak)(r).slice(-20)},r.publicToAddress=r.pubToAddress;r.privateToPublic=function(r){return(0,m.assertIsBuffer)(r),e.from((0,d.publicKeyCreate)(r,!1)).slice(1)};r.privateToAddress=function(e){return(0,r.publicToAddress)((0,r.privateToPublic)(e))};r.importPublic=function(r){return(0,m.assertIsBuffer)(r),64!==r.length&&(r=e.from((0,d.publicKeyConvert)(r,!1).slice(1))),r};r.zeroAddress=function(){var e=(0,v.zeros)(20);return(0,v.bufferToHex)(e)};r.isZeroAddress=function(e){try{(0,m.assertIsString)(e)}catch(e){return!1}return(0,r.zeroAddress)()===e}}).call(this,t(6).Buffer)},2203:function(e,r,t){var n=t(2204),o=t(2205),f=o;f.v1=n,f.v4=o,e.exports=f},2204:function(e,r,t){var n,o,f=t(1204),c=t(1205),d=0,l=0;e.exports=function(e,r,t){var i=r&&t||0,b=r||[],h=(e=e||{}).node||n,v=void 0!==e.clockseq?e.clockseq:o;if(null==h||null==v){var y=f();null==h&&(h=n=[1|y[0],y[1],y[2],y[3],y[4],y[5]]),null==v&&(v=o=16383&(y[6]<<8|y[7]))}var m=void 0!==e.msecs?e.msecs:(new Date).getTime(),w=void 0!==e.nsecs?e.nsecs:l+1,dt=m-d+(w-l)/1e4;if(dt<0&&void 0===e.clockseq&&(v=v+1&16383),(dt<0||m>d)&&void 0===e.nsecs&&(w=0),w>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");d=m,l=w,o=v;var A=(1e4*(268435455&(m+=122192928e5))+w)%4294967296;b[i++]=A>>>24&255,b[i++]=A>>>16&255,b[i++]=A>>>8&255,b[i++]=255&A;var x=m/4294967296*1e4&268435455;b[i++]=x>>>8&255,b[i++]=255&x,b[i++]=x>>>24&15|16,b[i++]=x>>>16&255,b[i++]=v>>>8|128,b[i++]=255&v;for(var B=0;B<6;++B)b[i+B]=h[B];return r||c(b)}},2205:function(e,r,t){var n=t(1204),o=t(1205);e.exports=function(e,r,t){var i=r&&t||0;"string"==typeof e&&(r="binary"===e?new Array(16):null,e=null);var f=(e=e||{}).random||(e.rng||n)();if(f[6]=15&f[6]|64,f[8]=63&f[8]|128,r)for(var c=0;c<16;++c)r[i+c]=f[c];return r||o(f)}},2206:function(e,r,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),o=this&&this.__exportStar||function(e,r){for(var p in e)"default"===p||Object.prototype.hasOwnProperty.call(r,p)||n(r,e,p)};Object.defineProperty(r,"__esModule",{value:!0}),r.isHexString=r.getKeys=r.fromAscii=r.fromUtf8=r.toAscii=r.arrayContainsArray=r.getBinarySize=r.padToEven=r.stripHexPrefix=r.isHexPrefixed=void 0,o(t(1206),r),o(t(1208),r),o(t(2209),r),o(t(741),r),o(t(2210),r),o(t(319),r),o(t(2211),r),o(t(248),r),o(t(742),r);var f=t(382);Object.defineProperty(r,"isHexPrefixed",{enumerable:!0,get:function(){return f.isHexPrefixed}}),Object.defineProperty(r,"stripHexPrefix",{enumerable:!0,get:function(){return f.stripHexPrefix}}),Object.defineProperty(r,"padToEven",{enumerable:!0,get:function(){return f.padToEven}}),Object.defineProperty(r,"getBinarySize",{enumerable:!0,get:function(){return f.getBinarySize}}),Object.defineProperty(r,"arrayContainsArray",{enumerable:!0,get:function(){return f.arrayContainsArray}}),Object.defineProperty(r,"toAscii",{enumerable:!0,get:function(){return f.toAscii}}),Object.defineProperty(r,"fromUtf8",{enumerable:!0,get:function(){return f.fromUtf8}}),Object.defineProperty(r,"fromAscii",{enumerable:!0,get:function(){return f.fromAscii}}),Object.defineProperty(r,"getKeys",{enumerable:!0,get:function(){return f.getKeys}}),Object.defineProperty(r,"isHexString",{enumerable:!0,get:function(){return f.isHexString}})},2208:function(e,r,t){"use strict";(function(e){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.getLength=r.decode=r.encode=void 0;var o=n(t(1207));function f(e,base){if("0"===e[0]&&"0"===e[1])throw new Error("invalid RLP: extra zeros");return parseInt(e,base)}function c(r,t){if(r<56)return e.from([r+t]);var n=l(r),o=l(t+55+n.length/2);return e.from(o+n,"hex")}function d(e){return"0x"===e.slice(0,2)}function l(e){if(e<0)throw new Error("Invalid integer as argument, must be unsigned!");var r=e.toString(16);return r.length%2?"0"+r:r}function h(r){if(!e.isBuffer(r)){if("string"==typeof r)return d(r)?e.from((a="string"!=typeof(n=r)?n:d(n)?n.slice(2):n).length%2?"0"+a:a,"hex"):e.from(r);if("number"==typeof r||"bigint"==typeof r)return r?(t=l(r),e.from(t,"hex")):e.from([]);if(null==r)return e.from([]);if(r instanceof Uint8Array)return e.from(r);if(o.default.isBN(r))return e.from(r.toArray());throw new Error("invalid type")}var t,a,n;return r}r.encode=function r(input){if(Array.isArray(input)){for(var output=[],i=0;i<input.length;i++)output.push(r(input[i]));var t=e.concat(output);return e.concat([c(t.length,192),t])}var n=h(input);return 1===n.length&&n[0]<128?n:e.concat([c(n.length,128),n])},r.decode=function(input,r){if(void 0===r&&(r=!1),!input||0===input.length)return e.from([]);var t=function r(input){var t,n,data,o,c,d=[],l=input[0];if(l<=127)return{data:input.slice(0,1),remainder:input.slice(1)};if(l<=183){if(t=l-127,data=128===l?e.from([]):input.slice(1,t),2===t&&data[0]<128)throw new Error("invalid rlp encoding: byte must be less 0x80");return{data:data,remainder:input.slice(t)}}if(l<=191){if(n=l-182,input.length-1<n)throw new Error("invalid RLP: not enough bytes for string length");if((t=f(input.slice(1,n).toString("hex"),16))<=55)throw new Error("invalid RLP: expected string length to be greater than 55");if((data=input.slice(n,t+n)).length<t)throw new Error("invalid RLP: not enough bytes for string");return{data:data,remainder:input.slice(t+n)}}if(l<=247){for(t=l-191,o=input.slice(1,t);o.length;)c=r(o),d.push(c.data),o=c.remainder;return{data:d,remainder:input.slice(t)}}n=l-246,t=f(input.slice(1,n).toString("hex"),16);var h=n+t;if(h>input.length)throw new Error("invalid rlp: total length is larger than the data");if(0===(o=input.slice(n,h)).length)throw new Error("invalid rlp, List has a invalid length");for(;o.length;)c=r(o),d.push(c.data),o=c.remainder;return{data:d,remainder:input.slice(h)}}(h(input));if(r)return t;if(0!==t.remainder.length)throw new Error("invalid remainder");return t.data},r.getLength=function(input){if(!input||0===input.length)return e.from([]);var r=h(input),t=r[0];if(t<=127)return r.length;if(t<=183)return t-127;if(t<=191)return t-182;if(t<=247)return t-191;var n=t-246;return n+f(r.slice(1,n).toString("hex"),16)}}).call(this,t(6).Buffer)},2209:function(e,r,t){"use strict";(function(e){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Address=void 0;var o=n(t(60)),f=t(248),c=t(319),d=t(1208),l=function(){function r(e){(0,o.default)(20===e.length,"Invalid address length"),this.buf=e}return r.zero=function(){return new r((0,c.zeros)(20))},r.fromString=function(e){return(0,o.default)((0,d.isValidAddress)(e),"Invalid address"),new r((0,c.toBuffer)(e))},r.fromPublicKey=function(t){return(0,o.default)(e.isBuffer(t),"Public key should be Buffer"),new r((0,d.pubToAddress)(t))},r.fromPrivateKey=function(t){return(0,o.default)(e.isBuffer(t),"Private key should be Buffer"),new r((0,d.privateToAddress)(t))},r.generate=function(t,n){return(0,o.default)(f.BN.isBN(n)),new r((0,d.generateAddress)(t.buf,n.toArrayLike(e)))},r.generate2=function(t,n,f){return(0,o.default)(e.isBuffer(n)),(0,o.default)(e.isBuffer(f)),new r((0,d.generateAddress2)(t.buf,n,f))},r.prototype.equals=function(address){return this.buf.equals(address.buf)},r.prototype.isZero=function(){return this.equals(r.zero())},r.prototype.isPrecompileOrSystemAddress=function(){var e=new f.BN(this.buf),r=new f.BN(0),t=new f.BN("ffff","hex");return e.gte(r)&&e.lte(t)},r.prototype.toString=function(){return"0x"+this.buf.toString("hex")},r.prototype.toBuffer=function(){return e.from(this.buf)},r}();r.Address=l}).call(this,t(6).Buffer)},2210:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.hashPersonalMessage=r.isValidSignature=r.fromRpcSig=r.toCompactSig=r.toRpcSig=r.ecrecover=r.ecsign=void 0;var n=t(99),o=t(248),f=t(319),c=t(741),d=t(557),l=t(742);function h(e,r){var t=(0,l.toType)(e,l.TypeOutput.BN);if(!r)return t.subn(27);var n=(0,l.toType)(r,l.TypeOutput.BN);return t.sub(n.muln(2).addn(35))}function v(e){var r=new o.BN(e);return r.eqn(0)||r.eqn(1)}r.ecsign=function(r,t,o){var f=(0,n.ecdsaSign)(r,t),c=f.signature,d=f.recid,h=e.from(c.slice(0,32)),s=e.from(c.slice(32,64));if(!o||"number"==typeof o){if(o&&!Number.isSafeInteger(o))throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");return{r:h,s:s,v:o?d+(2*o+35):d+27}}return{r:h,s:s,v:(0,l.toType)(o,l.TypeOutput.BN).muln(2).addn(35).addn(d).toArrayLike(e)}};r.ecrecover=function(r,t,o,s,c){var d=e.concat([(0,f.setLengthLeft)(o,32),(0,f.setLengthLeft)(s,32)],64),l=h(t,c);if(!v(l))throw new Error("Invalid signature v value");var y=(0,n.ecdsaRecover)(d,l.toNumber(),r);return e.from((0,n.publicKeyConvert)(y,!1).slice(1))};r.toRpcSig=function(r,t,s,n){if(!v(h(r,n)))throw new Error("Invalid signature v value");return(0,f.bufferToHex)(e.concat([(0,f.setLengthLeft)(t,32),(0,f.setLengthLeft)(s,32),(0,f.toBuffer)(r)]))};r.toCompactSig=function(r,t,s,n){if(!v(h(r,n)))throw new Error("Invalid signature v value");var o=(0,l.toType)(r,l.TypeOutput.Number),c=s;return(o>28&&o%2==1||1===o||28===o)&&((c=e.from(s))[0]|=128),(0,f.bufferToHex)(e.concat([(0,f.setLengthLeft)(t,32),(0,f.setLengthLeft)(c,32)]))};r.fromRpcSig=function(e){var r,s,t,n=(0,f.toBuffer)(e);if(n.length>=65)r=n.slice(0,32),s=n.slice(32,64),t=(0,f.bufferToInt)(n.slice(64));else{if(64!==n.length)throw new Error("Invalid signature length");r=n.slice(0,32),s=n.slice(32,64),t=(0,f.bufferToInt)(n.slice(32,33))>>7,s[0]&=127}return t<27&&(t+=27),{v:t,r:r,s:s}};r.isValidSignature=function(e,r,s,t,n){void 0===t&&(t=!0);var f=new o.BN("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),c=new o.BN("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",16);if(32!==r.length||32!==s.length)return!1;if(!v(h(e,n)))return!1;var d=new o.BN(r),l=new o.BN(s);return!(d.isZero()||d.gt(c)||l.isZero()||l.gt(c))&&(!t||1!==l.cmp(f))};r.hashPersonalMessage=function(r){(0,d.assertIsBuffer)(r);var t=e.from("Ethereum Signed Message:\n".concat(r.length),"utf-8");return(0,c.keccak)(e.concat([t,r]))}}).call(this,t(6).Buffer)},2211:function(e,r,t){"use strict";(function(e){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.defineProperties=void 0;var o=n(t(60)),f=t(382),c=t(248),d=t(319);r.defineProperties=function(r,t,data){if(r.raw=[],r._fields=[],r.toJSON=function(label){if(void 0===label&&(label=!1),label){var e={};return r._fields.forEach((function(t){e[t]="0x".concat(r[t].toString("hex"))})),e}return(0,d.baToJSON)(r.raw)},r.serialize=function(){return c.rlp.encode(r.raw)},t.forEach((function(t,i){function n(){return r.raw[i]}function f(n){"00"!==(n=(0,d.toBuffer)(n)).toString("hex")||t.allowZero||(n=e.allocUnsafe(0)),t.allowLess&&t.length?(n=(0,d.unpadBuffer)(n),(0,o.default)(t.length>=n.length,"The field ".concat(t.name," must not have more ").concat(t.length," bytes"))):t.allowZero&&0===n.length||!t.length||(0,o.default)(t.length===n.length,"The field ".concat(t.name," must have byte length of ").concat(t.length)),r.raw[i]=n}r._fields.push(t.name),Object.defineProperty(r,t.name,{enumerable:!0,configurable:!0,get:n,set:f}),t.default&&(r[t.name]=t.default),t.alias&&Object.defineProperty(r,t.alias,{enumerable:!1,configurable:!0,set:f,get:n})})),data)if("string"==typeof data&&(data=e.from((0,f.stripHexPrefix)(data),"hex")),e.isBuffer(data)&&(data=c.rlp.decode(data)),Array.isArray(data)){if(data.length>r._fields.length)throw new Error("wrong number of fields in data");data.forEach((function(e,i){r[r._fields[i]]=(0,d.toBuffer)(e)}))}else{if("object"!=typeof data)throw new Error("invalid data");var n=Object.keys(data);t.forEach((function(e){-1!==n.indexOf(e.name)&&(r[e.name]=data[e.name]),-1!==n.indexOf(e.alias)&&(r[e.alias]=data[e.alias])}))}}}).call(this,t(6).Buffer)},248:function(e,r,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),o=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),f=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(r,e,t);return o(r,e),r},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.rlp=r.BN=void 0;var d=c(t(1207));r.BN=d.default;var l=f(t(2208));r.rlp=l},319:function(e,r,t){"use strict";(function(e){var n=this&&this.__values||function(e){var s="function"==typeof Symbol&&Symbol.iterator,r=s&&e[s],i=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")},o=this&&this.__read||function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,o,i=t.call(e),f=[];try{for(;(void 0===r||r-->0)&&!(n=i.next()).done;)f.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return f};Object.defineProperty(r,"__esModule",{value:!0}),r.bufArrToArr=r.arrToBufArr=r.validateNoLeadingZeroes=r.baToJSON=r.toUtf8=r.addHexPrefix=r.toUnsigned=r.fromSigned=r.bufferToHex=r.bufferToInt=r.toBuffer=r.unpadHexString=r.unpadArray=r.unpadBuffer=r.setLengthRight=r.setLengthLeft=r.zeros=r.intToBuffer=r.intToHex=void 0;var f=t(248),c=t(382),d=t(557);r.intToHex=function(i){if(!Number.isSafeInteger(i)||i<0)throw new Error("Received an invalid integer type: ".concat(i));return"0x".concat(i.toString(16))};r.intToBuffer=function(i){var t=(0,r.intToHex)(i);return e.from((0,c.padToEven)(t.slice(2)),"hex")};r.zeros=function(r){return e.allocUnsafe(r).fill(0)};var l=function(e,t,n){var o=(0,r.zeros)(t);return n?e.length<t?(e.copy(o),o):e.slice(0,t):e.length<t?(e.copy(o,t-e.length),o):e.slice(-t)};r.setLengthLeft=function(e,r){return(0,d.assertIsBuffer)(e),l(e,r,!1)};r.setLengthRight=function(e,r){return(0,d.assertIsBuffer)(e),l(e,r,!0)};var h=function(a){for(var e=a[0];a.length>0&&"0"===e.toString();)e=(a=a.slice(1))[0];return a};r.unpadBuffer=function(a){return(0,d.assertIsBuffer)(a),h(a)};r.unpadArray=function(a){return(0,d.assertIsArray)(a),h(a)};r.unpadHexString=function(a){return(0,d.assertIsHexString)(a),a=(0,c.stripHexPrefix)(a),h(a)};r.toBuffer=function(t){if(null==t)return e.allocUnsafe(0);if(e.isBuffer(t))return e.from(t);if(Array.isArray(t)||t instanceof Uint8Array)return e.from(t);if("string"==typeof t){if(!(0,c.isHexString)(t))throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ".concat(t));return e.from((0,c.padToEven)((0,c.stripHexPrefix)(t)),"hex")}if("number"==typeof t)return(0,r.intToBuffer)(t);if(f.BN.isBN(t)){if(t.isNeg())throw new Error("Cannot convert negative BN to buffer. Given: ".concat(t));return t.toArrayLike(e)}if(t.toArray)return e.from(t.toArray());if(t.toBuffer)return e.from(t.toBuffer());throw new Error("invalid type")};r.bufferToInt=function(e){return new f.BN((0,r.toBuffer)(e)).toNumber()};r.bufferToHex=function(e){return"0x"+(e=(0,r.toBuffer)(e)).toString("hex")};r.fromSigned=function(e){return new f.BN(e).fromTwos(256)};r.toUnsigned=function(r){return e.from(r.toTwos(256).toArray())};r.addHexPrefix=function(e){return"string"!=typeof e||(0,c.isHexPrefixed)(e)?e:"0x"+e};r.toUtf8=function(r){if((r=(0,c.stripHexPrefix)(r)).length%2!=0)throw new Error("Invalid non-even hex string input for toUtf8() provided");return e.from(r.replace(/^(00)+|(00)+$/g,""),"hex").toString("utf8")};r.baToJSON=function(t){if(e.isBuffer(t))return"0x".concat(t.toString("hex"));if(t instanceof Array){for(var n=[],i=0;i<t.length;i++)n.push((0,r.baToJSON)(t[i]));return n}};r.validateNoLeadingZeroes=function(e){var r,t;try{for(var f=n(Object.entries(e)),c=f.next();!c.done;c=f.next()){var d=o(c.value,2),l=d[0],h=d[1];if(void 0!==h&&h.length>0&&0===h[0])throw new Error("".concat(l," cannot have leading zeroes, received: ").concat(h.toString("hex")))}}catch(e){r={error:e}}finally{try{c&&!c.done&&(t=f.return)&&t.call(f)}finally{if(r)throw r.error}}},r.arrToBufArr=function r(t){return Array.isArray(t)?t.map((function(a){return r(a)})):e.from(t)},r.bufArrToArr=function e(r){return Array.isArray(r)?r.map((function(a){return e(a)})):Uint8Array.from(null!=r?r:[])}}).call(this,t(6).Buffer)},382:function(e,r,t){"use strict";(function(e){function t(e){if("string"!=typeof e)throw new Error("[isHexPrefixed] input must be type 'string', received type ".concat(typeof e));return"0"===e[0]&&"x"===e[1]}Object.defineProperty(r,"__esModule",{value:!0}),r.isHexString=r.getKeys=r.fromAscii=r.fromUtf8=r.toAscii=r.arrayContainsArray=r.getBinarySize=r.padToEven=r.stripHexPrefix=r.isHexPrefixed=void 0,r.isHexPrefixed=t;function n(e){var a=e;if("string"!=typeof a)throw new Error("[padToEven] value must be type 'string', received ".concat(typeof a));return a.length%2&&(a="0".concat(a)),a}r.stripHexPrefix=function(e){if("string"!=typeof e)throw new Error("[stripHexPrefix] input must be type 'string', received ".concat(typeof e));return t(e)?e.slice(2):e},r.padToEven=n,r.getBinarySize=function(r){if("string"!=typeof r)throw new Error("[getBinarySize] method requires input type 'string', recieved ".concat(typeof r));return e.byteLength(r,"utf8")},r.arrayContainsArray=function(e,r,t){if(!0!==Array.isArray(e))throw new Error("[arrayContainsArray] method requires input 'superset' to be an array, got type '".concat(typeof e,"'"));if(!0!==Array.isArray(r))throw new Error("[arrayContainsArray] method requires input 'subset' to be an array, got type '".concat(typeof r,"'"));return r[t?"some":"every"]((function(r){return e.indexOf(r)>=0}))},r.toAscii=function(e){var r="",i=0,t=e.length;for("0x"===e.substring(0,2)&&(i=2);i<t;i+=2){var code=parseInt(e.substr(i,2),16);r+=String.fromCharCode(code)}return r},r.fromUtf8=function(r){var t=e.from(r,"utf8");return"0x".concat(n(t.toString("hex")).replace(/^0+|0+$/g,""))},r.fromAscii=function(e){for(var r="",i=0;i<e.length;i++){var t=e.charCodeAt(i).toString(16);r+=t.length<2?"0".concat(t):t}return"0x".concat(r)},r.getKeys=function(e,r,t){if(!Array.isArray(e))throw new Error("[getKeys] method expects input 'params' to be an array, got ".concat(typeof e));if("string"!=typeof r)throw new Error("[getKeys] method expects input 'key' to be type 'string', got ".concat(typeof e));for(var n=[],i=0;i<e.length;i++){var o=e[i][r];if(t&&!o)o="";else if("string"!=typeof o)throw new Error("invalid abi - expected type 'string', received ".concat(typeof o));n.push(o)}return n},r.isHexString=function(e,r){return!("string"!=typeof e||!e.match(/^0x[0-9A-Fa-f]*$/))&&(!r||e.length===2+2*r)}}).call(this,t(6).Buffer)},557:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.assertIsString=r.assertIsArray=r.assertIsBuffer=r.assertIsHexString=void 0;var n=t(382);r.assertIsHexString=function(input){if(!(0,n.isHexString)(input)){var e="This method only supports 0x-prefixed hex strings but input was: ".concat(input);throw new Error(e)}};r.assertIsBuffer=function(input){if(!e.isBuffer(input)){var r="This method only supports Buffer but input was: ".concat(input);throw new Error(r)}};r.assertIsArray=function(input){if(!Array.isArray(input)){var e="This method only supports number arrays but input was: ".concat(input);throw new Error(e)}};r.assertIsString=function(input){if("string"!=typeof input){var e="This method only supports strings but input was: ".concat(input);throw new Error(e)}}}).call(this,t(6).Buffer)},741:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.rlphash=r.ripemd160FromArray=r.ripemd160FromString=r.ripemd160=r.sha256FromArray=r.sha256FromString=r.sha256=r.keccakFromArray=r.keccakFromHexString=r.keccakFromString=r.keccak256=r.keccak=void 0;var n=t(182),o=t(126),f=t(248),c=t(319),d=t(557);r.keccak=function(a,e){switch(void 0===e&&(e=256),(0,d.assertIsBuffer)(a),e){case 224:return(0,n.keccak224)(a);case 256:return(0,n.keccak256)(a);case 384:return(0,n.keccak384)(a);case 512:return(0,n.keccak512)(a);default:throw new Error("Invald algorithm: keccak".concat(e))}};r.keccak256=function(a){return(0,r.keccak)(a)};r.keccakFromString=function(a,t){void 0===t&&(t=256),(0,d.assertIsString)(a);var n=e.from(a,"utf8");return(0,r.keccak)(n,t)};r.keccakFromHexString=function(a,e){return void 0===e&&(e=256),(0,d.assertIsHexString)(a),(0,r.keccak)((0,c.toBuffer)(a),e)};r.keccakFromArray=function(a,e){return void 0===e&&(e=256),(0,d.assertIsArray)(a),(0,r.keccak)((0,c.toBuffer)(a),e)};var l=function(a){return a=(0,c.toBuffer)(a),o("sha256").update(a).digest()};r.sha256=function(a){return(0,d.assertIsBuffer)(a),l(a)};r.sha256FromString=function(a){return(0,d.assertIsString)(a),l(a)};r.sha256FromArray=function(a){return(0,d.assertIsArray)(a),l(a)};var h=function(a,e){a=(0,c.toBuffer)(a);var r=o("rmd160").update(a).digest();return!0===e?(0,c.setLengthLeft)(r,32):r};r.ripemd160=function(a,e){return(0,d.assertIsBuffer)(a),h(a,e)};r.ripemd160FromString=function(a,e){return(0,d.assertIsString)(a),h(a,e)};r.ripemd160FromArray=function(a,e){return(0,d.assertIsArray)(a),h(a,e)};r.rlphash=function(a){return(0,r.keccak)(f.rlp.encode(a))}}).call(this,t(6).Buffer)},742:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.toType=r.TypeOutput=r.bnToRlp=r.bnToUnpaddedBuffer=r.bnToHex=void 0;var n,o=t(248),f=t(382),c=t(319);function d(r){return(0,c.unpadBuffer)(r.toArrayLike(e))}r.bnToHex=function(e){return"0x".concat(e.toString(16))},r.bnToUnpaddedBuffer=d,r.bnToRlp=function(e){return d(e)},function(e){e[e.Number=0]="Number",e[e.BN=1]="BN",e[e.Buffer=2]="Buffer",e[e.PrefixedHexString=3]="PrefixedHexString"}(n=r.TypeOutput||(r.TypeOutput={})),r.toType=function(input,e){if(null===input)return null;if(void 0!==input){if("string"==typeof input&&!(0,f.isHexString)(input))throw new Error("A string must be provided with a 0x-prefix, given: ".concat(input));if("number"==typeof input&&!Number.isSafeInteger(input))throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");var output=(0,c.toBuffer)(input);if(e===n.Buffer)return output;if(e===n.BN)return new o.BN(output);if(e===n.Number){var r=new o.BN(output),t=new o.BN(Number.MAX_SAFE_INTEGER.toString());if(r.gt(t))throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)");return r.toNumber()}return"0x".concat(output.toString("hex"))}}}).call(this,t(6).Buffer)}}]);