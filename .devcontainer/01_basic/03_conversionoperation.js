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
// console.log(stringNumber);
// console.log(typeof(stringNumber));

// ******************************************** Operations ****************************************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2 + 2); //Addition
// console.log(2 - 2); //Substruction
// console.log(2 * 2); //Multiplication
// console.log(2 / 3); //Division
// console.log(2 ** 3); //2 to the power 3
// console.log(2 % 7); //Module (remainder)

let str1 = "Suvendu"
let str2 = "Mahatoo"

let str3 = str1 + str2
//console.log(str3);

// console.log("1" + 2); //12  (if String first then remaining numbers converts into string)
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32 (if Number first then conversion first then show the string)
//console.log((((1 + 2) * 3) / 3) % 2); //Use paranthesis in such case.

// console.log(+true); //Converts boolean into number
// console.log(+"") //not to use

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 //not to use

let gameCounter = 100
gameCounter++; //suffix
++gameCounter; //preffix
gameCounter++;
console.log(gameCounter);

//Go to mdn and study post fix and prefix
//link to study : 
https://262.ecma-international.org/14.0/index.html?_gl=1*1rvh9v6*_ga*MjU1NDY0ODU0LjE3NTAyOTMwNjY.*_ga_TDCK4DWEPP*czE3NTAyOTMwNjUkbzEkZzEkdDE3NTAyOTMwODEkajQ0JGwwJGgw#sec-ecmascript-language-functions-and-classes