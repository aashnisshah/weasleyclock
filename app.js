var weasleyClock = angular.module('WeasleyClock', ['ngRoute', 'firebase']);

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