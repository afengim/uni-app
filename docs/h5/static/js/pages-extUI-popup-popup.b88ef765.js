(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-popup-popup"],{"348d":function(t,n,e){"use strict";var i=e("99f1"),o=e.n(i);o.a},"6af9":function(t,n,e){"use strict";var i=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("7615")),a=i(e("b9d7")),c=i(e("48f0")),r={components:{uniSection:o.default,uniPopup:a.default,uniIcons:c.default},data:function(){return{type:"",list:["1","2","3","4","5","6","7","8","9","10"],content:"顶部弹 popup",bottomData:[{text:"微信",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png",name:"wx"},{text:"支付宝",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png",name:"wx"},{text:"QQ",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png",name:"qq"},{text:"新浪",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png",name:"sina"},{text:"百度",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png",name:"copy"},{text:"其他",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-5.png",name:"more"}]}},methods:{togglePopup:function(t,n){var e=this;switch(t){case"top":this.content="顶部弹出 popup";break;case"bottom":this.content="底部弹出 popup";break;case"center":this.content="居中弹出 popup";break}this.type=t,this.$nextTick(function(){e.$refs["show"+n].open()})},cancel:function(t){this.$refs["show"+t].close()},change:function(t){console.log("是否打开:"+t.show)}},onBackPress:function(){this.$refs["showpopup"].close(),this.$refs["showtip"].close(),this.$refs["showimage"].close(),this.$refs["showshare"].close()}};n.default=r},"72f2":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'.uni-section[data-v-025aa1ea]{position:relative;\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\tmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\tfont-weight:400}\n\n.uni-section[data-v-025aa1ea]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n\n.uni-section__head[data-v-025aa1ea]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-025aa1ea]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-025aa1ea]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-025aa1ea]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-025aa1ea]{font-size:%?28?%;color:#333}.distraction[data-v-025aa1ea]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-025aa1ea]{font-size:%?24?%;color:#999}',""])},"730b":function(t,n,e){e("b041");n=t.exports=e("2350")(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t/* 头条小程序组件内不能引入字体 */\n\t\n\tuni-page-body[data-v-4e202f53]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-4e202f53]{font-size:14px;line-height:inherit}.example[data-v-4e202f53]{padding:0 15px 15px}.example-info[data-v-4e202f53]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-4e202f53]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n\t.example[data-v-4e202f53]{padding:0 15px}.example-info[data-v-4e202f53]{\n\t\tdisplay:block;\n\t\tpadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-4e202f53]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-4e202f53]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-4e202f53]{font-size:18px;color:#fff}.word-btn[data-v-4e202f53]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-4e202f53]{background-color:#4ca2ff}.example-body[data-v-4e202f53]{\n\t\tdisplay:block;\n\t\tpadding:5px 15px}.button[data-v-4e202f53]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:10px 0}.popup-content[data-v-4e202f53]{\n\t\tdisplay:block;\n\t\tbackground-color:#fff;padding:15px;font-size:14px}\n\t/* 提示窗口 */.uni-tip[data-v-4e202f53]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n\t\tpadding:15px;width:300px;background-color:#fff;border-radius:10px}.uni-tip-title[data-v-4e202f53]{margin-bottom:10px;text-align:center;font-weight:700;font-size:16px;color:#333}.uni-tip-content[data-v-4e202f53]{\n\t\t/* padding: 15px;\n */font-size:14px;color:#666}.uni-tip-group-button[data-v-4e202f53]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-top:20px}.uni-tip-button[data-v-4e202f53]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-size:14px;color:#3b4144}\n\t/* 插屏广告 */.uni-image[data-v-4e202f53]{position:relative}.image[data-v-4e202f53]{width:200px;height:200px}.uni-image-close[data-v-4e202f53]{margin-top:20px;text-align:center}\n\t/* 底部分享 */.uni-share[data-v-4e202f53]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n\t\tbackground-color:#fff}.uni-share-title[data-v-4e202f53]{line-height:%?60?%;font-size:%?24?%;padding:%?15?% 0;text-align:center}.uni-share-content[data-v-4e202f53]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:15px}.uni-share-content-box[data-v-4e202f53]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?200?%}.uni-share-content-image[data-v-4e202f53]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?60?%;height:%?60?%;overflow:hidden;border-radius:%?10?%}.content-image[data-v-4e202f53]{width:%?60?%;height:%?60?%}.uni-share-content-text[data-v-4e202f53]{font-size:%?26?%;color:#333;padding-top:5px;padding-bottom:10px}.uni-share-btn[data-v-4e202f53]{height:%?90?%;line-height:%?90?%;font-size:14px;border-top-color:#f5f5f5;border-top-width:1px;border-top-style:solid;text-align:center;color:#666}body.?%PAGE?%[data-v-4e202f53]{background-color:#efeff4}",""])},"73c2":function(t,n,e){"use strict";var i=e("adf4"),o=e.n(i);o.a},7615:function(t,n,e){"use strict";e.r(n);var i=e("ed6f"),o=e("f817");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("348d");var c,r=e("f0c5"),l=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"025aa1ea",null,!1,i["a"],c);n["default"]=l.exports},"99f1":function(t,n,e){var i=e("72f2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("cde1a974",i,!0,{sourceMap:!1,shadowMode:!1})},adf4:function(t,n,e){var i=e("730b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("64b8ea01",i,!0,{sourceMap:!1,shadowMode:!1})},d02a:function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-text",{staticClass:"example-info"},[t._v("弹出层组件用于弹出一个覆盖到页面上的内容，使用场景如：底部弹出分享弹窗、页面插屏广告等。")]),e("uni-section",{attrs:{title:"基本用法",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("v-uni-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.togglePopup("top","popup")}}},[t._v("顶部弹出 popup")]),e("v-uni-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.togglePopup("center","popup")}}},[t._v("中间弹出 popup")]),e("v-uni-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.togglePopup("bottom","popup")}}},[t._v("底部弹出 popup")])],1),e("uni-section",{attrs:{title:"自定义弹出层",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("v-uni-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.togglePopup("center","tip")}}},[t._v("提示框")]),e("v-uni-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.togglePopup("center","image")}}},[t._v("插屏广告")]),e("v-uni-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.togglePopup("bottom","share")}}},[t._v("底部分享")])],1),e("v-uni-view",{staticStyle:{height:"400px"}}),e("uni-popup",{ref:"showpopup",attrs:{type:t.type},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.change.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"popup-content"},[t._v(t._s(t.content))])],1),e("uni-popup",{ref:"showtip",attrs:{type:t.type,"mask-click":!1},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.change.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-tip"},[e("v-uni-text",{staticClass:"uni-tip-title"},[t._v("警告")]),e("v-uni-text",{staticClass:"uni-tip-content"},[t._v("这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。")]),e("v-uni-view",{staticClass:"uni-tip-group-button"},[e("v-uni-text",{staticClass:"uni-tip-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.cancel("tip")}}},[t._v("取消")]),e("v-uni-text",{staticClass:"uni-tip-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.cancel("tip")}}},[t._v("确定")])],1)],1)],1),e("uni-popup",{ref:"showimage",attrs:{type:t.type,"mask-click":!0},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.change.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-image"},[e("v-uni-image",{staticClass:"image",attrs:{src:"/static/uni.png",mode:"scaleToFill"}}),e("v-uni-view",{staticClass:"uni-image-close",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.cancel("image")}}},[e("uni-icons",{attrs:{type:"clear",color:"#fff",size:"30"}})],1)],1)],1),e("uni-popup",{ref:"showshare",attrs:{type:t.type},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.change.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-share"},[e("v-uni-text",{staticClass:"uni-share-title"},[t._v("分享到")]),e("v-uni-view",{staticClass:"uni-share-content"},t._l(t.bottomData,function(n,i){return e("v-uni-view",{key:i,staticClass:"uni-share-content-box"},[e("v-uni-view",{staticClass:"uni-share-content-image"},[e("v-uni-image",{staticClass:"content-image",attrs:{src:n.icon,mode:"widthFix"}})],1),e("v-uni-text",{staticClass:"uni-share-content-text"},[t._v(t._s(n.text))])],1)}),1),e("v-uni-text",{staticClass:"uni-share-btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.cancel("share")}}},[t._v("取消分享")])],1)],1)],1)},a=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},e8c3:function(t,n,e){"use strict";e.r(n);var i=e("d02a"),o=e("fb22");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("73c2");var c,r=e("f0c5"),l=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"4e202f53",null,!1,i["a"],c);n["default"]=l.exports},ebd9:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};n.default=i},ed6f:function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-section"},[t.type?e("v-uni-view",{staticClass:"uni-section__head"},[e("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),e("v-uni-view",{staticClass:"uni-section__content"},[e("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?e("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},a=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},f817:function(t,n,e){"use strict";e.r(n);var i=e("ebd9"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},fb22:function(t,n,e){"use strict";e.r(n);var i=e("6af9"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a}}]);