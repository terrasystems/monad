!function e(t,n,r){function o(i,u){if(!n[i]){if(!t[i]){var l="function"==typeof require&&require;if(!u&&l)return l(i,!0);if(a)return a(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var c=n[i]={exports:{}};t[i][0].call(c.exports,function(e){var n=t[i][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n,r){r.html5Mode(!1),n.when("/",{controller:"moController"}).when("/:language/",{controller:u.HomeController,controllerAs:"home",templateUrl:"../monad/templates/home.html"}).when("/:language/login/",{controller:l.LoginController,controllerAs:"login",templateUrl:"../monad/templates/login.html"}),e.useLoader("$translatePartialLoader",{urlTemplate:"{part}/i18n/{lang}.json"}),e.preferredLanguage("en"),t.addPart("../monad")}Object.defineProperty(n,"__esModule",{value:!0});var a=e("./classes/Monad"),i=e("./controllers/RootController"),u=e("./controllers/HomeController"),l=e("./controllers/LoginController"),s=e("./services/Navigation"),c=e("./services/Authentication"),d=e("./services/Language"),f=e("./helpers/post"),p=r(f),g=e("./directives/angular"),m=r(g),v="monad.core";angular.module(v,["ng","ngRoute","pascalprecht.translate","ngSanitize","ui.bootstrap",m["default"]]).config(["$translateProvider","$translatePartialLoaderProvider","$routeProvider","$locationProvider",o]).run(["$http","$rootScope","$translate","$route","$cacheFactory",function(e,t,n,r,o){p["default"](e),t.$on("$translatePartialLoaderStructureChanged",function(){return n.refresh()}),r.reset=function(){var e=o.info();for(var t in e)"templates"!=t&&o.get(t).removeAll()}}]).controller("moController",i.RootController).service("moNavigation",s.Navigation).service("moAuthentication",c.Authentication).service("moLanguage",d.Language).value("title","Default generic administrator").value("languages",["en","nl"]).value("theme","../monad/default.css"),window.monad=new a.Monad;var h=angular.bootstrap;angular.bootstrap=function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];window.monad.bootstrap(),h.apply(void 0,t)},n["default"]=v,t.exports=n["default"]},{"./classes/Monad":3,"./controllers/HomeController":5,"./controllers/LoginController":7,"./controllers/RootController":8,"./directives/angular":9,"./helpers/post":19,"./services/Authentication":20,"./services/Language":21,"./services/Navigation":22}],2:[function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){var t=this,n=angular.merge({},this.defaults[e],this.settings[e]);n.resolve.module=function(){return t.name},n.options.resolve=n.resolve,this.ngmod.config(["$routeProvider","$translatePartialLoaderProvider",function(e,r){e.when("/:language"+n.url,options),r.addPart(t.name)}])}function i(e){var t=void 0===arguments[1]?void 0:arguments[1];return void 0==t&&(t=function(e){return e.substring(1).toUpperCase()}),e.replace(/\/(\w)/g,t)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=e("../controllers/ListController"),s=e("../controllers/CrudController"),c=e("../services/Navigation"),d=new c.Navigation,f={list:{options:{controller:l.ListController,controllerAs:"list",templateUrl:"../monad/templates/list.html"}},crud:{options:{controller:s.CrudController,controllerAs:"crud"}}},p=angular.module("monad.interface",[]),g=function(){function e(t){var n=this,r=void 0===arguments[1]?[]:arguments[1],a=void 0===arguments[2]?void 0:arguments[2];o(this,e),this.paths={},this.name=t,this.$manager=void 0,this.dependencies=r,this.configFn=a,this.queued=[],this.$bootstrapped=!1,this.defaults=angular.copy({},f),this.settings={};var i=function(e){"function"==typeof p[e]&&(n[e]=function(){for(var t=arguments.length,r=Array(t),o=0;t>o;o++)r[o]=arguments[o];return n.queued.push([e].concat(r)),n})};for(var u in p)i(u)}return u(e,[{key:"bootstrap",value:function(){var t=this;if(!this.$bootstrapped){this.$bootstrapped=!0;var n=[];this.dependencies.map(function(t){"string"==typeof t&&monad.exists(t)&&(t=monad.module(t)),"object"==typeof t&&t instanceof e?(t.bootstrap(),n.push(t.name)):n.push(t)}),this.ngmod=angular.module(this.name,n,this.configFn),this.queued.map(function(e){var n=e.shift();if("string"==typeof n){var o;(o=t.ngmod)[n].apply(o,r(e))}else n.apply(t,e)})}}},{key:"extend",value:function(e){if("string"==typeof e){if(!monad.exists(e))throw"Component "+e+" is undefined and cannot be extended upon.";e=monad.component(e)}this.defaults=angular.merge({},f,e.defaults,this.defaults)}},{key:"list",value:function(e){var t=void 0===arguments[1]?{}:arguments[1],n=void 0===arguments[2]?{}:arguments[2];return t=angular.extend({},f.list.options,t),delete t.template,n.Manager=n.Manager||[i(this.name)+"Manager",function(e){return e}],"columns"in t&&!function(){var e=t.columns;n.columns=function(){return e},delete t.columns}(),"menu"in t&&!t.menu||d.register(t.menu||"main","/:language"+e,"monad.navigation."+i(this.name,".$1")),delete t.menu,this.settings.list={url:e,options:t,resolve:n},this.queued.push(a,"list"),this.paths.list="/:language"+e,this}},{key:"update",value:function(e){var t=void 0===arguments[1]?{}:arguments[1],n=void 0===arguments[2]?{}:arguments[2];return t=angular.extend({},f.crud.options,t),t.templateUrl=t.templateUrl||this.name+"/schema.html",delete t.template,n.Manager=n.Manager||[i(this.name)+"Manager",function(e){return e}],this.settings.update={url:e,options:t,resolve:n},this.queued.push(a,"update"),this.paths.update="/:language"+e,this}},{key:"manager",value:function(e){return this.$manager=i(this.name)+"Manager",this.service(this.$manager,e),this}}]),e}();n.Component=g},{"../controllers/CrudController":4,"../controllers/ListController":6,"../services/Navigation":22}],3:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./Component"),i=void 0,u={},l=function(){function e(){r(this,e)}return o(e,[{key:"application",value:function(){var e=void 0===arguments[1]?[]:arguments[1],t=void 0===arguments[2]?void 0:arguments[2];if(void 0!=i)throw"Sorry, you can only call `monad.application` once!";var n=["monad.core"];for(var r in u)n.push(r);return i=new a.Component("monad",e.concat(n),t)}},{key:"component",value:function(e){var t=void 0===arguments[1]?[]:arguments[1],n=void 0===arguments[2]?void 0:arguments[2];return e in u||(u[e]=new a.Component(e,t.concat(["monad.core"]),n)),u[e]}},{key:"exists",value:function(e){return e in u}},{key:"bootstrap",value:function(){if(void 0==i)throw"Looks like you forget to call monad.application...";for(var e in u)u[e].bootstrap();i.bootstrap()}}]),e}();n.Monad=l},{"./Component":2}],4:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("../classes/Component"),i=void 0,u=void 0,l=void 0,s=void 0,c=function(){function e(t,n,o,a){var c=this;if(r(this,e),i=t,u=n,l=o,s=a,t.current&&t.current.locals)for(var d in t.current.locals)"$"!=d.substring(0,1)&&(this[d]=t.current.locals[d]);switch(t.current.params.id){case"create":this.item=new this.Manager.model;break;default:this.Manager.find(t.current.params).success(function(e){return c.item=e})}}return o(e,[{key:"save",value:function(){this.item.$new?this.Manager.create(this.item).success(function(){return l.path(l.path().replace(/\/create\//,"/"))}):this.item.$dirty&&this.Manager.update(this.item).success(i.reset)}},{key:"delete",value:function(){{var e=this;u.open({template:'<div class="modal-header"><h3 class="modal-title">{{\'monad.delete.title\' | translate}}</h3></div>\n                            <div class="modal-body">\n                            {{\'monad.delete.body\' | translate}}\n                        </div>\n                        <div class="modal-footer">\n                            <button class="btn btn-primary" ng-click="ok(monad.language)">{{\'monad.delete.ok\' | translate}}</button>\n                            <button class="btn btn-warning" ng-click="cancel()">{{\'monad.delete.cancel\' | translate}}</button>\n                        </div>',controller:["$scope","$modalInstance",function(t,n){t.ok=function(){e.Manager["delete"](e.item),n.close(e.item),i.reset(),l.path(a.Component.get(e.module).paths.list.replace(/:language/,s.current))},t.cancel=function(){n.dismiss("cancel")}}]})}}}]),e}();c.$inject=["$route","$modal","$location","moLanguage"],n.CrudController=c},{"../classes/Component":2}],5:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function a(){r(this,a),this.dashboard="../monad/templates/dashboard.html"};o.$inject=["$http"],n.HomeController=o},{}],6:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("../classes/Component"),i=void 0,u=void 0,l=void 0,s=function(){function e(t,n){if(r(this,e),t.current&&t.current.locals)for(var o in t.current.locals)"$"!=o.substring(0,1)&&(this[o]=t.current.locals[o]);this.$new=new this.Manager.model,i=t.current.params,l=n,u=t,this.page=i.page||1;var s=a.Component.get(this.module);this.path=s.paths.update,this.create=function(e){return s.paths.update.replace(/:language/,e).replace(/:id/,"create")}}return o(e,[{key:"page",get:function(){return this._page},set:function(e){var t=this;this._page=e,this.Manager.paginate(e,i).success(function(e){return t.items=e})}},{key:"delete",value:function(e){{var t=this;l.open({template:'<div class="modal-header"><h3 class="modal-title">{{\'monad.delete.title\' | translate}}</h3></div>\n<div class="modal-body">\n    {{\'monad.delete.body\' | translate}}\n</div>\n<div class="modal-footer">\n    <button class="btn btn-primary" ng-click="ok()">{{\'monad.delete.ok\' | translate}}</button>\n    <button class="btn btn-warning" ng-click="cancel()">{{\'monad.delete.cancel\' | translate}}</button>\n</div>',controller:["$scope","$modalInstance",function(n,r){n.ok=function(){t.Manager["delete"](e),r.close(e),u.reset(),u.reload()},n.cancel=function(){r.dismiss("cancel")}}]})}}}]),e}();s.$inject=["$route","$modal"],n.ListController=s},{"../classes/Component":2}],7:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=void 0,i=void 0,u=function(){function e(t,n){r(this,e),a=n,i=t}return o(e,[{key:"attempt",value:function(e){a.login(this.username,this.password).success(function(){i.path("/"+e+"/")})}}]),e}();u.$inject=["$location","moAuthentication"],n.LoginController=u},{}],8:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=void 0,i=void 0,u=void 0,l=void 0,s=void 0,c=void 0,d=function(){function e(t,n,o,d,f,p,g,m,v,h){var b=this;r(this,e),a=t,i=f,u=p,l=d,s=g,c=angular.extend({resize_enabled:!1,bodyClass:"editable",forcePasteAsPlainText:!0,docType:"<!doctype html>",entities:!1,entities_greek:!1,toolbar:"Full",disableNativeSpellChecker:!0},h),this.title=m,this.loginRequired=this.loginRequired||!0,this.theme=v,p.current(),n.$on("$routeChangeStart",function(){return b.Authentication.read().success(function(){!b.Authentication.isAuthenticated()&&b.loginRequired&&a.path("/"+(s.current||s.list[0])+"/login/")})}),n.$on("$routeChangeSuccess",function(e,t){t.params.language&&(c.language=t.params.language),s.current||a.path("/"+s.list[0]+"/")})}return o(e,[{key:"Authentication",get:function(){return i}},{key:"Navigation",get:function(){return u}},{key:"language",get:function(){return s.current}},{key:"languages",get:function(){return s.list}},{key:"ckeditor",value:function(){var e=void 0===arguments[0]?{}:arguments[0];return angular.extend({},c,e)}},{key:"logout",value:function(){var e=this;this.Authentication.logout().success(function(){return a.path("/"+e.language+"/login/")})}},{key:"url",value:function(){return a.path()}},{key:"license",value:function(){l.open({template:'\n<div class="modal-header">\n    <h3 class="modal-title">{{\'monad.license\' | translate}}</h3>\n</div>\n<div class="modal-body">\n    <p><strong>{{\'monad.license.note\' | translate}}</strong></p>\n    <p ng-repeat="paragraph in paragraphs">{{paragraph}}</p>\n</div>\n<div class="modal-footer">\n    <button class="btn btn-primary" ng-click="ok()">{{\'monad.license.ok\' | translate}}</button>\n</div>',controller:["$scope","$modalInstance","$http",function(e,t,n){n.get("../monad/LICENSE.txt").success(function(t){e.paragraphs=t.split("\n\n")}),e.ok=t.close}]})}}]),e}();d.$inject=["$location","$rootScope","$translate","$modal","moAuthentication","moNavigation","moLanguage","title","theme","ckeditor"],n.RootController=d},{}],9:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("./list/header/directive"),a=r(o),i=e("./list/table/directive"),u=r(i),l=e("./path"),s=r(l),c=e("./field/directive"),d=r(c),f=e("./update/directive"),p=r(f),g=e("./draggable/directive"),m=r(g),v=e("./list"),h=r(v),b=e("./slug"),y=r(b);angular.module("monad.directives",["ng"]).directive("moList",h["default"]).directive("moListHeader",a["default"]).directive("moListTable",u["default"]).directive("moPath",s["default"]).directive("moField",d["default"]).directive("moUpdate",p["default"]).directive("moDraggable",m["default"]).directive("moSlug",y["default"]),n["default"]="monad.directives",t.exports=n["default"]},{"./draggable/directive":10,"./field/directive":11,"./list":12,"./list/header/directive":13,"./list/table/directive":15,"./path":16,"./slug":17,"./update/directive":18}],10:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=void 0;n["default"]=function(){function e(e,t,n){t.attr("draggable","true"),t.bind("dragstart",function(t){r=e.item,t.originalEvent.dataTransfer.effectAllowed="move",t.originalEvent.dataTransfer.setData("json/custom-object",e.item)}),t.bind("dragenter",function(){t.addClass("over")}),t.bind("dragover",function(e){return e.originalEvent.preventDefault&&e.originalEvent.preventDefault(),e.originalEvent.dataTransfer.dropEffect="move",!1}),t.bind("dragleave",function(){t.removeClass("over")}),t.bind("drop",function(t){return t.originalEvent.stopPropagation()&&t.originalEvent.stopPropagation(),r!=e.item&&e.$apply(function(){var t=e.list.indexOf(r),o=e.list.indexOf(e.item),a=n.sort;e.track&&(angular.isArray(e.track)?e.track:[e.track]).map(function(n){e.list[t][n]=e.list[o][n]}),e.list.splice(o,0,e.list.splice(t,1).shift()),e.list.map(function(e,t){e[a]=t})}),!1}),t.bind("dragend",function(){t.parent().find(".over").removeClass("over")})}return{restrict:"A",scope:{item:"=moDraggable",list:"=",track:"="},link:e}},t.exports=n["default"]},{}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{restrict:"E",template:'<div class="form-group">\n    <label>{{label}}</label>\n    <span ng-transclude></span>\n</div>',link:function(e,t){t.find("input, textarea, select").addClass("form-control")},scope:{label:"="},transclude:!0}},t.exports=n["default"]},{}],12:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{restrict:"EA",scope:{module:"@",columns:"=",path:"@"},controller:["$scope",function(){}],controllerAs:"list",bindToController:!0}},t.exports=n["default"]},{}],13:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{require:"^moList",restrict:"E",templateUrl:"../monad/directives/list/header/template.html",scope:{create:"@"},transclude:!0,link:function(e,t,n,r){e.module=r.module}}},t.exports=n["default"]},{}],14:[function(){"use strict"},{}],15:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("./controller");n["default"]=function(){return{require:"^moList",restrict:"E",templateUrl:"../monad/directives/list/table/template.html",scope:{rows:"=",total:"@",page:"="},controller:r.Controller,link:function(e,t,n,r){e.columns=r.columns,e.module=r.module,e.path=r.path},bindToController:!0}},t.exports=n["default"]},{"./controller":14}],16:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=["$route","$location","moLanguage",function(e,t,n){function r(e,t,n){for(var r in n)t=t.replace(":"+r,n[r]);e.attr("href","#"+t.replace(/^#/,""))}return{restrict:"A",link:function(o,a,i){var u=e.current?e.current.params:{},l=e.current?e.current.originalPath:t.path().replace(/^\/[a-z]{2}\//,"/:language/"),s=i.moPath||l;if(s){var c=i.arguments?o.$eval(i.arguments):{};c.language=u.language?c.language||u.language:c.language||n.current;for(var d in e.routes){var f=(e.routes[d].controller||"")+"";if(f.toLowerCase()==s.toLowerCase())return r(a,d,c)}return r(a,s,c)}}}}],t.exports=n["default"]},{}],17:[function(e,t,n){"use strict";function r(e){return e?("normalize"in String&&(e=e.normalize("NFKD").replace(/[\u0300-\u036F]/g,"")),e=e.toLowerCase().replace(/\s+/g,"-"),e=e.replace(/[^a-z0-9-]+/g,"-"),e=e.replace(/-{2,}/g,"-"),e=e.replace(/^-/,""),e=e.replace(/-$/,"")):e}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{restrict:"A",require:"ngModel",scope:{source:"=moSlug",target:"=ngModel"},link:function(e,t,n,o){t.attr("pattern","[a-z0-9-]{1,255}"),e.$watch("source",function(t){e.target=r(t)}),o.$parsers.unshift(function(e){return e=r(e)}),o.$formatters.unshift(function(e){return o.$setValidity("moSlug",!0),e=r(e)}),t.on("blur keyup change",function(){return e.target=r(t.value())})}}},t.exports=n["default"]},{}],18:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{restrict:"E",templateUrl:"../monad/directives/update/template.html",transclude:!0,scope:{save:"&onSave","delete":"&onDelete",item:"=",module:"@",list:"@"}}},t.exports=n["default"]},{}],19:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(e){function t(e){var n,r,o,a,i,u,l,s="";for(n in e)if(r=e[n],r instanceof Array)for(l=0;l<r.length;++l)i=r[l],o=n+"["+l+"]",u={},u[o]=i,s+=t(u)+"&";else if(r instanceof Object)for(a in r)i=r[a],o=n+"["+a+"]",u={},u[o]=i,s+=t(u)+"&";else s+=void 0!==r&&null!==r?encodeURIComponent(n)+"="+encodeURIComponent(r)+"&":encodeURIComponent(n)+"=&";return s.length?s.substr(0,s.length-1):s}delete e.defaults.headers.common["X-Requested-With"],e.defaults.withCredentials=!0,e.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",e.defaults.transformRequest=[function(e){return angular.isObject(e)&&"[object File]"!==String(e)?t(e):e}]},t.exports=n["default"]},{}],20:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(){r(this,e)}return o(e,[{key:"read",value:function(){throw"Authentication.read must be replaced by your custom implementation."}},{key:"login",value:function(){throw"Authentication.login must be replaced by your custom implementation."}},{key:"logout",value:function(){throw"Authentication.logout must be replaced by your custom implementation."}},{key:"isAuthenticated",value:function(){return!1}}]),e}();n.Authentication=a},{}],21:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=void 0,i=void 0,u=function(){function e(t,n,o){r(this,e),i=t,o.$on("$routeChangeSuccess",function(e,t){t.params.language&&t.params.language!=a&&(a=t.params.language,n.refresh()),n.use(a)})}return o(e,[{key:"current",get:function(){return a},set:function(e){if(-1==i.indexOf(e))throw'Language "'+e+'" is unavailable, sorry.';a=e}},{key:"list",get:function(){return i}}]),e}();u.$inject=["languages","$translate","$rootScope"],n.Language=u},{}],22:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a={},i=void 0,u=function(){function e(){var t=void 0===arguments[0]?void 0:arguments[0];r(this,e),t&&(i=t)}return o(e,[{key:"register",value:function(e,t,n){var r=!1;a[e]=a[e]||[],a[e].push({url:t,label:n,selected:r}),this.hasOwnProperty(e)||Object.defineProperty(this,e,{get:function(){return a[e]}})}},{key:"current",value:function(){for(var e in a)a[e].map(function(e){return e.selected="/"!=e.url&&-1!=("#"+i.path()).indexOf(e.url)})}},{key:"select",value:function(){var e=void 0===arguments[0]?{}:arguments[0];for(var t in a)a[t].map(function(e){return e.selected=!1});e.selected=!0}},{key:"main",get:function(){return a.main}}]),e}();u.$inject=["$location"],n.Navigation=u},{}]},{},[1]);