(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-movable-view-movable-view"],{2978:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page-body"},[i("page-head",{attrs:{title:"movable-view,可拖动视图"}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("示例 1"),i("v-uni-text",[t._v("\\nmovable-view 区域小于 movable-area")])],1),i("v-uni-movable-area",[i("v-uni-movable-view",{attrs:{x:t.x,y:t.y,direction:"all"},on:{change:function(e){e=t.$handleEvent(e),t.onChange(e)}}},[t._v("text")])],1),i("v-uni-view",{staticClass:"uni-link uni-center uni-common-mt",on:{click:function(e){e=t.$handleEvent(e),t.tap(e)}}},[t._v("点击这里移动至 (30px, 30px)")]),i("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("示例 2"),i("v-uni-text",[t._v("\\nmovable-view区域大于movable-area")])],1),i("v-uni-movable-area",[i("v-uni-movable-view",{staticClass:"max",attrs:{direction:"all"}},[t._v("text")])],1),i("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("示例 3"),i("v-uni-text",[t._v("\\n只可以横向移动")])],1),i("v-uni-movable-area",[i("v-uni-movable-view",{attrs:{direction:"horizontal"}},[t._v("text")])],1),i("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("示例 4"),i("v-uni-text",[t._v("\\n只可以纵向移动")])],1),i("v-uni-movable-area",[i("v-uni-movable-view",{attrs:{direction:"vertical"}},[t._v("text")])],1),i("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("示例 5"),i("v-uni-text",[t._v("\\n可超出边界")])],1),i("v-uni-movable-area",[i("v-uni-movable-view",{attrs:{direction:"all","out-of-bounds":""}},[t._v("text")])],1),i("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("示例 6"),i("v-uni-text",[t._v("\\n带有惯性")])],1),i("v-uni-movable-area",[i("v-uni-movable-view",{attrs:{direction:"all",inertia:""}},[t._v("text")])],1),i("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("示例 7"),i("v-uni-text",[t._v("\\n可放缩")])],1),i("v-uni-movable-area",{attrs:{"scale-area":""}},[i("v-uni-movable-view",{attrs:{direction:"all",scale:"","scale-min":"0.5","scale-max":"4","scale-value":t.scale},on:{scale:function(e){e=t.$handleEvent(e),t.onScale(e)}}},[t._v("text")])],1),i("v-uni-view",{staticClass:"uni-link uni-center uni-common-mt",staticStyle:{"padding-bottom":"80upx"},on:{click:function(e){e=t.$handleEvent(e),t.tap2(e)}}},[t._v("点击这里放大3倍")])],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"6e20":function(t,e,i){"use strict";i.r(e);var n=i("a2d5"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"871c":function(t,e,i){"use strict";var n=i("dbc4"),a=i.n(n);a.a},"92a0":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-movable-view[data-v-26ca66f4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:%?150?%;width:%?150?%;background-color:#007aff;color:#fff}uni-movable-area[data-v-26ca66f4]{height:%?300?%;width:100%;background-color:#d8d8d8;overflow:hidden}.max[data-v-26ca66f4]{width:%?500?%;height:%?500?%}",""])},a2d5:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{x:0,y:0,scale:2,old:{x:0,y:0,scale:2}}},methods:{tap:function(t){this.x=this.old.x,this.y=this.old.y,this.$nextTick(function(){this.x=30,this.y=30})},tap2:function(){this.scale=this.old.scale,this.scale=this.old.scale,this.$nextTick(function(){this.scale=3})},onChange:function(t){this.old.x=t.detail.x,this.old.y=t.detail.y},onScale:function(t){this.old.scale=t.detail.scale}}};e.default=n},c42e:function(t,e,i){"use strict";i.r(e);var n=i("2978"),a=i("6e20");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("871c");var l=i("2877"),v=Object(l["a"])(a["default"],n["a"],n["b"],!1,null,"26ca66f4",null);e["default"]=v.exports},dbc4:function(t,e,i){var n=i("92a0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6d530042",n,!0,{sourceMap:!1,shadowMode:!1})}}]);