/* Declare app level module */
//Define the views routing with Controllers
var contactManager = angular.module('contactManager', ['ngRoute']);


contactManager.config(function($routeProvider) {
    $routeProvider.when('/index', {
      templateUrl: 'partials/index.html'
    })
    .when('/info/:id', {
      templateUrl: 'partials/info.html',
      controller: 'InfoCtrl'
    })
    .when('/add', {
      templateUrl: 'partials/add.html',
      controller: 'AddCtrl'
    })
    .when('/edit/:id', {
      templateUrl: 'partials/edit.html',
      controller: 'EditCtrl'
    })
    .when('/remove/:id', {
      templateUrl: 'partials/remove.html',
      controller: 'RemoveCtrl'
    })
    .otherwise({
      redirectTo: '/index'
    });
  });
