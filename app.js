// JavaScript Document this filed is linked to the index.html page
//Set the User and Computer scores to initiate at zero
let userScore = 0;
let computerScore = 0;

//Initiate the classes and id's that will display the data in the index.html page/browser
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scorBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Function that creates and selects Computers choice
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
//Function to change the value initial to a readable word
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

//Created Win, Lose and Tie functions to display each in Readable text
function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smUserWord = "user".fontsize(3).sub();
  const smCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smUserWord} beats ${convertToWord(computerChoice)}${smCompWord} You Win!`;
}
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smUserWord = "user".fontsize(3).sub();
  const smCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smUserWord} loses to ${convertToWord(
    computerChoice
  )}${smCompWord} You Lost!`;
}
function draw(userChoice, computerChoice) {
  const smUserWord = "user".fontsize(3).sub();
  const smCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smUserWord} equals ${convertToWord(
    computerChoice
  )}${smCompWord} It's a Draw!`;
}

//Function using Switch statement to determine what the win, lose and draw are
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

//Event listeners for each button to be active with individual value of Rock, Paper and Scissors
game("c");
function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });

  paper_div.addEventListener("click", function() {
    game("p");
  });

  scissors_div.addEventListener("click", function() {
    game("s");
  });
}

main();
