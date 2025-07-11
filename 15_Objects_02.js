const tinderUser = new Object()
console.log(tinderUser)
const TinderUser = {}
console.log(TinderUser)
TinderUser.id = 56566
TinderUser.name = "zaid"
TinderUser.isLoggedIn = false
console.log(TinderUser)

const regularUser = {
    email: "bat@gmail.com",
    fullName: {
        userFullName: {
            firstName: "zaid",
            lastName: "idk"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj3 = {obj1,obj2}//this shit copies props of obj2 in 1 and then 4
console.log(obj3)


//use this syntax
const obj4 = Object.assign(obj1,obj2)//it creates a neu empty obj {} and stores the props into 4..the values remains unchanged 
console.log(obj4) 
console.log(obj4 === obj1)

//But use this instead
const obj5 = {...obj1,...obj2}

//ARRay of Object

const users = [
    {
        id: 1,
        email:"hehe@"
    },

    {
        id: 1,
        email:"hehe@"
    },

    {
        id: 1,
        email:"hehe@"
    }
]

users[1].email = "haha@"
console.log(users[1].email)
console.log(users)

console.log(TinderUser)

console.log(Object.keys(TinderUser))
console.log(Object.values(TinderUser))//returns in array form

console.log(Object.entries(TinderUser))//nested array oder nur array

console.log(TinderUser.hasOwnProperty('isLoggedIn'))
console.log(TinderUser.hasOwnProperty('id'))

//study more about .hasOwnProperty
