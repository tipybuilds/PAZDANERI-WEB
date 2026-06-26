"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, site } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";
import GlassSurface from "./GlassSurface";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Blurred backing so the menu never mixes with the content behind it */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backdropFilter: "blur(24px) saturate(1.3)",
            WebkitBackdropFilter: "blur(24px) saturate(1.3)",
            background: "color-mix(in srgb, var(--bg) 72%, transparent)",
            maskImage: "linear-gradient(to bottom, #000 70%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, #000 70%, transparent)",
          }}
        />
        <div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-5 sm:px-8">
          <a
            href="#inicio"
            className="font-serif text-lg tracking-tight"
            aria-label="Inicio"
          >
            {site.name}
            <span className="text-accent">.</span>
          </a>

          <div className="hidden md:block">
            <GlassSurface
              width="auto"
              height={48}
              borderRadius={999}
              displace={0.5}
              distortionScale={-150}
              redOffset={0}
              greenOffset={8}
              blueOffset={16}
              brightness={60}
              opacity={0.9}
              mixBlendMode="normal"
              className="px-2"
            >
              <nav className="flex items-center gap-7 px-5">
                {nav.slice(1).map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group relative text-xs uppercase tracking-[0.18em] opacity-70 transition-opacity hover:opacity-100"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--fg)] transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </nav>
            </GlassSurface>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Abrir menú"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hair md:hidden"
            >
              <span className="flex flex-col gap-1">
                <span className="block h-px w-4 bg-[var(--fg)]" />
                <span className="block h-px w-4 bg-[var(--fg)]" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[var(--bg)] md:hidden"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <span className="font-serif text-lg">{site.name}</span>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hair text-xl"
              >
                ×
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="font-serif text-4xl tracking-tight"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
