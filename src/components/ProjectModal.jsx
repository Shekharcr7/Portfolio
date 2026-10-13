import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'
import FlowDiagram from './FlowDiagram'

function Section({ num, title, children }) {
  return (
    <div className="py-8 border-b border-border last:border-0">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="font-mono text-xs text-signal">{num}</span>
        <h4 className="font-display text-lg font-semibold">{title}</h4>
      </div>
      {children}
    </div>
  )
}

export default function ProjectModal({ project, initialTab, onClose }) {
  const scrollRef = useRef(null)

  useEffect(() => {
    if (!project) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  useEffect(() => {
    if (project && initialTab === 'architecture' && scrollRef.current) {
      requestAnimationFrame(() => {
        const el = scrollRef.current.querySelector('[data-section="architecture"]')
        el?.scrollIntoView({ block: 'start' })
      })
    } else if (project && scrollRef.current) {
      scrollRef.current.scrollTop = 0
    }
  }, [project, initialTab])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative z-10 w-full sm:max-w-3xl max-h-[92vh] sm:max-h-[85vh] card-surface border-border-strong rounded-t-2xl sm:rounded-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-start justify-between gap-4 px-6 sm:px-8 pt-6 pb-5 border-b border-border shrink-0">
              <div>
                <span className="font-mono text-xs text-ink-faint">{project.category} · {project.date}</span>
                <h3 className="mt-1.5 font-display text-2xl font-semibold">{project.title}</h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close project details"
                className="shrink-0 p-2 rounded-full border border-border text-ink-muted hover:text-ink hover:border-border-strong transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div ref={scrollRef} className="overflow-y-auto px-6 sm:px-8">
              <Section num="01" title="Problem">
                <p className="text-ink-muted leading-relaxed">{project.problem}</p>
              </Section>

              <Section num="02" title="Solution">
                <p className="text-ink-muted leading-relaxed">{project.solution}</p>
              </Section>

              <div data-section="architecture">
                <Section num="03" title="Architecture">
                  <div className="card-surface bg-surface-2/40 p-5 overflow-x-auto">
                    <FlowDiagram nodes={project.architecture.nodes} accent={project.accent} />
                  </div>
                </Section>
              </div>

              <Section num="04" title="Technologies">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </Section>

              <Section num="05" title="Key Features">
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {project.features.map((f) => (
                    <li key={f} className="text-sm text-ink-muted leading-relaxed flex gap-2">
                      <span className="text-signal mt-1.5">·</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section num="06" title="Engineering Decisions">
                <div className="space-y-4">
                  {project.decisions.map((d) => (
                    <div key={d.title}>
                      <h5 className="text-sm font-medium text-ink mb-1">{d.title}</h5>
                      <p className="text-sm text-ink-faint leading-relaxed">{d.detail}</p>
                    </div>
                  ))}
                </div>
              </Section>

              {project.evaluation && (
                <Section num="07" title="Evaluation">
                  <p className="text-xs text-ink-faint mb-3 font-mono">{project.evaluation.note}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.evaluation.metrics.map((m) => (
                      <div key={m.label} className="rounded-lg border border-border bg-surface-2/50 px-3 py-3 text-center">
                        <div className="font-mono text-lg text-signal">{m.value}{m.unit}</div>
                        <div className="mt-1 text-[11px] text-ink-faint leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              <Section num="08" title="Challenges">
                <div className="space-y-4">
                  {project.challenges.map((c) => (
                    <div key={c.title}>
                      <h5 className="text-sm font-medium text-ink mb-1">{c.title}</h5>
                      <p className="text-sm text-ink-faint leading-relaxed">{c.detail}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section num="09" title="Results">
                <p className="text-sm text-ink-muted leading-relaxed italic">
                  "{project.tagline}"
                </p>
              </Section>

              <Section num="10" title="Links">
                <div className="flex flex-wrap gap-3 pb-2">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer" className="btn-secondary">
                      <Github size={15} />
                      GitHub
                    </a>
                  )}
                  {project.links.demo ? (
                    <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn-secondary">
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="btn-secondary opacity-40 cursor-not-allowed">
                      <ExternalLink size={15} />
                      Demo not deployed yet
                    </span>
                  )}
                </div>
              </Section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
