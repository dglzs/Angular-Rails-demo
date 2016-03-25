var app = angular.module('flapperNews', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: '/home.html',
    controller: 'MainCtrl'
  });
  $stateProvider.state('posts', {
    url: '/posts/{id}',
    templateUrl: '/posts.html',
    controller: 'PostCtrl'
  });
  $urlRouterProvider.otherwise('home');
}]);

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
        {author: 'Joe', body: 'Cool post!', upvotes: 0},
        {author: 'Leo', body: 'Nice, bro.', upvotes: 3}
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

app.controller('PostCtrl', ['$scope', '$stateParams', 'posts', function($scope, $stateParams, posts) {
  $scope.post = posts.posts[$stateParams.id];
  $scope.addComment = function() {
    if($scope.body === '') { return; }
    $scope.post.comments.push({
      body: $scope.body,
      author: 'user',
      upvotes: 0
    });
    $scope.body = '';
  };
}]);

app.factory('posts', [function() {
  var o = {
    posts: [
      {title: 'post 1', upvotes: 5, link:'', comments: []},
      {title: 'post 2', upvotes: 3, link:'', comments: []},
      {title: 'post 3', upvotes: 15, link:'', comments: []},
      {title: 'post 4', upvotes: 9, link:'', comments: []},
      {title: 'post 5', upvotes: 4, link:'', comments: []}
    ]
  };
  return o;
}]);