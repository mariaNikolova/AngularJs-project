app.directive("userAds",function(){
	return {
		controller:"UserAdsCtrl",
		restrict:'E',
		templateUrl:"templates/public/user-ads.html",
		replace: true
	};
});