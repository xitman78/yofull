'use strict';

angular.module('yofullApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        template: '<about></about>'
      });
  });
