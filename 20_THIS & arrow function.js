const user = {
    username: 'zaid',
    price:99.99,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "samy"
user.welcomeMessage()

console.log(this)//no current context in global

//window objekt is the gobal objekt of browser

function chai(){
    let userName = 'zaid'
    console.log(this)
    console.log(this.userName)//undefined //because this works under objekt not function or arrow function
}
chai()

const chaii = function () {
    let username = 'zaid'
    console.log(this.username)
} 

const hello = function () {
    let user = 'zaid'
    console.log(user)
}
hello()

const kaffee = () => {
    let username = 'zaid'
    
}




function eins() {
    username = 'hey'
    function zwei() {
        id = 45
        function drei() {
            age = 70
            console.log(username)
        }
        drei()
    }
    zwei()
}eins()


//so like you don't have to use this. in function or arrow functions solely because they can seach stuuf
//but for objekts you gotta do because like username above was not it's varibale but properties

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(1,3))

const justAdd = (n1,n2) => n1 + n2 //implicit arrow function no need to write 'return' keyword
console.log(justAdd(2,4))

const adding = (n1,n2) => (n1 + n2)
console.log(adding(2,5))

const hinzufugen = (n1,n2) => {n1 + n2}
console.log(hinzufugen(2,5))

const Unterschied = () => ({name:'zaid'}) //erforderlich fur objekt literals 
console.log(Unterschied())

const jaja = (n1,n2) => ({name:'popeye'})
console.log(jaja(1,2)) //