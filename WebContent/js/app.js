var routerApp = angular.module('routerApp', [ 'ui.router', 'ngCookies','uiGmapgoogle-maps' ]);
routerApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/about');
	$stateProvider.state('about', {
		url : '/about',
		templateUrl : './views/about.html',
		controller : 'mapCtrl',
		controllerAs : 'about'
	}).state('powerbi', {
		url : '/powerbi',
		templateUrl : './views/powerbi.html',

	}).state('birt', {
		url : '/birt',
		templateUrl : './views/birt.html',
	}).state('d3', {
		url : '/d3',
		templateUrl : './views/d3.html',
	}).state('open', {
		url : '/open',
		templateUrl : './views/test.html',	
		controller : 'loginCtrl',
	});
});

