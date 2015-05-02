var app = angular.module('mentor-app', ['ngRoute']);
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'templates/home.html',
                controller: 'rootController'
            }).
            when('/confirm', {
                templateUrl: 'templates/confirm.html'
            }).
            when('/form', {
                templateUrl: 'templates/form.html'
            }).
            when('/mentor', {
                templateUrl: 'templates/mentor.html'
            }).
            when('/mentors', {
                templateUrl: 'templates/mentor_list.html'
            });
}]);
