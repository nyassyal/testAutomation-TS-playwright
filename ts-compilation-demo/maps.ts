let creds = new Map<string, any>();  //creating a new Map
creds.set('username', 'testUser'); // Adding a key-value pair
creds.set('password', 123);

console.log(creds.get('username')); // Output: testUser
console.log(creds)

creds.set(`username`,`Nyass`); // Overwrites the previous value for 'username'
console.log(creds)

console.log(creds.get('username')); // fetches the updated value from Map

let password = creds.get('password');  //@returns — Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
console.log(password);

console.log(creds.has('username')); // Output: true
console.log(creds.has('email')); // Output: false


console.log(creds.delete(`username`)); // Output: true, removes the 'username' key-value pair

console.log(creds);

creds.set('username', 'testUser'); 
let entries = ()=>{for(let [k,v] of creds.entries()){ // loops through the Map
    console.log(`${k}: ${v}`); // Output: username: testUser
}
};
entries(); // Output: username: testUser, password: 123