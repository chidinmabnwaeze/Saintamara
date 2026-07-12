/**
 * Signature motif: an open circle cradled by a lower curve — a distilled echo
 * of the logo's "two figures held by a hand". Reused across the site.
 */
export function BrandArc({
  className = '',
  stroke = '#B4863B',
}: {
  className?: string
  stroke?: string
}) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden="true">
      <path
        d="M42 60 A72 72 0 1 1 158 60"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M40 128 C 62 168, 138 168, 160 128"
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="74" cy="78" r="6.5" stroke={stroke} strokeWidth="2" />
      <circle cx="126" cy="78" r="6.5" stroke={stroke} strokeWidth="2" />
    </svg>
  )
}

export function ArcDivider({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 24" className={className} fill="none" aria-hidden="true">
      <path d="M0 12 H96 M144 12 H240" stroke="#B4863B" strokeWidth="1.4" opacity="0.5" />
      <path
        d="M100 8 C108 20, 132 20, 140 8"
        stroke="#B4863B"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}
