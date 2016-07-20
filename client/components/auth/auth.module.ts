'use strict';

angular.module('yofullApp.auth', [
  'yofullApp.constants',
  'yofullApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
