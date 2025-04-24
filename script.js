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
   
});\

const p =document.querySelector(".p");
p.textContent = `my name is jolade`;
alert("Text Set!");
p.style.color = "red";

// const p = document.querySelector(".p");
// setTimeout(function(){
//     p.textContent = `My name is jola alade`
// }, 5000)
// p.style.color = "red";
// Asynchornous is a non-blocking
// Execution doesn't wait for an asynchronous task to finsih its work
// Application Programming Interface: piece of software that can be used by another 
// piece of software, in order to allow applications to talk to each other
// DOM API
// Geolocation API
// Own class API
// online API :Application running on a server that receives requests for data, and sends dtat back as response;
// we can use Third party APi
// it is a data form which is widely used to transmit data from the web most data this days used the json format
// https://countries-api-836d.onrender.com/countries/
