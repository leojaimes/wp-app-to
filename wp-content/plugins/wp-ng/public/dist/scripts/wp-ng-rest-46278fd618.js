!function(e){"use strict";var s=["ngResource"],t=e.module("wpNgRest",s);t.config(["$resourceProvider",function(e){e.defaults.cancellable=!0}]),t.provider("wpNgRest",[function(){this.nonce={key:"X-WP-NG-Nonce",val:""},this.rest={url:"localhost/",path:""},this.lang={key:"X-WP-NG-Lang",val:""},this.$get=["$http",function(s){var t=this.nonce,a=this.rest,n=this.lang;return e.isDefined(t.key)&&e.isString(t.key)&&e.isDefined(t.val)&&e.isString(t.val)&&t.key.length>0&&t.val.length>0&&(s.defaults.headers.common[t.key]=t.val),e.isDefined(n.key)&&e.isString(n.key)&&e.isDefined(n.val)&&e.isString(n.val)&&n.key.length>0&&n.val.length>0&&(s.defaults.headers.common[n.key]=n.val),s.defaults.useXDomain=!0,s.defaults.headers.common["If-Modified-Since"]="0",s.defaults.headers.common["cache-control"]="private, max-age=0, no-cache",{getNonce:function(){return t},getRest:function(){return a},getLang:function(){return n}}}],this.setNonce=function(e){this.nonce=e},this.setRest=function(e){this.rest=e},this.setLang=function(e){this.lang=e}}]),t.factory("wpNgRestStatus",["$rootScope",function(s){var t={reset:function(){return{success:!1,statusCode:null,code:null,message:null}},setSuccess:function(s){var a=t.reset();return a.success=!0,a.statusCode=s.status,e.isDefined(s.messages)&&e.isArray(s.messages)?(a.code=s.messages[0].code,a.message=s.messages[0].message):e.isDefined(s.message)&&e.isObject(s.message)?(a.code=s.message.code,a.message=s.message.message):e.isDefined(s.message)&&e.isString(s.message)&&(a.message=s.message),a},setError:function(s){var a=t.reset();return a.statusCode=s.status,e.isDefined(s.data)&&e.isObject(s.data)?(a.code=s.data.code,a.message=s.data.message,e.isDefined(s.data.data)&&e.isObject(s.data.data)&&e.isDefined(s.data.data.errors)&&(a.errors=s.data.data.errors)):(a.code=s.status,a.message="An error occured on the request."),a},sendEvent:function(e,t){s.$broadcast(e,t)}};return t}])}(angular);