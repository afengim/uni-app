(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-label-label"],{"47dc":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{title:"label",checkboxItems:[{name:"USA",value:"美国"},{name:"CHN",value:"中国",checked:"true"}],radioItems:[{name:"USA",value:"美国"},{name:"CHN",value:"中国",checked:"true"}],hidden:!1}},methods:{checkboxChange:function(e){var t=e.target.value;console.log(t)},radioChange:function(e){var t=e.target.value;console.log(t)}}};t.default=n},"53e5":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".uni-list-cell[data-v-35777a03]{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.uni-list .label-3[data-v-35777a03]{padding:0}.label-2-text[data-v-35777a03]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}",""])},7819:function(e,t,i){"use strict";i.r(t);var n=i("f9ea9"),a=i("f949");for(var l in a)"default"!==l&&function(e){i.d(t,e,function(){return a[e]})}(l);i("7f95");var c=i("2877"),u=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,"35777a03",null);t["default"]=u.exports},"7f95":function(e,t,i){"use strict";var n=i("d0cb"),a=i.n(n);a.a},d0cb:function(e,t,i){var n=i("53e5");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("3fb82868",n,!0,{sourceMap:!1,shadowMode:!1})},f949:function(e,t,i){"use strict";i.r(t);var n=i("47dc"),a=i.n(n);for(var l in n)"default"!==l&&function(e){i.d(t,e,function(){return n[e]})}(l);t["default"]=a.a},f9ea9:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:e.title}}),i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"title"},[e._v("表单组件在label内")]),i("v-uni-checkbox-group",{staticClass:"uni-list",on:{change:function(t){t=e.$handleEvent(t),e.checkboxChange(t)}}},e._l(e.checkboxItems,function(t){return i("v-uni-label",{key:t.name,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",[i("v-uni-checkbox",{attrs:{value:t.name,checked:t.checked}})],1),i("v-uni-view",[e._v(e._s(t.value))])],1)}),1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"title"},[e._v("label用for标识表单组件")]),i("v-uni-radio-group",{staticClass:"uni-list",on:{change:function(t){t=e.$handleEvent(t),e.radioChange(t)}}},e._l(e.radioItems,function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",[i("v-uni-radio",{attrs:{id:t.name,value:t.name,checked:t.checked}})],1),i("v-uni-label",{staticClass:"label-2-text",attrs:{for:t.name}},[i("v-uni-text",[e._v(e._s(t.value))])],1)],1)}),1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"title"},[e._v("label内有多个时选中第一个")]),i("v-uni-checkbox-group",{staticClass:"uni-list",on:{change:function(t){t=e.$handleEvent(t),e.checkboxChange(t)}}},[i("v-uni-label",{staticClass:"label-3"},[i("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-checkbox",{staticClass:"checkbox-3"},[e._v("选项一")])],1),i("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-checkbox",{staticClass:"checkbox-3"},[e._v("选项二")])],1),i("v-uni-view",{staticClass:"uni-link uni-center",staticStyle:{"margin-top":"20upx"}},[e._v("点击该label下的文字默认选中第一个checkbox")])],1)],1)],1)],1)],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})}}]);