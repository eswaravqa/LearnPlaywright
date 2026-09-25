import { test, expect, Locator } from "@playwright/test";

test("Registration Page Find elements on Right menu items. Click on selected menu item", async ({
  page,
}) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );

  //Practice: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17
  //Registration Page: https://naveenautomationlabs.com/opencart/index.php?route=account/register
  //<a href="https://naveenautomationlabs.com/opencart/index.php?route=account/login" class="list-group-item">Login</a>

  //Captures all links under tag a and matches to class name list-group-item.
  let allLinks: Locator[] = await page.locator("a.list-group-item").all();
  console.log("Number of Links found: ", allLinks.length);

  for (let ele of allLinks) {
    ele.highlight();
    let linkText = await ele.textContent();
    console.log(linkText);
    page.waitForTimeout(1000);
    if (linkText === "My Account") {
      await ele.click();
      break;
    }
  }

  await page.pause();
});

test("Capture Footer Text", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=common/home",
  );

  //Practice: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17
  //Registration Page: https://naveenautomationlabs.com/opencart/index.php?route=account/register
  //<a href="https://naveenautomationlabs.com/opencart/index.php?route=account/login" class="list-group-item">Login</a>

  //Captures all links under tag a and matches to class name list-group-item.
  let allLinks: Locator[] = await page.locator("a.list-group-item").all();
  console.log("Number of Links found: ", allLinks.length);

  for (let ele of allLinks) {
    ele.highlight();
    let linkText = await ele.textContent();
    console.log(linkText);
    page.waitForTimeout(1000);
    if (linkText === "My Account") {
      await ele.click();
      break;
    }
  }

  await page.pause();
});
