import {add, PI} from './exportExample';
import {multiply as mul} from './exportExample'; // Importing with alias or renaming
import subtract from './exportExample'; // Default import(without the curly braces)

// import subtract, {PI} from './exportExample'; // Importing default and named exports together - mixed import

console.log(add(5,3));
console.log(PI);

console.log(mul(6,5));

console.log(subtract(2,100));