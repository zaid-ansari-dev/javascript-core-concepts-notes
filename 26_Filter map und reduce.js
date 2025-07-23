const coding = ['js','ruby','java']
const values = coding.forEach((item)=>{
    console.log(item)
    return item                          //for each won't return values..no matter what
})
console.log(values)

//aber this ausweg
const myNums1 = [1,2,3,4,5,6,7,8,9,10]
const nueNums = []
myNums1.forEach((num)=>{
    if(num>7){
        nueNums.push(num)
    }
})
console.log(nueNums)

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// let newNums = myNums.filter((num)=>num>4)
// console.log(newNums)

const myNums = [1,2,3,4,5,6,7,8,9,10]
const prinNums = myNums.filter((num)=>{
    if(num>4){
        console.log(num)
        return true        //the above implicit one returns wihtout saying but here  you need to put 'retuurn'
    }else{
        return false
    }
})
console.log(prinNums)

console.log('--------------------------------------')

// const eins = [1,2,3,4,5,6,7,8,9,10]
// const eins1 = eins.filter((num)=>num>5)
// console.log(eins1)

const zwei = [1,2,3,4,5,6,7,8,9,10]
const zwei2 = zwei.filter((num)=>{
    // console.log(num>8) //this will return false 8 times and then true
    num>8 //won't work //false
    return true //true         //you need to give it inside a conditional block
})
console.log(zwei2)


//////////

const books = [
    {
      title: "The Hobbit",
      genre: "Fantasy",
      publish: 1937,
      edition: 2012
    },
    {
      title: "1984",
      genre: "Dystopian",
      publish: 1949,
      edition: 2021
    },
    {
      title: "Pride and Prejudice",
      genre: "Romance",
      publish: 1813,
      edition: 2003
    },
    {
      title: "The Great Gatsby",
      genre: "Classic",
      publish: 1925,
      edition: 2020
    },
    {
      title: "Dune",
      genre: "Science Fiction",
      publish: 1965,
      edition: 2019
    },
    {
      title: "To Kill a Mockingbird",
      genre: "Literary Fiction",
      publish: 1960,
      edition: 2015
    },
    {
      title: "The Catcher in the Rye",
      genre: "Coming-of-Age",
      publish: 1951,
      edition: 2018
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      genre: "Fantasy",
      publish: 1997,
      edition: 2022
    },
    {
      title: "The Da Vinci Code",
      genre: "Thriller",
      publish: 2003,
      edition: 2016
    },
    {
      title: "The Alchemist",
      genre: "Adventure",
      publish: 1988,
      edition: 2014
    },
    {
      title: "Brave New World",
      genre: "Dystopian",
      publish: 1932,
      edition: 2007
    },
    {
      title: "The Lord of the Rings",
      genre: "Fantasy",
      publish: 1954,
      edition: 2020
    }
  ]

let publish = books.filter((bk)=>{return bk.genre == 'Fantasy'})
// console.log(publish)
publish = books.filter((bk)=>{return bk.edition>2020 || bk.genre == 'Fantasy' })
console.log(publish)


const zahlen = [1,2,3,4,5,6,7,8,9]
const newNums = zahlen.map((num)=>num+10)
console.log(newNums)

// const forOne = zahlen.forEach((num)=>{if(true){return num+5}})
// console.log(forOne)

// const forOne = zahlen.forEach((num)=>{return num+5})
// console.log(forOne)

// forEach won't return shit
//if du haben to
//hard-code empty array

let arr=[]
const forOne = zahlen.forEach((num)=>{arr.push(num+5)})
console.log(arr)


//Chaining

const chain = zahlen.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
console.log(chain)


//reduce
const array = [1,2,3]
const myTotal = array.reduce(function (accumulator,currentValue){
    console.log(`acc:${accumulator} und curval:${currentValue}`)
    return accumulator + currentValue
},0)

console.log(myTotal)

const myTotalTwo = array.reduce((acc,curv)=>acc+curv,0)//also works with (acc+curv,0)
console.log(myTotal)


const shoppingCart = [{itemName:'js course',price:2999},{itemName:'py course',price:999},{itemName:'AdMob coure',price:5999},{itemName:'data scientist course',price:12999}]
let cartage = shoppingCart.reduce((acc,item)=>acc + item.price,0) //in production we usually verifies if the price is in num or not 
console.log(cartage)