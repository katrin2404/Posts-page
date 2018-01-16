(function () {

  'use strict';
  angular.module('postDetail').factory('PostDetailService', function ($q, PostDetailRepository) {

    return {
      loadDetailsPost,
    };

    function loadDetailsPost(postId) {

      return $q
        .all({
          post: PostDetailRepository.loadDetails(postId),
          comments: PostDetailRepository.loadComments(postId),
        }).then(
          ({post, comments}) => {
            return {
              ...post,
              comments
            }
          }
        );
    }
  })
})();
