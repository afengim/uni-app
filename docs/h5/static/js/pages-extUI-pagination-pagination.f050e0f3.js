(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-pagination-pagination"],{"02b8":function(t,e,i){var n=i("194f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("c479720e",n,!0,{sourceMap:!1,shadowMode:!1})},"194f":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.uni-pagination[data-v-35349eb6]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?40?%;position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.uni-pagination__btns[data-v-35349eb6]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.uni-pagination__btn[data-v-35349eb6]{width:%?120?%;height:%?60?%;padding:0 %?16?%;line-height:%?60?%;font-size:%?28?%;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;background-color:#f8f8f8;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.uni-pagination__btn[data-v-35349eb6]:after{content:"";width:200%;height:200%;position:absolute;top:0;left:0;border:1px solid #e5e5e5;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?12?%}.uni-pagination__num[data-v-35349eb6]{width:%?100?%;height:%?60?%;line-height:%?60?%;font-size:%?28?%;color:#333;position:absolute;left:50%;top:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.uni-pagination__num-current[data-v-35349eb6]{color:#007aff}.uni-pagination--disabled[data-v-35349eb6]{opacity:.3}.uni-pagination--hover[data-v-35349eb6]{color:rgba(0,0,0,.6);background-color:#f1f1f1}',""])},"19b6":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'uni-page-body[data-v-0f918d0a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#efeff4}uni-view[data-v-0f918d0a]{font-size:%?28?%;line-height:inherit}.example[data-v-0f918d0a]{padding:0 %?30?% %?30?%}.example-title[data-v-0f918d0a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?32?%;color:#464e52;padding:%?30?% %?30?% %?30?% %?50?%;margin-top:%?20?%;position:relative;background-color:#fdfdfd;border-bottom:1px #f5f5f5 solid}.example-title__after[data-v-0f918d0a]{position:relative;color:#031e3c}.example-title[data-v-0f918d0a]:after{content:"";position:absolute;left:%?30?%;margin:auto;top:0;bottom:0;width:%?6?%;height:%?32?%;background-color:#ccc}.example .example-title[data-v-0f918d0a]{margin:%?40?% 0}.example-body[data-v-0f918d0a]{padding:%?30?%;background:#fff}.example-info[data-v-0f918d0a]{padding:%?30?%;color:#3b4144;background:#fff}.btn-view[data-v-0f918d0a]{padding:%?30?%;text-align:center;background:#fff}uni-button[data-v-0f918d0a]{margin-top:%?30?%}body.?%PAGE?%[data-v-0f918d0a]{background-color:#efeff4}',""])},3362:function(t,e,i){"use strict";i.r(e);var n=i("d9d0"),a=i("52f6");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("efea");var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"0f918d0a",null);e["default"]=s.exports},"4fab":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-pagination"},[i("v-uni-view",{staticClass:"uni-pagination__btns"},[i("v-uni-view",{class:["uni-pagination__btn",{"uni-pagination--disabled":1===t.currentIndex}],attrs:{"hover-class":1===t.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(e){e=t.$handleEvent(e),t.clickLeft(e)}}},[!0===t.showIcon||"true"===t.showIcon?[i("uni-icons",{attrs:{color:"#000",size:"20",type:"arrowleft"}})]:[t._v(t._s(t.prevText))]],2),i("v-uni-view",{class:["uni-pagination__btn",{"uni-pagination--disabled":t.currentIndex===t.maxPage}],attrs:{"hover-class":t.currentIndex===t.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(e){e=t.$handleEvent(e),t.clickRight(e)}}},[!0===t.showIcon||"true"===t.showIcon?[i("uni-icons",{attrs:{color:"#000",size:"20",type:"arrowright"}})]:[t._v(t._s(t.nextText))]],2)],1),i("v-uni-view",{staticClass:"uni-pagination__num"},[i("v-uni-text",{staticClass:"uni-pagination__num-current"},[t._v(t._s(t.currentIndex))]),t._v("/"+t._s(t.maxPage))],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"52f6":function(t,e,i){"use strict";i.r(e);var n=i("aba2c"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"57e0":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var a=n(i("bbd2")),o={name:"UniPagination",components:{uniIcons:a.default},props:{prevText:{type:String,default:"上一页"},nextText:{type:String,default:"下一页"},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1}},data:function(){return{currentIndex:1}},computed:{maxPage:function(){var t=1,e=Number(this.total),i=Number(this.pageSize);return e&&i&&(t=Math.ceil(e/i)),t}},watch:{current:function(t){this.currentIndex=+t}},created:function(){this.currentIndex=+this.current},methods:{clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)!==this.maxPage&&(this.currentIndex+=1,this.change("next"))},change:function(t){this.$emit("change",{type:t,current:this.currentIndex})}}};e.default=o},"6de0":function(t,e,i){"use strict";var n=i("02b8"),a=i.n(n);a.a},"75cf":function(t,e,i){"use strict";i.r(e);var n=i("57e0"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"813e":function(t,e,i){var n=i("19b6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("26ee8db2",n,!0,{sourceMap:!1,shadowMode:!1})},"871e":function(t,e,i){"use strict";i.r(e);var n=i("4fab"),a=i("75cf");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("6de0");var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"35349eb6",null);e["default"]=s.exports},aba2c:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("871e")),o=n(i("9e91")),r=n(i("edac")),s={components:{uniPagination:a.default,uniList:o.default,uniListItem:r.default},data:function(){return{current:1,total:0,pageSize:10}},methods:{add:function(){this.total+=10},reset:function(){this.total=0,this.current=1},change:function(t){console.log(t),this.current=t.current}}};e.default=s},d9d0:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"example-title"},[t._v("默认样式")]),i("v-uni-view",{staticClass:"example-body"},[i("uni-pagination",{attrs:{total:50,title:"标题文字"}})],1),i("v-uni-view",{staticClass:"example-title"},[t._v("修改按钮文字")]),i("v-uni-view",{staticClass:"example-body"},[i("uni-pagination",{attrs:{total:50,title:"标题文字","prev-text":"前一页","next-text":"后一页"}})],1),i("v-uni-view",{staticClass:"example-title"},[t._v("图标样式")]),i("v-uni-view",{staticClass:"example-body"},[i("uni-pagination",{attrs:{"show-icon":!0,total:50,title:"标题文字"}})],1),i("v-uni-view",{staticClass:"example-title"},[t._v("修改数据长度")]),i("v-uni-view",{staticClass:"example-body"},[i("uni-pagination",{attrs:{current:t.current,total:t.total,title:"标题文字","show-icon":"true"},on:{change:function(e){e=t.$handleEvent(e),t.change(e)}}})],1),i("v-uni-view",{staticClass:"btn-view"},[i("v-uni-view",[t._v("当前页："+t._s(t.current)+"，数据总量："+t._s(t.total)+"条，每页数据："+t._s(t.pageSize))]),i("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.add(e)}}},[t._v("增加10条数据")]),i("v-uni-button",{attrs:{type:"default"},on:{click:function(e){e=t.$handleEvent(e),t.reset(e)}}},[t._v("重置数据")])],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},efea:function(t,e,i){"use strict";var n=i("813e"),a=i.n(n);a.a}}]);