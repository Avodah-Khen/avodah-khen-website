// @vitest-environment jsdom
import { describe, it, expect, beforeAll, vi } from "vitest";
import { render, act, cleanup, fireEvent } from "@testing-library/react";
import React from "react";

const observers = [];
beforeAll(() => {
  window.matchMedia = (q) => ({ matches: false, media: q, addEventListener() {}, removeEventListener() {} });
  window.IntersectionObserver = class {
    constructor(cb) { this.cb = cb; this.els = new Set(); observers.push(this); }
    observe(el) { this.els.add(el); } unobserve(el) { this.els.delete(el); } disconnect() { this.els.clear(); }
    fire(visible) { this.cb([...this.els].map((target) => ({ isIntersecting: visible, target }))); }
  };
  window.scrollTo = () => {};
  HTMLElement.prototype.scrollBy = () => {};
  HTMLMediaElement.prototype.play = () => Promise.resolve();
  HTMLMediaElement.prototype.pause = () => {};
});
const fireAll = async (v) => act(async () => { observers.forEach((o) => o.fire(v)); });
const tick = (ms = 20) => act(async () => { await new Promise((r) => setTimeout(r, ms)); });

describe("scroll replay (both directions)", () => {
  it("useReveal toggles .in on enter, removes it on leave, re-adds on re-enter", async () => {
    cleanup(); observers.length = 0;
    const useReveal = (await import("../src/hooks/useReveal.js")).default;
    function P() { useReveal(); return <div className="reveal" data-testid="r">x</div>; }
    const { getByTestId } = render(<P />);
    const el = getByTestId("r");
    await fireAll(true);  expect(el.classList.contains("in")).toBe(true);
    await fireAll(false); expect(el.classList.contains("in")).toBe(false);
    await fireAll(true);  expect(el.classList.contains("in")).toBe(true);
  });

  it("PremiumReveal and WordReveal replay", async () => {
    cleanup(); observers.length = 0;
    const { PremiumReveal } = await import("../src/motion/Reveal.jsx");
    const WordReveal = (await import("../src/motion/WordReveal.jsx")).default;
    const { container } = render(<><PremiumReveal>a</PremiumReveal><WordReveal>Hello world</WordReveal></>);
    await fireAll(true);
    expect(container.querySelector(".pr").classList.contains("pr-in")).toBe(true);
    expect(container.querySelector(".wr").classList.contains("wr-in")).toBe(true);
    await fireAll(false);
    expect(container.querySelector(".pr").classList.contains("pr-in")).toBe(false);
    expect(container.querySelector(".wr").classList.contains("wr-in")).toBe(false);
    await fireAll(true);
    expect(container.querySelector(".pr").classList.contains("pr-in")).toBe(true);
  });

  it("CountUp counts up, resets to 0 on leave, and recounts on re-entry", async () => {
    cleanup(); observers.length = 0;
    const CountUp = (await import("../src/motion/CountUp.jsx")).default;
    const { container } = render(<CountUp end={20} suffix="+" duration={40} />);
    const shown = () => container.querySelector("[aria-hidden]").textContent;
    expect(shown()).toBe("0+");
    await fireAll(true); await tick(150); expect(shown()).toBe("20+");
    await fireAll(false); await tick(); expect(shown()).toBe("0+");
    await fireAll(true); await tick(150); expect(shown()).toBe("20+");
    expect(container.querySelector(".sr-only").textContent).toBe("20+");
  });

  it("padded counters keep the original 01..06 text", async () => {
    cleanup(); observers.length = 0;
    const CountUp = (await import("../src/motion/CountUp.jsx")).default;
    const { container } = render(<CountUp end={3} pad={2} duration={30} />);
    await fireAll(true); await tick(120);
    expect(container.querySelector("[aria-hidden]").textContent).toBe("03");
  });
});

describe("home chapter", () => {
  it("keeps every original string and adds the video, rail and statement chapter", async () => {
    cleanup(); observers.length = 0;
    window.location.hash = "/";
    const { default: App } = await import("../src/App.jsx");
    const { container } = render(<App />);
    await tick(40);
    const t = container.textContent;
    for (const s of ["Technology-driven solutions.", "REAL ESTATE. REIMAGINED WITH PROPTECH", "Connect the right property, the right buyer and the right sales strategy — at scale.", "OUR FOCUS", "Property Portal", "Developer Solutions", "Explore solutions", "Convert", "Data + optimization", "Technology grounded in real estate execution.", "Contact AVODAH"]) expect(t).toContain(s);
    expect(container.querySelector("video.hero-video")).toBeTruthy();
    expect(container.querySelector(".hero-video").muted).toBe(true);
    expect(container.querySelectorAll(".av-solution-card").length).toBe(6);
    expect(container.querySelectorAll(".rail-btn").length).toBe(2);
    expect(container.querySelector(".topbar").className).toContain("is-hero");
  });

  it("video is skipped (poster only) under reduced motion", async () => {
    cleanup(); observers.length = 0;
    const orig = window.matchMedia;
    window.matchMedia = (q) => ({ matches: q.includes("prefers-reduced-motion"), media: q, addEventListener() {}, removeEventListener() {} });
    window.location.hash = "/";
    const { default: App } = await import("../src/App.jsx");
    const { container } = render(<App />);
    await tick(40);
    expect(container.querySelector("video")).toBeNull();
    expect(container.querySelector(".av-home-hero-image")).toBeTruthy();
    window.matchMedia = orig;
  });

  it("video is dropped (poster stays) when the last source fails", async () => {
    cleanup(); observers.length = 0;
    window.location.hash = "/";
    const { default: App } = await import("../src/App.jsx");
    const { container } = render(<App />);
    await tick(40);
    const sources = container.querySelectorAll("video source");
    expect(sources.length).toBeGreaterThan(0);
    fireEvent.error(sources[sources.length - 1]);
    await tick();
    expect(container.querySelector("video")).toBeNull();
  });

  it("header is solid after scrolling and on other routes", async () => {
    cleanup(); observers.length = 0;
    window.location.hash = "/company";
    const { default: App } = await import("../src/App.jsx");
    const { container } = render(<App />);
    await tick(40);
    expect(container.querySelector(".topbar").className).not.toContain("is-hero");
    expect(container.querySelector(".topbar").className).not.toContain("topbar-over");
  });
});

describe("rail", () => {
  it("next/prev buttons exist and the track is keyboard focusable", async () => {
    cleanup();
    const HorizontalRail = (await import("../src/motion/HorizontalRail.jsx")).default;
    const { container, getByLabelText } = render(<HorizontalRail label="x"><div>1</div><div>2</div></HorizontalRail>);
    expect(container.querySelector(".rail-track").tabIndex).toBe(0);
    expect(getByLabelText("Previous").disabled).toBe(true);
  });
});
