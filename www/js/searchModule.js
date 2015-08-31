(function () {

    var app = angular.module("mirSearch", ['mirData']);

    app.factory('SearchService', ['$q', 'DataService',
        function ($q, dataSvc) {

            var service = {
                results: [],
                search: function (terms) {
                    alert(terms);
                    return $q.when(dataSvc.all(), function (result) {
                        service.results = result.rows;
                    }, function (err) {
                        console.log(err);
                    });
                }
            };

            return service;
        }]);

    app.controller('SearchController', ['$scope', 'SearchService',
        function ($scope, searchSvc) {
           // $scope.onSelect = function(id){
            //    alert(id);
           // }
        }]);
})();