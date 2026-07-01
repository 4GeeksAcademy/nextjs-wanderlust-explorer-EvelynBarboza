"use client";

import { ExperienceCard } from "@/components/experiences/experience-card";
import { FilterBar } from "@/components/experiences/filter-bar";
import { SearchBar } from "@/components/experiences/search-bar";
import { useExperienceFilters } from "@/hooks/use-experience-filters";
import {
  experienceCategories,
  experienceDestinations,
} from "@/lib/data/experiences";

type ExperiencesPageProps = {
  favoriteIds?: string[];
  onToggleFavorite?: (id: string) => void;
};

export default function ExperiencesPage({
  favoriteIds = [],
  onToggleFavorite,
}: ExperiencesPageProps) {
  const { filters, filteredExperiences, updateFilter } = useExperienceFilters();

  return (
    <section className="flex flex-col gap-6 sm:gap-7">
      <header className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-7">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">Experiences</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Explorador</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
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
        <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-7 text-sm text-slate-700 sm:text-base">
          No se encontraron resultados
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={favoriteIds.includes(experience.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
}
