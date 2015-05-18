!function e(t,n,r){function a(i,l){if(!n[i]){if(!t[i]){var u="function"==typeof require&&require;if(!l&&u)return u(i,!0);if(o)return o(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var c=n[i]={exports:{}};t[i][0].call(c.exports,function(e){var n=t[i][1][e];return a(n?n:e)},c,c.exports,e,t,n,r)}return n[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)a(r[i]);return a}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n,r){r.html5Mode(!1),n.when("/",{controller:"moController"}).when("/:language/",{controller:"moHomeController",controllerAs:"home",templateUrl:"../monad/templates/home.html"}).when("/:language/login/",{controller:u.LoginController,controllerAs:"login",templateUrl:"../monad/templates/login.html"}),e.useLoader("$translatePartialLoader",{urlTemplate:"{part}/i18n/{lang}.json"}),e.preferredLanguage("en"),t.addPart("../monad")}Object.defineProperty(n,"__esModule",{value:!0});var o=e("./Monad"),i=e("./controllers/RootController"),l=e("./controllers/HomeController"),u=e("./controllers/LoginController"),s=e("./services/Navigation"),c=e("./helpers/post"),d=r(c),f=e("./directives/angular"),m=r(f),v="monad.core";angular.module(v,["ng","ngRoute","pascalprecht.translate","ckeditor","ngSanitize","ngFileUpload","ui.bootstrap",m["default"]]).config(["$translateProvider","$translatePartialLoaderProvider","$routeProvider","$locationProvider",a]).run(["$http","$rootScope","$translate",function(e,t,n){d["default"](e),t.$on("$translatePartialLoaderStructureChanged",function(){return n.refresh()})}]).controller("moController",i.RootController).controller("moHomeController",l.HomeController).service("moNavigation",s.Navigation),window.monad=new o.Monad,n["default"]=v,t.exports=n["default"]},{"./Monad":2,"./controllers/HomeController":5,"./controllers/LoginController":7,"./controllers/RootController":8,"./directives/angular":9,"./helpers/post":18,"./services/Navigation":19}],2:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e("./classes/Module"),i=void 0,l={},u=function(){function e(){r(this,e)}return a(e,[{key:"application",value:function(e){var t=void 0===arguments[1]?[]:arguments[1],n=void 0===arguments[2]?void 0:arguments[2];if(void 0!=i)throw"Sorry, you can only call `monad.application` once!";return i=new o.Module(e,angular.module("monad",t.concat(["monad.core"]),n))}},{key:"module",value:function(e,t){var n=void 0===arguments[2]?[]:arguments[2],r=void 0===arguments[3]?void 0:arguments[3];return l[t]||(l[t]=new o.Module(e,angular.module(t,n.concat(["monad"],r)))),l[t]}}]),e}();n.Monad=u},{"./classes/Module":3}],3:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){var n=void 0===arguments[2]?{}:arguments[2],r=void 0===arguments[3]?{}:arguments[3];r.module=r.module||function(){return this.name};var a={options:n,resolve:r};s[e].config(["$routeProvider",function(e){return e.when("/:language"+t,a)}])}function o(e,t){return e+t.substring(0,1).toUpperCase()+t.substring(1)}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=e("../controllers/ListController"),u=e("../controllers/CrudController"),s={},c=function(){function e(t,n){r(this,e),s[n.name]=n,this.name=n.name,this.prefix=t}return i(e,[{key:"list",value:function(e){var t=void 0===arguments[1]?{}:arguments[1],n=void 0===arguments[2]?{}:arguments[2];return t.controller=t.controller||l.ListController,t.controllerAs=t.controllerAs||"list",t.templateUrl=t.templateUrl||"../monad/templates/list.html",delete t.template,n.Manager=n.Manager||[o(this.prefix,name)+"Manager",function(e){return e}],"columns"in t&&!function(){var e=t.columns;n.columns=function(){return e},delete t.columns}(),a(this.name,e,t,n),this}},{key:"update",value:function(e){var t=void 0===arguments[1]?{}:arguments[1],n=void 0===arguments[2]?{}:arguments[2];return t.controller=t.controller||u.CrudController,t.controllerAs=t.controllerAs||"crud",t.templateUrl=t.templateUrl||this.name+"/schema.html",delete t.template,n.Manager=n.Manager||[o(this.prefix,name)+"Manager",function(e){return e}],a(this.name,e,t,n),this}},{key:"manager",value:function(e){return this.service(o(this.prefix,this.name)+"Manager",e),this}},{key:"provider",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=s[this.name]).provider.apply(e,n),this}},{key:"factory",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=s[this.name]).factory.apply(e,n),this}},{key:"service",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=s[this.name]).service.apply(e,n),this}},{key:"value",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=s[this.name]).value.apply(e,n),this}},{key:"constant",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=s[this.name]).constant.apply(e,n),this}},{key:"animation",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=s[this.name]).animation.apply(e,n),this}},{key:"filter",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=s[this.name]).filter.apply(e,n),this}},{key:"controller",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=s[this.name]).controller.apply(e,n),this}},{key:"directive",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=s[this.name]).directive.apply(e,n),this}},{key:"config",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=s[this.name]).config.apply(e,n),this}},{key:"run",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=s[this.name]).run.apply(e,n),this}}]),e}();n.Module=c},{"../controllers/CrudController":4,"../controllers/ListController":6}],4:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=void 0,i=function(){function e(t,n){var a=this;if(r(this,e),o=t,t.current&&t.current.locals)for(var i in t.current.locals)"$"!=i.substring(0,1)&&(this[i]=t.current.locals[i]);switch(n.addPart(this.module),t.current.params.id){case"create":this.item=new this.Manager.model;break;default:this.Manager.find(t.current.params).success(function(e){return a.item=e})}}return a(e,[{key:"save",value:function(){var e=void 0;this.item.$new?e=this.Manager.create(this.item):this.item.$deleted?e=this.Manager["delete"](this.item):this.item.$dirty&&(e=this.Manager.update(this.item)),e&&e.success(this.reload)}},{key:"reload",value:function(){o.reload()}}]),e}();i.$inject=["$route","$translatePartialLoader"],n.CrudController=i},{}],5:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function o(e){r(this,o),this.dashboard="../monad/templates/dashboard.html"};a.$inject=["$http"],n.HomeController=a},{}],6:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=void 0,i=void 0,l=void 0,u=function(){function e(t,n,a){if(r(this,e),t.current&&t.current.locals)for(var u in t.current.locals)"$"!=u.substring(0,1)&&(this[u]=t.current.locals[u]);n.addPart(this.module),this.$new=new this.Manager.model,this.items=[],o=t.current.params,l=a,i=t,this.page=o.page||1}return a(e,[{key:"reload",value:function(){i.reload()}},{key:"page",get:function(){return this._page},set:function(e){var t=this;for(this._page=e;this.items.length;)this.items.pop();this.Manager.list(o,{offset:10*(e-1)}).success(function(e){return e.map(function(e){return t.items.push(e)})})}},{key:"delete",value:function(e){{var t=this;l.open({template:'<div class="modal-header"><h3 class="modal-title">{{\'monad.delete.title\' | translate}}</h3></div>\n<div class="modal-body">\n    {{\'monad.delete.body\' | translate}}\n</div>\n<div class="modal-footer">\n    <button class="btn btn-primary" ng-click="ok()">{{\'monad.delete.ok\' | translate}}</button>\n    <button class="btn btn-warning" ng-click="cancel()">{{\'monad.delete.cancel\' | translate}}</button>\n</div>',controller:["$scope","$modalInstance",function(n,r){n.ok=function(){t.Manager["delete"](e),r.close(e),i.reload()},n.cancel=function(){r.dismiss("cancel")}}]})}}}]),e}();u.$inject=["$route","$translatePartialLoader","$modal"],n.ListController=u},{}],7:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=void 0,i=void 0,l=function(){function e(t,n){r(this,e),o=n,i=t}return a(e,[{key:"attempt",value:function(e){o.login(this.username,this.password).success(function(t){i.path("/"+e+"/")})}}]),e}();l.$inject=["$location","moAuthentication"],n.LoginController=l},{}],8:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=void 0,i=void 0,l=void 0,u=void 0,s=void 0,c=function(){function e(t,n,a,c,d,f,m){var v=this;r(this,e),o=t,i=d,l=f,s=m,this.title="Default generic administrator";var g=a.reload;a.reload=function(){v.modal=!1,g()},this.loginRequired=this.loginRequired||!0,this.language="en",this.paths={root:"/monad/",theme:"../monad/default.css"},this.Navigation.register("main","/","Site"),n.$on("$routeChangeStart",function(){return v.Authentication.read().success(function(e){!v.Authentication.isAuthenticated()&&v.loginRequired&&o.path("/"+v.language+"/login/")})}),n.$on("$routeChangeSuccess",function(e,t){t.params.language&&t.params.language!=v.language&&(v.language=t.params.language,c.refresh()),v.language||o.path("/en/"),c.use(v.language)}),u=a}return a(e,[{key:"Authentication",get:function(){return i}},{key:"Navigation",get:function(){return l}},{key:"logout",value:function(){var e=this;this.Authentication.logout().success(function(){return o.path("/"+e.language+"/login/")})}},{key:"url",value:function(){return o.path()}},{key:"reload",value:function(){u.reload()}},{key:"license",value:function(){s.open({template:'\n<div class="modal-header">\n    <h3 class="modal-title">{{\'monad.license\' | translate}}</h3>\n</div>\n<div class="modal-body" ng-include="\'../monad/license.html\'"></div>\n<div class="modal-footer">\n    <button class="btn btn-primary" ng-click="ok()">OK</button>\n</div>',controller:["$scope","$modalInstance",function(e,t){e.ok=t.close}]})}}]),e}();c.$inject=["$location","$rootScope","$route","$translate","moAuthentication","moNavigation","$modal"],n.RootController=c},{}],9:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var a=e("./list/header/directive"),o=r(a),i=e("./list/table/directive"),l=r(i),u=e("./path/directive"),s=r(u),c=e("./field/directive"),d=r(c),f=e("./update/directive"),m=r(f),v=e("./draggable/directive"),g=r(v),p=e("./list"),h=r(p);angular.module("monad.directives",["ng"]).directive("moList",h["default"]).directive("moListHeader",o["default"]).directive("moListTable",l["default"]).directive("moPath",s["default"]).directive("moField",d["default"]).directive("moUpdate",m["default"]).directive("moDraggable",g["default"]),n["default"]="monad.directives",t.exports=n["default"]},{"./draggable/directive":10,"./field/directive":11,"./list":12,"./list/header/directive":13,"./list/table/directive":15,"./path/directive":16,"./update/directive":17}],10:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=void 0;n["default"]=function(){function e(e,t,n){t.attr("draggable","true"),t.bind("dragstart",function(t){r=e.item,t.originalEvent.dataTransfer.effectAllowed="move",t.originalEvent.dataTransfer.setData("json/custom-object",e.item)}),t.bind("dragenter",function(e){t.addClass("over")}),t.bind("dragover",function(e){return e.originalEvent.preventDefault&&e.originalEvent.preventDefault(),e.originalEvent.dataTransfer.dropEffect="move",!1}),t.bind("dragleave",function(e){t.removeClass("over")}),t.bind("drop",function(t){return t.originalEvent.stopPropagation()&&t.originalEvent.stopPropagation(),r!=e.item&&e.$apply(function(){var t=e.list.indexOf(r),a=e.list.indexOf(e.item),o=n.sort;e.track&&(angular.isArray(e.track)?e.track:[e.track]).map(function(n){e.list[t][n]=e.list[a][n]}),e.list.splice(a,0,e.list.splice(t,1).shift()),e.list.map(function(e,t){e[o]=t})}),!1}),t.bind("dragend",function(e){t.parent().find(".over").removeClass("over")})}return{restrict:"A",scope:{item:"=moDraggable",list:"=",track:"="},link:e}},t.exports=n["default"]},{}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{restrict:"E",template:'<div class="form-group">\n    <label>{{label}}</label>\n    <span ng-transclude></span>\n</div>',link:function(e,t,n){t.find("input, textarea, select").addClass("form-control")},scope:{label:"="},transclude:!0}},t.exports=n["default"]},{}],12:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{restrict:"EA",scope:{module:"@"},controller:["$scope",function(e){}],controllerAs:"list",bindToController:!0}},t.exports=n["default"]},{}],13:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{require:"^moList",restrict:"E",templateUrl:"../monad/directives/list/header/template.html",scope:{create:"@"},transclude:!0,link:function(e,t,n,r){e.module=r.module}}},t.exports=n["default"]},{}],14:[function(e,t,n){"use strict"},{}],15:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("./controller");n["default"]=function(){return{require:"^moList",restrict:"E",templateUrl:"../monad/directives/list/table/template.html",scope:{rows:"=",path:"@",total:"@",page:"="},controller:r.Controller,link:function(e,t,n,r){e.columns=e.$eval(n.columns),e.module=r.module},bindToController:!0}},t.exports=n["default"]},{"./controller":14}],16:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=["$route",function(e){function t(e,t,n){for(var r in n)t=t.replace(":"+r,n[r]);e.attr("href","#"+t.replace(/^#/,""))}return{restrict:"A",link:function(n,r,a){if(a.moPath){var o=n.$eval(a.moPath);if(o){var i=a.arguments?n.$eval(a.arguments):{};i.language=e.current&&e.current.params&&e.current.params.language?i.language||e.current.params.language:i.language||"en";for(var l in e.routes){var u=(e.routes[l].controller||"")+"";if(u.toLowerCase()==o.toLowerCase())return t(r,l,i)}return t(r,o,i)}}}}}],t.exports=n["default"]},{}],17:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{restrict:"E",templateUrl:"../monad/directives/update/template.html",transclude:!0,scope:{save:"&onSave",item:"=",module:"@",list:"@"}}},t.exports=n["default"]},{}],18:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(e){function t(e){var n,r,a,o,i,l,u,s="";for(n in e)if(r=e[n],r instanceof Array)for(u=0;u<r.length;++u)i=r[u],a=n+"["+u+"]",l={},l[a]=i,s+=t(l)+"&";else if(r instanceof Object)for(o in r)i=r[o],a=n+"["+o+"]",l={},l[a]=i,s+=t(l)+"&";else s+=void 0!==r&&null!==r?encodeURIComponent(n)+"="+encodeURIComponent(r)+"&":encodeURIComponent(n)+"=&";return s.length?s.substr(0,s.length-1):s}delete e.defaults.headers.common["X-Requested-With"],e.defaults.withCredentials=!0,e.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",e.defaults.transformRequest=[function(e){return angular.isObject(e)&&"[object File]"!==String(e)?t(e):e}]},t.exports=n["default"]},{}],19:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o={},i=void 0,l=function(){function e(t){r(this,e),i=t}return a(e,[{key:"register",value:function(e,t,n){var r=!1;o[e]=o[e]||[],o[e].push({url:t,label:n,selected:r}),this.hasOwnProperty(e)||Object.defineProperty(this,e,{get:function(){return o[e]}})}},{key:"current",value:function(){for(var e in o)o[e].map(function(e){return e.selected="/"!=e.url&&-1!=("#"+i.path()).indexOf(e.url)})}},{key:"select",value:function(){var e=void 0===arguments[0]?{}:arguments[0];for(var t in o)o[t].map(function(e){return e.selected=!1});e.selected=!0}}]),e}();l.$inject=["$location"],n.Navigation=l},{}]},{},[1]);