(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-component-communication-component-communication"],{"00bb":function(t,e,n){"use strict";var a=n("46a78"),r=n.n(a);r.a},"1cb2d":function(t,e,n){"use strict";var a=n("329b"),r=n.n(a);r.a},"2aa5":function(t,e,n){"use strict";var a=n("9e67"),r=n.n(a);r.a},"312c":function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("e814")),u=a(n("ba10")),i={methods:{send:function(){var t=(0,r.default)(1e4*Math.random());u.default.$emit("cc",{msg:"From event bus -> "+t})}}};e.default=i},"329b":function(t,e,n){var a=n("b7a2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("5e477aa4",a,!0,{sourceMap:!1,shadowMode:!1})},3783:function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"sender-container"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.send.apply(void 0,arguments)}}},[t._v("点击发送消息")])],1)},u=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return a})},"3f79":function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"sender-container"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.send.apply(void 0,arguments)}}},[t._v("自定义EventBus")])],1)},u=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return a})},"46a78":function(t,e,n){var a=n("8d1f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("6c3f8500",a,!0,{sourceMap:!1,shadowMode:!1})},"4f0c":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".sender-container[data-v-398b7a70]{padding:20px}",""])},"711c":function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("ba10")),u={data:function(){return{msg:""}},created:function(){uni.$on("cc",this.recive),r.default.$on("cc",this.recive)},beforeDestroy:function(){uni.$off("cc",this.recive),r.default.$off("cc",this.recive)},methods:{recive:function(t){this.msg=t.msg}}};e.default=u},7950:function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("d1d6")),u=a(n("e884")),i=a(n("81a3")),c={components:{reciver:r.default,sender:u.default,senderBus:i.default},data:function(){return{}},methods:{}};e.default=c},"7e3a":function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("e814")),u={methods:{send:function(){var t=(0,r.default)(1e4*Math.random());uni.$emit("cc",{msg:"From uni.$emit -> "+t})}}};e.default=u},"7e6c":function(t,e,n){"use strict";n.r(e);var a=n("711c"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=r.a},"81a3":function(t,e,n){"use strict";n.r(e);var a=n("3f79"),r=n("a0d0");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n("1cb2d");var i,c=n("f0c5"),o=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"10edbe5a",null,!1,a["a"],i);e["default"]=o.exports},"8d1f":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".reciver[data-v-282f972a]{padding:40px 0;text-align:center;line-height:40px}",""])},"9e67":function(t,e,n){var a=n("4f0c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("3c331e62",a,!0,{sourceMap:!1,shadowMode:!1})},a0d0:function(t,e,n){"use strict";n.r(e);var a=n("312c"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=r.a},b0c53:function(t,e,n){"use strict";n.r(e);var a=n("7950"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=r.a},b4af:function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"reciver"},[t._v(t._s(""===t.msg?"等待发送":"收到消息：")+t._s(t.msg))])],1)},u=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return a})},b7a2:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".sender-container[data-v-10edbe5a]{padding:20px}",""])},b987:function(t,e,n){"use strict";n.r(e);var a=n("7e3a"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=r.a},ba10:function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("e143")),u=new r.default;e.default=u},d1d6:function(t,e,n){"use strict";n.r(e);var a=n("b4af"),r=n("7e6c");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n("00bb");var i,c=n("f0c5"),o=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"282f972a",null,!1,a["a"],i);e["default"]=o.exports},e395:function(t,e,n){"use strict";n.r(e);var a=n("e578"),r=n("b0c53");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);var i,c=n("f0c5"),o=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"946941b6",null,!1,a["a"],i);e["default"]=o.exports},e578:function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:"组件通讯示例"}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-btn-v"},[n("reciver"),n("sender"),n("sender-bus")],1)],1)],1)},u=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return a})},e884:function(t,e,n){"use strict";n.r(e);var a=n("3783"),r=n("b987");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n("2aa5");var i,c=n("f0c5"),o=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"398b7a70",null,!1,a["a"],i);e["default"]=o.exports}}]);