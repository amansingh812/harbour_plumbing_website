import { business } from '../data/data'
import Icon from './Icon'

function highlightTagline(tagline: string, accent: string) {
  const i = tagline.indexOf(accent)
  if (i === -1) return tagline
  return (
    <>
      {tagline.slice(0, i)}
      <span className="text-orange">{accent}</span>
      {tagline.slice(i + accent.length)}
    </>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-navy dot-grid py-12 md:py-20">
      <div className="relative z-10 max-w-300 mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-14 items-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full bg-line/60 px-3.5 py-1.5 text-sm font-medium text-navy mb-7">
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
            {business.availabilityBadge}
          </span>

          <h1 className="text-[32px] leading-10 md:text-5xl md:leading-14 font-bold tracking-tight mb-6">
            {highlightTagline(business.tagline, business.taglineAccent)}
          </h1>

          <p className="text-lg leading-7 text-muted max-w-lg mb-6">{business.subheading}</p>

          <div className="flex flex-wrap gap-6 py-2 pb-4 opacity-75 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">
            {business.trustBadges.map((badge) => (
              <span key={badge.label} className="flex items-center gap-2 text-sm font-bold text-navy">
                <Icon name={badge.icon} className="w-5 h-5 text-orange" />
                {badge.label}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange px-9 py-4 text-base font-bold tracking-wider text-white shadow-cta transition-all hover:bg-orange-deep hover:shadow-cta-lift hover:-translate-y-1"
            >
              <Icon name="phone" className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-xl border-2 border-navy px-9 py-4 text-base font-bold tracking-wider text-navy transition-all hover:bg-navy hover:text-white"
            >
              Request a Quote
            </a>
          </div>
        </div>

        <div className="relative reveal" style={{ '--reveal-delay': '.15s' } as React.CSSProperties}>
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-orange/10 blur-2xl pointer-events-none" />
          <div className="relative z-10 overflow-hidden rounded-2xl bg-line shadow-lift aspect-4/5 md:aspect-square">
            <img
              src={business.heroImage.src}
              alt={business.heroImage.alt}
              width={600}
              height={600}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 md:-bottom-6 md:-left-6 z-20 flex items-center gap-4 rounded-xl bg-offwhite border border-line px-5 py-4 shadow-lift animate-floaty">
            <div className="w-12 h-12 rounded-full bg-orange/10 text-orange flex items-center justify-center">
              <Icon name="timer" />
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-widest uppercase text-muted">
                {business.responseTime.label}
              </p>
              <p className="font-display text-2xl font-bold text-navy">{business.responseTime.value}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
