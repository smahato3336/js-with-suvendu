//Immediately Invoked Function expressions (IIFE)
// Sometimes we have problem to execute code from Global Scope and for this we use IIFE.
(function whale (){
    //named IIFE
    console.log(`DB CONNECTED`);
})(); // `;` use semicollon to end this function here.

//arrow function: - (iife)
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('Suvendu')
