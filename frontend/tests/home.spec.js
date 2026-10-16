import { test, expect } from '@playwright/test';

test('Home page loads successfully', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/AVODAH/i);

  await expect(
    page.getByRole('heading', {
      name: /Technology-driven solutions/i,
    })
  ).toBeVisible();
});