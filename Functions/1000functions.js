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