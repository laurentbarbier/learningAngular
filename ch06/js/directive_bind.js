/**
 * Created by Laurent_Barbier on 06/04/2015.
 */
angular.module('myApp', [])
    .controller('myController', function ($scope) {
        $scope.colors = ['red', 'blue', 'green'];
        $scope.myStyle = {'background-color': 'blue'};
        $scope.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        $scope.msg = "Dynamic Message from the model";
    });