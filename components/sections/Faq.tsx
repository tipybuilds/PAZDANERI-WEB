"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/content";
import { Reveal, RevealText } from "@/components/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="mx-auto max-w-[1600px] px-5 py-28 sm:px-8 sm:py-40"
    >
      <div className="mb-12 max-w-3xl">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.22em] opacity-50">
            (Preguntas frecuentes)
          </p>
        </Reveal>
        <h2 className="font-serif text-3xl font-light leading-[1.12] tracking-tight sm:text-5xl">
          <RevealText text="Lo que suelen preguntarme antes de empezar." />
        </h2>
      </div>

      <ul className="border-t border-hair">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <li key={f.q} className="border-b border-hair">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                data-cursor-hover
                className="group flex w-full items-start gap-4 py-7 text-left"
              >
                <span className="flex-1 font-serif text-xl font-light tracking-tight sm:text-2xl">
                  {f.q}
                </span>
                <span className="relative ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hair">
                  <span className="absolute h-px w-3.5 bg-[var(--fg)]" />
                  <motion.span
                    className="absolute h-px w-3.5 bg-[var(--fg)]"
                    animate={{ rotate: isOpen ? 0 : 90 }}
                    transition={{ duration: 0.4, ease }}
                  />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-8 text-lg leading-relaxed opacity-75">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
