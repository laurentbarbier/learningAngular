/**
 * Created by Laurent_Barbier on 05/04/2015.
 */
angular.module('myApp', []).
    controller('SimpleTemplate', function($scope) {
        $scope.valueA = 5;
        $scope.valueB = 7;
        $scope.valueC = 12;
        $scope.addValues = function(v1, v2) {
            $scope.valueC = v1 + v2;
        };
    });