import { ExperienceCard } from "@/components/experiences/experience-card";
import type { Experience } from "@/types/experience";

type FavoritesGridProps = {
	experiences: Experience[];
};

export function FavoritesGrid({ experiences }: FavoritesGridProps) {
	if (experiences.length === 0) {
		return (
			<p className="rounded-lg border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-600">
				No favorites saved yet.
			</p>
		);
	}

	return (
		<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
			{experiences.map((experience) => (
				<ExperienceCard key={experience.id} experience={experience} />
			))}
		</div>
	);
}
