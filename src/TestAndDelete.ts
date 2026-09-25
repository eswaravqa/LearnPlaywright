import { Browser, chromium, Page } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  let page: Page = await browser.newPage();
  await page.goto("https://www.khanacademy.org/signup?");
  let title = await page.title();
  console.log("Page Title is: ", title);
  await browser.close();
})();
