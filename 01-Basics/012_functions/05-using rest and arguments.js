// rest operator ... treats all arguments as an array

function sum(...a) {
  let sum = 0;
  if (a.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < a.length; i++) {
      sum += a[i];
    }
    return sum;
  }
}

console.log(sum(1, 2, 4, 9, 1, 2));

// ─── Or ────────────────────────────────────────────────────────────────── ✣ ─
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 4, 9, 1, 2)); // Output: 19

// ─── Or ────────────────────────────────────────────────────────────────── ✣ ─

function addNumbers() {
  // no parameters passed in the function
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    // i denotes index of array 0-based
    result = result + arguments[i];
  }
  return result;
}

// variable arguments
console.log(addNumbers(9, 1, 2));
console.log(addNumbers(7, 1, 2, 0, 1));
console.log(addNumbers());
