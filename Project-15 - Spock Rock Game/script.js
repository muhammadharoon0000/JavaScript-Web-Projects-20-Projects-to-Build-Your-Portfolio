
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

const allGameIcons = $('.far');

function resetAllGameIcons() {
  for (const item of allGameIcons) {
    console.log(item.classList.remove('selected'));
  }
}

const player = $('#player').find('.far').on('click', function (e) {
  resetAllGameIcons();
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


const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

