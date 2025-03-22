"use strict"
let guess = document.querySelector(".message");
// guess.innerHTML = "🎉Correct Number!"
// let mynumber = document.querySelector(".number");
// mynumber.innerHTML = 13;
// let myguess = document.querySelector(".guess");
// myguess.value = 20;

let mycheck = document.querySelector(".check");
const number = Math.trunc(Math.random()* 20 ) +1;
let mynumber = document.querySelector(".number");
mynumber.textContent = number;
let score = 20;
let myscore =document.querySelector(".score");
// let mybody = documnent.querySelector(".myback");
mycheck.addEventListener("click", () =>{
//    console.log(document.querySelector(".guess").value)
let myguess = Number(document.querySelector(".guess").value)

if(!myguess){
    guess.innerHTML = "⛔No Number!!!"
    
}else if (myguess === number){
    guess.innerHTML = "🎉Correct Number!!!"
    document.style.backgroundColor = "green"
}else if (myguess > number){
    if (score > 1) { guess.innerHTML = "🌴Too High!"
    score = score - 1;
    myscore.textContent = score}
    else{
        guess.innerHTML = "You lost the game!!!"
        myscore.textContent =0;
    }
}else if (myguess < number){
    if (score > 1 ) { guess.innerHTML = "🌴Too Low!"
    score = score - 1;
    myscore.textContent = score
}else{
    guess.innerHTML = "You lost the game!!!"
    myscore.textContent =0;

}
    
}
   
});