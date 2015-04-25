(function() {
  'use strict';

    angular
        .module('bowling')
        .factory('Frame', FrameModel);

        FrameModel.$inject = [ '$log', 'Roll' ];

    //////////////////////////////
    // FRAME
    function FrameModel($log, Roll) {

        // Constructor
        var Frame = function (roll1, roll2) {
            this.firstRoll = roll1;
            this.secondRoll = roll2;
        };

        // Methods
        Frame.prototype.getScore = function() {
            return this.firstRoll.getScore() + this.secondRoll.getScore();
        };

        // Getters

        return Frame;
    }

})();