var sliderModule  = angular.module('slider',['ngAnimate']);

sliderModule.controller('sliderCtrl',['$scope','readJSON', function ($scope,readJSON) {

    }]);

    sliderModule.factory('readJSON',['$http','$q', function ($http,$q) {
        return {
            query: function () {
                var deferred=$q.defer();
                $http({
                    method:'GET',
                    url:'img.json'
                }).success(function (data, status, header, config) {
                    deferred.resolve(data);
                }).error(function (data, status, header, config) {
                    deferred.reject(data);
                });
                return deferred.promise;
            }
        }
    }]);
    sliderModule.directive('lunbo',['readJSON', function (readJSON) {
        return{
            restrict:'EA',
            templateUrl:'lunbo.html',
            scope:{},
            link: function (scope, element, attr) {
                var promise=readJSON.query();
                var step=0;
                scope.flag=false;
                promise.then(function (data) {
                    console.log(data);
                    scope.images=data;
                });

                setInterval(function () {
                    element.find("li").css({"display":"none","opacity":0});
                    step++;
                    step=step%5;
                    element.find("li").eq(step).css({"display":"block","opacity":1});
                },2000)
            }
        }
    }]);
