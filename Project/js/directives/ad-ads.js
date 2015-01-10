app.directive("ad-ads",function(){
	return {
		controller: "AdAdsCtrl",
		restrict:"E",
		templateUrl:"templates/user/ads/publish-new-ad.html",
		replace:true,
	};
})