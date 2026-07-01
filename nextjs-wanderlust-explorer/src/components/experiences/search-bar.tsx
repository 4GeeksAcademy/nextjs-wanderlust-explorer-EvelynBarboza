type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4">
      <label className="flex flex-col gap-2 text-sm">
        <span className="font-medium text-slate-700">Buscar por titulo</span>
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Ej: Adventure"
          className="rounded-md border border-slate-300 px-3 py-2"
        />
      </label>
    </section>
  );
}