app.controller("AdAdsCtrl",["$scope","$location","townsData","categoriesData","adsData",function($scope,$location,townsData,categoriesData,adsData){
	
	categoriesData.getCategories()
		.$promise
		.then(function(data){
			$scope.categories = data;
		});

	townsData.getTowns()
		.$promise
		.then(function(data){
			$scope.towns = data;
		});

		$scope.addAd = function(ad){
			ad.imageDataUrl = adsData.imageDataUrl;
			console.debug(ad);
			//console.log("uraaaaaa");
			adsData.addAd(ad);
			$location.path("/user/ads");
		};

		$scope.fileSelected = function(fileInputField) {
		    delete adsData.imageDataUrl;
		    var file = fileInputField.files[0];
		    if (file.type.match(/image\/.*/)) {
		        var reader = new FileReader();
		        reader.onload = function() {
		            adsData.imageDataUrl = reader.result;
		            $(".image-box").html("<img src='" + reader.result + "'>");
		        };
		        reader.readAsDataURL(file);
		    } else {
		        $(".image-box").html("<p>File type not supported!</p>");
	 	};
};

}])