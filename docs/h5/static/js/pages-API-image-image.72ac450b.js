(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-image-image"],{"042c":function(e,t,i){"use strict";var n,s=i("288e"),a=s(i("795b"));function o(){var e=0,t=plus.ios.import("PHPhotoLibrary"),i=t.authorizationStatus();return e=0===i?null:3==i?1:0,plus.ios.deleteObject(t),e}function u(){var e=0,t=plus.ios.import("AVCaptureDevice"),i=t.authorizationStatusForMediaType("vide");return e=0===i?null:3==i?1:0,plus.ios.deleteObject(t),e}function r(){var e=0,t=plus.ios.import("CLLocationManager"),i=t.locationServicesEnabled(),n=t.authorizationStatus();return e=i?0===n?null:3===n||4===n?1:0:2,plus.ios.deleteObject(t),e}function l(){var e=0,t=plus.ios.import("UIApplication"),i=t.sharedApplication(),n=0;if(i.currentUserNotificationSettings){var s=i.currentUserNotificationSettings();n=s.plusGetAttribute("types"),0==n?(e=0,console.log("推送权限没有开启")):(e=1,console.log("已经开启推送功能!")),plus.ios.deleteObject(s)}else n=i.enabledRemoteNotificationTypes(),0==n?(e=3,console.log("推送权限没有开启!")):(e=4,console.log("已经开启推送功能!"));return plus.ios.deleteObject(i),plus.ios.deleteObject(t),e}function c(){var e=0,t=plus.ios.import("CNContactStore"),i=t.authorizationStatusForEntityType(0);return e=0===i?null:3==i?1:0,plus.ios.deleteObject(t),e}function p(){var e=null,t=plus.ios.import("AVAudioSession"),i=t.sharedInstance(),n=i.recordPermission();return console.log("permissionStatus:"+n),e=1970168948===n?null:1735552628===n?1:0,plus.ios.deleteObject(t),e}function d(){var e=null,t=plus.ios.import("EKEventStore"),i=t.authorizationStatusForEntityType(0);return 3==i?(e=1,console.log("日历权限已经开启")):console.log("日历权限没有开启"),plus.ios.deleteObject(t),e}function v(){var e=null,t=plus.ios.import("EKEventStore"),i=t.authorizationStatusForEntityType(1);return 3==i?(e=1,console.log("备忘录权限已经开启")):console.log("备忘录权限没有开启"),plus.ios.deleteObject(t),e}function f(e){return new a.default(function(t,i){switch(e){case"push":t(l());break;case"location":t(r());break;case"record":t(p());break;case"camera":t(u());break;case"album":t(o());break;case"contact":t(c());break;case"calendar":t(d());break;case"memo":t(v());break;default:t(0);break}})}function g(e){return new a.default(function(t,i){plus.android.requestPermissions([e],function(e){for(var i=0,n=0;n<e.granted.length;n++){var s=e.granted[n];console.log("已获取的权限："+s),i=1}for(n=0;n<e.deniedPresent.length;n++){var a=e.deniedPresent[n];console.log("拒绝本次申请的权限："+a),i=0}for(n=0;n<e.deniedAlways.length;n++){var o=e.deniedAlways[n];console.log("永久拒绝申请的权限："+o),i=-1}t(i)},function(e){console.log("result error: "+e.message),t({code:e.code,message:e.message})})})}function h(){if(m.isIOS){var e=plus.ios.import("UIApplication"),t=e.sharedApplication(),i=plus.ios.import("NSURL"),n=i.URLWithString("app-settings:");t.openURL(n),plus.ios.deleteObject(n),plus.ios.deleteObject(i),plus.ios.deleteObject(t)}else{var s=plus.android.importClass("android.content.Intent"),a=plus.android.importClass("android.provider.Settings"),o=plus.android.importClass("android.net.Uri"),u=plus.android.runtimeMainActivity(),r=new s;r.setAction(a.ACTION_APPLICATION_DETAILS_SETTINGS);var l=o.fromParts("package",u.getPackageName(),null);r.setData(l),u.startActivity(r)}}var m={get isIOS(){return"boolean"===typeof n?n:n="ios"===uni.getSystemInfoSync().platform},requestIOS:f,requestAndroid:g,gotoAppSetting:h};e.exports=m},"0583":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".cell-pd[data-v-2c104c34]{padding:%?22?% %?30?%}.list-pd[data-v-2c104c34]{margin-top:%?50?%}",""])},"3c2a":function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(i("795b"));i("96cf");var a=n(i("3b8d")),o=n(i("e814")),u=n(i("042c")),r=[["camera"],["album"],["camera","album"]],l=[["compressed"],["original"],["compressed","original"]],c={data:function(){return{title:"choose/previewImage",imageList:[],sourceTypeIndex:2,sourceType:["拍照","相册","拍照或相册"],sizeTypeIndex:2,sizeType:["压缩","原图","压缩或原图"],countIndex:8,count:[1,2,3,4,5,6,7,8,9]}},onUnload:function(){this.imageList=[],this.sourceTypeIndex=2,this.sourceType=["拍照","相册","拍照或相册"],this.sizeTypeIndex=2,this.sizeType=["压缩","原图","压缩或原图"],this.countIndex=8},methods:{sourceTypeChange:function(e){this.sourceTypeIndex=(0,o.default)(e.target.value)},sizeTypeChange:function(e){this.sizeTypeIndex=(0,o.default)(e.target.value)},countChange:function(e){this.countIndex=e.target.value},chooseImage:function(){var e=(0,a.default)(regeneratorRuntime.mark(function e(){var t,i=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(9!==this.imageList.length){e.next=7;break}return e.next=3,this.isFullImg();case 3:if(t=e.sent,console.log("是否继续?",t),t){e.next=7;break}return e.abrupt("return");case 7:uni.chooseImage({sourceType:r[this.sourceTypeIndex],sizeType:l[this.sizeTypeIndex],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(e){i.imageList=i.imageList.concat(e.tempFilePaths)},fail:function(e){}});case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),isFullImg:function(){var e=this;return new s.default(function(t){uni.showModal({content:"已经有9张图片了,是否清空现有图片？",success:function(i){i.confirm?(e.imageList=[],t(!0)):t(!1)},fail:function(){t(!1)}})})},previewImage:function(e){var t=e.target.dataset.src;uni.previewImage({current:t,urls:this.imageList})},checkPermission:function(){var e=(0,a.default)(regeneratorRuntime.mark(function e(t){var i,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(i=t?t-1:this.sourceTypeIndex,!u.default.isIOS){e.next=7;break}return e.next=4,u.default.requestIOS(r[i][0]);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,u.default.requestAndroid(0===i?"android.permission.CAMERA":"android.permission.READ_EXTERNAL_STORAGE");case 9:e.t0=e.sent;case 10:return n=e.t0,null===n||1===n?n=1:uni.showModal({content:"没有开启权限",confirmText:"设置",success:function(e){e.confirm&&u.default.gotoAppSetting()}}),e.abrupt("return",n);case 13:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}};t.default=c},"79df":function(e,t,i){"use strict";i.r(t);var n=i("d886"),s=i("b69f");for(var a in s)"default"!==a&&function(e){i.d(t,e,function(){return s[e]})}(a);i("94f7");var o=i("2877"),u=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,"2c104c34",null);t["default"]=u.exports},"94f7":function(e,t,i){"use strict";var n=i("a76c"),s=i.n(n);s.a},a76c:function(e,t,i){var n=i("0583");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=i("4f06").default;s("73813ed1",n,!0,{sourceMap:!1,shadowMode:!1})},b69f:function(e,t,i){"use strict";i.r(t);var n=i("3c2a"),s=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=s.a},d886:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:e.title}}),i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-form",[i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[i("v-uni-view",{staticClass:"uni-label"},[e._v("图片来源")])],1),i("v-uni-view",{staticClass:"uni-list-cell-right"},[i("v-uni-picker",{attrs:{range:e.sourceType,value:e.sourceTypeIndex,mode:"selector"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.sourceTypeChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.sourceType[e.sourceTypeIndex]))])],1)],1)],1),i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[i("v-uni-view",{staticClass:"uni-label"},[e._v("图片质量")])],1),i("v-uni-view",{staticClass:"uni-list-cell-right"},[i("v-uni-picker",{attrs:{range:e.sizeType,value:e.sizeTypeIndex,mode:"selector"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.sizeTypeChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.sizeType[e.sizeTypeIndex]))])],1)],1)],1),i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[i("v-uni-view",{staticClass:"uni-label"},[e._v("数量限制")])],1),i("v-uni-view",{staticClass:"uni-list-cell-right"},[i("v-uni-picker",{attrs:{range:e.count,mode:"selector"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.countChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.count[e.countIndex]))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"uni-list list-pd"},[i("v-uni-view",{staticClass:"uni-list-cell cell-pd"},[i("v-uni-view",{staticClass:"uni-uploader"},[i("v-uni-view",{staticClass:"uni-uploader-head"},[i("v-uni-view",{staticClass:"uni-uploader-title"},[e._v("点击可预览选好的图片")]),i("v-uni-view",{staticClass:"uni-uploader-info"},[e._v(e._s(e.imageList.length)+"/9")])],1),i("v-uni-view",{staticClass:"uni-uploader-body"},[i("v-uni-view",{staticClass:"uni-uploader__files"},[e._l(e.imageList,function(t,n){return[i("v-uni-view",{key:n+"_0",staticClass:"uni-uploader__file"},[i("v-uni-image",{staticClass:"uni-uploader__img",attrs:{src:t,"data-src":t},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage.apply(void 0,arguments)}}})],1)]}),i("v-uni-view",{staticClass:"uni-uploader__input-box"},[i("v-uni-view",{staticClass:"uni-uploader__input",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}})],1)],2)],1)],1)],1)],1)],1)],1)],1)},s=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return s})}}]);