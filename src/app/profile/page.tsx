"use client";

type ProfilePageProps = {
  favoriteIds?: string[];
};

export default function ProfilePage({ favoriteIds = [] }: ProfilePageProps) {
  const profile = {
    name: "Camila Fernandez",
    email: "camila.fernandez@wanderlust.test",
    bio: "Amante de las escapadas cortas, la gastronomia local y los paisajes naturales. Siempre buscando experiencias autenticas para el proximo viaje.",
    initials: "CF",
  };

  return (
    <section className="flex flex-col gap-6 sm:gap-7">
      <header className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-7">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">Profile</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Mi perfil</h1>
      </header>

      <article className="grid gap-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm md:grid-cols-[auto,1fr,220px] md:items-start md:p-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-sky-200 bg-sky-100 text-2xl font-bold text-sky-700 shadow-sm">
          {profile.initials}
        </div>

        <div className="space-y-2.5">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{profile.name}</h2>
          <p className="text-sm text-slate-600">{profile.email}</p>
          <p className="pt-1 text-sm leading-7 text-slate-700 sm:text-base">{profile.bio}</p>
        </div>

        <div className="rounded-2xl border border-sky-200 bg-gradient-to-b from-sky-50 to-cyan-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
            Favoritos guardados
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-900">
            {favoriteIds.length}
          </p>
        </div>
      </article>
    </section>
  );
}
