/**
 * Created by Laurent_Barbier on 06/04/2015.
 */
angular.module('myApp', [])
    .controller('myController', ['$scope', '$location', function ($scope, location) {
        $scope.updateLocationInfo = function() {
            $scope.url = location.url();
            $scope.absUrl = location.absUrl();
            $scope.host = location.host();
            $scope.port = location.port();
            $scope.protocol = location.protocol();
            $scope.path = location.path();
            $scope.search = location.search();
            $scope.hash = location.hash();
        };

        $scope.changePath = function () {
            location.path("/new/path");
            $scope.updateLocationInfo();
        };

        $scope.changeHash = function () {
            location.hash("newHash");
            $scope.updateLocationInfo();
        };

        $scope.changeSearch = function () {
            location.search("p1", "newA");
            $scope.updateLocationInfo();
        };

        $scope.updateLocationInfo();
    }]);