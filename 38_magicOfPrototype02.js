let name = 'zaid  '
console.log(name.length)
console.log(name.trim().length)
console.log(name.truelength)

const hero = ['thor','spidy']
let heroPower = {
    thor: 'thunder',
    spidy: 'web',
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spidy}`)
    }
}

Object.prototype.zaid = function(){
    console.log('zaid is present in all objects')
}

heroPower.zaid()
hero.zaid()     //that's fire right here..lemme explain
                //from above it looks like -->const hero = ['thor','spidy']
                //but under the hood it is just a special object: {
                                                                    // 0: 'thor',
                                                                    // 1: 'spidy',
                                                                    // length: 2,
                                                                    // __proto__:Array.prototype
                                                                    // __proto__:Object.prototype
                                                                    // }


                                                                    // hero (array)
                                                                    // ↓ inherits from
                                                                    // Array.prototype
                                                                    // ↓ inherits from
                                                                    // Object.prototype

                                                                    // ❓ Does hero have its own zaid()? → No.

                                                                    // ❓ Does Array.prototype have zaid()? → No.

                                                                    // ❓ Does Object.prototype have zaid()? → ✅ YES → call it!

Array.prototype.heyZaid = function(){
    console.log('wo bin ich?')
}
hero.heyZaid()
//heroPower.heyZaid() //just think 



//inheritance
//alt-weg
const user = {
    name: 'zaid',
    email: 'google.com'
}
const teacher = {
    makeVideos: true
}
const teachingSupport = {
    isAvailable: false
}
const TAsupport = {
    makeAssignments: 'js assignmnet',
    fullTime: true,
    __proto__:teachingSupport
}

teacher.__proto__= user



//mordern-weg
Object.setPrototypeOf(teachingSupport,teacher)


let anotherUserName = 'zaidCode  '

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is : ${this.trim().length}`)
}

anotherUserName.trueLength()

'zaid'.trueLength()
'cola'.trueLength()