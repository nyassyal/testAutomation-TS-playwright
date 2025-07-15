let text:string = `Playwright`;

console.log(text.length); // Output: 10
console.log(text.toUpperCase()); // Output: PLAYWRIGHT
console.log(text.toLowerCase()); // Output: playwright
console.log(text.includes(`wright`)); // Output: true
console.log(text.replace(`wright`, `test`)); // Output: Playtest
console.log(text.indexOf(`w`)); // Output: 5    
console.log(text.substring(0,4)); // Output: Play
console.log(text.replaceAll(`w`, ` `)); // Output: Play  right

let str :string = `This is it`;

console.log(str.split(` `)); // Output: [ 'This', 'is', 'it' ]

let strtrim :string = `   Trim this string   `;
console.log(strtrim.trim()); // Output: 'Trim this string'

const fruits: string = 'Apple,Banana,Cherry';
let splitfruit = fruits.split(`,`)

console.log(splitfruit); // Output: [ 'Apple', 'Banana', 'Cherry' ]

for(let fruit of splitfruit){
    if(fruit == `Banana`){
        console.log(`Found Banana!`);
        break; // Exit the loop after finding Banana
    }
}


if(fruits.includes(`Banana`)){
    console.log(`Banana is in the list!`);
}