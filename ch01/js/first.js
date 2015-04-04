/**
 * Created by Laurent_Barbier on 04/04/2015.
 */
var firstApp = angular.module('firstApp', []);
firstApp.controller('FirstController', function ($scope) {
    $scope.first = 'Some';
    $scope.last = 'One';
    $scope.heading = 'Message: ';
    $scope.updateMessage = function () {
        $scope.message = 'Hello ' + $scope.first + ' ' + $scope.last + ' !';
    };
});