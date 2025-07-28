//Javascript Execution context
/*
1. {} Global Execution Context (this.).
2. Function Execution Context.
3. Eval Execution Context (This is a property of Global object).

*****ava Script is a single thred*****
Code execution in JavaScript does in two Phase

1. Memory Creation Phase: - Only Memory allocation for variables and others.
2. Execution Phase: - Execute code here.

*/
let val1 = 10;
let val2 = 5;

function addTwo (num1, num2){
    let total = num1 + num2;
    return total
}
let result1 = addTwo(val1, val2);
let result2 = addTwo(10, 6);

//First Phase - Global Execution (this)

//Second Phase - Memory Allocation Phase
// val1 = undefined (line no. 14)
// val2 = undefined (line no. 15)
// addTwo = definition (line no. 17 to 20)
// result1 = undefined (line no. 21)
// result2 = undefined (line no. 22)

// Thirt Phase -  Execution Phase;
//val1 = 10
//val2 = 5
