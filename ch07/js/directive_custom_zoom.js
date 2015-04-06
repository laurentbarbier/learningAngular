/**
 * Created by Laurent_Barbier on 06/04/2015.
 */
angular.module('myApp', [])
    .directive('zoomit', function () {
        return {
            link: function (scope, elem, attr) {
                var dragging = false;
                var lastX = 0;
                elem.on('mousedown', function (event) {
                    lastX = event.pageX;
                    event.preventDefault();
                    dragging = true;
                });
                elem.on('mouseup', function () {
                    dragging = false;
                });
                elem.on('mouseleave', function () {
                    dragging = false;
                });
                elem.on('mousemove', function (event) {
                    if (dragging) {
                        var adjustment = null;
                        if (event.pageX > lastX && elem.width() < 300) {
                            adjustment = 1.1;
                        } else if (elem.width() > 100) {
                            adjustment = 0.9;
                        }
                        if (adjustment) {
                            elem.width(elem.width() * adjustment);
                            elem.height(elem.height() * adjustment);
                        }
                        lastX = event.pageX;
                    }
                });
            }
        };
    })
    .directive('fadeit', function () {
        return {
            link: function (scope, elem, attr) {
                var dragging = false;
                var lastY = 0;
                elem.on('mousedown', function (event) {
                    lastY = event.pageY;
                    event.preventDefault();
                    dragging = true;
                });
                elem.on('mouseup', function () {
                    dragging = false;
                });
                elem.on('mouseleave', function () {
                    dragging = false;
                });
                elem.on('mousemove', function (event) {
                    if (dragging) {
                        var adjustment = null;
                        var currentOpacity = parseFloat(elem.css("opacity"));
                        if (event.pageY < lastY && currentOpacity > 0.5) {
                            adjustment = 0.9;
                        } else if (currentOpacity < 1.0) {
                            adjustment = 1.1;
                        }
                        if (adjustment) {
                            elem.css("opacity", currentOpacity * adjustment);
                        }
                        lastY = event.pageY;
                    }
                });
            }
        };
    });