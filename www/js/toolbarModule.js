(function(){

    var app = angular.module('mirToolbar', ['mirNavigation']);

    app.controller('ToolbarController',['$scope', '$navigation', function($scope, $navigation) {
        $scope.query = '';

        this.onNavigate = function(route) {
            $navigation.goTo(route);
        };

        this.onSearch = function() {
            $navigation.goTo('search?q=' + $scope.query);
        };
    }]);

})();
