(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-steps-steps"],{"061b9":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-section",{attrs:{title:"基本用法",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-steps",{attrs:{options:t.list1,"active-color":"#007AFF",active:t.active}})],1),i("uni-section",{attrs:{title:"纵向排列",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-steps",{attrs:{options:t.list2,"active-color":"#007AFF",active:t.active,direction:"column"}})],1),i("v-uni-view",{staticClass:"word-btn",attrs:{"hover-class":"word-btn--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(e){e=t.$handleEvent(e),t.change(e)}}},[i("v-uni-text",{staticClass:"word-btn-white"},[t._v("改变状态")])],1)],1)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},"16e7":function(t,e,i){"use strict";i.r(e);var n=i("061b9"),o=i("be19");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("607b");var r=i("2877"),l=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"7b9ffb63",null);e["default"]=l.exports},3654:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-section[data-v-410dfc2e]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\tmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;border-bottom-color:#e5e5e5;border-bottom-style:solid;border-bottom-width:1px;font-weight:400}.uni-section__head[data-v-410dfc2e]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-410dfc2e]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-410dfc2e]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-410dfc2e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-410dfc2e]{font-size:%?28?%;color:#333}.distraction[data-v-410dfc2e]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-410dfc2e]{font-size:%?24?%;color:#999}",""])},"40cf":function(t,e,i){"use strict";i.r(e);var n=i("ba97"),o=i("8fc1");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("f717");var r=i("2877"),l=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"7a21fadc",null);e["default"]=l.exports},"48b3":function(t,e,i){var n=i("80e8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("09e47367",n,!0,{sourceMap:!1,shadowMode:!1})},"56b8":function(t,e,i){var n=i("3654");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("d052ce58",n,!0,{sourceMap:!1,shadowMode:!1})},"58b7":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var o=n(i("bbd2")),a={name:"UniSteps",components:{uniIcons:o.default},props:{direction:{type:String,default:"row"},activeColor:{type:String,default:"#1aad19"},deactiveColor:{type:String,default:"#999999"},active:{type:Number,default:0},options:{type:Array,default:function(){return[]}}},data:function(){return{}}};e.default=a},"5fd5":function(t,e,i){"use strict";var n=i("56b8"),o=i.n(n);o.a},"607b":function(t,e,i){"use strict";var n=i("48b3"),o=i.n(n);o.a},"80e8":function(t,e,i){i("b041");e=t.exports=i("2350")(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\n\nuni-page-body[data-v-7b9ffb63]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-7b9ffb63]{font-size:%?28?%;line-height:inherit}.example[data-v-7b9ffb63]{padding:0 %?30?% %?30?%}.example-info[data-v-7b9ffb63]{padding:%?30?%;color:#3b4144;background:#fff}.example-body[data-v-7b9ffb63]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:%?14?%;background-color:#fff}\n.example[data-v-7b9ffb63]{padding:0 %?30?%}.example-info[data-v-7b9ffb63]{\n\tdisplay:block;\n\tpadding:%?30?%;color:#3b4144;background-color:#fff;font-size:%?30?%}.example-info-text[data-v-7b9ffb63]{font-size:%?28?%;line-height:%?36?%}.example-body[data-v-7b9ffb63]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:%?30?%;background-color:#fff}.word-btn-white[data-v-7b9ffb63]{font-size:18px;color:#fff}.word-btn[data-v-7b9ffb63]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-7b9ffb63]{background-color:#4ca2ff}.status-btn[data-v-7b9ffb63]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?92?%;margin:%?30?%;background-color:#007aff}.example-body[data-v-7b9ffb63]{\n\tdisplay:block;\n\tpadding:15px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}body.?%PAGE?%[data-v-7b9ffb63]{background-color:#efeff4}",""])},"8b13":function(t,e,i){"use strict";i.r(e);var n=i("cc6e"),o=i("e10a");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("5fd5");var r=i("2877"),l=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"410dfc2e",null);e["default"]=l.exports},"8fc1":function(t,e,i){"use strict";i.r(e);var n=i("58b7"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},afe4:function(t,e,i){var n=i("b9ed");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("6494e7f8",n,!0,{sourceMap:!1,shadowMode:!1})},b9ed:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-steps[data-v-7a21fadc]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;width:100%;\n\t\n\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__row[data-v-7a21fadc]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__column[data-v-7a21fadc]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}.uni-steps__row-text-container[data-v-7a21fadc]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-steps__column-text-container[data-v-7a21fadc]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-steps__row-text[data-v-7a21fadc]{\n\tdisplay:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;\n\t-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__column-text[data-v-7a21fadc]{padding:6px 0;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#e5e5e5;\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__row-title[data-v-7a21fadc]{font-size:%?28?%;line-height:16px;text-align:center}.uni-steps__column-title[data-v-7a21fadc]{font-size:%?28?%;text-align:left;line-height:18px}.uni-steps__row-desc[data-v-7a21fadc]{font-size:12px;line-height:14px;text-align:center}.uni-steps__column-desc[data-v-7a21fadc]{font-size:%?24?%;text-align:left;line-height:18px}.uni-steps__row-container[data-v-7a21fadc]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-steps__column-container[data-v-7a21fadc]{\n\tdisplay:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;\n\twidth:30px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__row-line-item[data-v-7a21fadc]{\n\tdisplay:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:14px;line-height:14px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-steps__column-line-item[data-v-7a21fadc]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-steps__row-line[data-v-7a21fadc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:1px;background-color:#999}.uni-steps__column-line[data-v-7a21fadc]{width:1px;background-color:#999}.uni-steps__row-line--after[data-v-7a21fadc]{-webkit-transform:translateX(1px);transform:translateX(1px)}.uni-steps__column-line--after[data-v-7a21fadc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-transform:translateY(1px);transform:translateY(1px)}.uni-steps__row-line--before[data-v-7a21fadc]{-webkit-transform:translateX(-1px);transform:translateX(-1px)}.uni-steps__column-line--before[data-v-7a21fadc]{height:6px;-webkit-transform:translateY(-1px);transform:translateY(-1px)}.uni-steps__row-circle[data-v-7a21fadc]{width:5px;height:5px;border-radius:100px;background-color:#999;margin:0 3px}.uni-steps__column-circle[data-v-7a21fadc]{width:5px;height:5px;border-radius:100px;background-color:#999;margin:4px 0 5px 0}.uni-steps__row-check[data-v-7a21fadc]{margin:0 6px}.uni-steps__column-check[data-v-7a21fadc]{height:14px;line-height:14px;margin:2px 0}",""])},ba97:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-steps"},[i("v-uni-view",{class:["column"===t.direction?"uni-steps__column":"uni-steps__row"]},[i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-text-container":"uni-steps__row-text-container"]},t._l(t.options,function(e,n){return i("v-uni-view",{key:n,class:["column"===t.direction?"uni-steps__column-text":"uni-steps__row-text"]},[i("v-uni-text",{class:["column"===t.direction?"uni-steps__column-title":"uni-steps__row-title"],style:{color:n<=t.active?t.activeColor:t.deactiveColor}},[t._v(t._s(e.title))]),i("v-uni-text",{class:["column"===t.direction?"uni-steps__column-desc":"uni-steps__row-desc"],style:{color:n<=t.active?t.activeColor:t.deactiveColor}},[t._v(t._s(e.desc))])],1)}),1),i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-container":"uni-steps__row-container"]},t._l(t.options,function(e,n){return i("v-uni-view",{key:n,class:["column"===t.direction?"uni-steps__column-line-item":"uni-steps__row-line-item"]},[i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-line":"uni-steps__row-line","column"===t.direction?"uni-steps__column-line--before":"uni-steps__row-line--before"],style:{backgroundColor:n<=t.active&&0!==n?t.activeColor:0===n?"transparent":t.deactiveColor}}),n===t.active?i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-check":"uni-steps__row-check"]},[i("uni-icons",{attrs:{color:t.activeColor,type:"checkbox-filled",size:"14"}})],1):i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-circle":"uni-steps__row-circle"],style:{backgroundColor:n<t.active?t.activeColor:t.deactiveColor}}),i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-line":"uni-steps__row-line","column"===t.direction?"uni-steps__column-line--after":"uni-steps__row-line--after"],style:{backgroundColor:n<t.active&&n!==t.options.length-1?t.activeColor:n===t.options.length-1?"transparent":t.deactiveColor}})],1)}),1)],1)],1)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},be19:function(t,e,i){"use strict";i.r(e);var n=i("c920"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},c920:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("40cf")),a=n(i("8b13")),r={components:{uniSection:a.default,uniSteps:o.default},data:function(){return{active:1,list1:[{title:"事件一"},{title:"事件二"},{title:"事件三"},{title:"事件四"}],list2:[{title:"买家下单",desc:"2018-11-11"},{title:"卖家发货",desc:"2018-11-12"},{title:"买家签收",desc:"2018-11-13"},{title:"交易完成",desc:"2018-11-14"}]}},methods:{change:function(){this.active<this.list1.length-1?this.active+=1:this.active=0}}};e.default=r},cc6e:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section"},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-section__content"},[i("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?i("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},dc40:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},e10a:function(t,e,i){"use strict";i.r(e);var n=i("dc40"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},f717:function(t,e,i){"use strict";var n=i("afe4"),o=i.n(n);o.a}}]);