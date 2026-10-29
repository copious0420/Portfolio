import type { Project } from '../lib/data'
import { cn } from '../lib/cn'
import { ArrowUpRight, Check, Github } from './Icons'
import ProjectVisual from './ProjectVisual'
import Reveal from './Reveal'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1
  return (
    <Reveal>
      <article className="card group relative grid overflow-hidden transition-colors duration-500 hover:border-mint/30 lg:grid-cols-2">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{ background: 'radial-gradient(600px circle at 50% 0%, rgba(0,200,150,0.08), transparent 60%)' }}
        />

        <div
          className={cn(
            'relative h-64 border-ink-700 bg-ink-950/60 sm:h-80 lg:h-auto lg:min-h-[420px]',
            reversed ? 'border-b lg:order-2 lg:border-b-0 lg:border-l' : 'border-b lg:border-b-0 lg:border-r',
          )}
        >
          <ProjectVisual variant={project.variant} />
        </div>

        <div className="relative flex flex-col p-6 sm:p-10">
          <span className="font-mono text-xs text-zinc-500">0{index + 1}</span>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.name}</h3>
          <p className="mt-1.5 text-mint">{project.tagline}</p>
          <p className="mt-5 leading-relaxed text-zinc-400">{project.description}</p>

          <ul className="mt-6 space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-zinc-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                {h}
              </li>
            ))}
          </ul>

          <ul className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li key={s} className="rounded-full border border-ink-600 px-3 py-1 font-mono text-xs text-zinc-400">
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-5 pt-8">
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-200 transition-colors hover:text-mint">
                <Github className="h-4 w-4" /> Source
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-zinc-200 transition-colors hover:text-mint">
                Live demo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  )
}
