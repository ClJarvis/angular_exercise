var controllers = angular.module('myapp.controllers', []);

controllers.controller('IndexController', ['$scope', function($scope){
	$scope.message = "Hello I am the Home page";
}]);

controllers.controller('AboutController', ['$scope', function($scope){
	$scope.message = "Hello I am the About page";
}]);


controllers.controller('NeedsController', ['$scope', function($scope){
	$scope.message = "Hello I am the Needs page";
	$scope.needs=[];
	$scope.addNeeds = function(thingy){
		$scope.needs.push(thingy);
		$scope.newNeed='';
	};
}]);
