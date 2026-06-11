import { useState } from 'react'
import { business, quoteSection } from '../data/data'
import Icon from './Icon'

const fieldCls =
  'w-full rounded-lg border border-line-soft bg-white px-3.5 py-3 text-[15px] text-ink transition focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy disabled:opacity-60'

export default function QuoteForm() {
  const [sent, setSent] = useState(false)

  return (
    <section id="quote" className="relative overflow-hidden bg-navy text-navy-tint dot-grid py-12 md:py-20">
      <div className="relative z-10 max-w-300 mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="reveal">
          <h2 className="text-[28px] md:text-[32px] leading-10 font-semibold text-white mb-4">
            {quoteSection.heading}
          </h2>
          <p className="text-lg leading-7 mb-8">{quoteSection.copy}</p>
          <ul className="grid gap-4">
            {quoteSection.points.map((point) => (
              <li key={point} className="flex items-center gap-3 font-medium text-white">
                <Icon name="check" className="w-5.5 h-5.5 text-orange" />
                {point}
              </li>
            ))}
            <li className="flex items-center gap-3 font-medium text-white">
              <Icon name="check" className="w-5.5 h-5.5 text-orange" />
              Emergencies?{' '}
              <a href={business.phoneHref} className="font-bold text-orange hover:underline">
                Call {business.phone}
              </a>
            </li>
          </ul>
        </div>

        <form
          className="reveal rounded-2xl bg-offwhite p-7 md:p-10 shadow-2xl"
          style={{ '--reveal-delay': '.15s' } as React.CSSProperties}
          onSubmit={(e) => {
            e.preventDefault()
            if ((e.target as HTMLFormElement).checkValidity()) setSent(true)
          }}
        >
          <h3 className="text-2xl font-semibold mb-6">Request a Quote</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <label className="block">
              <span className="block text-[13px] font-bold text-navy mb-1.5">Full Name</span>
              <input className={fieldCls} name="name" type="text" autoComplete="name" placeholder="Jane Smith" required disabled={sent} />
            </label>
            <label className="block">
              <span className="block text-[13px] font-bold text-navy mb-1.5">Phone</span>
              <input className={fieldCls} name="phone" type="tel" autoComplete="tel" placeholder="0400 000 000" required disabled={sent} />
            </label>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <label className="block">
              <span className="block text-[13px] font-bold text-navy mb-1.5">Suburb</span>
              <input className={fieldCls} name="suburb" type="text" autoComplete="address-level2" placeholder="Bondi" required disabled={sent} />
            </label>
            <label className="block">
              <span className="block text-[13px] font-bold text-navy mb-1.5">Service Needed</span>
              <select className={fieldCls} name="service" required disabled={sent} defaultValue="">
                <option value="" disabled>
                  Select a service…
                </option>
                {quoteSection.serviceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>
          <label className="block mb-4">
            <span className="block text-[13px] font-bold text-navy mb-1.5">What's happening? (optional)</span>
            <textarea
              className={`${fieldCls} min-h-24 resize-y`}
              name="message"
              placeholder="e.g. Kitchen sink draining slowly for the past week…"
              disabled={sent}
            />
          </label>
          <button
            type="submit"
            disabled={sent}
            className="w-full rounded-xl bg-orange px-9 py-4 text-base font-bold tracking-wider text-white shadow-cta transition-all hover:bg-orange-deep hover:shadow-cta-lift hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-90"
          >
            {sent ? "Request Sent ✓ — We'll call you shortly" : 'Get My Free Quote'}
          </button>
          <p className="text-xs text-muted text-center mt-4">{quoteSection.finePrint}</p>
        </form>
      </div>
    </section>
  )
}
