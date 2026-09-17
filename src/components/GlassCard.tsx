"use client";

import { HTMLAttributes, forwardRef, useRef, useImperativeHandle } from "react";
import { useLiquidGlass, LiquidGlassOptions } from "@/lib/liquidGlass";

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  liquidGlassOptions?: LiquidGlassOptions;
  disableRefraction?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  function GlassCard({ className = "", children, liquidGlassOptions, disableRefraction = false, ...props }, forwardedRef) {
    const internalRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(forwardedRef, () => internalRef.current as HTMLDivElement);

    useLiquidGlass(disableRefraction ? { current: null } : internalRef, {
      scale: -120,
      border: 0.07,
      blur: 10,
      saturation: 1.12,
      ...liquidGlassOptions,
    });

    return (
      <div
        ref={internalRef}
        className={`glass ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
