"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/content";
import { RevealText } from "@/components/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const accents = [
  "linear-gradient(120deg,#c8a96a,#6b4f2a)",
  "linear-gradient(120deg,#8a9a5b,#384226)",
  "linear-gradient(120deg,#b6705a,#5a2d24)",
  "linear-gradient(120deg,#7a8aa0,#2f3a4a)",
  "linear-gradient(120deg,#c9a26b,#7a5230)",
  "linear-gradient(120deg,#a06b8a,#43243a)",
];

export default function Projects() {
  const [open, setOpen] = useState<string | null>(projects[0]?.slug ?? null);

  return (
    <section
      id="proyectos"
      className="mx-auto max-w-[1600px] px-5 py-28 sm:px-8 sm:py-40"
    >
      <div className="mb-12 flex items-end justify-between gap-6">
        <h2 className="font-serif text-4xl font-light leading-none tracking-tight sm:text-7xl">
          <RevealText text="Proyectos" />
        </h2>
        <p className="hidden text-sm uppercase tracking-[0.18em] opacity-50 sm:block">
          Toca para expandir
        </p>
      </div>

      <ul className="border-t border-hair">
        {projects.map((p, i) => {
          const isOpen = open === p.slug;
          return (
            <li key={p.slug} className="border-b border-hair">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : p.slug)}
                aria-expanded={isOpen}
                data-cursor-hover
                className="group flex w-full items-center gap-4 py-7 text-left sm:py-9"
              >
                <span className="hidden w-10 shrink-0 font-serif text-sm opacity-40 sm:block">
                  0{i + 1}
                </span>

                <span className="flex-1">
                  <span
                    className={`block font-serif text-3xl font-light tracking-tight transition-all duration-500 ease-smooth sm:text-5xl ${
                      isOpen
                        ? "translate-x-0 text-accent"
                        : "group-hover:translate-x-3"
                    }`}
                  >
                    {p.name}
                  </span>
                </span>

                <span className="hidden shrink-0 text-xs uppercase tracking-[0.16em] opacity-50 md:block">
                  {p.plan}
                </span>

                {/* expand indicator */}
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
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-8 pb-12 sm:grid-cols-12 sm:gap-10 sm:pl-14">
                      {/* accent panel */}
                      <motion.div
                        initial={{ scale: 0.96, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease, delay: 0.1 }}
                        className="relative col-span-12 hidden h-56 overflow-hidden rounded-xl sm:col-span-4 sm:block"
                        style={{ background: accents[i % accents.length] }}
                      >
                        <div className="flex h-full items-end p-5">
                          <span className="font-serif text-xl text-white/90">
                            {p.name}
                          </span>
                        </div>
                      </motion.div>

                      {/* text */}
                      <div className="col-span-12 sm:col-span-5">
                        <p className="text-xs uppercase tracking-[0.18em] opacity-50">
                          {p.tagline}
                        </p>
                        <p className="mt-4 max-w-md text-lg leading-relaxed opacity-80">
                          {p.description}
                        </p>
                        {p.details && (
                          <p className="mt-4 text-sm italic opacity-60">
                            {p.details}
                          </p>
                        )}
                      </div>

                      {/* deliverables */}
                      <div className="col-span-12 sm:col-span-3">
                        <div className="flex items-center justify-between border-b border-hair pb-2 text-xs uppercase tracking-[0.18em] opacity-50">
                          <span>{p.plan}</span>
                          <span>{p.year}</span>
                        </div>
                        <ul className="mt-4 space-y-2">
                          {p.deliverables.map((d, di) => (
                            <motion.li
                              key={d}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.5,
                                ease,
                                delay: 0.15 + di * 0.06,
                              }}
                              className="flex items-center gap-2 text-sm opacity-80"
                            >
                              <span className="text-accent">—</span>
                              {d}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
