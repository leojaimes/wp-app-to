"use strict";angular.module("com.2fdevs.videogular",["ngSanitize"]).run(["$templateCache",function(e){e.put("vg-templates/vg-media-video","<video></video>"),e.put("vg-templates/vg-media-audio","<audio></audio>"),Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),i=this,n=function(){},a=function(){return i.apply(this instanceof n?this:e,t.concat(Array.prototype.slice.call(arguments)))};return n.prototype=this.prototype,a.prototype=new n,a})}]),angular.module("com.2fdevs.videogular").constant("VG_STATES",{PLAY:"play",PAUSE:"pause",STOP:"stop"}).constant("VG_VOLUME_KEY","videogularVolume"),angular.module("com.2fdevs.videogular").controller("vgController",["$scope","$window","vgConfigLoader","vgFullscreen","VG_UTILS","VG_STATES","VG_VOLUME_KEY",function(e,t,i,n,a,r,s){var o=null,l=!1,u=!1,d=!1,c=!1;this.videogularElement=null,this.clearMedia=function(){this.mediaElement[0].src="",this.mediaElement[0].removeEventListener("canplay",this.onCanPlay.bind(this),!1),this.mediaElement[0].removeEventListener("loadedmetadata",this.onLoadMetaData.bind(this),!1),this.mediaElement[0].removeEventListener("waiting",this.onStartBuffering.bind(this),!1),this.mediaElement[0].removeEventListener("ended",this.onComplete.bind(this),!1),this.mediaElement[0].removeEventListener("playing",this.onStartPlaying.bind(this),!1),this.mediaElement[0].removeEventListener("play",this.onPlay.bind(this),!1),this.mediaElement[0].removeEventListener("pause",this.onPause.bind(this),!1),this.mediaElement[0].removeEventListener("volumechange",this.onVolumeChange.bind(this),!1),this.mediaElement[0].removeEventListener("playbackchange",this.onPlaybackChange.bind(this),!1),this.mediaElement[0].removeEventListener("timeupdate",this.onUpdateTime.bind(this),!1),this.mediaElement[0].removeEventListener("progress",this.onProgress.bind(this),!1),this.mediaElement[0].removeEventListener("seeking",this.onSeeking.bind(this),!1),this.mediaElement[0].removeEventListener("seeked",this.onSeeked.bind(this),!1),this.mediaElement[0].removeEventListener("error",this.onVideoError.bind(this),!1)},this.onRouteChange=function(){void 0!==this.clearMediaOnNavigate&&!0!==this.clearMediaOnNavigate||this.clearMedia()},this.onCanPlay=function(t){this.isBuffering=!1,e.$parent.$digest(e.vgCanPlay({$event:t})),!d&&(this.startTime>0||0===this.startTime)&&(this.seekTime(this.startTime),d=!0)},this.onVideoReady=function(){this.isReady=!0,this.autoPlay=e.vgAutoPlay,this.playsInline=e.vgPlaysInline,this.nativeFullscreen=e.vgNativeFullscreen||!0,this.cuePoints=e.vgCuePoints,this.startTime=e.vgStartTime,this.virtualClipDuration=e.vgVirtualClipDuration,this.clearMediaOnNavigate=e.vgClearMediaOnNavigate||!0,this.currentState=r.STOP,u=!0,c=this.startTime>=0&&this.virtualClipDuration>0,a.supportsLocalStorage()&&this.setVolume(parseFloat(t.localStorage.getItem(s)||"1")),e.vgConfig?i.loadConfig(e.vgConfig).then(this.onLoadConfig.bind(this)):e.vgPlayerReady({$API:this})},this.onLoadConfig=function(t){this.config=t,e.vgTheme=this.config.theme,e.vgAutoPlay=this.config.autoPlay,e.vgPlaysInline=this.config.playsInline,e.vgNativeFullscreen=this.config.nativeFullscreen,e.vgCuePoints=this.config.cuePoints,e.vgClearMediaOnNavigate=this.config.clearMediaOnNavigate,e.vgStartTime=this.config.startTime,e.vgVirtualClipDuration=this.config.virtualClipDuration,c=e.vgStartTime>=0&&e.vgVirtualClipDuration>0,e.vgPlayerReady({$API:this})},this.onLoadMetaData=function(e){this.isBuffering=!1,this.onUpdateTime(e)},this.onProgress=function(t){this.updateBuffer(t),e.$parent.$digest()},this.updateBuffer=function(e){e.target.buffered.length&&(this.buffered=e.target.buffered,this.bufferEnd=1e3*e.target.buffered.end(e.target.buffered.length-1),this.bufferEnd>this.totalTime&&(this.bufferEnd=this.totalTime))},this.onUpdateTime=function(t){var i=1e3*t.target.currentTime;this.updateBuffer(t),t.target.duration!=1/0&&null!=t.target.duration&&void 0!=t.target.duration&&1.7976931348623157e308!=t.target.duration?(c?d&&(t.target.currentTime<this.startTime||t.target.currentTime-this.startTime>this.virtualClipDuration)?this.onComplete():(this.currentTime=Math.max(0,i-1e3*this.startTime),this.totalTime=1e3*this.virtualClipDuration,this.timeLeft=1e3*this.virtualClipDuration-this.currentTime):(this.currentTime=i,this.totalTime=1e3*t.target.duration,this.timeLeft=1e3*(t.target.duration-t.target.currentTime)),this.isLive=!1):(this.currentTime=i,this.isLive=!0);var n=c?this.currentTime/1e3:t.target.currentTime,a=c?this.totalTime/1e3:t.target.duration;this.cuePoints&&this.checkCuePoints(n),e.vgUpdateTime({$currentTime:n,$duration:a}),"$apply"!=e.$$phase&&"$digest"!=e.$$phase&&e.$parent.$digest()},this.checkCuePoints=function(e){for(var t in this.cuePoints)for(var i=0,n=this.cuePoints[t].length;i<n;i++){var a=this.cuePoints[t][i],r=parseInt(e,10),s=parseInt(a.timeLapse.start,10);a.timeLapse.end||(a.timeLapse.end=a.timeLapse.start+1),e<a.timeLapse.end&&(a.$$isCompleted=!1),a.$$isDirty||r!==s||"function"!=typeof a.onEnter||(a.onEnter(e,a.timeLapse,a.params),a.$$isDirty=!0),e>a.timeLapse.start?(e<a.timeLapse.end&&(a.onUpdate&&a.onUpdate(e,a.timeLapse,a.params),a.$$isDirty||"function"!=typeof a.onEnter||a.onEnter(e,a.timeLapse,a.params)),e>=a.timeLapse.end&&a.onComplete&&!a.$$isCompleted&&(a.$$isCompleted=!0,a.onComplete(e,a.timeLapse,a.params)),a.$$isDirty=!0):(a.onLeave&&a.$$isDirty&&a.onLeave(e,a.timeLapse,a.params),a.$$isDirty=!1)}},this.onPlay=function(){this.setState(r.PLAY),e.$parent.$digest()},this.onPause=function(){0==(c?this.currentTime:this.mediaElement[0].currentTime)?this.setState(r.STOP):this.setState(r.PAUSE),e.$parent.$digest()},this.onVolumeChange=function(){this.volume=this.mediaElement[0].volume,e.$parent.$digest()},this.onPlaybackChange=function(){this.playback=this.mediaElement[0].playbackRate,e.$parent.$digest()},this.onSeeking=function(t){e.vgSeeking({$currentTime:t.target.currentTime,$duration:t.target.duration})},this.onSeeked=function(t){e.vgSeeked({$currentTime:t.target.currentTime,$duration:t.target.duration})},this.seekTime=function(e,t){var i;if(t)c?(e=Math.max(0,Math.min(e,100)),i=e*this.virtualClipDuration/100,this.mediaElement[0].currentTime=this.startTime+i):(i=e*this.mediaElement[0].duration/100,this.mediaElement[0].currentTime=i);else if(c){var n=e/this.mediaElement[0].duration;i=d?this.virtualClipDuration*n:0,this.mediaElement[0].currentTime=d?this.startTime+i:this.startTime}else i=e,this.mediaElement[0].currentTime=i;this.currentTime=1e3*i},this.playPause=function(){this.mediaElement[0].paused?this.play():this.pause()},this.setState=function(t){return t&&t!=this.currentState&&(e.vgUpdateState({$state:t}),this.currentState=t),this.currentState},this.play=function(){this.mediaElement[0].play(),this.setState(r.PLAY)},this.pause=function(){this.mediaElement[0].pause(),this.setState(r.PAUSE)},this.stop=function(){try{this.mediaElement[0].pause();var e=c?this.startTime:0;this.mediaElement[0].currentTime=e,this.currentTime=e,this.buffered=[],this.bufferEnd=0,this.setState(r.STOP)}catch(e){return e}},this.toggleFullScreen=function(){n.isAvailable&&this.nativeFullscreen?this.isFullScreen?a.isMobileDevice()||n.exit():a.isMobileDevice()?a.isiOSDevice()?u?this.enterElementInFullScreen(this.mediaElement[0]):(l=!0,this.play()):this.enterElementInFullScreen(this.mediaElement[0]):this.enterElementInFullScreen(this.videogularElement[0]):(this.isFullScreen?(this.videogularElement.removeClass("fullscreen"),this.videogularElement.css("z-index","auto")):(this.videogularElement.addClass("fullscreen"),this.videogularElement.css("z-index",a.getZIndex())),this.isFullScreen=!this.isFullScreen)},this.enterElementInFullScreen=function(e){n.request(e)},this.changeSource=function(t){e.vgChangeSource({$source:t})},this.setVolume=function(i){i=Math.max(Math.min(i,1),0),e.vgUpdateVolume({$volume:i}),this.mediaElement[0].volume=i,this.volume=i,a.supportsLocalStorage()&&t.localStorage.setItem(s,i.toString())},this.setPlayback=function(t){e.vgUpdatePlayback({$playBack:t}),this.mediaElement[0].playbackRate=t,this.playback=t},this.updateTheme=function(e){var t,i,n=document.getElementsByTagName("link");if(o)for(t=0,i=n.length;t<i;t++)if(n[t].outerHTML.indexOf(o)>=0){n[t].parentNode.removeChild(n[t]);break}if(e){var a=angular.element(document).find("head"),r=!1;for(t=0,i=n.length;t<i&&!(r=n[t].outerHTML.indexOf(e)>=0);t++);r||a.append("<link rel='stylesheet' href='"+e+"'>"),o=e}},this.onStartBuffering=function(t){this.isBuffering=!0,e.$parent.$digest()},this.onStartPlaying=function(t){this.isBuffering=!1,e.$parent.$digest()},this.onComplete=function(t){e.vgComplete(),this.setState(r.STOP),this.isCompleted=!0,c&&this.stop(),e.$parent.$digest()},this.onVideoError=function(t){e.vgError({$event:t})},this.addListeners=function(){this.mediaElement[0].addEventListener("canplay",this.onCanPlay.bind(this),!1),this.mediaElement[0].addEventListener("loadedmetadata",this.onLoadMetaData.bind(this),!1),this.mediaElement[0].addEventListener("waiting",this.onStartBuffering.bind(this),!1),this.mediaElement[0].addEventListener("ended",this.onComplete.bind(this),!1),this.mediaElement[0].addEventListener("playing",this.onStartPlaying.bind(this),!1),this.mediaElement[0].addEventListener("play",this.onPlay.bind(this),!1),this.mediaElement[0].addEventListener("pause",this.onPause.bind(this),!1),this.mediaElement[0].addEventListener("volumechange",this.onVolumeChange.bind(this),!1),this.mediaElement[0].addEventListener("playbackchange",this.onPlaybackChange.bind(this),!1),this.mediaElement[0].addEventListener("timeupdate",this.onUpdateTime.bind(this),!1),this.mediaElement[0].addEventListener("progress",this.onProgress.bind(this),!1),this.mediaElement[0].addEventListener("seeking",this.onSeeking.bind(this),!1),this.mediaElement[0].addEventListener("seeked",this.onSeeked.bind(this),!1),this.mediaElement[0].addEventListener("error",this.onVideoError.bind(this),!1)},this.init=function(){this.isReady=!1,this.isCompleted=!1,this.buffered=[],this.bufferEnd=0,this.currentTime=0,this.totalTime=0,this.timeLeft=0,this.isLive=!1,this.isFullScreen=!1,this.playback=1,this.isConfig=void 0!=e.vgConfig,this.mediaElement=[{play:function(){},pause:function(){},stop:function(){},addEventListener:function(){},removeEventListener:function(){}}],n.isAvailable&&(this.isFullScreen=n.isFullScreen()),this.updateTheme(e.vgTheme),this.addBindings(),n.isAvailable&&document.addEventListener(n.onchange,this.onFullScreenChange.bind(this))},this.onUpdateTheme=function(e){this.updateTheme(e)},this.onUpdateAutoPlay=function(e){e&&!this.autoPlay&&(this.autoPlay=e,this.play(this))},this.onUpdateStartTime=function(e){if(e&&e!=this.startTime){this.mediaElement[0].currentTime=e,this.startTime=e,c=this.startTime>=0&&this.virtualClipDuration>0;var t={target:this.mediaElement[0]};this.onUpdateTime(t,!0)}},this.onUpdateVirtualClipDuration=function(e){if(e&&e!=this.virtualClipDuration){this.virtualClipDuration=e,c=this.startTime>=0&&this.virtualClipDuration>0;var t={target:this.mediaElement[0]};this.onUpdateTime(t,!0)}},this.onUpdatePlaysInline=function(e){this.playsInline=e},this.onUpdateNativeFullscreen=function(e){void 0==e&&(e=!0),this.nativeFullscreen=e},this.onUpdateCuePoints=function(e){this.cuePoints=e,this.checkCuePoints(this.currentTime)},this.onUpdateClearMediaOnNavigate=function(e){this.clearMediaOnNavigate=e},this.addBindings=function(){e.$watch("vgTheme",this.onUpdateTheme.bind(this)),e.$watch("vgAutoPlay",this.onUpdateAutoPlay.bind(this)),e.$watch("vgStartTime",this.onUpdateStartTime.bind(this)),e.$watch("vgVirtualClipDuration",this.onUpdateVirtualClipDuration.bind(this)),e.$watch("vgPlaysInline",this.onUpdatePlaysInline.bind(this)),e.$watch("vgNativeFullscreen",this.onUpdateNativeFullscreen.bind(this)),e.$watch("vgCuePoints",this.onUpdateCuePoints.bind(this)),e.$watch("vgClearMediaOnNavigate",this.onUpdateClearMediaOnNavigate.bind(this))},this.onFullScreenChange=function(t){this.isFullScreen=n.isFullScreen(),e.$parent.$digest()},e.$on("$destroy",this.clearMedia.bind(this)),e.$on("$routeChangeStart",this.onRouteChange.bind(this)),this.init()}]),angular.module("com.2fdevs.videogular").directive("vgCrossorigin",[function(){return{restrict:"A",require:"^videogular",link:{pre:function(e,t,i,n){var a;e.setCrossorigin=function(e){e?n.mediaElement.attr("crossorigin",e):n.mediaElement.removeAttr("crossorigin")},n.isConfig?e.$watch(function(){return n.config},function(){n.config&&e.setCrossorigin(n.config.crossorigin)}):e.$watch(i.vgCrossorigin,function(t,i){a&&t==i||!t?e.setCrossorigin():(a=t,e.setCrossorigin(a))})}}}}]),angular.module("com.2fdevs.videogular").directive("vgLoop",[function(){return{restrict:"A",require:"^videogular",link:{pre:function(e,t,i,n){var a;e.setLoop=function(e){e?n.mediaElement.attr("loop",e):n.mediaElement.removeAttr("loop")},n.isConfig?e.$watch(function(){return n.config},function(){n.config&&e.setLoop(n.config.loop)}):e.$watch(i.vgLoop,function(t,i){a&&t==i||!t?e.setLoop():(a=t,e.setLoop(a))})}}}}]),angular.module("com.2fdevs.videogular").directive("vgMedia",["$timeout","VG_UTILS","VG_STATES",function(e,t,i){return{restrict:"E",require:"^videogular",templateUrl:function(e,t){var i=t.vgType||"video";return t.vgTemplate||"vg-templates/vg-media-"+i},scope:{vgSrc:"=?",vgType:"=?"},link:function(n,a,r,s){var o;r.vgType&&"video"!==r.vgType?r.vgType="audio":r.vgType="video",n.onChangeSource=function(e,t){o&&e==t||!e||(o=e,s.currentState!==i.PLAY&&(s.currentState=i.STOP),s.sources=o,n.changeSource())},n.changeSource=function(){if(angular.isArray(o)){var i="";if(s.mediaElement[0].canPlayType){for(var n=0,a=o.length;n<a;n++)if("maybe"==(i=s.mediaElement[0].canPlayType(o[n].type))||"probably"==i){s.mediaElement.attr("src",o[n].src),s.mediaElement.attr("type",o[n].type),s.changeSource(o[n]);break}}else s.mediaElement.attr("src",o[0].src),s.mediaElement.attr("type",o[0].type),s.changeSource(o[0])}else s.mediaElement.attr("src",o),s.changeSource(o);t.isMobileDevice()&&s.mediaElement[0].load(),e(function(){!s.autoPlay||!t.isCordova()&&t.isMobileDevice()||s.play()}),""==i&&s.onVideoError()},s.mediaElement=a.find(r.vgType),s.sources=n.vgSrc,s.addListeners(),s.onVideoReady(),n.$watch("vgSrc",n.onChangeSource),n.$watch(function(){return s.sources},n.onChangeSource),n.$watch(function(){return s.playsInline},function(e,t){e?s.mediaElement.attr("webkit-playsinline",""):s.mediaElement.removeAttr("webkit-playsinline")}),s.isConfig&&n.$watch(function(){return s.config},function(){s.config&&(n.vgSrc=s.config.sources)})}}}]),angular.module("com.2fdevs.videogular").directive("vgNativeControls",[function(){return{restrict:"A",require:"^videogular",link:{pre:function(e,t,i,n){var a;e.setControls=function(e){e?n.mediaElement.attr("controls",e):n.mediaElement.removeAttr("controls")},n.isConfig?e.$watch(function(){return n.config},function(){n.config&&e.setControls(n.config.controls)}):e.$watch(i.vgNativeControls,function(t,i){a&&t==i||!t?e.setControls():(a=t,e.setControls(a))})}}}}]),angular.module("com.2fdevs.videogular").directive("vgPreload",[function(){return{restrict:"A",require:"^videogular",link:{pre:function(e,t,i,n){var a;e.setPreload=function(e){e?n.mediaElement.attr("preload",e):n.mediaElement.removeAttr("preload")},n.isConfig?e.$watch(function(){return n.config},function(){n.config&&e.setPreload(n.config.preload)}):e.$watch(i.vgPreload,function(t,i){a&&t==i||!t?e.setPreload():(a=t,e.setPreload(a))})}}}}]),angular.module("com.2fdevs.videogular").directive("vgTracks",[function(){return{restrict:"A",require:"^videogular",link:{pre:function(e,t,i,n){var a,r,s,o=!1;e.onLoadMetaData=function(){o=!0,e.updateTracks()},e.updateTracks=function(){var t=n.mediaElement.children();for(r=0,s=t.length;r<s;r++)t[r].remove&&t[r].remove();if(a)for(r=0,s=a.length;r<s;r++){var i=document.createElement("track");for(var o in a[r])i[o]=a[r][o];i.addEventListener("load",e.onLoadTrack.bind(e,i)),n.mediaElement[0].appendChild(i)}},e.onLoadTrack=function(t){t.default?t.mode="showing":t.mode="hidden";for(var i=0,a=n.mediaElement[0].textTracks.length;i<a;i++)t.label==n.mediaElement[0].textTracks[i].label&&(t.default?n.mediaElement[0].textTracks[i].mode="showing":n.mediaElement[0].textTracks[i].mode="disabled");t.removeEventListener("load",e.onLoadTrack.bind(e,t))},e.setTracks=function(t){a=t,n.tracks=t,o?e.updateTracks():n.mediaElement[0].addEventListener("loadedmetadata",e.onLoadMetaData.bind(e),!1)},n.isConfig?e.$watch(function(){return n.config},function(){n.config&&e.setTracks(n.config.tracks)}):e.$watch(i.vgTracks,function(t,i){a&&t==i||e.setTracks(t)},!0)}}}}]),angular.module("com.2fdevs.videogular").directive("videogular",[function(){return{restrict:"EA",scope:{vgTheme:"=?",vgAutoPlay:"=?",vgStartTime:"=?",vgVirtualClipDuration:"=?",vgPlaysInline:"=?",vgNativeFullscreen:"=?",vgClearMediaOnNavigate:"=?",vgCuePoints:"=?",vgConfig:"@",vgCanPlay:"&",vgComplete:"&",vgUpdateVolume:"&",vgUpdatePlayback:"&",vgUpdateTime:"&",vgUpdateState:"&",vgPlayerReady:"&",vgChangeSource:"&",vgSeeking:"&",vgSeeked:"&",vgError:"&"},controller:"vgController",controllerAs:"API",link:{pre:function(e,t,i,n){n.videogularElement=angular.element(t)}}}}]),angular.module("com.2fdevs.videogular").service("vgConfigLoader",["$http","$q","$sce",function(e,t,i){this.loadConfig=function(n){var a=t.defer();return e({method:"GET",url:n}).then(function(e){for(var t=e.data,n=0,r=t.sources.length;n<r;n++)t.sources[n].src=i.trustAsResourceUrl(t.sources[n].src);a.resolve(t)},function(){a.reject()}),a.promise}}]),angular.module("com.2fdevs.videogular").service("vgFullscreen",["VG_UTILS",function(e){function t(){return i?null!=document[n.element]||i.webkitDisplayingFullscreen:null!=document[n.element]}var i,n=null,a={w3:{enabled:"fullscreenEnabled",element:"fullscreenElement",request:"requestFullscreen",exit:"exitFullscreen",onchange:"fullscreenchange",onerror:"fullscreenerror"},newWebkit:{enabled:"webkitFullscreenEnabled",element:"webkitFullscreenElement",request:"webkitRequestFullscreen",exit:"webkitExitFullscreen",onchange:"webkitfullscreenchange",onerror:"webkitfullscreenerror"},oldWebkit:{enabled:"webkitIsFullScreen",element:"webkitCurrentFullScreenElement",request:"webkitRequestFullScreen",exit:"webkitCancelFullScreen",onchange:"webkitfullscreenchange",onerror:"webkitfullscreenerror"},moz:{enabled:"mozFullScreen",element:"mozFullScreenElement",request:"mozRequestFullScreen",exit:"mozCancelFullScreen",onchange:"mozfullscreenchange",onerror:"mozfullscreenerror"},ios:{enabled:"webkitFullscreenEnabled",element:"webkitFullscreenElement",request:"webkitEnterFullscreen",exit:"webkitExitFullscreen",onchange:"webkitfullscreenchange",onerror:"webkitfullscreenerror"},ms:{enabled:"msFullscreenEnabled",element:"msFullscreenElement",request:"msRequestFullscreen",exit:"msExitFullscreen",onchange:"MSFullscreenChange",onerror:"MSFullscreenError"}};for(var r in a)if(a[r].enabled in document){n=a[r];break}e.isiOSDevice()&&(n=a.ios),this.isAvailable=null!=n,n&&(this.onchange=n.onchange,this.onerror=n.onerror,this.isFullScreen=t,this.exit=function(){document[n.exit]()},this.request=function(e){i=e,i[n.request]()})}]),angular.module("com.2fdevs.videogular").service("VG_UTILS",["$window",function(e){this.fixEventOffset=function(e){var t=navigator.userAgent.match(/Firefox\/(\d+)/i);if(t&&Number.parseInt(t.pop())<39){var i=e.currentTarget.currentStyle||window.getComputedStyle(e.target,null),n=parseInt(i.borderLeftWidth,10),a=parseInt(i.borderTopWidth,10),r=e.currentTarget.getBoundingClientRect(),s=e.clientX-n-r.left,o=e.clientY-a-r.top;e.offsetX=s,e.offsetY=o}return e},this.getZIndex=function(){for(var e,t=1,i=document.getElementsByTagName("*"),n=0,a=i.length;n<a;n++)(e=parseInt(window.getComputedStyle(i[n])["z-index"]))>t&&(t=e+1);return t},this.isMobileDevice=function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")},this.isiOSDevice=function(){return navigator.userAgent.match(/ip(hone|ad|od)/i)&&!navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i)},this.isCordova=function(){return-1===document.URL.indexOf("http://")&&-1===document.URL.indexOf("https://")},this.supportsLocalStorage=function(){try{var t=e.sessionStorage;return t.setItem("videogular-test-key","1"),t.removeItem("videogular-test-key"),"localStorage"in e&&null!==e.localStorage}catch(e){return!1}}}]);