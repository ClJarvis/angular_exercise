var app = angular.module('myapp', ['ngRoute', 'myapp.controllers']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'partials/index', controller: 'IndexController'})
		.when('/about', {templateUrl: 'partials/abouts', controller: 'AboutController'})
		.when('/needs', {templateUrl: 'partials/needs', controller: 'NeedsController'})
		.otherwise({redirectTo:"/"})
}])

.config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(true);
}]);

