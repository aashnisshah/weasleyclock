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
			location: 'Work',
      image: 'http://vignette1.wikia.nocookie.net/villains/images/8/86/Draco_Malfoy_(Year_1).jpg/revision/latest?cb=20120806221046'
		},
    {
      id: 0,
      name: 'Jon',
      location: 'Work',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg'
    },
    {
      id: 1,
      name: 'Mark',
      location: 'Work',
      image: 'http://vignette1.wikia.nocookie.net/villains/images/8/86/Draco_Malfoy_(Year_1).jpg/revision/latest?cb=20120806221046'
    },
    {
      id: 0,
      name: 'Jon',
      location: 'Peril',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg'
    },
    {
      id: 1,
      name: 'Mark',
      location: 'Peril',
      image: 'http://vignette1.wikia.nocookie.net/villains/images/8/86/Draco_Malfoy_(Year_1).jpg/revision/latest?cb=20120806221046'
    },
	];

    var home = [];
    var work = [];
    var peril = [];

    angular.forEach(this.firebase, function(dude) {
        if(dude.location == 'Home') {
          home.push(dude);
        } else if(dude.location == 'Work') {
          work.push(dude);
        } else {
          peril.push(dude);
        }
    });
    this.people = [home, work, peril];
  }
]);