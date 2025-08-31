import {test,expect} from '@playwright/test';

test (`locator demo`,async({page})=>{

    await page.goto(`http://127.0.0.1:5500/tests/dialog.html`);

    // page.on(`dialog`,dialog=> dialog.accept());  //accept a dialog
    // await page.getByText(`Show Alert`).click()

    // page.on(`dialog`,dialog=> dialog.dismiss()); //dismiss a dialog
    // await page.getByText(`Show Confirm`).click()

    // print dialog - next line is more or less copy-paste
    // await page.evaluate('(() => {window.waitForPrintDialog = new Promise(f => window.print = f);})()');
    // await page.getByText('Print Page').click();

    // await page.waitForFunction('window.waitForPrintDialog');

        page.on('dialog', async dialog => {
    if(dialog.type() === 'beforeunload')
    await dialog.dismiss();
    });
    await page.close({ runBeforeUnload: true });
    
    // await page.goto(`http://127.0.0.1:550`0/tests/shadowDOM.html`);
    // const openShadowDOM = page.getByText(`Details (Open Shadow)`);
    // await openShadowDOM.click();

    // const closedShadowDOM = page.getByText(`Details (Closed Shadow)`);
    // await expect(closedShadowDOM).toBeVisible();
    // await closedShadowDOM.click();

    // await page.goto(`http://127.0.0.1:5500/tests/locators.html`);
    // // creating a locator
    // // const clickMeButton = page.getByRole(`button`,{name:`Click Me`});
    // // await clickMeButton.click();

    // // const navElement = page.getByRole(`navigation`,{name:`Main Navigation`});
    // // navElement.isVisible();
    // // await page.getByPlaceholder(`Search here...`).fill(`Playwright`);
    // // await expect (page.getByText(`Welcome, John`)).toBeVisible();
    // // await expect(page.getByText(`Welcome, John`, {exact: true})).toBeVisible();
    // // await expect(page.getByText(/welcome, [A-Za-z]+$/i)).toBeVisible();
    // // await page.getByAltText(`Playwright Logo`).click();
    // // await expect(page.getByTitle(`More Info`)).toHaveText(`Hover over me`);
    // // await expect(page.getByTestId(`submit-btn`)).toHaveText(`Submit Form`);
    // // await page.locator(`//button[normalize-space()='Click Me']`).click();
    // const cssLocator = page.locator(`button[role='button']`);

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

    // filtering locators
    // await page.getByRole('listitem').filter({hasText: `Product 2`}).getByRole('button', {name: `Add to Cart`}).click();
    
    //Negative Scenario - Not have text
    // await expect(page.getByRole('listitem').filter({hasNotText: `Out of Stock`})).toHaveCount(2);

    //Filter by child/descendant
    // await page.getByRole('listitem').filter({hasText: `Product 2`}).getByRole('button', {name: `Add to Cart`}).click();

    //Matching only visible elements
    // await page.getByRole(`button`, {name: `Click Me`}).filter({visible: true}).click();
});

