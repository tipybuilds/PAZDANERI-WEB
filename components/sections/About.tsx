"use client";

import { Reveal, RevealText } from "@/components/Reveal";

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="relative mx-auto max-w-[1600px] px-5 py-28 sm:px-8 sm:py-40"
    >
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] opacity-50">
              (Sobre mí)
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-9">
          <h2 className="font-serif text-4xl font-light leading-[1.1] tracking-tight sm:text-6xl">
            <RevealText text="Hola, soy Paz." />
            <br />
            <span className="opacity-60">
              <RevealText
                text="Publicista con foco en marketing digital."
                delay={0.15}
              />
            </span>
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed opacity-80">
                Ayudo a ordenar ideas, tomar decisiones y ejecutar estrategias
                que funcionen en la práctica. Nada de humo: trabajo concreto,
                medible y sostenido en el tiempo.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg leading-relaxed opacity-80">
                Acompaño a marcas, PYMES y emprendedores a construir una
                presencia digital con identidad propia, que conecta de verdad
                con su audiencia.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hair bg-[color-mix(in_srgb,var(--fg)_10%,transparent)] sm:grid-cols-3">
            {[
              { n: "07", label: "Marcas acompañadas" },
              { n: "03", label: "Planes a medida" },
              { n: "100%", label: "Foco orgánico" },
            ].map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.08}
                className="bg-[var(--bg)] p-7 sm:p-9"
              >
                <p className="font-serif text-4xl font-light tracking-tight text-accent sm:text-5xl">
                  {s.n}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] opacity-60">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
