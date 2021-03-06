
"use strict";

let params = undefined;
let route = undefined;
let modal = undefined;
let _page = 1;
let filter = {};

/**
 * Default "list" controller. Usually good enough if all you need is a
 * clickable list of items in a Component.
 */
export default class ListController {

    /**
     * Class constructor.
     *
     * @param object $scope Injected scope.
     * @param object moDelete Injected moDelete service.
     * @return void
     */
    constructor($scope, moDelete) {
        if (!this.items) {
            this.page = _page;
        }
        this.filter = {};
        $scope.$watch('$ctrl.filter', (newvalue) => {
            this.page = 1;
        });
        this['delete'] = item => {
            moDelete.ask(item);
        };
    }

    /**
     * Reset ("reload") the current page.
     *
     * @return void
     */
    reset() {
        route.reset();
        this.page = 1;
    }

    /**
     * Getter for the current page number.
     *
     * @return integer Current page number.
     */
    get page() {
        return _page;
    }

    /**
     * Setter for the current page. Automatically refreshes the current
     * collection via the registered resource.
     *
     * @return void
     */
    set page(page) {
        _page = page;
        this.items = this.resource.query({filter: this.filter, limit: 10, offset: (page - 1) * 10});
    }

    get filter() {
        return filter;
    }

    set filter(f) {
        filter = f;
        this.page = 1;
    }

};

ListController.$inject = ['$scope', 'moDelete'];

