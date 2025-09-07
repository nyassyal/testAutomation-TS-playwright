import {expect, Page} from '@playwright/test';
// import {customLogger} from '../logger/customLogger';



export class LoginPage{

    readonly page : Page;
    readonly usernameInput;
    readonly passwordInput;
    readonly loginButton;
    readonly welcomeMessage;
    readonly productsTitle;
    // const logger = new customLogger();


    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.welcomeMessage = page.locator('h1');
        this.productsTitle = page.locator(`.product_label`);
    }

 

    async goto(){
        // logger.info(`Navigating to Login page`)
        await this.page.goto('https://saucedemo.com/v1/')
    }

    async login(username,password){
        // logger.info(`Filling username and password`);
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);

        // logger.info(`Clicking on login button`);
        await this.loginButton.click();
    }

    async verifyLoginSuccess(){
        await (expect(this.productsTitle).toHaveText(`Products`));
        // logger.info(`Login Successful, Product page is visible`)
    }
}