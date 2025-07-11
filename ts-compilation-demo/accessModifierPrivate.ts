class UserProfiles{
    private password:string

    constructor(password:string){
        this.password = password
    }

    printPassword():void{
        console.log(`Password: ${this.password}`);
    }

    // const user1 = new UserProfiles('Str!ng123') //A class member cannot have the 'const' keyword.
}

const user1 = new UserProfiles('Str!ng123')
    user1.printPassword();