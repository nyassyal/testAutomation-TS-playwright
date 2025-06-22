const add = (a,b)=> a+b
console.log(add(3,5))

const greet = name =>`Hello ${name}` //no paranthesis for single parameter arrow-function
console.log(greet('Nyas'))
const greet1 = (name) =>`Hello ${name}` //no paranthesis for single parameter arrow-function
console.log(greet('Nyas'))

const multiply = (a,b)=>{
    let result = a*b
    return result //without return statement in multi-line, undefined is returned
}

console.log(multiply(2,3))