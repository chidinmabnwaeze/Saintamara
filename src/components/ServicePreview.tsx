import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { ServiceIcon } from './Icons'

export function ServicePreview() {
  return (
    <section className="bg-white">
      <div className="shell py-20 lg:py-28">
        <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="label">What we offer</span>
            <h2 className="mt-5 font-display text-4xl font-500 leading-tight text-navy sm:text-5xl">
              Five kinds of support, shaped around one person.
            </h2>
          </div>
          <Link
            to="/services"
            className="flex-none text-[0.95rem] font-700 text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
          >
            View all services
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className="reveal group flex flex-col rounded-2xl bg-ivory p-7 ring-1 ring-navy/5 transition-all hover:-translate-y-1 hover:ring-navy/15"
              style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold-soft">
                <ServiceIcon name={service.icon} />
              </span>
              <h3 className="mt-5 font-display text-xl font-600 text-navy">{service.title}</h3>
              <p className="mt-3 flex-1 text-[0.95rem] text-muted">{service.summary}</p>
              <span className="mt-5 text-sm font-700 text-gold group-hover:text-navy">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
