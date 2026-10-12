# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshots.spec.js >> Visual regression - Company
- Location: tests\screenshots.spec.js:17:3

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  8395 pixels (ratio 0.01 of all image pixels) are different.

  Snapshot: company-viewport.png

Call log:
  - Expect "toHaveScreenshot(company-viewport.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 8395 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 8395 pixels (ratio 0.01 of all image pixels) are different.

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
        - generic [ref=e19]:
          - paragraph [ref=e20]: AVODAH & KHEN
          - heading [level=1] [ref=e21]:
            - text: Real Estate.Technology.
            - emphasis [ref=e22]: Intelligence.
          - paragraph [ref=e23]: A connected platform for property discovery, mandates, sales, CRM, data and AI-powered real estate.
          - link "Connect with us" [ref=e24] [cursor=pointer]:
            - /url: "#/contact"
            - text: Connect with us
            - generic [aria-hidden] [ref=e25]: ↗
        - generic [ref=e26]: PROPERTY • TECHNOLOGY • GROWTH
      - generic [ref=e27]:
        - generic [ref=e28]: WHO WE ARE
        - generic [ref=e29]:
          - generic [ref=e30]:
            - heading [level=2] [ref=e31]:
              - text: A technology-led real estate company built around
              - emphasis [ref=e32]: one connected ecosystem.
            - generic [ref=e33]:
              - generic [ref=e34]:
                - generic [aria-hidden] [ref=e35]: ⌂
                - strong [ref=e36]: PROPERTYDISCOVERY
              - generic [ref=e37]:
                - generic [aria-hidden] [ref=e38]: ◎
                - strong [ref=e39]: AI &DATA
              - generic [ref=e40]:
                - generic [aria-hidden] [ref=e41]: ♧
                - strong [ref=e42]: MANDATES &SALES EXECUTION
              - generic [ref=e43]:
                - generic [aria-hidden] [ref=e44]: ▥
                - strong [ref=e45]: CRM &INTELLIGENCE
            - paragraph [ref=e46]: We bring together property, technology, sales and data to create a seamless experience for developers, brokers and buyers — all in one platform.
          - img "Connected real estate ecosystem integrating technology, AI, sales and CRM" [ref=e48]
      - generic [ref=e49]:
        - generic [ref=e50]:
          - generic [ref=e51]:
            - generic [ref=e52]: THE REAL ESTATE GAP
            - heading "The Real Estate Gap" [level=2] [ref=e53]: The RealEstate Gap
            - paragraph [ref=e55]:
              - text: High-Value Assets.
              - emphasis [ref=e56]: Fragmented Workflows.
            - paragraph [ref=e57]: Four challenges. One connected opportunity.
          - generic [ref=e58]:
            - article [ref=e59]:
              - generic [ref=e60]: "01"
              - heading "Fragmented discovery" [level=3] [ref=e66]
              - paragraph [ref=e67]: Buyers navigate disconnected listings and channels.
            - article [ref=e69]:
              - generic [ref=e70]: "02"
              - heading "Lead leakage" [level=3] [ref=e78]
              - paragraph [ref=e79]: Enquiries can get lost across teams, spreadsheets and messaging.
            - article [ref=e81]:
              - generic [ref=e82]: "03"
              - heading "Limited intelligence" [level=3] [ref=e87]
              - paragraph [ref=e88]: Decisions often lack a single view of demand, pricing and performance.
            - article [ref=e90]:
              - generic [ref=e91]: "04"
              - heading "Complex sales" [level=3] [ref=e98]
              - paragraph [ref=e99]: Mandates, channel partners and follow-ups require constant coordination.
        - generic [ref=e101]:
          - generic [ref=e102]:
            - text: THE OPPORTUNITY
            - heading "One connected real estate ecosystem." [level=3] [ref=e103]
          - generic [ref=e104]:
            - generic [ref=e105]: Property Discovery
            - generic [aria-hidden] [ref=e106]: •
            - generic [ref=e107]: AI + Data
            - generic [aria-hidden] [ref=e108]: •
            - generic [ref=e109]: CRM
            - generic [aria-hidden] [ref=e110]: •
            - generic [ref=e111]: Sales Execution
      - generic [ref=e112]:
        - generic [ref=e113]: WHAT WE DO
        - generic [ref=e114]:
          - heading [level=2] [ref=e115]:
            - text: Capabilities across
            - emphasis [ref=e116]: the property lifecycle.
          - paragraph [ref=e117]: A connected set of services and digital capabilities for property discovery, marketing, sales and business intelligence.
        - generic [ref=e118]:
          - article [ref=e119]:
            - generic [ref=e120]: 01 ↗
            - paragraph [ref=e121]: PROPERTY PORTAL
            - heading "Property discovery" [level=3] [ref=e122]
            - paragraph [ref=e123]: A modern digital destination for property discovery and qualified enquiries.
            - list [ref=e124]:
              - listitem [ref=e125]: Smart property search
              - listitem [ref=e126]: Project and inventory discovery
              - listitem [ref=e127]: Rich property profiles
              - listitem [ref=e128]: Buyer enquiry journeys
              - listitem [ref=e129]: Location-led discovery
              - listitem [ref=e130]: Lead capture and routing
          - article [ref=e131]:
            - generic [ref=e132]: 02 ↗
            - paragraph [ref=e133]: AI-POWERED PROPTECH
            - heading "Intelligence in the workflow" [level=3] [ref=e134]
            - paragraph [ref=e135]: Use intelligence to reduce manual work and improve every stage of the property journey.
            - list [ref=e136]:
              - listitem [ref=e137]: AI recommendations based on preferences, behavior and context
              - listitem [ref=e138]: Lead intelligence to prioritize enquiries and surface intent
              - listitem [ref=e139]: Automation for follow-ups, reporting and repetitive sales workflows
          - article [ref=e140]:
            - generic [ref=e141]: 03 ↗
            - paragraph [ref=e142]: PROPERTY MANDATE SERVICES
            - heading "Representation and sales execution" [level=3] [ref=e143]
            - paragraph [ref=e144]: End-to-end representation and sales execution for selected projects and properties.
            - list [ref=e145]:
              - listitem [ref=e146]: Exclusive mandates and project marketing
              - listitem [ref=e147]: Lead generation and enquiry routing
              - listitem [ref=e148]: Channel management and sales execution
              - listitem [ref=e149]: Performance intelligence across enquiries, visits and conversions
          - article [ref=e150]:
            - generic [ref=e151]: 04 ↗
            - paragraph [ref=e152]: DEVELOPER SOLUTIONS
            - heading "From launch to sell-through" [level=3] [ref=e153]
            - paragraph [ref=e154]: A technology and execution layer for developers from launch to sell-through.
            - list [ref=e155]:
              - listitem [ref=e156]: Launch strategy and market positioning
              - listitem [ref=e157]: Digital marketing around project, location and buyer intent
              - listitem [ref=e158]: Lead generation across digital and partner channels
              - listitem [ref=e159]: Sales enablement with workflows, data and visibility
          - article [ref=e160]:
            - generic [ref=e161]: 05 ↗
            - paragraph [ref=e162]: CRM & SALES AUTOMATION
            - heading "A structured sales journey" [level=3] [ref=e163]
            - paragraph [ref=e164]: Turn every enquiry into a structured, measurable sales journey.
            - list [ref=e165]:
              - listitem [ref=e166]: Lead capture and allocation
              - listitem [ref=e167]: Follow-ups and next-step visibility
              - listitem [ref=e168]: Site visit bookings, outcomes and actions
              - listitem [ref=e169]: Conversion funnel monitoring and dashboards
          - article [ref=e170]:
            - generic [ref=e171]: 06 ↗
            - paragraph [ref=e172]: DATA & MARKET INTELLIGENCE
            - heading "Actionable business visibility" [level=3] [ref=e173]
            - paragraph [ref=e174]: Turn property and customer data into actionable business visibility.
            - list [ref=e175]:
              - listitem [ref=e176]: "Demand signals: understand what buyers are searching for"
              - listitem [ref=e177]: "Pricing visibility: compare market context and project positioning"
              - listitem [ref=e178]: "Funnel analytics: see where demand converts or drops"
      - generic [ref=e179]:
        - generic [ref=e180]: OUR VISION
        - heading [level=2] [ref=e181]:
          - text: A more connected,intelligent
          - emphasis [ref=e182]: real estate future.
        - paragraph [ref=e183]: We aim to bring property discovery, market intelligence, customer relationships and sales execution closer together through thoughtful technology and practical execution.
      - generic [ref=e184]:
        - generic [ref=e185]:
          - paragraph [ref=e186]: LET'S BUILD WHAT'S NEXT
          - heading [level=2] [ref=e187]:
            - text: Have a property opportunity
            - emphasis [ref=e188]: to explore together?
        - link "Get in touch" [ref=e189] [cursor=pointer]:
          - /url: "#/contact"
          - text: Get in touch
          - generic [aria-hidden] [ref=e190]: ↗
  - contentinfo [ref=e191]:
    - generic [ref=e192]:
      - link [ref=e194] [cursor=pointer]:
        - /url: "#/"
        - img "AVODAH & KHEN" [ref=e195]
      - generic [ref=e196]:
        - heading "Company" [level=4] [ref=e197]
        - link "About us" [ref=e198] [cursor=pointer]:
          - /url: "#/company"
        - link "Research" [ref=e199] [cursor=pointer]:
          - /url: "#/research"
        - link "Careers" [ref=e200] [cursor=pointer]:
          - /url: "#/careers"
      - generic [ref=e201]:
        - heading "Studios" [level=4] [ref=e202]
        - paragraph [ref=e203]: Mumbai
    - paragraph [ref=e204]: © 2026 AVODAH GROUP. All rights reserved.
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