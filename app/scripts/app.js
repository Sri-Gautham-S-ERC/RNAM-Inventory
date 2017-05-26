'use strict';

/**
 * @ngdoc overview
 * @name rnaminventoryApp
 * @description
 * # rnaminventoryApp
 *
 * Main module of the application.
 */
angular
  .module('rnaminventoryApp', [
    'ngResource',
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.grid',
    'ui.grid.pinning',
    'ui.grid.resizeColumns',
    'ui.grid.moveColumns',
    'ui.grid.selection',
    'ui.grid.edit',
    'ui.grid.autoResize',
    'ui.grid.pagination'
  ])
  .config(function ($routeProvider,$locationProvider, $httpProvider ) {

  $locationProvider.hashPrefix(''); 
    $routeProvider
      .when('/', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'proj'
      })
      .when('/employees', {
        templateUrl: 'views/employees.html',
        controller: 'EmployeesCtrl',
        controllerAs: 'emp'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('_', window._);
