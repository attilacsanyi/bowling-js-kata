(function() {
  'use strict';

    angular
        .module('bowling')
        .factory('Frame', FrameModel);

        FrameModel.$inject = [ '$log' ];

    //////////////////////////////
    // FRAME
    function FrameModel($log) {

        // Constructor
        var Frame = function () {

        };

        // Methods


        // Getters

        return Frame;
    }

})();