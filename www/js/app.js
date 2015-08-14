(function(){

    angular.module('mir', [
        'ngRoute',
        'ngMaterial',
        'mirSearch',
        'mirToolbar',
        'mirNavigation',
        'mirConfiguration'
    ])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('blue')
    });

    document.addEventListener('deviceready', function() {
        angular.bootstrap(document, ['mir']);
    }, false);

})();


