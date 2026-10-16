import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/services",
  "/research",
  "/media",
  "/company",
  "/contact",
  "/mandate",
  "/proptech",
  "/fintech",
  "/careers",
];

for (const route of routes) {
  test(`Accessibility check: ${route}`, async ({ page }) => {
    await page.goto(`/#${route}`);

    await page.addStyleTag({
      content: `
        *,
        *::before,
        *::after {
          animation: none !important;
          transition: none !important;
          scroll-behavior: auto !important;
        }
      `,
    });

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    if (results.violations.length) {
      console.log(
        `\n${route} accessibility issues:\n`,
        results.violations.flatMap((violation) =>
          violation.nodes.map((node) => ({
            rule: violation.id,
            target: node.target,
            text: node.html,
            issue: node.any?.[0]?.message,
          }))
        )
      );
    }

    expect(results.violations).toEqual([]);
  });
}