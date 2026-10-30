// Public base URL of the site, used for absolute links in robots.txt and sitemap.xml.
// Set NEXT_PUBLIC_SITE_URL in the hosting environment if the domain differs.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://avodahgroup.co").replace(/\/+$/, "");
