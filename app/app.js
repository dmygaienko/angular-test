'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])

.controller('testController', function ($scope) {

  $scope.firstname = 'value 1';
  $scope.lastname = 'value 2';

  $scope.tweets = [
    {author: 'author1', text: 'text1'},
    {author: 'author2', text: 'text2'},
    {author: 'author3', text: 'text3'}
  ];

  $scope.controllerFn = function (arg) {
    console.log('testController.controllerFn ' + arg);
  }
})

.directive('testDirective', function () {
  return {
    restrict: 'E',
    scope: {
      testDirectiveFn: '&',
      testProperty: '@',
    },
    link: function ($scope, elem, attrs) {
      $scope.runTestDirectiveFn = function() {
        $scope.testDirectiveFn({arg: 'arg from directive'});
      }
    },
    template: '<div><h3>test directive with {{testProperty}}</h3>' +
    '<button ng-click="runTestDirectiveFn()">Change Data</button>',
  }
})
