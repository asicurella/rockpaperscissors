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
let platerSelection = document.querySelector(input)

function playGame(playerSelection, computerSelection){
    if (playerSelection === 'Rock' && computerSelection === 'Rock'){
        return 'You chose Rock. Computer chose Rock. You tie!';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        return 'You chose Paper. Computer chose Rock. You win!';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        return 'You chose Scissors. Computer chose Rock. You lose!';
    }
}
