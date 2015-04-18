describe('Roll Model', function() {

    // First, we load the app's module
    beforeEach(module('bowling'));

    var roll, Roll;

    // Initialize test city
    beforeEach(inject(function(_Roll_) {
        Roll = _Roll_;
        roll = new Roll();
    }));

    it('first test', function(){

    });

});