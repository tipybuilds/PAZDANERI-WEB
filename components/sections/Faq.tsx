"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Faq() {
  // El bloque entero arranca colapsado: en la landing es una sola línea.
  const [sectionOpen, setSectionOpen] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24"
    >
      <Reveal className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-2xl border border-hair">
          {/* Desplegable principal */}
          <button
            type="button"
            onClick={() => setSectionOpen((v) => !v)}
            aria-expanded={sectionOpen}
            data-cursor-hover
            className="group flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-[color-mix(in_srgb,var(--fg)_4%,transparent)]"
          >
            <span className="flex-1 font-serif text-xl font-light tracking-tight sm:text-2xl">
              Preguntas frecuentes
            </span>
            <span className="text-xs uppercase tracking-[0.18em] opacity-40">
              FAQ
            </span>
            <span className="relative ml-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-hair">
              <span className="absolute h-px w-3 bg-[var(--fg)] opacity-70" />
              <motion.span
                className="absolute h-px w-3 bg-[var(--fg)] opacity-70"
                animate={{ rotate: sectionOpen ? 0 : 90 }}
                transition={{ duration: 0.3, ease }}
              />
            </span>
          </button>

          {/* Contenido siempre en el DOM (crawlable); colapsa con grid 0fr→1fr */}
          <div
            className="grid transition-[grid-template-rows] duration-500 ease-smooth"
            style={{ gridTemplateRows: sectionOpen ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <ul className="border-t border-hair">
                {faqs.map((f, i) => {
                  const isOpen = open === i;
                  return (
                    <li
                      key={f.q}
                      className="border-b border-hair last:border-b-0"
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        data-cursor-hover
                        className="group flex w-full items-center gap-3 px-5 py-3.5 text-left transition-colors hover:bg-[color-mix(in_srgb,var(--fg)_4%,transparent)]"
                      >
                        <span className="flex-1 text-sm font-medium sm:text-base">
                          {f.q}
                        </span>
                        <span className="relative ml-2 flex h-6 w-6 shrink-0 items-center justify-center">
                          <span className="absolute h-px w-3 bg-[var(--fg)] opacity-60" />
                          <motion.span
                            className="absolute h-px w-3 bg-[var(--fg)] opacity-60"
                            animate={{ rotate: isOpen ? 0 : 90 }}
                            transition={{ duration: 0.3, ease }}
                          />
                        </span>
                      </button>

                      <div
                        className="grid transition-[grid-template-rows] duration-300 ease-smooth"
                        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-4 text-sm leading-relaxed opacity-70">
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
