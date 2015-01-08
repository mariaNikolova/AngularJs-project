app.factory("categoriesData",["$resource","baseServiceUrl",function($resource,baseServiceUrl){
	function getCategories(){
		return $resource(baseServiceUrl + "categories").query() ;
	}

	return{
		getCategories: getCategories
	}
}])