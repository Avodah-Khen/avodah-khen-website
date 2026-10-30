import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";

// Reading these endpoints (GET) exposes submitted data, so it is admin-only.
// Anyone else is shown the site's normal 404 page, as if the endpoint didn't exist.
// The public forms only POST to them, which this never touches. The route handlers
// run the same check themselves, so they stay protected even if this matcher changes.
const PROTECTED_READ_PATHS = ["/api/contact", "/api/careers", "/api/newsletter", "/api/waitlist"];

export function proxy(req: NextRequest) {
  const isRead = req.method === "GET" || req.method === "HEAD";
  const path = req.nextUrl.pathname.replace(/\/+$/, "");

  if (isRead && PROTECTED_READ_PATHS.includes(path) && !isAdminRequest(req)) {
    // Rewrite to a path no route matches, so Next renders app/not-found.tsx with a 404.
    return NextResponse.rewrite(new URL("/__not-found", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/contact/:path*", "/api/careers/:path*", "/api/newsletter/:path*", "/api/waitlist/:path*"],
};
