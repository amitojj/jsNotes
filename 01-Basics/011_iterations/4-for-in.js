const myObject = {  
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
//for objects we can use for in loop.   for...in loop is designed for iterating over the enumerable properties of an object
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
//wont work with maps 
for (const key in map) {
    console.log(key);
}

// works with array but not recommended 
const arr = ['a', 'b', 'c', 'd', 'e'];
for (const key in arr) {
   console.log(`${key} : ${arr[key]}`);
}
