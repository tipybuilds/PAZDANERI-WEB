"use client";

import { clients } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export default function Clients() {
  const row = [...clients, ...clients];
  return (
    <section id="clientes" className="overflow-hidden py-20 sm:py-28">
      <div className="mx-auto mb-12 max-w-[1600px] px-5 sm:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] opacity-50">
            (Marcas que han confiado)
          </p>
        </Reveal>
      </div>

      <div className="group relative flex select-none overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused] sm:gap-24 sm:pr-24">
          {row.map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="whitespace-nowrap font-serif text-4xl font-light tracking-tight opacity-40 transition-opacity duration-300 hover:opacity-100 sm:text-6xl"
            >
              {c}
              <span className="text-accent">.</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
