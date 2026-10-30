import type { Metadata } from "next";
import AdminClient from "@/components/admin/AdminClient";

export const metadata: Metadata = {
  title: "Admin — AVODAH",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function AdminPage() {
  return (
    <main className="relative isolate min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)] flex items-center justify-center px-6 py-16">
      <AdminClient />
    </main>
  );
}
