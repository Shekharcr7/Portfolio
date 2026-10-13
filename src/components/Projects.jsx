import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [active, setActive] = useState(null)
  const [initialTab, setInitialTab] = useState('overview')

  const openDetails = (project, tab = 'overview') => {
    setActive(project)
    setInitialTab(tab)
  }

  return (
    <section id="projects" className="section py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <span className="eyebrow">Featured Projects</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">
          Systems built to be evaluated, not just demoed.
        </h2>
        <p className="mt-4 text-ink-muted leading-relaxed">
          Three projects spanning retrieval, multi-agent orchestration and full-stack
          engineering. each with the architecture and reasoning behind it.
        </p>
      </motion.div>

      <div className="mt-14 flex flex-col gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} onOpenDetails={openDetails} />
        ))}
      </div>

      <ProjectModal project={active} initialTab={initialTab} onClose={() => setActive(null)} />
    </section>
  )
}
