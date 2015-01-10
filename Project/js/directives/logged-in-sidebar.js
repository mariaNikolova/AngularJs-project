app.directive("loggedInSidebar",function(){
	return{
		controller:"LoggedInSidebarCtrl",
		restrict:"E",
		teplateUrl:"templates/public/left-sidebar.html",
		replace:true,
	};
});