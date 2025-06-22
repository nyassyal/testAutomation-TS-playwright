function greet(name){
    return `Hello ${name}!`
}

console.log(greet('Nyas'))
console.log(typeof greet)



function isEven(num1,num2){
    if(num1%2===0 || num2%2===0)
        return `EVEN!!`
    else return `ODD....`
}
console.log(isEven(1 ,   3))