//promise objekt represents teh eventual completion or failure of an async operation and it's resulting value


//promise 3 states:
//pending
//fulfilled
//rejected
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task completed')
        resolve()
    },1000)
})

promiseOne.then(function(){     //has direct connection with resolve
    console.log('promise consumed')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async 1 complete')
        resolve()
    },2000)
}).then(function(){
    console.log('aysnc 2 consumed')
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'zaid',code:787})
    },1000)
})

promiseThree.then(function(userInfo){
    console.log(userInfo)
})

const promiseVier = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:'ansari',code:'80'})
        }else{
            reject('error:smth went sehr rechtig')
        }
    },1000)
})
const username = promiseVier.then((neverGonnaBe)=>{
    console.log('invisible')
    return neverGonnaBe.username
})
.then((username)=>{
    console.log(username)
})

// console.log(username)                            this explains a lottttttt

const errorOne = promiseVier.catch(function(smth){
    console.log('eror eror eror eror')
}).finally(()=>{
    console.log('this will always run')
})

let promiseFunf = new Promise((resolve,reject)=>{
  setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'javascript',code:'90'})
        }else{
            reject('Erroring')
        }
    },2500)  
})

async function consumePromiseFunf(){
    try {
        const response = await promiseFunf             // try-catch ist fur sync codes, but await pauses async so it works here
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFunf()

setTimeout(async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //console.log(response)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log('E:',error)
    }
},35000)

setTimeout(async function usingThenundCatch(){
    fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(response)
    
    .then(response=>response.json())                    //parse the raw response
    .then(data=>console.log(data))                      //use the parsed data
    .catch(error=>console.log(error))

},4000)

                    //or 
setTimeout(async function differentApproach(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })
},4000)

        //the above one has  no need of async because there's no await inside so we could write this way too

setTimeout(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')     //Dieser code ist vollig korrekt
    .then(res=>res.json())
    .then(dt=>console.log(dt))
    .catch(err=>console.log(err))
},1000)