describe('Roll Model', function() {

    // First, we load the app's module
    beforeEach(module('bowling'));

    var roll, Roll;

    // Initialize test city
    beforeEach(inject(function(_Roll_) {
        Roll = _Roll_;
        roll = new Roll();
    }));

    it('should be defined', function() {
        expect(roll).toBeDefined();
    });

    it('should store the knocked down 5 pin', function(){
        roll = new Roll(5);
        expect(roll.getScore()).toEqual(5);
    });

});