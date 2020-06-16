/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function e(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var u=arguments[t],i=0,c=u.length;i<c;i++,o++)n[o]=u[i];return n}var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),r=new Uint8Array(16);function n(){if(!t)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(r)}for(var o=[],u=0;u<256;++u)o[u]=(u+256).toString(16).substr(1);function i(e,t,r){var u=t&&r||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||n)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var c=0;c<16;++c)t[u+c]=i[c];return t||function(e,t){var r=t||0,n=o;return[n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]]].join("")}(i)}var c=Object.prototype.hasOwnProperty,a=Array.isArray,s=function(e){var t=Object.create(null);return function(r){return t[r]||(t[r]=e(r))}},l=/-(\w)/g,f=s((function(e){return e.replace(l,(function(e,t){return t?t.toUpperCase():""}))})),p=s((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),g=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;function d(e,t){if(a(e))return e;if(t&&(r=t,n=e,c.call(r,n)))return[e];var r,n,o=[];return e.replace(g,(function(e,t,r,n){return o.push(r?n.replace(/\\(\\)?/g,"$1"):t||e),n})),o}function m(e,t){var r,n=d(t,e);for(r=n.shift();null!=r;){if(null==(e=e[r]))return;r=n.shift()}return e}var v=new Map;function h(e){if(!function(e){if(e){var t=e.tagName;return 0===t.indexOf("UNI-")||"BODY"===t}return!1}(e))throw Error("no such element");var t,r,n={elementId:(t=e,r=t._id,r||(r=i(),t._id=r,v.set(r,{id:r,element:t})),r),tagName:e.tagName.toLocaleLowerCase().replace("uni-","")},o=e.__vue__;return o&&(o.$parent&&o.$parent.$el===e&&(o=o.$parent),o&&!o.$options.isReserved&&(n.nodeId=function(e){if(e._$weex)return e._uid;if(e._$id)return e._$id;var t=function(e){for(var t=e.$parent;t;){if(t._$id)return t;t=t.$parent}}(e);if(!e.$parent)return"-1";var r=e.$vnode,n=r.context;return n&&n!==t&&n._$id?n._$id+";"+t._$id+","+r.data.attrs._i:t._$id+","+r.data.attrs._i}(o))),"video"===n.tagName&&(n.videoId=n.nodeId),console.log(n),n}var _={input:{input:function(e,t){var r=e.__vue__;r.valueSync=t,r.$triggerInput({},{value:t})}},textarea:{input:function(e,t){var r=e.__vue__;r.valueSync=t,r.$triggerInput({},{value:t})}},"scroll-view":{scrollTo:function(e,t,r){var n=e.__vue__.$refs.main;n.scrollLeft=t,n.scrollTop=r},scrollTop:function(e){return e.__vue__.$refs.main.scrollTop},scrollLeft:function(e){return e.__vue__.$refs.main.scrollLeft},scrollWidth:function(e){return e.__vue__.$refs.main.scrollWidth},scrollHeight:function(e){return e.__vue__.$refs.main.scrollHeight}},swiper:{swipeTo:function(e,t){e.__vue__.current=t}},"movable-view":{moveTo:function(e,t,r){e.__vue__._animationTo(t,r)}},switch:{tap:function(e){e.click()}},slider:{slideTo:function(e,t){var r=e.__vue__,n=r.$refs["uni-slider"],o=n.offsetWidth,u=n.getBoundingClientRect().left;r.value=t,r._onClick({x:(t-r.min)*o/(r.max-r.min)+u})}}},y={getWindow:function(e){return window},getDocument:function(e){return document},getEl:function(e){var t=v.get(e);if(!t)throw Error("element destroyed");return t.element},getOffset:function(e){var t=e.getBoundingClientRect();return Promise.resolve({left:t.left+window.pageXOffset,top:t.top+window.pageYOffset})},querySelector:function(e,t){return"page"===t&&(t="body"),Promise.resolve(h(e.querySelector(t)))},querySelectorAll:function(e,t){var r=[],n=document.querySelectorAll(t);return[].forEach.call(n,(function(e){try{r.push(h(e))}catch(e){}})),Promise.resolve({elements:r})},queryProperties:function(e,t){return Promise.resolve({properties:t.map((function(t){var r=m(e,t);return"document.documentElement.scrollTop"===t&&0===r&&(r=m(e,"document.body.scrollTop")),r}))})},queryAttributes:function(e,t){return Promise.resolve({attributes:t.map((function(t){return String(e.getAttribute(t))}))})},queryStyles:function(e,t){var r=getComputedStyle(e);return Promise.resolve({styles:t.map((function(e){return r[e]}))})},queryHTML:function(e,t){return Promise.resolve({html:(r="outer"===t?e.outerHTML:e.innerHTML,r.replace(/\n/g,"").replace(/(<uni-text[^>]*>)(<span[^>]*>[^<]*<\/span>)(.*?<\/uni-text>)/g,"$1$3").replace(/<\/?[^>]*>/g,(function(e){return-1<e.indexOf("<body")?"<page>":"</body>"===e?"</page>":0!==e.indexOf("<uni-")&&0!==e.indexOf("</uni-")?"":e.replace(/uni-/g,"").replace(/ role=""/g,"").replace(/ aria-label=""/g,"")})))});var r},dispatchTapEvent:function(e){return e.click(),Promise.resolve()},dispatchLongpressEvent:function(e){return Promise.resolve()},dispatchTouchEvent:function(e,t,r){r||(r={}),r.touches||(r.touches=[]),r.changedTouches||(r.changedTouches=[]),r.touches.length||r.touches.push({identifier:Date.now(),target:e});var n=r.touches.map((function(e){return new Touch(e)})),o=r.changedTouches.map((function(e){return new Touch(e)}));return e.dispatchEvent(new TouchEvent(t,{cancelable:!0,bubbles:!0,touches:n,targetTouches:[],changedTouches:o})),Promise.resolve()},callFunction:function(t,r,n){var o=m(_,r);return o?Promise.resolve({result:o.apply(null,e([t],n))}):Promise.reject(Error(r+" not exists"))},triggerEvent:function(e,t,r){var n=e.__vue__;return n.$trigger&&n.$trigger(t,{},r),Promise.resolve()}};["movable-view","picker","ad","button","checkbox-group","checkbox","form","icon","label","movable-area","navigator","picker-view-column","picker-view","progress","radio-group","radio","rich-text","u-slider","swiper-item","swiper","switch"].map((function(e){return p(f(e))}));var E=Object.assign({},function(e){return{"Page.getElement":function(t){return e.querySelector(e.getDocument(t.pageId),t.selector)},"Page.getElements":function(t){return e.querySelectorAll(e.getDocument(t.pageId),t.selector)},"Page.getWindowProperties":function(t){return e.queryProperties(e.getWindow(t.pageId),t.names)}}}(y),function(e){var t=function(t){return e.getEl(t.elementId,t.pageId)};return{"Element.getElement":function(r){return e.querySelector(t(r),r.selector)},"Element.getElements":function(r){return e.querySelectorAll(t(r),r.selector)},"Element.getDOMProperties":function(r){return e.queryProperties(t(r),r.names)},"Element.getProperties":function(r){var n=t(r),o=n.__vue__||n.attr||{};return e.queryProperties(o,r.names)},"Element.getOffset":function(r){return e.getOffset(t(r))},"Element.getAttributes":function(r){return e.queryAttributes(t(r),r.names)},"Element.getStyles":function(r){return e.queryStyles(t(r),r.names)},"Element.getHTML":function(r){return e.queryHTML(t(r),r.type)},"Element.tap":function(r){return e.dispatchTapEvent(t(r))},"Element.longpress":function(r){return e.dispatchLongpressEvent(t(r))},"Element.touchstart":function(r){return e.dispatchTouchEvent(t(r),"touchstart",r)},"Element.touchmove":function(r){return e.dispatchTouchEvent(t(r),"touchmove",r)},"Element.touchend":function(r){return e.dispatchTouchEvent(t(r),"touchend",r)},"Element.callFunction":function(r){return e.callFunction(t(r),r.functionName,r.args)},"Element.triggerEvent":function(r){return e.triggerEvent(t(r),r.type,r.detail)}}}(y));function w(e){return UniViewJSBridge.publishHandler("onAutoMessageReceive",e)}UniViewJSBridge.subscribe("sendAutoMessage",(function(e){var t=e.id,r=e.method,n=e.params,o={id:t},u=E[r];if(!u)return o.error={message:r+" unimplemented"},w(o);try{u(n).then((function(e){e&&(o.result=e)})).catch((function(e){o.error={message:e.message}})).finally((function(){w(o)}))}catch(e){o.error={message:e.message},w(o)}}));
