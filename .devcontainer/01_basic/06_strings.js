const name = "Suvendu Mahatoo"
const repoCount = 50

//console.log(name + repoCount);
//console.log(`Hello, my name is  ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String(`suvenduci`)

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.length); // see the length of the string.

// console.log(gameName.charAt('8')); // let see which character is on position no. 8th.
// console.log(gameName.indexOf('d')); // let see in which position d is.

const newString = gameName.substring(0, 4) //that means print character no. 0 to 3. Note 4th character is not prinr here/
//console.log(newString); 

const anotherString = gameName.slice(-9, 4);
//console.log(gameName.length);
//console.log(anotherString);

const newStringOne = "      Suvendu Mahatoo     "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // `Trim` removes starting space and end space.
// *********(Go to trim JavaScript mdn)********

const url = "https://suvendumahato.com/suvendu%20mahat0o"
//.replace value first which you want to replace and second what value you want to put as replacement.
//console.log(url.replace('%20', '-'));

// console.log(url.includes('suvendu')); //Is 'suvendu' keyword availale in the url? true.
// console.log(url.includes('ruma')); //Is 'ruma' keyword available in the url? false.

const newName = "ruma-suvendu-sanvika"
//console.log(newName.split('-')); // just split newName bases on '-' dash.



//******************* String Method : Prototype ********************//
//Anchor : The code below creates an HTML string and then replaces the document's body with it:
const introduction = "Hello, World"
//console.log(introduction.anchor('Hello'));

//at : The at() method of Array instances takes an integer value and returns the item at that index, 
// allowing for positive and negative integers. Negative integers count back from the last item in the array.

const array1 = [5, 12, 55, 123, 130, 255];
let index = 2;
//console.log(`An index of ${index} returns ${array1.at(index)}`);

index = -2;
//console.log(`An index of ${index} returns ${array1.at(index)}`);

//big: The code below creates an HTML string and then replaces the document's body with it:

let worldName = "Hello World"
// console.log(worldName.big('Hello'));
// console.log(typeof worldName);

//blink: the <blink> element itself is removed from modern browsers, and blinking text is frowned upon by several accessibility standards. 
//console.log(worldName.blink('Hello'));

/*
charAt()

const sentence = "The quick brown fox jumps over the lazy dog.";
const newIndex = 6;

console.log(`The character at index ${newIndex} is ${sentence.charAt(newIndex)}`);

const tennisPlayer = "Rafale Nadal";
console.log(tennisPlayer.charAt());
//No index provided, use 0 as default.
console.log(tennisPlayer.charAt(0));
console.log(tennisPlayer.charAt(1));
console.log(tennisPlayer.charAt(2));
console.log(tennisPlayer.charAt(3));
console.log(tennisPlayer.charAt(4));
console.log(tennisPlayer.charAt(5));
console.log(tennisPlayer.charAt(6));
console.log(tennisPlayer.charAt(7));
console.log(tennisPlayer.charAt(133));
*/
/*
charCodeAt()

const newSentence = "Ruma Mahato"
let secondIndex = 5
console.log(`My wife's charCodeAt is ${newSentence.charCodeAt(secondIndex)} and compare with charAt ${newSentence.charAt(secondIndex)}`);

let daughterName = "Sanvika Mahato"
console.log(`The charCodeAt 'S' is ${daughterName.charCodeAt(0)} and charAt '0' is ${daughterName.charAt(0)}`);
console.log(`The charCodeAt 'a' is ${daughterName.charCodeAt(1)} and charAt '1' is ${daughterName.charAt(1)}`);
console.log(`The charCodeAt 'n' is ${daughterName.charCodeAt(2)} and charAt '2' is ${daughterName.charAt(2)}`);
console.log(`The charCodeAt 'v' is ${daughterName.charCodeAt(3)} and charAt '3' is ${daughterName.charAt(3)}`);
console.log(`The charCodeAt 'i' is ${daughterName.charCodeAt(4)} and charAt '4' is ${daughterName.charAt(4)}`);
console.log(`The charCodeAt 'k' is ${daughterName.charCodeAt(5)} and charAt '5' is ${daughterName.charAt(5)}`);
console.log(`The charCodeAt 'a' is ${daughterName.charCodeAt(6)} and charAt '6' is ${daughterName.charAt(6)}`);
console.log(`The charCodeAt 'M' is ${daughterName.charCodeAt(8)} and charAt '7' is ${daughterName.charAt(8)}`);

*/

/*
******************* concat() ******************
The concat() method of Array instances is used to merge two or more arrays. 
This method does not change the existing arrays, but instead returns a new array.

let items = ["Bucket", "Mugg", "Coocking Utencils"];
let newItems = ["Water Bottle", "Barby Doll", "Books"];

const totalItems = items.concat(newItems);
console.log(totalItems);
*/

/*
------------includes()------------
The includes() method of Array instances determines whether an array includes 
a certain value among its entries, returning true or false as appropriate.

let petCategory = ["Dog", "Cat", "Bird", "Rat"];
console.log(petCategory.includes("Rat"));
console.log(petCategory.includes("Bird"));
console.log(petCategory.includes("Mat"));
*/

/*
--------------endsWith()--------------
The endsWith() method of String values determines whether a string ends with 
the characters of this string, returning true or false as appropriate.


let newSentense = "My wife is very intelligent and wise"
console.log(newSentense.endsWith("wise"));
console.log(newSentense.startsWith("My"));
*/
