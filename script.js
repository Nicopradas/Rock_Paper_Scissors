
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const score = document.querySelector('#score');
const message = document.querySelector('#message');


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
        message.textContent=('You won! '+humanSelection+' beats '+computerSelection);
    } else if ((humanSelection === 'scissors') && (computerSelection === 'paper') ){
        humanScore++;
        message.textContent=('You won! '+humanSelection+' beats '+computerSelection);
    } else if ((humanSelection === 'rock') && (computerSelection === 'scissors') ){
        humanScore++;
        message.textContent=('You won! '+humanSelection+' beats '+computerSelection);
    } else if (humanSelection === computerSelection){
        message.textContent=(('It is a tie! ')+humanSelection+' is the same as '+computerSelection);

    }  else {
        computerScore++;
        message.textContent=('You lose! '+computerSelection+' beats '+humanSelection);
    }

    
    score.textContent= ('Score: '+humanScore+' - '+computerScore);
   
    if (humanScore == 5 || computerScore == 5){
        announceWinner(humanScore,computerScore);
        humanScore=0;
        computerScore=0;
        score.textContent= ('Score: '+humanScore+' - '+computerScore);

    }
}

    
function announceWinner(humanScore, computerScore){
    const winner = document.createElement('p');
    if (humanScore == 5){
        winner.textContent = 'WINNER IS HUMAN!';
        message.appendChild(winner);
    } else if (computerScore == 5) {
        winner.textContent = 'WINNER IS COMPUTER!';
        message.appendChild(winner);
    }
}
   

