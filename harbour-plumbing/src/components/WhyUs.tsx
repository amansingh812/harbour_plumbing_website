import { sectionCopy, whyChooseUs } from '../data/data'
import Icon from './Icon'
import SectionHead from './SectionHead'

export default function WhyUs() {
  return (
    <section id="why-us" className="py-12 md:py-20">
      <div className="max-w-300 mx-auto px-6">
        <SectionHead heading={sectionCopy.whyUs.heading} sub={sectionCopy.whyUs.sub} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((point, i) => (
            <div
              key={point.title}
              className="reveal text-center rounded-2xl bg-white border border-line/60 px-5 py-8 shadow-rest transition-all duration-300 hover:shadow-lift hover:-translate-y-1"
              style={{ '--reveal-delay': `${i * 0.1}s` } as React.CSSProperties}
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-orange/10 text-orange flex items-center justify-center">
                <Icon name={point.icon} className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
              <p className="text-sm leading-snug text-muted">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
