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
*/
function reverseNumber()
