(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-background-audio-background-audio"],{"11ba":function(t,a,i){var e=i("607d");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("2e9ab225",e,!0,{sourceMap:!1,shadowMode:!1})},"583a":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=i("772e"),n={data:function(){return{title:"backgroundAudio",bgAudioMannager:null,dataUrl:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3",playing:!1,playTime:0,formatedPlayTime:"00:00:00"}},onLoad:function(){var t=this;this.playing=this.$backgroundAudioData.playing,this.playTime=this.$backgroundAudioData.playTime,this.formatedPlayTime=this.$backgroundAudioData.formatedPlayTime;var a=uni.getBackgroundAudioManager();a.title||(a.title="致爱丽丝"),a.singer||(a.singer="暂无"),a.coverImgUrl||(a.coverImgUrl="https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg"),a.onPlay(function(){console.log("开始播放"),t.$backgroundAudioData.playing=t.playing=!0}),a.onPause(function(){console.log("暂停播放"),t.$backgroundAudioData.playing=t.playing=!1}),a.onEnded(function(){t.playing=!1,t.$backgroundAudioData.playing=!1,t.$backgroundAudioData.playTime=t.playTime=0,t.$backgroundAudioData.formatedPlayTime=t.formatedPlayTime=e.formatTime(0)}),a.onTimeUpdate(function(i){Math.floor(a.currentTime)>Math.floor(t.playTime)&&(t.$backgroundAudioData.formatedPlayTime=t.formatedPlayTime=e.formatTime(Math.floor(a.currentTime))),t.$backgroundAudioData.playTime=t.playTime=a.currentTime}),this.bgAudioMannager=a},methods:{play:function(t){this.bgAudioMannager.src?(this.bgAudioMannager.seek(this.playTime),this.bgAudioMannager.play()):(this.bgAudioMannager.startTime=this.playTime,this.bgAudioMannager.src=this.dataUrl)},seek:function(t){this.bgAudioMannager.seek(t.target.value)},pause:function(){this.bgAudioMannager.pause()},stop:function(){this.bgAudioMannager.stop(),this.$backgroundAudioData.playing=this.playing=!1,this.$backgroundAudioData.playTime=this.playTime=0,this.$backgroundAudioData.formatedPlayTime=this.formatedPlayTime=e.formatTime(0)}}};a.default=n},"607d":function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,"uni-image[data-v-c3fc7d04]{width:%?150?%;height:%?150?%}.page-body-text[data-v-c3fc7d04]{padding:0 %?30?%}.page-body-wrapper[data-v-c3fc7d04]{margin-top:0}.page-body-info[data-v-c3fc7d04]{padding-bottom:%?50?%}.time-big[data-v-c3fc7d04]{font-size:%?60?%;margin:%?20?%}.slider[data-v-c3fc7d04]{width:%?630?%}.play-time[data-v-c3fc7d04]{font-size:%?28?%;width:100%;padding:%?20?% 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box}.page-body-buttons[data-v-c3fc7d04]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;margin-top:%?100?%}.page-body-button[data-v-c3fc7d04]{width:%?250?%;text-align:center}",""])},7215:function(t,a,i){"use strict";var e=i("11ba"),n=i.n(e);n.a},"772e":function(t,a,i){"use strict";var e=i("288e"),n=e(i("0a0d"));i("28a5");var o=e(i("59ad"));i("6b54"),i("87b3");var u=e(i("e814"));function s(t){if("number"!==typeof t||t<0)return t;var a=(0,u.default)(t/3600);t%=3600;var i=(0,u.default)(t/60);t%=60;var e=t;return[a,i,e].map(function(t){return t=t.toString(),t[1]?t:"0"+t}).join(":")}function r(t,a){return"string"===typeof t&&"string"===typeof a&&(t=(0,o.default)(t),a=(0,o.default)(a)),t=t.toFixed(2),a=a.toFixed(2),{longitude:t.toString().split("."),latitude:a.toString().split(".")}}var d={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var a="";for(var i in this.UNITS)if(t>=this.UNITS[i]){a=Math.floor(t/this.UNITS[i])+i+"前";break}return a||"刚刚"},format:function(t){var a=this.parse(t),i=(0,n.default)()-a.getTime();if(i<this.UNITS["天"])return this.humanize(i);var e=function(t){return t<10?"0"+t:t};return a.getFullYear()+"/"+e(a.getMonth()+1)+"/"+e(a.getDate())+"-"+e(a.getHours())+":"+e(a.getMinutes())},parse:function(t){var a=t.split(/[^0-9]/);return new Date(a[0],a[1]-1,a[2],a[3],a[4],a[5])}};t.exports={formatTime:s,formatLocation:r,dateUtils:d}},"9bef":function(t,a,i){"use strict";i.r(a);var e=i("583a"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,function(){return e[t]})}(o);a["default"]=n.a},a6d7:function(t,a,i){"use strict";i.r(a);var e=i("f6bd"),n=i("9bef");for(var o in n)"default"!==o&&function(t){i.d(a,t,function(){return n[t]})}(o);i("7215");var u=i("2877"),s=Object(u["a"])(n["default"],e["a"],e["b"],!1,null,"c3fc7d04",null);a["default"]=s.exports},f6bd:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"uni-center"},[i("v-uni-text",{staticClass:"time-big"},[t._v(t._s(t.formatedPlayTime))])],1),i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-slider",{staticClass:"slider",attrs:{min:"0",max:"21",step:"1",value:t.playTime},on:{change:function(a){a=t.$handleEvent(a),t.seek(a)}}})],1),i("v-uni-view",{staticClass:"play-time"},[i("v-uni-text",[t._v("00:00")]),i("v-uni-text",[t._v("00:21")])],1),i("v-uni-view",{staticClass:"uni-hello-text"},[t._v("注意：离开当前页面后背景音乐将保持播放，但退出uni-app将停止")]),i("v-uni-view",{staticClass:"page-body-buttons"},[t.playing?[i("v-uni-view",{staticClass:"page-body-button",on:{click:function(a){a=t.$handleEvent(a),t.stop(a)}}},[i("v-uni-image",{attrs:{src:"/static/stop.png"}})],1),i("v-uni-view",{staticClass:"page-body-button",on:{click:function(a){a=t.$handleEvent(a),t.pause(a)}}},[i("v-uni-image",{attrs:{src:"/static/pause.png"}})],1)]:t._e(),t.playing?t._e():[i("v-uni-view",{staticClass:"page-body-button"}),i("v-uni-view",{staticClass:"page-body-button",on:{click:function(a){a=t.$handleEvent(a),t.play(a)}}},[i("v-uni-image",{attrs:{src:"/static/play.png"}})],1)],i("v-uni-view",{staticClass:"page-body-button"})],2)],1)],1)},n=[];i.d(a,"a",function(){return e}),i.d(a,"b",function(){return n})}}]);