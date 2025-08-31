import {test,expect} from '@playwright/test';
import { TIMEOUT } from 'dns';

test (`locator demo`,async({page})=>{
    await page.goto(`http://127.0.0.1:5500/tests/locators.html`);
    // creating a locator
    // const clickMeButton = page.getByRole(`button`,{name:`Click Me`});
    // await clickMeButton.click();

    // const navElement = page.getByRole(`navigation`,{name:`Main Navigation`});
    // navElement.isVisible();
    // await page.getByPlaceholder(`Search here...`).fill(`Playwright`);
    // await expect (page.getByText(`Welcome, John`)).toBeVisible();
    // await expect(page.getByText(`Welcome, John`, {exact: true})).toBeVisible();
    // await expect(page.getByText(/welcome, [A-Za-z]+$/i)).toBeVisible();
    // await page.getByAltText(`Playwright Logo`).click();
    // await expect(page.getByTitle(`More Info`)).toHaveText(`Hover over me`);
    await expect(page.getByTestId(`submit-btn`)).toHaveText(`Submit Form`);

    //Locators in a form
    // await page.goto(`http://127.0.0.1:5500/tests/iframeApp.html`);


    // //Step 1: Start from the page
    // const formLocator = page.getByRole(`form`);

    // //Step 2: Narrow down to the label inside the form
    // const usernameField = formLocator.getByLabel(`Username`);

    // //Step 3: Fill it
    // await usernameField.fill(`myUsername`);

    //Locators in an iframe
    // await page.goto(`http://127.0.0.1:5500/tests/iframeApp.html`);


    // //Step 1: Accessing the frame first
    // const frame= page.frameLocator(`#loginFrame`);

    // //Step 2: Narrowing down inside the frame
    // const password =  frame.getByLabel(`Password`);

    // //Step 3: Fill it
    // await password.fill(`myPassword`)
    // await frame.getByRole(`button`, {name:`Login`}).click();

});

