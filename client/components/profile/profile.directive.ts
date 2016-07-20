'use strict';

angular.module('yofullApp')
  .directive('profile', ['$location', function ($location) {
    return {
      template: '<a ng-click="go_to()">{{link}}</a>',
      replace: true,
      scope: {},
      restrict: 'E',
      link: function (scope, element, attrs) {
        //element.text('this is the profile directive');
        console.log('Profile directive');
        scope.link = attrs.link;

        element.css( 'cursor', 'pointer' );

        scope.go_to = function() {
          $location.path(attrs.link);
        };
      }
    };
  }]);
