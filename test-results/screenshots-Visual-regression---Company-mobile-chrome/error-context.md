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

  16942 pixels (ratio 0.06 of all image pixels) are different.

  Snapshot: company-viewport.png

Call log:
  - Expect "toHaveScreenshot(company-viewport.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 16942 pixels (ratio 0.06 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 16942 pixels (ratio 0.06 of all image pixels) are different.

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
        - generic [ref=e12]:
          - paragraph [ref=e13]: AVODAH & KHEN
          - heading [level=1] [ref=e14]:
            - text: Real Estate.Technology.
            - emphasis [ref=e15]: Intelligence.
          - paragraph [ref=e16]: A connected platform for property discovery, mandates, sales, CRM, data and AI-powered real estate.
          - link "Connect with us" [ref=e17] [cursor=pointer]:
            - /url: "#/contact"
            - text: Connect with us
            - generic [aria-hidden] [ref=e18]: ↗
        - generic [ref=e19]: PROPERTY • TECHNOLOGY • GROWTH
      - generic [ref=e20]:
        - generic [ref=e21]: WHO WE ARE
        - generic [ref=e22]:
          - generic [ref=e23]:
            - heading [level=2] [ref=e24]:
              - text: A technology-led real estate company built around
              - emphasis [ref=e25]: one connected ecosystem.
            - generic [ref=e26]:
              - generic [ref=e27]:
                - generic [aria-hidden] [ref=e28]: ⌂
                - strong [ref=e29]: PROPERTYDISCOVERY
              - generic [ref=e30]:
                - generic [aria-hidden] [ref=e31]: ◎
                - strong [ref=e32]: AI &DATA
              - generic [ref=e33]:
                - generic [aria-hidden] [ref=e34]: ♧
                - strong [ref=e35]: MANDATES &SALES EXECUTION
              - generic [ref=e36]:
                - generic [aria-hidden] [ref=e37]: ▥
                - strong [ref=e38]: CRM &INTELLIGENCE
            - paragraph [ref=e39]: We bring together property, technology, sales and data to create a seamless experience for developers, brokers and buyers — all in one platform.
          - img "Connected real estate ecosystem integrating technology, AI, sales and CRM" [ref=e41]
      - generic [ref=e42]:
        - generic [ref=e43]:
          - generic [ref=e44]:
            - generic [ref=e45]: THE REAL ESTATE GAP
            - heading "The Real Estate Gap" [level=2] [ref=e46]: The RealEstate Gap
            - paragraph [ref=e48]:
              - text: High-Value Assets.
              - emphasis [ref=e49]: Fragmented Workflows.
            - paragraph [ref=e50]: Four challenges. One connected opportunity.
          - generic [ref=e51]:
            - article [ref=e52]:
              - generic [ref=e53]: "01"
              - heading "Fragmented discovery" [level=3] [ref=e59]
              - paragraph [ref=e60]: Buyers navigate disconnected listings and channels.
            - article [ref=e62]:
              - generic [ref=e63]: "02"
              - heading "Lead leakage" [level=3] [ref=e71]
              - paragraph [ref=e72]: Enquiries can get lost across teams, spreadsheets and messaging.
            - article [ref=e74]:
              - generic [ref=e75]: "03"
              - heading "Limited intelligence" [level=3] [ref=e80]
              - paragraph [ref=e81]: Decisions often lack a single view of demand, pricing and performance.
            - article [ref=e83]:
              - generic [ref=e84]: "04"
              - heading "Complex sales" [level=3] [ref=e91]
              - paragraph [ref=e92]: Mandates, channel partners and follow-ups require constant coordination.
        - generic [ref=e94]:
          - generic [ref=e95]:
            - text: THE OPPORTUNITY
            - heading "One connected real estate ecosystem." [level=3] [ref=e96]
          - generic [ref=e97]:
            - generic [ref=e98]: Property Discovery
            - generic [aria-hidden] [ref=e99]: •
            - generic [ref=e100]: AI + Data
            - generic [aria-hidden] [ref=e101]: •
            - generic [ref=e102]: CRM
            - generic [aria-hidden] [ref=e103]: •
            - generic [ref=e104]: Sales Execution
      - generic [ref=e105]:
        - generic [ref=e106]: WHAT WE DO
        - generic [ref=e107]:
          - heading [level=2] [ref=e108]:
            - text: Capabilities across
            - emphasis [ref=e109]: the property lifecycle.
          - paragraph [ref=e110]: A connected set of services and digital capabilities for property discovery, marketing, sales and business intelligence.
        - generic [ref=e111]:
          - article [ref=e112]:
            - generic [ref=e113]: 01 ↗
            - paragraph [ref=e114]: PROPERTY PORTAL
            - heading "Property discovery" [level=3] [ref=e115]
            - paragraph [ref=e116]: A modern digital destination for property discovery and qualified enquiries.
            - list [ref=e117]:
              - listitem [ref=e118]: Smart property search
              - listitem [ref=e119]: Project and inventory discovery
              - listitem [ref=e120]: Rich property profiles
              - listitem [ref=e121]: Buyer enquiry journeys
              - listitem [ref=e122]: Location-led discovery
              - listitem [ref=e123]: Lead capture and routing
          - article [ref=e124]:
            - generic [ref=e125]: 02 ↗
            - paragraph [ref=e126]: AI-POWERED PROPTECH
            - heading "Intelligence in the workflow" [level=3] [ref=e127]
            - paragraph [ref=e128]: Use intelligence to reduce manual work and improve every stage of the property journey.
            - list [ref=e129]:
              - listitem [ref=e130]: AI recommendations based on preferences, behavior and context
              - listitem [ref=e131]: Lead intelligence to prioritize enquiries and surface intent
              - listitem [ref=e132]: Automation for follow-ups, reporting and repetitive sales workflows
          - article [ref=e133]:
            - generic [ref=e134]: 03 ↗
            - paragraph [ref=e135]: PROPERTY MANDATE SERVICES
            - heading "Representation and sales execution" [level=3] [ref=e136]
            - paragraph [ref=e137]: End-to-end representation and sales execution for selected projects and properties.
            - list [ref=e138]:
              - listitem [ref=e139]: Exclusive mandates and project marketing
              - listitem [ref=e140]: Lead generation and enquiry routing
              - listitem [ref=e141]: Channel management and sales execution
              - listitem [ref=e142]: Performance intelligence across enquiries, visits and conversions
          - article [ref=e143]:
            - generic [ref=e144]: 04 ↗
            - paragraph [ref=e145]: DEVELOPER SOLUTIONS
            - heading "From launch to sell-through" [level=3] [ref=e146]
            - paragraph [ref=e147]: A technology and execution layer for developers from launch to sell-through.
            - list [ref=e148]:
              - listitem [ref=e149]: Launch strategy and market positioning
              - listitem [ref=e150]: Digital marketing around project, location and buyer intent
              - listitem [ref=e151]: Lead generation across digital and partner channels
              - listitem [ref=e152]: Sales enablement with workflows, data and visibility
          - article [ref=e153]:
            - generic [ref=e154]: 05 ↗
            - paragraph [ref=e155]: CRM & SALES AUTOMATION
            - heading "A structured sales journey" [level=3] [ref=e156]
            - paragraph [ref=e157]: Turn every enquiry into a structured, measurable sales journey.
            - list [ref=e158]:
              - listitem [ref=e159]: Lead capture and allocation
              - listitem [ref=e160]: Follow-ups and next-step visibility
              - listitem [ref=e161]: Site visit bookings, outcomes and actions
              - listitem [ref=e162]: Conversion funnel monitoring and dashboards
          - article [ref=e163]:
            - generic [ref=e164]: 06 ↗
            - paragraph [ref=e165]: DATA & MARKET INTELLIGENCE
            - heading "Actionable business visibility" [level=3] [ref=e166]
            - paragraph [ref=e167]: Turn property and customer data into actionable business visibility.
            - list [ref=e168]:
              - listitem [ref=e169]: "Demand signals: understand what buyers are searching for"
              - listitem [ref=e170]: "Pricing visibility: compare market context and project positioning"
              - listitem [ref=e171]: "Funnel analytics: see where demand converts or drops"
      - generic [ref=e172]:
        - generic [ref=e173]: OUR VISION
        - heading [level=2] [ref=e174]:
          - text: A more connected,intelligent
          - emphasis [ref=e175]: real estate future.
        - paragraph [ref=e176]: We aim to bring property discovery, market intelligence, customer relationships and sales execution closer together through thoughtful technology and practical execution.
      - generic [ref=e177]:
        - generic [ref=e178]:
          - paragraph [ref=e179]: LET'S BUILD WHAT'S NEXT
          - heading [level=2] [ref=e180]:
            - text: Have a property opportunity
            - emphasis [ref=e181]: to explore together?
        - link "Get in touch" [ref=e182] [cursor=pointer]:
          - /url: "#/contact"
          - text: Get in touch
          - generic [aria-hidden] [ref=e183]: ↗
  - contentinfo [ref=e184]:
    - generic [ref=e185]:
      - link [ref=e187] [cursor=pointer]:
        - /url: "#/"
        - img "AVODAH & KHEN" [ref=e188]
      - generic [ref=e189]:
        - heading "Company" [level=4] [ref=e190]
        - link "About us" [ref=e191] [cursor=pointer]:
          - /url: "#/company"
        - link "Research" [ref=e192] [cursor=pointer]:
          - /url: "#/research"
        - link "Careers" [ref=e193] [cursor=pointer]:
          - /url: "#/careers"
      - generic [ref=e194]:
        - heading "Studios" [level=4] [ref=e195]
        - paragraph [ref=e196]: Mumbai
    - paragraph [ref=e197]: © 2026 AVODAH GROUP. All rights reserved.
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