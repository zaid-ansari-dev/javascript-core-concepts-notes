const gameName = new String("Zaid")
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.__proto__.toUpperCase.call(gameName))
console.log(gameName.charAt(0))
console.log(gameName) ///doing uppercase won't change the original sting object
console.log(gameName.indexOf("A"))// -1 // it means falsy
console.log(gameName.indexOf("Z"))

const newString  = gameName.substring(0, 2)
console.log(newString)

const anotherString = gameName.slice(-1 ,4) // we can push negative index too here in Slice
console.log(anotherString)

// (-1,4) --> -1 + 4 = 3.. Ergebnisse would be 3rd on index it comes  in range Ergebnisse is d
// (-1,3) --> - + 3 = 2.. it would give kein ergebnis

const newString1 = "   zaid   "
console.log(newString1)
console.log(newString1.trim()) // this method removes whitespaces and line terminators like( /r return cursor to start of the current line and /n moves to  the next line)


const url = "https://www.zaid.com%20is%20a%20good %20developer"
console.log(url.replace('%20','_')) //it will replace only the first occurence 
console.log(url.replaceAll('%20', '_'))//this will do
//auch
console.log(url.replace(/%20/g, '_')) // /g is a 'global flag' used to add modifier in regex patten

console.log(url.includes('ww'))
console.log(url.includes(' '))// beide richtig/WAHR


//string.split(seperator, limit)

const name = "Zaid is awesome"
const words = name.split(" ")
console.log(words)

//slit method breaks a string into multi array of substring 
//acts as a seperator
//result ["zaid", "is", "awesome"]

const data = "apple,banana"
console.log(data.split(","))


//every character 
const char = "Zaid"
console.log(char.split(""))

//specific 
const rand = "www.zaid.com/is/learning/cool"
console.log(rand.split("/"))

//limiting
const limi = "Zaid is eligible"
console.log(limi.split(" ", 2))

//also can split by regex

const messy = " one towo three"
console.log(messy.split(/\s+/)) // this will split by one or more whitespace characters