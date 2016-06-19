var teapotModule = angular.module('teapot',['ui.router','teapotDirective','teapotService']);

 teapotModule.run(['$rootScope', '$state','$stateParams' ,function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
 }]);

teapotModule.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('index', {
        // abstract: true 表明此状态不能被显性激活，只能被子状态隐性激活
        url: '/index',
        templateUrl: 'templates/home.html'
    })
    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html'
    })
     
}]);


//控制器

teapotModule.controller('headerCtrl',['$scope', function($scope) {
    $scope.carousels =[
        { src: "images/scrollImg_01.jpg" },
        { src: "images/scrollImg_02.jpg" },
        { src: "images/scrollImg_03.jpg" }
    ];
}]);

teapotModule.controller('loginCtrl',['$scope', function($scope) {
    
}]);

teapotModule.controller('homeCtrl',['$scope', function($scope) {
    $scope.nowIndex = 0;
    $scope.hotTeapotMap = [
        [
            { src: "images/sx1.png" },
            { src: "images/sx2.png" },
            { src: "images/sx3.png" }
        ],
        [
            { src: "images/sx1.png" },
            { src: "images/sx2.png" }
        ],
        [
            { src: "images/sx1.png" }
        ],
        [
            { src: "images/sx1.png" },
            { src: "images/sx2.png" },
            { src: "images/sx3.png" },
            { src: "images/mj4.png" }
        ],
    ];
    //特惠
    $scope.preferential = [
        {   name: '原矿赵庄朱泥高石瓢',
            author: '周大师',
            price: 280,
            volume: '200CC',
            number: 'A001',
            material: '枣泥红',
            src: "images/sx1.png" 
        },
        {   name: '精品朱泥',
            price: 280,
            volume: '200CC',
            number: 'A002',
            author: '周大师',
            material: '枣泥红',
            src: "images/sx2.png" 
        }
    ];

    $scope.hotTpClick = function(index) {
        $scope.nowIndex = index;
    }
    
}]);