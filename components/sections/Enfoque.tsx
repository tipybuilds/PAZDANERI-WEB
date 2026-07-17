"use client";

import { Reveal, RevealText } from "@/components/Reveal";
import { services } from "@/lib/content";

export default function Enfoque() {
  return (
    <section
      id="enfoque"
      className="relative border-y border-hair bg-[color-mix(in_srgb,var(--fg)_4%,transparent)]"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-28 sm:px-8 sm:py-40">
        <div className="mb-16 max-w-4xl">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.22em] opacity-50">
              (El enfoque)
            </p>
          </Reveal>
          <h2 className="font-serif text-3xl font-light leading-[1.12] tracking-tight sm:text-5xl">
            <RevealText text="Hacer crecer tu presencia digital de forma orgánica. Sin fórmulas mágicas, con estrategia y foco en el largo plazo." />
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-hair sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 0.08}
              className="group relative overflow-hidden bg-[var(--bg)] p-8 transition-colors duration-500 hover:bg-[color-mix(in_srgb,var(--fg)_6%,transparent)] sm:p-12"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-6 font-serif text-[7rem] font-light leading-none opacity-[0.05] transition-opacity duration-500 group-hover:opacity-10 sm:text-[9rem]"
              >
                {s.n}
              </span>
              <span className="font-serif text-sm text-accent">{s.n}</span>
              <h3 className="mt-4 font-serif text-2xl font-light tracking-tight sm:text-3xl">
                {s.title}
              </h3>
              <p className="mt-4 max-w-sm leading-relaxed opacity-70">
                {s.body}
              </p>
              <span
                aria-hidden
                className="mt-6 inline-block text-accent opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100"
              >
                →
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
