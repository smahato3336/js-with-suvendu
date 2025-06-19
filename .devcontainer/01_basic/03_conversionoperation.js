//Convert into Number

let score = 33 //Number
let newScore = "33" //String and can be converted into number
let secondScore = "33abc" //NaN
let thirdScore = null //0
let forthScore = undefined //NaN
let isloggedIn = true //1
let isloggedOut = false //0
let myName = "Suvendu Mahato" //cannot convert into number, NaN

// console.log(typeof score);
// console.log(typeof(newScore));

let valueInNumber = Number(newScore)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

let secondValue = Number(secondScore)
// console.log(typeof(secondValue));
// console.log(secondValue);

let thirdValue = Number(thirdScore)
// console.log(typeof(thirdValue));
// console.log(thirdValue);

let forthValue = Number(forthScore);
//console.log(forthValue);

let username = Number(isloggedIn)
let secondusername = Number(isloggedOut)
// console.log(username);
// console.log(secondusername);

let name = Number(myName)
//console.log(name);

//Convert Number into Boolean
let isPasswordGiven = 1
let booleanIsLoggedIn = Boolean(isPasswordGiven)
//console.log(booleanIsLoggedIn);

//1 => trud; 0 => false
//"" => false
//"Suvendu Mahhato" => true

//Convert Number into String
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));