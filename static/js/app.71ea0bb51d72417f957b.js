webpackJsonp([7],{"9MJR":function(t,n){},Dcyr:function(t,n){},FuAP:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)},staticRenderFns:[]};var o=e("VU/8")({name:"App"},r,!1,function(t){e("dpQA")},null,null).exports,i=e("/ocq"),s=e("VJFb"),u=e("OC/o"),c={name:"MainCopy",props:{classes:{type:String,required:!1}}},l={render:function(t,n){var e=n._c;return e("article",{class:n.props.classes},[e("p",[n._v("\n\t\tA senior planner at "),e("a",{attrs:{href:"http://www.dlvbbdo.com/"}},[n._v("DLV BBDO")]),n._v(" leading the strategy of a number of\n\t\tthe agency's key accounts, including\n\t\t"),e("router-link",{attrs:{to:"works/che-banca"}},[n._v("CheBanca!")]),n._v(",\n\t\t"),e("router-link",{attrs:{to:"works/bayer"}},[n._v("Bayer")]),n._v(",\n\t\t"),e("router-link",{attrs:{to:"works/philadelphia"}},[n._v("Philadelphia")]),n._v(",\n\t\t"),e("router-link",{attrs:{to:"works/sisal"}},[n._v("Sisal")]),n._v(" and\n\t\t"),e("router-link",{attrs:{to:"works/yamaha"}},[n._v("Yamaha")]),n._v(".\n\t\tIntegrated strategist passionate about the intersection of brand storytelling, people\n\t\tand culture.\n\t")],1),n._v(" "),e("p",[n._v("\n\t\tCatch me over "),e("a",{attrs:{href:"https://www.linkedin.com/pub/alessandro-mese/6/602/bb6/it"}},[n._v("linkedin")]),n._v(" or see a\n\t\tselection\n\t\tof my\n\t\t"),e("router-link",{attrs:{to:"/works"}},[n._v("works")])],1)])},staticRenderFns:[]};var p=e("VU/8")(c,l,!0,function(t){e("9MJR")},"data-v-63912ad2",null).exports,h=e("evg2"),d=e("VwQt").a.TOGGLE_MENU,v={name:"MenuList",data:function(){return{isOpen:!1}},mounted:function(){var t=this;h.a.$on(d,function(n){t.isOpen=n})}},m={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{class:[!0===t.isOpen?"is-open":""]},[e("router-link",{attrs:{to:"/bayer-aspirin"}},[e("span",[t._v("Bayer - Aspirin C")])]),t._v(" "),e("router-link",{attrs:{to:"/bayer-lasonil"}},[e("span",[t._v("Bayer - Lasonil")])]),t._v(" "),e("router-link",{attrs:{to:"/peroni"}},[e("span",[t._v("Peroni")])]),t._v(" "),e("router-link",{attrs:{to:"/tempo"}},[e("span",[t._v("Tempo")])]),t._v(" "),e("router-link",{attrs:{to:"/yamaha"}},[e("span",[t._v("Yamaha")])])],1)},staticRenderFns:[]};var f=e("VU/8")(v,m,!1,function(t){e("FuAP")},"data-v-694af628",null).exports,_={name:"Home",components:{AppHeader:s.a,MainCopy:p,AppFooter:u.a,MenuList:f}},w={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("menu-list"),t._v(" "),e("div",{staticClass:"page-wrap"},[e("app-header"),t._v(" "),e("main",[e("header",{staticClass:"box-wrapper"},[t._m(0),t._v(" "),e("p",{staticClass:"box box--tagline"},[t._v("\n\t\t\t\t\tStrategist\n\t\t\t\t")]),t._v(" "),e("main-copy",{attrs:{classes:"box box--main-copy"}})],1)]),t._v(" "),e("app-footer")],1)],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h1",{staticClass:"box box--header",attrs:{id:"main-heading"}},[e("span",{attrs:{id:"masthead__name"}},[t._v("Alessandro")]),t._v(" "),e("span",{attrs:{id:"masthead__surname"}},[t._v("Mese")])])}]};var y=e("VU/8")(_,w,!1,function(t){e("mrrh")},"data-v-dd5a563a",null).exports;a.a.use(i.a);var g=new i.a({mode:"history",routes:[{path:"/",name:"Home",component:y},{path:"/peroni",name:"peroni",component:function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"CCet"))}},{path:"/bayer-aspirin",name:"bayer-aspirin",component:function(){return Promise.all([e.e(0),e.e(5)]).then(e.bind(null,"MtOW"))}},{path:"/bayer-lasonil",name:"bayer-lasonil",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"I8YM"))}},{path:"/tempo",name:"tempo",component:function(){return Promise.all([e.e(0),e.e(3)]).then(e.bind(null,"7GLl"))}},{path:"/yamaha",name:"yamaha",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"wT6E"))}}]}),b=e("//Fk"),k=e.n(b),x=e("Gu7T"),E=e.n(x),A=e("FG6U"),M=e.n(A),F=window.document.documentElement,O={fonts:[{family:"Poppins",weight:300},{family:"Anonymous Pro",weight:300}],updateFonts:function(t){var n;return(n=this.fonts).push.apply(n,E()(t)),this.fonts},updateUI:function(){F.classList.add("fonts-loaded")},catchError:function(){for(var t,n=arguments.length,e=Array(n),a=0;a<n;a++)e[a]=arguments[a];(t=console).log.apply(t,["font loading error"].concat(E()(e)))},init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=this.updateFonts(t).map(function(t){var n=t.family,e=t.weight;return new M.a(n,{weight:e})});k.a.all(n.map(function(t){return t.load()})).then(this.updateUI.bind(this)).catch(this.catchError)}},C=document,U=C.documentElement,G={touch:function(){var t="touchstart"in C?"touchevents":"no-touchevents";return U.classList.add(t),this},init:function(){this.touch()}};e("pTlp");a.a.config.productionTip=!1,O.init(),G.init(),new a.a({el:"#app",router:g,components:{App:o},template:"<App/>"})},"OC/o":function(t,n,e){"use strict";var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("footer",[this._v("\n\tPixels glued together by "),n("a",{attrs:{href:"http://www.paolocavanna.it"}},[this._v("paolo")])])}]};var r=e("VU/8")({name:"AppFooter"},a,!1,function(t){e("Dcyr")},"data-v-21e54a68",null);n.a=r.exports},VJFb:function(t,n,e){"use strict";var a=e("evg2"),r=e("VwQt"),o={render:function(t,n){var e=n._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"}},[e("rect",{attrs:{x:"0",y:"0",width:"60",height:"7"}}),n._v(" "),e("rect",{attrs:{x:"0",y:"20",width:"60",height:"7"}}),n._v(" "),e("rect",{attrs:{x:"0",y:"40",width:"60",height:"7"}})])},staticRenderFns:[]};var i=e("VU/8")({name:"MenuButton"},o,!0,function(t){e("YGo5")},"data-v-754648a6",null).exports,s=r.a.TOGGLE_MENU,u={name:"AppHeader",components:{MenuIcon:i},data:function(){return{isOpen:!1}},methods:{toggleMenu:function(){this.isOpen=!this.isOpen,a.a.$emit(s,this.isOpen)}}},c={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{staticClass:"main-header"},[e("button",{class:[t.isOpen?"is-open":""],on:{click:function(n){n.preventDefault(),t.toggleMenu(n)}}},[e("menu-icon",{ref:"menuIcon"})],1)])},staticRenderFns:[]};var l=e("VU/8")(u,c,!1,function(t){e("lXKA")},"data-v-53a432e0",null);n.a=l.exports},VwQt:function(t,n,e){"use strict";e.d(n,"a",function(){return a});var a={TOGGLE_MENU:"TOGGLE_MENU"}},YGo5:function(t,n){},dpQA:function(t,n){},evg2:function(t,n,e){"use strict";e.d(n,"a",function(){return a});var a=new(e("7+uW").a)},lXKA:function(t,n){},mrrh:function(t,n){},pTlp:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.71ea0bb51d72417f957b.js.map