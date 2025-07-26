//Scopes starts with three keywords 1. Let, 2. Var, & 3. Const.

//*********Global Scope**********
// var c = 300
let a = 300


//**********Block Scope**********
if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Suvendu"
    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);

    // two()
    
}

// one();

// In Nested Function, child function can access parent variable. Here two() can access one() variable.

if (true) {
    const username = "SUVENDU"
    if (username === "SUVENDU") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);

// *****************Interesting *******************

console.log(addone(5));
function addone(num){
    return num + 1;
}


const addTwo = function(num1){
    return num1 + 1
}
console.log(addTwo(5));


