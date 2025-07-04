//this works even if ran with node dataType.ts

// let message = `Demo String`
// console.log(message) //runs with node command, because its plain js not ts

//to make it ts, we need to add data type to the variable

let message: string = `Demo TS String`
console.log(message) // only runs with ts-node command