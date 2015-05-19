We saw earlier how Monad works with the concept of 'modules', both in the
ES6-sense as well as the Angular-sense. Let's dive into that a bit further.
You can think of a module as 'an option that shows up in the (main) menu',
although technically it is not required to actually expose modules in any menu.

> To differentiate between AngularJS and ES6 modules, Monad refers to them as
> "components" instead.

## Setup
First, create a folder somewhere that will contain all your module's files. This
isn't strictly required by Monad, but it makes your code more reusable since a
module's folder can be picked up and placed in another project easily.

So, for our fictional module `Foo` we make a folder `foo` under `admin`
to place all our files in. By convention, we create an entry point called
`angular.js` here which hooks everything up to our Angular module:

    // foobar/angular.js
    "use strict";

    monad.module('foobar', 'foo'); // <- define custom stuff here

Note that we're still naming our application `foobar`.

## Managers
A core concept in a Monad admin is the `Manager`. A "manager" is like a super
object handling all module-specific retreiving and storing of data. You can
think of it as an interface between Monad and whatever backend you're using.

ECMAScript lacks interfaces, but Monad assumes a manager adheres to the
following specifications:

    class Manager {
    
        list(filter = {}, options = {}) {
            // Returns array of Models
        }

        find(params = {}) {
            // Returns promise yielding Models found using params (usually
            // taken from $routeParams)
        }

        create(item) {
            // Create item (which is a Model), return promise.
        }

        update(item) {
            // Update existing item Model, return promise.
        }

        delete(item) {
            // Delete existing item Model, return promise.
        }

You can think of the `filter` as "your `where`-clause", and of `options` as
"anything after `WHERE` in your SQL". Of course, how exactly you convert this to
an API call depends, but they are two seperate concepts.

## Models
Each 'entity' of data in a module is generally represented by a 'model'. Monad
offers a base model class with some dirty checking and other goodies you can use
directly or extend for your own custom functionality. To simplify things, you
can see a model object as a representation of a single database row.

> Of course, we don't care if you get your data from a relational database,
> a NoSQL database, an Excel file, flat JSON or a random Google query. The
> point is, each 'item' is represented by a single model.

The model itself is _not_ an object in the Angular-sense; it is pure EcmaScript.
Apart from advantages over Angular (services are singletons, whereas models by
definition aren't) this also forces you to keep any logic out of the models.
They are data containers and should not be concerned with any `$http`-like
operations or any other external service.

> In rare cases, of course, this might be necassary. That's fine; either just
> write vanilla Javascript, or update your manager to handle it.

## Linking Managers and Models
In order to properly return Models from a Manager instead of vanilla JSON,
you'll need to transform the `$http` response. Of course you could do this
manually, but that would suck. If your Manager extends the Monad default
Manager in `services/Manager`, you'll get this out of the box for `$http`
tranforms:

    import {Manager as Base} from '/path/to/monad/src/services/Manager';

    class Manager extends Base {

        
    }

Monad assumes a manager has a `model` property, that contains the model
_prototype_. This is utilised for CRUD creation.
Since Angular services are _singletons_, a model should define a static factory
method to create instances for every row in a set:

    "use strict";
    import {Model as Base} from './monad/src/Model';

    class FooModel extends Base {
        
        static factory() {
            return new FooModel();
        }
    }

Any Angular dependencies needed must then be injected into the constructor,
for example:

    class FooModel extends Base {
        constructor($http) {
            this.http = $http;
        }
        static factory($http) {
            return new FooModel($http);
        }
    }
    FooModel.$inject = ['$http'];

Then, register the factory method instead of the object:

    angular.module('foobar').service('FooModel', FooModel.factory);

A model is a pretty dumb entity, so unless you have some very specific needs you
can usually get away with simply populating the base Monad model:

    import {Model} from './monad/src/Model';
    angular.module('foobar').service('FooModel', Model.factory);

This provides the default getters and setters you'll need to do most of your
work (dirty checking, propagation etc.).

## Repositories
A more interesting entity in the Monad toolkit are 'Repositories'. You should
think of a Repository as 'a getter/setter for groups of data' (i.e., models).
There are where most of your custom logic should go. Generally speaking, a
Repository will expose one or more of the following methods:

    list(urlparams); // Return a promise returning an array of models.
    find(urlparams); // Return a promise querying a single model.
    create(Model); // Save a new instance of Model.
    update(Model); // Update an existing instance of Model.
    delete(Model); // Delete an existing Model.

In many cases, Repositories will return promises generated by Angular's `$http`
service, but you are of course free to implement your own using `$q`.

Since the implementation of repositories really is what makes your custom admin
tick, we can't really give an example, but for FooBar it could look like this:

    // foobar/Repository.js
    "use strict";

    // We'll store the $http service locally.
    let http;

    class Repository {

        constructor($http) {
            http = $http;
        }

        list(params) {
            return http.get('/api/foobar/?' + angular.toJson(params));
        }

        find(params) {
            return http.get('/api/foobar/' + params.id + '/');
        }

        create(model) {
            return http.post('/api/foobar/', model.$export);
        }

        update(model) {
            return http.post('/api/foobar/' + model.id + '/', model.$export);
        }

        ['delete'](model) {
            return http.post('/api/foobar/' + model.id + '/delete/');
        }

    }

This is just a simple example. The important thing here is that Monad _will_
expect these utility methods to have certain names and accept certain
parameters. As long as you stick to that interface, everything should get
picked up automagically.

## Controllers
In most cases, you'll be fine with Monad's default controllers for List, Update,
Create and Delete. But if you need extra functionality, your best bet is to
_extend_ the default controllers and override whatever you need.

> Tip: you don't want to remember to include all constructor arguments in
> extended classes. Luckily, ES6 supports the `...args` syntax for a random
> number of arguments. In an extended class, inject your class-specific
> dependencies first.

    class Bar extends Foo {
        constructor(SomeService, ...args) {
            super(...args);
            //...other stuff...
        }
    }

    Bar.$inject = [].concat('SomeService', Foo.$inject || []);

## Directives, filters and other stuff
Go wild, define whatever you need. We'll see how this all ties together in the
next section.
