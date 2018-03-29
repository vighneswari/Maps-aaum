routerApp.controller('loginCtrl', [
		'$scope',
		'$state',
		'$cookies',
		'$http',
		'$rootScope',
		function($scope, $state, $cookies, $http, $rootScope) {
			this.login = function() {
				var username = this.username;
				var password = this.password;
				$rootScope.username = this.username;
				$scope.name="vi";
				$http.get(
						'v1.0/loginresponse?user=' + username + "&pass="
								+ password).then(function(response) {
					$scope.role = response.data;
					console.log("Role reposne:" + $scope.role);

					$rootScope.roles = response.data;
					$rootScope.roles = 'response.data';
					$scope.status = {
						'status' : "loggedIn",
						'roles' : $rootScope.roles,
/*						'name':$rootScope.username
*/					};
					console.log($scope.status);

					$cookies.put('status', JSON.stringify($scope.status), {
						path : '/Dashboards'
					});
					
					$state.go('about');

				}, function(response) {
					$scope.content = "Something went wrong";
				});

			};

		} ]);


routerApp.controller('loginCtrl', function ($scope) {
	$scope.open = function () {
		
		$state.go('test');

	}

	});
