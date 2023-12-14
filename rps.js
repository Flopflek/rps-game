function getComputerChoice() {                                     // function that randomly selects one of the array values and returns it.
   const array = ["ROCK", "PAPER", "SCISSORS"];
   let choice = array[Math.floor(Math.random() * array.length)]; 
    return choice;
}

function game() {
    
    for (let i = 1; i <=5; i++) {
        let computerSelection = getComputerChoice()    //variable that calls on a function and stores the value.
        let playerSelection = prompt("Enter rock, paper, or scissors gamer").toUpperCase();       // variable that stores user entered value and converts to to uppercase.
        let roundResult = playRound(playerSelection, computerSelection); //calls a function and stores the selected variable values.  
        console.log(roundResult);
        finalScore(roundResult);
       
    }      
}

function playRound(playerSelection, computerSelection) {        // playRound runs a round with conditional outcomes. 
if (playerSelection === computerSelection) {
    return (replayRound())
    
}else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    return ("You've won the round");

}else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    return ("You've won the round");

}else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    return ("You've won the round");

}else 
    return ("You've lost the round");

}

function replayRound () {                                   // function is called on if a tie condition is met in the playround function, requests new values and calls on the playround function to play again.
    computerSelection = getComputerChoice()
    playerSelection = prompt("It's a tie! please enter rock, paper, or scissors again").toUpperCase();
    return playRound(playerSelection, computerSelection);
}


//final scoring function
function finalScore(roundResult) {

    if (roundResult === playerRoundWin) {
    (playerScore++);

    }else (computerScore++);
    
    if (playerScore === 3) {
    console.log(playerWin)

    }else if (computerScore === 3) {
    console.log(computerWin)
   
        }if (playerScore === 3 || computerScore === 3) {
            return endGame()
        } 
    }
    
//global variable declarations
let computerScore = 0;
let playerScore = 0;
const playerWin = "Victory";
const computerWin = "Defeat";
const playerRoundWin = "You've won the round"; 
const computerRoundWin = "You've lost the round";      
        
let computerSelection = getComputerChoice()    //variable that calls on a function and stores the value.
let playerSelection = prompt("Enter rock, paper, or scissors gamer").toUpperCase();  // variable that stores user entered value and converts to to uppercase.

console.log(playRound(playerSelection, computerSelection)); //calls a function and logs the selected variables.

//calls on the game function to execute
game() 
//ends the game 
endGame()