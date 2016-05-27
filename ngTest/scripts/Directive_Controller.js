var myModule = angular.module("myApp", []);

myModule.controller('myCtrl', ['$scope', function($scope){
	$scope.loadData = function(){
		console.log("开始加载数据......");
	}
}]);

myModule.controller('myCtrl2', ['$scope', function($scope){
	$scope.loadData2 = function(){
		console.log("开始加载数据......222");
	}
}]);

// myModule.directive('loader', function(){
// 	return {
// 		restrict: 'AE',
// 		link: function(scope, ele, attrs){
// 			ele.bind('mouseenter', function(){
// 				//scope.loadData();
// 				scope.$apply("loadData()");
// 			})
// 		}
// 	}
// });

myModule.directive("loader", function(){
	return{
		restrict: 'EA',
		link: function(scope, ele, attrs){
			ele.bind('mouseenter', function(){
				scope.$apply(attrs.howtoload);
			})
		}
	}
})