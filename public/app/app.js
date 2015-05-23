var app = angular.module('myapp', ['ngRoute', 'myapp.controllers']);

app.congfig([$'routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'partials/Index', controller: 'IndexController'})
		.otherwise({redirectTo:"/"})
}])

.congfig(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(true);
}]);

