const arr = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerChoice(array) {
   const randNum = Math.floor(Math.random() * 3);
   const choice = array[randNum];
   return choice;
}

// console.log( getComputerChoice(arr) ); 


function playRound(playerSelection, computerSelection) {
    const finSelection = playerSelection.toUpperCase();
    let result;
    const comBine = finSelection + ' ' + computerSelection;
    // console.log(computerSelection);
    // console.log(comBine);
    switch(comBine) {
        case 'ROCK SCISSORS':
        case 'PAPER ROCK':
        case 'SCISSORS PAPER':
            result = `YOU WIN! ${finSelection} beats ${computerSelection}`;
            break;    
        case 'ROCK ROCK':
        case 'PAPER PAPER':
        case 'SCISSORS SCISSORS':
            result = `DRAW`;
            break;
        default:
            result = `YOU LOSE! ${computerSelection} beats ${finSelection}`;

    }

    return result;
}

function game()




const playerSelection = 'PAPER';
const computerSelection = getComputerChoice(arr);
console.log(playRound (playerSelection, computerSelection) );