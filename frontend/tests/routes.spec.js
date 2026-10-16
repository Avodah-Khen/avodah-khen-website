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

for (const pageInfo of pages) {
  test(`${pageInfo.name} page loads with a visible heading`, async ({ page }) => {
    await page.goto(pageInfo.path);

    await expect(page.locator(".site")).toBeVisible();
    await expect(page.locator("h1").first()).toBeVisible();
  });
}