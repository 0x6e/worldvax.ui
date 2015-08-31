(function () {

    var app = angular.module('mirData', [])

    app.factory('DataService', ['$q', function ($q) {

        //  var _db = new PouchDB('worldvax.db');

        var service = {
            'info': function () {
                var db = new PouchDB('worldvax.db');
                return db.info().then(function (result) {
                    return result;
                });
            },
            'all': function () {
                var db = new PouchDB('worldvax.db');
                return db.allDocs({ include_docs: true }).then(function (result) {
                    return result;
                });
            },
            'filter': function (docType, selector) {
                var db = new PouchDB('worldvax.db');
                return $q.when(db.query(function (doc) {
                 //   alert(JSON.stringify(doc));
                    if (selector(doc)) {
                        emit(doc);
                    }
                }));
            }
        };

        return service;

    }]);

})();
