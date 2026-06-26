"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Faq() {
  // Todo colapsado por defecto: ocupa lo mínimo en la landing.
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24"
    >
      <Reveal className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl font-light tracking-tight sm:text-3xl">
            Preguntas frecuentes
          </h2>
          <span className="text-xs uppercase tracking-[0.18em] opacity-40">
            FAQ
          </span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-hair">
          <ul>
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
                    className="group flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-[color-mix(in_srgb,var(--fg)_4%,transparent)]"
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

                  {/* Siempre en el DOM (crawlable para SEO); colapsado con altura 0 */}
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.4, ease }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm leading-relaxed opacity-70">
                      {f.a}
                    </p>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
