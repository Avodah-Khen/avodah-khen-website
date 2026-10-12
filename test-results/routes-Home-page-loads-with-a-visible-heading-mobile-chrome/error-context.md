# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: routes.spec.js >> Home page loads with a visible heading
- Location: tests\routes.spec.js:17:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "http://localhost:5173/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | const pages = [
  4  |   { name: "Home", path: "/" },
  5  |   { name: "Services", path: "/#/services" },
  6  |   { name: "Research", path: "/#/research" },
  7  |   { name: "Media", path: "/#/media" },
  8  |   { name: "Company", path: "/#/company" },
  9  |   { name: "Contact", path: "/#/contact" },
  10 |   { name: "Mandate", path: "/#/mandate" },
  11 |   { name: "Proptech", path: "/#/proptech" },
  12 |   { name: "Fintech", path: "/#/fintech" },
  13 |   { name: "Careers", path: "/#/careers" },
  14 | ];
  15 | 
  16 | for (const pageInfo of pages) {
  17 |   test(`${pageInfo.name} page loads with a visible heading`, async ({ page }) => {
> 18 |     await page.goto(pageInfo.path);
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  19 | 
  20 |     await expect(page.locator(".site")).toBeVisible();
  21 |     await expect(page.locator("h1").first()).toBeVisible();
  22 |   });
  23 | }
```