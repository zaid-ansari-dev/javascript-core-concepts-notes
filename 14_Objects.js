// so there two ways to declare an objekt One is {} literal and Other is (function, class) constructor 
// u can make a Singleton(study later) using {} but it's not the only way

const mySym = Symbol("key01")

const jsUser = {
    name: "zaid",
    age: "21",
    location: "Delhi",
    email: "za@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    "noDotAccess": "hehe",
    mySym: "myKeys",//you tried making a symbol and using it in object and printing  it's value value
    [mySym]: "myKeys"
}

console.log(jsUser.email)
console.log(jsUser["email"])//it is taken as string value..i meant the keys in object
console.log(jsUser.noDotAccess)
console.log(jsUser.mySym)//this is running but not properly it is taking the above symbol as a string you can check the typeof 
//proper way is to use [] above and below 
console.log(typeof jsUser[mySym])
console.log(jsUser[mySym])

//overriding
jsUser.email = "haha@"
console.log(jsUser.email)
//for freezing values
// Object.freeze(jsUser)//ich commented it out because it was creating problem
jsUser.email = "youy"
console.log(jsUser.email)//it wouldn't through and error but would ignore your call and print the pre one
console.log(jsUser)

jsUser.greeting = function(){
    return `Hey, ich heiben ${this.name}`
}
console.log(jsUser.greeting())
console.log(jsUser.greeting)//when u add function a name like function Hello(){} and then uses console.log(greeting) it return with [Function (Hello)]
//it is useful in debugging like u wanna check whether my func added or not or it's name then  u can simply run console.log(myUser.gret) 

jsUser.greetingTwo = function(){
    console.log(`Hallo, Ich lebe in Deutschland, Wie heibt du, ${this.name}!?`)
}
console.log(jsUser.greetingTwo())