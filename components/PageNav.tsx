import Link from "next/link";
import { site } from "@/lib/content";

/** Cabecera simple para páginas internas (no usa anclas del home). */
export default function PageNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 py-5">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-serif text-lg tracking-tight"
          aria-label="Volver al inicio"
        >
          {site.name}
          <span className="text-accent">.</span>
        </Link>
        <Link
          href="/#contacto"
          className="group inline-flex items-center gap-2 rounded-full border border-hair px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
        >
          Hablemos
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </header>
  );
}
