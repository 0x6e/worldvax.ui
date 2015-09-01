(function () {

    var app = angular.module('mirPatient', ['mirNavigation','mirData'])

    app.factory('PatientService', ['DataService',
        function (dataSvc) {

            var service = {
                current: {},
                load: function (docId) {
                    dataSvc.fetch(docId)
                        .then(function (data) {
                            service.current = data;
                        });
                }
            };

            return service;
        }]);

    app.controller('PatientController', ['$scope', '$routeParams', 'NavigationService', 'PatientService',
        function ($scope, $routeParams, navSvc, patientSvc) {
            $scope.patient = patientSvc;
            if (patientSvc.current.patientId != $routeParams.id) {
                patientSvc.load($routeParams.id);
            }
        }]);
})();