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

  67000 pixels (ratio 0.08 of all image pixels) are different.

  Snapshot: contact-viewport.png

Call log:
  - Expect "toHaveScreenshot(contact-viewport.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 67000 pixels (ratio 0.08 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 67000 pixels (ratio 0.08 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - link [ref=e5] [cursor=pointer]:
      - /url: "#/"
      - img "AVODAH & KHEN" [ref=e6]
    - navigation [ref=e7]:
      - generic [ref=e8]:
        - link "Services" [ref=e9] [cursor=pointer]:
          - /url: "#/services"
        - generic:
          - link "Mandate":
            - /url: "#/mandate"
          - link "Proptech":
            - /url: "#/proptech"
          - link "Fintech":
            - /url: "#/fintech"
          - link "Leasing and Investment Advisory":
            - /url: "#/leasing-investment-advisory"
      - generic [ref=e10]:
        - link "Company" [ref=e11] [cursor=pointer]:
          - /url: "#/company"
        - generic:
          - link "Who we are":
            - /url: "#/company"
          - link "Leadership":
            - /url: "#/company"
          - link "Careers":
            - /url: "#/careers"
      - link "Research" [ref=e13] [cursor=pointer]:
        - /url: "#/research"
      - link "Contact" [ref=e14] [cursor=pointer]:
        - /url: "#/contact"
  - main [ref=e15]:
    - main [ref=e16]:
      - generic [ref=e17]:
        - paragraph [ref=e18]: Contact
        - heading "Tell us the city, the plot, or the problem" [level=1] [ref=e19]
      - generic [ref=e20]:
        - generic [ref=e21]:
          - heading "Request a briefing" [level=2] [ref=e22]
          - paragraph [ref=e23]: A 20-minute call. No pitch deck until we have walked the street.
          - generic [ref=e24]:
            - heading "Our Office" [level=3] [ref=e25]
            - paragraph [ref=e26]:
              - text: AVODAH & KHENMamta house 304, 3rd Floor, Swami Vivekanand Road,Bandra West-Mumbai 400050, Maharashtra, India
              - strong [ref=e27]: "Contact:"
              - text: +91 7507607744, +91 8265073981
              - strong [ref=e28]: "Email:"
              - text: sales@avodahgroup.co
        - generic [ref=e29]:
          - textbox "Name" [ref=e30]
          - textbox "Work email" [ref=e31]
          - textbox "City" [ref=e32]
          - button "Request a briefing" [ref=e33] [cursor=pointer]
        - generic [ref=e34]:
          - link "WhatsApp" [ref=e35] [cursor=pointer]:
            - /url: https://wa.me/7507607744
          - link "Instagram" [ref=e38] [cursor=pointer]:
            - /url: https://www.instagram.com/abc
          - link "LinkedIn" [ref=e41] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/abc/
  - contentinfo [ref=e44]:
    - generic [ref=e45]:
      - link [ref=e47] [cursor=pointer]:
        - /url: "#/"
        - img "AVODAH & KHEN" [ref=e48]
      - generic [ref=e49]:
        - heading "Company" [level=4] [ref=e50]
        - link "About us" [ref=e51] [cursor=pointer]:
          - /url: "#/company"
        - link "Research" [ref=e52] [cursor=pointer]:
          - /url: "#/research"
        - link "Careers" [ref=e53] [cursor=pointer]:
          - /url: "#/careers"
      - generic [ref=e54]:
        - heading "Studios" [level=4] [ref=e55]
        - paragraph [ref=e56]: Mumbai
    - paragraph [ref=e57]: © 2026 AVODAH GROUP. All rights reserved.
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