(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-new-page-new-vue-page-2"],{"65ae":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"uni-page-body[data-v-f9a85d5c]{display:-webkit-box;display:-webkit-flex;display:flex;min-height:100%}.new-page__text[data-v-f9a85d5c]{font-size:14px;color:#666}.root[data-v-f9a85d5c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.page-body[data-v-f9a85d5c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:50px}.new-page__text-box[data-v-f9a85d5c]{padding:20px}.new-page__color[data-v-f9a85d5c]{display:-webkit-box;display:-webkit-flex;display:flex;width:200px;height:100px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.new-page__color-text[data-v-f9a85d5c]{font-size:14px;color:#fff;line-height:30px;text-align:center}.new-page__button-item[data-v-f9a85d5c]{margin-top:15px;width:300px}",""])},8641:function(e,t,i){"use strict";var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("cebc")),o=i("2f62"),l={data:function(){return{}},computed:(0,n.default)({},(0,o.mapState)(["colorIndex","colorList"]),(0,o.mapGetters)(["currentColor"])),methods:(0,n.default)({},(0,o.mapMutations)(["setColorIndex"]),{emitMsg:function(){uni.$emit("postMsg",{msg:"From: Vue Page"})}})};t.default=l},"98fb":function(e,t,i){var a=i("65ae");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("7acfe7db",a,!0,{sourceMap:!1,shadowMode:!1})},af79:function(e,t,i){"use strict";i.r(t);var a=i("e722"),n=i("ba9f");for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);i("f919");var l=i("2877"),c=Object(l["a"])(n["default"],a["a"],a["b"],!1,null,"f9a85d5c",null);t["default"]=c.exports},ba9f:function(e,t,i){"use strict";i.r(t);var a=i("8641"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);t["default"]=n.a},e722:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"root"},[i("v-uni-view",{staticClass:"page-body"},[i("v-uni-view",{staticClass:"new-page__color",style:{backgroundColor:e.currentColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.setColorIndex(e.colorIndex>1?0:e.colorIndex+1)}}},[i("v-uni-text",{staticClass:"new-page__color-text"},[e._v("点击改变颜色")])],1),i("v-uni-view",{staticClass:"new-page__text-box"},[i("v-uni-text",{staticClass:"new-page__text"},[e._v("点击上方色块使用vuex在页面之间进行通讯")])],1),i("v-uni-view",{staticClass:"new-page__button"},[i("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.emitMsg.apply(void 0,arguments)}}},[e._v("向上一页面传递数据")])],1)],1)],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},f919:function(e,t,i){"use strict";var a=i("98fb"),n=i.n(a);n.a}}]);