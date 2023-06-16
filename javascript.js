function getComputerChoice(){
    const choice = Math.random();

    let computerMove = "";

    if (choice >= 0 && choice < 1/3){
        computerMove = 'Rock';
    } else if (choice > 1/3 && choice <= 2/3){
        computerMove = 'Paper';
    } else if (choice > 2/3 && choice <= 1){
        computerMove = 'Scissors';
    }
    return computerMove;
    
}
function getInputValue(){
   let inputElement = document.getElementById("js-input").value;
   let playerSelection = inputElement;
}
function enterKeyDown(event) {
    if (event.key === Enter) {
        
    }
}

let result = "";
console.log(playerSelection());
function playGame(playerSelection, computerSelection){
    if (playerSelection === 'Rock' && computerSelection === 'Rock'){
        let result = 'Tie.';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        let result = 'Win.';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        let result = 'Lose.';
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper'){
        let result = 'Tie.';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        let result = 'Win.';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper'){
        let result = 'Lose.';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        let result = 'Win.';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
        let result = 'Lose.';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors'){
        let result = 'Tie.';
}}

    function displayResult(){
        
    }

