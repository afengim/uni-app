(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-list2detail-list-list2detail-list"],{"19de":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".uni-load-more[data-v-6bf1fe4c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-load-more__text[data-v-6bf1fe4c]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-6bf1fe4c]{position:relative;height:24px;width:24px;margin-right:10px}.uni-load-more__img>.load[data-v-6bf1fe4c]{position:absolute}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-6bf1fe4c]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-6bf1fe4c .96s ease infinite;animation:load-data-v-6bf1fe4c .96s ease infinite}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-6bf1fe4c]:first-child{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-6bf1fe4c]:nth-child(2){-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-6bf1fe4c]:nth-child(3){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-6bf1fe4c]:nth-child(4){top:11px;left:0}.uni-load-more__img>.loader-android[data-v-6bf1fe4c]{position:absolute;left:0;top:0;right:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;border:solid 2px #777;border-radius:50%;border-bottom-color:rgba(0,0,0,0)!important;-webkit-animation:loader-android-data-v-6bf1fe4c 1s 0s linear infinite;animation:loader-android-data-v-6bf1fe4c 1s 0s linear infinite}.load1[data-v-6bf1fe4c],.load2[data-v-6bf1fe4c],.load3[data-v-6bf1fe4c]{height:24px;width:24px}.load2[data-v-6bf1fe4c]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-6bf1fe4c]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.load1 .uni-load-view_wrapper[data-v-6bf1fe4c]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 .uni-load-view_wrapper[data-v-6bf1fe4c]:first-child{-webkit-animation-delay:80ms;animation-delay:80ms}.load3 .uni-load-view_wrapper[data-v-6bf1fe4c]:first-child{-webkit-animation-delay:.16s;animation-delay:.16s}.load1 .uni-load-view_wrapper[data-v-6bf1fe4c]:nth-child(2){-webkit-animation-delay:.24s;animation-delay:.24s}.load2 .uni-load-view_wrapper[data-v-6bf1fe4c]:nth-child(2){-webkit-animation-delay:.32s;animation-delay:.32s}.load3 .uni-load-view_wrapper[data-v-6bf1fe4c]:nth-child(2){-webkit-animation-delay:.4s;animation-delay:.4s}.load1 .uni-load-view_wrapper[data-v-6bf1fe4c]:nth-child(3){-webkit-animation-delay:.48s;animation-delay:.48s}.load2 .uni-load-view_wrapper[data-v-6bf1fe4c]:nth-child(3){-webkit-animation-delay:.56s;animation-delay:.56s}.load3 .uni-load-view_wrapper[data-v-6bf1fe4c]:nth-child(3){-webkit-animation-delay:.64s;animation-delay:.64s}.load1 .uni-load-view_wrapper[data-v-6bf1fe4c]:nth-child(4){-webkit-animation-delay:.72s;animation-delay:.72s}.load2 .uni-load-view_wrapper[data-v-6bf1fe4c]:nth-child(4){-webkit-animation-delay:.8s;animation-delay:.8s}.load3 .uni-load-view_wrapper[data-v-6bf1fe4c]:nth-child(4){-webkit-animation-delay:.88s;animation-delay:.88s}@-webkit-keyframes load-data-v-6bf1fe4c{0%{opacity:1}to{opacity:.2}}@-webkit-keyframes loader-android-data-v-6bf1fe4c{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},"3a01":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-load-more"},["circle"===t.iconType||"auto"===t.iconType&&"android"===t.platform?a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[a("v-uni-view",{staticClass:"loader-android",style:{borderColor:t.color}})],1):a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[a("v-uni-view",{staticClass:"load1 load"},[a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load2 load"},[a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load3 load"},[a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1)],1),a("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},4850:function(t,e,a){var i=a("19de");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("489f12fe",i,!0,{sourceMap:!1,shadowMode:!1})},"4cb3":function(t,e,a){"use strict";a.r(e);var i=a("3a01"),n=a("4fac");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("db1e");var r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"6bf1fe4c",null);e["default"]=s.exports},"4fac":function(t,e,a){"use strict";a.r(e);var i=a("9106"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},6276:function(t,e,a){var i=a("9469");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("29147377",i,!0,{sourceMap:!1,shadowMode:!1})},"772e":function(t,e,a){"use strict";var i=a("288e"),n=i(a("0a0d"));a("28a5");var o=i(a("59ad"));a("6b54"),a("87b3");var r=i(a("e814"));function s(t){if("number"!==typeof t||t<0)return t;var e=(0,r.default)(t/3600);t%=3600;var a=(0,r.default)(t/60);t%=60;var i=t;return[e,a,i].map(function(t){return t=t.toString(),t[1]?t:"0"+t}).join(":")}function l(t,e){return"string"===typeof t&&"string"===typeof e&&(t=(0,o.default)(t),e=(0,o.default)(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}}var d={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var a in this.UNITS)if(t>=this.UNITS[a]){e=Math.floor(t/this.UNITS[a])+a+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),a=(0,n.default)()-e.getTime();if(a<this.UNITS["天"])return this.humanize(a);var i=function(t){return t<10?"0"+t:t};return e.getFullYear()+"/"+i(e.getMonth()+1)+"/"+i(e.getDate())+"-"+i(e.getHours())+":"+i(e.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};t.exports={formatTime:s,formatLocation:l,dateUtils:d}},"8f4a":function(t,e,a){"use strict";var i=a("6276"),n=a.n(i);n.a},9106:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=uni.getSystemInfoSync().platform,n={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},iconType:{type:String,default:"auto"},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{platform:i}}};e.default=n},9469:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".banner[data-v-7cf0745c]{height:%?360?%;overflow:hidden;position:relative;background-color:#ccc}.banner-img[data-v-7cf0745c]{width:100%}.banner-title[data-v-7cf0745c]{max-height:%?84?%;overflow:hidden;position:absolute;left:%?30?%;bottom:%?30?%;width:90%;font-size:%?32?%;font-weight:400;line-height:%?42?%;color:#fff;z-index:11}.uni-media-list-logo[data-v-7cf0745c]{width:%?180?%;height:%?140?%}.uni-media-list-body[data-v-7cf0745c]{height:auto;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.uni-media-list-text-top[data-v-7cf0745c]{height:%?74?%;font-size:%?28?%;overflow:hidden}.uni-media-list-text-bottom[data-v-7cf0745c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}",""])},a364:function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("ac6a");var n=i(a("f499")),o=i(a("4cb3")),r=a("772e").dateUtils,s={components:{uniLoadMore:o.default},data:function(){return{banner:{},listData:[],last_id:"",reload:!1,status:"more",contentText:{contentdown:"上拉加载更多",contentrefresh:"加载中",contentnomore:"没有更多"}}},onLoad:function(){this.getBanner(),this.getList()},onPullDownRefresh:function(){this.reload=!0,this.last_id="",this.getBanner(),this.getList()},onReachBottom:function(){this.status="more",this.getList()},methods:{getBanner:function(){var t=this,e={column:"id,post_id,title,author_name,cover,published_at"};uni.request({url:"https://unidemo.dcloud.net.cn/api/banner/36kr",data:e,success:function(e){uni.stopPullDownRefresh(),200==e.statusCode&&(t.banner=e.data)},fail:function(t,e){console.log("fail"+(0,n.default)(t))}})},getList:function(){var t=this,e={column:"id,post_id,title,author_name,cover,published_at"};this.last_id&&(this.status="loading",e.minId=this.last_id,e.time=(new Date).getTime()+"",e.pageSize=10),uni.request({url:"https://unidemo.dcloud.net.cn/api/news",data:e,success:function(e){if(200==e.statusCode){var a=t.setTime(e.data);t.listData=t.reload?a:t.listData.concat(a),t.last_id=a[a.length-1].id,t.reload=!1}},fail:function(t,e){console.log("fail"+(0,n.default)(t))}})},goDetail:function(t){var e={author_name:t.author_name,cover:t.cover,id:t.id,post_id:t.post_id,published_at:t.published_at,title:t.title};uni.navigateTo({url:"../list2detail-detail/list2detail-detail?detailDate="+encodeURIComponent((0,n.default)(e))})},setTime:function(t){var e=[];return t.forEach(function(t){e.push({author_name:t.author_name,cover:t.cover,id:t.id,post_id:t.post_id,published_at:r.format(t.published_at),title:t.title})}),e}}};e.default=s},a8ce:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"banner",on:{click:function(e){e=t.$handleEvent(e),t.goDetail(t.banner)}}},[a("v-uni-image",{staticClass:"banner-img",attrs:{src:t.banner.cover}}),a("v-uni-view",{staticClass:"banner-title"},[t._v(t._s(t.banner.title))])],1),a("v-uni-view",{staticClass:"uni-list"},t._l(t.listData,function(e,i){return a("v-uni-view",{key:i,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"},on:{click:function(a){a=t.$handleEvent(a),t.goDetail(e)}}},[a("v-uni-view",{staticClass:"uni-media-list"},[a("v-uni-image",{staticClass:"uni-media-list-logo",attrs:{src:e.cover}}),a("v-uni-view",{staticClass:"uni-media-list-body"},[a("v-uni-view",{staticClass:"uni-media-list-text-top"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"uni-media-list-text-bottom"},[a("v-uni-text",[t._v(t._s(e.author_name))]),a("v-uni-text",[t._v(t._s(e.published_at))])],1)],1)],1)],1)}),1),a("uni-load-more",{attrs:{status:t.status,"content-text":t.contentText}})],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},db1e:function(t,e,a){"use strict";var i=a("4850"),n=a.n(i);n.a},e87c:function(t,e,a){"use strict";a.r(e);var i=a("a8ce"),n=a("fc71");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("8f4a");var r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"7cf0745c",null);e["default"]=s.exports},fc71:function(t,e,a){"use strict";a.r(e);var i=a("a364"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a}}]);