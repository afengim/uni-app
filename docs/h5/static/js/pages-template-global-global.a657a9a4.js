(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-global-global"],{"24fd":function(t,e,n){"use strict";var a=n("cc5e"),i=n.n(a);i.a},"64f0":function(t,e,n){"use strict";n.r(e);var a=n("8b1b"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a},"660c":function(t,e,n){"use strict";n.r(e);var a=n("e1ae"),i=n("64f0");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("24fd");var u=n("2877"),o=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,"44dd362e",null);e["default"]=o.exports},8374:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".button[data-v-44dd362e]{margin:%?30?%;color:#007aff}.text[data-v-44dd362e]{margin-left:%?30?%}",""])},"8b1b":function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("cebc")),s=n("2f62"),u={data:function(){return{gd:{}}},computed:(0,i.default)({},(0,s.mapState)(["testvuex"])),methods:(0,i.default)({},(0,s.mapMutations)(["setTestTrue"]),(0,s.mapMutations)(["setTestFalse"]),{setGD:function(){getApp().globalData.test="123"},setVUEX:function(t){t?this.setTestTrue(this.$store.state):this.setTestFalse(this.$store.state)}}),onShow:function(){this.gd=getApp().globalData}};e.default=u},cc5e:function(t,e,n){var a=n("8374");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("ba9a6d9e",a,!0,{sourceMap:!1,shadowMode:!1})},e1ae:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"pa"},[n("v-uni-view",{staticClass:"uni-divider"},[n("v-uni-view",{staticClass:"uni-divider__content"},[t._v("globalData")]),n("v-uni-view",{staticClass:"uni-divider__line"})],1),n("v-uni-text",{staticClass:"text"},[t._v("globalData中text的值: "+t._s(t.gd.test))]),n("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setGD()}}},[t._v("修改上述值为123")]),n("v-uni-view",{staticClass:"uni-divider"},[n("v-uni-view",{staticClass:"uni-divider__content"},[t._v("vuex")]),n("v-uni-view",{staticClass:"uni-divider__line"})],1),n("v-uni-text",{staticClass:"text"},[t._v("vuex中hasLogin的值: "+t._s(t.testvuex))]),n("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setVUEX(!0)}}},[t._v("修改上述值为true")]),n("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setVUEX(!1)}}},[t._v("修改上述值为false")])],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})}}]);