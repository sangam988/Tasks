'use strict'
let secretNumber=Math.trunc(Math.random()*20)+1;
let score =20;
let highScore=0;
document.querySelector('.check').addEventListener('click',function(){
    let guess= Number (document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = '🚫 No number ';
    }
    else if(guess === secretNumber){ 
        document.querySelector('.message').textContent="🎉🎉 correct number";  
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent=secretNumber;
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;

        }
    }
    else if(guess!==secretNumber){
        if(score>1){
            document.querySelector('.message').textContent=guess>secretNumber?"Too high ⬆️":"Too low ⬇️";
            score--;
                document.querySelector('.score').textContent=score;
                }
                else{
                    document.querySelector('.message').textContent="You lost the game"; 
                    document.querySelector('.score').textContent=0;
                }
        }
    }

// if guess is too high--->
    // else if(guess > secretNumber){
    //     if(score>1){
    //     document.querySelector('.message').textContent="Too high ⬆️";
    // score--;
    //     document.querySelector('.score').textContent=score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent="You lost the game"; 
    //         document.querySelector('.score').textContent=0;
    //     }
    // }
    // if guess is too low---->
    // else if(guess < secretNumber){
    //     if(score>1){
    //     document.querySelector('.message').textContent= "Too low ⬇️";
    //     score--;
    //     document.querySelector('.score').textContent=score;
    // }
    // else{
    //     document.querySelector('message').textContent="You lost the game";
    //     document.querySelector('.score').textContent=0;
    // }
// }
//    }
   );
   document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.score').textContent= score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').textContent='';
    document.querySelector('.number').style.width='15';
   })