import { test, expect } from '@playwright/test';
test('test to check test.step comes in report', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.screenshot({ path: 'screenshot.png' });
})
