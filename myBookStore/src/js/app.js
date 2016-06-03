var BookStoreApp = angular.module("BookStore",['ui.router','ngGrid','BookListModule','BookDetailModule']);
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */

 BookStoreApp.run(function($rootScope, $state, $stateParams) {
 	$rootScope.$state = $state;
 	$rootScope.$stateParams = $stateParams;
 });

 /**
 * 配置路由
 * 应用采用ui-router路由，因为ng原生的路由不支持嵌套视图
 * @param  {[type]} $stateProvider
 * @param {[type]}  $urlRouterProvider
 * @return {[type]}
 */
BookStoreApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/index');
	$stateProvider.state('index',{
		url: '/index',
		views: {
			"": {
				templateUrl: './templates/home.html'
			},
			'main@index': {
				templateUrl: './templates/login.html'
			}
		}
	})
	.state('booklist', {
		url: '/{bookType:[0-9]{1,4}}',
		views: {  //一个页面上带有多个ui-view
			'': {
				templateUrl: 'templates/bookList.html'
			},
			'booktype@booklist': {
				templateUrl: 'templates/bookType.html'
			},
			'bookgrid@booklist': {
				templateUrl: 'templates/bookgrid.html'
			}
		}
	})
	.state('bookdetail', {
		url: '/detail',
		templateUrl: 'templates/bookDetail.html'
	})
});