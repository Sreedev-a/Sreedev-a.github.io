"use client";

import Image from "next/image";
import { useState } from "react";

const avatarPath = "/avatar/sreedev-avatar.png";

export function AvatarGreeting() {
  const [imageFailed, setImageFailed] = useState(false);

  return <div className="avatar-greeting" aria-label="Sreedev A says hello">
    <div className="avatar-frame">
      {!imageFailed && <Image src={avatarPath} alt="Sreedev A" fill sizes="(max-width: 800px) 54px, 70px" priority onError={() => setImageFailed(true)} />}
      {imageFailed && <span className="avatar-initials" aria-label="Sreedev A">SA</span>}
      <i className="avatar-status" aria-label="Available" />
    </div>
    <div className="avatar-bubble">Hi, I&apos;m Sreedev <span aria-hidden="true">👋</span></div>
  </div>;
}
