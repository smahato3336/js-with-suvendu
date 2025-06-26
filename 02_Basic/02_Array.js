const mens_products = ["Jens", "T-Shirt", "Jackets", "Boots"]
const women_products = ["eye lyner", "Leap Stick", "Kajal", "Hair Dryer"]

//mens_products.push(women_products) //make women_products as a single element. Array inside array
// console.log(mens_products);
// console.log(mens_products.length); //total element here is 5th, women_products is single element here.

//find the position of "Kajal"
// console.log(mens_products[4] [2]); //(This is not good idea to find out element position)

//Concat
const category = mens_products.concat(women_products)
console.log(category);

// Spread
const newCategory = [...mens_products, ...women_products]
console.log(newCategory);




