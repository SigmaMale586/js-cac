let score1 = 100;
let score2 = "100";
let score3 = "100abc";
let score4 = null;
let score5 = true;
let score6 = false;
let score7 = undefined;

console.log(typeof score1);
console.log(typeof (score1));

console.log(typeof score2);
console.log(typeof (score2));

console.log(typeof score3);
console.log(typeof (score3));

console.log(typeof score4);
console.log(typeof (score4));

console.log(typeof score5);
console.log(typeof (score5));

console.log(typeof score6);
console.log(typeof (score6));

console.log(typeof score7);
console.log(typeof (score7));

let valInNum1 = Number(score2);
console.log(valInNum1); // 100
console.log(typeof(valInNum1));

let valInNum2 = Number(score3);
console.log(valInNum2); // NaN (Not a Number)
console.log(typeof(valInNum2));

let valInNum3 = Number(score4);
console.log(valInNum3); // 0
console.log(typeof(valInNum3));

let valInNum4 = Number(score5);
console.log(valInNum4); // 0
console.log(typeof(valInNum4));

let valInNum5 = Number(score6);
console.log(valInNum5); // 0
console.log(typeof(valInNum5));

let valInNum6 = Number(score7);
console.log(valInNum6); // 0
console.log(typeof(valInNum6));

// "100" => 100
// "100abc" => NaN
// null => 0
// true => 1
// false => 0
// undefined => NaN