import { test, expect, Locator } from "@playwright/test";

test("Footer Link Text Validations", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=common/home",
  );

  //Two methods 1.allTextContent 2.allInnerText
  //1.allTextContent -- will give text content including childs if any
  //2.allInnerText -- will give only text content of that element only
  //most use cases carry allInnerText but not allTextContent
  //Practice:  //https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17
  //https://rahulshettyacademy.com/AutomationPractice/

  let allFooterLinksInnerTextVal: Locator[] = await page
    .locator("footer a")
    .all();
  console.log(allFooterLinksInnerTextVal);
  console.log(allFooterLinksInnerTextVal.length);

  for (let i = 0; i < allFooterLinksInnerTextVal.length; i++) {
    let hRefVal = await page.locator("footer a").nth(i).getAttribute("href");
    let innerTextVal = await page.locator("footer a").nth(i).innerText();
    let link = page.locator("footer a").nth(i);

    console.log("Clicking on : ", innerTextVal);
    console.log("hRef Value : ", hRefVal);
    link.click();
    page.waitForTimeout(500);

    await page.goBack();
  }

  //await page.pause();
});
