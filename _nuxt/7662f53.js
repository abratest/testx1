(window.webpackJsonp=window.webpackJsonp||[]).push([[458],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"namespace",(function(){return o})),n.d(t,"mutationTypes",(function(){return c})),n.d(t,"actionTypes",(function(){return m}));var r=n(111),o="steve-aoki/",c={SET_SIGNATURE:"".concat(o,"setSignature"),SET_STATUS:"".concat(o,"setStatus"),PURCHASE_WITH_ETH:"".concat(o,"purchaseWithEth"),EXECUTE_MINT_TOKENS:"".concat(o,"executeMintTokens"),SET_CONFIGURATION:"".concat(o,"setConfiguration")},m=Object(r.d)(o,c)},2598:function(e,t,n){"use strict";n.r(t),n.d(t,"mutations",(function(){return P})),n.d(t,"getters",(function(){return j})),n.d(t,"state",(function(){return R})),n.d(t,"actions",(function(){return U}));n(32),n(24),n(25),n(22),n(58),n(12);var r=n(0),o=n(10),c=(n(53),n(54),n(15),n(1)),m=n(84),l=n(223),h=n(16),d=n(40),w=n.n(d),f=n(42),x=n.n(f),_=n(633),G=n(13),T=n(149);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var k=Object(_.a)("8300000000000000"),E=k.sandToETH,A=k.sandToDAI,y=function(e){if(e.getters["whitelist/isSuccess"]("whitelisted")){for(var t=e.getters["whitelist/get"]("whitelisted",[]),i=0;i<t.length;i++)if(("starterpackv1"===t[i].productType||"mintAsset"===t[i].productType)&&t[i].authorized)return e.dispatch("starterpackv1/refreshContract");return e.dispatch("starterpackv1/resetContract")}};Object(T.b)(T.c.store.init.client,(function(e){e.watch((function(e){return e.whitelist.whitelisted}),(function(){return y(e)})),e.watch((function(e){return e.user.chainId}),(function(){return y(e)}))}));var P=c.c;function C(e,t,n){var r=e.get("purchaseInfo");if(!r)return 0;var o=0,c=r.catalystIds,m=r.catalystQuantities,l=r.gemQuantities;return c.forEach((function(n,i){o+=e[t](n)*m[i]})),l.forEach((function(t){o+=e[n]*t})),o}function O(e,t,n){if(Math.floor(Date.now()/1e3)>=parseInt(n))return t;var r=new x.a(e),o=new x.a(t);return r.gt(o)?r.toString(10):o.toString(10)}var j=S(S({},c.b),{},{getCatalystPriceSandWei:function(e,t){return function(e){var n=t.get("getPrices");return n?e<0||e>n.pricesBeforeSwitch.length||e>n.pricesAfterSwitch.length?"0":O(n.pricesBeforeSwitch[e],n.pricesAfterSwitch[e],n.switchTime):"0"}},getGemPriceSandWei:function(e,t){var n=t.get("getPrices");return n?O(n.gemPriceBeforeSwitch,n.gemPriceAfterSwitch,n.switchTime):"0"},getCatalystPriceSand:function(e,t){return function(e){var n=t.getCatalystPriceSandWei(e);return parseFloat(w.a.utils.fromWei(n))}},getGemPriceSand:function(e,t){var n=t.getGemPriceSandWei;return parseFloat(w.a.utils.fromWei(n))},getCatalystPriceETH:function(e,t){return function(e){var n=t.get("getEtherAmountWithSAND");if(!n)return 0;var r=t.getCatalystPriceSandWei(e);return E(r,n)}},getGemPriceETH:function(e,t){var n=t.get("getEtherAmountWithSAND");if(!n)return 0;var r=t.getGemPriceSandWei;return E(r,n)},getCatalystPriceDAI:function(e,t){return function(e){var n=t.getCatalystPriceSandWei(e);return A(n)}},getGemPriceDAI:function(e,t){var n=t.getGemPriceSandWei;return A(n)},getPackPriceSand:function(e,t){return C(t,"getCatalystPriceSand","getGemPriceSand").toFixed(2)},getPackPriceETH:function(e,t){return C(t,"getCatalystPriceETH","getGemPriceETH").toFixed(4)},getPackPriceDAI:function(e,t){return C(t,"getCatalystPriceDAI","getGemPriceDAI").toFixed(2)}}),R=function(){return{starterpackv1Address:{data:null,status:"loading"},purchaseInfo:{data:null,status:"loading"},purchaseWithETH:{data:null,status:"loading"},purchaseWithDAI:{data:null,status:"loading"},purchaseWithSand:{data:null,status:"loading"},priceETH:{data:null,status:"loading"},priceDAI:{data:null,status:"loading"},priceSand:{data:null,status:"loading"},getPrices:{data:null,status:"loading"},getEtherAmountWithSAND:{data:null,status:"loading"}}};function D(e,t,n){return n?l.a.purchaseInfo(e,t):l.a.hasAttributes(e)}function I(e,t){return l.a.purchaseInfoExtend(e,t)}function M(e,t,n,r,o,c){window.$nuxt.$gtmEvent({event:"pruchaseCatalystAndGemsConfirmed",assetIds:e,catalystIds:t,catalystQuantities:n,gemIds:r,gemQuantities:o}),Object(G.f)("success",c)}function H(e,t,n,r,o,c){window.$nuxt.$gtmEvent({event:"pruchaseCatalystAndGemsError",assetIds:e,catalystIds:t,catalystQuantities:n,gemIds:r,gemQuantities:o}),Object(G.f)("error",c)}function N(e){Object(G.d)({title:e})}function L(e,t){return function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){var o,m,l,d,w;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o=r.commit,m=r.dispatch,(l=Object(c.a)(o,e)).loading(null),n.next=5;break;case 5:return n.next=7,m("refreshContract");case 7:if(d=n.sent){n.next=10;break}throw new Error("Contract not initialized");case 10:return n.next=12,Object(h.c)(d,e,t);case 12:return w=n.sent,l.success(w),n.abrupt("return",w);case 15:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}var U={refreshContract:Object(m.b)("starterpackv1"),resetContract:Object(m.d)("starterpackv1"),getEtherAmountWithSAND:L("getEtherAmountWithSAND",["1000000000000000000"]),getPrices:L("getPrices"),isSANDEnabled:L("isSANDEnabled"),isDAIEnabled:L("isDAIEnabled"),isETHEnabled:L("isETHEnabled"),getPurchaseInfo:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,m,l,h,d,w,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.commit,o=e.rootState,m=t.assetIds,l=t.purchase,h=Object(c.a)(r,"purchaseInfo"),n.prev=3,d=o.user.currentUser){n.next=7;break}throw new Error("Not authenticated");case 7:return n.next=9,D(m,d.id,l);case 9:return w=n.sent,h.success(w),n.abrupt("return",w);case 14:throw n.prev=14,n.t0=n.catch(3),f=Object(c.d)(n.t0),h.error(f),N(f),n.t0;case 20:case"end":return n.stop()}}),n,null,[[3,14]])})))()},purchase:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.dispatch,n.abrupt("return",Promise.all([r("getEtherAmountWithSAND").catch((function(){})),r("getPurchaseInfo",{assetIds:t,purchase:!1}).catch((function(){})),r("getPrices").catch((function(){})),r("isSANDEnabled").catch((function(){}))]));case 2:case"end":return n.stop()}}),n)})))()},purchaseWithSand:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,m,l,d,w,f,x,_,T,v,S,k,E,A,y;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=e.commit,o=e.dispatch,m=e.getters,l=e.rootState,n.prev=1,n.next=4;break;case 4:if(d=l.user.currentUser){n.next=7;break}throw new Error("Not authenticated");case 7:return n.next=9,o("refreshContract");case 9:if(w=n.sent){n.next=12;break}throw new Error("Contract not initialized");case 12:return n.next=14,o("isSANDEnabled");case 14:if(n.sent){n.next=17;break}throw new Error("SAND purchase is disabled");case 17:return n.next=19,Object(h.m)();case 19:return n.next=21,o("getPurchaseInfo",{assetIds:t,purchase:!0});case 21:if(f=m.get("purchaseInfo")){n.next=24;break}throw new Error("Invalid purchase info");case 24:return x=f.catalystIds,_=f.catalystQuantities,T=f.gemIds,v=f.gemQuantities,S=f.buyer,k=f.nonce,E=f.signature,n.next=27,Object(h.d)(w,"purchaseWithSand",[S,{catalystIds:x,catalystQuantities:_,gemIds:T,gemQuantities:v,nonce:k},E],{from:S},(function(e){return M(t,x,_,T,v,e)}),(function(e){return H(t,x,_,T,v,e)}));case 27:return A=n.sent,n.next=30,I(t,d.id);case 30:Object(G.f)("pending",A),Object(c.a)(r,"purchaseWithSand").success(A),n.next=40;break;case 34:throw n.prev=34,n.t0=n.catch(1),y=Object(c.d)(n.t0),Object(c.a)(r,"purchaseWithSand").error(y),N(y),n.t0;case 40:case"end":return n.stop()}}),n,null,[[1,34]])})))()}}},2599:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return m})),n.d(t,"mutations",(function(){return l})),n.d(t,"getters",(function(){return h})),n.d(t,"actions",(function(){return d}));var r=n(1),o=n(429),c=n(5),m=function(){return{newTheme:{data:null,status:"success"},updatedTheme:{data:null,status:"success"},themes:{data:[],status:"success"}}},l=r.c,h=r.b,d={addTheme:Object(c.a)({prop:"newTheme",func:o.a.addTheme,toast:{success:"Theme created",error:"Theme error"}}),updateTheme:Object(c.a)({prop:"updatedTheme",func:o.a.updateTheme,toast:{success:"Theme updated",error:"Theme error"}}),getAllThemes:Object(c.a)({prop:"themes",func:o.a.getAllThemes})}},2600:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return m})),n.d(t,"mutations",(function(){return l})),n.d(t,"getters",(function(){return h})),n.d(t,"actions",(function(){return d}));var r=n(1),o=n(436),c=n(5),m=function(){return{list:{data:null,status:"success"},getDetail:{data:null,status:"success"},create:{data:null,status:"success"},update:{data:null,status:"success"},delete:{data:null,status:"success"}}},l=r.c,h=r.b,d={list:Object(c.a)({prop:"list",func:o.a.list}),getDetail:Object(c.a)({prop:"getDetail",func:o.a.getDetail}),create:Object(c.a)({prop:"create",func:o.a.createDetail}),update:Object(c.a)({prop:"update",func:o.a.updateDetail}),delete:Object(c.a)({prop:"delete",func:o.a.deleteDetail})}},2601:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return c})),n.d(t,"mutations",(function(){return m})),n.d(t,"actions",(function(){return x}));n(22),n(15),n(25),n(12);var r=n(0),o=n(18),c=function(){return{allTransactions:{},transactions:{indexes:{},data:[]}}},m={registerState:function(e,t){e[t.state]=t.data}};function l(e){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=window.web3,e.next=4,n.eth.getTransaction(t);case 4:if(r=e.sent){e.next=7;break}return e.abrupt("return",-1);case 7:return e.next=9,n.eth.getBlockNumber();case 9:return o=e.sent,e.abrupt("return",null===r.blockNumber?0:o-r.blockNumber);case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function d(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6;setTimeout(Object(r.a)(regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l(n);case 2:if(-1!==(c=r.sent)){r.next=5;break}return r.abrupt("return",e("deleteTransaction",{txHash:n,chainId:t}));case 5:if(!(c>=o)){r.next=7;break}return r.abrupt("return",e("updateTransaction",{txHash:n,confirmed:!0,chainId:t}));case 7:return r.abrupt("return",d(e,t,n));case 8:case"end":return r.stop()}}),r)}))),15e3)}function w(e,t){var n=localStorage.getItem("transactions"),r=n?JSON.parse(n):{};return t&&t.success(r),r[e]||{indexes:{},data:[]}}function f(e,t){var n=localStorage.getItem("transactions"),r=n?JSON.parse(n):{};r[e]=t,localStorage.setItem("transactions",JSON.stringify(r))}var x={loadTransactions:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,m,l,i,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=e.commit,c=e.dispatch,n.next=3;break;case 3:m=w(t,Object(o.a)(r,"allTransactions")),Object(o.a)(r,"transactions").success(m),l=Object.keys(m),i=0;case 7:if(!(i<l.length)){n.next=15;break}if(h=l[i],!m[h]){n.next=11;break}return n.abrupt("continue",12);case 11:d(c,t,h);case 12:i++,n.next=7;break;case 15:case"end":return n.stop()}}),n)})))()},updateTransaction:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,m,l,h,x,_;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=e.commit,c=e.dispatch,m=t.txHash,l=t.confirmed,h=t.chainId,n.next=4;break;case 4:void 0!==(x=w(h)).indexes[m]||l||d(c,h,m),_=x.data.push({hash:m,confirmed:!!l}),x.indexes[m]=_,f(h,x),Object(o.a)(r,"transactions").success(x);case 10:case"end":return n.stop()}}),n)})))()},deleteTransaction:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,m,l,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=e.commit,c=t.txHash,m=t.chainId,n.next=4;break;case 4:if(void 0!==(l=w(m))[c]){n.next=7;break}return n.abrupt("return");case 7:h=delete l.indexes[c],l.data.splice(h,1),f(m,l),Object(o.a)(r,"transactions").success(l);case 11:case"end":return n.stop()}}),n)})))()}}},2631:function(e,t,n){"use strict";n.r(t);var r,o,c,m=n(10),l=(n(12),n(0)),h=(n(46),n(50),n(42)),d=n.n(h),w=n(55),f=n(18),x=n(111),_=n(83),G=n(65),T=n(13),v=n(16),S=n(636),k=n(133),E=n(117),A=function(e,t){var n,r,o,c=null==t||null===(n=t.message)||void 0===n?void 0:n.includes(_.d.INSUFFICIENT_GAS),m=null==t||null===(r=t.message)||void 0===r?void 0:r.includes(_.d.USER_DENIED_TRANSACTION_SIGNATURE),l=null==t||null===(o=t.message)||void 0===o?void 0:o.includes(_.d.USER_DECLINED_REQUEST),h=t.status===_.e.ABORTED;return c?e.dispatch(E.actionTypes.SET_STATUS,_.m.LOW_GAS):m||l||h?e.dispatch(E.actionTypes.SET_STATUS,_.m.REJECTED):void e.dispatch(E.actionTypes.SET_STATUS,_.m.ERROR)},y=(r={},Object(m.a)(r,E.actionTypes.SET_CONFIGURATION,(function(e,t){Object(f.a)(e.commit,"configuration").success(t)})),Object(m.a)(r,E.actionTypes.SET_SIGNATURE,(function(e,t){Object(f.a)(e.commit,"signature").success(t)})),Object(m.a)(r,E.actionTypes.SET_STATUS,(function(e,t){Object(f.a)(e.commit,"status").success(t)})),Object(m.a)(r,E.actionTypes.PURCHASE_WITH_ETH,(c=Object(l.a)(regeneratorRuntime.mark((function e(t,n){var r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dispatch(E.actionTypes.SET_STATUS,null),e.next=3;break;case 3:return r={amount:n.amount,cbSuccess:function(e){t.dispatch(E.actionTypes.SET_STATUS,_.m.SUCCESS),T.f("success",e)},cbFailure:function(e){t.dispatch(E.actionTypes.SET_STATUS,_.m.ERROR),T.f("error",e)},cbError:function(e){return A(t,e)}},e.prev=4,e.next=7,v.m();case 7:return e.next=9,t.dispatch(E.actionTypes.EXECUTE_MINT_TOKENS,r);case 9:e.next=16;break;case 11:throw e.prev=11,e.t0=e.catch(4),c=(null===e.t0||void 0===e.t0||null===(o=e.t0.response)||void 0===o?void 0:o.data)||_.d.UNKNOWN_ERROR,Object(f.a)(t.commit,E.actionTypes.PURCHASE_WITH_ETH).error(c),new Error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,11]])}))),function(e,t){return c.apply(this,arguments)})),Object(m.a)(r,E.actionTypes.EXECUTE_MINT_TOKENS,(o=Object(l.a)(regeneratorRuntime.mark((function e(t,n){var r,o,c,m,l,h,A,y,P,C,O,j,R,D,I,M,H,N,L,U,W;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A=null!==(r=t.rootGetters[k.a.USER_WALLET_ACCOUNTLESS])&&void 0!==r?r:t.rootGetters[k.a.USER_WALLET],!Object(w.isEmpty)(A)){e.next=3;break}throw new Error(_.d.USER_HAS_NO_WALLET);case 3:return y=null===(o=t.rootState)||void 0===o||null===(c=o.contracts)||void 0===c?void 0:c[G.i],P=null===(m=t.rootState)||void 0===m||null===(l=m.contracts)||void 0===l?void 0:l[_.c],C=new window.web3.eth.Contract(y.abi,y.address),O=new window.web3.eth.Contract(P.abi,P.address),e.next=9,O.methods.checkMintAllowed(A,n.amount).call();case 9:if(j=e.sent,!Object(x.b)(j)){e.next=12;break}throw new Error(_.d.USER_REQUEST_TOO_MANY);case 12:return e.next=14,O.methods.price(n.amount).call();case 14:return R=e.sent,D=O.methods.mint(A,n.amount,new d.a(t.state.signature.id,"hex"),t.state.signature.hash).encodeABI(),I=[P.address,R,D],M=(h=C.methods)[_.b].apply(h,I),e.next=20,v.f();case 20:return H=e.sent,e.next=23,v.b(C,M,A);case 23:return N=e.sent,L=new d.a(H).mul(new d.a(N)),e.next=27,t.dispatch(S.a.ETH_CHECK_BALANCE,{amount:L},{root:!0});case 27:return U={gasPrice:H,gasLimit:N,from:A,value:_.n},e.prev=28,e.next=31,v.d(C,_.b,I,U,n.cbSuccess,n.cbFailure,n.cbError);case 31:W=e.sent,T.f("pending",W),Object(f.a)(t.commit,"txHash").success(W),e.next=39;break;case 36:e.prev=36,e.t0=e.catch(28),t.dispatch(E.actionTypes.SET_STATUS,_.m.ERROR);case 39:case"end":return e.stop()}}),e,null,[[28,36]])}))),function(e,t){return o.apply(this,arguments)})),r);t.default=y},2632:function(e,t,n){"use strict";n.r(t);var r=n(1);t.default=r.b},2633:function(e,t,n){"use strict";n.r(t);t.default={registerState:function(e,t){e[t.state]=t.data}}},2634:function(e,t,n){"use strict";n.r(t);t.default=function(){return{txHash:null,status:null,signature:null,configuration:{status:null,waveType:null,priceSand:null,maxNumberOfTokens:null}}}},2635:function(e,t,n){"use strict";n.r(t),t.default=function(){return{features:{0:{title:"create.features.modeler.title",text:"create.features.modeler.text",img:"/img/13_Create/modeler.jpg",link:"https://www.voxedit.io/modeling.html"},1:{title:"create.features.animator.title",text:"create.features.animator.text",img:"/img/13_Create/animator.jpg",link:"https://www.voxedit.io/animation.html"},2:{title:"create.features.nftMaker.title",text:"create.features.nftMaker.text",img:"",link:"https://www.voxedit.io/animation.html"}},assetCards:{0:{name:"Futuristic FireTruck",preview:"https://api.sandbox.game/assets/84cc000e-f9f7-4497-8914-c3a8c31a3d33/preview",assetRoute:"/assets/Futuristic-FireTruck/84cc000e-f9f7-4497-8914-c3a8c31a3d33",author:"@anazarov",authorProfile:"/users/anazarov/c69b4853-d5ab-41a8-839a-7184cebcbce5"},1:{name:"Chibi Hedgehog",preview:"https://api.sandbox.game/assets/6f794987-2b2a-484f-bd46-af3764c579c4/preview",assetRoute:"/assets/Chibi-Hedgehog/6f794987-2b2a-484f-bd46-af3764c579c4",author:"@mylittlebunny",authorProfile:"/users/mylittlebunny/3a83d2bb-5088-43c9-ab94-10406b7370f9"},2:{name:"Chinese Cottage",preview:"https://api.sandbox.game/assets/b0dc584c-c99d-4e0e-9cc5-c2be8d4d1dd7/preview",assetRoute:"/assets/Chinese-cottage/b0dc584c-c99d-4e0e-9cc5-c2be8d4d1dd7",author:"@slashtempestray",authorProfile:"/users/slashtempestray/a1726509-4768-4e4d-9d25-84fac0dd6591"},3:{name:"Cartoon Spaceship",preview:"https://api.sandbox.game/assets/b4991ac8-c5a6-478b-87d6-69133979dad0/preview",assetRoute:"/assets/Cartoon-Spaceship/b4991ac8-c5a6-478b-87d6-69133979dad0",author:"@momirsarac",authorProfile:"/users/momirsarac/c6f0d08b-9abd-43e1-baea-3f22fa0d73eb"}},quotes:["/img/13_Create/Avatar_william.svg","/img/13_Create/ArtistAvatar_Alex.svg","/img/13_Create/ArtistAvatar_Nicolas.svg"],steps:{1:{link:"https://fund.sandbox.game/",image:"/img/13_Create/fund.png"},2:{src:"https://www.youtube.com/embed/zkHisR2W0wA",video:!0},3:{src:"https://www.youtube.com/embed/xwsy81g42fM",video:!0}}}}},2636:function(e,t,n){"use strict";n.r(t),t.default={setOnboardingActive:function(e,t){e.commit("SET_ONBOARDING_ACTIVE",t)}}},2637:function(e,t,n){"use strict";n.r(t),t.default={SET_ONBOARDING_ACTIVE:function(e,t){e.onboardingActive=t}}},2638:function(e,t,n){"use strict";n.r(t),t.default=function(){return{onboardingActive:1,homePartners:[{url:"/en/snoopdogg",img:"Logo_Snoop.png",altText:"Snoop Dogg"},{url:"https://thewalkingdead.sandbox.game/#/en",img:"Logo_HomePartner_TWalkingD.svg",altText:"The Walking Dead"},{url:"https://www.adidas.com/",img:"Logo_Adidas.png",altText:"Adidas"},{url:"https://www.scmp.com/",img:"Logo_SCMP.png",altText:"South China Morning Post"},{url:"https://avengedsevenfold.com/",img:"Logo_HomePartner_ASevenfold.svg",altText:"Avenged Sevenfold"},{url:"https://twitter.com/richiehawtin?lang=en",img:"Logo_HomePartner_RHawtin.png",altText:"Richie Hawtin"},{url:"https://www.smurf.com/",img:"smurf-logo.svg",altText:"The Smurfs"},{url:"https://www.itvstudios.com/",img:"Logo_HomePartner_Hell_s_Kitchen.png",altText:"Hell's Kitchen"},{url:"https://www.rollercoastertycoon.com/",img:"roller-coaste-tycoon-logo-2x.png",altText:"Rollercoastertycoon"},{url:"https://www.deadmau5.com",img:"Logo_HomePartner_Deadmau5_small.png",altText:"Deadmau5"},{url:"https://www.atari.com/",img:"Logo_HomePartner_Atari.svg",altText:"Atari"},{url:"https://www.carebears.com/",img:"Logo_HomePartner_CareBears.png",altText:"Carebears"},{url:"https://www.instagram.com/blondish/",img:"Logo_HomePartner_Blondish.png",altText:"Blondish"},{url:"https://www.animocabrands.com/",img:"Logo_HomePartner_Aminoca.png",altText:"Aminoca"}],aboutBigPartners:[{url:"/en/snoopdogg",img:"Logo_Snoop.png",altText:"Snoop Dogg"},{url:"https://thewalkingdead.sandbox.game/#/en",img:"Logo_HomePartner_TWalkingD.svg",altText:"The Walking Dead"},{url:"https://www.adidas.com/",img:"Logo_Adidas.png",altText:"Adidas"},{url:"https://www.scmp.com/",img:"Logo_SCMP.png",altText:"South China Morning Post"},{url:"https://avengedsevenfold.com/",img:"Logo_HomePartner_ASevenfold.svg",altText:"Avenged Sevenfold"},{url:"https://twitter.com/richiehawtin?lang=en",img:"Logo_HomePartner_RHawtin.png",altText:"Richie Hawtin"},{url:"https://www.smurf.com/",img:"smurf-logo.svg",altText:"The Smurfs"},{url:"https://www.itvstudios.com/",img:"Logo_HomePartner_Hell_s_Kitchen.png",altText:"Hell's Kitchen"},{url:"https://www.rollercoastertycoon.com/",img:"roller-coaste-tycoon-logo-2x.png",altText:"Rollercoastertycoon"},{url:"https://www.deadmau5.com",img:"Logo_HomePartner_Deadmau5_small.png",altText:"Deadmau5"},{url:"https://www.atari.com/",img:"Logo_HomePartner_Atari.svg",altText:"Atari"},{url:"https://www.carebears.com/",img:"Logo_HomePartner_CareBears.png",altText:"Carebears"},{url:"https://www.instagram.com/blondish/",img:"Logo_HomePartner_Blondish.png",altText:"Blondish"},{url:"https://www.animocabrands.com/",img:"Logo_HomePartner_Aminoca.png",altText:"Aminoca"},{url:"https://register.sandbox.game/sc",img:"standard_chartered.png",altText:"Standard Chartered"},{url:"http://adrian.sandbox.game/",img:"adrian_cheng.png",altText:"Adrian Cheng"},{url:"http://shkco.sandbox.game/",img:"shk.png",altText:"SHK"},{url:"http://timescapital.sandbox.game/",img:"metatimes.png",altText:"Metatimes"},{url:"https://register.sandbox.game/oceanpark",img:"ocean_park.png",altText:"Ocean Park"},{url:"https://register.sandbox.game/brinc",img:"brinc.png",altText:"BRINC"},{url:"https://register.sandbox.game/tatlerasia",img:"tatler.png",altText:"Tatler"}],bigPartners:[{url:"https://www.atari.com/",img:"Logo_Atari.png",big:!0},{url:"https://www.square-enix.com/",img:"Logo_SquareEnix.png",big:!0},{url:"https://www.carebears.com/",img:"Logo_Carebears.png",big:!0},{url:"https://www.animocabrands.com/",img:"Logo_HomePartner_Animoca.png",big:!0},{url:"https://www.shaunthesheep.com/",img:"Logo_Shaunthesheep.png",big:!0},{url:"https://www.smurf.com/",img:"Logo_Smurfs.png",big:!0}],partners:[{url:"https://www.softbank.jp/en/corp/",img:"softbank.png"},{url:"https://www.libertycityventures.com/",img:"liberty-city.png"},{url:"https://www.galaxyinteractive.io/",img:"galaxy-interactive.png"},{url:"https://alpaca.vc/",img:"alpaca-vc.png"},{url:"http://www.bluepoolcapital.com/",img:"blue-pool-capital.png"},{url:"https://www.kingswaycap.com/",img:"kingsway.png"},{url:"https://www.lgtechventures.com/",img:"LGV.png"},{url:"https://www.samsungnext.com/",img:"samsung-next.png"},{url:"https://www.com2us.com/",img:"come2us.png"},{url:"https://graticule.life/",img:"graticule.png"},{url:"https://www.bloomberg.com/profile/company/1240223D:US",img:"nokota.png"},{url:"https://www.tgv4plus.com/",img:"tgv.png"},{url:"#",img:"sound.png"},{url:"https://www.scb10x.com/",img:"scb10x.png"},{url:"https://polygonstudios.com/",img:"polygon-studio.png"},{url:"https://www.shkco.com/en/home.aspx",img:"sun-hung-kai.png"},{url:"https://stake.fish/",img:"stakefish.png"},{url:"https://www.sterling.vc/",img:"sterlingvc.png"},{url:"https://www.wedbush.com/",img:"wedbush.png"},{url:"#",img:"hodlco.png"},{url:"https://coincheck.com/",img:"coincheck.png"},{url:"https://quan-inc.jp/",img:"Logo_Quanv2.png"},{url:"https://lootmogul.com",img:"Logo_loot_mogul.png"},{url:"https://www.hsbc.com/",img:"hsbc-logo.png"}],bigExchanges:[{img:"/img/24_Exchanges/binance.png",link:"https://www.binance.com/en/trade/SAND_USDT"},{img:"/img/24_Exchanges/upbit.png",link:"https://upbit.com/exchange?code=CRIX.UPBIT.BTC-SAND"},{img:"/img/24_Exchanges/huobi.png",link:"https://www.huobi.com/en-us/exchange/sand_usdt"},{img:"/img/24_Exchanges/uniswap.png",link:"https://app.uniswap.org/#/swap?outputCurrency=0x3845badAde8e6dFF049820680d1F14bD3903a5d0"}],exchanges:[{img:"/img/24_Exchanges/kucoin.png",link:"https://www.kucoin.com/news/en-sand-gets-listed-on-kucoin"},{img:"/img/24_Exchanges/lcx.png",link:"https://www.lcx.com"},{img:"/img/24_Exchanges/bittrex.png",link:"https://global.bittrex.com/Market/Index?MarketName=USDT-SAND"},{img:"/img/24_Exchanges/lbank.png",link:"https://www.lbank.info"},{img:"/img/24_Exchanges/gemini.png",link:"https://www.gemini.com/"},{img:"/img/24_Exchanges/indodax.png",link:"https://indodax.com/en/"},{img:"/img/24_Exchanges/crypto.com.png",link:"https://crypto.com/en/index.html"},{img:"/img/24_Exchanges/la_token.png",link:"https://latoken.com/exchange/SAND_USDT"},{img:"/img/24_Exchanges/bitmart.png",link:"https://www.bitmart.com/trade/en?symbol=SAND_USDT"},{img:"/img/24_Exchanges/liquid.png",link:"https://app.liquid.com/en/exchange/SANDUSDT"},{img:"/img/24_Exchanges/mxc.png",link:"https://www.mxc.org"},{img:"/img/24_Exchanges/poloniex.png",link:"https://poloniex.com/exchange/USDT_SAND"},{img:"/img/24_Exchanges/simplex.png",link:"https://www.simplex.com/"},{img:"/img/24_Exchanges/tokyocripto.png",link:"https://www.tokocrypto.com"},{img:"/img/24_Exchanges/wazirx.png",link:"https://wazirx.com/exchange/SAND-USDT"},{img:"/img/24_Exchanges/wbf.png",link:"https://www.wbf.info/trade/SAND_USDT"},{img:"/img/24_Exchanges/bithumb.png",link:"https://en.bithumb.com/trade/order/SAND_KRW"},{img:"/img/24_Exchanges/max.png",link:"https://max.maicoin.com/trades/sandusdt?lang=en"},{img:"/img/24_Exchanges/coincheck.png",link:"https://coincheck.com/ja/exchange/charts/coincheck/sand_jpy/3600"}],articles:["https://medium.com/sandbox-game/the-evolution-of-the-sandbox-762f0023349","https://medium.com/sandbox-game/erc-1155-a-new-standard-for-the-sandbox-c95ee1e45072","https://medium.com/sandbox-game/voxedit-how-to-get-your-assets-into-minecraft-4be598b838f6","https://medium.com/sandbox-game/user-generated-contents-meets-nfts-within-the-sandbox-4b865966c54e"],ourProducts:{0:{img:"/img/14_Home/Start_Row2_VoxEdit2.png",title:"about.sandbox.products.land.title",info:"about.sandbox.products.land.description",to:"/map/",section:""},1:{img:"/img/14_Home/Start_Row2_Marketplace.png",title:"about.sandbox.products.gameMakerProduct.title",info:"about.sandbox.products.gameMakerProduct.description",to:"/create/game-maker/",section:"sand"},2:{img:"/img/14_Home/Start_Row2_GameMaker.png",title:"about.sandbox.products.fund.title",externalLink:!0,info:"about.sandbox.products.fund.description",to:"https://sandbox.game/fund",toKr:"https://www.kr.sandbox.game/fund",section:"voxedit"}},products:{0:{icon:"/img/02_Side_Bar/svg/voxedit-icon.svg",img:"/img/14_Home/Start_Row2_VoxEdit2.png",title:"about.sandbox.products.voxedit.title",info:"about.sandbox.products.voxedit.description",to:"/create/vox-edit/",section:"voxedit"},1:{icon:"/img/02_Side_Bar/svg/shop-icon.svg",img:"/img/14_Home/Start_Row2_Marketplace.png",title:"about.sandbox.products.marketplace.title",info:"about.sandbox.products.marketplace.description",to:"/shop/"},2:{icon:"/img/02_Side_Bar/svg/create-icon.svg",img:"/img/14_Home/Start_Row2_GameMaker.png",title:"about.sandbox.products.gameMaker.title",info:"about.sandbox.products.gameMaker.description",to:"/create/game-maker/",section:"gamemaker"}}}}},2639:function(e,t,n){"use strict";n.r(t),t.default=function(){return{milestones:{0:{date:"theGame.milestones.item01.date",title:"theGame.milestones.item01.title",list:[{text:"theGame.milestones.item01.text01"},{text:"theGame.milestones.item01.text02"},{text:"theGame.milestones.item01.text03"},{text:"theGame.milestones.item01.text04"},{text:"theGame.milestones.item01.text05"}],month:"theGame.milestones.item01.month"},1:{date:"theGame.milestones.item02.date",title:"theGame.milestones.item02.title",list:[{text:"theGame.milestones.item02.text01"},{text:"theGame.milestones.item02.text02"},{text:"theGame.milestones.item02.text03"},{text:"theGame.milestones.item02.text04"}],month:"theGame.milestones.item02.month"},2:{date:"theGame.milestones.item03.date",title:"theGame.milestones.item03.title",list:[{text:"theGame.milestones.item03.text01"},{text:"theGame.milestones.item03.text02"},{text:"theGame.milestones.item03.text03"},{text:"theGame.milestones.item03.text04"},{text:"theGame.milestones.item03.text05"},{text:"theGame.milestones.item03.text06"}],month:"theGame.milestones.item03.month"}},changelogList:{1:{date:"theGame.changelog.log.item06.date",title:"theGame.changelog.log.item06.title",list:[{title:"theGame.changelog.log.item06.01.title",list:[{item:"theGame.changelog.log.item06.01.list.item01"},{item:"theGame.changelog.log.item06.01.list.item02"},{item:"theGame.changelog.log.item06.01.list.item03"},{item:"theGame.changelog.log.item06.01.list.item04"}]}]},2:{date:"theGame.changelog.log.item05.date",title:"theGame.changelog.log.item05.title",list:[{title:"theGame.changelog.log.item05.01.title",list:[{item:"theGame.changelog.log.item05.01.list.item01"},{item:"theGame.changelog.log.item05.01.list.item02"},{item:"theGame.changelog.log.item05.01.list.item03"}]},{title:"theGame.changelog.log.item05.02.title",list:[{item:"theGame.changelog.log.item05.02.list.item01"},{item:"theGame.changelog.log.item05.02.list.item02"},{item:"theGame.changelog.log.item05.02.list.item03"}]},{title:"theGame.changelog.log.item05.03.title",list:[{item:"theGame.changelog.log.item05.03.list.item01"},{item:"theGame.changelog.log.item05.03.list.item02"},{item:"theGame.changelog.log.item05.03.list.item03"},{item:"theGame.changelog.log.item05.03.list.item04"}]},{title:"theGame.changelog.log.item05.04.title",list:[{item:"theGame.changelog.log.item05.04.list.item01"},{item:"theGame.changelog.log.item05.04.list.item02"},{item:"theGame.changelog.log.item05.04.list.item03"},{item:"theGame.changelog.log.item05.04.list.item04"}]}]},3:{date:"theGame.changelog.log.item04.date",title:"theGame.changelog.log.item04.title",subtitle:"theGame.changelog.log.item04.subtitle",list:[{title:"theGame.changelog.log.item04.01.title",list:[{item:"theGame.changelog.log.item04.01.list.item01"},{item:"theGame.changelog.log.item04.01.list.item02"},{item:"theGame.changelog.log.item04.01.list.item03"}]},{title:"theGame.changelog.log.item04.02.title",list:[{item:"theGame.changelog.log.item04.02.list.item01"},{item:"theGame.changelog.log.item04.02.list.item02"}]},{title:"theGame.changelog.log.item04.03.title",list:[{item:"theGame.changelog.log.item04.03.list.item01"},{item:"theGame.changelog.log.item04.03.list.item02"},{item:"theGame.changelog.log.item04.03.list.item03"},{item:"theGame.changelog.log.item04.03.list.item04"},{item:"theGame.changelog.log.item04.03.list.item05"},{item:"theGame.changelog.log.item04.03.list.item06"}]},{title:"theGame.changelog.log.item04.04.title",list:[{item:"theGame.changelog.log.item04.04.list.item01"}]},{title:"theGame.changelog.log.item04.05.title",list:[{item:"theGame.changelog.log.item04.05.list.item01"},{item:"theGame.changelog.log.item04.05.list.item02"},{item:"theGame.changelog.log.item04.05.list.item03"},{item:"theGame.changelog.log.item04.05.list.item04"}]},{title:"theGame.changelog.log.item04.06.title",list:[{item:"theGame.changelog.log.item04.06.list.item01"},{item:"theGame.changelog.log.item04.06.list.item02"},{item:"theGame.changelog.log.item04.06.list.item03"},{item:"theGame.changelog.log.item04.06.list.item04"},{item:"theGame.changelog.log.item04.06.list.item05"}]}]},4:{date:"theGame.changelog.log.item03.date",title:"theGame.changelog.log.item03.title",subtitle:"theGame.changelog.log.item03.subtitle",list:[{title:"theGame.changelog.log.item03.01.title",list:[{item:"theGame.changelog.log.item03.01.list.item01"},{item:"theGame.changelog.log.item03.01.list.item02"}]},{title:"theGame.changelog.log.item03.02.title",list:[{item:"theGame.changelog.log.item03.02.list.item01"}]},{title:"theGame.changelog.log.item03.03.title",list:[{item:"theGame.changelog.log.item03.03.list.item01"}]},{title:"theGame.changelog.log.item03.04.title",list:[{item:"theGame.changelog.log.item03.04.list.item01"}]},{title:"theGame.changelog.log.item03.05.title",list:[{item:"theGame.changelog.log.item03.05.list.item01"}]},{title:"theGame.changelog.log.item03.06.title",list:[{item:"theGame.changelog.log.item03.06.list.item01"}]},{title:"theGame.changelog.log.item03.07.title",list:[{item:"theGame.changelog.log.item03.07.list.item01"},{item:"theGame.changelog.log.item03.07.list.item02"},{item:"theGame.changelog.log.item03.07.list.item03"},{item:"theGame.changelog.log.item03.07.list.item04"}]}]},5:{date:"theGame.changelog.log.item02.date",title:"theGame.changelog.log.item02.title",subtitle:"theGame.changelog.log.item02.subtitle",list:[{title:"theGame.changelog.log.item02.01"},{title:"theGame.changelog.log.item02.02"},{title:"theGame.changelog.log.item02.03"},{title:"theGame.changelog.log.item02.04"},{title:"theGame.changelog.log.item02.05"},{title:"theGame.changelog.log.item02.06"},{title:"theGame.changelog.log.item02.07"},{title:"theGame.changelog.log.item02.08"},{title:"theGame.changelog.log.item02.09"},{title:"theGame.changelog.log.item02.10"},{title:"theGame.changelog.log.item02.11"},{title:"theGame.changelog.log.item02.12"},{title:"theGame.changelog.log.item02.13"},{title:"theGame.changelog.log.item02.14"},{title:"theGame.changelog.log.item02.15"},{title:"theGame.changelog.log.item02.16"},{title:"theGame.changelog.log.item02.17"},{title:"theGame.changelog.log.item02.18"},{title:"theGame.changelog.log.item02.19"}]},6:{date:"theGame.changelog.log.item01.date",title:"theGame.changelog.log.item01.title",subtitle:"theGame.changelog.log.item01.subtitle",list:[{title:"theGame.changelog.log.item01.01"},{title:"theGame.changelog.log.item01.02"},{title:"theGame.changelog.log.item01.03"},{title:"theGame.changelog.log.item01.04"},{title:"theGame.changelog.log.item01.05"},{title:"theGame.changelog.log.item01.06"},{title:"theGame.changelog.log.item01.07"},{title:"theGame.changelog.log.item01.08"},{title:"theGame.changelog.log.item01.09"},{title:"theGame.changelog.log.item01.10"},{title:"theGame.changelog.log.item01.11"},{title:"theGame.changelog.log.item01.12"},{title:"theGame.changelog.log.item01.13"},{title:"theGame.changelog.log.item01.14"},{title:"theGame.changelog.log.item01.15"},{title:"theGame.changelog.log.item01.16"},{title:"theGame.changelog.log.item01.17"}]}},reqs:"create.gamemaker.requirements",earnList:{0:{text:"theGame.earn.list.item01"},1:{text:"theGame.earn.list.item02"},2:{text:"theGame.earn.list.item03"}},gameMaker:{carousel:[{id:"1",big:"/img/13_Create/GameMaker/GM_Page_images/Title_camera templates.png",thumb:"/img/13_Create/GameMaker/GM_Page_images/Title_camera templates.png",description:"Camera Templates"},{id:"2",big:"/img/13_Create/GameMaker/GM_Page_images/Title_Avatar control.png",thumb:"/img/13_Create/GameMaker/GM_Page_images/Title_Avatar control.png",description:"Avatar Control"},{id:"3",big:"/img/13_Create/GameMaker/GM_Page_images/Title_ Enemies & fight system.png",thumb:"/img/13_Create/GameMaker/GM_Page_images/Title_ Enemies & fight system.png",description:"Enemies & Fight System"},{id:"4",big:"/img/13_Create/GameMaker/GM_Page_images/Title_ Components.png",thumb:"/img/13_Create/GameMaker/GM_Page_images/Title_ Components.png",description:"Components"},{id:"5",big:"/img/13_Create/GameMaker/GM_Page_images/Title_Behaviours.png",thumb:"/img/13_Create/GameMaker/GM_Page_images/Title_Behaviours.png",description:"Behaviours"},{id:"6",big:"/img/13_Create/GameMaker/GM_Page_images/Title_Game Rules.png",thumb:"/img/13_Create/GameMaker/GM_Page_images/Title_Game Rules.png",description:"Game Rules"},{id:"7",big:"/img/13_Create/GameMaker/GM_Page_images/Title_UX Library.png",thumb:"/img/13_Create/GameMaker/GM_Page_images/Title_UX Library.png",description:"Ux Library"},{id:"8",big:"/img/13_Create/GameMaker/GM_Page_images/ux library.gif",thumb:"/img/13_Create/GameMaker/GM_Page_images/ux library.gif",description:"Ux Library"}]},features:["block 1.png","block 2.png","block 3.png"],sections:{0:{title:"theGame.play.title",text:"theGame.play.text",img:"/img/15_Play/play.png",anch:"million"},1:{title:"theGame.create.title",text:"theGame.create.text",img:"/img/15_Play/create.png",anch:"create"},2:{title:"theGame.share.title",text:"theGame.share.text",img:"/img/15_Play/share.png",anch:"share"}},createdWithTsb:[{title:"Pirate Adventure",description:"lorem ipsum julio is to cesar what the sun is to earth",image:"/img/13_Create/GameMaker/Games/pirate_Adventure.png"},{title:"Uncharted World",description:"lorem ipsum julio is to cesar what the sun is to earth",image:"/img/13_Create/GameMaker/Games/uncharted_world.png"},{title:"Sweet Village",description:"lorem ipsum julio is to cesar what the sun is to earth",image:"/img/13_Create/GameMaker/Games/shinytures.png"},{title:"Deathrone",description:"lorem ipsum julio is to cesar what the sun is to earth",image:"/img/13_Create/GameMaker/Games/dethrone.png"},{title:"Black Town Old West",description:"lorem ipsum julio is to cesar what the sun is to earth",image:"/img/13_Create/GameMaker/Games/old_west.png"},{title:"Mushroom Mania",description:"lorem ipsum julio is to cesar what the sun is to earth",image:"/img/13_Create/GameMaker/Games/mushroom_mania.png"},{title:"Sweet Village",description:"lorem ipsum julio is to cesar what the sun is to earth",image:"/img/13_Create/GameMaker/Games/sweet_village.png"},{title:"Deathrone",description:"lorem ipsum julio is to cesar what the sun is to earth",image:"/img/13_Create/GameMaker/Games/decadent_hotel.png"}]}}}}]);