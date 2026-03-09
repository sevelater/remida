import type { Metadata } from "next";
import AdminPanel from "@/components/admin/admin-panel";

export const metadata: Metadata = {
  title: "Admin | Kovasz Muhely",
  description: "Egyszerű tartalomkezelés: helyszín, oktatók, workshopok, blog.",
};

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <h1 className="text-4xl font-semibold text-amber-950">Admin panel</h1>
      <p className="mt-2 text-amber-900/80">Itt szerkeszthető az oldal általános tartalma és a kurzus metaadatok.</p>
      <div className="mt-8">
        <AdminPanel />
      </div>
    </div>
  );
}

