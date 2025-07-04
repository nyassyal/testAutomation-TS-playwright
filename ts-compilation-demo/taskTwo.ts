function isEven(a:number) : boolean{
    if(a%2===0){
        let even : string = `${a} is even`
        console.log(even)
        return true
    }

    else{
        let odd : string = `${a} is not even`
        console.log(odd)
        return false
    }
}

isEven(4)