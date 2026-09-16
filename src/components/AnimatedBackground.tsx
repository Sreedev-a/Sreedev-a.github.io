"use client";

import { useEffect, useRef } from "react";
import styles from "./AnimatedBackground.module.css";

const STAR_COLORS = [
  "135, 195, 255", // Blue
  "100, 225, 240", // Cyan
  "195, 150, 255", // Lavender
  "255, 150, 195", // Rose
  "255, 210, 125", // Gold
  "125, 230, 185", // Mint
  "235, 244, 255", // White
];

type Particle = {
  x: number;
  y: number;
  radius: number;
  phase: number;
  twinkleSpeed: number;
  depth: number;
  colorIndex: number;
};

export function AnimatedBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const device = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean };
    };
    const limitedDevice = (device.hardwareConcurrency || 8) <= 4 ||
      (device.deviceMemory ?? 8) <= 4 || device.connection?.saveData === true;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let frame = 0;
    let lastTime = 0;
    let elapsed = 0;
    let needsResize = true;
    let scroll = window.scrollY;
    let interval = 1000 / 30;

    function resize() {
      if (!canvas || !context) return;
      width = window.innerWidth;
      height = window.innerHeight;
      const small = width < 768 || limitedDevice;
      const ratio = Math.min(window.devicePixelRatio || 1, small ? 1 : 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      interval = 1000 / (small ? 24 : 30);
      const count = Math.min(small ? 28 : 72, Math.max(18, Math.round(width * height / 18000)));
      // Stable placement, generated only on the client; no hydration-time randomness.
      let seed = 73;
      const random = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      particles = Array.from({ length: count }, () => ({
        x: random() * width,
        y: random() * height,
        radius: 0.55 + random() * 1.1,
        phase: random() * Math.PI * 2,
        twinkleSpeed: 0.9 + random() * 1.3,
        depth: 0.35 + random() * 0.65,
        colorIndex: Math.floor(random() * STAR_COLORS.length),
      }));
      needsResize = false;
    }

    function draw() {
      if (!context || !root) return;
      if (needsResize) resize();
      const seconds = motion.matches ? 0 : elapsed / 1000;
      // Bounded parallax keeps the decoration present even at the document footer.
      const parallax = motion.matches ? 0 : Math.sin(scroll / 1800) * 24;
      root.style.setProperty("--background-parallax", `${parallax * 0.4}px`);
      context.clearRect(0, 0, width, height);
      const positions = particles.map((particle) => {
        // Independent 3–7 second pulses: visible twinkling without synchronized flashes.
        const phase = seconds * particle.twinkleSpeed + particle.phase;
        const twinkle = Math.pow((Math.sin(phase) + 1) / 2, 3);
        // Change hue at the dimmest point so each blink reveals a new colour.
        const cycle = Math.floor((phase + Math.PI / 2) / (Math.PI * 2));
        return {
          x: particle.x + Math.sin(seconds * 0.045 + particle.phase) * 22 * particle.depth,
          y: particle.y + Math.cos(seconds * 0.035 + particle.phase) * 18 * particle.depth - parallax * particle.depth,
          alpha: 0.025 + twinkle * (0.55 + particle.depth * 0.3),
          radius: particle.radius * (0.85 + twinkle * 0.35),
          color: STAR_COLORS[(particle.colorIndex + cycle) % STAR_COLORS.length],
        };
      });

      // At most one short link per node and six links in the entire viewport.
      const linked = new Set<number>();
      const linkLimit = width < 768 || limitedDevice ? 3 : 6;
      let links = 0;
      for (let i = 0; i < particles.length && links < linkLimit; i++) {
        if (linked.has(i)) continue;
        let nearest = -1;
        let distance = 155;
        for (let j = i + 1; j < particles.length; j++) {
          if (linked.has(j)) continue;
          const candidate = Math.hypot(positions[i].x - positions[j].x, positions[i].y - positions[j].y);
          if (candidate < distance) { nearest = j; distance = candidate; }
        }
        if (nearest < 0) continue;
        const fade = Math.max(0, Math.sin(seconds * 0.12 + particles[i].phase));
        if (fade <= 0) continue;
        context.strokeStyle = `rgba(116, 189, 214, ${0.065 * fade * (1 - distance / 155)})`;
        context.lineWidth = 0.7;
        context.beginPath();
        context.moveTo(positions[i].x, positions[i].y);
        context.lineTo(positions[nearest].x, positions[nearest].y);
        context.stroke();
        linked.add(i);
        linked.add(nearest);
        links++;
      }

      particles.forEach((particle, index) => {
        const { x, y, alpha, radius, color } = positions[index];
        // Soft halos without per-particle blur filters or shadow rendering.
        context.fillStyle = `rgba(${color}, ${alpha * 0.1})`;
        context.beginPath();
        context.arc(x, y, radius * 3.5, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = `rgba(${color}, ${alpha})`;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();

        // Only the larger stars develop a small, fading glint near their peak.
        const glint = Math.max(0, (alpha - 0.5) / 0.4);
        if (particle.radius > 1.25 && glint > 0) {
          context.strokeStyle = `rgba(${color}, ${glint * 0.28})`;
          context.lineWidth = 0.6;
          context.beginPath();
          context.moveTo(x - radius * 3, y);
          context.lineTo(x + radius * 3, y);
          context.moveTo(x, y - radius * 3);
          context.lineTo(x, y + radius * 3);
          context.stroke();
        }
      });
    }

    function tick(time: number) {
      frame = 0;
      // A frame can observe a new preference before the media change event arrives.
      if (document.hidden || motion.matches) {
        syncMotion();
        return;
      }
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      if (delta >= interval || needsResize) {
        elapsed += Math.min(delta, 100);
        lastTime = time;
        draw();
      }
      frame = requestAnimationFrame(tick);
    }

    function syncMotion() {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      if (!root) return;
      root.dataset.paused = String(document.hidden || motion.matches);
      if (document.hidden) return;
      draw();
      if (!motion.matches) frame = requestAnimationFrame(tick);
    }

    function onResize() {
      needsResize = true;
      // Recheck motion when the resize frame runs: the preference may change
      // while this one-off frame is queued.
      if (!document.hidden && (motion.matches || frame === 0)) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(syncMotion);
      }
    }
    function onScroll() { scroll = window.scrollY; }

    syncMotion();
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", syncMotion);
    motion.addEventListener("change", syncMotion);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", syncMotion);
      motion.removeEventListener("change", syncMotion);
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.background} aria-hidden="true">
      <div className={styles.glowBlue} />
      <div className={styles.glowCyan} />
      <div className={styles.gridDepth}><div className={styles.grid} /></div>
      <canvas ref={canvasRef} className={styles.particles} />
    </div>
  );
}
