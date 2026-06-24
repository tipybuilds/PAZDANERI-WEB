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
            <span className="mt-3 flex items-end gap-2 text-[clamp(1.1rem,3vw,2.2rem)] leading-none text-accent">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className="h-[1.05em] w-[1.05em] shrink-0 transition-transform duration-500 ease-smooth group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                {/* diagonal arrow: tail bottom-left, tip top-right (points up toward the email) */}
                <line x1="4" y1="20" x2="20" y2="4" />
                <polyline points="9,4 20,4 20,15" />
              </svg>
              <span className="tracking-tight opacity-80 group-hover:opacity-100">
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
