var app = angular.module('mentor-app', ['ngRoute']);
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'templates/fav_subjects.html',
                controller: 'subjectController'
            }).
            when('/interests', {
                templateUrl: 'templates/interests_list.html',
                controller: 'interestsController'
            }).
            when('/map/:interest', {
                templateUrl: 'templates/mentor.html'
            })
/*           when('/mentors/:query', {
                templateUrl: 'templates/mentor_list.html',
                controller: 'mentorsController'
            });*/
}]);
/*
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
};*/

// TODO: move this into a neater spot!
var mentorData = {
    "entrepreneurship": [
        {"name": "Gio", "description": "hello"},
        {"name": "James", "description": "hello"},
        {"name": "Don", "description": "hello"},
        {"name": "Chriss", "description": "hello"},
        {"name": "Jak", "description": "hello"},
        {"name": "Chilli", "description": "hello"}
    ],
    "programming" : [
        {"name": "Gio", "description": "hello"},
        {"name": "James", "description": "hello"},
        {"name": "Don", "description": "hello"},
        {"name": "Chriss", "description": "hello"},
        {"name": "Jak", "description": "hello"},
        {"name": "Chilli", "description": "hello"}
    ],
    "agriculture": [
        {"name": "Gio", "description": "hello"},
        {"name": "James", "description": "hello"},
        {"name": "Don", "description": "hello"},
        {"name": "Chriss", "description": "hello"},
        {"name": "Jak", "description": "hello"},
        {"name": "Chilli", "description": "hello"}
    ]
};
