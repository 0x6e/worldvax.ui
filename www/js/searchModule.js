(function () {

    var app = angular.module("mirSearch", ['mirData']);

    app.factory('SearchService', ['$q', 'DataService',
        function ($q, dataSvc) {

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

    app.controller('SearchController', ['$scope', 'SearchService',
        function ($scope, searchSvc) {
            $scope.search = searchSvc

            $scope.onSelect = function (id) {
                alert(id);
            };

        }]);
})();