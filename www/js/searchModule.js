(function () {

    var app = angular.module("mirSearch", ['mirData']);

    app.factory('SearchService', ['$q', 'DataService',
        function ($q, dataSvc) {

            var getIndexer = function (terms) {
                var searchStr = terms.toLowerCase();
                return function (doc) {
                    return doc.identity.firstName.toLowerCase().indexOf(searchStr) > -1 || doc.identity.lastName.toLowerCase().indexOf(searchStr) > -1;
                }
            }

            var service = {
                results: [],
                search: function (terms) {
                    var indexer = getIndexer(terms);
                    dataSvc.filter(terms)
                        .then(function (data) {alert(JSON.stringify(data.rows));
                            angular.copy(data.rows, service.results);
                        });
                }
            };

            return service;
        }]);

    app.controller('SearchController', ['$scope', 'SearchService',
        function ($scope, searchSvc) {
            $scope.search = searchSvc

            $scope.onSelect = function (id) {
                alert(id);
            };

        }]);
})();