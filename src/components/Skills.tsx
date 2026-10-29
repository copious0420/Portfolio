import type { ComponentType, SVGProps } from 'react'
import { skillGroups } from '../lib/data'
import { cn } from '../lib/cn'
import { Code, Cpu, Database, Layers, Server } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const icons: Record<(typeof skillGroups)[number]['icon'], ComponentType<SVGProps<SVGSVGElement>>> = {
  code: Code,
  layers: Layers,
  database: Database,
  server: Server,
  cpu: Cpu,
}

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-16 border-y border-ink-800 bg-ink-900/40 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="05"
          eyebrow="Toolkit"
          title="Skills"
          subtitle="I'm mostly a backend person, but I'm happy working anywhere in the stack. Here's what I use."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon]
            return (
              <Reveal key={group.title} delay={i * 90} className={cn(skillGroups.length % 2 === 1 && i === skillGroups.length - 1 && 'sm:col-span-2')}>
                <div className="card group h-full p-6 transition-all duration-500 hover:-translate-y-1 hover:border-mint/30 sm:p-8">
                  <div className="flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-ink-600 bg-ink-850 text-mint transition-colors duration-500 group-hover:border-mint/40 group-hover:bg-mint/10">
                      <Icon />
                    </span>
                    <h3 className="text-lg font-medium text-white">{group.title}</h3>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-ink-700 bg-ink-950/60 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-mint/40 hover:text-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
