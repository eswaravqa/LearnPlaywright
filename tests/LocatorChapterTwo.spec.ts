import { test, expect } from "@playwright/test";

test("Successfull Login Message Test", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  let un = page.getByRole("textbox", { name: "Username", exact: true });
  await un.fill("student");

  let pw = page.getByRole("textbox", { name: "Password", exact: true });
  await pw.fill("Password123");

  page.getByRole("button", { name: "Submit", exact: true }).click();

  await expect(
    page.getByRole("heading", { name: "Logged In Successfully" }),
  ).toBeVisible();
});
