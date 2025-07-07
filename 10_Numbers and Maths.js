// Zahlen und Mathematik
// Nummer und Mathe

const balance = Number(1000)
console.log(typeof balance)
console.log(balance.toString().length)//you need to convert it to a string to get the length
bal = new Number(1000)
console.log(typeof bal)
console.log(bal.toString().length)

console.log(balance.toFixed(3))

//toPrecision formats a number to a specified length of signigicant digits

const x = 10392000
console.log(x.toPrecision(3)) //clarify this shit alr

console.log(x.toLocaleString('en-IN')) //it converts numbers,dates & obj. to string formatted area/region specified format INDIA,US,DENMARK


console.log(Math)// Math is a built in js object that provide methods and properties for mathematical constants and funcitons
console.log(Math.abs(-4))
console.log(Math.abs(4.6))
console.log(Math.ceil(2.1))
console.log(Math.floor(4.9))
console.log(Math.min(3,32,4))
console.log(Math.random()) //always comes between 0-1
//like for die output
console.log(Math.random()*10 + 1)//added to avoid 0
console.log((Math.random()*10)+1)//up and this are same
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))

//for die

function getRandomInt(max,min){
    console.log(Math.floor(Math.random() * (max - min + 1) + min))
}
let die = getRandomInt(6,1)

let arr = ['hey','hi','hello']
let print = arr[(Math.floor(Math.random() * arr.length))]
console.log(print)
// you gotta use .floor or it won't reach as random can range only froj 0 to 1 but actually it's 0 to 0.9999999999999 [16] nines total zifir

function randomColor() {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16)//16777215 is the highest value for 6 hex zifir 
    //.toString(16) converts the number to hexadecimal strings)
    return color
}
console.log(randomColor())

const num = 123456789
console.log(num.toString(16))
