let computerSelection = "";

function getComputerChoice(){
    const choice = Math.random();
    let computerChoice = "";
    if (choice >= 0 && choice < 1/3){
        computerChoice = 'Rock';
    } else if (choice > 1/3 && choice <= 2/3){
        computerChoice = 'Paper';
    } else if (choice > 2/3 && choice <= 1){
        computerChoice = 'Scissors';
    }
    computerSelection = computerChoice;
}
let playerSelection = "";
function getInputValue(){
    let inputElement = document.getElementById("js-input").value;
    playerSelection = inputElement;
   
}
/*function enterKeyDown(event) {
    if (event.key === Enter) {
        
    }
} */
let result = "";
function displayResult(){
    alert(`The result is: ${result}`);

}

function playGame(playerSelection, computerSelection){
    getInputValue();
    getComputerChoice();
    if (playerSelection === 'Rock' && computerSelection === 'Rock'){
        result = 'Tie.';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        result = 'Win.';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        result = 'Lose.';
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper'){
        result = 'Tie.';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        result = 'Win.';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper'){
        result = 'Lose.';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        result = 'Win.';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
        result = 'Lose.';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors'){
        result = 'Tie.';
    } else () =>{
        alert('You did not enter a valid move. Try "Rock", "Paper", or "Scissors".');
    }
    displayResult();
}



