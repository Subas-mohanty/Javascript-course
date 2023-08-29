// can be overridden
let age=19;
let year=2023;

console.log(age,"Hello",year);

age=20;
console.log(age);

// can't be overridden
const point=100;
// point=30; // will give an error
console.log(point);

// the old method to declare a variable and it can be overridden
var name="Subas";
name="subbu";
console.log(name);

// strings
console.log("hello world")

// string concatination
let firstName="Subas";
let lastName="Mohanty";

let fullName=firstName+" "+lastName;
console.log(fullName);

// get character
console.log(fullName[0]); // .charAt[] in java

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let name2 = fullName.toLowerCase();
console.log(name2);

// numbers

// let radius = 10;
// let pi = 3.14;

// console.log(radius, pi);

// math operators - +, -, *, /, **, %

// console.log(10 / 2);
// let result = radius % 3;
// let result = pi * radius**2;

// order of operation - B I D M A S

// let result = 5 * (10 - 3)**2;

// console.log(result);

// shorthands
let likes = 10;

// likes = likes + 1;
// likes++;

// likes = likes + 10;
// likes += 10;

// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - not a number

// console.log(5 / 'hello'); // output: NaN
// console.log(5 * 'hello'); // output: NaN

// let result = 'the blog has ' + likes + ' likes.';
// console.log(result);

// template strings
const title="Atomic Habits";
const author = "James clear";
const sold = 10;

// concatenation way

// let heading= "The book "+ title + " is written by " + author + " and has over " + sold + " million copies sold";
// console.log(heading);

// template string way

let heading = `The book ${title} is written by ${author} and has over ${sold} million copies sold`;
console.log(heading);