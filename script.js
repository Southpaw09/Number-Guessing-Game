'use strict';

let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 20;
let topScore = 0;
const actualScore = document.querySelector('.score');
const highScore = document.querySelector('.high-score');
const message = document.querySelector('.message');
const check = document.querySelector('.check');

check.addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);    
    if(!guess){
        message.textContent = `No guess!`;
        highScore.textContent = `High Score : ${topScore}`;
    }

    else if(guess === secretNumber){
        score++;
        message.textContent = `Correct guess!!`;
        actualScore.textContent = `Score : ${score}`;
        
        if(score>topScore){
            topScore = score;
            highScore.textContent = `High Score : ${topScore}`;
        }
    }

    else if(guess != secretNumber){
        if(guess<secretNumber){
            score--;
            message.textContent = `Please guess higher!`;
            actualScore.textContent = `Score : ${score}`;
        }
        if(guess>secretNumber){
            score--;
            message.textContent = `Please guess lower!`;
            actualScore.textContent = `Score : ${score}`;
        }
        highScore.textContent = `High Score : ${topScore}`;
    }
})