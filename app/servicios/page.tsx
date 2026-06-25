import type { Metadata } from "next";
import Link from "next/link";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { servicesSchema, breadcrumb } from "@/lib/schema";
import { services, plans, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Servicios de gestión de redes sociales para PYMES en Chile",
  description:
    "Estrategia de contenido, community management y crecimiento orgánico para marcas, PYMES y emprendedores en Chile. Conoce los planes Integral, Plus y Causa.",
  alternates: { canonical: "https://pazdaneri.com/servicios" },
  openGraph: {
    title: "Servicios de gestión de redes sociales para PYMES en Chile",
    description:
      "Planes de gestión de redes sociales para marcas, PYMES y emprendedores en Chile. Estrategia, contenido y crecimiento orgánico.",
    url: "https://pazdaneri.com/servicios",
    type: "website",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <JsonLd data={servicesSchema} />
      <JsonLd
        data={breadcrumb([
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/servicios" },
        ])}
      />
      <PageNav />

      <main className="mx-auto max-w-[1600px] px-5 pt-36 sm:px-8 sm:pt-44">
        {/* Breadcrumb visible */}
        <nav
          aria-label="Ruta de navegación"
          className="mb-10 text-xs uppercase tracking-[0.18em] opacity-50"
        >
          <Link href="/" className="hover:text-accent">
            Inicio
          </Link>
          <span className="px-2">/</span>
          <span>Servicios</span>
        </nav>

        <header className="max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.22em] opacity-50">
            (Servicios)
          </p>
          <h1 className="font-serif text-4xl font-light leading-[1.05] tracking-tight sm:text-7xl">
            Gestión de redes sociales para marcas y PYMES en Chile
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed opacity-80">
            Acompaño a marcas, PYMES y emprendedores de todo Chile a construir
            una presencia digital con identidad propia. Estrategia, contenido y
            community management con foco en el crecimiento orgánico y el largo
            plazo.
          </p>
        </header>

        {/* Servicios */}
        <section className="mt-20 sm:mt-28">
          <h2 className="font-serif text-2xl font-light tracking-tight sm:text-4xl">
            Qué hago
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-hair sm:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.n}
                className="bg-[var(--bg)] p-8 sm:p-12"
              >
                <span className="font-serif text-sm text-accent">{s.n}</span>
                <h3 className="mt-4 font-serif text-2xl font-light tracking-tight sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-sm leading-relaxed opacity-70">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Planes */}
        <section className="mt-24 sm:mt-32">
          <h2 className="font-serif text-2xl font-light tracking-tight sm:text-4xl">
            Planes mensuales
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed opacity-70">
            Cada marca es distinta, por eso cotizo a medida según tus objetivos,
            la cantidad de redes y la frecuencia de publicación.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className="flex flex-col rounded-2xl border border-hair p-8"
              >
                <h3 className="font-serif text-2xl font-light tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed opacity-70">
                  {p.tagline}
                </p>
                <ul className="mt-6 space-y-2">
                  {p.includes.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2 text-sm opacity-80"
                    >
                      <span className="text-accent">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Casos */}
        <section className="mt-24 sm:mt-32">
          <h2 className="font-serif text-2xl font-light tracking-tight sm:text-4xl">
            Casos de marcas con las que he trabajado
          </h2>
          <ul className="mt-10 border-t border-hair">
            {projects.map((p) => (
              <li key={p.slug} className="border-b border-hair">
                <Link
                  href={`/casos/${p.slug}`}
                  className="group flex items-center justify-between gap-4 py-6"
                >
                  <span className="font-serif text-2xl font-light tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                    {p.name}
                  </span>
                  <span className="text-xs uppercase tracking-[0.16em] opacity-50">
                    {p.tag} →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-24 border-t border-hair py-20 sm:mt-32">
          <h2 className="font-serif text-3xl font-light leading-tight tracking-tight sm:text-5xl">
            ¿Potenciamos las redes de tu negocio?
          </h2>
          <Link
            href="/#contacto"
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-hair px-6 py-3 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
          >
            Hablemos
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
