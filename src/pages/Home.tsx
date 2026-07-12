import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { ServicePreview } from '../components/ServicePreview'
import { CTASection } from '../components/CTASection'
import { ArcDivider } from '../components/BrandArc'

export function Home() {
  return (
    <>
      <Hero />

      {/* Intro teaser */}
      <section className="border-y border-stone bg-ivory">
        <div className="shell py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="reveal">
              <span className="label">Who we are</span>
              <h2 className="mt-5 max-w-sm font-display text-4xl font-500 leading-tight text-navy">
                Support that begins with the person, not the task.
              </h2>
              <ArcDivider className="mt-8 h-6 w-48" />
            </div>
            <div className="reveal" style={{ ['--reveal-delay' as string]: '100ms' }}>
              <p className="text-lg text-muted">
                Saintamara Services Ltd helps older adults, people living with
                disabilities, and the families around them to keep everyday life
                running comfortably, with company, encouragement and a reliable
                hand where it is needed. We prompt and stand alongside rather than
                take over, so the people we support stay in charge of their own days.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-block text-[0.95rem] font-700 text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
              >
                More about us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicePreview />

      {/* Approach teaser */}
      <section className="relative overflow-hidden bg-navy text-ivory">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 contrast-75 saturate-50"
          style={{
            backgroundImage: "url('/georg-arthur-pflueger-eO_JhqabBY0-unsplash.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/90" />
        <div className="relative z-10 shell py-20 lg:py-24">
          <div className="reveal grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <span className="text-[0.72rem] font-700 uppercase tracking-label text-gold-soft">
                Our approach
              </span>
              <h2 className="mt-5 font-display text-3xl font-500 leading-tight sm:text-4xl">
                Clear about what we do, and what we don’t.
              </h2>
              <p className="mt-5 max-w-xl text-ivory/75">
                We provide non-regulated support: companionship, practical help and
                encouragement. We don’t carry out personal or clinical care, and
                we’re always open about that from the first conversation.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <Link
                to="/approach"
                className="inline-block rounded-full border border-white/25 px-7 py-3.5 text-[0.98rem] font-700 text-ivory transition-colors hover:border-white/60"
              >
                How we work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
