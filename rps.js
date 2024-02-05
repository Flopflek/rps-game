
const playButtonRock = document.createElement("button");
playButtonRock.textContent = "ROCK";
document.body.appendChild(playButtonRock);

playButtonRock.addEventListener("click", choiceRock);

function choiceRock() {
    playerSelection = "ROCK";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    
}

const playButtonPaper = document.createElement("button");
playButtonPaper.textContent = "PAPER";
document.body.appendChild(playButtonPaper);

playButtonPaper.addEventListener("click", choicePaper);

function choicePaper() {
    playerSelection = "PAPER";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

const playButtonScissors = document.createElement("button"); 
playButtonScissors.textContent = "SCISSORS";
document.body.appendChild(playButtonScissors);

playButtonScissors.addEventListener("click", choiceScissors);

function choiceScissors() {
    playerSelection = "SCISSORS";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}



function getComputerChoice() {                                     // function that randomly selects one of the array values and returns it.
   const array = ["ROCK", "PAPER", "SCISSORS"];
   let choice = array[Math.floor(Math.random() * array.length)]; 
   return choice;
}



//let computerSelection = getComputerChoice()    //variable that calls on a function and stores the value.
  //      let playerSelection = prompt("Enter rock, paper, or scissors gamer").toUpperCase();       // variable that stores user entered value and converts to to uppercase.
    //    let roundResult = playRound(playerSelection, computerSelection); //calls a function and stores the selected variable values.

function playRound(playerSelection, computerSelection) {        // playRound runs a round with conditional outcomes. 
if (playerSelection === computerSelection) {
    div.textContent = "It's a tie! Play again.";
    return
    
}else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    div.textContent = (playerRoundWin);
    finalScore(playerRoundWin);
    return

}else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    div.textContent = (playerRoundWin);
    finalScore(playerRoundWin);
    return

}else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    div.textContent = (playerRoundWin);
    finalScore(playerRoundWin);
    return

}else 
    div.textContent = (computerRoundWin);
    finalScore(computerRoundWin);
    return
}

//function replayRound () {                                   // function is called on if a tie condition is met in the playround function, requests new values and calls on the playround function to play again.
  //  computerSelection = getComputerChoice()
  //  playerSelection = addEventListener("click", choiceRock || choicePaper || choiceScissors);
  //  return playRound(playerSelection, computerSelection);
//}


//final scoring function
function finalScore(roundResult) {

    if (roundResult === playerRoundWin) {
    (playerScore++);
    playerDivScore.textContent = `Your score is ${playerScore}`;
    
    }else (computerScore++);
    compDivScore.textContent = `The computer's score is ${computerScore}`;

    if (playerScore === 3) {
    finalResult.textContent = playerWin

    }else if (computerScore === 3) {
    finalResult.textContent = computerWin
   
        }if (playerScore === 3 || computerScore === 3) {
            const btnReset = document.createElement("button");
            btnReset.textContent = "Play again";
            document.body.appendChild(btnReset);
            playButtonRock.removeEventListener("click", choiceRock);
            playButtonPaper.removeEventListener("click", choicePaper);
            playButtonScissors.removeEventListener("click", choiceScissors);
            
            btnReset.addEventListener("click", () => {
                playerScore = 0;
                computerScore = 0;
                playerDivScore.textContent = `Your score is ${playerScore}`;
                compDivScore.textContent = `The computer's score is ${computerScore}`;
                finalResult.textContent = "";
                document.body.removeChild(btnReset);
                playButtonRock.addEventListener("click", choiceRock);
                playButtonPaper.addEventListener("click", choicePaper);
                playButtonScissors.addEventListener("click", choiceScissors);
                
            });
          
        } 
        
        
    }


    
//global variable declarations
let computerScore = 0;
let playerScore = 0;
const playerWin = "Victory";
const computerWin = "Defeat";
const playerRoundWin = "You've won the round"; 
const computerRoundWin = "You've lost the round";      



const div = document.createElement("div");
div.textContent = "";
document.body.appendChild(div);

const playerDivScore = document.createElement("div");
playerDivScore.textContent = `Your score is ${playerScore}`;
document.body.appendChild(playerDivScore);

const compDivScore = document.createElement("div");
compDivScore.textContent = `The computer's score is ${computerScore}`;
document.body.appendChild(compDivScore); 

const finalResult = document.createElement("div");
document.body.appendChild(finalResult); 
//calls on the game function to execute


