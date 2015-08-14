(function(){

    var app = angular.module("mirNavigation", []);

    app.factory("$navigation", function($location) {

        var service = {
            goTo: function(path){
				$location.path(path);
			}
        };

        return service;

    });

})();
