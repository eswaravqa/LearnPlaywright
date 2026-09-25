//textContent() method will not fetch text from the text box
import { test, expect } from "@playwright/test";

test("fetch text from text field", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/ui/data-testid-page.html",
  );

  //data-testid="username-input"
  await page.getByTestId("username-input").fill("fetch text input value");
  let inputTextOfUsernameFieldIs = await page
    .getByTestId("username-input")
    .inputValue();
  console.log(inputTextOfUsernameFieldIs);

  await page.pause();
});
