
import monad from '../../monad';

describe("class: Component", () => {

    let test = window.monad.component('foo/bar/baz/buz').manager(() => {});

    it("normalizes names correctly", () => {
        expect(test.$manager.name).toEqual('fooBarBazBuzManager');
    });

});

