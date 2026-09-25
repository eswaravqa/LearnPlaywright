import { test, expect } from '@playwright/test';

test('Search Samsung on Amazon', async ({ page }) => {

  // 1. Launch Amazon
  await page.goto('https://www.amazon.ca');

  // 2. Find search bar and enter Samsung
  await page.locator('#twotabsearchtextbox').fill('Samsung');

  // 3. Click on search button
  await page.locator('#nav-search-submit-button').click();

  // Optional: verify results page loaded
  await expect(page).toHaveURL(/s?k=Samsung/);
});
