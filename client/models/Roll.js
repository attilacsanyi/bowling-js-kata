(function() {
  'use strict';

    angular
        .module('bowling')
        .factory('Roll', RollModel);

        RollModel.$inject = [ '$log'];

    //////////////////////////////
    // ROLL
    function RollModel($log) {

        // Constructor
        var Roll = function () {

        };

        // Methods


        // Getters

        return Roll;
    }

})();