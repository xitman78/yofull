'use strict';

(function(){

class AboutComponent {

  message: string;

  constructor() {
    this.message = 'Hello';
  }
}

angular.module('yofullApp')
  .component('about', {
    templateUrl: 'app/about/about.html',
    controller: AboutComponent,
    controllerAs: 'vm'
  });

})();
