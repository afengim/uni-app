(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-fab-fab"],{"03ac":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(i){i=t.$handleEvent(i),t.switchBtn(0)}}},[t._v("切换菜单("+t._s(t.directionStr)+"显示)")]),e("v-uni-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(i){i=t.$handleEvent(i),t.switchBtn("left","bottom")}}},[t._v("左下角显示")]),e("v-uni-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(i){i=t.$handleEvent(i),t.switchBtn("right","bottom")}}},[t._v("右下角显示")]),e("v-uni-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(i){i=t.$handleEvent(i),t.switchBtn("left","top")}}},[t._v("左上角显示")]),e("v-uni-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(i){i=t.$handleEvent(i),t.switchBtn("right","top")}}},[t._v("右上角显示")])],1),e("uni-fab",{ref:"fab",attrs:{pattern:t.pattern,content:t.content,horizontal:t.horizontal,vertical:t.vertical,direction:t.direction},on:{trigger:function(i){i=t.$handleEvent(i),t.trigger(i)}}})],1)},o=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return o})},"1d8d":function(t,i,e){"use strict";e.r(i);var n=e("fc40"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);i["default"]=o.a},6624:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'uni-page-body[data-v-21d45b14]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#efeff4}uni-view[data-v-21d45b14]{font-size:%?28?%;line-height:inherit}.example[data-v-21d45b14]{padding:0 %?30?% %?30?%}.example-title[data-v-21d45b14]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?32?%;color:#464e52;padding:%?30?% %?30?% %?30?% %?50?%;margin-top:%?20?%;position:relative;background-color:#fdfdfd;border-bottom:1px #f5f5f5 solid}.example-title__after[data-v-21d45b14]{position:relative;color:#031e3c}.example-title[data-v-21d45b14]:after{content:"";position:absolute;left:%?30?%;margin:auto;top:0;bottom:0;width:%?6?%;height:%?32?%;background-color:#ccc}.example .example-title[data-v-21d45b14]{margin:%?40?% 0}.example-body[data-v-21d45b14]{padding:%?30?%;background:#fff}.example-info[data-v-21d45b14]{padding:%?30?%;color:#3b4144;background:#fff}.uni-padding-wrap[data-v-21d45b14]{padding-top:%?200?%}.btn[data-v-21d45b14]{margin:%?30?%}body.?%PAGE?%[data-v-21d45b14]{background-color:#efeff4}',""])},"821d":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"fab-box fab",class:{leftBottom:t.leftBottom,rightBottom:t.rightBottom,leftTop:t.leftTop,rightTop:t.rightTop}},[e("v-uni-view",{staticClass:"fab-circle",class:{left:"left"===t.horizontal&&"horizontal"===t.direction,top:"top"===t.vertical&&"vertical"===t.direction,bottom:"bottom"===t.vertical&&"vertical"===t.direction,right:"right"===t.horizontal&&"horizontal"===t.direction},style:{"background-color":t.styles.buttonColor},on:{click:function(i){i=t.$handleEvent(i),t._onClick(i)}}},[e("v-uni-text",{staticClass:"uni-icon uni-icon-plusempty",class:{active:t.isShow}})],1),e("v-uni-view",{staticClass:"fab-content",class:{left:"left"===t.horizontal,right:"right"===t.horizontal,flexDirection:"vertical"===t.direction,flexDirectionStart:t.flexDirectionStart,flexDirectionEnd:t.flexDirectionEnd},style:{width:t.boxWidth,height:t.boxHeight,background:t.styles.backgroundColor}},[t.flexDirectionStart||t.horizontalLeft?e("v-uni-view",{staticClass:"fab-item first"}):t._e(),t._l(t.content,function(i,n){return e("v-uni-view",{key:n,staticClass:"fab-item",class:{active:t.isShow},style:{color:i.active?t.styles.selectedColor:t.styles.color},on:{click:function(e){e=t.$handleEvent(e),t._onItemClick(n,i)}}},[e("v-uni-image",{staticClass:"content-image",attrs:{src:i.active?i.selectedIconPath:i.iconPath,mode:"widthFix"}}),e("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))])],1)}),t.flexDirectionEnd||t.horizontalRight?e("v-uni-view",{staticClass:"fab-item first"}):t._e()],2)],1)],1)},o=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return o})},"94de":function(t,i,e){"use strict";var n=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n(e("5176")),a=n(e("f499")),c={name:"UniFab",props:{pattern:{type:Object,default:function(){return{}}},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!1}},data:function(){return{fabShow:!1,flug:!0,isShow:!1,styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#3c3e49"}}},computed:{contentWidth:function(t){return uni.upx2px(110*(this.content.length+1)+20)+"px"},contentWidthMin:function(){return uni.upx2px(110)+"px"},boxWidth:function(){return this.getPosition(3,"horizontal")},boxHeight:function(){return this.getPosition(3,"vertical")},leftBottom:function(){return this.getPosition(0,"left","bottom")},rightBottom:function(){return this.getPosition(0,"right","bottom")},leftTop:function(){return this.getPosition(0,"left","top")},rightTop:function(){return this.getPosition(0,"right","top")},flexDirectionStart:function(){return this.getPosition(1,"vertical","top")},flexDirectionEnd:function(){return this.getPosition(1,"vertical","bottom")},horizontalLeft:function(){return this.getPosition(2,"horizontal","left")},horizontalRight:function(){return this.getPosition(2,"horizontal","right")}},watch:{pattern:function(t,i){console.log((0,a.default)(t)),this.styles=(0,o.default)({},this.styles,t)}},created:function(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=(0,o.default)({},this.styles,this.pattern)},methods:{_onClick:function(){this.isShow=!this.isShow},open:function(){this.isShow=!0},close:function(){this.isShow=!1},_onItemClick:function(t,i){this.$emit("trigger",{index:t,item:i})},getPosition:function(t,i,e){return 0===t?this.horizontal===i&&this.vertical===e:1===t?this.direction===i&&this.vertical===e:2===t?this.direction===i&&this.horizontal===e:this.isShow&&this.direction===i?this.contentWidth:this.contentWidthMin}}};i.default=c},a862:function(t,i,e){"use strict";var n=e("db97"),o=e.n(n);o.a},aae39:function(t,i,e){var n=e("6624");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("10b60e73",n,!0,{sourceMap:!1,shadowMode:!1})},d5d0:function(t,i,e){"use strict";var n=e("aae39"),o=e.n(n);o.a},db97:function(t,i,e){var n=e("de28");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("527862db",n,!0,{sourceMap:!1,shadowMode:!1})},dc32:function(t,i,e){"use strict";e.r(i);var n=e("94de"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);i["default"]=o.a},ddf0:function(t,i,e){"use strict";e.r(i);var n=e("03ac"),o=e("1d8d");for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);e("d5d0");var c=e("2877"),r=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,"21d45b14",null);i["default"]=r.exports},de28:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@font-face{font-family:uniicons;font-weight:400;font-style:normal;src:url(https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf) format("truetype")}.uni-icon[data-v-248c5c32]{font-family:uniicons;font-size:24px;font-weight:400;font-style:normal;line-height:1;display:inline-block;text-decoration:none;-webkit-font-smoothing:antialiased}.uni-icon-plusempty[data-v-248c5c32]:before{content:"\\E468"}.fab-box[data-v-248c5c32]{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;z-index:2}.fab-box.top[data-v-248c5c32]{width:%?60?%;height:%?60?%;right:%?30?%;bottom:%?60?%;border:1px #5989b9 solid;background:#69c;border-radius:%?10?%;color:#fff;-webkit-transition:all .3;-o-transition:all .3;transition:all .3;opacity:0}.fab-box.active[data-v-248c5c32]{opacity:1}.fab-box.fab[data-v-248c5c32]{z-index:10}.fab-box.fab.leftBottom[data-v-248c5c32]{left:%?30?%;bottom:%?60?%}.fab-box.fab.leftTop[data-v-248c5c32]{left:%?30?%;top:%?80?%;\n\ttop:calc(%?80?% + var(--window-top))\n\t}.fab-box.fab.rightBottom[data-v-248c5c32]{right:%?30?%;bottom:%?60?%}.fab-box.fab.rightTop[data-v-248c5c32]{right:%?30?%;top:%?80?%;\n\ttop:calc(%?80?% + var(--window-top))\n\t}.fab-circle[data-v-248c5c32]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:absolute;width:%?110?%;height:%?110?%;background:#3c3e49;\n\t/* background: #5989b9; */border-radius:50%;-webkit-box-shadow:0 0 5px 2px rgba(0,0,0,.2);box-shadow:0 0 5px 2px rgba(0,0,0,.2);z-index:11}.fab-circle.left[data-v-248c5c32]{left:0}.fab-circle.right[data-v-248c5c32]{right:0}.fab-circle.top[data-v-248c5c32]{top:0}.fab-circle.bottom[data-v-248c5c32]{bottom:0}.fab-circle .uni-icon-plusempty[data-v-248c5c32]{color:#fff;font-size:%?80?%;-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s;font-weight:700}.fab-circle .uni-icon-plusempty.active[data-v-248c5c32]{-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);font-size:%?80?%}.fab-content[data-v-248c5c32]{background:#69c;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:%?100?%;overflow:hidden;-webkit-box-shadow:0 0 5px 2px rgba(0,0,0,.1);box-shadow:0 0 5px 2px rgba(0,0,0,.1);-webkit-transition:all .2s;-o-transition:all .2s;transition:all .2s;width:%?110?%}.fab-content.left[data-v-248c5c32]{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.fab-content.right[data-v-248c5c32]{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.fab-content.flexDirection[data-v-248c5c32]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.fab-content.flexDirectionStart[data-v-248c5c32]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.fab-content.flexDirectionEnd[data-v-248c5c32]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.fab-content .fab-item[data-v-248c5c32]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:%?110?%;height:%?110?%;font-size:%?24?%;color:#fff;opacity:0;-webkit-transition:opacity .2s;-o-transition:opacity .2s;transition:opacity .2s}.fab-content .fab-item.active[data-v-248c5c32]{opacity:1}.fab-content .fab-item .content-image[data-v-248c5c32]{width:%?50?%;height:%?50?%;margin-bottom:%?5?%}.fab-content .fab-item.first[data-v-248c5c32]{width:%?110?%}',""])},fc40:function(t,i,e){"use strict";var n=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n(e("fc82")),a={components:{uniFab:o.default},data:function(){return{title:"uni-fab",directionStr:"垂直",horizontal:"left",vertical:"bottom",direction:"horizontal",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"#007AFF"},content:[{iconPath:"/static/component.png",selectedIconPath:"/static/componentHL.png",text:"组件",active:!1},{iconPath:"/static/api.png",selectedIconPath:"/static/apiHL.png",text:"API",active:!1},{iconPath:"/static/template.png",selectedIconPath:"/static/templateHL.png",text:"模版",active:!1}]}},onBackPress:function(){return!!this.$refs.fab.isShow&&(this.$refs.fab.close(),!0)},methods:{trigger:function(t){console.log(t),this.content[t.index].active=!t.item.active,uni.showModal({title:"提示",content:"您".concat(this.content[t.index].active?"选中了":"取消了").concat(t.item.text),success:function(t){t.confirm?console.log("用户点击确定"):t.cancel&&console.log("用户点击取消")}})},switchBtn:function(t,i){0===t?(this.direction="horizontal"===this.direction?"vertical":"horizontal",this.directionStr="horizontal"===this.direction?"垂直":"水平"):(this.horizontal=t,this.vertical=i),this.$forceUpdate()}}};i.default=a},fc82:function(t,i,e){"use strict";e.r(i);var n=e("821d"),o=e("dc32");for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);e("a862");var c=e("2877"),r=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,"248c5c32",null);i["default"]=r.exports}}]);