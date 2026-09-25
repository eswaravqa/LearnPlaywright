import { test, expect } from "@playwright/test";

test("dataTestId Test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/ui/data-testid-page.html",
  );

  //data-testid="username-input"
  await page.getByTestId("username-input").fill("test id input test");
  await page.getByTestId("email-input").fill("test222@gmail.com");
  await page.getByTestId("password-input").fill("test222");
  await page.getByTestId("country-select").selectOption("Canada");
  await page.pause();

});

test("data-Test-Id Confiruation In PlaywriteConfig Test", async ({ page }) => {
 
  //If data test id defined differently in web page we can still configure it in playwright.config.ts

  //https://app.hubspot.com/signup-hubspot/ -- in this website data-test-id="EMAIL" is having a differnt testid 
  //there is an extra - after test . this can be configured in playwright.config.ts 


    await page.goto(
    "https://app.hubspot.com/signup-hubspot/",
  );
    await page.getByTestId("EMAIL").fill("test444@gmail.com");
    await page.pause();

});

