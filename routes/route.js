
//var app=angular.module('MainApp',[]);
//var app=angular.module('MainApp',['ngRoute']);
//
//app.config(['$routeProvider',
//  function($routeProvider) {
//    $routeProvider.
//      when('/project', {
//		templateUrl: 'testangular.html',
//		//controller: 'myCtrl'
//	});
//
//}]);

//app.controller('myCtrl', function ($scope) {
//    $scope.firstName = "John";
//    $scope.lastName = "Doe";
//});

var app = angular.module('MainApp', ['ui.router']);

// configure our routes
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root', {
            url: '/',
            templateUrl: 'testangular.html',
            controller: 'myCtrl'
        });
}]);
