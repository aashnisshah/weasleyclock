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
			location: 'Work',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg'
		},
		{
			id: 1,
			name: 'Mark',
			location: 'Home',
      image: 'http://vignette1.wikia.nocookie.net/villains/images/8/86/Draco_Malfoy_(Year_1).jpg/revision/latest?cb=20120806221046'
		}
	];
  }
]);