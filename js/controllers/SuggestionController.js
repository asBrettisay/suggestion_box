app.controller('SuggestionController', [
  '$scope',
  '$routeParams',
  'suggestions',
  function($scope, $routeParams, suggestions) {
    $scope.post = suggestions.posts[$routeParams.id];

    $scope.addComment = function() {

      var comment = $scope.comment;

      $scope.post.comments.push({
      body: comment,
      upvotes: 0
      });
    };

    $scope.upvoteComment = function(comment) {
      $scope.post.comments.upvotes += 1;
    };

  }]);
