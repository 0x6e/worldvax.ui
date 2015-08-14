(function(){

    var app = angular.module("mirToolbar", ["mirNavigation"]);

    app.controller("ToolbarController",["$scope", "$navigation", function($scope, $nav) {
        $scope.query = "";

        $scope.onNavigate = function(route) {
            $nav.goTo(route);
        };

        $scope.onSearch = function(route) {
            $nav.goTo('search?q=' + $scope.query);
        };
    }]);

})();
