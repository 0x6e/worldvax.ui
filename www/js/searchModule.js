(function(){
    
    var app = angular.module("mirSearch", []);

    app.factory('$search', function($location) {
        
        var service = {
            
            results:[],
        
            search: function(terms) {
				// ajax to the patient/catalog endpoint
			}
        };

        return service;

    });
    
})();