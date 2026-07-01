"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { ExperienceCard } from "@/components/experiences/experience-card";
import { FilterBar } from "@/components/experiences/filter-bar";
import { SearchBar } from "@/components/experiences/search-bar";
import {
  experienceCategories,
  experienceDestinations,
  experiences,
} from "@/lib/data/experiences";
import { buildQueryString } from "@/lib/utils/build-query-string";
import { matchesExperienceFilters } from "@/lib/utils/match-filters";
import type { ExperienceFilters } from "@/types/filters";

export default function ExperiencesPage() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters: ExperienceFilters = {
    search: searchParams.get("search") ?? "",
    category: searchParams.get("category") ?? "",
    destination: searchParams.get("destination") ?? "",
  };

  const filteredExperiences = experiences.filter((experience) =>
    matchesExperienceFilters(experience, filters)
  );

  function updateFilter(key: keyof ExperienceFilters, value: string) {
    const queryString = buildQueryString(searchParams, key, value);
    const nextUrl = queryString ? `${pathname}?${queryString}` : pathname;

    router.replace(nextUrl);
  }

  return (
    <section className="flex flex-col gap-6">
      <header className="rounded-lg border border-slate-200 bg-white p-6">
        <p className="text-sm font-medium text-slate-500">Experiences</p>
        <h1 className="mt-2 text-3xl font-semibold">Explorador</h1>
        <p className="mt-2 text-sm text-slate-600">
          Se muestran las 100 experiencias del dataset con filtros combinables por titulo, categoria y destino.
        </p>
      </header>

      <SearchBar
        value={filters.search}
        onChange={(value) => updateFilter("search", value)}
      />

      <FilterBar
        category={filters.category}
        destination={filters.destination}
        categories={experienceCategories}
        destinations={experienceDestinations}
        onCategoryChange={(value) => updateFilter("category", value)}
        onDestinationChange={(value) => updateFilter("destination", value)}
      />

      {filteredExperiences.length === 0 ? (
        <p className="rounded-lg border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-700">
          No se encontraron resultados
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      )}
    </section>
  );
}
