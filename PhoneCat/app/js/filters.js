var phoneFilters  = angular.module('phoneFilters', []);

phoneFilters.filter('checkmark', function() {
	// body...
	return function(input) {
		return input ? input :'\u2718';
	}
})