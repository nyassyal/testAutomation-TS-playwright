/* // Converting this promise to async await syntax

function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`⏳ Waited ${ms}ms (promise)`);
    }, ms);
  });
}

console.log("FUNCTION-01: Start (sync)");

function runWithPromise() {
  wait(3000)
    .then((msg) => {
      console.log(msg);
      console.log("FUNCTION-02: End (promise)");
    });
}

console.log("FUNCTION-03: This runs immediately after async call");

runWithPromise();

Output:
FUNCTION-01: Start (sync)
FUNCTION-02: End (promise)
⏳ Waited 3000ms (promise)
FUNCTION-03: This runs immediately after async call

*/
function wait(ms : number){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            try{
                res(`⏳ Waited ${ms}ms (promise)`);
            }
            catch(e){ // no need to catch error here because it's a controlled demo, but just for demonstration
                rej(e);
            }
        },ms)
    })
}
console.log("FUNCTION-01: Start");

async function runWithAsyncAwait() {
    let msg = await wait(3000);

    console.log(msg);
    console.log("FUNCTION-02: End (async/await)");  
}

console.log("FUNCTION-03: This runs immediately after async call");

runWithAsyncAwait();

// Output:
// FUNCTION-01: Start
// FUNCTION-02: End (async/await)
// ⏳ Waited 3000ms (promise)
// FUNCTION-03: This runs immediately after async call
