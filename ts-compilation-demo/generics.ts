function identity <T>(value: T): T { // This is a generic function that takes a value of type T and returns it.
    // The type T is a placeholder that can be replaced with any type when the function is called.
    // This allows the function to be flexible and work with different types without losing type information.
    console.log(value);
    return value;
}

let output1 = identity<string>(`Nyas`)
let output2 = identity<number>(1234)


//why dont we use 'any' type here?

function getTest(arr:any[]){
    console.log(arr[0]);
        return arr[0]
}

const val = getTest([1,'2',3,44,5]) // This will return the first element of the array, but it loses type information.

//replace with generics
function getTestWithGenerics<T>(arr:T[]):T{
    console.log(arr[0]);
    return arr[0];
}

const val1 = getTestWithGenerics<number>([1,2,3,44,5]) // This will return the first element of the array with type information preserved.

interface ApiResponse<T>{
    status:number,
    message: T
}

const userResponse : ApiResponse<{name:string, age:number}> = {
    status: 200,
    message: {
        name: "John",
        age: 30
    }
};

//Generics >> 'any' because it allows us to define a type that can be replaced with any type when the function is called, while 'any' loses type information and does not provide type safety.