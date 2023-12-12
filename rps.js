function getComputerChoice() {                                     // function that randomly selects one of the array values and returns it.
   const array = ["ROCK", "PAPER", "SCISSORS"];
   let choice = array[Math.floor(Math.random() * array.length)]; 
    return choice;
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

    
        
let computerSelection = getComputerChoice()    //variable that calls on a function and stores the value.
let playerSelection = prompt("Enter rock, paper, or scissors gamer").toUpperCase();  // variable that stores user entered value and converts to to uppercase.

console.log(playRound(playerSelection, computerSelection)); //calls a function and logs the selected variables.

