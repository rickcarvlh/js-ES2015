// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// var:  scoped variables -> function scoped
for (var i = 0; i < 10; i++) {
  console.log("var i: ", i);
}
console.log("var i , outside of for loop:", i);

// another example
{
  var user = "Ryan";
}
console.log(user);

// using let
/*
{
  let letUser = "Ryan";
}
console.log("let: ", letUser);*/

// TEMPLATE LITARALS
let name = "ryan";
let job = "Instructor";

// old
let setence = name + " works at HackerYou as an " + job;
console.log(setence);

// template literals
let namev2 = `Ryan`;
let jobv2 = `Instructor`;
let sentencev2 = `${namev2} works at HackerYou as an ${jobv2}`;
console.log(sentencev2);

// another example
const price = 9.99;
const shipping = 3.99;

const message = `Your total with shipping will be ${price + shipping}`;
console.log(message);

// multi line strings template trings
const multil = `this is a
 multiline string`;
console.log(multil);

const person = {
  name: "Ryan",
  job: "Developer/Instructor"
};

const markup = `
  <div>
    <h2>${person.name}</h2>
    <h2>${person.job}</h2>
  </div>
`;

console.log(markup);

console.log("#######################################");

// ARROW FUNCTIONS

console.log("######## Arrow functions ########");
/**
 * Arrow functions are a new syntax for creating functions in ES2015. This does not replace the function() {}
 * syntax that we know and love, but we will be seeing it more and more as the go-to function syntax.
 */

// first example
const add = (a, b) => {
  return a + b;
};

// lack of the function keyword

console.log(add(2, 3));

// other ways of defining a arrow function
// the returrn is implicit
const add2 = (a, b) => a + b;
console.log(add2(2, 3));

// Arrow functions and functional programming
console.log(" ### Arrow functions and functional programming ### ");

// without arrow fucntions
let numbers = [3, 4, 5, 6, 7, 8];
const doubleNumbers = numbers.map(function(n) {
  return n * 2;
});
console.log("return n * 2 using map: ", doubleNumbers);

// with arrow function
const numberArrow = [3, 4, 5, 6, 7, 8];
const dooublenumbers = numberArrow.map(n => n * 2);
console.log("return n * 2 with arrow function: ", dooublenumbers);

// arrow function the this keyword
// the this keyword doesn't exist outside of the block scope
// example

const personArrow = {
  firstName: "Ryan",
  hobbies: ["Robots", "Games", "Internet"],
  showHobbies: function() {
    this.hobbies.forEach(hobby => {
      console.log(`${this.firstName} likes ${hobby}`);
    });
  }
};
personArrow.showHobbies();

console.log("### Spread operators ####");

// old way
let numbersSpread = [39, 25, 90, 123];
let max = Math.max.apply(null, numbersSpread);
console.log("max: ", max);

let numbersSpread2 = [39, 25, 90, 123];
let max2 = Math.max(...numbersSpread2);
console.log("spread max: ", max2);

// using the spread operator
let numbersArray1 = [3, 4, 5, 7, 8];
let numbersArray2 = [9, 6, 10, 11];
let concatArray = [...numbersArray1, ...numbersArray2];
console.log(concatArray);

console.log("#### Rest parameters ####");

/**
 * The spread operator allows us to pass an array of arguments into a function.
 * On the flip side of that, rest parameters allows us to gather the parameters passed to our functions! Just like the spread operator the rest parameter syntax also involves the ... at the beginning of a variable name.
 */

// without rest parameters
console.log("-- without rest parameteres --");
const addRest = function() {
  const numbersRest = Array.prototype.slice.call(arguments);
  return numbersRest.reduce((a, b) => a + b);
};
console.log(addRest(2, 3, 4, 5, 6, 7));

console.log("-- with rest parameteres --");

/**
 * Rest parameters create an actual array from the arguments passed to a function, so we can use methods like .reduce on it.
 * This allows us the freedom to perform similar tasks much easier!
 *
 */
const addRest2 = function(...numbers) {
  return numbers.reduce((a, b) => a + b);
};
console.log(addRest2(2, 3, 4, 5, 6, 7));
