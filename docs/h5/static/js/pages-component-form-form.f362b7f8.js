(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-form-form"],{"007d":function(e,r,t){"use strict";t.r(r);var n=t("6803"),i=t.n(n);for(var a in n)"default"!==a&&function(e){t.d(r,e,function(){return n[e]})}(a);r["default"]=i.a},"1c0d":function(e,r,t){"use strict";t("c5f6"),t("28a5"),t("3b2b"),t("7f7f"),e.exports={error:"",check:function(e,r){for(var t=0;t<r.length;t++){if(!r[t].checkType)return!0;if(!r[t].name)return!0;if(!r[t].errorMsg)return!0;if(!e[r[t].name])return this.error=r[t].errorMsg,!1;switch(r[t].checkType){case"string":var n=new RegExp("^.{"+r[t].checkRule+"}$");if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"int":n=new RegExp("^(-[1-9]|[1-9])[0-9]{"+r[t].checkRule+"}$");if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"between":if(!this.isNumber(e[r[t].name]))return this.error=r[t].errorMsg,!1;var i=r[t].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[r[t].name]>i[1]||e[r[t].name]<i[0])return this.error=r[t].errorMsg,!1;break;case"betweenD":n=/^-?[1-9][0-9]?$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;i=r[t].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[r[t].name]>i[1]||e[r[t].name]<i[0])return this.error=r[t].errorMsg,!1;break;case"betweenF":n=/^-?[0-9][0-9]?.+[0-9]+$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;i=r[t].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[r[t].name]>i[1]||e[r[t].name]<i[0])return this.error=r[t].errorMsg,!1;break;case"same":if(e[r[t].name]!=r[t].checkRule)return this.error=r[t].errorMsg,!1;break;case"notsame":if(e[r[t].name]==r[t].checkRule)return this.error=r[t].errorMsg,!1;break;case"email":n=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"phoneno":n=/^1[0-9]{10,10}$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"zipcode":n=/^[0-9]{6}$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"reg":n=new RegExp(r[t].checkRule);if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"in":if(-1==r[t].checkRule.indexOf(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"notnull":if(null==e[r[t].name]||e[r[t].name].length<1)return this.error=r[t].errorMsg,!1;break}}return!0},isNumber:function(e){var r=/^-?[1-9][0-9]?.?[0-9]*$/;return r.test(e)}}},6803:function(e,r,t){"use strict";var n=t("288e");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=n(t("f499")),a=t("1c0d"),s={data:function(){return{}},methods:{formSubmit:function(e){console.log("form发生了submit事件，携带数据为："+(0,i.default)(e.detail.value));var r=[{name:"nickname",checkType:"string",checkRule:"1,3",errorMsg:"姓名应为1-3个字符"},{name:"gender",checkType:"in",checkRule:"男,女",errorMsg:"请选择性别"},{name:"loves",checkType:"notnull",checkRule:"",errorMsg:"请选择爱好"}],t=e.detail.value,n=a.check(t,r);n?uni.showToast({title:"验证通过!",icon:"none"}):uni.showToast({title:a.error,icon:"none"})},formReset:function(e){console.log("清空数据")}}};r.default=s},"6aba":function(e,r,t){var n=t("b67a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=t("4f06").default;i("b0aba9bc",n,!0,{sourceMap:!1,shadowMode:!1})},a53d:function(e,r,t){"use strict";t.r(r);var n=t("edc0"),i=t("007d");for(var a in i)"default"!==a&&function(e){t.d(r,e,function(){return i[e]})}(a);t("d8d2");var s=t("2877"),u=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"715f3ed8",null);r["default"]=u.exports},b67a:function(e,r,t){r=e.exports=t("2350")(!1),r.push([e.i,".uni-form-item .title[data-v-715f3ed8]{padding:%?20?% 0}",""])},d8d2:function(e,r,t){"use strict";var n=t("6aba"),i=t.n(n);i.a},edc0:function(e,r,t){"use strict";var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",[t("page-head",{attrs:{title:"form"}}),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-form",{on:{submit:function(r){r=e.$handleEvent(r),e.formSubmit(r)},reset:function(r){r=e.$handleEvent(r),e.formReset(r)}}},[t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"title"},[e._v("姓名")]),t("v-uni-input",{staticClass:"uni-input",attrs:{name:"nickname",placeholder:"请输入姓名"}})],1),t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"title"},[e._v("性别")]),t("v-uni-radio-group",{attrs:{name:"gender"}},[t("v-uni-label",[t("v-uni-radio",{attrs:{value:"男"}}),t("v-uni-text",[e._v("男")])],1),t("v-uni-label",[t("v-uni-radio",{attrs:{value:"女"}}),t("v-uni-text",[e._v("女")])],1)],1)],1),t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"title"},[e._v("爱好")]),t("v-uni-checkbox-group",{attrs:{name:"loves"}},[t("v-uni-label",[t("v-uni-checkbox",{attrs:{value:"读书"}}),t("v-uni-text",[e._v("读书")])],1),t("v-uni-label",[t("v-uni-checkbox",{attrs:{value:"写字"}}),t("v-uni-text",[e._v("写字")])],1)],1)],1),t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"title"},[e._v("年龄")]),t("v-uni-slider",{attrs:{value:"20",name:"age","show-value":""}})],1),t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"title"},[e._v("保留选项")]),t("v-uni-view",[t("v-uni-switch",{attrs:{name:"switch"}})],1)],1),t("v-uni-view",{staticClass:"uni-btn-v"},[t("v-uni-button",{attrs:{"form-type":"submit"}},[e._v("Submit")]),t("v-uni-button",{attrs:{type:"default","form-type":"reset"}},[e._v("Reset")])],1)],1)],1)],1)},i=[];t.d(r,"a",function(){return n}),t.d(r,"b",function(){return i})}}]);