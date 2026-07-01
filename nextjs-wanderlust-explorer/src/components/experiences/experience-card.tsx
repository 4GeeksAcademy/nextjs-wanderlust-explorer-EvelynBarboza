import { formatCurrency } from "@/lib/utils/format-currency";
import type { Experience } from "@/types/experience";

type ExperienceCardProps = {
	experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
	return (
		<article className="rounded-lg border border-slate-200 bg-white p-4">
			<p className="text-xs font-medium uppercase tracking-wide text-slate-500">
				{experience.category}
			</p>
			<h2 className="mt-1 text-lg font-semibold">{experience.title}</h2>

			<p className="mt-3 text-sm text-slate-600">{experience.description}</p>

			<dl className="mt-4 grid gap-2 text-sm text-slate-700">
				<div>
					<dt className="font-medium">Destination</dt>
					<dd>{experience.destination}</dd>
				</div>
				<div>
					<dt className="font-medium">Price</dt>
					<dd>{formatCurrency(experience.price)}</dd>
				</div>
				<div>
					<dt className="font-medium">Rating</dt>
					<dd>{experience.rating}</dd>
				</div>
				<div>
					<dt className="font-medium">ID</dt>
					<dd>{experience.id}</dd>
				</div>
			</dl>
		</article>
	);
}
