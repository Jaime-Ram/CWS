"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Video met een klik-om-te-spelen voorvertoning. De YouTube-iframe wordt pas
 * geladen nadat de bezoeker op afspelen klikt, zodat er vooraf geen cookies van
 * YouTube worden gezet en de pagina licht blijft.
 */
export default function VideoEmbed({
  videoId,
  title,
  poster,
  className = "",
}: {
  videoId: string;
  title: string;
  poster: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-[18px] border border-white/12 bg-neutral-800 ${className}`}
      style={{ aspectRatio: "16/9" }}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 size-full"
          aria-label={`Video afspelen: ${title}`}
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 991px) 100vw, 40vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-neutral-800/80 via-neutral-800/20 to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-[68px] items-center justify-center rounded-full bg-white/95 shadow-[0_8px_30px_rgba(0,16,53,0.35)] transition-transform duration-300 group-hover:scale-110 max-sm:size-14">
              <svg width="20" height="24" viewBox="0 0 20 24" fill="none" aria-hidden="true">
                <path d="M19 12 0 24V0l19 12z" fill="#2365ff" />
              </svg>
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-6 text-left max-sm:p-4">
            <span className="text-[15px] font-medium text-white">{title}</span>
          </span>
        </button>
      )}
    </div>
  );
}
