import { motion } from 'framer-motion'
import { ArrowRight, Download, CircleDot } from 'lucide-react'

const BADGES = ['Python', 'Machine Learning', 'GenAI', 'RAG', 'AI Agents', 'React', 'Node.js', 'MongoDB']

// Deterministic pseudo-random node layout so the network background
// is stable across renders without relying on external assets.
const NODES = Array.from({ length: 22 }).map((_, i) => {
  const seed = i * 137.5
  return {
    x: ((seed * 1.3) % 100),
    y: ((seed * 0.7 + i * 11) % 100),
  }
})

const EDGES = [
  [0, 3], [1, 4], [2, 6], [3, 7], [4, 8], [5, 9], [6, 10], [7, 11],
  [8, 12], [9, 13], [10, 14], [11, 15], [1, 16], [2, 17], [3, 18],
  [12, 19], [13, 20], [14, 21], [0, 5], [6, 15], [9, 18],
]

function NetworkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="w-full h-full opacity-[0.35]"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {EDGES.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
            stroke="#6c8cff"
            strokeWidth="0.08"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1.8, delay: i * 0.03, ease: 'easeOut' }}
          />
        ))}
        {NODES.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r="0.35" fill="#8fa5ff" />
        ))}
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(108,140,255,0.12),transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-grid-fade" />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <NetworkBackground />

      <div className="section relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-retrieval animate-pulse-dot" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-retrieval" />
          </span>
          <span className="text-sm text-ink-muted">
            Open to AI/ML & Software Engineering opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="max-w-3xl text-[2.6rem] leading-[1.08] sm:text-6xl sm:leading-[1.06] font-semibold"
        >
          AI Engineer building intelligent systems with Python, GenAI, RAG &amp; AI Agents.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 max-w-xl text-lg text-ink-muted leading-relaxed"
        >
          I build practical AI applications across Retrieval-Augmented Generation,
          multi-agent systems, Machine Learning and full-stack development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
          >
            Explore My Work
            <ArrowRight size={16} />
          </a>
          <a href="/Resume.pdf" download className="btn-secondary">
            <Download size={15} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 flex flex-wrap gap-2 max-w-2xl"
        >
         
          {BADGES.map((b) => (
            <span key={b} className="chip flex items-center gap-1.5">
              <CircleDot size={11} className="text-signal" />
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
