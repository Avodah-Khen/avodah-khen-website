import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Public pages only. Left out on purpose: /get-in-touch (duplicate of /contact),
// /admin (private) and /api/* (not pages).
const PAGES: { path: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/mandate", changeFrequency: "monthly", priority: 0.9 },
  { path: "/leasing-and-investment-advisory", changeFrequency: "monthly", priority: 0.9 },
  { path: "/research", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/who-we-are", changeFrequency: "monthly", priority: 0.7 },
  { path: "/careers", changeFrequency: "weekly", priority: 0.7 },
  { path: "/proptech", changeFrequency: "monthly", priority: 0.6 },
  { path: "/fintech", changeFrequency: "monthly", priority: 0.6 },
  { path: "/ai-voice-bot", changeFrequency: "monthly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    changeFrequency,
    priority,
  }));
}
