//Packet system is more Redable and Convenient --- STRING INERPOLATION

const name = "zaid"
let repoCount = 9
console.log(`Hello ${name} my repository count is ${repoCount}`)


//Objects

let user = new String("hello")
console.log(user) 
// this here using "new String " this creates a string object it's type is 'objct' and not a string
// this is generally not a good practice but it have it's own uses cases 
// while your og String Literal method will create "String" and surely the type will be 'string' too

//that is why the output of it will be different-- > [String: 'hello'] instead of ---> hello

let user1 = "hello"

console.log(typeof user)
console.log(typeof user1)
console.log(user == user1)//true loose equality
console.log(user === user1)//false strict equality 
console.log(user1)

let user2 = String("heyo")
console.log(user2)
console.log(typeof user2)

// (new String("hello")).toUpperCase() // it works fine but not here because of the strict mode maybe


// BASIC FORMAT HERE :

let objectName = new ConsutructorFunction(args)



// prototype:

//say you are an object child and you need to answer a question you don't know 
//but the other object parent might know 
//so you refer to them..
//if they don't know they will refer to some other
//this referring is called prototype and when it forms chain it is called protoype chain

new String("hello")

// how this workds under the hood :
//1. creates an empty object

//    let temp = {}

//2. sets the prototype of that object to theprototype of the constructor function

//    the prototype constructor is assigned to the temp(new) object


//    object.getPrototypeOf(temp) === String.protoype

//3. the constructor function is called with this bound to the new object

//    String.call(temp, "hello")


//now 

String("hello") //this will return you a string primitive

//aber

new String("hello") // this will return you a string object

// so essentially it just wraps the string into a gift wrapper making it String object but it is rarely used and are generally considered bad practise

//generally in primitive types u can't have access to methods like .toUpperCase() ,etc. //aber

"hello".toUpperCase() //js will temporarily convert the string primitive to a string objefct and let it apply the method

//these works too

new String("hello").toUpperCase()

(new String("hello")).toUpperCase()

//it's uses are to add extra properties to a string object wie 

let str = new String("hello")
str.language = "englisch"
console.log(str.language)

//here I am creating custom property wie language 

// but will not work with string primitives
let str1 = "hello"
str.language = "englisch"
console.log(str1.language) //undefined

//also used in meta handling like making strings work in unusual ways und changing how prototype behaves
// aber no use unless you are working on building library or debugging smth very deep or making custom behaviours

//u should u this 

let string = {
    name: "Zaid",
    class: "IT-2A"
}
console.log(string.name)
console.log(string.class.toUpperCase())


//all object in js are truthy except null and undefined
// for primitive it is falsy for 0, "", null, undefined, NaN
if(new String("")){
    console.log("this is truthy")
}
//you can check it's empty
let st = new String("")
console.log(st.length)
console.log(typeof st)

//while this won't be 

if(""){
    console.log("this is falsy") // primitive empty sting
}

// aber when you are to find whether a strinng is empty or not then you should be in String primitive

let str3 = String("")

if(str3){
    console.log("non empty")
}else{
    console.log("empty")
}


