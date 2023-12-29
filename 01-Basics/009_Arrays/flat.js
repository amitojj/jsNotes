const arr2 = [0, 1, [2, [3, [4, 5]]]];

//flatten the array to specified depth default depth is 1
console.log(arr2.flat());
console.log(arr2.flat(2));
console.log(arr2.flat(Infinity));


//removes empty elements
const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]


const array2 = [1, , 3, ["a", , ["d", , "e"]]];
console.log(array2.flat()); 
console.log(array2.flat(2)); 