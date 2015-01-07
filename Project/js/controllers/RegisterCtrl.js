app.controller('RegisterCtrl',['$scope',"townsData","userData",function($scope,townsData,userData){
	townsData.getTowns()
		.$promise
		.then(function(data){
			$scope.towns = data;
			console.log(data);
		});
		$scope.register = function(user){
			//console.log(user);
			userData.register(user);
		}
}]); 