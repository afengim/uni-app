(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-progress-progress"],{"1b65":function(t,e,s){"use strict";s.r(e);var r=s("b58f"),n=s("ed6f1");for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);s("b187");var o=s("2877"),a=Object(o["a"])(n["default"],r["a"],r["b"],!1,null,"595bfed2",null);e["default"]=a.exports},"72c7":function(t,e,s){e=t.exports=s("2350")(!1),e.push([t.i,".progress-box[data-v-595bfed2]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?50?%;margin-bottom:%?60?%}.uni-icon[data-v-595bfed2]{line-height:1.5}.progress-cancel[data-v-595bfed2]{margin-left:%?40?%}.progress-control uni-button[data-v-595bfed2]{margin-top:%?20?%}",""])},b187:function(t,e,s){"use strict";var r=s("d137"),n=s.n(r);n.a},b58f:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",[s("page-head",{attrs:{title:t.title}}),s("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[s("v-uni-view",{staticClass:"progress-box"},[s("v-uni-progress",{attrs:{percent:t.pgList[0],"show-info":!0,"stroke-width":"3"}})],1),s("v-uni-view",{staticClass:"progress-box"},[s("v-uni-progress",{attrs:{percent:t.pgList[1],"stroke-width":"3"}}),s("uni-icons",{staticClass:"progress-cancel",attrs:{type:"close",color:"#dd524d"}})],1),s("v-uni-view",{staticClass:"progress-box"},[s("v-uni-progress",{attrs:{percent:t.pgList[2],"stroke-width":"3"}})],1),s("v-uni-view",{staticClass:"progress-box"},[s("v-uni-progress",{attrs:{percent:t.pgList[3],activeColor:"#10AEFF","stroke-width":"3"}})],1),s("v-uni-view",{staticClass:"progress-control"},[s("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setProgress.apply(void 0,arguments)}}},[t._v("设置进度")]),s("v-uni-button",{attrs:{type:"warn"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearProgress.apply(void 0,arguments)}}},[t._v("清除进度")])],1)],1)],1)},n=[];s.d(e,"a",function(){return r}),s.d(e,"b",function(){return n})},d137:function(t,e,s){var r=s("72c7");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=s("4f06").default;n("625893f8",r,!0,{sourceMap:!1,shadowMode:!1})},ed6f1:function(t,e,s){"use strict";s.r(e);var r=s("f9cc"),n=s.n(r);for(var i in r)"default"!==i&&function(t){s.d(e,t,function(){return r[t]})}(i);e["default"]=n.a},f9cc:function(t,e,s){"use strict";var r=s("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(s("48f0")),i={data:function(){return{title:"progress",pgList:[0,0,0,0]}},components:{uniIcons:n.default},methods:{setProgress:function(){this.pgList=[20,40,60,80]},clearProgress:function(){this.pgList=[0,0,0,0]}}};e.default=i}}]);