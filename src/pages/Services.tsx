import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { ServicesList } from '../components/ServicesList'
import { CTASection } from '../components/CTASection'

export function ServicesPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) {
      // let the page paint first
      const t = setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120)
      return () => clearTimeout(t)
    }
  }, [hash])

  return (
    <>
      <PageHeader
        eyebrow="What we offer"
        title="Our services"
        intro="Most people we work with draw on a few of these at once. We build the visits around what actually helps, and adjust as things change."
        imgSrc='/care-assure-Zx4ddAfk0Ck-unsplash.jpg'
      />

      <section className="bg-ivory">
        <div className="shell py-16 lg:py-20">
          <ServicesList />
          <p className="reveal mt-10 max-w-2xl text-muted text-center font-semibold mx-auto">
            Not sure which of these fits? That’s exactly what a first conversation is
            for. Tell us what’s happening and we’ll suggest a sensible starting point.
          </p>
        </div>
      </section>

      <CTASection heading="Let’s find the right mix of support." />
    </>
  )
}
