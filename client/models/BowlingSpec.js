describe('Bowling Model', function() {

    // First, we load the app's module
    beforeEach(module('bowling'));

    var bowling, Bowling;

    // Initialize test city
    beforeEach(inject(function(_Bowling_) {
        Bowling = _Bowling_;
        bowling = new Bowling();
    }));

    it('first test', function(){

    });

});