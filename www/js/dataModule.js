(function () {

    var app = angular.module('mirData', [])

    app.factory('DataService', ['$q', function ($q) {

        var _db = new PouchDB('worldvax.db');

        var service = {
            'info': function () {
                return _db.info().then(function (result) {
                    return result;
                });
            },
            'all': function () {
                return _db.allDocs({include_docs:true}).then(function (result) {
                    return result;
                });
            },
            'filter': function (docType, selector) {
                return $q.when(_db.query(function (doc) {
                    if (doc.docType === docType && selector(doc)) {
                        emit(doc);
                    }
                }));
            }
        };

        return service;

    }]);

})();
