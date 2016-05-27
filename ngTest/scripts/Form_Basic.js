var myModule = angular.module("myApp", []);

myModule.controller('FormModuleCtrl',['$scope', function($scope){
	// $scope.user={
	// 	username: 'coco',
	// 	pwd:'***'
	// };
	$scope.save = function(){
		console.log($scope.user);
	}
}]);