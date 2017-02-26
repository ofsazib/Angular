'use strict';

// routecontroll
angular.module('myApp.view1', ['ngRoute','ui.router'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
  });
}])

