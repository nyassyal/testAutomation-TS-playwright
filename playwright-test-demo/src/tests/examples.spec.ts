import {test, expect} from '@playwright/test';
// import { getJsonArray, getJsonObject } from '../utils/testdatareader';
import { customLogger } from '../logger/customLogger';
import {TestDataGenerator} from '../utils/TestDataGenerator';
// import {getJsonArray, getJsonObject, getTestData} from '../utils/testdatareader';   

// test('get started link', async({page})=>{
    // const url = getTestData("base_url")
    // console.log(`The base url from TestData.json file is ${url}`)
    // // await page.goto(`https://playwright.dev`) 
    // await page.goto(url) 


    // // click the get started link
    // await page.getByRole(`link`,{name: 'Get Started'}).click();

    // //expects page to have a heading with the name of the installation
    // await expect (page.getByRole('heading',{name:'Installation'})).toBeVisible();

    // const user = getJsonObject("user");
    // console.log(user.name); //Nyas

    // const ids = getJsonArray("ids");
    // console.log(ids[2]); // 103
    // });

    // const loginData = [
    //     {username: 'standard_user',password: 'secret_sauce'}, //valid credentials
    //     {username: 'locked_out_user',password: 'secret_sauce'}, //locked out user
    //     {username: 'invalid_user',password: 'wrong_pass'}, //invalid user
    // ]

    // const loginData = getJsonArray("loginData"); //loads from json file

    // test.describe(`Login Tests with Data Provider`, ()=>{
    //     for(const data of loginData){
    //         test(`Login Test with username: ${data.username}`, async({page})=>{

    //             await page.goto('https://www.saucedemo.com/v1/');

    //             await page.fill(`#user-name`, data.username);
    //             await page.fill(`#password`, data.password);
    //             await page.click(`#login-button`);

    //             if (data.username ==='standard_user' && data.password ==='secret_sauce'){
    //                 // successful login
    //                 await expect(page).toHaveURL(/inventory.html/);
    //             }
    //             else{//failed login
    //                 await expect(page.locator(`[data-test="error"]`)).toBeVisible();
    //             }
    //         })
    //     }
    // });


    const logger = new customLogger();

    test(`Login test with logger`, async({page})=>{
        logger.info(`Navigating to login page`);
        await page.goto(`https://saucedemo.com/v1/`)

        logger.info(`Filling username and password`)
        // await page.fill(`#user-name`,`standard_user`);
        await page.fill(`#user-name`,`invalid_user`);
        await page.fill(`#password`,`secret_sauce`);

        logger.info(`Clicking Login Button`)
        await page.click(`#login-button`)

        logger.info(`Checking for inventory page load`)
        try{
            await expect(page.locator(`.product_label`)).toHaveText(`Products`);
            logger.info(`Login Successful`)
        }catch (error){
            logger.error(`Login failed, unable to redirect to the homepage`);
            throw error
            }

        

    });

    test(`generate Random test Data`, ()=>{
        //Random string
        const randomString = TestDataGenerator.generateRandomString(10);
        console.log(`Random String: ${randomString}`)

        //Random alphanumberic string
        const randomAlphanumeric = TestDataGenerator.generateRandomAlphanumeric(10)
        console.log(`Random Alphanumeric: ${randomAlphanumeric}`)

        //Random Integer between 1 and 100
        const randomInt = TestDataGenerator.generateRandomInteger(1,100)
        console.log(`Random Integer: ${randomInt}`)

        //Random email
        const randomEmail = TestDataGenerator.generateRandomEmail()
        console.log(`Random Email: ${randomEmail}`)

        //Random Phone Number
        const randomPhone = TestDataGenerator.generateRandomPhone()
        console.log(`Random Phone: ${randomPhone}`);

        //Random Date
        const randomDate = TestDataGenerator.generateRandomDate(new Date ('2020-09-12'), new Date ('2024-09-17'))
        console.log(`Random Date: ${randomDate}`);

    });