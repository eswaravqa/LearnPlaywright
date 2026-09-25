import { test, expect } from "@playwright/test";

test("get Attribute Test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

  //Top Deals Link attributes
  let classAttributeOfTopDealIs = await page
    .getByRole("link", { name: "Top Deals" })
    .getAttribute("class");
  console.log(classAttributeOfTopDealIs);
  let hrefAttributeOfTopDealIs = await page
    .getByRole("link", { name: "Top Deals" })
    .getAttribute("href");
  console.log(hrefAttributeOfTopDealIs);

  //Flight Booking Link attributes
  let classAttributeOfTopDealIs2 = await page
    .getByRole("link", { name: "Flight Booking" })
    .getAttribute("class");
  console.log(classAttributeOfTopDealIs2);
  let hrefAttributeOfTopDealIs2 = await page
    .getByRole("link", { name: "Flight Booking" })
    .getAttribute("href");
  console.log(hrefAttributeOfTopDealIs2);

  await page.pause();
});
