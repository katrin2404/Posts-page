(function () {

  'use strict';
  angular.module('postDetail').controller('PostDetailController', function($routeParams, PostDetailService) {
    const vm = this;

    PostDetailService
      .loadDetailsPost($routeParams.postId)
      .then(post => vm.post = post);


  })
})();
