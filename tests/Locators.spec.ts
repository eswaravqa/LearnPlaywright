import { test, expect } from "@playwright/test";

test("Login Test", async ({ page }) => {
  page.goto("https://practicetestautomation.com/practice-test-login/");
  let Username = page.getByRole("textbox", { name: "Username" });
  await Username.fill("student");
  let Password = page.getByRole("textbox", { name: "Password" });
  await Password.fill("Password123");
  await page.getByRole("button", { name: "Submit" }).click();
});
