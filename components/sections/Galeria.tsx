"use client";

import Masonry, { type MasonryItem } from "@/components/Masonry";
import { Reveal, RevealText } from "@/components/Reveal";

// Placeholder imagery — reemplazar por contenido real (fotos de campañas, feeds, etc.)
const items: MasonryItem[] = [
  { id: "1", img: "https://picsum.photos/id/1015/600/900", url: "#", height: 760 },
  { id: "2", img: "https://picsum.photos/id/1011/600/750", url: "#", height: 520 },
  { id: "3", img: "https://picsum.photos/id/1020/600/800", url: "#", height: 620 },
  { id: "4", img: "https://picsum.photos/id/1025/600/600", url: "#", height: 480 },
  { id: "5", img: "https://picsum.photos/id/1039/600/900", url: "#", height: 800 },
  { id: "6", img: "https://picsum.photos/id/1043/600/700", url: "#", height: 540 },
  { id: "7", img: "https://picsum.photos/id/1050/600/820", url: "#", height: 660 },
  { id: "8", img: "https://picsum.photos/id/1062/600/640", url: "#", height: 500 },
  { id: "9", img: "https://picsum.photos/id/1074/600/880", url: "#", height: 720 },
  { id: "10", img: "https://picsum.photos/id/1080/600/700", url: "#", height: 560 },
];

export default function Galeria() {
  return (
    <section
      id="galeria"
      className="mx-auto max-w-[1600px] px-5 py-28 sm:px-8 sm:py-40"
    >
      <div className="mb-12 flex items-end justify-between gap-6">
        <h2 className="font-serif text-4xl font-light leading-none tracking-tight sm:text-7xl">
          <RevealText text="Galería" />
        </h2>
        <Reveal>
          <p className="hidden max-w-xs text-sm leading-relaxed opacity-50 sm:block">
            Una muestra del trabajo visual: contenido, campañas y feeds que
            construyen marca.
          </p>
        </Reveal>
      </div>

      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover
        hoverScale={0.95}
        blurToFocus
        colorShiftOnHover={false}
      />
    </section>
  );
}
