let usersarr: string[] = ['Alice', 'Bob', 'Charlie']; //We get - Type 'number' is not assignable to type 'string' when we try to assign a number to this array
console.log(usersarr.length);
console.log(usersarr[1]);
console.log(usersarr.push(`David`)); //returns the new length of the array
console.log(usersarr.pop()); //removes the last element and returns it
console.log(usersarr);
console.log(usersarr.shift()); //removes the first element and returns it
console.log(usersarr.unshift('Eve')); //adds a new element at the beginning and returns the new length
console.log(usersarr.includes(`Bob`)); //returns true as 'Bob' is in the array
console.log(usersarr.includes(`Ted`)); //returns false as 'Ted' is not in the array
console.log(usersarr.indexOf('Bob'));
console.log(usersarr.filter(user => user.startsWith('A'))); // Filters users starting with 'A'
console.log(usersarr.map(user => user.toUpperCase()));
console.log(usersarr.find(user => user === `Bob`)); // Finds first 'Bob' in the array
console.log(usersarr.splice(1, 2)); // Removes 'Bob' and 'Charlie'
console.log(usersarr.slice(1, 3).join(`,`)); // Returns a new array with 'Bob' and 'Charlie'
console.log(usersarr.forEach(element => {
    console.log(element);
}));

console.log(usersarr.push(`Bob`,`Charlie`, `David`)); // Adds multiple elements at once

console.log(usersarr.map(user => user.toUpperCase()).filter(user => user.startsWith('E'))); // Map and Filter combined, returns ['EVE']
console.log(usersarr.map(u => u.replace(`e`,`E`))); 
console.log(usersarr.filter(u => u.endsWith(`e`)).map(u=>u.replace(`E`,`e`)));


let scores: Array<number> = [85, 90, 78];

    