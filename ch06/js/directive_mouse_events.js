/**
 * Created by Laurent_Barbier on 06/04/2015.
 */
angular.module('myApp', [])
    .controller('myController', function ($scope) {
        $scope.mouseInfo = {};
        $scope.lastClickInfo = {};
        $scope.mouseClick = function (event) {
            $scope.lastClickInfo.clientX = event.clientX;
            $scope.lastClickInfo.clientY = event.clientY;
            $scope.lastClickInfo.screenX = event.screenX;
            $scope.lastClickInfo.screenY = event.screenY;
        };
        $scope.mouseMove = function (event) {
            $scope.mouseInfo.clientX = event.clientX;
            $scope.mouseInfo.screenX = event.screenX;
            $scope.mouseInfo.screenY = event.screenY;
            $scope.mouseInfo.clientY = event.clientY;
        };
    });