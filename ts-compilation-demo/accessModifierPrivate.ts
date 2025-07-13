class UserProfiles{
    private readonly password:string //Member 'password' is never reassigned; mark it as `readonly`.

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