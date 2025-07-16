let value :string | number;
 value = "Hello";
value = 42;
// value = true; // Type 'boolean' is not assignable to type 'string | number

function greett(user : string | number) {
    if (typeof user === "string") {
        // console.log(`Hello, ${user}!`);
       return `Hello, ${user}!`
    } else {
        // console.log(`You are ${user} years old!`);
        return `You are ${user} years old!`
    }
}

console.log(greett(`Alice`));
console.log(greett(30));


// any, union, overloading, and, generics are all powerful features in TypeScript that allow for flexible and type-safe code.
// They enable developers to write code that can handle multiple types while still maintaining type safety and clarity.

function riskyPrint(data: string|number){
    //console.log(data.toUpperCase()); // Error: Property 'toUpperCase' does not exist on type 'string | number'
    if (typeof data === "string") {
        console.log(data.toUpperCase()); // This is safe
    } else {
        console.log(data.toFixed(2)); // This is safe for numbers
    }

}

riskyPrint(`Hello`)
riskyPrint(42.1234);