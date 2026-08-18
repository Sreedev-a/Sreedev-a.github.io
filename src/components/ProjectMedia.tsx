"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useState } from "react";

export function ProjectMedia({ src, alt, category, variant = "standard", priority = false, number }: { src: string; alt: string; category: string; variant?: "featured" | "standard"; priority?: boolean; number: string }) {
  const [failed, setFailed] = useState(false);

  return <div className={`project-visual project-visual-${variant}`}>
    <span>{number}</span>
    <div className="project-media-frame">
      {!failed ? <Image src={src} alt={alt} fill sizes={priority ? "(max-width: 800px) 100vw, 48vw" : "(max-width: 800px) 100vw, 45vw"} priority={priority} onError={() => setFailed(true)} /> : <div className="project-media-fallback" role="img" aria-label={`${alt} image placeholder`}><ImageIcon/><small>Project preview</small></div>}
      <div className="project-media-shade" />
      <div className="project-media-meta"><span>{category}</span></div>
    </div>
  </div>;
}
