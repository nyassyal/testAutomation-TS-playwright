import { test, expect } from '@playwright/test';
import path from 'path';

// test.skip('has title', async ({ page }) => { // skips this test case
// test.only('has title', async ({ page }) => { // only run this test case
// test.fail('has title', async ({ page }) => { // mark this test as failed
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/',{timeout:60000});

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/),{timeout:10000};
  // const timestamp = Date.now();
  // await page.screenshot({ path: `test-results/screenshots/screenshot_${timestamp}.png`, fullPage: true });
  // await page.video().saveAs(`test-results/videos/video_${timestamp}.webm`);

  
});

// test(`should click login button`, async({page})=>{
//   await page.goto('http://127.0.0.1:5500/tests/myfirstapp.html');
//   await page.getByTestId(`login-button`).click(); // This will fail - when the button is not found; now it will not because the correct test id is used(data-testid and not pw-test-id)

// })

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');  

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


