//for of LOOP //mainly used in Arrays,Strings,Sets,Maps

['','','']
[{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num)
}

const name = 'zaid'
for(let words of name){
    console.log(words)
}

//it wouldn't apply directly on Objekts
//it would require like object.entries(),object.keys(),object.values()

const user = {name:'zaid',id:45}
for(const [key,value] of Object.entries(user)){
    console.log(`${key}:${value}`)
    console.log(typeof [key,value])
}


const users = {name:'zaid',id:45}
for(const Hye of Object.entries(users)){
    console.log(Hye)                             //it will return in array format 
}
const userss = {name:'zaid',id:45}
for(const values of Object.values(userss)){
    console.log(`${values}`)                             
}
const usersss = {name:'zaid',id:45}
for(const keys of Object.keys(usersss)){
    console.log(`${keys}`)                             
}



const set = new Set([1,2,3]) //correct way to make set in js alr 
for(const setIns of set){
    console.log(setIns)
}

// Maps
//difference b/w objekts and maps
//sclussel are always unique and wert can be duplicate 
//keys are always strings or symbols even if you entered a nummer it will auto-convert to string in js in objekts
//aber fur wert it can have any data type including objekts,functions,primitives,anything
//in older js engines keys are not always in insertion order for objekts, aber for maps it preserves the insertion order of wert
//size: fur objekts: 'no direct way' -> Object.keys(obj).length
                                    //  has built-in property
//maps perfoms better when you do frequent addition/removal of schlussel-wet pairs
//
//That's the Unterschied

const map = new Map()
map.set('IN','India')
map.set('Usa','United States of Amerika')
map.set('Fr','France')
map.set('IN','India')     //Can't have Dasselbe schlussel aber kann haben Dasselbe wert
map.set('INDIA','India')  //hier we kann Dasselbe wert aber nein Dasselbe schlussel
console.log(map)

for(const key of map){
    console.log(key) //this will return in array type like the whole map content
}

for(const [key] of map){
    console.log(key)
}


const myObjekt = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

//normal for-of won't run shit 

//for-in Loop

for(const key in myObjekt){
    console.log(`${key} shortcut is for ${myObjekt[key]}`) //this is ridiculous but listen closely still this 'key' will only access the schlussel of the objekt aber the 'objekt[key]' will access the wert
}
for(const key in myObjekt){
    console.log(myObjekt[key])
}


const programming = ['js','rb','py','java','cpp']

for(const key in programming){
    console.log(key)
    console.log(programming[key])
    console.log([key]) //so like it wraps the key into Zeichenkette 
}


//auch du can't iterate a map() using for-in loop you can do only arrays and objekts so 

//forEach Loop //it's a higherOrderFunction

const coding = ['js','rb','py','java','cpp']

coding.forEach(function (item) {
    console.log(item)
})

coding.forEach( (item) => {
    console.log(item)
})

function forMe(item) {
    console.log(item)
}

coding.forEach(forMe)

coding.forEach((item,inde,ar)=>{
    console.log(item,inde,ar)
})

const myCoding = [{
    langName: 'js',
    langFileName: '.javas'
},
{
    langName: 'py',
    langFileName: '.python'
},
{
    langName: 'c++',
    langFileName: '.cpp'
}]

myCoding.forEach((item)=>{
    console.log(item.langFileName)
})

const portfolio = [{name:'zaid',id:4,class:'3A'}]
Object.entries(portfolio).forEach(([key,value])=>{
    console.log(key,value)
})