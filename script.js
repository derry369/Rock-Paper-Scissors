const arr = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerChoice(array) {
   const randNum = Math.floor(Math.random() * 3);
   const choice = array[randNum];
   return choice;
}
 

function playRound(finSelection, computerSelection) {
    let result;
    const comBine = finSelection + ' ' + computerSelection;
    switch(comBine) {
        case 'ROCK SCISSORS':
        case 'PAPER ROCK':
        case 'SCISSORS PAPER':
            result = 'YOU WIN!';
            break;    
        case 'ROCK ROCK':
        case 'PAPER PAPER':
        case 'SCISSORS SCISSORS':
            result = 'DRAW. Play this  round again';
            break;
        case 'ROCK PAPER':
        case 'PAPER SCISSORS':
        case 'SCISSORS ROCK':
            result = 'YOU LOSE!';    
            break;
        default:
            result = `${finSelection} IS INVALID, PICK AGAIN`;

    }

    return result;
}


function game() {
    const playerSelection = prompt('Enter your Selection, Human', null);
    const finSelection = playerSelection.toUpperCase();
    const computerSelection = getComputerChoice(arr);
    console.log( playRound (finSelection, computerSelection) );
    return playRound (finSelection, computerSelection);
}


let human = 0;
let computer = 0;
let invResult;


function outcome() {
let round = game();
if(round === 'YOU WIN!') {
    human++;
} else if (round === 'YOU LOSE!') {
    computer++;
} else {
    invResult = outcome();
}
}



outcome();
outcome();
outcome();
outcome();
outcome();

console.log(`You won ${human} rounds.`);
console.log(`Computer won ${computer} rounds.`);

function smarterBeing() {
    if (human > computer) {
        alert('You win. You are smarter than your computer');
    } else if (computer > human) {
        alert('Your Computer wins. Your computer seems to outsmart you, Human');
    } else {
        alert('DRAW');
    }
}

smarterBeing();