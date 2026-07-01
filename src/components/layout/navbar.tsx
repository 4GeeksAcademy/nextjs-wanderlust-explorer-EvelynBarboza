"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
];

type NavbarProps = {
  favoriteCount?: number;
};

export function Navbar({ favoriteCount = 0 }: NavbarProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-lg font-bold tracking-tight text-slate-900">
            Wanderlust <span className="text-sky-700">Explorer</span>
          </Link>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
            Travel planner
          </span>
        </div>

        <nav className="scrollbar-none flex items-center gap-2 overflow-x-auto pb-1 text-sm">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? "whitespace-nowrap rounded-full bg-sky-600 px-4 py-2 font-semibold text-white shadow-sm"
                    : "whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-600 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900"
                }
              >
                {item.label}
                {item.href === "/favorites" ? ` (${favoriteCount})` : ""}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}