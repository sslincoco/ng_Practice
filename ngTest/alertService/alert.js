'use strict';

var alertModule = angular.module('alertModule', []);

alertModule.controller('alertCtrl',['$scope','alertService', function($scope, alertService) {
	alertService.addAlert('error','Oh snap! Change a few things up and try submitting again.');
	alertService.addAlert('success','Well done! You successfully read this important alert message.');
 
	 $scope.editProfile = function(){
	 	alertService.addAlert('error',"你的个人资料修改成功");
	 }
 
}]);

alertModule.factory('alertService', function($rootScope) {
	var alertService = {};
	$rootScope.alerts=[];
	alertService.addAlert = function(type, msg) {
		var alert = {
			'type': type,
			'msg': msg,
			'close': function() {alertService.removeAlert(this);}
		};
		$rootScope.alerts.push(alert);
	};
	alertService.removeAlert = function(alert) {
		$rootScope.alerts.splice($rootScope.alerts.indexOf(alert),1);
	};

	return alertService;
})