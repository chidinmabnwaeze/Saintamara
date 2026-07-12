import type { IconName } from '../data/services'

const base = {
  width: 30,
  height: 30,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

function Companionship() {
  return (
    <svg {...base} aria-hidden="true">
      <circle cx="8.5" cy="8" r="2.4" />
      <circle cx="16" cy="9.5" r="2" />
      <path d="M4 19c0-2.5 2-4.3 4.5-4.3S13 16.5 13 19" />
      <path d="M13.5 18.6c.2-2 1.7-3.4 3.7-3.4 1.9 0 3.3 1.3 3.5 3.2" />
    </svg>
  )
}

function Household() {
  return (
    <svg {...base} aria-hidden="true">
      <path d="M4 11.2 12 5l8 6.2" />
      <path d="M6 10.2V19h12v-8.8" />
      <path d="M10 19v-4.2h4V19" />
    </svg>
  )
}

function Independence() {
  return (
    <svg {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="m14.8 9.2-2 4.4-4.4 2 2-4.4z" />
    </svg>
  )
}

function Respite() {
  return (
    <svg {...base} aria-hidden="true">
      <path d="M19 13.4A7 7 0 1 1 10.6 5a5.6 5.6 0 0 0 8.4 8.4z" />
    </svg>
  )
}

function Community() {
  return (
    <svg {...base} aria-hidden="true">
      <circle cx="6" cy="6.5" r="1.8" />
      <circle cx="18" cy="17.5" r="1.8" />
      <path d="M6 8.3v3.4a2 2 0 0 0 2 2h6a2 2 0 0 1 2 2v.1" />
      <path d="M14 6.5h4M16 4.5v4" />
    </svg>
  )
}

const map: Record<IconName, () => JSX.Element> = {
  companionship: Companionship,
  household: Household,
  independence: Independence,
  respite: Respite,
  community: Community,
}

export function ServiceIcon({ name }: { name: IconName }) {
  const Cmp = map[name]
  return <Cmp />
}
