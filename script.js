// Get the buttons
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

// Add event listeners to the buttons
rockBtn.addEventListener('click', playGame.bind(null, 'rock'));
paperBtn.addEventListener('click', playGame.bind(null, 'paper'));
scissorsBtn.addEventListener('click', playGame.bind(null, 'scissors'));

// Game logic
function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Determine the winner
  let result;
  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
  } else {
    result = 'Computer wins!';
  }

  // Display the result
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}
