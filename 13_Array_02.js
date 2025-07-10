const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

arr1.push(arr2)
console.log(arr1)
console.log(arr2)
console.log(arr1[5][0]) //array inside array-nested array

let marvel = ["ironman", "hulk", "thor", "captain america"]
let dc = ["batman", "superman", "flash", "aquaman"]
let hope = marvel.concat(dc) // does not mutate the og array
console.log(marvel)
console.log(hope)

let hope2 = [marvel,dc]
console.log(hope2) //still nested
let spread = [...marvel,...dc] //spread operator
console.log(spread)//prefer this over concat because it is more readable and can add more arrays easily just ,...xyz

const arrayComplex = [1,2,3,[4,5,6,[7,8]],[9]]
const real_array = arrayComplex.flat(Infinity) //flattens the array to a single level..u can specify if you want
console.log(real_array)

console.log(Array.isArray("zaid"))
console.log(Array.from("zaid")) //converts string or any iterable array like obj to Real array
console.log(Array.from({name: "zaid"})) //study later
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) // .of crates array from any given arguments 
