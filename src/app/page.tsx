import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 shadow-[0_20px_50px_-30px_rgba(2,6,23,0.55)]">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-100" />
      <div className="absolute -left-16 top-8 h-52 w-52 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="absolute -bottom-12 right-0 h-56 w-56 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative grid min-h-[520px] items-center gap-8 p-6 sm:p-8 md:p-10 lg:grid-cols-[1.05fr,0.95fr] lg:gap-14 lg:p-14">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-sky-200 bg-sky-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">
            Escapadas y experiencias
          </p>

          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Descubri tu proximo viaje inolvidable
          </h1>

          <p className="max-w-xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            Explora actividades, cultura y aventura en destinos destacados.
            Compara opciones y encuentra experiencias pensadas para vos en
            minutos.
          </p>

          <Link
            href="/experiences"
            className="inline-flex items-center rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 hover:-translate-y-0.5 hover:bg-sky-700"
          >
            Ver experiencias
          </Link>
        </div>

        <div className="relative h-[300px] overflow-hidden rounded-2xl border border-white/70 bg-slate-200 shadow-xl shadow-slate-900/10 sm:h-[360px] lg:h-[460px]">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=80"
            alt="Paisaje costero para inspirar viajes"
            fill
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
