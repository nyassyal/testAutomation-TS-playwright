class UserProfiless{
    protected email:string

    constructor(email:string){
        this.email = email
    }

    printEmail():void{
        console.log(`Email: ${this.email}`);
    }

    // const user1 = new UserProfiles('Str!ng123') //A class member cannot have the 'const' keyword.
}

const user2 = new UserProfiless('test@test.com')
    user2.printEmail();

class UserProfilessSub extends UserProfiless{
    constructor(email:string){
        super(email)
    }

    printEmail():void{
        console.log(`Email: ${this.email}`);
    }
}

const c1 = new UserProfilessSub('Tester@Test.com')
c1.printEmail;