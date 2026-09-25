import { Browser, Page } from "@playwright/test";
import { launchBrowser } from "./ChooseBrowserExportTest.ts";

(async () => {
  let browser: Browser = await launchBrowser("chrome");
  let page: Page = await browser.newPage();
  await page.goto("https://www.khanacademy.org/signup?");
  let title = await page.title();
  let url = page.url();
  console.log("Page Title: ", title);
  console.log("Page URL: ", url);
  await browser.close();
})();
