/**
 * Created by Laurent_Barbier on 05/04/2015.
 */
var myMod = angular.module('myApp', []);
myMod.controller('controllerA', ['$scope', '$window', function ($scope, $window) {
        $scope.message = "My module Has Loaded !";
        $window.alert($scope.message);
    }
]);