//map -> change each item

let numbers = [1,2,3]

let doubled = numbers.map(num =>num*2);// something that needs to be applied to each element in the array
console.log(doubled)

//automation based scenario
let usernames = ['user1','user2']
let testUsers = usernames.map(u=>({username: u, password: 'Test@123'}))
console.log(testUsers)