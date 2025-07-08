const myArr = [1, 2, 3, 4, 5];
const arr = new Array(1, 2, 3, 4, 5);
console.log(arr[1])

myArr.push(6)
console.log(myArr)
myArr.pop()
console.log(myArr)

const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let first = array.shift()
console.log(first)
console.log(array)
let last = array.unshift(0,5)
console.log(last)
console.log(array)//important: it's Destructive


console.log(array.includes(5))//will give false if not found
console.log(array.indexOf(5))//will give -1 if not found

let temp = array.join()//defaults take comma you can specifiy a seperator ("")(-)...
console.log(temp)//takes array and returns a string 

//.split() acts on strings and will return an array, it needs specifying to what to put and where to put 
//in .split() if you don't specify it will return the og string but in as array 

//.slice() return shallow copy ...don't make any changes to the og
//.splice() changes the og
//syntax: arry.splice(start, deleteCount,item1, item2, ...)

let sliArr = ["a", "b", "c", "d", "e"];

let slice = sliArr.slice(1,3)
let splice = sliArr.splice(1,3,"x","y","z")//remember it does not uses range one...just  what where to where dlt
console.log(slice)
console.log(splice)
console.log(sliArr)
