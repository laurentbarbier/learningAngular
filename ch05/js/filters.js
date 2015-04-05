/**
 * Created by Laurent_Barbier on 05/04/2015.
 */
angular.module('myApp', [])
    .controller('myController', function ($scope) {
        $scope.currentDate = new Date();
        $scope.JSONObj = {"title": "myTitle"};
        $scope.word = "Supercalifragilisticexplialidocious";
        $scope.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    });