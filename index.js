//outputing data
// alert('hello World');
confirm("which programming language are you leaning now");
console.log("This is javascript class");
// let
// const
// var
// let mynumber = 30;
// console.log(mynumber);
// const numb = 15;
// console.log(numb);

// console.log(numb + mynumber);
// console.log(mynumber - numb);
// let firstNumber = parseInt(prompt("Enter Your First Number"));
// let secondnumber = parseInt(prompt("Enter Your Second Number"));
// newnumber = firstNumber + secondnumber

// console.log(newnumber);
// console.log(firstNumber + " " + secondNumber);
// console.log(`${firstNumber} + ${secondnumber}`);

// alert('Enter your second number')
// let number= input()
// let secondNumber = prompt("Enter your second Number");
// console.log(firstNumber + secondNumber);
// console.log("hello world");
// var num1 = 18
// var num1 = 20
// console.log(num1);
// const num1 = 20
// console.log();
// var num2 = 16;
// ++num2
// console.log(num2);

// Creating a program This is a programming class
// let firstName = prompt("Enter your first name: ");

// let secondName = prompt("Enter your second name: ");
// console.log(firstName, secondName);

// concatenation

// console.log("my name is" + " " + firstName + " " + secondName);
// Template literals
// console.log(`my name is ${firstName} ${secondName}`);

// let num1 = parseInt(prompt("Enter your first number"));
// let num2 = parseInt(prompt("Enter your second number"));
// console.log(num1 + num2);

// create a program that check the name, the age, the place and country of a person and print out in the console
//  let myname = prompt("Enter your full name");
//  let age = prompt("Enter your age");
//  let place = prompt("Enter your place");
//  let country =prompt("Enter your country");

//  console.log(`my name is ${myname} i am ${age} years old i stayed in ${place} and my country is ${country}`);

// datatypes
// strings
let mynew = " Nigeria";
let address = "47 herbert macauly Road University Road Akoka Lagos State";
// console.log(typeof address);
// console.log(address.replace("Lagos", "ogun"));
// console.log(address.slice(3)); /* slice is more like removing*/
// console.log(address.length);   /* this tells us the number of alphabet there*/
// console.log(address.split(' ').reverse().join(' '));
// console.log(address.split(' ').reverse().join(' '));
// console.log(address.indexOf('e'));
// console.log(address.concat(mynew)); /* this will add nigeria to it */
// console.log(address.includes('herbert'));
// console.log(address.toLowerCase());
// console.log(address.toUpperCase());

// number
let num = 100;
console.log(typeof num);
// console.log(num.toFixed(3));
// console.log(num.toPrecision(3));
// console.log(num.toExponential(4));

// Boolean (true or false)
// let num1 = 10;
// let num2 = 20;
// console.log(num1 > num2);
//ternary operators
// console.log(num1 >= 20 ? 'welcome': 'get out');

// let colors =['yellow', 'blue', 'green', 'pink'];
// console.log(colors);
// let mycolors = colors.pop()
// console.log(mycolors)
// colors.pop()
// console.log(colors.pop());
// console.log(colors.shift());
// colors.unshift('purple') /* add purple to the front*/
// colors.push('green')    /* add green to the back*/
// console.log(colors);
// colors.shift();         /* remove from the front*/
// colors.pop();          /* remove from the back*/
// console.log(colors);

let employee1 = [
  {
    name: "John",
    age: 10,
    state: "Lagos",
    country: "Nigeria",
  },
  {
    name: "Nancy",
    age: 19,
    state: "Accra",
    country: "Ghana",
  },
  {
    name: "Lucky",
    age: 15,
    state: "Newyork",
    country: "USA",
  },
  {
    name: "Emeka",
    age: 16,
    state: "berlin",
    country: ["Germany", "Japan", "canada"],
  },
];
// console.log(employee1[2]["name"]);
// employee1[3]["state"] = "canada";
// console.log(employee1);
// employee1.pop();
// console.log(employee1);
// object
// let person = {
//   name: "Emeka",
//   age: 16,
//   state: "berlin",
//   country: ["Germany", "Japan", "canada"],
// };
// person["email"] = "komo2success21@gmail.com";
// person.gender = "male";
// console.log(person);

// turple       /* turple are immutable data types
// let score = (10, 20, 50, 20);
// console.log(score);

// operators
// Arithmetic operators + - * / ** += -=
// let num1 = 10;
// let num2 = 20;
// console.log(num1 - num2);
// console.log(num1 / num2);
// console.log(num1 ** 2);
// console.log((num1 += num2));
// console.log((num1 -= num2));

// Logical Operators != && || >= <= % = modulus=remainder
// let agee = 20;
// let country= 'Nigeria';
// if(agee > 20 && country == 'Nigeria'){
//     console.log('You can vote');
// }else{
//     console.log('you cannot vote');
// }

// let number = 10;
// let number1 = '10';
// console.log(number == number1);
// console.log(number === number1);

let num11 = 21;
let num22 = 11;
console.log(num11 % num22);

// if(condition){
//     result                                     if (shade >=18 && shade == 'ogun state'){

// console.log('you can vote');
// }else{
//   console.log('Dont');
// }

// }else if (condition){
//     result
// }else{
//     result
// }

// let scoreOne = 'A'
// scoreOne.toLowerCase
// if ((scoreOne)=='A'){
//     console.log("Excellent");
// } else if(scoreOne=='B'){
//     console.log("Verygood");
// }else if (scoreOne=='C'){
//     console.log("Credit");
// }else if (scoreOne == 'D'){
//     console.log("Fair");
// } else if (scoreOne='E'){
//     console.log("unfair");
// }else{
//     console.log('Unknown Result');
// }
  // let anuScore = String(prompt("Enter your grade: "));
  // anuScore = anuScore.toLowerCase();
  // switch(anuScore){
  //   case "b":
  //     console.log("Second");
  //     break;
  //   case "c":
  //     console.log("Third");
  //     break;
  //   case "d":
  //     console.log("Fourth");
  //     break;
  //   default:
  //     console.log("unknown score")
  // }
// let scoreTwo = "B";
// scoreTwo = scoreTwo.toLowerCase
// switch (true) {
//   case scoreTwo == "A":
//     console.log("First");
//     break;
//   case scoreTwo == "B":=
//     console.log("Second");
//     break;
//   case scoreTwo == "C":
//     console.log("Third");
//     break;
//   case (scoreTwo == "D"):
//     console.log(Fourth);
//     break;
//   case (scoreTwo == "E"):
//     console.log(Last);
//     break;
//   default:
//     console.log("Unkown");
// }
// while loop
// let x = 0;      //initialize
// while (x <= 10){        //condition
//     x = x += 1
//     console.log(x);

// }n
// for loop
// for (let x = 0; x <= 10; x++) {
//   console.log(x);
// }
let employee2 = [
  {
    name: "John",
    age: 10,
    state: "Lagos",
    country: "Nigeria",
  },
  {
    name: "Nancy",
    age: 19,
    state: "Accra",
    country: "Ghana",
  },
  {
    name: "Lucky",
    age: 15,
    state: "Newyork",
    country: "USA",
  },
  {
    name: "Emeka",
    age: 16,
    state: "berlin",
    country: ["Germany", "Japan", "canada"],
  },
];
for (let i of employee2) {
  console.log(i["name"]);
  console.log(i.country);
}
let people = [];
for (let i of employee2) {
  people.push(i);
  console.log(people);
  console.log(employee2);
}
// 1 let word = " Javascript is very easy programming language"
// In the word above,
// i)reverse the in the variable word
// ii) change the word programming to syntax
// iii) join the statement "It is an interesting program i would like to learn better" to the world
// iv) bring out only javascript in the word above
// v) what is the index of e in the language
// 2) create a program that takes in two values and its operators such that if 5 and 4 is entered it should print out 5 + 4 = 9
// 3) Create a program that calculate the income of an individual after tax if the tax is 30%
// 4)create amultiplication using while loop and for loop
// 5)generate numbers from 1 to 20 if number is divisible by 2 it should show fizz in your console and if the number is divisible by 5 it should show fissbuzz in your console
// 6) let training = ["tech", "school", "teacher", university", "software", "traiming"]
// in the question above bring out word that start with t
// ogun efu
// Solution
// let word = "Javascript is very easy programming language";
// console.log(word.split(' ').reverse().join(' '));
// console.log(word.replace('programming', 'syntax'));
// interest ='It is an interesting program i would like to learn better'
// console.log(word.split(' ').concat(interest));
// console.log(word.slice(0, 11));
// let lan = 'language'
// console.log(lan.indexOf('e'));

// let chan = parseInt(prompt("Give me a number: "));
// let dan = parseInt(prompt("Give me another number: "));
// let oper = (prompt("Give me an operator: "));

// switch(oper){
//   case "+":
//     console.log(`the answer is ${chan + dan}` );
//     break;
//   case "-":
//     console.log(chan - dan);
//     break;
//   case "*":
//     console.log(chan * dan);
//     break;
//   case "/":
//     console.log(chan / dan);
//     break;
//   case "**":
//     console.log(chan ** dan);
//     break;
//   case "%":
//     console.log(chan % dan);
//     break;
//   default:
//     console.log("Error");
// }
// let income = prompt('What is your monthly income? ')
// monthlyIncome = 0.3 * income
// console.log(`your monthly income is ${monthlyIncome}`);
// console.log('Thank you');

// number = parseInt(prompt("Enter a number: "));
// let i = 1
// while (i<=12) {
//   i = i + 1;
//   result = number * i
//   console.log(`${number} * ${i} = ${result}`);
// }
//  number = parseInt(prompt('Enter a number'))
//  let i =1
// while(i<=12){
// i++;
// result = number * i
// console.log(`${number} * ${i} = ${result}`)
// }

// let number2 = 3;
// for (let i = 1; i <= 12; i++) {
//   mark = number2 * i;
//   console.log(`${number2} * {i} = ${mark}`);
// }

// const numb = Math.trunc(Math.random()*20);
// console.log(numb);
// if(numb % 2 == 0 ){
//   console.log("fuzz");
// }
//  else if (numb % 5 == 0){
// console.log("fizzfuzz");
// } else{
// console.log("error");
// }
/*
let training = ["tech", "school", "teacher", "university", "software", "traiming"]
for (let i = 0; i<training.length; i++){
let words = training[i];
if (words.startsWith('t'))
console.log(words);
}
for (let i of training){
  if(i[0]=='t' || i[0] == 'T'){
    console.log(i);
  }
}
*/
// Function

// function greeting (){
//   console.log('welcome');
// }
// greeting()

// Function
// function logger(){
//   console.log('welcome');
// }
// logger()
// logger()

// function myphone(battery, airpiece){

// console.log(battery, airpiece )
// const model =`The hours is use my battery on a daily basis is ${battery}hrs and the time i used my airpiece on a daily basis is ${airpiece}hours`
// return model
// }
// const howUsed = myphone(3,4)
// console.log(howUsed);

// function declaration
let presentAge = 2027;
const currentAge = yourAge(1994);
function yourAge(year_of_birth) {
  return presentAge - year_of_birth;
}
const myCurrentAge = yourAge(1994);
console.log(`i found out that my new age is ${myCurrentAge}`);

// function expression
let mAge = 2027;
const myAge = function (year_of_birth) {
  return mAge - year_of_birth;
};
const preciseAge = myAge(1995);
console.log(currentAge, preciseAge);
// Arrow function
const my_Age = (year_of_birth) => 2027 - year_of_birth;
const newage = my_Age(1996);
console.log(` the new age is ${newage}`);

const my__Age = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  console.log(`the current age is ${age}`);
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement}'s age`;
};
const nage = my__Age(1996, "komo");
console.log(nage);

const new_class = (student) => {
  return student * 5;
};
const my_class = (mystudent, yourstudent) => {
  const newmstudent = new_class(mystudent);
  const newystudent = new_class(yourstudent);
  return ` my new student is ${newmstudent} which is more than ${newystudent} which is your student`;
};
console.log(my_class(125, 25));

// Arrays: This allows you to varible to be used ater in the future

const friends = ["Micheal", "steven", "debo"];
console.log(friends);
// console.log(friends[0]);
friends[1] = "gbenga";
console.log(friends.length - 1);
console.log(friends);
// challenge
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
const calcTip = function(bill){
 
  return bill >50 && bill < 300? 0.15 * bill: 0.2*bill
}
console.log(calcTip(100));
bill =[125,555,44]
tip = [calcTip(bill
  [0]), calcTip(bill[1]), calcTip(bill[2])]
console.log(tip);
total = [tip[0] + bill[0], tip[1] + bill[1], tip[2] + bill[2]]
console.log(total);

// Objects: This allows you to store related data together. It's like a dictionary in Python.
// Dot & Bracket
const micheal = {
  firstName: "wale",
  lastName: "sheyi",
  age:21,
  job: "teacher"
}

console.log(micheal.firstName);
console.log(micheal['lastName']);

const myStatus =prompt("what can you say about micheal that interest you? choose between firstname, lastname, age and job ")
if (micheal[myStatus]){
  console.log(micheal[myStatus]);
}else{
  console.log(`The option you have chosen from is wrong enter from either firstname,lastname,age or job`)
}
console.log(micheal[myStatus])

const namekey = "Name"
console.log(micheal["first" + namekey])
micheal.location ="senegal";
micheal['twitter']= "@komo2success"
console.log(micheal)

// object methods


const daniel = {
  firstName: "wale",
  lastName: "sheyi",
  age:21,
  job: "teacher",

// calcAge:  function (age){
//   return 51 - age;
// },

calcAge: function(){
  console.log(this)
  return 51 - this.age;
},
calcMyage: function(){
  this.myage = 51 - this.age;
  return this.myage;
}
};
console.log(daniel.calcAge())
console.log(daniel.calcMyage())
// const user = {
//   fname: "Daniel",
//   birthYear: 2000,
//   getAge: function () {
//     return new Date().getFullYear() - this.birthYear;
//   },
//   getSummary: function (){
//     return `${this.fname} is ${user.getAge()} years old `
//   }
// };

// console.log(user.getAge()); // Output: 25 (if the year is 2025)
// console.log(`${fname} is ${user.getAge()} years old`)
// console.log(user.getSummary())

// const user = {
// myName: "pelumi",
// birthYear: 1999,

// getAge: function(){
// console.log("we are here")
// const currentYear  = new Date().getFullYear();
// const curentAge = new Date().getFullYear() - this.birthYear
// console.log(currentYear)
// console.log(curentAge)

// return `${this.myName} is ${currentAge} years old`


// },
// getSummary: function(){
//   return `this is the summary of the user she is ${user.getAge()}`
// }
// }
// user.getAge()
// console.log(user.getAge())
// console.log(user.getSummary())
 person = {
  firstName: "michael",
  lastName: "sheyi",
  age: 21,
  hobbies: ["reading", "writing", "eating"]
 }
 console.log(Object.keys(person))
 console.log(Object.values(person))
 console.log(Object.entries(person))

// console.log();
// function tunde (item){
//   return item * item
// }
// console.log(tunde(10));

// const table = () => {
//   console.log('You are great');
// }
// table()
// const digital_one = (x, y)=> {
//   return x + y
// }
// console.log(digital_one (10, 23))
// setInterval(() =>{
//   console.log('Good Morning');
// }, 9000)
// setTimeout(() => {
//   console.log("Javascript class");

// }, 3000)
// setInterval ( () => {
//   console.log("Good Day")
// }, 4000)

// let mydigit = Math.floor(Math.random(0,10) * 10);
// console.log(mydigit);

// setInterval (()=>{
//   letourdigit = Math.floor(Math.random(0,5) * 3)
//   console.log(letourdigit);
// }, 9000)
// Destructuring of Objects in JavaScript
// Destructuring is a feature in JavaScript that allows us to extract values from objects (or arrays) and assign them to variables in a concise way.

// destructuring
let employee = {
  name: "Doe",
  age:35,
  department: "sales"
};
 let { name, age, department} = employee
 console.log(age)
 let { name:Doe, department: marketing} = employee;
 console.log(name)

// const user = {
//   username: "johndoe",
//   email: "john@example.com"
// };

// Assigning properties to different variable names
// const { username: userName, email: userEmail } = user;

// console.log(userName);  // Output: johndoe
// console.log(userEmail); // Output: john@example.com
// const product = {
//   title: "Laptop",
//   price: 1500
// };
// `stock` is not defined in the object, so it takes the default value
// const { title, price, stock = 100 } = product;

// console.log(title);  // Output: Laptop
// console.log(price);  // Output: 1500
// console.log(stock);  // Output: 100 (default value)
// // Spread Operator
// let week1 = ['monday', 'tuesday', 'wednessday', 'thursday']
// let week2 =['friday', 'saturday']
// totalweek =[week1, ...week2]
// console.log(totalweek);
// function sumAll(...numbers) { 
//   return numbers.reduce((acc, num) => acc + num, 0);
// }
// console.log(sumAll(2,5,7))
let score1 =[10, 40, 25, 36, 70, 77, 53]
console.log(score1.filter((y) => y % 2 ==0));
console.log(score1.reduce((u,v) => u + v ));
// Data transformation
// map create a new brand array
// filter returns a new array containing the array elements that passed aspecified tes condition
// reduce boils all array elements down to a single value
// map method

const movements =[200,450,-400,3000,-650,1300]
for (const movement of movements){
  if (movement >0){
    console.log(`you deposited ${movement}`)
  }else{
    console.log(`you withdraw ${Math.abs(movement)}`)
  }
}
// forEach method
movements.forEach(function(movement){
  if (movement >0){
    console.log(`you deposited ${movement}`)
  }else{
    console.log(`you withdraw ${movement}`)
  }
})
const nairatoUsd =1600
// const movementsUSD = movements.map(function(mov){
// return mov * nairatoUsd
// })
console.log(movements)
// console.log(movementsUSD)
const movementsUSD =movements.map(mov =>mov * nairatoUsd)

const movementsDescription = movements.map((mov, i) =>{
  if(mov >0){
    return `Movement ${i+1}: You Deposited ${mov}`
  }else {
    `Movement ${i+1}: You withdrew ${Math.abs(mov)}`
  }
})
// filter method
const deposits = movements.filter(function(mov){
return mov >0
})
console.log(deposits)
// reduce method
const balance =movements.reduce(function(acc,cur){
return acc + cur
});





function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person1 = new Person("Mike", 25);
console.log(person1.name); // Output: Mike
class Animal {
  constructor(name, sound) {
      this.name = name;
      this.sound = sound;
  }
  speak() {
      console.log(this.name + " says " + this.sound);
  }
}

let dog = new Animal("Dog", "Bark");
dog.speak(); // Output: Dog says Bark

// 1 create a program using a function that allow users to fill in their names(surname and first name)then print
// function fill () {
//   user1 = prompt("Enter your first name: ");
//   user2 = prompt("Enter your second name: ");
//   console.log(user1, user2);
// }
// fill()
// // 2 Use a function to create a calculator
// function calculator (){

// let chan = parseInt(prompt("Give me a number: "));
// let dan = parseInt(prompt("Give me another number: "));
// let oper = (prompt("Give me an operator: "));

// switch(oper){
//   case "+":
//     console.log(chan + dan);
//     break;
//   case "-":
//     console.log(chan - dan);
//     break;
//   case "*":
//     console.log(chan * dan);
//     break;
//   case "/":
//     console.log(chan / dan);
//     break;
//   case "**":
//     console.log(chan ** dan);
//     break;
//   case "%":
//     console.log(chan % dan);
//     break;
//   case "/0":
//     console.log("Math Error");
//   default:
//     console.log("Error");
// }
// }
// calculator()

// create a program that takes in three  vriables the function should detect the bigger and print it out
// function greatestNumber (){
//   shade = parseInt(prompt("Enter a number: "));
//   fola = parseInt(prompt("Enter a number: "));
//   dayo = parseInt(prompt("Enter a number: "));
//   let greatNumber = 0;

//     if(shade > fola && shade > dayo){
//       console.log(shade);
//     }else if(fola > shade && fola > dayo){
//       console.log(fola);
//     }else {
//       console.log(dayo);
//     }
//   }

// greatestNumber()

// let my_dom = document.getElementsByClassName("dom");
// my_dom[0].innerHTML = "Welcome to digital fortres class";

let mydom = document.getElementById("dom");
mydom.innerHTML = "Welcome to my first class at digital fortress class";

let myBackground = document.getElementById("background");
myBackground.style.backgroundColor = "black";
myBackground.style.color = "white"

let newparagraph = document.createElement("h3")
newparagraph.textContent = "We are welcome to this javascript class"
// document.body.appendChild(newparagraph)
document.body.appendChild(newparagraph)
// mydom.textContent = "I will be showing you more on DOM"

// let docu = document.querySelector('.dom')
// docu.innerHTML = "Welcome to digital fortress class"

// let tundel = document.querySelector(".button0");
// let kunle = document.querySelector(".button-");
// let mytunde = document.querySelector(".display");
let mybutton2 = document.querySelector(".button2");

let onTheLight = document.querySelector(".button");
let offTheLight = document.querySelector(".buttonf");
let show = document.querySelector(".mydisplay");

let myincrease = document.querySelector(".buttonincrease")
let mydecrease = document.querySelector(".buttondecrease")
let myshow = document.querySelector('.newdisplay')

let mynumber1 = 0;
// tundex.addEventListener('click', () => {
//   mytunde.innerHTML = ++mynumber
// })
// onTheLight.addEventListener("click", () =>{
//   show.innerHTML = 
// })
myincrease.addEventListener("click", () => {
  myshow.innerHTML = ++mynumber1
})
mydecrease.addEventListener("click", () => {
  myshow.innerHTML = --mynumber1;
})
onTheLight.addEventListener("click", () => {
  show.innerHTML = `<img src='bulb.png' width='240px'>`;
});

// onTheLight.addEventListener("click", () => {
//   show.innerHTML = `< img src="./mybulb.glf">`
// })
offTheLight.addEventListener("click", () => {
  show.innerHTML = `<img src='./mybulb.gif'>`;
})
// tundel.addEventListener("click", () => {
//   mytunde.innerHTML = ++mynumber1;
// });

// kunle.addEventListener("click", () => {
//   mytunde.innerHTML = --mynumber1;
// });

// tundex.addEventListener('click', myname)
// function myname(){
//   mytunde.innerHTML = ++mynumber
// }
// mybutton2.addEventListener('click', sayo)
// function sayo(){
//   mytunde.innerHTML = --mynumber
// }

// tundex.addEventListener('click', () => {
//   mytunde.innerHTML = `<img src='./bulbon.gif'>`
// })
// mybutton2.addEventListener('click', () =>{
//   mytunde.innerHTML = `<img src='./mybulb.gif'>`
// })

// tundel.addEventListener('click', () => {
//   mytunde.innerHTML =`<h2>You are welcome</h2>`
// })
// mybutton2.addEventListener('click', () =>{
//   mytunde.innerHTML = `<h2>Goodbye</h2>`
// })

let ourDigital = ["blue", "red", "green", "yellow", "yellowgreen"];

let tundex = document.querySelector(".button1");
// let mynumbers = 0;

tundex.addEventListener("click", () => {
  let randomColor = getTunde();
  document.body.style.backgroundColor = randomColor;
});
// tundex.addEventListener("click", getTunde);
function getTunde() {
  return ourDigital[Math.floor(Math.random() * ourDigital.length)];
}

const url = "https://restcountries.com/v3.1/all";

const getmyApi = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};
getmyApi();
// .stringify
let myname = localStorage.setItem("tunde", JSON.stringify(employee));

let digital = JSON.parse(localStorage.getItem("tunde"));
console.log(digital);

let newstorage = localStorage.setItem("Storage", JSON.stringify(micheal));
let mystorage = JSON.parse(localStorage.getItem("Storage"));
console.log(mystorage)
// let mystorage = JSON.parse(localStorage.getItem("Storage"))
// console.log(mystorage)
// Object oriented Programming OOp
// class User{ 
//   name = 'emeka';
//   age = 20;
// }
// const user1 = new User()
// console.log(user1.name);

class User {
  constructor(name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;
  }
  greet() {
    return `Mr/Mrs/Miss ${this.name} is ${this.age} years old who is from ${this.state}`;
  }
}
const user1 = new User("emeka", 10, "Lagos");
console.log(user1.greet());
// const mydigital = () => {
//   let digitally =JSON.stringify(localStorage.getItem('tunde'))
// }

// getTunde()

// const checkDogs = function(dogsJulia, dogsKate){
// const dogsJuliaCorrected = dogsJulia.slice(1,3)
// console.log(dogsJuliaCorrected);
// const dogs = dogsJuliaCorrected.concat(dogsKate);
// console.log(dogs);
// dogs.forEach(function(dog, i){
//   if(dog >= 3){
//     console.log(`dog number ${i + 1} is an adult, and is ${dog} years old  `);
//   }else{
//     console.log(`dog number ${i + 1} is still a puppy`);
//   }
// })

// }
// checkDogs( [3, 5, 2, 12, 7],  [4, 1, 15, 8, 3])
// const eurotodollars = 1.1

// const  movements =  [200, 450, -400, 3000, -650, -130, 70, 1300]

// const movementsusd = movements.map(function(mov){
//  return mov * eurotodollars

// })
// console.log(movementsusd);

// const movementsusd1 = movements.map(mov=> mov*eurotodollars);
// console.log(movementsusd1);
