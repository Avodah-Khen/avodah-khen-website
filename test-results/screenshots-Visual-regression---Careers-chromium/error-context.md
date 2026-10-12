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

  47641 pixels (ratio 0.06 of all image pixels) are different.

  Snapshot: careers-viewport.png

Call log:
  - Expect "toHaveScreenshot(careers-viewport.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 47641 pixels (ratio 0.06 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 47641 pixels (ratio 0.06 of all image pixels) are different.

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
        - paragraph [ref=e19]: Careers
        - heading "Build Your Future With Us" [level=1] [ref=e20]
        - paragraph [ref=e21]: Join AVODAH & KHEN and be part of a team shaping the future of real estate, technology and finance.
      - generic [ref=e22]:
        - generic [ref=e23]:
          - generic [ref=e24]:
            - paragraph [ref=e25]: Current Opportunities
            - heading "Find Your Next Opportunity" [level=2] [ref=e26]
            - paragraph [ref=e27]: Explore current openings and discover where you can build your career with AVODAH & KHEN.
          - img "Avodah & Khen team" [ref=e29]
        - generic [ref=e30]:
          - combobox "Select team" [ref=e31]:
            - option "All Teams" [selected]
            - option "Technology"
            - option "Product"
            - option "Sales"
            - option "Marketing"
            - option "Research"
            - option "Analytics"
          - textbox "Search jobs by keyword" [ref=e32]:
            - /placeholder: Keywords
          - combobox "Select location" [ref=e33]:
            - option "Any Location" [selected]
            - option "India"
          - button "Search Jobs" [ref=e34] [cursor=pointer]
        - generic [ref=e35]:
          - complementary [ref=e36]:
            - paragraph [ref=e37]: CURRENT OPENINGS
            - button "All Openings 18" [ref=e38] [cursor=pointer]:
              - generic [ref=e39]: All Openings
              - generic [ref=e40]: "18"
            - button "Technology 4" [ref=e41] [cursor=pointer]:
              - generic [ref=e42]: Technology
              - generic [ref=e43]: "4"
            - button "Sales 8" [ref=e44] [cursor=pointer]:
              - generic [ref=e45]: Sales
              - generic [ref=e46]: "8"
            - button "Product 1" [ref=e47] [cursor=pointer]:
              - generic [ref=e48]: Product
              - generic [ref=e49]: "1"
            - button "Marketing 3" [ref=e50] [cursor=pointer]:
              - generic [ref=e51]: Marketing
              - generic [ref=e52]: "3"
          - generic [ref=e53]:
            - generic [ref=e54]:
              - paragraph [ref=e55]: Opportunities
              - heading "All Openings" [level=3] [ref=e56]
              - paragraph [ref=e57]: 18 positions available
            - article [ref=e58]:
              - generic [ref=e59]:
                - heading "Software Engineer" [level=4] [ref=e60]
                - generic [ref=e61]:
                  - generic [ref=e62]: India
                  - generic [ref=e63]: •
                  - generic [ref=e64]: Technology
                - generic [ref=e65]: Technology
              - generic [ref=e66]:
                - link "Job Description" [ref=e67] [cursor=pointer]:
                  - /url: "#/careers/software-engineer"
                - button "Apply Now" [ref=e68] [cursor=pointer]
            - article [ref=e69]:
              - generic [ref=e70]:
                - heading "Database Engineer" [level=4] [ref=e71]
                - generic [ref=e72]:
                  - generic [ref=e73]: India
                  - generic [ref=e74]: •
                  - generic [ref=e75]: Technology
                - generic [ref=e76]: Technology
              - generic [ref=e77]:
                - link "Job Description" [ref=e78] [cursor=pointer]:
                  - /url: "#/careers/database-engineer"
                - button "Apply Now" [ref=e79] [cursor=pointer]
            - article [ref=e80]:
              - generic [ref=e81]:
                - heading "Security Architect" [level=4] [ref=e82]
                - generic [ref=e83]:
                  - generic [ref=e84]: India
                  - generic [ref=e85]: •
                  - generic [ref=e86]: Technology
                - generic [ref=e87]: Technology
              - generic [ref=e88]:
                - link "Job Description" [ref=e89] [cursor=pointer]:
                  - /url: "#/careers/security-architect"
                - button "Apply Now" [ref=e90] [cursor=pointer]
            - article [ref=e91]:
              - generic [ref=e92]:
                - heading "Product Manager" [level=4] [ref=e93]
                - generic [ref=e94]:
                  - generic [ref=e95]: India
                  - generic [ref=e96]: •
                  - generic [ref=e97]: Product
                - generic [ref=e98]: Product
              - generic [ref=e99]:
                - link "Job Description" [ref=e100] [cursor=pointer]:
                  - /url: "#/careers/product-manager"
                - button "Apply Now" [ref=e101] [cursor=pointer]
            - article [ref=e102]:
              - generic [ref=e103]:
                - heading "Research Analyst" [level=4] [ref=e104]
                - generic [ref=e105]:
                  - generic [ref=e106]: India
                  - generic [ref=e107]: •
                  - generic [ref=e108]: Research
                - generic [ref=e109]: Research
              - generic [ref=e110]:
                - link "Job Description" [ref=e111] [cursor=pointer]:
                  - /url: "#/careers/research-analyst"
                - button "Apply Now" [ref=e112] [cursor=pointer]
            - article [ref=e113]:
              - generic [ref=e114]:
                - heading "Salesforce Developer" [level=4] [ref=e115]
                - generic [ref=e116]:
                  - generic [ref=e117]: India
                  - generic [ref=e118]: •
                  - generic [ref=e119]: Technology
                - generic [ref=e120]: Technology
              - generic [ref=e121]:
                - link "Job Description" [ref=e122] [cursor=pointer]:
                  - /url: "#/careers/salesforce-developer"
                - button "Apply Now" [ref=e123] [cursor=pointer]
            - article [ref=e124]:
              - generic [ref=e125]:
                - heading "Digital Marketing Executive" [level=4] [ref=e126]
                - generic [ref=e127]:
                  - generic [ref=e128]: India
                  - generic [ref=e129]: •
                  - generic [ref=e130]: Marketing
                - generic [ref=e131]: Marketing
              - generic [ref=e132]:
                - link "Job Description" [ref=e133] [cursor=pointer]:
                  - /url: "#/careers/digital-marketing-executive"
                - button "Apply Now" [ref=e134] [cursor=pointer]
            - article [ref=e135]:
              - generic [ref=e136]:
                - heading "MIS Analyst" [level=4] [ref=e137]
                - generic [ref=e138]:
                  - generic [ref=e139]: India
                  - generic [ref=e140]: •
                  - generic [ref=e141]: Analytics
                - generic [ref=e142]: Analytics
              - generic [ref=e143]:
                - link "Job Description" [ref=e144] [cursor=pointer]:
                  - /url: "#/careers/mis-analyst"
                - button "Apply Now" [ref=e145] [cursor=pointer]
            - article [ref=e146]:
              - generic [ref=e147]:
                - heading "Zonal Business Head" [level=4] [ref=e148]
                - generic [ref=e149]:
                  - generic [ref=e150]: India
                  - generic [ref=e151]: •
                  - generic [ref=e152]: Sales
                - generic [ref=e153]: Sales
              - generic [ref=e154]:
                - link "Job Description" [ref=e155] [cursor=pointer]:
                  - /url: "#/careers/zonal-business-head"
                - button "Apply Now" [ref=e156] [cursor=pointer]
            - article [ref=e157]:
              - generic [ref=e158]:
                - heading "Zonal Manager" [level=4] [ref=e159]
                - generic [ref=e160]:
                  - generic [ref=e161]: India
                  - generic [ref=e162]: •
                  - generic [ref=e163]: Sales
                - generic [ref=e164]: Sales
              - generic [ref=e165]:
                - link "Job Description" [ref=e166] [cursor=pointer]:
                  - /url: "#/careers/zonal-manager"
                - button "Apply Now" [ref=e167] [cursor=pointer]
            - article [ref=e168]:
              - generic [ref=e169]:
                - heading "Regional Sales Manager" [level=4] [ref=e170]
                - generic [ref=e171]:
                  - generic [ref=e172]: India
                  - generic [ref=e173]: •
                  - generic [ref=e174]: Sales
                - generic [ref=e175]: Sales
              - generic [ref=e176]:
                - link "Job Description" [ref=e177] [cursor=pointer]:
                  - /url: "#/careers/regional-sales-manager"
                - button "Apply Now" [ref=e178] [cursor=pointer]
            - article [ref=e179]:
              - generic [ref=e180]:
                - heading "Account Manager" [level=4] [ref=e181]
                - generic [ref=e182]:
                  - generic [ref=e183]: India
                  - generic [ref=e184]: •
                  - generic [ref=e185]: Sales
                - generic [ref=e186]: Sales
              - generic [ref=e187]:
                - link "Job Description" [ref=e188] [cursor=pointer]:
                  - /url: "#/careers/account-manager"
                - button "Apply Now" [ref=e189] [cursor=pointer]
            - article [ref=e190]:
              - generic [ref=e191]:
                - heading "Sales Executive / Business Development Executive" [level=4] [ref=e192]
                - generic [ref=e193]:
                  - generic [ref=e194]: India
                  - generic [ref=e195]: •
                  - generic [ref=e196]: Sales
                - generic [ref=e197]: Sales
              - generic [ref=e198]:
                - link "Job Description" [ref=e199] [cursor=pointer]:
                  - /url: "#/careers/sales-executive-business-development-executive"
                - button "Apply Now" [ref=e200] [cursor=pointer]
            - article [ref=e201]:
              - generic [ref=e202]:
                - heading "Sales Representative" [level=4] [ref=e203]
                - generic [ref=e204]:
                  - generic [ref=e205]: India
                  - generic [ref=e206]: •
                  - generic [ref=e207]: Sales
                - generic [ref=e208]: Sales
              - generic [ref=e209]:
                - link "Job Description" [ref=e210] [cursor=pointer]:
                  - /url: "#/careers/sales-representative"
                - button "Apply Now" [ref=e211] [cursor=pointer]
            - article [ref=e212]:
              - generic [ref=e213]:
                - heading "Tele-caller" [level=4] [ref=e214]
                - generic [ref=e215]:
                  - generic [ref=e216]: India
                  - generic [ref=e217]: •
                  - generic [ref=e218]: Sales
                - generic [ref=e219]: Sales
              - generic [ref=e220]:
                - link "Job Description" [ref=e221] [cursor=pointer]:
                  - /url: "#/careers/tele-caller"
                - button "Apply Now" [ref=e222] [cursor=pointer]
            - article [ref=e223]:
              - generic [ref=e224]:
                - heading "Telesales Executive" [level=4] [ref=e225]
                - generic [ref=e226]:
                  - generic [ref=e227]: India
                  - generic [ref=e228]: •
                  - generic [ref=e229]: Sales
                - generic [ref=e230]: Sales
              - generic [ref=e231]:
                - link "Job Description" [ref=e232] [cursor=pointer]:
                  - /url: "#/careers/telesales-executive"
                - button "Apply Now" [ref=e233] [cursor=pointer]
            - article [ref=e234]:
              - generic [ref=e235]:
                - heading "Anchor" [level=4] [ref=e236]
                - generic [ref=e237]:
                  - generic [ref=e238]: India
                  - generic [ref=e239]: •
                  - generic [ref=e240]: Marketing
                - generic [ref=e241]: Marketing
              - generic [ref=e242]:
                - link "Job Description" [ref=e243] [cursor=pointer]:
                  - /url: "#/careers/anchor"
                - button "Apply Now" [ref=e244] [cursor=pointer]
            - article [ref=e245]:
              - generic [ref=e246]:
                - heading "Brand Manager" [level=4] [ref=e247]
                - generic [ref=e248]:
                  - generic [ref=e249]: India
                  - generic [ref=e250]: •
                  - generic [ref=e251]: Marketing
                - generic [ref=e252]: Marketing
              - generic [ref=e253]:
                - link "Job Description" [ref=e254] [cursor=pointer]:
                  - /url: "#/careers/brand-manager"
                - button "Apply Now" [ref=e255] [cursor=pointer]
      - generic [ref=e256]:
        - generic [ref=e257]:
          - paragraph [ref=e258]: LIFE AT AVODAH & KHEN
          - heading [level=2] [ref=e259]:
            - text: More than work.
            - emphasis [ref=e260]: A shared journey.
          - paragraph [ref=e261]: Celebrating the people, experiences and milestones that bring our team together.
        - generic [ref=e262]:
          - button "All Memories" [ref=e263] [cursor=pointer]
          - button "Celebrations" [ref=e264] [cursor=pointer]
          - button "Team Outings" [ref=e265] [cursor=pointer]
          - button "Achievements" [ref=e266] [cursor=pointer]
        - generic [ref=e267]:
          - button "View broker-excellence-award.jpg.jpeg" [ref=e268] [cursor=pointer]:
            - img "broker excellence award.jpg" [ref=e269]
          - button "View broker-rewards-ceremony.jpg.jpeg" [ref=e270] [cursor=pointer]:
            - img "broker rewards ceremony.jpg" [ref=e271]
          - button "View top-performer-broker-1.jpg.jpeg" [ref=e272] [cursor=pointer]:
            - img "top performer broker 1.jpg" [ref=e273]
          - button "View top-performer-broker-2.jpg.jpeg" [ref=e274] [cursor=pointer]:
            - img "top performer broker 2.jpg" [ref=e275]
          - button "View diwali-2025-1.jpg.jpeg" [ref=e276] [cursor=pointer]:
            - img "diwali 2025 1.jpg" [ref=e277]
          - button "View diwali-team-2.jpg.jpeg" [ref=e278] [cursor=pointer]:
            - img "diwali team 2.jpg" [ref=e279]
          - button "View diwali-team-celebration-2.jpg.jpeg" [ref=e280] [cursor=pointer]:
            - img "diwali team celebration 2.jpg" [ref=e281]
          - button "View office-outing-2.jpg.jpeg" [ref=e282] [cursor=pointer]:
            - img "office outing 2.jpg" [ref=e283]
          - button "View team-picnic-1.jpg.jpeg" [ref=e284] [cursor=pointer]:
            - img "team picnic 1.jpg" [ref=e285]
      - generic [ref=e286]:
        - generic [ref=e287]:
          - paragraph [ref=e288]: Join Our Team
          - heading "We would love to hear from you." [level=2] [ref=e289]
          - paragraph [ref=e290]: Tell us a little about yourself and the opportunity you are interested in.
        - generic [ref=e291]:
          - generic [ref=e292]:
            - generic [ref=e293]:
              - generic [ref=e294]: First Name
              - textbox "First Name" [ref=e295]:
                - /placeholder: Enter your first name
            - generic [ref=e296]:
              - generic [ref=e297]: Last Name
              - textbox "Last Name" [ref=e298]:
                - /placeholder: Enter your last name
            - generic [ref=e299]:
              - generic [ref=e300]: Contact Number
              - textbox "Contact Number" [ref=e301]:
                - /placeholder: +91 98765 43210
            - generic [ref=e302]:
              - generic [ref=e303]: Email Address
              - textbox "Email Address" [ref=e304]:
                - /placeholder: you@example.com
            - generic [ref=e305]:
              - generic [ref=e306]: Department
              - combobox "Department" [ref=e307] [cursor=pointer]:
                - option "Select Department" [selected]
                - option "Sales"
                - option "Marketing"
                - option "IT"
            - generic [ref=e308]:
              - generic [ref=e309]: Job Applied For
              - textbox "Job Applied For" [ref=e310]:
                - /placeholder: e.g. Sales Executive
            - generic [ref=e311]:
              - generic [ref=e312]: Message
              - textbox "Message" [ref=e313]:
                - /placeholder: Tell us about yourself, your experience and why you would like to join us...
          - generic [ref=e314]:
            - paragraph [ref=e315]: We respect your privacy and will only use your information for recruitment purposes.
            - button "Submit Application" [ref=e316] [cursor=pointer]:
              - generic [aria-hidden] [ref=e318]: →
  - contentinfo [ref=e319]:
    - generic [ref=e320]:
      - link [ref=e322] [cursor=pointer]:
        - /url: "#/"
        - img "AVODAH & KHEN" [ref=e323]
      - generic [ref=e324]:
        - heading "Company" [level=4] [ref=e325]
        - link "About us" [ref=e326] [cursor=pointer]:
          - /url: "#/company"
        - link "Research" [ref=e327] [cursor=pointer]:
          - /url: "#/research"
        - link "Careers" [ref=e328] [cursor=pointer]:
          - /url: "#/careers"
      - generic [ref=e329]:
        - heading "Studios" [level=4] [ref=e330]
        - paragraph [ref=e331]: Mumbai
    - paragraph [ref=e332]: © 2026 AVODAH GROUP. All rights reserved.
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