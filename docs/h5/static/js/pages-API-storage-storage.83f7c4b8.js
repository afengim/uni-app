(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-storage-storage"],{"0556":function(t,e,n){"use strict";n.r(e);var a=n("7e0f"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a},"5b94":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-view",{staticClass:"uni-list-cell-left"},[n("v-uni-view",{staticClass:"uni-label"},[t._v("key")])],1),n("v-uni-view",{staticClass:"uni-list-cell-db"},[n("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入key",name:"key",value:t.key},on:{input:function(e){e=t.$handleEvent(e),t.keyChange(e)}}})],1)],1),n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-view",{staticClass:"uni-list-cell-left"},[n("v-uni-view",{staticClass:"uni-label"},[t._v("value")])],1),n("v-uni-view",{staticClass:"uni-list-cell-db"},[n("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入value",name:"data",value:t.data},on:{input:function(e){e=t.$handleEvent(e),t.dataChange(e)}}})],1)],1)],1),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{staticClass:"btn-setstorage",attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.setStorage(e)}}},[t._v("存储数据")]),n("v-uni-button",{on:{click:function(e){e=t.$handleEvent(e),t.getStorage(e)}}},[t._v("读取数据")]),n("v-uni-button",{on:{click:function(e){e=t.$handleEvent(e),t.clearStorage(e)}}},[t._v("清理数据")])],1)],1)],1)],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},7586:function(t,e,n){var a=n("e694");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("df8d5234",a,!0,{sourceMap:!1,shadowMode:!1})},"7e0f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"get/set/clearStorage",key:"",data:""}},methods:{keyChange:function(t){this.key=t.target.value},dataChange:function(t){this.data=t.target.value},getStorage:function(){var t=this.key;this.data;0===t.length?uni.showModal({title:"读取数据失败",content:"key 不能为空",showCancel:!1}):uni.getStorage({key:t,success:function(t){uni.showModal({title:"读取数据成功",content:"data: '"+t.data+"'",showCancel:!1})},fail:function(){uni.showModal({title:"读取数据失败",content:"找不到 key 对应的数据",showCancel:!1})}})},setStorage:function(){var t=this.key,e=this.data;0===t.length?uni.showModal({title:"保存数据失败",content:"key 不能为空",showCancel:!1}):uni.setStorage({key:t,data:e,success:function(t){uni.showModal({title:"存储数据成功",content:" ",showCancel:!1})},fail:function(){uni.showModal({title:"储存数据失败!",showCancel:!1})}})},clearStorage:function(){uni.clearStorageSync(),this.key="",this.data="",uni.showModal({title:"清除数据成功",content:" ",showCancel:!1})}}};e.default=a},8332:function(t,e,n){"use strict";n.r(e);var a=n("5b94"),i=n("0556");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("daa2");var u=n("2877"),l=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,"d8ec6320",null);e["default"]=l.exports},daa2:function(t,e,n){"use strict";var a=n("7586"),i=n.n(a);i.a},e694:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".btn-setstorage[data-v-d8ec6320]{background-color:#007aff;color:#fff}",""])}}]);