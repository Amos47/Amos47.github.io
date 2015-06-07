'use strict';

/**
 * @ngdoc function
 * @name psApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the psApp
 */
angular.module('psApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
