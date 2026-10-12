# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional-navigation.spec.js >> Functional navigation >> Media navigation works
- Location: tests\functional-navigation.spec.js:56:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Media', exact: true }).first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('link', { name: 'Media', exact: true }).first() with timeout 5000ms
  - waiting for getByRole('link', { name: 'Media', exact: true }).first()

```

```yaml
- banner:
  - link "AVODAH & KHEN":
    - /url: "#/"
    - img "AVODAH & KHEN"
  - button "Close menu" [expanded]: ✕
  - navigation:
    - link "Services":
      - /url: "#/services"
    - link "Company":
      - /url: "#/company"
    - link "Research":
      - /url: "#/research"
    - link "Contact":
      - /url: "#/contact"
- main:
  - text: REAL ESTATE. REIMAGINED WITH PROPTECH
  - heading "Technology-driven solutions. Transforming the way real estate moves." [level=1]
  - paragraph: We combine real estate expertise with technology to make buying, selling and investing in property simpler, smarter and more transparent.
  - link "Talk to our team":
    - /url: "#/contact"
  - link "Explore PropTech":
    - /url: "#/proptech"
  - region "One ecosystem, connected intelligence.":
    - text: OUR CONNECTED ECOSYSTEM
    - heading "One ecosystem, connected intelligence." [level=2]:
      - text: One ecosystem,
      - emphasis: connected intelligence.
    - paragraph: From property discovery to conversion, our connected capabilities bring intelligence, relationships and execution together.
    - link "EXPLORE OUR ECOSYSTEM":
      - /url: "#/proptech"
    - text: CORE CAPABILITIES
    - article:
      - heading "PROPERTY PORTAL" [level=3]
      - text: Discover
      - paragraph: Discover properties and explore real estate opportunities.
    - article:
      - heading "AI + DATA" [level=3]
      - text: Understand
      - paragraph: Turn property data into meaningful insights and informed decisions.
    - article:
      - heading "MANDATES" [level=3]
      - text: Represent
      - paragraph: Structure and represent real estate opportunities.
    - article:
      - heading "CRM" [level=3]
      - text: Manage
      - paragraph: Organize leads, relationships and customer journeys.
    - article:
      - heading "SALES" [level=3]
      - text: Convert
      - paragraph: Move qualified opportunities through the sales pipeline.
    - article:
      - heading "AUTOMATION" [level=3]
      - text: Optimize
      - paragraph: Streamline repetitive tasks and connected workflows.
    - link "DISCOVER OUR CAPABILITIES":
      - /url: "#/services"
  - text: HOW WE WORK
  - heading "A repeatable model. Measurable outcomes." [level=2]:
    - text: A repeatable model.
    - emphasis: Measurable outcomes.
  - paragraph: From property acquisition to data-led optimization.
  - article:
    - text: ACQUIRE
    - heading "Acquire" [level=3]
    - paragraph: Mandate / inventory
  - article:
    - text: POSITION
    - heading "Position" [level=3]
    - paragraph: Strategy + content
  - article:
    - text: GENERATE
    - heading "Generate" [level=3]
    - paragraph: Marketing + demand
  - article:
    - text: MANAGE
    - heading "Manage" [level=3]
    - paragraph: CRM + channels
  - article:
    - text: CONVERT
    - heading "Convert" [level=3]
    - paragraph: Visits + sales
  - article:
    - text: LEARN
    - heading "Learn" [level=3]
    - paragraph: Data + optimization
  - text: A CONNECTED JOURNEY. LASTING VALUE.
  - img "Modern architecture representing real estate innovation"
  - text: WHY AVODAH
  - heading "Technology grounded in real estate execution." [level=2]:
    - text: Technology grounded in
    - emphasis: real estate execution.
  - paragraph: Built to bridge technology and real estate execution.
  - text: "01"
  - heading "Real-estate first" [level=3]
  - paragraph: Products and workflows designed around property businesses.
  - text: "02"
  - heading "Technology-led" [level=3]
  - paragraph: Modern digital experiences, automation and AI.
  - text: "03"
  - heading "Execution focused" [level=3]
  - paragraph: Technology paired with hands-on sales and mandate capabilities.
  - text: "04"
  - heading "Data connected" [level=3]
  - paragraph: Performance visibility across the customer and sales journey.
  - text: LET’S CONNECT
  - heading "Let’s build the future of real estate." [level=2]:
    - text: Let’s build the future
    - emphasis: of real estate.
  - paragraph: Partner with us for property mandates, technology, lead generation, CRM, AI and sales execution.
  - link "Contact AVODAH":
    - /url: "#/contact"
- contentinfo:
  - link "AVODAH & KHEN":
    - /url: "#/"
    - img "AVODAH & KHEN"
  - heading "Company" [level=4]
  - link "About us":
    - /url: "#/company"
  - link "Research":
    - /url: "#/research"
  - link "Careers":
    - /url: "#/careers"
  - heading "Studios" [level=4]
  - paragraph: Mumbai
  - paragraph: © 2026 AVODAH GROUP. All rights reserved.
```

# Test source

```ts
  1   | 
  2   | import { test, expect } from "@playwright/test";
  3   | 
  4   | test.describe("Functional navigation", () => {
  5   |   test.beforeEach(async ({ page }) => {
  6   |     await page.goto("/");
  7   |     await expect(page.locator(".site")).toBeVisible();
  8   |   });
  9   | 
  10  |   async function openMobileMenuIfNeeded(page) {
  11  |     const menuButton = page.locator(
  12  |       'button[aria-label*="menu" i], button[aria-controls*="menu" i], .menu-toggle, .hamburger, .nav-toggle'
  13  |     ).first();
  14  | 
  15  |     if (await menuButton.isVisible().catch(() => false)) {
  16  |       const expanded = await menuButton.getAttribute("aria-expanded");
  17  | 
  18  |       if (expanded !== "true") {
  19  |         await menuButton.click();
  20  |       }
  21  |     }
  22  |   }
  23  | 
  24  |   async function clickNavigationLink(page, name) {
  25  |     await openMobileMenuIfNeeded(page);
  26  | 
  27  |     const navLink = page.getByRole("navigation").getByRole("link", {
  28  |       name,
  29  |       exact: true,
  30  |     });
  31  | 
  32  |     if (await navLink.count()) {
  33  |       await navLink.first().click();
  34  |       return;
  35  |     }
  36  | 
  37  |     const link = page.getByRole("link", {
  38  |       name,
  39  |       exact: true,
  40  |     });
  41  | 
> 42  |     await expect(link.first()).toBeVisible();
      |                                ^ Error: expect(locator).toBeVisible() failed
  43  |     await link.first().click();
  44  |   }
  45  | 
  46  |   test("Services navigation works", async ({ page }) => {
  47  |     await clickNavigationLink(page, "Services");
  48  |     await expect(page).toHaveURL(/#\/services\/?$/);
  49  |   });
  50  | 
  51  |   test("Research navigation works", async ({ page }) => {
  52  |     await clickNavigationLink(page, "Research");
  53  |     await expect(page).toHaveURL(/#\/research\/?$/);
  54  |   });
  55  | 
  56  |   test("Media navigation works", async ({ page }) => {
  57  |     await clickNavigationLink(page, "Media");
  58  |     await expect(page).toHaveURL(/#\/media\/?$/);
  59  |   });
  60  | 
  61  |   test("Company navigation works", async ({ page }) => {
  62  |     await clickNavigationLink(page, "Company");
  63  |     await expect(page).toHaveURL(/#\/company\/?$/);
  64  |   });
  65  | 
  66  |   test("Contact navigation works", async ({ page }) => {
  67  |     await clickNavigationLink(page, "Contact");
  68  |     await expect(page).toHaveURL(/#\/contact\/?$/);
  69  |   });
  70  | 
  71  |   test("Mandate navigation works", async ({ page }) => {
  72  |     await clickNavigationLink(page, "Services");
  73  |     await clickNavigationLink(page, "Mandate");
  74  |     await expect(page).toHaveURL(/#\/mandate\/?$/);
  75  |   });
  76  | 
  77  |   test("Proptech navigation works", async ({ page }) => {
  78  |     await clickNavigationLink(page, "Services");
  79  |     await clickNavigationLink(page, "Proptech");
  80  |     await expect(page).toHaveURL(/#\/proptech\/?$/);
  81  |   });
  82  | 
  83  |   test("Fintech navigation works", async ({ page }) => {
  84  |     await clickNavigationLink(page, "Services");
  85  |     await clickNavigationLink(page, "Fintech");
  86  |     await expect(page).toHaveURL(/#\/fintech\/?$/);
  87  |   });
  88  | 
  89  |   test("Back and forward navigation works", async ({ page }) => {
  90  |     await clickNavigationLink(page, "Research");
  91  |     await expect(page).toHaveURL(/#\/research\/?$/);
  92  | 
  93  |     await page.goBack();
  94  |     await expect(page).toHaveURL(/#\/$/);
  95  | 
  96  |     await page.goForward();
  97  |     await expect(page).toHaveURL(/#\/research\/?$/);
  98  |   });
  99  | });
  100 | 
```