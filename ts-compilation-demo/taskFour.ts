 /*// Convert the following async/await code to promise.then() syntax

function loginUser() {
   return new Promise((resolve) => {
       setTimeout(() => resolve("Logged in as Sidharth"), 6000);
   });
}


function fetchDashboard() {
   return new Promise((resolve) => {
       setTimeout(() => resolve("Dashboard loaded"), 3000);
   });
}


function fetchVoid() {
   console.log("Void function called");
}


async function runApp() {
   const loginMessage = await loginUser();
   console.log(loginMessage);


   const dashboard = await fetchDashboard();
   console.log(dashboard);
}


runApp();
fetchVoid();
 */

function loginUser(){
    return new Promise((res,rej) => {
        setTimeout(()=>{
            try{
                res("Logged in as Sidharth")
            }
            catch(e){
                rej(e)
            }
        },3000)
        
})}

function fetchDashboard(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try {
                resolve("Dashboard loaded")
            } catch (error) {
                reject(error)       
            }
        }, 3000)
    })
}

function fetchVoid(){
    console.log(`Void function called`);
}

function runApp() {
    loginUser().then((message) => console.log(message)).then(fetchDashboard).then((message) => console.log(message)); // this will log the login message and then the dashboard message
}

runApp();
fetchVoid();