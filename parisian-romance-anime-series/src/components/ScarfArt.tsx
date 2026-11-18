import { useMemo } from "react";

function rand(seed: number) {
  const x = Math.sin(seed * 127.1) * 43758.5453;
  return x - Math.floor(x);
}

function skyline(base: number, from: number, to: number, seed: number, minH: number, maxH: number) {
  const out: { d: string; chimney?: { x: number; y: number } }[] = [];
  let x = from;
  let i = 0;
  while (x < to) {
    const w = 70 + rand(seed + i) * 80;
    const h = minH + rand(seed + i * 3.3) * (maxH - minH);
    const roof = 16 + rand(seed + i * 7.1) * 14;
    const d = `M${x} ${base} L${x} ${base - h} L${x + w * 0.14} ${base - h - roof} L${x + w * 0.86} ${base - h - roof} L${x + w} ${base - h} L${x + w} ${base} Z`;
    out.push({ d, chimney: rand(seed + i * 5) > 0.5 ? { x: x + w * (0.3 + rand(seed + i) * 0.4), y: base - h - roof } : undefined });
    x += w + 2;
    i++;
  }
  return out;
}

export const SCARF_PATH =
  "M300 566 C380 470 410 650 560 520 S700 290 830 420 S960 540 1050 360 S1170 130 1290 250 S1400 390 1480 300";

export function HeroArt() {
  const far = useMemo(() => skyline(700, -40, 1500, 3, 90, 170), []);
  const near = useMemo(() => skyline(760, -60, 1500, 11, 70, 130), []);
  const windows = useMemo(() => {
    const w: { x: number; y: number }[] = [];
    for (let i = 0; i < 70; i++) {
      w.push({ x: rand(i * 1.7) * 1440, y: 620 + rand(i * 2.9) * 110 });
    }
    return w;
  }, []);

  return (
    <svg
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bcd2e0" />
          <stop offset="0.45" stopColor="#f2cfc6" />
          <stop offset="0.85" stopColor="#f7efe3" />
        </linearGradient>
        <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff4cf" />
          <stop offset="0.6" stopColor="#f3e2a9" stopOpacity="0.85" />
          <stop offset="1" stopColor="#f3e2a9" stopOpacity="0" />
        </radialGradient>
        <mask id="scarfMask" maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="800">
          <path d={SCARF_PATH} pathLength={1} fill="none" stroke="white" strokeWidth="24" className="scarf-draw" />
        </mask>
      </defs>

      <rect width="1440" height="800" fill="url(#sky)" />
      <circle cx="1120" cy="470" r="260" fill="url(#sun)" />
      <circle cx="1120" cy="470" r="86" fill="#fff4cf" opacity="0.9" />

      {/* clouds */}
      <g fill="#fbf6ee" opacity="0.75">
        <ellipse cx="220" cy="170" rx="120" ry="20" />
        <ellipse cx="300" cy="155" rx="70" ry="18" />
        <ellipse cx="880" cy="120" rx="140" ry="18" />
        <ellipse cx="960" cy="105" rx="80" ry="16" />
      </g>

      {/* far skyline */}
      <g fill="#bfcddc" opacity="0.9">
        {far.map((b, i) => (
          <g key={i}>
            <path d={b.d} />
            {b.chimney && <rect x={b.chimney.x} y={b.chimney.y - 22} width="9" height="22" />}
          </g>
        ))}
      </g>

      {/* Eiffel tower */}
      <g fill="none" stroke="#9fb1c7" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M985 720 L1030 520 L1042 420 L1050 330 L1058 420 L1070 520 L1115 720" />
        <path d="M1030 520 L1070 520 M1042 420 L1058 420 M1000 640 L1100 640" />
        <path d="M1050 330 L1050 296" />
        <path d="M1030 520 L1070 600 M1070 520 L1030 600" strokeWidth="3" />
      </g>

      {/* Sacré-Cœur dome */}
      <g fill="#c5cde0" opacity="0.9">
        <path d="M220 700 L220 620 Q260 560 300 620 L300 700 Z" />
        <path d="M200 700 L200 650 Q214 632 228 650 L228 700 Z" />
        <path d="M292 700 L292 650 Q306 632 320 650 L320 700 Z" />
        <rect x="258" y="540" width="3" height="22" />
      </g>

      {/* near skyline */}
      <g fill="#e6bfc0">
        {near.map((b, i) => (
          <g key={i}>
            <path d={b.d} />
            {b.chimney && <rect x={b.chimney.x} y={b.chimney.y - 20} width="10" height="20" />}
          </g>
        ))}
      </g>
      <g fill="#fff4cf" opacity="0.85">
        {windows.map((w, i) => (
          <rect key={i} x={w.x} y={w.y} width="7" height="11" rx="1" />
        ))}
      </g>

      {/* quay + parapet */}
      <rect x="0" y="740" width="1440" height="60" fill="#d9cde7" />
      <rect x="0" y="730" width="1440" height="14" fill="#c9bcd9" />
      <g stroke="#b7a8cc" strokeWidth="2">
        {Array.from({ length: 36 }).map((_, i) => (
          <line key={i} x1={i * 42} y1="744" x2={i * 42} y2="800" />
        ))}
      </g>

      {/* the heroine */}
      <g className="sway" style={{ transformOrigin: "300px 650px" }}>
        {/* coat */}
        <path d="M268 740 L276 596 Q300 578 326 596 L340 740 Z" fill="#1d1b22" />
        <path d="M296 600 L304 740" stroke="#3a3744" strokeWidth="2" />
        {/* cream knit */}
        <path d="M286 592 L300 640 L314 592 Q300 584 286 592Z" fill="#f7efe3" />
        {/* neck + head */}
        <rect x="294" y="568" width="12" height="20" fill="#f1d7c3" />
        <circle cx="300" cy="548" r="22" fill="#f6e0cf" />
        {/* bob */}
        <path d="M276 552 Q274 520 300 520 Q328 520 324 552 L322 574 Q316 560 314 548 Q300 542 286 548 Q284 560 278 574 Z" fill="#1d1b22" />
        <path d="M282 540 Q300 528 320 538 L320 532 Q300 520 282 530Z" fill="#1d1b22" />
        <circle cx="308" cy="552" r="1.4" fill="#1d1b22" />
        <path d="M300 566 Q305 568 309 565" stroke="#c8102e" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      </g>

      {/* the scarf */}
      <g>
        <path d={SCARF_PATH} pathLength={1} fill="none" stroke="#8f0a20" strokeWidth="18" strokeLinecap="round" className="scarf-draw" style={{ transform: "translateY(5px)" }} />
        <path d={SCARF_PATH} pathLength={1} fill="none" stroke="#c8102e" strokeWidth="14" strokeLinecap="round" className="scarf-draw" />
        <path
          d={SCARF_PATH}
          pathLength={1}
          fill="none"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="2.5"
          className="scarf-flow"
          mask="url(#scarfMask)"
          style={{ transform: "translateY(-3px)" }}
        />
      </g>

      {/* birds */}
      <g stroke="#4a4651" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M620 210 q10 -12 20 0 q10 -12 20 0" />
        <path d="M700 250 q8 -9 16 0 q8 -9 16 0" />
        <path d="M560 270 q7 -8 14 0 q7 -8 14 0" />
      </g>
    </svg>
  );
}

export function ScarfDivider({ flip = false }: { flip?: boolean }) {
  const d = "M0 30 C120 0 180 60 300 30 S480 0 600 30 S780 60 900 30 S1080 0 1200 30";
  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      className={"h-10 w-full " + (flip ? "-scale-x-100" : "")}
      aria-hidden="true"
    >
      <path d={d} fill="none" stroke="#8f0a20" strokeWidth="9" strokeLinecap="round" style={{ transform: "translateY(3px)" }} />
      <path d={d} fill="none" stroke="#c8102e" strokeWidth="7" strokeLinecap="round" />
      <path d={d} pathLength={1} fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.6" className="scarf-flow" style={{ transform: "translateY(-1px)" }} />
    </svg>
  );
}
