app.directive("loggedInSidebar",function(){
	return{
		controller:"LoggedInSidebarCtrl",
		restrict:"E",
		teplateUrl:"teplates/public/left-sidebar.html",
		replace:true,
	};
});