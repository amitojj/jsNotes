const myArray = [1, 2, 3, 4, 5]
console.log(myArray.entries());
const myNewArray = new Array(1, 2, 3, 4, 5)
console.log(myArray[1]);
// ───────────────────────────────────────────────────────────────────────── ✣ ─
const dcHeros = ["batman", "superman", "flash", "GL", "Arrow"]

// ─── Push ──────────────────────────────────────────────────────────────── ✣ ─
dcHeros[dcHeros.length] = "wonder woman" //smartass way to push
dcHeros.push("wonder woman") //simple push
console.log(dcHeros);

// ─── Pop ───────────────────────────────────────────────────────────────── ✣ ─
const lastHero = dcHeros.pop()
console.log(lastHero)
console.log(dcHeros) //changes original array

// ─── Unshift ───────────────────────────────────────────────────────────── ✣ ─
dcHeros.unshift("aquaman") //adds at start and pushes all other by i position
console.log(dcHeros);
// ─── shift ───────────────────────────────────────────────────────────── ✣ ─
const first_hero =dcHeros.shift("aquaman") //removes at start and pushes all other by 1 position
console.log(first_hero);
console.log(dcHeros);

// ─── Tostring ──────────────────────────────────────────────────────────── ✣ ─
console.log(dcHeros.toString());
// ─── Join ──────────────────────────────────────────────────────────────── ✣ ─
console.log(dcHeros.join("-"));

// ─── Slice ─────────────────────────────────────────────────────────────── ✣ ─
console.log(dcHeros.slice(1,3)); //3 not included
console.log(dcHeros); //doesnt change original array


// ─── Splice ────────────────────────────────────────────────────────────── ✣ ─
console.log(dcHeros.splice(1,3)); //3 is included
console.log(dcHeros); //changes original array

// ─── Concat ────────────────────────────────────────────────────────────── ✣ ─
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// ─── Spread ────────────────────────────────────────────────────────────── ✣ ─
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

// ─── Flat ──────────────────────────────────────────────────────────────── ✣ ─
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

// ─── Array From ────────────────────────────────────────────────────────── ✣ ─
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting interesting an object is not iterable here

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

const num=6
console.log(Array.from({length: num})) // interesting here it  converts to arrAY OF LENGTH 6

/* 
it's a nuanced point worth clarifying. You're right that objects are not iterable by default, and you generally cannot create an array directly from an object using Array.from unless the object has an iterable structure (like an array-like object).

The { length: n } object is treated as an array-like object. While it's true that objects, in general, are not iterable, some methods like Array.from or the spread syntax ([...obj]) can work with array-like objects.

In JavaScript, an array-like object is an object that has a length property and indexed elements. The Array.from method recognizes this structure and can create an array from it. It essentially treats the object as if it were an array with indices ranging from 0 to length - 1.

So, the key point here is that { length: n } is not a regular object; it's structured in a way that mimics the basic structure of an array (with a length property). It's this specific structure that allows Array.from to create an array from it.

It's a unique use case where Array.from leverages the array-like structure of the object to create an array. If the object lacked the necessary array-like structure (e.g., if it didn't have a length property), this approach wouldn't work.
*/
// ─── Array Of ──────────────────────────────────────────────────────────── ✣ ─

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));


