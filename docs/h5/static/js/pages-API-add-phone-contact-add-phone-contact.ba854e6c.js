(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-add-phone-contact-add-phone-contact"],{"3bdb":function(n,t,e){"use strict";var i,a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("page-head",{attrs:{title:n.title}}),e("v-uni-view",{staticClass:"uni-common-mt"},[e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[e("v-uni-view",{staticClass:"uni-label"},[n._v("名称")])],1),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入联系人名称",name:"name",value:n.name},on:{input:function(t){arguments[0]=t=n.$handleEvent(t),n.nameChange.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[e("v-uni-view",{staticClass:"uni-label"},[n._v("手机号")])],1),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入联系人手机号",name:"phone",value:n.phone},on:{input:function(t){arguments[0]=t=n.$handleEvent(t),n.phoneChange.apply(void 0,arguments)}}})],1)],1)],1),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{staticClass:"btn-setstorage",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.add.apply(void 0,arguments)}}},[n._v("添加联系人")])],1)],1)],1)],1)},u=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return u}),e.d(t,"a",function(){return i})},"57ab":function(n,t,e){"use strict";e.r(t);var i=e("3bdb"),a=e("dcfe");for(var u in a)"default"!==u&&function(n){e.d(t,n,function(){return a[n]})}(u);var s,l=e("f0c5"),c=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"194c4041",null,!1,i["a"],s);t["default"]=c.exports},dcfe:function(n,t,e){"use strict";e.r(t);var i=e("e1b4"),a=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);t["default"]=a.a},e1b4:function(n,t,e){"use strict";var i=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("96cf");var a=i(e("3b8d")),u={data:function(){return{title:"addPhoneContact",name:"",phone:""}},methods:{nameChange:function(n){this.name=n.detail.value},phoneChange:function(n){this.phone=n.detail.value},add:function(){var n=(0,a.default)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:uni.addPhoneContact({firstName:this.name,mobilePhoneNumber:this.phone,success:function(){uni.showModal({content:"已成功添加联系人！",showCancel:!1})},fail:function(){uni.showModal({content:"添加联系人失败！",showCancel:!1})}});case 1:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}()}};t.default=u}}]);