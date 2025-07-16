import { retry } from './retry';

async function flakyOperation(): Promise<string>{
    if(Math.random()<0.7){
        throw new Error(`Random Failure`)
    }
    return `Success`;
}

(async ()=>{
    try{
        const result = await retry(flakyOperation,5);
        console.log(`Operation succeeded with result: ${result}`);
    }
    catch(error){
        console.error(`Operation failed after retries:`, error);
    }
})()