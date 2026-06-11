import { faqs, sectionCopy } from '../data/data'
import Icon from './Icon'
import SectionHead from './SectionHead'

export default function Faq() {
  return (
    <section id="faq" className="py-12 md:py-20">
      <div className="max-w-300 mx-auto px-6">
        <SectionHead heading={sectionCopy.faq.heading} sub={sectionCopy.faq.sub} />
        <div className="reveal max-w-190 mx-auto grid gap-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl bg-white border border-line shadow-rest overflow-hidden">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 font-display text-[17px] font-semibold text-navy">
                {faq.question}
                <Icon name="plus" className="w-5.5 h-5.5 text-orange transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="px-6 pb-5 leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
