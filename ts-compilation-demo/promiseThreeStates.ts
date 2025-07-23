function simulateAsync(state : `success` | `fail`) : Promise<string> {
    return new Promise((resolve, reject) => {

        console.log(`Promise is in Pending State`);
        setTimeout(() => {
            if (state === `success`) {
                resolve(`Promise is Fulfilled, Operation was successful`);
            } else {
                reject(`Promise is Rejected, Operation failed`);
            }
        }, 2000);
    });
}

async function handleAsync(state : `success` | `fail`) {
    try{
        const result = await simulateAsync(state);
        console.log(`Promise is fulfilled`, result);
    }
    catch(e){
        console.log(e);
    }
}

handleAsync(`success`);
handleAsync(`fail`);