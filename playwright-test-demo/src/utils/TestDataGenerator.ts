//test-helpers.ts

export class TestDataGenerator{

    //Generate Random string of specific length
    static generateRandomString(length:number):string{
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    }

    //Generate Random alphanumeric string
    static generateRandomAlphanumeric(length:number):string{
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    }   

    //Generate random integer between min and max{inclusive}
    static generateRandomInteger(min:number, max: number):number{
        return Math.floor (Math.random() * (max - min + 1)) + min;
    }

    //Generate random email
    static generateRandomEmail():string{
        const username = this.generateRandomAlphanumeric(10);
        const domains = ['example.com','gmail.com','hotmail.com','yahoo.com','test.com']
        const randomDomain = domains[Math.floor(Math.random() * domains.length)]
        return `${username}@${randomDomain}`;
    }

    //Generate random phone number
    static generateRandomPhone():string{
        const randomDigits = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)).join('');
        return `+1${randomDigits}`;
    }

    //Generate random date between start and end
    static generateRandomDate(start:Date,end:Date): Date{
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
}