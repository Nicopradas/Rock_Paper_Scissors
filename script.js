console.log('Hello World!');

/* 
PSEUDOCODE OF GetComputerChoice:
CREATE A FUNCTION THAT IS NAME GETCOMPUTERCHOICE
    CREATE A RANDOM NUMBER BETWEEN 0 AND 0.99
    CREATE VARIABLE "ROCK"
    CREATE VARIABLE "PAPER"
    CREATE VARIABLE "SCISSORS"
    IF RANDOM NUMBER IS HIGHER OR EQUAL TO 0 AND LOWER THAN 0.33 RETURNS VARIABLE ROCK
    IF RANDOM NUMBER IS HIGHER OR EQUAL TO 0.33 OR LOWER THAN 0.66 RETURNS VARIABLE PAPER
    IF RANDOM NUMBER IS ANYTHING ELSE, RETURNS VARIABLE SCISSORS
*/

function getComputerChoice(){
    let randomNumber = Math.random();
    const ROCK = 'ROCK';
    const PAPER = 'PAPER';
    const SCISSORS = 'SCISSORS';

    if (randomNumber>=0 && randomNumber<0.33){
        return ROCK;
    } else if(randomNumber>=0.33 && randomNumber<0.66){
        return PAPER;
    } else{
        return SCISSORS;
    }
}



console.log(getComputerChoice());
