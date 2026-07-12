import { Link } from 'react-router-dom'
import { BrandArc } from './BrandArc'

export function CTASection({
  heading = 'Tell us who you’re caring for.',
  body = 'A short, no-pressure conversation is the best place to start. We’ll listen, talk through what would help, and be honest about whether we’re the right fit.',
}: {
  heading?: string
  body?: string
}) {
  return (
    <section className="bg-ivory">
      <div className="shell py-20 lg:py-24">
        <div className="reveal relative flex flex-col items-start gap-8 overflow-hidden rounded-[2rem] bg-navy p-10 text-ivory sm:p-14 lg:flex-row lg:items-center lg:justify-between">
          <BrandArc
            className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 opacity-15"
            stroke="#C9A55C"
          />
          <div className="relative max-w-xl">
            <span className="text-[0.72rem] font-700 uppercase tracking-label text-gold-soft">
              Let’s talk
            </span>
            <h2 className="mt-4 font-display text-3xl font-500 leading-tight sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-4 text-ivory/75">{body}</p>
          </div>
          <Link
            to="/contact"
            className="relative flex-none rounded-full bg-gold px-7 py-3.5 text-[0.98rem] font-700 text-navy transition-colors hover:bg-gold-soft"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
