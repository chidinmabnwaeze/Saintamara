import { Link } from 'react-router-dom'
import { BrandArc } from './BrandArc'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory text-navy">
      <BrandArc className="pointer-events-none absolute -right-24 -top-24 h-[34rem] w-[34rem] opacity-[0.06]" />
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/age-cymru-dMhB7w99ju8-unsplash.jpg')",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ivory/75 via-ivory/65 to-ivory/60" />

      <div className="relative shell grid items-center gap-5 py-10 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <div className="reveal">

          <h1 className="mt-6 font-display text-[2rem] font-500 leading-[1.05] text-navy sm:text-5xl">
            Everyday support that helps people live well,
            {/* <br/> */}
             
            <span className="text-gold"> at home.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg text-navy/70">
            Saintamara Services provides non-regulated support across the UK. We offer
            companionship, a hand around the home, and a steady, familiar presence
            for the people you care about.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-gold px-7 py-3.5 text-[0.98rem] font-700 text-navy transition-colors hover:bg-gold-soft"
            >
              Arrange a conversation
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-navy/20 px-7 py-3.5 text-[0.98rem] font-700 text-navy transition-colors hover:border-white/50"
            >
              See how we help
            </Link>
          </div>

          <p className="mt-8 text-sm text-muted">
            Companionship · Household help · Wellbeing · Respite for family carers
          </p>
        </div>

        {/* <div className="reveal relative" style={{ ['--reveal-delay' as string]: '120ms' }}>
          <div className="relative mx-auto w-full overflow-hidden rounded-[1.75rem] sm:h-[28rem] lg:ml-auto lg:h-[32rem] lg:max-w-[40rem] lg:translate-x-6">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/centre-for-ageing-better-rQJ3xo-0WYE-unsplash.jpg')" }} />
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-navy/10" />
          </div>
          <span className="absolute -bottom-12 left-8 rounded-full bg-gold/10 px-4 py-2 text-xs font-700 uppercase tracking-label text-gold">
            Supporting people since day one
          </span>
        </div> */}
      </div>
    </section>
  )
}
