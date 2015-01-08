app.controller("TownsCtrl",["$scope","$rootScope","townsData","filter",function($scope,$rootScope,townsData,filter){
	townsData.getTowns()
		.$promise
		.then(function(data){
			$scope.towns = data;
		}); 

	$scope.townCliked = function(town){
		filter.filterByTown(town);
		$rootScope.$broadcast("townCliked",town);
	}
}])