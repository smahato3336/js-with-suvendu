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
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.

//console.log(Object.values(tinderUser));
//The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.

//console.log(Object.entries(tinderUser));
//The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

//console.log(tinderUser.hasOwnProperty('isLogged'));
//he hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it).

//Data destructuring

const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Suvendu",
}
//console.log(course.courseInstructor)

//const {courseInstructor: instructor} = course // data destracturing: you can not type courseinstructor 
// again and again, here instructor represents courseInstructor.
console.log(instructor);

// {
//     "name": "Suvendu",
//     "coursename": "js in hindi"
//     "price": "free"
// }

//JSON CODE

{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}