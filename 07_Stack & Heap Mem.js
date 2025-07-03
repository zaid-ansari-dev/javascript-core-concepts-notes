// primitive uses STACK --- gives COPY
// \
// non-primitive uses HEAP --- gives REFERENCE

let anotherName = " John Lock"
let name = anotherName 
name = "Jack Shephard"
console.log(name)

let userOne = {                 //this {} here is an object literal object is also called dictionary in python and maps in C
    email: "abc@gmail.com",     //this here is a property which have key-value pair 
    id: 123,                    
}

// userOne["email"] === userOne.email
//auch u can name your key anything like this :
let userOne1 = {
  a: "abc",
  b: 456,
  "profile-name": "zaid",
  42: true,
  [Symbol("id")]: "secret",
};

let USER = {
    email: "haha",
    id: 456,
}
console.log(USER["id"])
USER.name = "Zaid"



let userTwo = userOne

console.log(userTwo.email)
userTwo.email = "haha@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)