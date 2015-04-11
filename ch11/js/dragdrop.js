/**
 * Created by Laurent_Barbier on 11/04/2015.
 */
var app = angular.module('myApp', []);
app.controller('myController', function ($scope) {
    $scope.dragStatus = "none";
    $scope.dropStatus = "none";
    $scope.dropValue = "";
});
app.directive('dragit', function ($document, $window) {
    function makeDraggable(scope, element, attr) {
        angular.element(element).attr('draggable', "true");
        element.on('dragstart', function (event) {
            element.addClass('dragItem');
            scope.$apply(function () {
                scope.dragStatus = "Dragging " + element.html();
                scope.dropValue = element.html();
            });
            event.dataTransfer.setData('Text', element.html());
        });
        element.on('drag', function (event) {
            scope.$apply(function () {
                scope.dragStatus = "X: " + event.pageX + " Y: " + event.pageY;
            });
        });
        element.on('dragged', function (event) {
            event.preventDefault();
            element.removeClass('dragItem');
        });
    }

    return {
        link: makeDraggable
    }
});
app.directive('dropit', function ($document, $window) {
    return {
        restrict: 'E',
        link: function makeDroppable(scope, element, attr) {
            element.on('dragover', function (event) {
                event.preventDefault();
                scope.$apply(function () {
                    scope.dropStatus = "Drag over";
                });
            });
            element.on('dragleave', function (event) {
                event.preventDefault();
                element.removeClass('dropItem');
                scope.$apply(function () {
                    scope.dropStatus = "Drag leave";
                });
            });
            element.on('dragenter', function (event) {
                event.preventDefault();
                element.addClass('dropItem');
                scope.$apply(function () {
                    scope.dropStatus = "Drag enter";
                });
            });
            element.on('drop', function (event) {
                event.preventDefault();
                element.removeClass('dropItem');
                scope.$apply(function () {
                    element.append('<p>' + event.dataTransfer.getData('Text') + '</p>');
                    scope.dropStatus = "Dropped " + scope.dropValue;
                });
            });
        }
    };
});