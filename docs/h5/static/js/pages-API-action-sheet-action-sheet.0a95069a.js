(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-action-sheet-action-sheet"],{6652:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{attrs:{type:"default"},on:{click:function(n){n=t.$handleEvent(n),t.actionSheetTap(n)}}},[t._v("弹出action sheet")])],1)],1)],1)},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},8623:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"action-sheet"}},methods:{actionSheetTap:function(){uni.showActionSheet({title:"标题",itemList:["item1","item2","item3","item4"],success:function(t){console.log(t.tapIndex),uni.showToast({title:"点击了第"+t.tapIndex+"个选项",icon:"none"})}})}}};n.default=i},b8f7:function(t,n,e){"use strict";e.r(n);var i=e("6652"),a=e("f8d7");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);var o=e("2877"),c=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=c.exports},f8d7:function(t,n,e){"use strict";e.r(n);var i=e("8623"),a=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=a.a}}]);