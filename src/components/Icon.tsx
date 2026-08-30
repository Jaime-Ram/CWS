import type { VisualName } from "./Visual";

/** Compacte lijniconen voor de ronde kaartmarkering, per onderwerp. */
export default function Icon({
  name,
  className = "",
}: {
  name: VisualName;
  className?: string;
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
      {name === "leidingnet" && (
        <g {...common}>
          <path d="M3 14h22" />
          <path d="M9 14V7M19 14v7" />
          <circle cx="9" cy="6" r="2.4" />
          <circle cx="19" cy="22" r="2.4" />
        </g>
      )}
      {name === "temperatuur" && (
        <g {...common}>
          <path d="M11.5 16.5V6a2.5 2.5 0 0 1 5 0v10.5" />
          <circle cx="14" cy="19.5" r="4" />
          <path d="M20.5 8h3M20.5 12h2" />
        </g>
      )}
      {name === "keerklep" && (
        <g {...common}>
          <path d="M3 14h8M17 14h8" />
          <path d="M11 8.5 17 14l-6 5.5z" />
          <path d="M17 8v12" />
        </g>
      )}
      {(name === "boiler" || name === "industrie") && (
        <g {...common}>
          <rect x="8" y="4" width="12" height="20" rx="5" />
          <path d="M8.6 18.5h10.8" />
          <path d="M20 8h4M4 8h4" />
        </g>
      )}
      {name === "monster" && (
        <g {...common}>
          <path d="M11 4h6v6l4 10a2 2 0 0 1-1.9 2.6H8.9A2 2 0 0 1 7 20l4-10z" />
          <path d="M8.6 17h10.8" />
        </g>
      )}
      {name === "desinfectie" && (
        <g {...common}>
          <path d="M3 11h22M3 17h22" />
          <circle cx="9" cy="11" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="16" cy="11" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="22" cy="11" r="1.2" fill="currentColor" stroke="none" />
        </g>
      )}
      {(name === "douche" || name === "sport") && (
        <g {...common}>
          <path d="M14 3v4" />
          <ellipse cx="14" cy="9" rx="7" ry="2.2" />
          <path d="M9 13v5M14 13v8M19 13v5" />
        </g>
      )}
      {(name === "gebouw" || name === "school") && (
        <g {...common}>
          <path d="M6 24V9l8-5 8 5v15" />
          <path d="M11 24v-6h6v6" />
          <path d="M10 13h2M16 13h2" />
        </g>
      )}
      {name === "zorg" && (
        <g {...common}>
          <rect x="4" y="12" width="20" height="9" rx="3" />
          <path d="M4 21v3M24 21v3" />
          <path d="M12 6h4M14 4v4" />
        </g>
      )}
      {name === "logboek" && (
        <g {...common}>
          <rect x="6" y="4" width="16" height="20" rx="3" />
          <path d="M10 10h8M10 14h8M10 18h5" />
        </g>
      )}
      {name === "golven" && (
        <g {...common}>
          <path d="M3 10c3-3 5 3 8 0s5 3 8 0 3 1 6 0" />
          <path d="M3 16c3-3 5 3 8 0s5 3 8 0 3 1 6 0" />
          <path d="M3 22c3-3 5 3 8 0s5 3 8 0 3 1 6 0" />
        </g>
      )}
      {name === "waarschuwing" && (
        <g {...common}>
          <path d="M14 4 25 23H3z" />
          <path d="M14 11v6" />
          <circle cx="14" cy="20" r="1.1" fill="currentColor" stroke="none" />
        </g>
      )}
      {name === "kaart" && (
        <g {...common}>
          <path d="M10 5 4 7v16l6-2 8 3 6-2V6l-6 2z" />
          <path d="M10 5v16M18 8v16" />
        </g>
      )}
    </svg>
  );
}
