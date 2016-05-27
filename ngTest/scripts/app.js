      var myApp = angular.module('myApp',[]);

      myApp.controller('myController', function($scope) {
	      	$scope.phones = [
		        {"name": "Nexus S",
		         "snippet": "Fast just got faster with Nexus S.",
		         "age": 0},
		        {"name": "Motorola XOOM with Wi-Fi",
		         "snippet": "The Next, Next Generation tablet.",
		         "age": 1},
		        {"name": "MOTOROLA XOOM",
		         "snippet": "The Next, Next Generation tablet.",
		         "age": 2}
		      ];
		    $scope.orderProp = 'age';


	      	$scope.clock = {
	      		now: new Date()
	      	};
	      	var updateClock = function() {
	      	  $scope.clock.now = new Date();
	      	};
	      	setInterval(function() {
	      	  $scope.$apply(updateClock);
	      	}, 1000);
	      	updateClock();
	      });

      myApp.controller('Ctrl', function($scope) {
	    $scope.title = 'Lorem Ipsum';
	    $scope.text = 'Neque porro quisquam est qui dolorem ipsum quia dolor...';
	  });
	  
      myApp.directive('myDirective', function() {
      	return {
		    restrict: 'A',
		    replace: true,
		    scope: {
		      myUrl: '=someAttr',
		      myLinkText: '@'
		    },
		    template: '\
		    	<div>\
		    	  <label>My Url Field:</label>\
		    	  <input type="text" \
		    	  		ng-model ="myUrl" />\
		    	  <a g=href="{{myUrl}}">{{myLinkText}}</a>\
		    	</div>\
		      '
		  }
      });

      myApp.directive('pane', function(){
      return {
        restrict: 'E',
        transclude: true,
        scope: { title:'@' },
        template: '<div style="border: 1px solid black;">' +
                    '<div style="background-color: gray">{{title}}</div>' +
                    '<div ng-transclude></div>' +
                  '</div>'
      };
  });
 