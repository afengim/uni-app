(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-action-sheet-action-sheet"],{"87b8":function(t,n,e){"use strict";e.r(n);var i=e("d1bb"),u=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=u.a},c318:function(t,n,e){"use strict";var i,u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.actionSheetTap.apply(void 0,arguments)}}},[t._v("弹出action sheet")])],1)],1)],1)},a=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},d1bb:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"action-sheet"}},methods:{actionSheetTap:function(){uni.showActionSheet({title:"标题",itemList:["item1","item2","item3","item4"],success:function(t){console.log(t.tapIndex),uni.showToast({title:"点击了第"+t.tapIndex+"个选项",icon:"none"})}})}}};n.default=i},db72:function(t,n,e){"use strict";e.r(n);var i=e("c318"),u=e("87b8");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);var c,o=e("f0c5"),r=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);n["default"]=r.exports}}]);