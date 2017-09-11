!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("leaflet")):"function"==typeof define&&define.amd?define(["leaflet"],t):"object"==typeof exports?exports.VectorMarkers=t(require("leaflet")):e.VectorMarkers=t(e.L)}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=t.VectorMarkers=void 0;var r=o(1),i=n(r),s=o(2),a=n(s),c=o(3),l=n(c);t.VectorMarkers=a.default,t.Icon=l.default,i.default.VectorMarkers=a.default},function(t,o){t.exports=e},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(3),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={version:"1.0.0",Icon:r.default,icon:function(e){return new r.default(e)}}},function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o(1),c=function(e){return e&&e.__esModule?e:{default:e}}(a),l={iconSize:[30,50],iconAnchor:[15,50],popupAnchor:[2,-40],shadowAnchor:[39,45],shadowSize:[54,51],className:"vector-marker",prefix:"fa",spinClass:"fa-spin",extraIconClasses:"",extraDivClasses:"",icon:"home",markerColor:"blue",iconColor:"white",viewBox:"0 0 32 52"},u=function(e){function t(e){n(this,t);var o=r(this,Object.getPrototypeOf(t).call(this,e));return c.default.Util.setOptions(o,l),c.default.Util.setOptions(o,e),o}return i(t,e),s(t,[{key:"createIcon",value:function(e){var t=e&&"DIV"===e.tagName?e:document.createElement("div"),o=this.options,n=o.map_pin||"M16,1 C7.7146,1 1,7.65636364 1,15.8648485 C1,24.0760606 16,51 16,51 C16,51 31,24.0760606 31,15.8648485 C31,7.65636364 24.2815,1 16,1 L16,1 Z";return t.innerHTML='<svg width="'+o.iconSize[0]+'px" height="'+o.iconSize[1]+'px" viewBox="'+o.viewBox+'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="'+n+'" fill="'+o.markerColor+'"></path></svg>',o.icon&&t.appendChild(this._createInner()),o.className+=o.className.length>0?" "+o.extraDivClasses:o.extraDivClasses,this._setIconStyles(t,"icon"),this._setIconStyles(t,"icon-"+o.markerColor),t}},{key:"createShadow",value:function(){var e=document.createElement("div");return this._setIconStyles(e,"shadow"),e}},{key:"_createInner",value:function(){var e=document.createElement("i"),t=this.options;return e.classList.add(t.prefix),t.extraClasses&&e.classList.add(t.extraClasses),t.icon.slice(0,t.prefix.length+1)===t.prefix+"-"?e.classList.add(t.icon):e.classList.add(t.prefix+"-"+t.icon),t.spin&&"string"==typeof t.spinClass&&e.classList.add(t.spinClass),t.iconColor&&("white"===t.iconColor||"black"===t.iconColor?e.classList.add("icon-"+t.iconColor):e.style.color=t.iconColor),t.iconSize&&(e.style.width=t.iconSize[0]+"px"),e}},{key:"_setIconStyles",value:function(e,t){var o=this.options,n=c.default.point(o["shadow"===t?"shadowSize":"iconSize"]),r=void 0;r="shadow"===t?c.default.point(o.shadowAnchor||o.iconAnchor):c.default.point(o.iconAnchor),!r&&n&&(r=n.divideBy(2,!0)),e.className="vector-marker-"+t+" "+o.className,r&&(e.style.marginLeft=-r.x+"px",e.style.marginTop=-r.y+"px"),n&&(e.style.width=n.x+"px",e.style.height=n.y+"px")}}]),t}(c.default.Icon);t.default=u}])});