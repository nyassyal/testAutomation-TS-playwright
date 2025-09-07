import {test, expect} from '@playwright/test'
import { LoginPage } from '../page/loginPage';
import { customLogger } from '../logger/customLogger';

// test(`Login with valid credentials`,async({page})=>{
//      const loginPage = new LoginPage(page);

//      await loginPage.goto();
//      await loginPage.login('testuser','password123');
//      await loginPage.verifyLoginSuccess('testuser');
// });

 const logger = new customLogger();

    test(`Login test with logger`, async({page})=>{
        const loginPage = new LoginPage(page);

        logger.info(`Navigating to login page`);
        await loginPage.goto();
        await loginPage.login('standard_user','secret_sauce');
        await loginPage.verifyLoginSuccess();

    });