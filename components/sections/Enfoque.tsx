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
              className="group relative bg-[var(--bg)] p-8 transition-colors duration-500 hover:bg-[color-mix(in_srgb,var(--fg)_6%,transparent)] sm:p-12"
            >
              <span className="font-serif text-sm text-accent">{s.n}</span>
              <h3 className="mt-4 font-serif text-2xl font-light tracking-tight sm:text-3xl">
                {s.title}
              </h3>
              <p className="mt-4 max-w-sm leading-relaxed opacity-70">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
