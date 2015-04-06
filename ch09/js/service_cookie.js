/**
 * Created by Laurent_Barbier on 06/04/2015.
 */
angular.module('myApp', ['ngCookies'])
    .controller('myController', ['$scope', '$cookieStore', function ($scope, cookieStore) {
        $scope.favCookie = '';
        $scope.myFacCookie = '';
        $scope.setCookie = function () {
            if ($scope.favCookie === 'None') {
                cookieStore.remove('myAppCookie');
            } else {
                cookieStore.put('myAppCookie', {flavor: $scope.favCookie});
            }
            $scope.myFavCookie = cookieStore.get('myAppCookie');
        };
    }]);