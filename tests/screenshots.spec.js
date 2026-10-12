
import { test, expect } from "@playwright/test";

const pages = [
  { name: "Services", slug: "services", path: "/#/services" },
  { name: "Research", slug: "research", path: "/#/research" },
  { name: "Media", slug: "media", path: "/#/media" },
  { name: "Company", slug: "company", path: "/#/company" },
  { name: "Contact", slug: "contact", path: "/#/contact" },
  { name: "Mandate", slug: "mandate", path: "/#/mandate" },
  { name: "Proptech", slug: "proptech", path: "/#/proptech" },
  { name: "Fintech", slug: "fintech", path: "/#/fintech" },
  { name: "Careers", slug: "careers", path: "/#/careers" },
];

for (const pageInfo of pages) {
  test(`Visual regression - ${pageInfo.name}`, async ({ page }) => {
    await page.goto(pageInfo.path, { waitUntil: "domcontentloaded" });

    await expect(page.locator(".site")).toBeVisible();

    // Wait for fonts, but do not let a stalled font request block the test.
    await page.evaluate(async () => {
      if (document.fonts) {
        await Promise.race([
          document.fonts.ready,
          new Promise((resolve) => setTimeout(resolve, 5000)),
        ]);
      }
    });

    // Wait for images with a maximum timeout.
    await page.evaluate(async () => {
      const images = Array.from(document.images);

      await Promise.race([
        Promise.all(
          images.map(async (img) => {
            if (!img.complete) {
              await new Promise((resolve) => {
                img.addEventListener("load", resolve, { once: true });
                img.addEventListener("error", resolve, { once: true });
              });
            }

            if (img.complete && img.naturalWidth > 0 && img.decode) {
              await img.decode().catch(() => {});
            }
          })
        ),
        new Promise((resolve) => setTimeout(resolve, 8000)),
      ]);
    });

    // Disable animations and reveal elements for stable screenshots.
    await page.addStyleTag({
      content: `
        *,
        *::before,
        *::after {
          animation: none !important;
          transition: none !important;
          caret-color: transparent !important;
        }

        .reveal,
        .reveal-stagger,
        .hero-enter {
          opacity: 1 !important;
          transform: none !important;
          filter: none !important;
          visibility: visible !important;
        }
      `,
    });

    await expect(page).toHaveScreenshot(
      `${pageInfo.slug}-viewport.png`,
      {
        animations: "disabled",
        caret: "hide",
        scale: "css",
        maxDiffPixels: 300,
      }
    );
  });
}
