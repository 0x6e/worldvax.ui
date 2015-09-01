(function () {

    var app = angular.module('mirData', [])

    app.factory('DataService', ['$q', function ($q) {

        //     var _db = new PouchDB('worldvax.db');

        var service = {
            'info': function () {
                var db = new PouchDB('worldvax.db');
                return $q.when(db.info());
            },
            'all': function () {
                var db = new PouchDB('worldvax.db');
                return $q.when(db.allDocs({ include_docs: true }));
            },
            'filter': function (predicate) {
                var db = new PouchDB('worldvax.db');
                return $q.when(db.query(function (doc, emit) {
                    if (predicate(doc)) {
                        emit(doc._id);
                    }
                }, { include_docs: true }));
            },
            'fetch': function (docId) {
                var db = new PouchDB('worldvax.db');
                return $q.when(db.get(docId));
            }
        };

        return service;

    }]);

})();
