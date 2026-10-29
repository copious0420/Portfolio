import { competitionStats } from '../lib/data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Competitions() {
  return (
    <section id="competitions" className="relative scroll-mt-16 border-y border-ink-800 bg-ink-900/40 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading index="02" eyebrow="Track record" title="Competitions" subtitle="5 participated · 2 won" />

        <div className="grid grid-cols-2 gap-5">
          {competitionStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="card group h-full p-6 transition-all duration-500 hover:-translate-y-1 hover:border-mint/30 sm:p-10">
                <p className="text-6xl font-bold tracking-tight text-mint sm:text-7xl md:text-8xl">{stat.value}</p>
                <p className="mt-3 text-sm text-zinc-300 sm:text-base">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <p className="mt-10 max-w-2xl leading-relaxed text-zinc-400">
            I've entered hackathons and engineering challenges in robotics, drones and full-stack dev, and won two of
            them.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
