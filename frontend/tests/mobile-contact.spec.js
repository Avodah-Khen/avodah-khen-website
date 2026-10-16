import { test, expect } from "@playwright/test";

test.describe("Mobile menu", () => {
  test("hamburger menu opens and closes", async ({ page }, testInfo) => {
    // Ye test sirf mobile Chrome par run hoga
    test.skip(!testInfo.project.use.isMobile, "Mobile-only test");

    await page.goto("/");

    const menuButton = page.getByRole("button", {
      name: "Open menu",
    });

    await expect(menuButton).toBeVisible();
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");

    await menuButton.click();

    const closeButton = page.getByRole("button", {
      name: "Close menu",
    });

    await expect(closeButton).toHaveAttribute("aria-expanded", "true");

    await expect(
      page.getByRole("navigation").getByRole("link", {
        name: "Services",
        exact: true,
      })
    ).toBeVisible();

    await closeButton.click();

    await expect(
      page.getByRole("button", { name: "Open menu" })
    ).toHaveAttribute("aria-expanded", "false");
  });
});

test.describe("Contact form", () => {
  test("required fields show validation when submitted empty", async ({ page }) => {
    await page.goto("/#/contact");

    const nameInput = page.locator('input[name="name"]');
    const emailInput = page.locator('input[name="email"]');
    const cityInput = page.locator('input[name="city"]');

    await page.getByRole("button", {
      name: "Request a briefing",
    }).click();

    expect(await nameInput.evaluate((el) => el.checkValidity())).toBe(false);
    expect(await emailInput.evaluate((el) => el.checkValidity())).toBe(false);
    expect(await cityInput.evaluate((el) => el.checkValidity())).toBe(false);
  });

  test("valid form displays the thank-you message", async ({ page }) => {
    await page.goto("/#/contact");

    await page.route("**/api/contact", async (route) => {
    await route.fulfill({
    status: 200,
    contentType: "application/json",
    body: JSON.stringify({
      message: "Contact request submitted successfully",
    }),
  });
});

    await page.locator('input[name="name"]').fill("Playwright Test");
    await page.locator('input[name="email"]').fill("test@example.com");
    await page.locator('input[name="city"]').fill("Mumbai");

    await page.getByRole("button", {
      name: "Request a briefing",
    }).click();

    await expect(
      page.getByRole("heading", { name: "Thank You!" })
    ).toBeVisible();

    await expect(
      page.getByText("Your request has been submitted successfully.")
    ).toBeVisible();
  });
});
