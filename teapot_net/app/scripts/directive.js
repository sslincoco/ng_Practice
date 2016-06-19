var teapotDirective = angular.module('teapotDirective',[]);

    teapotDirective.directive('carousel',["$compile","$timeout",function(compile,timeout){
    return {
        template: "<div class=\"components_carousel\" ng-mouseenter=\"cancel()\" ng-mouseleave=\"next()\"></div>",
        restirct: "EA",
        transclude: true,
        scope: {
            datas: "="
        },
        controller: ["$scope","$element","$transclude",function(s,element,transclude){
        }],
        compile:function(ele,attrs,transclude){
            return function(scope,ele,attrs){
                var componentsCarousel = ele.find("div");
                attrs.class && componentsCarousel.addClass(attrs.class);
                function next(active,datas){
                    datas = datas || [];
                    var point = datas.indexOf(active);
                    return point !== -1 ? datas[(point + 1) % datas.length] : datas[0];
                }
                var handle = null;
                function Next(){
                    scope.active = next(scope.active,scope.datas);
                    handle && timeout.cancel(handle);
                    handle = timeout(function(){
                        Next();
                    },3000);
                }
                function run() {
                    Next()
                }
                function move(active,datas,m){
                    datas = datas || [];
                    var point = datas.indexOf(active);
                    return point !== -1 ? datas[(point + datas.length + m) % datas.length] : datas[0];
                }
                scope.next = function() {
                    handle && timeout.cancel(handle);
                    handle = timeout(function(){
                        Next();
                    },1500);
                }
                scope.m = function(m){
                    handle && timeout.cancel(handle);
                    scope.active = move(scope.active,scope.datas,m);
                }
                scope.cancel = function() {
                    timeout.cancel(handle)
                };
                scope.imgClick = function(data) {
                    scope.active = data;
                    scope.next();
                }
                transclude(scope,function(clone){
                    componentsCarousel.append(clone);
                });
                scope.$watch("datas",function(datas){
                    if (datas) {
                        run();
                    }
                })
            }
        }
    }
}]);
