(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-scheme-scheme"],{"08d8":function(n,t,e){"use strict";e.r(t);var i=e("8bd3"),a=e("573b");for(var u in a)"default"!==u&&function(n){e.d(t,n,function(){return a[n]})}(u);e("aec1");var o=e("2877"),s=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"caa60c6e",null);t["default"]=s.exports},"2fec":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{}},methods:{openBrowser:function(n){plus.runtime.openURL(n)},openMarket:function(n){var t;t="Android"==plus.os.name?"market://details?id=io.dcloud.hellouniapp":"itms-apps://itunes.apple.com/cn/app/hello-uni-app/id1417078253","undefined"==typeof n?plus.runtime.openURL(t,function(n){console.log(n)}):"Android"==plus.os.name?plus.runtime.openURL(t,function(n){plus.nativeUI.alert("本机没有安装应用宝")},n):plus.nativeUI.alert("仅Android手机才支持应用宝")},openTaobao:function(n){plus.runtime.openURL(n,function(n){uni.showModal({content:"本机未检测到淘宝客户端，是否打开浏览器访问淘宝？",success:function(n){n.confirm&&plus.runtime.openURL("https://s.taobao.com/search?q=uni-app")}})})},openMap:function(){var n="";if("Android"==plus.os.name){var t=plus.runtime.isApplicationExist({pname:"com.baidu.BaiduMap",action:"baidumap://"}),e=plus.runtime.isApplicationExist({pname:"com.autonavi.minimap",action:"androidamap://"}),i="baidumap://map/marker?location=39.968789,116.347247&title=DCloud&src=Hello%20uni-app",a="androidamap://viewMap?sourceApplication=Hello%20uni-app&poiname=DCloud&lat=39.9631018208&lon=116.3406135236&dev=0";e&&t?plus.nativeUI.actionSheet({title:"选择地图应用",cancel:"取消",buttons:[{title:"百度地图"},{title:"高德地图"}]},function(n){switch(n.index){case 1:plus.runtime.openURL(i);break;case 2:plus.runtime.openURL(a);break}}):e?plus.runtime.openURL(a):t?plus.runtime.openURL(i):(n="geo:39.96310,116.340698?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82",plus.runtime.openURL(n))}else plus.nativeUI.actionSheet({title:"选择地图应用",cancel:"取消",buttons:[{title:"Apple地图"},{title:"百度地图"},{title:"高德地图"}]},function(t){switch(console.log("e.index: "+t.index),t.index){case 1:n="http://maps.apple.com/?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82&ll=39.96310,116.340698&spn=0.008766,0.019441";break;case 2:n="baidumap://map/marker?location=39.968789,116.347247&title=DCloud&src=Hello%20uni-app";break;case 3:n="iosamap://viewMap?sourceApplication=Hello%20uni-app&poiname=DCloud&lat=39.9631018208&lon=116.3406135236&dev=0";break;default:break}""!=n&&plus.runtime.openURL(n,function(n){plus.nativeUI.alert("本机未安装指定的地图应用")})})},openQQ:function(n){plus.runtime.openURL("mqqwpa://im/chat?chat_type="+n.detail.value.qqNumType+"&uin="+n.detail.value.qqNum,function(n){plus.nativeUI.alert("本机没有安装QQ，无法启动")})}}};t.default=i},"573b":function(n,t,e){"use strict";e.r(t);var i=e("2fec"),a=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);t["default"]=a.a},"8bd3":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("page-head",{attrs:{title:"通过scheme打开三方app示例"}}),e("v-uni-button",{staticClass:"button",on:{click:function(t){t=n.$handleEvent(t),n.openBrowser("https://uniapp.dcloud.io/h5")}}},[n._v("使用浏览器打开指定URL")]),e("v-uni-button",{staticClass:"button",on:{click:function(t){t=n.$handleEvent(t),n.openMarket()}}},[n._v("使用应用商店打开指定App")]),e("v-uni-button",{staticClass:"button",on:{click:function(t){t=n.$handleEvent(t),n.openMarket("com.tencent.android.qqdownloader")}}},[n._v("强制使用应用宝打开指定App")]),e("v-uni-button",{staticClass:"button",on:{click:function(t){t=n.$handleEvent(t),n.openTaobao("taobao://s.taobao.com/search?q=uni-app")}}},[n._v("打开淘宝搜索页面")]),e("v-uni-button",{staticClass:"button",on:{click:function(t){t=n.$handleEvent(t),n.openMap()}}},[n._v("打开地图并指定地点")]),e("v-uni-view",{staticClass:"uni-divider"},[e("v-uni-view",{staticClass:"uni-divider__content"},[n._v("打开QQ")]),e("v-uni-view",{staticClass:"uni-divider__line"})],1),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-form",{on:{submit:function(t){t=n.$handleEvent(t),n.openQQ(t)}}},[e("v-uni-view",[e("v-uni-view",{staticClass:"uni-title"},[n._v("请输入聊天对象QQ号：")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-input",{staticClass:"uni-input",attrs:{name:"qqNum",type:"number"}})],1)],1)],1),e("v-uni-view",[e("v-uni-view",{staticClass:"uni-title"},[n._v("请选择QQ号类型：")]),e("v-uni-radio-group",{staticClass:"uni-flex",attrs:{name:"qqNumType"}},[e("v-uni-label",[e("v-uni-radio",{attrs:{value:"wpa",checked:""}}),n._v("普通QQ号")],1),e("v-uni-label",[e("v-uni-radio",{attrs:{value:"crm"}}),n._v("营销QQ号(无需加好友直接聊天)")],1)],1)],1),e("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[e("v-uni-button",{staticClass:"button",attrs:{formType:"submit"}},[n._v("打开qq并到指定聊天界面")])],1)],1)],1)],1)},a=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return a})},aec1:function(n,t,e){"use strict";var i=e("ffd2"),a=e.n(i);a.a},d8fb:function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,".button[data-v-caa60c6e]{margin:%?30?%;color:#007aff}",""])},ffd2:function(n,t,e){var i=e("d8fb");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("7d58bf5e",i,!0,{sourceMap:!1,shadowMode:!1})}}]);