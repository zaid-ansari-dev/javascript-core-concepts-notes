// was ist die Zeit!?
// date is an object in js started at 1 Jan 1970 counts in miliseconds 
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toUTCString())
console.log('passsssssssssssssssssss')

let myCreatedDatum = new Date(2023,0,23)
console.log(myCreatedDatum.toDateString())//mon starts from 0

// important one are 3-4 only:
// for user input and display: .toDateString() and .toLocaleDateString()
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
//for backend: .toISOString() and .toJSON()
console.log(myDate.toISOString())
console.log(myDate.toJSON())         //quest is where and when they both are used
//extras: toUTCString() and toTimeString()


let myDatum = new Date("01-14-2023")
console.log(myDatum.toLocaleString())

let myDates = Date.now()
console.log(myDates)
console.log(myDatum.getTime())

//now to presen in seconds
console.log(Math.floor(myDates / 1000))

console.log(myDate.getMonth + 1)

console.log(myDate.toLocaleString('default',{ weekday: 'narrow'}))