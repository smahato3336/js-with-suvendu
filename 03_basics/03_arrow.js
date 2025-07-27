const user = {
    username: "Suvendu Mahatoo",
    price: 999,

    //give a welcome message who logged in
    welcomeMessage: function() {
        // When you refer a current context use `this` keyword.
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "Ruma Mahato"
// user.welcomeMessage()

// console.log(this);

//We can access `this` keyword inside a function.
// function whaleCode(){
//     console.log(this.username);
// }
// whaleCode()

const whale_Code = () => {
    let username = "Sanvika Mahatoo"
    console.log(this);
}
// whale_Code()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

//implecite return: when you do not use `return` keyword.
//Explicite return: when you use `return` keyword.

// const addThree = (num3, num4, num5) => num3 + num4 + num5
// console.log(addThree(3, 4, 5));

//Note: if you use curly braces you have to write `return`, but if you use paranthesis(), you do not need to use `return` keyword.

// const addNumber = (num6, num7) => (num6 + num7)
// console.log(addNumber(6, 7));

const username = (name, price) => ({username: "Suvendu Mahato"})
console.log(username(username));
