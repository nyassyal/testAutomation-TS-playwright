//async function can be used for promise and callback but is not mandatory

//this function returns an asynchronous task
function fetchDataFromServer(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success = true //a success server response

            if(success){
                resolve(`Data successfully fetched`) //resolve with data
            }
            else{
                reject(`failed to fetch data`) //reject with error message
            }
        },2000)
    })
}

// async function with promise based function
async function fetchData(){
    try{
        console.log(`Fetching data from the server`)
        const result = await fetchDataFromServer() //wait for promise resolution
        console.log(result) //logs the message from resolve above
    }
    catch(error){
        console.log(error) //logs errors, if any
    }
}

//call the async function
fetchData()