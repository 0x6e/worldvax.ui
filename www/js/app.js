(function(){

    angular.module("mir", [
        "ngRoute",
        //"mirSearch",
        //"mirPatient",
        //"mirData",
        //"mirEventAggregator",
        "mirNav",
        //"mirLookups",
        //"mirAlerts",
        "ngMaterial"
    ]).config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('blue');
    });

    document.addEventListener('deviceready', function() {
        angular.bootstrap(document, ['mir']);
    }, false);

})();


