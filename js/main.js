var app = angular.module('mentor-app', ['ngRoute']);
app.config(['$routeProvider',
          function($routeProvider) {
              $routeProvider.
                when('/', {
                        templateUrl: 'templates/mentor.html',
                        controller: 'rootController'
                      });
              }]);
console.log("HELLO WORLD");
