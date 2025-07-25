//document.getElementById('title').id -- value
//document.getElementById('title').class -- undefined
//document.getElementById('title').className -- value
//document.getElementById('title').getAttribute() -- undefined
//document.getElementById('title').getAttribute('id') -- value
//document.getElementById('title').getAttribute('clas') -- value
//const title = document.getElementById('title')
//title.style.borderRadius = "15px"
//title.style.backgroundColor = "green"
//title.style.padding = '15px'
//title.innerHTML -- total html code
//title.innerText -- only visible value
//title.textContent -- includes invisible value along
//document.querySelector('h1') -- selects the first h1
//document.querySelector('input[type=password]')
//document.querySelector('ul')
//document.querySelector('.className')
//document.querySelector('#titleName')
//let myUl = document.querySelector('ul')
//let myLi = myUl.querySelector('li')
//myLi.style.backroundColor = 'green'
//myLi.innerText = 'zaid'
//let tempList = docment.querySelectorAll('li')
//tempList.style.color = 'green'-- no
//tempList[1].style.color = 'green' -- yes
//tempList.forEach(Farbe = {
//  Farbe.style.color = "green" })
//for(let i=0; i<tempList.length; i++){
//  tempList[1].style.color = "green"}
//let listItem = document.getElementsByClassName('header')
//listItem.forEach(item => {
//  item.style.color="green"}) -- no/NA not a function in there
//let store = Array.from(listItem)
//store.forEach(function(Farbe){
//  Farbe.style.color = "blue"}) -- passiert(happens)
//let myRed = document.querySelectorAll('.className')
// let mappLopp = myRed.map(farben => {
//  farben.style.color = "blue"
//  farben.innerText = "blah"
//  return farben})
//