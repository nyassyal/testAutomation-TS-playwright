// let user;
// // console.log(user.name)// Runtime Error: Cannot read properties of undefined (reading 'name')
// null.toString() //TypeError: Cannot read properties of null (reading 'toString')

try{
    let user;
    console.log(username)
}
catch(error){
    console.log(`Error caught ${error.message}`) //Error caught username is not defined
        throw new Error(`Custom error`)

}
finally{
    console.log(`Cleanup code always runs`)
}