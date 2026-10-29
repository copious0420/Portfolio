import { projects } from '../lib/data'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-16 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title="Projects"
          subtitle="A few things I've built. Mostly backend work, plus one robot."
        />
        <div className="space-y-8 sm:space-y-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
