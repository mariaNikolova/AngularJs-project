'use strict';

app.controller("UserAdsCtrl", function($scope,$location,authentication,adsData,filter){
	$scope.ready = false;
	$scope.currentPage = 1; 
	$scope.startPage = 1;
	$scope.pageSize = 3;
	$scope.pageTitle = "My Ads";
	$scope.isLoggedIn = authentication.isLoggedIn();
	$scope.myAds = true;
	$scope.userData = authentication.getUser();
    $scope.statusFilter =  ($scope.statusFilter) ? $scope.statusFilter :  { status: '' };

	$scope.adsParams = {
	  'startPage' : 1,
	  'pageSize' : $scope.pageSize
	};

    $scope.$watch('statusFilter.status', function() {
		console.log($scope.statusFilter.status);

        getAds();
    });

    // $scope.$watch('currentPage', function() {
    //     getAds();
    // });

    function getAds() {
		$scope.reloadUserAds();
    }


	$scope.logout = function () {
		authentication.removeUser();
		$location.path("/");
	}

	$scope.reloadUserAds = function() {
		$scope.ready = false;
    	$scope.adsParams.Status = $scope.statusFilter.status;
		adsData.getUserAds($scope.adsParams)
		.$promise
		.then(function(data){
			console.log($scope.adsParams);
			console.log(data);
			$scope.adsData = data;
			$scope.startPage = 1;
			$scope.ready = true;
		},
		function (err) {
			console.log(err);
		});
	};

	$scope.deactivate = function(ad) {
		adsData.changeStatusUserAds({id: ad.id}, 'deactivate')
		.$promise
		.then(function(data){
			$scope.ready = false;
			$scope.reloadUserAds();
		},
		function (err) {
			console.log(err);
		});
	};

	$scope.publishAgain = function(ad) {
		adsData.changeStatusUserAds({id: ad.id}, 'publishAgain')
		.$promise
		.then(function(data){
			console.log(data);
			$scope.ready = false;
			$scope.reloadUserAds();
		},
		function (err) {
			console.log(err);
		});
	};

	$scope.pageChanged = function(){
		$scope.adsParams.startPage = $scope.currentPage;
		$scope.reloadUserAds();
	}	
})