(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-combox-combox"],{"059d":function(t,e,i){i("b041");e=t.exports=i("2350")(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\n\nuni-page-body[data-v-84919c1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-84919c1a]{font-size:14px;line-height:inherit}.example[data-v-84919c1a]{padding:0 15px 15px}.example-info[data-v-84919c1a]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-84919c1a]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-84919c1a]{padding:0 15px}.example-info[data-v-84919c1a]{\n\tdisplay:block;\n\tpadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-84919c1a]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-84919c1a]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-84919c1a]{font-size:18px;color:#fff}.word-btn[data-v-84919c1a]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-84919c1a]{background-color:#4ca2ff}.example-body[data-v-84919c1a]{padding:0 12px;background-color:#fff}.result-box[data-v-84919c1a]{text-align:center;padding:20px 0;font-size:16px}body.?%PAGE?%[data-v-84919c1a]{background-color:#efeff4}",""])},"0c75":function(t,e,i){var n=i("632c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("1c30b776",n,!0,{sourceMap:!1,shadowMode:!1})},"2e1e":function(t,e,i){"use strict";i.r(e);var n=i("f7e5"),o=i("ad47");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("a1bc");var r,c=i("f0c5"),l=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"7b020934",null,!1,n["a"],r);e["default"]=l.exports},"4b39":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("2e1e")),a=n(i("7615")),r={components:{uniCombox:o.default,uniSection:a.default},data:function(){return{candidates:["北京","南京","东京","武汉","天津","上海","海口"],city:""}},methods:{}};e.default=r},"4cdc":function(t,e,i){"use strict";i.r(e);var n=i("4b39"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},"525e":function(t,e,i){"use strict";var n=i("0c75"),o=i.n(n);o.a},5296:function(t,e,i){"use strict";var n={"uni-section":i("7615").default,"uni-combox":i("2e1e").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-text",{staticClass:"example-info"},[t._v("组合框一般用于可以选择也可以输入的表单项")]),i("uni-section",{attrs:{title:"基本用法",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-combox",{attrs:{label:"所在城市",candidates:t.candidates,placeholder:"请选择所在城市"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}}),i("v-uni-view",{staticClass:"result-box"},[i("v-uni-text",[t._v("所选城市为："+t._s(t.city))])],1)],1),i("uni-section",{attrs:{title:"设置label宽度",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-combox",{attrs:{label:"所在城市",labelWidth:"150px",candidates:t.candidates,placeholder:"请选择所在城市"}})],1),i("uni-section",{attrs:{title:"设置无匹配项时的提示语",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-combox",{attrs:{label:"所在城市",emptyTips:"这里啥都没有",placeholder:"请选择所在城市"}})],1)],1)},a=[];i.d(e,"b",function(){return o}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){return n})},5533:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("48f0")),a={name:"uniCombox",components:{uniIcons:o.default},props:{label:{type:String,default:""},labelWidth:{type:String,default:"auto"},placeholder:{type:String,default:""},candidates:{type:Array,default:function(){return[]}},emptyTips:{type:String,default:"无匹配项"},value:{type:String,default:""}},data:function(){return{showSelector:!1,inputVal:""}},computed:{labelStyle:function(){return"auto"===this.labelWidth?{}:{width:this.labelWidth}},filterCandidates:function(){var t=this;return this.candidates.filter(function(e){return e.indexOf(t.inputVal)>-1})},filterCandidatesLength:function(){return this.filterCandidates.length}},watch:{value:{handler:function(t){this.inputVal=t},immediate:!0}},methods:{toggleSelector:function(){this.showSelector=!this.showSelector},onFocus:function(){var t=this;setTimeout(function(){t.showSelector=!0})},onBlur:function(){var t=this;setTimeout(function(){t.showSelector=!1})},onSelectorClick:function(t){this.inputVal=this.filterCandidates[t],this.showSelector=!1,this.$emit("input",this.inputVal)},onInput:function(){var t=this;setTimeout(function(){t.$emit("input",t.inputVal)})}}};e.default=a},"632c":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.uni-section[data-v-293b6220]{position:relative;\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\tmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\tfont-weight:400}\n\n.uni-section[data-v-293b6220]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n\n.uni-section__head[data-v-293b6220]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-293b6220]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-293b6220]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-293b6220]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-293b6220]{font-size:%?28?%;color:#333}.distraction[data-v-293b6220]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-293b6220]{font-size:%?24?%;color:#999}',""])},"756f":function(t,e,i){"use strict";var n,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-section__content"},[i("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?i("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},a=[];i.d(e,"b",function(){return o}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){return n})},7615:function(t,e,i){"use strict";i.r(e);var n=i("756f"),o=i("f817");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("525e");var r,c=i("f0c5"),l=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"293b6220",null,!1,n["a"],r);e["default"]=l.exports},"7d01":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.uni-combox[data-v-7b020934]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\theight:40px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center\n\t\t/* border-bottom: solid 1px #DDDDDD;\n */}.uni-combox__label[data-v-7b020934]{font-size:16px;padding-right:10px;color:#999}.uni-combox__input-box[data-v-7b020934]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-combox__input[data-v-7b020934]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:16px}.uni-combox__input-arrow[data-v-7b020934]{padding:10px}.uni-combox__selector[data-v-7b020934]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:absolute;top:42px;left:0;width:100%;max-height:200px;overflow-y:auto;padding:10px;background-color:#fff;border-radius:6px;box-shadow:#ddd 4px 4px 8px,#ddd -4px -4px 8px;z-index:2}.uni-combox__selector[data-v-7b020934]:before{content:"";position:absolute;width:0;height:0;border-bottom:solid 6px #fff;border-right:solid 6px transparent;border-left:solid 6px transparent;left:50%;top:-6px;margin-left:-6px}.uni-combox__selector-empty[data-v-7b020934],.uni-combox__selector-item[data-v-7b020934]{\n\t\tline-height:36px;font-size:14px;text-align:center;border-bottom:solid 1px #ddd}.uni-combox__selector-empty[data-v-7b020934]:last-child,.uni-combox__selector-item[data-v-7b020934]:last-child{border-bottom:none}',""])},a1bc:function(t,e,i){"use strict";var n=i("c2d1"),o=i.n(n);o.a},ad47:function(t,e,i){"use strict";i.r(e);var n=i("5533"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},c2d1:function(t,e,i){var n=i("7d01");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("a651a478",n,!0,{sourceMap:!1,shadowMode:!1})},db03:function(t,e,i){var n=i("059d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("71609df8",n,!0,{sourceMap:!1,shadowMode:!1})},e5ab:function(t,e,i){"use strict";var n=i("db03"),o=i.n(n);o.a},e5bc:function(t,e,i){"use strict";i.r(e);var n=i("5296"),o=i("4cdc");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("e5ab");var r,c=i("f0c5"),l=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"84919c1a",null,!1,n["a"],r);e["default"]=l.exports},ebd9:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},f7e5:function(t,e,i){"use strict";var n={"uni-icons":i("48f0").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-combox",attrs:{nvue:!0}},[t.label?i("v-uni-view",{staticClass:"uni-combox__label",style:t.labelStyle},[i("v-uni-text",[t._v(t._s(t.label))])],1):t._e(),i("v-uni-view",{staticClass:"uni-combox__input-box"},[i("v-uni-input",{staticClass:"uni-combox__input",attrs:{type:"text",placeholder:t.placeholder},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)}},model:{value:t.inputVal,callback:function(e){t.inputVal=e},expression:"inputVal"}}),i("uni-icons",{staticClass:"uni-combox__input-arrow",attrs:{type:"arrowdown",size:"14"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSelector.apply(void 0,arguments)}}}),t.showSelector?i("v-uni-view",{staticClass:"uni-combox__selector"},[0===t.filterCandidatesLength?i("v-uni-view",{staticClass:"uni-combox__selector-empty"},[i("v-uni-text",[t._v(t._s(t.emptyTips))])],1):t._e(),t._l(t.filterCandidates,function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-combox__selector-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSelectorClick(n)}}},[i("v-uni-text",[t._v(t._s(e))])],1)})],2):t._e()],1)],1)},a=[];i.d(e,"b",function(){return o}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){return n})},f817:function(t,e,i){"use strict";i.r(e);var n=i("ebd9"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a}}]);