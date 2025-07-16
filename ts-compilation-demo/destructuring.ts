// destructuring arrays
const number = [1,2,3];
const [a,b] = number;
 console.log(a);  // Output: 1
console.log(b);  // Output: 2
// console.log(c); // Output: undefined


//destructuring objects and getting properties 
const user : {names: string, age: number, locations:string} = {
    names: "Alice",
    age: 30,
    locations: "Wonderland"
}

const {names, locations} = user;

console.log(names);      // Output: Alice
console.log(locations);  // Output: Wonderland   