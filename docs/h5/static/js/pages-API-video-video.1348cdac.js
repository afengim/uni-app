(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-video-video"],{"1da9":function(e,a,t){"use strict";var i=t("f340"),n=t.n(i);n.a},"4ad7":function(e,a,t){"use strict";t.r(a);var i=t("da9c"),n=t.n(i);for(var s in i)"default"!==s&&function(e){t.d(a,e,(function(){return i[e]}))}(s);a["default"]=n.a},"5ae9":function(e,a,t){var i=t("24fb");a=i(!1),a.push([e.i,".video[data-v-52d023f7]{width:100%}.camera-tips[data-v-52d023f7]{padding:%?10?% %?30?%}",""]),e.exports=a},d0ba:function(e,a,t){"use strict";var i,n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",[t("page-head",{attrs:{title:e.title}}),t("v-uni-view",{staticClass:"uni-common-mt"},[t("v-uni-view",{staticClass:"uni-list"},[t("v-uni-view",{staticClass:"uni-list-cell"},[t("v-uni-view",{staticClass:"uni-list-cell-left"},[t("v-uni-view",{staticClass:"uni-label"},[e._v("视频来源")])],1),t("v-uni-view",{staticClass:"uni-list-cell-right"},[t("v-uni-picker",{attrs:{range:e.sourceType,value:e.sourceTypeIndex},on:{change:function(a){arguments[0]=a=e.$handleEvent(a),e.sourceTypeChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.sourceType[e.sourceTypeIndex]))])],1)],1)],1)],1)],1),e.src?[t("v-uni-video",{staticClass:"video",attrs:{src:e.src}})]:[t("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.chooseVideo.apply(void 0,arguments)}}},[e._v("+ 添加视频")])]],2)},s=[];t.d(a,"b",(function(){return n})),t.d(a,"c",(function(){return s})),t.d(a,"a",(function(){return i}))},da9c:function(e,a,t){"use strict";t("e25e"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=[["camera"],["album"],["camera","album"]],n={data:function(){return{title:"chooseVideo",sourceTypeIndex:2,sourceType:["拍摄","相册","拍摄或相册"],src:"",cameraList:[{value:"back",name:"后置摄像头",checked:"true"},{value:"front",name:"前置摄像头"}],cameraIndex:0}},onUnload:function(){this.src="",this.sourceTypeIndex=2,this.sourceType=["拍摄","相册","拍摄或相册"]},methods:{radioChange:function(e){for(var a=0;a<this.cameraList.length;a++)if(this.cameraList[a].value===e.detail.value){this.cameraIndex=a;break}},sourceTypeChange:function(e){this.sourceTypeIndex=parseInt(e.detail.value)},chooseVideo:function(){var e=this;uni.chooseVideo({camera:this.cameraList[this.cameraIndex].value,sourceType:i[this.sourceTypeIndex],success:function(a){e.src=a.tempFilePath},fail:function(e){}})}}};a.default=n},e25d:function(e,a,t){"use strict";t.r(a);var i=t("d0ba"),n=t("4ad7");for(var s in n)"default"!==s&&function(e){t.d(a,e,(function(){return n[e]}))}(s);t("1da9");var c,u=t("f0c5"),r=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"52d023f7",null,!1,i["a"],c);a["default"]=r.exports},f340:function(e,a,t){var i=t("5ae9");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("09ade638",i,!0,{sourceMap:!1,shadowMode:!1})}}]);