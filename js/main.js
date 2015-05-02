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
            when('/mentor/:id', {
                templateUrl: 'templates/mentor.html'
            }).
            when('/mentors/:query', {
                templateUrl: 'templates/mentor_list.html'
            });
}]);

function Global(){
	function config() {
		var data = {
			outline: [
				{
					profile_img: 'https://profileimggoeshere',
					name: 'Judge 1',
					bio: 'Bio bio bio bio'
				}
			]
		};
	}
};