# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshots.spec.js >> Visual regression - Contact
- Location: tests\screenshots.spec.js:17:3

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  12346 pixels (ratio 0.05 of all image pixels) are different.

  Snapshot: contact-viewport.png

Call log:
  - Expect "toHaveScreenshot(contact-viewport.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 12346 pixels (ratio 0.05 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 12346 pixels (ratio 0.05 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - link [ref=e5] [cursor=pointer]:
      - /url: "#/"
      - img "AVODAH & KHEN" [ref=e6]
    - button "Open menu" [ref=e7]: ☰
  - main [ref=e8]:
    - main [ref=e9]:
      - generic [ref=e10]:
        - paragraph [ref=e11]: Contact
        - heading "Tell us the city, the plot, or the problem" [level=1] [ref=e12]
      - generic [ref=e13]:
        - generic [ref=e14]:
          - heading "Request a briefing" [level=2] [ref=e15]
          - paragraph [ref=e16]: A 20-minute call. No pitch deck until we have walked the street.
          - generic [ref=e17]:
            - heading "Our Office" [level=3] [ref=e18]
            - paragraph [ref=e19]:
              - text: AVODAH & KHENMamta house 304, 3rd Floor, Swami Vivekanand Road,Bandra West-Mumbai 400050, Maharashtra, India
              - strong [ref=e20]: "Contact:"
              - text: +91 7507607744, +91 8265073981
              - strong [ref=e21]: "Email:"
              - text: sales@avodahgroup.co
        - generic [ref=e22]:
          - textbox "Name" [ref=e23]
          - textbox "Work email" [ref=e24]
          - textbox "City" [ref=e25]
          - button "Request a briefing" [ref=e26] [cursor=pointer]
        - generic [ref=e27]:
          - link "WhatsApp" [ref=e28] [cursor=pointer]:
            - /url: https://wa.me/7507607744
          - link "Instagram" [ref=e31] [cursor=pointer]:
            - /url: https://www.instagram.com/abc
          - link "LinkedIn" [ref=e34] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/abc/
  - contentinfo [ref=e37]:
    - generic [ref=e38]:
      - link [ref=e40] [cursor=pointer]:
        - /url: "#/"
        - img "AVODAH & KHEN" [ref=e41]
      - generic [ref=e42]:
        - heading "Company" [level=4] [ref=e43]
        - link "About us" [ref=e44] [cursor=pointer]:
          - /url: "#/company"
        - link "Research" [ref=e45] [cursor=pointer]:
          - /url: "#/research"
        - link "Careers" [ref=e46] [cursor=pointer]:
          - /url: "#/careers"
      - generic [ref=e47]:
        - heading "Studios" [level=4] [ref=e48]
        - paragraph [ref=e49]: Mumbai
    - paragraph [ref=e50]: © 2026 AVODAH GROUP. All rights reserved.
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from "@playwright/test";
  3  | 
  4  | const pages = [
  5  |   { name: "Services", slug: "services", path: "/#/services" },
  6  |   { name: "Research", slug: "research", path: "/#/research" },
  7  |   { name: "Media", slug: "media", path: "/#/media" },
  8  |   { name: "Company", slug: "company", path: "/#/company" },
  9  |   { name: "Contact", slug: "contact", path: "/#/contact" },
  10 |   { name: "Mandate", slug: "mandate", path: "/#/mandate" },
  11 |   { name: "Proptech", slug: "proptech", path: "/#/proptech" },
  12 |   { name: "Fintech", slug: "fintech", path: "/#/fintech" },
  13 |   { name: "Careers", slug: "careers", path: "/#/careers" },
  14 | ];
  15 | 
  16 | for (const pageInfo of pages) {
  17 |   test(`Visual regression - ${pageInfo.name}`, async ({ page }) => {
  18 |     await page.goto(pageInfo.path, { waitUntil: "domcontentloaded" });
  19 | 
  20 |     await expect(page.locator(".site")).toBeVisible();
  21 | 
  22 |     // Wait for fonts, but do not let a stalled font request block the test.
  23 |     await page.evaluate(async () => {
  24 |       if (document.fonts) {
  25 |         await Promise.race([
  26 |           document.fonts.ready,
  27 |           new Promise((resolve) => setTimeout(resolve, 5000)),
  28 |         ]);
  29 |       }
  30 |     });
  31 | 
  32 |     // Wait for images with a maximum timeout.
  33 |     await page.evaluate(async () => {
  34 |       const images = Array.from(document.images);
  35 | 
  36 |       await Promise.race([
  37 |         Promise.all(
  38 |           images.map(async (img) => {
  39 |             if (!img.complete) {
  40 |               await new Promise((resolve) => {
  41 |                 img.addEventListener("load", resolve, { once: true });
  42 |                 img.addEventListener("error", resolve, { once: true });
  43 |               });
  44 |             }
  45 | 
  46 |             if (img.complete && img.naturalWidth > 0 && img.decode) {
  47 |               await img.decode().catch(() => {});
  48 |             }
  49 |           })
  50 |         ),
  51 |         new Promise((resolve) => setTimeout(resolve, 8000)),
  52 |       ]);
  53 |     });
  54 | 
  55 |     // Disable animations and reveal elements for stable screenshots.
  56 |     await page.addStyleTag({
  57 |       content: `
  58 |         *,
  59 |         *::before,
  60 |         *::after {
  61 |           animation: none !important;
  62 |           transition: none !important;
  63 |           caret-color: transparent !important;
  64 |         }
  65 | 
  66 |         .reveal,
  67 |         .reveal-stagger,
  68 |         .hero-enter {
  69 |           opacity: 1 !important;
  70 |           transform: none !important;
  71 |           filter: none !important;
  72 |           visibility: visible !important;
  73 |         }
  74 |       `,
  75 |     });
  76 | 
> 77 |     await expect(page).toHaveScreenshot(
     |                        ^ Error: expect(page).toHaveScreenshot(expected) failed
  78 |       `${pageInfo.slug}-viewport.png`,
  79 |       {
  80 |         animations: "disabled",
  81 |         caret: "hide",
  82 |         scale: "css",
  83 |         maxDiffPixels: 300,
  84 |       }
  85 |     );
  86 |   });
  87 | }
  88 | 
```