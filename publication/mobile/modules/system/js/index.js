!function t(e,r,n){function o(s,a){if(!r[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[s]={exports:{}};e[s][0].call(l.exports,function(t){var r=e[s][1][t];return o(r?r:t)},l,l.exports,t,e,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(t,e,r){(function(n,o){!function(t,n){"object"==typeof r&&"undefined"!=typeof e?e.exports=n():"function"==typeof define&&define.amd?define(n):t.ES6Promise=n()}(this,function(){"use strict";function e(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function r(t){return"function"==typeof t}function i(t){W=t}function s(t){z=t}function a(){return function(){return n.nextTick(f)}}function u(){return"undefined"!=typeof K?function(){K(f)}:h()}function c(){var t=0,e=new Q(f),r=document.createTextNode("");return e.observe(r,{characterData:!0}),function(){r.data=t=++t%2}}function l(){var t=new MessageChannel;return t.port1.onmessage=f,function(){return t.port2.postMessage(0)}}function h(){var t=setTimeout;return function(){return t(f,1)}}function f(){for(var t=0;t<Y;t+=2){var e=tt[t],r=tt[t+1];e(r),tt[t]=void 0,tt[t+1]=void 0}Y=0}function d(){try{var e=t,r=e("vertx");return K=r.runOnLoop||r.runOnContext,u()}catch(n){return h()}}function p(t,e){var r=this,n=new this.constructor(v);void 0===n[rt]&&C(n);var o=r._state;if(o){var i=arguments[o-1];z(function(){return N(o,n,i,r._result)})}else R(r,n,t,e);return n}function m(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var r=new e(v);return S(r,t),r}function v(){}function y(){return new TypeError("You cannot resolve a promise with itself")}function b(){return new TypeError("A promises callback cannot return that same promise.")}function g(t){try{return t.then}catch(e){return st.error=e,st}}function w(t,e,r,n){try{t.call(e,r,n)}catch(o){return o}}function M(t,e,r){z(function(t){var n=!1,o=w(r,e,function(r){n||(n=!0,e!==r?S(t,r):O(t,r))},function(e){n||(n=!0,A(t,e))},"Settle: "+(t._label||" unknown promise"));!n&&o&&(n=!0,A(t,o))},t)}function _(t,e){e._state===ot?O(t,e._result):e._state===it?A(t,e._result):R(e,void 0,function(e){return S(t,e)},function(e){return A(t,e)})}function E(t,e,n){e.constructor===t.constructor&&n===p&&e.constructor.resolve===m?_(t,e):n===st?(A(t,st.error),st.error=null):void 0===n?O(t,e):r(n)?M(t,e,n):O(t,e)}function S(t,r){t===r?A(t,y()):e(r)?E(t,r,g(r)):O(t,r)}function P(t){t._onerror&&t._onerror(t._result),x(t)}function O(t,e){t._state===nt&&(t._result=e,t._state=ot,0!==t._subscribers.length&&z(x,t))}function A(t,e){t._state===nt&&(t._state=it,t._result=e,z(P,t))}function R(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+ot]=r,o[i+it]=n,0===i&&t._state&&z(x,t)}function x(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?N(r,n,o,i):o(i);t._subscribers.length=0}}function j(){this.error=null}function T(t,e){try{return t(e)}catch(r){return at.error=r,at}}function N(t,e,n,o){var i=r(n),s=void 0,a=void 0,u=void 0,c=void 0;if(i){if(s=T(n,o),s===at?(c=!0,a=s.error,s.error=null):u=!0,e===s)return void A(e,b())}else s=o,u=!0;e._state!==nt||(i&&u?S(e,s):c?A(e,a):t===ot?O(e,s):t===it&&A(e,s))}function L(t,e){try{e(function(e){S(t,e)},function(e){A(t,e)})}catch(r){A(t,r)}}function k(){return ut++}function C(t){t[rt]=ut++,t._state=void 0,t._result=void 0,t._subscribers=[]}function F(){return new Error("Array Methods must be provided an Array")}function F(){return new Error("Array Methods must be provided an Array")}function G(t){return new ct(this,t).promise}function U(t){var e=this;return new e(D(t)?function(r,n){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(r,n)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function I(t){var e=this,r=new e(v);return A(r,t),r}function q(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function V(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function H(){var t=void 0;if("undefined"!=typeof o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var r=t.Promise;if(r){var n=null;try{n=Object.prototype.toString.call(r.resolve())}catch(e){}if("[object Promise]"===n&&!r.cast)return}t.Promise=lt}var X=void 0;X=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var D=X,Y=0,K=void 0,W=void 0,z=function(t,e){tt[Y]=t,tt[Y+1]=e,Y+=2,2===Y&&(W?W(f):et())},B="undefined"!=typeof window?window:void 0,J=B||{},Q=J.MutationObserver||J.WebKitMutationObserver,Z="undefined"==typeof self&&"undefined"!=typeof n&&"[object process]"==={}.toString.call(n),$="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,tt=new Array(1e3),et=void 0;et=Z?a():Q?c():$?l():void 0===B&&"function"==typeof t?d():h();var rt=Math.random().toString(36).substring(16),nt=void 0,ot=1,it=2,st=new j,at=new j,ut=0,ct=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(v),this.promise[rt]||C(this.promise),D(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?O(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&O(this.promise,this._result))):A(this.promise,F())}return t.prototype._enumerate=function(t){for(var e=0;this._state===nt&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===m){var o=g(t);if(o===p&&t._state!==nt)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===lt){var i=new r(v);E(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(n(t),e)},t.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===nt&&(this._remaining--,t===it?A(n,r):this._result[e]=r),0===this._remaining&&O(n,this._result)},t.prototype._willSettleAt=function(t,e){var r=this;R(t,void 0,function(t){return r._settledAt(ot,e,t)},function(t){return r._settledAt(it,e,t)})},t}(),lt=function(){function t(e){this[rt]=k(),this._result=this._state=void 0,this._subscribers=[],v!==e&&("function"!=typeof e&&q(),this instanceof t?L(this,e):V())}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype["finally"]=function(t){var e=this,r=e.constructor;return e.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},t}();return lt.prototype.then=p,lt.all=G,lt.race=U,lt.resolve=m,lt.reject=I,lt._setScheduler=i,lt._setAsap=s,lt._asap=z,lt.polyfill=H,lt.Promise=lt,lt})}).call(this,t("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:2}],2:[function(t,e,r){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(t){if(h===setTimeout)return setTimeout(t,0);if((h===n||!h)&&setTimeout)return h=setTimeout,setTimeout(t,0);try{return h(t,0)}catch(e){try{return h.call(null,t,0)}catch(e){return h.call(this,t,0)}}}function s(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){v&&p&&(v=!1,p.length?m=p.concat(m):y=-1,m.length&&u())}function u(){if(!v){var t=i(a);v=!0;for(var e=m.length;e;){for(p=m,m=[];++y<e;)p&&p[y].run();y=-1,e=m.length}p=null,v=!1,s(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var h,f,d=e.exports={};!function(){try{h="function"==typeof setTimeout?setTimeout:n}catch(t){h=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],v=!1,y=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];m.push(new c(t,e)),1!==m.length||v||i(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},{}],3:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t("./modulesManager/ModulesManager"),o=function(){function t(){this.moduleManager=new n["default"],this.moduleManager.init()}return t}();r.Main=o},{"./modulesManager/ModulesManager":8}],4:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t("../utils/ApiEvents"),o=function(){function t(){this.routersMatch=[],this.hashParams=[],this.hashChange=this.hashChange.bind(this),this.close=this.close.bind(this),window.addEventListener("hashchange",this.hashChange,!0),this.hashChange()}return t.prototype.hashChange=function(t){var e=window.location.hash.replace(/^\#/,"");this.hashParams=e.split("&"),this.checkUpdates()},t.prototype.checkUpdates=function(){for(var t=0,e=this.routersMatch.length;t<e;t++)this.routersMatch[t].checkUpdateAsync(this.hashParams)},t.prototype.close=function(t){this.routersMatch.filter(function(e){return e!==t})},t.prototype.goTo=function(t,e){var r=new RegExp(t,"g");e&&""!==e.trim()||(r=new RegExp("\\&"+t+"|"+t,"g"),e=""),window.location.hash=window.location.hash.replace(r,e)},t.prototype.match=function(t){var e=new i(this.close,t);return this.routersMatch.push(e),e.init(this.hashParams)},t}(),i=function(){function t(t,e){this.closeFromManager=t,this.toMatch=e,this.removableListeners=[],this.lastMatched=null,this._to=this._to.bind(this),this._update=this._update.bind(this),this._leave=this._leave.bind(this),this.close=this.close.bind(this),this.apiEvents=new n.ApiEvents}return t.prototype.init=function(t){return this.checkUpdateAsync(t),this.getToNLeave()},t.prototype.checkUpdateAsync=function(t){var e=this;setTimeout(function(){return e.checkUpdate(t)},0)},t.prototype.checkUpdate=function(t){var e=new RegExp(this.toMatch,"g"),r=null,n=null;if(t.forEach(function(t){var o=t.match(e);r=null===o?null:o[0],n=n||r}),null!==n||null!==this.lastMatched){if(null===n)return this.lastMatched=null,void this.apiEvents.fire({type:"leave",data:{}});if(n!==this.lastMatched){if(null===this.lastMatched)return this.lastMatched=n,void this.apiEvents.fire({type:"to",data:{}});this.lastMatched=n,this.apiEvents.fire({type:"update",data:{}})}}},t.prototype._to=function(t){var e=this;return this.apiEvents.addListener("to",t),this.removableListeners.push(function(){e.apiEvents.removeListener("to",t)}),this.getToNLeave()},t.prototype._update=function(t){var e=this;return this.apiEvents.addListener("update",t),this.removableListeners.push(function(){e.apiEvents.removeListener("to",t)}),this.getToNLeave()},t.prototype._leave=function(t){var e=this;return this.apiEvents.addListener("leave",t),this.removableListeners.push(function(){e.apiEvents.removeListener("to",t)}),this.getToNLeave()},t.prototype.close=function(){this.removableListeners.forEach(function(t){t()}),this.removableListeners=[],this.closeFromManager(this)},t.prototype.getToNLeave=function(){return{to:this._to,update:this._update,leave:this._leave,close:this.close}},t}();r["default"]=o},{"../utils/ApiEvents":9}],5:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,o=t("./Main"),i=t("./Router/Router");!function(t){var e=function(){function t(){w.Class.SystemMain=o.Main;var t=new i["default"],e={};Object.defineProperty(e,"match",{value:t.match.bind(t),writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(e,"goTo",{value:t.goTo.bind(t),writable:!1,enumerable:!0,configurable:!1}),NIApi.register("common.Router",e)}return t}();t.SystemTs=e}(n||(n={})),new n.SystemTs},{"./Main":3,"./Router/Router":4}],6:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t("es6-promise");var n=t("../utils/XHRPromise"),o=t("../utils/XHRPromise"),i=t("./ModuleInternal"),s=t("../utils/ModuleError"),a="js/index.js",u=function(){function t(t,e){this.dataModuleOrig=t,this.modules=e,this._executable=!1,this.dataModule={},this.moduleError=new s.ModuleError,this.setParamName(),this.setParamTextContent(),this.setParamVersion(),this.setParamEnable(),this.setParamParameters(),this.setParamPath(),this.moduleInternal=new i["default"](this.dataModule,this.modules)}return t.prototype.init=function(){var t=this;if(this.moduleError.thereIsErrors()===!0)return this.rejectModule();var e=new Promise(function(e,r){var i=new n["default"](o.Protocol.GET,t.dataModule.path);i.init().then(function(n){t.innerScript=n.responseText,t.safeExecute().then(function(){e()})["catch"](function(e){t.moduleError.thereIsErrors()===!0&&t.rejectModule(),r(e)})})["catch"](function(t){r(t)})});return e},t.prototype.getModuleName=function(){return this.dataModule.name},t.prototype.getNameSpace=function(){return this.moduleInternal.getNameSpace()},t.prototype.rejectModule=function(){return Promise.reject("Error")},t.prototype.safeExecute=function(){var t=this,e=this.moduleInternal.safeExecute(this.innerScript);return e.then(function(){})["catch"](function(e){t.moduleError.add(e,s.MESSAGESERRORS.moduleScriptError,t.dataModuleOrig)}),e},Object.defineProperty(t.prototype,"innerScript",{get:function(){return this._innerScript},set:function(t){try{t=t.trim()}catch(e){t="",this.moduleError.add("...",s.MESSAGESERRORS.moduleEmpty,this.dataModuleOrig)}this._innerScript=t},enumerable:!0,configurable:!0}),t.prototype.setParamName=function(){var t=this.dataModuleOrig.name;try{if(t=t.trim(),!!t==!1)throw"error";this.dataModule.name=t}catch(e){return void this.moduleError.add("...",s.MESSAGESERRORS.name,this.dataModuleOrig)}},t.prototype.setParamTextContent=function(){var t=this.dataModuleOrig.textContent||"";try{t=t.trim()}catch(e){}this.dataModule.textContent=t},t.prototype.setParamEnable=function(){var t=this.dataModuleOrig.enable;try{t=t.trim(),this.dataModule.enable="true"===t}catch(e){this.moduleError.add("...",s.MESSAGESERRORS.enable,this.dataModuleOrig)}},t.prototype.setParamVersion=function(){var t=this.dataModuleOrig.version;try{this.dataModule.version=t.trim()}catch(e){this.moduleError.add("...",s.MESSAGESERRORS.version,this.dataModuleOrig)}},t.prototype.setParamUserAgentFilter=function(){var t=this.dataModuleOrig.userAgentFilter;try{this.dataModule.userAgentFilter=t.trim()}catch(e){this.moduleError.add("...",s.MESSAGESERRORS.userAgentFilter,this.dataModuleOrig)}},t.prototype.setParamPath=function(){var t=this.dataModuleOrig.path;try{t=t.trim(),t.indexOf("/")!==t.length&&(t=t.concat("/")),this.dataModule.path=t.concat(a)}catch(e){this.moduleError.add("...",s.MESSAGESERRORS.path,this.dataModuleOrig)}},t.prototype.setParamParameters=function(){var t,e=this.dataModuleOrig.parameters;try{e=e.trim(),t=new Function("return "+e+"||{};")()}catch(r){return void this.moduleError.add(r,s.MESSAGESERRORS.parameters,this.dataModuleOrig)}if(t=t||{},this.dataModule.parameters={},t instanceof Object)for(var n in t)this.dataModule.parameters[n]=t[n];else;},t}();r["default"]=u},{"../utils/ModuleError":10,"../utils/XHRPromise":12,"./ModuleInternal":7,"es6-promise":1}],7:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t("es6-promise");var n=t("../utils/ModuleError"),o=t("../utils/SplitPromise"),i=function(){function t(t,e){this.dataModule=t,this.modules=e,this._exports={},this.onReady=new o["default"],this.moduleError=new n.ModuleError,this.setNameSpace()}return t.prototype.safeExecute=function(t){this.innerScript=t;var e,r;e=this.getNameSpace();try{return r=new Function("nModule",this.innerScript).bind(e)(e),this.onReady.resolve(e),Promise.resolve()}catch(n){return this.onReady.reject(n),Promise.reject(n)}},t.prototype.getNameSpace=function(){return this.nameSpace},Object.defineProperty(t.prototype,"innerScript",{get:function(){return this._innerScript},set:function(t){this._innerScript=t},enumerable:!0,configurable:!0}),t.prototype.require=function(t){},Object.defineProperty(t.prototype,"exports",{get:function(){return this._exports},set:function(t){this._exports=t},enumerable:!0,configurable:!0}),t.prototype.moduleEvent=function(t,e){var r=this.modules[t];if(!r){var n=[];for(var o in this.modules)n.push(o);return Promise.reject('The module "'+t+'" not exist with this name, the current exists modules are : '+n.join(", "))}switch(e){case"ready":return r.onReady()}return r.onReady()},t.prototype.setNameSpace=function(){var t=this,e=this;this.nameSpace={},Object.defineProperty(this.nameSpace,"webpublicationNamespace",{enumerable:!0,configurable:!1,writable:!1,value:webpublicationNamespace||w}),Object.defineProperty(this.nameSpace,"data",{enumerable:!0,configurable:!1,writable:!1,value:this.dataModule}),Object.defineProperty(this.nameSpace,"exports",{enumerable:!0,configurable:!1,get:function(){return e.exports},set:function(t){e.exports=t}}),Object.defineProperty(this.nameSpace,"modules",{enumerable:!0,configurable:!1,writable:!1,value:this.modules}),Object.defineProperty(this.nameSpace,"require",{enumerable:!0,configurable:!1,writable:!1,value:this.require}),Object.defineProperty(this.nameSpace,"onReady",{enumerable:!0,configurable:!1,writable:!1,value:function(){return t.onReady}}),Object.defineProperty(this.nameSpace,"on",{enumerable:!0,configurable:!1,writable:!1,value:function(e,r){return t.moduleEvent(e,r)}})},t}();r["default"]=i},{"../utils/ModuleError":10,"../utils/SplitPromise":11,"es6-promise":1}],8:[function(t,e,r){"use strict";var n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(o,i){function s(t){try{u(n.next(t))}catch(e){i(e)}}function a(t){try{u(n["throw"](t))}catch(e){i(e)}}function u(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(s,a)}u((n=n.apply(t,e||[])).next())})},o=this&&this.__generator||function(t,e){function r(t){return function(e){return n([t,e])}}function n(r){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(s=i[2&r[0]?"return":r[0]?"throw":"next"])&&!(s=s.call(i,r[1])).done)return s;switch(i=0,s&&(r=[0,s.value]),r[0]){case 0:case 1:s=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(s=a.trys,!(s=s.length>0&&s[s.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!s||r[1]>s[0]&&r[1]<s[3])){a.label=r[1];break}if(6===r[0]&&a.label<s[1]){a.label=s[1],s=r;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(r);break}s[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(n){r=[6,n],i=0}finally{o=s=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var o,i,s,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return{next:r(0),"throw":r(1),"return":r(2)}};Object.defineProperty(r,"__esModule",{value:!0}),t("es6-promise");var i=t("./Module"),s=t("../utils/SplitPromise"),a=function(){function t(){this.modules={},this.modulesPrivate={},this.modulesReady={},this.modulesArray=[]}return t.prototype.init=function(){var t=this;this.dataModules=w.Main.xmlManager.get("common-ui","modules");var e=new Promise(function(e,r){t.resolveModules(t.dataModules).then(function(){t.loadModules().then(function(){return e()})["catch"](function(){console.warn("Something wrong with modules!"),r("Something wrong with modules!")})})});return e},Object.defineProperty(t.prototype,"userAgent",{get:function(){return w.Param.userAgent},enumerable:!0,configurable:!0}),t.prototype.resolveValues=function(t){for(var e in t){var r=e;t[r]=w.Utils.resolveVariable(t[r])}return Promise.resolve()},t.prototype.resolveModules=function(t){var e=[];for(var r in t)e.push(this.resolveValues(t[r]));return Promise.all(e)},t.prototype.getParamName=function(t){var e=t.name;return"string"!=typeof e?null:(e=e.trim(),!!e==!1?null:e)},t.prototype.checkUserAgentFilter=function(t){var e=new RegExp(t,"gim"),r=this.userAgent.device.type.match(e);if(null===r){var n=window.location.search;r=n.match(e)}return null===r&&(r=navigator.userAgent.match(e)),r},t.prototype.loadModules=function(){return n(this,void 0,void 0,function(){var t,e,r,n,i,a,u,c,i,a;return o(this,function(o){switch(o.label){case 0:for(t=[],r=this.dataModules.slice(0),i=0,a=this.dataModules.length;i<a;i++)if(n=r[i],u=this.checkUserAgentFilter(n.userAgentFilter),c=this.getParamName(n),null!==u&&"false"!==n.enable){if(null===c||void 0!==this.modulesReady[c])throw'\nyou can use a multiple modules with same name: "'+c+'"\t\t\t\t\nonly if the filters gives different result.\t\t\t\t\nOr : you can not enable module with name "'+c+'",\t\t\t\t\nthere is another module with the same name which is enabled yet!.';this.modulesReady[c]=new s["default"],e=this.preSetModule(n),t.push(e)}i=0,a=this.modulesArray.length,o.label=1;case 1:return i<a?(n=r[i],e=this.loadModule(this.modulesArray[i]),"false"!==n.asynchronous?[3,3]:[4,e]):[3,5];case 2:o.sent(),o.label=3;case 3:t.push(e),o.label=4;case 4:return i++,[3,1];case 5:return[2,Promise.all(t)]}})})},t.prototype.preSetModule=function(t){var e=this,r=new Promise(function(r,n){var o=new i["default"](t,e.modules),s=o.getModuleName();e.modules[s]=o.getNameSpace(),e.modulesArray.push(o),e.modulesPrivate[s]=o,r()});return r},t.prototype.loadModule=function(t){var e=this,r=t.init();return r.then(function(){e.modulesReady[t.getModuleName()].resolve(t.getNameSpace())})["catch"](function(r){e.modulesReady[t.getModuleName()].reject(r)}),r},t}();r["default"]=a},{"../utils/SplitPromise":11,"./Module":6,"es6-promise":1}],9:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function t(){this.listeners={},this.iName="ApiEvent"}return t.prototype.addListener=function(t,e){"undefined"==typeof this.listeners[t]&&(this.listeners[t]=[]),this.listeners[t].indexOf(e)===-1&&this.listeners[t].push(e)},t.prototype.fire=function(t){var e,r,n=0,o=0;if(t.target||(t.target=this),t.context||(t.context=this),this.listeners[t.type]instanceof Array){e=this.listeners[t.type],r=[];var i=void 0;for(o=e.length;n<o;n++)r.push(e[n]);for(;i=r.shift();)e.indexOf(i)!==-1&&i(t)}},t.prototype.removeListener=function(t,e){var r,n=0,o=0;if(this.listeners[t]instanceof Array)for(r=this.listeners[t],n=r.length;o<n;o++){if(null!==e&&r[o]===e){r.splice(o,1);break}null===e&&r.splice(o,1)}},t}();r.ApiEvents=n},{}],10:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={name:"module error =>  'name' attribute !,",enable:"module error =>  'enable' attribute !,",parameters:"module error =>  'parameters' attribute !,",path:"module error =>  'path' attribute !,",version:"module error =>  'version' attribute !,",userAgentFilter:"module error =>  'version' attribute !,",moduleEmpty:"module is empty !,",moduleScriptError:"Script error in module !,"};r.MESSAGESERRORS=n;var o=function(){function t(){this._errorStatus=!1,this.errorReasons=[]}return t.prototype.add=function(t,e,r){this.errorStatus=!0,this.errorReasons.push([e,t]),console.warn(r,t)},t.prototype.getMessages=function(){var t="";return this.errorReasons.forEach(function(e){t=t.concat(e.join("\n and \n"))}),t},t.prototype.thereIsErrors=function(){return this.errorStatus},Object.defineProperty(t.prototype,"errorStatus",{get:function(){return this._errorStatus},set:function(t){this._errorStatus=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"errorReasons",{get:function(){return this._errorReasons},set:function(t){this._errorReasons=t},enumerable:!0,configurable:!0}),t}();r.ModuleError=o},{}],11:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t("es6-promise");var n=function(){function t(){var t=this;this.promise=new Promise(function(e,r){t.resolve=e,t.reject=r});var e=this.promise;this.then=e.then.bind(e),this["catch"]=e["catch"].bind(e)}return t}();r["default"]=n},{"es6-promise":1}],12:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function t(){}return t}();n.GET="GET",n.get="GET",n.POST="POST",n.post="POST",r.Protocol=n;var o=function(){function t(t,e,r){void 0===t&&(t=n.GET),void 0===e&&(e=""),void 0===r&&(r=null),this.protocol=t,this.url=e,this.data=r,this.xhr=new XMLHttpRequest}return t.prototype.onreadystatechange=function(){if(4===this.xhr.readyState)return 404===this.xhr.status?void this.reject(this):void this.resolve(this.xhr)},t.prototype.executeur=function(t,e){this.resolve=t,this.reject=e,this.xhr.open(this.protocol,this.url,!0),this.xhr.onreadystatechange=this.onreadystatechange.bind(this),this.xhr.send(this.data)},t.prototype.init=function(){return new Promise(this.executeur.bind(this))},t}();r["default"]=o},{}]},{},[5]);