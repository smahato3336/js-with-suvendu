//singleton
//Object.create

//object literals

const mySym = Symbol("smart boy")

const smUser = {
    name: "Suvendu",
    "Fathername": "Dilip Mahato",
    age: 36,
    location: "Kalyani",
    email: "smahato@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednessday"],
    [mySym]: "smart boy_1"
}

smUser.email = "mahato@google.com"
//Object.freeze(smUser)
smUser.email = "rumamahato@cisf.gov.in" //This vlue is not propagate because Freeze Action introduce before.

// console.log(smUser.email);
// console.log(smUser["name"]);
// console.log(smUser["Fathername"]);
// console.log(smUser[mySym]);

console.log(smUser);
