(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-slider-slider"],{3117:function(e,n,t){"use strict";t.r(n);var i=t("e5d1"),a=t.n(i);for(var u in i)"default"!==u&&function(e){t.d(n,e,function(){return i[e]})}(u);n["default"]=a.a},d0ac:function(e,n,t){"use strict";t.r(n);var i=t("d9e5"),a=t("3117");for(var u in a)"default"!==u&&function(e){t.d(n,e,function(){return a[e]})}(u);var l=t("2877"),s=Object(l["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=s.exports},d9e5:function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",[t("page-head",{attrs:{title:e.title}}),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-view",{staticClass:"uni-title"},[e._v("设置step")]),t("v-uni-view",[t("v-uni-slider",{attrs:{value:"60",step:"5"},on:{change:function(n){n=e.$handleEvent(n),e.sliderChange(n)}}})],1),t("v-uni-view",{staticClass:"uni-title"},[e._v("显示当前value")]),t("v-uni-view",[t("v-uni-slider",{attrs:{value:"50","show-value":""},on:{change:function(n){n=e.$handleEvent(n),e.sliderChange(n)}}})],1),t("v-uni-view",{staticClass:"uni-title"},[e._v("设置最小/最大值")]),t("v-uni-view",[t("v-uni-slider",{attrs:{value:"100",min:"50",max:"200","show-value":""},on:{change:function(n){n=e.$handleEvent(n),e.sliderChange(n)}}})],1),t("v-uni-view",{staticClass:"uni-title"},[e._v("不同颜色和大小的滑块")]),t("v-uni-view",[t("v-uni-slider",{attrs:{value:"50",activeColor:"#FFCC33",backgroundColor:"#000000","block-color":"#8A6DE9","block-size":"20"},on:{change:function(n){n=e.$handleEvent(n),e.sliderChange(n)}}})],1)],1)],1)},a=[];t.d(n,"a",function(){return i}),t.d(n,"b",function(){return a})},e5d1:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"slider 滑块"}},methods:{sliderChange:function(e){console.log("value 发生变化："+e.detail.value)}}};n.default=i}}]);