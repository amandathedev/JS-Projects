let num = 102.824;

// Cusomize the amount of decimal places displayed
console.log(num.toFixed(2));

// Round
console.log(Math.round(num));

// Forces it to round down
console.log(Math.floor(num));

// Forces round up
console.log(Math.ceil(num));

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);
