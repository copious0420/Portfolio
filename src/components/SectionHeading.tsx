import Reveal from './Reveal'

type Props = {
  index: string
  eyebrow: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ index, eyebrow, title, subtitle }: Props) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-mint">
        <span>{index}</span>
        <span className="h-px w-8 bg-mint/50" />
        <span>{eyebrow}</span>
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-xl text-zinc-400">{subtitle}</p>}
    </Reveal>
  )
}
