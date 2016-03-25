app.controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {
  $scope.test = 'Hello world!';
  $scope.posts = posts.posts;
  $scope.addPost = function() {
    if(!$scope.title || $scope.title === '') { return; }
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0,
      comments: [
        {author: 'John Doe', body: 'Cool post!', upvotes: 0},
        {author: 'Leo Lin', body: 'Nice, bro.', upvotes: 3}
      ]
    });
    $scope.title = '';
    $scope.link = '';
  };
  $scope.incrementUpvotes = function(post) {
    post.upvotes++;
  }
}
]);
