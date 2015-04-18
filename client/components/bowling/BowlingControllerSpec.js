describe('Bowling Controller', function() {

    // First, we load the app's module
    beforeEach(module('bowling')); 

    var bowlingController, $scope;

    beforeEach(inject(function(_$controller_, _$rootScope_) {
        $scope = _$rootScope_.$new();

        bowlingController =  _$controller_('BowlingController as bowling', {
            '$scope': $scope
        });
    }));

    it('header should be defined as "Bowling Kata"', function() {
        expect($scope.bowling.header).toEqual("Bowling");
    });

});