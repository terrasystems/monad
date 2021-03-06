
"use strict";

describe('directive: mo-field', () => {
    let element;
    let scope;
    let compile;
    let item = {test: 'foo'};
    let tpl = angular.element(`<mo-field><label>test</label><input type="text" ng-model="item"></mo-field>`);

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope;
        compile = $compile;
    }));

    it('should insert the field into a form group', () => {
        scope.$apply(() => {
            scope.item = item;
        });
        element = compile(tpl)(scope);
        scope.$digest();
        expect(element.find('div').eq(0).hasClass('form-group')).toBe(true);
        expect(element.find('label').text().replace(/\s+/, '')).toEqual('test');
        expect(element.find('input').hasClass('form-control')).toBe(true);
    });
});

