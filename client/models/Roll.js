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
        var Roll = function (pinScore) {
            this.pinScore = pinScore;
        };

        // Methods


        // Getters

        Roll.prototype.getScore = function() {
            return this.pinScore;
        };

        return Roll;
    }

})();