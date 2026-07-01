import Image from "next/image";

import { experiences } from "@/lib/data/experiences";
import { formatCurrency } from "@/lib/utils/format-currency";

type ExperienceDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === id);

  if (!experience) {
    return (
      <section className="rounded-2xl border border-dashed border-slate-300 bg-white p-7 text-sm text-slate-700 sm:text-base">
        La experiencia no fue encontrada.
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <article className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
        <div className="relative h-64 w-full bg-slate-100 sm:h-80 lg:h-96">
          <Image
            src={experience.imageUrl}
            alt={experience.title}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />
        </div>

        <div className="space-y-4 p-6 sm:p-8">
          <p className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
            {experience.category}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {experience.title}
          </h1>

          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            {experience.description}
          </p>

          <dl className="grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <dt className="font-semibold text-slate-900">Categoria</dt>
              <dd>{experience.category}</dd>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <dt className="font-semibold text-slate-900">Destino</dt>
              <dd>{experience.destination}</dd>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <dt className="font-semibold text-slate-900">Precio</dt>
              <dd>{formatCurrency(experience.price)}</dd>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <dt className="font-semibold text-slate-900">Rating</dt>
              <dd>{experience.rating}</dd>
            </div>
          </dl>
        </div>
      </article>
    </section>
  );
}
