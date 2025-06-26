const mens_products = ["Jens", "T-Shirt", "Jackets", "Boots"]
const women_products = ["eye lyner", "Leap Stick", "Kajal", "Hair Dryer"]

//mens_products.push(women_products) //make women_products as a single element. Array inside array
// console.log(mens_products);
// console.log(mens_products.length); //total element here is 5th, women_products is single element here.

//find the position of "Kajal"
// console.log(mens_products[4] [2]); //(This is not good idea to find out element position)

//Concat
const category = mens_products.concat(women_products)
//console.log(category);

// Spread
const newCategory = [...mens_products, ...women_products]
//console.log(newCategory);

const another_array = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]

const usable_array = another_array.flat(Infinity) //.falt= he flat() method of Array instances creates a new array with all sub-array elements concatenated 
// into it recursively up to the specified depth. You can use ".falt(Infinity) to go all inside depth together."
console.log(usable_array);

//First ask question is the element is Array? if false then convert the element into Array.

console.log(Array.isArray("Suvendu"));
console.log(Array.from("Suvendu"));

//Array.of

let score = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score, score1, score2)); //converting set of element into one array.


