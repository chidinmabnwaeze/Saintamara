import { Link } from 'react-router-dom'
import { BrandArc } from '../components/BrandArc'

export function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <BrandArc className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 opacity-[0.07]" />
      <div className="shell flex flex-col items-start py-28 lg:py-36">
        <span className="label">Page not found</span>
        <h1 className="mt-5 font-display text-5xl font-500 text-navy sm:text-6xl">
          We couldn’t find that page.
        </h1>
        <p className="mt-6 max-w-md text-lg text-muted">
          The link may be out of date. Let’s get you back to somewhere useful.
        </p>
        <Link
          to="/"
          className="mt-9 rounded-full bg-navy px-7 py-3.5 text-[0.98rem] font-700 text-ivory transition-colors hover:bg-navy-deep"
        >
          Back to home
        </Link>
      </div>
    </section>
  )
}
