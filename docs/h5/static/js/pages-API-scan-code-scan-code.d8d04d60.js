(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-scan-code-scan-code"],{"042c":function(e,t,n){"use strict";var i;function o(){var e=0,t=plus.ios.import("PHPhotoLibrary"),n=t.authorizationStatus();return e=0===n?null:3==n?1:0,plus.ios.deleteObject(t),e}function s(){var e=0,t=plus.ios.import("AVCaptureDevice"),n=t.authorizationStatusForMediaType("vide");return e=0===n?null:3==n?1:0,plus.ios.deleteObject(t),e}function r(){var e=0,t=plus.ios.import("CLLocationManager"),n=t.locationServicesEnabled(),i=t.authorizationStatus();return e=n?0===i?null:3===i||4===i?1:0:2,plus.ios.deleteObject(t),e}function a(){var e=0,t=plus.ios.import("UIApplication"),n=t.sharedApplication(),i=0;if(n.currentUserNotificationSettings){var o=n.currentUserNotificationSettings();i=o.plusGetAttribute("types"),0==i?(e=0,console.log("推送权限没有开启")):(e=1,console.log("已经开启推送功能!")),plus.ios.deleteObject(o)}else i=n.enabledRemoteNotificationTypes(),0==i?(e=3,console.log("推送权限没有开启!")):(e=4,console.log("已经开启推送功能!"));return plus.ios.deleteObject(n),plus.ios.deleteObject(t),e}function u(){var e=0,t=plus.ios.import("CNContactStore"),n=t.authorizationStatusForEntityType(0);return e=0===n?null:3==n?1:0,plus.ios.deleteObject(t),e}function l(){var e=null,t=plus.ios.import("AVAudioSession"),n=t.sharedInstance(),i=n.recordPermission();return console.log("permissionStatus:"+i),e=1970168948===i?null:1735552628===i?1:0,plus.ios.deleteObject(t),e}function c(){var e=null,t=plus.ios.import("EKEventStore"),n=t.authorizationStatusForEntityType(0);return 3==n?(e=1,console.log("日历权限已经开启")):console.log("日历权限没有开启"),plus.ios.deleteObject(t),e}function p(){var e=null,t=plus.ios.import("EKEventStore"),n=t.authorizationStatusForEntityType(1);return 3==n?(e=1,console.log("备忘录权限已经开启")):console.log("备忘录权限没有开启"),plus.ios.deleteObject(t),e}function d(e){return new Promise((function(t,n){switch(e){case"push":t(a());break;case"location":t(r());break;case"record":t(l());break;case"camera":t(s());break;case"album":t(o());break;case"contact":t(u());break;case"calendar":t(c());break;case"memo":t(p());break;default:t(0);break}}))}function f(e){return new Promise((function(t,n){plus.android.requestPermissions([e],(function(e){for(var n=0,i=0;i<e.granted.length;i++){var o=e.granted[i];console.log("已获取的权限："+o),n=1}for(i=0;i<e.deniedPresent.length;i++){var s=e.deniedPresent[i];console.log("拒绝本次申请的权限："+s),n=0}for(i=0;i<e.deniedAlways.length;i++){var r=e.deniedAlways[i];console.log("永久拒绝申请的权限："+r),n=-1}t(n)}),(function(e){console.log("result error: "+e.message),t({code:e.code,message:e.message})}))}))}function v(){if(b.isIOS){var e=plus.ios.import("UIApplication"),t=e.sharedApplication(),n=plus.ios.import("NSURL"),i=n.URLWithString("app-settings:");t.openURL(i),plus.ios.deleteObject(i),plus.ios.deleteObject(n),plus.ios.deleteObject(t)}else{var o=plus.android.importClass("android.content.Intent"),s=plus.android.importClass("android.provider.Settings"),r=plus.android.importClass("android.net.Uri"),a=plus.android.runtimeMainActivity(),u=new o;u.setAction(s.ACTION_APPLICATION_DETAILS_SETTINGS);var l=r.fromParts("package",a.getPackageName(),null);u.setData(l),a.startActivity(u)}}var b={get isIOS(){return"boolean"===typeof i?i:i="ios"===uni.getSystemInfoSync().platform},requestIOS:d,requestAndroid:f,gotoAppSetting:v};e.exports=b},"05b5":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".scan-result[data-v-26234f27]{min-height:%?50?%;line-height:%?50?%}",""]),e.exports=t},"241b":function(e,t,n){"use strict";n.r(t);var i=n("aa5a"),o=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=o.a},"3bb0":function(e,t,n){"use strict";var i,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-title"},[e._v("扫码结果：")]),e.result?n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-view",{staticClass:"uni-cell"},[n("v-uni-view",{staticClass:"scan-result"},[e._v(e._s(e.result))])],1)],1):e._e(),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.scan.apply(void 0,arguments)}}},[e._v("扫一扫")])],1)],1)],1)},s=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}))},5664:function(e,t,n){"use strict";n.r(t);var i=n("3bb0"),o=n("241b");for(var s in o)"default"!==s&&function(e){n.d(t,e,(function(){return o[e]}))}(s);n("f594");var r,a=n("f0c5"),u=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"26234f27",null,!1,i["a"],r);t["default"]=u.exports},"8a9e":function(e,t,n){var i=n("05b5");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("fd1e0138",i,!0,{sourceMap:!1,shadowMode:!1})},aa5a:function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var o=i(n("3b8d")),s=(i(n("042c")),{data:function(){return{title:"scanCode",result:""}},methods:{scan:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.scanCode({success:function(e){t.result=e.result},fail:function(e){}});case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}});t.default=s},f594:function(e,t,n){"use strict";var i=n("8a9e"),o=n.n(i);o.a}}]);