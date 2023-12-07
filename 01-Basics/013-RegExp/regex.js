/*
//  syntax 
let regex = /pattern/flags(optional)
let regexp = new RegExp("pattern", "flags");
// flags:
// i
// g
// m
// s
// u
// y
// string methods
let result = str.match(/regp/i);
// array: result.length,result.index,
// null if no mastch.
let newStr = str.replace(/regp/i,"replacement");
// regexp.test(str)  //- true/false
let str = "I love JavaScript";
let regexp = /LOVE/i;

console.log( regexp.test(str) ); // true
*/
/* 
character classes
“digit” class. It’s written as \d and corresponds to “any single digit”
*/
let str = "+7(903)-123-45-67";

let regexp = /\d/;
let regexpg = /\d/g;
console.log(str.match(regexp));
console.log(str.match(regexpg));
console.log(str.match(regexpg).join(""));
/* 
\s 
(“s” is from “space”)
\w 
(“w” is from “word”) either a letter of Latin alphabet or a digit or an underscore _. Non-Latin letters (like cyrillic or hindi) do not belong to \w.

    -\d\s\w means a “digit” followed by a “space character” followed by a “wordly character”, such as 1 a.

\D
Non-digit: any character except \d, for instance a letter.
\S
Non-space: any character except \s, for instance a letter.
\W
Non-wordly character: anything but \w, e.g a non-latin letter or a space.

 . 
A dot . is a special character class that matches “any character except a newline” .There are many situations when we’d like a dot to mean literally “any character”, newline included.
That’s what flag s does. If a regexp has it, then a dot . matches literally any character:



*/
str = "Is there CSS4?";
regexp = /CSS\d/

console.log( str.match(regexp) ); // CSS4
console.log(  "I love HTML5!".match(/\s\w\w\w\w\d/)); // HTML5

/* A dot . is a special character class that matches “any character except a newline” .There are many situations when we’d like a dot to mean literally “any character”, newline included.
That’s what flag s does. If a regexp has it, then a dot . matches literally any character: */
console.log("A\nB".match(/A.B/s));


/* exercise1 :
The time has a format: hours:minutes. Both hours and minutes has two digits, like 09:00.

Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456.

P.S. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result.


P.P.S. The regexp shouldn’t match 123:456. */
if(true){
    let str = "Breakfast at 09:00 in the room 123:456."
    let pattern = /\b\d\d\b:\b\d\d\b/
    console.log(str.match(pattern)[0]);
}