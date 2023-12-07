// ─── Array From ────────────────────────────────────────────────────────── ✣ ─
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({ name: "hitesh" })); // interesting an object is not  array like iterable usually see exception ahead

const user = {
  username: "hc",
  "first Name": "hitesh",
  name: "hitesh",
  email: "h@hc.com",
  age: 20,
  isAdmin: false,
  isLoggedIn: true,
  tea: ["lemon", "peach", "ginger"],
  address: {
    city: "Jaipur",
    state: "Rajasthan",
  },
};
console.log(Array.from(user));
console.log(Array.from([user]));

const numbr = 6;
console.log(Array.from({ length: numbr })); // interesting here it  converts to arrAY OF LENGTH 6

/* 
it's a nuanced point worth clarifying. You're right that objects are not iterable by default, and you generally cannot create an array directly from an object using Array.from unless the object has an iterable structure (like an array-like object).

The { length: n } object is treated as an array-like object. While it's true that objects, in general, are not iterable, some methods like Array.from or the spread syntax ([...obj]) can work with array-like objects.

In JavaScript, an array-like object is an object that has a length property and indexed elements. The Array.from method recognizes this structure and can create an array from it. It essentially treats the object as if it were an array with indices ranging from 0 to length - 1.

So, the key point here is that { length: n } is not a regular object; it's structured in a way that mimics the basic structure of an array (with a length property). It's this specific structure that allows Array.from to create an array from it.

It's a unique use case where Array.from leverages the array-like structure of the object to create an array. If the object lacked the necessary array-like structure (e.g., if it didn't have a length property), this approach wouldn't work.
*/
const arrayLikeObject = { length: 3, 0: 'a', 1: 'b', 2: 'c' };
const newArray = Array.from(arrayLikeObject);

console.log(newArray); 



// ─── Array From Number ─────────────────────────────────────────────────── ✣ ─
const num = 7;
const arr = Array.from({ length: num }, (_, Index) => {
  return Index + 1;
});
console.log(arr);
// ─── Or ────────────────────────────────────────────────────────────────── ✣ ─
const numarr = Array.from(Array(num), (_, Index) => {
  return Index + 1;
});
console.log(numarr);

// Syntax of  Array.from it takes two parameters 1st is an array like object thats iterable. object with   length property is an array like object . 
//  (_, Index) =>  array.from has 2nd parameter that is an optional  mapping function - A function to call on every element of the array. If provided, every value to be added to the array is first passed through this function, and mapFn's return value is added to the array instead. The function is called with the following arguments:element and index.  element is the variable name given to current element in array that is passing through the function. _ is the common convention for a variable name that we dont need to use anywhere. we need the index as index starts from 0 and we need numbers from 1 till num so we will return index+1 as the value being passed to the array. 