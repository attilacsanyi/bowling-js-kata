(function() {
    'use strict';

    angular
        .module('bowling')
        .controller('BowlingController', BowlingController);

    BowlingController.$inject = [ '$log'];

    //////////////////////////////
    // BOWLING CONTROLLER
    function BowlingController($log) {
        $log.info('Init BowlingController');
        var vm = this;

        // View models

        vm.header = "Bowling";

        // View methods

    }

})();