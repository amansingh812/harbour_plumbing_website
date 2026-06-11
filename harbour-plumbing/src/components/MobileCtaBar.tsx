import { business } from '../data/data'
import Icon from './Icon'

export default function MobileCtaBar() {
  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-50 flex h-16 md:hidden shadow-[0_-4px_10px_rgba(15,43,70,0.08)]"
      aria-label="Quick actions"
    >
      <a
        href={business.phoneHref}
        className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-orange text-white text-[13px] font-bold tracking-wide active:opacity-90"
      >
        <Icon name="phone" className="w-5.5 h-5.5" />
        Call Now
      </a>
      <a
        href="#quote"
        className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-navy text-white text-[13px] font-bold tracking-wide active:opacity-90"
      >
        <Icon name="quote" className="w-5.5 h-5.5" />
        Get Quote
      </a>
    </nav>
  )
}
