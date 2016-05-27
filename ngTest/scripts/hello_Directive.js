var myModule = angular.module("myApp",[]);
 

myModule.directive('hello', function(){
		return {
			restrict:'EA',
			template: "<div>hello, angular!</div>",
		}
	});