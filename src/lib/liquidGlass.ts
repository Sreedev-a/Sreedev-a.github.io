/**
 * liquidGlass.ts — Optical Liquid Glass Refraction Engine
 *
 * Simulates physical light refraction through curved glass using Canvas 2D
 * displacement maps fed into SVG feDisplacementMap filters.
 *
 * Features:
 * - Real optical curvature/lens distortion along perimeter
 * - Multi-pass RGB chromatic aberration (prismatic color fringing)
 * - 100% crystal-clear neutral interior (zero distortion, zero blur in center)
 * - Automatic ResizeObserver support
 * - Clean fallback for non-Chromium browsers
 */

export interface LiquidGlassOptions {
  width?: number;
  height?: number;
  borderRadius?: number;
  scale?: number;             // Displacement strength (negative = magnifying refraction bulge)
  aberration?: [number, number, number]; // [r, g, b] scale offsets for chromatic aberration
  blur?: number;              // Edge blur for the center neutralization zone
  border?: number;            // Inset fraction of min(w, h) defining the refractive rim
  lightness?: number;         // Center neutralization lightness (50% = zero displacement)
  alpha?: number;             // Center neutralization opacity (0.93)
  frost?: number;             // Tint opacity (0 = 100% crystal clear)
  saturation?: number;        // Backdrop saturation multiplier
  displaceBlur?: number;
  fallbackFilter?: string;
  filterId?: string;
}

export interface LiquidGlassConfig {
  width: number;
  height: number;
  radius: number;
  scale: number;
  border: number;
  lightness: number;
  alpha: number;
  blur: number;
  r: number;
  g: number;
  b: number;
  frost: number;
  saturation: number;
  displace: number;
}

export interface LiquidGlassInstance {
  isActive: boolean;
  filterElement: SVGElement;
  update: (opts?: Partial<LiquidGlassOptions>) => void;
  destroy: () => void;
}

export const isChromium =
  typeof navigator !== "undefined" &&
  (/Chrome\//.test(navigator.userAgent) ||
    /Chromium\//.test(navigator.userAgent) ||
    /Edg\//.test(navigator.userAgent) ||
    /Arc\//.test(navigator.userAgent));

const _mapCache = new Map<string, string>();
let _instanceCount = 0;

export function resolveConfig(el: HTMLElement, opts: LiquidGlassOptions): LiquidGlassConfig {
  const rect = el.getBoundingClientRect();
  const ab = opts.aberration ?? [0, 10, 20];
  const computedRadius =
    typeof window !== "undefined"
      ? parseFloat(window.getComputedStyle(el).borderRadius) || 28
      : 28;

  return {
    width: opts.width ?? Math.max(Math.round(rect.width), 10),
    height: opts.height ?? Math.max(Math.round(rect.height), 10),
    radius: opts.borderRadius ?? computedRadius,
    scale: opts.scale ?? -160,
    border: opts.border ?? 0.08,
    lightness: opts.lightness ?? 50,
    alpha: opts.alpha ?? 0.93,
    blur: opts.blur ?? 11,
    r: ab[0],
    g: ab[1],
    b: ab[2],
    frost: opts.frost ?? 0,
    saturation: opts.saturation ?? 1.1,
    displace: opts.displaceBlur ?? 0,
  };
}

/**
 * Generates an SVG displacement map on a hidden 2D canvas:
 * - Red linear gradient encodes X displacement
 * - Blue linear gradient encodes Y displacement
 * - Blurred inset 50% neutral-gray rounded rect neutralizes center to 0 displacement
 */
export function buildDisplacementMap(c: LiquidGlassConfig): string {
  const key = `${c.width}:${c.height}:${c.radius}:${c.scale}:${c.border}:${c.blur}:${c.lightness}:${c.alpha}`;
  const cached = _mapCache.get(key);
  if (cached) return cached;

  const maxDisplace = Math.max(Math.abs(c.scale) * 0.5, 20);
  const padX = Math.ceil(maxDisplace);
  const padY = Math.ceil(maxDisplace);
  const totalW = c.width + padX * 2;
  const totalH = c.height + padY * 2;

  const canvas = document.createElement("canvas");
  canvas.width = totalW;
  canvas.height = totalH;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  // 1. Fill base with neutral gray (RGB 128, 128, 128 = ZERO displacement)
  ctx.fillStyle = "rgb(128, 128, 128)";
  ctx.fillRect(0, 0, totalW, totalH);

  const ox = padX;
  const oy = padY;

  ctx.save();
  ctx.beginPath();
  if (typeof ctx.roundRect === "function") {
    ctx.roundRect(ox, oy, c.width, c.height, c.radius);
  } else {
    ctx.rect(ox, oy, c.width, c.height);
  }
  ctx.clip();

  ctx.fillStyle = "#000000";
  ctx.fillRect(ox, oy, c.width, c.height);

  // 2. Red gradient for X-axis displacement
  const redGrad = ctx.createLinearGradient(ox + c.width, oy, ox, oy);
  redGrad.addColorStop(0, "#000000");
  redGrad.addColorStop(1, "#ff0000");
  ctx.fillStyle = redGrad;
  ctx.fillRect(ox, oy, c.width, c.height);

  // 3. Blue gradient for Y-axis displacement (difference composite combines X & Y disjointly)
  ctx.globalCompositeOperation = "difference";
  const blueGrad = ctx.createLinearGradient(ox, oy, ox, oy + c.height);
  blueGrad.addColorStop(0, "#000000");
  blueGrad.addColorStop(1, "#0000ff");
  ctx.fillStyle = blueGrad;
  ctx.fillRect(ox, oy, c.width, c.height);

  // 4. Inset blurred neutral center: resets interior displacement back to 0
  ctx.globalCompositeOperation = "source-over";
  const borderPx = Math.min(c.width, c.height) * (c.border * 0.5);
  ctx.filter = `blur(${c.blur}px)`;
  ctx.fillStyle = `hsla(0, 0%, ${c.lightness}%, ${c.alpha})`;
  ctx.beginPath();
  if (typeof ctx.roundRect === "function") {
    ctx.roundRect(
      ox + borderPx,
      oy + borderPx,
      Math.max(c.width - borderPx * 2, 0),
      Math.max(c.height - borderPx * 2, 0),
      Math.max(c.radius - borderPx, 0)
    );
  } else {
    ctx.rect(
      ox + borderPx,
      oy + borderPx,
      Math.max(c.width - borderPx * 2, 0),
      Math.max(c.height - borderPx * 2, 0)
    );
  }
  ctx.fill();
  ctx.restore();

  const uri = canvas.toDataURL();
  _mapCache.set(key, uri);
  return uri;
}

interface FilterRefs {
  svg: SVGSVGElement;
  feImage: Element;
  red: Element;
  green: Element;
  blue: Element;
  blur: Element;
  filter: Element;
}

export function createFilterSVG(id: string): FilterRefs {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.style.cssText = "position:absolute;width:0;height:0;pointer-events:none;";
  svg.innerHTML = `
    <defs>
      <filter id="${id}" color-interpolation-filters="sRGB" x="-38%" y="-188%" width="176%" height="476%">
        <feImage result="map" preserveAspectRatio="none" />
        <feDisplacementMap in="SourceGraphic" in2="map" xChannelSelector="R" yChannelSelector="B" result="dispRed" data-channel="red" />
        <feColorMatrix in="dispRed" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red" />
        <feDisplacementMap in="SourceGraphic" in2="map" xChannelSelector="R" yChannelSelector="B" result="dispGreen" data-channel="green" />
        <feColorMatrix in="dispGreen" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green" />
        <feDisplacementMap in="SourceGraphic" in2="map" xChannelSelector="R" yChannelSelector="B" result="dispBlue" data-channel="blue" />
        <feColorMatrix in="dispBlue" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue" />
        <feBlend in="red" in2="green" mode="screen" result="rg" />
        <feBlend in="rg" in2="blue" mode="screen" result="output" />
        <feGaussianBlur in="output" stdDeviation="0" />
      </filter>
    </defs>
  `;

  const filter = svg.querySelector("filter")!;
  const feImage = svg.querySelector("feImage")!;
  const red = svg.querySelector('[data-channel="red"]')!;
  const green = svg.querySelector('[data-channel="green"]')!;
  const blue = svg.querySelector('[data-channel="blue"]')!;
  const blur = svg.querySelector("feGaussianBlur")!;

  return { svg, feImage, red, green, blue, blur, filter };
}

function applyConfig(c: LiquidGlassConfig, refs: FilterRefs) {
  const uri = buildDisplacementMap(c);
  const maxD = Math.max(Math.abs(c.scale) * 0.5, 20);
  const pctX = Math.ceil((maxD / c.width) * 100);
  const pctY = Math.ceil((maxD / c.height) * 100);

  refs.filter.setAttribute("x", `-${pctX}%`);
  refs.filter.setAttribute("y", `-${pctY}%`);
  refs.filter.setAttribute("width", `${100 + pctX * 2}%`);
  refs.filter.setAttribute("height", `${100 + pctY * 2}%`);

  refs.feImage.setAttributeNS("http://www.w3.org/1999/xlink", "href", uri);
  refs.feImage.setAttribute("href", uri);

  refs.red.setAttribute("scale", String(c.scale + c.r));
  refs.green.setAttribute("scale", String(c.scale + c.g));
  refs.blue.setAttribute("scale", String(c.scale + c.b));
  refs.blur.setAttribute("stdDeviation", String(c.displace));
}

export function createLiquidGlass(
  element: HTMLElement,
  options: LiquidGlassOptions = {}
): LiquidGlassInstance {
  const fallback = options.fallbackFilter ?? "blur(16px) saturate(1.2)";

  if (!isChromium) {
    const prev = element.style.backdropFilter;
    const prevWebkit = element.style.getPropertyValue("-webkit-backdrop-filter");
    element.style.backdropFilter = fallback;
    element.style.setProperty("-webkit-backdrop-filter", fallback);
    const dummySvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    return {
      isActive: false,
      filterElement: dummySvg,
      update() {},
      destroy() {
        element.style.backdropFilter = prev;
        element.style.setProperty("-webkit-backdrop-filter", prevWebkit);
      },
    };
  }

  const id = options.filterId ?? `liquid-glass-${++_instanceCount}`;
  const refs = createFilterSVG(id);
  document.body.appendChild(refs.svg);

  let currentOpts = { ...options };
  let config = resolveConfig(element, currentOpts);
  applyConfig(config, refs);

  const applyStyles = (c: LiquidGlassConfig) => {
    element.style.backdropFilter = `blur(16px) saturate(${c.saturation})`;
    element.style.setProperty(
      "-webkit-backdrop-filter",
      `blur(16px) saturate(${c.saturation})`
    );
    if (c.frost > 0) {
      element.style.background = `hsl(0 0% 0% / ${c.frost})`;
    }
  };

  applyStyles(config);

  let resizeRaf = 0;
  const ro = new ResizeObserver(() => {
    cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(() => {
      if (currentOpts.width == null || currentOpts.height == null) {
        config = resolveConfig(element, currentOpts);
        applyConfig(config, refs);
        applyStyles(config);
      }
    });
  });
  ro.observe(element);

  return {
    isActive: true,
    filterElement: refs.svg,
    update(newOpts) {
      currentOpts = { ...currentOpts, ...newOpts };
      config = resolveConfig(element, currentOpts);
      applyConfig(config, refs);
      applyStyles(config);
    },
    destroy() {
      ro.disconnect();
      cancelAnimationFrame(resizeRaf);
      refs.svg.remove();
      element.style.backdropFilter = "";
      element.style.setProperty("-webkit-backdrop-filter", "");
      element.style.background = "";
    },
  };
}

/**
 * React hook to attach Liquid Glass optical refraction to an element
 */
import { useEffect, useRef, useState } from "react";

export function useLiquidGlass(
  ref: React.RefObject<HTMLElement | null>,
  options: LiquidGlassOptions = {}
): { isActive: boolean; instance: LiquidGlassInstance | null } {
  const [isActive, setIsActive] = useState(false);
  const instanceRef = useRef<LiquidGlassInstance | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const inst = createLiquidGlass(el, options);
    instanceRef.current = inst;
    setIsActive(inst.isActive);

    return () => {
      inst.destroy();
      instanceRef.current = null;
    };
  }, [
    ref,
    options.borderRadius,
    options.scale,
    options.blur,
    options.border,
    options.frost,
    options.saturation,
  ]);

  return { isActive, instance: instanceRef.current };
}
