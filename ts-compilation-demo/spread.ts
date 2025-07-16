const arr1 = [1,2,3];
console.log(arr1); // Output: [1, 2, 3]

const arr2 = {...arr1}; // This will create a shallow copy of arr1 into arr2
console.log(arr2); // Output: { '0': 1, '1': 2, '2': 3 }

const arr3 = [...arr1]; // This will also create a shallow copy of arr1 into arr3
console.log(arr3); // Output: [1, 2, 3]

const arr4 = [...arr1, 4, 5]; // This will create a new array with elements of arr1 and additional elements 4 and 5
console.log(arr4); // Output: [1, 2, 3, 4, 5]

const aa = [1,2];
const bb = [3,4]
const cc = [...aa, ...bb]; // This will create a new array by combining elements of a and b

console.log(cc); // Output: [1, 2, 3, 4]
console.log(arr1 === arr2); // Output: false, because arr2 is a shallow copy of arr1, not a reference to the same array
console.log(arr1 === arr3); // Output: false, because arr3 is also a shallow copy of arr1, not a reference to the same array

const usersss = {name: 'Alice', age: 30, location: 'Wonderland'};
const updatedUser = {...usersss, age: 31, location: 'Somewhere'};
console.log(updatedUser);
    //{name:'Alice', age: 31, location: 'Somewhere'}
