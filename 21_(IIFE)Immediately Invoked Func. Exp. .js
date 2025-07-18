(() => {
    console.log('hey')
})();                  //semicolon is required //don't think too much js is dumm

(() => {
    console.log('hey')
})();

//global scope pollutes sometimes so to stop the pollution due to variable,declaration,etc.
//creates a private scope(not accessible from outside)
//prevents global namespace pollution 

//passing arguments then:
((name) => {
    console.log(`${name} is...`)
})('zaid');
//this is simple IIFE

(function chai () {
    console.log(`heheehehhe`)
})()
//this is Named IIFE