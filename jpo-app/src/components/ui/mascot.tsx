/**
 * Petits personnages décoratifs (SVG, couleurs de la charte) pour animer les pages.
 * Purement décoratifs : masqués aux lecteurs d'écran.
 *   - "laptop"   : étudiant derrière son ordinateur
 *   - "vr"       : personnage avec un casque de réalité virtuelle
 *   - "graduate" : diplômé qui fait coucou
 */
type MascotProps = {
  variant: "laptop" | "vr" | "graduate";
  className?: string;
};

const SKIN = "#f3c7a6";
const INK = "#1e1a5c";

function Face({ cx, cy }: { cx: number; cy: number }) {
  return (
    <>
      <circle cx={cx - 9} cy={cy + 2} r="2.8" fill={INK} />
      <circle cx={cx + 9} cy={cy + 2} r="2.8" fill={INK} />
      <circle cx={cx - 15} cy={cy + 9} r="4" fill="#f29f9f" opacity="0.45" />
      <circle cx={cx + 15} cy={cy + 9} r="4" fill="#f29f9f" opacity="0.45" />
      <path d={`M${cx - 7} ${cy + 10} q7 6 14 0`} stroke={INK} strokeWidth="2.6" strokeLinecap="round" fill="none" />
    </>
  );
}

function Sparkle({ x, y, size, color }: { x: number; y: number; size: number; color: string }) {
  const s = size;
  return (
    <path
      d={`M${x} ${y - s} Q${x} ${y} ${x + s} ${y} Q${x} ${y} ${x} ${y + s} Q${x} ${y} ${x - s} ${y} Q${x} ${y} ${x} ${y - s}Z`}
      fill={color}
    />
  );
}

export function Mascot({ variant, className = "" }: MascotProps) {
  return (
    <svg
      className={`mascot mascot--${variant} ${className}`}
      viewBox="0 0 220 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse cx="110" cy="190" rx="68" ry="7" fill="#0c1014" opacity="0.12" />

      {variant === "laptop" && (
        <>
          {/* éléments flottants */}
          <g className="mascot__float mascot__float--a">
            <rect x="14" y="38" width="40" height="34" rx="10" fill="#00a19a" />
            <path d="M28 48 l-6 7 l6 7 M40 48 l6 7 l-6 7 M36 46 l-4 18" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g className="mascot__float mascot__float--b">
            <circle cx="190" cy="44" r="10" fill="#fbda26" />
          </g>
          <g className="mascot__float mascot__float--c">
            <path d="M176 96 l15 -9 l15 9 v18 l-15 9 l-15 -9z" fill="#8b85e6" />
            <path d="M176 96 l15 9 l15 -9 M191 105 v18" stroke="#fff" strokeWidth="2" opacity="0.8" />
          </g>
          {/* corps */}
          <path d="M66 176 v-42 a44 44 0 0 1 88 0 v42z" fill="#4a44b0" />
          <rect x="101" y="92" width="18" height="18" rx="7" fill={SKIN} />
          <circle cx="110" cy="72" r="26" fill={SKIN} />
          <path d="M84 74 C82 52 96 42 112 44 C128 45 138 56 136 76 C130 64 121 59 110 59 C99 59 90 64 84 74Z" fill={INK} />
          <Face cx={110} cy={74} />
          {/* ordinateur (vu de dos) */}
          <rect x="66" y="128" width="88" height="52" rx="7" fill="#e9e7e0" />
          <path d="M105 146 v14 l13 -7z" fill="#00a19a" />
          <rect x="54" y="176" width="112" height="9" rx="4.5" fill="#c9c7c0" />
          <circle cx="72" cy="132" r="7" fill={SKIN} />
          <circle cx="148" cy="132" r="7" fill={SKIN} />
        </>
      )}

      {variant === "vr" && (
        <>
          <g className="mascot__float mascot__float--a">
            <Sparkle x={36} y={56} size={11} color="#fbda26" />
          </g>
          <g className="mascot__float mascot__float--b">
            <Sparkle x={58} y={100} size={7} color="#00a19a" />
          </g>
          <g className="mascot__float mascot__float--c">
            <circle cx="196" cy="140" r="8" fill="#8b85e6" />
          </g>
          {/* bras levé avec manette */}
          <path d="M146 140 L178 98" stroke={SKIN} strokeWidth="14" strokeLinecap="round" />
          <rect x="170" y="70" width="18" height="30" rx="8" fill={INK} transform="rotate(20 179 85)" />
          <circle cx="182" cy="80" r="3" fill="#00a19a" />
          {/* corps */}
          <path d="M68 188 v-44 a42 42 0 0 1 84 0 v44z" fill="#00a19a" />
          <rect x="101" y="104" width="18" height="16" rx="7" fill={SKIN} />
          <circle cx="110" cy="84" r="27" fill={SKIN} />
          <path d="M83 84 C82 62 96 54 112 56 C128 57 138 68 137 86 C131 74 122 70 110 70 C98 70 89 75 83 84Z" fill="#6b3f2a" />
          {/* casque VR */}
          <path d="M82 82 h56" stroke={INK} strokeWidth="5" />
          <rect x="88" y="74" width="44" height="20" rx="8" fill={INK} />
          <rect x="93" y="79" width="34" height="10" rx="5" fill="#8b85e6" />
          <path d="M102 99 q8 6 16 0" stroke={INK} strokeWidth="2.6" strokeLinecap="round" fill="none" />
        </>
      )}

      {variant === "graduate" && (
        <>
          <g className="mascot__float mascot__float--a">
            <rect x="26" y="40" width="10" height="10" rx="2" fill="#fbda26" transform="rotate(20 31 45)" />
          </g>
          <g className="mascot__float mascot__float--b">
            <rect x="186" y="58" width="9" height="9" rx="2" fill="#00a19a" transform="rotate(-25 190 62)" />
          </g>
          <g className="mascot__float mascot__float--c">
            <circle cx="40" cy="110" r="6" fill="#8b85e6" />
          </g>
          {/* bras qui fait coucou */}
          <path d="M76 140 L54 100" stroke={SKIN} strokeWidth="14" strokeLinecap="round" className="mascot__wave" />
          <circle cx="52" cy="94" r="9" fill={SKIN} className="mascot__wave" />
          {/* corps */}
          <path d="M68 188 v-44 a42 42 0 0 1 84 0 v44z" fill="#2f2a85" />
          <path d="M110 120 l-10 14 l10 30 l10 -30z" fill="#fff" opacity="0.9" />
          <rect x="101" y="104" width="18" height="16" rx="7" fill={SKIN} />
          <circle cx="110" cy="84" r="27" fill={SKIN} />
          <path d="M84 86 C84 70 96 64 110 64 C124 64 136 70 136 86 C130 78 122 75 110 75 C98 75 90 78 84 86Z" fill={INK} />
          <Face cx={110} cy={86} />
          {/* chapeau de diplômé */}
          <rect x="94" y="56" width="32" height="12" rx="3" fill={INK} />
          <path d="M76 56 L110 42 L144 56 L110 70Z" fill={INK} />
          <path d="M140 57 v18" stroke="#fbda26" strokeWidth="2.5" />
          <circle cx="140" cy="77" r="3.5" fill="#fbda26" />
          {/* diplôme */}
          <rect x="146" y="150" width="36" height="12" rx="6" fill="#fff" transform="rotate(-20 164 156)" />
          <rect x="160" y="148" width="5" height="16" fill="#00a19a" transform="rotate(-20 164 156)" />
          <circle cx="150" cy="160" r="8" fill={SKIN} />
        </>
      )}
    </svg>
  );
}
