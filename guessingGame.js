let makeGuess = function(guess) {
  let min = 1;
  let max = 20;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return guess === randomNum;
};

console.log(makeGuess(1))