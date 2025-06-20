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
console.log(newName.split('-')); // just split newName bases on '-' dash.
