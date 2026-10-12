
import { test, expect } from "@playwright/test";

test.describe("Functional navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".site")).toBeVisible();
  });

  async function openMobileMenuIfNeeded(page) {
    const menuButton = page.locator(
      'button[aria-label*="menu" i], button[aria-controls*="menu" i], .menu-toggle, .hamburger, .nav-toggle'
    ).first();

    if (await menuButton.isVisible().catch(() => false)) {
      const expanded = await menuButton.getAttribute("aria-expanded");

      if (expanded !== "true") {
        await menuButton.click();
      }
    }
  }

  async function clickNavigationLink(page, name) {
    await openMobileMenuIfNeeded(page);

    const navLink = page.getByRole("navigation").getByRole("link", {
      name,
      exact: true,
    });

    if (await navLink.count()) {
      await navLink.first().click();
      return;
    }

    const link = page.getByRole("link", {
      name,
      exact: true,
    });

    await expect(link.first()).toBeVisible();
    await link.first().click();
  }

  test("Services navigation works", async ({ page }) => {
    await clickNavigationLink(page, "Services");
    await expect(page).toHaveURL(/#\/services\/?$/);
  });

  test("Research navigation works", async ({ page }) => {
    await clickNavigationLink(page, "Research");
    await expect(page).toHaveURL(/#\/research\/?$/);
  });

  test("Media navigation works", async ({ page }) => {
    await clickNavigationLink(page, "Media");
    await expect(page).toHaveURL(/#\/media\/?$/);
  });

  test("Company navigation works", async ({ page }) => {
    await clickNavigationLink(page, "Company");
    await expect(page).toHaveURL(/#\/company\/?$/);
  });

  test("Contact navigation works", async ({ page }) => {
    await clickNavigationLink(page, "Contact");
    await expect(page).toHaveURL(/#\/contact\/?$/);
  });

  test("Mandate navigation works", async ({ page }) => {
    await clickNavigationLink(page, "Services");
    await clickNavigationLink(page, "Mandate");
    await expect(page).toHaveURL(/#\/mandate\/?$/);
  });

  test("Proptech navigation works", async ({ page }) => {
    await clickNavigationLink(page, "Services");
    await clickNavigationLink(page, "Proptech");
    await expect(page).toHaveURL(/#\/proptech\/?$/);
  });

  test("Fintech navigation works", async ({ page }) => {
    await clickNavigationLink(page, "Services");
    await clickNavigationLink(page, "Fintech");
    await expect(page).toHaveURL(/#\/fintech\/?$/);
  });

  test("Back and forward navigation works", async ({ page }) => {
    await clickNavigationLink(page, "Research");
    await expect(page).toHaveURL(/#\/research\/?$/);

    await page.goBack();
    await expect(page).toHaveURL(/#\/$/);

    await page.goForward();
    await expect(page).toHaveURL(/#\/research\/?$/);
  });
});
