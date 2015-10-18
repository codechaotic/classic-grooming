(function() {
  'use strict';

  angular
    .module('ClassicGrooming')
    .config(config);

  config.$inject = [
    '$routeProvider',
    '$locationProvider',
    '$compileProvider'
  ];

  function config($routeProvider, $locationProvider, $compileProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home-view.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
    $compileProvider.debugInfoEnabled(false);
  }

})();
