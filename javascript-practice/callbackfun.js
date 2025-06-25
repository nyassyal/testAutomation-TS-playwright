// function orderCoffee(callback){
//     setTimeout(()=>{
//         callback('coffee is ready')
//     },2000)
// }

// orderCoffee((coffee)=>{
//     console.log(coffee)
// })

function waitWithCallback(ms, callback){ //time in ms, callback are input   
    setTimeout(()=>{
        callback(`Waited ${ms}ms callback`) //calback is taking input because we are defining the 'msg'(callback) as an arrow function below
    }, ms)
}

console.log('Function01: Start (callback)') //Executes first

waitWithCallback(3000, (msg)=>{ //waiting for 3 sec -- callback is now an arrow function
    console.log(`Function02: ${msg}`) //executes last
    console.log('End (callback)')
})

console.log(`Function03: This runs immediately after async call`) //executes second