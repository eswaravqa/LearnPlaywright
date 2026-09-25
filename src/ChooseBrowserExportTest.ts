import { chromium } from "@playwright/test";

export type BrowserName = "chrome" | "msedge" | "firefox" | "webkit";
export async function launchBrowser(browserName: BrowserName) {
  console.log("Browser Name: ", browserName);

  switch (browserName.trim().toLowerCase()) {
    case "chrome":
      return await chromium.launch({ headless: false, channel: "chrome" });
    case "msedge":
      return await chromium.launch({ headless: false, channel: "msedge" });
    case "firefox":
      return await chromium.launch({ headless: false });
    case "msedge":
      return await chromium.launch({ headless: false });
    default:
      console.log("invalid browser........", browserName);
      throw new Error("Invalid Browser:, ${browserName}");
  }
}
