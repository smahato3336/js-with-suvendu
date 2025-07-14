/*
01. Write a JavaScript function that accepts a number as a parameter
 and checks whether it is prime or not using recursion.
Note: A prime number (or a prime) is a natural number greater than 1 and
that has no positive divisors other than 1.

function primeNumberTest (n) {
    if (n === 1) {
        return false;
    } 
    else if (n === 2) {
        return true;
    }
    else {
        for (let i = 2; i < n; i++){
            if (n % i === 0){
                return false;
            }
        }
        return true;
    }
    
}
console.log(primeNumberTest(37));
*/

/*
02. Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output: 34223;
//Define a funcion named reverseNumber that takes a parameter n
function reverseNumber(n) {
    //Convert the input number to a string.
    n = n + "";
    
    //Split the string into an array of characters,
    //reverse the array, and then join the characters
    //back into a string.
    
    return n.split("") .reverse() .join("");
}
console.log(reverseNumber(32243));
*/

/*
03. Write a JavaScript function that checks whether a passed string 
    is a palindrome or not?
    A palindrome is word, phrases, or sequence that reads the same backword 
    as forward, e.g., madam or nurses run.
    // Write a JavaScript function that checks whether a passed string is palindrome or not? 
    function check_Palindrome(str_entry){
    // Change the string into lower case and remove  all non-alphanumeric characters
    let cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-0]+/g,'');
    let ccount = 0;

    // Check whether the string is empty or not

    if(cstr === ""){
        console.log("Nothing found!");
        return false;
    }
    // Check if the length of the string is even or odd 

    if(cstr.length % 2 === 0) {
        ccount = (cstr.length) / 2;
    } else {
       // If the length of the string is 1 then it becomes a palindrome

       if (cstr.length === 1) {
        console.log("Entry is a palindrome.");
        return true;
       } else {
        // If the length of the string is odd ignore middle character
        ccount = (cstr.length - 1) / 2;
       }
    }
    for(let x = 0; x < ccount; x++) {
        if (cstr[x] != cstr.slice(-1-x)[0]) {
            console.log("Entry is not a palindrome.");
            return false;
        }
    }
    console.log("The entry is a palindrome.");
    return true;
}
check_Palindrome('madam');
check_Palindrome('baba');
check_Palindrome('nursesrun');
check_Palindrome('fox');
*/

/*
04. Write a JavaScript function that returns a string that has letters in alphabetical
    order. Example string: 'webmaster', Expected output: 'abeemrstw'.

    function sortString (a2z) {
        return a2z.split('') .sort() .join(''); 
}
console.log(sortString("webmaster"));
console.log(sortString("elephant"));

//Sort Z to A words in decending order..
function sortZtoAwords (arr) {
    return arr.sort(function (a, b){
        return b.localeCompare(a); //Compares b to a for decending order
    });
}
const words = ['Apple', 'Banana', 'Orange', 'Grapes'];
const sortedWords = sortZtoAwords(words);
console.log(sortedWords);

//Sort A to Z words in assending order..
function sortAtoZwords (str) {
    return str.sort(function(a, b) {
        return a.localeCompare(b);
    });
}
const another_words = ["Elephant", "Tiger", "Dog", "Apple", "Lion"];
const assendingWords = sortAtoZwords(another_words)
console.log(assendingWords);

//Sort numbers in decending order...
function sortNumbers (num1) {
    return num1.sort(function (a, b) {
        return b - a;
    });
}
const numbers = [10, 5, 6, 2, 9, 4];
const decendingNumbers = sortNumbers(numbers);
console.log(decendingNumbers);

//Sort numbers in assending order..
function sort_another_number (num2) {
    return num2.sort(function(a, b) {
        return a - b;
    });
}
const number2 = [10, 5, 1, 7, 2, 8];
const assendingNumber = sort_another_number(number2);
console.log(assendingNumber);

*/

/*
05. Capitalize First Letter of Each word
    Write a JavaScript function that accetps a string a parameter and converts
    the first letter of each word into upper case.
    function upperCase (str) {
        //Split the input string into an array of words
        let array1 = str.split(' ');
        let newarray1 = [];
        
    //Initialize an empty array to store the modified words
    for(let x = 0; x < array1.length; x++) {
        //push the word with its first letter capitalized and the rest of the letters unchanged
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    //join the modified words into a single string, separated by space.
    return newarray1.join(' ');
} 
console.log(upperCase('the quick brown fox jumps over the lazy dog.'));

*/

/*
06. Find Longest Word
    Write a JavaScript function that accepts a string as parameter and finds 
    the longest word within the string.
    Example string: "Web Development Course"
    Expected Output: "Development"
    function find_longest_word(str) {
        
    let array1 = str.match(/\w[a-z]{0,}/gi);

    let result = array1[0];

    for(let x = 1; x < array1.length; x++){
        
        if (result.length < array1[x].length){
            result = array1[x];
        }
    }
    return result;
}
console.log(find_longest_word("Web Development Course"));
*/

/*
07. Write a JavaScript function that accetps a string as a parameter and counts the number of 
    vowels within the string.
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not
    count 'y' as vowel here.
    //Define a function named vowel_count that takes a string parameter (str1)
    function vowel_count(str1){
        // Define a string countaining all the vowels in booth lowercase and uppercase
    let vowel_list = 'aeiouAEIOU';
    // Initialize a variable vcount to count the number of vowels
    let vcount = 0;
    //Iterate through each character in the input string
    for (let x = 0; x < str1.length; x++){
        //Check if the current character is a vowel by searching for it in the vowel_list
        if (vowel_list.indexOf(str1[x]) !== -1 ) {
            // If the character is a vowel, increment the vowel count

            vcount += 1;
        }
    }
    // Return the total count of vowels in the input string
    return vcount;
}

console.log(vowel_count("The Quick Brown Fox Jumps Over The Lazy Dog"));

*/

/*
08. Check Prime Using Recursion
    Write a JavaScript function that accepts a number as parameter and
    checks whether it is prime or not using recursion.
Note: A prime number (or a prime) is a natural number greater than 1 that has
    no positive divisors other than 1 and itself.
    function test_prime(n){
        
    if (n === 1) {
        return false;
    } else if (n === 2){
        return true;
    } else {
        
        for(let x = 2; x < n; x++){
            if (n % x === 0){
                return false;
            }
        }
        return true;
    }
}
console.log(test_prime(47));

*/
