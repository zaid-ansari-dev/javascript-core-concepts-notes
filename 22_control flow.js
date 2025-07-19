const isUserLoggedIn = true
if(isUserLoggedIn){ //(3!=2)

}
//< > <= >= == != === !==

if(true) console.log('hello'); //implicit 
else if(true){

}   else{
    
} 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2){
    console.log("allow to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail || blahblah ){
    console.log("user logged in")
}

const month = 3

switch(month){                 //shift+alt+down arrow
    case 1:        // kann compare both string und zahlen
        console.log("Jan")
        break
    case 2:
        console.log("Feb")
        break
    case 3:
        console.log("Mar")
        break                  //if break removed then it breaks the control flow and excutes everything in the block 'other than default'   
    default: 
        break    
}

const user = '' //even empty array is true [] but not empty string ''
if(user){
    console.log('ha')
}

// //falsy value
// false 0 -0 BigInt 0n  "" null undefined NaN

// //truthy value
// "0" 'false' " " [] {} function(){}

if(user.length === 0){
    console.log('zaid sahb')
}

const objekt = {}
if(Object.keys(objekt).length === 0){
    console.log('got ya')
}

console.log(false == 0)

//Nullish Coalescing Operator ?? :null und undefined

let val1
val1 = 5 ?? 10 //this or that like : null ?? 10 then sout 10 and same goes for 'undefined'
console.log(val1)

let val3
val3 = null ?? undefined ?? 10
console.log(val3)

//Terniary Operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log('less than 80') : console.log("more than 80")