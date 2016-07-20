'use strict';

(function() {

class MainController {

  $http: ng.IHttpService;
  //static $inject = ['Modal'];
  modal;
  //socket:

  constructor($http, $scope, socket, modal) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];
    this.modal = modal;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      this.socket.syncUpdates('thing', this.awesomeThings);
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {

    console.log('Delete thing');

    var mod = this.modal.openModal(
      { modal: {title: 'Warning', text: 'Are you sure?', dismissable: true,
        buttons: [ {text: 'Yes',
                    click: event => {
                        this.$http.delete('/api/things/' + thing._id);
                        mod.close(event);
                      }
                    },
                {text: 'No',
                    click: event => {
                        mod.dismiss(event);
                      }
                }]
      } });

     /*this.modal.confirm.delete(

        function(responce) {

          console.log('Confirm responce ', responce);
        // this.$http.delete('/api/things/' + thing._id);

      });*/

     //console.log('Res ',res);

  }
}

angular.module('yofullApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller:  ['$http', '$scope', 'socket', 'Modal', MainController],
    controllerAs: 'vm'
  });

})();
