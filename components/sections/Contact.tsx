"use client";

import { site } from "@/lib/content";
import { Reveal, RevealText } from "@/components/Reveal";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-hair px-5 py-28 sm:px-8 sm:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="mb-8 text-xs uppercase tracking-[0.22em] opacity-50">
            (¿Potenciemos tus redes?)
          </p>
        </Reveal>

        <a
          href={`mailto:${site.email}`}
          data-cursor-hover
          className="group block"
        >
          <h2 className="font-serif text-[clamp(2.5rem,9vw,9rem)] font-light leading-[0.95] tracking-tight">
            <RevealText text="Hablemos." />
            <span className="mt-2 flex items-center gap-4 text-accent">
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-4">
                ↗
              </span>
              <span className="text-[clamp(1.1rem,3vw,2.2rem)] tracking-tight opacity-80 group-hover:opacity-100">
                {site.email}
              </span>
            </span>
          </h2>
        </a>

        <div className="mt-20 grid gap-10 border-t border-hair pt-10 sm:grid-cols-3">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] opacity-50">
              Email
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block text-lg hover:text-accent"
            >
              {site.email}
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-xs uppercase tracking-[0.18em] opacity-50">
              Teléfono
            </p>
            <a
              href={`tel:${site.phoneHref}`}
              className="mt-2 block text-lg hover:text-accent"
            >
              {site.phone}
            </a>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-xs uppercase tracking-[0.18em] opacity-50">
              Ubicación
            </p>
            <p className="mt-2 text-lg">{site.location}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
