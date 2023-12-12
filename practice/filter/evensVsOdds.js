// ─── Using For Loop ────────────────────────────────────────────────────── ✣ ─
// function availableSpots(arr, num) {
//   /**
//    * - check odd even for number.
//    * - loop through array  start at index 1  check element at index i-1 and i  and compare even odd of both with num
//    */
//   let spots = 0;
//   for (let i = 0; i < arr.length-1; i++) {
//     if (arr[i] % 2 == num % 2 || arr[i+1] % 2 == num % 2) {
//       spots++;
//     }
//   }
//   return spots;
// // }

// ─── Using Filter ──────────────────────────────────────────────────────── ✣ ─
// function availableSpots(arr, num) {
//   const spots = arr.filter((element, index) => {
//     if (index === arr.length - 1) return false;
//     return element % 2 === num % 2 || arr[index + 1] % 2 === num % 2;
//   }).length;
//   return spots;
// }
// ─── Using Reduce ──────────────────────────────────────────────────────── ✣ ─
function availableSpots(arr, num) {
  const spots = arr.reduce((count, element, index) => {
    if (index === arr.length - 1) return count;
    return element % 2 === num % 2 || arr[index + 1] % 2 === num % 2
      ? count + 1
      : count;
  }, 0);
  return spots;
}


let result = availableSpots([0, 4,12, 8], 12);
console.log(result);