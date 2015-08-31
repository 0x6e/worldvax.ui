(function () {

    var app = angular.module("mirSearch", ['mirData']);

    app.factory('SearchService', ['$q', 'DataService',
        function ($q, dataSvc) {

            var service = {
                results: [],
                search: function (terms) {
                    return $q.when(dataSvc.filter('patient', function (doc) {
                        return doc.identity.firstName.toLowerCase().indexOf(terms) > -1 || doc.identity.lastName.toLowerCase().indexOf(terms) > -1;
                    }), function (result) {
                        angular.copy(result, service.results);
                    }, function (err) {
                        console.log(err);
                    });
                }
            };

            return service;
        }]);

    app.controller('SearchController', ['$scope', 'SearchService',
        function ($scope, searchSvc) {
            $scope.results = searchSvc.results;

            $scope.onSelect = function (id) {
                alert(id);
            };

        }]);
})();