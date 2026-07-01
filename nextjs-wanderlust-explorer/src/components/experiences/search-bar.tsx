type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
      <label className="flex flex-col gap-2 text-sm">
        <span className="font-semibold text-slate-700">Buscar por titulo</span>
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Ej: Adventure"
          className="rounded-xl border border-slate-300 px-4 py-2.5 text-slate-800 shadow-sm outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
        />
      </label>
    </section>
  );
}