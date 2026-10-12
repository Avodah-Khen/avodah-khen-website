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

  705892 pixels (ratio 0.77 of all image pixels) are different.

  Snapshot: services-viewport.png

Call log:
  - Expect "toHaveScreenshot(services-viewport.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 705892 pixels (ratio 0.77 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 705892 pixels (ratio 0.77 of all image pixels) are different.

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
    - generic [ref=e16]:
      - generic [ref=e19]:
        - generic [ref=e20]: REAL ESTATE. REIMAGINED WITH PROPTECH
        - heading "Technology-driven solutions. Transforming the way real estate moves." [level=1] [ref=e21]: Technology-driven solutions.Transforming the way real estate moves.
        - paragraph [ref=e22]: We combine real estate expertise with technology to make buying, selling and investing in property simpler, smarter and more transparent.
        - generic [ref=e23]:
          - link "Talk to our team" [ref=e24] [cursor=pointer]:
            - /url: "#/contact"
          - link "Explore PropTech" [ref=e25] [cursor=pointer]:
            - /url: "#/proptech"
      - region [ref=e26]:
        - generic [ref=e27]:
          - generic [ref=e28]: OUR CONNECTED ECOSYSTEM
          - heading [level=2] [ref=e29]:
            - text: One ecosystem,
            - emphasis [ref=e30]: connected intelligence.
          - paragraph [ref=e32]: From property discovery to conversion, our connected capabilities bring intelligence, relationships and execution together.
          - link "EXPLORE OUR ECOSYSTEM" [ref=e33] [cursor=pointer]:
            - /url: "#/proptech"
        - generic [ref=e36]:
          - generic [ref=e37]: CORE CAPABILITIES
          - generic [ref=e40]:
            - article [ref=e41]:
              - generic [ref=e46]:
                - generic [ref=e47]:
                  - heading "PROPERTY PORTAL" [level=3] [ref=e48]
                  - generic [ref=e49]: Discover
                - paragraph [ref=e50]: Discover properties and explore real estate opportunities.
            - article [ref=e51]:
              - generic [ref=e56]:
                - generic [ref=e57]:
                  - heading "AI + DATA" [level=3] [ref=e58]
                  - generic [ref=e59]: Understand
                - paragraph [ref=e60]: Turn property data into meaningful insights and informed decisions.
            - article [ref=e61]:
              - generic [ref=e66]:
                - generic [ref=e67]:
                  - heading "MANDATES" [level=3] [ref=e68]
                  - generic [ref=e69]: Represent
                - paragraph [ref=e70]: Structure and represent real estate opportunities.
            - article [ref=e71]:
              - generic [ref=e78]:
                - generic [ref=e79]:
                  - heading "CRM" [level=3] [ref=e80]
                  - generic [ref=e81]: Manage
                - paragraph [ref=e82]: Organize leads, relationships and customer journeys.
            - article [ref=e83]:
              - generic [ref=e88]:
                - generic [ref=e89]:
                  - heading "SALES" [level=3] [ref=e90]
                  - generic [ref=e91]: Convert
                - paragraph [ref=e92]: Move qualified opportunities through the sales pipeline.
            - article [ref=e93]:
              - generic [ref=e97]:
                - generic [ref=e98]:
                  - heading "AUTOMATION" [level=3] [ref=e99]
                  - generic [ref=e100]: Optimize
                - paragraph [ref=e101]: Streamline repetitive tasks and connected workflows.
          - link "DISCOVER OUR CAPABILITIES" [ref=e102] [cursor=pointer]:
            - /url: "#/services"
      - generic [ref=e105]:
        - generic [ref=e106]: HOW WE WORK
        - generic [ref=e109]:
          - heading [level=2] [ref=e110]:
            - text: A repeatable model.
            - emphasis [ref=e111]: Measurable outcomes.
          - paragraph [ref=e112]: From property acquisition to data-led optimization.
        - generic [ref=e113]:
          - article [ref=e114]:
            - generic [ref=e116]:
              - text: ACQUIRE
              - heading "Acquire" [level=3] [ref=e117]
              - paragraph [ref=e118]: Mandate / inventory
          - article [ref=e120]:
            - generic [ref=e122]:
              - text: POSITION
              - heading "Position" [level=3] [ref=e123]
              - paragraph [ref=e124]: Strategy + content
          - article [ref=e126]:
            - generic [ref=e128]:
              - text: GENERATE
              - heading "Generate" [level=3] [ref=e129]
              - paragraph [ref=e130]: Marketing + demand
          - article [ref=e132]:
            - generic [ref=e134]:
              - text: MANAGE
              - heading "Manage" [level=3] [ref=e135]
              - paragraph [ref=e136]: CRM + channels
          - article [ref=e138]:
            - generic [ref=e140]:
              - text: CONVERT
              - heading "Convert" [level=3] [ref=e141]
              - paragraph [ref=e142]: Visits + sales
          - article [ref=e144]:
            - generic [ref=e146]:
              - text: LEARN
              - heading "Learn" [level=3] [ref=e147]
              - paragraph [ref=e148]: Data + optimization
        - generic [ref=e150]: A CONNECTED JOURNEY. LASTING VALUE.
      - generic [ref=e153]:
        - img "Modern architecture representing real estate innovation" [ref=e155]
        - generic [ref=e156]:
          - generic [ref=e157]: WHY AVODAH
          - heading [level=2] [ref=e158]:
            - text: Technology grounded in
            - emphasis [ref=e159]: real estate execution.
          - paragraph [ref=e160]: Built to bridge technology and real estate execution.
          - generic [ref=e161]:
            - generic [ref=e162]:
              - generic [ref=e163]: "01"
              - generic [ref=e164]:
                - heading "Real-estate first" [level=3] [ref=e165]
                - paragraph [ref=e166]: Products and workflows designed around property businesses.
            - generic [ref=e167]:
              - generic [ref=e168]: "02"
              - generic [ref=e169]:
                - heading "Technology-led" [level=3] [ref=e170]
                - paragraph [ref=e171]: Modern digital experiences, automation and AI.
            - generic [ref=e172]:
              - generic [ref=e173]: "03"
              - generic [ref=e174]:
                - heading "Execution focused" [level=3] [ref=e175]
                - paragraph [ref=e176]: Technology paired with hands-on sales and mandate capabilities.
            - generic [ref=e177]:
              - generic [ref=e178]: "04"
              - generic [ref=e179]:
                - heading "Data connected" [level=3] [ref=e180]
                - paragraph [ref=e181]: Performance visibility across the customer and sales journey.
      - generic [ref=e182]:
        - generic [ref=e183]:
          - generic [ref=e184]: LET’S CONNECT
          - heading [level=2] [ref=e185]:
            - text: Let’s build the future
            - emphasis [ref=e186]: of real estate.
          - paragraph [ref=e187]: Partner with us for property mandates, technology, lead generation, CRM, AI and sales execution.
        - link "Contact AVODAH" [ref=e189] [cursor=pointer]:
          - /url: "#/contact"
  - contentinfo [ref=e190]:
    - generic [ref=e191]:
      - link [ref=e193] [cursor=pointer]:
        - /url: "#/"
        - img "AVODAH & KHEN" [ref=e194]
      - generic [ref=e195]:
        - heading "Company" [level=4] [ref=e196]
        - link "About us" [ref=e197] [cursor=pointer]:
          - /url: "#/company"
        - link "Research" [ref=e198] [cursor=pointer]:
          - /url: "#/research"
        - link "Careers" [ref=e199] [cursor=pointer]:
          - /url: "#/careers"
      - generic [ref=e200]:
        - heading "Studios" [level=4] [ref=e201]
        - paragraph [ref=e202]: Mumbai
    - paragraph [ref=e203]: © 2026 AVODAH GROUP. All rights reserved.
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