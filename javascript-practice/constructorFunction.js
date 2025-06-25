function Person(name, age){
    this.name = name //'this' refers to the new object created
    this.age = age
}

//Creating objects using the constructor function

const person1 = new Person('John',30)
const person2 = new Person('Jane',25)

console.log(person1)
console.log(person2)