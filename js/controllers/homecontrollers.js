app.controller('HomeController', [
	'$scope',
	'suggestions',

	function($scope, suggestions) {
	$scope.posts = suggestions.posts

	$scope.addSuggestion = function() {
		// Add a suggestion to $scope.posts
		var newSuggestion = $scope.title;
		if (!$scope.title || $scope.title === "") {
			return
		}

		$scope.posts.push({
			id: $scope.posts.length +1,
			title: newSuggestion,
			upvotes: 0,
			comments: [],
		});

		$scope.title = "";

	};
	$scope.upVote = function(post) {
		// Increase the upvote of the post by 1.
		post.upvotes += 1;
	};
}]);
