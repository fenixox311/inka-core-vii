export function Emblem({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 380 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="#b87333" strokeWidth="6" fill="none" strokeLinecap="round">
        <path d="M120 110 H92" />
        <circle cx="86" cy="110" r="10" fill="#b87333" />
        <path d="M120 140 H78" />
        <circle cx="72" cy="140" r="10" fill="#38bdf8" stroke="#38bdf8" />
        <path d="M120 170 H92" />
        <circle cx="86" cy="170" r="10" fill="#b87333" />
        <path d="M260 110 H288" />
        <circle cx="294" cy="110" r="10" fill="#b87333" />
        <path d="M260 140 H302" />
        <circle cx="308" cy="140" r="10" fill="#38bdf8" stroke="#38bdf8" />
        <path d="M260 170 H288" />
        <circle cx="294" cy="170" r="10" fill="#b87333" />
        <path d="M155 82 V60" />
        <circle cx="155" cy="55" r="10" fill="#b87333" />
        <path d="M225 82 V60" />
        <circle cx="225" cy="55" r="10" fill="#b87333" />
        <path d="M155 198 V220" />
        <circle cx="155" cy="225" r="10" fill="#b87333" />
        <path d="M225 198 V220" />
        <circle cx="225" cy="225" r="10" fill="#b87333" />
      </g>
      <path
        d="M140 82 h20 v-8 h20 v8 h20 v8 h8 v20 h8 v20 h-8 v20 h8 v20 h-8 v20 h-8 v8 h-20 v8 h-20 v-8 h-20 v-8 h-8 v-20 h-8 v-20 h8 v-20 h-8 v-20 h8 v-20 h8 z"
        fill="#161b22"
        stroke="#d4af37"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <g fill="#d4af37">
        <rect x="182" y="112" width="16" height="16" />
        <rect x="166" y="128" width="16" height="16" />
        <rect x="198" y="128" width="16" height="16" />
        <rect x="150" y="132" width="16" height="8" />
        <rect x="214" y="132" width="16" height="8" />
        <rect x="182" y="144" width="16" height="16" />
        <rect x="166" y="160" width="16" height="8" />
        <rect x="198" y="160" width="16" height="8" />
      </g>
      <rect x="182" y="128" width="16" height="16" fill="#38bdf8" />
    </svg>
  );
}
