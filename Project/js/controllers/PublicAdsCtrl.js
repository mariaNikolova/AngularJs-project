'use strict';

app.controller("PublicAdsCtrl", function($scope,adsData,filter){
	$scope.ready = false;
	$scope.currentPage = 1; 
	$scope.startPage = 1;
	$scope.pageSize = 3;


	$scope.adsParams = {
	  'startPage' : 1,
	  'pageSize' : $scope.pageSize
	};

	$scope.reloadPublicAds = function() {
		adsData.getPublicAds($scope.adsParams)
		.$promise
		.then(function(data){
			$scope.adsData = data;
			$scope.ready = true;
		},
		function (err) {
			console.log(err);
		});
	};

	$scope.reloadPublicAds();

	$scope.pageChanged = function(){
		$scope.adsParams.startPage = $scope.currentPage;
		$scope.reloadPublicAds();
	}
	  
	$scope.$on("categoryClicked",function(event,category){
		loadPublicAds(filter.getParams());
	});

	$scope.$on("townClicked",function(event,town){
		loadPublicAds(filter.getParams());
	}); 
	
	
})