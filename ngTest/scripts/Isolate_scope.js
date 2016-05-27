var myModule = angular.module("myApp", []);

myModule.directive("hello", function(){
	return {
		restrict: "EA",
		// 独立scope
		scope: {},  
		template: '<div><input type="text" ng-model="username" />{{username}}</div>',
		replace: true
	}
})                                                               