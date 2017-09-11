"use strict";angular.module("slickCarousel",[]).constant("slickCarouselConfig",{method:{},event:{}}).directive("slick",["$timeout","slickCarouselConfig",function(e,n){var i;return i=["slickGoTo","slickNext","slickPrev","slickPause","slickPlay","slickAdd","slickRemove","slickFilter","slickUnfilter","unslick"],["afterChange","beforeChange","breakpoint","destroy","edge","init","reInit","setPosition","swipe","lazyLoaded","lazyLoadError"],{scope:{settings:"=",enabled:"@",accessibility:"@",adaptiveHeight:"@",autoplay:"@",autoplaySpeed:"@",arrows:"@",asNavFor:"@",appendArrows:"@",prevArrow:"@",nextArrow:"@",centerMode:"@",centerPadding:"@",cssEase:"@",customPaging:"&",dots:"@",draggable:"@",fade:"@",focusOnSelect:"@",easing:"@",edgeFriction:"@",infinite:"@",initialSlide:"@",lazyLoad:"@",mobileFirst:"@",pauseOnHover:"@",pauseOnDotsHover:"@",respondTo:"@",responsive:"=?",rows:"@",slide:"@",slidesPerRow:"@",slidesToShow:"@",slidesToScroll:"@",speed:"@",swipe:"@",swipeToSlide:"@",touchMove:"@",touchThreshold:"@",useCSS:"@",variableWidth:"@",vertical:"@",verticalSwiping:"@",rtl:"@"},restrict:"AE",link:function(o,t,a){angular.element(t).css("display","none");var r,s,l,d,c,u;return s=function(){r=angular.extend(angular.copy(n),{enabled:"false"!==o.enabled,accessibility:"false"!==o.accessibility,adaptiveHeight:"true"===o.adaptiveHeight,autoplay:"true"===o.autoplay,autoplaySpeed:null!=o.autoplaySpeed?parseInt(o.autoplaySpeed,10):3e3,arrows:"false"!==o.arrows,asNavFor:o.asNavFor?o.asNavFor:void 0,appendArrows:o.appendArrows?angular.element(o.appendArrows):angular.element(t),prevArrow:o.prevArrow?angular.element(o.prevArrow):void 0,nextArrow:o.nextArrow?angular.element(o.nextArrow):void 0,centerMode:"true"===o.centerMode,centerPadding:o.centerPadding||"50px",cssEase:o.cssEase||"ease",customPaging:a.customPaging?function(e,n){return o.customPaging({slick:e,index:n})}:void 0,dots:"true"===o.dots,draggable:"false"!==o.draggable,fade:"true"===o.fade,focusOnSelect:"true"===o.focusOnSelect,easing:o.easing||"linear",edgeFriction:o.edgeFriction||.15,infinite:"false"!==o.infinite,initialSlide:parseInt(o.initialSlide)||0,lazyLoad:o.lazyLoad||"ondemand",mobileFirst:"true"===o.mobileFirst,pauseOnHover:"false"!==o.pauseOnHover,pauseOnDotsHover:"true"===o.pauseOnDotsHover,respondTo:null!=o.respondTo?o.respondTo:"window",responsive:o.responsive||void 0,rows:null!=o.rows?parseInt(o.rows,10):1,slide:o.slide||"",slidesPerRow:null!=o.slidesPerRow?parseInt(o.slidesPerRow,10):1,slidesToShow:null!=o.slidesToShow?parseInt(o.slidesToShow,10):1,slidesToScroll:null!=o.slidesToScroll?parseInt(o.slidesToScroll,10):1,speed:null!=o.speed?parseInt(o.speed,10):300,swipe:"false"!==o.swipe,swipeToSlide:"true"===o.swipeToSlide,touchMove:"false"!==o.touchMove,touchThreshold:o.touchThreshold?parseInt(o.touchThreshold,10):5,useCSS:"false"!==o.useCSS,variableWidth:"true"===o.variableWidth,vertical:"true"===o.vertical,verticalSwiping:"true"===o.verticalSwiping,rtl:"true"===o.rtl},o.settings)},l=function(){var e=angular.element(t);return e.hasClass("slick-initialized")&&(e.remove("slick-list"),e.slick("unslick")),e},d=function(){s();var n=angular.element(t);if(angular.element(t).hasClass("slick-initialized")){if(r.enabled)return n.slick("getSlick");l()}else{if(!r.enabled)return;n.on("init",function(e,n){if(void 0!==r.event.init&&r.event.init(e,n),void 0!==u)return n.slideHandler(u)}),e(function(){angular.element(t).css("display","block"),n.not(".slick-initialized").slick(r)})}o.internalControl=r.method||{},i.forEach(function(e){o.internalControl[e]=function(){var i;i=Array.prototype.slice.call(arguments),i.unshift(e),n.slick.apply(t,i)}}),n.on("afterChange",function(n,i,t){u=t,void 0!==r.event.afterChange&&e(function(){o.$apply(function(){r.event.afterChange(n,i,t)})})}),n.on("beforeChange",function(n,i,t,a){void 0!==r.event.beforeChange&&e(function(){e(function(){o.$apply(function(){r.event.beforeChange(n,i,t,a)})})})}),n.on("reInit",function(n,i){void 0!==r.event.reInit&&e(function(){o.$apply(function(){r.event.reInit(n,i)})})}),void 0!==r.event.breakpoint&&n.on("breakpoint",function(n,i,t){e(function(){o.$apply(function(){r.event.breakpoint(n,i,t)})})}),void 0!==r.event.destroy&&n.on("destroy",function(n,i){e(function(){o.$apply(function(){r.event.destroy(n,i)})})}),void 0!==r.event.edge&&n.on("edge",function(n,i,t){e(function(){o.$apply(function(){r.event.edge(n,i,t)})})}),void 0!==r.event.setPosition&&n.on("setPosition",function(n,i){e(function(){o.$apply(function(){r.event.setPosition(n,i)})})}),void 0!==r.event.swipe&&n.on("swipe",function(n,i,t){e(function(){o.$apply(function(){r.event.swipe(n,i,t)})})}),void 0!==r.event.lazyLoaded&&n.on("lazyLoaded",function(n,i,t,a){e(function(){o.$apply(function(){r.event.lazyLoaded(n,i,t,a)})})}),void 0!==r.event.lazyLoadError&&n.on("lazyLoadError",function(n,i,t,a){e(function(){o.$apply(function(){r.event.lazyLoadError(n,i,t,a)})})})},c=function(){l(),d()},t.one("$destroy",function(){l()}),o.$watch("settings",function(e,n){if(null!==e)return c()},!0)}}}]);