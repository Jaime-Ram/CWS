/**
 * Schematische illustraties per onderwerp. Vervangen de fotografie uit het
 * Investflow-template en passen bij een technisch adviesbureau.
 * Alle visuals zijn 4:3 en werken op licht en donker.
 */

export type VisualName =
  | "leidingnet"
  | "temperatuur"
  | "keerklep"
  | "boiler"
  | "monster"
  | "desinfectie"
  | "douche"
  | "gebouw"
  | "logboek"
  | "golven"
  | "waarschuwing"
  | "kaart"
  | "zorg"
  | "industrie"
  | "sport"
  | "school";

const PRIMARY = "#2365ff";
const CYAN = "#2db2ff";

export default function Visual({
  name,
  tone = "light",
  className = "",
}: {
  name: VisualName;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  const bg = dark ? "#001035" : "#f1f4ff";
  const line = dark ? "rgba(255,255,255,0.28)" : "#cbd2ea";
  const soft = dark ? "rgba(45,178,255,0.22)" : "rgba(35,101,255,0.10)";
  const ink = dark ? "#ffffff" : "#001035";
  const id = `v-${name}-${tone}`;

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={dark ? "#001b57" : "#ffffff"} />
          <stop offset="100%" stopColor={bg} />
        </linearGradient>
        <linearGradient id={`${id}-flow`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={CYAN} stopOpacity="0.15" />
          <stop offset="50%" stopColor={PRIMARY} />
          <stop offset="100%" stopColor={CYAN} stopOpacity="0.15" />
        </linearGradient>
      </defs>

      <rect width="400" height="300" fill={`url(#${id}-bg)`} />
      <g opacity={dark ? 0.5 : 0.7}>
        {Array.from({ length: 7 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            y1={20 + i * 44}
            x2="400"
            y2={20 + i * 44}
            stroke={line}
            strokeWidth="0.6"
            strokeDasharray="2 6"
          />
        ))}
      </g>

      {name === "leidingnet" && <Leidingnet ink={ink} line={line} soft={soft} />}
      {name === "temperatuur" && <Temperatuur ink={ink} line={line} />}
      {name === "keerklep" && <Keerklep ink={ink} line={line} id={id} />}
      {name === "boiler" && <Boiler ink={ink} line={line} soft={soft} />}
      {name === "monster" && <Monster ink={ink} line={line} />}
      {name === "desinfectie" && <Desinfectie ink={ink} line={line} id={id} />}
      {name === "douche" && <Douche ink={ink} line={line} />}
      {name === "gebouw" && <Gebouw ink={ink} line={line} soft={soft} />}
      {name === "logboek" && <Logboek ink={ink} line={line} />}
      {name === "golven" && <Golven />}
      {name === "waarschuwing" && <Waarschuwing ink={ink} line={line} />}
      {name === "kaart" && <Kaart ink={ink} line={line} soft={soft} />}
      {name === "zorg" && <Zorg ink={ink} line={line} soft={soft} />}
      {name === "industrie" && <Industrie ink={ink} line={line} soft={soft} />}
      {name === "sport" && <Sport ink={ink} line={line} />}
      {name === "school" && <School ink={ink} line={line} soft={soft} />}
    </svg>
  );
}

type P = { ink: string; line: string; soft?: string; id?: string };

/* Schematisch leidingnet met tappunten */
function Leidingnet({ ink, line, soft }: P) {
  const nodes: [number, number][] = [
    [96, 90],
    [200, 90],
    [304, 90],
    [96, 210],
    [200, 210],
    [304, 210],
  ];
  return (
    <g>
      <path fill="none"
        d="M40 150 H360"
        stroke={PRIMARY}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path fill="none"
        d="M96 150 V90 M200 150 V90 M304 150 V90 M96 150 V210 M200 150 V210 M304 150 V210"
        stroke={line}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="40" cy="150" r="12" fill={PRIMARY} />
      <circle cx="40" cy="150" r="22" fill={soft} />
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="9" fill={i === 4 ? CYAN : "none"} stroke={i === 4 ? CYAN : ink} strokeWidth="2.5" opacity={i === 4 ? 1 : 0.55} />
        </g>
      ))}
      <path fill="none" d="M304 210 V248 H352" stroke={line} strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
      <text x="352" y="268" fill={ink} opacity="0.5" fontSize="13" textAnchor="end" fontFamily="inherit">
        dode leiding
      </text>
    </g>
  );
}

/* Temperatuurschaal met groeizone */
function Temperatuur({ ink, line }: P) {
  return (
    <g>
      <rect x="48" y="128" width="304" height="26" rx="13" fill={line} opacity="0.5" />
      <rect x="48" y="128" width="80" height="26" rx="13" fill={CYAN} />
      <rect x="128" y="128" width="112" height="26" fill="#efc42c" opacity="0.85" />
      <rect x="272" y="128" width="80" height="26" rx="13" fill={PRIMARY} />
      {[
        [128, "25°"],
        [240, "45°"],
        [272, "60°"],
      ].map(([x, label]) => (
        <g key={label as string}>
          <line x1={x as number} y1="112" x2={x as number} y2="170" stroke={ink} strokeWidth="1.5" opacity="0.45" />
          <text x={x as number} y="192" fill={ink} opacity="0.75" fontSize="15" textAnchor="middle" fontFamily="inherit">
            {label}
          </text>
        </g>
      ))}
      <text x="184" y="104" fill={ink} opacity="0.6" fontSize="13" textAnchor="middle" fontFamily="inherit">
        groeizone
      </text>
    </g>
  );
}

/* Keerklep in doorsnede */
function Keerklep({ ink, line, id }: P) {
  return (
    <g>
      <rect x="40" y="132" width="320" height="36" rx="10" fill="none" stroke={line} strokeWidth="3" />
      <rect x="40" y="132" width="320" height="36" rx="10" fill={`url(#${id}-flow)`} opacity="0.25" />
      <path fill="none" d="M60 150 H150" stroke={PRIMARY} strokeWidth="4" strokeLinecap="round" />
      <path d="M138 141 L152 150 L138 159" fill="none" stroke={PRIMARY} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M186 126 L214 150 L186 174 Z" fill={PRIMARY} />
      <line x1="186" y1="120" x2="186" y2="180" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      <path fill="none" d="M340 150 H262" stroke={ink} strokeWidth="4" strokeLinecap="round" opacity="0.3" strokeDasharray="7 7" />
      <path d="M274 141 L260 150 L274 159" fill="none" stroke={ink} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      <circle cx="300" cy="205" r="13" fill="none" stroke={ink} strokeWidth="2.5" opacity="0.4" />
      <path fill="none" d="M294 205 L306 205 M300 199 L300 211" stroke={ink} strokeWidth="2.5" strokeLinecap="round" opacity="0.4" transform="rotate(45 300 205)" />
    </g>
  );
}

/* Boiler met sedimentlaag */
function Boiler({ ink, line, soft }: P) {
  return (
    <g>
      <rect x="130" y="52" width="140" height="200" rx="46" fill="none" stroke={ink} strokeWidth="3" opacity="0.65" />
      <path d="M132 196 a46 46 0 0 0 44 54 h48 a46 46 0 0 0 44 -54 z" fill={PRIMARY} opacity="0.16" />
      <path d="M136 224 a46 46 0 0 0 40 26 h48 a46 46 0 0 0 40 -26 z" fill="#8791ad" opacity="0.85" />
      <circle cx="200" cy="130" r="34" fill={soft} />
      <path d="M200 108 c14 18 22 27 22 36 a22 22 0 0 1 -44 0 c0 -9 8 -18 22 -36 z" fill={CYAN} />
      <line x1="270" y1="90" x2="330" y2="90" stroke={line} strokeWidth="3" strokeLinecap="round" />
      <line x1="70" y1="90" x2="130" y2="90" stroke={line} strokeWidth="3" strokeLinecap="round" />
      <text x="200" y="278" fill={ink} opacity="0.5" fontSize="13" textAnchor="middle" fontFamily="inherit">
        sedimentlaag
      </text>
    </g>
  );
}

/* Watermonster in fles */
function Monster({ ink, line }: P) {
  return (
    <g>
      {[110, 200, 290].map((x, i) => (
        <g key={x}>
          <path
            d={`M${x - 20} 96 h40 v34 l24 74 a14 14 0 0 1 -13 20 h-62 a14 14 0 0 1 -13 -20 l24 -74 z`}
            fill="none"
            stroke={ink}
            strokeWidth="2.5"
            opacity="0.6"
          />
          <path
            d={`M${x - 26} 178 l-6 26 a14 14 0 0 0 13 20 h38 a14 14 0 0 0 13 -20 l-6 -26 z`}
            fill={i === 1 ? "#efc42c" : PRIMARY}
            opacity={i === 1 ? 0.9 : 0.75}
          />
          <rect x={x - 14} y="84" width="28" height="14" rx="4" fill={ink} opacity="0.55" />
        </g>
      ))}
      <text x="200" y="256" fill={ink} opacity="0.5" fontSize="13" textAnchor="middle" fontFamily="inherit">
        &gt; 100 kve/l
      </text>
    </g>
  );
}

/* Desinfectie: middel door leidingnet */
function Desinfectie({ ink, line, id }: P) {
  return (
    <g>
      <rect x="46" y="120" width="308" height="24" rx="12" fill={`url(#${id}-flow)`} />
      <rect x="46" y="164" width="308" height="24" rx="12" fill={line} opacity="0.55" />
      <circle cx="70" cy="132" r="7" fill="#fff" opacity="0.9" />
      <circle cx="150" cy="132" r="7" fill="#fff" opacity="0.9" />
      <circle cx="230" cy="132" r="7" fill="#fff" opacity="0.9" />
      <circle cx="310" cy="132" r="7" fill="#fff" opacity="0.9" />
      <path d="M46 96 v-16 h44 v16" fill="none" stroke={ink} strokeWidth="3" opacity="0.5" strokeLinecap="round" />
      <path d="M310 96 v-16 h44 v16" fill="none" stroke={ink} strokeWidth="3" opacity="0.5" strokeLinecap="round" />
      <rect x="164" y="212" width="72" height="44" rx="10" fill={PRIMARY} />
      <path d="M200 224 c8 10 12 15 12 20 a12 12 0 0 1 -24 0 c0 -5 4 -10 12 -20 z" fill="#fff" />
      <path fill="none" d="M200 188 v24" stroke={ink} strokeWidth="3" opacity="0.5" strokeLinecap="round" strokeDasharray="5 5" />
    </g>
  );
}

/* Douche met aerosolen */
function Douche({ ink, line }: P) {
  return (
    <g>
      <path fill="none" d="M200 46 v34" stroke={ink} strokeWidth="4" opacity="0.6" strokeLinecap="round" />
      <ellipse cx="200" cy="90" rx="46" ry="14" fill={ink} opacity="0.65" />
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={i}
          x1={162 + i * 9.5}
          y1="106"
          x2={150 + i * 12.5}
          y2="212"
          stroke={PRIMARY}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity={0.35 + (i % 3) * 0.22}
        />
      ))}
      {[
        [124, 150, 7],
        [286, 138, 9],
        [104, 196, 5],
        [304, 190, 6],
        [138, 118, 5],
      ].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={CYAN} opacity="0.4" />
      ))}
      <rect x="118" y="240" width="164" height="12" rx="6" fill={line} />
    </g>
  );
}

/* Gebouw met strangen */
function Gebouw({ ink, line, soft }: P) {
  return (
    <g>
      <rect x="112" y="54" width="176" height="200" rx="14" fill={soft} stroke={ink} strokeOpacity="0.35" strokeWidth="2.5" />
      {[100, 146, 192].map((y) => (
        <line key={y} x1="112" y1={y} x2="288" y2={y} stroke={line} strokeWidth="2" />
      ))}
      <line x1="200" y1="54" x2="200" y2="254" stroke={PRIMARY} strokeWidth="4" opacity="0.85" />
      {[77, 123, 169, 223].map((y, i) => (
        <g key={y}>
          <line x1="200" y1={y} x2={i % 2 ? 258 : 142} y2={y} stroke={line} strokeWidth="2.5" />
          <circle cx={i % 2 ? 258 : 142} cy={y} r="7" fill={i === 3 ? CYAN : "none"} stroke={i === 3 ? CYAN : ink} strokeOpacity="0.5" strokeWidth="2.5" />
        </g>
      ))}
      <circle cx="200" cy="254" r="11" fill={PRIMARY} />
    </g>
  );
}

/* Logboek met afvinklijst */
function Logboek({ ink, line }: P) {
  return (
    <g>
      <rect x="98" y="52" width="204" height="200" rx="16" fill="#fff" opacity="0.92" />
      <rect x="98" y="52" width="204" height="200" rx="16" fill="none" stroke={ink} strokeOpacity="0.25" strokeWidth="2" />
      <rect x="98" y="52" width="12" height="200" rx="6" fill={PRIMARY} />
      {[92, 130, 168, 206].map((y, i) => (
        <g key={y}>
          <circle cx="140" cy={y} r="11" fill={i < 3 ? PRIMARY : "none"} stroke={i < 3 ? PRIMARY : "#8791ad"} strokeWidth="2" />
          {i < 3 && (
            <path d={`M134 ${y} l4.5 4.5 L147 ${y - 5}`} fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          )}
          <rect x="164" y={y - 6} width={i === 3 ? 60 : 112} height="12" rx="6" fill="#cbd2ea" />
        </g>
      ))}
    </g>
  );
}

function Golven() {
  return (
    <g opacity="0.85">
      {Array.from({ length: 7 }).map((_, i) => (
        <path
          key={i}
          d={`M-20 ${70 + i * 28} C 70 ${40 + i * 28}, 140 ${110 + i * 28}, 220 ${74 + i * 28} S 350 ${34 + i * 28}, 430 ${86 + i * 28}`}
          fill="none"
          stroke={i % 2 ? CYAN : PRIMARY}
          strokeWidth="2"
          opacity={0.25 + i * 0.08}
        />
      ))}
    </g>
  );
}

function Waarschuwing({ ink, line }: P) {
  return (
    <g>
      <path d="M200 78 L302 236 H98 Z" fill="#fe566b" opacity="0.14" />
      <path d="M200 78 L302 236 H98 Z" fill="none" stroke="#fe566b" strokeWidth="4" strokeLinejoin="round" />
      <rect x="192" y="136" width="16" height="54" rx="8" fill="#fe566b" />
      <circle cx="200" cy="210" r="9" fill="#fe566b" />
      <circle cx="200" cy="160" r="98" fill="none" stroke={line} strokeWidth="2" strokeDasharray="4 8" opacity="0.7" />
    </g>
  );
}

function Kaart({ ink, line, soft }: P) {
  return (
    <g>
      <path
        d="M186 60 l38 -14 l44 18 l40 -16 v168 l-40 16 l-44 -18 l-38 14 l-42 -18 v-166 z"
        fill={soft}
        stroke={ink}
        strokeOpacity="0.3"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path fill="none" d="M186 60 v166 M224 46 v168 M268 64 v168" stroke={line} strokeWidth="2" />
      <circle cx="226" cy="140" r="30" fill={PRIMARY} opacity="0.14" />
      <path
        d="M226 108 c16 0 28 12 28 28 c0 20 -28 44 -28 44 s-28 -24 -28 -44 c0 -16 12 -28 28 -28 z"
        fill={PRIMARY}
      />
      <circle cx="226" cy="136" r="10" fill="#fff" />
    </g>
  );
}

/* Zorg: bed met kruis en tappunt */
function Zorg({ ink, line, soft }: P) {
  return (
    <g>
      <rect x="72" y="150" width="200" height="70" rx="14" fill={soft} stroke={ink} strokeOpacity="0.35" strokeWidth="2.5" />
      <rect x="60" y="118" width="52" height="42" rx="10" fill="#fff" opacity="0.9" stroke={ink} strokeOpacity="0.3" strokeWidth="2" />
      <line x1="82" y1="220" x2="82" y2="248" stroke={ink} strokeWidth="4" strokeLinecap="round" opacity="0.55" />
      <line x1="262" y1="220" x2="262" y2="248" stroke={ink} strokeWidth="4" strokeLinecap="round" opacity="0.55" />
      <line x1="60" y1="104" x2="60" y2="164" stroke={ink} strokeWidth="4" strokeLinecap="round" opacity="0.55" />
      <g transform="translate(300 88)">
        <circle r="34" fill={PRIMARY} opacity="0.14" />
        <rect x="-7" y="-20" width="14" height="40" rx="4" fill={PRIMARY} />
        <rect x="-20" y="-7" width="40" height="14" rx="4" fill={PRIMARY} />
      </g>
      <path fill="none" d="M300 122 v46" stroke={line} strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
      <path d="M300 178 c8 10 12 15 12 20 a12 12 0 0 1 -24 0 c0 -5 4 -10 12 -20 z" fill={CYAN} />
    </g>
  );
}

/* Industrie: tanks en leidingbrug */
function Industrie({ ink, line, soft }: P) {
  return (
    <g>
      {[
        [86, 150],
        [172, 132],
        [258, 158],
      ].map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 30} y={y} width="60" height={252 - y} rx="10" fill={soft} stroke={ink} strokeOpacity="0.35" strokeWidth="2.5" />
          <ellipse cx={x} cy={y} rx="30" ry="9" fill="#fff" opacity="0.85" stroke={ink} strokeOpacity="0.3" strokeWidth="2" />
          <rect x={x - 30} y={218} width="60" height="34" rx="8" fill={PRIMARY} opacity={0.18 + i * 0.12} />
        </g>
      ))}
      <path fill="none" d="M56 100 H344" stroke={PRIMARY} strokeWidth="6" strokeLinecap="round" />
      <path fill="none" d="M86 100 v50 M172 100 v32 M258 100 v58" stroke={line} strokeWidth="3" />
      <circle cx="344" cy="100" r="10" fill={CYAN} />
      <rect x="306" y="180" width="52" height="72" rx="10" fill="none" stroke={ink} strokeOpacity="0.35" strokeWidth="2.5" />
      <path d="M332 200 c9 12 14 18 14 24 a14 14 0 0 1 -28 0 c0 -6 5 -12 14 -24 z" fill={CYAN} opacity="0.8" />
    </g>
  );
}

/* Sport: rij douchekoppen in een kleedruimte */
function Sport({ ink, line }: P) {
  return (
    <g>
      <path fill="none" d="M40 76 H360" stroke={PRIMARY} strokeWidth="5" strokeLinecap="round" />
      {[96, 200, 304].map((x, i) => (
        <g key={x}>
          <line x1={x} y1="76" x2={x} y2="108" stroke={ink} strokeWidth="4" opacity="0.6" strokeLinecap="round" />
          <ellipse cx={x} cy="116" rx="30" ry="10" fill={ink} opacity="0.6" />
          {i !== 1 &&
            Array.from({ length: 5 }).map((_, j) => (
              <line
                key={j}
                x1={x - 20 + j * 10}
                y1="128"
                x2={x - 26 + j * 13}
                y2="196"
                stroke={PRIMARY}
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.3"
              />
            ))}
          {i === 1 &&
            Array.from({ length: 5 }).map((_, j) => (
              <line
                key={j}
                x1={x - 20 + j * 10}
                y1="128"
                x2={x - 28 + j * 14}
                y2="228"
                stroke={CYAN}
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.85"
              />
            ))}
        </g>
      ))}
      <rect x="56" y="248" width="288" height="12" rx="6" fill={line} />
      <text x="200" y="284" fill={ink} opacity="0.5" fontSize="13" textAnchor="middle" fontFamily="inherit">
        1 in gebruik, 2 staan stil
      </text>
    </g>
  );
}

/* School: gebouw met vakantieklok */
function School({ ink, line, soft }: P) {
  return (
    <g>
      <path d="M100 122 L200 66 L300 122 V250 H100 Z" fill={soft} stroke={ink} strokeOpacity="0.35" strokeWidth="2.5" strokeLinejoin="round" />
      {[
        [140, 160],
        [200, 160],
        [260, 160],
        [140, 208],
        [260, 208],
      ].map(([x, y], i) => (
        <rect key={i} x={x - 18} y={y - 16} width="36" height="32" rx="5" fill="#fff" opacity="0.85" stroke={ink} strokeOpacity="0.25" strokeWidth="1.8" />
      ))}
      <rect x="182" y="196" width="36" height="54" rx="5" fill={PRIMARY} opacity="0.85" />
      <g transform="translate(300 84)">
        <circle r="30" fill="#fff" opacity="0.95" stroke={ink} strokeOpacity="0.3" strokeWidth="2.5" />
        <path d="M0 -18 V0 L13 8" fill="none" stroke={PRIMARY} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="200" y="284" fill={ink} opacity="0.5" fontSize="13" textAnchor="middle" fontFamily="inherit">
        zes weken stilstand
      </text>
    </g>
  );
}
