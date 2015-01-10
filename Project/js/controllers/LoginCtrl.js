'use strict';

app.controller('LoginCtrl',
	function($scope, $location, $cookieStore, userData){
	$scope.login = function(){
		userData.login($scope.user)
			.$promise
			.then(function(data){
                $cookieStore.remove('token');
                $cookieStore.remove('username');
                $cookieStore.remove('isAdmin');

                userData.username = '';

                $cookieStore.put('token', data.access_token);
                $cookieStore.put('username', data.username);
                if (data.isAdmin) {
	        		localStorage.setItem('isAdmin', data.username);
                }

                userData.username = data.username;
                if (data.isAdmin) {
                    $location.path('admin/home');
                } else {
                    $location.path('user/home');
                }
				console.debug(data);
			}, function (err) {
                alert(err.data.error_description || 'Your login FAIL!');
			})        
	 }
})