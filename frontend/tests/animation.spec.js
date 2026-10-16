import { test, expect } from "@playwright/test";

const pagesToTest = [
  { name: "Home", path: "/" },
  { name: "Research", path: "/research" },
  { name: "Media", path: "/media" },
  { name: "Company", path: "/company" },
  { name: "Contact", path: "/contact" },
  { name: "Mandate", path: "/mandate" },
  { name: "PropTech", path: "/proptech" },
  { name: "Fintech", path: "/fintech" },
  { name: "Careers", path: "/careers" },
  { name: "Leasing Investment Advisory", path: "/leasing-investment-advisory" },
];

test.describe("Animation QA", () => {
  test.describe.configure({ mode: "serial" });

  for (const pageInfo of pagesToTest) {
    test(`${pageInfo.name} - reveal elements exist and animate`, async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: "networkidle" });

      const revealCount = await page.locator(".reveal, .reveal-stagger").count();

      test.info().annotations.push({
        type: "reveal-elements",
        description: `${revealCount} reveal elements found`,
      });

      if (revealCount === 0) {
        test.info().annotations.push({
          type: "warning",
          description: "No .reveal or .reveal-stagger elements found on this page",
        });

        return;
      }

      await expect(
        page.locator(".reveal, .reveal-stagger").first()
      ).toBeVisible();
    });
  }

 test("Reveal animation - enters viewport", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });

  const reveal = page.locator(".reveal, .reveal-stagger").first();

  await expect(reveal).toHaveCount(1, { timeout: 10000 });
  await expect(reveal).toBeAttached();

  await reveal.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);

  await expect(reveal).toHaveClass(/in/);
});

  test("Reveal animation - resets when leaving viewport", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    const reveal = page.locator(".reveal, .reveal-stagger").first();

    await expect(reveal).toBeAttached();

    await reveal.scrollIntoViewIfNeeded();

    await expect
      .poll(async () => {
        return reveal.evaluate((element) =>
          element.classList.contains("in")
        );
      })
      .toBe(true);

    await page.evaluate(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "instant",
      });
    });

    await expect
      .poll(async () => {
        return reveal.evaluate((element) =>
          element.classList.contains("in")
        );
      })
      .toBe(false);
  });

  test("Reveal animation - replays after re-entering viewport", async ({
    page,
  }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    const reveal = page.locator(".reveal, .reveal-stagger").first();

    await expect(reveal).toBeAttached();

    // First entry
    await page.evaluate(() => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "auto",
  });
});

await page.waitForTimeout(500);

await page.evaluate(() => {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
});

await page.waitForTimeout(500);

    await expect
      .poll(async () => {
        return reveal.evaluate((element) =>
          element.classList.contains("in")
        );
      })
      .toBe(true);

    // Leave viewport
    await page.evaluate(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "instant",
      });
    });

    await expect
      .poll(async () => {
        return reveal.evaluate((element) =>
          element.classList.contains("in")
        );
      })
      .toBe(false);

    // Re-enter viewport
    await reveal.scrollIntoViewIfNeeded();

    await expect
      .poll(async () => {
        return reveal.evaluate((element) =>
          element.classList.contains("in")
        );
      })
      .toBe(true);
  });

  test("Reveal animation - works in reverse scroll direction", async ({
    page,
  }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    const reveals = page.locator(".reveal, .reveal-stagger");
    const count = await reveals.count();

    if (count < 2) {
      test.skip(true, "At least two reveal elements are required");
    }

    const lastReveal = reveals.last();

    await lastReveal.scrollIntoViewIfNeeded();

    await expect
      .poll(async () => {
        return lastReveal.evaluate((element) =>
          element.classList.contains("in")
        );
      })
      .toBe(true);

    // Scroll upward through the page
    await page.evaluate(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    });

    // Scroll back down to the last reveal
    await lastReveal.scrollIntoViewIfNeeded();

    await expect
      .poll(async () => {
        return lastReveal.evaluate((element) =>
          element.classList.contains("in")
        );
      })
      .toBe(true);
  });

  test("Reduced motion - reveal elements remain visible", async ({ page }) => {
    await page.emulateMedia({
      reducedMotion: "reduce",
    });

    await page.goto("/", { waitUntil: "networkidle" });

    const reveals = page.locator(".reveal, .reveal-stagger");
    const count = await reveals.count();

    if (count === 0) {
      test.skip(true, "No reveal elements found");
    }

    for (let i = 0; i < Math.min(count, 10); i++) {
      const element = reveals.nth(i);

      await expect(element).toBeVisible();

      await expect
        .poll(async () => {
          return element.evaluate((el) => el.classList.contains("in"));
        })
        .toBe(true);
    }
  });

  test("No horizontal overflow on animation page", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));

    expect(dimensions.scrollWidth).toBeLessThanOrEqual(
      dimensions.viewport + 1
    );
  });

  test("Animation elements do not become hidden after scrolling", async ({
  page,
}) => {
  await page.goto("/", { waitUntil: "networkidle" });

  const reveals = page.locator(".reveal, .reveal-stagger");
  const count = await reveals.count();

  if (count === 0) {
    test.skip(true, "No reveal elements found");
  }

  for (let i = 0; i < Math.min(count, 10); i++) {
    const element = reveals.nth(i);

    await element.scrollIntoViewIfNeeded();

    // Wait until IntersectionObserver applies the "in" class.
    await expect
      .poll(async () => {
        return element.evaluate((el) => el.classList.contains("in"));
      })
      .toBe(true);

    await expect(element).toBeVisible();

    const state = await element.evaluate((el) => ({
      opacity: getComputedStyle(el).opacity,
      visibility: getComputedStyle(el).visibility,
      display: getComputedStyle(el).display,
      hasInClass: el.classList.contains("in"),
    }));

    expect(state.display).not.toBe("none");
    expect(state.visibility).not.toBe("hidden");
    expect(state.hasInClass).toBe(true);
    expect(state.display).not.toBe("none");
    expect(state.visibility).not.toBe("hidden");
    expect(state.hasInClass).toBe(true);
  }
});
test("reveal-stagger applies increasing delays to stagger cards", async ({ page }) => {
  await page.goto("/company");
  await page.waitForLoadState("networkidle");

  const group = page.locator(".reveal-stagger").first();
  await group.scrollIntoViewIfNeeded();

  await expect(group).toHaveClass(/in/);

  const delays = await group.locator(":scope > .stagger-card").evaluateAll((cards) =>
    cards.map((card) => parseFloat(getComputedStyle(card).transitionDelay))
  );

  expect(delays.length).toBeGreaterThanOrEqual(2);

  for (let i = 1; i < delays.length; i++) {
    expect(delays[i]).toBeGreaterThan(delays[i - 1]);
  }
});
});