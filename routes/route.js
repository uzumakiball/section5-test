
var app=angular.module('MainApp',[]);
var app=angular.module('MainApp',['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/project', {
		templateUrl: 'testangular.html',
		//controller: 'myCtrl'
	});

}]);


app.controller('myCtrlA', function($scope) {

	 $scope.firstName = "John";
    $scope.lastName = "Doe";

});
