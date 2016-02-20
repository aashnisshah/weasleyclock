var weasleyClock = angular.module('WeasleyClock', ['ngRoute']);






weasleyClock.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl : 'templates/home.html',
        controller : 'HomeCtrl',
        controllerAs : 'home'
      })
      .otherwise('/');
  }
]);

weasleyClock.controller('HomeCtrl', [ 
  function(){
    this.message = "Hello form the home controllers";

    this.firebase = [
		{
			id: 0,
			name: 'Jon',
			location: 'Work'
		},
		{
			id: 1,
			name: 'Mark',
			location: 'Home'
		}
	];
  }
]);