(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-list2detail-detail-list2detail-detail"],{"14e6":function(e,t,a){"use strict";var n=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a481");var i=n(a("f499"));a("55dd");var r=n(a("fbee")),s="/pages/template/list2detail-detail/list2detail-detail";function o(e){for(var t=[],a=0,n=e.length;a<n;a++)switch(e[a]){case"weixin":t.push({text:"分享到微信好友",id:"weixin",sort:0}),t.push({text:"分享到微信朋友圈",id:"weixin",sort:1});break;default:break}return t.sort(function(e,t){return e.sort-t.sort}),t}var l={data:function(){return{title:"",banner:{},htmlNodes:[]}},onLoad:function(e){var t=e.detailDate||e.payload;try{this.banner=JSON.parse(decodeURIComponent(t))}catch(a){this.banner=JSON.parse(t)}uni.setNavigationBarTitle({title:this.banner.title}),this.getDetail()},onShareAppMessage:function(){return{title:this.banner.title,path:s+"?detailDate="+(0,i.default)(this.banner)}},onNavigationBarButtonTap:function(e){var t=this,a=e.index;if(0===a){uni.getProvider({service:"share",success:function(e){if(e.provider&&e.provider.length&&~e.provider.indexOf("weixin")){var a=o(e.provider);uni.showActionSheet({itemList:a.map(function(e){return e.text}),success:function(e){var a=e.tapIndex;uni.share({provider:"weixin",type:0,title:t.banner.title,scene:0===a?"WXSceneSession":"WXSenceTimeline",href:"https://uniapp.dcloud.io/h5"+s+"?detailDate="+(0,i.default)(t.banner),imageUrl:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png"})}})}else uni.showToast({title:"未检测到可用的微信分享服务"})},fail:function(e){uni.showToast({title:"获取分享服务失败"})}})}},methods:{getDetail:function(){var e=this;uni.request({url:"https://unidemo.dcloud.net.cn/api/news/36kr/"+this.banner.post_id,success:function(t){if(200==t.statusCode){var a=t.data.content.replace(/\\/g,"").replace(/<img/g,'<img style="display:none;"');e.htmlNodes=(0,r.default)(a)}},fail:function(){console.log("fail")}})}}};t.default=l},4027:function(e,t,a){var n=a("ab68");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("47fb08b8",n,!0,{sourceMap:!1,shadowMode:!1})},aaa1:function(e,t,a){"use strict";var n=a("4027"),i=a.n(n);i.a},ab68:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".banner[data-v-75fba0f6]{height:%?360?%;overflow:hidden;position:relative;background-color:#ccc}.banner-img[data-v-75fba0f6]{width:100%}.banner-title[data-v-75fba0f6]{max-height:%?84?%;overflow:hidden;position:absolute;left:%?30?%;bottom:%?30?%;width:90%;font-size:%?32?%;font-weight:400;line-height:%?42?%;color:#fff;z-index:11}.article-meta[data-v-75fba0f6]{padding:%?20?% %?40?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;color:grey}.article-text[data-v-75fba0f6]{font-size:%?26?%;line-height:%?50?%;margin:0 %?20?%}.article-author[data-v-75fba0f6],.article-time[data-v-75fba0f6]{font-size:%?30?%}.article-content[data-v-75fba0f6]{padding:0 %?30?%;overflow:hidden;font-size:%?30?%;margin-bottom:%?30?%}",""])},ab95:function(e,t,a){"use strict";a.r(t);var n=a("af30"),i=a("deba");for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);a("aaa1");var s=a("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"75fba0f6",null);t["default"]=o.exports},af30:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"banner"},[a("v-uni-image",{staticClass:"banner-img",attrs:{src:e.banner.cover}}),a("v-uni-view",{staticClass:"banner-title"},[e._v(e._s(e.banner.title))])],1),a("v-uni-view",{staticClass:"article-meta"},[a("v-uni-text",{staticClass:"article-author"},[e._v(e._s(e.banner.author_name))]),a("v-uni-text",{staticClass:"article-text"},[e._v("发表于")]),a("v-uni-text",{staticClass:"article-time"},[e._v(e._s(e.banner.published_at))])],1),a("v-uni-view",{staticClass:"article-content"},[a("v-uni-rich-text",{attrs:{nodes:e.htmlNodes}})],1)],1)},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},deba:function(e,t,a){"use strict";a.r(t);var n=a("14e6"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=i.a},fbee:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("28a5"),a("7f7f"),a("3b2b"),a("a481"),a("4917");var n=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,i=/^<\/([-A-Za-z0-9_]+)[^>]*>/,r=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,s=h("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),o=h("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),l=h("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),c=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),d=h("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),u=h("script,style");function f(e,t){var a,f,h,p=[],b=e;p.last=function(){return this[this.length-1]};while(e){if(f=!0,p.last()&&u[p.last()])e=e.replace(new RegExp("([\\s\\S]*?)</"+p.last()+"[^>]*>"),function(e,a){return a=a.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),t.chars&&t.chars(a),""}),g("",p.last());else if(0==e.indexOf("\x3c!--")?(a=e.indexOf("--\x3e"),a>=0&&(t.comment&&t.comment(e.substring(4,a)),e=e.substring(a+3),f=!1)):0==e.indexOf("</")?(h=e.match(i),h&&(e=e.substring(h[0].length),h[0].replace(i,g),f=!1)):0==e.indexOf("<")&&(h=e.match(n),h&&(e=e.substring(h[0].length),h[0].replace(n,m),f=!1)),f){a=e.indexOf("<");var v=a<0?e:e.substring(0,a);e=a<0?"":e.substring(a),t.chars&&t.chars(v)}if(e==b)throw"Parse Error: "+e;b=e}function m(e,a,n,i){if(a=a.toLowerCase(),o[a])while(p.last()&&l[p.last()])g("",p.last());if(c[a]&&p.last()==a&&g("",a),i=s[a]||!!i,i||p.push(a),t.start){var u=[];n.replace(r,function(e,t){var a=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:d[t]?t:"";u.push({name:t,value:a,escaped:a.replace(/(^|[^\\])"/g,'$1\\"')})}),t.start&&t.start(a,u,i)}}function g(e,a){if(a){for(n=p.length-1;n>=0;n--)if(p[n]==a)break}else var n=0;if(n>=0){for(var i=p.length-1;i>=n;i--)t.end&&t.end(p[i]);p.length=n}}g()}function h(e){for(var t={},a=e.split(","),n=0;n<a.length;n++)t[a[n]]=!0;return t}function p(e){return e.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function b(e){return e.reduce(function(e,t){var a=t.value,n=t.name;return e[n]?e[n]=e[n]+" "+a:e[n]=a,e},{})}function v(e){e=p(e);var t=[],a={node:"root",children:[]};return f(e,{start:function(e,n,i){var r={name:e};if(0!==n.length&&(r.attrs=b(n)),i){var s=t[0]||a;s.children||(s.children=[]),s.children.push(r)}else t.unshift(r)},end:function(e){var n=t.shift();if(n.name!==e&&console.error("invalid state: mismatch end tag"),0===t.length)a.children.push(n);else{var i=t[0];i.children||(i.children=[]),i.children.push(n)}},chars:function(e){var n={type:"text",text:e};if(0===t.length)a.children.push(n);else{var i=t[0];i.children||(i.children=[]),i.children.push(n)}},comment:function(e){var a={node:"comment",text:e},n=t[0];n.children||(n.children=[]),n.children.push(a)}}),a.children}var m=v;t.default=m}}]);