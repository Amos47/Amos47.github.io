'use strict';

/**
 * @ngdoc directive
 * @name psApp.directive:psNav
 * @description
 * # psNav
 */
angular.module('psApp')
  .directive('psNav', function($mdUtil, $mdSidenav, $location) {
    return {
      templateUrl: '/views/ps-nav.html',
      restrict: 'E',
      transclude: true,
      scope: {},
      link: {
        pre: function postLink(scope, element) {
          scope.toggleSidenav = $mdUtil.debounce(function() { // create debounce function.
            $mdSidenav('left')
              .toggle();
          }, 300);
          scope.closeSidenav = function(path) {
            if (path) {
              $location.path(path);
            }
            $mdSidenav('left').close();
            return true;
          };
          scope.goToTop = function(){
            element.find('md-content').scrollTop(0, Math.floor(scope.scroll / 3));
          };
        }
      }
    };
  });
