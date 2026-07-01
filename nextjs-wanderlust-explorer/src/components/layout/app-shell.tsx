"use client";

import {
  cloneElement,
  isValidElement,
  useCallback,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";

import { Navbar } from "@/components/layout/navbar";

type InjectedFavoritesProps = {
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
};

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const onToggleFavorite = useCallback((id: string) => {
    setFavoriteIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((currentId) => currentId !== id)
        : [...currentIds, id]
    );
  }, []);

  const shouldInjectFavoritesProps =
    pathname === "/experiences" ||
    pathname === "/favorites" ||
    pathname === "/profile";

  const content = useMemo(() => {
    if (!shouldInjectFavoritesProps || !isValidElement(children)) {
      return children;
    }

    return cloneElement(children, {
      favoriteIds,
      onToggleFavorite,
    } as InjectedFavoritesProps);
  }, [children, favoriteIds, onToggleFavorite, shouldInjectFavoritesProps]);

  return (
    <>
      <Navbar favoriteCount={favoriteIds.length} />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        {content}
      </main>
    </>
  );
}