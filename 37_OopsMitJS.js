//please run somewhere else

//JS Classes in Short:
// Added in ES6 (2015)

// They’re syntactic sugar over JS’s prototype-based inheritance

// Make JS look and feel more like Java / C++ / Python, but under the hood — still prototypes

const user ={           //objekt literal
    username: 'zaid',
    loginCount: 8,
    signedIn: true,

    // getUserDetails: function(){                 //pre-defined method
       getUserDetails(){        //new-school
        console.log(`Username:${this.username}`)            //this.username === user.username === 'zaid'
        console.log(this)                       // prints the whole damm thingy-- because this is an object method that refers to the object itself
    }
}
console.log(user.username)
user.getUserDetails()
console.log(this)           //in node.js means here it refers to an empty object while in browser it refers to the window objekt


// const date = Date.now()
// console.log(date)

// const datee = new Date()
// console.log(datee)

console.log('-------------------------------')
function User(username,loginCount,isLoggedIn){
    this.username = username                    //if u are wondering user.username = username ...then NO cuz user don't exist inside itself
    this.loginCount = loginCount    //since 'this' points to the global object it did this
                                            //window.loginCount = 9 in the browser!!!!
    this.isLoggedIn = isLoggedIn    //you are injecting username to the global object 
    return this                     //returning the global objects and whatever you pointed to
}

const userOne = User('zaid','9',true) //constructors: (new + capital start alphabet by convention)are function to create and initialize an object in js
const userTwo = User('ansari','10',false)
console.log(userOne)

//jajajjajaaj: just add 'new' and no need for 'return this'

function Man(username){
    this.username = username}

Man.prototype.greeting = function(){
    return `this is ${this.username}`
}

const man = new Man('zaid')
console.log(man.greeting())
console.log(man)


//instanceo
function Car(car1,car2,car3){
    this.car1=car1;
    this.car2=car2;
    this.car3=car3;
}
const auto = new Car ('honda','mercedes','bmw')
console.log(auto instanceof Car)
console.log(auto instanceof Object)

//please run somewhere else