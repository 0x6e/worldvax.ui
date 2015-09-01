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

    app.controller('NavigationController', ['$scope', 'NavigationService',
        function ($scope, navSvc) {
            $scope.query = '';

            this.onNavigate = function (route) {
                navSvc.goTo(route);
            };

            this.onSearch = function () {
                if ($scope.query) {
                    navSvc.goTo('/search/' + $scope.query);
                }
            };
        }]);
})();
