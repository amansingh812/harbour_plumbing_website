type Props = { heading: string; sub: string }

export default function SectionHead({ heading, sub }: Props) {
  return (
    <div className="reveal text-center max-w-160 mx-auto mb-12 md:mb-16">
      <h2 className="text-[28px] md:text-[32px] leading-10 font-semibold tracking-tight mb-4">{heading}</h2>
      <p className="text-muted">{sub}</p>
    </div>
  )
}
