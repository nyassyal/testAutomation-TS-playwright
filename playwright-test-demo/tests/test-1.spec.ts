import {test,expect} from '@playwright/test';
import path from 'path'

test (`locator demo`,async({page})=>{

    await page.goto(`http://127.0.0.1:5500/tests/actions.html`)
    // await page.locator(`xpath=//input[@placeholder='Enter name']`).fill(`Nyas`);
    // await page.waitForTimeout(5000);

    // await page.locator(`xpath=//label[normalize-space()='Birth date:']`).fill(`2025/08/31`)
    // await page.waitForTimeout(2000);

    // await page.waitForTimeout(5000)
    // //check the checkbox
    // const checkBoxElement = page.locator(`xpath=//label[normalize-space()='I agree to the terms above']`)
    // await checkBoxElement.check();
    // // assert the checked state
    // expect (checkBoxElement).toBeChecked();
    // //second checkbox assertion without checking it
    // const uncheckedBox = page.locator(`xpath=//label[normalize-space()='Subscribe to newsletter']`)
    // // await page.waitForTimeout(5000) // wait for the element to be visible
    // await expect(uncheckedBox.isChecked()).toBeFalsy();
    // // await page.waitForTimeout(5000) // timeout to see the result

    // const radioButton = page.locator(`xpath=//input[@name='size' and @value='M']`);
    // await radioButton.check();
    // await expect(radioButton).toBeChecked();
    // await page.waitForTimeout(5000)
    // //trying to click two radio buttons at once
    // const radioButton2 = page.locator(`xpath=//input[@name='size' and @value='L']`);
    // await radioButton2.check();
    // await expect(radioButton2).toBeChecked();
    // await page.waitForTimeout(5000) // only one is checkable because they have same name value

    //dropdown
    // const dropdownElement = page.locator("xpath=//select[@aria-label='Choose a color']")
    // await dropdownElement.selectOption(`Blue`)
    // await page.waitForTimeout(5000)

    //multi select dropdown
    // const multiDropdownElement = page.locator("xpath=//body/section[3]/label[2]")
    // await multiDropdownElement.selectOption([`Red`,`Green`,`Blue`])
    // await page.waitForTimeout(5000)

    // //Keyboard interactions
    // const keyboardInput = page.locator("xpath=//button[@role='button']")
    // await keyboardInput.press(`Enter`)
    // await page.waitForTimeout(5000)

    // //Single File Upload
    // const fileInput = page.locator("xpath=//input[@aria-label='Upload file']")
    // await fileInput.setInputFiles([path.join(__dirname, 'TestInput.txt')])
    // await page.waitForTimeout(5000)

    // // Multi File Upload
    // const multiFileInput = page.locator("xpath=//input[@aria-label='Upload files']")
    // await multiFileInput.setInputFiles([
    //     path.join(__dirname, 'TestInput.txt'),
    //     path.join(__dirname, 'TestUpload.pdf')
    // ])
    // await page.waitForTimeout(5000)

    // //Drag and Drop
    // const dragAndDropSource = page.locator("xpath=//div[@id='item-to-be-dragged']")
    // const dragAndDropTarget = page.locator("xpath=//div[@id='item-to-drop-at']")
    // await dragAndDropSource.dragTo(dragAndDropTarget)
    // await expect(dragAndDropTarget).toContainText(`Dropped`);
    // await page.waitForTimeout(5000)

    //Scrolling
    await page.getByText(`Footer text`).scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000);




    // await page.goto(`http://127.0.0.1:5500/tests/dialog.html`);

    // page.on(`dialog`,dialog=> dialog.accept());  //accept a dialog
    // await page.getByText(`Show Alert`).click()

    // page.on(`dialog`,dialog=> dialog.dismiss()); //dismiss a dialog
    // await page.getByText(`Show Confirm`).click()

    // print dialog - next line is more or less copy-paste
    // await page.evaluate('(() => {window.waitForPrintDialog = new Promise(f => window.print = f);})()');
    // await page.getByText('Print Page').click();

    // await page.waitForFunction('window.waitForPrintDialog');

    //     page.on('dialog', async dialog => {
    // if(dialog.type() === 'beforeunload')
    // await dialog.dismiss();
    // });
    // await page.close({ runBeforeUnload: true });
    
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

