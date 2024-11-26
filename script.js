console.log('Hello World!');

/* 
CREATE VARIABLE "ROCK"
CREATE VARIABLE "PAPER"
CREATE VARIABLE "SCISSORS"

CREATE VARIABLE HUMAN SCORE
CREATE VARIABLE COMPUTER SCORE

CREATE A FUNCTION THAT IS NAME GETCOMPUTERCHOICE
    CREATE A RANDOM NUMBER BETWEEN 0 AND 0.99
    
    IF RANDOM NUMBER IS HIGHER OR EQUAL TO 0 AND LOWER THAN 0.33 RETURNS VARIABLE ROCK
    IF RANDOM NUMBER IS HIGHER OR EQUAL TO 0.33 OR LOWER THAN 0.66 RETURNS VARIABLE PAPER
    IF RANDOM NUMBER IS ANYTHING ELSE, RETURNS VARIABLE SCISSORS


CREATE A FUNCTION THAT IS NAME IS GETHUMANCHOICE 
    CREATE A VARIABLE THAT SOTRES USER INPUT
    RETURN USER INPUT

CREATE A FUNCTION CALLED PLAYROUND WHICH TAKES AS AN ARGUMENTS HUMANCHOICE AND COMPUTERCHOICE
    CREATE VARIABLE THAT PUTS WHATEVER USER INPUTS IN HUMANCHOICE IN CAPITAL LETTERS
    IF COMPUTER CHOICE IS ROCK AND HUMAN CHOICE IS PAPER THEN HUMANSCORE INCREASES BY 1
    IF COMPUTER CHOICE IS PAPER AND HUMAN CHOICE IS SCISSORS THEN HUMANSCORE INCREASES BY 1
    IF COMUTER CHOICE IS SCISSORS AND HUMAN CHOICE IS ROCK THEN HUMANSCORE INCREASES BY 1
    IF COMPUTER CHOICE AND HUMAN CHOICE IS SAME THEN SHOWS TIE!
    EVERYTHING ELSE COMPUTERSCORE INCREASES BY 1



*/
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

let humanScore = 0;
let computerScore = 0;




function getComputerChoice(){
    let randomNumber = Math.random();
    

    if (randomNumber>=0 && randomNumber<0.33){
        return ROCK;
    } else if(randomNumber>=0.33 && randomNumber<0.66){
        return PAPER;
    } else{
        return SCISSORS;
    }
    
}

function getHumanChoice(){

    let choice = prompt('"ROCK" "PAPER" OR "SCISSORS"?¿');
    

}


function playRound(humanSelection, computerSelection){
    let humanSelectionFixed = humanSelection.toUpperCase();
    
    if ((humanSelectionFixed === PAPER) && (computerSelection === ROCK) ){
        humanScore++;
        console.log('You won! '+humanSelectionFixed+' beats '+computerSelection);
    } else if ((humanSelectionFixed === SCISSORS) && (computerSelection === PAPER) ){
        humanScore++;
        console.log('You won! '+humanSelectionFixed+' beats '+computerSelection);
    } else if ((humanSelectionFixed === ROCK) && (computerSelection === SCISSORS) ){
        humanScore++;
        console.log('You won! '+humanSelectionFixed+' beats '+computerSelection);
    } else if (humanSelectionFixed === computerSelection){
        console.log('It is a tie!');

    } else {
        computerScore++;
        console.log('You lose! '+computerSelection+' beats '+humanSelectionFixed);
    }

    console.log(computerSelection);
    console.log(humanSelectionFixed);
    
    console.log('humanscore: '+humanScore);
    console.log('computerscore: '+computerScore);
}

    playRound(getHumanChoice(), getComputerChoice());






