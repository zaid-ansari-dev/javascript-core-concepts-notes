let score = "33"
let scoreWithNum = "33a"

console.log(typeof score)

let valueInNumber = Number(score)

console.log(typeof valueInNumber)

let scorewithNumInNumber = Number(scoreWithNum)

console.log(typeof scorewithNumInNumber) // NaN
console.log(scorewithNumInNumber)

let bool = false
let boolInNum = Number(bool)
console.log(boolInNum)


let isLoggedIn = 0
let a = Boolean(isLoggedIn)
console.log(a)