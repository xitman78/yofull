'use strict';

angular.module('yofullApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contact', {
        template: '<contact></contact>'
      });
  });
