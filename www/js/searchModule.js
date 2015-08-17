(function () {

    var app = angular.module("mirSearch", ['mirData']);

    app.factory('SearchService', ['$q', 'DataService',
        function ($q, dataSvc) {

            var service = {
                results: [],
                search: function (terms) {
                    console.log('searchSvc.search(' + terms + ')');
                    return $q.when(dataSvc.all(), function (result) {
                        console.log('got results, setting service property')
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
            console.log('new searchCtl()');
            $scope.$watch(function(){return searchSvc.results;}, function (newValue, oldValue) {
                console.log('read searchSvc.results');
                console.log(oldValue);
                console.log(newValue);
                $scope.results= searchSvc.results;
            });
        }]);
})();