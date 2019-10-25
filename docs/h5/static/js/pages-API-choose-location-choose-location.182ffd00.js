(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-choose-location-choose-location"],{"04d6":function(t,n,e){"use strict";var i=e("1c7d"),o=e.n(i);o.a},"1c7d":function(t,n,e){var i=e("fe64");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("6a0879e0",i,!0,{sourceMap:!1,shadowMode:!1})},6734:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("772e"),o=i.formatLocation,a={data:function(){return{title:"chooseLocation",hasLocation:!1,location:{},locationAddress:""}},methods:{chooseLocation:function(){var t=this;uni.chooseLocation({success:function(n){t.hasLocation=!0,t.location=o(n.longitude,n.latitude),t.locationAddress=n.address}})},clear:function(){this.hasLocation=!1}}};n.default=a},"750c":function(t,n,e){"use strict";e.r(n);var i=e("d857"),o=e("b8c0");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("04d6");var u=e("2877"),r=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,"266ba8ce",null);n["default"]=r.exports},"772e":function(t,n,e){"use strict";var i=e("288e"),o=i(e("0a0d"));e("28a5");var a=i(e("59ad"));e("6b54"),e("87b3");var u=i(e("e814"));function r(t){if("number"!==typeof t||t<0)return t;var n=(0,u.default)(t/3600);t%=3600;var e=(0,u.default)(t/60);t%=60;var i=t;return[n,e,i].map(function(t){return t=t.toString(),t[1]?t:"0"+t}).join(":")}function c(t,n){return"string"===typeof t&&"string"===typeof n&&(t=(0,a.default)(t),n=(0,a.default)(n)),t=t.toFixed(2),n=n.toFixed(2),{longitude:t.toString().split("."),latitude:n.toString().split(".")}}var s={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var n="";for(var e in this.UNITS)if(t>=this.UNITS[e]){n=Math.floor(t/this.UNITS[e])+e+"前";break}return n||"刚刚"},format:function(t){var n=this.parse(t),e=(0,o.default)()-n.getTime();if(e<this.UNITS["天"])return this.humanize(e);var i=function(t){return t<10?"0"+t:t};return n.getFullYear()+"/"+i(n.getMonth()+1)+"/"+i(n.getDate())+"-"+i(n.getHours())+":"+i(n.getMinutes())},parse:function(t){var n=t.split(/[^0-9]/);return new Date(n[0],n[1]-1,n[2],n[3],n[4],n[5])}};t.exports={formatTime:r,formatLocation:c,dateUtils:s}},b8c0:function(t,n,e){"use strict";e.r(n);var i=e("6734"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},d857:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"40upx"}},[e("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("当前位置信息")]),!1===t.hasLocation?[e("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v("未选择位置")])]:t._e(),!0===t.hasLocation?[e("v-uni-view",{staticClass:"uni-hello-text uni-center",staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.locationAddress))]),e("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[e("v-uni-text",[t._v("E: "+t._s(t.location.longitude[0])+"°"+t._s(t.location.longitude[1])+"′")]),e("v-uni-text",[t._v("\\nN: "+t._s(t.location.latitude[0])+"°"+t._s(t.location.latitude[1])+"′")])],1)]:t._e()],2),e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){n=t.$handleEvent(n),t.chooseLocation(n)}}},[t._v("选择位置")]),e("v-uni-button",{on:{click:function(n){n=t.$handleEvent(n),t.clear(n)}}},[t._v("清空")])],1)],1)],1)},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},fe64:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".page-body-info[data-v-266ba8ce]{padding-bottom:0;height:%?440?%}",""])}}]);