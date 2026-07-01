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
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          Wanderlust Explorer
        </Link>

        <nav className="flex items-center gap-2 text-sm">
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
                    ? "rounded-md bg-slate-900 px-3 py-2 font-medium text-white"
                    : "rounded-md px-3 py-2 text-slate-600 hover:bg-slate-100"
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