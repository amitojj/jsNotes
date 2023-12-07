// ─── Spread ────────────────────────────────────────────────────────────── ✣ ─
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }
console.log(obj3); //nested objects

// ─── Merge Objects ─────────────────────────────────────────────────────── ✣ ─
const obj5 = Object.assign({}, obj1, obj2, obj4)
console.log(obj5);

// ─── Or ────────────────────────────────────────────────────────────────── ✣ ─

const obj6 = {...obj1, ...obj2}
console.log(obj6);


// ─── Objrct To Array ───────────────────────────────────────────────────── ✣ ─
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));