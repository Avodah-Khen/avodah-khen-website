# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshots.spec.js >> Visual regression - Mandate
- Location: tests\screenshots.spec.js:17:3

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  135607 pixels (ratio 0.15 of all image pixels) are different.

  Snapshot: mandate-viewport.png

Call log:
  - Expect "toHaveScreenshot(mandate-viewport.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 135607 pixels (ratio 0.15 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 135607 pixels (ratio 0.15 of all image pixels) are different.

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
      - generic [ref=e18]:
        - generic [ref=e19]: AVODAH & KHEN
        - heading "Why Should You Appoint Us As Your Sole Selling Partner for Your Project" [level=1] [ref=e20]
      - generic [ref=e23]:
        - generic [ref=e24]:
          - generic [ref=e25]: SOLE SELLING PARTNER
          - heading "Step-By-Step Guide For Developers In India" [level=3] [ref=e26]
          - paragraph [ref=e27]: Launching a real estate project is a major financial decision. Choosing the right Sole Selling Partner under structured sales mandates and brand mandates can directly impact your revenue, pricing discipline, and inventory absorption.
          - paragraph [ref=e28]: At Avodah & Khen, backed by 20+ years of experience in sales & brand mandates, we support developers across Mumbai with structured exclusive mandate models.
        - img "Real estate professionals discussing a residential project" [ref=e30]
      - generic [ref=e32]:
        - generic [ref=e33]:
          - generic [ref=e34]: UNDERSTANDING THE MODEL
          - heading "What is a Sole Selling Partner?" [level=3] [ref=e35]
        - generic [ref=e36]:
          - paragraph [ref=e37]: A Sole Selling Partner is appointed under an exclusive sales mandate agreement to manage the complete sales lifecycle of a project.
          - heading "Our Sole Selling Model Ensures:" [level=3] [ref=e38]
          - list [ref=e39]:
            - listitem [ref=e40]: Centralized pricing strategy
            - listitem [ref=e41]: Structured inventory allocation
            - listitem [ref=e42]: A well-established and controlled broker network
            - listitem [ref=e43]: Transparent reporting
            - listitem [ref=e44]: Clear accountability
      - generic [ref=e46]:
        - generic [ref=e47]:
          - generic [ref=e48]: STEP-BY-STEP GUIDE
          - heading "While Appointing Us As Your Sole Selling Partner, You Need To..." [level=3] [ref=e49]
        - generic [ref=e50]:
          - article [ref=e51]:
            - img "Define Your Sales Objectives as Your Sole Selling Partner" [ref=e53]
            - generic [ref=e54]:
              - heading "Define Your Sales Objectives as Your Sole Selling Partner" [level=3] [ref=e55]
              - paragraph [ref=e56]: "Get clarity on branding objectives, sales targets and achieving the best possible rates. We begin by understanding:"
              - list [ref=e57]:
                - listitem [ref=e58]: Target buyer segment
                - listitem [ref=e59]: Total inventory size
                - listitem [ref=e60]: Target revenue
                - listitem [ref=e61]: Funding and cash-flow requirements
                - listitem [ref=e62]: Launch timeline
                - listitem [ref=e63]: Sales cycle expectations
          - article [ref=e64]:
            - img "Negotiate the Mandate Agreement" [ref=e66]
            - generic [ref=e67]:
              - heading "Negotiate the Mandate Agreement" [level=3] [ref=e68]
              - paragraph [ref=e69]: "We ensure that our agreement with the developer clearly defines:"
              - list [ref=e70]:
                - listitem [ref=e71]: Revenue targets
                - listitem [ref=e72]: Commission structure
                - listitem [ref=e73]: Exclusive clause
                - listitem [ref=e74]: Marketing responsibilities under brand mandates
                - listitem [ref=e75]: Duration
                - listitem [ref=e76]: Reporting frequency
                - listitem [ref=e77]: Exit clause
              - paragraph [ref=e79]:
                - strong [ref=e80]: "Note:"
                - text: Legal clarity ensures smooth execution of the sales mandate.
          - article [ref=e81]:
            - img "Set Performance KPIs (Key Performance Indicators)" [ref=e83]
            - generic [ref=e84]:
              - heading "Set Performance KPIs (Key Performance Indicators)" [level=3] [ref=e85]
              - paragraph [ref=e86]: "We define measurable KPIs such as:"
              - list [ref=e87]:
                - listitem [ref=e88]: Site visit targets
                - listitem [ref=e89]: Monthly booking targets
                - listitem [ref=e90]: Channel partner activation numbers
                - listitem [ref=e91]: Conversion ratios
                - listitem [ref=e92]: Inventory absorption rate
                - listitem [ref=e93]: Revenue milestone tracking
          - article [ref=e94]:
            - img "Coordinate Sales Execution" [ref=e96]
            - generic [ref=e97]:
              - heading "Coordinate Sales Execution" [level=3] [ref=e98]
              - paragraph [ref=e99]: "For maximum impact, we ensure that:"
              - list [ref=e100]:
                - listitem [ref=e101]: Digital marketing supports on-ground sales
                - listitem [ref=e102]: Branding remains unified
                - listitem [ref=e103]: Messaging stays consistent
                - listitem [ref=e104]: CRM tracking remains active
                - listitem [ref=e105]: Campaigns align with pricing
              - paragraph [ref=e107]:
                - strong [ref=e108]: "Note:"
                - text: Fragmented marketing can weaken mandate effectiveness.
      - generic [ref=e110]:
        - generic [ref=e111]:
          - generic [ref=e112]: KEY BENEFITS
          - heading "Benefits of Appointing Avodah & Khen a Sole Selling Partner" [level=3] [ref=e113]
        - generic [ref=e114]:
          - heading "Unified Brand Positioning" [level=3] [ref=e121]
          - heading "Strong Pricing Discipline" [level=3] [ref=e126]
          - heading "Structured Inventory Release" [level=3] [ref=e133]
          - heading "Data-driven Execution" [level=3] [ref=e137]
          - heading "Single-point Accountability" [level=3] [ref=e142]
          - heading "Faster Inventory Absorption" [level=3] [ref=e148]
      - generic [ref=e150]:
        - generic [ref=e151]:
          - generic [ref=e152]: THE RIGHT MOMENT
          - heading "When Should You Appoint Avodah & Khen As Your Sole Selling Partner?" [level=3] [ref=e153]
          - paragraph [ref=e154]: The right sales strategy, introduced at the right stage, can make a meaningful difference to your project.
        - generic [ref=e155]:
          - article [ref=e156]:
            - heading "New Project Launch" [level=3] [ref=e161]
            - paragraph [ref=e162]: Establish a clear sales strategy, pricing structure and market positioning from day one.
            - generic [aria-hidden] [ref=e163]: ↗
          - article [ref=e164]:
            - heading "Pre-launch Planning" [level=3] [ref=e168]
            - paragraph [ref=e169]: Prepare your project for launch with structured planning and coordinated sales activities.
            - generic [aria-hidden] [ref=e170]: ↗
          - article [ref=e171]:
            - heading "Large Township Developments" [level=3] [ref=e176]
            - paragraph [ref=e177]: Coordinate large inventories, channel partners and sales execution through one structured model.
            - generic [aria-hidden] [ref=e178]: ↗
          - article [ref=e179]:
            - heading "Redevelopment Projects" [level=3] [ref=e185]
            - paragraph [ref=e186]: Bring clarity, accountability and a defined sales approach to complex redevelopment projects.
            - generic [aria-hidden] [ref=e187]: ↗
          - article [ref=e188]:
            - heading "Slow-moving Inventory" [level=3] [ref=e191]
            - paragraph [ref=e192]: Identify sales bottlenecks and strengthen pricing, marketing and conversion strategies.
            - generic [aria-hidden] [ref=e193]: ↗
          - article [ref=e194]:
            - heading "Expansion into Mumbai Markets" [level=3] [ref=e199]
            - paragraph [ref=e200]: Build a market-focused sales strategy to support expansion across Mumbai.
            - generic [aria-hidden] [ref=e201]: ↗
      - generic [ref=e203]:
        - generic [ref=e204]:
          - generic [ref=e205]: SALES STRUCTURE
          - heading "Sole Selling Partner vs Multiple Channel Partners" [level=3] [ref=e206]
        - generic [ref=e207]:
          - generic [ref=e208]:
            - heading "Why Should You Appoint a Single Sole Selling Partner?" [level=3] [ref=e209]
            - list [ref=e210]:
              - listitem [ref=e211]: Strong pricing control
              - listitem [ref=e212]: Unified brand messaging
              - listitem [ref=e213]: Clear accountability
              - listitem [ref=e214]: Structured inventory allocation
              - listitem [ref=e215]: Centralized reporting
          - generic [ref=e216]:
            - heading "Why Should You Avoid Appointing Multiple Channel Partners?" [level=3] [ref=e217]
            - list [ref=e218]:
              - listitem [ref=e219]: Pricing inconsistency
              - listitem [ref=e220]: Fragmented brand communication
              - listitem [ref=e221]: Confused accountability
              - listitem [ref=e222]: Inventory conflicts
              - listitem [ref=e223]: Scattered reporting
      - generic [ref=e225]:
        - generic [ref=e226]:
          - generic [ref=e227]: AVODAH & KHEN
          - heading "Sales Expertise. Delivered Strategically." [level=3] [ref=e228]:
            - text: Sales Expertise.
            - generic [ref=e229]: Delivered Strategically.
          - paragraph [ref=e230]: How we support developers through market intelligence, brand mandates and structured sales execution.
        - generic [ref=e231]:
          - article [ref=e232]:
            - generic [ref=e237]:
              - generic [ref=e238]: MARKET INTELLIGENCE
              - heading "Market Expertise Across Mumbai" [level=4] [ref=e239]
              - paragraph [ref=e240]: Local market understanding to help position projects for the right audience.
            - generic [aria-hidden] [ref=e241]: ↗
          - article [ref=e242]:
            - generic [ref=e248]:
              - generic [ref=e249]: BRAND STRATEGY
              - heading "Strategic Brand-Mandate Implementation" [level=4] [ref=e250]
              - paragraph [ref=e251]: Consistent project positioning, communication and coordinated execution.
            - generic [aria-hidden] [ref=e252]: ↗
          - article [ref=e253]:
            - generic [ref=e258]:
              - generic [ref=e259]: SALES MANAGEMENT
              - heading "End-to-End Exclusive Sales Mandates" [level=4] [ref=e260]
              - paragraph [ref=e261]: A structured approach to managing the project sales lifecycle.
            - generic [aria-hidden] [ref=e262]: ↗
          - article [ref=e263]:
            - generic [ref=e270]:
              - generic [ref=e271]: CHANNEL PARTNERS
              - heading "Broker Ecosystem Management" [level=4] [ref=e272]
              - paragraph [ref=e273]: Organised broker coordination to support reach and sales conversion.
            - generic [aria-hidden] [ref=e274]: ↗
          - article [ref=e275]:
            - generic [ref=e280]:
              - generic [ref=e281]: ON-GROUND EXECUTION
              - heading "On-Site Sales Deployment" [level=4] [ref=e282]
              - paragraph [ref=e283]: Dedicated project-level sales support and coordinated execution.
            - generic [aria-hidden] [ref=e284]: ↗
          - article [ref=e285]:
            - generic [ref=e289]:
              - generic [ref=e290]: TECHNOLOGY & INSIGHTS
              - heading "CRM-Driven Reporting" [level=4] [ref=e291]
              - paragraph [ref=e292]: Structured lead tracking, transparent reporting and sales visibility.
            - generic [aria-hidden] [ref=e293]: ↗
        - generic [ref=e294]:
          - generic [ref=e295]: MARKET KNOWLEDGE
          - generic [ref=e296]: →
          - generic [ref=e297]: SALES EXECUTION
      - generic [ref=e299]:
        - generic [ref=e300]:
          - generic [ref=e301]:
            - generic [ref=e302]: OUR STRENGTH
            - heading "We Pride Ourselves With..." [level=3] [ref=e303]
          - paragraph [ref=e304]: Our approach is built around experience, accountability, structured execution and a deep understanding of the real estate sales ecosystem.
        - generic [ref=e305]:
          - article [ref=e306]:
            - generic [ref=e307]: "01"
            - heading "Proven Sales Expertise" [level=4] [ref=e311]
            - paragraph [ref=e312]: Exclusive sales mandate and brand-mandate experience built around structured execution.
            - generic [aria-hidden] [ref=e313]: ↗
          - article [ref=e314]:
            - generic [ref=e315]: "02"
            - heading "Mumbai Market Knowledge" [level=4] [ref=e320]
            - paragraph [ref=e321]: Local market understanding to help developers position their projects more effectively.
            - generic [aria-hidden] [ref=e322]: ↗
          - article [ref=e323]:
            - generic [ref=e324]: "03"
            - heading "Dedicated Sales Teams" [level=4] [ref=e331]
            - paragraph [ref=e332]: On-ground sales deployment focused on coordination, buyer engagement and execution.
            - generic [aria-hidden] [ref=e333]: ↗
          - article [ref=e334]:
            - generic [ref=e335]: "04"
            - heading "CRM & Reporting Systems" [level=4] [ref=e339]
            - paragraph [ref=e340]: Organised lead tracking and reporting for improved visibility across the sales process.
            - generic [aria-hidden] [ref=e341]: ↗
          - article [ref=e342]:
            - generic [ref=e343]: "05"
            - heading "Strong Broker Network" [level=4] [ref=e348]
            - paragraph [ref=e349]: Broker relationships and channel coordination to support project reach and sales opportunities.
            - generic [aria-hidden] [ref=e350]: ↗
          - article [ref=e351]:
            - generic [ref=e352]: "06"
            - heading "Developer Relationships" [level=4] [ref=e357]
            - paragraph [ref=e358]: A relationship-led approach to working with developers and supporting their sales objectives.
            - generic [aria-hidden] [ref=e359]: ↗
        - generic [ref=e360]:
          - generic [ref=e361]: EXPERIENCE
          - generic [ref=e362]: →
          - generic [ref=e363]: EXECUTION
          - generic [ref=e364]: →
          - generic [ref=e365]: RESULTS
      - generic [ref=e367]:
        - generic [ref=e369]:
          - generic [ref=e370]: FINAL TAKEAWAY
          - heading "Not Just Sales. A Structured Growth System." [level=3] [ref=e371]
          - paragraph [ref=e372]: Appointing a Sole Selling Partner is not outsourcing sales. It is building a structured, accountable and revenue-driven sales system backed by professional sales mandates and brand mandates.
          - generic [ref=e373]: IF YOU WANT TO
          - generic [ref=e374]:
            - generic [ref=e375]: Launch stronger
            - generic [ref=e380]: Sell faster
            - generic [ref=e384]: Maintain pricing discipline
            - generic [ref=e390]: Avoid broker conflicts
        - generic [ref=e394]:
          - generic [ref=e395]:
            - generic [ref=e396]: LET'S BUILD YOUR SALES STRATEGY
            - heading "Ready to appoint us as your Sole Selling Partner?" [level=3] [ref=e397]
            - paragraph [ref=e398]: Partner with AVODAH & KHEN to bring structure, accountability and strategic direction to your project sales.
            - link "Contact Us Now" [ref=e399] [cursor=pointer]:
              - /url: /contact
              - text: Contact Us Now
              - generic [aria-hidden] [ref=e400]: ↗
          - generic [ref=e401]:
            - paragraph [ref=e406]: Planning a new project launch?
            - paragraph [ref=e411]: Looking for structured sales execution in Mumbai?
            - generic [ref=e412]:
              - text: Connect with
              - strong [ref=e413]: AVODAH & KHEN
              - text: to discuss your project and explore an exclusive sales mandate and brand-mandate approach.
        - generic [ref=e414]:
          - generic [ref=e415]: YOUR PROJECT
          - generic [ref=e416]: →
          - generic [ref=e417]: OUR COMMITMENT
          - generic [ref=e418]: →
          - generic [ref=e419]: LONG-TERM VALUE
  - contentinfo [ref=e420]:
    - generic [ref=e421]:
      - link [ref=e423] [cursor=pointer]:
        - /url: "#/"
        - img "AVODAH & KHEN" [ref=e424]
      - generic [ref=e425]:
        - heading "Company" [level=4] [ref=e426]
        - link "About us" [ref=e427] [cursor=pointer]:
          - /url: "#/company"
        - link "Research" [ref=e428] [cursor=pointer]:
          - /url: "#/research"
        - link "Careers" [ref=e429] [cursor=pointer]:
          - /url: "#/careers"
      - generic [ref=e430]:
        - heading "Studios" [level=4] [ref=e431]
        - paragraph [ref=e432]: Mumbai
    - paragraph [ref=e433]: © 2026 AVODAH GROUP. All rights reserved.
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