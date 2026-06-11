import { useEffect, useState } from 'react'
import { business, nav } from '../data/data'
import Icon from './Icon'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top trust bar */}
      <div className="fixed top-0 inset-x-0 z-60 h-9 flex items-center justify-center gap-1.5 bg-navy text-white text-[13px] font-medium tracking-wide whitespace-nowrap overflow-hidden px-3">
        <Icon name="bolt" className="w-4 h-4 text-orange" />
        {business.topBar}
      </div>

      {/* Sticky header */}
      <header
        className={`fixed top-9 inset-x-0 z-50 backdrop-blur-md border-b border-line-soft/30 transition-all duration-300 ${
          scrolled ? 'bg-offwhite/95 shadow-rest' : 'bg-offwhite/90'
        }`}
      >
        <div className="max-w-300 mx-auto px-6 h-18 flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-2.5 group" aria-label={`${business.name} home`}>
            <svg className="w-10 h-10 shrink-0 transition-transform duration-300 group-hover:scale-108" viewBox="0 0 40 40" aria-hidden="true">
              <circle cx="20" cy="20" r="19" className="fill-navy" />
              <path d="M20 8c5 5.4 8.8 10.2 8.8 14.3A8.8 8.8 0 1 1 11.2 22.3C11.2 18.2 15 13.4 20 8Z" className="fill-orange" />
              <path d="M20 28.5a4.5 4.5 0 0 0 4.5-4.5h-2.3a2.2 2.2 0 0 1-2.2 2.2v2.3Z" fill="#fff" />
            </svg>
            <span className="font-display text-xl font-bold text-navy max-sm:hidden">{business.name}</span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold tracking-wider text-muted whitespace-nowrap transition-colors hover:text-orange"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl bg-orange px-5 py-2.5 text-sm font-bold tracking-wider text-white whitespace-nowrap shadow-cta transition-all hover:bg-orange-deep hover:shadow-cta-lift hover:-translate-y-0.5"
            >
              <Icon name="phone" className="w-5 h-5" />
              Call Now — {business.phone}
            </a>
            <a
              href="#quote"
              className="inline-flex items-center rounded-xl border-2 border-navy px-5 py-2.5 text-sm font-bold tracking-wider text-navy whitespace-nowrap transition-all hover:bg-navy hover:text-white"
            >
              {nav.cta}
            </a>
          </div>

          <button
            className="md:hidden p-2 text-navy"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <Icon name="menu" className="w-7 h-7" />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <nav id="mobile-menu" className="md:hidden flex flex-col bg-offwhite border-t border-line py-2" aria-label="Mobile">
            {[...nav.links, { label: nav.cta, href: '#quote' }].map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="px-6 py-3.5 font-bold text-[15px] text-navy border-b border-line/60"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  )
}
