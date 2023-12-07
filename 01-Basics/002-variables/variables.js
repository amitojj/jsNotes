// Variables - let
// Constants - const

let userEmail = "hitesh@hc.com"
const password = "123"

// password = "11122" not allowed

console.log(password);

const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
let accountState;
accountCity = "Jaipur"; //not a good way
console.log(accountCity);

// accountId = 2 // not allowed

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);