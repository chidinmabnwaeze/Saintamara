import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'

const details = [
  {
    label: 'Call us',
    value: '+447448656686',
    href: 'tel:+447448656686',
    note: 'Monday to Saturday, 9am – 6pm',
  },
  {
    label: 'Email us',
    value: 'hello@saintamara.co.uk',
    href: 'mailto:hello@saintamara.co.uk',
    note: 'We reply within one working day',
  },
]

const field =
  'w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-muted/70 focus:border-navy/50 focus:outline-none focus:ring-2 focus:ring-navy/10'

export function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Enquiry from ${name || 'the website'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    )
    window.location.href = `mailto:hello@saintamara.co.uk?subject=${subject}&body=${body}`
  }

  return (
    <>
      <PageHeader
        eyebrow="Let’s talk"
        title="Tell us who you’re caring for."
        intro="A short, no-pressure conversation is the best place to start. Call or email us directly, or send a message below and we’ll get back to you."
        embedSrc="https://lottie.host/embed/4a28413e-3f9f-4c93-be3f-1ac8601b1972/5d3CiaA8FR.lottie"
      />

      <section className="bg-ivory">
        <div className="shell py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Details */}
            <div className="reveal flex flex-col gap-4">
              {details.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  className="group rounded-2xl bg-navy p-6 text-ivory ring-1 ring-navy/10 transition-colors hover:bg-navy-deep"
                >
                  <span className="text-xs font-700 uppercase tracking-label text-gold-soft">
                    {d.label}
                  </span>
                  <span className="mt-2 block font-display text-2xl font-600">{d.value}</span>
                  <span className="mt-1 block text-sm text-ivory/55">{d.note}</span>
                </a>
              ))}
              <div className="rounded-2xl bg-white p-6 ring-1 ring-navy/5">
                <span className="text-xs font-700 uppercase tracking-label text-gold">
                  Areas we cover
                </span>
                <p className="mt-2 text-navy/85">
                  We are in Scotland and the surrounding areas across the UK.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="reveal" style={{ ['--reveal-delay' as string]: '100ms' }}>
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white p-8 ring-1 ring-navy/5 sm:p-10"
              >
                <h2 className="font-display text-2xl font-600 text-navy">Send us a message</h2>
                <p className="mt-2 text-sm text-muted">
                  This opens your email app with the details filled in.
                </p>

                <div className="mt-6 grid gap-5">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-600 text-navy">
                      Your name
                    </label>
                    <input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className={field}
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm font-600 text-navy">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={field}
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="phone" className="text-sm font-600 text-navy">
                        Phone <span className="text-muted">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={field}
                        placeholder="+44 0000 000 000"
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-600 text-navy">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className={`${field} resize-y`}
                      placeholder="Tell us a little about the person you’re caring for and what would help."
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-1 justify-self-start rounded-full bg-navy px-7 py-3.5 text-[0.98rem] font-700 text-ivory transition-colors hover:bg-navy-deep"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
