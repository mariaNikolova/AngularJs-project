app.factory('authentication', function(){
	var key = "user";
	function saveUserData(data){
		localStorage.setItem(key,angular.toJson(data));
		//localStorageServiceProvider.set(key,data);
	}
	function getUserData(){
		return angular.fromJson(localStorage.getIem(key));
		//localStorageServiceProvider.get(key);
	}
	function getHeaders(argument){
		var headers = {};
		var userData = getUserData() ; 
		if(userData){
			headers.Authorization = "Bearer" + getUserData().access_token;
		};
		return headers;
	}
	function removeUser(){
		localStorage.removeItem(key);
	}
	return {
		saveUser: saveUserData,
		getUser:getUserData,
		getHeaders: getHeaders,
		removeUser: removeUser
	}
}); 