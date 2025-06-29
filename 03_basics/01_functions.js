function myName() {
console.log("S");
console.log("u");
console.log("v");
console.log("e");
console.log("n");
console.log("d");
console.log("u");
}

//myName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 5)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)
//It can uses under a variable also.

function addTwoNumbers(number1, number2){
    
    //let result = number1 + number2
    //return result
    //console.log("Ruma"); //after returning nothing print

    return number1 + number2
    
}
const result = addTwoNumbers(3, 5)

//console.log("Result " + result);


//Suvendu's Address

function myAddress(homeaddress){
    return permanentAddress
}

const permanentAddress = "Vill: Dengurpara, PO: Saguna, PS: Kalyani, Dist: Nadia, West Bengal, 741245"

//console.log(permanentAddress);


//console.log("Ruma's permanent address is " + permanentAddress);
//console.table("Ruma's permanent address is " + permanentAddress);

/*
// **********Logged In User Message*************

function loginUserMessage(username = "sam") {
    if(!username) { //or if(username === undefined) same 
        console.log("Please enger a username");
        return
    }
    return `${username} justed logged in`
}
//console.log(loginUserMessage());
//console.log(loginUserMessage("Suvendu Mahatoo"));

*/
/*
//************Shoppint cart****************

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
//console.log(calculateCartPrice(200, 300, 500, 600));
*/

/*
const user = {
    itemname: "coppermug",
    price: 699
}

function itemDetails(anyobject){
    console.log(`itemname is ${anyobject.itemname} and price is ${anyobject.price}`);   
}
//itemDetails(user)
//********pass direct object************
itemDetails({
    itemname: "Water Bottle",
    price: 199
})

itemDetails({
    itemname: "Bed Sheet",
    price: 399
})

itemDetails({
    itemname: "Mens T-shirt",
    price: 599
})

*/

//************Array in Function*************
const myNewArray = [200, 400, 600, 800];

function returnSecondValue(getarray) {
    return getarray[1]
}
//console.log(returnSecondValue(myNewArray));

//pass direct array
console.log(returnSecondValue([200, 800, 600, 700]));
