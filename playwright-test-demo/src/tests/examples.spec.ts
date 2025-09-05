import {test, expect} from '@playwright/test';
import {getTestData} from '../utils/testdatareader';   

test('get started link', async({page})=>{
    const url = getTestData("base_url")
    console.log(`The base url from TestData.json file is ${url}`)
    // await page.goto(`https://playwright.dev`) 
    await page.goto(url) 


    // click the get started link
    await page.getByRole(`link`,{name: 'Get Started'}).click();

    //expects page to have a heading with the name of the installation
    await expect (page.getByRole('heading',{name:'Installation'})).toBeVisible();
});