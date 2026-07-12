import { BrandArc } from './BrandArc'

export function PageHeader({
  eyebrow,
  title,
  intro,
  imgSrc,
  embedSrc,
}: {
  eyebrow: string
  title: React.ReactNode
  intro?: string
  imgSrc?: string
  embedSrc?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-stone bg-white">
      <BrandArc className="pointer-events-none absolute -right-20 -top-24 h-[26rem] w-[26rem] opacity-[0.06]" />
      <div className="shell relative grid gap-10 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(16rem,0.95fr)] lg:items-center lg:py-20">
        <div className="reveal max-w-3xl">
          <span className="label">{eyebrow}</span>
          <h1 className="mt-5 font-display text-[2.5rem] font-500 leading-[1.08] text-navy sm:text-6xl">
            {title}
          </h1>
          {intro && <p className="mt-6 max-w-2xl text-lg text-muted">{intro}</p>}
        </div>

        {(imgSrc || embedSrc) ? (
          <div className="reveal flex justify-center lg:justify-end">
            <div className="w-full h-full sm:w-72 sm:h-72 lg:w-[24rem] lg:h-[24rem] overflow-hidden rounded-full border border-stone bg-stone-100 shadow-[0_25px_70px_-30px_rgba(20,40,77,0.28)]">
              {embedSrc ? (
                <iframe
                  src={embedSrc}
                  title="Contact animation"
                  className="w-full h-full"
                  loading="lazy"
                  allow="autoplay; fullscreen"
                  style={{ border: '0' }}
                />
              ) : (
                <img
                  className="w-full h-full object-cover object-center"
                  src={imgSrc}
                  alt="section image"
                />
              )}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
