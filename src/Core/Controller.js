
"use strict";

let route;

class Controller {

    constructor(Authentication, $location, $rootScope, $route) {
        this.Authentication = Authentication;
        this.title = 'Default generic administrator';
        this.loginRequired = this.loginRequired || true;
        this.paths = {
            root: '/monad/',
            theme: 'monad/css/default.css'
        };
        this.navigation = {
            main: [
                {url: '/', title: 'Site'}
            ]
        };
        this.Authentication.read().success(result => {
            if (!this.Authentication.isAuthenticated() && this.loginRequired) {
                $location.path('/login/');
            }
        });
        route = $route;
        this.config();
        this.navigation.main.map(item => item.selected = item.url == '#' + $location.path());
    }

    /**
     * This is for overriding in an extending root controller, so we don't
     * have to remember to re-inject all dependencies which would suck
     * pretty badly.
     */
    config() {
    }

    select(menu, item = {}) {
        this.navigation[menu].map(item => item.selected = false);
        item.selected = true;
    }

    path(controller, params = {}) {
        for (let path in route.routes) {
            let pathController = route.routes[path].controller;
            if (pathController == controller) {
                let result = path;
                for (let param in params) {
                    result = result.replace(':' + param, params[param]);
                }
                return '#' + result.replace(/^#/, '');
            }
        }
        let result = controller;
        for (let param in params) {
            result = result.replace(':' + param, params[param]);
        }
        return '#' + result.replace(/^#/, '');
    }

};

Controller.$inject = ['Authentication.Service', '$location', '$rootScope', '$route'];

export {Controller};

