//'click' event listener to produce playerSelection
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound ) );


//generate computer selection
function getComputerChoice() {
   const arr = ['ROCK', 'PAPER', 'SCISSORS']; 
   const randNum = Math.floor(Math.random() * 3);
   const choice = arr[randNum];
   return choice;
};

//variables
let playerSelection;
let computerSelection;
let result;
let human = 0;
let computer = 0;
let draw = 0;
let roundCount = 0;
 
//round winner algorithm to determine round winner
function playRound(e) {
    playerSelection = e.srcElement.className;
    computerSelection = getComputerChoice();
    
    const comBine = playerSelection + ' ' + computerSelection;

    switch(comBine) {
        case 'ROCK SCISSORS':
        case 'PAPER ROCK':
        case 'SCISSORS PAPER':
            result = 'YOU WIN THIS ROUND!';
            break;    
        case 'ROCK ROCK':
        case 'PAPER PAPER':
        case 'SCISSORS SCISSORS':
            result = 'DRAW. Play this round again';
            break;
        case 'ROCK PAPER':
        case 'PAPER SCISSORS':
        case 'SCISSORS ROCK':
            result = 'YOU LOSE THIS ROUND!';    
            break;
        default:
            result = `${playerSelection} IS INVALID, PICK AGAIN`;

    };
    
    dispRound();
    countRounds();
    announceWinn();

    return;
};

 //display round details
function dispRound() {
    const fstSelct = document.querySelector('.fSelection');
    fstSelct.textContent =`Your Selection : ${playerSelection}`;

    const scdSelct = document.querySelector('.sSelection');
    scdSelct.textContent =`Computer's Selection : ${computerSelection}`;

    const trdSelct = document.querySelector('.tSelection');
    trdSelct.textContent =`Round Result : ${result}`;
};

//update scoreboard
function countRounds() {
    roundCount++;
    const rnd = document.querySelector('.round');
    rnd.textContent = `ROUND : ${roundCount}`;

    if(result === 'YOU WIN THIS ROUND!') {
        human++;
        const you = document.querySelector('.human');
        you.textContent = `HUMAN : ${human}`
        
    } else if(result === 'YOU LOSE THIS ROUND!') {
        computer++; 
        const ai = document.querySelector('.computer');
        ai.textContent = `COMPUTER : ${computer}`;
    } else {
        draw++;
        const equal = document.querySelector('.draw');
        equal.textContent = `DRAWS : ${draw}`
    }
};

//announce winner
function announceWinn() {
    if(human === 5) {
        const ance = document.querySelector('h1');
        ance.textContent = 'YOU WIN!, YOU ARE SMARTER';
        alert('You Won,  Refresh to play Again');
    } else if (computer === 5) {
        const ance = document.querySelector('h1');
        ance.textContent = 'COMPUTER WINS!, YOUR COMPUTER OUTSMARTS YOU';
        alert('You Lost, Refresh to play Again');
    } else {
        return;
    }
};
    
