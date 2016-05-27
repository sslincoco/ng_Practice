var myModule = angular.module("myApp", []);

myModule.controller("myCtrl", ['$scope', function($scope){
	$scope.sayHello = function(name){
		alert("hello " + name);
	}
}]);

myModule.directive("greeting", function(){
	return {
		restrict: "EA",
		scope: {
			greet:'&'
		},  
		template: '<input type="text" ng-model="nameInfo" /><br/>'+
					'<button class="btn btn-defaulr" ng-click="greet({name: nameInfo})">点击</button><br/>'
	}
})                                                               