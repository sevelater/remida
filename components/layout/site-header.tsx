"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/providers/auth-provider";
import { UserRole } from "@/lib/types";

const baseNav = [
  { href: "/", label: "Főoldal" },
  { href: "/courses", label: "Workshoppok" },
  { href: "/blog", label: "Blog" },
  { href: "/tools/sourdough", label: "Kovász kalkulátor" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const { role, setRole } = useAuth();

  const nav = role === "admin" ? [...baseNav, { href: "/admin", label: "Admin" }] : baseNav;

  return (
    <header className="sticky top-0 z-50 border-b border-amber-900/10 bg-amber-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-amber-950">
          Kovasz Muhely
        </Link>

        <nav className="flex flex-wrap items-center gap-1 text-sm">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 transition ${
                  active ? "bg-amber-900 text-amber-50" : "text-amber-900 hover:bg-amber-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <label className="flex items-center gap-2 text-xs text-amber-900">
          Szerep
          <select
            value={role}
            onChange={(event) => setRole(event.target.value as UserRole)}
            className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-sm"
            aria-label="Felhasználói szerep"
          >
            <option value="guest">Vendég</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
      </div>
    </header>
  );
}

