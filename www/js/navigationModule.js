(function () {

    var app = angular.module('mirNavigation', []);

    app.factory('NavigationService', function ($location) {

        var service = {
            goTo: function (path) {
                $location.path(path);
            }
        };

        return service;

    });

    app.controller('NavigationController', ['$scope', 'NavigationService','SearchService',
         function ($scope, navSvc, searchSvc) {
        $scope.query = '';

        this.onNavigate = function (route) {
            navSvc.goTo(route);
        };

        this.onSearch = function () {
            searchSvc.search($scope.query);
            navSvc.goTo('search');
        };
    }]);
})();
