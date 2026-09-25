import { test, expect, Locator } from "@playwright/test";

test("get all innertext in footer in an array", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  //Practice:  //https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17

  //<li class="gf-li"><a href="http://www.restapitutorial.com/">REST API</a></li>
  //class = "gf-li"
  let links = await page.locator("h3 a").allInnerTexts();
  console.log(links);

  await page.pause();
});

test("get all sub menu items in footer", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  //Practice
  //https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17

  //<li class="gf-li"><a href="http://www.restapitutorial.com/">REST API</a></li>
  //class = "gf-li"
  //locator('li.gf-li')
  let links = await page.locator("li.gf-li").allInnerTexts();
  console.log(links);

  await page.pause();
});

test("Check All Left Menu Filter items", async ({ page }) => {
  //await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  // credentials to login: radha.manohar@gmail.com | Balaji@12
  //Practice
  //https://rahulshettyacademy.com/client/#/dashboard/dash
  //https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17

  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.getByRole("textbox", { name: "email@example.com" }).click();
  await page
    .getByRole("textbox", { name: "email@example.com" })
    .fill("radha.manohar@gmail.com");
  await page.getByRole("textbox", { name: "email@example.com" }).press("Tab");
  await page
    .getByRole("textbox", { name: "enter your passsword" })
    .fill("Balaji@12");
  await page.getByRole("button", { name: "Login" }).click();

  await page.waitForSelector("#sidebar");

  //<section _ngcontent-ioa-c34="" id="sidebar">
  let innerTextVal = await page
    .locator(
      "//h4 | //h5 | //h6 |  //h4/following-sibling::ul[1]/li |  //h5/following-sibling::ul[1]/li | //h6/following-sibling::ul[1]/li",
    )
    .allInnerTexts();
  console.log(innerTextVal);

  await page.pause();
});
