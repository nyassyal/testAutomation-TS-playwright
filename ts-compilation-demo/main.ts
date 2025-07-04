// TypeScript source file (main.ts)

// Define a strongly typed function
function calculateArea(width: number, height: number): number {
  return width * height;
}

// Define an interface
interface Person {
  name: string;
  age: number;
  greet(): string;
}

// Implement the interface
class Employee implements Person {
  constructor(public name: string, public age: number, private role: string) {}
  
  greet(): string {
    return `Hello, my name is ${this.name} and I work as a ${this.role}.`;
  }
}

// Create an instance
const employee = new Employee("Alice", 30, "Developer");

// Use the function and object
console.log(`Area calculation: ${calculateArea(5, 10)}`);
console.log(employee.greet());

// Using TypeScript-specific features like type assertion
const unknownValue: any = "This is a string";
const strLength: number = (unknownValue as string).length;

console.log(`String length: ${strLength}`);
