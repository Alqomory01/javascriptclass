'use strict';

// console.log(document.querySelector('.message') .textContent);
// This is called DOM Manipulation
// document.querySelector('.message') .textContent = 'correct number';

// document.querySelector('.number') .textContent = 12;
// document.querySelector('.score') .textContent = 30;
// document.querySelector('.guess') .value = 15;
// console.log(document.querySelector('.guess') .value = 15);

// document.querySelector('.check') .addEventListener ('click', function(){
//    const guess = document.querySelector('.guess') .value;
//     console.log(guess, typeof guess);
//     if(!guess){
//         document.querySelector('.message') .textContent = '⛔ No number';
//     }
// } );

// Implementing the game logic
const number = Math.trunc(Math.random() * 30 ) + 1
let score = 30;
console.log(number);
document.querySelector('.number') .textContent = number

document.querySelector('.check') .addEventListener ('click', function(){
    const guess = Number(document.querySelector('.guess') .value);
     console.log(guess, typeof guess);
     if(!guess){
         document.querySelector('.message') .textContent = '⛔ No number';
     }else if(guess === number){
        document.querySelector('.message') .textContent = 'Correct Number';
     }else if (guess > number){
        if(score > 1){
        document.querySelector('.message') .textContent = 'Too High';
        score = score - 1;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message') .textContent = 'you lost the game'
        }
     }else if (guess < number){
        if (score > 1){
        document.querySelector('.message') .textContent = 'Too low';
        score = score - 1;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message') .textContent = 'You Lost The Game'
    }
    }
 } );