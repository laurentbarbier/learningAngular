/**
 * Created by Laurent_Barbier on 05/04/2015.
 */
angular.module('myApp', [])
    .controller('myController', function ($scope) {
        $scope.Math = window.Math;
        $scope.myArr = [1];
        $scope.removedArr = [];
    });