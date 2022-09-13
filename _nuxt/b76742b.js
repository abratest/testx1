(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{2061:function(e,r,t){e.exports=t(2062)},2062:function(e,r,t){(function(r){const n=t(2063),o=t(314);var f=function(){};function c(e){return e.startsWith("int[")?"int256"+e.slice(3):"int"===e?"int256":e.startsWith("uint[")?"uint256"+e.slice(4):"uint"===e?"uint256":e.startsWith("fixed[")?"fixed128x128"+e.slice(5):"fixed"===e?"fixed128x128":e.startsWith("ufixed[")?"ufixed128x128"+e.slice(6):"ufixed"===e?"ufixed128x128":e}function l(e){return parseInt(/^\D+(\d+)$/.exec(e)[1],10)}function d(e){var r=/^\D+(\d+)x(\d+)$/.exec(e);return[parseInt(r[1],10),parseInt(r[2],10)]}function h(e){var r=e.match(/(.*)\[(.*?)\]$/);return r?""===r[2]?"dynamic":parseInt(r[2],10):null}function v(e){var r=typeof e;if("string"===r)return n.isHexPrefixed(e)?new o(n.stripHexPrefix(e),16):new o(e,10);if("number"===r)return new o(e);if(e.toArray)return e;throw new Error("Argument is not a number")}function y(e){var r=/^(\w+)\((.*)\)$/.exec(e);if(3!==r.length)throw new Error("Invalid method signature");var t=/^(.+)\):\((.+)$/.exec(r[2]);if(null!==t&&3===t.length)return{method:r[1],args:t[1].split(","),retargs:t[2].split(",")};var n=r[2].split(",");return 1===n.length&&""===n[0]&&(n=[]),{method:r[1],args:n}}function m(e,t){var f,c,y,i;if("address"===e)return m("uint160",v(t));if("bool"===e)return m("uint8",t?1:0);if("string"===e)return m("bytes",r.from(t,"utf8"));if(E(e)){if(void 0===t.length)throw new Error("Not an array?");if("dynamic"!==(f=h(e))&&0!==f&&t.length>f)throw new Error("Elements exceed array size: "+f);for(i in y=[],e=e.slice(0,e.lastIndexOf("[")),"string"==typeof t&&(t=JSON.parse(t)),t)y.push(m(e,t[i]));if("dynamic"===f){var w=m("uint256",t.length);y.unshift(w)}return r.concat(y)}if("bytes"===e)return t=r.from(t),y=r.concat([m("uint256",t.length),t]),t.length%32!=0&&(y=r.concat([y,n.zeros(32-t.length%32)])),y;if(e.startsWith("bytes")){if((f=l(e))<1||f>32)throw new Error("Invalid bytes<N> width: "+f);return n.setLengthRight(t,32)}if(e.startsWith("uint")){if((f=l(e))%8||f<8||f>256)throw new Error("Invalid uint<N> width: "+f);if((c=v(t)).bitLength()>f)throw new Error("Supplied uint exceeds width: "+f+" vs "+c.bitLength());if(c<0)throw new Error("Supplied uint is negative");return c.toArrayLike(r,"be",32)}if(e.startsWith("int")){if((f=l(e))%8||f<8||f>256)throw new Error("Invalid int<N> width: "+f);if((c=v(t)).bitLength()>f)throw new Error("Supplied int exceeds width: "+f+" vs "+c.bitLength());return c.toTwos(256).toArrayLike(r,"be",32)}if(e.startsWith("ufixed")){if(f=d(e),(c=v(t))<0)throw new Error("Supplied ufixed is negative");return m("uint256",c.mul(new o(2).pow(new o(f[1]))))}if(e.startsWith("fixed"))return f=d(e),m("int256",v(t).mul(new o(2).pow(new o(f[1]))));throw new Error("Unsupported or invalid type: "+e)}function w(e,data,t){var n,f,c,i;if("string"==typeof e&&(e=A(e)),"address"===e.name)return w(e.rawType,data,t).toArrayLike(r,"be",20).toString("hex");if("bool"===e.name)return w(e.rawType,data,t).toString()===new o(1).toString();if("string"===e.name){var l=w(e.rawType,data,t);return r.from(l,"utf8").toString()}if(e.isArray){for(c=[],n=e.size,"dynamic"===e.size&&(t=w("uint256",data,t).toNumber(),n=w("uint256",data,t).toNumber(),t+=32),i=0;i<n;i++){var d=w(e.subArray,data,t);c.push(d),t+=e.subArray.memoryUsage}return c}if("bytes"===e.name)return t=w("uint256",data,t).toNumber(),n=w("uint256",data,t).toNumber(),data.slice(t+32,t+32+n);if(e.name.startsWith("bytes"))return data.slice(t,t+e.size);if(e.name.startsWith("uint")){if((f=new o(data.slice(t,t+32),16,"be")).bitLength()>e.size)throw new Error("Decoded int exceeds width: "+e.size+" vs "+f.bitLength());return f}if(e.name.startsWith("int")){if((f=new o(data.slice(t,t+32),16,"be").fromTwos(256)).bitLength()>e.size)throw new Error("Decoded uint exceeds width: "+e.size+" vs "+f.bitLength());return f}if(e.name.startsWith("ufixed")){if(n=new o(2).pow(new o(e.size[1])),!(f=w("uint256",data,t)).mod(n).isZero())throw new Error("Decimals not supported yet");return f.div(n)}if(e.name.startsWith("fixed")){if(n=new o(2).pow(new o(e.size[1])),!(f=w("int256",data,t)).mod(n).isZero())throw new Error("Decimals not supported yet");return f.div(n)}throw new Error("Unsupported or invalid type: "+e.name)}function A(e){var r,t,n;if(E(e)){r=h(e);var o=e.slice(0,e.lastIndexOf("["));return o=A(o),t={isArray:!0,name:e,size:r,memoryUsage:"dynamic"===r?32:o.memoryUsage*r,subArray:o}}switch(e){case"address":n="uint160";break;case"bool":n="uint8";break;case"string":n="bytes"}if(t={rawType:n,name:e,memoryUsage:32},e.startsWith("bytes")&&"bytes"!==e||e.startsWith("uint")||e.startsWith("int")?t.size=l(e):(e.startsWith("ufixed")||e.startsWith("fixed"))&&(t.size=d(e)),e.startsWith("bytes")&&"bytes"!==e&&(t.size<1||t.size>32))throw new Error("Invalid bytes<N> width: "+t.size);if((e.startsWith("uint")||e.startsWith("int"))&&(t.size%8||t.size<8||t.size>256))throw new Error("Invalid int/uint<N> width: "+t.size);return t}function x(e){return"string"===e||"bytes"===e||"dynamic"===h(e)}function E(e){return e.lastIndexOf("]")===e.length-1}function k(e,r){return e.startsWith("address")||e.startsWith("bytes")?"0x"+r.toString("hex"):r.toString()}f.eventID=function(e,t){var o=e+"("+t.map(c).join(",")+")";return n.keccak256(r.from(o))},f.methodID=function(e,r){return f.eventID(e,r).slice(0,4)},f.rawEncode=function(e,t){var output=[],data=[],n=0;e.forEach((function(e){if(E(e)){var r=h(e);n+="dynamic"!==r?32*r:32}else n+=32}));for(var i=0;i<e.length;i++){var o=c(e[i]),f=m(o,t[i]);x(o)?(output.push(m("uint256",n)),data.push(f),n+=f.length):output.push(f)}return r.concat(output.concat(data))},f.rawDecode=function(e,data){var t=[];data=r.from(data);for(var n=0,i=0;i<e.length;i++){var o=A(c(e[i])),f=w(o,data,n);n+=o.memoryUsage,t.push(f)}return t},f.simpleEncode=function(e){var t=Array.prototype.slice.call(arguments).slice(1),n=y(e);if(t.length!==n.args.length)throw new Error("Argument count mismatch");return r.concat([f.methodID(n.method,n.args),f.rawEncode(n.args,t)])},f.simpleDecode=function(e,data){var r=y(e);if(!r.retargs)throw new Error("No return values in method");return f.rawDecode(r.retargs,data)},f.stringify=function(e,r){var t=[];for(var i in e){var n=e[i],o=r[i];o=/^[^\[]+\[.*\]$/.test(n)?o.map((function(e){return k(n,e)})).join(", "):k(n,o),t.push(o)}return t},f.solidityHexValue=function(e,t,o){var c,d;if(E(e)){var y=e.replace(/\[.*?\]/,"");if(!E(y)){var m=h(e);if("dynamic"!==m&&0!==m&&t.length>m)throw new Error("Elements exceed array size: "+m)}var w=t.map((function(e){return f.solidityHexValue(y,e,256)}));return r.concat(w)}if("bytes"===e)return t;if("string"===e)return r.from(t,"utf8");if("bool"===e){o=o||8;var A=Array(o/4).join("0");return r.from(t?A+"1":A+"0","hex")}if("address"===e){var x=20;return o&&(x=o/8),n.setLengthLeft(t,x)}if(e.startsWith("bytes")){if((c=l(e))<1||c>32)throw new Error("Invalid bytes<N> width: "+c);return n.setLengthRight(t,c)}if(e.startsWith("uint")){if((c=l(e))%8||c<8||c>256)throw new Error("Invalid uint<N> width: "+c);if((d=v(t)).bitLength()>c)throw new Error("Supplied uint exceeds width: "+c+" vs "+d.bitLength());return o=o||c,d.toArrayLike(r,"be",o/8)}if(e.startsWith("int")){if((c=l(e))%8||c<8||c>256)throw new Error("Invalid int<N> width: "+c);if((d=v(t)).bitLength()>c)throw new Error("Supplied int exceeds width: "+c+" vs "+d.bitLength());return o=o||c,d.toTwos(c).toArrayLike(r,"be",o/8)}throw new Error("Unsupported or invalid type: "+e)},f.solidityPack=function(e,t){if(e.length!==t.length)throw new Error("Number of types are not matching the values");for(var n=[],i=0;i<e.length;i++){var o=c(e[i]),l=t[i];n.push(f.solidityHexValue(o,l,null))}return r.concat(n)},f.soliditySHA3=function(e,r){return n.keccak256(f.solidityPack(e,r))},f.soliditySHA256=function(e,r){return n.sha256(f.solidityPack(e,r))},f.solidityRIPEMD160=function(e,r){return n.ripemd160(f.solidityPack(e,r),!0)},f.fromSerpent=function(e){for(var r,t=[],i=0;i<e.length;i++){var n=e[i];if("s"===n)t.push("bytes");else if("b"===n){for(var o="bytes",f=i+1;f<e.length&&((r=e[f])>="0"&&r<="9");)o+=e[f]-"0",f++;i=f-1,t.push(o)}else if("i"===n)t.push("int256");else{if("a"!==n)throw new Error("Unsupported or invalid type: "+n);t.push("int256[]")}}return t},f.toSerpent=function(e){for(var r=[],i=0;i<e.length;i++){var t=e[i];if("bytes"===t)r.push("s");else if(t.startsWith("bytes"))r.push("b"+l(t));else if("int256"===t)r.push("i");else{if("int256[]"!==t)throw new Error("Unsupported or invalid type: "+t);r.push("a")}}return r.join("")},e.exports=f}).call(this,t(6).Buffer)},2063:function(e,r,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),o=this&&this.__exportStar||function(e,r){for(var p in e)"default"===p||r.hasOwnProperty(p)||n(r,e,p)};Object.defineProperty(r,"__esModule",{value:!0}),r.secp256k1=r.rlp=r.BN=void 0;var f=t(723);r.secp256k1=f;var c=t(137),l=t(314);r.BN=l;var d=t(463);r.rlp=d,Object.assign(r,c),o(t(2067),r),o(t(2068),r),o(t(724),r),o(t(2069),r),o(t(466),r),o(t(2070),r)},2064:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0});var n=t(314),o=new(0,t(270).ec)("secp256k1"),f=o.curve;r.privateKeyExport=function(e,r){void 0===r&&(r=!0);var t=new n(e);if(t.ucmp(f.n)>=0)throw new Error("couldn't export to DER format");var l=o.g.mul(t);return c(l.getX(),l.getY(),r)},r.privateKeyModInverse=function(r){var t=new n(r);if(t.ucmp(f.n)>=0||t.isZero())throw new Error("private key range is invalid");return t.invm(f.n).toArrayLike(e,"be",32)},r.signatureImport=function(r){var t=new n(r.r);t.ucmp(f.n)>=0&&(t=new n(0));var s=new n(r.s);return s.ucmp(f.n)>=0&&(s=new n(0)),e.concat([t.toArrayLike(e,"be",32),s.toArrayLike(e,"be",32)])},r.ecdhUnsafe=function(e,r,t){void 0===t&&(t=!0);var l=o.keyFromPublic(e),d=new n(r);if(d.ucmp(f.n)>=0||d.isZero())throw new Error("scalar was invalid (zero or overflow)");var h=l.pub.mul(d);return c(h.getX(),h.getY(),t)};var c=function(r,t,n){var o;return n?((o=e.alloc(33))[0]=t.isOdd()?3:2,r.toArrayLike(e,"be",32).copy(o,1)):((o=e.alloc(65))[0]=4,r.toArrayLike(e,"be",32).copy(o,1),t.toArrayLike(e,"be",32).copy(o,33)),o}}).call(this,t(6).Buffer)},2066:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0});var t=e.from([48,129,211,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,133,48,129,130,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,33,2,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,36,3,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),n=e.from([48,130,1,19,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,165,48,129,162,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,65,4,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,72,58,218,119,38,163,196,101,93,164,251,252,14,17,8,168,253,23,180,72,166,133,84,25,156,71,208,143,251,16,212,184,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,68,3,66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);r.privateKeyExport=function(r,o,f){void 0===f&&(f=!0);var c=e.from(f?t:n);return r.copy(c,f?8:9),o.copy(c,f?181:214),c},r.privateKeyImport=function(e){var r=e.length,t=0;if(r<t+1||48!==e[t])return null;if(r<(t+=1)+1||!(128&e[t]))return null;var n=127&e[t];if(n<1||n>2)return null;if(r<(t+=1)+n)return null;var o=e[t+n-1]|(n>1?e[t+n-2]<<8:0);return r<(t+=n)+o||r<t+3||2!==e[t]||1!==e[t+1]||1!==e[t+2]||r<(t+=3)+2||4!==e[t]||e[t+1]>32||r<t+2+e[t+1]?null:e.slice(t+2,t+2+e[t+1])},r.signatureImportLax=function(r){var t=e.alloc(32,0),s=e.alloc(32,0),n=r.length,o=0;if(48!==r[o++])return null;var f=r[o++];if(128&f&&(o+=f-128)>n)return null;if(2!==r[o++])return null;var c=r[o++];if(128&c){if(o+(f=c-128)>n)return null;for(;f>0&&0===r[o];o+=1,f-=1);for(c=0;f>0;o+=1,f-=1)c=(c<<8)+r[o]}if(c>n-o)return null;var l=o;if(o+=c,2!==r[o++])return null;var d=r[o++];if(128&d){if(o+(f=d-128)>n)return null;for(;f>0&&0===r[o];o+=1,f-=1);for(d=0;f>0;o+=1,f-=1)d=(d<<8)+r[o]}if(d>n-o)return null;var h=o;for(o+=d;c>0&&0===r[l];c-=1,l+=1);if(c>32)return null;var v=r.slice(l,l+c);for(v.copy(t,32-v.length);d>0&&0===r[h];d-=1,h+=1);if(d>32)return null;var y=r.slice(h,h+d);return y.copy(s,32-y.length),{r:t,s:s}}}).call(this,t(6).Buffer)},2067:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.KECCAK256_RLP=r.KECCAK256_RLP_S=r.KECCAK256_RLP_ARRAY=r.KECCAK256_RLP_ARRAY_S=r.KECCAK256_NULL=r.KECCAK256_NULL_S=r.TWO_POW256=r.MAX_INTEGER=void 0;var n=t(314);r.MAX_INTEGER=new n("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16),r.TWO_POW256=new n("10000000000000000000000000000000000000000000000000000000000000000",16),r.KECCAK256_NULL_S="c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",r.KECCAK256_NULL=e.from(r.KECCAK256_NULL_S,"hex"),r.KECCAK256_RLP_ARRAY_S="1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",r.KECCAK256_RLP_ARRAY=e.from(r.KECCAK256_RLP_ARRAY_S,"hex"),r.KECCAK256_RLP_S="56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",r.KECCAK256_RLP=e.from(r.KECCAK256_RLP_S,"hex")}).call(this,t(6).Buffer)},2068:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.importPublic=r.privateToPublic=r.privateToAddress=r.publicToAddress=r.pubToAddress=r.isValidPublic=r.isValidPrivate=r.isPrecompiled=r.generateAddress2=r.generateAddress=r.isValidChecksumAddress=r.toChecksumAddress=r.isZeroAddress=r.isValidAddress=r.zeroAddress=void 0;var n=t(60),o=t(137),f=t(723),c=t(314),l=t(466),d=t(724);r.zeroAddress=function(){var e=l.zeros(20);return l.bufferToHex(e)},r.isValidAddress=function(address){return/^0x[0-9a-fA-F]{40}$/.test(address)},r.isZeroAddress=function(address){return r.zeroAddress()===l.addHexPrefix(address)},r.toChecksumAddress=function(address,e){address=o.stripHexPrefix(address).toLowerCase();for(var r=void 0!==e?e.toString()+"0x":"",t=d.keccak(r+address).toString("hex"),n="0x",i=0;i<address.length;i++)parseInt(t[i],16)>=8?n+=address[i].toUpperCase():n+=address[i];return n},r.isValidChecksumAddress=function(address,e){return r.isValidAddress(address)&&r.toChecksumAddress(address,e)===address},r.generateAddress=function(r,t){r=l.toBuffer(r);var n=new c(t);return n.isZero()?d.rlphash([r,null]).slice(-20):d.rlphash([r,e.from(n.toArray())]).slice(-20)},r.generateAddress2=function(r,t,o){var f=l.toBuffer(r),c=l.toBuffer(t),h=l.toBuffer(o);return n(20===f.length),n(32===c.length),d.keccak256(e.concat([e.from("ff","hex"),f,c,d.keccak256(h)])).slice(-20)},r.isPrecompiled=function(address){var a=l.unpad(address);return 1===a.length&&a[0]>=1&&a[0]<=8},r.isValidPrivate=function(e){return f.privateKeyVerify(e)},r.isValidPublic=function(r,t){return void 0===t&&(t=!1),64===r.length?f.publicKeyVerify(e.concat([e.from([4]),r])):!!t&&f.publicKeyVerify(r)},r.pubToAddress=function(e,r){return void 0===r&&(r=!1),e=l.toBuffer(e),r&&64!==e.length&&(e=f.publicKeyConvert(e,!1).slice(1)),n(64===e.length),d.keccak(e).slice(-20)},r.publicToAddress=r.pubToAddress,r.privateToAddress=function(e){return r.publicToAddress(r.privateToPublic(e))},r.privateToPublic=function(e){return e=l.toBuffer(e),f.publicKeyCreate(e,!1).slice(1)},r.importPublic=function(e){return 64!==(e=l.toBuffer(e)).length&&(e=f.publicKeyConvert(e,!1).slice(1)),e}}).call(this,t(6).Buffer)},2069:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.hashPersonalMessage=r.isValidSignature=r.fromRpcSig=r.toRpcSig=r.ecrecover=r.ecsign=void 0;var n=t(723),o=t(314),f=t(466),c=t(724);function l(e,r){return r?e-(2*r+35):e-27}function d(e){return 0===e||1===e}r.ecsign=function(e,r,t){var o=n.sign(e,r),f=o.recovery;return{r:o.signature.slice(0,32),s:o.signature.slice(32,64),v:t?f+(2*t+35):f+27}},r.ecrecover=function(r,t,o,s,c){var h=e.concat([f.setLength(o,32),f.setLength(s,32)],64),v=l(t,c);if(!d(v))throw new Error("Invalid signature v value");var y=n.recover(r,h,v);return n.publicKeyConvert(y,!1).slice(1)},r.toRpcSig=function(r,t,s,n){if(!d(l(r,n)))throw new Error("Invalid signature v value");return f.bufferToHex(e.concat([f.setLengthLeft(t,32),f.setLengthLeft(s,32),f.toBuffer(r)]))},r.fromRpcSig=function(e){var r=f.toBuffer(e);if(65!==r.length)throw new Error("Invalid signature length");var t=r[64];return t<27&&(t+=27),{v:t,r:r.slice(0,32),s:r.slice(32,64)}},r.isValidSignature=function(e,r,s,t,n){void 0===t&&(t=!0);var f=new o("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),c=new o("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",16);if(32!==r.length||32!==s.length)return!1;if(!d(l(e,n)))return!1;var h=new o(r),v=new o(s);return!(h.isZero()||h.gt(c)||v.isZero()||v.gt(c))&&(!t||1!==v.cmp(f))},r.hashPersonalMessage=function(r){var t=e.from("Ethereum Signed Message:\n"+r.length.toString(),"utf-8");return c.keccak(e.concat([t,r]))}}).call(this,t(6).Buffer)},2070:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.defineProperties=void 0;var n=t(60),o=t(137),f=t(463),c=t(466);r.defineProperties=function(r,t,data){if(r.raw=[],r._fields=[],r.toJSON=function(label){if(void 0===label&&(label=!1),label){var e={};return r._fields.forEach((function(t){e[t]="0x"+r[t].toString("hex")})),e}return c.baToJSON(r.raw)},r.serialize=function(){return f.encode(r.raw)},t.forEach((function(t,i){function o(){return r.raw[i]}function f(o){"00"!==(o=c.toBuffer(o)).toString("hex")||t.allowZero||(o=e.allocUnsafe(0)),t.allowLess&&t.length?(o=c.stripZeros(o),n(t.length>=o.length,"The field "+t.name+" must not have more "+t.length+" bytes")):t.allowZero&&0===o.length||!t.length||n(t.length===o.length,"The field "+t.name+" must have byte length of "+t.length),r.raw[i]=o}r._fields.push(t.name),Object.defineProperty(r,t.name,{enumerable:!0,configurable:!0,get:o,set:f}),t.default&&(r[t.name]=t.default),t.alias&&Object.defineProperty(r,t.alias,{enumerable:!1,configurable:!0,set:f,get:o})})),data)if("string"==typeof data&&(data=e.from(o.stripHexPrefix(data),"hex")),e.isBuffer(data)&&(data=f.decode(data)),Array.isArray(data)){if(data.length>r._fields.length)throw new Error("wrong number of fields in data");data.forEach((function(e,i){r[r._fields[i]]=c.toBuffer(e)}))}else{if("object"!=typeof data)throw new Error("invalid data");var l=Object.keys(data);t.forEach((function(e){-1!==l.indexOf(e.name)&&(r[e.name]=data[e.name]),-1!==l.indexOf(e.alias)&&(r[e.alias]=data[e.alias])}))}}}).call(this,t(6).Buffer)},466:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.baToJSON=r.addHexPrefix=r.toUnsigned=r.fromSigned=r.bufferToHex=r.bufferToInt=r.toBuffer=r.stripZeros=r.unpad=r.setLengthRight=r.setLength=r.setLengthLeft=r.zeros=void 0;var n=t(137),o=t(314);r.zeros=function(r){return e.allocUnsafe(r).fill(0)},r.setLengthLeft=function(e,t,n){void 0===n&&(n=!1);var o=r.zeros(t);return e=r.toBuffer(e),n?e.length<t?(e.copy(o),o):e.slice(0,t):e.length<t?(e.copy(o,t-e.length),o):e.slice(-t)},r.setLength=r.setLengthLeft,r.setLengthRight=function(e,t){return r.setLength(e,t,!0)},r.unpad=function(a){for(var e=(a=n.stripHexPrefix(a))[0];a.length>0&&"0"===e.toString();)e=(a=a.slice(1))[0];return a},r.stripZeros=r.unpad,r.toBuffer=function(r){if(!e.isBuffer(r))if(Array.isArray(r))r=e.from(r);else if("string"==typeof r){if(!n.isHexString(r))throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: "+r);r=e.from(n.padToEven(n.stripHexPrefix(r)),"hex")}else if("number"==typeof r)r=n.intToBuffer(r);else if(null==r)r=e.allocUnsafe(0);else if(o.isBN(r))r=r.toArrayLike(e);else{if(!r.toArray)throw new Error("invalid type");r=e.from(r.toArray())}return r},r.bufferToInt=function(e){return new o(r.toBuffer(e)).toNumber()},r.bufferToHex=function(e){return"0x"+(e=r.toBuffer(e)).toString("hex")},r.fromSigned=function(e){return new o(e).fromTwos(256)},r.toUnsigned=function(r){return e.from(r.toTwos(256).toArray())},r.addHexPrefix=function(e){return"string"!=typeof e||n.isHexPrefixed(e)?e:"0x"+e},r.baToJSON=function(t){if(e.isBuffer(t))return"0x"+t.toString("hex");if(t instanceof Array){for(var n=[],i=0;i<t.length;i++)n.push(r.baToJSON(t[i]));return n}}}).call(this,t(6).Buffer)},723:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.ecdhUnsafe=r.ecdh=r.recover=r.verify=r.sign=r.signatureImportLax=r.signatureImport=r.signatureExport=r.signatureNormalize=r.publicKeyCombine=r.publicKeyTweakMul=r.publicKeyTweakAdd=r.publicKeyVerify=r.publicKeyConvert=r.publicKeyCreate=r.privateKeyTweakMul=r.privateKeyTweakAdd=r.privateKeyModInverse=r.privateKeyNegate=r.privateKeyImport=r.privateKeyExport=r.privateKeyVerify=void 0;var n=t(99),o=t(2064),f=t(2066);r.privateKeyVerify=function(e){return 32===e.length&&n.privateKeyVerify(Uint8Array.from(e))},r.privateKeyExport=function(e,r){if(32!==e.length)throw new RangeError("private key length is invalid");var t=o.privateKeyExport(e,r);return f.privateKeyExport(e,t,r)},r.privateKeyImport=function(e){if(null!==(e=f.privateKeyImport(e))&&32===e.length&&r.privateKeyVerify(e))return e;throw new Error("couldn't import from DER format")},r.privateKeyNegate=function(r){return e.from(n.privateKeyNegate(Uint8Array.from(r)))},r.privateKeyModInverse=function(r){if(32!==r.length)throw new Error("private key length is invalid");return e.from(o.privateKeyModInverse(Uint8Array.from(r)))},r.privateKeyTweakAdd=function(r,t){return e.from(n.privateKeyTweakAdd(Uint8Array.from(r),t))},r.privateKeyTweakMul=function(r,t){return e.from(n.privateKeyTweakMul(Uint8Array.from(r),Uint8Array.from(t)))},r.publicKeyCreate=function(r,t){return e.from(n.publicKeyCreate(Uint8Array.from(r),t))},r.publicKeyConvert=function(r,t){return e.from(n.publicKeyConvert(Uint8Array.from(r),t))},r.publicKeyVerify=function(e){return(33===e.length||65===e.length)&&n.publicKeyVerify(Uint8Array.from(e))},r.publicKeyTweakAdd=function(r,t,o){return e.from(n.publicKeyTweakAdd(Uint8Array.from(r),Uint8Array.from(t),o))},r.publicKeyTweakMul=function(r,t,o){return e.from(n.publicKeyTweakMul(Uint8Array.from(r),Uint8Array.from(t),o))},r.publicKeyCombine=function(r,t){var o=[];return r.forEach((function(e){o.push(Uint8Array.from(e))})),e.from(n.publicKeyCombine(o,t))},r.signatureNormalize=function(r){return e.from(n.signatureNormalize(Uint8Array.from(r)))},r.signatureExport=function(r){return e.from(n.signatureExport(Uint8Array.from(r)))},r.signatureImport=function(r){return e.from(n.signatureImport(Uint8Array.from(r)))},r.signatureImportLax=function(e){if(0===e.length)throw new RangeError("signature length is invalid");var r=f.signatureImportLax(e);if(null===r)throw new Error("couldn't parse DER signature");return o.signatureImport(r)},r.sign=function(r,t,o){if(null===o)throw new TypeError("options should be an Object");var f=void 0;if(o){if(f={},null===o.data)throw new TypeError("options.data should be a Buffer");if(o.data){if(32!=o.data.length)throw new RangeError("options.data length is invalid");f.data=new Uint8Array(o.data)}if(null===o.noncefn)throw new TypeError("options.noncefn should be a Function");o.noncefn&&(f.noncefn=function(r,t,n,data,f){var c=null!=n?e.from(n):null,l=null!=data?e.from(data):null,d=e.from("");return o.noncefn&&(d=o.noncefn(e.from(r),e.from(t),c,l,f)),new Uint8Array(d)})}var c=n.ecdsaSign(Uint8Array.from(r),Uint8Array.from(t),f);return{signature:e.from(c.signature),recovery:c.recid}},r.verify=function(e,r,t){return n.ecdsaVerify(Uint8Array.from(r),Uint8Array.from(e),t)},r.recover=function(r,t,o,f){return e.from(n.ecdsaRecover(Uint8Array.from(t),o,Uint8Array.from(r),f))},r.ecdh=function(r,t){return e.from(n.ecdh(Uint8Array.from(r),Uint8Array.from(t),{}))},r.ecdhUnsafe=function(r,t,n){if(33!==r.length&&65!==r.length)throw new RangeError("public key length is invalid");if(32!==t.length)throw new RangeError("private key length is invalid");return e.from(o.ecdhUnsafe(Uint8Array.from(r),Uint8Array.from(t),n))}}).call(this,t(6).Buffer)},724:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.rlphash=r.ripemd160=r.sha256=r.keccak256=r.keccak=void 0;var n=t(182),o=n.keccak224,f=n.keccak384,c=n.keccak256,l=n.keccak512,d=t(126),h=t(137),v=t(463),y=t(466);r.keccak=function(a,r){switch(void 0===r&&(r=256),a="string"!=typeof a||h.isHexString(a)?y.toBuffer(a):e.from(a,"utf8"),r||(r=256),r){case 224:return o(a);case 256:return c(a);case 384:return f(a);case 512:return l(a);default:throw new Error("Invald algorithm: keccak"+r)}},r.keccak256=function(a){return r.keccak(a)},r.sha256=function(a){return a=y.toBuffer(a),d("sha256").update(a).digest()},r.ripemd160=function(a,e){a=y.toBuffer(a);var r=d("rmd160").update(a).digest();return!0===e?y.setLength(r,32):r},r.rlphash=function(a){return r.keccak(v.encode(a))}}).call(this,t(6).Buffer)}}]);