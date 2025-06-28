// // non-functional script as of now

// async function completeOrder(){
//     let coffee = await orderCoffee();
//     console.log(coffee)

//     let sandwich= await orderSandwich();
//     console.log(sandwich)

//     let donut = await orderDonut()
//     console.log(donut)

//     let bill = await getBill()
//     console.log(bill)
// }

// completeOrder()

// function fetchName(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>resolve('Nyas'),5000)
//     })
// }   

// async function showName(){
//     console.log(`WAIT>>>>>>`)
//     const name = await fetchName() //waits for promise to finish
//     console.log(`Name is: ${name}`)
//     console.log(`Still Waiting...`)
// }

// showName()

function fetchName(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve('Nyas'),5000)
    })
}   

function showName(){
    console.log(`WAIT>>>>>>`)
    const name = fetchName() //returns a promise, not the value
    console.log(`Name is:`, name) // returns Name is: Promise { <pending> }
    console.log(`Name is: ${name}`) // returns Name is: [object Promise]
    
}

console.log(`Still Waiting...`)
showName()