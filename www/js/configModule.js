(function(){

    var app = angular.module("mirConfiguration", []);

        app.factory("$configuration", function() {

        var service = {

         settings : {},
         isLoaded:false,

           save: function() {
               // localStore(myKey) = service.settings;
           },
           load: function() {
               // service.settings = localStore(myKey);
               service.isLoaded = true;
           }
        };

        return service;

    });

        app.controller("SettingsController",["$scope", "$configuration", function($scope, $cfg) {
            $scope.query = $cfg.settings;
    }]);

})();
