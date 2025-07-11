class UserProfile{
    public name: string
    private password: string
    protected email: string

    constructor (name: string, password: string, email: string){
        this.name=name
        this.email = email
        this.password = password
    }

    public showProfile():void{
        console.log(`Name: ${this.name}`)
        }

    private showPassword():void{
        console.log(`Password: ${this.password}`);
    }
    protected showEmail():void{
        console.log(`Email : ${this.email}`);
    }
}

const obj = new UserProfile('nyas','pwd','test@test.com');
obj.name = `Nyas`
obj.showProfile()
// obj.showPassword() //Property 'showPassword' is private and only accessible within class 'UserProfile'.ts
// obj.showEmail() //Property 'showEmail' is protected and only accessible within class 'UserProfile' and its subclasses.ts

/**
 * AdminProfile is a subclass of UserProfile
 */

class AdminProfile extends UserProfile{
    private role: string

    constructor(name:string, password: string, email: string, role:string){
        super(name,password,email)
        this.role = role
    }   

    public showRole():void{
        console.log(`Role: ${this.role}`);
    }

    protected showEmail(): void {
        console.log(`Email: ${this.email}`);
    }

}