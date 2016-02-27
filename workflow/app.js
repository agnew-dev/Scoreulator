'use strict';

angular.module('scoreULator', ['ngRoute', 'angularMoment', 'scoreULator.filters', 'scoreULator.services', 'scoreULator.directives', 'scoreULator.controllers'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/index', {templateUrl: 'partials/index.html', controller: 'ScoresController'});
		$routeProvider.when('/scores', {templateUrl: 'partials/scores.html', controller: 'ScoresController'});
		$routeProvider.when('/standings', {templateUrl: 'partials/standings.html', controller: 'ScoresController'});
		$routeProvider.when('/settings', {templateUrl: 'partials/settings.html', controller: 'ScoresController'});
		$routeProvider.otherwise({redirectTo: '/index.html'});

	}]);