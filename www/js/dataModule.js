(function () {

    var app = angular.module('mirData', [])

    app.factory('DataService', ['$q', function ($q) {

        //     var _db = new PouchDB('worldvax.db');

        var service = {
            'info': function () {
                var db = new PouchDB('worldvax.db');
                $q.when(db.info());
            },
            'all': function () {
                var db = new PouchDB('worldvax.db');
                return $q.when(db.allDocs({ include_docs: true }));
            },
            'filter': function (text) {
                var db = new PouchDB('worldvax.db');
                return $q.when(db.query(function (doc, emit) {
                    var key = doc.identity.firstName + doc.identity.lastName;
                    key = key.toLowerCase();
                    if (key.indexOf(text) > -1) {
                        emit(doc._id);
                    }
                }, { include_docs: true }));
            }
        };

        return service;

    }]);

})();
