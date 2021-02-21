// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// var: block scoped variables -> function scoped
for (var i = 0; i < 10; i++) {
  console.log("var i: ", i);
}
console.log("var i:", i);
