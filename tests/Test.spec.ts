import { test, expect } from "@playwright/test";

/**
 * Test: Capture all footer links on the OpenCart home page, click each one,
 * verify the destination page loads successfully, then go back and repeat
 * for the next link.
 *
 * Site: https://naveenautomationlabs.com/opencart/index.php?route=common/home
 */

const BASE_URL =
  "https://naveenautomationlabs.com/opencart/index.php?route=common/home";

test.describe("OpenCart - Footer Links Validation", () => {
  test("should capture all footer links and verify each one navigates successfully", async ({
    page,
  }) => {
    // ---------- Step 1: Load home page ----------
    await page.goto(BASE_URL);
    await page.waitForLoadState("domcontentloaded");

    // OpenCart renders the footer as a <footer> element with role="contentinfo"
    const footer = page.getByRole("contentinfo");
    await expect(footer).toBeVisible();

    // ---------- Step 2: Capture all footer links (text + href) up front ----------
    // We grab hrefs before clicking anything, because locators can go stale
    // once we start navigating away and back.
    const footerLinks = await footer
      .locator("a")
      .evaluateAll((anchors: any[]) =>
        anchors
          .filter((a: HTMLAnchorElement) => (a as HTMLAnchorElement).href) // skip anchors without href
          .map((a: HTMLAnchorElement) => ({
            text: a.textContent?.trim() || "(no text)",
            href: (a as HTMLAnchorElement).href,
          })),
      );

    expect(
      footerLinks.length,
      "Expected at least one footer link to be found",
    ).toBeGreaterThan(0);

    console.log(`Found ${footerLinks.length} footer links:`);
    footerLinks.forEach((link: { text: any; href: any }, i: number) =>
      console.log(`  ${i + 1}. ${link.text}  ->  ${link.href}`),
    );

    // ---------- Step 3: Click each footer link, verify it loads, then go back ----------
    for (let i = 0; i < footerLinks.length; i++) {
      const { text, href } = footerLinks[i];

      await test.step(`Footer link #${i + 1}: "${text}" -> ${href}`, async () => {
        // Make sure we're starting from the home page for every iteration
        if (page.url() !== BASE_URL) {
          await page.goto(BASE_URL);
          await page.waitForLoadState("domcontentloaded");
        }

        const footerNow = page.getByRole("contentinfo");
        const link = footerNow.locator(`a[href="${href}"]`).first();
        await expect(link).toBeVisible();

        // Click the link
        await link.click();
        await page.waitForLoadState("domcontentloaded");

        // ---------- Verify the destination page loaded successfully ----------
        // 1. URL should have changed away from the home page
        await expect(page).not.toHaveURL(BASE_URL);

        // 2. Page should have a non-empty title (basic "did it actually render" check)
        const title = await page.title();
        expect(
          title,
          `Page title should not be empty for ${href}`,
        ).toBeTruthy();

        // 3. Body should be visible / rendered
        await expect(page.locator("body")).toBeVisible();

        // 4. Guard against obvious error/404 pages
        const bodyText = (await page.locator("body").innerText()).toLowerCase();
        expect(
          bodyText.includes("page not found") || bodyText.includes("404"),
        ).toBeFalsy();

        console.log(
          `✔ Verified: "${text}" loaded successfully (${page.url()})`,
        );

        // ---------- Go back and repeat for the next link ----------
        await page.goBack();
        await page.waitForLoadState("domcontentloaded");
      });
    }
  });
});
