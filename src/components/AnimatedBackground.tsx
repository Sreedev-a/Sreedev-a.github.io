"use client";

import { useEffect, useRef } from "react";
import styles from "./AnimatedBackground.module.css";

// 10 Vivid celestial colors for bright, punchy scintillation
const STAR_PALETTES: [number, number, number][] = [
  [255, 255, 255], // Diamond White
  [34, 211, 238],  // Electric Cyan
  [96, 165, 250],  // Vivid Azure
  [168, 85, 247],  // Deep Violet
  [244, 114, 182], // Radiant Magenta
  [251, 191, 36],  // Starlight Amber Gold
  [52, 211, 153],  // Aurora Mint
  [255, 107, 107], // Supernova Coral
  [192, 132, 252], // Mystic Lavender
  [56, 189, 248],  // Bright Sky Blue
];

type Star = {
  x: number;
  y: number;
  radius: number;
  depth: number;
  twinkleSpeed: number;
  shimmerSpeed: number;
  phase: number;
  colorSpeed: number;
  hasSpikes: boolean;
  spikeLength: number;
  repelX: number;
  repelY: number;
};

type ShootingStar = {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
  color: [number, number, number];
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
    const limitedDevice =
      (device.hardwareConcurrency || 8) <= 4 ||
      (device.deviceMemory ?? 8) <= 4 ||
      device.connection?.saveData === true;

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let nextShootingStarTime = 1.5;
    let frame = 0;
    let lastTime = 0;
    let elapsed = 0;
    let needsResize = true;
    let scroll = window.scrollY;
    let interval = 1000 / 60; // 60 fps

    function resize() {
      if (!canvas || !context) return;
      width = window.innerWidth;
      height = window.innerHeight;
      const small = width < 768 || limitedDevice;
      const ratio = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      interval = 1000 / (small ? 30 : 60);

      const count = small
        ? Math.max(75, Math.min(130, Math.round((width * height) / 7500)))
        : Math.max(160, Math.min(260, Math.round((width * height) / 5000)));

      let seed = 42069;
      const random = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };

      stars = Array.from({ length: count }, () => {
        const depth = random();
        // Remove most oversized stars; only ~3.5% are hero accents, ~20% are mid
        const isHero = depth > 0.965;
        const isMid = depth > 0.76 && !isHero;

        return {
          x: random() * width,
          y: random() * height,
          radius: isHero
            ? 1.35 + random() * 0.35
            : isMid
            ? 0.85 + random() * 0.35
            : 0.5 + random() * 0.3,
          depth,
          twinkleSpeed: 2.2 + random() * 3.5,
          shimmerSpeed: 6.0 + random() * 8.0,
          phase: random() * Math.PI * 2,
          colorSpeed: 0.25 + random() * 0.55,
          hasSpikes: isHero && random() > 0.6,
          spikeLength: 4.5 + random() * 4,
          repelX: 0,
          repelY: 0,
        };
      });

      shootingStars = Array.from({ length: 3 }, () => ({
        x: 0,
        y: 0,
        length: 0,
        speed: 0,
        angle: Math.PI / 4,
        opacity: 0,
        active: false,
        color: STAR_PALETTES[0],
      }));

      needsResize = false;
    }

    let mouseX = -9999;
    let mouseY = -9999;
    let isMouseActive = false;

    function spawnShootingStar() {
      const star = shootingStars.find((s) => !s.active);
      if (!star) return;
      star.x = Math.random() * (width * 0.95);
      star.y = Math.random() * (height * 0.45);
      star.length = 100 + Math.random() * 110;
      star.speed = 850 + Math.random() * 650;
      star.angle = Math.PI * 0.22 + (Math.random() - 0.5) * 0.15;
      star.opacity = 1.0;
      star.active = true;
      star.color = STAR_PALETTES[Math.floor(Math.random() * STAR_PALETTES.length)];
    }

    type GlassLensBox = {
      left: number;
      top: number;
      right: number;
      bottom: number;
      cx: number;
      cy: number;
      w: number;
      h: number;
      radius: number;
    };

    let glassLensBoxes: GlassLensBox[] = [];
    let glassElements: HTMLElement[] = [];
    let lastBoxScanTime = 0;

    function scanGlassElements() {
      glassElements = Array.from(document.querySelectorAll<HTMLElement>(".glass"));
    }

    function updateGlassLensBoxes() {
      if (glassElements.length === 0) scanGlassElements();
      const boxes: GlassLensBox[] = [];
      const viewW = width || window.innerWidth;
      const viewH = height || window.innerHeight;

      for (let i = 0; i < glassElements.length; i++) {
        const el = glassElements[i];
        if (!el.isConnected) continue;
        const r = el.getBoundingClientRect();
        if (r.bottom >= -20 && r.top <= viewH + 20 && r.right >= -20 && r.left <= viewW + 20) {
          const w = r.width;
          const h = r.height;
          if (w > 0 && h > 0) {
            boxes.push({
              left: r.left,
              top: r.top,
              right: r.right,
              bottom: r.bottom,
              cx: r.left + w * 0.5,
              cy: r.top + h * 0.5,
              w,
              h,
              radius: Math.min(32, Math.min(w, h) * 0.16),
            });
          }
        }
      }
      glassLensBoxes = boxes;
    }

    function draw(delta: number) {
      if (!context || !root) return;
      if (needsResize) resize();

      // Refresh visible glass boxes continuously on scroll & periodically
      if (elapsed - lastBoxScanTime > 180) {
        lastBoxScanTime = elapsed;
        updateGlassLensBoxes();
      }

      const seconds = motion.matches ? 0 : elapsed / 1000;
      const deltaSec = delta / 1000;

      const parallax = motion.matches ? 0 : Math.sin(scroll / 1600) * 25;
      root.style.setProperty("--background-parallax", `${parallax * 0.3}px`);

      context.clearRect(0, 0, width, height);

      if (!motion.matches) {
        nextShootingStarTime -= deltaSec;
        if (nextShootingStarTime <= 0) {
          spawnShootingStar();
          nextShootingStarTime = 3.5 + Math.random() * 4.5;
        }
      }

      const paletteCount = STAR_PALETTES.length;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        const primaryWave = Math.sin(seconds * star.twinkleSpeed + star.phase);
        const shimmerWave = Math.sin(seconds * star.shimmerSpeed + star.phase * 2.7);
        const rawTwinkle = (primaryWave * 0.65 + shimmerWave * 0.35 + 1) / 2;
        const twinkle = Math.pow(Math.max(0, Math.min(1, rawTwinkle)), 1.9);
        const alpha = 0.32 + twinkle * 0.68;

        const colorProgress =
          ((seconds * star.colorSpeed + star.phase) % paletteCount + paletteCount) %
          paletteCount;
        const c1Index = Math.floor(colorProgress);
        const c2Index = (c1Index + 1) % paletteCount;
        const blend = colorProgress - c1Index;
        const c1 = STAR_PALETTES[c1Index];
        const c2 = STAR_PALETTES[c2Index];

        const r = Math.round(c1[0] + (c2[0] - c1[0]) * blend);
        const g = Math.round(c1[1] + (c2[1] - c1[1]) * blend);
        const b = Math.round(c1[2] + (c2[2] - c1[2]) * blend);

        // Calculate natural base position
        const naturalX = star.x + Math.sin(seconds * 0.05 + star.phase) * 14 * star.depth;
        const naturalY =
          star.y +
          Math.cos(seconds * 0.04 + star.phase) * 12 * star.depth -
          parallax * star.depth;

        // Interactive cursor repulsion physics
        let targetPushX = 0;
        let targetPushY = 0;

        if (isMouseActive) {
          const dx = naturalX - mouseX;
          const dy = naturalY - mouseY;
          const dist = Math.hypot(dx, dy);
          const repelRadius = 140; // Interactive field radius around cursor

          if (dist < repelRadius && dist > 0.5) {
            // Smooth ease-out push force: highest near cursor, tapering gently to edge
            const force = Math.pow(1 - dist / repelRadius, 1.5);
            // Move stars away a little (approx 20px - 44px based on depth)
            const pushDist = 40 * (0.65 + star.depth * 0.45);
            targetPushX = (dx / dist) * pushDist * force;
            targetPushY = (dy / dist) * pushDist * force;
          }
        }

        // Fluid spring / ease-out return
        star.repelX += (targetPushX - star.repelX) * 0.15;
        star.repelY += (targetPushY - star.repelY) * 0.15;

        const x = naturalX + star.repelX;
        const y = naturalY + star.repelY;

        // Check optical lens interaction with visible glass boxes
        let lensShiftX = 0;
        let lensShiftY = 0;
        let isInsideGlass = false;
        let chromaticShift = 0;

        for (let b = 0; b < glassLensBoxes.length; b++) {
          const box = glassLensBoxes[b];
          if (x >= box.left && x <= box.right && y >= box.top && y <= box.bottom) {
            // Rounded rectangle distance
            const innerW = Math.max(0, box.w - box.radius * 2);
            const innerH = Math.max(0, box.h - box.radius * 2);
            const qx = Math.max(0, Math.abs(x - box.cx) - innerW * 0.5);
            const qy = Math.max(0, Math.abs(y - box.cy) - innerH * 0.5);
            const distOutside = Math.sqrt(qx * qx + qy * qy) - box.radius;

            if (distOutside <= 0) {
              isInsideGlass = true;
              const edgeDist = Math.abs(distOutside);
              const rimWidth = Math.min(65, Math.min(box.w, box.h) * 0.28);
              const rimFactor = Math.min(1, edgeDist / rimWidth); // 0 at the boundary rim, 1 deep inside

              // Calculate outward boundary normal (nx, ny)
              const signX = x >= box.cx ? 1 : -1;
              const signY = y >= box.cy ? 1 : -1;
              let nx = 0;
              let ny = 0;
              const qDist = Math.hypot(qx, qy);
              if (qDist > 0.001) {
                nx = (qx / qDist) * signX;
                ny = (qy / qDist) * signY;
              } else {
                nx = (x - box.cx) / (innerW * 0.5 || 1);
                ny = (y - box.cy) / (innerH * 0.5 || 1);
              }

              // 1. Snell's Law boundary bend: incoming rays bend inward along the surface normal
              const rimBend = Math.sin((1 - rimFactor) * Math.PI) * 26.0;

              // 2. Optical prism / convex displacement across the volume
              const normX = (x - box.cx) / (box.w * 0.5);
              const normY = (y - box.cy) / (box.h * 0.5);
              const convexShiftX = normX * 24.0 * (0.35 + rimFactor * 0.65);
              const convexShiftY = normY * 24.0 * (0.35 + rimFactor * 0.65);

              // 3. Liquid glass refractive undulation: fluid prism drift through the volume
              const liquidWaveX = Math.sin(y * 0.018 + seconds * 0.85 + star.phase) * 12.0;
              const liquidWaveY = Math.cos(x * 0.018 + seconds * 0.75 + star.phase) * 12.0;

              // Total increased refraction shift inside the box
              lensShiftX = convexShiftX - nx * rimBend + liquidWaveX;
              lensShiftY = convexShiftY - ny * rimBend + liquidWaveY;

              // Directional chromatic dispersion
              const dispDist = Math.hypot(lensShiftX, lensShiftY);
              if (dispDist > 0.4) {
                chromaticShift = Math.min(7.5, dispDist * 0.28 + (1 - rimFactor) * 3.5);
              }

              break;
            }
          }
        }

        const renderX = x + lensShiftX;
        const renderY = y + lensShiftY;
        const starAlpha = isInsideGlass ? Math.min(1, alpha * 1.1) : alpha;

        if (isInsideGlass) {
          // ==========================================================
          // BLURRED STAR RENDERING INSIDE GLASS BOXES
          // Defocused, soft Gaussian bokeh orbs with smooth diffusion
          // No sharp cores, no diffraction spikes, no harsh glare
          // ==========================================================
          const blurRadius = Math.max(5.5, star.radius * (4.2 + star.depth * 2.4));
          const dispDist = Math.hypot(lensShiftX, lensShiftY);

          // Directional chromatic dispersion fringes
          if (chromaticShift > 0.5 && dispDist > 0.1) {
            const dirX = lensShiftX / dispDist;
            const dirY = lensShiftY / dispDist;

            // Warm Red-Orange spectral rim
            const redGrad = context.createRadialGradient(
              renderX - dirX * chromaticShift, renderY - dirY * chromaticShift, 0,
              renderX - dirX * chromaticShift, renderY - dirY * chromaticShift, blurRadius * 0.85
            );
            redGrad.addColorStop(0, `rgba(255, 110, 110, ${starAlpha * 0.22})`);
            redGrad.addColorStop(1, "rgba(255, 110, 110, 0)");
            context.fillStyle = redGrad;
            context.beginPath();
            context.arc(renderX - dirX * chromaticShift, renderY - dirY * chromaticShift, blurRadius * 0.85, 0, Math.PI * 2);
            context.fill();

            // Cool Cyan spectral rim
            const cyanGrad = context.createRadialGradient(
              renderX + dirX * chromaticShift, renderY + dirY * chromaticShift, 0,
              renderX + dirX * chromaticShift, renderY + dirY * chromaticShift, blurRadius * 0.85
            );
            cyanGrad.addColorStop(0, `rgba(60, 215, 255, ${starAlpha * 0.22})`);
            cyanGrad.addColorStop(1, "rgba(60, 215, 255, 0)");
            context.fillStyle = cyanGrad;
            context.beginPath();
            context.arc(renderX + dirX * chromaticShift, renderY + dirY * chromaticShift, blurRadius * 0.85, 0, Math.PI * 2);
            context.fill();
          }

          // Main blurred star bokeh disc (smooth multi-step Gaussian-like dropoff)
          const blurGrad = context.createRadialGradient(
            renderX, renderY, 0,
            renderX, renderY, blurRadius
          );
          blurGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${starAlpha * 0.55})`);
          blurGrad.addColorStop(0.25, `rgba(${r}, ${g}, ${b}, ${starAlpha * 0.38})`);
          blurGrad.addColorStop(0.55, `rgba(${r}, ${g}, ${b}, ${starAlpha * 0.16})`);
          blurGrad.addColorStop(0.85, `rgba(${r}, ${g}, ${b}, ${starAlpha * 0.04})`);
          blurGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          context.fillStyle = blurGrad;
          context.beginPath();
          context.arc(renderX, renderY, blurRadius, 0, Math.PI * 2);
          context.fill();

          // Diffused, out-of-focus soft nucleus for twinkling stars
          if (twinkle > 0.3) {
            const nucleusGrad = context.createRadialGradient(
              renderX, renderY, 0,
              renderX, renderY, blurRadius * 0.42
            );
            nucleusGrad.addColorStop(0, `rgba(255, 255, 255, ${starAlpha * 0.38 * twinkle})`);
            nucleusGrad.addColorStop(0.55, `rgba(${r}, ${g}, ${b}, ${starAlpha * 0.16 * twinkle})`);
            nucleusGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
            context.fillStyle = nucleusGrad;
            context.beginPath();
            context.arc(renderX, renderY, blurRadius * 0.42, 0, Math.PI * 2);
            context.fill();
          }
        } else {
          // ==========================================================
          // CRISP SHARP STAR RENDERING OUTSIDE GLASS BOXES
          // Sharp points, crystalline twinkles, cross diffraction spikes
          // ==========================================================
          const starRadius = star.radius;

          // Subtle outer glow
          if (star.radius > 1.25) {
            context.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.18})`;
            context.beginPath();
            context.arc(renderX, renderY, starRadius * 1.7, 0, Math.PI * 2);
            context.fill();
          }

          // Sharp colored star body
          context.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.95})`;
          context.beginPath();
          context.arc(renderX, renderY, starRadius * (0.85 + twinkle * 0.25), 0, Math.PI * 2);
          context.fill();

          // Sharp pure white core
          const coreSize = Math.max(0.65, starRadius * 0.48);
          context.fillStyle = `rgba(255, 255, 255, ${Math.min(1, 0.6 + twinkle * 0.4)})`;
          context.beginPath();
          context.arc(renderX, renderY, coreSize, 0, Math.PI * 2);
          context.fill();

          // Diffraction cross spikes on bright stars
          if (star.hasSpikes && twinkle > 0.48) {
            const spikeMult = Math.pow((twinkle - 0.48) / 0.52, 1.25);
            const baseSpike = star.spikeLength || 6;
            const currentSpike = baseSpike * spikeMult;
            const spikeAlpha = Math.min(0.85, twinkle * 0.7);

            // Horizontal spike
            context.fillStyle = `rgba(${r}, ${g}, ${b}, ${spikeAlpha})`;
            context.beginPath();
            context.moveTo(renderX - currentSpike, renderY);
            context.lineTo(renderX, renderY - 0.65);
            context.lineTo(renderX + currentSpike, renderY);
            context.lineTo(renderX, renderY + 0.65);
            context.closePath();
            context.fill();

            // Vertical spike
            context.beginPath();
            context.moveTo(renderX, renderY - currentSpike);
            context.lineTo(renderX - 0.65, renderY);
            context.lineTo(renderX, renderY + currentSpike);
            context.lineTo(renderX + 0.65, renderY);
            context.closePath();
            context.fill();

            // White center flare
            context.fillStyle = `rgba(255, 255, 255, ${Math.min(1, twinkle)})`;
            context.beginPath();
            context.arc(renderX, renderY, 0.9, 0, Math.PI * 2);
            context.fill();
          }
        }
      }

      // Draw shooting stars
      if (!motion.matches) {
        for (let i = 0; i < shootingStars.length; i++) {
          const s = shootingStars[i];
          if (!s.active) continue;

          const vx = Math.cos(s.angle) * s.speed * deltaSec;
          const vy = Math.sin(s.angle) * s.speed * deltaSec;
          s.x += vx;
          s.y += vy;
          s.opacity -= deltaSec * 1.2;

          if (s.opacity <= 0 || s.x > width + 150 || s.y > height + 150) {
            s.active = false;
            continue;
          }

          const tailX = s.x - Math.cos(s.angle) * s.length;
          const tailY = s.y - Math.sin(s.angle) * s.length;

          const grad = context.createLinearGradient(tailX, tailY, s.x, s.y);
          grad.addColorStop(0, `rgba(${s.color[0]}, ${s.color[1]}, ${s.color[2]}, 0)`);
          grad.addColorStop(0.65, `rgba(${s.color[0]}, ${s.color[1]}, ${s.color[2]}, ${s.opacity * 0.7})`);
          grad.addColorStop(1, `rgba(255, 255, 255, ${s.opacity})`);

          context.strokeStyle = grad;
          context.lineWidth = 2.0;
          context.lineCap = "round";
          context.beginPath();
          context.moveTo(tailX, tailY);
          context.lineTo(s.x, s.y);
          context.stroke();

          // Head
          context.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
          context.beginPath();
          context.arc(s.x, s.y, 2.2, 0, Math.PI * 2);
          context.fill();
        }
      }
    }

    function tick(time: number) {
      frame = 0;
      if (document.hidden || motion.matches) {
        syncMotion();
        return;
      }
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      if (delta >= interval || needsResize) {
        const clampedDelta = Math.min(delta, 100);
        elapsed += clampedDelta;
        lastTime = time;
        draw(clampedDelta);
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
      draw(16);
      if (!motion.matches) frame = requestAnimationFrame(tick);
    }

    function onResize() {
      needsResize = true;
      scanGlassElements();
      updateGlassLensBoxes();
      if (!document.hidden && (motion.matches || frame === 0)) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(syncMotion);
      }
    }

    function onScroll() {
      scroll = window.scrollY;
      updateGlassLensBoxes();
    }

    function onPointerMove(e: PointerEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseActive = true;
    }

    function onPointerLeave() {
      isMouseActive = false;
      mouseX = -9999;
      mouseY = -9999;
    }

    syncMotion();
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("blur", onPointerLeave);
    document.addEventListener("visibilitychange", syncMotion);
    motion.addEventListener("change", syncMotion);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("blur", onPointerLeave);
      document.removeEventListener("visibilitychange", syncMotion);
      motion.removeEventListener("change", syncMotion);
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.background} aria-hidden="true">
      <div className={styles.glowBlue} />
      <div className={styles.glowPurple} />
      <div className={styles.glowCyan} />
      <canvas ref={canvasRef} className={styles.particles} />
    </div>
  );
}
