# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: responsive.spec.js >> Responsive layout >> Media - 1280px has no horizontal overflow
- Location: tests\responsive.spec.js:34:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "http://localhost:5173/#/media", waiting until "load"

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
  16 | const viewports = [
  17 |   { name: "320", width: 320, height: 568 },
  18 |   { name: "360", width: 360, height: 800 },
  19 |   { name: "375", width: 375, height: 812 },
  20 |   { name: "390", width: 390, height: 844 },
  21 |   { name: "414", width: 414, height: 896 },
  22 |   { name: "768", width: 768, height: 1024 },
  23 |   { name: "820", width: 820, height: 1180 },
  24 |   { name: "1024", width: 1024, height: 768 },
  25 |   { name: "1280", width: 1280, height: 720 },
  26 |   { name: "1366", width: 1366, height: 768 },
  27 |   { name: "1440", width: 1440, height: 900 },
  28 |   { name: "1920", width: 1920, height: 1080 },
  29 | ];
  30 | 
  31 | test.describe("Responsive layout", () => {
  32 |   for (const pageInfo of pages) {
  33 |     for (const viewport of viewports) {
  34 |       test(
  35 |         `${pageInfo.name} - ${viewport.name}px has no horizontal overflow`,
  36 |         async ({ page }) => {
  37 |           await page.setViewportSize({
  38 |             width: viewport.width,
  39 |             height: viewport.height,
  40 |           });
  41 | 
> 42 |           await page.goto(pageInfo.path);
     |                      ^ Error: page.goto: Test timeout of 30000ms exceeded.
  43 |           await page.waitForLoadState("networkidle");
  44 | 
  45 |           const dimensions = await page.evaluate(() => ({
  46 |             viewportWidth: document.documentElement.clientWidth,
  47 |             pageWidth: document.documentElement.scrollWidth,
  48 |             viewportHeight: document.documentElement.clientHeight,
  49 |             pageHeight: document.documentElement.scrollHeight,
  50 |           }));
  51 | 
  52 |           expect(
  53 |             dimensions.pageWidth,
  54 |             `${pageInfo.name} at ${viewport.width}px has horizontal overflow: ${dimensions.pageWidth}px > ${dimensions.viewportWidth}px`
  55 |           ).toBeLessThanOrEqual(dimensions.viewportWidth);
  56 | 
  57 |           expect(dimensions.pageHeight).toBeGreaterThan(0);
  58 |         }
  59 |       );
  60 |     }
  61 |   }
  62 | });
```