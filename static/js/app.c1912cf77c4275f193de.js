webpackJsonp([7],{"+gvl":function(t,n){},BCiY:function(t,n){},DWg5:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)},staticRenderFns:[]};var i=e("VU/8")({name:"App"},r,!1,function(t){e("DWg5")},null,null).exports,o=e("/ocq"),s=e("VJFb"),c=e("OC/o"),u={name:"MainCopy",props:{classes:{type:String,required:!1}}},l={render:function(t,n){var e=n._c;return e("article",{class:n.props.classes},[e("p",[n._v("\n\t\tA senior planner at "),e("a",{attrs:{href:"http://www.dlvbbdo.com/"}},[n._v("DLV BBDO")]),n._v(" leading the strategy of a number of\n\t\tthe agency's key accounts, including\n\t\t"),e("router-link",{attrs:{to:"works/che-banca"}},[n._v("CheBanca!")]),n._v(",\n\t\t"),e("router-link",{attrs:{to:"works/bayer"}},[n._v("Bayer")]),n._v(",\n\t\t"),e("router-link",{attrs:{to:"works/philadelphia"}},[n._v("Philadelphia")]),n._v(",\n\t\t"),e("router-link",{attrs:{to:"works/sisal"}},[n._v("Sisal")]),n._v(" and\n\t\t"),e("router-link",{attrs:{to:"works/yamaha"}},[n._v("Yamaha")]),n._v(".\n\t\tWhat I do is connecting brands with people in meaningful and unconventional ways and mix solid brand\n\t\tplanning with an integrated touchpoint strategy. I write about things I find interesting and original at\n\t\tmy "),e("a",{attrs:{href:"http://alessandromese.tumblr.com/"}},[n._v("blog")]),n._v(".\n\t")],1),n._v(" "),e("p",[n._v("\n\t\tCatch me over "),e("a",{attrs:{href:"https://www.linkedin.com/pub/alessandro-mese/6/602/bb6/it"}},[n._v("linkedin")]),n._v(" or see a\n\t\tselection\n\t\tof my\n\t\t"),e("router-link",{attrs:{to:"/works"}},[n._v("works")])],1)])},staticRenderFns:[]};var p=e("VU/8")(u,l,!0,function(t){e("sxP4")},"data-v-2cfe27af",null).exports,h=e("evg2"),d=e("VwQt").a.TOGGLE_MENU,v={name:"MenuList",data:function(){return{isOpen:!1}},mounted:function(){var t=this;h.a.$on(d,function(n){t.isOpen=n})}},m={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{class:[!0===t.isOpen?"is-open":""]},[e("router-link",{attrs:{to:"/philadelphia"}},[e("span",[t._v("Philadelphia")])]),t._v(" "),e("router-link",{attrs:{to:"/che-banca"}},[e("span",[t._v("CheBanca!")])]),t._v(" "),e("router-link",{attrs:{to:"/bayer"}},[e("span",[t._v("Bayer")])]),t._v(" "),e("router-link",{attrs:{to:"/sisal"}},[e("span",[t._v("Sisal")])]),t._v(" "),e("router-link",{attrs:{to:"/yamaha"}},[e("span",[t._v("Yamaha")])])],1)},staticRenderFns:[]};var f=e("VU/8")(v,m,!1,function(t){e("kir9")},"data-v-7ebe7d05",null).exports,_={name:"Home",components:{AppHeader:s.a,MainCopy:p,AppFooter:c.a,MenuList:f}},g={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("menu-list"),t._v(" "),e("div",{staticClass:"page-wrap"},[e("app-header"),t._v(" "),e("main",[e("header",{staticClass:"box-wrapper"},[t._m(0),t._v(" "),e("p",{staticClass:"box box--tagline"},[t._v("\n\t\t\t\t\tCreative digital strategist\n\t\t\t\t")]),t._v(" "),e("main-copy",{attrs:{classes:"box box--main-copy"}})],1)]),t._v(" "),e("app-footer")],1)],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h1",{staticClass:"box box--header",attrs:{id:"main-heading"}},[e("span",{attrs:{id:"masthead__name"}},[t._v("Alessandro")]),t._v(" "),e("span",{attrs:{id:"masthead__surname"}},[t._v("Mese")])])}]};var w=e("VU/8")(_,g,!1,function(t){e("BCiY")},"data-v-6c5e79c4",null).exports;a.a.use(o.a);var b=new o.a({mode:"history",routes:[{path:"/",name:"Home",component:w},{path:"/philadelphia",name:"philadelphia",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"XxkH"))}},{path:"/bayer",name:"bayer",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"/0O9"))}},{path:"/sisal",name:"sisal",component:function(){return Promise.all([e.e(0),e.e(5)]).then(e.bind(null,"46qi"))}},{path:"/che-banca",name:"che-banca",component:function(){return Promise.all([e.e(0),e.e(3)]).then(e.bind(null,"0Q00"))}},{path:"/yamaha",name:"yamaha",component:function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"wT6E"))}}]}),y=e("//Fk"),k=e.n(y),x=e("Gu7T"),E=e.n(x),O=e("FG6U"),C=e.n(O),F=window.document.documentElement,M={fonts:[{family:"Poppins",weight:300},{family:"Anonymous Pro",weight:300}],updateFonts:function(t){var n;return(n=this.fonts).push.apply(n,E()(t)),this.fonts},updateUI:function(){F.classList.add("fonts-loaded")},catchError:function(){for(var t,n=arguments.length,e=Array(n),a=0;a<n;a++)e[a]=arguments[a];(t=console).log.apply(t,["font loading error"].concat(E()(e)))},init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=this.updateFonts(t).map(function(t){var n=t.family,e=t.weight;return new C.a(n,{weight:e})});k.a.all(n.map(function(t){return t.load()})).then(this.updateUI.bind(this)).catch(this.catchError)}},U=document,A=U.documentElement,P={touch:function(){var t="touchstart"in U?"touchevents":"no-touchevents";return A.classList.add(t),this},init:function(){this.touch()}};a.a.config.productionTip=!1,M.init(),P.init(),new a.a({el:"#app",router:b,components:{App:i},template:"<App/>"})},"OC/o":function(t,n,e){"use strict";var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("footer",[this._v("\n\tPixels glued together by "),n("a",{attrs:{href:"http://www.paolocavanna.it"}},[this._v("paolo")])])}]};var r=e("VU/8")({name:"AppFooter"},a,!1,function(t){e("+gvl")},"data-v-88487428",null);n.a=r.exports},VJFb:function(t,n,e){"use strict";var a=e("evg2"),r=e("VwQt"),i={render:function(t,n){var e=n._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"}},[e("rect",{attrs:{x:"0",y:"0",width:"60",height:"7"}}),n._v(" "),e("rect",{attrs:{x:"0",y:"20",width:"60",height:"7"}}),n._v(" "),e("rect",{attrs:{x:"0",y:"40",width:"60",height:"7"}})])},staticRenderFns:[]};var o=e("VU/8")({name:"MenuButton"},i,!0,function(t){e("YGo5")},"data-v-754648a6",null).exports,s=r.a.TOGGLE_MENU,c={name:"AppHeader",components:{MenuIcon:o},data:function(){return{isOpen:!1}},methods:{toggleMenu:function(){this.isOpen=!this.isOpen,a.a.$emit(s,this.isOpen)}}},u={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{staticClass:"main-header"},[e("button",{class:[t.isOpen?"is-open":""],on:{click:function(n){n.preventDefault(),t.toggleMenu(n)}}},[e("menu-icon",{ref:"menuIcon"})],1)])},staticRenderFns:[]};var l=e("VU/8")(c,u,!1,function(t){e("lXKA")},"data-v-53a432e0",null);n.a=l.exports},VwQt:function(t,n,e){"use strict";e.d(n,"a",function(){return a});var a={TOGGLE_MENU:"TOGGLE_MENU"}},YGo5:function(t,n){},evg2:function(t,n,e){"use strict";e.d(n,"a",function(){return a});var a=new(e("7+uW").a)},kir9:function(t,n){},lXKA:function(t,n){},sxP4:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.c1912cf77c4275f193de.js.map