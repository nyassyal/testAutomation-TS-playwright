//function that simulated package delivery

const deliverPackage=()=>{
    return new Promise((resolve, reject)=>{
        console.log(`Package is on its way...`)
        setTimeout(()=>{
            const delivered = true; //hard coding the delivery status
            if(delivered){
                resolve(`package delivered successfully`)
            }
            else{
                reject(`Failed to deliver Package`)
            }
        },3000)
        console.log(`Package is in transit`)
    })
}

//Using the Promise
deliverPackage()
.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log(error) //without catch also we can work but we get unhandled exception
})

