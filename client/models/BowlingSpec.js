describe('Bowling Model', function() {

    // First, we load the app's module
    beforeEach(module('bowling'));

    var bowling, Bowling;

    // Initialize test city
    beforeEach(inject(function(_Bowling_) {
        Bowling = _Bowling_;
        bowling = new Bowling();
    }));

    describe('bowling game initialization', function() {

        it('bowling game should be defined', function() {
            expect(bowling).toBeDefined();
        });

        it('actual score is 0 in the beginning', function() {
            expectScore(0);
        });

        it('no frames in the beginning', function () {
            //expect(bowling)
        });
    });

    describe('one frame one roll', function() {

        it('single roll with 3 pin', function() {
            bowling.roll(3);
            expectScore(3);
        });

    });

    describe('one frame two roll', function() {

        it('two rolls with 1 and 5 pin', function() {
            bowling.roll(1);
            bowling.roll(5);
            expectScore(6);
        });

    });

    describe('spare case', function() {

        xit('two rolls and spare', function() {
            bowling.roll(3);
            bowling.roll(7);
            bowling.roll(2);
            expectScore(14);
        });

    });

    function expectScore(score) {
        expect(bowling.getActualScore()).toEqual(score);
    }


});