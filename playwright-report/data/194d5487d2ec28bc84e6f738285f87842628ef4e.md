# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshots.spec.js >> Visual regression - Careers
- Location: tests\screenshots.spec.js:17:3

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  23680 pixels (ratio 0.09 of all image pixels) are different.

  Snapshot: careers-viewport.png

Call log:
  - Expect "toHaveScreenshot(careers-viewport.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 23680 pixels (ratio 0.09 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 23680 pixels (ratio 0.09 of all image pixels) are different.

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
        - paragraph [ref=e12]: Careers
        - heading "Build Your Future With Us" [level=1] [ref=e13]
        - paragraph [ref=e14]: Join AVODAH & KHEN and be part of a team shaping the future of real estate, technology and finance.
      - generic [ref=e15]:
        - generic [ref=e16]:
          - generic [ref=e17]:
            - paragraph [ref=e18]: Current Opportunities
            - heading "Find Your Next Opportunity" [level=2] [ref=e19]
            - paragraph [ref=e20]: Explore current openings and discover where you can build your career with AVODAH & KHEN.
          - img "Avodah & Khen team" [ref=e22]
        - generic [ref=e23]:
          - combobox "Select team" [ref=e24]:
            - option "All Teams" [selected]
            - option "Technology"
            - option "Product"
            - option "Sales"
            - option "Marketing"
            - option "Research"
            - option "Analytics"
          - textbox "Search jobs by keyword" [ref=e25]:
            - /placeholder: Keywords
          - combobox "Select location" [ref=e26]:
            - option "Any Location" [selected]
            - option "India"
          - button "Search Jobs" [ref=e27] [cursor=pointer]
        - generic [ref=e28]:
          - complementary [ref=e29]:
            - paragraph [ref=e30]: CURRENT OPENINGS
            - button "All Openings 18" [ref=e31] [cursor=pointer]:
              - generic [ref=e32]: All Openings
              - generic [ref=e33]: "18"
            - button "Technology 4" [ref=e34] [cursor=pointer]:
              - generic [ref=e35]: Technology
              - generic [ref=e36]: "4"
            - button "Sales 8" [ref=e37] [cursor=pointer]:
              - generic [ref=e38]: Sales
              - generic [ref=e39]: "8"
            - button "Product 1" [ref=e40] [cursor=pointer]:
              - generic [ref=e41]: Product
              - generic [ref=e42]: "1"
            - button "Marketing 3" [ref=e43] [cursor=pointer]:
              - generic [ref=e44]: Marketing
              - generic [ref=e45]: "3"
          - generic [ref=e46]:
            - generic [ref=e47]:
              - paragraph [ref=e48]: Opportunities
              - heading "All Openings" [level=3] [ref=e49]
              - paragraph [ref=e50]: 18 positions available
            - article [ref=e51]:
              - generic [ref=e52]:
                - heading "Software Engineer" [level=4] [ref=e53]
                - generic [ref=e54]:
                  - generic [ref=e55]: India
                  - generic [ref=e56]: •
                  - generic [ref=e57]: Technology
                - generic [ref=e58]: Technology
              - generic [ref=e59]:
                - link "Job Description" [ref=e60] [cursor=pointer]:
                  - /url: "#/careers/software-engineer"
                - button "Apply Now" [ref=e61] [cursor=pointer]
            - article [ref=e62]:
              - generic [ref=e63]:
                - heading "Database Engineer" [level=4] [ref=e64]
                - generic [ref=e65]:
                  - generic [ref=e66]: India
                  - generic [ref=e67]: •
                  - generic [ref=e68]: Technology
                - generic [ref=e69]: Technology
              - generic [ref=e70]:
                - link "Job Description" [ref=e71] [cursor=pointer]:
                  - /url: "#/careers/database-engineer"
                - button "Apply Now" [ref=e72] [cursor=pointer]
            - article [ref=e73]:
              - generic [ref=e74]:
                - heading "Security Architect" [level=4] [ref=e75]
                - generic [ref=e76]:
                  - generic [ref=e77]: India
                  - generic [ref=e78]: •
                  - generic [ref=e79]: Technology
                - generic [ref=e80]: Technology
              - generic [ref=e81]:
                - link "Job Description" [ref=e82] [cursor=pointer]:
                  - /url: "#/careers/security-architect"
                - button "Apply Now" [ref=e83] [cursor=pointer]
            - article [ref=e84]:
              - generic [ref=e85]:
                - heading "Product Manager" [level=4] [ref=e86]
                - generic [ref=e87]:
                  - generic [ref=e88]: India
                  - generic [ref=e89]: •
                  - generic [ref=e90]: Product
                - generic [ref=e91]: Product
              - generic [ref=e92]:
                - link "Job Description" [ref=e93] [cursor=pointer]:
                  - /url: "#/careers/product-manager"
                - button "Apply Now" [ref=e94] [cursor=pointer]
            - article [ref=e95]:
              - generic [ref=e96]:
                - heading "Research Analyst" [level=4] [ref=e97]
                - generic [ref=e98]:
                  - generic [ref=e99]: India
                  - generic [ref=e100]: •
                  - generic [ref=e101]: Research
                - generic [ref=e102]: Research
              - generic [ref=e103]:
                - link "Job Description" [ref=e104] [cursor=pointer]:
                  - /url: "#/careers/research-analyst"
                - button "Apply Now" [ref=e105] [cursor=pointer]
            - article [ref=e106]:
              - generic [ref=e107]:
                - heading "Salesforce Developer" [level=4] [ref=e108]
                - generic [ref=e109]:
                  - generic [ref=e110]: India
                  - generic [ref=e111]: •
                  - generic [ref=e112]: Technology
                - generic [ref=e113]: Technology
              - generic [ref=e114]:
                - link "Job Description" [ref=e115] [cursor=pointer]:
                  - /url: "#/careers/salesforce-developer"
                - button "Apply Now" [ref=e116] [cursor=pointer]
            - article [ref=e117]:
              - generic [ref=e118]:
                - heading "Digital Marketing Executive" [level=4] [ref=e119]
                - generic [ref=e120]:
                  - generic [ref=e121]: India
                  - generic [ref=e122]: •
                  - generic [ref=e123]: Marketing
                - generic [ref=e124]: Marketing
              - generic [ref=e125]:
                - link "Job Description" [ref=e126] [cursor=pointer]:
                  - /url: "#/careers/digital-marketing-executive"
                - button "Apply Now" [ref=e127] [cursor=pointer]
            - article [ref=e128]:
              - generic [ref=e129]:
                - heading "MIS Analyst" [level=4] [ref=e130]
                - generic [ref=e131]:
                  - generic [ref=e132]: India
                  - generic [ref=e133]: •
                  - generic [ref=e134]: Analytics
                - generic [ref=e135]: Analytics
              - generic [ref=e136]:
                - link "Job Description" [ref=e137] [cursor=pointer]:
                  - /url: "#/careers/mis-analyst"
                - button "Apply Now" [ref=e138] [cursor=pointer]
            - article [ref=e139]:
              - generic [ref=e140]:
                - heading "Zonal Business Head" [level=4] [ref=e141]
                - generic [ref=e142]:
                  - generic [ref=e143]: India
                  - generic [ref=e144]: •
                  - generic [ref=e145]: Sales
                - generic [ref=e146]: Sales
              - generic [ref=e147]:
                - link "Job Description" [ref=e148] [cursor=pointer]:
                  - /url: "#/careers/zonal-business-head"
                - button "Apply Now" [ref=e149] [cursor=pointer]
            - article [ref=e150]:
              - generic [ref=e151]:
                - heading "Zonal Manager" [level=4] [ref=e152]
                - generic [ref=e153]:
                  - generic [ref=e154]: India
                  - generic [ref=e155]: •
                  - generic [ref=e156]: Sales
                - generic [ref=e157]: Sales
              - generic [ref=e158]:
                - link "Job Description" [ref=e159] [cursor=pointer]:
                  - /url: "#/careers/zonal-manager"
                - button "Apply Now" [ref=e160] [cursor=pointer]
            - article [ref=e161]:
              - generic [ref=e162]:
                - heading "Regional Sales Manager" [level=4] [ref=e163]
                - generic [ref=e164]:
                  - generic [ref=e165]: India
                  - generic [ref=e166]: •
                  - generic [ref=e167]: Sales
                - generic [ref=e168]: Sales
              - generic [ref=e169]:
                - link "Job Description" [ref=e170] [cursor=pointer]:
                  - /url: "#/careers/regional-sales-manager"
                - button "Apply Now" [ref=e171] [cursor=pointer]
            - article [ref=e172]:
              - generic [ref=e173]:
                - heading "Account Manager" [level=4] [ref=e174]
                - generic [ref=e175]:
                  - generic [ref=e176]: India
                  - generic [ref=e177]: •
                  - generic [ref=e178]: Sales
                - generic [ref=e179]: Sales
              - generic [ref=e180]:
                - link "Job Description" [ref=e181] [cursor=pointer]:
                  - /url: "#/careers/account-manager"
                - button "Apply Now" [ref=e182] [cursor=pointer]
            - article [ref=e183]:
              - generic [ref=e184]:
                - heading "Sales Executive / Business Development Executive" [level=4] [ref=e185]
                - generic [ref=e186]:
                  - generic [ref=e187]: India
                  - generic [ref=e188]: •
                  - generic [ref=e189]: Sales
                - generic [ref=e190]: Sales
              - generic [ref=e191]:
                - link "Job Description" [ref=e192] [cursor=pointer]:
                  - /url: "#/careers/sales-executive-business-development-executive"
                - button "Apply Now" [ref=e193] [cursor=pointer]
            - article [ref=e194]:
              - generic [ref=e195]:
                - heading "Sales Representative" [level=4] [ref=e196]
                - generic [ref=e197]:
                  - generic [ref=e198]: India
                  - generic [ref=e199]: •
                  - generic [ref=e200]: Sales
                - generic [ref=e201]: Sales
              - generic [ref=e202]:
                - link "Job Description" [ref=e203] [cursor=pointer]:
                  - /url: "#/careers/sales-representative"
                - button "Apply Now" [ref=e204] [cursor=pointer]
            - article [ref=e205]:
              - generic [ref=e206]:
                - heading "Tele-caller" [level=4] [ref=e207]
                - generic [ref=e208]:
                  - generic [ref=e209]: India
                  - generic [ref=e210]: •
                  - generic [ref=e211]: Sales
                - generic [ref=e212]: Sales
              - generic [ref=e213]:
                - link "Job Description" [ref=e214] [cursor=pointer]:
                  - /url: "#/careers/tele-caller"
                - button "Apply Now" [ref=e215] [cursor=pointer]
            - article [ref=e216]:
              - generic [ref=e217]:
                - heading "Telesales Executive" [level=4] [ref=e218]
                - generic [ref=e219]:
                  - generic [ref=e220]: India
                  - generic [ref=e221]: •
                  - generic [ref=e222]: Sales
                - generic [ref=e223]: Sales
              - generic [ref=e224]:
                - link "Job Description" [ref=e225] [cursor=pointer]:
                  - /url: "#/careers/telesales-executive"
                - button "Apply Now" [ref=e226] [cursor=pointer]
            - article [ref=e227]:
              - generic [ref=e228]:
                - heading "Anchor" [level=4] [ref=e229]
                - generic [ref=e230]:
                  - generic [ref=e231]: India
                  - generic [ref=e232]: •
                  - generic [ref=e233]: Marketing
                - generic [ref=e234]: Marketing
              - generic [ref=e235]:
                - link "Job Description" [ref=e236] [cursor=pointer]:
                  - /url: "#/careers/anchor"
                - button "Apply Now" [ref=e237] [cursor=pointer]
            - article [ref=e238]:
              - generic [ref=e239]:
                - heading "Brand Manager" [level=4] [ref=e240]
                - generic [ref=e241]:
                  - generic [ref=e242]: India
                  - generic [ref=e243]: •
                  - generic [ref=e244]: Marketing
                - generic [ref=e245]: Marketing
              - generic [ref=e246]:
                - link "Job Description" [ref=e247] [cursor=pointer]:
                  - /url: "#/careers/brand-manager"
                - button "Apply Now" [ref=e248] [cursor=pointer]
      - generic [ref=e249]:
        - generic [ref=e250]:
          - paragraph [ref=e251]: LIFE AT AVODAH & KHEN
          - heading [level=2] [ref=e252]:
            - text: More than work.
            - emphasis [ref=e253]: A shared journey.
          - paragraph [ref=e254]: Celebrating the people, experiences and milestones that bring our team together.
        - generic [ref=e255]:
          - button "All Memories" [ref=e256] [cursor=pointer]
          - button "Celebrations" [ref=e257] [cursor=pointer]
          - button "Team Outings" [ref=e258] [cursor=pointer]
          - button "Achievements" [ref=e259] [cursor=pointer]
        - generic [ref=e260]:
          - button "View broker-excellence-award.jpg.jpeg" [ref=e261] [cursor=pointer]:
            - img "broker excellence award.jpg" [ref=e262]
          - button "View broker-rewards-ceremony.jpg.jpeg" [ref=e263] [cursor=pointer]:
            - img "broker rewards ceremony.jpg" [ref=e264]
          - button "View top-performer-broker-1.jpg.jpeg" [ref=e265] [cursor=pointer]:
            - img "top performer broker 1.jpg" [ref=e266]
          - button "View top-performer-broker-2.jpg.jpeg" [ref=e267] [cursor=pointer]:
            - img "top performer broker 2.jpg" [ref=e268]
          - button "View diwali-2025-1.jpg.jpeg" [ref=e269] [cursor=pointer]:
            - img "diwali 2025 1.jpg" [ref=e270]
          - button "View diwali-team-2.jpg.jpeg" [ref=e271] [cursor=pointer]:
            - img "diwali team 2.jpg" [ref=e272]
          - button "View diwali-team-celebration-2.jpg.jpeg" [ref=e273] [cursor=pointer]:
            - img "diwali team celebration 2.jpg" [ref=e274]
          - button "View office-outing-2.jpg.jpeg" [ref=e275] [cursor=pointer]:
            - img "office outing 2.jpg" [ref=e276]
          - button "View team-picnic-1.jpg.jpeg" [ref=e277] [cursor=pointer]:
            - img "team picnic 1.jpg" [ref=e278]
      - generic [ref=e279]:
        - generic [ref=e280]:
          - paragraph [ref=e281]: Join Our Team
          - heading "We would love to hear from you." [level=2] [ref=e282]
          - paragraph [ref=e283]: Tell us a little about yourself and the opportunity you are interested in.
        - generic [ref=e284]:
          - generic [ref=e285]:
            - generic [ref=e286]:
              - generic [ref=e287]: First Name
              - textbox "First Name" [ref=e288]:
                - /placeholder: Enter your first name
            - generic [ref=e289]:
              - generic [ref=e290]: Last Name
              - textbox "Last Name" [ref=e291]:
                - /placeholder: Enter your last name
            - generic [ref=e292]:
              - generic [ref=e293]: Contact Number
              - textbox "Contact Number" [ref=e294]:
                - /placeholder: +91 98765 43210
            - generic [ref=e295]:
              - generic [ref=e296]: Email Address
              - textbox "Email Address" [ref=e297]:
                - /placeholder: you@example.com
            - generic [ref=e298]:
              - generic [ref=e299]: Department
              - combobox "Department" [ref=e300] [cursor=pointer]:
                - option "Select Department" [selected]
                - option "Sales"
                - option "Marketing"
                - option "IT"
            - generic [ref=e301]:
              - generic [ref=e302]: Job Applied For
              - textbox "Job Applied For" [ref=e303]:
                - /placeholder: e.g. Sales Executive
            - generic [ref=e304]:
              - generic [ref=e305]: Message
              - textbox "Message" [ref=e306]:
                - /placeholder: Tell us about yourself, your experience and why you would like to join us...
          - generic [ref=e307]:
            - paragraph [ref=e308]: We respect your privacy and will only use your information for recruitment purposes.
            - button "Submit Application" [ref=e309] [cursor=pointer]:
              - generic [aria-hidden] [ref=e311]: →
  - contentinfo [ref=e312]:
    - generic [ref=e313]:
      - link [ref=e315] [cursor=pointer]:
        - /url: "#/"
        - img "AVODAH & KHEN" [ref=e316]
      - generic [ref=e317]:
        - heading "Company" [level=4] [ref=e318]
        - link "About us" [ref=e319] [cursor=pointer]:
          - /url: "#/company"
        - link "Research" [ref=e320] [cursor=pointer]:
          - /url: "#/research"
        - link "Careers" [ref=e321] [cursor=pointer]:
          - /url: "#/careers"
      - generic [ref=e322]:
        - heading "Studios" [level=4] [ref=e323]
        - paragraph [ref=e324]: Mumbai
    - paragraph [ref=e325]: © 2026 AVODAH GROUP. All rights reserved.
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