# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshots.spec.js >> Visual regression - Research
- Location: tests\screenshots.spec.js:17:3

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  1558 pixels (ratio 0.01 of all image pixels) are different.

  Snapshot: research-viewport.png

Call log:
  - Expect "toHaveScreenshot(research-viewport.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 1558 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 1558 pixels (ratio 0.01 of all image pixels) are different.

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
      - generic [ref=e19]:
        - paragraph [ref=e20]: RESEARCH & INSIGHTS
        - heading "Know the Market. See the Opportunity. Make Better Decisions." [level=1] [ref=e21]: Know the Market.See the Opportunity.Make Better Decisions.
        - paragraph [ref=e22]: Real estate decisions are driven by data—but meaningful insights come from understanding what the data is telling you.
      - generic [ref=e24]:
        - generic [ref=e25]: REAL ESTATE MARKET RESEARCH
        - heading "Turning Property Data Into Meaningful Market Intelligence" [level=2] [ref=e26]
        - paragraph [ref=e27]: Our Real Estate Market Research combines technology, property intelligence and on-ground market understanding to provide a clearer view of locations, projects, pricing, competition and buyer demand.
        - paragraph [ref=e28]: We help developers, investors and real estate businesses move beyond assumptions and make data-informed decisions with greater confidence.
      - generic [ref=e29]:
        - generic [ref=e30]:
          - generic [ref=e31]: WHAT WE ANALYSE
          - heading "What We Analyse" [level=2] [ref=e32]
        - generic [ref=e33]:
          - article [ref=e34]:
            - generic [ref=e35]: 📍
            - heading "Location Intelligence" [level=3] [ref=e36]
            - paragraph [ref=e37]: Understand micro-markets through pricing, infrastructure, connectivity, development activity and growth indicators.
          - article [ref=e38]:
            - generic [ref=e39]: 📊
            - heading "Market & Price Trends" [level=3] [ref=e40]
            - paragraph [ref=e41]: Track property prices, inventory, absorption, rental trends and changing market conditions.
          - article [ref=e42]:
            - generic [ref=e43]: 🏗️
            - heading "Project & Competitor Intelligence" [level=3] [ref=e44]
            - paragraph [ref=e45]: Analyse competing projects, configurations, pricing, amenities, offers, positioning and sales strategies.
          - article [ref=e46]:
            - generic [ref=e47]: 👥
            - heading "Buyer & Demand Insights" [level=3] [ref=e48]
            - paragraph [ref=e49]: Identify buyer preferences, budgets, property requirements and emerging demand patterns.
          - article [ref=e50]:
            - generic [ref=e51]: 🎯
            - heading "Project Positioning" [level=3] [ref=e52]
            - paragraph [ref=e53]: Use market intelligence to identify opportunities for pricing, product configuration, positioning and go-to-market strategy.
          - article [ref=e54]:
            - generic [ref=e55]: 📈
            - heading "Opportunity Identification" [level=3] [ref=e56]
            - paragraph [ref=e57]: Discover emerging markets, high-potential locations and opportunities that may otherwise remain hidden within large volumes of property data.
      - generic [ref=e59]:
        - generic [ref=e60]: MARKET INTELLIGENCE
        - heading "From Property Data to Market Intelligence" [level=2] [ref=e61]
        - paragraph [ref=e62]: "We bring together technology + data + real estate expertise to turn complex market information into insights that can support better decisions across:"
        - generic [ref=e63]:
          - generic [ref=e64]: Acquisition
          - generic [ref=e65]: Development
          - generic [ref=e66]: Pricing
          - generic [ref=e67]: Sales
          - generic [ref=e68]: Marketing
          - generic [ref=e69]: Investment
      - generic [ref=e70]:
        - generic [ref=e71]:
          - generic [ref=e72]: OUR APPROACH
          - heading "Our Approach" [level=2] [ref=e73]
        - generic [ref=e74]:
          - generic [ref=e75]:
            - generic [ref=e76]: "01"
            - heading "COLLECT" [level=3] [ref=e77]
            - strong [ref=e78]: →
          - generic [ref=e79]:
            - generic [ref=e80]: "02"
            - heading "ANALYSE" [level=3] [ref=e81]
            - strong [ref=e82]: →
          - generic [ref=e83]:
            - generic [ref=e84]: "03"
            - heading "COMPARE" [level=3] [ref=e85]
            - strong [ref=e86]: →
          - generic [ref=e87]:
            - generic [ref=e88]: "04"
            - heading "IDENTIFY" [level=3] [ref=e89]
            - strong [ref=e90]: →
          - generic [ref=e91]:
            - generic [ref=e92]: "05"
            - heading "ACT" [level=3] [ref=e93]
        - paragraph [ref=e95]: Because in real estate, better information can lead to better decisions.
      - generic [ref=e96]:
        - generic [ref=e97]: RESEARCH & INSIGHTS
        - heading "Make Better Real Estate Decisions With Better Information." [level=2] [ref=e98]
        - paragraph [ref=e99]: Get a clearer understanding of the market, competition, pricing and emerging opportunities.
        - link "Talk to Our Team" [ref=e100] [cursor=pointer]:
          - /url: "#/contact"
  - contentinfo [ref=e101]:
    - generic [ref=e102]:
      - link [ref=e104] [cursor=pointer]:
        - /url: "#/"
        - img "AVODAH & KHEN" [ref=e105]
      - generic [ref=e106]:
        - heading "Company" [level=4] [ref=e107]
        - link "About us" [ref=e108] [cursor=pointer]:
          - /url: "#/company"
        - link "Research" [ref=e109] [cursor=pointer]:
          - /url: "#/research"
        - link "Careers" [ref=e110] [cursor=pointer]:
          - /url: "#/careers"
      - generic [ref=e111]:
        - heading "Studios" [level=4] [ref=e112]
        - paragraph [ref=e113]: Mumbai
    - paragraph [ref=e114]: © 2026 AVODAH GROUP. All rights reserved.
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