"use client";

import { site } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-5 pb-8 pt-4 sm:px-8">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-3 text-xs uppercase tracking-[0.18em] opacity-60 sm:flex-row sm:items-center">
        <span>
          © {year} {site.name}
        </span>
        <span>Gestión estratégica de redes sociales</span>
        <a href="#inicio" className="hover:text-accent">
          Volver arriba ↑
        </a>
      </div>
    </footer>
  );
}
