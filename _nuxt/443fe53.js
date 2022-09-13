/*!For license information please see LICENSES*/(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{2337:function(e,t,n){(function(r,o){var f;!function(){"use strict";var c="input is invalid type",l="object"==typeof window,h=l?window:{};h.JS_SHA3_NO_WINDOW&&(l=!1);var d=!l&&"object"==typeof self;!h.JS_SHA3_NO_NODE_JS&&"object"==typeof r&&r.versions&&r.versions.node?h=o:d&&(h=self);var v=!h.JS_SHA3_NO_COMMON_JS&&"object"==typeof e&&e.exports,w=n(301),y=!h.JS_SHA3_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,m="0123456789abcdef".split(""),N=[4,1024,262144,67108864],A=[0,8,16,24],O=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],S=[224,256,384,512],_=[128,256],k=["hex","buffer","arrayBuffer","array","digest"],B={128:168,256:136};!h.JS_SHA3_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!y||!h.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});for(var x=function(e,t,n){return function(r){return new P(e,t,e).update(r)[n]()}},C=function(e,t,n){return function(r,o){return new P(e,t,o).update(r)[n]()}},E=function(e,t,n){return function(t,r,o,s){return I["cshake"+e].update(t,r,o,s)[n]()}},R=function(e,t,n){return function(t,r,o,s){return I["kmac"+e].update(t,r,o,s)[n]()}},M=function(e,t,n,r){for(var i=0;i<k.length;++i){var o=k[i];e[o]=t(n,r,o)}return e},D=function(e,t){var n=x(e,t,"hex");return n.create=function(){return new P(e,t,e)},n.update=function(e){return n.create().update(e)},M(n,x,e,t)},F=[{name:"keccak",padding:[1,256,65536,16777216],bits:S,createMethod:D},{name:"sha3",padding:[6,1536,393216,100663296],bits:S,createMethod:D},{name:"shake",padding:[31,7936,2031616,520093696],bits:_,createMethod:function(e,t){var n=C(e,t,"hex");return n.create=function(n){return new P(e,t,n)},n.update=function(e,t){return n.create(t).update(e)},M(n,C,e,t)}},{name:"cshake",padding:N,bits:_,createMethod:function(e,t){var n=B[e],r=E(e,0,"hex");return r.create=function(r,o,s){return o||s?new P(e,t,r).bytepad([o,s],n):I["shake"+e].create(r)},r.update=function(e,t,n,s){return r.create(t,n,s).update(e)},M(r,E,e,t)}},{name:"kmac",padding:N,bits:_,createMethod:function(e,t){var n=B[e],r=R(e,0,"hex");return r.create=function(r,o,s){return new H(e,t,o).bytepad(["KMAC",s],n).bytepad([r],n)},r.update=function(e,t,n,s){return r.create(e,n,s).update(t)},M(r,R,e,t)}}],I={},U=[],i=0;i<F.length;++i)for(var z=F[i],L=z.bits,j=0;j<L.length;++j){var T=z.name+"_"+L[j];if(U.push(T),I[T]=z.createMethod(L[j],z.padding),"sha3"!==z.name){var J=z.name+L[j];U.push(J),I[J]=I[T]}}function P(e,t,n){this.blocks=[],this.s=[],this.padding=t,this.outputBits=n,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(e<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=n>>5,this.extraBytes=(31&n)>>3;for(var i=0;i<50;++i)this.s[i]=0}function H(e,t,n){P.call(this,e,t,n)}P.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if("string"!==n){if("object"!==n)throw c;if(null===e)throw c;if(y&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||y&&ArrayBuffer.isView(e)))throw c;t=!0}for(var i,code,r=this.blocks,o=this.byteCount,f=e.length,l=this.blockCount,h=0,s=this.s;h<f;){if(this.reset)for(this.reset=!1,r[0]=this.block,i=1;i<l+1;++i)r[i]=0;if(t)for(i=this.start;h<f&&i<o;++h)r[i>>2]|=e[h]<<A[3&i++];else for(i=this.start;h<f&&i<o;++h)(code=e.charCodeAt(h))<128?r[i>>2]|=code<<A[3&i++]:code<2048?(r[i>>2]|=(192|code>>6)<<A[3&i++],r[i>>2]|=(128|63&code)<<A[3&i++]):code<55296||code>=57344?(r[i>>2]|=(224|code>>12)<<A[3&i++],r[i>>2]|=(128|code>>6&63)<<A[3&i++],r[i>>2]|=(128|63&code)<<A[3&i++]):(code=65536+((1023&code)<<10|1023&e.charCodeAt(++h)),r[i>>2]|=(240|code>>18)<<A[3&i++],r[i>>2]|=(128|code>>12&63)<<A[3&i++],r[i>>2]|=(128|code>>6&63)<<A[3&i++],r[i>>2]|=(128|63&code)<<A[3&i++]);if(this.lastByteIndex=i,i>=o){for(this.start=i-o,this.block=r[l],i=0;i<l;++i)s[i]^=r[i];$(s),this.reset=!0}else this.start=i}return this}},P.prototype.encode=function(e,t){var n=255&e,r=1,o=[n];for(n=255&(e>>=8);n>0;)o.unshift(n),n=255&(e>>=8),++r;return t?o.push(r):o.unshift(r),this.update(o),o.length},P.prototype.encodeString=function(e){var t,n=typeof e;if("string"!==n){if("object"!==n)throw c;if(null===e)throw c;if(y&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||y&&ArrayBuffer.isView(e)))throw c;t=!0}var r=0,o=e.length;if(t)r=o;else for(var i=0;i<e.length;++i){var code=e.charCodeAt(i);code<128?r+=1:code<2048?r+=2:code<55296||code>=57344?r+=3:(code=65536+((1023&code)<<10|1023&e.charCodeAt(++i)),r+=4)}return r+=this.encode(8*r),this.update(e),r},P.prototype.bytepad=function(e,t){for(var n=this.encode(t),i=0;i<e.length;++i)n+=this.encodeString(e[i]);var r=t-n%t,o=[];return o.length=r,this.update(o),this},P.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,i=this.lastByteIndex,t=this.blockCount,s=this.s;if(e[i>>2]|=this.padding[3&i],this.lastByteIndex===this.byteCount)for(e[0]=e[t],i=1;i<t+1;++i)e[i]=0;for(e[t-1]|=2147483648,i=0;i<t;++i)s[i]^=e[i];$(s)}},P.prototype.toString=P.prototype.hex=function(){this.finalize();for(var e,t=this.blockCount,s=this.s,n=this.outputBlocks,r=this.extraBytes,i=0,o=0,f="";o<n;){for(i=0;i<t&&o<n;++i,++o)e=s[i],f+=m[e>>4&15]+m[15&e]+m[e>>12&15]+m[e>>8&15]+m[e>>20&15]+m[e>>16&15]+m[e>>28&15]+m[e>>24&15];o%t==0&&($(s),i=0)}return r&&(e=s[i],f+=m[e>>4&15]+m[15&e],r>1&&(f+=m[e>>12&15]+m[e>>8&15]),r>2&&(f+=m[e>>20&15]+m[e>>16&15])),f},P.prototype.arrayBuffer=function(){this.finalize();var e,t=this.blockCount,s=this.s,n=this.outputBlocks,r=this.extraBytes,i=0,o=0,f=this.outputBits>>3;e=r?new ArrayBuffer(n+1<<2):new ArrayBuffer(f);for(var c=new Uint32Array(e);o<n;){for(i=0;i<t&&o<n;++i,++o)c[o]=s[i];o%t==0&&$(s)}return r&&(c[i]=s[i],e=e.slice(0,f)),e},P.prototype.buffer=P.prototype.arrayBuffer,P.prototype.digest=P.prototype.array=function(){this.finalize();for(var e,t,n=this.blockCount,s=this.s,r=this.outputBlocks,o=this.extraBytes,i=0,f=0,c=[];f<r;){for(i=0;i<n&&f<r;++i,++f)e=f<<2,t=s[i],c[e]=255&t,c[e+1]=t>>8&255,c[e+2]=t>>16&255,c[e+3]=t>>24&255;f%n==0&&$(s)}return o&&(e=f<<2,t=s[i],c[e]=255&t,o>1&&(c[e+1]=t>>8&255),o>2&&(c[e+2]=t>>16&255)),c},H.prototype=new P,H.prototype.finalize=function(){return this.encode(this.outputBits,!0),P.prototype.finalize.call(this)};var $=function(s){var e,t,n,r,o,f,c,l,h,d,v,w,y,m,N,A,S,_,k,B,x,C,E,R,M,D,F,I,U,z,L,j,T,J,P,H,$,G,V,W,Y,K,X,Z,Q,ee,te,ne,re,ie,oe,se,ue,fe,ce,ae,le,he,pe,ge,de,ve,we;for(n=0;n<48;n+=2)r=s[0]^s[10]^s[20]^s[30]^s[40],o=s[1]^s[11]^s[21]^s[31]^s[41],f=s[2]^s[12]^s[22]^s[32]^s[42],c=s[3]^s[13]^s[23]^s[33]^s[43],l=s[4]^s[14]^s[24]^s[34]^s[44],h=s[5]^s[15]^s[25]^s[35]^s[45],d=s[6]^s[16]^s[26]^s[36]^s[46],v=s[7]^s[17]^s[27]^s[37]^s[47],e=(w=s[8]^s[18]^s[28]^s[38]^s[48])^(f<<1|c>>>31),t=(y=s[9]^s[19]^s[29]^s[39]^s[49])^(c<<1|f>>>31),s[0]^=e,s[1]^=t,s[10]^=e,s[11]^=t,s[20]^=e,s[21]^=t,s[30]^=e,s[31]^=t,s[40]^=e,s[41]^=t,e=r^(l<<1|h>>>31),t=o^(h<<1|l>>>31),s[2]^=e,s[3]^=t,s[12]^=e,s[13]^=t,s[22]^=e,s[23]^=t,s[32]^=e,s[33]^=t,s[42]^=e,s[43]^=t,e=f^(d<<1|v>>>31),t=c^(v<<1|d>>>31),s[4]^=e,s[5]^=t,s[14]^=e,s[15]^=t,s[24]^=e,s[25]^=t,s[34]^=e,s[35]^=t,s[44]^=e,s[45]^=t,e=l^(w<<1|y>>>31),t=h^(y<<1|w>>>31),s[6]^=e,s[7]^=t,s[16]^=e,s[17]^=t,s[26]^=e,s[27]^=t,s[36]^=e,s[37]^=t,s[46]^=e,s[47]^=t,e=d^(r<<1|o>>>31),t=v^(o<<1|r>>>31),s[8]^=e,s[9]^=t,s[18]^=e,s[19]^=t,s[28]^=e,s[29]^=t,s[38]^=e,s[39]^=t,s[48]^=e,s[49]^=t,m=s[0],N=s[1],ee=s[11]<<4|s[10]>>>28,te=s[10]<<4|s[11]>>>28,I=s[20]<<3|s[21]>>>29,U=s[21]<<3|s[20]>>>29,ge=s[31]<<9|s[30]>>>23,de=s[30]<<9|s[31]>>>23,K=s[40]<<18|s[41]>>>14,X=s[41]<<18|s[40]>>>14,J=s[2]<<1|s[3]>>>31,P=s[3]<<1|s[2]>>>31,A=s[13]<<12|s[12]>>>20,S=s[12]<<12|s[13]>>>20,ne=s[22]<<10|s[23]>>>22,re=s[23]<<10|s[22]>>>22,z=s[33]<<13|s[32]>>>19,L=s[32]<<13|s[33]>>>19,ve=s[42]<<2|s[43]>>>30,we=s[43]<<2|s[42]>>>30,fe=s[5]<<30|s[4]>>>2,ce=s[4]<<30|s[5]>>>2,H=s[14]<<6|s[15]>>>26,$=s[15]<<6|s[14]>>>26,_=s[25]<<11|s[24]>>>21,k=s[24]<<11|s[25]>>>21,ie=s[34]<<15|s[35]>>>17,oe=s[35]<<15|s[34]>>>17,j=s[45]<<29|s[44]>>>3,T=s[44]<<29|s[45]>>>3,R=s[6]<<28|s[7]>>>4,M=s[7]<<28|s[6]>>>4,ae=s[17]<<23|s[16]>>>9,le=s[16]<<23|s[17]>>>9,G=s[26]<<25|s[27]>>>7,V=s[27]<<25|s[26]>>>7,B=s[36]<<21|s[37]>>>11,x=s[37]<<21|s[36]>>>11,se=s[47]<<24|s[46]>>>8,ue=s[46]<<24|s[47]>>>8,Z=s[8]<<27|s[9]>>>5,Q=s[9]<<27|s[8]>>>5,D=s[18]<<20|s[19]>>>12,F=s[19]<<20|s[18]>>>12,he=s[29]<<7|s[28]>>>25,pe=s[28]<<7|s[29]>>>25,W=s[38]<<8|s[39]>>>24,Y=s[39]<<8|s[38]>>>24,C=s[48]<<14|s[49]>>>18,E=s[49]<<14|s[48]>>>18,s[0]=m^~A&_,s[1]=N^~S&k,s[10]=R^~D&I,s[11]=M^~F&U,s[20]=J^~H&G,s[21]=P^~$&V,s[30]=Z^~ee&ne,s[31]=Q^~te&re,s[40]=fe^~ae&he,s[41]=ce^~le&pe,s[2]=A^~_&B,s[3]=S^~k&x,s[12]=D^~I&z,s[13]=F^~U&L,s[22]=H^~G&W,s[23]=$^~V&Y,s[32]=ee^~ne&ie,s[33]=te^~re&oe,s[42]=ae^~he&ge,s[43]=le^~pe&de,s[4]=_^~B&C,s[5]=k^~x&E,s[14]=I^~z&j,s[15]=U^~L&T,s[24]=G^~W&K,s[25]=V^~Y&X,s[34]=ne^~ie&se,s[35]=re^~oe&ue,s[44]=he^~ge&ve,s[45]=pe^~de&we,s[6]=B^~C&m,s[7]=x^~E&N,s[16]=z^~j&R,s[17]=L^~T&M,s[26]=W^~K&J,s[27]=Y^~X&P,s[36]=ie^~se&Z,s[37]=oe^~ue&Q,s[46]=ge^~ve&fe,s[47]=de^~we&ce,s[8]=C^~m&A,s[9]=E^~N&S,s[18]=j^~R&D,s[19]=T^~M&F,s[28]=K^~J&H,s[29]=X^~P&$,s[38]=se^~Z&ee,s[39]=ue^~Q&te,s[48]=ve^~fe&ae,s[49]=we^~ce&le,s[0]^=O[n],s[1]^=O[n+1]};if(v)e.exports=I;else{for(i=0;i<U.length;++i)h[U[i]]=I[U[i]];w&&(void 0===(f=function(){return I}.call(t,n,t,e))||(e.exports=f))}}()}).call(this,n(30),n(37))},474:function(e,t,n){var r;!function(o){"use strict";var f,c,l=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,h=Math.ceil,d=Math.floor,v=" not a boolean or binary digit",w="number type has more than 15 significant digits",y="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_",m=1e14,N=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],A=1e9;function O(e){var i=0|e;return e>0||e===i?i:i-1}function S(a){for(var s,e,i=1,t=a.length,n=a[0]+"";i<t;){for(e=14-(s=a[i++]+"").length;e--;s="0"+s);n+=s}for(t=n.length;48===n.charCodeAt(--t););return n.slice(0,t+1||1)}function _(e,t){var a,b,n=e.c,r=t.c,i=e.s,o=t.s,f=e.e,c=t.e;if(!i||!o)return null;if(a=n&&!n[0],b=r&&!r[0],a||b)return a?b?0:-o:i;if(i!=o)return i;if(a=i<0,b=f==c,!n||!r)return b?0:!n^a?1:-1;if(!b)return f>c^a?1:-1;for(o=(f=n.length)<(c=r.length)?f:c,i=0;i<o;i++)if(n[i]!=r[i])return n[i]>r[i]^a?1:-1;return f==c?0:f>c^a?1:-1}function k(e,t,n){return(e=R(e))>=t&&e<=n}function B(e){return"[object Array]"==Object.prototype.toString.call(e)}function x(e,t,n){for(var r,o,f=[0],i=0,c=e.length;i<c;){for(o=f.length;o--;f[o]*=t);for(f[r=0]+=y.indexOf(e.charAt(i++));r<f.length;r++)f[r]>n-1&&(null==f[r+1]&&(f[r+1]=0),f[r+1]+=f[r]/n|0,f[r]%=n)}return f.reverse()}function C(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function E(e,t){var n,r;if(t<0){for(r="0.";++t;r+="0");e=r+e}else if(++t>(n=e.length)){for(r="0",t-=n;--t;r+="0");e+=r}else t<n&&(e=e.slice(0,t)+"."+e.slice(t));return e}function R(e){return(e=parseFloat(e))<0?h(e):d(e)}f=function e(t){var div,n,r,o,f,M,D,F=0,I=K.prototype,U=new K(1),z=20,L=4,j=-7,T=21,J=-1e7,P=1e7,H=!0,$=ee,G=!1,V=1,W=100,Y={decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0};function K(e,b){var t,n,i,r,o,f,h=this;if(!(h instanceof K))return H&&ne(26,"constructor call without new",e),new K(e,b);if(null!=b&&$(b,2,64,F,"base")){if(f=e+"",10==(b|=0))return re(h=new K(e instanceof K?e:f),z+h.e+1,L);if((r="number"==typeof e)&&0*e!=0||!new RegExp("^-?"+(t="["+y.slice(0,b)+"]+")+"(?:\\."+t+")?$",b<37?"i":"").test(f))return c(h,f,r,b);r?(h.s=1/e<0?(f=f.slice(1),-1):1,H&&f.replace(/^0\.0*|\./,"").length>15&&ne(F,w,e),r=!1):h.s=45===f.charCodeAt(0)?(f=f.slice(1),-1):1,f=X(f,10,b,h.s)}else{if(e instanceof K)return h.s=e.s,h.e=e.e,h.c=(e=e.c)?e.slice():e,void(F=0);if((r="number"==typeof e)&&0*e==0){if(h.s=1/e<0?(e=-e,-1):1,e===~~e){for(n=0,i=e;i>=10;i/=10,n++);return h.e=n,h.c=[e],void(F=0)}f=e+""}else{if(!l.test(f=e+""))return c(h,f,r);h.s=45===f.charCodeAt(0)?(f=f.slice(1),-1):1}}for((n=f.indexOf("."))>-1&&(f=f.replace(".","")),(i=f.search(/e/i))>0?(n<0&&(n=i),n+=+f.slice(i+1),f=f.substring(0,i)):n<0&&(n=f.length),i=0;48===f.charCodeAt(i);i++);for(o=f.length;48===f.charCodeAt(--o););if(f=f.slice(i,o+1))if(o=f.length,r&&H&&o>15&&ne(F,w,h.s*e),(n=n-i-1)>P)h.c=h.e=null;else if(n<J)h.c=[h.e=0];else{if(h.e=n,h.c=[],i=(n+1)%14,n<0&&(i+=14),i<o){for(i&&h.c.push(+f.slice(0,i)),o-=14;i<o;)h.c.push(+f.slice(i,i+=14));i=14-(f=f.slice(i)).length}else i-=o;for(;i--;f+="0");h.c.push(+f)}else h.c=[h.e=0];F=0}function X(e,t,n,r){var o,f,c,l,h,d,v,i=e.indexOf("."),w=z,m=L;for(n<37&&(e=e.toLowerCase()),i>=0&&(c=W,W=0,e=e.replace(".",""),h=(v=new K(n)).pow(e.length-i),W=c,v.c=x(E(S(h.c),h.e),10,t),v.e=v.c.length),f=c=(d=x(e,n,t)).length;0==d[--c];d.pop());if(!d[0])return"0";if(i<0?--f:(h.c=d,h.e=f,h.s=r,d=(h=div(h,v,w,m,t)).c,l=h.r,f=h.e),i=d[o=f+w+1],c=t/2,l=l||o<0||null!=d[o+1],l=m<4?(null!=i||l)&&(0==m||m==(h.s<0?3:2)):i>c||i==c&&(4==m||l||6==m&&1&d[o-1]||m==(h.s<0?8:7)),o<1||!d[0])e=l?E("1",-w):"0";else{if(d.length=o,l)for(--t;++d[--o]>t;)d[o]=0,o||(++f,d.unshift(1));for(c=d.length;!d[--c];);for(i=0,e="";i<=c;e+=y.charAt(d[i++]));e=E(e,f)}return e}function Z(e,i,t,n){var r,o,f,c,l;if(t=null!=t&&$(t,0,8,n,"rounding mode")?0|t:L,!e.c)return e.toString();if(r=e.c[0],f=e.e,null==i)l=S(e.c),l=19==n||24==n&&f<=j?C(l,f):E(l,f);else if(o=(e=re(new K(e),i,t)).e,c=(l=S(e.c)).length,19==n||24==n&&(i<=o||o<=j)){for(;c<i;l+="0",c++);l=C(l,o)}else if(i-=f,l=E(l,o),o+1>c){if(--i>0)for(l+=".";i--;l+="0");}else if((i+=o-c)>0)for(o+1==c&&(l+=".");i--;l+="0");return e.s<0&&r?"-"+l:l}function Q(e,t){var n,r,i=0;for(B(e[0])&&(e=e[0]),n=new K(e[0]);++i<e.length;){if(!(r=new K(e[i])).s){n=r;break}t.call(n,r)&&(n=r)}return n}function ee(e,t,n,r,o){return(e<t||e>n||e!=R(e))&&ne(r,(o||"decimal places")+(e<t||e>n?" out of range":" not an integer"),e),!0}function te(e,t,n){for(var i=1,r=t.length;!t[--r];t.pop());for(r=t[0];r>=10;r/=10,i++);return(n=i+14*n-1)>P?e.c=e.e=null:n<J?e.c=[e.e=0]:(e.e=n,e.c=t),e}function ne(e,t,n){var r=new Error(["new BigNumber","cmp","config","div","divToInt","eq","gt","gte","lt","lte","minus","mod","plus","precision","random","round","shift","times","toDigits","toExponential","toFixed","toFormat","toFraction","pow","toPrecision","toString","BigNumber"][e]+"() "+t+": "+n);throw r.name="BigNumber Error",F=0,r}function re(e,t,n,r){var o,i,f,c,l,v,w,y=e.c,A=N;if(y){e:{for(o=1,c=y[0];c>=10;c/=10,o++);if((i=t-o)<0)i+=14,f=t,w=(l=y[v=0])/A[o-f-1]%10|0;else if((v=h((i+1)/14))>=y.length){if(!r)break e;for(;y.length<=v;y.push(0));l=w=0,o=1,f=(i%=14)-14+1}else{for(l=c=y[v],o=1;c>=10;c/=10,o++);w=(f=(i%=14)-14+o)<0?0:l/A[o-f-1]%10|0}if(r=r||t<0||null!=y[v+1]||(f<0?l:l%A[o-f-1]),r=n<4?(w||r)&&(0==n||n==(e.s<0?3:2)):w>5||5==w&&(4==n||r||6==n&&(i>0?f>0?l/A[o-f]:0:y[v-1])%10&1||n==(e.s<0?8:7)),t<1||!y[0])return y.length=0,r?(t-=e.e+1,y[0]=A[t%14],e.e=-t||0):y[0]=e.e=0,e;if(0==i?(y.length=v,c=1,v--):(y.length=v+1,c=A[14-i],y[v]=f>0?d(l/A[o-f]%A[f])*c:0),r)for(;;){if(0==v){for(i=1,f=y[0];f>=10;f/=10,i++);for(f=y[0]+=c,c=1;f>=10;f/=10,c++);i!=c&&(e.e++,y[0]==m&&(y[0]=1));break}if(y[v]+=c,y[v]!=m)break;y[v--]=0,c=1}for(i=y.length;0===y[--i];y.pop());}e.e>P?e.c=e.e=null:e.e<J&&(e.c=[e.e=0])}return e}return K.another=e,K.ROUND_UP=0,K.ROUND_DOWN=1,K.ROUND_CEIL=2,K.ROUND_FLOOR=3,K.ROUND_HALF_UP=4,K.ROUND_HALF_DOWN=5,K.ROUND_HALF_EVEN=6,K.ROUND_HALF_CEIL=7,K.ROUND_HALF_FLOOR=8,K.EUCLID=9,K.config=function(){var e,p,i=0,t={},a=arguments,n=a[0],r=n&&"object"==typeof n?function(){if(n.hasOwnProperty(p))return null!=(e=n[p])}:function(){if(a.length>i)return null!=(e=a[i++])};return r(p="DECIMAL_PLACES")&&$(e,0,A,2,p)&&(z=0|e),t[p]=z,r(p="ROUNDING_MODE")&&$(e,0,8,2,p)&&(L=0|e),t[p]=L,r(p="EXPONENTIAL_AT")&&(B(e)?$(e[0],-A,0,2,p)&&$(e[1],0,A,2,p)&&(j=0|e[0],T=0|e[1]):$(e,-A,A,2,p)&&(j=-(T=0|(e<0?-e:e)))),t[p]=[j,T],r(p="RANGE")&&(B(e)?$(e[0],-A,-1,2,p)&&$(e[1],1,A,2,p)&&(J=0|e[0],P=0|e[1]):$(e,-A,A,2,p)&&(0|e?J=-(P=0|(e<0?-e:e)):H&&ne(2,p+" cannot be zero",e))),t[p]=[J,P],r(p="ERRORS")&&(e===!!e||1===e||0===e?(F=0,$=(H=!!e)?ee:k):H&&ne(2,p+v,e)),t[p]=H,r(p="CRYPTO")&&(e===!!e||1===e||0===e?(G=!1,e&&!G&&H&&ne(2,"crypto unavailable",void 0)):H&&ne(2,p+v,e)),t[p]=G,r(p="MODULO_MODE")&&$(e,0,9,2,p)&&(V=0|e),t[p]=V,r(p="POW_PRECISION")&&$(e,0,A,2,p)&&(W=0|e),t[p]=W,r(p="FORMAT")&&("object"==typeof e?Y=e:H&&ne(2,p+" not an object",e)),t[p]=Y,t},K.max=function(){return Q(arguments,I.lt)},K.min=function(){return Q(arguments,I.gt)},K.random=(n=9007199254740992*Math.random()&2097151?function(){return d(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var t,r,o,i=0,f=[],c=new K(U);if(e=null!=e&&$(e,0,A,14)?0|e:z,r=h(e/14),G&&H&&ne(14,"crypto unavailable",void 0),!i)for(;i<r;)(o=n())<9e15&&(f[i++]=o%1e14);for(e%=14,(r=f[--i])&&e&&(o=N[14-e],f[i]=d(r/o)*o);0===f[i];f.pop(),i--);if(i<0)f=[t=0];else{for(t=-1;0===f[0];f.shift(),t-=14);for(i=1,o=f[0];o>=10;o/=10,i++);i<14&&(t-=14-i)}return c.e=t,c.c=f,c}),div=function(){function e(e,t,base){var n,r,o,f,c=0,i=e.length,l=t%1e7,h=t/1e7|0;for(e=e.slice();i--;)c=((r=l*(o=e[i]%1e7)+(n=h*o+(f=e[i]/1e7|0)*l)%1e7*1e7+c)/base|0)+(n/1e7|0)+h*f,e[i]=r%base;return c&&e.unshift(c),e}function t(a,b,e,t){var i,n;if(e!=t)n=e>t?1:-1;else for(i=n=0;i<e;i++)if(a[i]!=b[i]){n=a[i]>b[i]?1:-1;break}return n}function n(a,b,e,base){for(var i=0;e--;)a[e]-=i,i=a[e]<b[e]?1:0,a[e]=i*base+a[e]-b[e];for(;!a[0]&&a.length>1;a.shift());}return function(r,o,f,c,base){var l,h,i,v,w,y,N,q,A,S,_,k,B,x,C,E,R,s=r.s==o.s?1:-1,M=r.c,D=o.c;if(!(M&&M[0]&&D&&D[0]))return new K(r.s&&o.s&&(M?!D||M[0]!=D[0]:D)?M&&0==M[0]||!D?0*s:s/0:NaN);for(A=(q=new K(s)).c=[],s=f+(h=r.e-o.e)+1,base||(base=m,h=O(r.e/14)-O(o.e/14),s=s/14|0),i=0;D[i]==(M[i]||0);i++);if(D[i]>(M[i]||0)&&h--,s<0)A.push(1),v=!0;else{for(x=M.length,E=D.length,i=0,s+=2,(w=d(base/(D[0]+1)))>1&&(D=e(D,w,base),M=e(M,w,base),E=D.length,x=M.length),B=E,_=(S=M.slice(0,E)).length;_<E;S[_++]=0);(R=D.slice()).unshift(0),C=D[0],D[1]>=base/2&&C++;do{if(w=0,(l=t(D,S,E,_))<0){if(k=S[0],E!=_&&(k=k*base+(S[1]||0)),(w=d(k/C))>1)for(w>=base&&(w=base-1),N=(y=e(D,w,base)).length,_=S.length;1==t(y,S,N,_);)w--,n(y,E<N?R:D,N,base),N=y.length,l=1;else 0==w&&(l=w=1),N=(y=D.slice()).length;if(N<_&&y.unshift(0),n(S,y,_,base),_=S.length,-1==l)for(;t(D,S,E,_)<1;)w++,n(S,E<_?R:D,_,base),_=S.length}else 0===l&&(w++,S=[0]);A[i++]=w,S[0]?S[_++]=M[B]||0:(S=[M[B]],_=1)}while((B++<x||null!=S[0])&&s--);v=null!=S[0],A[0]||A.shift()}if(base==m){for(i=1,s=A[0];s>=10;s/=10,i++);re(q,f+(q.e=i+14*h-1)+1,c,v)}else q.e=h,q.r=+v;return q}}(),r=/^(-?)0([xbo])/i,o=/^([^.]+)\.$/,f=/^\.([^.]+)$/,M=/^-?(Infinity|NaN)$/,D=/^\s*\+|^\s+|\s+$/g,c=function(e,t,n,b){var base,s=n?t:t.replace(D,"");if(M.test(s))e.s=isNaN(s)?null:s<0?-1:1;else{if(!n&&(s=s.replace(r,(function(e,t,n){return base="x"==(n=n.toLowerCase())?16:"b"==n?2:8,b&&b!=base?e:t})),b&&(base=b,s=s.replace(o,"$1").replace(f,"0.$1")),t!=s))return new K(s,base);H&&ne(F,"not a"+(b?" base "+b:"")+" number",t),e.s=null}e.c=e.e=null,F=0},I.absoluteValue=I.abs=function(){var e=new K(this);return e.s<0&&(e.s=1),e},I.ceil=function(){return re(new K(this),this.e+1,2)},I.comparedTo=I.cmp=function(e,b){return F=1,_(this,new K(e,b))},I.decimalPlaces=I.dp=function(){var e,t,n=this.c;if(!n)return null;if(e=14*((t=n.length-1)-O(this.e/14)),t=n[t])for(;t%10==0;t/=10,e--);return e<0&&(e=0),e},I.dividedBy=I.div=function(e,b){return F=3,div(this,new K(e,b),z,L)},I.dividedToIntegerBy=I.divToInt=function(e,b){return F=4,div(this,new K(e,b),0,1)},I.equals=I.eq=function(e,b){return F=5,0===_(this,new K(e,b))},I.floor=function(){return re(new K(this),this.e+1,3)},I.greaterThan=I.gt=function(e,b){return F=6,_(this,new K(e,b))>0},I.greaterThanOrEqualTo=I.gte=function(e,b){return F=7,1===(b=_(this,new K(e,b)))||0===b},I.isFinite=function(){return!!this.c},I.isInteger=I.isInt=function(){return!!this.c&&O(this.e/14)>this.c.length-2},I.isNaN=function(){return!this.s},I.isNegative=I.isNeg=function(){return this.s<0},I.isZero=function(){return!!this.c&&0==this.c[0]},I.lessThan=I.lt=function(e,b){return F=8,_(this,new K(e,b))<0},I.lessThanOrEqualTo=I.lte=function(e,b){return F=9,-1===(b=_(this,new K(e,b)))||0===b},I.minus=I.sub=function(e,b){var i,t,n,r,o=this,a=o.s;if(F=10,b=(e=new K(e,b)).s,!a||!b)return new K(NaN);if(a!=b)return e.s=-b,o.plus(e);var f=o.e/14,c=e.e/14,l=o.c,h=e.c;if(!f||!c){if(!l||!h)return l?(e.s=-b,e):new K(h?o:NaN);if(!l[0]||!h[0])return h[0]?(e.s=-b,e):new K(l[0]?o:3==L?-0:0)}if(f=O(f),c=O(c),l=l.slice(),a=f-c){for((r=a<0)?(a=-a,n=l):(c=f,n=h),n.reverse(),b=a;b--;n.push(0));n.reverse()}else for(t=(r=(a=l.length)<(b=h.length))?a:b,a=b=0;b<t;b++)if(l[b]!=h[b]){r=l[b]<h[b];break}if(r&&(n=l,l=h,h=n,e.s=-e.s),(b=(t=h.length)-(i=l.length))>0)for(;b--;l[i++]=0);for(b=m-1;t>a;){if(l[--t]<h[t]){for(i=t;i&&!l[--i];l[i]=b);--l[i],l[t]+=m}l[t]-=h[t]}for(;0==l[0];l.shift(),--c);return l[0]?te(e,l,c):(e.s=3==L?-1:1,e.c=[e.e=0],e)},I.modulo=I.mod=function(e,b){var q,s,t=this;return F=11,e=new K(e,b),!t.c||!e.s||e.c&&!e.c[0]?new K(NaN):!e.c||t.c&&!t.c[0]?new K(t):(9==V?(s=e.s,e.s=1,q=div(t,e,0,3),e.s=s,q.s*=s):q=div(t,e,0,V),t.minus(q.times(e)))},I.negated=I.neg=function(){var e=new K(this);return e.s=-e.s||null,e},I.plus=I.add=function(e,b){var t,n=this,a=n.s;if(F=12,b=(e=new K(e,b)).s,!a||!b)return new K(NaN);if(a!=b)return e.s=-b,n.minus(e);var r=n.e/14,o=e.e/14,f=n.c,c=e.c;if(!r||!o){if(!f||!c)return new K(a/0);if(!f[0]||!c[0])return c[0]?e:new K(f[0]?n:0*a)}if(r=O(r),o=O(o),f=f.slice(),a=r-o){for(a>0?(o=r,t=c):(a=-a,t=f),t.reverse();a--;t.push(0));t.reverse()}for((a=f.length)-(b=c.length)<0&&(t=c,c=f,f=t,b=a),a=0;b;)a=(f[--b]=f[b]+c[b]+a)/m|0,f[b]%=m;return a&&(f.unshift(a),++o),te(e,f,o)},I.precision=I.sd=function(e){var t,n,r=this,o=r.c;if(null!=e&&e!==!!e&&1!==e&&0!==e&&(H&&ne(13,"argument"+v,e),e!=!!e&&(e=null)),!o)return null;if(t=14*(n=o.length-1)+1,n=o[n]){for(;n%10==0;n/=10,t--);for(n=o[0];n>=10;n/=10,t++);}return e&&r.e+1>t&&(t=r.e+1),t},I.round=function(e,t){var n=new K(this);return(null==e||$(e,0,A,15))&&re(n,~~e+this.e+1,null!=t&&$(t,0,8,15,"rounding mode")?0|t:L),n},I.shift=function(e){var t=this;return $(e,-9007199254740991,9007199254740991,16,"argument")?t.times("1e"+R(e)):new K(t.c&&t.c[0]&&(e<-9007199254740991||e>9007199254740991)?t.s*(e<0?0:1/0):t)},I.squareRoot=I.sqrt=function(){var e,t,n,r,o,f=this,c=f.c,s=f.s,l=f.e,h=z+4,d=new K("0.5");if(1!==s||!c||!c[0])return new K(!s||s<0&&(!c||c[0])?NaN:c?f:1/0);if(0==(s=Math.sqrt(+f))||s==1/0?(((t=S(c)).length+l)%2==0&&(t+="0"),s=Math.sqrt(t),l=O((l+1)/2)-(l<0||l%2),n=new K(t=s==1/0?"1e"+l:(t=s.toExponential()).slice(0,t.indexOf("e")+1)+l)):n=new K(s+""),n.c[0])for((s=(l=n.e)+h)<3&&(s=0);;)if(o=n,n=d.times(o.plus(div(f,o,h,1))),S(o.c).slice(0,s)===(t=S(n.c)).slice(0,s)){if(n.e<l&&--s,"9999"!=(t=t.slice(s-3,s+1))&&(r||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(re(n,n.e+z+2,1),e=!n.times(n).eq(f));break}if(!r&&(re(o,o.e+z+2,0),o.times(o).eq(f))){n=o;break}h+=4,s+=4,r=1}return re(n,n.e+z+1,L,e)},I.times=I.mul=function(e,b){var t,n,i,r,o,f,c,l,h,d,v,w,y,base,N=this,A=N.c,S=(F=17,e=new K(e,b)).c;if(!(A&&S&&A[0]&&S[0]))return!N.s||!e.s||A&&!A[0]&&!S||S&&!S[0]&&!A?e.c=e.e=e.s=null:(e.s*=N.s,A&&S?(e.c=[0],e.e=0):e.c=e.e=null),e;for(n=O(N.e/14)+O(e.e/14),e.s*=N.s,(c=A.length)<(d=S.length)&&(y=A,A=S,S=y,i=c,c=d,d=i),i=c+d,y=[];i--;y.push(0));for(base=m,1e7,i=d;--i>=0;){for(t=0,v=S[i]%1e7,w=S[i]/1e7|0,r=i+(o=c);r>i;)t=((l=v*(l=A[--o]%1e7)+(f=w*l+(h=A[o]/1e7|0)*v)%1e7*1e7+y[r]+t)/base|0)+(f/1e7|0)+w*h,y[r--]=l%base;y[r]=t}return t?++n:y.shift(),te(e,y,n)},I.toDigits=function(e,t){var n=new K(this);return e=null!=e&&$(e,1,A,18,"precision")?0|e:null,t=null!=t&&$(t,0,8,18,"rounding mode")?0|t:L,e?re(n,e,t):n},I.toExponential=function(e,t){return Z(this,null!=e&&$(e,0,A,19)?1+~~e:null,t,19)},I.toFixed=function(e,t){return Z(this,null!=e&&$(e,0,A,20)?~~e+this.e+1:null,t,20)},I.toFormat=function(e,t){var n=Z(this,null!=e&&$(e,0,A,21)?~~e+this.e+1:null,t,21);if(this.c){var i,r=n.split("."),o=+Y.groupSize,f=+Y.secondaryGroupSize,c=Y.groupSeparator,l=r[0],h=r[1],d=this.s<0,v=d?l.slice(1):l,w=v.length;if(f&&(i=o,o=f,f=i,w-=i),o>0&&w>0){for(i=w%o||o,l=v.substr(0,i);i<w;i+=o)l+=c+v.substr(i,o);f>0&&(l+=c+v.slice(i)),d&&(l="-"+l)}n=h?l+Y.decimalSeparator+((f=+Y.fractionGroupSize)?h.replace(new RegExp("\\d{"+f+"}\\B","g"),"$&"+Y.fractionGroupSeparator):h):l}return n},I.toFraction=function(e){var t,n,r,o,f,c,l,q,s,h=H,d=this,v=d.c,w=new K(U),y=n=new K(U),m=l=new K(U);if(null!=e&&(H=!1,c=new K(e),H=h,(h=c.isInt())&&!c.lt(U)||(H&&ne(22,"max denominator "+(h?"out of range":"not an integer"),e),e=!h&&c.c&&re(c,c.e+1,1).gte(U)?c:null)),!v)return d.toString();for(s=S(v),o=w.e=s.length-d.e-1,w.c[0]=N[(f=o%14)<0?14+f:f],e=!e||c.cmp(w)>0?o>0?w:y:c,f=P,P=1/0,c=new K(s),l.c[0]=0;q=div(c,w,0,1),1!=(r=n.plus(q.times(m))).cmp(e);)n=m,m=r,y=l.plus(q.times(r=y)),l=r,w=c.minus(q.times(r=w)),c=r;return r=div(e.minus(n),m,0,1),l=l.plus(r.times(y)),n=n.plus(r.times(m)),l.s=y.s=d.s,t=div(y,m,o*=2,L).minus(d).abs().cmp(div(l,n,o,L).minus(d).abs())<1?[y.toString(),m.toString()]:[l.toString(),n.toString()],P=f,t},I.toNumber=function(){var e=this;return+e||(e.s?0*e.s:NaN)},I.toPower=I.pow=function(e){var t,n,i=d(e<0?-e:+e),r=this;if(!$(e,-9007199254740991,9007199254740991,23,"exponent")&&(!isFinite(e)||i>9007199254740991&&(e/=0)||parseFloat(e)!=e&&!(e=NaN)))return new K(Math.pow(+r,e));for(t=W?h(W/14+2):0,n=new K(U);;){if(i%2){if(!(n=n.times(r)).c)break;t&&n.c.length>t&&(n.c.length=t)}if(!(i=d(i/2)))break;r=r.times(r),t&&r.c&&r.c.length>t&&(r.c.length=t)}return e<0&&(n=U.div(n)),t?re(n,W,L):n},I.toPrecision=function(e,t){return Z(this,null!=e&&$(e,1,A,24,"precision")?0|e:null,t,24)},I.toString=function(b){var e,t=this,s=t.s,n=t.e;return null===n?s?(e="Infinity",s<0&&(e="-"+e)):e="NaN":(e=S(t.c),e=null!=b&&$(b,2,64,25,"base")?X(E(e,n),0|b,10,s):n<=j||n>=T?C(e,n):E(e,n),s<0&&t.c[0]&&(e="-"+e)),e},I.truncated=I.trunc=function(){return re(new K(this),this.e+1,1)},I.valueOf=I.toJSON=function(){return this.toString()},null!=t&&K.config(t),K}(),void 0===(r=function(){return f}.call(t,n,t,e))||(e.exports=r)}()}}]);