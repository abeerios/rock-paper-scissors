// Track score with variables 
let humanScore = 0;
let computerScore = 0;

let generatedNum = Math.random();


// Use Math.random() method to randomly return the computer choice
function getComputerChoice() {
  if (generatedNum >= 0 && generatedNum <= 0.3) {
    console.log(generatedNum)
    return "rock";
  } else if (generatedNum > 0.3 && generatedNum <= 0.7) {
    console.log(generatedNum)
    return "paper";
  } else if (generatedNum > 0.7 && generatedNum < 1) {
    console.log(generatedNum)
    return "scissors";
  }
}

// Get the player's choice
function getHumanChoice() {
  let playerChoice = prompt('Rock, paper or scissors?');
  return playerChoice.toLowerCase();
}

// Store each function in constants
const computerOptionOne = getComputerChoice();
const humanOptionOne = getHumanChoice();

const computerOptionTwo = getComputerChoice();
const humanOptionTwo = getHumanChoice();

const computerOptionThree = getComputerChoice();
const humanOptionThree = getHumanChoice();

const computerOptionFour = getComputerChoice();
const humanOptionFour = getHumanChoice();

const computerOptionFive = getComputerChoice();
const humanOptionFive = getHumanChoice();


// Code to play the game for 5 rounds
function playGame() {

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'paper' && computerChoice == 'rock') {
      console.log('You win! Paper beats rock.')
      return humanScore++;
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
      console.log('You lose. Paper beats rock.')
      return computerScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
      console.log('You lose. Scissors beats paper.')
      return computerScore++;
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
      console.log('You win! Rock beats scissors.')
      return humanScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
      console.log('You win! Scissors beats paper.')
      return humanScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
      console.log('You lose. Rock beats scissors.')
      return computerScore++;
    } else {
      console.log('It\'s a tie!')
    }
  }

  // Prompting user to play first round and displaying the messages 
  console.log(humanOptionOne, computerOptionOne);
  playRound(humanOptionOne, computerOptionOne);
  console.log(`Your score: ${humanScore}, Computer's Score: ${computerScore}`);

  // Prompting user to play second round and displaying the messages
  console.log(humanOptionTwo, computerOptionTwo);
  playRound(humanOptionTwo, computerOptionTwo);
  console.log(`Your score: ${humanScore}, Computer's Score: ${computerScore}`);

  // Prompting user to play third round and displaying the messages
  console.log(humanOptionThree, computerOptionThree);
  playRound(humanOptionThree, computerOptionThree);
  console.log(`Your score: ${humanScore}, Computer's Score: ${computerScore}`);

  // Prompting user to play fourth round and displaying the messages
  console.log(humanOptionFour, computerOptionFour);
  playRound(humanOptionFour, computerOptionFour);
  console.log(`Your score: ${humanScore}, Computer's Score: ${computerScore}`);

  // Prompting user to play fifth round and displaying the messages
  console.log(humanOptionFive, computerOptionFive);
  playRound(humanOptionFive, computerOptionFive);
  console.log(`Your score: ${humanScore}, Computer's Score: ${computerScore}`);

  // Total Score 
  console.log(`Your final score: ${humanScore}`)
  console.log(`Computer's final score: ${computerScore}`)
}

playGame();

