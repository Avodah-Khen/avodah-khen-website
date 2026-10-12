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

  31231 pixels (ratio 0.11 of all image pixels) are different.

  Snapshot: mandate-viewport.png

Call log:
  - Expect "toHaveScreenshot(mandate-viewport.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 31231 pixels (ratio 0.11 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 31231 pixels (ratio 0.11 of all image pixels) are different.

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
      - generic [ref=e11]:
        - generic [ref=e12]: AVODAH & KHEN
        - heading "Why Should You Appoint Us As Your Sole Selling Partner for Your Project" [level=1] [ref=e13]
      - generic [ref=e16]:
        - generic [ref=e17]:
          - generic [ref=e18]: SOLE SELLING PARTNER
          - heading "Step-By-Step Guide For Developers In India" [level=3] [ref=e19]
          - paragraph [ref=e20]: Launching a real estate project is a major financial decision. Choosing the right Sole Selling Partner under structured sales mandates and brand mandates can directly impact your revenue, pricing discipline, and inventory absorption.
          - paragraph [ref=e21]: At Avodah & Khen, backed by 20+ years of experience in sales & brand mandates, we support developers across Mumbai with structured exclusive mandate models.
        - img "Real estate professionals discussing a residential project" [ref=e23]
      - generic [ref=e25]:
        - generic [ref=e26]:
          - generic [ref=e27]: UNDERSTANDING THE MODEL
          - heading "What is a Sole Selling Partner?" [level=3] [ref=e28]
        - generic [ref=e29]:
          - paragraph [ref=e30]: A Sole Selling Partner is appointed under an exclusive sales mandate agreement to manage the complete sales lifecycle of a project.
          - heading "Our Sole Selling Model Ensures:" [level=3] [ref=e31]
          - list [ref=e32]:
            - listitem [ref=e33]: Centralized pricing strategy
            - listitem [ref=e34]: Structured inventory allocation
            - listitem [ref=e35]: A well-established and controlled broker network
            - listitem [ref=e36]: Transparent reporting
            - listitem [ref=e37]: Clear accountability
      - generic [ref=e39]:
        - generic [ref=e40]:
          - generic [ref=e41]: STEP-BY-STEP GUIDE
          - heading "While Appointing Us As Your Sole Selling Partner, You Need To..." [level=3] [ref=e42]
        - generic [ref=e43]:
          - article [ref=e44]:
            - img "Define Your Sales Objectives as Your Sole Selling Partner" [ref=e46]
            - generic [ref=e47]:
              - heading "Define Your Sales Objectives as Your Sole Selling Partner" [level=3] [ref=e48]
              - paragraph [ref=e49]: "Get clarity on branding objectives, sales targets and achieving the best possible rates. We begin by understanding:"
              - list [ref=e50]:
                - listitem [ref=e51]: Target buyer segment
                - listitem [ref=e52]: Total inventory size
                - listitem [ref=e53]: Target revenue
                - listitem [ref=e54]: Funding and cash-flow requirements
                - listitem [ref=e55]: Launch timeline
                - listitem [ref=e56]: Sales cycle expectations
          - article [ref=e57]:
            - img "Negotiate the Mandate Agreement" [ref=e59]
            - generic [ref=e60]:
              - heading "Negotiate the Mandate Agreement" [level=3] [ref=e61]
              - paragraph [ref=e62]: "We ensure that our agreement with the developer clearly defines:"
              - list [ref=e63]:
                - listitem [ref=e64]: Revenue targets
                - listitem [ref=e65]: Commission structure
                - listitem [ref=e66]: Exclusive clause
                - listitem [ref=e67]: Marketing responsibilities under brand mandates
                - listitem [ref=e68]: Duration
                - listitem [ref=e69]: Reporting frequency
                - listitem [ref=e70]: Exit clause
              - paragraph [ref=e72]:
                - strong [ref=e73]: "Note:"
                - text: Legal clarity ensures smooth execution of the sales mandate.
          - article [ref=e74]:
            - img "Set Performance KPIs (Key Performance Indicators)" [ref=e76]
            - generic [ref=e77]:
              - heading "Set Performance KPIs (Key Performance Indicators)" [level=3] [ref=e78]
              - paragraph [ref=e79]: "We define measurable KPIs such as:"
              - list [ref=e80]:
                - listitem [ref=e81]: Site visit targets
                - listitem [ref=e82]: Monthly booking targets
                - listitem [ref=e83]: Channel partner activation numbers
                - listitem [ref=e84]: Conversion ratios
                - listitem [ref=e85]: Inventory absorption rate
                - listitem [ref=e86]: Revenue milestone tracking
          - article [ref=e87]:
            - img "Coordinate Sales Execution" [ref=e89]
            - generic [ref=e90]:
              - heading "Coordinate Sales Execution" [level=3] [ref=e91]
              - paragraph [ref=e92]: "For maximum impact, we ensure that:"
              - list [ref=e93]:
                - listitem [ref=e94]: Digital marketing supports on-ground sales
                - listitem [ref=e95]: Branding remains unified
                - listitem [ref=e96]: Messaging stays consistent
                - listitem [ref=e97]: CRM tracking remains active
                - listitem [ref=e98]: Campaigns align with pricing
              - paragraph [ref=e100]:
                - strong [ref=e101]: "Note:"
                - text: Fragmented marketing can weaken mandate effectiveness.
      - generic [ref=e103]:
        - generic [ref=e104]:
          - generic [ref=e105]: KEY BENEFITS
          - heading "Benefits of Appointing Avodah & Khen a Sole Selling Partner" [level=3] [ref=e106]
        - generic [ref=e107]:
          - heading "Unified Brand Positioning" [level=3] [ref=e114]
          - heading "Strong Pricing Discipline" [level=3] [ref=e119]
          - heading "Structured Inventory Release" [level=3] [ref=e126]
          - heading "Data-driven Execution" [level=3] [ref=e130]
          - heading "Single-point Accountability" [level=3] [ref=e135]
          - heading "Faster Inventory Absorption" [level=3] [ref=e141]
      - generic [ref=e143]:
        - generic [ref=e144]:
          - generic [ref=e145]: THE RIGHT MOMENT
          - heading "When Should You Appoint Avodah & Khen As Your Sole Selling Partner?" [level=3] [ref=e146]
          - paragraph [ref=e147]: The right sales strategy, introduced at the right stage, can make a meaningful difference to your project.
        - generic [ref=e148]:
          - article [ref=e149]:
            - heading "New Project Launch" [level=3] [ref=e154]
            - paragraph [ref=e155]: Establish a clear sales strategy, pricing structure and market positioning from day one.
            - generic [aria-hidden] [ref=e156]: ↗
          - article [ref=e157]:
            - heading "Pre-launch Planning" [level=3] [ref=e161]
            - paragraph [ref=e162]: Prepare your project for launch with structured planning and coordinated sales activities.
            - generic [aria-hidden] [ref=e163]: ↗
          - article [ref=e164]:
            - heading "Large Township Developments" [level=3] [ref=e169]
            - paragraph [ref=e170]: Coordinate large inventories, channel partners and sales execution through one structured model.
            - generic [aria-hidden] [ref=e171]: ↗
          - article [ref=e172]:
            - heading "Redevelopment Projects" [level=3] [ref=e178]
            - paragraph [ref=e179]: Bring clarity, accountability and a defined sales approach to complex redevelopment projects.
            - generic [aria-hidden] [ref=e180]: ↗
          - article [ref=e181]:
            - heading "Slow-moving Inventory" [level=3] [ref=e184]
            - paragraph [ref=e185]: Identify sales bottlenecks and strengthen pricing, marketing and conversion strategies.
            - generic [aria-hidden] [ref=e186]: ↗
          - article [ref=e187]:
            - heading "Expansion into Mumbai Markets" [level=3] [ref=e192]
            - paragraph [ref=e193]: Build a market-focused sales strategy to support expansion across Mumbai.
            - generic [aria-hidden] [ref=e194]: ↗
      - generic [ref=e196]:
        - generic [ref=e197]:
          - generic [ref=e198]: SALES STRUCTURE
          - heading "Sole Selling Partner vs Multiple Channel Partners" [level=3] [ref=e199]
        - generic [ref=e200]:
          - generic [ref=e201]:
            - heading "Why Should You Appoint a Single Sole Selling Partner?" [level=3] [ref=e202]
            - list [ref=e203]:
              - listitem [ref=e204]: Strong pricing control
              - listitem [ref=e205]: Unified brand messaging
              - listitem [ref=e206]: Clear accountability
              - listitem [ref=e207]: Structured inventory allocation
              - listitem [ref=e208]: Centralized reporting
          - generic [ref=e209]:
            - heading "Why Should You Avoid Appointing Multiple Channel Partners?" [level=3] [ref=e210]
            - list [ref=e211]:
              - listitem [ref=e212]: Pricing inconsistency
              - listitem [ref=e213]: Fragmented brand communication
              - listitem [ref=e214]: Confused accountability
              - listitem [ref=e215]: Inventory conflicts
              - listitem [ref=e216]: Scattered reporting
      - generic [ref=e218]:
        - generic [ref=e219]:
          - generic [ref=e220]: AVODAH & KHEN
          - heading "Sales Expertise. Delivered Strategically." [level=3] [ref=e221]:
            - text: Sales Expertise.
            - generic [ref=e222]: Delivered Strategically.
          - paragraph [ref=e223]: How we support developers through market intelligence, brand mandates and structured sales execution.
        - generic [ref=e224]:
          - article [ref=e225]:
            - generic [ref=e230]:
              - generic [ref=e231]: MARKET INTELLIGENCE
              - heading "Market Expertise Across Mumbai" [level=4] [ref=e232]
              - paragraph [ref=e233]: Local market understanding to help position projects for the right audience.
            - generic [aria-hidden] [ref=e234]: ↗
          - article [ref=e235]:
            - generic [ref=e241]:
              - generic [ref=e242]: BRAND STRATEGY
              - heading "Strategic Brand-Mandate Implementation" [level=4] [ref=e243]
              - paragraph [ref=e244]: Consistent project positioning, communication and coordinated execution.
            - generic [aria-hidden] [ref=e245]: ↗
          - article [ref=e246]:
            - generic [ref=e251]:
              - generic [ref=e252]: SALES MANAGEMENT
              - heading "End-to-End Exclusive Sales Mandates" [level=4] [ref=e253]
              - paragraph [ref=e254]: A structured approach to managing the project sales lifecycle.
            - generic [aria-hidden] [ref=e255]: ↗
          - article [ref=e256]:
            - generic [ref=e263]:
              - generic [ref=e264]: CHANNEL PARTNERS
              - heading "Broker Ecosystem Management" [level=4] [ref=e265]
              - paragraph [ref=e266]: Organised broker coordination to support reach and sales conversion.
            - generic [aria-hidden] [ref=e267]: ↗
          - article [ref=e268]:
            - generic [ref=e273]:
              - generic [ref=e274]: ON-GROUND EXECUTION
              - heading "On-Site Sales Deployment" [level=4] [ref=e275]
              - paragraph [ref=e276]: Dedicated project-level sales support and coordinated execution.
            - generic [aria-hidden] [ref=e277]: ↗
          - article [ref=e278]:
            - generic [ref=e282]:
              - generic [ref=e283]: TECHNOLOGY & INSIGHTS
              - heading "CRM-Driven Reporting" [level=4] [ref=e284]
              - paragraph [ref=e285]: Structured lead tracking, transparent reporting and sales visibility.
            - generic [aria-hidden] [ref=e286]: ↗
        - generic [ref=e287]:
          - generic [ref=e288]: MARKET KNOWLEDGE
          - generic [ref=e289]: →
          - generic [ref=e290]: SALES EXECUTION
      - generic [ref=e292]:
        - generic [ref=e293]:
          - generic [ref=e294]:
            - generic [ref=e295]: OUR STRENGTH
            - heading "We Pride Ourselves With..." [level=3] [ref=e296]
          - paragraph [ref=e297]: Our approach is built around experience, accountability, structured execution and a deep understanding of the real estate sales ecosystem.
        - generic [ref=e298]:
          - article [ref=e299]:
            - generic [ref=e300]: "01"
            - heading "Proven Sales Expertise" [level=4] [ref=e304]
            - paragraph [ref=e305]: Exclusive sales mandate and brand-mandate experience built around structured execution.
            - generic [aria-hidden] [ref=e306]: ↗
          - article [ref=e307]:
            - generic [ref=e308]: "02"
            - heading "Mumbai Market Knowledge" [level=4] [ref=e313]
            - paragraph [ref=e314]: Local market understanding to help developers position their projects more effectively.
            - generic [aria-hidden] [ref=e315]: ↗
          - article [ref=e316]:
            - generic [ref=e317]: "03"
            - heading "Dedicated Sales Teams" [level=4] [ref=e324]
            - paragraph [ref=e325]: On-ground sales deployment focused on coordination, buyer engagement and execution.
            - generic [aria-hidden] [ref=e326]: ↗
          - article [ref=e327]:
            - generic [ref=e328]: "04"
            - heading "CRM & Reporting Systems" [level=4] [ref=e332]
            - paragraph [ref=e333]: Organised lead tracking and reporting for improved visibility across the sales process.
            - generic [aria-hidden] [ref=e334]: ↗
          - article [ref=e335]:
            - generic [ref=e336]: "05"
            - heading "Strong Broker Network" [level=4] [ref=e341]
            - paragraph [ref=e342]: Broker relationships and channel coordination to support project reach and sales opportunities.
            - generic [aria-hidden] [ref=e343]: ↗
          - article [ref=e344]:
            - generic [ref=e345]: "06"
            - heading "Developer Relationships" [level=4] [ref=e350]
            - paragraph [ref=e351]: A relationship-led approach to working with developers and supporting their sales objectives.
            - generic [aria-hidden] [ref=e352]: ↗
        - generic [ref=e353]:
          - generic [ref=e354]: EXPERIENCE
          - generic [ref=e355]: →
          - generic [ref=e356]: EXECUTION
          - generic [ref=e357]: →
          - generic [ref=e358]: RESULTS
      - generic [ref=e360]:
        - generic [ref=e362]:
          - generic [ref=e363]: FINAL TAKEAWAY
          - heading "Not Just Sales. A Structured Growth System." [level=3] [ref=e364]
          - paragraph [ref=e365]: Appointing a Sole Selling Partner is not outsourcing sales. It is building a structured, accountable and revenue-driven sales system backed by professional sales mandates and brand mandates.
          - generic [ref=e366]: IF YOU WANT TO
          - generic [ref=e367]:
            - generic [ref=e368]: Launch stronger
            - generic [ref=e373]: Sell faster
            - generic [ref=e377]: Maintain pricing discipline
            - generic [ref=e383]: Avoid broker conflicts
        - generic [ref=e387]:
          - generic [ref=e388]:
            - generic [ref=e389]: LET'S BUILD YOUR SALES STRATEGY
            - heading "Ready to appoint us as your Sole Selling Partner?" [level=3] [ref=e390]
            - paragraph [ref=e391]: Partner with AVODAH & KHEN to bring structure, accountability and strategic direction to your project sales.
            - link "Contact Us Now" [ref=e392] [cursor=pointer]:
              - /url: /contact
              - text: Contact Us Now
              - generic [aria-hidden] [ref=e393]: ↗
          - generic [ref=e394]:
            - paragraph [ref=e399]: Planning a new project launch?
            - paragraph [ref=e404]: Looking for structured sales execution in Mumbai?
            - generic [ref=e405]:
              - text: Connect with
              - strong [ref=e406]: AVODAH & KHEN
              - text: to discuss your project and explore an exclusive sales mandate and brand-mandate approach.
        - generic [ref=e407]:
          - generic [ref=e408]: YOUR PROJECT
          - generic [ref=e409]: →
          - generic [ref=e410]: OUR COMMITMENT
          - generic [ref=e411]: →
          - generic [ref=e412]: LONG-TERM VALUE
  - contentinfo [ref=e413]:
    - generic [ref=e414]:
      - link [ref=e416] [cursor=pointer]:
        - /url: "#/"
        - img "AVODAH & KHEN" [ref=e417]
      - generic [ref=e418]:
        - heading "Company" [level=4] [ref=e419]
        - link "About us" [ref=e420] [cursor=pointer]:
          - /url: "#/company"
        - link "Research" [ref=e421] [cursor=pointer]:
          - /url: "#/research"
        - link "Careers" [ref=e422] [cursor=pointer]:
          - /url: "#/careers"
      - generic [ref=e423]:
        - heading "Studios" [level=4] [ref=e424]
        - paragraph [ref=e425]: Mumbai
    - paragraph [ref=e426]: © 2026 AVODAH GROUP. All rights reserved.
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