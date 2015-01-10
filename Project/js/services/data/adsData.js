'use strict';

app.factory('adsData', function($resource, baseServiceUrl, $cookieStore, $http,authentication){
    //$http.defaults.headers.common.Authorization = 'Bearer ' + $cookieStore.get('token');
	var resource = $resource(baseServiceUrl + 'ads:adId', {adId: '@id'}, {
		update: { method: 'PUT'}
	})
	var userAds = $resource(baseServiceUrl + 'user/ads/:id', {
        id: "@id",
        title: '@title',
        text: '@text',
        categoryid: '@categoryid',
        townid: '@townid',
        ImageDataURL: '@ImageDataURL'
    }, {
        update: {
            method: 'PUT'
        }
    });
	function setHeaders() {
		$http.defaults.headers.common.Authorization = 'Bearer ' + $cookieStore.get('token');
		//var headers = {};
		//headers.Authorization = "Bearer " + authentication.getUserData().access_token;
        //$http.defaults.headers.common['Authorization'] = 'Bearer ' + authentication.getUserData()();
    }
	function getPublicAds(params){
		return resource.get(params);
	}

	function editAd(adId, ad){
		return resource.update({id: adId}, ad);
	}

	function getAdById(adId){
		return resource.get({id: adId});
	}

	function addAd(ad){
		setHeaders();
        return userAds.save(ad);
		// return $resource(baseServiceUrl + 'user/ads:adId', {adId: '@id'}, {
		// 	update: { method: 'PUT'}
		// }).save(ad).$promise
		// 	.then(function(data){
		// 		authentication.saveUserAd(data);
		// 		//authentication.getHeaders() ; 
		// 	});
	}

	function deleteAd(adId){
		return resource.delete({id: adId});
	}

	return {
		getPublicAds: getPublicAds,
		editAd: editAd,
		getAdById: getAdById,
		addAd: addAd,
		delete: deleteAd
	}
})