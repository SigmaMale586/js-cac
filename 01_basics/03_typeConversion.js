// Type conversion in JavaScript :- Type Conversion is the process in JavaScript in which the data type of the variables is converted from one type to another type manually. This is also known as explicit type casting.

// Performed manually by the programmer.
// Uses built-in JavaScript methods like Number(), String(), and Boolean().
// Ensures control over data types in code.

// Number() function :- The Number() function converts the object argument to a number that represents the object's value. The Number() function can convert different types of values to numbers, including strings, booleans, null, and undefined. If the conversion is not possible, it returns NaN (Not a Number). The type of 'NaN' is number.

// let score1 = 100;
// let score2 = "100";
// let score3 = "100abc";
// let score4 = null;
// let score5 = true;
// let score6 = false;
// let score7 = undefined;

// console.log(typeof score1);
// console.log(typeof (score1));

// console.log(typeof score2);
// console.log(typeof (score2));

// console.log(typeof score3);
// console.log(typeof (score3));

// console.log(typeof score4);
// console.log(typeof (score4));

// console.log(typeof score5);
// console.log(typeof (score5));

// console.log(typeof score6);
// console.log(typeof (score6));

// console.log(typeof score7);
// console.log(typeof (score7));

// let valInNum1 = Number(score2);
// console.log(valInNum1); // 100
// console.log(typeof(valInNum1));

// let valInNum2 = Number(score3);
// console.log(valInNum2); // NaN (Not a Number)
// console.log(typeof(valInNum2));

// let valInNum3 = Number(score4);
// console.log(valInNum3); // 0
// console.log(typeof(valInNum3));

// let valInNum4 = Number(score5);
// console.log(valInNum4); // 0
// console.log(typeof(valInNum4));

// let valInNum5 = Number(score6);
// console.log(valInNum5); // 0
// console.log(typeof(valInNum5));

// let valInNum6 = Number(score7);
// console.log(valInNum6); // 0
// console.log(typeof(valInNum6));

// "100" => 100
// "100abc" => NaN
// null => 0
// true => 1
// false => 0
// undefined => NaN

// Boolean() function :- The Boolean() function converts the object argument to a boolean value. The Boolean() function can convert different types of values to booleans, including strings, numbers, null, and undefined. If the conversion is not possible, it returns false.

let isLoggedIn1 = 10;
let isLoggedIn2 = 0;
let isLoggedIn3 = -5;
let isLoggedIn4 = "xyz";
let isLoggedIn5 = "";
let isLoggedIn6 = null;
let isLoggedIn7 = undefined;
let isLoggedIn8 = NaN;

// let boolIsLoggedIn1 = Boolean(isLoggedIn1);
// console.log(boolIsLoggedIn1); // true
// console.log(typeof(boolIsLoggedIn1));

// let boolIsLoggedIn2 = Boolean(isLoggedIn2);
// console.log(boolIsLoggedIn2); // false
// console.log(typeof(boolIsLoggedIn2));

// let boolIsLoggedIn3 = Boolean(isLoggedIn3);
// console.log(boolIsLoggedIn3); // true
// console.log(typeof(boolIsLoggedIn3));

// let boolIsLoggedIn4 = Boolean(isLoggedIn4);
// console.log(boolIsLoggedIn4); // true
// console.log(typeof(boolIsLoggedIn4));

// let boolIsLoggedIn5 = Boolean(isLoggedIn5);
// console.log(boolIsLoggedIn5); // false
// console.log(typeof(boolIsLoggedIn5));

// let boolIsLoggedIn6 = Boolean(isLoggedIn6);
// console.log(boolIsLoggedIn6); // false
// console.log(typeof(boolIsLoggedIn6));

// let boolIsLoggedIn7 = Boolean(isLoggedIn7);
// console.log(boolIsLoggedIn7); // false
// console.log(typeof(boolIsLoggedIn7));

// let boolIsLoggedIn8 = Boolean(isLoggedIn8);
// console.log(boolIsLoggedIn8); // false
// console.log(typeof(boolIsLoggedIn8));

// Note: 0, "", null, undefined, NaN are falsy values in JavaScript. All other values are truthy values.
// Any non-zero number is truthy.
// "" => false, empty string is falsy value
// "xyz" => true, non-empty string is truthy value
// 10 => true, non-zero number is truthy value
// -5 => true, non-zero number is truthy value
// 0 => false, zero is falsy value
// null => false, null is falsy value
// undefined => false, undefined is falsy value
// NaN => false, Not a Number is falsy value

// String() function :- The String() function converts the object argument to a string. The String() function can convert different types of values to strings, including numbers, booleans, null, and undefined. If the conversion is not possible, it returns an empty string.

let someNum1 = 69;
let someBool = true;