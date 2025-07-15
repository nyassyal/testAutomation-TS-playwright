// Function overload signatures 

function greett(name: string): string;
function greett(age: number): string;

//Functon implementation
function greett(value: string | number): string {
    if (typeof value === 'string') {
        return `Hello, ${value}!`;
    } else {
        return `You are ${value} years old!`;
    }
}

// Usage

console.log(greett("Alice")); // Output: Hello, Alice!
console.log(greett(30)); // Output: You are 30 years old!

// console.log(greett(true)); // Error Output: No overload matches this call.

//Use Case in Test Automation
function fillInput(selector: string, value: string): void;
function fillInput(selector: string, value: number): void;
function fillInput(selector: string, value: string | number): void {
    //Playwright Fill Input Implementation
    console.log(`Filling ${selector} with value: ${value}`);
}

fillInput('#username', 'testUser'); // Filling #username with value: testUser
fillInput('#age', 25); // Filling #age with value: 25