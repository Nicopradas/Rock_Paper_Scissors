
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
    return choice;

}


function playRound(humanSelection, computerSelection){
    let humanSelectionFixed = humanSelection.toUpperCase();
    console.log(humanSelectionFixed);
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
        console.log(humanSelectionFixed+' is the same as '+computerSelection);

    }  else {
        computerScore++;
        console.log('You lose! '+computerSelection+' beats '+humanSelectionFixed);
    }

    
    console.log('Score: '+humanScore+' - '+computerScore);
   
}

    

function playGame(){
    playRound(getHumanChoice(), getComputerChoice());


}

playGame();



