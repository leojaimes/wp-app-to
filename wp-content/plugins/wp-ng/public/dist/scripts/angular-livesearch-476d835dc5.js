"use strict";angular.module("LiveSearch",["ng"]).directive("liveSearch",["$compile","$timeout",function(e,l){return{restrict:"E",replace:!0,scope:{liveSearchCallback:"=",liveSearchSelect:"=?",liveSearchSelectCallback:"=",blur:"&ngBlur",liveSearchItemTemplate:"@",liveSearchWaitTimeout:"=?",liveSearchMaxResultSize:"=?",liveSearchMaxlength:"=?",placeholder:"@"},template:"<input type='text' placeholder='{{placeholder}}' ng-blur='blur'/>",link:function(t,i,c,n){var a;t.results=[],t.visible=!1,t.selectedIndex=-1,t.select=function(e){t.selectedIndex=e,t.visible=!1},t.isSelected=function(e){return t.selectedIndex===e},t.$watch("selectedIndex",function(e,l){var n=t.results[e];if(n)if(c.liveSearchSelectCallback){var a=t.liveSearchSelectCallback.call(null,{items:t.results,item:n});i.val(a)}else c.liveSearchSelect?i.val(n[c.liveSearchSelect]):i.val(n);"undefined"!==i.controller("ngModel")&&i.controller("ngModel").$setViewValue(i.val())}),t.$watch("visible",function(e,l){if(!1!==e){t.width=i[0].clientWidth;var c=r(i[0]);t.top=c.y+i[0].clientHeight+1+"px",t.left=c.x+"px"}}),i[0].onkeydown=function(e){40==e.keyCode?t.selectedIndex+1===t.results.length?t.selectedIndex=0:t.selectedIndex++:38==e.keyCode&&(0===t.selectedIndex?t.selectedIndex=t.results.length-1:-1==t.selectedIndex?t.selectedIndex=0:t.selectedIndex--),13==e.keyCode&&(t.visible=!1),t.$apply()},i[0].onkeyup=function(e){if(13==e.keyCode||37==e.keyCode||38==e.keyCode||39==e.keyCode||40==e.keyCode)return!1;var c=i;l.cancel(a);var n=c.val().split(","),r=n[n.length-1].trim();return r.length<3||null!==t.liveSearchMaxlength&&r.length>t.liveSearchMaxlength?(t.visible=!1,void t.$apply()):void(a=l(function(){var e=[],l=t.liveSearchCallback.call(null,r);l.then(function(l){l&&(e=l.slice(0,(t.liveSearchMaxResultSize||20)-1)),t.visible=!0}),l.finally(function(){t.selectedIndex=-1,t.results=e.filter(function(l,t){return e.indexOf(l)==t})})},t.liveSearchWaitTimeout||100))};var r=function(e){for(var l=0,t=0;e&&!e.classList.contains("modal-dialog");)l+=e.offsetLeft-e.scrollLeft+e.clientLeft,t+=e.offsetTop-e.scrollTop+e.clientTop,e=e.offsetParent;return{x:l,y:t}},s=i.attr("live-search-item-template")||"{{result}}",d="<ul ng-show='visible' ng-style=\"{'top':top,'left':left,'width':width}\" class='searchresultspopup'><li ng-class=\"{ 'selected' : isSelected($index) }\" ng-click='select($index)' ng-repeat='result in results'>"+s+"</li></ul>",o=e(d)(t);(document.getElementsByClassName("modal-dialog")[0]||document.body).appendChild(o[0])}}}]);