(window.webpackJsonp=window.webpackJsonp||[]).push([[474],{2216:function(t,e,r){"use strict";r.r(e),r.d(e,"mutations",(function(){return v})),r.d(e,"getters",(function(){return w})),r.d(e,"state",(function(){return E})),r.d(e,"actions",(function(){return k}));r(32),r(25),r(22),r(142),r(24),r(58),r(122),r(49),r(53),r(54),r(15),r(46),r(50),r(68);var n=r(10),c=(r(12),r(0)),o=r(1),l=r(341),d=r(13),f=r(21),m=r(16),O=r(9);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function j(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return C(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){l=!0,c=t},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw c}}}}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var v=o.c,w=o.b,E=function(){return{callClaim:{data:null,status:"success"},cashbacks:{data:null,status:"success"},claims:{data:null,status:"success"},claimInfo:{data:null,status:"success"},claim:{data:null,status:"success"},lastPendingClaim:{data:null,status:"success"}}},k={loadContractByLayer:function(t,e){return Object(f.i)(e.contractName,e.layer,!0,e.biconomy)},getCashbacks:function(t,e){return Object(c.a)(regeneratorRuntime.mark((function r(){var n,c,f,m,O,y,h;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,c=e.offset,f=void 0===c?0:c,m=e.limit,O=void 0===m?25:m,y=Object(o.a)(n,"cashbacks"),r.prev=3,y.loading(),r.next=7,l.a.getAllCashbacks({offset:f,limit:O});case 7:if(r.t0=r.sent,r.t0){r.next=10;break}r.t0=[];case 10:h=r.t0,y.success(h),r.next=20;break;case 14:throw r.prev=14,r.t1=r.catch(3),console.error(r.t1),y.error(Object(o.d)(r.t1)),Object(d.d)({title:r.t1}),r.t1;case 20:case"end":return r.stop()}}),r,null,[[3,14]])})))()},getClaims:function(t,e){var r=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var c,f,m,y,C,v,w,E,k,x,A,S,T,P,I,D,R;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=t.commit,f=t.dispatch,m=e.offset,y=void 0===m?0:m,C=e.limit,v=void 0===C?25:C,w=e.sortBy,E=void 0===w?"-date":w,k=e.claimedItems,x=void 0===k?[]:k,A=Object(o.a)(c,"claims"),n.prev=3,A.loading(),n.next=7,l.a.getAllClaims({offset:y,limit:v,sortBy:E});case 7:if(n.t0=n.sent,n.t0){n.next=10;break}n.t0=[];case 10:if((S=n.t0).length>0){T=j(S);try{for(I=function(){var t,e=P.value;e.status="Ready",e.updatedAt&&(e.updatedAt=new Date(e.updatedAt).toUTCString(),e.updatedAt=e.updatedAt.slice(0,16),e.timestamp=e.updatedAt),e.type="deposit",(null===(t=e.Cashbacks)||void 0===t?void 0:t.length)>0&&e.Cashbacks.forEach((function(t){t.updatedAt&&(t.updatedAt=new Date(t.updatedAt).toUTCString(),t.updatedAt=t.updatedAt.slice(0,16),t=h({timestamp:t.updatedAt},t))}));var r=x.find((function(t){return t.blockchainClaimId===e.blockchainClaimId}));r&&(e.status="Claimed",e.isConfirmed=!0,e.confirmationTxHash=r.confirmationTxHash)},T.s();!(P=T.n()).done;)I()}catch(t){T.e(t)}finally{T.f()}}if(O.C&&(S=S.filter((function(t){var e;return!(null!==(e=t.blockchainClaimId)&&void 0!==e&&e.includes("0x1000000000000000000000000000000000000000000000000"))}))),S=S.sort((function(a,b){return a.updatedAt>b.updatedAt})),D=r.state.cashback.lastPendingClaim.data,!(R=S.find((function(t){if(null==t.confirmationTxHash){if(!D)return t;if(D.blockchainClaimId!=t.blockchainClaimId)return t}})))){n.next=22;break}return n.next=19,f("getClaimInfo",R.id);case 19:A.success(S),n.next=25;break;case 22:Object(o.a)(c,"lastPendingClaim").success(null),Object(o.a)(c,"claimInfo").success(null),A.success(S);case 25:n.next=33;break;case 27:throw n.prev=27,n.t1=n.catch(3),console.error(n.t1),A.error(Object(o.d)(n.t1)),Object(d.d)({title:n.t1}),n.t1;case 33:case"end":return n.stop()}}),n,null,[[3,27]])})))()},getClaimInfo:function(t,e){return Object(c.a)(regeneratorRuntime.mark((function r(){var n,c,f,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,c=Object(o.a)(n,"claimInfo"),f=Object(o.a)(n,"lastPendingClaim"),r.prev=3,c.loading(),f.loading(),r.next=8,l.a.getClaimInfo(e);case 8:if(r.t0=r.sent,r.t0){r.next=11;break}r.t0={};case 11:m=r.t0,c.success(m),f.success(m),r.next=22;break;case 16:throw r.prev=16,r.t1=r.catch(3),console.error(r.t1),c.error(Object(o.d)(r.t1)),Object(d.d)({title:r.t1}),r.t1;case 22:case"end":return r.stop()}}),r,null,[[3,16]])})))()},createClaim:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,n=Object(o.a)(r,"claim"),e.prev=2,n.loading(),e.next=6,l.a.createClaim();case 6:if(e.t0=e.sent,e.t0){e.next=9;break}e.t0={};case 9:return c=e.t0,n.success(c),e.abrupt("return",c);case 14:throw e.prev=14,e.t1=e.catch(2),f=Object(o.d)(e.t1),console.error(f),n.error(f),Object(d.d)({title:f}),f;case 21:case"end":return e.stop()}}),e,null,[[2,14]])})))()},callClaim:function(t,e){return Object(c.a)(regeneratorRuntime.mark((function r(){var n,c,l,O,y,h,j,C,v,w,E,k,x,A,S,T;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,c=t.rootGetters,l=t.store,O=t.dispatch,y=e.claim,h=e.sendParams,j=e.layer,C=e.callbackSuccess,v=void 0===C?null:C,w=e.callbackError,E=void 0===w?null:w,k=Object(o.a)(n,"callClaim"),r.prev=3,x=Object(f.b)(c),r.next=7,Object(m.m)();case 7:return r.next=9,Object(f.l)(2,x,(function(t){return Object(f.k)(l,t)}));case 9:return r.next=11,O("loadContractByLayer",{contractName:"Cashback",layer:"current"});case 11:if(A=r.sent){r.next=14;break}throw new Error("Error loading contract");case 14:return S=[y.v,y.r,y.s,y.signer,y.blockchainClaimId||y.claimId,y.tokenAddress||y.token,y.to,y.amount],h.from=x,r.next=18,Object(m.d)(A,"claim",S,h,(function(t){return Object(f.a)(t,"success",j,v)}),(function(t){return Object(f.a)(t,"error",j,E)}),E);case 18:T=r.sent,k.success(T),Object(f.a)(T,"pending",2),r.next=28;break;case 23:r.prev=23,r.t0=r.catch(3),k.error(Object(o.d)(r.t0)),console.error(r.t0),Object(d.d)({title:r.t0});case 28:case"end":return r.stop()}}),r,null,[[3,23]])})))()}}},2217:function(t,e,r){"use strict";r.r(e),r.d(e,"mutations",(function(){return y})),r.d(e,"getters",(function(){return h})),r.d(e,"state",(function(){return j})),r.d(e,"actions",(function(){return x}));r(12);var n=r(0),c=r(1),o=r(84),l=r(36),d=r(16),f=r(13),m=r(149),O=function(t){if(t.getters["whitelist/isSuccess"]("whitelisted")){for(var e=t.getters["whitelist/get"]("whitelisted",[]),i=0;i<e.length;i++)if(("catalystminter"===e[i].productType||"mintAsset"===e[i].productType)&&e[i].authorized)return t.dispatch("catalystminter/refreshContract");return t.dispatch("catalystminter/resetContract")}};Object(m.b)(m.c.store.init.client,(function(t){t.watch((function(t){return t.whitelist.whitelisted}),(function(){return O(t)})),t.watch((function(t){return t.user.chainId}),(function(){return O(t)}))}));var y=c.c,h=c.b,j=function(){return{catalystminterAddress:{data:null,status:"success"},mint:{data:null,status:"success"}}};function C(t,e,r){return v.apply(this,arguments)}function v(){return(v=Object(n.a)(regeneratorRuntime.mark((function t(e,r,n){var c,o,d,f,m,O,y,h,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Array.isArray(e)||(e=[e]),Array.isArray(r)||(r=[r]),t.next=4,l.a.mintCatalystMinter(e,r,n);case 4:if(c=t.sent,o=c.from,d=c.packId,f=c.metadataHash,m=c.gemsQuantities,O=c.catalystsQuantities,y=c.assets,h=c.to,data=c.data,1!==e.length){t.next=10;break}return t.abrupt("return",{method:"mint",params:[o,d,f,y[0].catalystId,y[0].gemIds,y[0].quantity,h,data]});case 10:return t.abrupt("return",{method:"mintMultiple",params:[o,d,f,m,O,y,h,data]});case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t,e){return l.a.mintInfoExtend(t,e)}function E(t,e){window.$nuxt.$gtmEvent({event:"mintAssetsConfirmed",assetIds:t}),Object(f.f)("success",e)}function k(t,e){window.$nuxt.$gtmEvent({event:"mintAssetsError",assetIds:t}),Object(f.f)("error",e)}var x={refreshContract:Object(o.b)("catalystminter"),resetContract:Object(o.d)("catalystminter"),mint:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,l,m,O,y,h,j,v,x,A,S,T,P;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=t.commit,o=t.rootGetters,l=t.dispatch,m=e.assetIds,O=e.supplies,(y=Object(c.a)(n,"mint")).loading(0),r.prev=4,r.next=7;break;case 7:return r.next=9,l("refreshContract");case 9:if(h=r.sent){r.next=12;break}throw new Error("Contract not initialized");case 12:if(j=o["user/getUser"]){r.next=15;break}throw new Error("Not authenticated");case 15:if(v=o["user/getWallet"]){r.next=18;break}throw new Error("User has no wallet");case 18:return r.next=20,Object(d.m)();case 20:return r.next=22,C(m,O,j.id);case 22:return x=r.sent,A=x.method,S=x.params,y.loading({method:A,params:S}),r.next=28,Object(d.d)(h,A,S,{from:v},(function(t){return E(m,t)}),(function(t){return k(m,t)}));case 28:return T=r.sent,r.next=31,w(m,j.id);case 31:Object(f.f)("pending",T),y.success(T),r.next=41;break;case 35:throw r.prev=35,r.t0=r.catch(4),P=Object(c.d)(r.t0),y.error(P),I=P,Object(f.d)({title:I}),r.t0;case 41:case"end":return r.stop()}var I}),r,null,[[4,35]])})))()}}},2218:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return l})),r.d(e,"mutations",(function(){return d})),r.d(e,"getters",(function(){return f})),r.d(e,"actions",(function(){return m}));var n=r(1),c=r(342),o=r(5),l=function(){return{addCategory:{data:null,status:"success"},updateCategory:{data:null,status:"success"},deleteCategory:{data:null,status:"success"},categories:{data:[],status:"success"}}},d=n.c,f=n.b,m={addCategory:Object(o.a)({prop:"addCategory",func:c.a.addCategory,toast:{success:"Category created",error:"Category error"}}),updateCategory:Object(o.a)({prop:"updateCategory",func:c.a.updateCategory,toast:{success:"Category updated",error:"Category error"}}),deleteCategory:Object(o.a)({prop:"deleteCategory",func:c.a.deleteCategory,toast:{success:"Category deleted",error:"Category error"}}),getAllCategories:Object(o.a)({prop:"categories",func:c.a.getAllCategories})}},2219:function(t,e,r){"use strict";r.r(e),r.d(e,"mutations",(function(){return m})),r.d(e,"state",(function(){return O})),r.d(e,"actions",(function(){return y})),r.d(e,"getters",(function(){return h}));r(32),r(24),r(22),r(15),r(25);var n=r(10),c=(r(46),r(50),r(1)),o=r(5),l=r(1349);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=c.c,O=function(){return{chains:{data:[],status:"loading"}}},y={getChains:Object(o.a)({prop:"chains",func:l.a.getChains})},h=f(f({},c.b),{},{getMaticChains:function(t,e){return e.get("chains",[]).filter((function(t){return e=t.chain,["matic"].includes(null==e?void 0:e.toLowerCase());var e}))},getEthereumChains:function(t,e){return e.get("chains",[]).filter((function(t){return e=t.chain,["eth","ethereum"].includes(null==e?void 0:e.toLowerCase());var e}))}})},2220:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return y})),r.d(e,"mutations",(function(){return h})),r.d(e,"getters",(function(){return j})),r.d(e,"actions",(function(){return v}));r(32),r(24),r(22),r(15),r(25),r(12);var n=r(0),c=r(10),o=r(1),l=r(177),d=r(5),f=r(36);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=function(){return{addCollection:{data:null,status:"success"},updateCollection:{data:null,status:"success"},deleteCollection:{data:null,status:"success"},collections:{data:[],status:"success"},collection:{data:null,status:"success"},searchAssets:{data:{},status:"success"}}},h=o.c,j=O(O({},o.b),{},{getBannerURL:function(){return function(t){return l.a.getBanner(t)}},getLogoURL:function(){return function(t){return l.a.getLogo(t)}}});function C(){return(C=Object(n.a)(regeneratorRuntime.mark((function t(e,r,n,c){var l,d,f,m,y,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=e.commit,d=Object(o.a)(l,r),t.prev=2,f=c.limit||4,m=c.page||0,y=m*f,t.next=8,n(O(O({},c),{},{limit:f,offset:y}));case 8:return h=t.sent,d.success(O(O({},h.data),{},{page:m})),t.abrupt("return",O(O({},h.data),{},{page:m}));case 13:t.prev=13,t.t0=t.catch(2),d.error(Object(o.d)(t.t0));case 16:case"end":return t.stop()}}),t,null,[[2,13]])})))).apply(this,arguments)}var v={setProperty:o.e,search:function(t,e){return function(t,e,r,n){return C.apply(this,arguments)}(t,"searchAssets",f.a.searchAssets,e)},getCollections:Object(d.a)({prop:"shopCollections",func:l.a.getCollections}),getCollection:Object(d.a)({prop:"collection",func:l.a.getCollection}),addCollection:Object(d.a)({prop:"addCollection",func:l.a.addCollection,toast:{success:"Collection created",error:"Collection error"}}),updateCollection:Object(d.a)({prop:"updateCollection",func:l.a.updateCollection,toast:{success:"Collection updated",error:"Collection error"}}),deleteCollection:Object(d.a)({prop:"deleteCollection",func:l.a.deleteCollection,toast:{success:"Collection deleted",error:"Collection error"}}),getAllCollections:Object(d.a)({prop:"collections",func:l.a.getAllCollections})}},2221:function(t,e,r){"use strict";r.r(e),r.d(e,"mutations",(function(){return y})),r.d(e,"getters",(function(){return h})),r.d(e,"state",(function(){return j})),r.d(e,"actions",(function(){return x}));r(12);var n=r(0),c=r(1),o=r(84),l=r(36),d=r(16),f=r(13),m=r(149),O=function(t){if(t.getters["whitelist/isSuccess"]("whitelisted")){for(var e=t.getters["whitelist/get"]("whitelisted",[]),i=0;i<e.length;i++)if(("commonminter"===e[i].productType||"mintAsset"===e[i].productType)&&e[i].authorized)return t.dispatch("commonminter/refreshContract");return t.dispatch("commonminter/resetContract")}};Object(m.b)(m.c.store.init.client,(function(t){t.watch((function(t){return t.whitelist.whitelisted}),(function(){return O(t)})),t.watch((function(t){return t.user.chainId}),(function(){return O(t)}))}));var y=c.c,h=c.b,j=function(){return{commonminterAddress:{data:null,status:"success"},mint:{data:null,status:"success"}}};function C(t,e,r){return v.apply(this,arguments)}function v(){return(v=Object(n.a)(regeneratorRuntime.mark((function t(e,r,n){var c,o,d,f,m,O,data,y;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Array.isArray(e)||(e=[e]),Array.isArray(r)||(r=[r]),t.next=4,l.a.mintCommonMinter(e,r,n);case 4:if(c=t.sent,o=c.creator,d=c.packId,f=c.hash,m=c.supplies,O=c.owner,data=c.data,y=c.feePerCopy,1!==e.length){t.next=10;break}return t.abrupt("return",{method:"mintFor",params:[o,d,f,m[0],O,data,y]});case 10:return t.abrupt("return",{method:"mintMultipleFor",params:[o,d,f,m,O,data,y]});case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t,e){return l.a.mintInfoExtend(t,e)}function E(t,e){window.$nuxt.$gtmEvent({event:"mintAssetsConfirmed",assetIds:t}),Object(f.f)("success",e)}function k(t,e){window.$nuxt.$gtmEvent({event:"mintAssetsError",assetIds:t}),Object(f.f)("error",e)}var x={refreshContract:Object(o.b)("commonminter"),resetContract:Object(o.d)("commonminter"),mint:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,l,m,O,y,h,j,v,x,A,S,T,P;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=t.commit,o=t.rootGetters,l=t.dispatch,m=e.assetIds,O=e.supplies,(y=Object(c.a)(n,"mint")).loading(0),r.prev=4,r.next=7;break;case 7:return r.next=9,l("refreshContract");case 9:if(h=r.sent){r.next=12;break}throw new Error("Contract not initialized");case 12:if(j=o["user/getUser"]){r.next=15;break}throw new Error("Not authenticated");case 15:if(v=o["user/getWallet"]){r.next=18;break}throw new Error("User has no wallet");case 18:return r.next=20,Object(d.m)();case 20:return r.next=22,C(m,O,j.id);case 22:return x=r.sent,A=x.method,S=x.params,y.loading({method:A,params:S}),r.next=28,Object(d.d)(h,A,S,{from:v},(function(t){return E(m,t)}),(function(t){return k(m,t)}));case 28:return T=r.sent,r.next=31,w(m,j.id);case 31:Object(f.f)("pending",T),y.success(T),r.next=41;break;case 35:throw r.prev=35,r.t0=r.catch(4),P=Object(c.d)(r.t0),y.error(P),I=P,Object(f.d)({title:I}),r.t0;case 41:case"end":return r.stop()}var I}),r,null,[[4,35]])})))()}}},2222:function(t,e,r){"use strict";r.r(e),r.d(e,"mutations",(function(){return m})),r.d(e,"state",(function(){return O})),r.d(e,"getters",(function(){return y})),r.d(e,"actions",(function(){return h}));r(32),r(24),r(22),r(15),r(25);var n=r(10),c=r(1),o=r(5),l=r(641);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=f(f({},c.c),{},{SET_SELECTED_WORKSPACE:function(t,e){t.selectedWorkspace.data=e},SET_SELECTED_COMMUNITY:function(t,e){t.selectedCommunity.data=e}}),O=function(){return{selectedWorkspace:{data:null,status:"success"},selectedCommunity:{data:null,status:"success"},communityMembers:{data:null,status:"success"},communitiesByUserId:{data:null,status:"success"},communityMemberByUserId:{data:null,status:"success"}}},y=f({},c.b),h={setSelectedWorkspace:function(t,e){t.commit("SET_SELECTED_WORKSPACE",e)},setSelectedCommunity:function(t,e){t.commit("SET_SELECTED_COMMUNITY",e)},getCommunityMembers:Object(o.a)({prop:"communityMembers",func:l.a.getCommunityMembers}),getCommunitiesByUserId:Object(o.a)({prop:"communitiesByUserId",func:l.a.getCommunitiesByUserId}),getCommunityMemberByUserId:Object(o.a)({prop:"communityMemberByUserId",func:l.a.getCommunityMemberByUserId})}},2223:function(t,e,r){"use strict";r.r(e),r.d(e,"mutations",(function(){return m})),r.d(e,"getters",(function(){return O})),r.d(e,"state",(function(){return y})),r.d(e,"actions",(function(){return h}));r(32),r(24),r(22),r(15),r(25);var n=r(10),c=r(1),o=r(5),l=r(164);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=f(f({},c.c),{},{SET_USER_TOKEN:function(t,e){t.userToken.status=e},SET_CONTESTS_LIST:function(t,e){t.contestsList.data=e},SET_DAILY_CHALLENGES:function(t,e){t.dailyChallenges.data=e}}),O=c.b,y=function(){return{userToken:{data:null,status:"loading"},contestsList:{data:null,status:"loading"},dailyChallenges:{data:null,status:"loading"},banner:{data:null,status:"loading"},mainBanner:{data:null,status:"loading"},eventsBanner:{data:null,status:"loading"},eventsByContest:{data:null,status:"loading"}}},h={connectUser:Object(o.a)({prop:"userToken",func:l.a.ConnectIFrame}),setUserToken:function(t,e){t.commit("SET_USER_TOKEN",e)},getContestsList:Object(o.a)({prop:"contestsList",func:l.a.getContestsList}),getBanner:Object(o.a)({prop:"banner",func:l.a.getBanner}),getMainBanner:Object(o.a)({prop:"mainBanner",func:l.a.getMainBanner}),getEventsBanner:Object(o.a)({prop:"eventsBanner",func:l.a.getEventsBanner}),getEventsByContest:Object(o.a)({prop:"eventsByContest",func:l.a.getEventsByContest}),getDailyChallenges:Object(o.a)({prop:"dailyChallenges",func:l.a.getDailyChallenges}),create:Object(o.a)({prop:"create",func:l.a.create,toast:{success:"Contest created",error:"Contest error"}}),createEvent:Object(o.a)({prop:"createEvent",func:l.a.createEvent,toast:{success:"Event created",error:"Event error"}}),update:Object(o.a)({prop:"update",func:l.a.update,toast:{success:"Contest updated",error:"Contest error"}}),updateEvent:Object(o.a)({prop:"updateEvent",func:l.a.updateEvent,toast:{success:"Event updated",error:"Event error"}}),delete:Object(o.a)({prop:"delete",func:l.a.delete,toast:{success:"Contest deleted",error:"Contest error"}}),deleteEvent:Object(o.a)({prop:"deleteEvent",func:l.a.deleteEvent,toast:{success:"Event deleted",error:"Event error"}}),setContestsList:function(t,e){t.commit("SET_CONTESTS_LIST",e)},setDailyChallenges:function(t,e){t.commit("SET_DAILY_CHALLENGES",e)}}},2607:function(t,e,r){"use strict";r.r(e);var n=r(10),c=(r(49),r(18)),o=r(414),l=Object(n.a)({},o.actionTypes.CONTRACTS_SET_CONTRACT,(function(t,e){var r=e.name,n=e.contract;Object(c.a)(t.commit,r).success(n)}));e.default=l},2608:function(t,e,r){"use strict";r.r(e);e.default={byName:function(t){return function(e){return t[e]}}}},2609:function(t,e,r){"use strict";r.r(e);e.default={registerState:function(t,e){t[e.state]=e.data}}},2610:function(t,e,r){"use strict";r.r(e);var n=r(10),c=r(65),o=r(27);e.default=function(){var t;return t={},Object(n.a)(t,c.i,null),Object(n.a)(t,o.e,null),t}},414:function(t,e,r){"use strict";r.r(e),r.d(e,"mutationTypes",(function(){return c})),r.d(e,"actionTypes",(function(){return o}));var n=r(111),c={CONTRACTS_SET_CONTRACT:"".concat("contracts/","setContract")},o=Object(n.d)("contracts/",c)}}]);