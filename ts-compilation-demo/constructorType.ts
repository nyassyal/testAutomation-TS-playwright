class Users{
    name:string
    email?: string
    
    /**
     *
     * @param name 
     * @param email 
     * 
     * Unlike Java, we cannot have multiple constructors in the same Class!!!
     */
//     constructor(name:string, email:string){ //parameterized Constructor
//         this.name = name
//         this.email = email
        
//     }

//        constructor(){ //default constructor
//     console.log(`This is a default constructor`)
// }

        constructor(name:string, email?:string){ //optional param Constructor
        this.name = name
        this.email = email
        
    }
}

