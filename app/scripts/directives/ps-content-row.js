'use strict';

/**
 * @ngdoc directive
 * @name psApp.directive:psContentRow
 * @description
 * # psContentRow
 */
angular.module('psApp')
  .directive('psContentRow', function () {
    return {
      template: '<div layout="row" layout-align="center center"><div layout="column" flex-gt-sm="50" layout-align="start start" ng-transclude></div></div>',
      restrict: 'E',
      transclude: true,
      link: function postLink() {
      }
    };
  });
