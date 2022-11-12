'use strict';
//DOM manipulations
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
//Define the secret number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//document.querySelector('.number').textContent = secretNumber;
//EVENT listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  console.log(guess, typeof guess); //It is string, need to convert to number as to compare with a randomly generated number

  if (!guess) {
    // document.querySelector('.message').textContent = '🚫 No number!';
    displaymessage('🚫 No number!');
  } else if (guess === secretNumber) {
    displaymessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    //CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // document.querySelector('.highscore').textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess < secretNumber ? 'Too low!' : 'Too high!';
      displaymessage(guess < secretNumber ? 'Too low!' : 'Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('😭 You are out of tries!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//⚠️ CODING CHALLENGE 1
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displaymessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
