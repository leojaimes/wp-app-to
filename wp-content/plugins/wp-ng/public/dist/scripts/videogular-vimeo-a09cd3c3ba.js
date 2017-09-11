!function(e,t){var a={catchMethods:{methodreturn:[],count:0},init:function(t){var a,n,r;t.originalEvent.origin.match(/vimeo/g)&&"data"in t.originalEvent&&(r="string"===e.type(t.originalEvent.data)?e.parseJSON(t.originalEvent.data):t.originalEvent.data)&&(a=this.setPlayerID(r),a.length&&(n=this.setVimeoAPIurl(a),r.hasOwnProperty("event")&&this.handleEvent(r,a,n),r.hasOwnProperty("method")&&this.handleMethod(r,a,n)))},setPlayerID:function(t){return e("iframe[src*="+t.player_id+"]")},setVimeoAPIurl:function(e){return"http"!==e.attr("src").substr(0,4)?"https:"+e.attr("src").split("?")[0]:e.attr("src").split("?")[0]},handleMethod:function(e,t,a){this.catchMethods.methodreturn.push(e.value)},handleEvent:function(t,a,n){switch(t.event.toLowerCase()){case"ready":for(var r in e._data(a[0],"events"))r.match(/loadProgress|playProgress|play|pause|finish|seek|cuechange/)&&a[0].contentWindow.postMessage(JSON.stringify({method:"addEventListener",value:r}),n);if(a.data("vimeoAPICall")){for(var i=a.data("vimeoAPICall"),o=0;o<i.length;o++)a[0].contentWindow.postMessage(JSON.stringify(i[o].message),i[o].api);a.removeData("vimeoAPICall")}a.data("vimeoReady",!0),a.triggerHandler("ready");break;case"seek":a.triggerHandler("seek",[t.data]);break;case"loadprogress":a.triggerHandler("loadProgress",[t.data]);break;case"playprogress":a.triggerHandler("playProgress",[t.data]);break;case"pause":a.triggerHandler("pause");break;case"finish":a.triggerHandler("finish");break;case"play":a.triggerHandler("play");break;case"cuechange":a.triggerHandler("cuechange")}}},n=e.fn.vimeoLoad=function(){var t=e(this).attr("src");if(null===t.match(/player_id/g)){var a=-1===t.indexOf("?")?"?":"&",n=e.param({api:1,player_id:"vvvvimeoVideo-"+Math.floor(1e7*Math.random()+1).toString()});e(this).attr("src",t+a+n)}return this};jQuery(document).ready(function(){e("iframe[src*='vimeo.com']").each(function(){n.call(this)})}),e(t).on("message",function(e){a.init(e)}),e.vimeo=function(e,n,r){var i={},o=a.catchMethods.methodreturn.length;if("string"==typeof n&&(i.method=n),void 0!==typeof r&&"function"!=typeof r&&(i.value=r),"iframe"===e.prop("tagName").toLowerCase()&&i.hasOwnProperty("method"))if(e.data("vimeoReady"))e[0].contentWindow.postMessage(JSON.stringify(i),a.setVimeoAPIurl(e));else{var s=e.data("vimeoAPICall")?e.data("vimeoAPICall"):[];s.push({message:i,api:a.setVimeoAPIurl(e)}),e.data("vimeoAPICall",s)}return"get"!==n.toString().substr(0,3)&&"paused"!==n.toString()||"function"!=typeof r||(!function(e,n,r){var i=t.setInterval(function(){a.catchMethods.methodreturn.length!=e&&(t.clearInterval(i),n(a.catchMethods.methodreturn[r]))},10)}(o,r,a.catchMethods.count),a.catchMethods.count++),e},e.fn.vimeo=function(t,a){return e.vimeo(this,t,a)}}(jQuery,window),function(e,t){var a={catchMethods:{methodreturn:[],count:0},init:function(t){var a,n,r;t.originalEvent.origin.match(/vimeo/g)&&"data"in t.originalEvent&&(r="string"===e.type(t.originalEvent.data)?e.parseJSON(t.originalEvent.data):t.originalEvent.data)&&(a=this.setPlayerID(r),a.length&&(n=this.setVimeoAPIurl(a),r.hasOwnProperty("event")&&this.handleEvent(r,a,n),r.hasOwnProperty("method")&&this.handleMethod(r,a,n)))},setPlayerID:function(t){return e("iframe[src*="+t.player_id+"]")},setVimeoAPIurl:function(e){return"http"!==e.attr("src").substr(0,4)?"https:"+e.attr("src").split("?")[0]:e.attr("src").split("?")[0]},handleMethod:function(e){this.catchMethods.methodreturn.push(e.value)},handleEvent:function(t,a,n){switch(t.event.toLowerCase()){case"ready":for(var r in e._data(a[0],"events"))r.match(/loadProgress|playProgress|play|pause|finish|seek|cuechange/)&&a[0].contentWindow.postMessage(JSON.stringify({method:"addEventListener",value:r}),n);if(a.data("vimeoAPICall")){for(var i=a.data("vimeoAPICall"),o=0;o<i.length;o++)a[0].contentWindow.postMessage(JSON.stringify(i[o].message),i[o].api);a.removeData("vimeoAPICall")}a.data("vimeoReady",!0),a.triggerHandler("ready");break;case"seek":a.triggerHandler("seek",[t.data]);break;case"loadprogress":a.triggerHandler("loadProgress",[t.data]);break;case"playprogress":a.triggerHandler("playProgress",[t.data]);break;case"pause":a.triggerHandler("pause");break;case"finish":a.triggerHandler("finish");break;case"play":a.triggerHandler("play");break;case"cuechange":a.triggerHandler("cuechange")}}},n=e.fn.vimeoLoad=function(){var t=e(this).attr("src");if(null===t.match(/player_id/g)){var a=-1===t.indexOf("?")?"?":"&",n=e.param({api:1,player_id:"vvvvimeoVideo-"+Math.floor(1e7*Math.random()+1).toString()});e(this).attr("src",t+a+n)}return this};jQuery(document).ready(function(){e("iframe[src*='vimeo.com']").each(function(){n.call(this)})}),e(t).on("message",function(e){a.init(e)}),e.vimeo=function(e,n,r){var i={},o=a.catchMethods.methodreturn.length;if("string"==typeof n&&(i.method=n),void 0!==typeof r&&"function"!=typeof r&&(i.value=r),"iframe"===e.prop("tagName").toLowerCase()&&i.hasOwnProperty("method"))if(e.data("vimeoReady"))e[0].contentWindow.postMessage(JSON.stringify(i),a.setVimeoAPIurl(e));else{var s=e.data("vimeoAPICall")?e.data("vimeoAPICall"):[];s.push({message:i,api:a.setVimeoAPIurl(e)}),e.data("vimeoAPICall",s)}return"get"!==n.toString().substr(0,3)&&"paused"!==n.toString()||"function"!=typeof r||(function(e,n,r){var i=t.setInterval(function(){a.catchMethods.methodreturn.length!=e&&(t.clearInterval(i),n(a.catchMethods.methodreturn[r]))},10)}(o,r,a.catchMethods.count),a.catchMethods.count++),e},e.fn.vimeo=function(t,a){return e.vimeo(this,t,a)}}(jQuery,window),function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var a={};t.m=e,t.c=a,t.p="",t(0)}([function(e,t){"use strict";angular.module("videogular.plugins.vimeo",[]).directive("vgVimeo",["VG_STATES",function(e){return{restrict:"A",require:"^videogular",link:function(t,a,n,r){function i(e){var t=e.match(/^.+vimeo.com\/(.*\/)?([^#\?]*)/);return t?t[2]||t[1]:null}function o(){var e=new CustomEvent("loadedmetadata");r.mediaElement[0].dispatchEvent(e)}function s(){Object.defineProperties(r.mediaElement[0],{currentTime:{get:function(){return g},set:function(e){g=e,l.vimeo("seekTo",e)}},duration:{get:function(){return v}},paused:{get:function(){return f}},videoWidth:{get:function(){return h}},videoHeight:{get:function(){return m}},volume:{get:function(){return p},set:function(e){p=e,l.vimeo("setVolume",e)}}}),r.mediaElement[0].play=function(){l.vimeo("play")},r.mediaElement[0].pause=function(){l.vimeo("pause")},l.vimeo("getVolume",function(e){p=e,r.onVolumeChange()}).vimeo("getCurrentTime",function(e){g=e,o()}).vimeo("getDuration",function(e){v=e,o()})}function c(e){return $("<iframe>",{src:"//player.vimeo.com/video/"+e+"?api=1&player_id=vimeoplayer",frameborder:0,scrolling:"no"}).css({width:"100%",height:"calc(100% + 400px)","margin-top":"-200px"})}function d(){l.on("ready",function(){s()}).on("play",function(){f=!1;var t=new CustomEvent("playing");r.mediaElement[0].dispatchEvent(t),r.setState(e.PLAY)}).on("pause",function(){f=!0;var t=new CustomEvent("pause");r.mediaElement[0].dispatchEvent(t),r.setState(e.PAUSE)}).on("finish",function(){r.onComplete()}).on("playProgress",function(e,t){g=t.seconds,v=t.duration,r.onUpdateTime({target:r.mediaElement[0]})})}function u(e){if(!e)return void(l&&l.destroy());var t=i(e);t&&(l=c(t),$(r.mediaElement[0]).replaceWith(l),d(l))}var l,h,m,g,v,f,p;t.$watch(function(){return r.sources},function(e,t){u(e&&e.length>0&&e[0].src?e[0].src.toString():null)})}}}])}]);