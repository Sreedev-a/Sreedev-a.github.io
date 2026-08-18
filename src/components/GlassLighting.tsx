"use client";

import { useEffect } from "react";

export function GlassLighting() {
  useEffect(() => {
    const precisePointer = matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    if (!precisePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.querySelectorAll<HTMLElement>(".glass, .nav-wrap.scrolled").forEach((element) => {
          const bounds = element.getBoundingClientRect();
          const near = event.clientX >= bounds.left - 140 && event.clientX <= bounds.right + 140 && event.clientY >= bounds.top - 140 && event.clientY <= bounds.bottom + 140;
          element.style.setProperty("--light-x", `${event.clientX - bounds.left}px`);
          element.style.setProperty("--light-y", `${event.clientY - bounds.top}px`);
          element.style.setProperty("--light-opacity", near ? "1" : "0");
        });
      });
    };

    addEventListener("pointermove", move, { passive: true });
    return () => { removeEventListener("pointermove", move); cancelAnimationFrame(frame); };
  }, []);

  return null;
}
