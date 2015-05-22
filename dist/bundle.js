!function e(t,n,r){function a(i,l){if(!n[i]){if(!t[i]){var u="function"==typeof require&&require;if(!l&&u)return u(i,!0);if(o)return o(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var c=n[i]={exports:{}};t[i][0].call(c.exports,function(e){var n=t[i][1][e];return a(n?n:e)},c,c.exports,e,t,n,r)}return n[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)a(r[i]);return a}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n,r){r.html5Mode(!1),n.when("/",{controller:"moController"}).when("/:language/",{controller:"moHomeController",controllerAs:"home",templateUrl:"../monad/templates/home.html"}).when("/:language/login/",{controller:u.LoginController,controllerAs:"login",templateUrl:"../monad/templates/login.html"}),e.useLoader("$translatePartialLoader",{urlTemplate:"{part}/i18n/{lang}.json"}),e.preferredLanguage("en"),t.addPart("../monad")}Object.defineProperty(n,"__esModule",{value:!0});var o=e("./Monad"),i=e("./controllers/RootController"),l=e("./controllers/HomeController"),u=e("./controllers/LoginController"),s=e("./services/Navigation"),c=e("./services/Authentication"),d=e("./services/Language"),f=e("./helpers/post"),m=r(f),g=e("./directives/angular"),p=r(g),v="monad.core";angular.module(v,["ng","ngRoute","pascalprecht.translate","ngSanitize","ui.bootstrap",p["default"]]).config(["$translateProvider","$translatePartialLoaderProvider","$routeProvider","$locationProvider",a]).run(["$http","$rootScope","$translate",function(e,t,n){m["default"](e),t.$on("$translatePartialLoaderStructureChanged",function(){return n.refresh()})}]).controller("moController",i.RootController).controller("moHomeController",l.HomeController).service("moNavigation",s.Navigation).service("moAuthentication",c.Authentication).service("moLanguage",d.Language).value("title","Default generic administrator").value("languages",["en","nl"]).value("theme","../monad/default.css").value("ckeditor",{}),window.monad=new o.Monad,n["default"]=v,t.exports=n["default"]},{"./Monad":2,"./controllers/HomeController":5,"./controllers/LoginController":7,"./controllers/RootController":8,"./directives/angular":9,"./helpers/post":19,"./services/Authentication":20,"./services/Language":21,"./services/Navigation":22}],2:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e("./classes/Component"),i=void 0,l={},u=function(){function e(){r(this,e)}return a(e,[{key:"application",value:function(e){var t=void 0===arguments[1]?[]:arguments[1],n=void 0===arguments[2]?void 0:arguments[2];if(void 0!=i)throw"Sorry, you can only call `monad.application` once!";var r=["monad.core"];for(var a in l)r.push(a);return i=new o.Component(e,angular.module("monad",t.concat(r),n))}},{key:"component",value:function(e,t){var n=void 0===arguments[2]?[]:arguments[2],r=void 0===arguments[3]?void 0:arguments[3];return l[t]||(l[t]=new o.Component(e,angular.module(t,n.concat(["monad.core"]),r))),l[t]}}]),e}();n.Monad=u},{"./classes/Component":3}],3:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){var n=void 0===arguments[2]?{}:arguments[2],r=void 0===arguments[3]?{}:arguments[3];r.module=function(){return e},n.resolve=r,c[e].config(["$routeProvider","$translatePartialLoaderProvider",function(r,a){r.when("/:language"+t,n),a.addPart(e)}])}function o(e,t){return e+t.substring(0,1).toUpperCase()+t.substring(1)}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=e("../controllers/ListController"),u=e("../controllers/CrudController"),s=e("../services/Navigation"),c={},d=new s.Navigation,f=function(){function e(t,n){r(this,e),c[n.name]=n,c[n.name].paths={},this.name=n.name,this.prefix=t}return i(e,[{key:"list",value:function(e){var t=void 0===arguments[1]?{}:arguments[1],n=void 0===arguments[2]?{}:arguments[2];return t.controller=t.controller||l.ListController,t.controllerAs=t.controllerAs||"list",t.templateUrl=t.templateUrl||"../monad/templates/list.html",delete t.template,n.Manager=n.Manager||[o(this.prefix,this.name)+"Manager",function(e){return e}],"columns"in t&&!function(){var e=t.columns;n.columns=function(){return e},delete t.columns}(),"menu"in t&&!t.menu||d.register(t.menu||"main","/:language"+e,"monad.navigation."+this.name),delete t.menu,a(this.name,e,t,n),c[this.name].paths.list="/:language"+e,this}},{key:"update",value:function(e){var t=void 0===arguments[1]?{}:arguments[1],n=void 0===arguments[2]?{}:arguments[2];return t.controller=t.controller||u.CrudController,t.controllerAs=t.controllerAs||"crud",t.templateUrl=t.templateUrl||this.name+"/schema.html",delete t.template,n.Manager=n.Manager||[o(this.prefix,this.name)+"Manager",function(e){return e}],a(this.name,e,t,n),c[this.name].paths.update="/:language"+e,this}},{key:"manager",value:function(e){return this.service(o(this.prefix,this.name)+"Manager",e),this}},{key:"provider",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=c[this.name]).provider.apply(e,n),this}},{key:"factory",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=c[this.name]).factory.apply(e,n),this}},{key:"service",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=c[this.name]).service.apply(e,n),this}},{key:"value",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=c[this.name]).value.apply(e,n),this}},{key:"constant",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=c[this.name]).constant.apply(e,n),this}},{key:"animation",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=c[this.name]).animation.apply(e,n),this}},{key:"filter",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=c[this.name]).filter.apply(e,n),this}},{key:"controller",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=c[this.name]).controller.apply(e,n),this}},{key:"directive",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=c[this.name]).directive.apply(e,n),this}},{key:"config",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=c[this.name]).config.apply(e,n),this}},{key:"run",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=c[this.name]).run.apply(e,n),this}}],[{key:"get",value:function(e){return c[e]}}]),e}();n.Component=f},{"../controllers/CrudController":4,"../controllers/ListController":6,"../services/Navigation":22}],4:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e("../classes/Component"),i=void 0,l=void 0,u=void 0,s=void 0,c=function(){function e(t,n,a,o){var c=this;if(r(this,e),i=t,l=n,u=a,s=o,t.current&&t.current.locals)for(var d in t.current.locals)"$"!=d.substring(0,1)&&(this[d]=t.current.locals[d]);switch(t.current.params.id){case"create":this.item=new this.Manager.model;break;default:this.Manager.find(t.current.params).success(function(e){return c.item=e})}}return a(e,[{key:"save",value:function(){this.item.$new?this.Manager.create(this.item).success(function(){return u.path(u.path().replace(/\/create\//,"/"))}):this.item.$dirty&&this.Manager.update(this.item).success(this.reload)}},{key:"delete",value:function(){{var e=this;l.open({template:'<div class="modal-header"><h3 class="modal-title">{{\'monad.delete.title\' | translate}}</h3></div>\n                            <div class="modal-body">\n                            {{\'monad.delete.body\' | translate}}\n                        </div>\n                        <div class="modal-footer">\n                            <button class="btn btn-primary" ng-click="ok(monad.language)">{{\'monad.delete.ok\' | translate}}</button>\n                            <button class="btn btn-warning" ng-click="cancel()">{{\'monad.delete.cancel\' | translate}}</button>\n                        </div>',controller:["$scope","$modalInstance",function(t,n){t.ok=function(){e.Manager["delete"](e.item),n.close(e.item),u.path(o.Component.get(e.module).paths.list.replace(/:language/,s.current)),i.reload()},t.cancel=function(){n.dismiss("cancel")}}]})}}},{key:"reload",value:function(){i.reload()}}]),e}();c.$inject=["$route","$modal","$location","moLanguage"],n.CrudController=c},{"../classes/Component":3}],5:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function o(){r(this,o),this.dashboard="../monad/templates/dashboard.html"};a.$inject=["$http"],n.HomeController=a},{}],6:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e("../classes/Component"),i=void 0,l=void 0,u=void 0,s=function(){function e(t,n){if(r(this,e),t.current&&t.current.locals)for(var a in t.current.locals)"$"!=a.substring(0,1)&&(this[a]=t.current.locals[a]);this.$new=new this.Manager.model,this.items=[],i=t.current.params,u=n,l=t,this.page=i.page||1;var s=o.Component.get(this.module);this.path=s.paths.update,this.create=function(e){return s.paths.update.replace(/:language/,e).replace(/:id/,"create")}}return a(e,[{key:"reload",value:function(){l.reload()}},{key:"page",get:function(){return this._page},set:function(e){var t=this;for(this._page=e;this.items.length;)this.items.pop();this.Manager.list(i,{offset:10*(e-1)}).success(function(e){return e.map(function(e){return t.items.push(e)})})}},{key:"delete",value:function(e){{var t=this;u.open({template:'<div class="modal-header"><h3 class="modal-title">{{\'monad.delete.title\' | translate}}</h3></div>\n<div class="modal-body">\n    {{\'monad.delete.body\' | translate}}\n</div>\n<div class="modal-footer">\n    <button class="btn btn-primary" ng-click="ok()">{{\'monad.delete.ok\' | translate}}</button>\n    <button class="btn btn-warning" ng-click="cancel()">{{\'monad.delete.cancel\' | translate}}</button>\n</div>',controller:["$scope","$modalInstance",function(n,r){n.ok=function(){t.Manager["delete"](e),r.close(e),l.reload()},n.cancel=function(){r.dismiss("cancel")}}]})}}}]),e}();s.$inject=["$route","$modal"],n.ListController=s},{"../classes/Component":3}],7:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=void 0,i=void 0,l=function(){function e(t,n){r(this,e),o=n,i=t}return a(e,[{key:"attempt",value:function(e){o.login(this.username,this.password).success(function(){i.path("/"+e+"/")})}}]),e}();l.$inject=["$location","moAuthentication"],n.LoginController=l},{}],8:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=void 0,i=void 0,l=void 0,u=void 0,s=void 0,c=void 0,d=void 0,f=function(){function e(t,n,a,f,m,g,p,v,h,y,b){var k=this;r(this,e),o=t,i=g,l=p,s=m,c=v,d=angular.extend({resize_enabled:!1,bodyClass:"editable",forcePasteAsPlainText:!0,docType:"<!doctype html>",entities:!1,entities_greek:!1,toolbar:"Full",disableNativeSpellChecker:!0},b),this.title=h;var C=a.reload;a.reload=function(){k.modal=!1,C()},this.loginRequired=this.loginRequired||!0,this.theme=y,p.current(),n.$on("$routeChangeStart",function(){return k.Authentication.read().success(function(){!k.Authentication.isAuthenticated()&&k.loginRequired&&o.path("/"+(c.current||c.list[0])+"/login/")})}),n.$on("$routeChangeSuccess",function(e,t){t.params.language&&(d.language=t.params.language),c.current||o.path("/"+c.list[0]+"/")}),u=a}return a(e,[{key:"Authentication",get:function(){return i}},{key:"Navigation",get:function(){return l}},{key:"language",get:function(){return c.current}},{key:"languages",get:function(){return c.list}},{key:"ckeditor",value:function(){var e=void 0===arguments[0]?{}:arguments[0];return angular.extend({},d,e)}},{key:"logout",value:function(){var e=this;this.Authentication.logout().success(function(){return o.path("/"+e.language+"/login/")})}},{key:"url",value:function(){return o.path()}},{key:"reload",value:function(){u.reload()}},{key:"license",value:function(){s.open({template:'\n<div class="modal-header">\n    <h3 class="modal-title">{{\'monad.license\' | translate}}</h3>\n</div>\n<div class="modal-body">\n    <p><strong>{{\'monad.license.note\' | translate}}</strong></p>\n    <p ng-repeat="paragraph in paragraphs">{{paragraph}}</p>\n</div>\n<div class="modal-footer">\n    <button class="btn btn-primary" ng-click="ok()">{{\'monad.license.ok\' | translate}}</button>\n</div>',controller:["$scope","$modalInstance","$http",function(e,t,n){n.get("../monad/LICENSE.txt").success(function(t){e.paragraphs=t.split("\n\n")}),e.ok=t.close}]})}}]),e}();f.$inject=["$location","$rootScope","$route","$translate","$modal","moAuthentication","moNavigation","moLanguage","title","theme","ckeditor"],n.RootController=f},{}],9:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var a=e("./list/header/directive"),o=r(a),i=e("./list/table/directive"),l=r(i),u=e("./path"),s=r(u),c=e("./field/directive"),d=r(c),f=e("./update/directive"),m=r(f),g=e("./draggable/directive"),p=r(g),v=e("./list"),h=r(v),y=e("./slug"),b=r(y);angular.module("monad.directives",["ng"]).directive("moList",h["default"]).directive("moListHeader",o["default"]).directive("moListTable",l["default"]).directive("moPath",s["default"]).directive("moField",d["default"]).directive("moUpdate",m["default"]).directive("moDraggable",p["default"]).directive("moSlug",b["default"]),n["default"]="monad.directives",t.exports=n["default"]},{"./draggable/directive":10,"./field/directive":11,"./list":12,"./list/header/directive":13,"./list/table/directive":15,"./path":16,"./slug":17,"./update/directive":18}],10:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=void 0;n["default"]=function(){function e(e,t,n){t.attr("draggable","true"),t.bind("dragstart",function(t){r=e.item,t.originalEvent.dataTransfer.effectAllowed="move",t.originalEvent.dataTransfer.setData("json/custom-object",e.item)}),t.bind("dragenter",function(){t.addClass("over")}),t.bind("dragover",function(e){return e.originalEvent.preventDefault&&e.originalEvent.preventDefault(),e.originalEvent.dataTransfer.dropEffect="move",!1}),t.bind("dragleave",function(){t.removeClass("over")}),t.bind("drop",function(t){return t.originalEvent.stopPropagation()&&t.originalEvent.stopPropagation(),r!=e.item&&e.$apply(function(){var t=e.list.indexOf(r),a=e.list.indexOf(e.item),o=n.sort;e.track&&(angular.isArray(e.track)?e.track:[e.track]).map(function(n){e.list[t][n]=e.list[a][n]}),e.list.splice(a,0,e.list.splice(t,1).shift()),e.list.map(function(e,t){e[o]=t})}),!1}),t.bind("dragend",function(){t.parent().find(".over").removeClass("over")})}return{restrict:"A",scope:{item:"=moDraggable",list:"=",track:"="},link:e}},t.exports=n["default"]},{}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{restrict:"E",template:'<div class="form-group">\n    <label>{{label}}</label>\n    <span ng-transclude></span>\n</div>',link:function(e,t){t.find("input, textarea, select").addClass("form-control")},scope:{label:"="},transclude:!0}},t.exports=n["default"]},{}],12:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{restrict:"EA",scope:{module:"@",columns:"=",path:"@"},controller:["$scope",function(){}],controllerAs:"list",bindToController:!0}},t.exports=n["default"]},{}],13:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{require:"^moList",restrict:"E",templateUrl:"../monad/directives/list/header/template.html",scope:{create:"@"},transclude:!0,link:function(e,t,n,r){e.module=r.module}}},t.exports=n["default"]},{}],14:[function(){"use strict"},{}],15:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("./controller");n["default"]=function(){return{require:"^moList",restrict:"E",templateUrl:"../monad/directives/list/table/template.html",scope:{rows:"=",total:"@",page:"="},controller:r.Controller,link:function(e,t,n,r){e.columns=r.columns,e.module=r.module,e.path=r.path},bindToController:!0}},t.exports=n["default"]},{"./controller":14}],16:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=["$route","$location","moLanguage",function(e,t,n){function r(e,t,n){for(var r in n)t=t.replace(":"+r,n[r]);e.attr("href","#"+t.replace(/^#/,""))}return{restrict:"A",link:function(a,o,i){var l=e.current?e.current.params:{},u=e.current?e.current.originalPath:t.path().replace(/^\/[a-z]{2}\//,"/:language/"),s=i.moPath||u;if(s){var c=i.arguments?a.$eval(i.arguments):{};c.language=l.language?c.language||l.language:c.language||n.current;for(var d in e.routes){var f=(e.routes[d].controller||"")+"";if(f.toLowerCase()==s.toLowerCase())return r(o,d,c)}return r(o,s,c)}}}}],t.exports=n["default"]},{}],17:[function(e,t,n){"use strict";function r(e){return e?("normalize"in String&&(e=e.normalize("NFKD").replace(/[\u0300-\u036F]/g,"")),e=e.toLowerCase().replace(/\s+/g,"-"),e=e.replace(/[^a-z0-9-]+/g,"-"),e=e.replace(/-{2,}/g,"-"),e=e.replace(/^-/,""),e=e.replace(/-$/,"")):e}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{restrict:"A",require:"ngModel",scope:{source:"=moSlug",target:"=ngModel"},link:function(e,t,n,a){t.attr("pattern","[a-z0-9-]{1,255}"),e.$watch("source",function(t){e.target=r(t)}),a.$parsers.unshift(function(e){return e=r(e)}),a.$formatters.unshift(function(e){return a.$setValidity("moSlug",!0),e=r(e)}),t.on("blur keyup change",function(){return e.target=r(t.value())})}}},t.exports=n["default"]},{}],18:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{restrict:"E",templateUrl:"../monad/directives/update/template.html",transclude:!0,scope:{save:"&onSave","delete":"&onDelete",item:"=",module:"@",list:"@"}}},t.exports=n["default"]},{}],19:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(e){function t(e){var n,r,a,o,i,l,u,s="";for(n in e)if(r=e[n],r instanceof Array)for(u=0;u<r.length;++u)i=r[u],a=n+"["+u+"]",l={},l[a]=i,s+=t(l)+"&";else if(r instanceof Object)for(o in r)i=r[o],a=n+"["+o+"]",l={},l[a]=i,s+=t(l)+"&";else s+=void 0!==r&&null!==r?encodeURIComponent(n)+"="+encodeURIComponent(r)+"&":encodeURIComponent(n)+"=&";return s.length?s.substr(0,s.length-1):s}delete e.defaults.headers.common["X-Requested-With"],e.defaults.withCredentials=!0,e.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",e.defaults.transformRequest=[function(e){return angular.isObject(e)&&"[object File]"!==String(e)?t(e):e}]},t.exports=n["default"]},{}],20:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){r(this,e)}return a(e,[{key:"read",value:function(){throw"Authentication.read must be replaced by your custom implementation."}},{key:"login",value:function(){throw"Authentication.login must be replaced by your custom implementation."}},{key:"logout",value:function(){throw"Authentication.logout must be replaced by your custom implementation."}},{key:"isAuthenticated",value:function(){return!1}}]),e}();n.Authentication=o},{}],21:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=void 0,i=void 0,l=function(){function e(t,n,a){r(this,e),i=t,a.$on("$routeChangeSuccess",function(e,t){t.params.language&&t.params.language!=o&&(o=t.params.language,n.refresh()),n.use(o)})}return a(e,[{key:"current",get:function(){return o},set:function(e){if(-1==i.indexOf(e))throw'Language "'+e+'" is unavailable, sorry.';o=e}},{key:"list",get:function(){return i}}]),e}();l.$inject=["languages","$translate","$rootScope"],n.Language=l},{}],22:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o={},i=void 0,l=function(){function e(){var t=void 0===arguments[0]?void 0:arguments[0];r(this,e),t&&(i=t)}return a(e,[{key:"register",value:function(e,t,n){var r=!1;o[e]=o[e]||[],o[e].push({url:t,label:n,selected:r}),this.hasOwnProperty(e)||Object.defineProperty(this,e,{get:function(){return o[e]}})}},{key:"current",value:function(){for(var e in o)o[e].map(function(e){return e.selected="/"!=e.url&&-1!=("#"+i.path()).indexOf(e.url)})}},{key:"select",value:function(){var e=void 0===arguments[0]?{}:arguments[0];for(var t in o)o[t].map(function(e){return e.selected=!1});e.selected=!0}},{key:"main",get:function(){return o.main}}]),e}();l.$inject=["$location"],n.Navigation=l},{}]},{},[1]);