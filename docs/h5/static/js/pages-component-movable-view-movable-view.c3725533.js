(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-movable-view-movable-view"],{2978:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"page-body"},[e("page-head",{attrs:{title:"movable-view,可拖动视图"}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("示例 1"),e("v-uni-text",[t._v("\\nmovable-view 区域小于 movable-area")])],1),e("v-uni-movable-area",[e("v-uni-movable-view",{attrs:{x:t.x,y:t.y,direction:"all"},on:{change:function(i){i=t.$handleEvent(i),t.onChange(i)}}},[t._v("text")])],1),e("v-uni-view",{staticClass:"uni-link uni-center uni-common-mt",on:{click:function(i){i=t.$handleEvent(i),t.tap(i)}}},[t._v("点击这里移动至 (30px, 30px)")]),e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("示例 2"),e("v-uni-text",[t._v("\\nmovable-view区域大于movable-area")])],1),e("v-uni-movable-area",[e("v-uni-movable-view",{staticClass:"max",attrs:{direction:"all"}},[t._v("text")])],1),e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("示例 3"),e("v-uni-text",[t._v("\\n只可以横向移动")])],1),e("v-uni-movable-area",[e("v-uni-movable-view",{attrs:{direction:"horizontal"}},[t._v("text")])],1),e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("示例 4"),e("v-uni-text",[t._v("\\n只可以纵向移动")])],1),e("v-uni-movable-area",[e("v-uni-movable-view",{attrs:{direction:"vertical"}},[t._v("text")])],1),e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("示例 5"),e("v-uni-text",[t._v("\\n可超出边界")])],1),e("v-uni-movable-area",[e("v-uni-movable-view",{attrs:{direction:"all","out-of-bounds":""}},[t._v("text")])],1),e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("示例 6"),e("v-uni-text",[t._v("\\n带有惯性")])],1),e("v-uni-movable-area",[e("v-uni-movable-view",{attrs:{direction:"all",inertia:""}},[t._v("text")])],1),e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("示例 7"),e("v-uni-text",[t._v("\\n可放缩")])],1),e("v-uni-movable-area",{attrs:{"scale-area":""}},[e("v-uni-movable-view",{attrs:{direction:"all",scale:"","scale-min":"0.5","scale-max":"4","scale-value":t.scale},on:{scale:function(i){i=t.$handleEvent(i),t.onScale(i)}}},[t._v("text")])],1),e("v-uni-view",{staticClass:"uni-link uni-center uni-common-mt",staticStyle:{"padding-bottom":"80upx"},on:{click:function(i){i=t.$handleEvent(i),t.tap2(i)}}},[t._v("点击这里放大3倍")])],1)],1)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},"6e20":function(t,i,e){"use strict";e.r(i);var n=e("a2d5"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);i["default"]=a.a},"871c":function(t,i,e){"use strict";var n=e("dbc4"),a=e.n(n);a.a},"92a0":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"uni-movable-view[data-v-26ca66f4]{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;height:%?150?%;width:%?150?%;background-color:#007aff;color:#fff}uni-movable-area[data-v-26ca66f4]{height:%?300?%;width:100%;background-color:#d8d8d8;overflow:hidden}.max[data-v-26ca66f4]{width:%?500?%;height:%?500?%}",""])},a2d5:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{x:0,y:0,scale:2,old:{x:0,y:0,scale:2}}},methods:{tap:function(t){this.x=this.old.x,this.y=this.old.y,this.$nextTick(function(){this.x=30,this.y=30})},tap2:function(){this.scale=this.old.scale,this.scale=this.old.scale,this.$nextTick(function(){this.scale=3})},onChange:function(t){this.old.x=t.detail.x,this.old.y=t.detail.y},onScale:function(t){this.old.scale=t.detail.scale}}};i.default=n},c42e:function(t,i,e){"use strict";e.r(i);var n=e("2978"),a=e("6e20");for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);e("871c");var v=e("2877"),l=Object(v["a"])(a["default"],n["a"],n["b"],!1,null,"26ca66f4",null);i["default"]=l.exports},dbc4:function(t,i,e){var n=e("92a0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("54938f1a",n,!0,{sourceMap:!1,shadowMode:!1})}}]);