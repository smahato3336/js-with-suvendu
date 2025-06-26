const myArray = [1, 2, 3, 4, 5]
//console.log(myArray);

const myNewArray = new Array("Suvendu", "Ruma", "Sanvika","Suman", "Bhagyashree", "Sounak")
//console.log(myNewArray);

myNewArray.push("Prijush", "Paraminta", "Bony") // add element in the array at the last position
//console.log(myNewArray);
//console.log(myNewArray.length);

//myNewArray.pop() //Remove the last element from the array
//console.log(myNewArray);

myNewArray.unshift("Friends: ") // Add element at the first position of the array.
//console.log(myNewArray);

myNewArray.shift() //Remove the first element from the array.
//console.log(myNewArray);

// includes, index

// console.log(myNewArray.includes("Parul")); //Is "Parul" available in the array? false.
// console.log(myNewArray.includes("Sanvika")); //Is "Sanvika" available in the array? true. gives boolean value

//console.log(myNewArray.indexOf("Suvendu")); //findout the position of "Suvdndu".

const anotherArray = myNewArray.join() //convert the array into string
// console.log(typeof myNewArray); //object
// console.log(typeof anotherArray); //string

// slice, splice

// console.log("A ", myNewArray);
// console.log(myNewArray.slice(3, 6)); //Start from position 3 upto 6th position.

// console.log("B ", myNewArray);
// myNewArray.splice(3, 3, "Mithi", "Babun")
// console.log(myNewArray);


const months = ["Jan", "Feb", "March", "May", "August", "Suman"]
months.splice(3, 0, "April") // Start from 3rd position removes 0 element and add "April" before "May"
//console.log(months);
months.splice(5, 0, "June", "July") //Add "June" & "July" before "August" (Start from 5th position, removes 0 element and add JUne and July)
//console.log(months);
months.splice(8, 1, "September") //Removes "suman" and add "September"
console.log(months);

/*
*********** Difference between Slice and Splice method***********

In JavaScript, both slice and splice are array methods, but they have distinct functionalities.
slice() creates a new array containing a portion of the original array, 
without modifying the original. In contrast, splice() modifies the original array by adding, 
removing, or replacing elements, and it returns the removed elements as a new array. 
*/
