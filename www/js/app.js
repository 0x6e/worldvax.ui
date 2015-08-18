(function () {

    var app = angular.module('mir', [
        'ngRoute',
        'ngMaterial',
        'mirData',
        'mirSearch',
        'mirNavigation'
    ])
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('green')
                .accentPalette('blue')
        })
        .config(function ($routeProvider) {
            $routeProvider
                .when('/home', {
                    templateUrl: 'views/home.partial.html'
                })
                .when('/search', {
                    templateUrl: 'views/search.partial.html',
                    controller: 'SearchController'
                })
                .otherwise({ redirectTo: '/home' });
        })
        .run(function () {
            var db = new PouchDB('worldvax.db');
            db.destroy().then(function () {
                var db = new PouchDB('worldvax.db');
                loadJSON('./preload/patient.json', function (data) {
                    db.bulkDocs(data).then(function (result) {
                        console.log('pre-load complete');
                    });
                    db.info().then(function (info) { console.log(info); });
                });
            });
        });

    function loadJSON(fname, callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', fname, true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == 200) {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                var data = JSON.parse(xobj.responseText);
                callback(data);
            }
        };
        xobj.send(null);
    }

    document.addEventListener('deviceready', function () {
        angular.bootstrap(document, ['mir']);
    }, false);

})();


