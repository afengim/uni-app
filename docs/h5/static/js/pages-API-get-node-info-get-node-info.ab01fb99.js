(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-node-info-get-node-info"],{"0a16":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"createSelectorQuery",top:0,left:"0px",info:[]}},onReady:function(){this.getNodeInfo()},methods:{setPosition:function(){this.left=Math.random()*uni.upx2px(320)+"px",this.top=Math.random()*uni.upx2px(320)+"px",this.getNodeInfo()},getNodeInfo:function(){var t=this;uni.createSelectorQuery().select(".target").boundingClientRect().exec((function(e){var i=e[0];if(i){var n=["left","right","top","bottom","width","height"],a=[];for(var o in n){var c=n[o];a.push({key:c,val:i[c]})}t.info=a}}))}}};e.default=n},"166e":function(t,e,i){var n=i("dfad");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6b9acfdf",n,!0,{sourceMap:!1,shadowMode:!1})},"3d55":function(t,e,i){"use strict";i.r(e);var n=i("fa3f"),a=i("cee7");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("fdcf");var c,r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"3cbe8dc4",null,!1,n["a"],c);e["default"]=l.exports},cee7:function(t,e,i){"use strict";i.r(e);var n=i("0a16"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},dfad:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".movable[data-v-3cbe8dc4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.block[data-v-3cbe8dc4]{height:%?400?%;width:%?400?%;background-color:#fff;border:1px solid #ccc;position:relative;margin:0 auto;margin-bottom:%?30?%}uni-movable-area[data-v-3cbe8dc4]{height:%?400?%;width:%?400?%;position:relative}.target[data-v-3cbe8dc4]{height:%?80?%;width:%?80?%;line-height:%?80?%;text-align:center;color:#fff;background-color:#4cd964;font-size:%?28?%;position:absolute}.info[data-v-3cbe8dc4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.b[data-v-3cbe8dc4]{font-weight:700;width:%?150?%;display:inline-block}.span[data-v-3cbe8dc4]{width:%?100?%;display:inline-block}",""]),t.exports=e},fa3f:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-view",{staticClass:"movable block"},[i("v-uni-movable-area",[i("v-uni-movable-view",{staticClass:"target",attrs:{direction:"all"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.getNodeInfo.apply(void 0,arguments)}}},[t._v("Drag")])],1)],1),i("v-uni-view",{staticClass:"movable"},[i("v-uni-view",{staticClass:"info"},t._l(t.info,(function(e,n){return i("v-uni-view",{key:n},[i("v-uni-text",{staticClass:"b"},[t._v(t._s(e.key))]),i("v-uni-text",{staticClass:"span"},[t._v(t._s(e.val))])],1)})),1)],1)],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},fdcf:function(t,e,i){"use strict";var n=i("166e"),a=i.n(n);a.a}}]);