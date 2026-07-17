const words = [
  "Estrategia",
  "Contenido",
  "Comunidad",
  "Crecimiento orgánico",
  "Identidad de marca",
];

/** Cinta editorial de palabras clave, reutiliza la animación de marquee. */
export default function Ticker() {
  const row = [...words, ...words];
  return (
    <div
      aria-hidden
      className="flex select-none overflow-hidden border-y border-hair py-4"
    >
      <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
        {row.map((w, i) => (
          <span key={`${w}-${i}`} className="flex items-center gap-8">
            <span className="whitespace-nowrap font-serif text-xl font-light italic tracking-tight opacity-60 sm:text-2xl">
              {w}
            </span>
            <span className="text-sm text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
