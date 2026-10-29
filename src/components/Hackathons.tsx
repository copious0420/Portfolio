import { hackathon } from '../lib/data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Hackathons() {
  return (
    <section id="hackathons" className="relative scroll-mt-16 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading index="03" eyebrow="Under pressure" title="Hackathons" />

        <Reveal>
          <article className="card group relative grid overflow-hidden transition-colors duration-500 hover:border-mint/30 lg:grid-cols-5">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              style={{ background: 'radial-gradient(600px circle at 50% 0%, rgba(0,200,150,0.08), transparent 60%)' }}
            />

            <div className="relative flex flex-col justify-center border-b border-ink-700 bg-ink-950/60 p-6 sm:p-10 lg:col-span-2 lg:border-b-0 lg:border-r">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{hackathon.name}</span>
              <p className="mt-4 text-6xl font-bold tracking-tight text-mint sm:text-7xl">{hackathon.stat}</p>
              <p className="mt-4 text-lg text-zinc-200">{hackathon.statLine}</p>
            </div>

            <div className="relative flex flex-col p-6 sm:p-10 lg:col-span-3">
              <dl className="grid grid-cols-3 gap-4 border-b border-ink-700 pb-8">
                {hackathon.results.map((r) => (
                  <div key={r.label} className="flex flex-col-reverse">
                    <dt className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{r.label}</dt>
                    <dd className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{r.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-8 leading-relaxed text-zinc-300">{hackathon.note}</p>

              <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                {hackathon.stack.map((s) => (
                  <li key={s} className="rounded-full border border-ink-600 px-3 py-1 font-mono text-xs text-zinc-400">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
