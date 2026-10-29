import { cuebot } from '../lib/data'
import { Check } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Robotics() {
  return (
    <section id="robotics" className="relative scroll-mt-16 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="04"
          eyebrow="Hardware"
          title="Robotics"
          subtitle="I build robots too. Here's the main one."
        />

        <Reveal>
          <article className="card group relative grid overflow-hidden transition-colors duration-500 hover:border-mint/30 lg:grid-cols-5">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              style={{ background: 'radial-gradient(600px circle at 50% 0%, rgba(0,200,150,0.08), transparent 60%)' }}
            />

            <div className="relative flex flex-col p-6 sm:p-10 lg:col-span-3">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3 py-1 font-mono text-xs text-mint">
                Featured build
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{cuebot.name}</h3>
              <p className="mt-1.5 text-mint">{cuebot.tagline}</p>
              <p className="mt-5 leading-relaxed text-zinc-400">{cuebot.description}</p>

              <ul className="mt-6 space-y-2.5">
                {cuebot.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                    {h}
                  </li>
                ))}
              </ul>

              <ul className="mt-7 flex flex-wrap gap-2">
                {cuebot.stack.map((s) => (
                  <li key={s} className="rounded-full border border-ink-600 px-3 py-1 font-mono text-xs text-zinc-400">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex flex-col justify-between gap-8 border-t border-ink-700 bg-ink-950/60 p-6 sm:p-10 lg:col-span-2 lg:border-l lg:border-t-0">
              <dl className="space-y-5">
                {cuebot.specs.map((spec) => (
                  <div key={spec.k}>
                    <dt className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{spec.k}</dt>
                    <dd className="mt-1 text-zinc-200">{spec.v}</dd>
                  </div>
                ))}
              </dl>

              <div className="rounded-xl border border-mint/30 bg-mint/10 p-5">
                <p className="text-4xl font-bold tracking-tight text-mint">6 hrs</p>
                <p className="mt-1 text-sm text-zinc-300">
                  That was the final session. Build, test, fix, repeat until it worked.
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
