// function factorial(...numbers) {
//   return numbers.reduce((acc, num) => acc *num, 1);
// }

// // ─── Array From Number ─────────────────────────────────────────────────── ✣ ─
const num = 7;
const arr = Array.from({ length: num }, (_, Index) => {
  return Index + 1;
});
console.log(arr);

// ─── Reduce ────────────────────────────────────────────────────────────── ✣ ─
console.log(factorial(5));

function factorial(num) {
  return Array.from({ length: num }, (_, index) => index + 1).reduce(
    (acc, num) => acc * num,
    1
  );
}
// ─── Filter ────────────────────────────────────────────────────────────── ✣ ─


const arrOfNum = [17, 65, 54, 52, 51, 32, 31, 30, 29, 78];

let evenNums = arrOfNum.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNums);
