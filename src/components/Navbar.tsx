import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/approach', label: 'Our approach' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'border-stone bg-ivory/90 backdrop-blur' : 'border-transparent bg-ivory'
      }`}
    >
      <nav className="shell flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo-mark.png" alt="" className="h-11 w-11 object-contain" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-600 tracking-tight text-navy">
              Saintamara
            </span>
            <span className="text-[0.62rem] font-700 uppercase tracking-label text-gold">
              Services Ltd
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[0.95rem] font-600 transition-colors hover:text-navy ${
                  isActive ? 'text-navy' : 'text-muted'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-navy px-5 py-2.5 text-[0.9rem] font-700 text-ivory transition-colors hover:bg-navy-deep"
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-stone bg-ivory md:hidden">
          <div className="shell flex flex-col gap-1 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-2 py-3 text-base font-600 hover:bg-stone/60 ${
                    isActive ? 'text-navy' : 'text-navy/80'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-navy px-5 py-3 text-center text-base font-700 text-ivory"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
