webpackJsonp([0],{"5PlU":function(t,e,r){var n=r("RY/4"),a=r("dSzd")("iterator"),i=r("/bQp");t.exports=r("FeBl").isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||i.hasOwnProperty(n(e))}},"9bmd":function(t,e,r){"use strict";var n=r("d7EF"),a=r.n(n),i={name:"VideoWrapper",props:{src:{type:String,required:!0,default:""},title:{type:String,required:!1,default:""},ratio:{type:String,required:!1,default:"16-9"}},computed:{style:function(){var t=this.ratio.split("-"),e=a()(t,2),r=e[0];return{"padding-bottom":e[1]/r*100+"%"}}}},o={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"video-wrapper",style:t.style},[r("iframe",{attrs:{src:t.src,title:t.title,webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",frameborder:"0"}})])},staticRenderFns:[]};var u=r("VU/8")(i,o,!1,function(t){r("uz4B")},"data-v-e0d8a860",null);e.a=u.exports},BO1k:function(t,e,r){t.exports={default:r("fxRn"),__esModule:!0}},KETy:function(t,e){},Xd32:function(t,e,r){r("+tPU"),r("zQR9"),t.exports=r("5PlU")},d7EF:function(t,e,r){"use strict";e.__esModule=!0;var n=i(r("us/S")),a=i(r("BO1k"));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){if(Array.isArray(t))return t;if((0,n.default)(Object(t)))return function(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var u,l=(0,a.default)(t);!(n=(u=l.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&l.return&&l.return()}finally{if(i)throw o}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},fxRn:function(t,e,r){r("+tPU"),r("zQR9"),t.exports=r("g8Ux")},g8Ux:function(t,e,r){var n=r("77Pl"),a=r("3fs2");t.exports=r("FeBl").getIterator=function(t){var e=a(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},re3e:function(t,e,r){"use strict";var n={name:"LazyImage",props:{src:{type:String,required:!0},alt:{type:String,required:!0}},methods:{onLoad:function(t){t.currentTarget.classList.add("is-loaded")}}},a={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"lazy-img",attrs:{src:t.src,alt:t.alt},on:{load:t.onLoad}})},staticRenderFns:[]};var i=r("VU/8")(n,a,!1,function(t){r("KETy")},null,null);e.a=i.exports},"us/S":function(t,e,r){t.exports={default:r("Xd32"),__esModule:!0}},uz4B:function(t,e){}});
//# sourceMappingURL=0.afdf537f70b9ec49bb26.js.map