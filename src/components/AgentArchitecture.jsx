import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, User, Compass, Search, FileText, PenLine, ShieldCheck, FileCheck } from 'lucide-react'

const NODES = [
  { id: 'query', label: 'User Query', icon: User },
  { id: 'planner', label: 'Planner / Coordinator', icon: Compass },
  { id: 'search', label: 'Search Agent', icon: Search },
  { id: 'reader', label: 'Reader Agent', icon: FileText },
  { id: 'writer', label: 'Writer Agent', icon: PenLine },
  { id: 'critic', label: 'Critic Agent', icon: ShieldCheck },
  { id: 'report', label: 'Final Report', icon: FileCheck },
]

export default function AgentArchitecture() {
  const [running, setRunning] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)

  const run = () => {
    if (running) return
    setRunning(true)
    setActiveIndex(0)
    NODES.forEach((_, i) => {
      setTimeout(() => setActiveIndex(i), i * 550)
    })
    setTimeout(() => {
      setRunning(false)
      setActiveIndex(-1)
    }, NODES.length * 550 + 700)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-ink-faint">Hover or press play to watch a query move through each agent.</p>
        <button onClick={run} disabled={running} className="btn-secondary shrink-0 disabled:opacity-50">
          <Play size={14} />
          {running ? 'Running…' : 'Watch Workflow'}
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-stretch gap-2 md:gap-0">
        {NODES.map((node, i) => {
          const Icon = node.icon
          const isActive = activeIndex === i
          const isPast = running && activeIndex > i
          return (
            <div key={node.id} className="flex md:flex-1 items-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                animate={
                  isActive
                    ? { scale: 1.04, borderColor: 'rgba(245,185,90,0.6)' }
                    : { scale: 1, borderColor: 'rgba(255,255,255,0.08)' }
                }
                className={`relative flex-1 flex md:flex-col items-center gap-2 md:gap-3 rounded-xl border p-4 md:p-5 text-center bg-surface transition-colors ${
                  isActive ? 'bg-agent/10' : isPast ? 'bg-surface-2/60' : ''
                }`}
              >
                <div
                  className={`flex items-center justify-center h-9 w-9 rounded-full border ${
                    isActive ? 'border-agent text-agent' : 'border-border text-ink-muted'
                  }`}
                >
                  <Icon size={16} strokeWidth={1.75} />
                </div>
                <span className="text-xs md:text-sm font-medium text-ink">{node.label}</span>

                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute -top-2 -right-2 h-3 w-3 rounded-full bg-agent"
                    />
                  )}
                </AnimatePresence>
              </motion.div>

              {i < NODES.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-8 shrink-0">
                  <motion.div
                    className="h-px w-full bg-border-strong relative overflow-hidden"
                  >
                    {isPast && (
                      <motion.span
                        initial={{ left: '-20%' }}
                        animate={{ left: '120%' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-agent"
                      />
                    )}
                  </motion.div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
