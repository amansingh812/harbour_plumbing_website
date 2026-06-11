import { sectionCopy, services } from '../data/data'
import Icon from './Icon'
import SectionHead from './SectionHead'

export default function Services() {
  return (
    <section id="services" className="bg-white py-12 md:py-20">
      <div className="max-w-300 mx-auto px-6">
        <SectionHead heading={sectionCopy.services.heading} sub={sectionCopy.services.sub} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="reveal group relative overflow-hidden flex flex-col rounded-xl bg-offwhite border border-line/60 p-8 shadow-rest transition-all duration-300 hover:shadow-lift hover:-translate-y-1"
              style={{ '--reveal-delay': `${(i % 3) * 0.1}s` } as React.CSSProperties}
            >
              <span className="absolute top-0 left-0 w-full h-1 bg-orange scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              <div className="w-14 h-14 rounded-lg bg-navy/5 text-navy flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                <Icon name={service.icon} className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted mb-6 grow">{service.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-line">
                <span className="text-xs font-medium text-muted bg-line/50 rounded px-2 py-1">
                  {service.priceHint}
                </span>
                <Icon name="arrow" className="w-6 h-6 text-orange transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
