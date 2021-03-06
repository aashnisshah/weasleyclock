var weasleyClock = angular.module('WeasleyClock', [
  'ngRoute',
  'firebase'
]);

weasleyClock.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl : 'templates/home.html',
        controller : 'HomeCtrl',
        controllerAs : 'home'
      })
      .when('/login', {
        templateUrl : 'templates/login.html',
        controller : 'LoginCtrl',
        controllerAs : 'login'
      })
      .when('/add', {
        templateUrl : 'templates/add.html',
        controller : 'AddCtrl',
        controllerAs : 'add'
      })
      .otherwise('/');
  }
]);