"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/content";
import { Reveal, RevealText } from "@/components/Reveal";

const gradients = [
  "linear-gradient(135deg,#c8a96a,#6b4f2a)",
  "linear-gradient(135deg,#8a9a5b,#384226)",
  "linear-gradient(135deg,#b6705a,#5a2d24)",
  "linear-gradient(135deg,#7a8aa0,#2f3a4a)",
  "linear-gradient(135deg,#c9a26b,#7a5230)",
  "linear-gradient(135deg,#a06b8a,#43243a)",
];

export default function Projects() {
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 150, damping: 20, mass: 0.5 });
  const wrapRef = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  return (
    <section
      id="proyectos"
      className="mx-auto max-w-[1600px] px-5 py-28 sm:px-8 sm:py-40"
    >
      <div className="mb-12 flex items-end justify-between gap-6">
        <h2 className="font-serif text-4xl font-light leading-none tracking-tight sm:text-7xl">
          <RevealText text="Proyectos" />
        </h2>
        <Reveal>
          <p className="hidden text-sm uppercase tracking-[0.18em] opacity-50 sm:block">
            Seleccionados
          </p>
        </Reveal>
      </div>

      <div ref={wrapRef} onMouseMove={onMove} className="relative">
        {/* floating preview */}
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3 }}
              style={{ x: sx, y: sy, background: gradients[active % gradients.length] }}
              className="pointer-events-none absolute z-20 hidden h-64 w-80 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl shadow-2xl md:block"
            >
              <div className="flex h-full items-center justify-center">
                <span className="font-serif text-2xl text-white/90">
                  {projects[active].name}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <ul className="border-t border-hair">
          {projects.map((p, i) => (
            <li key={p.slug}>
              <Reveal y={0}>
                <div
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  data-cursor-hover
                  className="group grid grid-cols-12 items-center gap-4 border-b border-hair py-7 transition-colors duration-500 sm:py-10"
                >
                  <span className="col-span-1 hidden font-serif text-sm opacity-40 sm:block">
                    0{i + 1}
                  </span>
                  <div className="col-span-12 sm:col-span-6">
                    <h3 className="font-serif text-3xl font-light tracking-tight transition-transform duration-500 group-hover:translate-x-3 sm:text-5xl">
                      {p.name}
                    </h3>
                  </div>
                  <p className="col-span-12 text-sm opacity-60 sm:col-span-4 sm:text-base">
                    {p.tagline}
                  </p>
                  <span className="col-span-12 text-xs uppercase tracking-[0.16em] opacity-50 sm:col-span-1 sm:text-right">
                    {p.tag}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
