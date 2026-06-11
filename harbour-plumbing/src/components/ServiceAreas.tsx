import { business, sectionCopy, serviceAreas } from '../data/data'
import Icon from './Icon'
import SectionHead from './SectionHead'

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-white py-12 md:py-20">
      <div className="max-w-300 mx-auto px-6">
        <SectionHead heading={sectionCopy.areas.heading} sub={sectionCopy.areas.sub} />
        <div className="grid md:grid-cols-3 gap-8">
          {serviceAreas.map((group, i) => (
            <div key={group.region} className="reveal" style={{ '--reveal-delay': `${i * 0.1}s` } as React.CSSProperties}>
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <Icon name="pin" className="w-5 h-5 text-orange" />
                {group.region}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.suburbs.map((suburb) => (
                  <a
                    key={suburb}
                    href={business.phoneHref}
                    className="rounded-full bg-offwhite border border-line px-4 py-1.5 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white hover:border-navy"
                  >
                    {suburb}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="reveal text-center text-muted mt-12">
          {sectionCopy.areas.note}{' '}
          <a href={business.phoneHref} className="font-bold text-orange-deep hover:underline">
            {business.phone} — {sectionCopy.areas.noteCta}
          </a>
        </p>
      </div>
    </section>
  )
}
