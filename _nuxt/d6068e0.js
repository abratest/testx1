(window.webpackJsonp=window.webpackJsonp||[]).push([[476],{2578:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return h})),n.d(e,"mutations",(function(){return A})),n.d(e,"actions",(function(){return k}));n(46),n(50),n(12);var r=n(0),o=n(18),l=n(78),d=n(16),c=n(13),m=n(42),x=n.n(m),h=function(){return{sandsaleAddress:null,purchaseWithETH:null,sandValue:.007,isTransactionSuccess:!1,isTransactionError:!1,isTransactionLowGas:!1,isTransactionReject:!1,signature:{},contractName:"AvatarsSnoopDogg",txHash:null}},A={registerState:function(t,e){t[e.state]=e.data}},k={updateTransactionSuccess:function(t,e){var n=t.commit;Object(o.a)(n,"isTransactionSuccess").success(e)},updateTransactionError:function(t,e){var n=t.commit;Object(o.a)(n,"isTransactionError").success(e)},updateTransactionLowGas:function(t,e){var n=t.commit;Object(o.a)(n,"isTransactionLowGas").success(e)},updateTransactionReject:function(t,e){var n=t.commit;Object(o.a)(n,"isTransactionReject").success(e)},updateSignature:function(t,e){var n=t.commit;Object(o.a)(n,"signature").success(e)},purchaseWithETH:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,l,m,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.commit,l=t.dispatch,m=t.state,h=e.amount,l("updateTransactionReject",!1),l("updateTransactionSuccess",!1),l("updateTransactionError",!1),l("updateTransactionLowGas",!1),n.next=8;break;case 8:return n.prev=8,n.next=11,Object(d.m)();case 11:return n.next=13,l("executeMintTokens",{contractName:m.contractName,amount:h,signatureId:new x.a(m.signature.id,"hex"),signatureHash:m.signature.hash,cbSuccess:function(t){l("updateTransactionSuccess",!0),Object(c.f)("success",t)},cbFailure:function(t){l("updateTransactionError",!0),Object(c.f)("error",t)},cbError:function(t){t&&t.message&&t.message.includes("insufficient funds for gas")?l("updateTransactionLowGas",!0):t&&t.message&&(t.message.includes("User denied transaction signature")||t.message.includes("The user has declined this request"))||t&&t.status&&"ABORTED"==t.status?l("updateTransactionReject",!0):l("updateTransactionError",!0)}});case 13:n.next=19;break;case 15:throw n.prev=15,n.t0=n.catch(8),Object(o.a)(r,"purchaseWithETH").error(n.t0?n.t0.response?n.t0.response.data:n.t0:"Unknown error"),n.t0;case 19:case"end":return n.stop()}}),n,null,[[8,15]])})))()},executeMintTokens:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,m,h,A,k,f,S,D,y,N,v,T,O,E,P,w,L,data,Q,j,M,R,G,I,V;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(m=t.commit,h=t.dispatch,A=t.rootGetters,k=e.contractName,f=e.amount,S=e.signatureId,D=e.signatureHash,y=e.cbSuccess,N=e.cbFailure,v=e.cbError,(T=A["user/getWalletAccountless"])||(T=A["user/getWalletUser"]),T){n.next=6;break}throw new Error("User has no wallet");case 6:return n.next=8,l.a.get("Sand");case 8:return O=n.sent,E=new window.web3.eth.Contract(O.abi,O.address),n.next=12,l.a.get(k);case 12:return P=n.sent,w=new window.web3.eth.Contract(P.abi,P.address),n.next=16,w.methods.checkMintAllowed(T,f).call();case 16:if(n.sent){n.next=19;break}throw new Error("User requests too many avatars");case 19:return n.next=21,w.methods.price(f).call();case 21:return L=n.sent,data=w.methods.mint(T,f,S,D).encodeABI(),Q="approveAndCall",j=[w.options.address,L,data],M=(r=E.methods)[Q].apply(r,j),n.next=28,Object(d.f)();case 28:return R=n.sent,n.next=31,Object(d.b)(E,M,T);case 31:return G=n.sent,I=new x.a(R).mul(new x.a(G)),n.next=35,h("eth/checkBalance",{amount:I},{root:!0});case 35:return n.prev=35,n.next=38,Object(d.d)(E,Q,j,{from:T,value:0,gasPrice:R,gasLimit:G},y,N,v);case 38:V=n.sent,Object(c.f)("pending",V),Object(o.a)(m,"txHash").success(V),n.next=47;break;case 44:n.prev=44,n.t0=n.catch(35),h("updateTransactionError",!0);case 47:case"end":return n.stop()}}),n,null,[[35,44]])})))()}}},2579:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return d})),n.d(e,"mutations",(function(){return c})),n.d(e,"getters",(function(){return m})),n.d(e,"actions",(function(){return x}));var r=n(1),o=n(434),l=n(5),d=function(){return{list:{data:null,status:"success"},create:{data:null,status:"success"},bulkCreate:{data:null,status:"success"},update:{data:null,status:"success"},delete:{data:null,status:"success"}}},c=r.c,m=r.b,x={list:Object(l.a)({prop:"list",func:o.a.list}),bulkCreate:Object(l.a)({prop:"bulkCreate",func:o.a.bulkCreate}),create:Object(l.a)({prop:"create",func:o.a.createTicket}),update:Object(l.a)({prop:"update",func:o.a.updateTicket}),delete:Object(l.a)({prop:"delete",func:o.a.deleteTicket})}},2580:function(t,e,n){"use strict";n.r(e),n.d(e,"getters",(function(){return r})),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return l})),n.d(e,"actions",(function(){return d}));var r=n(1).b,o=function(){return{authRedirectURL:"",redirectTo:""}},l={SET_AVATAR_PAGE_URL:function(t,e){t.authRedirectURL=e},SET_REDIRECT_TO:function(t,e){t.redirectTo=e}},d={setAuthRedirectURL:function(t,e){t.commit("SET_AVATAR_PAGE_URL",e)},setAuthRedirectTo:function(t,e){t.commit("SET_REDIRECT_TO",e)}}},2581:function(t,e,n){"use strict";n.r(e),n.d(e,"mutations",(function(){return y})),n.d(e,"getters",(function(){return N})),n.d(e,"state",(function(){return v})),n.d(e,"actions",(function(){return T}));n(32),n(24),n(25),n(22),n(15),n(58);var r=n(29),o=(n(12),n(0)),l=n(10),d=n(794),c=n(1),m=n(586),x=n(1357),h=n(9),A=n(5),k=n(40),f=n.n(k);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=c.c,N=D(D({},c.b),{},{getLink:function(t,e,n){return function(t){var e=n.user.currentUser;return e?"".concat(h.k,"/").concat(t,"/login/?r=").concat(Object(d.a)(e.id)):null}},getUUID:function(){return function(t){return t?Object(d.b)(t):null}},getCommission:function(t){return function(e){var n=f.a.utils.toBN(0);return t.earnCommissions.data.forEach((function(t){return t.currencyType===e?n=n.add(f.a.utils.toBN(t.commission)):void 0})),parseFloat(f.a.utils.fromWei(n)).toFixed(4)}}}),v=function(){return{refereesAmount:{data:0,status:"loading"},rate:{data:10,status:"loading"},refereeDuration:{data:30,status:"loading"},earnCommissions:{data:[],status:"loading"},refereesBySeason:{data:[],status:"loading"}}},T={setReferralInfo:function(t,e){return Object(o.a)(regeneratorRuntime.mark((function n(){var o,l,d,h,A,k,f,S,y,N,v;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.commit,l=t.rootState,n.prev=1,n.next=4,Promise.all([m.a.amount(),x.a.get({id:l.user.currentUser.id})]);case 4:if(d=n.sent,h=Object(r.a)(d,2),A=h[0],k=h[1],null==e||!e.seasonId){n.next=14;break}return n.next=11,m.a.refereesBySeason(e);case 11:n.t0=n.sent,n.next=15;break;case 14:n.t0=null;case 15:f=n.t0,S=k.data,y=S.commission,N=S.earnings,v=null!=f&&f.length?f.map((function(t){return D(D({},t),{},{currencyType:"TICKETS"})})):[],Object(c.a)(o,"refereesAmount").success(A.data.amount),Object(c.a)(o,"rate").success(y.rate),Object(c.a)(o,"refereeDuration").success(y.refereeDuration),Object(c.a)(o,"earnCommissions").success(N),Object(c.a)(o,"refereesBySeason").success(v),n.next=29;break;case 25:throw n.prev=25,n.t1=n.catch(1),console.error(n.t1),n.t1;case 29:case"end":return n.stop()}}),n,null,[[1,25]])})))()},getRefereesBySeason:Object(A.a)({prop:"refereesBySeason",func:m.a.refereesBySeason})}},2587:function(t,e,n){"use strict";n.r(e),n.d(e,"mutations",(function(){return d})),n.d(e,"getters",(function(){return c})),n.d(e,"state",(function(){return m})),n.d(e,"actions",(function(){return x}));var r=n(1),o=n(5),l=n(1358),d=r.c,c=r.b,m=function(){return{reward:{data:null,status:"success"}}},x={createReward:Object(o.a)({prop:"createReward",func:l.a.createReward})}},2588:function(t,e,n){"use strict";n.r(e),n.d(e,"getters",(function(){return c})),n.d(e,"state",(function(){return m}));n(32),n(24),n(22),n(15),n(25);var r=n(10),o=n(1);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c=d(d({},o.b),{},{getMilestones:function(){return(void 0)._state.milestones}}),m=function(){return{milestones:{EN:[{date:"2011",month:"",title:"Pixowl is founded",text:""},{date:"2012",month:"MAY",title:"The Sandbox franchise launches on IOS",text:"The Sandbox is awarded Best Game of the year by Apple"},{date:"2013",month:"FEB",title:"The Sandbox is released for Android (1st title)",text:""},{date:"2014",month:"",title:"The Sandbox surpasses 10M downloads",text:"Steam Version of The Sandbox released. Partnership with Skybound - The Invincible. The Sandbox's newEDU version for STEM education"},{date:"2015",month:"",title:"The Sandbox Evolution is announced at GDC conference (2nd title)",text:"The Sandbox surpasses 16M installs"},{date:"2016",month:"",title:"The Sandbox Evolution released on iOS, Android & Steam",text:"Partnership with Sony - Ghostbusters"},{date:"2017",month:"",title:"The Sandbox Evolution receives 2 big partnerships",text:"Bandai Namco brings PAC-MAN to the game. DreamWorks brings Shrek to the game. The Sandbox Evolution announced free download in Steam"},{date:"2018",month:"APR",title:"The Sandbox surpasses 40M downloads and 70M player creations",text:"The Sandbox Surpasses 750K followers on Facebook"},{date:"2018",month:"MAY",title:"The Sandbox 3D on the Blockchain project is announced at Pocket Gamer Connect conference",text:""},{date:"2019",month:"OCT",title:"The Sandbox's Dashboard public release",text:"Public version of the dashboard is released. Users are able to begin registering their accounts and browse amazing content"},{date:"2019",month:"Q4",title:"LAND Presale + VoxEdit beta release",text:"Players will be able to participate in exclusive LAND presales. They will also be able to export ASSETS to the marketplace and register them on the blockchain"},{date:"2020",month:"Q1",items:[{title:"VoxEdit",text:"Launch of VoxEdit Beta Release"},{title:"LAND Pre Sales",text:"Launch Rounds 2 and Round 3, selling 5% and 10% of the Map in hours"}]},{date:"2020",month:"Q2",items:[{title:"Game Maker Closed Alpha",text:"Private release of the Game Maker Alpha to few early testers"},{title:"LAND MoonSale",text:"6 rounds of LAND sales over 5 weeks"}]},{date:"2020",month:"Q3",items:[{title:"Game Maker Public Beta",text:"Public Release of the Game Maker Beta"},{title:"LAND Presales",text:"Round 4 Opening"},{title:"Marketplace",text:"SAND purchases, P2P sales, ASSET minting with Gems & Catalysts"}]},{date:"2020",month:"Q4",items:[{title:"LAND Public sale",text:"Regular LAND sales and Support for Game Maker"},{title:"VoxEdit ",text:"Official Release 1.0"}]},{date:"2021",month:"Q1 & Q2",items:[{title:"Partnerships",text:"New IPs and Premium NFTs to be announced"},{title:"Game Maker",text:"Official Release 1.0 and major updates with more gaming packages and Behaviors"},{title:"Game",text:"Official Release 1.0 and major updates"},{title:"LAND Public sale",text:"Regular LAND sales will continue"},{title:"Events",text:"Additional Seasons with big rewards to earn"},{title:"SAND",text:"Staking mechanisms for Yield generation and other Rewards"}]},{date:"2021",month:"Q3",items:[{title:"Launch of the Multiplayer Season public alpha",text:""}]},{date:"2021",month:"Q4",items:[{title:"Launch of the first NFT Avatars collections, including IP-based ones ",text:""},{title:"Introduce DeFi Staking mechanisms on Layer 2 ",text:""},{title:"First play-to-earn seasons and Explorer Season are live ",text:""},{title:"Launch of Layer 2 dual-chain solution on Matic and full opening of the marketplace for UGC ",text:""}]},{date:"2022",month:"Q1",items:[{title:"Progressive opening of the Metaverse to LAND owners who have built high-quality experiences ",text:""}]},{date:"2022",month:"Q2",items:[{title:"Launch of the DAO with staking and voting mechanisms for SAND, LAND and AVATAR holders ",text:""},{title:"DAO",text:"The Sandbox DAO will allow to participate in major decisions on the Game Platform"}]},{date:"2022",month:"Q3",items:[{title:"Launch of the first virtual concerts (Deadmau5, Richie Hawtin) and The Walking Dead game ",text:""}]},{date:"2022",month:"Q4",items:[{title:"Mobile version launch ",text:""}]},{date:"2022",month:"TBD",items:[{title:"Partnerships",text:"New IPs and Premium NFTs to be announced"},{title:"Games Platform",text:"Over 1,000 Games available"},{title:"Multi-platforms",text:"Availability of Game on consoles"},{title:"LAND Public sale",text:"Regular LAND sales will continue"},{title:"Game Maker",text:"Co-Building Mode - creating games with Friends, Custom Scripting with programming 3rd layer and major updates with more gaming packages and Behaviors"},{title:"Events",text:"Additional Seasons with big rewards to earn"},{title:"VoxEdit",text:"Major updates with more behaviour to make creation of voxel assets & NFTs easier"}]},{date:"2023",month:"",items:[{title:"Games Platform",text:"Over 5,000 Games available"},{title:"Partnerships",text:"New IPs and Premium NFTs to be announced"},{title:"Game Maker",text:"Major updates with more gaming packages and behaviors added"},{title:"Events",text:"Regular LAND sales will continue"},{title:"VoxEdit",text:"Continued support in giving creators the best voxel editor available"}]}],JP:[{date:"2011",title:"Pixowl設立",text:"Pixowl設立",month:""},{date:"2012",title:"Sandboxフランチャイズ、IOSでリリース",text:"SandboxがAppleの「ベスト・ゲーム・オブ・ザ・イヤー」を受賞",month:"5月"},{date:"2013",title:"Sandbox、アンドロイドでリリース(最初のタイトル)",text:"",month:"2月"},{date:"2014",title:"Sandboxが1,000万ダウンロード突破",text:"The Sandboxのストリーミングバージョンがリリース。SkyboundのThe invincibleと提携。科学/技術/工学/数学教育用のThe Sandboxがリリース。",month:""},{date:"2015",title:"Sandbox Evolution、GDCカンファレンスで発表(2番目のタイトル)",text:"Sandbox Evolution、1,600万インストール突破",month:""},{date:"2016",title:"Sandbox Evolution、iOS、アンドロイド、ストリーム版リリース",text:"Sonyと提携 - ゴーストバスターズ",month:""},{date:"2017",title:"Sandbox Evolution、2つの大きな提携",text:"バンダイナムコが、ゲームにパックマンを導入。DreamWorksがゲームにシュレックを導入。Sandbox EvolutionはSteamにて無料ダウンロードを発表",month:""},{date:"2018",title:"Sandboxが4,000万ダウンロードを達成し、プレーヤーによるクリエーションは7,000万を突破",text:"Sandbox、Facebookのフォロワーが75万人突破",month:"4月"},{date:"2018",title:"ポケット・ゲーマー・コネクト・カンファレンスで、ブロックチェーンプロジェクトのSandbox 3Dを発表",text:"",month:"5月"},{date:"2019",title:"Sandboxのダッシュボードを公開",text:"ダッシュボードの公開版がリリースされ、ユーザーはアカウントの作成や素晴らしいコンテンツを楽しむことが可能に",month:"9月"},{date:"2019",title:"LAND プレセール + VoxEdit ベータをリリース",text:"プレーヤーは限定LANDプレセールに参加が可能。マーケットプレースへのアセットのエクスポート、ブロックチェーン上でのアセット登録が可能に",month:"Q4"},{date:"2020",month:"Q1",items:[{title:"VoxEdit",text:"VoxEditベータリリースのリリース"},{title:"LAND プリセールス",text:"ラウンド2とラウンド3を開始し、マップの5％と10％を数時間で販売します"}]},{date:"2020",month:"Q2",items:[{title:"ゲームメーカークローズドアルファ",text:"少数の初期のテスターへのゲームメーカーアルファのプライベートリリース"},{title:"LAND MoonSale",text:"5週間にわたる6ラウンドの土地販売"}]},{date:"2020",month:"Q3",items:[{title:"ゲームメーカーパブリックベータ",text:"ゲームメーカーベータ版の公開リリース"},{title:"LAND プリセールス",text:"ラウンド4オープニング"},{title:"市場",text:"SAND購入、P2P販売、Gems＆Catalystsを使用したASSETミンティング"}]},{date:"2020",month:"Q4",items:[{title:"LAND 公開販売",text:"定期的な土地販売とゲームメーカーのサポート"},{title:"VoxEdit ",text:"公式リリース1.0"}]},{date:"2021",month:"Q1 & Q2",items:[{title:"パートナーシップ",text:"新しいIPとプレミアムNFTが発表される"},{title:"ゲームメーカー",text:"公式リリース1.0と、より多くのゲームパッケージと動作を備えたメジャーアップデート"},{title:"ゲーム",text:"公式リリース1.0およびメジャーアップデート"},{title:"LAND 公開販売",text:"定期的な土地販売は継続されます"},{title:"イベント",text:"獲得する大きな報酬を持つ追加のシーズン"},{title:"SAND",text:"利回り生成およびその他の報酬のステーキングメカニズム"}]},{date:"2021",month:"Q3",items:[{title:"「マルチプレイヤー・シーズン」のパブリック・アルファを開始。",text:""}]},{date:"2021",month:"Q4",items:[{title:"IPを含む、最初のNFTアバターコレクションの提供開始",text:""},{title:"レイヤー2にDeFi Stakingメカニズムを導入",text:""},{title:"最初のPlay-to-earnシーズンとExplorerシーズンが始動",text:""},{title:"Maticでのレイヤー2デュアルチェーンソリューションの提供開始とUGC向けマーケットプレイスの全面開放",text:""}]},{date:"2022",month:"Q1",items:[{title:"LANDオーナーのメタバースの段階的な開放開始",text:""}]},{date:"2022",month:"Q2",items:[{title:"SAND、LAND、AVATARの所有者のためのステーキングと投票メカニズムを備えたDAOの立ち上げ",text:""},{title:"DAO",text:"Sandbox DAOは、ゲームプラットフォームに関する主要な決定に参加することを許可します"}]},{date:"2022",month:"Q3",items:[{title:"バーチャルコンサート開催（Deadmau5、Richie Hawtin）と「The Walking Dead」ゲームリリース。",text:""}]},{date:"2022",month:"Q4",items:[{title:"モバイル版リリース",text:""}]},{date:"2022",month:"TBD",items:[{title:"パートナーシップ",text:"新しいIPとプレミアムNFTが発表される"},{title:"ゲームプラットフォーム",text:"1,000以上のゲームが利用可能"},{title:"マルチプラットフォーム",text:"コンソールでのゲームの可用性"},{title:"LAND 公開販売",text:"定期的な土地販売は継続されます"},{title:"ゲームメーカー",text:"共同構築モード-友達とのゲームの作成、第3層のプログラミングによるカスタムスクリプト、より多くのゲームパッケージと動作によるメジャーアップデート"},{title:"イベント",text:"獲得する大きな報酬を持つ追加のシーズン"},{title:"VoxEdit",text:"ボクセルアセットとNFTの作成を容易にするためのより多くの動作を備えたメジャーアップデート"}]},{date:"2023",month:"",items:[{title:"ゲームプラットフォーム",text:"5,000以上のゲームが利用可能"},{title:"パートナーシップ",text:"新しいIPとプレミアムNFTが発表される"},{title:"ゲームメーカー",text:"より多くのゲームパッケージと動作が追加されたメジャーアップデート"},{title:"イベント",text:"定期的な土地販売は継続されます"},{title:"VoxEdit",text:"作成者に利用可能な最高のボクセルエディタを提供するための継続的なサポート"}]}],KR:[{date:"2011",title:"Pixowl 설립",text:"Pixowl 설립",month:""},{date:"2012",title:"IOS에서 더 샌드박스 프랜차이즈 출시",text:"더 샌드박스 2012년 최고의 게임으로 애플에 의해 선정",month:"5월"},{date:"2013",title:"안드로이드 버전 샌드박스 게임 출시(최초 타이틀)",text:"",month:"2월"},{date:"2014",title:"1천만 다운로드 수 초과달성",text:"더 샌드박스의 스팀 버전 출시. 스카이바운드 - 더 인빈서블과 파트너십. 더 샌드박스 교육 버전 출시",month:""},{date:"2015",title:"GDC 컨퍼런스에서 더 샌드박스 에볼루션 발표 (2차 타이틀)",text:"더 샌드박스 1천6백만 다운로드 초과달성",month:""},{date:"2016",title:"더 샌드박스 에볼루션 IOS, 안드로이드, 및 스팀에서 출시",text:"소니 - 고스트버스터즈와 파트너십",month:""},{date:"2017",title:"더 샌드박스 에볼루션 2개의 거대 파트너쉽 체결",text:"반다이 남코 PAC-MAN 게임 더 샌드박스에 추가. DreamWorks 슈렉 추가. 스팀에서 더 샌드박스 에볼루션 무료 다운로드 시작",month:""},{date:"2018",title:"더 샌드박스 4천만 다운로드 초과달성 및 7천만 유저 컨텐츠 생성",text:"페이스북 팔로워 750,000명 초과달성",month:"4 월"},{date:"2018",title:"포켓 게이머 컨퍼런스에서 블록체인 기반의 더 샌드박스 3D 버전 발표",text:"",month:"5월"},{date:"2019",title:"더 샌드박스 대시보드 퍼블릭 출시",text:"대시보드 퍼블릭 버전 출시. 유저들은 대시보드를 활용해서 자신의 계정을 생성하고 컨텐츠 탐색",month:"9월"},{date:"2019",title:"LAND 프리세일 및 VoxEdit 베타 버전 출시",text:"유저들 LAND 프리세일에 참여. 자신의 애셋을 마켓플레이스와 블록체인에 등록 가능",month:"4분기"},{date:"2020",month:"Q1",items:[{title:"VoxEdit",text:"VoxEdit 베타 릴리스 출시"},{title:"LAND 사전 판매",text:"라운드 2 및 라운드 3을 시작하여 몇 시간 내에 지도의 5% 및 10%를 판매합니다."}]},{date:"2020",month:"Q2",items:[{title:"게임 메이커 클로즈드 알파",text:"소수의 초기 테스터에게 Game Maker Alpha의 비공개 출시"},{title:"LAND 문세일",text:"5주 동안 6회 LAND 판매"}]},{date:"2020",month:"Q3",items:[{title:"게임 메이커 공개 베타",text:"게임 메이커 베타 공개 출시"},{title:"LAND 사전 판매",text:"4라운드 오프닝"},{title:"시장",text:"SAND 구매, P2P 판매, 보석 및 촉매로 ASSET 주조"}]},{date:"2020",month:"Q4",items:[{title:"LAND 공개 판매",text:"정기적인 LAND 판매 및 Game Maker 지원"},{title:"VoxEdit ",text:"공식 릴리스 1.0"}]},{date:"2021",month:"Q1 & Q2",items:[{title:"파트너십",text:"새로운 IP 및 프리미엄 NFT 발표 예정"},{title:"게임 메이커",text:"공식 릴리스 1.0 및 더 많은 게임 패키지 및 동작이 포함된 주요 업데이트"},{title:"게임",text:"공식 릴리스 1.0 및 주요 업데이트"},{title:"LAND 공개 판매",text:"정규 LAND 판매는 계속됩니다."},{title:"이벤트",text:"큰 보상을 받을 수 있는 추가 시즌"},{title:"SAND",text:"수익 창출 및 기타 보상을 위한 스테이킹 메커니즘"}]},{date:"2021",month:"Q3",items:[{title:"멀티플레이어 시즈 퍼블릭 베타",text:""}]},{date:"2021",month:"Q4",items:[{title:"IP기반을 포함한 첫 아바타 컬렉션 론칭",text:""},{title:"레이어 2의 디파이 스테이킹 메커니즘 소개",text:""},{title:"첫 Play2Earn 시즌 및 익스플로러 시즌 라이브",text:""},{title:"마틱 레이어 2 듀얼 체인 솔루션 론칭 및 마켓플레이스 UGC 오프닝",text:""}]},{date:"2022",month:"Q1",items:[{title:"높은 퀄리티의 경험을 제작한 랜드 오너들에게 단계적 메타버스 공개",text:""}]},{date:"2022",month:"Q2",items:[{title:"스테이킹과 DAO 론칭 및 SAND, LAND, 아바타 홀더들에게 투표 권한 부여",text:""},{title:"DAO",text:"Sandbox DAO는 게임 플랫폼의 주요 결정에 참여할 수 있습니다."}]},{date:"2022",month:"Q3",items:[{title:"첫 버츄얼 콘서트(스눕독, 데드마우스, 리치 호틴) 및 워킹 데드 게임 출시",text:""}]},{date:"2022",month:"Q4",items:[{title:"모바일 버전 론칭",text:""}]},{date:"2022",month:"TBD",items:[{title:"Partnerships",text:"새로운 IP 및 프리미엄 NFT 발표 예정"},{title:"게임 플랫폼",text:"1,000개 이상의 게임 사용 가능"},{title:"다중 플랫폼",text:"콘솔 게임의 가용성"},{title:"LAND 공개 판매",text:"정규 LAND 판매는 계속됩니다."},{title:"게임 메이커",text:"공동 구축 모드 - 친구와 함께 게임 만들기, 프로그래밍 3층을 사용한 사용자 정의 스크립팅 및 더 많은 게임 패키지 및 동작으로 주요 업데이트"},{title:"이벤트",text:"큰 보상을 받을 수 있는 추가 시즌"},{title:"VoxEdit",text:"복셀 자산 및 NFT를 더 쉽게 생성할 수 있도록 더 많은 동작으로 주요 업데이트를 획득할 수 있는 큰 보상을 제공하는 추가 시즌"}]},{date:"2023",month:"",items:[{title:"게임 플랫폼",text:"5,000개 이상의 게임 사용 가능"},{title:"파트너십",text:"새로운 IP 및 프리미엄 NFT 발표 예정"},{title:"게임 메이커",text:"더 많은 게임 패키지 및 동작이 추가된 주요 업데이트"},{title:"이벤트",text:"정규 LAND 판매는 계속됩니다."},{title:"VoxEdit",text:"제작자에게 최고의 복셀 편집기를 제공하기 위한 지속적인 지원"}]}],SC:[{date:"2011",title:"Pixowl成立",text:"Pixowl成立",month:""},{date:"2012",title:"沙箱专营推出IOS上",text:"Sandbox是由苹果公司颁发的年度最佳游戏。",month:"可以"},{date:"2013",title:"沙盒发布的Android（第1题）",text:"",month:"二月"},{date:"2014",title:"沙盒超过10M下载",text:"沙箱的蒸汽版发布。合作伙伴与Skybound  - 无敌。沙盒的newEDU版本STEM教育。",month:""},{date:"2015",title:"沙盒进化在GDC大会上宣布（第2题）",text:"沙盒超过16M安装。",month:""},{date:"2016",title:"在iOS，Android和蒸汽释放的沙盒演进",text:"合作伙伴与索尼 - 捉鬼敢死队。",month:""},{date:"2017",title:"沙盒演进接收2级大的合作伙伴关系",text:"万代南梦宫带来的PAC-MAN的游戏。梦工厂带来史莱克的游戏。沙盒演进宣布，蒸汽免费下载。",month:""},{date:"2018",title:"沙盒超过40M的下载和70M玩家创作",text:"沙盒上的超越Facebook的750K的追随者。",month:"四月"},{date:"2018",title:"在Blockchain项目的沙盒3D在口袋玩家连接发布会上宣布",text:"",month:"可以"},{date:"2019",title:"沙箱的仪表板公开发行",text:"仪表板的公共版本发布。用户可以开始注册自己的账户，浏览精彩内容。",month:"九月"},{date:"2019",title:"LAND预售+ VoxEdit测试版",text:"玩家将能够参加独家预售土地。他们还可以将资产导出到市场和对blockchain注册。",month:"Q4"},{date:"2020",month:"Q1",items:[{title:"VoxEdit",text:"VoxEdit 베타 릴리스 출시"},{title:"LAND 사전 판매",text:"라운드 2 및 라운드 3을 시작하여 몇 시간 내에 지도의 5% 및 10%를 판매합니다."}]},{date:"2020",month:"Q2",item:[{title:"게임 메이커 클로즈드 알파",text:"소수의 초기 테스터에게 Game Maker Alpha의 비공개 출시"},{title:"LAND 문세일",text:"5주 동안 6회 LAND 판매"}]},{date:"2020",month:"Q3",item:[{title:"게임 메이커 공개 베타",text:"게임 메이커 베타 공개 출시"},{title:"LAND 사전 판매",text:"4라운드 오프닝"},{title:"시장",text:"SAND 구매, P2P 판매, 보석 및 촉매로 ASSET 주조"}]},{date:"2020",month:"Q4",item:[{title:"LAND 공개 판매",text:"정기적인 LAND 판매 및 Game Maker 지원"},{title:"VoxEdit ",text:"공식 릴리스 1.0"}]},{date:"2021",month:"Q1 & Q2",items:[{title:"파트너십",text:"새로운 IP 및 프리미엄 NFT 발표 예정"},{title:"게임 메이커",text:"공식 릴리스 1.0 및 더 많은 게임 패키지 및 동작이 포함된 주요 업데이트"},{title:"게임",text:"공식 릴리스 1.0 및 주요 업데이트"},{title:"LAND 공개 판매",text:"정규 LAND 판매는 계속됩니다."},{title:"이벤트",text:"큰 보상을 받을 수 있는 추가 시즌"},{title:"SAND",text:"수익 창출 및 기타 보상을 위한 스테이킹 메커니즘"}]},{date:"2021",month:"Q3",items:[{title:"推出多人游戏赛季公开 Alpha 版。",text:""}]},{date:"2021",month:"Q4",items:[{title:"推出首批 NFT Avatars (化身)系列，包括基于 IP 的系列",text:""},{title:"在第 2 层引入 DeFi 质押机制",text:""},{title:"第一个 play-to-earn (边玩边赚)赛季和探索者赛季上线",text:""},{title:"在 Matic 上推出 Layer 2 双链解决方案并全面开放 UGC 市场平台",text:""}]},{date:"2022",month:"Q1",items:[{title:"Metaverse (元宇宙)逐步向拥有高质量体验的地主开放",text:""}]},{date:"2022",month:"Q2",items:[{title:"为 SAND、LAND 和 AVATAR 持有者推出带有质押和投票机制的 DAO",text:""},{title:"DAO",text:"Sandbox DAO는 게임 플랫폼의 주요 결정에 참여할 수 있습니다."}]},{date:"2022",month:"Q3",items:[{title:"推出首批虚拟音乐会（Deadmau5、Richie Hawtin）和 The Walking Dead 游戏",text:""}]},{date:"2022",month:"Q4",items:[{title:"移动版发布",text:""}]},{date:"2022",month:"TBD",items:[{title:"파트너십",text:"새로운 IP 및 프리미엄 NFT 발표 예정"},{title:"게임 플랫폼",text:"1,000개 이상의 게임 사용 가능"},{title:"다중 플랫폼",text:"콘솔 게임의 가용성"},{title:"LAND 공개 판매",text:"정규 LAND 판매는 계속됩니다."},{title:"Game Maker",text:"공동 구축 모드 - 친구와 함께 게임 만들기, 프로그래밍 3층을 사용한 사용자 정의 스크립팅 및 더 많은 게임 패키지 및 동작으로 주요 업데이트"},{title:"이벤트",text:"큰 보상을 받을 수 있는 추가 시즌"},{title:"VoxEdit",text:"복셀 자산 및 NFT를 더 쉽게 생성할 수 있도록 더 많은 동작으로 주요 업데이트"}]},{date:"2023",month:"",items:[{title:"게임 플랫폼",text:"5,000개 이상의 게임 사용 가능"},{title:"파트너십",text:"새로운 IP 및 프리미엄 NFT 발표 예정"},{title:"게임 메이커",text:"더 많은 게임 패키지 및 동작이 추가된 주요 업데이트"},{title:"이벤트",text:"정규 LAND 판매는 계속됩니다."},{title:"VoxEdit",text:"제작자에게 최고의 복셀 편집기를 제공하기 위한 지속적인 지원"}]}],TC:[{date:"2011",month:"",title:"Pixowl 成立",text:""},{date:"2012",month:"可能",title:"沙盒系列在 IOS 上推出",text:"The Sandbox 被 Apple 評為年度最佳遊戲"},{date:"2013",month:"二月",title:"沙盒為 Android 發布（第一個標題）",text:""},{date:"2014",month:"",title:"沙盒下載量超過 1000 萬次",text:"沙盒 Steam 版發布。 與 Skybound 合作 - The Invincible。 沙盒用於 STEM 教育的新 EDU 版本"},{date:"2015",month:"",title:"沙盒進化在 GDC 會議上宣布（第二個標題）",text:"沙盒安裝量超過 1600 萬次"},{date:"2016",month:"",title:"沙盒進化在 iOS、Android 和 Steam 上發布",text:"與索尼合作 - 捉鬼敢死隊"},{date:"2017",month:"",title:"Sandbox Evolution 獲得 2 個大型合作夥伴關係",text:"Bandai Namco 將 PAC-MAN 帶入遊戲。 夢工廠將史瑞克帶到了遊戲中。 沙盒進化宣佈在 Steam 上免費下載"},{date:"2018",month:"四月",title:"沙盒下載量超過 4000 萬次，玩家創作量超過 7000 萬次",text:"沙盒在 Facebook 上的關注者超過 75 萬"},{date:"2018",month:"可能",title:"區塊鏈項目上的 Sandbox 3D 在 Pocket Gamer Connect 會議上宣布",text:""},{date:"2019",month:"十月",title:"沙盒的儀表板公開發布",text:"公開版儀錶盤發布。 用戶可以開始註冊他們的帳戶並瀏覽精彩的內容"},{date:"2019",month:"Q4",title:"LAND 預售 + VoxEdit 測試版發布",text:"玩家將能夠參與獨家 LAND 預售。 他們還將能夠將資產導出到市場並在區塊鏈上註冊"},{date:"2020",month:"Q1",items:[{title:"VoxEdit",text:"推出 VoxEdit Beta 版"},{title:"土地預售",text:"啟動第 2 輪和第 3 輪，在幾小時內售出 5% 和 10% 的地圖"}]},{date:"2020",month:"Q2",items:[{title:"遊戲製作者封閉 Alpha",text:"向少數早期測試人員私下發布 Game Maker Alpha"},{title:"LAND MoonSale",text:"5 週內 6 輪 LAND 銷售"}]},{date:"2020",month:"Q3",items:[{title:"遊戲製作者公測版",text:"Game Maker Beta 公開發布"},{title:"土地預售",text:"第四輪開幕"},{title:"市場",text:"SAND 購買、P2P 銷售、使用 Gems & Catalysts 進行資產鑄造"}]},{date:"2020",month:"Q4",items:[{title:"土地公開發售",text:"定期 LAND 銷售和對 Game Maker 的支持"},{title:"VoxEdit ",text:"正式發布 1.0"}]},{date:"2021",month:"Q1 & Q2",items:[{title:"夥伴關係",text:"新 IP 和高級 NFT 即將公佈"},{title:"遊戲製作者",text:"正式發布 1.0 和包含更多遊戲包和行為的主要更新"},{title:"遊戲",text:"正式發布 1.0 和主要更新"},{title:"土地公開發售",text:"定期土地銷售將繼續"},{title:"活動",text:"額外賽季可獲得豐厚獎勵"},{title:"SAND",text:"收益生成和其他獎勵的質押機制"}]},{date:"2021",month:"Q3",items:[{title:"推出多人賽季公開 Alpha 版",text:""}]},{date:"2021",month:"Q4",items:[{title:"推出第一個 NFT Avatars 集合，包括基於 IP 的集合 ",text:""},{title:"在 Layer 2 引入 DeFi Staking 機制 ",text:""},{title:"首個贏利賽季和探索者賽季已上線 ",text:""},{title:"在 Matic 上推出 Layer 2 雙鏈解決方案並全面開放 UGC 市場 ",text:""}]},{date:"2022",month:"Q1",items:[{title:"逐步向已建立高質量體驗的 LAND 所有者開放元界 ",text:""}]},{date:"2022",month:"Q2",items:[{title:"為 SAND、LAND 和 AVATAR 持有者推出具有質押和投票機制的 DAO",text:""},{title:"DAO",text:"沙盒 DAO 將允許參與遊戲平台的重大決策"}]},{date:"2022",month:"Q3",items:[{title:"推出首場虛擬音樂會（Deadmau5、Richie Hawtin）和行屍走肉遊戲",text:""}]},{date:"2022",month:"Q4",items:[{title:"手機版上線",text:""}]},{date:"2022",month:"TBD",items:[{title:"夥伴關係",text:"新 IP 和高級 NFT 即將公佈"},{title:"遊戲平台",text:"超過 1,000 款遊戲可供選擇"},{title:"多平台",text:"遊戲機上的可用性"},{title:"土地公開發售",text:"定期土地銷售將繼續"},{title:"遊戲製作者",text:"共建模式 - 與朋友一起創建遊戲，使用第三層編程的自定義腳本以及更多遊戲包和行為的重大更新"},{title:"事件",text:"額外賽季可獲得豐厚獎勵"},{title:"VoxEdit",text:"具有更多行為的重大更新，使體素資產和 NFT 的創建更容易"}]},{date:"2023",month:"",items:[{title:"遊戲平台",text:"超過 5,000 款遊戲可供選擇"},{title:"夥伴關係",text:"新 IP 和高級 NFT 即將公佈"},{title:"遊戲製作者",text:"添加了更多遊戲包和行為的重大更新"},{title:"活動",text:"定期土地銷售將繼續"},{title:"VoxEdit",text:"繼續支持為創作者提供可用的最佳體素編輯器"}]}],TR:[{date:"2011",month:"",title:"Pixowl kuruldu",text:""},{date:"2012",month:"MAYIS",title:"Sandbox franchise, IOS'ta başladı",text:"Sandbox, Apple tarafından yılın En İyi Oyunu ödülüne layık görüldü."},{date:"2013",month:"ŞUBAT",title:"Sandbox Android için yayınlandı (1. başlık)",text:""},{date:"2014",month:"",title:"Sandbox, 10 milyon indirmeyi aştı",text:"The Sandbox'ın Steam Sürümü yayınlandı. Skybound - The Invincible ile ortaklık. STEM eğitimi için Sandbox'ın yeni EDU versiyonu"},{date:"2015",month:"",title:"Sandbox Evolution, GDC konferansında duyuruldu (2. başlık)",text:"Sandbox, 16 milyon yüklemeyi aştı"},{date:"2016",month:"",title:"iOS, Android ve Steam'de yayınlanan Sandbox Evolution",text:"Sony ile Ortaklık - Ghostbusters"},{date:"2017",month:"",title:"Sandbox Evolution 2 büyük ortaklık aldı",text:"Bandai Namco, PAC-MAN'i oyuna getiriyor. DreamWorks, Shrek'i oyuna getiriyor. Sandbox Evolution, Steam'de ücretsiz indirildiğini duyurdu"},{date:"2018",month:"NİSAN",title:"Sandbox, 40 milyon indirmeyi ve 70 milyon oyuncu kreasyonunu geride bıraktı",text:"Sandbox, Facebook'ta 750.000 takipçiyi geride bıraktı"},{date:"2018",month:"MAY",title:"Blockchain projesindeki Sandbox 3D, Pocket Gamer Connect konferansında duyuruldu",text:""},{date:"2019",month:"EKİM",title:"Sandbox'ın Dashboard'un herkese açık sürümü",text:"Kontrol panelinin genel sürümü yayınlandı. Kullanıcılar hesaplarını kaydetmeye başlayabilir ve harika içeriklere göz atabilir"},{date:"2019",month:"Q4",title:"LAND Presale + VoxEdit beta sürümü",text:"Oyuncular özel LAND ön satışlarına katılabilecekler. Ayrıca VARLIKLARI piyasaya ihraç edebilecek ve blok zincirine kaydedebilecekler."},{date:"2020",month:"Q1",items:[{title:"VoxEdit",text:"VoxEdit Beta Sürümünün Lansmanı"},{title:"LAND Ön satış",text:"Saatler içinde Haritanın %5 ve %10'unu satan 2. ve 3. Turları başlatın"}]},{date:"2020",month:"Q2",items:[{title:"Game Maker Kapalı Alfa",text:"Game Maker Alpha'nın birkaç erken test kullanıcısına özel olarak piyasaya sürülmesi"},{title:"LAND Ay İndirimi",text:"5 hafta boyunca 6 tur LAND satışı"}]},{date:"2020",month:"Q3",items:[{title:"Game Maker Herkese Açık Beta",text:"Game Maker Beta'nın Herkese Açık Yayını"},{title:"LAND Ön satış",text:"4. Tur Açılışı"},{title:"pazar yeri",text:"KUM alımları, P2P satışları, Değerli Taşlar ve Katalizörlerle VARLIK basımı"}]},{date:"2020",month:"Q4",items:[{title:"LAND Halk indirimi",text:"Düzenli LAND satışları ve Game Maker için Destek"},{title:"VoxEdit ",text:"Resmi Sürüm 1.0"}]},{date:"2021",month:"Q1 & Q2",items:[{title:"Ortaklıklar",text:"Yeni IP'ler ve Premium NFT'ler duyurulacak"},{title:"Oyun Yapıcı",text:"Resmi Sürüm 1.0 ve daha fazla oyun paketi ve Davranış içeren büyük güncellemeler"},{title:"oyun",text:"Resmi Sürüm 1.0 ve önemli güncellemeler"},{title:"LAND Halk indirimi",text:"Düzenli ARSA satışları devam edecek"},{title:"Olaylar",text:"Kazanılacak büyük ödüller içeren Ek Sezonlar"},{title:"SAND",text:"Getiri üretimi ve diğer Ödüller için Stake mekanizmaları"}]},{date:"2021",month:"Q3",items:[{title:"Çok Oyunculu Sezon genel alfasının lansmanı",text:""}]},{date:"2021",month:"Q4",items:[{title:"IP tabanlı olanlar da dahil olmak üzere ilk NFT Avatar koleksiyonlarının lansmanı",text:""},{title:"Katman 2'de DeFi Staking mekanizmalarını tanıtın",text:""},{title:"İlk kazan-kazan sezonları ve Explorer Sezonu yayında",text:""},{title:"Matic'te Katman 2 çift zincir çözümünün lansmanı ve UGC için pazar yerinin tamamen açılması",text:""}]},{date:"2022",month:"Q1",items:[{title:"Metaverse'in yüksek kaliteli deneyimler inşa eden LAND sahiplerine aşamalı olarak açılması",text:""}]},{date:"2022",month:"Q2",items:[{title:"DAO'nun SAND, LAND ve AVATAR sahipleri için stake ve oylama mekanizmalarıyla lansmanı ",text:""},{title:"DAO",text:"Sandbox DAO, Oyun Platformunda önemli kararlara katılmaya izin verecek"}]},{date:"2022",month:"Q3",items:[{title:"",text:""}]},{date:"2022",month:"Q4",items:[{title:"Mobile version launch ",text:"İlk sanal konserlerin (Deadmau5, Richie Hawtin) ve The Walking Dead oyununun lansmanı "}]},{date:"2022",month:"TBD",items:[{title:"Ortaklıklar",text:"Yeni IP'ler ve Premium NFT'ler duyurulacak"},{title:"Oyun Platformu",text:"Over 1,000 Games available"},{title:"Çoklu platformlar",text:"Oyunun konsollarda kullanılabilirliği"},{title:"LAND Halk indirimi",text:"Düzenli ARSA satışları devam edecek"},{title:"Oyun Yapıcı",text:"Birlikte Oluşturma Modu - Arkadaşlarla oyunlar oluşturma, 3. katmanı programlama ile Özel Komut Dosyası Oluşturma ve daha fazla oyun paketi ve Davranış ile büyük güncellemeler"},{title:"Olaylar",text:"Kazanılacak büyük ödüller içeren Ek Sezonlar"},{title:"VoxEdit",text:"Voksel varlıklarının ve NFT'lerin oluşturulmasını kolaylaştırmak için daha fazla davranışa sahip büyük güncellemeler"}]},{date:"2023",month:"",items:[{title:"Oyun Platformu",text:"5.000'den fazla Oyun mevcut"},{title:"Ortaklıklar",text:"Yeni IP'ler ve Premium NFT'ler duyurulacak"},{title:"Oyun Yapıcı",text:"Eklenen daha fazla oyun paketi ve davranışıyla büyük güncellemeler"},{title:"Olaylar",text:"Düzenli ARSA satışları devam edecek"},{title:"VoxEdit",text:"İçerik oluşturuculara mevcut en iyi voksel düzenleyiciyi sağlama konusunda sürekli destek"}]}]}}}}}]);