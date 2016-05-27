var myModule = angular.module("myApp", []);

myModule.controller("myCtrl", ['$scope', function($scope){
	$scope.ctrlFlavor = "可口可乐";
}]);

myModule.directive("drink", function(){
	return {
		restrict: "EA",
		// 独立scope
		scope: {
			flavor:'@'
		},  
		template: '<div>{{flavor}}</div>',
		// link: function(scope, ele, attrs){
		// 	scope.flavor = attrs.flavor;
		// }
	}
})                                                               