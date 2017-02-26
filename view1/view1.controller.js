'use strict';
// This is main controller
var module = angular.module('myApp.view1')
// module for arraycontroller
module.controller('arrayController', function($scope) {
  var namearray = [
    { id: 3, name: 'rahman'},
    { id: 1, name: 'bashar'},
    { id: 2, name: 'anwar'}
  ];
  $scope.namearray = namearray;
});
// modile for pass data
module.controller('ListCtrl', function (messages){
  var self = this;

  self.messages = messages.list;
});
// modile for validating input
module.controller('numController', function (messages, $scope){
  $scope.num = null;
    $scope.$watch('num', function(val) {
      $scope.num = parseInt(val);
    });
  var self = this;
  self.addMessage = function(message){
    messages.add(message);
  };
});


