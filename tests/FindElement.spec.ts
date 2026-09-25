import { test, expect, Locator } from "@playwright/test";

test("Find element and click", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  //Practice:  //https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17

  //<li class="gf-li"><a href="http://www.restapitutorial.com/">REST API</a></li>
  //class = "gf-li"
  let links = await page.locator("h3 a").allInnerTexts();
  console.log(links);

  await page.pause();
});
