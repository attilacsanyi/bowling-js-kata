var bowling = function(){

  // Private members
  var rolls = [];

  // Private methods
  function roll (pins) {
    rolls.push(pins);
  }

  function isStrike(rollIndex) {
    return rolls[rollIndex] == 10;
  }

  function isSpare(rollIndex) {
    return rolls[rollIndex] + rolls[rollIndex + 1] == 10;
  }

  function getNormalScore(rollIndex) {
    return rolls[rollIndex] + rolls[rollIndex + 1];
  }

  function getScore () {
    var score = 0;
    var rollIndex = 0;

    for (var frameIndex = 0; frameIndex < 10; frameIndex++) {

      if (isStrike(rollIndex)) {
        score += getNormalScore(rollIndex) + rolls[rollIndex + 2];
        rollIndex += 1;
      } else if (isSpare(rollIndex)) {
        score += getNormalScore(rollIndex) + rolls[rollIndex + 2];
        rollIndex += 2;
      } else {
        score += getNormalScore(rollIndex);
        rollIndex += 2;
      }
      
    }

    return score;
  }

  // Public API
  return {
    roll : roll,
    getScore : getScore
  };
};