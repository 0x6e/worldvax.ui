(function(){

    angular.module("mir", [
        "ngRoute",
        "mirSearch",
        "mirToolbar",
        "mirNavigation",
        "mirConfiguration"
    ]);

    document.addEventListener('deviceready', function() {
        angular.bootstrap(document, ['mir']);
    }, false);

})();


