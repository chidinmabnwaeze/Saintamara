import { services } from '../data/services'
import { ServiceIcon } from './Icons'

export function ServicesList() {
  return (
    <div className="border-t border-navy/10">
      {services.map((service) => (
        <div
          key={service.id}
          id={service.id}
          className="reveal grid scroll-mt-28 gap-6 border-b border-navy/10 py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-12"
        >
          <div className="flex gap-5">
            <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-navy text-gold-soft">
              <ServiceIcon name={service.icon} />
            </span>
            <div>
              <h3 className="font-display text-2xl font-600 text-navy">{service.title}</h3>
              <p className="mt-2 max-w-xs text-[0.98rem] text-muted">{service.summary}</p>
            </div>
          </div>

          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 md:pt-1">
            {service.points.map((point) => (
              <li key={point} className="flex gap-3 text-[0.98rem] text-navy/80">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-1 flex-none text-gold"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12.5l4 4 10-10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
