(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-download-file-download-file"],{"0939":function(n,t,i){t=n.exports=i("2350")(!1),t.push([n.i,".img[data-v-dfc61854]{width:%?500?%;height:%?500?%;margin:0 %?95?%}",""])},"0d29":function(n,t,i){"use strict";var e,a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:n.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n.imageSrc?i("v-uni-image",{staticClass:"img",attrs:{src:n.imageSrc,mode:"center"}}):[i("v-uni-view",{staticClass:"uni-hello-text"},[n._v("点击按钮下载服务端示例图片（下载网络文件到本地临时目录）")]),i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.downloadImage.apply(void 0,arguments)}}},[n._v("下载")])],1)]],2)],1)},o=[];i.d(t,"b",function(){return a}),i.d(t,"c",function(){return o}),i.d(t,"a",function(){return e})},"1ff9":function(n,t,i){"use strict";i.r(t);var e=i("0d29"),a=i("e2bb");for(var o in a)"default"!==o&&function(n){i.d(t,n,function(){return a[n]})}(o);i("b1af");var u,c=i("f0c5"),r=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"dfc61854",null,!1,e["a"],u);t["default"]=r.exports},7076:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{title:"downloadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{downloadImage:function(){uni.showLoading({title:"下载中"});var n=this;uni.downloadFile({url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",success:function(t){console.log("downloadFile success, res is",t),n.imageSrc=t.tempFilePath,uni.hideLoading()},fail:function(n){console.log("downloadFile fail, err is:",n)}})}}};t.default=e},"716a":function(n,t,i){var e=i("0939");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=i("4f06").default;a("5a82295d",e,!0,{sourceMap:!1,shadowMode:!1})},b1af:function(n,t,i){"use strict";var e=i("716a"),a=i.n(e);a.a},e2bb:function(n,t,i){"use strict";i.r(t);var e=i("7076"),a=i.n(e);for(var o in e)"default"!==o&&function(n){i.d(t,n,function(){return e[n]})}(o);t["default"]=a.a}}]);