(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1001:function(n,t,r){var e=function(){throw"This swarm.js function isn't available on the browser."},o={readFile:e},c={download:e,safeDownloadArchived:e,directoryTree:e},f={platform:e,arch:e},path={join:e,slice:e},l={spawn:e},d={lookup:e},h=r(1902),v=r(1002),m=r(1914),y=r(1916),w=r(1917);n.exports=w({fs:o,files:c,os:f,path:path,child_process:l,defaultArchives:{},mimetype:d,request:h,downloadUrl:null,bytes:v,hash:m,pick:y})},1002:function(n,t,r){r(1913);var e=function(n,t){return parseInt(n.slice(2*t+2,2*t+4),16)},o=function(a){return(a.length-2)/2},c=function(n){for(var t=[],i=2,r=n.length;i<r;i+=2)t.push(parseInt(n.slice(i,i+2),16));return t},f=function(n){for(var t="0x",i=0,r=n.length;i<r;++i){var b=n[i];t+=(b<16?"0":"")+b.toString(16)}return t};n.exports={random:function(n){var t=void 0;t="undefined"!=typeof window&&window.crypto&&window.crypto.getRandomValues?window.crypto.getRandomValues(new Uint8Array(n)):r(231).randomBytes(n);for(var e="0x",i=0;i<n;++i)e+=("00"+t[i].toString(16)).slice(-2);return e},length:o,concat:function(a,b){return a.concat(b.slice(2))},flatten:function(a){return"0x"+a.reduce((function(n,s){return n+s.slice(2)}),"")},slice:function(i,n,t){return"0x"+t.slice(2*i+2,2*n+2)},reverse:function(n){for(var t="0x",i=0,r=o(n);i<r;++i)t+=n.slice(2*(r-i),2*(r-i+1));return t},pad:function n(t,r){return r.length===2*t+2?r:n(t,"0x0"+r.slice(2))},padRight:function n(t,r){return r.length===2*t+2?r:n(t,r+"0")},fromAscii:function(n){for(var t="0x",i=0;i<n.length;++i)t+=("00"+n.charCodeAt(i).toString(16)).slice(-2);return t},toAscii:function(n){for(var t="",i=2;i<n.length;i+=2)t+=String.fromCharCode(parseInt(n.slice(i,i+2),16));return t},fromString:function(s){for(var n=function(n){var b=n.toString(16);return b.length<2?"0"+b:b},t="0x",r=0;r!=s.length;r++){var e=s.charCodeAt(r);if(e<128)t+=n(e);else{if(e<2048)t+=n(e>>6|192);else{if(e>55295&&e<56320){if(++r==s.length)return null;var o=s.charCodeAt(r);if(o<56320||o>57343)return null;t+=n((e=65536+((1023&e)<<10)+(1023&o))>>18|240),t+=n(e>>12&63|128)}else t+=n(e>>12|224);t+=n(e>>6&63|128)}t+=n(63&e|128)}}return t},toString:function(n){for(var s="",i=0,t=o(n);i<t;){var r=e(n,i++);if(r>127){if(r>191&&r<224){if(i>=t)return null;r=(31&r)<<6|63&e(n,i)}else if(r>223&&r<240){if(i+1>=t)return null;r=(15&r)<<12|(63&e(n,i))<<6|63&e(n,++i)}else{if(!(r>239&&r<248))return null;if(i+2>=t)return null;r=(7&r)<<18|(63&e(n,i))<<12|(63&e(n,++i))<<6|63&e(n,++i)}++i}if(r<=65535)s+=String.fromCharCode(r);else{if(!(r<=1114111))return null;r-=65536,s+=String.fromCharCode(r>>10|55296),s+=String.fromCharCode(1023&r|56320)}}return s},fromNumber:function(n){var t=n.toString(16);return t.length%2==0?"0x"+t:"0x0"+t},toNumber:function(n){return parseInt(n.slice(2),16)},fromNat:function(n){return"0x0"===n?"0x":n.length%2==0?n:"0x0"+n.slice(2)},toNat:function(n){return"0"===n[2]?"0x"+n.slice(3):n},fromArray:f,toArray:c,fromUint8Array:function(n){return f([].slice.call(n,0))},toUint8Array:function(n){return new Uint8Array(c(n))}}},1913:function(n,t){var r=function(n,t){for(var a=[],i=0;i<n;++i)a.push(t(i));return a};n.exports={generate:r,replicate:function(n,t){return r(n,(function(){return t}))},concat:function(a,b){return a.concat(b)},flatten:function(a){for(var n=[],t=0,r=a.length;t<r;++t)for(var i=0,e=a[t].length;i<e;++i)n.push(a[t][i]);return n},chunksOf:function(n,a){for(var b=[],i=0,t=a.length;i<t;i+=n)b.push(a.slice(i,i+n));return b}}},1914:function(n,t,r){var e=r(1915).keccak256,o=r(1002),c=function(n,data){var t=o.reverse(o.pad(6,o.fromNumber(n))),r=o.flatten([t,"0x0000",data]);return e(r).slice(2)};n.exports=function n(data){"string"==typeof data&&"0x"!==data.slice(0,2)?data=o.fromString(data):"string"!=typeof data&&void 0!==data.length&&(data=o.fromUint8Array(data));var t=o.length(data);if(t<=4096)return c(t,data);for(var r=4096;128*r<t;)r*=128;for(var e=[],i=0;i<t;i+=r){var f=r<t-i?r:t-i;e.push(n(o.slice(data,i,i+f)))}return c(t,o.flatten(e))}},1915:function(n,t){var r="0123456789abcdef".split(""),e=[1,256,65536,16777216],o=[0,8,16,24],c=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],f=function(s){var n,t,r,e,o,f,l,d,h,v,m,y,w,k,x,A,D,P,S,T,C,F,E,z,I,O,U,j,B,L,N,R,M,J,G,K,V,_,H,Q,W,X,Y,Z,$,nn,tn,rn,en,on,un,an,cn,fn,sn,ln,dn,hn,pn,vn,mn,yn,wn;for(r=0;r<48;r+=2)e=s[0]^s[10]^s[20]^s[30]^s[40],o=s[1]^s[11]^s[21]^s[31]^s[41],f=s[2]^s[12]^s[22]^s[32]^s[42],l=s[3]^s[13]^s[23]^s[33]^s[43],d=s[4]^s[14]^s[24]^s[34]^s[44],h=s[5]^s[15]^s[25]^s[35]^s[45],v=s[6]^s[16]^s[26]^s[36]^s[46],m=s[7]^s[17]^s[27]^s[37]^s[47],n=(y=s[8]^s[18]^s[28]^s[38]^s[48])^(f<<1|l>>>31),t=(w=s[9]^s[19]^s[29]^s[39]^s[49])^(l<<1|f>>>31),s[0]^=n,s[1]^=t,s[10]^=n,s[11]^=t,s[20]^=n,s[21]^=t,s[30]^=n,s[31]^=t,s[40]^=n,s[41]^=t,n=e^(d<<1|h>>>31),t=o^(h<<1|d>>>31),s[2]^=n,s[3]^=t,s[12]^=n,s[13]^=t,s[22]^=n,s[23]^=t,s[32]^=n,s[33]^=t,s[42]^=n,s[43]^=t,n=f^(v<<1|m>>>31),t=l^(m<<1|v>>>31),s[4]^=n,s[5]^=t,s[14]^=n,s[15]^=t,s[24]^=n,s[25]^=t,s[34]^=n,s[35]^=t,s[44]^=n,s[45]^=t,n=d^(y<<1|w>>>31),t=h^(w<<1|y>>>31),s[6]^=n,s[7]^=t,s[16]^=n,s[17]^=t,s[26]^=n,s[27]^=t,s[36]^=n,s[37]^=t,s[46]^=n,s[47]^=t,n=v^(e<<1|o>>>31),t=m^(o<<1|e>>>31),s[8]^=n,s[9]^=t,s[18]^=n,s[19]^=t,s[28]^=n,s[29]^=t,s[38]^=n,s[39]^=t,s[48]^=n,s[49]^=t,k=s[0],x=s[1],nn=s[11]<<4|s[10]>>>28,tn=s[10]<<4|s[11]>>>28,j=s[20]<<3|s[21]>>>29,B=s[21]<<3|s[20]>>>29,vn=s[31]<<9|s[30]>>>23,mn=s[30]<<9|s[31]>>>23,X=s[40]<<18|s[41]>>>14,Y=s[41]<<18|s[40]>>>14,J=s[2]<<1|s[3]>>>31,G=s[3]<<1|s[2]>>>31,A=s[13]<<12|s[12]>>>20,D=s[12]<<12|s[13]>>>20,rn=s[22]<<10|s[23]>>>22,en=s[23]<<10|s[22]>>>22,L=s[33]<<13|s[32]>>>19,N=s[32]<<13|s[33]>>>19,yn=s[42]<<2|s[43]>>>30,wn=s[43]<<2|s[42]>>>30,fn=s[5]<<30|s[4]>>>2,sn=s[4]<<30|s[5]>>>2,K=s[14]<<6|s[15]>>>26,V=s[15]<<6|s[14]>>>26,P=s[25]<<11|s[24]>>>21,S=s[24]<<11|s[25]>>>21,on=s[34]<<15|s[35]>>>17,un=s[35]<<15|s[34]>>>17,R=s[45]<<29|s[44]>>>3,M=s[44]<<29|s[45]>>>3,z=s[6]<<28|s[7]>>>4,I=s[7]<<28|s[6]>>>4,ln=s[17]<<23|s[16]>>>9,dn=s[16]<<23|s[17]>>>9,_=s[26]<<25|s[27]>>>7,H=s[27]<<25|s[26]>>>7,T=s[36]<<21|s[37]>>>11,C=s[37]<<21|s[36]>>>11,an=s[47]<<24|s[46]>>>8,cn=s[46]<<24|s[47]>>>8,Z=s[8]<<27|s[9]>>>5,$=s[9]<<27|s[8]>>>5,O=s[18]<<20|s[19]>>>12,U=s[19]<<20|s[18]>>>12,hn=s[29]<<7|s[28]>>>25,pn=s[28]<<7|s[29]>>>25,Q=s[38]<<8|s[39]>>>24,W=s[39]<<8|s[38]>>>24,F=s[48]<<14|s[49]>>>18,E=s[49]<<14|s[48]>>>18,s[0]=k^~A&P,s[1]=x^~D&S,s[10]=z^~O&j,s[11]=I^~U&B,s[20]=J^~K&_,s[21]=G^~V&H,s[30]=Z^~nn&rn,s[31]=$^~tn&en,s[40]=fn^~ln&hn,s[41]=sn^~dn&pn,s[2]=A^~P&T,s[3]=D^~S&C,s[12]=O^~j&L,s[13]=U^~B&N,s[22]=K^~_&Q,s[23]=V^~H&W,s[32]=nn^~rn&on,s[33]=tn^~en&un,s[42]=ln^~hn&vn,s[43]=dn^~pn&mn,s[4]=P^~T&F,s[5]=S^~C&E,s[14]=j^~L&R,s[15]=B^~N&M,s[24]=_^~Q&X,s[25]=H^~W&Y,s[34]=rn^~on&an,s[35]=en^~un&cn,s[44]=hn^~vn&yn,s[45]=pn^~mn&wn,s[6]=T^~F&k,s[7]=C^~E&x,s[16]=L^~R&z,s[17]=N^~M&I,s[26]=Q^~X&J,s[27]=W^~Y&G,s[36]=on^~an&Z,s[37]=un^~cn&$,s[46]=vn^~yn&fn,s[47]=mn^~wn&sn,s[8]=F^~k&A,s[9]=E^~x&D,s[18]=R^~z&O,s[19]=M^~I&U,s[28]=X^~J&K,s[29]=Y^~G&V,s[38]=an^~Z&nn,s[39]=cn^~$&tn,s[48]=yn^~fn&ln,s[49]=wn^~sn&dn,s[0]^=c[r],s[1]^=c[r+1]},l=function(n){return function(t){var c;if("0x"===t.slice(0,2)){c=[];for(var i=2,l=t.length;i<l;i+=2)c.push(parseInt(t.slice(i,i+2),16))}else c=t;return function(n,t){for(var code,c=t.length,l=n.blocks,d=n.blockCount<<2,h=n.blockCount,v=n.outputBlocks,s=n.s,m=0;m<c;){if(n.reset)for(n.reset=!1,l[0]=n.block,i=1;i<h+1;++i)l[i]=0;if("string"!=typeof t)for(i=n.start;m<c&&i<d;++m)l[i>>2]|=t[m]<<o[3&i++];else for(i=n.start;m<c&&i<d;++m)(code=t.charCodeAt(m))<128?l[i>>2]|=code<<o[3&i++]:code<2048?(l[i>>2]|=(192|code>>6)<<o[3&i++],l[i>>2]|=(128|63&code)<<o[3&i++]):code<55296||code>=57344?(l[i>>2]|=(224|code>>12)<<o[3&i++],l[i>>2]|=(128|code>>6&63)<<o[3&i++],l[i>>2]|=(128|63&code)<<o[3&i++]):(code=65536+((1023&code)<<10|1023&t.charCodeAt(++m)),l[i>>2]|=(240|code>>18)<<o[3&i++],l[i>>2]|=(128|code>>12&63)<<o[3&i++],l[i>>2]|=(128|code>>6&63)<<o[3&i++],l[i>>2]|=(128|63&code)<<o[3&i++]);if(n.lastByteIndex=i,i>=d){for(n.start=i-d,n.block=l[h],i=0;i<h;++i)s[i]^=l[i];f(s),n.reset=!0}else n.start=i}if(l[(i=n.lastByteIndex)>>2]|=e[3&i],n.lastByteIndex===d)for(l[0]=l[h],i=1;i<h+1;++i)l[i]=0;for(l[h-1]|=2147483648,i=0;i<h;++i)s[i]^=l[i];f(s);for(var y,w="",i=0,k=0;k<v;){for(i=0;i<h&&k<v;++i,++k)y=s[i],w+=r[y>>4&15]+r[15&y]+r[y>>12&15]+r[y>>8&15]+r[y>>20&15]+r[y>>16&15]+r[y>>28&15]+r[y>>24&15];k%h==0&&(f(s),i=0)}return"0x"+w}(function(n){return{blocks:[],reset:!0,block:0,start:0,blockCount:1600-(n<<1)>>5,outputBlocks:n>>5,s:(s=[0,0,0,0,0,0,0,0,0,0],[].concat(s,s,s,s,s))};var s}(n),c)}};n.exports={keccak256:l(256),keccak512:l(512),keccak256s:l(256),keccak512s:l(512)}},1916:function(n,t){var r=function(n){return function(){return new Promise((function(t,r){var e,o=function(r){var e={},o=r.target.files.length,c=0;[].map.call(r.target.files,(function(r){var f=new FileReader;f.onload=function(f){var data=new Uint8Array(f.target.result);if("directory"===n){var path=r.webkitRelativePath;e[path.slice(path.indexOf("/")+1)]={type:"text/plain",data:data},++c===o&&t(e)}else if("file"===n){var l=r.webkitRelativePath;t({type:mimetype.lookup(l),data:data})}else t(data)},f.readAsArrayBuffer(r)}))};"directory"===n?((e=document.createElement("input")).addEventListener("change",o),e.type="file",e.webkitdirectory=!0,e.mozdirectory=!0,e.msdirectory=!0,e.odirectory=!0,e.directory=!0):((e=document.createElement("input")).addEventListener("change",o),e.type="file");var c=document.createEvent("MouseEvents");c.initEvent("click",!0,!1),e.dispatchEvent(c)}))}};n.exports={data:r("data"),file:r("file"),directory:r("directory")}},1917:function(n,t){n.exports=function(n){var t=n.fs,r=n.files,e=n.os,path=n.path,o=n.child_process,c=n.mimetype,f=n.defaultArchives,l=n.request,d=n.downloadUrl,h=n.bytes,v=n.hash,m=n.pick,y=function(n){return function(t){for(var map={},i=0,r=n.length;i<r;++i)map[n[i]]=t[i];return map}},w=function(n){return function(t){return"".concat(n,"/bzz-raw:/").concat(t)}},k=function(n){return function(t){return new Promise((function(r,e){l(w(n)(t),{responseType:"arraybuffer"},(function(n,t,o){return n?e(n):o.statusCode>=400?e(new Error("Error ".concat(o.statusCode,"."))):r(new Uint8Array(t))}))}))}},x=function(n){return function(t){return function t(r){return function(path){return function(e){var o=function(n){return void 0===n.path?Promise.resolve():"application/bzz-manifest+json"===n.contentType?t(n.hash)(path+n.path)(e):Promise.resolve((r=path+n.path,function(n){return function(map){return map[r]=n,map}})(function(n){return{type:n.contentType,hash:n.hash}}(n))(e));var r};return k(n)(r).then((function(text){return JSON.parse(G(text)).entries})).then((function(n){return Promise.all(n.map(o))})).then((function(){return e}))}}}(t)("")({})}},A=function(n){return function(t){return x(n)(t).then((function(n){return y(Object.keys(n))(Object.keys(n).map((function(t){return n[t].hash})))}))}},D=function(n){return function(t){return x(n)(t).then((function(t){var r=Object.keys(t),e=r.map((function(path){return t[path].hash})),o=r.map((function(path){return t[path].type})),c=e.map(k(n));return Promise.all(c).then((function(n){return y(r)(function(n){return n.map((function(data,i){return{type:o[i],data:data}}))}(n))}))}))}},P=function(n){return function(t){return function(e){return r.download(w(n)(t))(e)}}},S=function(n){return function(t){return function(r){return A(n)(t).then((function(t){var e=[];for(var o in t)if(o.length>0){var c=path.join(r,o);e.push(P(n)(t[o])(c))}return Promise.all(e).then((function(){return r}))}))}}},T=function(n){return function(data){return new Promise((function(t,r){var e={body:"string"==typeof data?K(data):data,method:"POST"};l("".concat(n,"/bzz-raw:/"),e,(function(n,data){return n?r(n):t(data)}))}))}},C=function(n){return function(t){return function(r){return function(e){return function o(c){var f="/"===r[0]?r:"/"+r,d="".concat(n,"/bzz:/").concat(t).concat(f),h={method:"PUT",headers:{"Content-Type":e.type},body:e.data};return new Promise((function(n,t){l(d,h,(function(r,data){return r?t(r):-1!==data.indexOf("error")?t(data):n(data)}))})).catch((function(n){return c>0&&o(c-1)}))}(3)}}}},F=function(n){return function(t){return z(n)({"":t})}},E=function(n){return function(r){return t.readFile(r).then((function(data){return F(n)({type:c.lookup(r),data:data})}))}},z=function(n){return function(t){return T(n)("{}").then((function(r){return Object.keys(t).reduce((function(r,e){return r.then(function(r){return function(e){return C(n)(e)(r)(t[r])}}(e))}),Promise.resolve(r))}))}},I=function(n){return function(r){return t.readFile(r).then(T(n))}},O=function(n){return function(e){return function(o){return r.directoryTree(o).then((function(n){return Promise.all(n.map((function(path){return t.readFile(path)}))).then((function(t){var r=n.map((function(path){return path.slice(o.length)})),e=n.map((function(path){return c.lookup(path)||"text/plain"}));return y(r)(t.map((function(data,i){return{type:e[i],data:data}})))}))})).then((function(n){return(a=e?{"":n[e]}:{},function(b){var map={};for(var n in a)map[n]=a[n];for(var t in b)map[t]=b[t];return map})(n);var a})).then(z(n))}}},U=function(n){return function(t){if("data"===t.pick)return m.data().then(T(n));if("file"===t.pick)return m.file().then(F(n));if("directory"===t.pick)return m.directory().then(z(n));if(t.path)switch(t.kind){case"data":return I(n)(t.path);case"file":return E(n)(t.path);case"directory":return O(n)(t.defaultFile)(t.path)}else{if(t.length||"string"==typeof t)return T(n)(t);if(t instanceof Object)return z(n)(t)}return Promise.reject(new Error("Bad arguments"))}},j=function(n){return function(t){return function(path){return M(n)(t).then((function(r){return r?path?S(n)(t)(path):D(n)(t):path?P(n)(t)(path):k(n)(t)}))}}},B=function(path,n){var t=e.platform().replace("win32","windows")+"-"+("x64"===e.arch()?"amd64":"386"),o=(n||f)[t],c=d+o.archive+".tar.gz",l=o.archiveMD5,h=o.binaryMD5;return r.safeDownloadArchived(c)(l)(h)(path)},L=function(n){return new Promise((function(t,r){var e=o.spawn,c=function(n){return function(t){return-1!==(""+t).indexOf(n)}},f=n.account,l=n.password,d=n.dataDir,h=n.ensApi,v=n.privateKey,m=0,y=e(n.binPath,["--bzzaccount",f||v,"--datadir",d,"--ens-api",h]),w=function(data){0===m&&c("Passphrase")(data)?setTimeout((function(){m=1,y.stdin.write(l+"\n")}),500):c("Swarm http proxy started")(data)&&(m=2,clearTimeout(k),t(y))};y.stdout.on("data",w),y.stderr.on("data",w);var k=setTimeout((function(){return r(new Error("Couldn't start swarm process."))}),2e4)}))},N=function(n){return new Promise((function(t,r){n.stderr.removeAllListeners("data"),n.stdout.removeAllListeners("data"),n.stdin.removeAllListeners("error"),n.removeAllListeners("error"),n.removeAllListeners("exit"),n.kill("SIGINT");var e=setTimeout((function(){return n.kill("SIGKILL")}),8e3);n.once("close",(function(){clearTimeout(e),t()}))}))},R=function(n){return T(n)("test").then((function(n){return"c9a99c7d326dcc6316f32fe2625b311f6dc49a175e6877681ded93137d3569e7"===n})).catch((function(){return!1}))},M=function(n){return function(t){return k(n)(t).then((function(data){try{return!!JSON.parse(G(data)).entries}catch(n){return!1}}))}},J=function(n){return function(a,b,t,r,e){var p;return void 0!==a&&(p=n(a)),void 0!==b&&(p=n(b)),void 0!==t&&(p=n(t)),void 0!==r&&(p=n(r)),void 0!==e&&(p=n(e)),p}},G=function(n){return h.toString(h.fromUint8Array(n))},K=function(n){return h.toUint8Array(h.fromString(n))},V=function(n){return{download:function(t,path){return j(n)(t)(path)},downloadData:J(k(n)),downloadDataToDisk:J(P(n)),downloadDirectory:J(D(n)),downloadDirectoryToDisk:J(S(n)),downloadEntries:J(x(n)),downloadRoutes:J(A(n)),isAvailable:function(){return R(n)},upload:function(t){return U(n)(t)},uploadData:J(T(n)),uploadFile:J(F(n)),uploadFileFromDisk:J(F(n)),uploadDataFromDisk:J(I(n)),uploadDirectory:J(z(n)),uploadDirectoryFromDisk:J(O(n)),uploadToManifest:J(C(n)),pick:m,hash:v,fromString:K,toString:G}};return{at:V,local:function(n){return function(t){return R("http://localhost:8500").then((function(r){return r?t(V("http://localhost:8500")).then((function(){})):B(n.binPath,n.archives).onData((function(data){return(n.onProgress||function(){})(data.length)})).then((function(){return L(n)})).then((function(n){return t(V("http://localhost:8500")).then((function(){return n}))})).then(N)}))}},download:j,downloadBinary:B,downloadData:k,downloadDataToDisk:P,downloadDirectory:D,downloadDirectoryToDisk:S,downloadEntries:x,downloadRoutes:A,isAvailable:R,startProcess:L,stopProcess:N,upload:U,uploadData:T,uploadDataFromDisk:I,uploadFile:F,uploadFileFromDisk:E,uploadDirectory:z,uploadDirectoryFromDisk:O,uploadToManifest:C,pick:m,hash:v,fromString:K,toString:G}}}}]);