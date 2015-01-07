app.directive("PublicAds",function(){
	return {
		controller:"PublicAdsCtrl",
		restrict:'E',
		templateUrl:"templates/public/public-ads.html",
		replace: true
	};
});