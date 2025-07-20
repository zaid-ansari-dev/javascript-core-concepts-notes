for (let index = 0; index < 10; index++) {
    const element = index
    console.log(element)
}

for(let i = 0; i <= 10; i++){
    if(i == 5){
        console.log('Five')
        continue;
    }
    console.log(i)
}

for(let i = 0; i <= 10; i++){
    console.log(`Outer loop value: ${i}`)
    for(let j = 0; j<=10; j++){
        console.log(`Inner loop value ${j} und outer loop ${i}`)
    }
}

for(let i = 1; i<=10; i++){
    console.log('Multiply table:')
    console.log(`5 X ${i} = ${5*i}`)
}

let myArray = ['flash','batman','superma']          
for(let index = 0; index < myArray.length; index++){ //if <= then it also gives undefined at the end
    console.log(myArray[index])
}