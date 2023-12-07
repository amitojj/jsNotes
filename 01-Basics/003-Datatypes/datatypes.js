// Primitive (STACK)
// ----------------------------------------------------------------
const firstname = "Sathvik";
// Number
const age = 20;
const score = 200.9;
// Boolean
let isLoggedIn = false;
// Null;
const nodeVersion = null;
// Undefined;
let bankBalance = undefined;
// Symbol;
const buttonId = Symbol("id");
// BigInt;
const aReallyLongNumber = 900713344232343n;
// ----------------------------------------------------------------


// Reference (Non-primitive) - Objects (HEAP)
// ----------------------------------------------------------------

// Arrays;
const numbers = [1, 2, 3, 4, 5];
const heroes = ["superman", "batman", "flash", true, 123];
// Objects;
const userObject = {
  name: "hitesh",
  age: 20,
  isLoggedIn: true,
};

//function
const sayHello = function () {
  console.log("hitesh");
};

const registerAUser = function () {};
const loginUser = function () {};


// ───────────────────────────────────────────────────────────────────────── ✣ ─
console.log(typeof undefined); // undefined

console.log(typeof null); // object