/*
Task 1: Array Filtering
Write a function filterNumbers(arr) that returns only numbers from a mixed array
*/
function filterNumbers(arr){
    return arr.filter(element => typeof element === 'number');
}
let mixedarray = [1, 'abc', 2, 3, 'def', 4, 5, true];
let numbersOnly = filterNumbers(mixedarray);

// console.log(numbersOnly);


/*
Task 2: Array Reversal
Write a function reverseArray(arr) that reverses the array
*/
function reverseArray(arr){
    arr.reverse();
    return arr;
}
const originalArray = [1, 2, 3, 4, 5];
reverseArray(originalArray);
// console.log(originalArray);


/*
Task 3: Find Maximum in an Array
Write a function findMax(arr) that returns the largest number in the array
*/
function findMax(arr){
   return Math.max(...arr);
}
const numbers = [25, 56, 45, 85, 99, 21, 156];
// console.log(findMax(numbers));


/*
Task 4: Remove Duplicates from an Array
Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
*/
function removeDuplicates(arr){
    const uniqueSet = new Set(arr);
    const uniqueArr = [...uniqueSet];
    return uniqueArr;
}
const num1 = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const uniqueNumber = removeDuplicates(num1);  
console.log(uniqueNumber);

const fruitList = ["apple", "banana", "banana", "Orange", "grapes", "grapes", "mango"];
const uniqueFruitList = removeDuplicates(fruitList);
// console.log(uniqueFruitList);
/*
Task 5: Flatten a Nested Array
Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
*/
function flattenArray(arr){
    // Using the flat() method with Infinity flattens the array to any depth
    return arr.flat(Infinity);
}
const nestedArray = [1, [2, 3, [4, 5], 6, 7 ], 8];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);
