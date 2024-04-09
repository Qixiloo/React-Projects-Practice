function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

// change the background color of a <header> element
/* const changeBackground = function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  const header = document.querySelector('header');
  header.style.backgroundColor = rndCol;
};
const checkButton = document.querySelector('.check');
checkButton.addEventListener('click', changeBackground);

 */

let seNumber = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;

document.querySelector('.number').textContent = seNumber;

function displayMessage(your_string) {
  document.querySelector('.message').textContent = your_string;
}

const compareNumber = function (number, seNumber) {
  if (score > 1) {
    if (number === seNumber) {
      const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
      displayMessage('🥳 Correct number!');
      document.querySelector('body').style.backgroundColor = rndCol;
      if (score >= highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else {
      displayMessage(
        number < seNumber ? '😤 your guess is small!' : '😤 your guess is big!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('😤 you lose!');
    document.querySelector('.score').textContent = 0;
  }
};

//     if (score > 1) {
//       displayMessage(
//         number < seNumber ? '😤 your guess is small!' : '😤 your guess is big!'
//       );
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage('😤 you lose!');
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (number > seNumber) {
//     if (score > 1) {
//       displayMessage('😤 your guess is big!');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage('🤬 you lose!');
//       document.querySelector('.score').textContent = 0;
//     }
//   } else {
//     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     displayMessage('🥳 Correct number!');
//     document.querySelector('body').style.backgroundColor = rndCol;
//     if (number >= highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }
//   }
// };

let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  let userInput = Number(document.querySelector('.guess').value);
  console.log(userInput);

  if (!userInput) {
    displayMessage('😡 No number');
  }

  compareNumber(userInput, seNumber);
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  seNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = seNumber;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
