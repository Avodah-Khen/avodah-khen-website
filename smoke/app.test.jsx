// @vitest-environment jsdom
import { describe, it, expect, beforeAll, vi } from "vitest";
import { render, screen, act, cleanup } from "@testing-library/react";
import React from "react";

beforeAll(() => {
  window.matchMedia = window.matchMedia || ((q) => ({ matches: false, media: q, addEventListener() {}, removeEventListener() {} }));
  window.IntersectionObserver = class { constructor(cb){ this.cb = cb; } observe(el){ this.cb([{ isIntersecting: true, target: el }], this); } unobserve(){} disconnect(){} };
  window.scrollTo = () => {};
  Element.prototype.scrollIntoView = () => {};
});

const routes = ["/", "/research", "/media", "/company", "/contact", "/mandate", "/proptech", "/fintech", "/careers", "/leasing-investment-advisory", "/careers/anything", "/nope"];

describe("routes render without crashing", () => {
  for (const r of routes) {
    it(r, async () => {
      cleanup();
      window.location.hash = r;
      const { default: App } = await import("../src/App.jsx");
      const { container } = render(<App />);
      await act(async () => { await new Promise((res) => setTimeout(res, 20)); });
      expect(container.querySelector("#main-content")).toBeTruthy();
      expect(container.querySelectorAll("main").length).toBeLessThanOrEqual(1);
    });
  }
});

describe("components", () => {
  it("WordReveal keeps the heading text intact and readable", async () => {
    cleanup();
    const WordReveal = (await import("../src/motion/WordReveal.jsx")).default;
    const { container } = render(<WordReveal as="h1" trigger="mount">Transforming the way <em>real estate moves.</em></WordReveal>);
    expect(container.querySelector("h1").textContent).toBe("Transforming the way real estate moves.");
    expect(container.querySelectorAll(".wr-word").length).toBe(6);
  });
  it("CountUp ends on the exact original value", async () => {
    cleanup();
    const CountUp = (await import("../src/motion/CountUp.jsx")).default;
    const { container } = render(<p>Backed by <CountUp end={20} suffix="+" duration={50} /> years</p>);
    await act(async () => { await new Promise((res) => setTimeout(res, 200)); });
    expect(container.querySelector("[aria-hidden]").textContent).toBe("20+");
    expect(container.textContent).toContain("20+");
  });
  it("home keeps all original content", async () => {
    cleanup();
    window.location.hash = "/";
    const { default: App } = await import("../src/App.jsx");
    const { container } = render(<App />);
    await act(async () => { await new Promise((res) => setTimeout(res, 20)); });
    const t = container.textContent;
    for (const s of ["Technology-driven solutions.", "Fragmented discovery", "Lead leakage", "Data & Market Intelligence", "Acquire", "Real-estate first", "Talk to our team", "Explore PropTech", "REAL ESTATE. REIMAGINED WITH PROPTECH"]) expect(t).toContain(s);
  });
  it("page transition swaps route after the exit phase and keeps history behaviour", async () => {
    cleanup();
    vi.useFakeTimers();
    window.location.hash = "/company";
    const { default: App } = await import("../src/App.jsx");
    const { container } = render(<App />);
    await act(async () => { vi.advanceTimersByTime(50); });
    expect(container.querySelector(".av-company")).toBeTruthy();
    await act(async () => { window.location.hash = "/mandate"; window.dispatchEvent(new HashChangeEvent("hashchange")); });
    expect(container.querySelector(".pt-out")).toBeTruthy();
    await act(async () => { vi.advanceTimersByTime(300); });
    expect(container.querySelector(".mandate-page")).toBeTruthy();
    expect(container.querySelector(".pt-in")).toBeTruthy();
    vi.useRealTimers();
  });
});
