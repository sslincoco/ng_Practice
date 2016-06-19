var clickModule = angular.module('myApp',[]);

clickModule.controller('clickCtrl',['$scope', function($scope){
	$scope.vm={};
	$scope.vm.items=['001','002','003','004','005','006'];
	$scope.vm.tab = 1;
}]);

 