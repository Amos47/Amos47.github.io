'use strict';

/**
 * @ngdoc directive
 * @name psApp.directive:psSocialButtons
 * @description
 * # psSocialButtons
 */
angular.module('psApp')
  .directive('psSocialButtons', function () {
    return {
      templateUrl: '/views/ps-social-buttons.html',
      restrict: 'E',
      link: function(){}
    };
  });
