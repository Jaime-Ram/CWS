import { site } from "@/data/site";

/** Het Google-beeldmerk, gebruikt om naar de Google-beoordelingen te linken. */
function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 576 512" className={className} fill="currentColor" aria-hidden="true">
      <path d="M309.5 18.1c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1l-73.6 144.4-159.9 25.4c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2l144.4-73.4 144.3 73.4c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2l-25.3-159.6 114.4-114.5c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3l-159.8-25.4-73.5-144.4z" />
    </svg>
  );
}

/**
 * Reviewknop zoals op de bestaande site: het Google-beeldmerk met vijf sterren,
 * gelinkt aan hun Google-vermelding. Score en aantal komen uit `site.reviews`
 * en worden alleen getoond als ze zijn ingevuld.
 */
export default function GoogleReviews({
  variant = "dark",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const onDark = variant === "dark";
  const { rating, count } = site.reviews;

  return (
    <a
      href={site.reviews.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-[300px] py-2 pl-3 pr-5 transition-colors ${
        onDark
          ? "border border-white/15 bg-white/[0.08] backdrop-blur-sm hover:border-white/30"
          : "border border-neutral-200 bg-white shadow-[0_4px_4px_#9ac4ff0f] hover:border-primary/30"
      } ${className}`}
    >
      <span
        className={`flex size-8 items-center justify-center rounded-full ${
          onDark ? "bg-white" : "bg-neutral-200"
        }`}
      >
        <GoogleG className="size-[18px]" />
      </span>
      <span className="grid gap-0.5">
        <span className="flex items-center gap-2">
          <span className="flex gap-[3px] text-[#fbbc05]">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="size-[13px]" />
            ))}
          </span>
          {rating && (
            <span className={`text-[14px] font-semibold ${onDark ? "text-white" : "text-neutral-800"}`}>
              {rating}
            </span>
          )}
        </span>
        <span className={`text-[13px] ${onDark ? "text-neutral-300" : "text-neutral-500"}`}>
          {count ? `${count} Google-beoordelingen` : "Beoordeeld op Google"}
        </span>
      </span>
    </a>
  );
}
