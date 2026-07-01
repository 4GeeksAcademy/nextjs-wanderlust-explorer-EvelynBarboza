import type { ExperienceCategory } from "@/types/experience";
import type { ExperienceFilters } from "@/types/filters";

type ExperienceFiltersFormProps = {
	filters: ExperienceFilters;
	categories: ExperienceCategory[];
	destinations: string[];
	onFilterChange: (key: keyof ExperienceFilters, value: string) => void;
};

export function ExperienceFiltersForm({
	filters,
	categories,
	destinations,
	onFilterChange,
}: ExperienceFiltersFormProps) {
	return (
		<section className="rounded-lg border border-slate-200 bg-white p-4">
			<div className="grid gap-4 md:grid-cols-3">
				<label className="flex flex-col gap-2 text-sm">
					<span className="font-medium text-slate-700">Search title</span>
					<input
						type="search"
						value={filters.search}
						onChange={(event) => onFilterChange("search", event.target.value)}
						placeholder="Search experiences"
						className="rounded-md border border-slate-300 px-3 py-2"
					/>
				</label>

				<label className="flex flex-col gap-2 text-sm">
					<span className="font-medium text-slate-700">Category</span>
					<select
						value={filters.category}
						onChange={(event) =>
							onFilterChange("category", event.target.value)
						}
						className="rounded-md border border-slate-300 px-3 py-2"
					>
						<option value="">All categories</option>
						{categories.map((category) => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
					</select>
				</label>

				<label className="flex flex-col gap-2 text-sm">
					<span className="font-medium text-slate-700">Destination</span>
					<select
						value={filters.destination}
						onChange={(event) =>
							onFilterChange("destination", event.target.value)
						}
						className="rounded-md border border-slate-300 px-3 py-2"
					>
						<option value="">All destinations</option>
						{destinations.map((destination) => (
							<option key={destination} value={destination}>
								{destination}
							</option>
						))}
					</select>
				</label>
			</div>
		</section>
	);
}
