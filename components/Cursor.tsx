"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    // Write the transform directly on the event: no rAF hop, no React
    // re-render — the dot is under the pointer on the same frame even
    // when other rAF loops (Lenis, marquees) are busy.
    function move(e: MouseEvent) {
      const el = ref.current;
      if (el) {
        el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    }
    function over(e: MouseEvent) {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [data-cursor-hover]"));
    }
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference will-change-transform"
      style={{ transform: "translate3d(-100px, -100px, 0)" }}
    >
      <motion.div
        className="rounded-full bg-white"
        animate={{
          width: hovering ? 48 : 12,
          height: hovering ? 48 : 12,
          x: hovering ? -24 : -6,
          y: hovering ? -24 : -6,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.4 }}
      />
    </div>
  );
}
