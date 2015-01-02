var softUni = angular.module('softUniApp', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider.when('/register',{
		templateUrl:"templates/register.html"
		
	});
	$routeProvider.when('/all-adds',{
		templateUrl:"templates/all-adds.html"
	});
	$routeProvider.when('/login',{
		templateUrl:"templates/login.html"
	});
	$routeProvider.otherwise({redirectTo: '/all-adds'});
});


