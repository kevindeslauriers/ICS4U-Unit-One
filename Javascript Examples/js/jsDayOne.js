// declare variables (let and const)
let x = 7;     // declared a variable
const names = ['Jaqueline', 'Amy', 'Sunil'];    // declared a constant
// let and const are scope sensitive

//variable types
// number
// object
let name = "William";
// string (with a bunch of functions that come with similar to Java)
let isFinished = false;
let avg = 87.9;

let test = 3 / 2;    // yields 1.5
let test2 = 3 % 2;   // yields 1 (remainder)

x = '7';
// null vs undefined

// null is on purpose
// undefined is not on purpose

let sample = null;
let sample2;      // undefined
// console.log(sample3);   // gives us an error and states it is NOT defined

/*
typeof null => Object
typeof 7 => Number
typeof 'hi' => String
typeof Array() => object
*/

// (== vs ===)

/*
7 == '7' is true
7 === '7' is false

=== and !== check the type of the value as well
*

false == 0 is true
true == 1 is true

0 and 1 can be treated as booleans in some languages.
=== will make it false because the are different types.


// if statements
// these are exactly the same in JS and Java
*/
// ternary operator
x = 7;
let isEven;

if (x % 2 == 0)
   isEven = true;
else
   isEven = false;

isEven = (x % 2 == 0) ? true : false;

// 10 over is yellow,
// 20 over or more is red
// otherwise green

let colour = (x > 20) ? 'red' : (x > 10) ? 'yellow' : 'green';

// creating functions

function nameOfFunction(x, y) {
   return x + y;
}

console.log(nameOfFunction(3, 2));

let func = function (x, y) {
   return x * y;
}

// anonymous function (function is stored in a variable)

// arrays
const numbers = Array(10);
numbers[4] = 3;
numbers.push(1);     // adds to the end of the array and makes it bigger
numbers.pop();       // removes the last element and makse the array length smaller

// types of for loops for arrays
for (let i = 0; i < names.length; i++) {
   console.log(names[i]);
}


// hits EVERY element even if it is undefined
for (let ii = 0; ii < numbers.length; ii++) {
   if (numbers[ii] !== undefined)
      console.log(numbers[ii]);
}


// like a foreach look that skips over the undefined
for (let name of names) {
   console.log(name);
}

//const colours = [];
const colours = Array();
colours.push('red');
colours.push('green');
colours.push('yellow');










