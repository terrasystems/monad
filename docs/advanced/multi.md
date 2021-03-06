# CRUD with multiple models
Often, your CRUD pages will contain more complicated than just "single row
models". Consider, as an example, a ticketing system - a ticket is linked to a
submitter, followers, an assignee and perhaps other tickets or a version control
system. It would be a pain to have to write custom controllers for all such
items. Luckily, this is usually really simple in Monad: everything on the
`data` resolve is considered saveable by `moUpdate`!

## Registering multiple data sources
Simply register what you need:

```javascript
//...
$routeProvider.when('/some/url', {
    data: ['moResource', '$route', function (moResource, $route) {
        // For brevify:
        var id = $route.current.params.id;
        return {
            mainItem: moResource('/foo/:id', {id: '@id'}).get({id: id}),
            subItems: moResource('/bar/:id', {id: '@id'}).query({foo: id})
        };
    }]
});
```

In your CRUD schema template, refer to `$ctrl.data.mainItem` and
`$ctrl.data.subItems` where appropriate. If anything is "dirty" and you click
save, `moUpdate` will save/delete whatever it needs.

## Extra data based on non-URL properties
In complicated setups, it could also be you need even more data, e.g. based on
the ticket's `owner` property. Of course, this isn't included in the URL and
won't be available until the ticket actually resolves.

Angular `resolve` keys don't actually resolves until either something returns a
value, or a returned promise is resolved. To accomplish this, you'll want to
wrap your `data` object in a promise (see `$q` in the AngularJS documentation)
and resolve _that_ with `data` when you're ready.

Slightly pseudocode to give you an idea:

```javascript
//...
    data: ['moResource', '$route', '$q', function (moResource, $route, $q) {
        var promise = $q.deferred;
        var data = {};
        data.mainItem = moResource('/some/url/:id').get($route.current.params.id);
        data.mainItem.$promise.then(function () {
            data.subItem = moResource('/another/url/:id').get({id: data.mainItem.property});
            promise.resolve(data);
        });
        return promise;
    }]
```

The read-only `$promise` property expost by models is the same promise as the
underlying Angular resource uses.

## Setting defaults
When subitems are related to a "main" object, you'll need a way to persist
certain defaults to the child objects. An example would be an admin page for a
`User`, who has `Tweets` where each tweet obviously has a parameter like
`owner`. Just put that as an initial value when you `push`:

```html
<a href ng-click="$ctrl.data.tweets.push({owner: $ctrl.data.owner.id})">Add new tweet</a>
<div ng-repeat="tweet in $ctrl.data.tweets">
    ...other HTML for admining a tweet...
</div>
```

If this is something common or you need to attach entire complex objects based
on other things like URL parameters, you could also override/extend the `push`
method on the resolved array in a custom controller of course. Javascript is
cool like that. It would look something like this:

```javascript
app.component('awesomeFoo', {
    // template, bindings etc.
    controller: function () {
        this.data.customList.push = function (newitem) {
            // Assuming this function returns some sub-object or calculates
            // a specific value or whatever:
            newitem.customProperty = myComplexHandler(newitem);
            [].push.call(this, newitem);
        };
    };
});
```

