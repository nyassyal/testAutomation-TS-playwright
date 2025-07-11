//if type is not defined, TS sets it as 'any'

interface User{
    name : string;
    age : number;
    isAdmin? :  boolean; //isAdmin with a ? means it is an optional field 
}

// const user :User = {
//     name : `John`,
//     age: 25,
//     isAdmin: true
// };

const greet = (user: User) : void =>{
        console.log(`Hello ${user.name}, your age is ${user.age} years`)

}

const tester : User  = {name: `Nyas`, age: 25}

// console.log(tester)
greet(tester)
// greet(user)