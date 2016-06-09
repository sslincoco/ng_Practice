var phonecatModule = angular.module('phonecatModule', ['ngRoute','phoneServices','phoneFilters','phoneCtrls']);

phonecatModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/phones', {
		templateUrl: 'templates/phonesList.html',
		controller: 'phoneListCtrl'
	})
	.when('/phones/:id', {
		templateUrl: 'templates/phoneDetail.html',
		controller: 'phoneDetailCtrl'
	})
	.otherwise({
		redirectTo: "/phones"
	});
}]);
