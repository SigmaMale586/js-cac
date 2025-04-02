"use strict"; // Treat all JS code as latest version

// There are basically 2 types of datatypes in JS :-
// 1. Primitive(7)(NNSSBBU)
// a. number => Represents numeric values (e.g., 42, 3.14). Includes integers and floating-point numbers 2^53
// b. string => Represents text("Hello World", 'JavaScript', `Hello`)
// c. bigint => Represents integers larger than 2^53 - 1 (e.g., 123n)
// d. boolean => true/false
// e. null => Represents an intentional absence of value (null)
// f. undefined => Represents a variable that has been declared but not assigned a value.
// g. symbol => Represents a unique identifier (ES6)
// 2. Non-primitive(Reference) => Objects, Arrays, Functions, Date, RegExp etc.
// a. object => Represents a collection of key-value pairs (e.g., { name: 'John', age: 32 })
// b. array => Represents ordered collections of values (e.g., [1, 2, 3])
// c. function => Represents a reusable block of code (e.g., function sum(a, b) { return a + b })
// d. date => Represents a date and time (e.g., new Date())
// e. regexp => Represents a regular expression (e.g., /ab+c/i)

// Key Difference:
// a. Primitive types are passed by value.
// b. Non-primitive types are passed by reference.

// Primitive Datatypes
let num = 42; // number
let str = "Hello World"; // string
let bigInt = 1234567890123456789012345678901234567890n; // bigint
let bool = true; // boolean
let noVal = null; // null
let undef = undefined; // undefined
let sym = Symbol("foo"); // symbol

// Symbol always returns a unique value
let sym1 = Symbol("foo");
let sym2 = Symbol("foo");
console.log(sym1 === sym2); // false

// To check the datatype of a variable we can use 'typeof' operator
console.log(typeof num); // number
console.log(typeof str); // string
console.log(typeof bigInt); // bigint
console.log(typeof bool); // boolean
console.log(typeof noVal); // object
console.log(typeof undef); // undefined
console.log(typeof sym); // symbol

// Reference Datatypes(Non-Primitive)

// Array, Object, Function
// Array
let heros = ["Thor", "Ironman", "Hulk"];

// Object
let user = {
    name: "John Cena",
    age: 30,
    isAdmin: true
}

// Function
const greet = function greet() {
    console.log("Hello World!");
}

console.log(typeof heros); // object
console.log(typeof user); // object
console.log(typeof greet); // function

// ====================================

// Stack (Primitive) & Heap (Non-Primitive)

let num1 = 100;
let num2 = num1;
num2 = 50;
console.log(num1);
console.log(num2);
// This will not change the value in num1 because the value stored in num1 will not go as the original form in num2 but its copy will be given to num2, so all the changes will be done in the copy of the value and not in the original value of num1.

let userOne = {
    name: "Vaibhav",
    email: "singh@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.name = "John Doe";
console.log(userOne.name);
console.log(userTwo.name);
// This will change the value in userOne because the reference of userOne is passed to userTwo, so all the changes will be done in the original value of userOne and not in the copy of the value of userTwo.
// So, in the case of non-primitive data types, the reference is passed and not the copy of value.