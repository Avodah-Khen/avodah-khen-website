import { test, expect } from '@playwright/test';

test.describe('Navbar testing', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  async function openMobileMenu(page) {
    const menuButton = page.locator('button.menu-btn');

    if (await menuButton.isVisible()) {
      await menuButton.click();
    }
  }

  test('Services menu opens correctly', async ({ page }) => {
    await openMobileMenu(page);

    await page.getByRole('link', {
      name: 'Services',
      exact: true,
    }).click();

    await expect(
      page.getByRole('link', {
        name: 'Mandate',
        exact: true,
      })
    ).toBeVisible();

    await expect(
      page.getByRole('link', {
        name: 'Proptech',
        exact: true,
      })
    ).toBeVisible();

    await expect(
      page.getByRole('link', {
        name: 'Fintech',
        exact: true,
      })
    ).toBeVisible();
  });

  test('Company menu opens correctly', async ({ page }) => {
    await openMobileMenu(page);

    await page.getByRole('link', {
      name: 'Company',
      exact: true,
    }).click();

    await expect(
      page.getByRole('navigation').getByRole('link', {
        name: 'Who we are',
        exact: true,
      })
    ).toBeVisible();

    await expect(
      page.getByRole('navigation').getByRole('link', {
        name: 'Leadership',
        exact: true,
      })
    ).toBeVisible();

    await expect(
      page.getByRole('navigation').getByRole('link', {
        name: 'Careers',
        exact: true,
      })
    ).toBeVisible();
  });

  test('Navbar Contact link is visible', async ({ page }) => {
    await openMobileMenu(page);

    await expect(
      page.locator('a.nav-cta').filter({
        hasText: 'Contact',
      })
    ).toBeVisible();
  });

});