function* generatorFunction(){
    yield 'Hello';
    yield 'World';
    yield '!'
}

// Using the generator function
const iterator  = generatorFunction();

console.log(iterator.next().value); //pauses, prints Hello and moves to the next step
console.log(iterator.next().value); //pauses, prints World and moves to the next step
console.log(iterator.next().value); //pauses, prints ! and moves to the next step