(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-datachecker-datachecker"],{"07d2":function(e,r,t){"use strict";var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",[t("page-head",{attrs:{title:e.title}}),t("v-uni-view",{staticClass:"uni-padding-wrap"},[t("v-uni-form",{on:{submit:function(r){r=e.$handleEvent(r),e.formSubmit(r)},reset:function(r){r=e.$handleEvent(r),e.formReset(r)}}},[t("v-uni-view",[t("v-uni-view",{staticClass:"uni-title"},[e._v("姓名")]),t("v-uni-view",{staticClass:"uni-list"},[t("v-uni-view",{staticClass:"uni-list-cell"},[t("v-uni-input",{staticClass:"uni-input",attrs:{name:"nickname",placeholder:"请填写您的昵称"}})],1)],1)],1),t("v-uni-view",[t("v-uni-view",{staticClass:"uni-title"},[e._v("性别")]),t("v-uni-radio-group",{staticClass:"uni-flex",attrs:{name:"gender"}},[t("v-uni-label",[t("v-uni-radio",{attrs:{value:"男"}}),e._v("男")],1),t("v-uni-label",[t("v-uni-radio",{attrs:{value:"女"}}),e._v("女")],1)],1)],1),t("v-uni-view",[t("v-uni-view",{staticClass:"uni-title"},[e._v("爱好")]),t("v-uni-checkbox-group",{staticClass:"uni-flex",attrs:{name:"loves"}},[t("v-uni-label",[t("v-uni-checkbox",{attrs:{value:"读书"}}),e._v("读书")],1),t("v-uni-label",[t("v-uni-checkbox",{attrs:{value:"写字"}}),e._v("写字")],1)],1)],1),t("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[t("v-uni-button",{staticClass:"btn-submit",attrs:{formType:"submit",type:"primary"}},[e._v("Submit")]),t("v-uni-button",{attrs:{type:"default",formType:"reset"}},[e._v("Reset")])],1)],1)],1)],1)},i=[];t.d(r,"a",function(){return n}),t.d(r,"b",function(){return i})},"1c0d":function(e,r,t){"use strict";t("c5f6"),t("28a5"),t("3b2b"),t("7f7f"),e.exports={error:"",check:function(e,r){for(var t=0;t<r.length;t++){if(!r[t].checkType)return!0;if(!r[t].name)return!0;if(!r[t].errorMsg)return!0;if(!e[r[t].name])return this.error=r[t].errorMsg,!1;switch(r[t].checkType){case"string":var n=new RegExp("^.{"+r[t].checkRule+"}$");if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"int":n=new RegExp("^(-[1-9]|[1-9])[0-9]{"+r[t].checkRule+"}$");if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"between":if(!this.isNumber(e[r[t].name]))return this.error=r[t].errorMsg,!1;var i=r[t].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[r[t].name]>i[1]||e[r[t].name]<i[0])return this.error=r[t].errorMsg,!1;break;case"betweenD":n=/^-?[1-9][0-9]?$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;i=r[t].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[r[t].name]>i[1]||e[r[t].name]<i[0])return this.error=r[t].errorMsg,!1;break;case"betweenF":n=/^-?[0-9][0-9]?.+[0-9]+$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;i=r[t].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[r[t].name]>i[1]||e[r[t].name]<i[0])return this.error=r[t].errorMsg,!1;break;case"same":if(e[r[t].name]!=r[t].checkRule)return this.error=r[t].errorMsg,!1;break;case"notsame":if(e[r[t].name]==r[t].checkRule)return this.error=r[t].errorMsg,!1;break;case"email":n=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"phoneno":n=/^1[0-9]{10,10}$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"zipcode":n=/^[0-9]{6}$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"reg":n=new RegExp(r[t].checkRule);if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"in":if(-1==r[t].checkRule.indexOf(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"notnull":if(null==e[r[t].name]||e[r[t].name].length<1)return this.error=r[t].errorMsg,!1;break}}return!0},isNumber:function(e){var r=/^-?[1-9][0-9]?.?[0-9]*$/;return r.test(e)}}},"8fc7":function(e,r,t){"use strict";t.r(r);var n=t("fb67"),i=t.n(n);for(var s in n)"default"!==s&&function(e){t.d(r,e,function(){return n[e]})}(s);r["default"]=i.a},f424:function(e,r,t){"use strict";t.r(r);var n=t("07d2"),i=t("8fc7");for(var s in i)"default"!==s&&function(e){t.d(r,e,function(){return i[e]})}(s);var a=t("2877"),u=Object(a["a"])(i["default"],n["a"],n["b"],!1,null,"3116b726",null);r["default"]=u.exports},fb67:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=t("1c0d"),i={data:function(){return{title:"表单验证"}},methods:{formSubmit:function(e){var r=[{name:"nickname",checkType:"string",checkRule:"1,3",errorMsg:"姓名应为1-3个字符"},{name:"gender",checkType:"in",checkRule:"男,女",errorMsg:"请选择性别"},{name:"loves",checkType:"notnull",checkRule:"",errorMsg:"请选择爱好"}],t=e.detail.value,i=n.check(t,r);i?uni.showToast({title:"验证通过!",icon:"none"}):uni.showToast({title:n.error,icon:"none"})},formReset:function(e){console.log("清空数据"),this.chosen=""}}};r.default=i}}]);