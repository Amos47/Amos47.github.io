'use strict';

/**
 * @ngdoc directive
 * @name psApp.directive:bindScroll
 * @description
 * # bindScroll
 */
angular.module('psApp')
  .directive('bindScroll', function () {
    return {
      restrict: 'A',
      scope: {
        bindScroll: '='
      },
      link: function postLink(scope, element) {
        element.on('scroll', function(){
          scope.bindScroll = angular.element(this)[0].scrollTop;
          scope.$apply();
        });
      }
    };
  });
