app.factory("userData",["$resource","baseServiceUrl","authentication",function($resource,baseServiceUrl,authentication){
	function registerUser(user){
		//authentication.saveUser(token ) ;
		return $resource(baseServiceUrl + "user/register")
			.save(user)
			.$promise
			.then(function(data){
				authentication.saveUser(data);
				//authentication.getHeaders() ; 
			})
	}
	function loginUser(user){
		var resource = $resource(baseServiceUrl + 'user/login')
				.save(user);

				resource.$promise
				.then(function(data){
					authentication.saveUser(data);
				});
				return resource;
	}
	function logoutUser(){
		return $resource(baseServiceUrl + 'user/logout')
				.save(user)
				.$promise
				.then(function(data){
					authentication.removeUser();
				});
	}
	return{
		register: registerUser,
		login: loginUser,
		logout: logoutUser
	}
}])   