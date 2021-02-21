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
