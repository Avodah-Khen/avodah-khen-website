import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/services",
  "/research",
  "/media",
  "/company",
  "/contact",
  "/mandate",
  "/proptech",
  "/fintech",
  "/careers",
];

test.describe("JavaScript error check", () => {
  for (const route of routes) {
    test(`No uncaught JavaScript errors on ${route}`, async ({ page }) => {
      const errors = [];

      page.on("pageerror", (error) => {
        errors.push(error.message);
      });

      await page.goto(`/#${route}`);
      await expect(page.locator("body")).toBeVisible();

      expect(errors).toEqual([]);
    });
  }
});