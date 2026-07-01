"use client";

import { ExperienceCard } from "@/components/experiences/experience-card";
import { experiences } from "@/lib/data/experiences";

type FavoritesPageProps = {
  favoriteIds?: string[];
  onToggleFavorite?: (id: string) => void;
};

export default function FavoritesPage({
  favoriteIds = [],
  onToggleFavorite,
}: FavoritesPageProps) {
  const favoriteExperiences = experiences.filter((experience) =>
    favoriteIds.includes(experience.id)
  );

  return (
    <section className="flex flex-col gap-6 sm:gap-7">
      <header className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-7">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">Favorites</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Tus experiencias favoritas</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          Aqui se muestran unicamente las experiencias marcadas con el corazon.
        </p>
      </header>

      {favoriteExperiences.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-7 text-sm text-slate-700 sm:text-base">
          Aun no tienes favoritos. Marca experiencias con el corazon para verlas aqui.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
}
