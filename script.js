console.log('Hello World!');

/* 
CREATE VARIABLE "ROCK"
CREATE VARIABLE "PAPER"
CREATE VARIABLE "SCISSORS"


CREATE A FUNCTION THAT IS NAME GETCOMPUTERCHOICE
    CREATE A RANDOM NUMBER BETWEEN 0 AND 0.99
    
    IF RANDOM NUMBER IS HIGHER OR EQUAL TO 0 AND LOWER THAN 0.33 RETURNS VARIABLE ROCK
    IF RANDOM NUMBER IS HIGHER OR EQUAL TO 0.33 OR LOWER THAN 0.66 RETURNS VARIABLE PAPER
    IF RANDOM NUMBER IS ANYTHING ELSE, RETURNS VARIABLE SCISSORS


CREATE A FUNCTION THAT IS NAME IS GETHUMANCHOICE THAT TAKES ONE VALUE AS AN ARGUMENT
    IF THE VALUE IS ROCK RETURN PAPER
    ELSE IF THE VALUE IS PAPER RETURN SCISSORS
    IF THE VALUE IS SCISSORS  RETURN ROCK
    IF THE VALUE IS ANYTHING ELSE RETURN AN ALERT IT HAS TO BE ROCK PAPER OR SCISSORS

*/
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

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
    if (choice === ROCK){
        return PAPER;
    } else if (choice === PAPER){
        return SCISSORS;
    } else if (choice === SCISSORS){
        return ROCK;
    } else {
        return alert('It has to be ROCK PAPER OR SCISSORS');
    }

}

console.log(getHumanChoice());


