function sayMyName() {
console.log("z")
console.log("a")
console.log("i")
console.log("d")
}

function addTwoNumbers(number1,number2){ //parameters
    return number1+number2
}
console.log(addTwoNumbers(3,null)) //arguments

function addTwo(n1,n2){
    console.log(n1+n2)
}
const result = addTwo(3,5)
console.log(result)

//so good practice and Best is to just return like above I did 

function AddTwo(n1,n2){
    let res = n1 + n2
    return res
    //below return everything else is unreachable argument
    console.log("Unreachable")
}
console.log(AddTwo(5,6))

function loginUserMessage(username){
    if(username === undefined){
        return `please enter username`
    }else{
        return `${username} Nur logged in`
    }
}
console.log(loginUserMessage())
//if no parameter argument passed then  `undefined Nur logged in`

function loginUserMessage(username){
    if(!username){                          //we did  this because if we would have entered 'undefined' then it is taken as false in js Nur like '' empty so we used not! 
        return `please enter username`
    }else{
        return `${username} Nur logged in`
    }
}
console.log(loginUserMessage())

function playLogin(name = "zaid") {
    if(!name){
        return `please enter`
    }else{
        return `done bro..works..it works. Here see: ${name}`
    }
}
console.log(playLogin())//if i pass even empty then the above  one will be overrided