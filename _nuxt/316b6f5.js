(window.webpackJsonp=window.webpackJsonp||[]).push([[701,445],{3147:function(t,e,o){"use strict";o.d(e,"c",(function(){return d})),o.d(e,"a",(function(){return f})),o.d(e,"b",(function(){return m})),o.d(e,"d",(function(){return h}));o(32),o(24),o(22),o(15),o(25);var n=o(10),r=o(9);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t){var e=[],o="";return t.forEach((function(t){o=$nuxt.$i18n.t("map.presales.".concat(t.key)),e.push(l(l({},t),{},{id:t.sector,name:o.toUpperCase()}))})),e.unshift({id:0,name:$nuxt.$i18n.t("map.presales.metaverse"),x:-1800,y:405,zoom:5}),e}function f(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t){var n=new Date,c=new Date(t.startsAt),l=new Date(e||o?t.startsAt:t.endsAt);return c.setHours(c.getHours()-r.w.startBefore),e&&l.setHours(l.getHours()+r.w.endAfter),n.getTime()>=c.getTime()&&n.getTime()<l.getTime()}return!1}function m(t){return f(t.getters["presaleconfig/getCurrentActivePresale"],!0)}var h={0:{0:[.75,.25],3:[.9,.1],6:[.9,.1],12:[.9,.1],24:[.9,.1]},1:{0:[.75,.25],3:[.9,.1],6:[.9,.1],12:[.66,.46],24:[.6,.3]},2:{0:[.75,.25],3:[.9,.1],6:[.9,.1],12:[.9,.1],24:[.9,.1]},3:{0:[.876,.12],3:[.9,.1],6:[.9,.1],12:[.9,.1],24:[.9,.1]},4:{0:[.89,.1],3:[.9,.1],6:[.9,.1],12:[.9,.1],24:[.9,.1]},5:{0:[.9,.1],3:[.9,.1],6:[.9,.1],12:[.9,.1],24:[.9,.1]},6:{0:[.93,.07],3:[.91,.07],6:[.91,.07],12:[.92,.07],24:[.9,.1]},7:{0:[.95,.05],3:[.95,.05],6:[.95,.05],12:[.95,.05],24:[.95,.05]},8:{0:[.95,.05],3:[.95,.05],6:[.95,.05],12:[.95,.05],24:[.95,.05]}}},3361:function(t,e,o){var content=o(4207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(91).default)("644f0c9c",content,!0,{sourceMap:!1})},4206:function(t,e,o){"use strict";o(3361)},4207:function(t,e,o){(e=o(90)(!1)).push([t.i,'@font-face{font-family:"Montserrat SemiBold";font-display:block;src:local("Montserrat-SemiBold"),url(/fonts/montserrat/Montserrat-SemiBold.woff2) format("woff2"),url(/fonts/montserrat/Montserrat-SemiBold.woff) format("woff"),url(/fonts/montserrat/Montserrat-SemiBold.ttf) format("truetype");font-weight:600;font-style:normal;font-display:swap}@font-face{font-family:"Montserrat Regular";font-display:block;src:local("Montserrat-Regular"),url(/fonts/montserrat/Montserrat-Regular.woff2) format("woff2"),url(/fonts/montserrat/Montserrat-Regular.woff) format("woff"),url(/fonts/montserrat/montserrat-regular-webfont.ttf) format("truetype");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"Montserrat ExtraBold";font-display:block;src:local("Montserrat-ExtraBold"),url(/fonts/montserrat/Montserrat-ExtraBold.woff2) format("woff2"),url(/fonts/montserrat/Montserrat-ExtraBold.woff) format("woff"),url(/fonts/montserrat/Montserrat-ExtraBold.ttf) format("truetype");font-weight:800;font-style:normal;font-display:swap}\n/*! Generated by Font Squirrel (https://www.fontsquirrel.com) on September 12, 2019 */@font-face{font-family:"Montserrat Bold";font-display:block;src:local("Montserrat-Bold"),url(/fonts/montserrat/Montserrat-Bold.woff2) format("woff2"),url(/fonts/montserrat/Montserrat-Bold.woff) format("woff"),url(/fonts/montserrat/Montserrat-Bold.ttf) format("truetype");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:"Montserrat Medium";font-display:block;src:local("Montserrat-Medium"),url(/fonts/montserrat/Montserrat-Medium.woff2) format("woff2"),url(/fonts/montserrat/Montserrat-Medium.woff) format("woff"),url(/fonts/montserrat/Montserrat-Medium.ttf) format("truetype");font-weight:500}@font-face{src:url(/fonts/compact/compact-rounded-black.ttf) format("truetype");font-family:"Quan";font-display:block;font-weight:600;font-style:normal;font-display:swap}@font-face{src:url(/fonts/compact/compact-rounded-bold.ttf) format("truetype");font-family:"Quan Bold";font-display:block;font-weight:600;font-style:normal;font-display:swap}@font-face{src:local("Roboto"),url(/fonts/roboto/Roboto-Regular.ttf) format("truetype");font-family:"Roboto Regular";font-display:block;font-weight:600;font-style:normal;font-display:swap}@font-face{src:local("Roboto-Semi"),url(/fonts/roboto/Roboto-Medium.ttf) format("truetype");font-family:"Roboto Semi";font-display:block;font-weight:600;font-style:normal;font-display:swap}@font-face{src:local("Roboto-Black"),url(/fonts/roboto/Roboto-Black.ttf) format("truetype");font-family:"Roboto Extra";font-display:block;font-weight:600;font-style:normal;font-display:swap}body.main-container[data-v-7cc74982]{--navbar-height:60px;--tab-menu-height:50px;--sidebar-left-navigation-width:90px}@media (max-width:1279px){body.main-container[data-v-7cc74982]{--navbar-height:76px}}@media (max-width:tabletpx){body.main-container[data-v-7cc74982]{--navbar-height:76px}}@media (min-width:0px) and (max-width:767px){body.main-container[data-v-7cc74982]{--navbar-height:45px}}.chip-new[data-v-7cc74982]{position:absolute;right:6px;left:6px;bottom:-4px;background-color:#fe4fbe;color:#fff;padding:3px;border-radius:6px;text-align:center;min-width:70px;top:inherit}@media (min-width:0px) and (max-width:767px){.chip-new[data-v-7cc74982]{display:none}}.sidenav[data-v-7cc74982]{max-height:calc(100vh - 60px);overflow:overlay;background-color:#14181d;display:flex;flex-direction:row;justify-content:flex-start;align-items:stretch;z-index:1001}.sidenav.collapsed[data-v-7cc74982]{min-width:90px;width:auto}@media (max-width:1600px){.sidenav.collapsed[data-v-7cc74982]{min-width:72px}}@media (max-width:desktop-mdpx){.sidenav.collapsed[data-v-7cc74982]{min-width:72px}}@media (min-width:0px) and (max-width:767px){.sidenav.collapsed[data-v-7cc74982]{min-width:0}}.shadow-side[data-v-7cc74982]{background:url(/img/02_Side_Bar/SideShadow.png);width:5px;height:100%;position:absolute;right:0;pointer-events:none}.navigation[data-v-7cc74982]{padding:10px 0;height:100%;background-color:#14181d;transform:translateZ(0);z-index:1010;transition:all .2s ease;width:var(--sidebar-left-navigation-width);display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.navigation--notification-open[data-v-7cc74982]{height:calc(100% - 50px)}@media (min-width:0px) and (max-width:1279px){.navigation[data-v-7cc74982]{padding-bottom:14vh}}.sidebar-actions[data-v-7cc74982]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;min-width:240px;height:100%;padding-bottom:60px;overflow:auto;background-color:#1d232a;height:calc(100vh - 60px);display:flex;flex-direction:column}.sidebar-actions p[data-v-7cc74982]{font-size:30px;line-height:32px;font-family:"Montserrat ExtraBold",sans-serif;padding:0 0 0 30px;text-transform:uppercase}@media (min-width:1367px) and (max-width:1600px){.sidebar-actions p[data-v-7cc74982]{font-size:24px}}@media (min-width:0px) and (max-width:767px){.sidebar-actions p[data-v-7cc74982]{font-size:17px;line-height:19px}}.sidebar-actions-header[data-v-7cc74982]{width:172px;height:15px;margin-top:46px;margin-bottom:29px;margin-left:35px;cursor:pointer}',""]),t.exports=e},5412:function(t,e,o){"use strict";o.r(e);o(165);var n=o(263),r=o(264),c=o(3147),l=o(9),d={components:{NavigationButton:function(){return o.e(917).then(o.bind(null,5642))}},mixins:[n.a,r.c,r.b],props:{sidebar:Boolean,disableNavigation:{type:Boolean,default:!1}},data:function(){return{delayEnded:!1,mapRoute:"/map"}},computed:{isSeasonWhitelisted:function(){return this.$store.getters["whitelist/isAuthorized"]("season")},loaded:function(){return this.$store.state.notifications.loaded},staticNotification:function(){return this.loaded&&this.delayEnded?this.$store.getters["notifications/getStaticNotification"]:null},isCollabAuthorized:function(){return this.$store.getters["whitelist/isAuthorized"]("contentCollab")},isCollabRegistered:function(){return this.$store.getters["whitelist/isRegistered"]("contentCollab")},spacesAccess:function(){return!l.t||this.isCollabAuthorized&&this.isCollabRegistered},enableCollabWhitelist:function(){return l.t},navigationButtons:function(){return[{src:"/img/02_Side_Bar/svg/home-icon.svg",alt:"Home",to:"/",name:this.$t("layout.sidebar.home"),selected:"/"===this.currentRoute,show:!0},{src:"/img/02_Side_Bar/svg/play-icon.svg",alt:"The Sandbox 3",to:"/season/",name:this.$t("layout.sidebar.play"),selected:this.currentRoute.startsWith("/season"),show:!0},{src:"/img/02_Side_Bar/svg/shop-icon.svg",alt:"Marketplace",to:"/shop/",name:this.$t("layout.sidebar.shop"),selected:this.currentRoute.startsWith("/shop"),show:!0},{src:"/img/02_Side_Bar/svg/create-icon.svg",alt:"Create",to:"/create/game-maker/",name:this.$t("layout.sidebar.create"),selected:this.currentRoute.startsWith("/create"),show:!0},{src:"/img/02_Side_Bar/svg/map-icon.svg",alt:"Map",to:this.mapRoute,name:this.$t("layout.sidebar.map"),selected:this.currentRoute.startsWith("/map")||this.currentRoute.startsWith("/sale-map"),show:!0},{src:"/img/02_Side_Bar/svg/spaces.svg",alt:"Communities",to:"/communities/the-sandbox",name:this.$t("layout.sidebar.communities"),selected:this.currentRoute.startsWith("/communities"),show:l.r&&this.spacesAccess},{src:"/img/02_Side_Bar/svg/about-icon.svg",alt:"About",to:"/about/",name:this.$t("layout.sidebar.about"),selected:this.currentRoute.startsWith("/about"),show:!0},{src:"/img/11_Admin/AdminAvatar.png",alt:"Moderator",to:"/moderator/assets/",name:this.$t("layout.sidebar.mod"),isClient:!0,selected:this.currentRoute.startsWith("/moderator"),show:this.isAdminOrArtistModerator},{src:"/img/11_Admin/AdminGear.png",alt:"Admin",to:"/admin/assets/",name:this.$t("layout.sidebar.admin"),isClient:!0,selected:this.currentRoute.startsWith("/admin"),show:this.isAdmin}]},currentRoute:function(){var path=this.$route.path;return path.substring(3,path.length).toLowerCase()},filteredNavigationButtons:function(){return this.navigationButtons.filter((function(button){return button.show}))}},mounted:function(){var t=this;this.setMapRoute(),setTimeout((function(){t.delayEnded=!0}),1e3)},methods:{setMapRoute:function(){this.mapRoute=Object(c.b)(this.$store)?"/sale-map":"/map"}}},f=(o(4206),o(26)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sidenav"},[t.disableNavigation?t._e():o("div",{class:["navigation",{"navigation--notification-open":!!t.staticNotification}]},[t._l(t.filteredNavigationButtons,(function(button,t){return[o(button.isClient?"client-only":"div",{key:t,tag:"component"},[o("NavigationButton",{attrs:{src:button.src,alt:button.alt,name:button.name,selected:button.selected,disabled:button.disabled,to:button.to,link:button.link,notifications:button.notifications,chip:button.chip,"chip-content":button.chipContent,"down-button":button.downButton}})],1)]}))],2),t._v(" "),t.sidebar?o("div",{staticClass:"sidebar-actions"},[t._t("default")],2):t._e()])}),[],!1,null,"7cc74982",null);e.default=component.exports}}]);