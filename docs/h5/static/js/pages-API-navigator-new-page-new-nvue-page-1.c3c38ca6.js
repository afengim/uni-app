(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-new-page-new-nvue-page-1"],{"0744":function(t,e,n){var i=n("8cd4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("49275f2b",i,!0,{sourceMap:!1,shadowMode:!1})},"881c":function(t,e,n){"use strict";n.r(e);var i=n("f5f9"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"8cd4":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".new-page__text[data-v-2781394c]{font-size:14px;color:#666}.root[data-v-2781394c]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.page-body[data-v-2781394c]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding-top:50px}.new-page__text-box[data-v-2781394c]{padding:20px}.new-page__color[data-v-2781394c]{width:200px;height:100px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.new-page__color-text[data-v-2781394c]{font-size:14px;color:#fff;line-height:30px;text-align:center}.new-page__button-item[data-v-2781394c]{margin-top:15px;width:300px}",""])},"8f17":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"root"},[n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"new-page__color",style:{backgroundColor:t.currentColor},on:{click:function(e){e=t.$handleEvent(e),t.setColorIndex(t.colorIndex>1?0:t.colorIndex+1)}}},[n("v-uni-text",{staticClass:"new-page__color-text"},[t._v("点击改变颜色")])],1),n("v-uni-view",{staticClass:"new-page__text-box"},[n("v-uni-text",{staticClass:"new-page__text"},[t._v("点击上方色块使用vuex在页面之间进行通讯")])],1),n("v-uni-view",{staticClass:"new-page__button"},[n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(e){e=t.$handleEvent(e),t.navToNvue(e)}}},[t._v("跳转NVUE页面")]),n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(e){e=t.$handleEvent(e),t.navToVue(e)}}},[t._v("跳转VUE页面")])],1)],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},c3a8:function(t,e,n){"use strict";n.r(e);var i=n("8f17"),a=n("881c");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("d427");var c=n("2877"),r=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,"2781394c",null);e["default"]=r.exports},d427:function(t,e,n){"use strict";var i=n("0744"),a=n.n(i);a.a},f5f9:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("cebc")),o=n("2f62"),c={data:function(){return{}},computed:(0,a.default)({},(0,o.mapState)(["colorIndex","colorList"]),(0,o.mapGetters)(["currentColor"])),methods:(0,a.default)({},(0,o.mapMutations)(["setColorIndex"]),{navToNvue:function(){uni.navigateTo({url:"new-nvue-page-2"})},navToVue:function(){uni.navigateTo({url:"new-vue-page-2"})}})};e.default=c}}]);