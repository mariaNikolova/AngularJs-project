'use strict';

app.controller('HomeCtrl',function($scope, $location, adsData, authentication){
	$scope.pageTitle = "Home";
	$scope.isLoggedIn = authentication.isLoggedIn();
	$scope.userData = authentication.getUser();
	$scope.logout = function () {
		$location.path("/");
		console.log("logout");
		authentication.removeUser();
	}

	// $scope.adsParams = {
	//   'startPage' : 1,
	//   'pageSize' : pageSize
	// };

	// $scope.reloadAds = function() {
	// 	adsData.getAds($scope.adsParams)
	// 	.$promise
	// 	.then(function(data){
	// 		$scope.adsData = data;
	// 		$scope.ready = true;
	// 	},
	// 	function (err) {
	// 	  // TODO: display an error message
	// 	});
	// };

	// $scope.reloadAds();
})