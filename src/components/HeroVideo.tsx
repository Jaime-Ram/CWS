"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Achtergrondvideo voor de hero. De poster staat er direct, de YouTube-iframe
 * schuift daar overheen zodra hij geladen is. Op smalle schermen en bij
 * "beperk beweging" blijft het bij de poster: dat scheelt data en batterij en
 * de uitsnede van een 16:9 video werkt daar toch niet.
 */
export default function HeroVideo({
  videoId,
  poster,
  posterAlt,
}: {
  videoId: string;
  poster: string;
  posterAlt: string;
}) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 992px)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const decide = () => setShowVideo(wide.matches && !calm.matches);
    decide();
    wide.addEventListener("change", decide);
    calm.addEventListener("change", decide);
    return () => {
      wide.removeEventListener("change", decide);
      calm.removeEventListener("change", decide);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Image src={poster} alt={posterAlt} fill priority sizes="100vw" className="object-cover" />

      {showVideo && (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&disablekb=1&modestbranding=1&playsinline=1&rel=0`}
          title=""
          tabIndex={-1}
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
        />
      )}

      {/* Donkere laag zodat de tekst leesbaar blijft, maar de beelden zichtbaar */}
      <div className="absolute inset-0 bg-neutral-800/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 via-neutral-800/75 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-800/55 to-transparent" />
    </div>
  );
}
