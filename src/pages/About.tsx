import { PageHeader } from '../components/PageHeader'
import { CTASection } from '../components/CTASection'
import { HandHelping , HandFist, Lightbulb} from 'lucide-react'

const pillars = [
  {
    icon: <HandHelping />,
    title: 'Supporting people',
    body: 'Practical, personal help with the parts of daily life that have become harder to manage alone — always at the pace the person sets.',
  },
  {
    icon: <HandFist />,
    title: 'Empowering potential',
    body: 'We prompt, encourage and stand alongside, rather than take over. The aim is always more confidence and more independence, not less.',
  },
  {
    icon: <Lightbulb />,
    title: 'Delivering solutions',
    body: 'Dependable, well-organised support that families can plan around, and that quietly makes the whole week easier to carry.',
  },
]

const whoWeSupport = [
  'Older adults who want to stay in their own home with a little help',
  'Adults living with disabilities, including learning disabilities, wanting community access',
  'People recently home from hospital who need settling-in support',
  'Family carers who need reliable respite and a break',
]

export function About() {
  return (
    <>
      <PageHeader
        eyebrow="Who we are"
        title="Support that begins with the person, not the task."
        intro="Saintamara Services Ltd is a UK-based provider of non-regulated independent living support, the everyday help that keeps life comfortable, sociable and independent."
        imgSrc="/micheile-henderson-PpZasS086os-unsplash.jpg"
      />

      <section className="bg-ivory">
        <div className="shell py-20 lg:py-24">
          <div className="reveal grid gap-10 lg:grid-cols-2 lg:gap-16">
            <p className="text-lg text-muted">
              We help older adults, people living with disabilities, and the
              families around them to keep everyday life running comfortably. That
              might mean company and conversation, a hand with the housework, help
              staying organised, or simply a familiar face who turns up when they
              say they will.
            </p>
            <p className="text-lg text-muted">
              Everything we do grows out of a simple idea, and it is the promise we
              put our name to:{' '}
              <span className="text-navy font-semibold">
                supporting people, empowering potential, delivering solutions.
              </span>{' '}
              We prompt and encourage rather than take over, so independence is
              protected, not replaced.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="reveal rounded-2xl bg-white p-7 ring-1 ring-navy/5"
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

      <section className="border-t border-stone bg-white">
        <div className="shell py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="reveal">
              <span className="label">Who we support</span>
              <h2 className="mt-5 max-w-sm font-display text-3xl font-500 leading-tight text-navy sm:text-4xl">
                People at different points in life, with one thing in common.
              </h2>
              <p className="mt-5 text-muted">
                A wish to stay independent, with the right support around them.
              </p>
            </div>
            <ul className="reveal grid gap-4 sm:grid-cols-2" style={{ ['--reveal-delay' as string]: '100ms' }}>
              {whoWeSupport.map((w) => (
                <li
                  key={w}
                  className="flex gap-3 rounded-2xl bg-ivory p-6 text-[0.98rem] text-navy/85 ring-1 ring-navy/5"
                >
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
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
