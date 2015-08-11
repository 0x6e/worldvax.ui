(function() {

    angular.module("mirNav", ["ngRoute"])

    .controller("NavbarCtrl", function($scope, $location) {
        $scope.routes = [
            {route:"about", text:"About"},
            {route:"search", text:"Directory"},
            {route:"patient", text:"Medical"}
        ];

        $scope.navigate = function(route) {
            $location.path(route);
        };
    })

    .config(function ($compileProvider){
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })

    .controller("HomeRouteCtrl", function($scope, $routeParams) {
        $scope.message = 'HomeRouteCtrl';
     })

    .controller("AboutRouteCtrl", function($scope, $routeParams) {
        $scope.message = 'AboutRouteCtrl';
     })

    .controller("SearchRouteCtrl", function($scope, $routeParams) {
        $scope.message = 'SearchRouteCtrl';
     })

    .controller("PatientRouteCtrl", function($scope, $routeParams) {
        $scope.message = 'PatientRouteCtrl';
        $scope.params = $routeParams;
     })

    .config(function($routeProvider, $locationProvider) {
        $routeProvider

        .when("/home", {
            templateUrl: 'views/home.partial.html',
            controller: 'HomeRouteCtrl'
        })

        .when("/about", {
            templateUrl: 'views/about.partial.html',
            controller: 'AboutRouteCtrl'
        })

        .when("/search", {
            templateUrl: 'views/search.partial.html',
            controller: 'SearchRouteCtrl'
        })

        .when("/patient/:patientId", {
            templateUrl: 'views/patient.partial.html',
            controller: 'PatientRouteCtrl'
        })

        .otherwise({
            redirectTo:"/home"
        });

        //$locationProvider.html5Mode(true);
    });

})();
