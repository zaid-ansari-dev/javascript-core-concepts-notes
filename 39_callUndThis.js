// when you use .this when you have access to window objecct then it refers to window like you run it in browser like:
// this.window
// but when u use this in a node enviroment where there is no access to window it return empty object \\
// console.log(this)
// in react it's no more because it is abstracted

function SetUsername(username){
    this.username = username
    console.log('called')
}
function createUser(username,email,password){
    SetUsername.call(this,username)
    this.email = email
    this. password = password
}

// so at the end of the day the it means the (this, username) is a way to prevent the setusername to use it's own this here and and to use the this of createuser i got put this in this way (this,username) because that's just a syntax ...period

// At the end of the day,
// SetUsername.call(this, username)
// is a way to force SetUsername to use the same this as createUser,
// instead of using its own or global this.


const chai = new createUser('chai','cahi@@@','123')
console.log(chai)

//example02
let userOne={
    name:'zaid',
    age:19,
    details: function(){
        console.log(this.name)
    }
}
let userTwo={
    name:'ansari',
    age:21,
}
userOne.details()
userOne.details.call(userTwo)

console.log(`-------------------------`)


//exampple 03
let userOni={
    name:'zaid',
    age:19,
}

let details = function(){
        console.log(this.name)
    }

let userTwei={
    name:'ansari',
    age:21,
}
details.call(userOni)


//example04
console.log(`-------------------------`)

let userOnion={
    name:'zaid',
    age:19,
}

let detailo = function(city,arbeit){
        console.log(this.name,` of ${city} works as ${arbeit}`)
    }

let userTweitin={
    name:'ansari',
    age:21,
}
detailo.call(userOnion,'deutsch','hospital')

//this is apply

/*here*/ detailo.apply(userTweitin,['berlin','engineer'])



//example05
console.log(`-------------------------`);

let userOnichan={
    name:'zaid',
    age:19,
}

let detain = function(){
        console.log(this.name)
    }

let userTwit={
    name:'ansari',
    age:21,
}

detain.bind(userTwit)


//Abschluss -- conclusion

// call and apply are same only diff. is that you can also pass the parameters in apply in array Form
// but bind here it stores the value in variable form for the later use this. in the bind binds itself permanently to that object you pass into .bind()