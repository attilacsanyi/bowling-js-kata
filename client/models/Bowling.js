(function() {
  'use strict';

    angular
        .module('bowling')
        .factory('Bowling', BowlingModel);

        BowlingModel.$inject = [ '$log', 'Roll'];

    //////////////////////////////
    // BOWLING
    function BowlingModel($log, Roll) {

        // Constructor
        var Bowling = function () {
            this.actualScore = 0;
            this.rolls = [];
            //this.frames = [];
        };

        // Methods
        Bowling.prototype.getActualScore = function() {
            return this.actualScore;
        };

        Bowling.prototype.roll = function(pinScore) {
            var roll = new Roll(pinScore);
            //var frame = new 
            this.rolls.push(roll);
            this.actualScore += roll.getScore();
        };

        // Getters

        return Bowling;
    }

})();