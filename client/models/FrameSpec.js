describe('Frame Model', function() {

    // First, we load the app's module
    beforeEach(module('bowling'));

    var frame, Frame;

    // Initialize test city
    beforeEach(inject(function(_Frame_) {
        Frame = _Frame_;
        frame = new Frame();
    }));

    it('first test', function(){

    });

});