/*
01. Write a function stringToNumber that takes a string input and tries to convert it to a number. 
If the conversion fails, return "Not a number".

function strintToNumber (input){
    if(typeof input === 'number'){
        return `It is a number`;
    } else {
        return `It is not a number`;
}
};
console.log(strintToNumber(123));
*/

/*
02. Write a function flipBoolean that takes any input and converts it to its 
boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.

function flipBoolean (input){
    let booleanValue = Boolean(input);
    let newbooleanValue = !booleanValue;
    return newbooleanValue;
}
console.log(flipBoolean(0));
*/

/*
03. Write a function whatAmI that takes an input and returns a string describing 
its type after conversion. If it's a number, return "I'm a number!", if it's a string, 
return "I'm a string!".

function whatAmI(input){
    if(typeof input === 'number'){
        return `it's a number`;
    } else if (typeof input === 'string'){
        return `it's a string`;
    } else {
        return `it's neither a number nor a string.`;
}
};
console.log(whatAmI('suvendu mahatoo'));
*/

/*
03. Write a function isItTruthy that takes an input and returns "It's truthy!"
 if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
 function isItTruthy(truthy){
    if (truthy){
        return "It's truthy!";
    } else {
        return "It's falsey!";
}
};
console.log(isItTruthy(null));

// ************Falsey Value:*********** 
// false (the Boolean literal)
// 0 (the number zero)
// -0 (negative zero)
// 0n (BigInt zero)
// "" (an empty string)
// null
// undefined
// NaN (Not-a-Number)

// ****************Truthy Value: ************
// true (the Boolean literal)
// Any non-zero number (e.g., 1, -5, 3.14)
// Any non-empty string (e.g., "hello", "false")
// Empty arrays ([])
// Empty objects ({})
// Functions
// Symbols

*/