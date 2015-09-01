(function () {

    var app = angular.module('mirSearch', ['mirData', 'mirNavigation']);

    app.factory('SearchService', ['DataService',
        function (dataSvc) {

            var getMatcher = function (text) {
                var re = new RegExp(text, "i");
                return function (doc) {
                    var key = doc.identity.firstName + '|' + doc.identity.lastName;
                    return re.test(key);
                }
            }

            var service = {
                results: [],
                search: function (text) {
                    var matcher = getMatcher(text);
                    dataSvc.filter(matcher)
                        .then(function (data) {
                            angular.copy(data.rows, service.results);
                        });
                }
            };

            return service;
        }]);

    app.controller('SearchController', ['$scope', '$routeParams', 'NavigationService', 'SearchService',
        function ($scope, $routeParams, navSvc, searchSvc) {
            $scope.search = searchSvc

            var text = $routeParams.text;
            if (text) {
                searchSvc.search(text);
            }

            $scope.onSelect = function (id) {
                navSvc.goTo('/patient/' + id)
            };

        }]);
})();