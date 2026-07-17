"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const line1 = "Potencia";
  const line2 = "tus RRSS";

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-12 pt-32 sm:px-8"
    >
      <motion.div style={{ y, opacity }} className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-hair px-4 py-2 text-[10px] uppercase tracking-[0.22em] opacity-80"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Disponible para nuevos proyectos
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="mb-6 max-w-xl text-sm uppercase tracking-[0.22em] opacity-70 sm:text-base"
        >
          Gestión estratégica de redes sociales — marcas, PYMES y emprendedores
        </motion.p>

        <h1 className="font-serif text-10xl font-light leading-[0.92] tracking-[-0.02em]">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease, delay: 0.25 }}
            >
              {line1}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block italic text-accent"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease, delay: 0.38 }}
            >
              {line2}
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-hair pt-6 sm:flex-row sm:items-end">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="max-w-md text-balance text-base leading-relaxed opacity-80"
          >
            Haz crecer tu presencia digital de forma orgánica. Más alcance, más
            conexión real y un trabajo sostenido que impulsa tus ventas.
          </motion.p>
          <motion.a
            href="#contacto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="group inline-flex items-center gap-3 rounded-full border border-hair px-6 py-3 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
          >
            Hablemos
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] opacity-50 sm:flex"
      >
        Scroll
        <span className="h-10 w-px bg-[var(--fg)]">
          <motion.span
            className="block h-3 w-px bg-accent"
            animate={{ y: [0, 28, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>

      {/* warm ambient glows */}
      <div
        aria-hidden
        className="glow-accent -right-[15%] top-[-10%] h-[70vh] w-[70vh] opacity-[0.16]"
      />
      <div
        aria-hidden
        className="glow-accent -left-[20%] bottom-[-25%] h-[55vh] w-[55vh] opacity-[0.08]"
      />
    </section>
  );
}
