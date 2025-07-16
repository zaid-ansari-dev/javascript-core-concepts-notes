function one() {
    const userName = 'zaid'

    function two() {
        const webSite = 'youTUbe'
        console.log(userName)
    }
    // console.log(webSite)
    two()
}

one()

if(true) {
    const username = 'zaid'
    if(username === 'zaid'){
        const website = 'youtube'
        console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

function addOne(num){
    return num + 1
}
addOne(5)


const addTwo = function(num){ //this just holds wert in variable
    return num + 2
}
addTwo(5)//u can't write this above cuz you ain't calling function you calling variable this won't work gibt error
// console.log(addTwo(5))

