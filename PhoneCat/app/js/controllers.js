var phoneCtrlModule = angular.module('phoneCtrls',['phoneServices'])

phoneCtrlModule.controller('phoneListCtrl', ['$scope','phoneService', function($scope, phoneService) {
	$scope.phones = phoneService.query(); 
	// phoneService.getData($scope); 

	$scope.orderProp = 'age';

}]);

phoneCtrlModule.controller('phoneDetailCtrl',['$scope', '$routeParams','phoneService', function($scope, $routeParams, phoneService) {
	
	//使用$resourse服务实现
	 $scope.phone = phoneService.get({id: $routeParams.id}, function(phone) {
	 	$scope.mainImgUrl = phone.images[0];
  	});

 //  	// 使用内置的$http服务实现
	// phoneService.getData($scope, $routeParams.id);

	$scope.setImgUrl = function(imgUrl) {
		$scope.mainImgUrl = imgUrl;
	};

}]);