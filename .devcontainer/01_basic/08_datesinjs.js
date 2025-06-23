
/*
// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toJSON()); //.Give Ctrl+space to see the options
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toTimeString());
console.log(typeof myDate); // Date is a object in JavaScript.
*/

// let myCreatedDate = new Date(2025, 0, 23)

//let myCreatedDate =  new Date(2025, 0, 23, 5, 3)

let myCreatedDate =  new Date(2025, 0, 23, 5, 3)

//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleString());

let mmddyyyy = new Date("2023-01-16")
//console.log(mmddyyyy.toLocaleDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mmddyyyy.getTime());
//console.log(Date.now()/1000); //date converts from miliseconds to seconds.
//console.log(Math.floor(Date.now()/1000));// remove decimil number.
 
let anotherDate = new Date()
//console.log(anotherDate.getMonth() + 1); //It starts from 0-Jan, and get correct month you can add +1.
//console.log(anotherDate.getDay() + 1); // It starts 0-Monday, and get correct day you can add +1.

//console.log(`The month is ${anotherDate.getMonth() + 1} and date is ${anotherDate.getDay() + 1} and the time is ${anotherDate.getTime()}`);

anotherDate.toLocaleDateString('default', {
    weekday: "long"
    })
console.log(anotherDate);




