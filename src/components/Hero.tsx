import { principles, profile } from '../lib/data'
import { ArrowRight, Github } from './Icons'
import noise from '../assets/noise.svg'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute left-1/2 top-[30%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-mint/20 blur-[120px] sm:h-[680px] sm:w-[680px]" />
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: `url(${noise})` }} />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
      </div>

      <div className="container-x relative py-20">
        <div className="max-w-4xl">
          <h1
            className="animate-fade-up text-[clamp(3rem,11vw,8rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white"
            style={{ animationDelay: '100ms' }}
          >
            Nitin Singh<span className="text-mint">.</span>
          </h1>

          <p
            className="mt-6 animate-fade-up font-mono text-lg text-mint sm:text-xl"
            style={{ animationDelay: '220ms' }}
          >
            Vibe Coder
          </p>
          <p
            className="mt-2 animate-fade-up font-mono text-lg text-mint sm:text-xl"
            style={{ animationDelay: '220ms' }}
          >
            {profile.role}
            <span className="ml-1 inline-block h-5 w-2.5 translate-y-0.5 animate-blink bg-mint" />
          </p>
          <p
            className="mt-2 animate-fade-up font-mono text-lg text-mint sm:text-xl"
            style={{ animationDelay: '270ms' }}
          >
            Robotics , Embedded Systems
          </p>

          <p
            className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-zinc-400 sm:text-lg"
            style={{ animationDelay: '320ms' }}
          >
            {profile.bio}
          </p>

          <div
            className="mt-10 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: '440ms' }}
          >
            <a href="#projects" className="btn-primary group">
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
            <div className="mt-2 flex items-center gap-2 sm:ml-3 sm:mt-0">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full text-zinc-400 transition-colors hover:bg-ink-850 hover:text-mint">
                <Github />
              </a>
            </div>
          </div>
        </div>

        <dl
          className="mt-20 grid animate-fade-up grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 sm:grid-cols-2 lg:grid-cols-4"
          style={{ animationDelay: '600ms' }}
        >
          {principles.map((p) => (
            <div key={p.k} className="bg-ink-950/90 px-6 py-5 backdrop-blur">
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-mint">{p.k}</dt>
              <dd className="mt-1.5 text-sm text-zinc-300">{p.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
