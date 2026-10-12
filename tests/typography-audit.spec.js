
import { test } from "@playwright/test";
import fs from "node:fs";

test("Website typography and color consistency audit", async ({ page }) => {
  const routes = [
    ["Home", "/#/"],
    ["Company", "/#/company"],
    ["Contact", "/#/contact"],
    ["Mandate", "/#/mandate"],
    ["Proptech", "/#/proptech"],
    ["Fintech", "/#/fintech"],
    ["Careers", "/#/careers"],
    ["Research", "/#/research"],
  ];

  const report = [];

  for (const [pageName, route] of routes) {
    await page.goto(`http://localhost:5173${route}`);
    await page.waitForLoadState("networkidle").catch(() => {});
    await page.waitForTimeout(500);

    const styles = await page.locator(
      "h1,h2,h3,h4,p,a,button,label,li"
    ).evaluateAll((elements) =>
      elements
        .filter((el) => {
          const r = el.getBoundingClientRect();
          const s = getComputedStyle(el);
          return r.width > 0 && r.height > 0 &&
            s.visibility !== "hidden" && s.display !== "none";
        })
        .map((el) => {
          const s = getComputedStyle(el);
          return {
            element: el.tagName.toLowerCase(),
            text: (el.innerText || "").trim().replace(/\s+/g, " ").slice(0, 70),
            fontFamily: s.fontFamily,
            fontSize: s.fontSize,
            fontWeight: s.fontWeight,
            color: s.color,
            backgroundColor: s.backgroundColor,
          };
        })
    );

    report.push({ page: pageName, route, elements: styles });
  }

  fs.writeFileSync(
    "typography-color-report.json",
    JSON.stringify(report, null, 2)
  );

  console.log("Audit complete: typography-color-report.json");
});
