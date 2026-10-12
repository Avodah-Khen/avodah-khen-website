# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshots.spec.js >> Visual regression - Services
- Location: tests\screenshots.spec.js:17:3

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  107494 pixels (ratio 0.38 of all image pixels) are different.

  Snapshot: services-viewport.png

Call log:
  - Expect "toHaveScreenshot(services-viewport.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 107494 pixels (ratio 0.38 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 107494 pixels (ratio 0.38 of all image pixels) are different.

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
    - generic [ref=e9]:
      - generic [ref=e12]:
        - generic [ref=e13]: REAL ESTATE. REIMAGINED WITH PROPTECH
        - heading "Technology-driven solutions. Transforming the way real estate moves." [level=1] [ref=e14]: Technology-driven solutions.Transforming the way real estate moves.
        - paragraph [ref=e15]: We combine real estate expertise with technology to make buying, selling and investing in property simpler, smarter and more transparent.
        - generic [ref=e16]:
          - link "Talk to our team" [ref=e17] [cursor=pointer]:
            - /url: "#/contact"
          - link "Explore PropTech" [ref=e18] [cursor=pointer]:
            - /url: "#/proptech"
      - region [ref=e19]:
        - generic [ref=e20]:
          - generic [ref=e21]: OUR CONNECTED ECOSYSTEM
          - heading [level=2] [ref=e22]:
            - text: One ecosystem,
            - emphasis [ref=e23]: connected intelligence.
          - paragraph [ref=e25]: From property discovery to conversion, our connected capabilities bring intelligence, relationships and execution together.
          - link "EXPLORE OUR ECOSYSTEM" [ref=e26] [cursor=pointer]:
            - /url: "#/proptech"
        - generic [ref=e29]:
          - generic [ref=e30]: CORE CAPABILITIES
          - generic [ref=e33]:
            - article [ref=e34]:
              - generic [ref=e39]:
                - generic [ref=e40]:
                  - heading "PROPERTY PORTAL" [level=3] [ref=e41]
                  - generic [ref=e42]: Discover
                - paragraph [ref=e43]: Discover properties and explore real estate opportunities.
            - article [ref=e44]:
              - generic [ref=e49]:
                - generic [ref=e50]:
                  - heading "AI + DATA" [level=3] [ref=e51]
                  - generic [ref=e52]: Understand
                - paragraph [ref=e53]: Turn property data into meaningful insights and informed decisions.
            - article [ref=e54]:
              - generic [ref=e59]:
                - generic [ref=e60]:
                  - heading "MANDATES" [level=3] [ref=e61]
                  - generic [ref=e62]: Represent
                - paragraph [ref=e63]: Structure and represent real estate opportunities.
            - article [ref=e64]:
              - generic [ref=e71]:
                - generic [ref=e72]:
                  - heading "CRM" [level=3] [ref=e73]
                  - generic [ref=e74]: Manage
                - paragraph [ref=e75]: Organize leads, relationships and customer journeys.
            - article [ref=e76]:
              - generic [ref=e81]:
                - generic [ref=e82]:
                  - heading "SALES" [level=3] [ref=e83]
                  - generic [ref=e84]: Convert
                - paragraph [ref=e85]: Move qualified opportunities through the sales pipeline.
            - article [ref=e86]:
              - generic [ref=e90]:
                - generic [ref=e91]:
                  - heading "AUTOMATION" [level=3] [ref=e92]
                  - generic [ref=e93]: Optimize
                - paragraph [ref=e94]: Streamline repetitive tasks and connected workflows.
          - link "DISCOVER OUR CAPABILITIES" [ref=e95] [cursor=pointer]:
            - /url: "#/services"
      - generic [ref=e98]:
        - generic [ref=e99]: HOW WE WORK
        - generic [ref=e102]:
          - heading [level=2] [ref=e103]:
            - text: A repeatable model.
            - emphasis [ref=e104]: Measurable outcomes.
          - paragraph [ref=e105]: From property acquisition to data-led optimization.
        - generic [ref=e106]:
          - article [ref=e107]:
            - generic [ref=e109]:
              - text: ACQUIRE
              - heading "Acquire" [level=3] [ref=e110]
              - paragraph [ref=e111]: Mandate / inventory
          - article [ref=e113]:
            - generic [ref=e115]:
              - text: POSITION
              - heading "Position" [level=3] [ref=e116]
              - paragraph [ref=e117]: Strategy + content
          - article [ref=e119]:
            - generic [ref=e121]:
              - text: GENERATE
              - heading "Generate" [level=3] [ref=e122]
              - paragraph [ref=e123]: Marketing + demand
          - article [ref=e125]:
            - generic [ref=e127]:
              - text: MANAGE
              - heading "Manage" [level=3] [ref=e128]
              - paragraph [ref=e129]: CRM + channels
          - article [ref=e131]:
            - generic [ref=e133]:
              - text: CONVERT
              - heading "Convert" [level=3] [ref=e134]
              - paragraph [ref=e135]: Visits + sales
          - article [ref=e137]:
            - generic [ref=e139]:
              - text: LEARN
              - heading "Learn" [level=3] [ref=e140]
              - paragraph [ref=e141]: Data + optimization
        - generic [ref=e143]: A CONNECTED JOURNEY. LASTING VALUE.
      - generic [ref=e146]:
        - img "Modern architecture representing real estate innovation" [ref=e148]
        - generic [ref=e149]:
          - generic [ref=e150]: WHY AVODAH
          - heading [level=2] [ref=e151]:
            - text: Technology grounded in
            - emphasis [ref=e152]: real estate execution.
          - paragraph [ref=e153]: Built to bridge technology and real estate execution.
          - generic [ref=e154]:
            - generic [ref=e155]:
              - generic [ref=e156]: "01"
              - generic [ref=e157]:
                - heading "Real-estate first" [level=3] [ref=e158]
                - paragraph [ref=e159]: Products and workflows designed around property businesses.
            - generic [ref=e160]:
              - generic [ref=e161]: "02"
              - generic [ref=e162]:
                - heading "Technology-led" [level=3] [ref=e163]
                - paragraph [ref=e164]: Modern digital experiences, automation and AI.
            - generic [ref=e165]:
              - generic [ref=e166]: "03"
              - generic [ref=e167]:
                - heading "Execution focused" [level=3] [ref=e168]
                - paragraph [ref=e169]: Technology paired with hands-on sales and mandate capabilities.
            - generic [ref=e170]:
              - generic [ref=e171]: "04"
              - generic [ref=e172]:
                - heading "Data connected" [level=3] [ref=e173]
                - paragraph [ref=e174]: Performance visibility across the customer and sales journey.
      - generic [ref=e175]:
        - generic [ref=e176]:
          - generic [ref=e177]: LET’S CONNECT
          - heading [level=2] [ref=e178]:
            - text: Let’s build the future
            - emphasis [ref=e179]: of real estate.
          - paragraph [ref=e180]: Partner with us for property mandates, technology, lead generation, CRM, AI and sales execution.
        - link "Contact AVODAH" [ref=e182] [cursor=pointer]:
          - /url: "#/contact"
  - contentinfo [ref=e183]:
    - generic [ref=e184]:
      - link [ref=e186] [cursor=pointer]:
        - /url: "#/"
        - img "AVODAH & KHEN" [ref=e187]
      - generic [ref=e188]:
        - heading "Company" [level=4] [ref=e189]
        - link "About us" [ref=e190] [cursor=pointer]:
          - /url: "#/company"
        - link "Research" [ref=e191] [cursor=pointer]:
          - /url: "#/research"
        - link "Careers" [ref=e192] [cursor=pointer]:
          - /url: "#/careers"
      - generic [ref=e193]:
        - heading "Studios" [level=4] [ref=e194]
        - paragraph [ref=e195]: Mumbai
    - paragraph [ref=e196]: © 2026 AVODAH GROUP. All rights reserved.
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