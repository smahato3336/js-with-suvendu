/* In JavaScript there are two types are datatypes. Primitive and Non-primitive. 
These two datatypes is based on how to store data in memory and how to access 
data from memory.

*** Primitive Datatypes ***
7 types: String, Symbol, Number, Null, Bigint, Boolean, Undefined

*** Non-primitive Datatypes or Reference type ***
2 types: Array, Object, Functions  (if you mastery in JS just master in Object and browser/Web events of JS)

** Question: Is JavaScript is Dynamically or Statically typed?

JavaScript is a dynamic language and not static, which means that variables can hold values of different 
types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data 
type of a variable explicitly.

*/

const score = 100
const scoreValue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmain; //let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId); //false

//const bigNumber = 12456897456456544645n //n defines this number as bigint
//console.log(typeof bigNumber);

//Arrays

const cars = ["TATA Harrier", "TATA Safari", "Fortuner", "Jeep Rubicon"];

//Object

const address = {
    Name : "Suvendu Mahatoo",
    age: 36,
    Village: "Dengurpara",
    Post: "Saguna",
    PS: "Kalyani",
    PIN: 741245,
}
//console.log(address);

//Functions: -

const myFunction = function() {
    console.log("Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);

const datatypes = {
    Undefined : "Undefined",
    Null : "Object",
    Boolean: "Boolean",
    Number : "Number",
    String : "String",
}
console.log(datatypes);
console.log(typeof myFunction); //Datatype of function is function. and datatype of symbol is symbol.




