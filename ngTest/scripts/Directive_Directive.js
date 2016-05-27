var myModule = angular.module("myApp", []);

myModule.controller('myCtrl', ['$scope', function($scope){
	$scope.loadData = function(){
		console.log("开始加载数据......");
	}
}]);


myModule.directive("superman", function(){
	return {
		restrict: 'E',
		scope: {},
		controller: function($scope){
			$scope.ability=[];
			this.addStrength = function(){
				$scope.ability.push("strength");
			};
			this.addSpeed = function(){
				$scope.ability.push("speed");
			};
			this.addLight = function(){
				$scope.ability.push("light");
			};

		},
		link: function(scope, ele, attrs){
			ele.addClass("btn btn-primary")
			ele.bind('mouseenter', function(){
				console.log(scope.ability);
			})
		}
	}
});

myModule.directive('strength', function(){
	return {
		restrict: 'A',
		require: "^superman",
		link: function(scope, ele, attrs,supermanCtrl){
			supermanCtrl.addStrength();
		}
	}
});

myModule.directive('speed', function(){
	return {
		restrict: 'A',
		require: "^superman",
		link: function(scope, ele, attrs,supermanCtrl){
			supermanCtrl.addSpeed();
		}
	}
});

myModule.directive('light', function(){
	return {
		restrict: 'A',
		require: "^superman",
		link: function(scope, ele, attrs,supermanCtrl){
			supermanCtrl.addLight();
		}
	}
});