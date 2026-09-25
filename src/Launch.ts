import { Browser, chromium, Page } from "@playwright/test";
//When we write tests outside the Tests folder we have to
// execute file from terminal
//Inside the tests folder we can Playwright Runner will
// help to execute the cases npx playwright test command will
// first check the test.config.ts and in configuration test dire
//will be found it will go into test directory and start
// executing all spec.ts files uner test directory

//Although the following Browser launch is not used - but it is one of the ways to Launch browser without spec.ts (Not from test directory as configured in playwright.config.ts)
//Sequence: Browser --> Page --> URL --> Locator
(async () => {
  //Launch Browser
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "msedge",
  });
  let page: Page = await browser.newPage();
  await page.goto("https://www.khanacademy.org/signup?");
  let title = await page.title();
  let url = page.url();
  console.log("Page Title: ", title);
  console.log("Page URL: ", url);
  await browser.close();
})();
