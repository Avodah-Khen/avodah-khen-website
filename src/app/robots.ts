import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// /admin is deliberately not listed here: listing it would advertise the path, and the
// page already carries a noindex tag (which crawlers can only see if they may fetch it).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
