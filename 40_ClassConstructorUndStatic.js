class user{
    constructor(username,email,password){   //constructor here is built-in inside class-- it'll run auto when you create a new instance of the class // you can't rename it 
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){                      //this is a custom method  no worries
        return `${this.password}abc`
    }

    toUpperC(){
        return `capitals:${this.username.toUpperCase()}`
    }
}

const chai = new user('chai','@@','123')
console.log(chai.encryptPassword())
console.log(chai.toUpperC())

//example01

class Superman{}
const krypton = new Superman()      //and empty default constructor is still created for you //constructor(){}

//example02

class bunti{
    constructor(baccha){
        this.baccha = baccha
    }
}

class montu extends bunti{
    constructor(baccha,ht){
        super(baccha)               //you got to show constructor and also super() must be used for the inheritance from the parent class
        this.ht = ht
    }
}

//example03

class Dog{
    constructor(nameOf){
        this.nameOf = nameOf
    }
    voice(){
        console.log(`This is my dogo: ${this.nameOf}`)
    }
}
class noise extends Dog{
    constructor(nameOf,breed){
        super(nameOf)
        this.breed = breed
    }
    voice(){
        console.log(`This is ${this.nameOf} and it's a ${this.breed}`)
    }
}

let dogo = new Dog('Monty')
let dogi = new noise('Monty','french')
dogo.voice()
dogi.voice()
console.log(dogi instanceof Dog)
console.log(dogo instanceof Dog)
console.log(dogi instanceof noise)
console.log(dogo instanceof noise)


//from above do the exact same shit but do it in function not class

function User(username,email,pass){
    this.username = username;
    this.email = email;
    this.pass = pass;
}
User.prototype.capitalize = function(){
    return `${this.username.toUpperCase()}`
}

let instance = new User('zaid','##','787')
console.log(instance.capitalize())


//inheritance from back again chaiaurcode
class naam{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}
class teacher extends naam{
    constructor(username,email,psw){
        // this.emai= email         //can't do this way call super first 
        // this.psw = psw
        // super(username)
            super(username)
            this.emai= email        
            this.psw = psw
        
    }
    addCourse(){
        console.log(`a new course was added by ${this.username}`)
    }
}

const bhai = new teacher('chai','cahi###',123)
bhai.addCourse()
console.log(bhai == teacher)


//static properties--->

class excel{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    static createId(){
        return `123`
    }
}
const Zaid = new excel('zaid')
// console.log(Zaid.createId())           //it is because the instance of the class does not have access to the static method of it so it gives error
//resolver
console.log(excel.createId())


class teaching extends excel {
    constructor(email,username){
        super(username)
        this.email = email
    }
}

const iphone = new teaching('iphone','@iphone@')
console.log(iphone.logMe())