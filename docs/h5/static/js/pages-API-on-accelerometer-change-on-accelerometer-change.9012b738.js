(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-on-accelerometer-change-on-accelerometer-change"],{"2ba3":function(t,e,n){"use strict";var a=n("4bcc"),c=n.n(a);c.a},"2d3a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"onAccelerometerChange",value:""}},onUnload:function(){uni.stopAccelerometer()},methods:{watchAcce:function(){var t=this;uni.onAccelerometerChange(function(e){t.value="监听设备的加速度变化:\nX轴："+e.x.toFixed(2)+"\nY轴："+e.y.toFixed(2)+"\nZ轴："+e.z.toFixed(2)})},stopAcce:function(){uni.stopAccelerometer()}}};e.default=a},"4bcc":function(t,e,n){var a=n("f68c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var c=n("4f06").default;c("a9922368",a,!0,{sourceMap:!1,shadowMode:!1})},8640:function(t,e,n){"use strict";n.r(e);var a=n("bae1"),c=n("eba6");for(var o in c)"default"!==o&&function(t){n.d(e,t,function(){return c[t]})}(o);n("2ba3");var i,u=n("f0c5"),r=Object(u["a"])(c["default"],a["b"],a["c"],!1,null,"644de279",null,!1,a["a"],i);e["default"]=r.exports},bae1:function(t,e,n){"use strict";var a,c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.watchAcce.apply(void 0,arguments)}}},[t._v("监听设备的加速度变化")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.stopAcce.apply(void 0,arguments)}}},[t._v("停止监听设备的加速度变化")])],1),n("v-uni-view",{staticClass:"uni-textarea uni-common-mt"},[n("v-uni-textarea",{staticClass:"acc-show",attrs:{value:t.value}})],1)],1)],1)},o=[];n.d(e,"b",function(){return c}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},eba6:function(t,e,n){"use strict";n.r(e);var a=n("2d3a"),c=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=c.a},f68c:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".shake[data-v-644de279]{background-color:#fc3;color:#fff;margin-bottom:%?50?%}.uni-textarea .acc-show[data-v-644de279]{height:%?240?%}",""])}}]);