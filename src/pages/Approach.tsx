import { PageHeader } from '../components/PageHeader'
import { CTASection } from '../components/CTASection'
import { Timer, HandHeart, HeartHandshake } from 'lucide-react'

const includes = [
  'Company, conversation and social contact',
  'Help around the home and with daily tasks',
  'Reminders, organisation and staying independent',
  'Getting out into the community',
  'Respite so family carers can rest',
]

const referOn = [
  'Personal care such as washing, dressing or toileting',
  'Administering or handling medication',
  'Nursing or other clinical tasks',
  'Anything requiring CQC-regulated activity',
]

const principles = [
  {
    icon: <Timer />,
    title: 'Consistency',
    body: 'Where possible we keep the same familiar people visiting, so trust has a chance to build.',
  },
  {
    icon: <HandHeart />,
    title: 'Honesty about scope',
    body: 'If something falls outside non-regulated support, we say so and help you find the right provider.',
  },
  {
    icon: <HeartHandshake />,
    title: 'Working together',
    body: 'We fit around family, GPs and any regulated care already in place, rather than duplicating it.',
  },
]

export function Approach() {
  return (
    <>
      <PageHeader
        eyebrow="Our approach"
        title={
          <>
            Clear about what we do ,<br className="hidden sm:block" /> and what we don’t.
          </>
        }
        intro="Saintamara provides non-regulated support. Being open about that from the first conversation is part of how we keep everyone safe and properly supported."
      imgSrc="/age-cymru-GStFfDrOygo-unsplash.jpg"
      />

      <section className="bg-ivory">
        <div className="shell py-20 lg:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <div className="reveal rounded-2xl bg-white p-8 ring-1 ring-navy/10">
              <h2 className="font-display text-2xl font-600 text-navy">Our support includes</h2>
              <ul className="mt-6 space-y-4">
                {includes.map((item) => (
                  <li key={item} className="flex gap-3 text-navy/85">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="mt-0.5 flex-none text-gold"
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="reveal rounded-2xl bg-navy p-8 text-ivory"
              style={{ ['--reveal-delay' as string]: '100ms' }}
            >
              <h2 className="font-display text-2xl font-600">
                We’ll point you to a regulated provider for
              </h2>
              <ul className="mt-6 space-y-4">
                {referOn.map((item) => (
                  <li key={item} className="flex gap-3 text-ivory/85">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="mt-0.5 flex-none text-gold-soft"
                      aria-hidden="true"
                    >
                      <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ivory/60">
                We’re glad to work alongside regulated care providers, GPs and families
                so that everything fits together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-stone bg-white">
        <div className="shell py-20 lg:py-24">
          <div className="reveal max-w-2xl">
            <span className="label">How we work</span>
            <h2 className="mt-5 font-display text-3xl font-500 leading-tight text-navy sm:text-4xl">
              A few things we hold ourselves to.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="reveal"
                style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
              >
                <div className="mb-4 p-4 flex h-12 w-12 items-center justify-center text-center rounded-full border border-gold bg-ivory " >
                  <p className='text-center'>{p.icon}</p>
                </div>
                <h3 className="font-display text-xl font-600 text-navy">{p.title}</h3>
                <p className="mt-3 text-[0.98rem] text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
