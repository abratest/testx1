(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1035:function(t,e,r){var n=r(712),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],f=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case n.L:return o[4*(t-1)+0];case n.M:return o[4*(t-1)+1];case n.Q:return o[4*(t-1)+2];case n.H:return o[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case n.L:return f[4*(t-1)+0];case n.M:return f[4*(t-1)+1];case n.Q:return f[4*(t-1)+2];case n.H:return f[4*(t-1)+3];default:return}}},1036:function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},1037:function(t,e){var r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",n="(?:(?![A-Z0-9 $%*+\\-./:]|"+(r=r.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";e.KANJI=new RegExp(r,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(n,"g"),e.NUMERIC=new RegExp("[0-9]+","g"),e.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var o=new RegExp("^"+r+"$"),f=new RegExp("^[0-9]+$"),h=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return o.test(t)},e.testNumeric=function(t){return f.test(t)},e.testAlphanumeric=function(t){return h.test(t)}},1038:function(t,e){function r(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");var e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");var r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});var e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:n,scale:n?4:o,margin:e,color:{dark:r(t.color.dark||"#000000ff"),light:r(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,r){var n=e.getScale(t,r);return Math.floor((t+2*r.margin)*n)},e.qrToImageData=function(t,r,n){for(var o=r.modules.size,data=r.modules.data,f=e.getScale(o,n),h=Math.floor((o+2*n.margin)*f),c=n.margin*f,l=[n.color.light,n.color.dark],i=0;i<h;i++)for(var d=0;d<h;d++){var v=4*(i*h+d),w=n.color.light;if(i>=c&&d>=c&&i<h-c&&d<h-c)w=l[data[Math.floor((i-c)/f)*o+Math.floor((d-c)/f)]?1:0];t[v++]=w.r,t[v++]=w.g,t[v++]=w.b,t[v]=w.a}}},1971:function(t,e,r){var n=r(1972),o=r(1973),f=r(1990),h=r(1991);function c(t,canvas,text,e,r){var f=[].slice.call(arguments,1),h=f.length,c="function"==typeof f[h-1];if(!c&&!n())throw new Error("Callback required as last argument");if(!c){if(h<1)throw new Error("Too few arguments provided");return 1===h?(text=canvas,canvas=e=void 0):2!==h||canvas.getContext||(e=text,text=canvas,canvas=void 0),new Promise((function(r,n){try{var data=o.create(text,e);r(t(data,canvas,e))}catch(t){n(t)}}))}if(h<2)throw new Error("Too few arguments provided");2===h?(r=text,text=canvas,canvas=e=void 0):3===h&&(canvas.getContext&&void 0===r?(r=e,e=void 0):(r=e,e=text,text=canvas,canvas=void 0));try{var data=o.create(text,e);r(null,t(data,canvas,e))}catch(t){r(t)}}e.create=o.create,e.toCanvas=c.bind(null,f.render),e.toDataURL=c.bind(null,f.renderToDataURL),e.toString=c.bind(null,(function(data,t,e){return h.render(data,e)}))},1972:function(t,e){t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},1973:function(t,e,r){var n=r(375),o=r(311),f=r(712),h=r(1974),c=r(1975),l=r(1976),d=r(1977),v=r(1978),w=r(1035),y=r(1979),m=r(1982),E=r(1983),A=r(312),B=r(1984),R=r(711);function T(t,e,r){var i,n,o=t.size,f=E.getEncodedBits(e,r);for(i=0;i<15;i++)n=1==(f>>i&1),i<6?t.set(i,8,n,!0):i<8?t.set(i+1,8,n,!0):t.set(o-15+i,8,n,!0),i<8?t.set(8,o-i-1,n,!0):i<9?t.set(8,15-i-1+1,n,!0):t.set(8,15-i-1,n,!0);t.set(o-8,8,1,!0)}function P(t,e,r){var f=new h;r.forEach((function(data){f.put(data.mode.bit,4),f.put(data.getLength(),A.getCharCountIndicator(data.mode,t)),data.write(f)}));var c=8*(o.getSymbolTotalCodewords(t)-w.getTotalCodewordsCount(t,e));for(f.getLengthInBits()+4<=c&&f.put(0,4);f.getLengthInBits()%8!=0;)f.putBit(0);for(var l=(c-f.getLengthInBits())/8,i=0;i<l;i++)f.put(i%2?17:236,8);return function(t,e,r){for(var f=o.getSymbolTotalCodewords(e),h=w.getTotalCodewordsCount(e,r),c=f-h,l=w.getBlocksCount(e,r),d=l-f%l,v=Math.floor(f/l),m=Math.floor(c/l),E=m+1,A=v-m,B=new y(A),R=0,T=new Array(l),P=new Array(l),C=0,I=n.from(t.buffer),b=0;b<l;b++){var M=b<d?m:E;T[b]=I.slice(R,R+M),P[b]=B.encode(T[b]),R+=M,C=Math.max(C,M)}var i,N,data=n.alloc(f),S=0;for(i=0;i<C;i++)for(N=0;N<l;N++)i<T[N].length&&(data[S++]=T[N][i]);for(i=0;i<A;i++)for(N=0;N<l;N++)data[S++]=P[N][i];return data}(f,t,e)}function C(data,t,e,r){var n;if(R(data))n=B.fromArray(data);else{if("string"!=typeof data)throw new Error("Invalid data");var f=t;if(!f){var h=B.rawSplit(data);f=m.getBestVersionForData(h,e)}n=B.fromString(data,f||40)}var w=m.getBestVersionForData(n,e);if(!w)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<w)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+w+".\n")}else t=w;var y=P(t,e,n),E=o.getSymbolSize(t),A=new c(E);return function(t,e){for(var r=t.size,n=d.getPositions(e),i=0;i<n.length;i++)for(var o=n[i][0],col=n[i][1],f=-1;f<=7;f++)if(!(o+f<=-1||r<=o+f))for(var h=-1;h<=7;h++)col+h<=-1||r<=col+h||(f>=0&&f<=6&&(0===h||6===h)||h>=0&&h<=6&&(0===f||6===f)||f>=2&&f<=4&&h>=2&&h<=4?t.set(o+f,col+h,!0,!0):t.set(o+f,col+h,!1,!0))}(A,t),function(t){for(var e=t.size,r=8;r<e-8;r++){var n=r%2==0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}(A),function(t,e){for(var r=l.getPositions(e),i=0;i<r.length;i++)for(var n=r[i][0],col=r[i][1],o=-2;o<=2;o++)for(var f=-2;f<=2;f++)-2===o||2===o||-2===f||2===f||0===o&&0===f?t.set(n+o,col+f,!0,!0):t.set(n+o,col+f,!1,!0)}(A,t),T(A,e,0),t>=7&&function(t,e){for(var r,col,n,o=t.size,f=m.getEncodedBits(e),i=0;i<18;i++)r=Math.floor(i/3),col=i%3+o-8-3,n=1==(f>>i&1),t.set(r,col,n,!0),t.set(col,r,n,!0)}(A,t),function(t,data){for(var e=t.size,r=-1,n=e-1,o=7,f=0,col=e-1;col>0;col-=2)for(6===col&&col--;;){for(var h=0;h<2;h++)if(!t.isReserved(n,col-h)){var c=!1;f<data.length&&(c=1==(data[f]>>>o&1)),t.set(n,col-h,c),-1===--o&&(f++,o=7)}if((n+=r)<0||e<=n){n-=r,r=-r;break}}}(A,y),isNaN(r)&&(r=v.getBestMask(A,T.bind(null,A,e))),v.applyMask(r,A),T(A,e,r),{modules:A,version:t,errorCorrectionLevel:e,maskPattern:r,segments:n}}e.create=function(data,t){if(void 0===data||""===data)throw new Error("No input text");var e,mask,r=f.M;return void 0!==t&&(r=f.from(t.errorCorrectionLevel,f.M),e=m.from(t.version),mask=v.from(t.maskPattern),t.toSJISFunc&&o.setToSJISFunction(t.toSJISFunc)),C(data,e,r,mask)}},1974:function(t,e){function r(){this.buffer=[],this.length=0}r.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var i=0;i<e;i++)this.putBit(1==(t>>>e-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=r},1975:function(t,e,r){var n=r(375);function o(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=n.alloc(t*t),this.reservedBit=n.alloc(t*t)}o.prototype.set=function(t,col,e,r){var n=t*this.size+col;this.data[n]=e,r&&(this.reservedBit[n]=!0)},o.prototype.get=function(t,col){return this.data[t*this.size+col]},o.prototype.xor=function(t,col,e){this.data[t*this.size+col]^=e},o.prototype.isReserved=function(t,col){return this.reservedBit[t*this.size+col]},t.exports=o},1976:function(t,e,r){var n=r(311).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];for(var e=Math.floor(t/7)+2,r=n(t),o=145===r?26:2*Math.ceil((r-13)/(2*e-2)),f=[r-7],i=1;i<e-1;i++)f[i]=f[i-1]-o;return f.push(6),f.reverse()},e.getPositions=function(t){for(var r=[],n=e.getRowColCoords(t),o=n.length,i=0;i<o;i++)for(var f=0;f<o;f++)0===i&&0===f||0===i&&f===o-1||i===o-1&&0===f||r.push([n[i],n[f]]);return r}},1977:function(t,e,r){var n=r(311).getSymbolSize;e.getPositions=function(t){var e=n(t);return[[0,0],[e-7,0],[0,e-7]]}},1978:function(t,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var r=3,n=3,o=40,f=10;function h(t,i,r){switch(t){case e.Patterns.PATTERN000:return(i+r)%2==0;case e.Patterns.PATTERN001:return i%2==0;case e.Patterns.PATTERN010:return r%3==0;case e.Patterns.PATTERN011:return(i+r)%3==0;case e.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(r/3))%2==0;case e.Patterns.PATTERN101:return i*r%2+i*r%3==0;case e.Patterns.PATTERN110:return(i*r%2+i*r%3)%2==0;case e.Patterns.PATTERN111:return(i*r%3+(i+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(mask){return null!=mask&&""!==mask&&!isNaN(mask)&&mask>=0&&mask<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(data){for(var t=data.size,e=0,n=0,o=0,f=null,h=null,c=0;c<t;c++){n=o=0,f=h=null;for(var col=0;col<t;col++){var l=data.get(c,col);l===f?n++:(n>=5&&(e+=r+(n-5)),f=l,n=1),(l=data.get(col,c))===h?o++:(o>=5&&(e+=r+(o-5)),h=l,o=1)}n>=5&&(e+=r+(n-5)),o>=5&&(e+=r+(o-5))}return e},e.getPenaltyN2=function(data){for(var t=data.size,e=0,r=0;r<t-1;r++)for(var col=0;col<t-1;col++){var o=data.get(r,col)+data.get(r,col+1)+data.get(r+1,col)+data.get(r+1,col+1);4!==o&&0!==o||e++}return e*n},e.getPenaltyN3=function(data){for(var t=data.size,e=0,r=0,n=0,f=0;f<t;f++){r=n=0;for(var col=0;col<t;col++)r=r<<1&2047|data.get(f,col),col>=10&&(1488===r||93===r)&&e++,n=n<<1&2047|data.get(col,f),col>=10&&(1488===n||93===n)&&e++}return e*o},e.getPenaltyN4=function(data){for(var t=0,e=data.data.length,i=0;i<e;i++)t+=data.data[i];return Math.abs(Math.ceil(100*t/e/5)-10)*f},e.applyMask=function(pattern,data){for(var t=data.size,col=0;col<t;col++)for(var e=0;e<t;e++)data.isReserved(e,col)||data.xor(e,col,h(pattern,e,col))},e.getBestMask=function(data,t){for(var r=Object.keys(e.Patterns).length,n=0,o=1/0,p=0;p<r;p++){t(p),e.applyMask(p,data);var f=e.getPenaltyN1(data)+e.getPenaltyN2(data)+e.getPenaltyN3(data)+e.getPenaltyN4(data);e.applyMask(p,data),f<o&&(o=f,n=p)}return n}},1979:function(t,e,r){var n=r(375),o=r(1980),f=r(6).Buffer;function h(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}h.prototype.initialize=function(t){this.degree=t,this.genPoly=o.generateECPolynomial(this.degree)},h.prototype.encode=function(data){if(!this.genPoly)throw new Error("Encoder not initialized");var t=n.alloc(this.degree),e=f.concat([data,t],data.length+this.degree),r=o.mod(e,this.genPoly),h=this.degree-r.length;if(h>0){var c=n.alloc(this.degree);return r.copy(c,h),c}return r},t.exports=h},1980:function(t,e,r){var n=r(375),o=r(1981);e.mul=function(t,e){for(var r=n.alloc(t.length+e.length-1),i=0;i<t.length;i++)for(var f=0;f<e.length;f++)r[i+f]^=o.mul(t[i],e[f]);return r},e.mod=function(t,e){for(var r=n.from(t);r.length-e.length>=0;){for(var f=r[0],i=0;i<e.length;i++)r[i]^=o.mul(e[i],f);for(var h=0;h<r.length&&0===r[h];)h++;r=r.slice(h)}return r},e.generateECPolynomial=function(t){for(var r=n.from([1]),i=0;i<t;i++)r=e.mul(r,[1,o.exp(i)]);return r}},1981:function(t,e,r){var n=r(375),o=n.alloc(512),f=n.alloc(256);!function(){for(var t=1,i=0;i<255;i++)o[i]=t,f[t]=i,256&(t<<=1)&&(t^=285);for(i=255;i<512;i++)o[i]=o[i-255]}(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return f[t]},e.exp=function(t){return o[t]},e.mul=function(t,e){return 0===t||0===e?0:o[f[t]+f[e]]}},1982:function(t,e,r){var n=r(311),o=r(1035),f=r(712),h=r(312),c=r(1036),l=r(711),d=n.getBCHDigit(7973);function v(t,e){return h.getCharCountIndicator(t,e)+4}function w(t,e){var r=0;return t.forEach((function(data){var t=v(data.mode,e);r+=t+data.getBitsLength()})),r}e.from=function(t,e){return c.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,r){if(!c.isValid(t))throw new Error("Invalid QR Code version");void 0===r&&(r=h.BYTE);var f=8*(n.getSymbolTotalCodewords(t)-o.getTotalCodewordsCount(t,e));if(r===h.MIXED)return f;var l=f-v(r,t);switch(r){case h.NUMERIC:return Math.floor(l/10*3);case h.ALPHANUMERIC:return Math.floor(l/11*2);case h.KANJI:return Math.floor(l/13);case h.BYTE:default:return Math.floor(l/8)}},e.getBestVersionForData=function(data,t){var r,n=f.from(t,f.M);if(l(data)){if(data.length>1)return function(t,r){for(var n=1;n<=40;n++){if(w(t,n)<=e.getCapacity(n,r,h.MIXED))return n}}(data,n);if(0===data.length)return 1;r=data[0]}else r=data;return function(t,r,n){for(var o=1;o<=40;o++)if(r<=e.getCapacity(o,n,t))return o}(r.mode,r.getLength(),n)},e.getEncodedBits=function(t){if(!c.isValid(t)||t<7)throw new Error("Invalid QR Code version");for(var e=t<<12;n.getBCHDigit(e)-d>=0;)e^=7973<<n.getBCHDigit(e)-d;return t<<12|e}},1983:function(t,e,r){var n=r(311),o=n.getBCHDigit(1335);e.getEncodedBits=function(t,mask){for(var data=t.bit<<3|mask,e=data<<10;n.getBCHDigit(e)-o>=0;)e^=1335<<n.getBCHDigit(e)-o;return 21522^(data<<10|e)}},1984:function(t,e,r){var n=r(312),o=r(1985),f=r(1986),h=r(1987),c=r(1988),l=r(1037),d=r(311),v=r(1989);function w(t){return unescape(encodeURIComponent(t)).length}function y(t,e,r){for(var n,o=[];null!==(n=t.exec(r));)o.push({data:n[0],index:n.index,mode:e,length:n[0].length});return o}function m(t){var e,r,o=y(l.NUMERIC,n.NUMERIC,t),f=y(l.ALPHANUMERIC,n.ALPHANUMERIC,t);return d.isKanjiModeEnabled()?(e=y(l.BYTE,n.BYTE,t),r=y(l.KANJI,n.KANJI,t)):(e=y(l.BYTE_KANJI,n.BYTE,t),r=[]),o.concat(f,e,r).sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function E(t,e){switch(e){case n.NUMERIC:return o.getBitsLength(t);case n.ALPHANUMERIC:return f.getBitsLength(t);case n.KANJI:return c.getBitsLength(t);case n.BYTE:return h.getBitsLength(t)}}function A(data,t){var e,r=n.getBestModeForData(data);if((e=n.from(t,r))!==n.BYTE&&e.bit<r.bit)throw new Error('"'+data+'" cannot be encoded with mode '+n.toString(e)+".\n Suggested mode is: "+n.toString(r));switch(e!==n.KANJI||d.isKanjiModeEnabled()||(e=n.BYTE),e){case n.NUMERIC:return new o(data);case n.ALPHANUMERIC:return new f(data);case n.KANJI:return new c(data);case n.BYTE:return new h(data)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"==typeof e?t.push(A(e,null)):e.data&&t.push(A(e.data,e.mode)),t}),[])},e.fromString=function(data,t){for(var r=function(t,e){for(var table={},r={start:{}},o=["start"],i=0;i<t.length;i++){for(var f=t[i],h=[],c=0;c<f.length;c++){var l=f[c],d=""+i+c;h.push(d),table[d]={node:l,lastCount:0},r[d]={};for(var v=0;v<o.length;v++){var w=o[v];table[w]&&table[w].node.mode===l.mode?(r[w][d]=E(table[w].lastCount+l.length,l.mode)-E(table[w].lastCount,l.mode),table[w].lastCount+=l.length):(table[w]&&(table[w].lastCount=l.length),r[w][d]=E(l.length,l.mode)+4+n.getCharCountIndicator(l.mode,e))}}o=h}for(v=0;v<o.length;v++)r[o[v]].end=0;return{map:r,table:table}}(function(t){for(var e=[],i=0;i<t.length;i++){var r=t[i];switch(r.mode){case n.NUMERIC:e.push([r,{data:r.data,mode:n.ALPHANUMERIC,length:r.length},{data:r.data,mode:n.BYTE,length:r.length}]);break;case n.ALPHANUMERIC:e.push([r,{data:r.data,mode:n.BYTE,length:r.length}]);break;case n.KANJI:e.push([r,{data:r.data,mode:n.BYTE,length:w(r.data)}]);break;case n.BYTE:e.push([{data:r.data,mode:n.BYTE,length:w(r.data)}])}}return e}(m(data,d.isKanjiModeEnabled())),t),path=v.find_path(r.map,"start","end"),o=[],i=1;i<path.length-1;i++)o.push(r.table[path[i]].node);return e.fromArray(function(t){return t.reduce((function(t,e){var r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}(o))},e.rawSplit=function(data){return e.fromArray(m(data,d.isKanjiModeEnabled()))}},1985:function(t,e,r){var n=r(312);function o(data){this.mode=n.NUMERIC,this.data=data.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){var i,e,r;for(i=0;i+3<=this.data.length;i+=3)e=this.data.substr(i,3),r=parseInt(e,10),t.put(r,10);var n=this.data.length-i;n>0&&(e=this.data.substr(i),r=parseInt(e,10),t.put(r,3*n+1))},t.exports=o},1986:function(t,e,r){var n=r(312),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function f(data){this.mode=n.ALPHANUMERIC,this.data=data}f.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},f.prototype.getLength=function(){return this.data.length},f.prototype.getBitsLength=function(){return f.getBitsLength(this.data.length)},f.prototype.write=function(t){var i;for(i=0;i+2<=this.data.length;i+=2){var e=45*o.indexOf(this.data[i]);e+=o.indexOf(this.data[i+1]),t.put(e,11)}this.data.length%2&&t.put(o.indexOf(this.data[i]),6)},t.exports=f},1987:function(t,e,r){var n=r(375),o=r(312);function f(data){this.mode=o.BYTE,this.data=n.from(data)}f.getBitsLength=function(t){return 8*t},f.prototype.getLength=function(){return this.data.length},f.prototype.getBitsLength=function(){return f.getBitsLength(this.data.length)},f.prototype.write=function(t){for(var i=0,e=this.data.length;i<e;i++)t.put(this.data[i],8)},t.exports=f},1988:function(t,e,r){var n=r(312),o=r(311);function f(data){this.mode=n.KANJI,this.data=data}f.getBitsLength=function(t){return 13*t},f.prototype.getLength=function(){return this.data.length},f.prototype.getBitsLength=function(){return f.getBitsLength(this.data.length)},f.prototype.write=function(t){var i;for(i=0;i<this.data.length;i++){var e=o.toSJIS(this.data[i]);if(e>=33088&&e<=40956)e-=33088;else{if(!(e>=57408&&e<=60351))throw new Error("Invalid SJIS character: "+this.data[i]+"\nMake sure your charset is UTF-8");e-=49472}e=192*(e>>>8&255)+(255&e),t.put(e,13)}},t.exports=f},1990:function(t,e,r){var n=r(1038);e.render=function(t,canvas,e){var r=e,o=canvas;void 0!==r||canvas&&canvas.getContext||(r=canvas,canvas=void 0),canvas||(o=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),r=n.getOptions(r);var f=n.getImageWidth(t.modules.size,r),h=o.getContext("2d"),image=h.createImageData(f,f);return n.qrToImageData(image.data,t,r),function(t,canvas,e){t.clearRect(0,0,canvas.width,canvas.height),canvas.style||(canvas.style={}),canvas.height=e,canvas.width=e,canvas.style.height=e+"px",canvas.style.width=e+"px"}(h,o,f),h.putImageData(image,0,0),o},e.renderToDataURL=function(t,canvas,r){var n=r;void 0!==n||canvas&&canvas.getContext||(n=canvas,canvas=void 0),n||(n={});var o=e.render(t,canvas,n),f=n.type||"image/png",h=n.rendererOpts||{};return o.toDataURL(f,h.quality)}},1991:function(t,e,r){var n=r(1038);function o(t,e){var r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function f(t,e,r){var n=t+e;return void 0!==r&&(n+=" "+r),n}e.render=function(t,e,r){var h=n.getOptions(e),c=t.modules.size,data=t.modules.data,l=c+2*h.margin,d=h.color.light.a?"<path "+o(h.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",path="<path "+o(h.color.dark,"stroke")+' d="'+function(data,t,e){for(var path="",r=0,n=!1,o=0,i=0;i<data.length;i++){var col=Math.floor(i%t),h=Math.floor(i/t);col||n||(n=!0),data[i]?(o++,i>0&&col>0&&data[i-1]||(path+=n?f("M",col+e,.5+h+e):f("m",r,0),r=0,n=!1),col+1<t&&data[i+1]||(path+=f("h",o),o=0)):r++}return path}(data,c,h.margin)+'"/>',v='viewBox="0 0 '+l+" "+l+'"',w='<svg xmlns="http://www.w3.org/2000/svg" '+(h.width?'width="'+h.width+'" height="'+h.width+'" ':"")+v+' shape-rendering="crispEdges">'+d+path+"</svg>\n";return"function"==typeof r&&r(null,w),w}},311:function(t,e){var r,n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return n[t]},e.getBCHDigit=function(data){for(var t=0;0!==data;)t++,data>>>=1;return t},e.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');r=t},e.isKanjiModeEnabled=function(){return void 0!==r},e.toSJIS=function(t){return r(t)}},312:function(t,e,r){var n=r(1036),o=r(1037);e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!n.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(t){return r}}},375:function(t,e,r){"use strict";var n=r(711);f.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(t){return!1}}();var o=f.TYPED_ARRAY_SUPPORT?2147483647:1073741823;function f(t,e,r){return f.TYPED_ARRAY_SUPPORT||this instanceof f?"number"==typeof t?l(this,t):function(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');if("undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer)return function(t,e,r,n){if(r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");var o;o=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n);f.TYPED_ARRAY_SUPPORT?o.__proto__=f.prototype:o=d(t,o);return o}(t,e,r,n);if("string"==typeof e)return function(t,e){var r=0|w(e),n=c(t,r),o=n.write(e);o!==r&&(n=n.slice(0,o));return n}(t,e);return function(t,e){if(f.isBuffer(e)){var r=0|h(e.length),n=c(t,r);return 0===n.length||e.copy(n,0,0,r),n}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(o=e.length)!=o?c(t,0):d(t,e);if("Buffer"===e.type&&Array.isArray(e.data))return d(t,e.data)}var o;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}(this,t,e,r):new f(t,e,r)}function h(t){if(t>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return 0|t}function c(t,e){var r;return f.TYPED_ARRAY_SUPPORT?(r=new Uint8Array(e)).__proto__=f.prototype:(null===(r=t)&&(r=new f(e)),r.length=e),r}function l(t,e){var r=c(t,e<0?0:0|h(e));if(!f.TYPED_ARRAY_SUPPORT)for(var i=0;i<e;++i)r[i]=0;return r}function d(t,e){for(var r=e.length<0?0:0|h(e.length),n=c(t,r),i=0;i<r;i+=1)n[i]=255&e[i];return n}function v(t,e){var r;e=e||1/0;for(var n=t.length,o=null,f=[],i=0;i<n;++i){if((r=t.charCodeAt(i))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&f.push(239,191,189);continue}if(i+1===n){(e-=3)>-1&&f.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&f.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&f.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;f.push(r)}else if(r<2048){if((e-=2)<0)break;f.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;f.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;f.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return f}function w(t){return f.isBuffer(t)?t.length:"undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer)?t.byteLength:("string"!=typeof t&&(t=""+t),0===t.length?0:v(t).length)}f.TYPED_ARRAY_SUPPORT&&(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&f[Symbol.species]===f&&Object.defineProperty(f,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})),f.prototype.write=function(t,e,r){void 0===e||void 0===r&&"string"==typeof e?(r=this.length,e=0):isFinite(e)&&(e|=0,isFinite(r)?r|=0:r=void 0);var n=this.length-e;if((void 0===r||r>n)&&(r=n),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");return function(t,e,r,n){return function(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}(v(e,t.length-r),t,r,n)}(this,t,e,r)},f.prototype.slice=function(t,e){var r,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),f.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=f.prototype;else{var o=e-t;r=new f(o,void 0);for(var i=0;i<o;++i)r[i]=this[i+t]}return r},f.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i,o=n-r;if(this===t&&r<e&&e<n)for(i=o-1;i>=0;--i)t[i+e]=this[i+r];else if(o<1e3||!f.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+o),e);return o},f.prototype.fill=function(t,e,r){if("string"==typeof t){if("string"==typeof e?(e=0,r=this.length):"string"==typeof r&&(r=this.length),1===t.length){var code=t.charCodeAt(0);code<256&&(t=code)}}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var i;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{var n=f.isBuffer(t)?t:new f(t),o=n.length;for(i=0;i<r-e;++i)this[i+e]=n[i%o]}return this},f.concat=function(t,e){if(!n(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return c(null,0);var i;if(void 0===e)for(e=0,i=0;i<t.length;++i)e+=t[i].length;var r=l(null,e),o=0;for(i=0;i<t.length;++i){var h=t[i];if(!f.isBuffer(h))throw new TypeError('"list" argument must be an Array of Buffers');h.copy(r,o),o+=h.length}return r},f.byteLength=w,f.prototype._isBuffer=!0,f.isBuffer=function(b){return!(null==b||!b._isBuffer)},t.exports.alloc=function(t){var e=new f(t);return e.fill(0),e},t.exports.from=function(data){return new f(data)}},711:function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},712:function(t,e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(t){return r}}}}]);