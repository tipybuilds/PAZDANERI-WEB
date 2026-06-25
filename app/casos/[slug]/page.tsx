import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { caseSchema, breadcrumb } from "@/lib/schema";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return {};
  const title = `Caso ${p.name}: ${p.tagline}`;
  const description = p.description.slice(0, 155);
  const url = `https://pazdaneri.com/casos/${p.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
  };
}

export default function CasoPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();

  const others = projects.filter((x) => x.slug !== p.slug).slice(0, 3);
  const schema = caseSchema(p.slug);

  return (
    <>
      {schema && <JsonLd data={schema} />}
      <JsonLd
        data={breadcrumb([
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/servicios" },
          { name: p.name, path: `/casos/${p.slug}` },
        ])}
      />
      <PageNav />

      <main className="mx-auto max-w-[1100px] px-5 pt-36 sm:px-8 sm:pt-44">
        <nav
          aria-label="Ruta de navegación"
          className="mb-10 text-xs uppercase tracking-[0.18em] opacity-50"
        >
          <Link href="/" className="hover:text-accent">
            Inicio
          </Link>
          <span className="px-2">/</span>
          <Link href="/servicios" className="hover:text-accent">
            Servicios
          </Link>
          <span className="px-2">/</span>
          <span>{p.name}</span>
        </nav>

        <header>
          <p className="mb-6 text-xs uppercase tracking-[0.22em] opacity-50">
            {p.tag} · {p.year}
          </p>
          <h1 className="font-serif text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl">
            {p.name}
          </h1>
          <p className="mt-5 text-xl italic opacity-70">{p.tagline}</p>
        </header>

        <div className="mt-12 grid gap-10 border-t border-hair pt-12 sm:grid-cols-12">
          <div className="sm:col-span-8">
            <p className="text-lg leading-relaxed opacity-85">
              {p.description}
            </p>
            {p.details && (
              <p className="mt-6 text-sm italic opacity-60">{p.details}</p>
            )}
          </div>
          <aside className="sm:col-span-4">
            <div className="flex items-center justify-between border-b border-hair pb-2 text-xs uppercase tracking-[0.18em] opacity-50">
              <span>{p.plan}</span>
              <span>{p.year}</span>
            </div>
            <ul className="mt-4 space-y-2">
              {p.deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-center gap-2 text-sm opacity-80"
                >
                  <span className="text-accent">—</span>
                  {d}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Otros casos */}
        <section className="mt-24 border-t border-hair pt-12">
          <h2 className="text-xs uppercase tracking-[0.22em] opacity-50">
            Otros casos
          </h2>
          <ul className="mt-6">
            {others.map((o) => (
              <li key={o.slug} className="border-b border-hair">
                <Link
                  href={`/casos/${o.slug}`}
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <span className="font-serif text-xl font-light tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-2xl">
                    {o.name}
                  </span>
                  <span className="text-xs uppercase tracking-[0.16em] opacity-50">
                    {o.tag} →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-20 py-16">
          <h2 className="font-serif text-3xl font-light leading-tight tracking-tight sm:text-4xl">
            ¿Quieres un trabajo así para tu marca?
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#contacto"
              className="group inline-flex items-center gap-3 rounded-full border border-hair px-6 py-3 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
            >
              Hablemos
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-3 rounded-full border border-hair px-6 py-3 text-xs uppercase tracking-[0.18em] opacity-70 transition-opacity hover:opacity-100"
            >
              Ver servicios
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
