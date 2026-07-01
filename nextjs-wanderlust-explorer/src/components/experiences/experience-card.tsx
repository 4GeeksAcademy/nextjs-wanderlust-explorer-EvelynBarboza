"use client";

import Link from "next/link";

import { formatCurrency } from "@/lib/utils/format-currency";
import type { Experience } from "@/types/experience";

type ExperienceCardProps = {
	experience: Experience;
	isFavorite?: boolean;
	onToggleFavorite?: (id: string) => void;
};

export function ExperienceCard({
	experience,
	isFavorite = false,
	onToggleFavorite,
}: ExperienceCardProps) {
	return (
		<article className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5">
			<div className="flex items-start justify-between gap-3">
				<p className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
					{experience.category}
				</p>
				<button
					type="button"
					onClick={() => onToggleFavorite?.(experience.id)}
					aria-label={
						isFavorite
							? "Quitar de favoritos"
							: "Agregar a favoritos"
					}
					className={
						isFavorite
							? "rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-lg leading-none text-rose-600 shadow-sm"
							: "rounded-full border border-slate-300 bg-white px-2.5 py-1 text-lg leading-none text-slate-500 hover:border-slate-400 hover:text-slate-700"
					}
				>
					{isFavorite ? "♥" : "♡"}
				</button>
			</div>
			<h2 className="mt-3 text-xl font-bold tracking-tight text-slate-900">
				{experience.title}
			</h2>

			<p className="mt-3 text-sm leading-7 text-slate-600">{experience.description}</p>

			<dl className="mt-5 grid gap-2.5 text-sm text-slate-700">
				<div>
					<dt className="font-semibold text-slate-900">Destination</dt>
					<dd>{experience.destination}</dd>
				</div>
				<div>
					<dt className="font-semibold text-slate-900">Price</dt>
					<dd>{formatCurrency(experience.price)}</dd>
				</div>
				<div>
					<dt className="font-semibold text-slate-900">Rating</dt>
					<dd>{experience.rating}</dd>
				</div>
				<div>
					<dt className="font-semibold text-slate-900">ID</dt>
					<dd>{experience.id}</dd>
				</div>
			</dl>

			<Link
				href={`/experiences/${experience.id}`}
				className="mt-5 inline-flex items-center rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50"
			>
				Ver detalle
			</Link>
		</article>
	);
}
