(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-list-list"],{"06ed":function(t,e,n){"use strict";n.r(e);var i=n("4ea0"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"4ea0":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("7615")),a=i(n("b287")),r=i(n("fd66")),c={components:{uniSection:o.default,uniList:a.default,uniListItem:r.default},data:function(){return{extraIcon1:{color:"#007aff",size:"22",type:"gear-filled"},extraIcon2:{color:"#4cd964",size:"22",type:"image"}}},methods:{switchChange:function(t){uni.showToast({title:"change:"+t.value,icon:"none"})}}};e.default=c},5038:function(t,e,n){var i=n("a703");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("00c5e21a",i,!0,{sourceMap:!1,shadowMode:!1})},5096:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-text",{staticClass:"example-info"},[t._v("列表组件可以在其中使用图标、略缩图或放置任何你想放的元素，使用场景如：导航菜单、列表、设置中心排版等")]),n("uni-section",{attrs:{title:"基础用法",type:"line"}}),n("uni-list",[n("uni-list-item",{attrs:{"show-arrow":!1,title:"列表文字"}}),n("uni-list-item",{attrs:{"show-arrow":!1,title:"列表文字",note:"列表描述信息"}}),n("uni-list-item",{attrs:{disabled:!0,"show-arrow":!1,title:"列表禁用状态"}})],1),n("uni-section",{attrs:{title:"菜单列表",type:"line"}}),n("uni-list",[n("uni-list-item",{attrs:{title:"列表右侧带箭头",rightText:"右侧文字"}}),n("uni-list-item",{attrs:{"show-badge":!0,title:"列表右侧带箭头 + 角标","badge-text":"12"}}),n("uni-list-item",{attrs:{title:"列表左侧带略缩图",thumb:"https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"}}),n("uni-list-item",{attrs:{"show-extra-icon":!0,"extra-icon":t.extraIcon1,title:"列表左侧带扩展图标"}}),n("uni-list-item",{attrs:{"show-extra-icon":!0,"extra-icon":t.extraIcon1,"show-switch":!0,title:"列表右侧带 switch"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange.apply(void 0,arguments)}}}),n("uni-list-item",{attrs:{disabled:!0,"show-extra-icon":!0,"extra-icon":t.extraIcon2,"show-switch":!0,"switch-checked":!0,title:"禁用状态"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange.apply(void 0,arguments)}}})],1)],1)},a=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return i})},"71c5":function(t,e,n){"use strict";var i=n("5038"),o=n.n(i);o.a},a703:function(t,e,n){n("b041");e=t.exports=n("2350")(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\n\nuni-page-body[data-v-83f4cee4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-83f4cee4]{font-size:14px;line-height:inherit}.example[data-v-83f4cee4]{padding:0 15px 15px}.example-info[data-v-83f4cee4]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-83f4cee4]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-83f4cee4]{padding:0 15px}.example-info[data-v-83f4cee4]{\n\tdisplay:block;\n\tpadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-83f4cee4]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-83f4cee4]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-83f4cee4]{font-size:18px;color:#fff}.word-btn[data-v-83f4cee4]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-83f4cee4]{background-color:#4ca2ff}body.?%PAGE?%[data-v-83f4cee4]{background-color:#efeff4}",""])},a968:function(t,e,n){"use strict";n.r(e);var i=n("5096"),o=n("06ed");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("71c5");var r,c=n("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"83f4cee4",null,!1,i["a"],r);e["default"]=l.exports}}]);