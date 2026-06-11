import { business, nav } from '../data/data'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy text-navy-tint">
      <div className="max-w-300 mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr] gap-8 py-12 md:py-20">
        <div>
          <p className="font-display text-[22px] font-bold text-peach mb-4">{business.name}</p>
          <p className="max-w-72">{business.footerBlurb}</p>
        </div>

        <div>
          <h4 className="font-sans text-[13px] font-bold tracking-widest uppercase text-white mb-4">Quick Links</h4>
          <ul className="grid gap-2.5">
            {[...nav.links, { label: 'Get a Quote', href: '#quote' }].map((link) => (
              <li key={link.href + link.label}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-[13px] font-bold tracking-widest uppercase text-white mb-4">Contact</h4>
          <ul className="grid gap-2.5">
            <li className="flex items-start gap-2.5">
              <Icon name="phone" className="w-5 h-5 mt-0.5" />
              <a href={business.phoneHref} className="transition-colors hover:text-white">
                {business.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon name="mail" className="w-5 h-5 mt-0.5" />
              <a href={`mailto:${business.email}`} className="transition-colors hover:text-white break-all">
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon name="clock" className="w-5 h-5 mt-0.5" />
              <span>
                {business.hours.emergency}
                <br />
                {business.hours.standard}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-[13px] font-bold tracking-widest uppercase text-white mb-4">Company Details</h4>
          <p className="leading-relaxed mb-6">
            ABN: {business.abn}
            <br />
            {business.licence}
            <br />
            {business.association}
          </p>
          <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 border border-white/20 px-3.5 py-2.5 text-[13px] font-medium text-white">
            <span className="font-bold text-gstar">G</span>
            {business.google.rating.split('/')[0]} ★ based on {business.google.reviewCount} reviews
          </div>
        </div>
      </div>

      <div className="border-t border-navy-tint/20">
        <div className="max-w-300 mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs">
          <p>
            © {business.copyrightYear} {business.name} All Rights Reserved. {business.licence}
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
