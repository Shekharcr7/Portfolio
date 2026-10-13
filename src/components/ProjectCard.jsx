import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight, Search, Bot, LayoutDashboard } from 'lucide-react'

const ACCENT = {
  retrieval: {
    text: 'text-retrieval',
    border: 'hover:border-retrieval/40',
    glow: 'group-hover:shadow-[0_0_0_1px_rgba(45,212,191,0.15)]',
    bg: 'bg-retrieval/10',
  },
  agent: {
    text: 'text-agent',
    border: 'hover:border-agent/40',
    glow: 'group-hover:shadow-[0_0_0_1px_rgba(245,185,90,0.15)]',
    bg: 'bg-agent/10',
  },
  mern: {
    text: 'text-mern',
    border: 'hover:border-mern/40',
    glow: 'group-hover:shadow-[0_0_0_1px_rgba(192,132,252,0.15)]',
    bg: 'bg-mern/10',
  },
}

function CategoryVisual({ project }) {
  const a = ACCENT[project.accent]

  // if (project.category === 'RAG') {
  //   return (
  //     <div className="grid grid-cols-4 gap-2">
  //       {project.evaluation.metrics.map((m) => (
  //         <div key={m.label} className="rounded-lg border border-border bg-surface-2/50 px-2.5 py-2.5 text-center">
  //           <div className={`font-mono text-sm font-medium ${a.text}`}>{m.value}</div>
  //           <div className="mt-1 text-[10px] text-ink-faint leading-tight">{m.label}</div>
  //         </div>
  //       ))}
  //     </div>
  //   )
  // }

  if (project.category === 'Multi-Agent') {
    return (
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {project.agents.map((agent, i) => (
          <div key={agent.name} className="flex items-center gap-1.5 shrink-0">
            <div className="flex items-center gap-1.5 rounded-lg border border-border bg-surface-2/50 px-2.5 py-2 whitespace-nowrap">
              <Bot size={13} className={a.text} />
              <span className="text-xs text-ink-muted">{agent.name.replace(' Agent', '')}</span>
            </div>
            {i < project.agents.length - 1 && <ArrowUpRight size={12} className="text-ink-faint rotate-90 shrink-0" />}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
      {project.architecture.nodes.map((n, i) => (
        <div key={n.id} className="flex items-center gap-1.5 shrink-0">
          <div className="flex items-center gap-1.5 rounded-lg border border-border bg-surface-2/50 px-2.5 py-2 whitespace-nowrap">
            <LayoutDashboard size={13} className={a.text} />
            <span className="text-xs text-ink-muted">{n.label}</span>
          </div>
          {i < project.architecture.nodes.length - 1 && <ArrowUpRight size={12} className="text-ink-faint rotate-90 shrink-0" />}
        </div>
      ))}
    </div>
  )
}

export default function ProjectCard({ project, onOpenDetails, index }) {
  const a = ACCENT[project.accent]

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group card-surface p-6 md:p-8 transition-all duration-300 ${a.border} ${a.glow}`}
    >
      <div className="flex items-center justify-between mb-5">
        <span className={`inline-flex items-center gap-1.5 rounded-full ${a.bg} ${a.text} px-3 py-1 text-xs font-mono`}>
          <Search size={11} />
          {project.category}
        </span>
        <span className="font-mono text-xs text-ink-faint">{project.date}</span>
      </div>

      <h3 className="font-display text-2xl font-semibold leading-snug">{project.title}</h3>
      <p className="mt-3 text-ink-muted leading-relaxed max-w-xl">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
        {project.technologies.length > 4 && (
          <span className="chip">+{project.technologies.length - 4}</span>
        )}
      </div>

      <div className="my-6 h-px bg-border" />

      <CategoryVisual project={project} />

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <button onClick={() => onOpenDetails(project, 'architecture')} className="btn-ghost">
          Architecture
        </button>
        {project.links.github && (
          <a href={project.links.github} target="_blank" rel="noreferrer" className="btn-ghost">
            <Github size={14} />
            GitHub
          </a>
        )}
        {project.links.demo ? (
          <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn-ghost">
            <ExternalLink size={14} />
            Demo
          </a>
        ) : (
          <span className="btn-ghost opacity-40 cursor-not-allowed" title="Demo link not added yet">
            <ExternalLink size={14} />
            Demo
          </span>
        )}
        <button
          onClick={() => onOpenDetails(project, 'overview')}
          className={`ml-auto text-sm font-medium ${a.text} inline-flex items-center gap-1`}
        >
          View Details
          <ArrowUpRight size={15} />
        </button>
      </div>
    </motion.article>
  )
}
