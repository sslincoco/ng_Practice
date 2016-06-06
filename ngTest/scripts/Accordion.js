var accordionModule = angular.module('accordionModule',[]);

accordionModule.directive('accordion', function() {
	return {
		restrict:'E',
		replace: true,
		transclude: true,
		template: '<div ng-transclude></div>',
		controller: function(){
			var expanders = [];
			this.opened = function(selectedExpander) {
				angular.forEach(expanders, function(item, index) {
					if (selectedExpander !=item) {
						item.showMe = false;
					}
				});
			};

			this.addItem = function(item) {
				expanders.push(item);
			}
		}
	}
});

accordionModule.directive('expander', function(){
	return {
		restrict: 'EA',
		replace: true,
		transclude: true,
		require: '?^accordion',
		scope: {
			title: '=expanderTitle'
		},
		template: '<div>'
				  +'<div class="title bg" ng-click= "toggle()">{{title}}</div>'
				  +'<div class="body" ng-show="showMe" ng-transclude></div>'
				  +'</div>',

		link: function(scope, elem, attrs, accordionController){
			scope.showMe = false;
			accordionController.addItem(scope);
			scope.toggle = function(){
				scope.showMe = ! scope.showMe;
				accordionController.opened(scope);
			};

		}
	}
});

accordionModule.controller('accordionCtrl',['$scope', function($scope) {
	$scope.expanders = [{
		title : 'Click me to expand',
		text : 'Hi there folks, I am the content that was hidden but is now shown.'
	}, {
		title : 'Click this',
		text : 'I am even better text than you have seen previously'
	}, {
		title : 'Test',
		text : 'test'
	}];
}]);