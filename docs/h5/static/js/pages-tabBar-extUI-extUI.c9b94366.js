(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-extUI-extUI"],{"0991":function(t,e,n){"use strict";n.r(e);var a=n("7589"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},2325:function(t,e,n){var a=n("6305");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("cdec0684",a,!0,{sourceMap:!1,shadowMode:!1})},"4e89":function(t,e,n){"use strict";n.r(e);var a=n("6206"),i=n("0991");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("76a5");var r=n("2877"),l=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"124dd64b",null);e["default"]=l.exports},6206:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-container"},[n("v-uni-view",{staticClass:"uni-header-logo"},[n("v-uni-image",{staticClass:"uni-header-image",attrs:{src:"/static/extuiIndex.png"}})],1),n("v-uni-view",{staticClass:"uni-hello-text"},[n("v-uni-text",{staticClass:"hello-text"},[t._v("以下是uni-app扩展组件示例，更多组件见插件市场：")]),n("u-link",{staticClass:"hello-link",attrs:{href:"https://ext.dcloud.net.cn/",text:"https://ext.dcloud.net.cn",inWhiteList:!0}})],1),t._l(t.lists,function(e){return n("v-uni-view",{key:e.url,staticClass:"uni-panel"},[n("v-uni-view",{staticClass:"uni-panel-h",on:{click:function(n){n=t.$handleEvent(n),t.goDetailPage(e.url)}}},[n("v-uni-text",{staticClass:"uni-panel-text"},[t._v(t._s(e.name))]),n("v-uni-text",{staticClass:"uni-panel-icon uni-icon"},[t._v("")])],1)],1)})],2)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},6305:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-124dd64b]{min-height:100%;height:auto}\r\n\r\n/* 解决头条小程序字体图标不显示问题，因为头条运行时自动插入了span标签，且有全局字体 */\r\n.uni-icon[data-v-124dd64b]{font-family:uniicons;font-weight:400}.uni-container[data-v-124dd64b]{padding:15px;background-color:#f8f8f8}.uni-header-logo[data-v-124dd64b]{padding:15px 15px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-top:%?10?%}.uni-header-image[data-v-124dd64b]{width:80px;height:80px}.uni-hello-text[data-v-124dd64b]{margin-bottom:20px}.hello-text[data-v-124dd64b]{color:#7a7e83;font-size:14px;line-height:20px}.hello-link[data-v-124dd64b]{color:#7a7e83;font-size:14px;line-height:20px}.uni-panel[data-v-124dd64b]{margin-bottom:12px}.uni-panel-h[data-v-124dd64b]{background-color:#fff;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:12px}\r\n/*\r\n.uni-panel-h:active {\r\n    background-color: #f8f8f8;\r\n}\r\n */.uni-panel-h-on[data-v-124dd64b]{background-color:#f0f0f0}.uni-panel-text[data-v-124dd64b]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-panel-icon[data-v-124dd64b]{margin-left:15px;color:#999;font-size:14px;font-weight:400;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition-duration:0s;-o-transition-duration:0s;transition-duration:0s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform}.uni-panel-icon-on[data-v-124dd64b]{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.uni-navigate-item[data-v-124dd64b]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#fff;border-top-style:solid;border-top-color:#f0f0f0;border-top-width:1px;padding:12px}.uni-navigate-item[data-v-124dd64b]:active{background-color:#f8f8f8}.uni-navigate-text[data-v-124dd64b]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-navigate-icon[data-v-124dd64b]{margin-left:15px;color:#999;font-size:14px;font-weight:400}",""])},7589:function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("3744")),o={components:{uLink:i.default},data:function(){return{navigateFlag:!1,lists:[{name:"Badge 数字角标",url:"badge"},{name:"Calendar 日历",url:"calendar"},{name:"Card 卡片",url:"card"},{name:"Collapse 折叠面板",url:"collapse"},{name:"CountDown 倒计时",url:"count-down"},{name:"Drawer 抽屉",url:"drawer"},{name:"Fab 悬浮按钮",url:"fab"},{name:"Fav 收藏按钮",url:"fav"},{name:"GoodsNav 商品导航",url:"goods-nav"},{name:"Grid 宫格",url:"grid"},{name:"Icons 图标",url:"icons"},{name:"IndexedList 索引列表",url:"indexed-list"},{name:"List 列表",url:"list"},{name:"LoadMore 加载更多",url:"load-more"},{name:"NavBar 自定义导航栏",url:"nav-bar"},{name:"NoticeBar 通告栏",url:"notice-bar"},{name:"NumberBox 数字输入框",url:"number-box"},{name:"Pagination 分页器",url:"pagination"},{name:"PopUp 弹出层",url:"popup"},{name:"Rate 评分",url:"rate"},{name:"SearchBar 搜索栏",url:"search-bar"},{name:"SegmentedControl 分段器",url:"segmented-control"},{name:"Steps 步骤条",url:"steps"},{name:"SwipeAction 滑动操作",url:"swipe-action"},{name:"SwiperDot 轮播图指示点",url:"swiper-dot"},{name:"Tag 标签",url:"tag"}]}},onLoad:function(){},onReady:function(){},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/extUI/extUI"}},onNavigationBarButtonTap:function(t){uni.navigateTo({url:"/pages/about/about"})},methods:{goDetailPage:function(t){var e=this;this.navigateFlag||(this.navigateFlag=!0,uni.navigateTo({url:"/pages/extUI/"+t+"/"+t}),setTimeout(function(){e.navigateFlag=!1},200))}}};e.default=o},"76a5":function(t,e,n){"use strict";var a=n("2325"),i=n.n(a);i.a}}]);