(function() {
  'use strict';

  angular
  .module('bowling')
  .controller('AppController', AppController);

  AppController.$inject = [ '$router', '$location', '$log' ];

  //////////////////////////////
  // APP CONTROLLER
  function AppController($router, $location, $log) {
    var vm = this;
    $log.info('Init AppController');

    // Define App Routing
    $router.config([
          {
            path: '/',
            component: 'bowling'
          }
        ]);
    $location.path('/');

    // View models
    vm.title = 'Bowling Kata';

  }

})();
