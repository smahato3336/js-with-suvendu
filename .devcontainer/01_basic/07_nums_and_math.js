const totalCustomer = 400

const newCustomer = new Number(200)
//console.log(newCustomer);

const value = 100.3565
// console.log(value.toFixed(2));
// console.log(value.toString().length);
// console.log(value.toString());

// ------------toPrecision-------------
//Returns a string containing a number represented either in exponential or fixed-point notation 
// with a specified number of digits.
// precision — Number of significant digits. Must be in the range 1 - 21, inclusive.

const newNumber = 366.87689
//console.log(newNumber.toPrecision(4));

//------------toLocaleString------------
//put commas on US number presprective and by doing'en-IN' you can make in Indian presprective.

const secondNumber = 1000000
//console.log(secondNumber.toLocaleString('en-IN'));
/*
//********************************************  MATH ******************************************

console.log(Math);
console.log(Math.abs(-33)); //Math.abs() makes negative value into positive value.
console.log(Math.round(43.5)); //Math.round() gives round off number.
console.log(Math.ceil(5.3)); //Math.ceil(), it rounds a number up to the nearest integer number.
console.log(Math.floor(5.9)); //Math.floor(),  it rounds a number down to the nearest whole number. 
console.log(Math.sqrt(25)); // Math.sqrt(25), the square root of 25 is 5.
console.log(Math.pow(2, 2)); //Math.pow(2, 2), denotes 2 to the power 2 = 4
console.log(Math.min(1, 3, 5, 9, 10, 55, 10, 5, 7)); //find minimum value in the array.
console.log(Math.max(1, 3, 5, 9, 10, 55, 10, 5, 7)); //find maximum value in the array.
*/

// console.log((Math.random()*10) + 1); //Returns a pseudorandom number between 0 and 1. '+1' is for minimum value will not come 0.
// console.log(Math.floor(Math.random()*10) + 1);
// console.log(Math.ceil(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));






