import { processSteps, sectionCopy } from '../data/data'
import Icon from './Icon'
import SectionHead from './SectionHead'

const boxStyles: Record<string, string> = {
  navy: 'bg-navy text-white shadow-lift rotate-3',
  outline: 'bg-offwhite border-2 border-navy text-navy shadow-rest -rotate-3',
  orange: 'bg-orange text-orange-ink shadow-cta rotate-3',
}

const numStyles: Record<string, string> = {
  navy: 'bg-orange text-white',
  outline: 'bg-orange text-white',
  orange: 'bg-navy text-white',
}

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-300 mx-auto px-6">
        <SectionHead heading={sectionCopy.process.heading} sub={sectionCopy.process.sub} />
        <div className="relative grid md:grid-cols-3 gap-12 md:gap-8">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-line" />
          {processSteps.map((step, i) => (
            <div
              key={step.title}
              className="reveal relative z-10 text-center"
              style={{ '--reveal-delay': `${i * 0.15}s` } as React.CSSProperties}
            >
              <div
                className={`relative w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-transform duration-300 hover:rotate-0 ${boxStyles[step.variant]}`}
              >
                <Icon name={step.icon} className="w-10 h-10" />
                <span
                  className={`absolute -top-3 -right-3 w-8 h-8 rounded-full border-2 border-offwhite flex items-center justify-center text-sm font-bold font-sans ${numStyles[step.variant]}`}
                >
                  {i + 1}
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
