(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-location-get-location"],{"058b":function(t,n,e){var i=e("1f87");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("03699760",i,!0,{sourceMap:!1,shadowMode:!1})},"1e81":function(t,n,e){"use strict";var i=e("6af7"),a=e.n(i);a.a},"1f87":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".popup-view[data-v-7b4b5d5a]{width:%?500?%}.popup-title[data-v-7b4b5d5a]{display:block;font-size:16px;line-height:3;margin-bottom:10px;text-align:center}.popup-buttons uni-button[data-v-7b4b5d5a]{margin-left:4px;margin-right:4px}",""])},"28ef":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"UniPopup",props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},custom:{type:Boolean,default:!1},maskClick:{type:Boolean,default:!0},show:{type:Boolean,default:!0}},data:function(){return{ani:"",showPopup:!1}},watch:{show:function(t){t?this.open():this.close()}},created:function(){},methods:{clear:function(){},open:function(){var t=this;this.$emit("change",{show:!0}),this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){t.ani="uni-"+t.type},30)})},close:function(t){var n=this;!this.maskClick&&t||(this.$emit("change",{show:!1}),this.ani="",this.$nextTick(function(){setTimeout(function(){n.showPopup=!1},300)}))}}};n.default=i},"397f":function(t,n,e){"use strict";var i=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("795b"));e("96cf");var o=i(e("3b8d")),u=i(e("9408")),r=e("772e"),s=r.formatLocation,p={components:{uniPopup:u.default},data:function(){return{title:"getLocation",hasLocation:!1,location:{},type:""}},methods:{togglePopup:function(t){this.type=t},showConfirm:function(){this.type="showpopup"},hideConfirm:function(){this.type=""},getLocation:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.doGetLocation();case 1:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),doGetLocation:function(){var t=this;uni.getLocation({success:function(n){t.hasLocation=!0,t.location=s(n.longitude,n.latitude)},fail:function(t){t.errMsg.indexOf("auth deny")>=0?uni.showToast({title:"访问位置被拒绝"}):uni.showToast({title:t.errMsg})}})},getSetting:function(){return new a.default(function(t,n){uni.getSetting({success:function(n){void 0!==n.authSetting["scope.userLocation"]?n.authSetting["scope.userLocation"]?t(1):t(2):t(0)}})})},openSetting:function(){var t=this;this.hideConfirm(),uni.openSetting({success:function(n){n.authSetting&&n.authSetting["scope.userLocation"]&&t.doGetLocation()},fail:function(t){}})},checkPermission:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!permision.isIOS){t.next=6;break}return t.next=3,permision.requestIOS("location");case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,permision.requestAndroid("android.permission.ACCESS_FINE_LOCATION");case 8:t.t0=t.sent;case 9:return n=t.t0,null===n||1===n?n=1:2===n?uni.showModal({content:"系统定位已关闭",confirmText:"确定",showCancel:!1,success:function(t){}}):n.code?uni.showModal({content:n.message}):uni.showModal({content:"需要定位权限",confirmText:"设置",success:function(t){t.confirm&&permision.gotoAppSetting()}}),t.abrupt("return",n);case 12:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),clear:function(){this.hasLocation=!1}}};n.default=p},"4c45":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.showPopup?e("v-uni-view",{staticClass:"uni-popup"},[e("v-uni-view",{staticClass:"uni-popup__mask",class:[t.ani,t.animation?"ani":"",t.custom?"":"uni-custom"],on:{click:function(n){n=t.$handleEvent(n),t.close(!0)}}}),e("v-uni-view",{staticClass:"uni-popup__wrapper",class:[t.type,t.ani,t.animation?"ani":"",t.custom?"":"uni-custom"],on:{click:function(n){n=t.$handleEvent(n),t.close(!0)}}},[e("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(n){n.stopPropagation(),n=t.$handleEvent(n),t.clear(n)}}},[t._t("default")],2)],1)],1):t._e()},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},"4e89d":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"40upx"}},[e("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("当前位置经纬度")]),!1===t.hasLocation?[e("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v("未获取")])]:t._e(),!0===t.hasLocation?[e("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[e("v-uni-text",[t._v("E: "+t._s(t.location.longitude[0])+"°"+t._s(t.location.longitude[1])+"′")]),e("v-uni-text",[t._v("\\nN: "+t._s(t.location.latitude[0])+"°"+t._s(t.location.latitude[1])+"′")])],1)]:t._e()],2),e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){n=t.$handleEvent(n),t.getLocation(n)}}},[t._v("获取位置")]),e("v-uni-button",{on:{click:function(n){n=t.$handleEvent(n),t.clear(n)}}},[t._v("清空")])],1)],1),e("uni-popup",{attrs:{show:"showpopup"===t.type,mode:"fixed"},on:{hidePopup:function(n){n=t.$handleEvent(n),t.togglePopup("")}}},[e("v-uni-view",{staticClass:"popup-view"},[e("v-uni-text",{staticClass:"popup-title"},[t._v("需要用户授权位置权限")]),e("v-uni-view",{staticClass:"uni-flex popup-buttons"},[e("v-uni-button",{staticClass:"uni-flex-item",attrs:{type:"primary","open-type":"openSetting"},on:{click:function(n){n=t.$handleEvent(n),t.openSetting(n)}}},[t._v("设置")]),e("v-uni-button",{staticClass:"uni-flex-item",on:{click:function(n){n=t.$handleEvent(n),t.togglePopup("")}}},[t._v("取消")])],1)],1)],1)],1)},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},"52ee":function(t,n,e){"use strict";e.r(n);var i=e("4e89d"),a=e("f7f1");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("82de");var u=e("2877"),r=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,"7b4b5d5a",null);n["default"]=r.exports},"6af7":function(t,n,e){var i=e("f348");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("0d7998ea",i,!0,{sourceMap:!1,shadowMode:!1})},"772e":function(t,n,e){"use strict";var i=e("288e"),a=i(e("0a0d"));e("28a5");var o=i(e("59ad"));e("6b54"),e("87b3");var u=i(e("e814"));function r(t){if("number"!==typeof t||t<0)return t;var n=(0,u.default)(t/3600);t%=3600;var e=(0,u.default)(t/60);t%=60;var i=t;return[n,e,i].map(function(t){return t=t.toString(),t[1]?t:"0"+t}).join(":")}function s(t,n){return"string"===typeof t&&"string"===typeof n&&(t=(0,o.default)(t),n=(0,o.default)(n)),t=t.toFixed(2),n=n.toFixed(2),{longitude:t.toString().split("."),latitude:n.toString().split(".")}}var p={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var n="";for(var e in this.UNITS)if(t>=this.UNITS[e]){n=Math.floor(t/this.UNITS[e])+e+"前";break}return n||"刚刚"},format:function(t){var n=this.parse(t),e=(0,a.default)()-n.getTime();if(e<this.UNITS["天"])return this.humanize(e);var i=function(t){return t<10?"0"+t:t};return n.getFullYear()+"/"+i(n.getMonth()+1)+"/"+i(n.getDate())+"-"+i(n.getHours())+":"+i(n.getMinutes())},parse:function(t){var n=t.split(/[^0-9]/);return new Date(n[0],n[1]-1,n[2],n[3],n[4],n[5])}};t.exports={formatTime:r,formatLocation:s,dateUtils:p}},"793f":function(t,n,e){"use strict";e.r(n);var i=e("28ef"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},"82de":function(t,n,e){"use strict";var i=e("058b"),a=e.n(i);a.a},9408:function(t,n,e){"use strict";e.r(n);var i=e("4c45"),a=e("793f");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("1e81");var u=e("2877"),r=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,"093a229a",null);n["default"]=r.exports},f348:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".uni-popup[data-v-093a229a]{position:fixed;top:0;top:0;bottom:0;left:0;right:0;z-index:998;overflow:hidden}.uni-popup__mask[data-v-093a229a]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:998;background:rgba(0,0,0,.4);opacity:0}.uni-popup__mask.ani[data-v-093a229a]{-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s}.uni-popup__mask.uni-bottom[data-v-093a229a],.uni-popup__mask.uni-center[data-v-093a229a],.uni-popup__mask.uni-top[data-v-093a229a]{opacity:1}.uni-popup__wrapper[data-v-093a229a]{position:absolute;z-index:999;-webkit-box-sizing:border-box;box-sizing:border-box}.uni-popup__wrapper.ani[data-v-093a229a]{-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s}.uni-popup__wrapper.top[data-v-093a229a]{top:0;left:0;width:100%;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%)}.uni-popup__wrapper.bottom[data-v-093a229a]{bottom:0;left:0;width:100%;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%)}.uni-popup__wrapper.center[data-v-093a229a]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);opacity:0}.uni-popup__wrapper-box[data-v-093a229a]{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.uni-popup__wrapper.uni-custom .uni-popup__wrapper-box[data-v-093a229a]{padding:%?30?%;background:#fff}.uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box[data-v-093a229a]{position:relative;max-width:80%;max-height:80%;overflow-y:scroll}.uni-popup__wrapper.uni-custom.bottom .uni-popup__wrapper-box[data-v-093a229a],.uni-popup__wrapper.uni-custom.top .uni-popup__wrapper-box[data-v-093a229a]{width:100%;max-height:500px;overflow-y:scroll}.uni-popup__wrapper.uni-bottom[data-v-093a229a],.uni-popup__wrapper.uni-top[data-v-093a229a]{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.uni-popup__wrapper.uni-center[data-v-093a229a]{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1}",""])},f7f1:function(t,n,e){"use strict";e.r(n);var i=e("397f"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a}}]);