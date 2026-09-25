import { test, expect } from "@playwright/test";

test("Locator Highlight Test", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  let un = page.getByRole("textbox", { name: "Username", exact: true });
  await page.waitForTimeout(500);
  await un.highlight();

  let pw = page.getByRole("textbox", { name: "Password", exact: true });
  await page.waitForTimeout(500);
  await pw.highlight();

  let hd1 = page.getByRole("heading", { name: "Test login", exact: true });
  await page.waitForTimeout(500);
  await hd1.highlight();

  await page.waitForTimeout(500);
  await page.getByRole("button", { name: "Submit", exact: true }).highlight();
});
