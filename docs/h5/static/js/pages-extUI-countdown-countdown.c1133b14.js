(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-countdown-countdown"],{"050a":function(t,e,n){"use strict";var o=n("baf6"),i=n.n(o);i.a},"072c":function(t,e,n){"use strict";n.r(e);var o=n("f414"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},"1dbc":function(t,e,n){n("b041");e=t.exports=n("2350")(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\n\nuni-page-body[data-v-1a38fb1f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-1a38fb1f]{font-size:14px;line-height:inherit}.example[data-v-1a38fb1f]{padding:0 15px 15px}.example-info[data-v-1a38fb1f]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-1a38fb1f]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-1a38fb1f]{padding:0 15px}.example-info[data-v-1a38fb1f]{\n\tdisplay:block;\n\tpadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-1a38fb1f]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-1a38fb1f]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-1a38fb1f]{font-size:18px;color:#fff}.word-btn[data-v-1a38fb1f]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-1a38fb1f]{background-color:#4ca2ff}.example-body[data-v-1a38fb1f]{padding:10px}body.?%PAGE?%[data-v-1a38fb1f]{background-color:#efeff4}",""])},"348d":function(t,e,n){"use strict";var o=n("99f1"),i=n.n(o);i.a},"47fa":function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-text",{staticClass:"example-info"},[t._v("倒计时组件主要用于促销商品剩余时间，发送短信验证等待时间等场景")]),n("uni-section",{attrs:{title:"一般用法",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-countdown",{attrs:{day:1,hour:1,minute:12,second:40}})],1),n("uni-section",{attrs:{title:"不显示天数",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-countdown",{attrs:{"show-day":!1,hour:12,minute:12,second:12}})],1),n("uni-section",{attrs:{title:"文字分隔符",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-countdown",{attrs:{minute:30,second:0,"show-colon":!1}})],1),n("uni-section",{attrs:{title:"修改颜色",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-countdown",{attrs:{day:1,hour:2,minute:30,second:0,color:"#FFFFFF","background-color":"#007AFF","border-color":"#007AFF"}})],1),n("uni-section",{attrs:{title:"倒计时回调事件",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-countdown",{attrs:{"show-day":!1,second:10},on:{timeup:function(e){arguments[0]=e=t.$handleEvent(e),t.timeup.apply(void 0,arguments)}}})],1),n("uni-section",{attrs:{title:"动态赋值",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-countdown",{attrs:{"show-day":!1,hour:t.testHour,minute:t.testMinute,second:t.testSecond}})],1)],1)},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return o})},5902:function(t,e,n){"use strict";n.r(e);var o=n("ded8"),i=n("90a4");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("050a");var r,c=n("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"ee9a348c",null,!1,o["a"],r);e["default"]=s.exports},"72f2":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'.uni-section[data-v-025aa1ea]{position:relative;\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\tmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\tfont-weight:400}\n\n.uni-section[data-v-025aa1ea]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n\n.uni-section__head[data-v-025aa1ea]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-025aa1ea]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-025aa1ea]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-025aa1ea]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-025aa1ea]{font-size:%?28?%;color:#333}.distraction[data-v-025aa1ea]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-025aa1ea]{font-size:%?24?%;color:#999}',""])},7615:function(t,e,n){"use strict";n.r(e);var o=n("ed6f"),i=n("f817");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("348d");var r,c=n("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"025aa1ea",null,!1,o["a"],r);e["default"]=s.exports},"89f2":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-countdown[data-v-ee9a348c]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;padding:%?2?% 0}.uni-countdown__splitor[data-v-ee9a348c]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;line-height:%?48?%;padding:%?5?%;font-size:%?24?%}.uni-countdown__number[data-v-ee9a348c]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?52?%;height:%?48?%;line-height:%?48?%;margin:%?5?%;text-align:center;font-size:%?24?%}",""])},"90a4":function(t,e,n){"use strict";n.r(e);var o=n("9c98"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},"996e":function(t,e,n){"use strict";n.r(e);var o=n("47fa"),i=n("072c");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("d490");var r,c=n("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"1a38fb1f",null,!1,o["a"],r);e["default"]=s.exports},"99f1":function(t,e,n){var o=n("72f2");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("cde1a974",o,!0,{sourceMap:!1,shadowMode:!1})},"9c98":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var o={name:"UniCountdown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String,default:"#000000"},splitorColor:{type:String,default:"#000000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0}},data:function(){return{timer:null,syncFlag:!1,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},watch:{day:function(t){this.changeFlag()},hour:function(t){this.changeFlag()},minute:function(t){this.changeFlag()},second:function(t){this.changeFlag()}},created:function(t){this.startData()},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,e,n,o){return 60*t*60*24+60*e*60+60*n+o},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,e=0,n=0,o=0,i=0;t>0?(e=Math.floor(t/86400),n=Math.floor(t/3600)-24*e,o=Math.floor(t/60)-24*e*60-60*n,i=Math.floor(t)-24*e*60*60-60*n*60-60*o):this.timeUp(),e<10&&(e="0"+e),n<10&&(n="0"+n),o<10&&(o="0"+o),i<10&&(i="0"+i),this.d=e,this.h=n,this.i=o,this.s=i},startData:function(){var t=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.seconds<=0||(this.countDown(),this.timer=setInterval(function(){t.seconds--,t.seconds<0?t.timeUp():t.countDown()},1e3))},changeFlag:function(){this.syncFlag||(this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.startData(),this.syncFlag=!0)}}};e.default=o},baf6:function(t,e,n){var o=n("89f2");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("7f65f3ec",o,!0,{sourceMap:!1,shadowMode:!1})},d41d:function(t,e,n){var o=n("1dbc");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("2aa46d81",o,!0,{sourceMap:!1,shadowMode:!1})},d490:function(t,e,n){"use strict";var o=n("d41d"),i=n.n(o);i.a},ded8:function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-countdown"},[t.showDay?n("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.d))]):t._e(),t.showDay?n("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("天")]):t._e(),n("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.h))]),n("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"时"))]),n("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.i))]),n("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"分"))]),n("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.s))]),t.showColon?t._e():n("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("秒")])],1)},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return o})},ebd9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=o},ed6f:function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-section"},[t.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),n("v-uni-view",{staticClass:"uni-section__content"},[n("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?n("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return o})},f414:function(t,e,n){"use strict";var o=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("5902")),a=o(n("7615")),r={components:{uniCountdown:i.default,uniSection:a.default},data:function(){return{testHour:0,testMinute:0,testSecond:0}},created:function(){var t=this;setTimeout(function(){t.testHour=1,t.testMinute=1,t.testSecond=0},2e3)},methods:{timeup:function(){uni.showToast({title:"时间到"})}}};e.default=r},f817:function(t,e,n){"use strict";n.r(e);var o=n("ebd9"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a}}]);