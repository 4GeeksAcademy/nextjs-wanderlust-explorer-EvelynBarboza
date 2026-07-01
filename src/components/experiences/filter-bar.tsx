import type { ExperienceCategory } from "@/types/experience";

type FilterBarProps = {
  category: string;
  destination: string;
  categories: ExperienceCategory[];
  destinations: string[];
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
};

export function FilterBar({
  category,
  destination,
  categories,
  destinations,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-slate-700">Categoria</span>
          <select
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-800 shadow-sm outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
          >
            <option value="">Todas las categorias</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-slate-700">Destino</span>
          <select
            value={destination}
            onChange={(event) => onDestinationChange(event.target.value)}
            className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-800 shadow-sm outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
          >
            <option value="">Todos los destinos</option>
            {destinations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
}