function getComputerChoice() {                                     // function that randomly selects one of the array values and returns it.
   const array = ["ROCK", "PAPER", "SCISSORS"];
   let choice = array[Math.floor(Math.random() * array.length)]; 
    return choice;
}


    
        
let computerSelection = getComputerChoice()





