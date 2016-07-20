'use strict';

(function(){

class ContactComponent {

  $http: ng.IHttpService;
  newBlog: string;
  blogs: Array<{}>;

  constructor($http, $scope) {
    this.$http = $http;
    this.blogs = [];
    this.newBlog = '';
  }

  LoadBlogs() {

    this.$http.get('/api/blogs').then(response => {
      this.blogs = response.data;
      console.log('Blogs loaded ', this.blogs);
    }, err => {
      console.log('Error ', err);
    });

  }

  $onInit() {
    //console.log('OnInit');

    this.LoadBlogs();
  }

  addBlog() {
    if (this.newBlog) {
      this.$http.post('/api/blogs', { name: this.newBlog });
      this.newBlog = '';
      this.LoadBlogs();
    }
  }

  deleteBlog(blog) {
    this.$http.delete('/api/blogs/' + blog._id);
  }

}

angular.module('yofullApp')
  .component('contact', {
    templateUrl: 'app/contact/contact.html',
    controller: ContactComponent,
    controllerAs: 'vm'
  });

})();
