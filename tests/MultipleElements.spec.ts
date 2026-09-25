import { test, expect, Locator } from "@playwright/test";

test("get number of links on any given web page test", async ({ page }) => {
  await page.goto("https://ca.indeed.com/");

  //practice websites
  //"https://naveenautomationlabs.com/opencart/index.php?route=common/home"
  //https://rahulshettyacademy.com/

  // to get all links on a web side launch code get type any of the following
  // locator("a") -- CSS Selector way
  // locator('//a') -- xPath way
  // locator('//a[@href]') -- Xpath way -- All the links with href value
  // locator('a[href]') -- CSS Selector way -- All the links with href value
  // getByRole("link")

  //How to get number of links on a web page
  //1.Count Method
  let numOfLinksWithCountMethod = await page.locator("a[href]").count();
  console.log("Number of Links with Count Method: ", numOfLinksWithCountMethod);

  //2.All method

  let numOfLinksWithAllMethod: Locator[] = await page.locator("a[href]").all();
  console.log(
    "Number of Links with All Method: ",
    numOfLinksWithAllMethod.length,
  );

  //When to use all method - when we want to iterate the loop
  //when to use count -- we just need only count - no need to loop anything

  //By Role
  let numOfLinksWithAllMethodByRoleLink = await page.getByRole("link").all();
  console.log(
    "Num of Links with All Method and By Role Link: ",
    numOfLinksWithAllMethodByRoleLink.length,
  );

  //Imp Note: Usually by Role we will get less count becuase Role will alway check for every link by accessibility
  //However in case of Locator if there are any match related to a[href] it will display. so with locator the count is
  // more than what we get with byRole

  await page.pause();
});

test("get text and link of total links in a given web page", async ({
  page,
}) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=common/home",
  );

  //practice websites
  //"https://naveenautomationlabs.com/opencart/index.php?route=common/home"
  //https://rahulshettyacademy.com/
  //https://ca.indeed.com/

  //2.All method
  let numOfLinksWithAllMethod: Locator[] = await page.locator("a[href]").all();
  console.log(
    "Number of Links with All Method: ",
    numOfLinksWithAllMethod.length,
  );

  let index = 0;
  for (let ele of numOfLinksWithAllMethod) {
    let text = await ele.textContent();
    let hrefVal = await ele.getAttribute("href");
    console.log(index, " : ", text, " : ", hrefVal);
    index++;
  }

  await page.pause();
});

test("get images in a given web page", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

  //practice websites
  //"https://naveenautomationlabs.com/opencart/index.php?route=common/home"
  //https://rahulshettyacademy.com/
  //https://ca.indeed.com/
  //https://rahulshettyacademy.com/seleniumPractise/#/

  //2.All method
  let allImages: Locator[] = await page.locator("img").all();
  console.log("Number of Images: ", allImages.length);

  await page.pause();
});

test("get images in a given web page and their alt value", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

  //practice websites
  //"https://naveenautomationlabs.com/opencart/index.php?route=common/home"
  //https://rahulshettyacademy.com/
  //https://ca.indeed.com/
  //https://rahulshettyacademy.com/seleniumPractise/#/

  //2.All method
  let allImages: Locator[] = await page.locator("img").all();
  console.log("Number of Images: ", allImages.length);

  let index = 0;
  for (let ele of allImages) {
    let altVal = await ele.getAttribute("alt");
    console.log(index, " : ", altVal);
    index++;
  }

  await page.pause();
});
