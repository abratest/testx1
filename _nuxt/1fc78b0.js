(window.webpackJsonp=window.webpackJsonp||[]).push([[454],{21:function(e,t,r){"use strict";r.d(t,"c",(function(){return P})),r.d(t,"d",(function(){return D})),r.d(t,"e",(function(){return _})),r.d(t,"h",(function(){return M})),r.d(t,"j",(function(){return B})),r.d(t,"i",(function(){return J})),r.d(t,"l",(function(){return Y})),r.d(t,"f",(function(){return ee})),r.d(t,"g",(function(){return re})),r.d(t,"a",(function(){return ae})),r.d(t,"b",(function(){return oe})),r.d(t,"k",(function(){return ce}));r(22),r(142),r(24),r(58),r(122),r(53),r(54),r(15),r(49);var n=r(87),o=(r(12),r(0)),c=(r(46),r(50),r(78)),l=r(426),d=r(9),f=r(13),w=r(40),h=r.n(w),v=r(151),m=r(73),x=r.n(m);function k(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}x.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80,ROUNDING_MODE:x.a.ROUND_DOWN});var R={common:{},biconomy:{}},E={common:{},biconomy:{gasless:{},forward:{}}},O=null,j={1:{type:"wss",url:d.j[1].ws,chainData:{chainId:"0x1"}},4:{type:"wss",url:d.j[4].ws,chainData:{chainId:"0x4"}},5:{type:"wss",url:d.j[5].ws,chainData:{chainId:"0x5"}},137:{type:"http",url:d.j[137].http,chainData:{chainId:"0x89",chainName:"Polygon Mainnet",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:["https://rpc-mainnet.matic.network"],blockExplorerUrls:["https://polygonscan.com/"]}},80001:{type:"http",url:d.j[80001].http,chainData:{chainId:"0x13881",chainName:"Polygon Mumbai",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:["https://rpc-mumbai.maticvigil.com/"],blockExplorerUrls:["https://mumbai.polygonscan.com/"]}}},C=d.a.includes(5)&&!d.a.includes(4),I={current:"current",1:d.C?C?5:4:1,2:d.C?80001:137,bridge_1:d.C?5:1};function N(e){if("current"===e)return window.web3;var t=j[e];if(!t)throw new Error("No connection for network ".concat(e));if(void 0===E.common[e]){var r="wss"===t.type?new h.a.providers.WebsocketProvider(t.url,{clientConfig:{keepalive:!0,keepaliveInterval:6e4,maxReceivedFrameSize:1e8,maxReceivedMessageSize:1e8},reconnect:{auto:!0,delay:1e3,maxAttempts:10,onTimeout:!0}}):new h.a.providers.HttpProvider(t.url);E.common[e]=new h.a(r)}return E.common[e]}function A(e){return T.apply(this,arguments)}function T(){return(T=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n,o,c=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=c.length>1&&void 0!==c[1]&&c[1],n=r?"gasless":"forward",void 0!==E.biconomy[n][t]){e.next=6;break}return e.next=5,Object(l.c)({layer:D(t),provider:null===(o=N(t))||void 0===o?void 0:o.currentProvider,gasless:r});case 5:E.biconomy[n][t]=e.sent;case 6:return e.abrupt("return",E.biconomy[n][t]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return S.apply(this,arguments)}function S(){return(S=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]&&n[1],e.next=3,A(I[t],r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return[137,80001].includes(e)?2:1}function _(e){return I[e]}function M(e){return U.apply(this,arguments)}function U(){return(U=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=o.length>1&&void 0!==o[1]&&o[1],n=o.length>2&&void 0!==o[2]&&o[2],!r){e.next=6;break}return e.next=5,A(I[t],n);case 5:return e.abrupt("return",e.sent.web3);case 6:return e.abrupt("return",N(I[t]));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return W.apply(this,arguments)}function W(){return(W=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.web3){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,window.web3.eth.getChainId();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e,t){return $.apply(this,arguments)}function $(){return($=Object(o.a)(regeneratorRuntime.mark((function e(t,r){var n,o,l=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=l.length>2&&void 0!==l[2]&&l[2],e.prev=1,"current"!==r){e.next=8;break}return e.next=5,L();case 5:e.t0=e.sent,e.next=9;break;case 8:e.t0=r;case 9:return r=e.t0,o=n?"getMultichain":"get",e.next=13,c.a[o](t,r);case 13:return e.abrupt("return",e.sent);case 16:return e.prev=16,e.t1=e.catch(1),e.abrupt("return",null);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})))).apply(this,arguments)}function B(e,t){return F.apply(this,arguments)}function F(){return(F=Object(o.a)(regeneratorRuntime.mark((function e(t,r){var n,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>2&&void 0!==o[2]&&o[2],e.next=3,G(t,I[r],n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t){return z.apply(this,arguments)}function z(){return(z=Object(o.a)(regeneratorRuntime.mark((function e(t,r){var o,c,l,d,f,w,h,v,m,x,k=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=k.length>2&&void 0!==k[2]&&k[2],c=k.length>3&&void 0!==k[3]&&k[3],e.prev=2,l="object"===Object(n.a)(t),d=l?t.name:t,"current"!==r){e.next=11;break}return e.next=8,L();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=r;case 12:if(f=e.t0,w=c?"biconomy":"common","current"!==r&&void 0!==R[w][d+f]&&R[w][d+f].contract){e.next=44;break}if(!l){e.next=19;break}e.t1=t,e.next=22;break;case 19:return e.next=21,G(d,f,o);case 21:e.t1=e.sent;case 22:if(v=e.t1){e.next=25;break}return e.abrupt("return",null);case 25:if(!c){e.next=40;break}return e.next=28,A(f,!0);case 28:if(e.t4=h=e.sent,e.t3=null===e.t4,e.t3){e.next=32;break}e.t3=void 0===h;case 32:if(!e.t3){e.next=36;break}e.t5=void 0,e.next=37;break;case 36:e.t5=h.web3;case 37:e.t2=e.t5,e.next=41;break;case 40:e.t2=N(r);case 41:m=e.t2,x=new m.eth.Contract(v.abi,v.address),R[w][d+f]={info:v,contract:x};case 44:return e.abrupt("return",R[w][d+f].contract);case 47:return e.prev=47,e.t6=e.catch(2),console.error(e.t6),e.abrupt("return",null);case 51:case"end":return e.stop()}}),e,null,[[2,47]])})))).apply(this,arguments)}function J(e){return V.apply(this,arguments)}function V(){return(V=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n,o,c=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:"current",n=c.length>2&&void 0!==c[2]&&c[2],o=c.length>3&&void 0!==c[3]&&c[3],e.next=5,H(t,I[r],n,o);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e,t){return K.apply(this,arguments)}function K(){return(K=Object(o.a)(regeneratorRuntime.mark((function e(t,address){var r,n,o,c,l,f,w,m,x,k,y,R,E,O,C,I,A,T,P,S,D,_,M=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P=M.length>2&&void 0!==M[2]?M[2]:null,e.next=3,L();case 3:if(e.sent!==t){e.next=6;break}return e.abrupt("return");case 6:if(S=j[t]){e.next=9;break}throw new Error("No connection for network ".concat(t));case 9:if(!window.venly){e.next=20;break}return e.prev=10,e.next=13,v.g(address,Z(t),P);case 13:e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(10),new Error("There was an error switching networks");case 18:e.next=103;break;case 20:if("bitski"!==(null===(r=window.$nuxt)||void 0===r||null===(n=r.$store)||void 0===n||null===(o=n.state)||void 0===o||null===(c=o.user)||void 0===c?void 0:c.walletType)){e.next=31;break}e.prev=21,D={1:{networkName:"mainnet"},4:{networkName:"rinkeby"},5:{network:{chainId:5,rpcUrl:d.j[5].http||d.j[5].ws}},137:{networkName:"polygon"},80001:{networkName:"mumbai"},default:{network:{chainId:t,rpcUrl:S.chainData.rpcUrls&&S.chainData.rpcUrls[0]}}},window.web3=new h.a(window.bitski.getProvider(D[t]||D.default)),e.next=29;break;case 26:throw e.prev=26,e.t1=e.catch(21),new Error("There was an error switching networks");case 29:e.next=103;break;case 31:if("legacy"!==(null===(l=window.$nuxt)||void 0===l||null===(f=l.$store)||void 0===f||null===(w=f.state)||void 0===w||null===(m=w.user)||void 0===m?void 0:m.loginType)||"none"!==(null===(x=window.$nuxt)||void 0===x||null===(k=x.$store)||void 0===k||null===(y=k.state)||void 0===y||null===(R=y.user)||void 0===R?void 0:R.web3WalletType)){e.next=43;break}return e.prev=32,e.next=35,N(t);case 35:window.web3=e.sent,e.next=41;break;case 38:throw e.prev=38,e.t2=e.catch(32),new Error("There was an error switching networks");case 41:e.next=103;break;case 43:if(!window.ethereum){e.next=69;break}return e.prev=44,e.next=47,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:S.chainData.chainId}]});case 47:e.next=67;break;case 49:if(e.prev=49,e.t3=e.catch(44),4902!==e.t3.code){e.next=62;break}return e.prev=52,e.next=55,window.ethereum.request({method:"wallet_addEthereumChain",params:[S.chainData]});case 55:e.next=60;break;case 57:throw e.prev=57,e.t4=e.catch(52),new Error("Can't add network to wallet");case 60:e.next=67;break;case 62:if(4200!==e.t3.code){e.next=66;break}throw new Error("This wallet does not support switching networks, please switch manually to the correct network.");case 66:throw new Error("There was an error switching networks");case 67:e.next=103;break;case 69:if(null===(E=window)||void 0===E||null===(O=E.web3)||void 0===O||null===(C=O.currentProvider)||void 0===C||!C.isWalletConnect){e.next=75;break}if(window.web3.currentProvider.chainId==t){e.next=73;break}throw _={1:"Ethereum mainnet",4:"Ethereum testnet Rinkeby",5:"Ethereum testnet Goerli",137:"Polygon mainnet",80001:"Polygon testnet Mumbai"},new Error("Change your wallet's app network to ".concat(_[t]));case 73:e.next=103;break;case 75:if(null===(I=window)||void 0===I||null===(A=I.web3)||void 0===A||null===(T=A.currentProvider)||void 0===T||!T.isCoinbaseWallet){e.next=102;break}return e.prev=76,e.next=79,window.web3.currentProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:S.chainData.chainId}]});case 79:window.$nuxt.$store.dispatch("sand/refreshChainId",window.web3.utils.hexToNumber(S.chainData.chainId)),e.next=100;break;case 82:if(e.prev=82,e.t5=e.catch(76),4902!==e.t5.code){e.next=95;break}return e.prev=85,e.next=88,window.currentProvider.request({method:"wallet_addEthereumChain",params:[S.chainData]});case 88:e.next=93;break;case 90:throw e.prev=90,e.t6=e.catch(85),new Error("Can't add network to wallet");case 93:e.next=100;break;case 95:if(4200!==e.t5.code){e.next=99;break}throw new Error("This wallet does not support switching networks, please switch manually to the correct network.");case 99:throw new Error("There was an error switching networks");case 100:e.next=103;break;case 102:throw new Error("Wallet locked");case 103:case"end":return e.stop()}}),e,null,[[10,15],[21,26],[32,38],[44,49],[52,57],[76,82],[85,90]])})))).apply(this,arguments)}function Y(e,t){return Q.apply(this,arguments)}function Q(){return(Q=Object(o.a)(regeneratorRuntime.mark((function e(t,address){var r,n,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>2&&void 0!==o[2]?o[2]:null,n=r&&function(){return r(I[t])},e.next=4,X(I[t],address,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){var t="ETHEREUM";return 2===D(e)&&(t="MATIC"),t}function ee(){return te.apply(this,arguments)}function te(){return(te=Object(o.a)(regeneratorRuntime.mark((function e(){var t,n,o,c,l=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=l.length>0&&void 0!==l[0]?l[0]:{},e.prev=1,n={appName:t.appName||"SAND_bridge",network:d.C?"testnet":"mainnet",autoShowTime:t.autoShowTime||0,position:t.position||"center",height:t.height||630,width:t.width||500,style:t.style||{color:"black"}},O&&!t.override){e.next=14;break}case 4:if(window){e.next=9;break}return e.next=7,new Promise((function(e){return setTimeout(e,50)}));case 7:e.next=4;break;case 9:return o=r(2156).Widget,c=new o(n),e.next=13,c.create();case 13:O=c;case 14:return e.abrupt("return",O);case 17:throw e.prev=17,e.t0=e.catch(1),console.error(e.t0),null;case 21:case"end":return e.stop()}}),e,null,[[1,17]])})))).apply(this,arguments)}function re(e,t){return ne.apply(this,arguments)}function ne(){return(ne=Object(o.a)(regeneratorRuntime.mark((function e(t,address){var r,n,o,c,l,d,f,w,v,m,y,R,E,O,j,C,A=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=A.length>2&&void 0!==A[2]&&A[2],n=A.length>3&&void 0!==A[3]&&A[3],o=A.length>4&&void 0!==A[4]&&A[4],c={},l=n?"bridge_1":1,d=k(t),e.prev=6,d.s();case 8:if((f=d.n()).done){e.next=50;break}if(w=f.value,v=0,e.prev=11,m=["msand","matic"].includes(w.toLowerCase())?2:l,y=r||I[m],e.t0="current"!==y&&window.web3,!e.t0){e.next=21;break}return e.t1=y,e.next=19,L();case 19:e.t2=e.sent,e.t0=e.t1==e.t2;case 21:if(!e.t0){e.next=23;break}y="current";case 23:if(!["eth","matic"].includes(w.toLowerCase())){e.next=32;break}return e.next=26,N(y);case 26:return R=e.sent,e.next=29,R.eth.getBalance(address).catch((function(){return"-"}));case 29:v=e.sent,e.next=42;break;case 32:return e.next=34,J("Sand",["sand"].includes(w.toLowerCase())?1:2);case 34:if(!(E=e.sent)){e.next=42;break}return e.next=38,null==E||null===(O=E.methods)||void 0===O||null===(j=O.balanceOf(address))||void 0===j?void 0:j.call();case 38:if(e.t3=e.sent,e.t3){e.next=41;break}e.t3=0;case 41:v=e.t3;case 42:"-"===v?c[w]=v:n&&o?(C=h.a.utils.fromWei(v),c[w]=new x.a(C)):c[w]=parseFloat(h.a.utils.fromWei(v)),e.next=48;break;case 45:e.prev=45,e.t4=e.catch(11),c[w]="-";case 48:e.next=8;break;case 50:e.next=55;break;case 52:e.prev=52,e.t5=e.catch(6),d.e(e.t5);case 55:return e.prev=55,d.f(),e.finish(55);case 58:return e.abrupt("return",c);case 59:case"end":return e.stop()}}),e,null,[[6,52,55,58],[11,45]])})))).apply(this,arguments)}function ae(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;n&&n(e),Object(f.f)(t,e,{},r)}function oe(e){if(!e["user/getUser"])throw new Error("Not authenticated");var t=e["user/getWallet"];if(!t)throw new Error("User has no wallet");return t}function ce(e,t){return ue.apply(this,arguments)}function ue(){return(ue=Object(o.a)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.dispatch("sand/refreshChainId",r);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},426:function(e,t,r){"use strict";r.d(t,"c",(function(){return m})),r.d(t,"b",(function(){return k})),r.d(t,"a",(function(){return R}));r(155),r(348);var n=r(43),o=(r(15),r(12),r(0)),c=r(9),l=r(40),d=r.n(l),f=r(119),w=r(78),h=r(852),v=r(16);function m(e){return x.apply(this,arguments)}function x(){return(x=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n,o,l,f,w,h,v,m,x,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.layer,n=void 0===r?2:r,o=t.web3,l=void 0===o?null:o,f=t.provider,w=void 0===f?null:f,h=t.gasless,v=void 0===h||h,e.prev=1,l||(l=window.web3),l&&l.eth){e.next=5;break}throw new Error("Error loading biconomy web3");case 5:m=l.eth.currentProvider,w&&v||(w=l.eth.currentProvider);case 7:if(window.Biconomy){e.next=12;break}return e.next=10,new Promise((function(e){return setTimeout(e,50)}));case 10:e.next=7;break;case 12:(k=new window.Biconomy(w,{walletProvider:m,apiKey:c.f[1===n?"eth":"polygon".concat(v?"Gasless":"Forward")],debug:c.C})).onEvent(k.READY,(function(){v&&(window.EIP712_SIGN=k.EIP712_SIGN,window.PERSONAL_SIGN=k.PERSONAL_SIGN),x={biconomy:k,web3:new d.a(k),forwardClient:k.erc20ForwarderClient}})).onEvent(k.ERROR,(function(e,t){console.error("Biconomy error"),console.error(e,t)}));case 14:if(x){e.next=19;break}return e.next=17,new Promise((function(e){return setTimeout(e,50)}));case 17:e.next=14;break;case 19:return e.abrupt("return",x);case 22:throw e.prev=22,e.t0=e.catch(1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[1,22]])})))).apply(this,arguments)}function k(e,t,r,n,o,c,l){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(regeneratorRuntime.mark((function e(t,r,l,d,h,x,k){var y,R,E=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y=E.length>7&&void 0!==E[7]?E[7]:null,R=E.length>8&&void 0!==E[8]?E[8]:null,e.abrupt("return",new Promise(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(o,E){var O,j,C,I,N,A,T,P,S;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,y&&R){e.next=7;break}return e.next=4,m({gasless:!1});case 4:C=e.sent,y=C.forwardClient,R=C.web3;case 7:return e.next=9,w.a.get("SAND",c.C?80001:137);case 9:if(I=e.sent){e.next=12;break}throw new Error("Couldn't get SAND contract info");case 12:return N=(O=t.methods)[r].apply(O,Object(n.a)(l)).encodeABI(),e.next=15,(j=t.methods)[r].apply(j,Object(n.a)(l)).estimateGas(d);case 15:return A=e.sent,e.next=18,y.buildCustomTx({to:t.options.address,token:I.address,txGas:Number(A),data:N,forwardInfo:{action:r,feeToken:"SAND"}});case 18:return T=e.sent,e.next=21,y.sendCustomTxEIP712({req:T.request,metaInfo:{forwardRequest:"V2",type:"V4"}});case 21:return(P=e.sent)&&200===P.code&&P.txHash?Object(v.j)({txHash:P.txHash,from:d.from,web3:R,reject:E,resolve:o,cbSuccess:h,cbFailure:x,cbError:k}):(k&&k(null==P?void 0:P.message),null!=P&&null!==(S=P.message)&&void 0!==S&&S.match(/UNPREDICTABLE_GAS_LIMIT/)&&E(new f.a("Not enough SAND to pay for gas"))),e.abrupt("return",P&&P.txHash);case 26:throw e.prev=26,e.t0=e.catch(0),e.t0&&Object(v.a)(d.from,e.t0,E),(null===e.t0||void 0===e.t0?void 0:e.t0.message)||e.t0;case 30:case"end":return e.stop()}}),e,null,[[0,26]])})));return function(t,r){return e.apply(this,arguments)}}()));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return E.apply(this,arguments)}function E(){return(E=Object(o.a)(regeneratorRuntime.mark((function e(){var t,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r.length>0&&void 0!==r[0]&&r[0])||c.C){e.next=5;break}e.t0={userAllowed:!0},e.next=8;break;case 5:return e.next=7,h.a.CheckUserLimitByMethod();case 7:e.t0=e.sent;case 8:return t=e.t0,e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},631:function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));r(53),r(54),r(15),r(710);var n=r(283),o=r(415),c=r(423),l=r(204),d=r(422);function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var w=function(e){Object(o.a)(r,e);var t=f(r);function r(e,source,o){var c;return Object(n.a)(this,r),(c=t.call(this,e)).source=source,c.tx=o,c}return r}(Object(d.a)(Error))},632:function(e,t,r){"use strict";var n=r(13),o=!1,c={1:"Mainnet",4:"Rinkeby"};t.a={show:function(e,t){!o&&t&&(o=!0,Object(n.d)({title:"Wrong network, please change to ".concat(c[e]," network"),duration:6e5}))}}},646:function(e,t,r){"use strict";var n=r(73),o=r.n(n);o.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80,ROUNDING_MODE:o.a.ROUND_DOWN}),t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=new o.a(e).div(new o.a(10).pow(18));return t&&(n=r?n.toFormat(r):n.toFormat(),n=parseFloat(n)?n:0),n}},84:function(e,t,r){"use strict";r.d(t,"b",(function(){return R})),r.d(t,"c",(function(){return E})),r.d(t,"a",(function(){return v})),r.d(t,"d",(function(){return O}));r(12);var n,o=r(0),c=r(78),l=r(1),d={},f=function(e,t){return e+(t||"")};function w(e,t,r){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(regeneratorRuntime.mark((function e(t,r,o){var l,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n!==window.web3&&(d={},n=window.web3),l=f(r,o),void 0!==d[l]){e.next=12;break}return e.next=6,o?c.a.getByPresale(r,o):c.a.get(r);case 6:if(w=e.sent){e.next=9;break}return e.abrupt("return",null);case 9:if(w.chainId==t){e.next=11;break}return e.abrupt("return",null);case 11:d[l]={info:w};case 12:return e.abrupt("return",d[l]);case 15:return e.prev=15,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function v(e){return new n.eth.Contract(e.abi,e.address)}function m(e,t,r){return x.apply(this,arguments)}function x(){return(x=Object(o.a)(regeneratorRuntime.mark((function e(t,r,n){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(t,r,n);case 3:return(o=e.sent)&&o.info&&!o.contract&&(o.contract=v(o.info)),e.abrupt("return",o);case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function k(e,t,r,n,o){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(regeneratorRuntime.mark((function e(t,r,n,o,c){var d,f,w,h,v,m=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d=r.commit,f=r.rootState,w=m.length>5&&void 0!==m[5]?m[5]:null,e.next=4;break;case 4:return h=Object(l.a)(d,t+"Address"),e.prev=5,w||(w=f.user.chainId),e.next=9,o(w,t,n);case 9:if(v=e.sent){e.next=12;break}return e.abrupt("return");case 12:return h.success(v.info.address),e.abrupt("return",v[c]);case 16:e.prev=16,e.t0=e.catch(5),h.error(Object(l.d)(e.t0));case 19:case"end":return e.stop()}}),e,null,[[5,16]])})))).apply(this,arguments)}function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(r,n){return k(e,r,n,m,"contract",t)}}function E(e){return function(t,r){return k(e,t,r,w,"info")}}function O(e){return function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r,n){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=r.commit,t.next=3;break;case 3:Object(l.a)(o,e+"Address").success(null),d[f(e,n)]=void 0;case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}},849:function(e,t,r){"use strict";t.a=function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var r=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),r&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(r))}}}]);