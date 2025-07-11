/**
 * A class without constructor
 */


// class LoginPage{ //creating a class
    
//     open(url:string):void{ //creating a method with a string type input
//         console.log(`Navigating to URL: ${url}`) //printing the input param     
//     }

// }

// const login = new LoginPage() //creating object
// login.open(`https://www.example.com/login`)// Output: Navigating to URL: https://www.example.com/login

/**
 * Class with Constructor
 */

// class LoginPage{
//     url: string;

//     constructor(url:string){
//         this.url=url
//     }

//     open():void{
//         console.log(`Navigating to URL: ${this.url}`)
//     }

// }

// const login = new LoginPage(`https://www.example.com/login`)
// login.open()// Output: Navigating to URL: https://www.example.com/login


/**
 * Accessing a class methods without creating an object of the class
 */

class LoginPage{ //creating a class
    
     static open(url:string):void{ //creating a method with a string type input
        console.log(`Navigating to URL: ${url}`) //printing the input param     
    }

}

// console.log(LoginPage.open(`Static Method in Typescript`)) //prints the string but returns undefined 

LoginPage.open(`Static Method in Typescript`) // returns the string
