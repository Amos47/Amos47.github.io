'use strict';

/**
 * @ngdoc function
 * @name psApp.controller:ReadingCtrl
 * @description
 * # ReadingCtrl
 * Controller of the psApp
 */
angular.module('psApp')
  .controller('ReadingCtrl', function ($scope, myBooks) {
    //console.log(myBooks.books.length);
    $scope.books = myBooks.books;
  });
