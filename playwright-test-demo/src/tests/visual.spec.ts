import { test, expect, Page } from "@playwright/test";
import { time } from "console";

test (`hero section should look the same`,async({page})=>{
    await page.goto(`https://playwright.dev/`)
    await expect(page).toHaveScreenshot();
});

test (`example test`,async({page})=>{ // each test case with unique name will have its own screenshot baseline
    await page.goto(`https://playwright.dev/docs/intro`)
    await expect(page).toHaveScreenshot();
});

test(`timer test1`, async ({ page }) => { //fails because the web page has dynamic content
    test.setTimeout(180000);
    await page.goto('https://vclock.com/time/')
    await page.waitForLoadState('domcontentloaded'); 
    await expect(page).toHaveScreenshot(),{timeout: 180000};
}); 

test(`timer test`, async ({ page }) => {//fails because the web page has dynamic content
    test.setTimeout(180000);
    await page.goto('https://www.timeanddate.com/')
    await page.waitForLoadState('domcontentloaded'); 
    await expect(page).toHaveScreenshot(),{timeout: 180000};
}); 

//Element Level Snapshot

test(`ignore the dynamic content1`, async({page})=>{
    await test.setTimeout(180000);
    await page.goto('https://www.timeanddate.com/');
    

    const mainContentSection = page.locator(`//body/div[@class='main-content-div']/div[@class='tad-template-index']/div[@class='tad-layout-page']/div[@class='tad-layout-page__content']/article[@class='tad-layout-page__main']/div[@class='tad-layout-content']/div[@class='tad-layout-content__content']/main[@class='tad-layout-content__main']/div[@class='tad-layout-rows tad-layout-rows--block']/div[1]/section[1]/div[1]`);

    const liveClockElement = page.locator(`//a[@id='clk_box']`);

    await liveClockElement.evaluate((element)=>{
        element.style.visibility = `hidden`;
    })

    // await page.waitForLoadState(`networkidle`);
    // await mainContentSection.waitFor({state:"visible"});

   // await expect(page).toHaveScreenshot();

    expect(await mainContentSection.screenshot()).toMatchSnapshot(`ignore-the-dynamic-content-1-chromium-win32`);
});