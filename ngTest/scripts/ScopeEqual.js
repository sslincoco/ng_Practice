var myModule = angular.module("myApp", []);

myModule.controller("myCtrl", ['$scope', function($scope){
	$scope.ctrlFlavor = "可口可乐";
}]);

myModule.directive("drink", function(){
	return {
		restrict: "EA",
		scope: {
			flavor:'='
		},  
		template: '<input type="text" ng-model="flavor" />'
	}
})                                                               