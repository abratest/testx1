(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1161:function(t,e,r){(function(e){const n=r(2081),o=r(548);function h(t){return e.allocUnsafe(t).fill(0)}function f(t,e,r){const n=h(e);return t=l(t),r?t.length<e?(t.copy(n),n):t.slice(0,e):t.length<e?(t.copy(n,e-t.length),n):t.slice(-e)}function l(t){if(!e.isBuffer(t))if(Array.isArray(t))t=e.from(t);else if("string"==typeof t)t=c(t)?e.from((r=d(t)).length%2?"0"+r:r,"hex"):e.from(t);else if("number"==typeof t)t=intToBuffer(t);else if(null==t)t=e.allocUnsafe(0);else if(o.isBN(t))t=t.toArrayLike(e);else{if(!t.toArray)throw new Error("invalid type");t=e.from(t.toArray())}var r;return t}function c(t){return"string"==typeof t&&t.match(/^0x[0-9A-Fa-f]*$/)}function d(t){return"string"==typeof t&&t.startsWith("0x")?t.slice(2):t}t.exports={zeros:h,setLength:f,setLengthRight:function(t,e){return f(t,e,!0)},isHexString:c,stripHexPrefix:d,toBuffer:l,bufferToHex:function(t){return"0x"+(t=l(t)).toString("hex")},keccak:function(a,t){return a=l(a),t||(t=256),n("keccak"+t).update(a).digest()}}}).call(this,r(6).Buffer)},1171:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LIB_VERSION=void 0,e.LIB_VERSION="3.0.2"},2080:function(t,e,r){(function(e){const n=r(1161),o=r(2094),h={type:"object",properties:{types:{type:"object",additionalProperties:{type:"array",items:{type:"object",properties:{name:{type:"string"},type:{type:"string"}},required:["name","type"]}}},primaryType:{type:"string"},domain:{type:"object"},message:{type:"object"}},required:["types","primaryType","domain","message"]},f={encodeData(t,data,r,h=!0){const f=["bytes32"],l=[this.hashType(t,r)];if(h){const c=(t,f,l)=>{if(void 0!==r[f])return["bytes32",null==l?"0x0000000000000000000000000000000000000000000000000000000000000000":n.keccak(this.encodeData(f,l,r,h))];if(void 0===l)throw new Error(`missing value for field ${t} of type ${f}`);if("bytes"===f)return["bytes32",n.keccak(l)];if("string"===f)return"string"==typeof l&&(l=e.from(l,"utf8")),["bytes32",n.keccak(l)];if(f.lastIndexOf("]")===f.length-1){const e=f.slice(0,f.lastIndexOf("[")),r=l.map(r=>c(t,e,r));return["bytes32",n.keccak(o.rawEncode(r.map(([t])=>t),r.map(([,t])=>t)))]}return[f,l]};for(const e of r[t]){const[t,r]=c(e.name,e.type,data[e.name]);f.push(t),l.push(r)}}else for(const o of r[t]){let t=data[o.name];if(void 0!==t)if("bytes"===o.type)f.push("bytes32"),t=n.keccak(t),l.push(t);else if("string"===o.type)f.push("bytes32"),"string"==typeof t&&(t=e.from(t,"utf8")),t=n.keccak(t),l.push(t);else if(void 0!==r[o.type])f.push("bytes32"),t=n.keccak(this.encodeData(o.type,t,r,h)),l.push(t);else{if(o.type.lastIndexOf("]")===o.type.length-1)throw new Error("Arrays currently unimplemented in encodeData");f.push(o.type),l.push(t)}}return o.rawEncode(f,l)},encodeType(t,e){let r="",n=this.findTypeDependencies(t,e).filter(e=>e!==t);n=[t].concat(n.sort());for(const t of n){if(!e[t])throw new Error("No type definition specified: "+t);r+=t+"("+e[t].map(({name:t,type:e})=>e+" "+t).join(",")+")"}return r},findTypeDependencies(t,e,r=[]){if(t=t.match(/^\w*/)[0],r.includes(t)||void 0===e[t])return r;r.push(t);for(const n of e[t])for(const t of this.findTypeDependencies(n.type,e,r))!r.includes(t)&&r.push(t);return r},hashStruct(t,data,e,r=!0){return n.keccak(this.encodeData(t,data,e,r))},hashType(t,e){return n.keccak(this.encodeType(t,e))},sanitizeData(data){const t={};for(const e in h.properties)data[e]&&(t[e]=data[e]);return t.types&&(t.types=Object.assign({EIP712Domain:[]},t.types)),t},hash(t,r=!0){const o=this.sanitizeData(t),h=[e.from("1901","hex")];return h.push(this.hashStruct("EIP712Domain",o.domain,o.types,r)),"EIP712Domain"!==o.primaryType&&h.push(this.hashStruct(o.primaryType,o.message,o.types,r)),n.keccak(e.concat(h))}};t.exports={TYPED_MESSAGE_SCHEMA:h,TypedDataUtils:f,hashForSignTypedDataLegacy:function(t){return function(t){const e=new Error("Expect argument to be non-empty array");if("object"!=typeof t||!t.length)throw e;const data=t.map((function(t){return"bytes"===t.type?n.toBuffer(t.value):t.value})),r=t.map((function(t){return t.type})),h=t.map((function(t){if(!t.name)throw e;return t.type+" "+t.name}));return o.soliditySHA3(["bytes32","bytes32"],[o.soliditySHA3(new Array(t.length).fill("string"),h),o.soliditySHA3(r,data)])}(t.data)},hashForSignTypedData_v3:function(t){return f.hash(t.data,!1)},hashForSignTypedData_v4:function(t){return f.hash(t.data)}}}).call(this,r(6).Buffer)},2094:function(t,e,r){(function(e){const n=r(1161),o=r(548);function h(t){return t.startsWith("int[")?"int256"+t.slice(3):"int"===t?"int256":t.startsWith("uint[")?"uint256"+t.slice(4):"uint"===t?"uint256":t.startsWith("fixed[")?"fixed128x128"+t.slice(5):"fixed"===t?"fixed128x128":t.startsWith("ufixed[")?"ufixed128x128"+t.slice(6):"ufixed"===t?"ufixed128x128":t}function f(t){return parseInt(/^\D+(\d+)$/.exec(t)[1],10)}function l(t){var e=/^\D+(\d+)x(\d+)$/.exec(t);return[parseInt(e[1],10),parseInt(e[2],10)]}function c(t){var e=t.match(/(.*)\[(.*?)\]$/);return e?""===e[2]?"dynamic":parseInt(e[2],10):null}function d(t){var e=typeof t;if("string"===e)return n.isHexString(t)?new o(n.stripHexPrefix(t),16):new o(t,10);if("number"===e)return new o(t);if(t.toArray)return t;throw new Error("Argument is not a number")}function m(t,r){var h,w,y,i;if("address"===t)return m("uint160",d(r));if("bool"===t)return m("uint8",r?1:0);if("string"===t)return m("bytes",new e(r,"utf8"));if(function(t){return t.lastIndexOf("]")===t.length-1}(t)){if(void 0===r.length)throw new Error("Not an array?");if("dynamic"!==(h=c(t))&&0!==h&&r.length>h)throw new Error("Elements exceed array size: "+h);for(i in y=[],t=t.slice(0,t.lastIndexOf("[")),"string"==typeof r&&(r=JSON.parse(r)),r)y.push(m(t,r[i]));if("dynamic"===h){var v=m("uint256",r.length);y.unshift(v)}return e.concat(y)}if("bytes"===t)return r=new e(r),y=e.concat([m("uint256",r.length),r]),r.length%32!=0&&(y=e.concat([y,n.zeros(32-r.length%32)])),y;if(t.startsWith("bytes")){if((h=f(t))<1||h>32)throw new Error("Invalid bytes<N> width: "+h);return n.setLengthRight(r,32)}if(t.startsWith("uint")){if((h=f(t))%8||h<8||h>256)throw new Error("Invalid uint<N> width: "+h);if((w=d(r)).bitLength()>h)throw new Error("Supplied uint exceeds width: "+h+" vs "+w.bitLength());if(w<0)throw new Error("Supplied uint is negative");return w.toArrayLike(e,"be",32)}if(t.startsWith("int")){if((h=f(t))%8||h<8||h>256)throw new Error("Invalid int<N> width: "+h);if((w=d(r)).bitLength()>h)throw new Error("Supplied int exceeds width: "+h+" vs "+w.bitLength());return w.toTwos(256).toArrayLike(e,"be",32)}if(t.startsWith("ufixed")){if(h=l(t),(w=d(r))<0)throw new Error("Supplied ufixed is negative");return m("uint256",w.mul(new o(2).pow(new o(h[1]))))}if(t.startsWith("fixed"))return h=l(t),m("int256",d(r).mul(new o(2).pow(new o(h[1]))));throw new Error("Unsupported or invalid type: "+t)}function w(t){return"string"===t||"bytes"===t||"dynamic"===c(t)}function y(t,r){if(t.length!==r.length)throw new Error("Number of types are not matching the values");for(var o,l,c=[],i=0;i<t.length;i++){var m=h(t[i]),w=r[i];if("bytes"===m)c.push(w);else if("string"===m)c.push(new e(w,"utf8"));else if("bool"===m)c.push(new e(w?"01":"00","hex"));else if("address"===m)c.push(n.setLength(w,20));else if(m.startsWith("bytes")){if((o=f(m))<1||o>32)throw new Error("Invalid bytes<N> width: "+o);c.push(n.setLengthRight(w,o))}else if(m.startsWith("uint")){if((o=f(m))%8||o<8||o>256)throw new Error("Invalid uint<N> width: "+o);if((l=d(w)).bitLength()>o)throw new Error("Supplied uint exceeds width: "+o+" vs "+l.bitLength());c.push(l.toArrayLike(e,"be",o/8))}else{if(!m.startsWith("int"))throw new Error("Unsupported or invalid type: "+m);if((o=f(m))%8||o<8||o>256)throw new Error("Invalid int<N> width: "+o);if((l=d(w)).bitLength()>o)throw new Error("Supplied int exceeds width: "+o+" vs "+l.bitLength());c.push(l.toTwos(o).toArrayLike(e,"be",o/8))}}return e.concat(c)}t.exports={rawEncode:function(t,r){var output=[],data=[],n=32*t.length;for(var i in t){var o=h(t[i]),f=m(o,r[i]);w(o)?(output.push(m("uint256",n)),data.push(f),n+=f.length):output.push(f)}return e.concat(output.concat(data))},solidityPack:y,soliditySHA3:function(t,e){return n.keccak(y(t,e))}}}).call(this,r(6).Buffer)},2102:function(t,e){function r(data){this.mode=o.MODE_8BIT_BYTE,this.data=data,this.parsedData=[];for(var i=0,t=this.data.length;i<t;i++){var e=[],code=this.data.charCodeAt(i);code>65536?(e[0]=240|(1835008&code)>>>18,e[1]=128|(258048&code)>>>12,e[2]=128|(4032&code)>>>6,e[3]=128|63&code):code>2048?(e[0]=224|(61440&code)>>>12,e[1]=128|(4032&code)>>>6,e[2]=128|63&code):code>128?(e[0]=192|(1984&code)>>>6,e[1]=128|63&code):e[0]=code,this.parsedData.push(e)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function n(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}r.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var i=0,e=this.parsedData.length;i<e;i++)t.put(this.parsedData[i],8)}},n.prototype={addData:function(data){var t=new r(data);this.dataList.push(t),this.dataCache=null},isDark:function(t,col){if(t<0||this.moduleCount<=t||col<0||this.moduleCount<=col)throw new Error(t+","+col);return this.modules[t][col]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var col=0;col<this.moduleCount;col++)this.modules[r][col]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=n.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,col){for(var e=-1;e<=7;e++)if(!(t+e<=-1||this.moduleCount<=t+e))for(var r=-1;r<=7;r++)col+r<=-1||this.moduleCount<=col+r||(this.modules[t+e][col+r]=0<=e&&e<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=r&&r<=4)},getBestMaskPattern:function(){for(var t=0,pattern=0,i=0;i<8;i++){this.makeImpl(!0,i);var e=k.getLostPoint(this);(0==i||t>e)&&(t=e,pattern=i)}return pattern},createMovieClip:function(t,e,r){var n=t.createEmptyMovieClip(e,r);this.make();for(var o=0;o<this.modules.length;o++)for(var h=1*o,col=0;col<this.modules[o].length;col++){var f=1*col;this.modules[o][col]&&(n.beginFill(0,100),n.moveTo(f,h),n.lineTo(f+1,h),n.lineTo(f+1,h+1),n.lineTo(f,h+1),n.endFill())}return n},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=k.getPatternPosition(this.typeNumber),i=0;i<t.length;i++)for(var e=0;e<t.length;e++){var r=t[i],col=t[e];if(null==this.modules[r][col])for(var n=-2;n<=2;n++)for(var o=-2;o<=2;o++)this.modules[r+n][col+o]=-2==n||2==n||-2==o||2==o||0==n&&0==o}},setupTypeNumber:function(t){for(var e=k.getBCHTypeNumber(this.typeNumber),i=0;i<18;i++){var r=!t&&1==(e>>i&1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=r}for(i=0;i<18;i++){r=!t&&1==(e>>i&1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=r}},setupTypeInfo:function(t,e){for(var data=this.errorCorrectLevel<<3|e,r=k.getBCHTypeInfo(data),i=0;i<15;i++){var n=!t&&1==(r>>i&1);i<6?this.modules[i][8]=n:i<8?this.modules[i+1][8]=n:this.modules[this.moduleCount-15+i][8]=n}for(i=0;i<15;i++){n=!t&&1==(r>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=n:i<9?this.modules[8][15-i-1+1]=n:this.modules[8][15-i-1]=n}this.modules[this.moduleCount-8][8]=!t},mapData:function(data,t){for(var e=-1,r=this.moduleCount-1,n=7,o=0,col=this.moduleCount-1;col>0;col-=2)for(6==col&&col--;;){for(var h=0;h<2;h++)if(null==this.modules[r][col-h]){var f=!1;o<data.length&&(f=1==(data[o]>>>n&1)),k.getMask(t,r,col-h)&&(f=!f),this.modules[r][col-h]=f,-1==--n&&(o++,n=7)}if((r+=e)<0||this.moduleCount<=r){r-=e,e=-e;break}}}},n.PAD0=236,n.PAD1=17,n.createData=function(t,e,r){for(var o=A.getRSBlocks(t,e),h=new T,i=0;i<r.length;i++){var data=r[i];h.put(data.mode,4),h.put(data.getLength(),k.getLengthInBits(data.mode,t)),data.write(h)}var f=0;for(i=0;i<o.length;i++)f+=o[i].dataCount;if(h.getLengthInBits()>8*f)throw new Error("code length overflow. ("+h.getLengthInBits()+">"+8*f+")");for(h.getLengthInBits()+4<=8*f&&h.put(0,4);h.getLengthInBits()%8!=0;)h.putBit(!1);for(;!(h.getLengthInBits()>=8*f||(h.put(n.PAD0,8),h.getLengthInBits()>=8*f));)h.put(n.PAD1,8);return n.createBytes(h,o)},n.createBytes=function(t,e){for(var r=0,n=0,o=0,h=new Array(e.length),f=new Array(e.length),l=0;l<e.length;l++){var c=e[l].dataCount,d=e[l].totalCount-c;n=Math.max(n,c),o=Math.max(o,d),h[l]=new Array(c);for(var i=0;i<h[l].length;i++)h[l][i]=255&t.buffer[i+r];r+=c;var m=k.getErrorCorrectPolynomial(d),w=new x(h[l],m.getLength()-1).mod(m);f[l]=new Array(m.getLength()-1);for(i=0;i<f[l].length;i++){var y=i+w.getLength()-f[l].length;f[l][i]=y>=0?w.get(y):0}}var v=0;for(i=0;i<e.length;i++)v+=e[i].totalCount;var data=new Array(v),E=0;for(i=0;i<n;i++)for(l=0;l<e.length;l++)i<h[l].length&&(data[E++]=h[l][i]);for(i=0;i<o;i++)for(l=0;l<e.length;l++)i<f[l].length&&(data[E++]=f[l][i]);return data};for(var o={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},h=1,f=0,l=3,c=2,d=0,m=1,w=2,y=3,v=4,E=5,D=6,L=7,k={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(data){for(var t=data<<10;k.getBCHDigit(t)-k.getBCHDigit(k.G15)>=0;)t^=k.G15<<k.getBCHDigit(t)-k.getBCHDigit(k.G15);return(data<<10|t)^k.G15_MASK},getBCHTypeNumber:function(data){for(var t=data<<12;k.getBCHDigit(t)-k.getBCHDigit(k.G18)>=0;)t^=k.G18<<k.getBCHDigit(t)-k.getBCHDigit(k.G18);return data<<12|t},getBCHDigit:function(data){for(var t=0;0!=data;)t++,data>>>=1;return t},getPatternPosition:function(t){return k.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,i,e){switch(t){case d:return(i+e)%2==0;case m:return i%2==0;case w:return e%3==0;case y:return(i+e)%3==0;case v:return(Math.floor(i/2)+Math.floor(e/3))%2==0;case E:return i*e%2+i*e%3==0;case D:return(i*e%2+i*e%3)%2==0;case L:return(i*e%3+(i+e)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var a=new x([1],0),i=0;i<t;i++)a=a.multiply(new x([1,B.gexp(i)],0));return a},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case o.MODE_NUMBER:return 10;case o.MODE_ALPHA_NUM:return 9;case o.MODE_8BIT_BYTE:case o.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case o.MODE_NUMBER:return 12;case o.MODE_ALPHA_NUM:return 11;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case o.MODE_NUMBER:return 14;case o.MODE_ALPHA_NUM:return 13;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var col=0;col<e;col++){for(var o=0,h=t.isDark(n,col),f=-1;f<=1;f++)if(!(n+f<0||e<=n+f))for(var l=-1;l<=1;l++)col+l<0||e<=col+l||0==f&&0==l||h==t.isDark(n+f,col+l)&&o++;o>5&&(r+=3+o-5)}for(n=0;n<e-1;n++)for(col=0;col<e-1;col++){var c=0;t.isDark(n,col)&&c++,t.isDark(n+1,col)&&c++,t.isDark(n,col+1)&&c++,t.isDark(n+1,col+1)&&c++,0!=c&&4!=c||(r+=3)}for(n=0;n<e;n++)for(col=0;col<e-6;col++)t.isDark(n,col)&&!t.isDark(n,col+1)&&t.isDark(n,col+2)&&t.isDark(n,col+3)&&t.isDark(n,col+4)&&!t.isDark(n,col+5)&&t.isDark(n,col+6)&&(r+=40);for(col=0;col<e;col++)for(n=0;n<e-6;n++)t.isDark(n,col)&&!t.isDark(n+1,col)&&t.isDark(n+2,col)&&t.isDark(n+3,col)&&t.isDark(n+4,col)&&!t.isDark(n+5,col)&&t.isDark(n+6,col)&&(r+=40);var d=0;for(col=0;col<e;col++)for(n=0;n<e;n++)t.isDark(n,col)&&d++;return r+=10*(Math.abs(100*d/e/e-50)/5)}},B={glog:function(t){if(t<1)throw new Error("glog("+t+")");return B.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return B.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},i=0;i<8;i++)B.EXP_TABLE[i]=1<<i;for(i=8;i<256;i++)B.EXP_TABLE[i]=B.EXP_TABLE[i-4]^B.EXP_TABLE[i-5]^B.EXP_TABLE[i-6]^B.EXP_TABLE[i-8];for(i=0;i<255;i++)B.LOG_TABLE[B.EXP_TABLE[i]]=i;function x(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var i=0;i<t.length-r;i++)this.num[i]=t[i+r]}function A(t,e){this.totalCount=t,this.dataCount=e}function T(){this.buffer=[],this.length=0}x.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),i=0;i<this.getLength();i++)for(var r=0;r<t.getLength();r++)e[i+r]^=B.gexp(B.glog(this.get(i))+B.glog(t.get(r)));return new x(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=B.glog(this.get(0))-B.glog(t.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(i=0;i<t.getLength();i++)r[i]^=B.gexp(B.glog(t.get(i))+e);return new x(r,0).mod(t)}},A.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],A.getRSBlocks=function(t,e){var r=A.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,o=[],i=0;i<n;i++)for(var h=r[3*i+0],f=r[3*i+1],l=r[3*i+2],c=0;c<h;c++)o.push(new A(f,l));return o},A.getRsBlockTable=function(t,e){switch(e){case h:return A.RS_BLOCK_TABLE[4*(t-1)+0];case f:return A.RS_BLOCK_TABLE[4*(t-1)+1];case l:return A.RS_BLOCK_TABLE[4*(t-1)+2];case c:return A.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},T.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var i=0;i<e;i++)this.putBit(1==(t>>>e-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var C=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function _(t){if(this.options={padding:4,width:256,height:256,typeNumber:4,color:"#000000",background:"#ffffff",ecl:"M",image:{svg:"",width:0,height:0}},"string"==typeof t&&(t={content:t}),t)for(var i in t)this.options[i]=t[i];if("string"!=typeof this.options.content)throw new Error("Expected 'content' as string!");if(0===this.options.content.length)throw new Error("Expected 'content' to be non-empty!");if(!(this.options.padding>=0))throw new Error("Expected 'padding' value to be non-negative!");if(!(this.options.width>0&&this.options.height>0))throw new Error("Expected 'width' or 'height' value to be higher than zero!");var content=this.options.content,e=function(content,t){for(var e=function(content){var t=encodeURI(content).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return t.length+(t.length!=content?3:0)}(content),r=1,n=0,i=0,o=C.length;i<=o;i++){var table=C[i];if(!table)throw new Error("Content too long: expected "+n+" but got "+e);switch(t){case"L":n=table[0];break;case"M":n=table[1];break;case"Q":n=table[2];break;case"H":n=table[3];break;default:throw new Error("Unknwon error correction level: "+t)}if(e<=n)break;r++}if(r>C.length)throw new Error("Content too long");return r}(content,this.options.ecl),r=function(t){switch(t){case"L":return h;case"M":return f;case"Q":return l;case"H":return c;default:throw new Error("Unknwon error correction level: "+t)}}(this.options.ecl);this.qrcode=new n(e,r),this.qrcode.addData(content),this.qrcode.make()}_.prototype.svg=function(t){var e=this.options||{},r=this.qrcode.modules;void 0===t&&(t={container:e.container||"svg"});for(var n=void 0===e.pretty||!!e.pretty,o=n?"  ":"",h=n?"\r\n":"",f=e.width,l=e.height,c=r.length,d=f/(c+2*e.padding),m=l/(c+2*e.padding),w=void 0!==e.join&&!!e.join,y=void 0!==e.swap&&!!e.swap,v=void 0===e.xmlDeclaration||!!e.xmlDeclaration,E=void 0!==e.predefined&&!!e.predefined,defs=E?o+'<defs><path id="qrmodule" d="M0 0 h'+m+" v"+d+' H0 z" style="fill:'+e.color+';shape-rendering:crispEdges;" /></defs>'+h:"",D=o+'<rect x="0" y="0" width="'+f+'" height="'+l+'" style="fill:'+e.background+';shape-rendering:crispEdges;"/>'+h,L="",k="",B=0;B<c;B++)for(var x=0;x<c;x++){if(r[x][B]){var A=x*d+e.padding*d,T=B*m+e.padding*m;if(y){var C=A;A=T,T=C}if(w){var _=d+A,P=m+T;A=Number.isInteger(A)?Number(A):A.toFixed(2),T=Number.isInteger(T)?Number(T):T.toFixed(2),_=Number.isInteger(_)?Number(_):_.toFixed(2),k+="M"+A+","+T+" V"+(P=Number.isInteger(P)?Number(P):P.toFixed(2))+" H"+_+" V"+T+" H"+A+" Z "}else L+=E?o+'<use x="'+A.toString()+'" y="'+T.toString()+'" href="#qrmodule" />'+h:o+'<rect x="'+A.toString()+'" y="'+T.toString()+'" width="'+d+'" height="'+m+'" style="fill:'+e.color+';shape-rendering:crispEdges;"/>'+h}}w&&(L=o+'<path x="0" y="0" style="fill:'+e.color+';shape-rendering:crispEdges;" d="'+k+'" />');let I="";if(void 0!==this.options.image&&this.options.image.svg){const t=f*this.options.image.width/100,e=l*this.options.image.height/100;I+=`<svg x="${f/2-t/2}" y="${l/2-e/2}" width="${t}" height="${e}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`,I+=this.options.image.svg+h,I+="</svg>"}var svg="";switch(t.container){case"svg":v&&(svg+='<?xml version="1.0" standalone="yes"?>'+h),svg+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+f+'" height="'+l+'">'+h,svg+=defs+D+L,svg+=I,svg+="</svg>";break;case"svg-viewbox":v&&(svg+='<?xml version="1.0" standalone="yes"?>'+h),svg+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 '+f+" "+l+'">'+h,svg+=defs+D+L,svg+=I,svg+="</svg>";break;case"g":svg+='<g width="'+f+'" height="'+l+'">'+h,svg+=defs+D+L,svg+=I,svg+="</g>";break;default:svg+=(defs+D+L+I).replace(/^\s+/,"")}return svg},t.exports=_}}]);