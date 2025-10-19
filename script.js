// Store the Math.random() method in a variable for readablity 

let generatedNum = Math.random();

// Track score with variables 

let humanScore = 0;
let computerScore = 0;

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

console.log(getComputerChoice())

// Get the player's choice

function getHumanChoice() {
    let playerChoice = prompt("Rock, paper or scissors?");
    return playerChoice;
}

console.log(getHumanChoice())