(function() {
  'use strict';

    angular
        .module('bowling')
        .factory('Bowling', BowlingModel);

        BowlingModel.$inject = [ '$log'];

    //////////////////////////////
    // BOWLING
    function BowlingModel($log) {

        // Constructor
        var Bowling = function () {

        };

        // Methods


        // Getters

        return Bowling;
    }

})();