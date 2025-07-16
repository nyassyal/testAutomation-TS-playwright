export async function retry<T>(
    fn:()=> Promise<T>,
    retries: number = 3,
   
):Promise<T>{
    let err: any;
    
        for(let i=0;i<retries;i++){
            try{
                return await fn();
            }
            catch(e){
                err = e;
            }
        }
    throw err;
}

