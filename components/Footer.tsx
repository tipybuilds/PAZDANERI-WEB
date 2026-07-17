"use client";

import { site, nav } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hair px-5 pt-16 sm:px-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 pb-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light leading-none tracking-tight">
              {site.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-60">
              Gestión estratégica de redes sociales para marcas, PYMES y
              emprendedores en todo Chile.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.18em] opacity-40">
              Menú
            </p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={`/${item.href}`}
                    className="text-sm opacity-70 transition-all hover:text-accent hover:opacity-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/servicios/"
                  className="text-sm opacity-70 transition-all hover:text-accent hover:opacity-100"
                >
                  Servicios
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.18em] opacity-40">
              Contacto
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-words opacity-70 transition-all hover:text-accent hover:opacity-100"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.phoneHref.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 transition-all hover:text-accent hover:opacity-100"
                >
                  {site.phone}
                </a>
              </li>
              <li className="opacity-50">{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-hair py-6 text-[11px] uppercase tracking-[0.18em] opacity-50 sm:flex-row sm:items-center">
          <span>
            © {year} {site.name}
          </span>
          <span>Gestión estratégica de redes sociales</span>
          <a href="/#inicio" className="hover:text-accent">
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
