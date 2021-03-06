
"use strict";

describe('directive: mo-list-table', () => {
    let element;
    let scope;
    let compile;
    let items = [{id: 1, txt: 'foo'}, {id: 2, txt: 'bar'}];
    let tpl = angular.element(`
<mo-list-table page="page" rows="items">
    <table><tr>
        <th property="id">ID</th>
        <th property="txt">Text</th>
    </tr></table>
</mo-list-table>
    `);

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope;
        compile = $compile;
    }));

    it('should insert the table into the element', () => {
        scope.$apply(() => {
            scope.items = items;
            scope.page = 1;
        });
        element = compile(tpl)(scope);
        scope.$digest();
        expect(element.find('tbody').find('tr').length).toBe(2);
        expect(element.find('thead').length).toBe(1);
        expect(element.find('thead').find('th').length).toBe(2);
        expect(element.find('tbody').find('td').eq(0).text().replace(/\s+/g, '')).toEqual('1');
        expect(element.find('tbody').find('td').eq(1).text().replace(/\s+/g, '')).toEqual('foo');
        expect(element.find('tbody').find('td').eq(2).text().replace(/\s+/g, '')).toEqual('2');
        expect(element.find('tbody').find('td').eq(3).text().replace(/\s+/g, '')).toEqual('bar');
    });
});

