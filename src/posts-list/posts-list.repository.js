(function () {

  'use strict';

  angular.module('postsList').factory('PostsRepository', function ($http, ApiUrls) {
    return {
      loadList,
      loadUsers
    };

    function loadList() {
      return $http
        .get(`${ApiUrls.baseUrl}/posts`)
        .then(response => response.data);
    }

    function loadUsers() {
      return $http
        .get(`${ApiUrls.baseUrl}/users`)
        .then(response => response.data);
    }
  })
})();
