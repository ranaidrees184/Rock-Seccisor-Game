let playerText=document.querySelector("#playerText");
let computerText=document.querySelector("#computerText");
let resultText=document.querySelector("#resultText");
const choicebtn=document.querySelectorAll(".button");
let player;
let computer;
let results;

choicebtn.forEach(button => button.addEventListener("click", ()=>{
    player=button.textContent;
    computerTurn();
    playerText.textContent=`Player : ${player}`;
    computerText.textContent=`Computer : ${computer}`;
    resultText.textContent=checkWinner();

}))

function computerTurn(){
    let random =Math.floor(Math.random()*3)+1;

    switch(random)
    {
        case 1:
            {
             computer="Rock";
            break;
        }
        case 2:
               { 
                computer="Paper";
                break;
            }
        case 3:
         {
            computer="Scissor";
           break;
        }           
                    
    }
}

function checkWinner()
{
    if(player == computer)
       { 
        return "Result :Draw!!!";
    }
     else if(computer == "Rock")
    {
        return(player=="Paper")?"Result :You Win!!!!":"You Lose";
    }
    else if(computer == "Paper")
    {
        return(player=="Scissor")?"Result :You Win!!!!":"Result :You Lose" ;
    }
    else if(computer == "Scissor")
    {
        return(player=="Rock")?"Result :You Win!!!!":"Result :You Lose" ;
    }
   
}


