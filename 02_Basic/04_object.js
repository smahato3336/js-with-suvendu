//const tinderUser = new Object()

const tinderUser = {}

tinderUser.name = "Suvendu"
tinderUser.id = "123abc"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "rum@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Suvendu",
            lastname: "Mahato"
        }
    }
}
//console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const  obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2} 
//const obj3 = Object.assign({}, obj1, obj2, obj4) 
//console.log(obj3);
 
//const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {

    }
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
//The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
console.log(Object.values(tinderUser));
//The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
console.log(Object.entries(tinderUser));
//The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
console.log(tinderUser.hasOwnProperty('isLogged'));
//he hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it).




