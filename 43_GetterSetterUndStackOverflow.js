class User {
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return `This is your email: ${this._email}`
    }
    set email(value){
        this._email = value
    }
    get password(){                         
        return `Your Modified Password: ${this._password}blah`
    }
    set password(value){
        this._password = value
    }
}
const zaid = new User('zaid@proton','securePsw')
console.log(zaid.password)
console.log(zaid.email)


//example 01

const person = {
    firstname: 'zaid',
    lastname: 'ansari',
    get fullname(){                                 //this makes your function looks and feels like a method instead
        return `${this.firstname} ${this.lastname}`
    },
    set fullname(value){
        let parts = value.split(' ');
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
}
console.log(person.fullname)
let alias = person
alias.fullname = 'bruce wayne'
console.log(person.fullname)
console.log(alias.fullname)


//alt-weg
function user(email,password){
    this._email=email;
    this._password=password;

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email=value
        }
    })
    Object.defineProperty(this,'password',{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password=value
        }
    })
}

const chai = new user('za@@',12345)
console.log(chai.email)