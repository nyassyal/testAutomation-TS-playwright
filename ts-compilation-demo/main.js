// TypeScript source file (main.ts)
// Define a strongly typed function
function calculateArea(width, height) {
    return width * height;
}
// Implement the interface
var Employee = /** @class */ (function () {
    function Employee(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
    Employee.prototype.greet = function () {
        return "Hello, my name is ".concat(this.name, " and I work as a ").concat(this.role, ".");
    };
    return Employee;
}());
// Create an instance
var employee = new Employee("Alice", 30, "Developer");
// Use the function and object
console.log("Area calculation: ".concat(calculateArea(5, 10)));
console.log(employee.greet());
// Using TypeScript-specific features like type assertion
var unknownValue = "This is a string";
var strLength = unknownValue.length;
console.log("String length: ".concat(strLength));
