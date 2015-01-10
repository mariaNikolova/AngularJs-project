app.factory('authentication', function(){
	var key = "user";
	function saveUserData(data){
		localStorage.setItem(key,angular.toJson(data));
		//localStorageServiceProvider.set(key,data);
	}
	function getUserData(){
		return angular.fromJson(localStorage.getItem(key));
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
	function getToken() {
        return localStorage.getItem('token');
    }
	function removeUser(){
		localStorage.removeItem(key);
	}
	function isAdmin(){
		var isAdmin = getUserData().isAdmin;
		return isAdmin;
	}
	function isLoggedIn(argument){
		return !!getUserData();
	}
	function saveUserAdData(data){
		localStorage.setItem(key+"Ad",angular.toJson(data));
		//localStorageServiceProvider.set(key,data);
	}

	return {
		saveUser: saveUserData,
		getUser:getUserData, 
		getHeaders: getHeaders,
		removeUser: removeUser,
		isAdmin: isAdmin,
		isLoggedIn: isLoggedIn,
		saveUserAd: saveUserAdData,
	}
}); 