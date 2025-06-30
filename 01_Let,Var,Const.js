const accountId = 144
let accountEmail = "u@gmail.com"
var accountPassword = "1234" //scoping problem
accountCity = "Jaipur" //(bad practise) this creates a prblm cuz it creates a global variable which will bring unexpected eroor

let accountState;
// accountId = 145 // This will give an error because const variables cannot be reassigned

accountEmail = "dfs"

console.log(accountEmail)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])