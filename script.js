
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
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


function playRound(humanSelection, computerSelection){
    let humanSelectionFixed = humanSelection.toUpperCase();
    console.log(humanSelectionFixed);
    if ((humanSelectionFixed === 'paper') && (computerSelection === ROCK) ){
        humanScore++;
        console.log('You won! '+humanSelectionFixed+' beats '+computerSelection);
    } else if ((humanSelectionFixed === 'scissors') && (computerSelection === PAPER) ){
        humanScore++;
        console.log('You won! '+humanSelectionFixed+' beats '+computerSelection);
    } else if ((humanSelectionFixed === 'rock') && (computerSelection === SCISSORS) ){
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

    

    playRound(getHumanChoice(), getComputerChoice());







