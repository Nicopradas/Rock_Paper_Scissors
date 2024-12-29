
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let humanScore = 0;
let computerScore = 0;

rock.addEventListener('click',()=>{
    playRound(rock.id,getComputerChoice());

});
paper.addEventListener('click',()=>{
    playRound(paper.id,getComputerChoice());

});
scissors.addEventListener('click',()=>{
    playRound(scissors.id,getComputerChoice());
});




function getComputerChoice(){
    let randomNumber = Math.random();
    

    if (randomNumber>=0 && randomNumber<0.33){
        return 'rock';
    } else if(randomNumber>=0.33 && randomNumber<0.66){
        return 'paper';
    } else{
        return 'scissors';
    }
    
}


function playRound(humanSelection, computerSelection){
    
    if ((humanSelection === 'paper') && (computerSelection === 'rock') ){
        humanScore++;
        console.log('You won! '+humanSelection+' beats '+computerSelection);
    } else if ((humanSelection === 'scissors') && (computerSelection === 'paper') ){
        humanScore++;
        console.log('You won! '+humanSelection+' beats '+computerSelection);
    } else if ((humanSelection === 'rock') && (computerSelection === 'scissors') ){
        humanScore++;
        console.log('You won! '+humanSelection+' beats '+computerSelection);
    } else if (humanSelection === computerSelection){
        console.log('It is a tie!');
        console.log(humanSelection+' is the same as '+computerSelection);

    }  else {
        computerScore++;
        console.log('You lose! '+computerSelection+' beats '+humanSelection);
    }

    
    console.log('Score: '+humanScore+' - '+computerScore);
   
}

    

   

