function fetchUser() : Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(()=>
            resolve(`John Doe`),2000)
    }
    );
}

async function getUserAndGreet(){
    console.log(`Fetching user...`);
    const user = await fetchUser();
    console.log(`Hello, ${user}`);
}

getUserAndGreet();