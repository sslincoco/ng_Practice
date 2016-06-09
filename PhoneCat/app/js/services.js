var phoneServices = angular.module('phoneServices', ['ngResource']);

// 使用$resource
phoneServices.factory('phoneService',['$resource', function($resource) {
	// body...
	return $resource('data/:id.json',{}, {
		query: {
			method: 'GET',
			params: {id: 'phones'},
			isArray: true
		}
	})
}]);

//使用内置的$http服务
// phoneServices.factory('phoneService',['$http', function($http) {
// 	return { 
// 		getData: function($scope,phoneid) {
// 			phoneid = phoneid ? phoneid :'phones';
// 			$http.get('./data/'+phoneid+'.json').success(function(data) {
// 				if (phoneid =='phones') {
// 					$scope.phones = data;
// 				} else {
// 					$scope.phone = data;
// 					$scope.mainImgUrl = data.images[0];
// 				}
				
// 			});
// 		}
// 	}
// }]);