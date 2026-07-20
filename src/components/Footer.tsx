import { Link } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/approach', label: 'Our approach' },
  { to: '/contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-stone bg-ivory">
      <div className="shell py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo-mark.png" alt="" className="h-10 w-10 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-600 text-navy">
                  Saintamara Services Ltd
                </span>
                <span className="text-[0.6rem] font-700 uppercase tracking-label text-gold">
                  Independent living support
                </span>
              </span>
            </Link>
            <p className="mt-5 text-sm text-muted">
              Supporting people. Empowering potential. Delivering solutions.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="text-xs font-700 uppercase tracking-label text-gold">Explore</span>
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-600 text-muted transition-colors hover:text-navy"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm text-muted">
            <span className="text-xs font-700 uppercase tracking-label text-gold">
              Get in touch
            </span>
            <a href="tel:+447448656686" className="hover:text-navy">
              +447448656686
            </a>
            <a href="mailto:hello@saintamara.co.uk" className="hover:text-navy">
              hello@saintamara.co.uk
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-stone pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Saintamara Services Ltd. All rights reserved.</p>
          <p>Non-regulated support · Registered in England &amp; Scotland · Company no. [+447448656686]</p>
        </div>
      </div>
    </footer>
  )
}
