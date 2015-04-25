describe('Frame Model', function() {

    // First, we load the app's module
    beforeEach(module('bowling'));

    var frame, Frame, Roll;

    // Initialize test city
    beforeEach(inject(function(_Frame_, _Roll_) {
        Frame = _Frame_;
        Roll = _Roll_;
        frame = new Frame();
    }));

    it('should be defined', function(){
        expect(frame).toBeDefined();
    });

    it('can be defined with two rolls', function() {
        var r1 = new Roll(5);
        var r2 = new Roll(3);
        frame = new Frame(r1, r2);

        expect(frame.getScore()).toEqual(8);
    });

});