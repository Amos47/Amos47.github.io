'use strict';

/**
 * @ngdoc directive
 * @name psApp.directive:psMenuItem
 * @description
 * # psMenuItem
 */
angular.module('psApp')
  .directive('psMenuItem', function () {
    return {
      template: '<div layout="row" flex="100" layout-align="start start"><md-button flex href="{{ngHref}}" ng-click="ngClick" style="text-align:left; padding-left:45px"><span ng-transclude></span></md-button></div>',
      restrict: 'E',
      transclude : true,
      scope : {
        ngHref : '@',
        ngClick: '&'
      },
      link: function postLink() {
      }
    };
  });
