//reduce -> combined everything into one

let numbers = [1,2,3,4]

let sum = numbers.reduce((acc,num)=>acc+num,0)
console.log(sum)

let fruits = ['a','b','c','d','e']

let combinedfruits = fruits.reduce((acc,num)=>acc+num,'alphabets -')
console.log(combinedfruits)

//automation based scenario
let results = ['pass', 'fail', 'pass']
let passCount = results.reduce((acc,r)=>r==='pass'?acc+1:acc,0)
console.log(passCount)
