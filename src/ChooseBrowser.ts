import { Browser, chromium, Page } from "@playwright/test";
//The code in this file is for understanding purpose only. Playwright has already done the browser launch part all we need to do is call it. This is way of developing the code is anti pattern.

type BrowserName = "chrome" | "msedge" | "firefox" | "webkit";
async function launchBrowser(browserName: BrowserName) {
  console.log("Browser Name: ", browserName);

  switch (browserName.trim().toLowerCase()) {
    case "chrome":
      return await chromium.launch({ headless: false, channel: "chrome" });
    case "msedge":
      return await chromium.launch({ headless: false, channel: "msedge" });
    case "firefox":
      return await chromium.launch({ headless: false });
    case "msedge":
      return await chromium.launch({ headless: false });
    default:
      console.log("invalid browser........", browserName);
      throw new Error("Invalid Browser:, ${browserName}");
  }
}

//Choose browser and Launch
let browser: Browser = await launchBrowser("msedge");
let page: Page = await browser.newPage();
await page.goto("https://www.khanacademy.org/signup?");
let title = await page.title();
let url = page.url();
console.log("Page Title: ", title);
console.log("Page URL: ", url);
await browser.close();
