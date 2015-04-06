/**
 * Created by Laurent_Barbier on 06/04/2015.
 */
angular.module('myApp', ['ngAnimate'])
    .controller('myController', function ($scope) {
        $scope.myImgClass = 'start-class';
    })
    .animation('.fadeOut', function () {
        return {
            enter: function (element, parentElement, aferElement, doneCallback) {
            },
            leave: function (element, doneCallback) {
            },
            move: function (element, parentElement, afterElement, doneCallback) {
            },
            addClass: function (element, className, done) {
                jQuery(element).animate({opacity: 0}, 3000);
            },
            removeClass: function (element, className, done) {
                jQuery(element).animate({opacity: 1}, 3000);
            }
        };
    });