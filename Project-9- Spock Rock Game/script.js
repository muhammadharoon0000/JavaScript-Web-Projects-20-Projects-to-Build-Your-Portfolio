
const playerScoreEl = $('#playerScore');
const playerChoiceEL = $('#playerChoice');
const computerScoreEl = $('#computerScore');
const computerChoiceEL = $('#computerChoice');

const resultText = $('#resultText');

const playerRock = $('#playerRock');
const playerPaper = $('#playerPaper');
const playerScissors = $('#playerScissors');
const playerLizard = $('#playerLizard');
const playerSpock = $('#playerSpock');

const computerRock = $('#computerRock');
const computerPaper = $('#computerPaper');
const computerScissors = $('#computerScissors');
const computerLizard = $('#computerLizard');
const computerSpock = $('#computerSpock');

const allGameIcons = document.querySelectorAll('.far');
let computerChoice = '';
let computerScoreNumber = 0;
let playerScoreNumber = 0;

const choices = {
  Rock: { name: 'Rock', defeats: ['Scissors', 'Lizard'] },
  Paper: { name: 'Paper', defeats: ['Rock', 'Spock'] },
  Scissors: { name: 'Scissors', defeats: ['Paper', 'Lizard'] },
  Lizard: { name: 'Lizard', defeats: ['Paper', 'Spock'] },
  Spock: { name: 'Spock', defeats: ['Scissors', 'Rock'] },
};

function computerRandomChoice() {
  let randomValue = Math.random();
  if (randomValue <= 0.2) {
    computerChoice = 'Rock';
  }
  else if (randomValue <= 0.4) {
    computerChoice = 'Paper';
  }
  else if (randomValue <= 0.6) {
    computerChoice = 'Scissors';
  }
  else if (randomValue <= 0.8) {
    computerChoice = 'Lizard';
  }
  else {
    computerChoice = 'Spock';
  }
  console.log(randomValue);
}

function resetAllGameIcons() {
  allGameIcons.forEach(element => {
    element.classList.remove('selected');
  });
}

function displayComputerChoice() {
  switch (computerChoice) {
    case 'Rock':
      computerRock.addClass('selected');
      computerChoiceEL.text(" --- Rock");
      break;
    case 'Paper':
      computerPaper.addClass('selected');
      computerChoiceEL.text(" --- Paper");
      break;
    case 'Scissors':
      computerScissors.addClass('selected');
      computerChoiceEL.text(" --- Scissors");
      break;
    case 'Lizard':
      computerLizard.addClass('selected');
      computerChoiceEL.text(" --- Lizard");
      break;
    case 'Spock':
      computerSpock.addClass('selected');
      computerChoiceEL.text(" --- Spock");
      break;
  }
};

$('#resetbtn').on('click', resetAll);

function resetAll() {
  console.log("object");
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.text(playerScoreNumber);
  computerScoreEl.text(computerScoreNumber);
  playerChoiceEL.text('');
  computerChoiceEL.text('');
  resultText.text('');
  resetAllGameIcons();
}

function updateScore(playerChoice) {
  console.log(playerChoice, computerChoice);
  if (playerChoice === computerChoice) {
    resultText.text("Tie");
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computerChoice) > -1) {
      resultText.text("You Won!");
      playerScoreNumber++;
      playerScoreEl.text(playerScoreNumber);
    }
    else {
      resultText.text("You Lost!");
      computerScoreNumber++;
      computerScoreEl.text(computerScoreNumber);
    }
  }

}


function checkResult(playerChoice) {
  resetAllGameIcons();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}



const player = $('#player').find('.far').on('click', function (e) {
  checkResult(this.title);
  switch (this.title) {
    case 'Rock':
      playerRock.addClass('selected');
      playerChoiceEL.text(" --- Rock");
      break;
    case 'Paper':
      playerPaper.addClass('selected');
      playerChoiceEL.text(" --- Paper");
      break;
    case 'Scissors':
      playerScissors.addClass('selected');
      playerChoiceEL.text(" --- Scissors");
      break;
    case 'Lizard':
      playerLizard.addClass('selected');
      playerChoiceEL.text(" --- Lizard");
      break;
    case 'Spock':
      playerSpock.addClass('selected');
      playerChoiceEL.text(" --- Spock");
      break;
  }
});




resetAll();