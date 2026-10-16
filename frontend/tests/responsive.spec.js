import { test, expect } from "@playwright/test";

const pages = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/#/services" },
  { name: "Research", path: "/#/research" },
  { name: "Media", path: "/#/media" },
  { name: "Company", path: "/#/company" },
  { name: "Contact", path: "/#/contact" },
  { name: "Mandate", path: "/#/mandate" },
  { name: "Proptech", path: "/#/proptech" },
  { name: "Fintech", path: "/#/fintech" },
  { name: "Careers", path: "/#/careers" },
];

const viewports = [
  { name: "320", width: 320, height: 568 },
  { name: "360", width: 360, height: 800 },
  { name: "375", width: 375, height: 812 },
  { name: "390", width: 390, height: 844 },
  { name: "414", width: 414, height: 896 },
  { name: "768", width: 768, height: 1024 },
  { name: "820", width: 820, height: 1180 },
  { name: "1024", width: 1024, height: 768 },
  { name: "1280", width: 1280, height: 720 },
  { name: "1366", width: 1366, height: 768 },
  { name: "1440", width: 1440, height: 900 },
  { name: "1920", width: 1920, height: 1080 },
];

test.describe("Responsive layout", () => {
  for (const pageInfo of pages) {
    for (const viewport of viewports) {
      test(
        `${pageInfo.name} - ${viewport.name}px has no horizontal overflow`,
        async ({ page }) => {
          await page.setViewportSize({
            width: viewport.width,
            height: viewport.height,
          });

          await page.goto(pageInfo.path);
          await page.waitForLoadState("networkidle");

          const dimensions = await page.evaluate(() => ({
            viewportWidth: document.documentElement.clientWidth,
            pageWidth: document.documentElement.scrollWidth,
            viewportHeight: document.documentElement.clientHeight,
            pageHeight: document.documentElement.scrollHeight,
          }));

          expect(
            dimensions.pageWidth,
            `${pageInfo.name} at ${viewport.width}px has horizontal overflow: ${dimensions.pageWidth}px > ${dimensions.viewportWidth}px`
          ).toBeLessThanOrEqual(dimensions.viewportWidth);

          expect(dimensions.pageHeight).toBeGreaterThan(0);
        }
      );
    }
  }
});