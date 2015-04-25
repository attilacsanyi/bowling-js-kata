describe('Bowling Game', function(){

  var game;

  beforeEach(function(){
    game = bowling();
  });

  it('it can define a game', function(){
    expect(game instanceof Function);
    expect(game).toBeDefined();
  });

  it('can roll a gutter game', function(){
    rollMany(0, 20);
    expectScore(0);
  });

  it('can roll just ones', function(){
    rollMany(1, 20);
    expectScore(20);
  });

  it('can roll a spare', function(){
    game.roll(3);
    game.roll(7);
    game.roll(2);
    rollMany(0, 17);
    expectScore(14);
  });

  it('can roll a spare', function(){
    game.roll(10);
    game.roll(3);
    game.roll(5);
    rollMany(0, 16);
    expectScore(26);
  });

  it('can roll a perfect game', function(){
    rollMany(10, 12);
    expectScore(300);
  });

  // Helpers

  function rollMany(pins, times) {
    for (var i = 0; i < times; i++) {
      game.roll(pins);
    }
  }

  function expectScore(expectedScore) {
    expect(game.getScore()).toEqual(expectedScore);
  }

});

describe('Test singleton', function(){
  it('should retrieve the same instance', function(){
    var s1 = mySingleton.getInstance();
    var s2 = mySingleton.getInstance();
    expect(s1.getRandom()).toEqual(s2.getRandom());
  });
});