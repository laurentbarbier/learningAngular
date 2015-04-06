/**
 * Created by Laurent_Barbier on 06/04/2015.
 */
angular.module('myApp', []);
app.factory('MyCache', function($cacheFactory) {
   return $cacheFactory('myCache', {capacity: 5});
});
app.controller('myController', ['$scope', 'MyCache', function($scope, cache) {
    cache.put('myValue', 55);
}]);
app.controller('myController2', ['$scope', 'MyCache', function($scope, cache) {
    $scope.value = cache.get('myValue');
}]);