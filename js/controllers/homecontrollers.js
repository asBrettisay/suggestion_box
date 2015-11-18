
app.controller('HomeController', [
	'$scope',
	'suggestions',

	function($scope, suggestions) {
	$scope.posts = suggestions.posts

	$scope.addSuggestion = function() {
		// Add a suggestion to $scope.posts
		if ($scope.title = undefined) {
			return
		}

		$scope.posts.push({
			title: $scope.title,
			upvotes: 0,
		});

		$scope.title = "";

	};
	$scope.upVote = function(post) {
		// Increase the upvote of the post by 1.
		post.upvotes += 1;
	};
}]);
